<script setup>
import {
  apiGetCartUrl,
  apiGetCartLengthUrl,
  apiDeleteCartItem,
  apiAddToCartUrl,
  apiDeleteCartUrl,
} from "@/server";

const { selectedCountry } = useCountries();

const { setCartLength, cartLength } = useCartLength();

const {
  data: cartData,
  refresh,
  pending,
} = await useRequest({
  url: () => apiGetCartUrl,
  requetOptions: {
    query: { country_id: selectedCountry.value?.id },
  },
});

const { data: cartDataLength, refresh: cartDataLengthRefresh } =
  await useRequest({
    url: () => apiGetCartLengthUrl,
    requetOptions: {
      query: { country_id: selectedCountry.value?.id },
      onResponse: (response) => {
        setCartLength(response.response?._data?.data.cart_length);
      },
    },
  });

const { fire } = useApi({
  url: apiAddToCartUrl,
  requestOptions: {
    method: "post",
    onResponse: (response) => {
      if (response.response.ok) {
        refresh();
        cartDataLengthRefresh();
      }
    },
  },
});

const updateCartPending = ref(false);

async function updateCart(data) {
  updateCartPending.value = true;
  await fire(data);
  updateCartPending.value = false;
}

function increaseQuantity(data) {
  const payload = {
    product_id: data.product?.id,
    quantity: data.quantity + 1,
    final_price: data.price,
  };
  updateCart(payload);
}

function decreaseQuantity(data) {
  if (data.quantity > 1) {
    const payload = {
      product_id: data.product.id,
      quantity: data.quantity - 1,
      final_price: data.price,
    };
    updateCart(payload);
  }
}

let timer;

function changeQuantity(qty, data) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (qty >= 1) {
      const payload = {
        product_id: data.product.id,
        quantity: qty,
        final_price: data.price,
      };
      updateCart(payload);
    }
  }, 300);
}

function changePrice(price, data) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (price) {
      const payload = {
        product_id: data.product.id,
        quantity: data.quantity,
        final_price: price,
      };
      updateCart(payload);
    }
  }, 300);
}

const isLoading = ref(false);

async function deleteCartItem(id) {
  isLoading.value = true;
  await useRequest({
    url: apiDeleteCartItem + "/" + id,
    requetOptions: {
      method: "delete",
      onResponse: () => {
        refresh();
      },
    },
  });
  isLoading.value = false;
}

const clearCartIsPending = ref(false);

const { fire: clearCartFire } = useApi({
  url: apiDeleteCartUrl + "/" + cartData.value.data.id,
  requestOptions: {
    method: "delete",
    onResponse: (response) => {
      console.log(response);
      if (response.response.ok) {
        refresh();
        cartDataLengthRefresh();
      }
    },
  },
});

async function clearCart() {
  clearCartIsPending.value = true;
  await clearCartFire();
  clearCartIsPending.value = false;
}
</script>

<template>
  <section class="bg-primary">
    <shared-title title="العربة" />
    <div
      v-if="pending || updateCartPending"
      class="flex items-center justify-center"
    >
      <shared-loders-loading />
    </div>
    <div class="flex flex-col 2xl:flex-row justify-start gap-24" v-else>
      <cart-aside
        :details="{
          ...cartData.data,
          itemsInCart: cartDataLength.data.cart_length || cartLength,
        }"
      />
      <div class="w-full">
        <cart-products
          :products="cartData.data.cartItems"
          @decreaseQuantity="decreaseQuantity"
          @increaseQuantity="increaseQuantity"
          @deleteCartItem="deleteCartItem"
          @changeQuantity="changeQuantity"
          @changePrice="changePrice"
          @clearCart="clearCart"
          :clearCartIsPending="clearCartIsPending"
        />
      </div>
    </div>
  </section>
</template>
