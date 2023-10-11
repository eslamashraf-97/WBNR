<script setup>
import { getSuggestedProductsUrl } from "@/server";

const route = useRoute();

const { data: productData, refresh } = await useRequest({
  url: () => getSuggestedProductsUrl,
  requetOptions: {
    query: { page: route.query.page },
    watch: [route.query],
  },
});

onBeforeRouteUpdate(() => {
  console.log("hi");
  refresh();
});
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

    <div
      class="mt-24 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9 mb-40 grid-flow-row-dense"
    >
      <lazy-shared-cards-product
        v-for="(product, key) in productData?.data"
        :key="key"
        :details="product"
      />
    </div>

    <shared-pagination :meta="productData?.meta" />
  </div>
</template>

<style scoped></style>
