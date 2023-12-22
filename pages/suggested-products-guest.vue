<script setup>
import { apiGetSuggestedProductsUrl } from "@/server";

import { productsStatuses, productsActives } from "@/constants";

definePageMeta({
  layout: "guest",
});

const { page, changePage } = usePagination();

const { selectedCountry } = useCountries();

const route = useRoute();

const orderBy = ref(route.query.orderBy);

const productPerformance = ref(route.query.performance);

const lowestPriceForSale = ref(route.query.lowest_price_for_sale);

const mostPriceForSale = ref(route.query.most_price_for_sale);

const lowestCommission = ref(route.query.lowest_commission);

const mostCommission = ref(route.query.most_commission);

const { data: productData, pending } = await useRequest({
  url: () => apiGetSuggestedProductsUrl,
  requetOptions: {
    query: {
      page: page,
      country_id: selectedCountry.value?.id,
      orderBy: orderBy,
      performance: productPerformance,
      lowest_price_for_sale: lowestPriceForSale,
      most_price_for_sale: mostPriceForSale,
      lowest_commission: lowestCommission,
      most_commission: mostCommission,
      take: 8,
    },
    watch: [
      page,
      orderBy,
      productPerformance,
      lowestPriceForSale,
      mostPriceForSale,
      lowestCommission,
      mostCommission,
    ],
  },
});

function getOrderByValue(value) {
  if (orderBy.value) {
    return productsStatuses.find((item) => item.value === value).title;
  }
  return productsStatuses[0].title;
}

function setOrderBy(data) {
  orderBy.value = data.value;
  navigateTo({
    path: "/suggested-products",
    query: {
      ...route.query,
      orderBy: data.value,
    },
  });
}

function getProductPerformanceValue(value) {
  if (productPerformance.value) {
    return productsActives.find((item) => item.value === value);
  }
  return productsActives[0];
}

function setProductPerformance(data) {
  productPerformance.value = data.value;
  navigateTo({
    path: "/suggested-products",
    query: {
      ...route.query,
      performance: data.value,
    },
  });
}

let timeout;

const timer = 600;

function handleLowestPriceForSaleInputValue(e) {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    lowestPriceForSale.value = e.target.value;
    navigateTo({
      path: "/suggested-products",
      query: {
        ...route.query,
        lowest_price_for_sale: e.target.value,
      },
    });
  }, timer);
}

function handleMostPriceForSaleInputValue(e) {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    mostPriceForSale.value = e.target.value;
    navigateTo({
      path: "/suggested-products",
      query: {
        ...route.query,
        most_price_for_sale: e.target.value,
      },
    });
  }, timer);
}

function handleLowestCommissionInputValue(e) {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    lowestCommission.value = e.target.value;
    navigateTo({
      path: "/suggested-products",
      query: {
        ...route.query,
        lowest_commission: e.target.value,
      },
    });
  }, timer);
}

function handleMostCommissionInputValue(e) {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    mostCommission.value = e.target.value;
    navigateTo({
      path: "/suggested-products",
      query: {
        ...route.query,
        most_commission: e.target.value,
      },
    });
  }, timer);
}
</script>

<template>
  <div class="bg-primary">
    <p class="text-gray-400 text-2xl mb-9">المنتجات / منتجات مرشحة لك</p>
    <shared-title title="منتجات مرشحة لك" />
    <!-- filter box -->
    <shared-cards-filter class="!items-start 2xl:items-center flex-wrap gap-9">
      <template v-slot:right>
        <div class="flex flex-wrap items-center gap-9">
          <div class="flex flex-wrap items-center gap-4">
            <span class="text-gray-500 text-2xl">اداء المنتج:</span>
            <shared-menu
              :items="productsActives"
              :button-props="{
                class:
                  'leading-normal px-8 py-[.38rem] min-w-0 text-xl border-0 bg-transparent hover:bg-transparent',
              }"
              :menu-props="{
                class: 'max-w-[9.25rem] px-8',
              }"
            >
              <template #label>
                <div type="button" class="flex items-center gap-[19px]">
                  <Icon name="iconamoon:arrow-down-2-duotone" />
                  <span
                    v-if="getProductPerformanceValue(productPerformance).color"
                    class="w-[1.5rem] h-[.25rem] rounded-[3rem] block"
                    :style="{
                      background:
                        getProductPerformanceValue(productPerformance).color,
                    }"
                  ></span>
                  {{ getProductPerformanceValue(productPerformance).title }}
                </div>
              </template>
              <template #item="{ data }">
                <button
                  type="button"
                  class="flex items-center gap-4 mb-[1.19rem] last:mb-0 text-gray-700 text-xl"
                  @click="setProductPerformance(data)"
                >
                  <span
                    v-if="data.color"
                    class="w-[1.5rem] h-[.25rem] rounded-[3rem] block"
                    :style="{ background: data.color }"
                  ></span>
                  {{ data.title }}
                </button>
              </template>
            </shared-menu>
          </div>

          <span class="hidden xl:block h-[36px] w-[1px] bg-gray-200"></span>

          <div class="flex flex-wrap items-center gap-9">
            <div class="flex flex-wrap items-center gap-4">
              <span class="text-gray-500 text-2xl">اقل سعر للبيع:</span>
              <div class="flex items-center gap-4">
                <shared-form-input
                  class="bg-transparent !w-[4.5625rem] !h-[3.5625rem]"
                  type="text"
                  @input="handleLowestPriceForSaleInputValue"
                  :model-value="lowestPriceForSale"
                />
                <span class="text-gray-200 text-2xl">الى</span>
                <shared-form-input
                  class="bg-transparent !w-[4.5625rem] !h-[3.5625rem]"
                  type="text"
                  @input="handleMostPriceForSaleInputValue"
                  :model-value="mostPriceForSale"
                />
              </div>
            </div>

            <span class="hidden md:block h-[36px] w-[1px] bg-gray-200"></span>

            <div class="flex flex-wrap items-center gap-4">
              <span class="text-gray-500 text-2xl">اقل ربح:</span>
              <div class="flex items-center gap-4">
                <shared-form-input
                  class="bg-transparent !w-[4.5625rem] !h-[3.5625rem]"
                  type="text"
                  @input="handleLowestCommissionInputValue"
                  :model-value="lowestCommission"
                />
                <span class="text-gray-200 text-2xl">الى</span>
                <shared-form-input
                  class="bg-transparent !w-[4.5625rem] !h-[3.5625rem]"
                  type="text"
                  @input="handleMostCommissionInputValue"
                  :model-value="mostCommission"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:left>
        <div class="flex flex-wrap items-center gap-4 whitespace-nowrap">
          <span class="text-gray-500 text-2xl">ترتيب حسب:</span>
          <shared-menu
            :items="productsStatuses"
            :button-props="{
              class: 'leading-normal px-8 py-[.38rem] min-w-0 text-xl',
            }"
            :menu-props="{
              class: 'max-w-[12.52rem] px-8',
            }"
          >
            <template #label>
              <div type="button" class="flex items-center gap-[19px]">
                <Icon name="iconamoon:arrow-down-2-duotone" />
                {{ getOrderByValue(orderBy) }}
              </div>
            </template>
            <template #item="{ data }">
              <button
                type="button"
                class="flex mb-[1.19rem] last:mb-0 text-gray-700 text-xl"
                @click="setOrderBy(data)"
              >
                {{ data.title }}
              </button>
            </template>
          </shared-menu>
        </div>
      </template>
    </shared-cards-filter>

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
