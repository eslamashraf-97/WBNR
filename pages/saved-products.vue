<script setup>
import { apiGetSavedProductsUrl } from "@/server";

import { productsStatuses, productsActives } from "@/constants";

const { page, changePage } = usePagination();

const { selectedCountry } = useCountries();

const route = useRoute();

const orderBy = ref(route.query.order_by);

const productPerformance = ref(route.query.product_performance);

const lowestPriceForSale = ref(route.query.lowest_price_for_sale);

const mostPriceForSale = ref(route.query.most_price_for_sale);

const lowestCommission = ref(route.query.lowest_commission);

const mostCommission = ref(route.query.most_commission);

const { data: productData, pending } = await useRequest({
  url: () => apiGetSavedProductsUrl,
  requetOptions: {
    query: {
      page: page,
      country_id: selectedCountry.value.id,
      order_by: orderBy,
      product_performance: productPerformance,
      lowest_price_for_sale: lowestPriceForSale,
      most_price_for_sale: mostPriceForSale,
      lowest_commission: lowestCommission,
      most_commission: mostCommission,
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
    path: "/saved-products",
    query: {
      ...route.query,
      order_by: data.value,
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
    path: "/saved-products",
    query: {
      ...route.query,
      product_performance: data.value,
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
      path: "/saved-products",
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
      path: "/saved-products",
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
      path: "/saved-products",
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
      path: "/saved-products",
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
    <shared-title title="منتجات محفوظة" />
    <!-- filter box -->
    <shared-cards-filter>
      <template v-slot:right>
        <div class="flex items-center gap-9">
          <div class="flex items-center gap-4">
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

          <span class="h-[36px] w-[1px] bg-gray-200"></span>

          <div class="flex items-center gap-4">
            <span class="text-gray-500 text-2xl">اقل سعر للبيع:</span>
            <shared-form-input
              class="bg-transparent w-[4.5625rem] h-[3.5625rem]"
              type="text"
              @input="handleLowestPriceForSaleInputValue"
              :model-value="lowestPriceForSale"
            />
            <span class="text-gray-200 text-2xl">الى</span>
            <shared-form-input
              class="bg-transparent w-[4.5625rem] h-[3.5625rem]"
              type="text"
              @input="handleMostPriceForSaleInputValue"
              :model-value="mostPriceForSale"
            />
          </div>

          <span class="h-[36px] w-[1px] bg-gray-200"></span>

          <div class="flex items-center gap-4">
            <span class="text-gray-500 text-2xl">اقل ربح:</span>
            <shared-form-input
              class="bg-transparent w-[4.5625rem] h-[3.5625rem]"
              type="text"
              @input="handleLowestCommissionInputValue"
              :model-value="lowestCommission"
            />
            <span class="text-gray-200 text-2xl">الى</span>
            <shared-form-input
              class="bg-transparent w-[4.5625rem] h-[3.5625rem]"
              type="text"
              @input="handleMostCommissionInputValue"
              :model-value="mostCommission"
            />
          </div>
        </div>
      </template>
      <template v-slot:left>
        <div class="flex items-center gap-4">
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
      class="mt-24 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9 mb-40 grid-flow-row-dense"
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
