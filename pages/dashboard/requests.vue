<script setup>
import { apiGetOrdersUrl } from "@/server";

import { handleDate } from "@/helpers";

const { selectedCountry } = useCountries();

const route = useRoute();

const query = reactive({
  country_id: selectedCountry.value?.id,
  name: "",
  from: "",
  to: "",
});

if (route.query.status) {
  query.status = route.query.status;
}

const { fire } = useApi({
  url: apiGetOrdersUrl,
  requestOptions: {
    query,
  },
});

const orderId = ref(0)

const { fire: reqCancelOrder } = useApi({
  url: () => `customer/orders/${orderId.value}/cancel`,
  requestOptions: {
    method: "POST",
  },
});
const divs = ref([]);

const { data, pending, refresh } = await fire();

function changeCountry(country) {
  query.country_id = country;
}

function filterOrders() {
  refresh();
}

const moreDetails = ref(false);

const moreDetailsData = ref(null);

const selected = ref(null);
const comment = ref(null);

const orderHistoryObj = ref();
const isShowOrderHistory = ref(false);
const showCloseOrder = ref(false);
function showMoreDetails(details) {
  moreDetails.value = true;
  moreDetailsData.value = details;
}

function hideMoreDetails() {
  moreDetails.value = false;
  moreDetailsData.value = null;
}

const selectedOrder = ref(null);

const isShowReturnModal = ref(false);
const reasonCancel = ref('');
async function cancelOrder () {
  const { status } = await reqCancelOrder({
    reason : reasonCancel.value
  });
  if (status.value === "success") {
    showCloseOrder.value = false
    reasonCancel.value = ''
    await fire()
  }
}

function showReturnModal(order) {
  isShowReturnModal.value = true;
  selectedOrder.value = order;
}
const toggleRow = (element) => {
  // selected.value === element ? selected.value = null : selected.value = element
  divs.value[element]
    .getElementsByClassName("expanded-row-content")[0]
    .classList.toggle("hide-row");
};
function getDate(order, status) {
  const obj = order.find((data) => data.status === status);
  if (obj) {
    return obj.date.substring(0, 10);
  } else {
    return "----";
  }
}
function hideReturnModal() {
  isShowReturnModal.value = false;
  selectedOrder.value = null;
}

function openPopupToShowComment (orderHistory) {
  isShowOrderHistory.value = true;
  orderHistoryObj.value = orderHistory
  console.log('orderHistory => ', orderHistory);
}

function  openPopupToShowCloseOrder (order) {
  orderId.value = order
  showCloseOrder.value = true
}

function calculateWidthOfDone(status) {
  console.log("ind", status);
  switch (status) {
    case "pending":
      return "w-[0%]";
    case "processing":
      return "w-[35%]";
    case "shipping":
      return "w-[68%]";
    case "delivered":
      return "w-[100%]";
  }
}
function calculateWidthOfWait(status) {
  console.log("ind", status);
  switch (status) {
    case "pending":
      return "w-[0%]";
    case "confirmed":
      return "w-[35%]";
    case "processing":
      return "w-[68%]";
    case "shipping":
      return "w-[100%]";
  }
}

const status = ["pending", "confirmed", "processing", "shipping", "delivered"];

function isReachable(myStatus, data) {
  const currentStatusIndex = status.indexOf(myStatus);

  const thisStatusIndex = status.indexOf(data.status);

  console.log({
    currentStatusIndex,
    thisStatusIndex,
  });

  return thisStatusIndex >= currentStatusIndex;
}
</script>

<template>
  <section class="min-h-screen">
    <div class="mb-16">
      <shared-cards-filter>
        <template v-slot:default>
          <div class="flex-1">
            <div class="flex-1 w-full mb-9">
              <shared-form-input
                type="search"
                placeholder="اسم العميل او رقم الهاتف"
                id="requeste-search-input"
                class="w-full"
                v-model="query.name"
              />
            </div>
            <div class="flex justify-between items-center">
              <div class="">
                <!-- <shared-from-to /> -->
              </div>
              <div class="flex gap-9 align-items-center">
                <dashboard-country-menu @changeCountry="changeCountry" />
                <shared-buttons-secondary-button
                  submit-title="البحث"
                  class="!h-[3.5625rem] w-[105px]"
                  @click="filterOrders"
                  :disabled="pending"
                  :loading="pending"
                />
              </div>
            </div>
          </div>
        </template>
      </shared-cards-filter>
    </div>

    <div class="table overflow-auto w-full" v-if="!pending && data.data">
      <div class="p-4 mb-4">
        <div>
          <table class="w-full">
            <thead>
              <tr>
                <th></th>
                <th
                  class="text-xl text-gray-800 font-normal leading-normal block xl:hidden 2xl:block"
                >
                  كود الطلب
                </th>
                <th
                  class="text-xl text-gray-800 font-normal leading-normal whitespace-nowrap"
                >
                  اسم العميل
                </th>
                <th class="text-xl text-gray-800 font-normal leading-normal">
                  المبلغ
                </th>
                <th class="text-xl text-gray-800 font-normal leading-normal">
                  الحالة
                </th>
                <th class="text-xl text-gray-800 font-normal leading-normal">
                  تاريخ الطلب
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(order, key) in data.data"
                :key="order.id"
                :ref="
                  (el) => {
                    divs[key] = el;
                  }
                "
              >
                <td>
                  <img
                    :src="order.country.image"
                    :alt="order.country.name + 'flag'"
                    class="m-auto"
                  />
                </td>
                <td
                  class="text-xl text-gray-500 font-normal leading-normal block xl:hidden 2xl:block"
                >
                  {{ order.order_number.substring(0, 5) + "..." }}
                </td>
                <td class="text-xl text-gray-700 font-normal leading-normal">
                  {{ order.client.name.substring(0, 5) + "..." }}
                </td>
                <td class="text-xl text-gray-700 font-normal leading-normal">
                  {{ order.final_price }}
                </td>
                <td class="text-xl text-gray-700 font-normal leading-normal">
                  <shared-status class="!text-xl" :status="order.status" />
                </td>
                <td class="text-xl text-gray-700 font-normal leading-normal">
                  {{ handleDate(order.created_at) }}
                </td>
                <td
                  class="text-sm text-gray-700 font-normal flex justify-center items-center leading-normal cursor-pointer"
                  @click="toggleRow(key)"
                >
                  <span
                    class="bg-primary-100 text-primary-300 px-2 py-1 rounded-sm whitespace-nowrap"
                    >تفاصيل الطلب</span
                  >
                </td>
                <!--Order Details-->
                <td class="expanded-row-content hide-row px-4">


                  <div class="timeline flex justify-between relative">
                    <div class="bg-white z-30">
                      <svg
                        width="98"
                        height="98"
                        viewBox="0 0 98 98"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="6.5"
                          y="6.5"
                          width="85"
                          height="85"
                          rx="42.5"
                          fill=""
                          :class="
                            isReachable('delivered', order)
                              ? 'fill-primary-100'
                              : 'fill-red-100'
                          "
                        />
                        <rect
                          x="6.5"
                          y="6.5"
                          width="85"
                          height="85"
                          rx="42.5"
                          stroke="white"
                          stroke-width="13"
                        />
                        <path
                          d="M45.1644 34.9793C46.1394 34.1485 46.6267 33.7331 47.1365 33.4895C48.3153 32.926 49.6857 32.926 50.8645 33.4895C51.3742 33.7331 51.8616 34.1485 52.8365 34.9793C53.2245 35.31 53.4185 35.4753 53.6258 35.6142C54.1008 35.9325 54.6341 36.1535 55.195 36.2642C55.4399 36.3125 55.6938 36.3328 56.2022 36.3734C57.479 36.4753 58.1173 36.5262 58.65 36.7143C59.8819 37.1495 60.851 38.1185 61.2862 39.3504C61.4743 39.8831 61.5251 40.5215 61.6272 41.7984C61.6676 42.3066 61.6878 42.5606 61.7363 42.8054C61.8469 43.3663 62.0679 43.8997 62.3864 44.3747C62.5252 44.5819 62.6905 44.7759 63.0212 45.1639C63.852 46.1388 64.2675 46.6264 64.5111 47.1359C65.0744 48.3148 65.0744 49.6851 64.5111 50.864C64.2675 51.3737 63.852 51.8611 63.0212 52.836C62.6905 53.224 62.5252 53.418 62.3864 53.6253C62.0679 54.1002 61.8469 54.6336 61.7363 55.1947C61.6878 55.4393 61.6676 55.6935 61.6272 56.2016C61.5251 57.4785 61.4743 58.1168 61.2862 58.6495C60.851 59.8814 59.8819 60.8505 58.65 61.2857C58.1173 61.4738 57.479 61.5246 56.2022 61.6266C55.6938 61.6671 55.4399 61.6875 55.195 61.7357C54.6341 61.8466 54.1008 62.0674 53.6258 62.3858C53.4185 62.5247 53.2245 62.69 52.8365 63.0207C51.8616 63.8515 51.3742 64.267 50.8645 64.5106C49.6857 65.0739 48.3153 65.0739 47.1365 64.5106C46.6267 64.267 46.1394 63.8515 45.1644 63.0207C44.7764 62.69 44.5824 62.5247 44.3752 62.3858C43.9002 62.0674 43.3668 61.8466 42.8059 61.7357C42.5611 61.6875 42.307 61.6671 41.7988 61.6266C40.522 61.5246 39.8836 61.4738 39.3509 61.2857C38.119 60.8505 37.15 59.8814 36.7148 58.6495C36.5267 58.1168 36.4757 57.4785 36.3739 56.2016C36.3333 55.6935 36.313 55.4393 36.2647 55.1947C36.154 54.6336 35.933 54.1002 35.6147 53.6253C35.4758 53.418 35.3105 53.224 34.9798 52.836C34.149 51.8611 33.7336 51.3737 33.4899 50.864C32.9265 49.6851 32.9265 48.3148 33.4899 47.1359C33.7336 46.6262 34.149 46.1388 34.9798 45.1639C35.3105 44.7759 35.4758 44.5819 35.6147 44.3747C35.933 43.8997 36.154 43.3663 36.2647 42.8054C36.313 42.5606 36.3333 42.3066 36.3739 41.7984C36.4757 40.5215 36.5267 39.8831 36.7148 39.3504C37.15 38.1185 38.119 37.1495 39.3509 36.7143C39.8836 36.5262 40.522 36.4753 41.7988 36.3734C42.307 36.3328 42.5611 36.3125 42.8059 36.2642C43.3668 36.1535 43.9002 35.9325 44.3752 35.6142C44.5824 35.4753 44.7764 35.31 45.1644 34.9793Z"
                          :class="
                            isReachable('delivered', order)
                              ? 'stroke-primary-300'
                              : 'stroke-red-500'
                          "
                          stroke-width="2.8"
                        />
                        <path
                          d="M42.9492 49.8651L46.4072 53.3231L55.052 44.6782"
                          :class="
                            isReachable('delivered', order)
                              ? 'stroke-primary-300'
                              : 'stroke-red-500'
                          "
                          stroke-width="2.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <h5 class="text-xl text-gray-700 my-1">تم التوصيل</h5>
                      <p class="text-gray-200">
                        {{ getDate(order.statusHistories, "delivered") }}
                      </p>
