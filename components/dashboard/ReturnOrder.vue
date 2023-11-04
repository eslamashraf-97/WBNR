<script setup>
import { apiUploadFilesUrl, apiCreateReturnOrderUrl } from "@/server";

const props = defineProps(["data"]);
const emits = defineEmits(["hide", "refresh"]);

const { selectedCountry } = useCountries();

const orderTypes = [
  {
    title: "استبدال",
    value: "refund",
  },
  {
    title: "استرجاع",
    value: "exchange",
  },
];

const form = reactive({
  reason: "",
  return_type: "refund",
  image: "",
});

const selectedType = computed(() =>
  orderTypes.find((item) => item.value === form.return_type),
);

const { fire } = useApi({
  url: apiCreateReturnOrderUrl,
  requestOptions: {
    method: "post",
    onResponse: (response) => {
      if (response.response.ok) {
        emits("refresh");
        emits("hide");
      }
    },
  },
});

const isSubmitting = ref(false);

async function createReturnOrder() {
  isSubmitting.value = true;
  await fire({
    ...form,
    order_item_id: props.data.id,
    order_id: props.data.order.id,
    country_id: selectedCountry.value.id,
  });
  isSubmitting.value = false;
}

const isUploading = ref(false);

const uploadedImage = ref(null);

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
            form.image = response.response._data.url;
            uploadedImage.value = files[0];
          }
        },
      },
    });

    await uploadFire(fd);

    isUploading.value = false;
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50">
    <div class="fixed inset-0 bg-black/20" @click="$emit('hide')"></div>
    <div class="w-full h-full px-4 overflow-auto">
      <div
        class="relative z-10 bg-white rounded-lg shadow-main p-8 xl:p-16 w-full max-w-[45rem] my-12 mx-auto"
        v-if="data"
      >
        <div class="relative mb-16">
          <button
            type="button"
            @click="$emit('hide')"
            class="absolute top-0 end-0 text-[1.6rem] text-gray-500"
          >
            <Icon name="clarity:times-line" />
          </button>
        </div>

        <form @submit.prevent="createReturnOrder">
          <div class="mb-16">
            <label
              for="reason"
              class="block leading-normal text-gray-700 text-2xl mb-4"
              >تفاصيل الطلب (المشكلة)</label
            >
            <textarea
              id="reason"
              placeholder="اكتب هنا .."
              v-model="form.reason"
              class="h-[7.125rem] w-full block border border-gray-200 rounded-[11px] px-4 py-[.75rem] focus:border-primary-300 focus-within:!outline-0"
            ></textarea>
          </div>

          <div class="mb-16">
            <shared-menu
              :items="orderTypes"
              :button-props="{
                class: `h-[3.3125rem]  px-8 py-[.38rem]`,
              }"
              :menu-props="{
                class: `max-w-[8rem]`,
              }"
            >
              <template #label>
                <div class="flex items-center gap-[19px]">
                  <Icon name="iconamoon:arrow-down-2-duotone" />
                  <span v-if="form.return_type">{{ selectedType.title }}</span>
                  <span v-else>نوع الطلب</span>
                </div>
              </template>
              <template #item="{ data }">
                <button
                  type="button"
                  class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"
                  @click="form.return_type = data.value"
                >
                  <span>{{ data.title }}</span>
                </button>
              </template>
            </shared-menu>
          </div>

          <div class="mb-16 flex items-center gap-4 flex-wrap">
            <input
              type="file"
              id="upload-avatar"
              class="hidden"
              @change="uploadImage"
            />
            <label
              class="cursor-pointer flex items-center justify-center gap-[1.19rem] leading-normal text-gray-700 text-xl w-fit h-[3.0625rem] border border-gray-200 bg-gray-100 rounded-[.75rem] px-8"
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
              <span>صورة او فيديو للمنتج</span>
            </label>

            <div v-if="uploadedImage">{{ uploadedImage.name }}</div>
          </div>

          <shared-buttons-primary-button
            submit-title="ارسال طلب"
            type="submit"
            :loading="isSubmitting"
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
