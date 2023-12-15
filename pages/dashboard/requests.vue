<script setup>
import { apiGetOrdersUrl } from "@/server";

import { handleDate } from "@/helpers";

const { selectedCountry } = useCountries();

const query = reactive({
  country_id: selectedCountry.value?.id,
  name: "",
  from: "",
  to: "",
});

const { fire } = useApi({
  url: apiGetOrdersUrl,
  requestOptions: {
    query,
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

function calculateWidthOfDone(status) {
  console.log("ind", status);
  switch (status) {
    case "pending":
      return "w-[0%]";
      break;
    case "processing":
      return "w-[35%]";
      break;
    case "shipping":
      return "w-[68%]";
      break;
    case "delivered":
      return "w-[100%]";
      break;
  }
}
function calculateWidthOfWait(status) {
  console.log("ind", status);
  switch (status) {
    case "pending":
      return "w-[0%]";
      break;
    case "confirmed":
      return "w-[35%]";
      break;
    case "processing":
      return "w-[68%]";
      break;
    case "shipping":
      return "w-[100%]";
      break;
  }
}

const status = ["pending", "confirmed", "processing", "shipping", "delivered"];

function isReachable(status, data) {
  return data.status === status;
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
                  {{ order.price }}
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
                    class="bg-primary-100 text-primary-300 px-2 py-1 rounded-sm"
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
                              ? '#E9F7F1'
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
                              ? '#05BD6E'
                              : 'stroke-red-500'
                          "
                          stroke-width="2.8"
                        />
                        <path
                          d="M42.9492 49.8651L46.4072 53.3231L55.052 44.6782"
                          :class="
                            isReachable('delivered', order)
                              ? '#05BD6E'
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
                      <p
                        class="text-error-400 text-xl font-semibold cursor-pointer"
                        @click="
                          comment =
                            order.statusHistories.find(
                              (data) => data.status === 'delivered',
                            )?.reason || 'لا يوجد تعليق'
                        "
                      >
                        {{
                          order.statusHistories
                            .find((data) => data.status === "delivered")
                            ?.reason.substring(0, 16) || "لا يوجد تعليق"
                        }}
                      </p>
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
                              ? '#E9F7F1'
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
                              ? '#05BD6E'
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
                              ? '#05BD6E'
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
                              ? '#05BD6E'
                              : 'fill-red-500'
                          "
                        />
                      </svg>
                      <h5 class="text-xl text-gray-700 my-1">خارج للتوصيل</h5>
                      <p class="text-gray-200">
                        {{ getDate(order.statusHistories, "shipping") }}
                      </p>
                      <p
                        class="text-error-400 text-xl font-semibold cursor-pointer"
                        @click="
                          comment =
                            order.statusHistories.find(
                              (data) => data.status === 'shipping',
                            )?.reason || 'لا يوجد تعليق'
                        "
                      >
                        {{
                          order.statusHistories.find(
                            (data) => data.status === "shipping",
                          )?.reason || "لا يوجد تعليق"
                        }}
                      </p>
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
                              ? '#E9F7F1'
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
                              ? '#05BD6E'
                              : 'stroke-red-500'
                          "
                          stroke-width="2.8"
                          stroke-linecap="round"
                        />
                        <path
                          d="M63.3397 41.8301L48.9999 49M48.9999 49L34.6602 41.8301M48.9999 49V64.1364"
                          :class="
                            isReachable('processing', order)
                              ? '#05BD6E'
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
                      <p
                        class="text-error-400 text-xl font-semibold cursor-pointer"
                        @click="
                          comment =
                            order.statusHistories.find(
                              (data) => data.status === 'processing',
                            )?.reason || 'لا يوجد تعليق'
                        "
                      >
                        {{
                          order.statusHistories.find(
                            (data) => data.status === "processing",
                          )?.reason || "لا يوجد تعليق"
                        }}
                      </p>
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
                              ? '#E9F7F1'
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
                              ? '#05BD6E'
                              : 'stroke-red-500'
                          "
                          stroke-width="2.8"
                        />
                        <path
                          d="M43.6895 51.4798L46.7244 54.3123L54.3115 47.231"
                          :class="
                            isReachable('confirmed', order)
                              ? '#05BD6E'
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
                              ? '#05BD6E'
                              : 'fill-red-500'
                          "
                          stroke-width="2.8"
                        />
                      </svg>
                      <h5 class="text-xl text-gray-700 my-1">تأكيد الطلب</h5>
                      <p class="text-gray-200">
                        {{ getDate(order.statusHistories, "confirmed") }}
                      </p>
                      <p
                        class="text-error-400 text-xl font-semibold cursor-pointer"
                        @click="
                          comment =
                            order.statusHistories.find(
                              (data) => data.status === 'confirmed',
                            )?.reason || 'لا يوجد تعليق'
                        "
                      >
                        {{
                          order.statusHistories.find(
                            (data) => data.status === "confirmed",
                          )?.reason || "لا يوجد تعليق"
                        }}
                      </p>
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
                        'sm:flex border border-dashed border-primary-300 border-[2.8px] left-0 top-[28%] z-10 absolute',
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
                          {{ order.price }} {{ order.country.currency }}
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
        <div class="fixed inset-0 bg-black/20" @click="comment = null">X</div>
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
