<template>
  <form>
    <social-media-login/>
    <div class="my-16">
      <shared-form-input class="w-full  mb-2 bg-transparent" placeholder="البريد الالكترونى"/>
      <shared-form-input class="w-full mb-2 bg-transparent" placeholder="كلمة المرور"/>
    </div>
    <div class="flex gap-4 items-center">
      <shared-buttons-primary-button  submit-title="استمرار" class="!bg-primary-200 text-white"/>
      <nuxt-link to="/auth/register"><p class="text-primary-300 text-2xl">ليس لدي حساب</p></nuxt-link>
    </div>
  </form>

</template>

<script setup lang="ts">
import SocialMediaLogin from "~/components/shared/SocialMediaLogin.vue";

definePageMeta({
  layout: 'auth'
})
</script>

<style scoped>
</style>
