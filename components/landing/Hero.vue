<script setup></script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-40">
    <div class="max-w-[42.8rem]">
      <h2 class="text-gray-800 text-8xl leading-[8.4rem] mb-5">
        هنساعدك تبدأ <br />
        تجارتك الإلكترونية
      </h2>
      <p class="mb-16 text-gray-400 text-2xl leading-normal">
        هنساعدك تبدأ بكل سهولة وبدون خبرة . لأننا هنوفر لك منتجات متنوعة بأفضل
        سعر يضمن لك أكبر ربح
      </p>

      <shared-buttons-primary-button
        submitTitle="سجل الأن"
        class="mb-16 w-[14.4rem] h-[4.18rem] min-w-0"
        @click="navigateTo('/auth/register')"
      />

      <div class="flex items-center gap-5">
        <span class="text-2xl text-gray-400">متاح في:</span>
        <div class="flex items-center gap-3">
          <img src="@/assets/images/flag-eg.png" alt="" class="" />
          <img src="@/assets/images/flag-em.png" alt="" class="" />
          <img src="@/assets/images/flag-ku.png" alt="" class="" />
          <img src="@/assets/images/flag-sa.png" alt="" class="" />
        </div>
      </div>
    </div>

    <div class="flex justify-end order-first lg:order-last">
      <div class="max-w-[46.8rem]">
        <img src="@/assets/images/hero.svg" alt="" class="" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
