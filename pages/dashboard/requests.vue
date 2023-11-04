<script setup>
import { apiGetOrdersUrl } from "@/server";

import { handleDate } from "@/helpers";

const { selectedCountry } = useCountries();

const query = reactive({
  country_id: selectedCountry.value.id,
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

    <div class="table overflow-auto" v-if="!pending && data.data">
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
          </tr>
        </thead>

        <tbody>
          <tr v-for="order in data.data" :key="order.id">
            <td
              class="text-2xl text-gray-500 font-normal leading-normal block xl:hidden 2xl:block"
            >
              {{ order.order_number }}
            </td>
            <td class="text-2xl text-gray-700 font-normal leading-normal">
              {{ order.client.name }}
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
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped></style>
