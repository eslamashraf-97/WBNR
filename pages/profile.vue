<script setup>
import UserImage from "@/assets/images/user-image.svg";
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

function uploadImage(e) {
  const files = e.target.files;
  if (files.length) {
    isUploading.value = true;
  }
}

const form = reactive({
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  old_password: "",
  new_password: "",
  confirm_new_password: "",
});
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
            :src="newAvatar || user.avatar || UserImage"
            :alt="user.name"
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
          <img
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
          <span ref="copyRef">ui3750c1794469d3</span>
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

      <form class="flex-1 max-w-[38rem]">
        <h5 class="text-2xl text-gray-700 mb-16">المعلومات الشخصية</h5>
        <div class="flex gap-6 mb-6">
          <div class="flex-1">
            <label for="firstName" class="text-2xl text-gray-500 mb-6 block"
              >الاسم الأول:</label
            >
            <shared-form-input
              placeholder="الاسم الأول"
              class="bg-transparent !w-full"
              id="firstName"
              type="text"
              v-model="form.first_name"
            />
          </div>

          <div class="flex-1">
            <label for="lastName" class="text-2xl text-gray-500 mb-6 block"
              >الاسم الأخير:</label
            >
            <shared-form-input
              placeholder="الاسم الأخير"
              class="bg-transparent !w-full"
              id="lastName"
              type="text"
              v-model="form.last_name"
            />
          </div>
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
            v-model="form.phone_number"
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

        <h5 class="text-2xl text-gray-700 mb-16">تغيير كلمة المرور</h5>

        <div class="flex-1 mb-16">
          <shared-form-input
            placeholder="كلمة المرور الحالية"
            class="bg-transparent !w-full"
            id="currentPassword"
            type="password"
            v-model="form.old_password"
          />
        </div>

        <div class="flex-1 mb-6">
          <shared-form-input
            placeholder="كلمة المرور الجديدة"
            class="bg-transparent !w-full"
            id="newPassword"
            type="password"
            v-model="form.new_password"
          />
        </div>

        <div class="flex-1 mb-24">
          <shared-form-input
            placeholder="تأكيد كلمة المرور الجديدة"
            class="bg-transparent !w-full"
            id="confirmNewPassword"
            type="password"
            v-model="form.confirm_new_password"
          />
        </div>

        <shared-buttons-secondary-button
          submit-title="حفظ التغييرات"
          type="submit"
          class="!text-[1.875rem] !px-[3.5rem] w-auto h-auto py-[1.25rem]"
        />
      </form>
    </div>
  </div>
</template>
