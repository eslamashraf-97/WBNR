<script setup>
import { Autoplay } from "swiper/modules";
</script>

<template>
  <swiper
    :modules="[Autoplay]"
    :slidesPerView="1.2"
    :spaceBetween="36"
    :loop="false"
    :autoplay="false"
    :breakpoints="{
      400: {
        slidesPerView: 1.2,
      },
      500: {
        slidesPerView: 1.6,
      },
      600: {
        slidesPerView: 1.9,
      },
      700: {
        slidesPerView: 2.2,
      },
      800: {
        slidesPerView: 2.4,
      },
      900: {
        slidesPerView: 2.6,
      },
      1000: {
        slidesPerView: 2.8,
      },
      1100: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3.2,
      },
      1300: {
        slidesPerView: 3.6,
      },
      1500: {
        slidesPerView: 4,
      },
    }"
  >
    <slot></slot>
  </swiper>
</template>

<style scoped></style>
