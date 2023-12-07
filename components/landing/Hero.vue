<script setup></script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-40">
    <div class="w-full lg:max-w-[42.8rem] text-center lg:text-start">
      <div class="bg-primary-100 text-primary-300 p-2 px-4 w-fit rounded-sm flex gap-2 items-center">
        <img src="assets/images/iconOnly.svg" class="w-[40px]"/>
        <p> مش محتاج خبرة عشان تبدأ MYR</p>
      </div>
      <h2
        class="text-gray-800 text-6xl leading-[6.4rem] xl:text-8xl xl:leading-[8.4rem] mb-5"
      >
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

      <div class="flex justify-center lg:justify-start items-center gap-5">
        <span class="text-2xl text-gray-400">متاح في:</span>
        <div class="flex items-center gap-3">
          <img src="@/assets/images/flag-eg.png" alt="" class="" />
          <img src="@/assets/images/flag-em.png" alt="" class="" />
          <img src="@/assets/images/flag-ku.png" alt="" class="" />
          <img src="@/assets/images/flag-sa.png" alt="" class="" />
        </div>
      </div>
    </div>

    <div class="flex justify-center lg:justify-end order-first lg:order-last">
      <div class="max-w-[46.8rem]">
        <img src="@/assets/images/hero.svg" alt="" class="max-w-full" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
