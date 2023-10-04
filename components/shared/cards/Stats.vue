<script setup>
defineProps(["title", "value"]);
</script>

<template>
  <div
    class="border border-primary-300 rounded-[16px] bg-white p-[24px] wallet-card max-w-[350px] flex flex-col h-[350px]"
  >
    <div class="flex justify-between items-center">
      <h6 class="text-[28px] text-gray-400 font-semibold">{{ title }}</h6>
    </div>
    <div class="flex justify-end mt-auto">
      <div>
        <h6 class="text-gray-700 text-[60px] leading-[96px] font-semibold">
          {{ value }}
        </h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wallet-card {
  box-shadow: 0px 1px 3px 0px rgba(23, 102, 68, 0.03),
    0px 10px 46px 0px rgba(23, 100, 67, 0.03);
}
</style>
