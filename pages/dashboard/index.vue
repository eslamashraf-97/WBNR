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

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7">
      <shared-cards-stats
        title="اجمالي الطلبات"
        :value="data.data?.total_orders"
      />
      <shared-cards-stats
        title="اجمالي الأرباح"
        :value="data.data?.total_confirmed_revenue"
      />
      <shared-cards-stats
        title="طلبات ملغية"
        :value="data.data?.cancelled_order_count"
      />
      <shared-cards-stats
        title="طلبات تحت التجهيز"
        :value="data.data?.processing_order_count"
      />
      <shared-cards-stats
        title="طلبات معلقة"
        :value="data.data?.pending_order_count"
      />
      <shared-cards-stats
        title="منتجات مسلمة"
        :value="data.data?.delivered_order_count"
      />
      <shared-cards-stats
        title="طلبات مؤكدة"
        :value="data.data?.confirmed_order_count"
      />
      <shared-cards-stats
        title="طلبات مرفوضة"
        :value="data.data?.rejected_order_count"
      />
      <shared-cards-stats
        title="طلبات جارى توصيلها"
        :value="data.data?.shipping_order_count"
      />
    </div>
  </section>
</template>

<style scoped></style>
