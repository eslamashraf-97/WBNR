<script setup>
import { reactive, ref } from "vue";

import SocialMediaLogin from "@/components/shared/SocialMediaLogin.vue";

import { api_login } from "@/server";

const { setUserData } = useAuth();

definePageMeta({
  layout: "auth",
});

const isLoading = ref(false);

const form = reactive({
  user: "",
  password: "",
});

function handleSubmit() {
  isLoading.value = true;
  api_login(form)
    .then((response) => {
      const responseData = response.data;
      setUserData(responseData.data.user, responseData.meta?.token);
      navigateTo("/home");
    })
    .finally(() => {
      isLoading.value = false;
    });
}

function loginWith(data) {
  const responseData = data;
  setUserData(responseData.data.customer, responseData.meta?.token);
  navigateTo("/home");
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <social-media-login @loginWith="loginWith" />
    <div class="my-16">
      <div class="mb-7">
        <shared-form-input
          class="w-full bg-transparent"
          placeholder="البريد الالكترونى"
          type="email"
          v-model="form.user"
        />
      </div>
      <div>
        <shared-form-input
          class="w-full bg-transparent"
          placeholder="كلمة المرور"
          v-model="form.password"
          type="password"
        />
      </div>
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

<style scoped></style>
