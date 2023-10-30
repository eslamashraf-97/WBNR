<script setup>
import { apiGetReturnsItemsUrl } from "@/server";

import { handleDate } from "@/helpers";

const { selectedCountry } = useCountries();

const title = ref("");

const { fire } = useApi({
  url: () => apiGetReturnsItemsUrl,
  requestOptions: {
    query: {
      country_id: selectedCountry.value.id,
      title: title,
    },
    watch: [title],
  },
});

const { data, pending, refresh } = await fire();

const selectedOrder = ref(null);

const isShowReturnModal = ref(false);

function showReturnModal(order) {
  isShowReturnModal.value = true;
  selectedOrder.value = order;
}

function hideReturnModal() {
  isShowReturnModal.value = false;
  selectedOrder.value = null;
}
</script>

<template>
  <section>
    <h4 class="mb-16 text-gray-700 font-normal text-2xl">
      طلبات السحب السابقة
    </h4>

    <shared-cards-filter>
      <template #right>
        <div class="relative layout-navbar-search">
          <shared-form-input
            placeholder="البحث عن منتج"
            type="text"
            class="pe-[80px] !h-[3.5625rem]"
            v-model="title"
          />
          <span
            class="absolute top-0 left-0 bottom-0 rounded-tl-[11px] rounded-bl-[11px] bg-primary-100 text-primary-300 w-[75px] flex items-center justify-center border border-gray-200 border-s-0"
          >
            <icon name="system-uicons:search" class="text-4xl" />
          </span>
        </div>
      </template>

      <template #left>
        <div class="flex items-center gap-4">
          <!-- <shared-buttons-primary-button
            submit-title="الكل"
            class="w-[6.4375rem] !h-[3.5625rem] !min-w-0 !min-h-0 text-xl"
          />
          <shared-buttons-secondary-button
            submit-title="الطلبات السابقة"
            class="w-[12rem] !h-[3.5625rem] !min-w-0 !min-h-0 text-xl"
          /> -->
        </div>
      </template>
    </shared-cards-filter>

    <div v-if="pending" class="mt-16">
      <shared-loders-loading />
    </div>
    <div v-else class="mt-16">
      <div
        v-for="order in data.data"
        :key="order.id"
        class="shadow-main p-9 bg-white border border-gray-200 rounded-2xl flex items-center gap-9 mb-9"
      >
        <img
          :src="order.product.featured_image"
          :alt="order.product.title"
          class="w-[7.75rem] h-[7.75rem] rounded-[.5rem]"
        />

        <div>
          <h6 class="text-2xl text-gray-700 leading-normal mb-[.88rem]">
            {{ order.product.title }}
          </h6>
          <div
            class="flex items-center gap-4 text-gray-300 text-xl leading-normal"
          >
            <span>تاريخ الشراء: {{ handleDate(order.order.created_at) }}</span>
            <div class="h-[36px] bg-gray-200 w-[1px]"></div>
            <span>كود الطلب: {{ order.order.order_number }}</span>
          </div>
        </div>

        <button
          class="ms-auto flex items-center gap-4 text-primary-300 disabled:text-primary-200 text-lg"
          :disabled="!order"
          @click="showReturnModal(order)"
        >
          طلب استبدال او استرجاع
          <Icon name="material-symbols:chevron-left" class="text-2xl" />
        </button>
      </div>
    </div>
  </section>

  <teleport to="body">
    <Transition>
      <dashboard-return-order
        v-if="isShowReturnModal"
        :data="selectedOrder"
        @hide="hideReturnModal"
        @refresh="refresh()"
      />
    </Transition>
  </teleport>
</template>