<!--                      <p-->
<!--                        class="text-error-400 text-xl font-semibold cursor-pointer"-->
<!--                        @click="-->
<!--                          comment =-->
<!--                            order.statusHistories.find(-->
<!--                              (data) => data.status === 'delivered',-->
<!--                            )?.reason || 'لا يوجد تعليق'-->
<!--                        "-->
<!--                      >-->
<!--                        {{order.statusHistories.find((data) => data.status === "delivered")?.reason?.substring(0, 16) || "لا يوجد تعليق" }}-->
<!--                      </p>-->
                    </div>
                    <div class="bg-white z-30">
                      <svg
                        width="98"
                        height="98"
                        viewBox="0 0 98 98"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="6.5"
                          y="6.5"
                          width="85"
                          height="85"
                          rx="42.5"
                          :class="
                            isReachable('shipping', order)
                              ? 'fill-primary-100'
                              : 'fill-red-100'
                          "
                        />
                        <rect
                          x="6.5"
                          y="6.5"
                          width="85"
                          height="85"
                          rx="42.5"
                          stroke="white"
                          stroke-width="13"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M43.0939 58.6543C43.1057 60.3062 42.1445 61.802 40.6599 62.4427C39.1752 63.0832 37.4605 62.7417 36.3175 61.5778C35.1744 60.4142 34.8289 58.658 35.4425 57.1307C36.0561 55.6032 37.5076 54.6065 39.1182 54.6065C40.1688 54.6026 41.1778 55.0267 41.9234 55.7858C42.669 56.5449 43.09 57.5768 43.0939 58.6543Z"
                          :class="
                            isReachable('shipping', order)
                              ? 'stroke-primary-300'
                              : 'stroke-red-500'
                          "
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M62.0363 58.6543C62.048 60.3062 61.0869 61.802 59.6022 62.4427C58.1177 63.0832 56.4029 62.7417 55.2599 61.5778C54.1168 60.4142 53.7713 58.658 54.3849 57.1307C54.9984 55.6032 56.45 54.6065 58.0605 54.6065C59.1112 54.6026 60.1202 55.0267 60.8657 55.7858C61.6114 56.5449 62.0324 57.5768 62.0363 58.6543Z"
                          :class="
                            isReachable('shipping', order)
                              ? 'stroke-primary-300'
                              : 'stroke-red-500'
                          "
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M53.6182 60.0506C54.3894 60.0506 55.0146 59.4256 55.0146 58.6542C55.0146 57.883 54.3894 57.2578 53.6182 57.2578V60.0506ZM43.0891 57.2578C42.3178 57.2578 41.6926 57.883 41.6926 58.6542C41.6926 59.4256 42.3178 60.0506 43.0891 60.0506V57.2578ZM52.2217 58.6542C52.2217 59.4256 52.847 60.0506 53.6182 60.0506C54.3894 60.0506 55.0146 59.4256 55.0146 58.6542H52.2217ZM55.0146 48.8475C55.0146 48.0763 54.3894 47.4511 53.6182 47.4511C52.847 47.4511 52.2217 48.0763 52.2217 48.8475H55.0146ZM53.6182 57.2578C52.847 57.2578 52.2217 57.883 52.2217 58.6542C52.2217 59.4256 52.847 60.0506 53.6182 60.0506V57.2578ZM54.0829 60.0506C54.8541 60.0506 55.4793 59.4256 55.4793 58.6542C55.4793 57.883 54.8541 57.2578 54.0829 57.2578V60.0506ZM62.0281 57.2579C61.2569 57.2613 60.6344 57.8891 60.6378 58.6603C60.6411 59.4315 61.2691 60.0542 62.0404 60.0506L62.0281 57.2579ZM66.2459 54.2955L67.6423 54.2891C67.6419 54.2087 67.6347 54.1286 67.6205 54.0495L66.2459 54.2955ZM66.6456 48.6015C66.5097 47.8424 65.7843 47.3371 65.025 47.473C64.2659 47.6088 63.7606 48.3344 63.8965 49.0936L66.6456 48.6015ZM53.6163 38.7337C52.8451 38.7337 52.2199 39.3589 52.2199 40.1301C52.2199 40.9013 52.8451 41.5265 53.6163 41.5265V38.7337ZM60.2807 40.1301V41.5265C60.29 41.5265 60.2995 41.5265 60.309 41.5262L60.2807 40.1301ZM64.4904 44.4888L63.0946 44.4491C63.0918 44.5447 63.0989 44.6403 63.1158 44.7345L64.4904 44.4888ZM63.8944 49.0933C64.0302 49.8524 64.7556 50.3579 65.5149 50.2223C66.274 50.0866 66.7812 49.3608 66.6456 48.6015L63.8944 49.0933ZM55.0109 40.1301C55.0109 39.3589 54.3877 38.7337 53.6163 38.7337C52.8451 38.7337 52.2199 39.3589 52.2199 40.1301H55.0109ZM52.218 48.8475C52.218 49.6189 52.8432 50.2439 53.6145 50.2439C54.3858 50.2439 55.0109 49.6189 55.0109 48.8475H52.218ZM52.2199 40.1301C52.2199 40.9013 52.8451 41.5265 53.6163 41.5265C54.3877 41.5265 55.0109 40.9013 55.0109 40.1301H52.2199ZM53.6145 38.6406H55.0111L55.0109 38.6306L53.6145 38.6406ZM51.6321 36.6353V38.0318L51.6414 38.0317L51.6321 36.6353ZM33.7417 36.6353L33.7285 38.0317H33.7417V36.6353ZM31.7539 38.6369L30.3575 38.6244V38.6369H31.7539ZM31.7539 56.6508H30.3574L30.3575 56.6634L31.7539 56.6508ZM33.7417 58.6523V57.2559L33.7285 57.2561L33.7417 58.6523ZM35.1432 60.0488C35.9144 60.0488 36.5396 59.4237 36.5396 58.6523C36.5396 57.8811 35.9144 57.2559 35.1432 57.2559V60.0488ZM53.6182 47.4511C52.847 47.4511 52.2217 48.0763 52.2217 48.8475C52.2217 49.6189 52.847 50.2439 53.6182 50.2439V47.4511ZM65.2728 50.2439C66.044 50.2439 66.6693 49.6189 66.6693 48.8475C66.6693 48.0763 66.044 47.4511 65.2728 47.4511V50.2439ZM53.6182 57.2578H43.0891V60.0506H53.6182V57.2578ZM55.0146 58.6542V48.8475H52.2217V58.6542H55.0146ZM53.6182 60.0506H54.0829V57.2578H53.6182V60.0506ZM62.0404 60.0506C63.5446 60.0441 64.977 59.4245 66.0247 58.3401L64.0162 56.3994C63.4841 56.9502 62.7682 57.2546 62.0281 57.2579L62.0404 60.0506ZM66.0247 58.3401C67.0712 57.257 67.6492 55.7991 67.6423 54.2891L64.8494 54.302C64.8531 55.0937 64.5495 55.8475 64.0162 56.3994L66.0247 58.3401ZM67.6205 54.0495L66.6456 48.6015L63.8965 49.0936L64.8712 54.5416L67.6205 54.0495ZM53.6163 41.5265H60.2807V38.7337H53.6163V41.5265ZM60.309 41.5262C61.0448 41.5113 61.7622 41.8059 62.2919 42.3542L64.3007 40.414C63.2392 39.3149 61.7767 38.703 60.2522 38.734L60.309 41.5262ZM62.2919 42.3542C62.8227 42.9039 63.1169 43.6605 63.0946 44.4491L65.8863 44.5286C65.9299 42.9994 65.3609 41.5117 64.3007 40.414L62.2919 42.3542ZM63.1158 44.7345L63.8944 49.0933L66.6456 48.6015L65.8651 44.2432L63.1158 44.7345ZM52.2199 40.1301L52.218 48.8475H55.0109V40.1301H52.2199ZM55.0109 40.1301L55.0111 38.6406H52.218L52.2199 40.1301H55.0109ZM55.0109 38.6306C54.9977 36.7781 53.5141 35.2263 51.6229 35.2389L51.6414 38.0317C51.9246 38.0298 52.2154 38.273 52.2182 38.6506L55.0109 38.6306ZM51.6321 35.2389H33.7417V38.0317L51.6321 38.0318V35.2389ZM33.755 35.2389C32.8507 35.2303 31.9872 35.591 31.3528 36.2298L33.3345 38.1978C33.4456 38.0859 33.588 38.0304 33.7285 38.0317L33.755 35.2389ZM31.3528 36.2298C30.7196 36.8673 30.3655 37.7294 30.3575 38.6244L33.1503 38.6493C33.1519 38.4727 33.2221 38.311 33.3345 38.1978L31.3528 36.2298ZM30.3575 38.6369L30.3574 56.6508H33.1503V38.6369H30.3575ZM30.3575 56.6634C30.3655 57.5583 30.7196 58.4203 31.3528 59.0579L33.3345 57.0898C33.2221 56.9768 33.1519 56.815 33.1503 56.6383L30.3575 56.6634ZM31.3528 59.0579C31.9872 59.6967 32.8507 60.0573 33.755 60.0488L33.7285 57.2561C33.588 57.2574 33.4456 57.2019 33.3345 57.0898L31.3528 59.0579ZM33.7417 60.0488H35.1432V57.2559H33.7417V60.0488ZM53.6182 50.2439H65.2728V47.4511H53.6182V50.2439Z"
                          :class="
                            isReachable('shipping', order)
                              ? 'stroke-primary-300'
                              : 'fill-red-500'
                          "
                        />
                      </svg>
                      <h5 class="text-xl text-gray-700 my-1">جارى للتوصيل</h5>
                      <p class="text-gray-200">
                        {{ getDate(order.statusHistories, "shipping") }}
                      </p>
