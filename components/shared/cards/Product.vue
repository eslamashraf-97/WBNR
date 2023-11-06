<script setup>
import {
  apiSaveProductUrl,
  apiRemoveProductUrl,
  apiAddToCartUrl,
} from "@/server";

import { productStatus } from "@/constants";

const { setSavedProductsCount, savedProductsCount } = useSavedProducts();

const { cartLength, setCartLength } = useCartLength();

const props = defineProps({
  details: {
    type: Object,
  },
});

// favourit products options

const saveProductIsLoading = ref(false);

const savedProduct = ref(props.details.is_favorite);

// add product to favourit
const { fire: saveProductFire } = useApi({
  url: () => apiSaveProductUrl + "/" + props.details.id,
  requestOptions: {
    method: "POST",
  },
});

async function saveProduct() {
  saveProductIsLoading.value = true;
  const { status } = await saveProductFire();
  console.log(status);
  if (status.value === "success") {
    savedProduct.value = true;
    setSavedProductsCount(savedProductsCount.value + 1);
  }
  saveProductIsLoading.value = false;
}

// remove product from favourite
const { fire: removeProductFire } = useApi({
  url: () => apiRemoveProductUrl + "/" + props.details.id,
  requestOptions: {
    method: "DELETE",
  },
});

async function removeProduct() {
  saveProductIsLoading.value = true;
  const { status } = await removeProductFire();
  console.log(status.value);
  if (status.value === "success") {
    savedProduct.value = false;
    setSavedProductsCount(savedProductsCount.value - 1);
  }
  saveProductIsLoading.value = false;
}

// cart products options
const addProductToCartIsLoading = ref(false);

// add product to favourit
const { fire: addProductToCartFire } = useApi({
  url: () => apiAddToCartUrl,
  requestOptions: {
    method: "POST",
  },
});

async function addProductToCart() {
  addProductToCartIsLoading.value = true;
  const { status } = await addProductToCartFire({
    product_id: props.details.id,
    quantity: 1,
    final_price: props.details.price,
  });
  if (status.value === "success") {
    setCartLength(cartLength + 1);
  }
  addProductToCartIsLoading.value = false;
}

const productStatuses = computed(() => {
  const percentage =
    (props.details.orderConfirmedPercentage +
      props.details.orderCompletedPercentage) /
    2;

  return productStatus.find((item) => {
    return (
      item.from <= percentage && (item.to >= percentage || item.to == undefined)
    );
  }).color;
});
</script>

<template>
  <div
    v-if="details"
    class="min-w-96 border border-gray-200 shadow-product rounded-md overflow-hidden"
  >
    <img :src="details.featured_image" class="object-cover w-full h-80" />

    <div class="py-9 px-7 relative">
      <div
        class="w-36 bg-white py-3 flex justify-center text-primary-300 text-2xl rounded-xs absolute gap-2 top-[-25px] left-5"
      >
        <Icon
          name="fluent:bookmark-20-regular"
          class="cursor-pointer"
          @click="saveProduct"
          v-if="!savedProduct && !saveProductIsLoading"
        />

        <Icon
          name="fluent:bookmark-20-filled"
          class="cursor-pointer"
          @click="removeProduct"
          v-else-if="savedProduct && !saveProductIsLoading"
        />
        <Icon name="icomoon-free:spinner2" class="loading-spinner" v-else />
        <Icon name="ci:line-l" class="text-gray-200" />
        <Icon
          name="la:cart-arrow-down"
          class="cursor-pointer"
          @click="addProductToCart"
          v-if="!addProductToCartIsLoading"
        />
        <Icon name="icomoon-free:spinner2" class="loading-spinner" v-else />
      </div>
      <span
        class="w-[1.5rem] h-[.25rem] rounded-[3rem] block mb-2"
        :style="{ background: productStatuses }"
      ></span>
      <h1 class="text-[28px] leading-10">{{ details.title }}</h1>
      <div class="flex justify-between my-9">
        <div>
          <h5 class="text-gray-400 text-base font-normal mb-1">
            اقل سعر للبيع
          </h5>
          <h3 class="text-2xl">{{ details.price }}</h3>
        </div>
        <div>
          <h5 class="text-gray-400 text-base font-normal mb-1">
            اقل سعر للربح
          </h5>
          <h3 class="text-2xl">{{ details.minCommission }}</h3>
        </div>
      </div>
      <nuxt-link
        :to="`/product/${details.id}`"
        class="text-primary-300 flex gap-1 font-semibold items-center text-lg"
      >
        <span>تفاصيل المنتج</span>
        <Icon name="iconamoon:arrow-left-2-duotone" class="text-2xl" />
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped></style>
