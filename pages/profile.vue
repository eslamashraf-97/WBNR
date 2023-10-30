<script setup>
import UserImage from "@/assets/images/user-image.svg";
import {
  apiGetProfileUrl,
  apiUploadFilesUrl,
  apiUpdateProfileUrl,
  apiChangePasswordUrl,
} from "@/server";

const { fire } = useApi({
  url: apiGetProfileUrl,
});

const { pending, data: profileData } = await fire();

console.log(profileData.value);

const { user } = useAuth();

const copied = ref(false);

const copyRef = ref();

function copyToClipoard() {
  var range = document.createRange();
  range.selectNode(copyRef.value);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  copied.value = true;
  const copiedTimeOut = setTimeout(() => {
    copied.value = false;
    clearTimeout(copiedTimeOut);
  }, 600);
}

const isUploading = ref(false);

const newAvatar = ref(null);

const form = reactive({
  avatar: profileData.value.data.avatar,
  name: profileData.value.data.name,
  phone: profileData.value.data.phone,
  email: profileData.value.data.email,
});

async function uploadImage(e) {
  const files = e.target.files;
  if (files.length) {
    isUploading.value = true;
    const fd = new FormData();
    fd.append("image", files[0]);
    const { fire: uploadFire } = useApi({
      url: apiUploadFilesUrl,
      requestOptions: {
        method: "post",
        body: fd,
        onResponse: (response) => {
          if (response.response.ok) {
            form.avatar = response.response._data.url;
            newAvatar.value = window.URL.createObjectURL(files[0]);
          }
        },
      },
    });

    await uploadFire(fd);

    isUploading.value = false;
  }
}

const passwordForm = reactive({
  old_password: "",
  new_password: "",
  confirm_new_password: "",
});

const { fire: updateInfoFire } = useApi({
  url: apiUpdateProfileUrl,
  requestOptions: {
    method: "post",
  },
});

const isUpdateInfo = ref(false);

async function submitInfo() {
  isUpdateInfo.value = true;
  await updateInfoFire(form);
  isUpdateInfo.value = false;
}

const { fire: updatePasswordFire } = useApi({
  url: apiChangePasswordUrl,
  requestOptions: {
    method: "patch",
  },
});

const isUpdatePassword = ref(false);

async function submitPassword() {
  isUpdatePassword.value = true;
  await updatePasswordFire(passwordForm);
  isUpdatePassword.value = false;
}
</script>

<template>
  <div class="bg-primary">
    <shared-title title="اعدادات الحساب" />

    <div class="flex gap-24">
      <!-- photo  -->
      <div class="w-[22.5rem] flex flex-col gap-9">
        <div
          class="w-full h-[22.5rem] border border-gray-200 bg-gray-100 rounded-3xl flex justify-center items-end"
        >
          <img
            :src="newAvatar || profileData.data.avatar || UserImage"
            :alt="profileData.data.name"
            class=""
          />
        </div>

        <input
          type="file"
          id="upload-avatar"
          class="hidden"
          @change="uploadImage"
        />
        <label
          class="cursor-pointer flex items-center justify-center gap-[1.19rem] leading-normal text-gray-700 text-2xl w-full h-[3.5625rem] border border-gray-200 bg-white rounded-[.75rem]"
          for="upload-avatar"
        >
          <div class="loading-container" v-if="isUploading">
            <shared-loders-loader-button />
          </div>
          <img
            v-else
            src="@/assets/images/upload-icon.svg"
            alt="upload avatar"
            class=""
          />
          <span>تحميل صورة جديدة</span>
        </label>

        <div
          class="flex items-center gap-4 text-2xl text-gray-500 leading-normal"
        >
          <span>كود التاجر:</span>
          <span ref="copyRef">{{ profileData.data.id }}</span>
          <img
            v-if="!copied"
            @click="copyToClipoard"
            src="@/assets/images/clipboard.svg"
            alt="clipboard"
            class="cursor-pointer"
          />
          <Icon v-else name="la:check-circle" class="text-primary-300" />
        </div>
      </div>

      <div class="flex-1 max-w-[38rem]">
        <form class="mb-24" @submit.prevent="submitInfo">
          <h5 class="text-2xl text-gray-700 mb-16">المعلومات الشخصية</h5>
          <div class="mb-6">
            <label for="firstName" class="text-2xl text-gray-500 mb-6 block"
              >الاسم:</label
            >
            <shared-form-input
              placeholder="الاسم الأول"
              class="bg-transparent !w-full"
              id="firstName"
              type="text"
              v-model="form.name"
            />
          </div>

          <div class="flex-1 mb-6">
            <label for="phoneNumber" class="text-2xl text-gray-500 mb-6 block"
              >رقم الهاتف:</label
            >
            <shared-form-input
              placeholder="رقم الهاتف"
              class="bg-transparent !w-full"
              id="phoneNumber"
              type="text"
              v-model="form.phone"
            />
          </div>

          <div class="flex-1 mb-24">
            <label for="email" class="text-2xl text-gray-500 mb-6 block"
              >البريد الإلكتروني:</label
            >
            <shared-form-input
              placeholder="البريد الإلكتروني"
              class="bg-transparent !w-full"
              id="email"
              type="email"
              v-model="form.email"
            />
          </div>

          <shared-buttons-secondary-button
            submit-title="حفظ التغييرات"
            type="submit"
            class="!text-[1.875rem] !px-[3.5rem] w-auto h-auto py-[1.25rem]"
            :loading="isUpdateInfo"
          />
        </form>
        <form @submit.prevent="submitPassword">
          <h5 class="text-2xl text-gray-700 mb-16">تغيير كلمة المرور</h5>

          <div class="flex-1 mb-16">
            <shared-form-input
              placeholder="كلمة المرور الحالية"
              class="bg-transparent !w-full"
              id="currentPassword"
              type="password"
              v-model="passwordForm.old_password"
            />
          </div>

          <div class="flex-1 mb-6">
            <shared-form-input
              placeholder="كلمة المرور الجديدة"
              class="bg-transparent !w-full"
              id="newPassword"
              type="password"
              v-model="passwordForm.new_password"
            />
          </div>

          <div class="flex-1 mb-24">
            <shared-form-input
              placeholder="تأكيد كلمة المرور الجديدة"
              class="bg-transparent !w-full"
              id="confirmNewPassword"
              type="password"
              v-model="passwordForm.confirm_new_password"
            />
          </div>

          <shared-buttons-secondary-button
            submit-title="حفظ التغييرات"
            type="submit"
            class="!text-[1.875rem] !px-[3.5rem] w-auto h-auto py-[1.25rem]"
            :loading="isUpdatePassword"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.loading-container .lds-ellipsis div {
  background-color: theme("colors.primary.300");
}
</style>
