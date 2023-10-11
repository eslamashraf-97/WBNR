<template>
  <div class="bg-white py-8">
    <div
      class="container flex justify-between items-center border-b border-b-primary-100 pb-[24px] mb-[24px]"
    >
      <div class="flex items-center gap-[64px]">
        <img src="@/assets/images/logo.png" />
        <div class="relative layout-navbar-search">
          <shared-form-input
            :input-props="{
              placeholder: 'ما الذي تبحث عنه؟',
              type: 'text',
              class: 'pe-[80px]',
            }"
          />
          <span
            class="absolute top-0 left-0 bottom-0 rounded-tl-[11px] rounded-bl-[11px] bg-primary-100 text-primary-300 w-[75px] flex items-center justify-center border border-gray-200 border-s-0"
          >
            <icon name="system-uicons:search" class="text-4xl" />
          </span>
        </div>
      </div>
      <div class="flex gap-8">
        <div class="flex items-center gap-9">
          <Icon name="pepicons-pencil:bell" class="text-gray-600 text-2xl" />
          <span class="flex items-center gap-2 text-2xl">
            <span>0</span>
            <Icon name="fluent:bookmark-20-regular" class="text-gray-600" />
          </span>
          <span class="flex items-center gap-2 text-2xl">
            <span>0</span>
            <Icon
              name="solar:cart-large-minimalistic-linear"
              class="text-gray-600"
            />
          </span>
        </div>
        <shared-menu />
      </div>
    </div>
    <div class="container flex justify-between items-center">
      <nav class="flex items-center gap-[24px]">
        <NuxtLink
          to="/home"
          class="px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"
          >الرئيسية</NuxtLink
        >
        <NuxtLink
          to="/suggested-products"
          class="px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"
          >منتجات مرشحة لك</NuxtLink
        >
        <span class="h-[36px] w-[1px] bg-gray-200"></span>
        <NuxtLink
          to="/dashboard"
          class="px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"
          >لوحة التحكم</NuxtLink
        >
      </nav>
      <div class="flex items-center gap-[36px]">
        <shared-menu
          :items="flagsItems"
          :button-props="{
            class: 'h-[57px] px-[32px] py-[6px]',
          }"
          :menu-props="{
            class: 'max-w-[216px]',
          }"
        >
          <template #label>
            <div class="flex items-center gap-[19px]">
              <Icon name="iconamoon:arrow-down-2-duotone" />
              <img :src="flagsItems[0].image" class="" alt="" />
            </div>
          </template>
          <template #item="{ data }">
            <button
              type="button"
              class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"
            >
              <img :src="data.image" class="" alt="" />
              <span>{{ data.title }}</span>
            </button>
          </template>
        </shared-menu>

        <shared-menu
          :items="[]"
          :button-props="{
            class:
              'h-[57px] px-[32px] py-[6px] bg-primary-100 text-primary-300',
          }"
        >
          <template #label>
            <div class="flex items-center gap-[19px]">
              <span>جميع الفئات</span>
              <Icon name="iconamoon:arrow-down-2-duotone" />
            </div>
          </template>
        </shared-menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import flagEg from "@/assets/images/flag-eg.png";
import flagSa from "@/assets/images/flag-sa.png";
import flagKu from "@/assets/images/flag-ku.png";
import flagEm from "@/assets/images/flag-em.png";
const flagsItems = [
  {
    image: flagEg,
    title: "مصر",
    id: "eg",
  },
  {
    image: flagSa,
    title: "السعودية",
    id: "sa",
  },
  {
    image: flagKu,
    title: "الكويت",
    id: "ku",
  },
  {
    image: flagEm,
    title: "الامارات",
    id: "em",
  },
];
</script>

<style scoped>
.layout-navbar-search:focus-within > span {
  border-color: theme("colors.primary.300");
}

.router-link-active {
  color: theme("colors.gray.700");
  border-bottom-color: theme("colors.primary.300");
}
</style>
