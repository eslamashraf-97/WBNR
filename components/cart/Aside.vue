<script setup>
defineProps(["details"]);

const cartDetails = [
  {
    title: "عدد المنتجات في العربة:",
    key: "itemsInCart",
  },
  {
    title: "اجمالي سعر البيع:",
    key: "final_price",
    coins: "ج.م",
  },
  {
    title: "اجمالي الربح:",
    key: "totalEarn",
    coins: "ج.م",
  },
  {
    title: "الضريبة:",
    key: "tax_percentage",
    coins: "ج.م",
  },
  {
    title: "سعر التوصيل:",
    key: "delivery_cost",
    coins: "ج.م",
  },
  {
    title: "الاجمالى:",
    key: "total",
    coins: "ج.م",
  },
];
</script>

<template>
  <aside
    class="flex flex-col gap-7 2xl:w-[42rem] p-9 bg-white border border-gray-200 rounded-3xl dashboard-aside h-fit shadow-main"
  >
    <template v-if="details">
      <!-- start main info  -->
      <template  v-for="(item, index) in cartDetails">
        <div
            v-if="details[item.key] !=0"
            class="flex items-center justify-between"
            :key="index"
        >
          <h5 class="text-2xl text-gray-700 font-normal">{{ item.title }}</h5>
          <h5 class="text-2xl text-gray-500 font-normal">
            <span>{{ details[item.key] }} {{ item.key === 'itemsInCart' ? 'منتج' : details.country.currency }}</span>
          </h5>
        </div>
      </template>
    </template>

    <div class="mt-9">
      <shared-buttons-primary-button
        submit-title="اطلب الان"
        class="w-[14.5rem] h-[4.1875rem]"
        @click="navigateTo(`/checkout?cart=${details.id}`)"
      />
    </div>
  </aside>
</template>

<style scoped></style>
