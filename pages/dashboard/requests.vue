<script setup>
import { apiGetOrdersUrl } from "@/server";

import { handleDate } from "@/helpers";

const { selectedCountry } = useCountries();

const query = reactive({
  country_id: selectedCountry.value?.id,
  name: "",
  from: "",
  to: "",
});

const { fire } = useApi({
  url: apiGetOrdersUrl,
  requestOptions: {
    query,
  },
});

const { data, pending, refresh } = await fire();

function changeCountry(country) {
  query.country_id = country;
}

function filterOrders() {
  refresh();
}

const moreDetails = ref(false);

const moreDetailsData = ref(null);

function showMoreDetails(details) {
  moreDetails.value = true;
  moreDetailsData.value = details;
}

function hideMoreDetails() {
  moreDetails.value = false;
  moreDetailsData.value = null;
}
</script>

<template>
  <section class="min-h-screen">
    <div class="mb-16">
      <shared-cards-filter>
        <template v-slot:default>
          <div class="flex-1">
            <div class="flex-1 w-full mb-9">
              <shared-form-input
                type="search"
                placeholder="اسم العميل او رقم الهاتف"
                id="requeste-search-input"
                class="w-full"
                v-model="query.name"
              />
            </div>
            <div class="flex justify-between items-center">
              <div class="">
                <!-- <shared-from-to /> -->
              </div>
              <div class="flex gap-9 align-items-center">
                <dashboard-country-menu @changeCountry="changeCountry" />
                <shared-buttons-secondary-button
                  submit-title="البحث"
                  class="!h-[3.5625rem] w-[105px]"
                  @click="filterOrders"
                  :disabled="pending"
                  :loading="pending"
                />
              </div>
            </div>
          </div>
        </template>
      </shared-cards-filter>
    </div>

    <div class="table overflow-auto w-full" v-if="!pending && data.data">
      <table class="w-full">
        <thead>
          <tr>
            <th
              class="text-2xl text-gray-800 font-normal leading-normal block xl:hidden 2xl:block"
            >
              كود الطلب
            </th>
            <th
              class="text-2xl text-gray-800 font-normal leading-normal whitespace-nowrap"
            >
              اسم العميل
            </th>
            <th class="text-2xl text-gray-800 font-normal leading-normal">
              المبلغ
            </th>
            <th class="text-2xl text-gray-800 font-normal leading-normal">
              الحالة
            </th>
            <th class="text-2xl text-gray-800 font-normal leading-normal">
              تاريخ الطلب
            </th>
            <th class="text-2xl text-gray-800 font-normal leading-normal">
              الدولة
            </th>
            <th class="text-2xl text-gray-800 font-normal leading-normal"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="order in data.data" :key="order.id">
            <td
              class="text-2xl text-gray-500 font-normal leading-normal block xl:hidden 2xl:block"
            >
              {{ order.order_number.substring(0, 5) + "..." }}
            </td>
            <td class="text-2xl text-gray-700 font-normal leading-normal">
              {{ order.client.name.substring(0, 5) + "..." }}
            </td>
            <td class="text-2xl text-gray-700 font-normal leading-normal">
              {{ order.price }}
            </td>
            <td class="text-2xl text-gray-700 font-normal leading-normal">
              <shared-status :status="order.status" />
            </td>
            <td class="text-2xl text-gray-700 font-normal leading-normal">
              {{ handleDate(order.created_at) }}
            </td>
            <td>
              <img
                :src="order.country.image"
                :alt="order.country.name + 'flag'"
                class="m-auto"
              />
            </td>
            <td
              class="text-2xl text-gray-700 font-normal leading-normal cursor-pointer"
              @click="showMoreDetails(order)"
            >
              تفاصيل الطلب
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <teleport to="body">
    <Transition v-if="moreDetails">
      <div class="fixed inset-0 z-50">
        <div class="fixed inset-0 bg-black/20" @click="hideMoreDetails"></div>
        <div class="w-full h-full px-4 overflow-auto">
          <div
            class="relative z-10 bg-white rounded-lg shadow-main p-8 xl:p-16 w-full max-w-[50rem] my-12 mx-auto flex flex-col gap-9"
          >
            <div class="relative mb-16">
              <button
                type="button"
                @click="hideMoreDetails"
                class="absolute top-0 end-0 text-[1.6rem] text-gray-500"
              >
                <Icon name="clarity:times-line" />
              </button>
            </div>

            <div class="grid gap-md">
              <div
                class="flex items-center gap-8"
                v-for="product in moreDetailsData.orderItems"
              >
                <img
                  :src="product.product.featured_image"
                  :alt="product.product.title"
                  class="w-[4.6875rem] h-[4.6875rem] rounded-[.5rem]"
                />

                <div class="">
                  <h6 class="text-2xl font-normal leading-normal text-gray-700">
                    {{ product.product.title }}
                  </h6>
                  <span>الكمية: ({{ product.quantity }})</span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <h5 class="text-2xl text-gray-700 font-normal">سعر المنتجات::</h5>
              <h5 class="text-2xl text-gray-500 font-normal">
                <span
                  >{{ moreDetailsData.price }}
                  {{ moreDetailsData.country.currency }}</span
                >
              </h5>
            </div>

            <div class="flex items-center justify-between">
              <h5 class="text-2xl text-gray-700 font-normal">الربح:</h5>
              <h5 class="text-2xl text-gray-500 font-normal">
                <span
                  >{{ moreDetailsData.final_price }}
                  {{ moreDetailsData.country.currency }}</span
                >
              </h5>
            </div>

            <div class="flex items-center justify-between">
              <h5 class="text-2xl text-gray-700 font-normal">الضريبة:</h5>
              <h5 class="text-2xl text-gray-500 font-normal">
                <span>{{ moreDetailsData.tax_percentage }}</span>
              </h5>
            </div>

            <div class="flex items-center justify-between">
              <h5 class="text-2xl text-gray-700 font-normal">اجمالي الربح:</h5>
              <h5 class="text-2xl text-gray-500 font-normal">
                <span
                  >{{ moreDetailsData.final_price }}
                  {{ moreDetailsData.country.currency }}</span
                >
              </h5>
            </div>

            <div class="flex items-center justify-between">
              <h5 class="text-2xl text-gray-700 font-normal">سعر الشحن:</h5>
              <h5 class="text-2xl text-gray-500 font-normal">
                <span
                  >{{ moreDetailsData.delivery_cost }}
                  {{ moreDetailsData.country.currency }}</span
                >
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped></style>
