<script setup>
import {
  apiGetGov,
  apiPlaceQuickOrderUrl,
  apiAddDestinationUrl,
  api_place_quick_order,
} from "@/server";

const route = useRoute();

const router = useRouter();

const { selectedCountry } = useCountries();

const { quickOrderState } = useQuickProduct();

if (!quickOrderState.value) {
  router.back();
}

// get gov
const { fire: fireGov } = useApi({
  url: apiGetGov,
  requestOptions: {
    query: {
      country_id: selectedCountry.value?.id,
      take: 100,
    },
  },
});

const { data: govData } = await fireGov();

const form = reactive({
  name: "",
  phone: "",
  secondary_phone: "",
  address_details: "",
  store_name: "",
  store_url: "",
  governorate_id: "",
  product_id: quickOrderState.value?.id,
  product_quantity: quickOrderState.value?.qty,
  final_price: quickOrderState.value?.price,
  variants: quickOrderState.value?.selectedVariants,
});

const delivery_cost = ref(0);

const selectedGov = ref(null);

function chooseGov(data) {
  form.governorate_id = data.id;
  delivery_cost.value = data.delivery_cost;
  selectedGov.value = data;
}

const { fire: firePlaceOrder } = useApi({
  url: apiPlaceQuickOrderUrl,
  requestOptions: {
    method: "post",
  },
});

const isLoadingPlaceOrder = ref(false);

function placeOrder() {
  isLoadingPlaceOrder.value = true;
  const payload = {
    //   name: "",
    // phone: "",
    // secondary_phone: "",
    // address_details: "",
    // store_name: "",
    // store_url: "",
    // governorate_id: "",
    // product_id: quickOrderState.value?.id,
    // product_quantity: quickOrderState.value?.qty,
    // final_price: quickOrderState.value?.price,
    // variants: quickOrderState.value?.selectedVariants,
    ...form,
    product_quantity: quickOrderState.value?.qty,
    final_price: quickOrderState.value?.price,
    variants: quickOrderState.value?.selectedVariants,
  };
  api_place_quick_order(payload)
    .then((res) => {
      navigateTo("/dashboard/requests");
    })
    .finally(() => {
      isLoadingPlaceOrder.value = false;
    });
}

const getSelectedGov = computed(() =>
  govData.value?.data.find((item) => item.id === form.governorate_id),
);

