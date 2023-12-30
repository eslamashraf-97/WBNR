<script setup>
import { apiCreateWithdrawUrl } from "@/server";

const props = defineProps(["selectedPayment", "data"]);

const emits = defineEmits(["next"]);

const form = reactive({
  bank_name: "",
  bank_address: "",
  swift_number: "",
  owner_name: "",
  owner_address: "",
  owner_phone: "",
  iban: "",
});

const { fire } = useApi({
  url: () => apiCreateWithdrawUrl + "/" + props.data.id,
  requestOptions: {
    method: "post",
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
      تحويل بنكي
    </h6>
    <div class="mb-6">
      <shared-form-input
        class="w-full bg-transparent"
        placeholder="اسم البنك"
        v-model="form.bank_name"
        type="text"
      />
    </div>

    <div class="mb-6">
      <shared-form-input
        class="w-full bg-transparent"
        placeholder="عنوان البنك"
        v-model="form.bank_address"
        type="text"
      />
    </div>

    <div class="mb-6">
      <shared-form-input
        class="w-full bg-transparent"
        placeholder="#ٍٍSwift NO"
        v-model="form.swift_number"
        type="text"
      />
    </div>

    <div class="mb-6">
      <shared-form-input
        class="w-full bg-transparent"
        placeholder="اسم المستفيد"
        v-model="form.owner_name"
        type="text"
      />
    </div>

    <div class="mb-6">
      <shared-form-input
        class="w-full bg-transparent"
        placeholder="عنوان المستفيد"
        v-model="form.owner_address"
        type="text"
      />
    </div>

    <div class="mb-6">
      <shared-form-input
        class="w-full bg-transparent"
        placeholder="رقم موبايل المستفيد"
        v-model="form.owner_phone"
        type="text"
      />
    </div>

    <div>
      <shared-form-input
        class="w-full bg-transparent"
        placeholder="IBAN"
        v-model="form.iban"
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
