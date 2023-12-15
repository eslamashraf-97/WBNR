<script setup>
import { apiGetProductsUrl } from "@/server";

import { productsStatuses, productsActives } from "@/constants";

const { page, changePage } = usePagination();

const { selectedCountry } = useCountries();

const route = useRoute();

const titleQuery = ref(route.query.title);

const category_id = ref(route.query.category_id);

const { data: productData, pending } = await useRequest({
  url: () => apiGetProductsUrl,
  requetOptions: {
    query: {
      page: page,
      country_id: selectedCountry.value?.id,
      take: 8,
      title: titleQuery,
      category_id: category_id,
    },
    watch: [page],
  },
});

watch(
  () => route.query,
  () => {
    console.log("changed", route);
    titleQuery.value = route.query.title;
    category_id.value = route.query.category_id;
  },
);
</script>

<template>
  <div class="bg-primary">
    <p class="text-gray-400 text-2xl mb-9">
      المنتجات / {{ route.query.title || route.query.category_title }}
    </p>
    <shared-title title="كل المنتجات" />

    <div
      class="mt-24 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9 mb-40 grid-flow-row-dense"
      v-if="!pending && productData?.data.length"
    >
      <lazy-shared-cards-product
        v-for="(product, key) in productData?.data"
        :key="key"
        :details="product"
      />
    </div>

    <shared-no-results v-else-if="!pending && !productData?.data.length" />

    <div v-else class="w-full flex items-center justify-center my-10">
      <shared-loders-loading />
    </div>

    <shared-pagination
      :meta="productData?.meta"
      :page="page"
      @changePage="changePage"
    />
  </div>
</template>

<style scoped></style>
