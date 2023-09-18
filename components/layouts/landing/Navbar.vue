<script setup lang="ts">

import MainButton from "~/components/shared/MainButton.vue";
</script>

<template>
  <div class="bg-white py-8">
    <div class="container flex justify-between items-center">
      <img src="@/assets/images/logo.png" />
      <div class="flex gap-8 items-center">
        <nuxt-link class="text-primary-300 text-lg">إنشاء حساب جديد </nuxt-link>
        <shared-buttons-secondary-button />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
