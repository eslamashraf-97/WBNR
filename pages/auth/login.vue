<template>
  <form @submit.prevent="handleSubmit">
    <social-media-login />
    <div class="my-16">
      <shared-form-input
        class="w-full mb-2 bg-transparent"
        placeholder="البريد الالكترونى"
        type="email"
        v-model="form.user"
      />
      <shared-form-input
        class="w-full mb-2 bg-transparent"
        placeholder="كلمة المرور"
        v-model="form.password"
        type="password"
      />
    </div>
    <div class="flex gap-4 items-center">
      <shared-buttons-primary-button
        submit-title="استمرار"
        class="!bg-primary-200 text-white"
        type="submit"
        :loading="isLoading"
      />
      <nuxt-link to="/auth/register"
        ><p class="text-primary-300 text-2xl">ليس لدي حساب</p></nuxt-link
      >
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";

import SocialMediaLogin from "@/components/shared/SocialMediaLogin.vue";
import { api_login } from "@/server";

definePageMeta({
  layout: "auth",
});

const isLoading = ref(false);

const form = reactive({
  user: "",
  password: "",
});

const tokenCookies = useCookie("token");

function handleSubmit() {
  isLoading.value = true;
  api_login(form)
    .then((res) => {
      tokenCookies.value = res.data.meta?.token;
      navigateTo("/dashboard");
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>

<style scoped></style>
