<script setup>
import {
  apiGetCartUrl,
  apiGetCartLengthUrl,
  apiDeleteCartItem,
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

const { data: cartDataLength } = await useRequest({
  url: () => apiGetCartLengthUrl,
  requetOptions: {
    query: { country_id: selectedCountry.value?.id },
    onResponse: (response) => {
      setCartLength(response.response?._data?.data.cart_length);
    },
  },
});

function increaseQuantity(index) {
  cartData.value.data.cartItems[index].quantity++;
}

function decreaseQuantity(index) {
  cartData.value.data.cartItems[index].quantity > 1
    ? cartData.value.data.cartItems[index].quantity--
    : null;
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
</script>

<template>
  <section class="bg-primary">
    <shared-title title="العربة" />
    <div v-if="pending">
      <shared-loders-loading />
    </div>
    <div class="flex justify-start gap-24" v-else>
      <cart-aside
        :details="{
          ...cartData.data,
          itemsInCart: cartDataLength.data.cart_length || cartLength,
        }"
      />
      <div class="flex-1">
        <cart-products
          :products="cartData.data.cartItems"
          @decreaseQuantity="decreaseQuantity"
          @increaseQuantity="increaseQuantity"
          @deleteCartItem="deleteCartItem"
        />
      </div>
    </div>
  </section>
</template>
