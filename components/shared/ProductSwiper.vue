<script setup>
import { Autoplay } from "swiper/modules";
</script>

<template>
  <swiper
    :modules="[Autoplay]"
    :slidesPerView="1.1"
    :spaceBetween="36"
    :loop="false"
    :autoplay="true"
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
      1224: {
        slidesPerView: 4,
      },
    }"
  >
    <slot></slot>
  </swiper>
</template>

<style scoped></style>