<!--                      <p-->
<!--                        class="text-error-400 text-xl font-semibold cursor-pointer"-->
<!--                        @click="-->
<!--                          comment =-->
<!--                            order.statusHistories.find(-->
<!--                              (data) => data.status === 'shipping',-->
<!--                            )?.reason || 'لا يوجد تعليق'-->
<!--                        "-->
<!--                      >-->
<!--                        {{-->
<!--                          order.statusHistories.find(-->
<!--                            (data) => data.status === "shipping",-->
<!--                          )?.reason || "لا يوجد تعليق"-->
<!--                        }}-->
<!--                      </p>-->
                    </div>
                    <div class="bg-white z-30">
                      <svg
                        width="98"
                        height="98"
                        viewBox="0 0 98 98"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="6.5"
                          y="6.5"
                          width="85"
                          height="85"
                          rx="42.5"
                          :class="
                            isReachable('processing', order)
                              ? 'fill-primary-100'
                              : 'fill-red-100'
                          "
                        />
                        <rect
                          x="6.5"
                          y="6.5"
                          width="85"
                          height="85"
                          rx="42.5"
                          stroke="white"
                          stroke-width="13"
                        />
                        <path
                          d="M54.7009 35.2688L57.8875 36.9411C61.3158 38.7401 63.0299 39.6397 63.9817 41.2561C64.9336 42.8725 64.9336 44.8839 64.9336 48.9068V49.0932C64.9336 53.116 64.9336 55.1275 63.9817 56.7439C63.0299 58.3604 61.3158 59.2598 57.8875 61.0589L54.7009 62.7311C51.9036 64.199 50.505 64.9331 49.0005 64.9331C47.4959 64.9331 46.0973 64.199 43.3001 62.7311L40.1135 61.0589C36.6852 59.2598 34.9711 58.3604 34.0192 56.7439C33.0674 55.1275 33.0674 53.116 33.0674 49.0932V48.9068C33.0674 44.8839 33.0674 42.8725 34.0192 41.2561C34.9711 39.6397 36.6852 38.7401 40.1135 36.9411L43.3001 35.2688C46.0973 33.8009 47.4959 33.0669 49.0005 33.0669C50.505 33.0669 51.9036 33.8009 54.7009 35.2688Z"
                          :class="
                            isReachable('processing', order)
                              ? 'stroke-primary-300'
                              : 'stroke-red-500'
                          "
                          stroke-width="2.8"
                          stroke-linecap="round"
                        />
                        <path
                          d="M63.3397 41.8301L48.9999 49M48.9999 49L34.6602 41.8301M48.9999 49V64.1364"
                          :class="
                            isReachable('processing', order)
                              ? 'stroke-primary-300'
                              : 'stroke-red-500'
                          "
                          stroke-width="2.8"
                          stroke-linecap="round"
                        />
                      </svg>
                      <h5 class="text-xl text-gray-700 my-1">انتظار الشحن</h5>
                      <p class="text-gray-200">
                        {{ getDate(order.statusHistories, "processing") }}
                      </p>
