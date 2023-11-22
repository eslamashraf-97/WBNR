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

<template>
  <shared-menu
    :items="flagsItems"
    :button-props="{
      class: 'h-[57px] px-[32px] py-[6px]',
    }"
    :menu-props="{
      class: 'max-w-[216px] bottom-full mt-0 mb-2 right-0 max-h-[240px]',
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
</template>

<style scoped></style>
