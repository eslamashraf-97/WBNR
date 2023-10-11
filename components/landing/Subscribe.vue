<script setup></script>

<template>
  <section class="py-40">
    <div
      class="flex items-center justify-between gap-4 p-16 bg-primary-300 rounded-2xl shadow-main"
    >
      <div>
        <h5 class="mb-[3.12rem] text-gray-100 text-5xl leading-[4.8rem]">
          سجل دلوقتي علشان تشوف كل المنتجات
        </h5>
        <shared-buttons-primary-button
          submit-title="سجل الأن"
          @click="navigateTo('/auth/register')"
          class="!bg-gray-100 !text-primary-300"
        />
      </div>
      <div class="">
        <img src="@/assets/images/subscribe.svg" alt="" class="" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