const detailsComputed = computed(() => {
  return {
    ...quickOrderState.value,
    cartItems: [
      {
        ...quickOrderState.value,
        quantity: quickOrderState.value.qty,
        product: quickOrderState.value,
        final_price: quickOrderState.value.price,
      },
    ],
    price: quickOrderState.value.price,
    final_price: quickOrderState.value.price,
    tax_percentage: quickOrderState.value.minCommission,
    delivery_cost: delivery_cost.value,
  };
});
</script>
<template>
  <section class="bg-primary" v-if="quickOrderState">
    <shared-title title="مراجعة الطلب" />
    <div class="flex flex-col-reverse xl:flex-row justify-start gap-24">
      <checkout-aside
        :details="detailsComputed"
        @placeOrder="placeOrder"
        :isLoadingPlaceOrder="isLoadingPlaceOrder"
        :selectedGov="selectedGov"
      />

      <div class="flex-1">
        <!-- start  -->
        <div class="mb-16 flex gap-8">
          <div>
            <span class="text-2xl text-gray-500 font-light mb-5 block"
              >الكمية</span
            >
            <div class="relative w-[150px]">
              <shared-form-input
                type="text"
                class="!w-[150px] h-[53px] bg-transparent text-xl"
                v-model.number="quickOrderState.qty"
              />
              <div
                class="absolute top-[1px] left-[1px] bottom-[1px] flex flex-col items-center bg-white rounded-[11px]"
              >
                <button
                  type="button"
                  class="w-[24px] flex-1 border-b border-b-gray-200 border-s border-s-gray-200"
                  @click="quickOrderState.qty++"
                >
                  +
                </button>
                <button
                  type="button"
                  class="w-[24px] flex-1 border-s border-s-gray-200"
                  @click="
                    quickOrderState.qty > 1 ? quickOrderState.qty-- : null
                  "
                >
                  -
                </button>
              </div>
            </div>
          </div>

          <div>
            <span class="text-2xl text-gray-500 font-light mb-5 block"
              >سعر البيع للقطعة</span
            >
            <div class="relative w-[200px]">
              <shared-form-input
                type="text"
                class="!w-[200px] h-[53px] bg-transparent text-xl"
                v-model="quickOrderState.price"
              />
              <div
                class="absolute top-[1px] left-[1px] bottom-[1px] flex flex-col bg-white rounded-[11px]"
              >
                <div
                  class="w-[57px] flex-1 border-s border-s-gray-200 flex items-center justify-center text-xl text-gray-300 font-bold"
                >
                  {{ quickOrderState.country.currency }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- *******  -->
        <h5 class="text-2xl text-gray-700 mb-16">بيانات شخصية</h5>
        <form class="w-full xl:w-[38rem]">
          <div class="mb-7">
            <shared-form-input
              placeholder="الأسم بالكامل"
              class="bg-transparent !w-full"
              type="text"
              v-model="form.name"
            />
          </div>

          <div class="mb-7">
            <shared-form-input
              placeholder="رقم الهاتف"
              class="bg-transparent !w-full"
              type="text"
              v-model="form.phone"
            />
          </div>

          <div class="mb-24">
            <shared-form-input
              placeholder="رقم الهاتف البديل (إختياري)"
              class="bg-transparent !w-full"
              type="text"
              v-model="form.secondary_phone"
            />
          </div>

          <h5 class="text-2xl text-gray-700 mb-16">بيانات الشحن</h5>

          <div class="mb-16">
            <label for="address" class="text-2xl text-gray-500 mb-6 block"
              >العنوان بالتفصيل</label
            >
            <div class="relative">
              <shared-form-input
                placeholder=" المنطقة, الشارع, العقار, الشقة"
                class="ps-[11.8rem] bg-transparent !w-full"
                id="address"
                type="text"
                v-model="form.address_details"
              />

              <div
                class="absolute top-1/2 -translate-y-1/2 start-[5px]"
                v-if="govData?.data"
              >
                <shared-menu
                  :items="govData.data"
                  :buttonProps="{
                    class:
                      'w-[11.1375rem] h-[3.06rem] !p-0 flex items-center justify-center rounded-[0.75rem] !border-gray-200 !bg-gray-100',
                  }"
                  :menuProps="{
                    class: 'w-[11.1375rem] right-0',
                  }"
                >
                  <template #label>
                    <div class="flex items-center gap-[19px]">
                      <Icon name="iconamoon:arrow-down-2-duotone" />
                      {{ getSelectedGov?.name || "المحافظة" }}
                    </div>
                  </template>
                  <template #item="{ data }">
                    <button
                      type="button"
                      class="flex w-full gap-[24px] items-center mb-[19px] last:mb-0 h-[35px]"
                      @click="chooseGov(data)"
                    >
                      <span>{{ data.name }}</span>
                    </button>
                  </template>
                </shared-menu>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-6">
            <div class="w-[10.75rem]">
              <label for="address" class="text-2xl text-gray-500 mb-6 block"
                >اسم متجرك</label
              >
              <shared-form-input
                type="text"
                placeholder="myrgroup"
                class="bg-transparent w-full"
                v-model="form.store_name"
              />
            </div>
            <div class="flex-1">
              <label for="address" class="text-2xl text-gray-500 mb-6 block"
                >لينك المتجر ( صفحة الفيسبوك )</label
              >
              <shared-form-input
                type="url"
                placeholder="myrgroup.co"
                class="bg-transparent !w-full"
                v-model="form.store_url"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
