<script setup>
import {
  apiGetCateoriesUrl,
  apiGetProductsMostSellUrl,
  apiGetProductsUrl,
  apiGetProductsNewArrivalsUrl,
} from "@/server";
// get categories
const { data: categoriesData } = await useRequest({
  url: apiGetCateoriesUrl,
});

// get products new arrivals
const { data: productsNewArrivals } = await useRequest({
  url: apiGetProductsNewArrivalsUrl,
});

// products most selles
const { data: productsMostSell } = await useRequest({
  url: apiGetProductsMostSellUrl,
});

// products
const { data: products } = await useRequest({
  url: apiGetProductsUrl,
});
</script>

<template>
  <div class="bg-primary">
    <!-- category -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-9 mb-40"
      v-if="categoriesData?.data && categoriesData.data.length"
    >
      <lazy-shared-cards-category
        v-for="category in categoriesData.data"
        :key="category.id"
        :details="category"
      />
    </div>

    <!-- new arrival -->
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

    <!-- more buy -->
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

    <!-- All Products -->
    <shared-title title="كل المنتجات" url="/suggested-products" />
    <div class="">
      <shared-product-swiper>
        <swiper-slide v-for="(product, key) in products.data" :key="key">
          <lazy-shared-cards-product :details="product" />
        </swiper-slide>
      </shared-product-swiper>
    </div>
  </div>
</template>

<style scoped></style>