<!--                      <p-->
<!--                        class="text-error-400 text-xl font-semibold cursor-pointer"-->
<!--                        @click="-->
<!--                          comment =-->
<!--                            order.statusHistories.find(-->
<!--                              (data) => data.status === 'processing',-->
<!--                            )?.reason || 'لا يوجد تعليق'-->
<!--                        "-->
<!--                      >-->
<!--                        {{-->
<!--                          order.statusHistories.find(-->
<!--                            (data) => data.status === "processing",-->
<!--                          )?.reason || "لا يوجد تعليق"-->
<!--                        }}-->
<!--                      </p>-->
                    </div>
                    <div class="bg-white z-30">
                      <svg
                        width="98"
                        height="98"
                        viewBox="0 0 98 98"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="6.5"
                          y="6.5"
                          width="85"
                          height="85"
                          rx="42.5"
                          :class="
                            isReachable('confirmed', order)
                              ? 'fill-primary-100'
                              : 'fill-red-100'
                          "
                        />
                        <rect
                          x="6.5"
                          y="6.5"
                          width="85"
                          height="85"
                          rx="42.5"
                          stroke="white"
                          stroke-width="13"
                        />
                        <path
                          d="M56.0818 34.8389C59.9323 34.8603 62.0176 35.0311 63.378 36.3914C64.9336 37.9469 64.9336 40.4506 64.9336 45.4578V56.08C64.9336 61.0872 64.9336 63.5908 63.378 65.1464C61.8224 66.702 59.3187 66.702 54.3115 66.702H43.6894C38.6822 66.702 36.1785 66.702 34.6229 65.1464C33.0674 63.5908 33.0674 61.0872 33.0674 56.08V45.4578C33.0674 40.4506 33.0674 37.9469 34.6229 36.3914C35.9832 35.0311 38.0685 34.8603 41.9191 34.8389"
                          :class="
                            isReachable('confirmed', order)
                              ? 'stroke-primary-300'
                              : 'stroke-red-500'
                          "
                          stroke-width="2.8"
                        />
                        <path
                          d="M43.6895 51.4798L46.7244 54.3123L54.3115 47.231"
                          :class="
                            isReachable('confirmed', order)
                              ? 'stroke-primary-300'
                              : 'stroke-red-500'
                          "
                          stroke-width="2.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M41.9189 33.9534C41.9189 32.4868 43.1079 31.2979 44.5745 31.2979H53.4262C54.8927 31.2979 56.0817 32.4868 56.0817 33.9534V35.7237C56.0817 37.1903 54.8927 38.3792 53.4262 38.3792H44.5745C43.1079 38.3792 41.9189 37.1903 41.9189 35.7237V33.9534Z"
                          :class="
                            isReachable('confirmed', order)
                              ? 'fill-primary-33'
                              : 'fill-red-500'
                          "
                          stroke-width="2.8"
                        />
                      </svg>
                      <h5 class="text-xl text-gray-700 my-1">تأكيد الطلب</h5>
                      <p class="text-gray-200">
                        {{ getDate(order.statusHistories, "confirmed") }}
                      </p>
