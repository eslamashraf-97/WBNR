<script setup>
defineProps(["logo", "desc", "language"]);
</script>

<template>
  <div
    class="border border-gray-200 rounded-[16px] bg-white p-[24px] shadow-main max-w-[384px] flex flex-col h-[384px]"
  >
    <div>
      <img :src="logo" alt="" class="h-[36px]" />
    </div>
    <h6
      class="text-[28px] text-gray-400 font-semibold mt-[20px] leading-[44.8px]"
    >
      {{ desc }}
    </h6>

    <div class="flex items-center justify-between mt-auto gap-9">
      <shared-languages-menu />
      <shared-buttons-secondary-button
        submit-title="ربط المتجر"
        class="h-[57px] w-[136px]"
      />
    </div>
  </div>
</template>

<style scoped></style>
