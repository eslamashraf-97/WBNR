<script setup>
import { handleDate } from "@/helpers";

import { apiGetMyWalletsUrl, apiGetWithdrawUrl } from "@/server";

import { walletStatus } from "@/constants";

const { fire } = useApi({
  url: apiGetMyWalletsUrl,
});

const { data, pending, refresh } = await fire();

const { fire: withDrawFire } = useApi({
  url: apiGetWithdrawUrl,
});

const {
  data: withdrawData,
  pending: withDrawPending,
  refresh: withDrawRefresh,
} = await withDrawFire();

const requestWithdraw = ref(false);

const requestWithdrawData = ref(null);

const showImage = ref(null)

function makeWithDrawRequest(wallet) {
  requestWithdraw.value = true;
  requestWithdrawData.value = wallet;
}

function hideWithDrawRequest() {
  requestWithdraw.value = false;
  requestWithdrawData.value = null;
}

function refreshData() {
  refresh();
  withDrawRefresh();
  requestWithdraw.value = false
}
</script>

<template>
  <section>
    <div v-if="pending" class="flex items-center justify-center">
      <shared-loders-loading />
    </div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-4 gap-7"
    >
      <div v-for="wallet in data.data" :key="wallet.id" class="">
        <shared-cards-wallet
          title="ارباحك"
          :value="wallet.available_balance"
          :flag="wallet.country.image"
          :expected="wallet.pending_balance"
          :currency="wallet.country.currency"
        />
        <div class="flex justify-center">
          <shared-buttons-secondary-button
            submitTitle="سحب الارباح"
            class="w-full mt-4"
            @click="makeWithDrawRequest(wallet)"
          />
        </div>
      </div>
    </div>
    <h4 class="my-16 text-gray-700 font-normal">طلبات السحب السابقة</h4>
    <div class="w-full overflow-auto">
      <div class="table w-full" v-if="!withDrawPending && withdrawData.data">
        <table class="w-full">
          <thead>
            <tr>
              <th class="text-2xl text-gray-800 font-normal leading-normal">
                تاريخ الطلب
              </th>
              <th class="text-2xl text-gray-800 font-normal leading-normal">
                المبلغ
              </th>
              <th class="text-2xl text-gray-800 font-normal leading-normal">
                العملة
              </th>
              <th class="text-2xl text-gray-800 font-normal leading-normal whitespace-nowrap">
                صورة الوصل
              </th>
              <th class="text-2xl text-gray-800 font-normal leading-normal">
                التعليق
              </th>
              <th class="text-2xl text-gray-800 font-normal leading-normal">
                الحالة
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="withdraw in withdrawData.data" :key="withdraw.id">
              <td
                class="text-2xl text-gray-700 font-normal leading-normal w-full"
              >
                {{ handleDate(withdraw.created_at) }}
              </td>
              <td class="text-2xl text-gray-700 font-normal leading-normal">
                {{ withdraw.amount }}
              </td>
              <td>
                <img
                  v-if="withdraw.country"
                  :src="withdraw.country.image"
                  :alt="withdraw.country.name + 'flag'"
                  class="m-auto"
                />
              </td>
              <td>
                <img
                  @click="showImage = withdraw.invoice_path"
                  v-if="withdraw.invoice_path"
                  :src="withdraw.invoice_path"
                  class="m-auto w-[100px] rounded-sm cursor-pointer"
                />
              </td>
              <td>
                {{ withdraw.reason }}
              </td>
              <td class="text-2xl font-normal leading-normal">
                <shared-status
                  :status="withdraw.status"
                  :statuses="walletStatus"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <teleport to="body">
    <Transition>
      <dashboard-wallet-withdraw-request
        v-if="requestWithdraw"
        :data="requestWithdrawData"
        @hide="hideWithDrawRequest"
        @refresh="refreshData"
      />
    </Transition>
  </teleport>
  <teleport to="body">
    <Transition>
      <div class="fixed inset-0 z-50 bg-[rgba(0,0,0,0.6)]" @click="showImage = null" v-if="showImage">
        <div class="w-full h-full px-4 overflow-auto">
          <div
            class="relative z-10 bg-white rounded-lg shadow-main p-6 xl:p-8 w-full max-w-[45rem] my-12 mx-auto"
          >
            <div>
              <img :src="showImage">
            </div>
          </div>
        </div>
      </div>

    </Transition>
  </teleport>
</template>

<style scoped></style>