<!--                      <p-->
<!--                        class="text-error-400 text-xl font-semibold cursor-pointer"-->
<!--                        @click="-->
<!--                          comment =-->
<!--                            order.statusHistories.find(-->
<!--                              (data) => data.status === 'confirmed',-->
<!--                            )?.reason || 'لا يوجد تعليق'-->
<!--                        "-->
<!--                      >-->
<!--                        {{-->
<!--                          order.statusHistories.find(-->
<!--                            (data) => data.status === "confirmed",-->
<!--                          )?.reason || "لا يوجد تعليق"-->
<!--                        }}-->
<!--                      </p>-->
                    </div>
                    <!-- Lines -->
                    <div
                      class="sm:flex w-full top-[28%] z-1 absolute bg-primary-100 h-1"
                    ></div>
                    <div
                      :class="[
                        'sm:flex left-0 top-[28%] z-20 absolute bg-primary-300 h-[0.28rem]',
                        calculateWidthOfDone(order.status),
                        { 'bg-red-900': order.status == 'cancelled' },
                      ]"
                    ></div>
                    <div
                      :class="[
                        'sm:flex border-dashed border-red-500 border-[2.8px] left-0 top-[28%] z-10 absolute',
                        calculateWidthOfWait(order.status),
                      ]"
                    ></div>
                  </div>

                  <!-- Products -->
                  <div class="my-8 px-6 max-h-72 overflow-auto">
                    <div
                      class="flex items-center gap-8 shadow-main p-4 mb-5"
                      v-for="product in order.orderItems"
                    >
                      <div class="flex justify-between w-full items-center">
                        <div class="flex gap-6">
                          <img
                            :src="product.product.featured_image"
                            :alt="product.title"
                            class="w-[4.6875rem] h-[4.6875rem] rounded-[.5rem]"
                          />
                          <div class="text-start">
                            <h6
                              class="text-2xl font-normal leading-normal text-gray-700"
                            >
                              {{ product.product.title }}
                            </h6>
                            <span>الكمية: ({{ product.quantity }})</span>
                          </div>
                        </div>
                        <div
                          class="px-2 py-1 bg-primary-100 text-primary-300 rounded"
                        >
                          {{ product.status_if_returned_before }}
                        </div>
                        <button
                          class="ms-auto flex items-center gap-4 text-primary-300 disabled:text-primary-200 text-lg"
                          @click="
                            showReturnModal({
                              ...product,
                              order: { id: order.id },
                            })
                          "
                          v-if="order.status == 'delivered'"
                        >
                          طلب استبدال او استرجاع
                          <Icon
                            name="material-symbols:chevron-left"
                            class="text-2xl"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- details -->
                  <div class="px-6 flex gap-28">
                    <div class="flex-1 text-start">
                      <div class="mb-6 flex justify-between items-center">
                        <p class="m-0 text-gray-700 text-2xl">كود الطلب:</p>
                        <p class="m-0 text-gray-500 text-xl">
                          {{ order.order_number }}
                        </p>
                      </div>
                      <div class="mb-6 flex justify-between items-center">
                        <p class="m-0 text-gray-700 text-2xl">اسم العميل:</p>
                        <p class="m-0 text-gray-500 text-xl">
                          {{ order.client.name }}
                        </p>
                      </div>
                      <div class="mb-6 flex justify-between items-center">
                        <p class="m-0 text-gray-700 text-2xl">تاريخ الطلب:</p>
                        <p class="m-0 text-gray-500 text-xl">
                          {{ handleDate(order.created_at) }}
                        </p>
                      </div>
                      <div class="mb-6 flex justify-between items-center">
                        <p class="m-0 text-gray-700 text-2xl">المبلغ:</p>
                        <p class="m-0 text-gray-500 text-xl">
                          {{ order.final_price }} {{ order.country.currency }}
                        </p>
                      </div>
                    </div>
                    <div class="flex-1 text-start">
                      <div class="mb-6 flex justify-between items-center">
                        <p class="m-0 text-gray-700 text-2xl">سعر المنتجات:</p>
                        <p class="m-0 text-gray-500 text-xl">
                          {{ order.final_price }} {{ order.country.currency }}
                        </p>
                      </div>
                      <div class="mb-6 flex justify-between items-center">
                        <p class="m-0 text-gray-700 text-2xl">الربح:</p>
                        <p class="m-0 text-gray-500 text-xl">
                          {{ order.profit }} {{ order.country.currency }}
                        </p>
                      </div>
                      <div class="mb-6 flex justify-between items-center">
                        <p class="m-0 text-gray-700 text-2xl">الضريبة:</p>
                        <p class="m-0 text-gray-500 text-xl">
                          {{ order.tax_amount }} {{ order.country.currency }}
                        </p>
                      </div>
                      <div class="mb-6 flex justify-between items-center">
                        <p class="m-0 text-gray-700 text-2xl">سعر الشحن:</p>
                        <p class="m-0 text-gray-500 text-xl">
                          {{ order.delivery_cost }} {{ order.country.currency }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-4 justify-between">
                    <div  v-if="order.statusHistories.length" @click="openPopupToShowComment(order.statusHistories)" class="bg-primary-100 p-3 text-center flex-1 rounded cursor-pointer text-primary-300  font-semibold text-lg inline-block">
                      متابعة الطلب و اظهار الملاحظات
                    </div>
                    <div v-if="!order.statusHistories.length" @click="openPopupToShowCloseOrder(order.id)" class="bg-red-100 p-3 text-center flex-1 rounded cursor-pointer text-red-300 font-semibold  text-lg inline-block">
                      الغاء هذا الطلب
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <teleport to="body">
    <Transition>
      <dashboard-return-order
        v-if="isShowReturnModal"
        :data="selectedOrder"
        @hide="hideReturnModal"
        @refresh="refresh()"
      />
    </Transition>
  </teleport>
  <teleport to="body">
    <Transition v-if="comment">
      <div class="fixed inset-0 z-50">
        <div class="w-full h-full flex items-center px-4 overflow-auto">
          <div
            class="relative z-10 bg-white rounded-lg shadow-main p-8 xl:p-16 w-full max-w-[50rem] my-12 mx-auto flex flex-col gap-9"
          >
            {{ comment }}
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
  <teleport to="body">
    <Transition v-if="moreDetails">
      <div class="fixed inset-0 z-50">
        <div class="fixed inset-0 bg-black/20" @click="hideMoreDetails"></div>
        <div class="w-full h-full px-4 overflow-auto">
          <div
            class="relative z-10 bg-white rounded-lg shadow-main p-8 xl:p-16 w-full max-w-[50rem] my-12 mx-auto flex flex-col gap-9"
          >
            <div class="relative mb-16">
              <button
                type="button"
                @click="hideMoreDetails"
                class="absolute top-0 end-0 text-[1.6rem] text-gray-500"
              >
                <Icon name="clarity:times-line" />
              </button>
            </div>

            <div class="grid gap-md">
              <div
                class="flex items-center gap-8"
                v-for="product in moreDetailsData.orderItems"
              >
                <img
                  :src="product.product.featured_image"
                  :alt="product.product.title"
                  class="w-[4.6875rem] h-[4.6875rem] rounded-[.5rem]"
                />

                <div class="">
                  <h6 class="text-2xl font-normal leading-normal text-gray-700">
                    {{ product.product.title }}
                  </h6>
                  <span>الكمية: ({{ product.quantity }})</span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <h5 class="text-2xl text-gray-700 font-normal">سعر المنتجات::</h5>
              <h5 class="text-2xl text-gray-500 font-normal">
                <span
                  >{{ moreDetailsData.price }}
                  {{ moreDetailsData.country.currency }}</span
                >
              </h5>
            </div>

            <div class="flex items-center justify-between">
              <h5 class="text-2xl text-gray-700 font-normal">الربح:</h5>
              <h5 class="text-2xl text-gray-500 font-normal">
                <span
                  >{{ moreDetailsData.final_price }}
                  {{ moreDetailsData.country.currency }}</span
                >
              </h5>
            </div>

            <div class="flex items-center justify-between">
              <h5 class="text-2xl text-gray-700 font-normal">الضريبة:</h5>
              <h5 class="text-2xl text-gray-500 font-normal">
                <span>{{ moreDetailsData.tax_percentage }}</span>
              </h5>
            </div>

            <div class="flex items-center justify-between">
              <h5 class="text-2xl text-gray-700 font-normal">اجمالي الربح:</h5>
              <h5 class="text-2xl text-gray-500 font-normal">
                <span
                  >{{ moreDetailsData.final_price }}
                  {{ moreDetailsData.country.currency }}</span
                >
              </h5>
            </div>

            <div class="flex items-center justify-between">
              <h5 class="text-2xl text-gray-700 font-normal">سعر الشحن:</h5>
              <h5 class="text-2xl text-gray-500 font-normal">
                <span
                  >{{ moreDetailsData.delivery_cost }}
                  {{ moreDetailsData.country.currency }}</span
                >
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
  <teleport to="body">
    <Transition v-if="isShowOrderHistory">
      <div class="fixed inset-0 z-50">
        <div class="fixed inset-0 bg-black/20" @click="isShowOrderHistory = false"></div>
        <div class="w-full h-full px-4 overflow-auto">
          <div
            class="relative z-10 bg-white rounded-lg shadow-main p-6 xl:p-8 w-full max-w-[45rem] my-12 mx-auto"
          >
            <div class="relative">
              <button
                type="button"
                @click="isShowOrderHistory = false"
                class="absolute top-0 end-0 text-[1.6rem] text-gray-500"
              >
                <Icon name="clarity:times-line" />
              </button>
            </div>
            <div v-for="(item , key) in orderHistoryObj">
              <div class="flex items-center gap-2 mb-4">
                <div class="bg-primary-100 inline-block p-4 rounded-md">
                  <svg v-if="item.status == 'delivered'" xmlns="http://www.w3.org/2000/svg" width="38" height="30" viewBox="0 0 38 30" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0939 23.8137C13.1057 25.4656 12.1445 26.9614 10.6599 27.6021C9.17525 28.2426 7.46052 27.9012 6.31745 26.7373C5.17441 25.5736 4.82891 23.8174 5.44252 22.2901C6.05613 20.7626 7.50761 19.7659 9.11824 19.7659C10.1688 19.762 11.1778 20.1861 11.9234 20.9452C12.669 21.7043 13.09 22.7362 13.0939 23.8137Z" stroke="#05BD6E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0373 23.8137C32.049 25.4656 31.0879 26.9614 29.6032 27.6021C28.1187 28.2426 26.4039 27.9012 25.2608 26.7373C24.1178 25.5736 23.7722 23.8174 24.3859 22.2901C24.9994 20.7626 26.451 19.7659 28.0615 19.7659C29.1122 19.762 30.1212 20.1861 30.8667 20.9452C31.6124 21.7043 32.0334 22.7362 32.0373 23.8137Z" stroke="#05BD6E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.6182 25.2103C24.3894 25.2103 25.0146 24.5853 25.0146 23.8139C25.0146 23.0427 24.3894 22.4174 23.6182 22.4174V25.2103ZM13.0891 22.4174C12.3178 22.4174 12.4999 23.0408 12.4999 23.812C12.4999 24.5834 12.3178 25.2103 13.0891 25.2103V22.4174ZM22.2217 23.8139C22.2217 24.5853 22.847 25.2103 23.6182 25.2103C24.3894 25.2103 25.0146 24.5853 25.0146 23.8139H22.2217ZM25.0146 14.0072C25.0146 13.236 24.3894 12.6107 23.6182 12.6107C22.847 12.6107 22.2217 13.236 22.2217 14.0072H25.0146ZM23.6182 22.4174C22.847 22.4174 22.2217 23.0427 22.2217 23.8139C22.2217 24.5853 22.847 25.2103 23.6182 25.2103V22.4174ZM24.0829 25.2103C24.8541 25.2103 24.4999 24.5853 24.4999 23.8139C24.4999 23.0427 24.8541 22.4174 24.0829 22.4174V25.2103ZM32.0281 22.4176C31.2569 22.421 31.4965 23.0408 31.4999 23.812C31.5032 24.5832 31.2691 25.2138 32.0404 25.2103L32.0281 22.4176ZM36.2459 19.4551L37.6423 19.4488C37.6419 19.3684 37.6347 19.2883 37.6205 19.2092L36.2459 19.4551ZM36.6456 13.7612C36.5097 13.0021 35.7843 12.4968 35.025 12.6327C34.2659 12.7684 33.7606 13.494 33.8965 14.2533L36.6456 13.7612ZM23.6163 3.89334C22.8451 3.89334 22.2199 4.51854 22.2199 5.28978C22.2199 6.061 22.8451 6.68621 23.6163 6.68621V3.89334ZM30.2807 5.28978V6.68621C30.29 6.68621 30.2995 6.68612 30.309 6.68592L30.2807 5.28978ZM34.4904 9.64852L33.0946 9.60875C33.0918 9.70436 33.0989 9.79998 33.1158 9.89412L34.4904 9.64852ZM33.8944 14.2529C34.0302 15.012 34.7556 15.5175 35.5149 15.382C36.274 15.2463 36.7812 14.5205 36.6456 13.7612L33.8944 14.2529ZM25.0109 5.28978C25.0109 4.51854 24.3877 3.89334 23.6163 3.89334C22.8451 3.89334 22.2199 4.51854 22.2199 5.28978H25.0109ZM22.218 14.0072C22.218 14.7786 22.8432 15.4036 23.6145 15.4036C24.3858 15.4036 25.0109 14.7786 25.0109 14.0072H22.218ZM22.2199 5.28978C22.2199 6.061 22.8451 6.68621 23.6163 6.68621C24.3877 6.68621 25.0109 6.061 25.0109 5.28978H22.2199ZM23.6145 3.80025H25.0111L25.0109 3.79023L23.6145 3.80025ZM21.6321 1.79497V3.19142L21.6414 3.19136L21.6321 1.79497ZM3.74173 1.79497L3.72847 3.1914H3.74173V1.79497ZM1.75391 3.79652L0.357478 3.78403V3.79652H1.75391ZM1.75391 21.8104H0.357422L0.357534 21.8231L1.75391 21.8104ZM3.74173 23.812V22.4156L3.72847 22.4157L3.74173 23.812ZM5.14321 25.2084C5.91443 25.2084 5.49988 24.5829 5.49988 23.8115C5.49988 23.0403 5.91443 22.4156 5.14321 22.4156V25.2084ZM23.6182 12.6107C22.847 12.6107 22.2217 13.236 22.2217 14.0072C22.2217 14.7786 22.847 15.4036 23.6182 15.4036V12.6107ZM35.2728 15.4036C36.044 15.4036 36.6693 14.7786 36.6693 14.0072C36.6693 13.236 36.044 12.6107 35.2728 12.6107V15.4036ZM23.6182 22.4174H13.0891V25.2103H23.6182V22.4174ZM25.0146 23.8139V14.0072H22.2217V23.8139H25.0146ZM23.6182 25.2103H24.0829V22.4174H23.6182V25.2103ZM32.0404 25.2103C33.5446 25.2038 34.977 24.5841 36.0247 23.4998L34.0162 21.5591C33.4841 22.1098 32.7682 22.4143 32.0281 22.4176L32.0404 25.2103ZM36.0247 23.4998C37.0712 22.4167 37.6492 20.9588 37.6423 19.4488L34.8494 19.4616C34.8531 20.2533 34.5495 21.0072 34.0162 21.5591L36.0247 23.4998ZM37.6205 19.2092L36.6456 13.7612L33.8965 14.2533L34.8712 19.7013L37.6205 19.2092ZM23.6163 6.68621H30.2807V3.89334H23.6163V6.68621ZM30.309 6.68592C31.0448 6.671 31.7622 6.96559 32.2919 7.51389L34.3007 5.57364C33.2392 4.47458 31.7767 3.86271 30.2522 3.89362L30.309 6.68592ZM32.2919 7.51389C32.8227 8.06354 33.1169 8.82015 33.0946 9.60875L35.8863 9.68827C35.9299 8.15904 35.3609 6.67135 34.3007 5.57364L32.2919 7.51389ZM33.1158 9.89412L33.8944 14.2529L36.6456 13.7612L35.8651 9.40289L33.1158 9.89412ZM22.2199 5.28978L22.218 14.0072H25.0109V5.28978H22.2199ZM25.0109 5.28978L25.0111 3.80025H22.218L22.2199 5.28978H25.0109ZM25.0109 3.79023C24.9977 1.93781 23.5141 0.385982 21.6229 0.39855L21.6414 3.19136C21.9246 3.18948 22.2154 3.43267 22.2182 3.81025L25.0109 3.79023ZM21.6321 0.398531H3.74173V3.1914L21.6321 3.19142V0.398531ZM3.755 0.398587C2.85065 0.390004 1.98721 0.750656 1.3528 1.38944L3.33445 3.35748C3.44565 3.24553 3.58803 3.19008 3.72847 3.1914L3.755 0.398587ZM1.3528 1.38944C0.719601 2.02702 0.365484 2.8891 0.357478 3.78403L3.15029 3.809C3.15187 3.63234 3.22207 3.47065 3.33445 3.35748L1.3528 1.38944ZM0.357478 3.79652L0.357422 21.8104H3.15035V3.79652H0.357478ZM0.357534 21.8231C0.36554 22.7179 0.719601 23.58 1.3528 24.2175L3.33445 22.2495C3.22207 22.1365 3.15187 21.9747 3.15029 21.798L0.357534 21.8231ZM1.3528 24.2175C1.98721 24.8563 2.85065 25.217 3.755 25.2084L3.72847 22.4157C3.58803 22.4171 3.44565 22.3616 3.33445 22.2495L1.3528 24.2175ZM3.74173 25.2084H5.14321V22.4156H3.74173V25.2084ZM23.6182 15.4036H35.2728V12.6107H23.6182V15.4036Z" fill="#05BD6E"/>
                  </svg>
                  <svg v-else-if="item.status == 'processing'" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M23.6999 4.42871L26.8865 6.10097C30.3148 7.90004 32.0289 8.79957 32.9807 10.416C33.9326 12.0324 33.9326 14.0439 33.9326 18.0667V18.2531C33.9326 22.2759 33.9326 24.2874 32.9807 25.9039C32.0289 27.5203 30.3148 28.4197 26.8865 30.2189L23.6999 31.891C20.9027 33.359 19.5041 34.093 17.9995 34.093C16.4949 34.093 15.0963 33.359 12.2991 31.891L9.11248 30.2189C5.68422 28.4197 3.97008 27.5203 3.01825 25.9039C2.06641 24.2874 2.06641 22.2759 2.06641 18.2531V18.0667C2.06641 14.0439 2.06641 12.0324 3.01825 10.416C3.97008 8.79957 5.68422 7.90004 9.11248 6.10097L12.2991 4.42871C15.0963 2.96078 16.4949 2.22681 17.9995 2.22681C19.5041 2.22681 20.9027 2.96078 23.6999 4.42871Z" stroke="#05BD6E" stroke-width="2.8" stroke-linecap="round"/>
                    <path d="M32.3397 10.99L17.9999 18.1599M17.9999 18.1599L3.66016 10.99M17.9999 18.1599V33.2963" stroke="#05BD6E" stroke-width="2.8" stroke-linecap="round"/>
                  </svg>
                  <svg v-else-if="item.status == 'confirmed'"
                    width="36"
                    height="36"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6.5"
                      y="6.5"
                      width="36"
                      height="36"
                      rx="42.5"
                      fill="05BD6E"
                    />
                    <path
                      d="M45.1644 34.9793C46.1394 34.1485 46.6267 33.7331 47.1365 33.4895C48.3153 32.926 49.6857 32.926 50.8645 33.4895C51.3742 33.7331 51.8616 34.1485 52.8365 34.9793C53.2245 35.31 53.4185 35.4753 53.6258 35.6142C54.1008 35.9325 54.6341 36.1535 55.195 36.2642C55.4399 36.3125 55.6938 36.3328 56.2022 36.3734C57.479 36.4753 58.1173 36.5262 58.65 36.7143C59.8819 37.1495 60.851 38.1185 61.2862 39.3504C61.4743 39.8831 61.5251 40.5215 61.6272 41.7984C61.6676 42.3066 61.6878 42.5606 61.7363 42.8054C61.8469 43.3663 62.0679 43.8997 62.3864 44.3747C62.5252 44.5819 62.6905 44.7759 63.0212 45.1639C63.852 46.1388 64.2675 46.6264 64.5111 47.1359C65.0744 48.3148 65.0744 49.6851 64.5111 50.864C64.2675 51.3737 63.852 51.8611 63.0212 52.836C62.6905 53.224 62.5252 53.418 62.3864 53.6253C62.0679 54.1002 61.8469 54.6336 61.7363 55.1947C61.6878 55.4393 61.6676 55.6935 61.6272 56.2016C61.5251 57.4785 61.4743 58.1168 61.2862 58.6495C60.851 59.8814 59.8819 60.8505 58.65 61.2857C58.1173 61.4738 57.479 61.5246 56.2022 61.6266C55.6938 61.6671 55.4399 61.6875 55.195 61.7357C54.6341 61.8466 54.1008 62.0674 53.6258 62.3858C53.4185 62.5247 53.2245 62.69 52.8365 63.0207C51.8616 63.8515 51.3742 64.267 50.8645 64.5106C49.6857 65.0739 48.3153 65.0739 47.1365 64.5106C46.6267 64.267 46.1394 63.8515 45.1644 63.0207C44.7764 62.69 44.5824 62.5247 44.3752 62.3858C43.9002 62.0674 43.3668 61.8466 42.8059 61.7357C42.5611 61.6875 42.307 61.6671 41.7988 61.6266C40.522 61.5246 39.8836 61.4738 39.3509 61.2857C38.119 60.8505 37.15 59.8814 36.7148 58.6495C36.5267 58.1168 36.4757 57.4785 36.3739 56.2016C36.3333 55.6935 36.313 55.4393 36.2647 55.1947C36.154 54.6336 35.933 54.1002 35.6147 53.6253C35.4758 53.418 35.3105 53.224 34.9798 52.836C34.149 51.8611 33.7336 51.3737 33.4899 50.864C32.9265 49.6851 32.9265 48.3148 33.4899 47.1359C33.7336 46.6262 34.149 46.1388 34.9798 45.1639C35.3105 44.7759 35.4758 44.5819 35.6147 44.3747C35.933 43.8997 36.154 43.3663 36.2647 42.8054C36.313 42.5606 36.3333 42.3066 36.3739 41.7984C36.4757 40.5215 36.5267 39.8831 36.7148 39.3504C37.15 38.1185 38.119 37.1495 39.3509 36.7143C39.8836 36.5262 40.522 36.4753 41.7988 36.3734C42.307 36.3328 42.5611 36.3125 42.8059 36.2642C43.3668 36.1535 43.9002 35.9325 44.3752 35.6142C44.5824 35.4753 44.7764 35.31 45.1644 34.9793Z"
                      :class="'stroke-primary-300'"
                      stroke-width="2.8"
                    />
                    <path
                      d="M42.9492 49.8651L46.4072 53.3231L55.052 44.6782"
                      :class="'stroke-primary-300'"
                      stroke-width="2.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg  v-else-if="item.status == 'shipping'" xmlns="http://www.w3.org/2000/svg" width="38" height="30" viewBox="0 0 38 30" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0939 23.8137C13.1057 25.4656 12.1445 26.9614 10.6599 27.6021C9.17525 28.2426 7.46052 27.9012 6.31745 26.7373C5.17441 25.5736 4.82891 23.8174 5.44252 22.2901C6.05613 20.7626 7.50761 19.7659 9.11824 19.7659C10.1688 19.762 11.1778 20.1861 11.9234 20.9452C12.669 21.7043 13.09 22.7362 13.0939 23.8137Z" stroke="#05BD6E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0373 23.8137C32.049 25.4656 31.0879 26.9614 29.6032 27.6021C28.1187 28.2426 26.4039 27.9012 25.2608 26.7373C24.1178 25.5736 23.7722 23.8174 24.3859 22.2901C24.9994 20.7626 26.451 19.7659 28.0615 19.7659C29.1122 19.762 30.1212 20.1861 30.8667 20.9452C31.6124 21.7043 32.0334 22.7362 32.0373 23.8137Z" stroke="#05BD6E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M23.6182 25.2103C24.3894 25.2103 25.0146 24.5853 25.0146 23.8139C25.0146 23.0427 24.3894 22.4174 23.6182 22.4174V25.2103ZM13.0891 22.4174C12.3178 22.4174 12.4999 23.0408 12.4999 23.812C12.4999 24.5834 12.3178 25.2103 13.0891 25.2103V22.4174ZM22.2217 23.8139C22.2217 24.5853 22.847 25.2103 23.6182 25.2103C24.3894 25.2103 25.0146 24.5853 25.0146 23.8139H22.2217ZM25.0146 14.0072C25.0146 13.236 24.3894 12.6107 23.6182 12.6107C22.847 12.6107 22.2217 13.236 22.2217 14.0072H25.0146ZM23.6182 22.4174C22.847 22.4174 22.2217 23.0427 22.2217 23.8139C22.2217 24.5853 22.847 25.2103 23.6182 25.2103V22.4174ZM24.0829 25.2103C24.8541 25.2103 24.4999 24.5853 24.4999 23.8139C24.4999 23.0427 24.8541 22.4174 24.0829 22.4174V25.2103ZM32.0281 22.4176C31.2569 22.421 31.4965 23.0408 31.4999 23.812C31.5032 24.5832 31.2691 25.2138 32.0404 25.2103L32.0281 22.4176ZM36.2459 19.4551L37.6423 19.4488C37.6419 19.3684 37.6347 19.2883 37.6205 19.2092L36.2459 19.4551ZM36.6456 13.7612C36.5097 13.0021 35.7843 12.4968 35.025 12.6327C34.2659 12.7684 33.7606 13.494 33.8965 14.2533L36.6456 13.7612ZM23.6163 3.89334C22.8451 3.89334 22.2199 4.51854 22.2199 5.28978C22.2199 6.061 22.8451 6.68621 23.6163 6.68621V3.89334ZM30.2807 5.28978V6.68621C30.29 6.68621 30.2995 6.68612 30.309 6.68592L30.2807 5.28978ZM34.4904 9.64852L33.0946 9.60875C33.0918 9.70436 33.0989 9.79998 33.1158 9.89412L34.4904 9.64852ZM33.8944 14.2529C34.0302 15.012 34.7556 15.5175 35.5149 15.382C36.274 15.2463 36.7812 14.5205 36.6456 13.7612L33.8944 14.2529ZM25.0109 5.28978C25.0109 4.51854 24.3877 3.89334 23.6163 3.89334C22.8451 3.89334 22.2199 4.51854 22.2199 5.28978H25.0109ZM22.218 14.0072C22.218 14.7786 22.8432 15.4036 23.6145 15.4036C24.3858 15.4036 25.0109 14.7786 25.0109 14.0072H22.218ZM22.2199 5.28978C22.2199 6.061 22.8451 6.68621 23.6163 6.68621C24.3877 6.68621 25.0109 6.061 25.0109 5.28978H22.2199ZM23.6145 3.80025H25.0111L25.0109 3.79023L23.6145 3.80025ZM21.6321 1.79497V3.19142L21.6414 3.19136L21.6321 1.79497ZM3.74173 1.79497L3.72847 3.1914H3.74173V1.79497ZM1.75391 3.79652L0.357478 3.78403V3.79652H1.75391ZM1.75391 21.8104H0.357422L0.357534 21.8231L1.75391 21.8104ZM3.74173 23.812V22.4156L3.72847 22.4157L3.74173 23.812ZM5.14321 25.2084C5.91443 25.2084 5.49988 24.5829 5.49988 23.8115C5.49988 23.0403 5.91443 22.4156 5.14321 22.4156V25.2084ZM23.6182 12.6107C22.847 12.6107 22.2217 13.236 22.2217 14.0072C22.2217 14.7786 22.847 15.4036 23.6182 15.4036V12.6107ZM35.2728 15.4036C36.044 15.4036 36.6693 14.7786 36.6693 14.0072C36.6693 13.236 36.044 12.6107 35.2728 12.6107V15.4036ZM23.6182 22.4174H13.0891V25.2103H23.6182V22.4174ZM25.0146 23.8139V14.0072H22.2217V23.8139H25.0146ZM23.6182 25.2103H24.0829V22.4174H23.6182V25.2103ZM32.0404 25.2103C33.5446 25.2038 34.977 24.5841 36.0247 23.4998L34.0162 21.5591C33.4841 22.1098 32.7682 22.4143 32.0281 22.4176L32.0404 25.2103ZM36.0247 23.4998C37.0712 22.4167 37.6492 20.9588 37.6423 19.4488L34.8494 19.4616C34.8531 20.2533 34.5495 21.0072 34.0162 21.5591L36.0247 23.4998ZM37.6205 19.2092L36.6456 13.7612L33.8965 14.2533L34.8712 19.7013L37.6205 19.2092ZM23.6163 6.68621H30.2807V3.89334H23.6163V6.68621ZM30.309 6.68592C31.0448 6.671 31.7622 6.96559 32.2919 7.51389L34.3007 5.57364C33.2392 4.47458 31.7767 3.86271 30.2522 3.89362L30.309 6.68592ZM32.2919 7.51389C32.8227 8.06354 33.1169 8.82015 33.0946 9.60875L35.8863 9.68827C35.9299 8.15904 35.3609 6.67135 34.3007 5.57364L32.2919 7.51389ZM33.1158 9.89412L33.8944 14.2529L36.6456 13.7612L35.8651 9.40289L33.1158 9.89412ZM22.2199 5.28978L22.218 14.0072H25.0109V5.28978H22.2199ZM25.0109 5.28978L25.0111 3.80025H22.218L22.2199 5.28978H25.0109ZM25.0109 3.79023C24.9977 1.93781 23.5141 0.385982 21.6229 0.39855L21.6414 3.19136C21.9246 3.18948 22.2154 3.43267 22.2182 3.81025L25.0109 3.79023ZM21.6321 0.398531H3.74173V3.1914L21.6321 3.19142V0.398531ZM3.755 0.398587C2.85065 0.390004 1.98721 0.750656 1.3528 1.38944L3.33445 3.35748C3.44565 3.24553 3.58803 3.19008 3.72847 3.1914L3.755 0.398587ZM1.3528 1.38944C0.719601 2.02702 0.365484 2.8891 0.357478 3.78403L3.15029 3.809C3.15187 3.63234 3.22207 3.47065 3.33445 3.35748L1.3528 1.38944ZM0.357478 3.79652L0.357422 21.8104H3.15035V3.79652H0.357478ZM0.357534 21.8231C0.36554 22.7179 0.719601 23.58 1.3528 24.2175L3.33445 22.2495C3.22207 22.1365 3.15187 21.9747 3.15029 21.798L0.357534 21.8231ZM1.3528 24.2175C1.98721 24.8563 2.85065 25.217 3.755 25.2084L3.72847 22.4157C3.58803 22.4171 3.44565 22.3616 3.33445 22.2495L1.3528 24.2175ZM3.74173 25.2084H5.14321V22.4156H3.74173V25.2084ZM23.6182 15.4036H35.2728V12.6107H23.6182V15.4036Z" fill="#05BD6E"/>
                    </svg>
                </div>
                <p class="text-black text-xl">{{item.reason ? item.reason : 'لا يوجد'}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
  <teleport to="body">
    <Transition v-if="showCloseOrder">
      <div class="fixed inset-0 z-50">
        <div class="fixed inset-0 bg-black/20" @click="showCloseOrder = false"></div>
        <div class="w-full h-full px-4 overflow-auto">
          <div
            class="relative z-10 bg-white rounded-lg shadow-main p-6 xl:p-8 w-full max-w-[45rem] my-12 mx-auto"
          >
            <div class="relative">
              <button
                type="button"
                @click="showCloseOrder = false"
                class="absolute top-0 end-0 text-[1.6rem] text-gray-500"
              >
                <Icon name="clarity:times-line" />
              </button>
            </div>
            <textarea class="w-full mt-12  border p-2 rounded h-40" placeholder="سبب الالغاء" v-model="reasonCancel"></textarea>
            <span
              @click="cancelOrder()"
              class="bg-red-100 text-red-300 px-4 mt-5 inline-block py-4 rounded-sm whitespace-nowrap font-bold cursor-pointer"
            >الغاء الطلب</span>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped>
tr {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: flex-start;
}

.expanded-row-content {
  border: 0 !important;
  display: grid;
  grid-column: 1/-1;
}

.hide-row {
  display: none;
}
</style>
