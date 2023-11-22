<script setup>
import SocialMediaLogin from "~/components/shared/SocialMediaLogin.vue";

import {
  api_register,
  api_resend_verificationCode,
  api_submit_verificationCode,
} from "@/server";

const { setUserData } = useAuth();

definePageMeta({
  layout: "auth",
});

const route = useRoute();

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

const activateAccountModal = ref(
  route.query.activate && route.query.email ? true : false,
);

function saveUserToActivate() {
  activateAccountModal.value = true;
  navigateTo(`/auth/register?activate=true&email=${form.email}`);
}

function handleSubmit() {
  isLoading.value = true;
  api_register(form)
    .then((response) => {
      saveUserToActivate();
    })
    .catch((error) => {
      if (
        error.data?.message ===
        "This account is already exist, please activate."
      ) {
        saveUserToActivate();
      }
    })
    .finally(() => {
      isLoading.value = false;
    });
}

const isSubmitCodeDisabled = ref(false);

function submitCode(isCompleted, value) {
  if (isCompleted && value) {
    isSubmitCodeDisabled.value = true;
    api_submit_verificationCode({ email: route.query.email, otp: value })
      .then((res) => {
        navigateTo("/auth/login");
      })
      .finally(() => {
        isSubmitCodeDisabled.value = false;
      });
  }
}

const isResendCode = ref(false);
function resendCode() {
  isResendCode.value = true;
  api_resend_verificationCode({ email: route.query.email }).finally(() => {
    isResendCode.value = false;
  });
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

  <teleport to="body">
    <Transition>
      <div
        class="fixed inset-0 z-50"
        v-if="activateAccountModal && route.query.email && route.query.activate"
      >
        <div
          class="fixed inset-0 bg-black/20"
          @click="activateAccountModal = false"
        ></div>
        <div class="w-full h-full px-4 overflow-auto">
          <div
            class="relative z-10 bg-white rounded-lg shadow-main p-8 xl:p-16 w-full max-w-[45rem] my-12 mx-auto text-center"
          >
            <form>
              <h6 class="text-2xl text-gray-700 mb-4 leading-normal">
                ادخل رمز التحقق
              </h6>
              <p class="text-2xl text-gray-400 leading-normal mb-16">
                لقد ارسلنا رمز تحقق إلي عنوان بريدك الإلكتروني, يرجي التحقق من
                صندوق البريد الخاص بك
              </p>
              <div class="mb-16" style="direction: rtl">
                <code-input
                  @complete="submitCode"
                  :disabled="isSubmitCodeDisabled"
                />
              </div>
              <Icon
                name="icomoon-free:spinner2"
                class="loading-spinner text-primary-300"
                v-if="isSubmitCodeDisabled"
              />
            </form>
            <div class="flex justify-center">
              <button
                type="button"
                class="flex items-center gap-4 text-primary-200 text-xl"
                @click="resendCode"
              >
                <span>اعادة ارسال الرمز</span>
                <Icon name="carbon:chevron-left" v-if="!isResendCode" />
                <Icon
                  name="icomoon-free:spinner2"
                  class="loading-spinner text-primary-300"
                  v-else
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped></style>
