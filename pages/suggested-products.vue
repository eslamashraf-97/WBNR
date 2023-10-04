<script setup>
import { api_suggested_products } from "@/server";

const isLoading = ref(true);

const productData = ref(null);

(function getProducts() {
  api_suggested_products()
    .then((res) => {
      productData.value = res.data.data;
    })
    .finally(() => {
      isLoading.value = false;
    });
})();
</script>

<template>
  <div class="bg-primary">
    <p class="text-gray-400 text-2xl mb-9">المنتجات / منتجات مرشحة لك</p>
    <shared-title title="منتجات مرشحة لك" />

    <!-- filter box -->
    <shared-cards-filter>
      <template v-slot:right>تحديد الفلتر</template>
      <template v-slot:left>تحديد</template>
    </shared-cards-filter>

    <div v-if="isLoading"></div>

    <div
      v-else-if="productData && productData.length"
      class="mt-24 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9 mb-40 grid-flow-row-dense"
    >
      <lazy-shared-cards-product
        v-for="(product, key) in productData"
        :key="key"
        :details="product"
      />
    </div>
  </div>
</template>

<style scoped></style>
