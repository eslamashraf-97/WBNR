<script setup>
import { apiGetCustomerStatsUrl } from "@/server";

const { selectedCountry } = useCountries();

const country_id = ref(selectedCountry.value.id);

function changeCountry(country) {
  country_id.value = country;
}

const { fire } = useApi({
  url: () => apiGetCustomerStatsUrl + "/" + country_id.value,

  requestOptions: {
    watch: [country_id],
  },
});

const { data, pending } = await fire();
</script>

<template>
  <section>
    <div class="mb-16">
      <shared-cards-filter>
        <template v-slot:right>
          <div>
            <!-- <shared-from-to /> -->
          </div>
        </template>
        <template v-slot:left>
          <dashboard-country-menu @changeCountry="changeCountry" />
        </template>
      </shared-cards-filter>
    </div>

    <div v-if="pending" class="flex items-center justify-center">
      <shared-loders-loading />
    </div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 px-[4px]"
    >
      <shared-cards-stats
        title="اجمالي الطلبات"
        :value="data.total_orders"
        @click="navigateTo('/dashboard/requests')"
      />

      <shared-cards-stats
        title="اجمالي الأرباح"
        :value="data.total_confirmed_revenue"
        @click="navigateTo('/dashboard/wallet')"
      />
      <shared-cards-stats
        title="طلبات ملغية"
        :value="data.cancelled_order_count"
        @click="
          navigateTo({
            path: '/dashboard/requests',
            query: {
              status: 'cancelled',
            },
          })
        "
      />
      <shared-cards-stats
        title="طلبات تحت التجهيز"
        :value="data.processing_order_count"
        @click="
          navigateTo({
            path: '/dashboard/requests',
            query: {
              status: 'processing',
            },
          })
        "
      />
      <shared-cards-stats
        title="طلبات معلقة"
        :value="data.pending_order_count"
        @click="
          navigateTo({
            path: '/dashboard/requests',
            query: {
              status: 'pending',
            },
          })
        "
      />
      <shared-cards-stats
        title="منتجات مسلمة"
        :value="data.delivered_order_count"
        @click="
          navigateTo({
            path: '/dashboard/requests',
            query: {
              status: 'delivered',
            },
          })
        "
      />
      <shared-cards-stats
        title="طلبات مؤكدة"
        :value="data.confirmed_order_count"
        @click="
          navigateTo({
            path: '/dashboard/requests',
            query: {
              status: 'confirmed',
            },
          })
        "
      />
      <shared-cards-stats
        title="طلبات مرفوضة"
        :value="data.rejected_order_count"
        @click="
          navigateTo({
            path: '/dashboard/requests',
            query: {
              status: 'rejected',
            },
          })
        "
      />
      <shared-cards-stats
        title="طلبات جارى توصيلها"
        :value="data.shipping_order_count"
        @click="
          navigateTo({
            path: '/dashboard/requests',
            query: {
              status: 'shipping',
            },
          })
        "
      />
    </div>
  </section>
</template>

<style scoped></style>
