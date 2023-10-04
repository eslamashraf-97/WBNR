<script setup>
const items = [1, 2, 3, 4];
</script>

<template>
  <div class="flex gap-9 items-center">
    <shared-menu
      :items="items"
      :button-props="{
        class: 'h-[57px] px-[32px] py-[6px] text-[20px]',
      }"
      :menu-props="{
        class: 'max-w-[132px]',
      }"
    >
      <template #label>
        <div class="flex items-center gap-[10px]">
          <Icon name="iconamoon:arrow-down-2-duotone" />
          <span>من</span>
        </div>
      </template>
      <template #item="{ data }">
        <button
          type="button"
          class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"
        >
          <span>{{ data }}</span>
        </button>
      </template>
    </shared-menu>

    <div class="h-[36px] bg-gray-200 w-[1px]"></div>
    <shared-menu
      :items="items"
      :button-props="{
        class: 'h-[57px] px-[32px] py-[6px] text-[20px]',
      }"
      :menu-props="{
        class: 'max-w-[132px]',
      }"
    >
      <template #label>
        <div class="flex items-center gap-[10px]">
          <Icon name="iconamoon:arrow-down-2-duotone" />
          <span>الى</span>
        </div>
      </template>
      <template #item="{ data }">
        <button
          type="button"
          class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"
        >
          <span>{{ data }}</span>
        </button>
      </template>
    </shared-menu>
  </div>
</template>

<style scoped></style>
