<script setup></script>

<template>
  <div class="bg-white py-8">
    <div class="container flex justify-between items-center">
      <img src="@/assets/images/myr-logo.svg" class="w-[130px]" />
      <div class="flex gap-8 items-center">
        <nuxt-link
          class="text-primary-300 text-lg hidden md:block"
          to="/auth/register"
          >إنشاء حساب جديد
        </nuxt-link>
        <shared-buttons-secondary-button @click="navigateTo('/auth/login')">
          تسجيل دخول
        </shared-buttons-secondary-button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
