<script setup>
import { apiCreateWithdrawUrl } from "@/server";

const props = defineProps(["selectedPayment", "data"]);

const emits = defineEmits(["next"]);

const form = reactive({
  instapay_number: "",
  instapay_name: "",
});

const { fire } = useApi({
  url: () => apiCreateWithdrawUrl + "/" + props.data.id,
  requestOptions: {
    method: "pst",
    onResponse: (response) => {
      if (response.response.ok) {
        emits("next");
      }
    },
  },
});

const pending = ref(false);

async function createWithdraw() {
  pending.value = true;
  await fire({
    amount: props.data.available_balance,
    wallet_request_method: props.selectedPayment,
    withdraw_method_details: form,
  });
  pending.value = false;
}
</script>

<template>
  <form @submit.prevent="createWithdraw">
    <h6 class="text-2xl text-gray-700 leading-normal font-normal mb-[2.25rem]">
      انستا باي
    </h6>
    <div class="mb-6">
      <shared-form-input
        class="w-full bg-transparent"
        placeholder="اسم المستفيد"
        v-model="form.instapay_name"
        type="text"
      />
    </div>
    <div class="mb-6">
      <shared-form-input
        class="w-full bg-transparent"
        placeholder="رقم موبايل المستفيد"
        v-model="form.instapay_number"
        type="text"
      />
    </div>

    <shared-buttons-primary-button
      submit-title="ارسال طلب"
      type="submit"
      class="!min-w-0 !min-h-0 !w-[15.375rem] !h-[4.1875rem] mt-[2.25rem]"
      :loading="pending"
    />
  </form>
</template>
