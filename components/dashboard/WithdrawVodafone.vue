<script setup>
import { apiCreateWithdrawUrl } from "@/server";

const props = defineProps(["selectedPayment", "data"]);
const emits = defineEmits(["next"]);

const form = reactive({
  vodafone_cash_number: "",
});

const { fire } = useApi({
  url: () => apiCreateWithdrawUrl + "/" + props.data.id,
  requestOptions: {
    method: "pst",
    onResponse: () => {
      emits("next");
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
      فودافون كاش
    </h6>
    <div class="mb-6">
      <shared-form-input
        class="w-full bg-transparent"
        placeholder="رقم موبايل محفظة فودافون كاش"
        v-model="form.vodafone_cash_number"
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
