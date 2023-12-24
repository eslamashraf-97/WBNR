<script setup>
import BankIcon from "@/assets/images/bank-icon.svg";
import InstaIcon from "@/assets/images/insta-icon.svg";
import VodafoneIcon from "@/assets/images/vodafone-icon.svg";
import PaypalIcon from "@/assets/images/paypal-icon.svg";
import { banks } from "@/constants";

const props = defineProps(["data"]);

const emits = defineEmits(["hide", "refresh"]);

const isFinal = ref(false);

const selectedPayment = ref(banks.banktransfer);

function changePayment(payment) {
  selectedPayment.value = payment;
}

const payments = [
  {
    image: BankIcon,
    value: banks.banktransfer,
  },
  {
    image: InstaIcon,
    value: banks.instapay,
  },
  {
    image: VodafoneIcon,
    value: banks.vodafone,
  },
  {
    image: PaypalIcon,
    value: banks.paypal,
  },
];

function next() {
  isFinal.value = true;
  emits("refresh");
}

const amount = ref(props.data.available_balance);
</script>

<template>
  <div class="fixed inset-0 z-50">
    <div class="fixed inset-0 bg-black/20" @click="$emit('hide')"></div>
    <div class="w-full h-full px-4 overflow-auto">
      <div
        class="relative z-10 bg-white rounded-lg shadow-main p-8 xl:p-16 w-full max-w-[45rem] my-12 mx-auto"
        v-if="data"
      >
        <!-- header  -->
        <div v-if="!isFinal" class="relative mb-16">
          <div class="flex items-center gap-5">
            <img :src="data.country.image" :alt="data.country.name" />
            <h6 class="text-2xl text-gray-300 leading-normal font-normal">
              جاهز للسحب
            </h6>
          </div>

          <h4
            class="leading-[6rem] text-[3.75rem] text-primary-300 font-normal flex items-center gap-[.62rem]"
          >
            {{ data.available_balance }}
            <span class="leading-none text-2xl">{{
              data.country.currency
            }}</span>
          </h4>

          <div>
            <label
              for="wallet-withdraw-amount-input"
              class="text-base text-gray-400 font-light mb-5 block"
              >المبلغ المراد سحبه</label
            >

            <shared-form-input
              class="w-full bg-transparent"
              placeholder=""
              v-model="amount"
              type="text"
              id="wallet-withdraw-amount-input"
              @blur="
                parseInt(amount) > parseInt(data.available_balance)
                  ? (amount = data.available_balance)
                  : null
              "
            />
          </div>

          <button
            type="button"
            @click="$emit('hide')"
            class="absolute top-0 end-0 text-[1.6rem] text-gray-500"
          >
            <Icon name="clarity:times-line" />
          </button>
        </div>

        <!-- payments  -->
        <div class="flex items-center justify-between gap-4 mb-16">
          <button
            v-for="(payment, index) in payments"
            type="button"
            :key="index"
            @click="changePayment(payment.value)"
            class="p-4 border border-gray-200 rounded-xl flex items-center justify-center w-[7.5rem] h-[7.5rem]"
            :class="{ 'border-primary-300': payment.value === selectedPayment }"
          >
            <img :src="payment.image" class="max-w-full" :alt="payment.value" />
          </button>
        </div>
        <div>
          <dashboard-withdraw-bank
            v-if="selectedPayment === banks.banktransfer"
            :selectedPayment="selectedPayment"
            :data="{ ...data, available_balance: amount }"
            @next="next"
          />
          <dashboard-withdraw-insta
            v-if="selectedPayment === banks.instapay"
            :selectedPayment="selectedPayment"
            :data="{ ...data, available_balance: amount }"
            @next="next"
          />
          <dashboard-withdraw-vodafone
            v-if="selectedPayment === banks.vodafone"
            :selectedPayment="selectedPayment"
            :data="{ ...data, available_balance: amount }"
            @next="next"
          />
          <dashboard-withdraw-paypal
            v-if="selectedPayment === banks.paypal"
            :selectedPayment="selectedPayment"
            :data="{ ...data, available_balance: amount }"
            @next="next"
          />
          <dashboard-withdraw-final
            v-if="isFinal"
            :selectedPayment="selectedPayment"
            :data="{ ...data, available_balance: amount }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
