<script setup>
import SocialMediaLogin from "~/components/shared/SocialMediaLogin.vue";

import { apiRegisterUrl } from "@/server";

const { setUserData } = useAuth();

definePageMeta({
  layout: "auth",
});

const form = reactive({
  name: "",
  country_code: "",
  phone: "",
  address: "",
  email: "",
  password: "",
  confirm_password: "",
});

const isLoading = ref(false);

const tokenCookies = useCookie("token");

async function handleSubmit() {
  isLoading.value = true;
  await useRequest({
    url: apiRegisterUrl,
    requetOptions: {
      body: JSON.stringify(form),
      method: "post",
      onResponse: ({ response }) => {
        const responseData = response._data;
        setUserData(responseData.data.user, responseData.meta?.token);
        navigateTo("/home");
      },
    },
  });
  isLoading.value = false;
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <social-media-login />
    <div class="my-16">
      <div class="mb-7">
        <shared-form-input
          class="w-full bg-transparent"
          placeholder="الاسم"
          type="text"
          v-model="form.name"
        />
      </div>
      <div class="flex mb-7 gap-4">
        <shared-form-input
          class="w-full bg-transparent max-w-[150px]"
          placeholder="كود الدولة"
          type="text"
          v-model="form.country_code"
        />
        <shared-form-input
          class="w-full bg-transparent"
          placeholder="رقم التليفون"
          type="text"
          v-model="form.phone"
        />
      </div>
      <div class="mb-7">
        <shared-form-input
          class="w-full bg-transparent"
          placeholder="العنوان"
          type="text"
          v-model="form.address"
        />
      </div>
      <div class="mb-7">
        <shared-form-input
          class="w-full bg-transparent"
          placeholder="البريد الالكترونى"
          type="email"
          v-model="form.email"
        />
      </div>
      <div class="mb-7">
        <shared-form-input
          class="w-full bg-transparent"
          placeholder="كلمة المرور"
          type="password"
          v-model="form.password"
        />
      </div>
      <div class="mb-7">
        <shared-form-input
          class="w-full bg-transparent"
          placeholder="تأكيد كلمة المرور"
          type="password"
          v-model="form.confirm_password"
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
      <nuxt-link to="/auth/login"
        ><p class="text-primary-300 cursor-pointer text-2xl">
          لدي حساب بالفعل
        </p></nuxt-link
      >
    </div>
  </form>
</template>

<style scoped></style>
