<script setup lang="ts">
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <div class="bg-primary">
    <!-- landing section  -->
    <landing-hero />

    <div class="flex items-center flex flex-col justify-center">
      <img src="assets/images/website-logo.svg" />
      <h3 class="text-center leading-[2em] font-bold font-2xl">
        منصة إلكترونية بتقدم خدمات متكاملة  من أول توفير المنتج المناسب و التخزين إلى الشحن و التحصيل من العميل بكل سهوله من منزلك
      </h3>
    </div>
    <!-- steps  -->
    <landing-steps />

    <!-- category -->
    <landing-categories />

    <!-- features  -->
<!--    <landing-features />-->

    <!-- app  -->
    <landing-app />

    <!-- app  -->
    <landing-subscribe />
  </div>
</template>

<style scoped></style>
