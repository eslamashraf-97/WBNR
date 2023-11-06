<script setup>
import {
  apiGetCateoriesUrl,
  apiGetProductsMostSellUrl,
  apiGetProductsUrl,
  apiGetProductsNewArrivalsUrl,
} from "@/server";

const { selectedCountry } = useCountries();

// get categories
const { data: categoriesData } = await useRequest({
  url: apiGetCateoriesUrl,
});

// get products new arrivals
const { data: productsNewArrivals } = await useRequest({
  url: () => apiGetProductsNewArrivalsUrl,
  requetOptions: {
    query: {
      country_id: selectedCountry.value?.id,
    },
    watch: [selectedCountry],
  },
});

// products most selles
const { data: productsMostSell } = await useRequest({
  url: () => apiGetProductsMostSellUrl,
  requetOptions: {
    query: {
      country_id: selectedCountry.value?.id,
    },
    watch: [selectedCountry],
  },
});

// products
const { data: products } = await useRequest({
  url: () => apiGetProductsUrl,
  requetOptions: {
    query: {
      country_id: selectedCountry.value?.id,
    },
    watch: [selectedCountry],
  },
});
</script>

<template>
  <div class="bg-primary">
    <!-- category -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-40"
      v-if="categoriesData?.data && categoriesData.data.length"
    >
      <lazy-shared-cards-category
        v-for="category in categoriesData.data"
        :key="category?.id"
        :details="category"
      />
    </div>

    <!-- new arrival -->
    <template v-if="productsNewArrivals.data.length">
      <shared-title title="وصل حديثا" url="/suggested-products" />
      <div class="mb-40">
        <shared-product-swiper>
          <swiper-slide
            v-for="(product, key) in productsNewArrivals.data"
            :key="key"
          >
            <lazy-shared-cards-product :details="product" />
          </swiper-slide>
        </shared-product-swiper>
      </div>
    </template>

    <!-- more buy -->
    <template v-if="productsMostSell.data.length">
      <shared-title title="الأكثر مبيعا" url="/suggested-products" />
      <div class="mb-40">
        <shared-product-swiper>
          <swiper-slide
            v-for="(product, key) in productsMostSell.data"
            :key="key"
          >
            <lazy-shared-cards-product :details="product" />
          </swiper-slide>
        </shared-product-swiper>
      </div>
    </template>

    <!-- All Products -->
    <template v-if="products.data.length">
      <shared-title title="كل المنتجات" url="/suggested-products" />
      <div class="">
        <shared-product-swiper>
          <swiper-slide v-for="(product, key) in products.data" :key="key">
            <lazy-shared-cards-product :details="product" />
          </swiper-slide>
        </shared-product-swiper>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
