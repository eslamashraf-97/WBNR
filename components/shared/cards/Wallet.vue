<script setup>
defineProps(["title", "value", "flag", "expected"]);
</script>

<template>
  <div
    class="border border-gray-200 rounded-[16px] bg-white p-[24px] wallet-card max-w-[256px] flex flex-col h-[256px]"
  >
    <div class="flex justify-between items-center">
      <h6 class="text-[28px] text-gray-400 font-semibold">{{ title }}</h6>
      <img :src="flag" alt="" />
    </div>
    <div class="flex justify-between mt-auto">
      <div>
        <h6 class="text-gray-400 text-[16px]">جاهز للسحب</h6>
        <h4 class="text-[24px] text-primary-300 font-semibold">
          {{ value }} د.إ
        </h4>
      </div>
      <div>
        <h6 class="text-gray-400 text-[16px]">متوقع</h6>
        <h4 class="text-[24px] text-secondary-300 font-semibold">
          {{ expected }} د.إ
        </h4>
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
