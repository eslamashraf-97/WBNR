<script setup>
import {
  apiGetGov,
  apiGetCartUrl,
  apiPlaceOrderUrl,
  apiAddDestinationUrl,
} from "@/server";

const route = useRoute();

const { selectedCountry } = useCountries();

// get cart
const { fire: fireCart } = useApi({
  url: apiGetCartUrl,
  requestOptions: {
    query: {
      country_id: selectedCountry.value?.id,
    },
  },
});

const { data: cartData, pending } = await fireCart();

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
});

const { fire: fireAddDestination } = useApi({
  url: apiAddDestinationUrl,
  requestOptions: {
    method: "post",
  },
});

function chooseGov(data) {
  form.governorate_id = data.id;
  fireAddDestination({
    cart_id: cartData.value?.data.id,
    governorate_id: data.id,
  });
}

const { fire: firePlaceOrder } = useApi({
  url: apiPlaceOrderUrl + "/" + cartData.value?.data.id,
  requestOptions: {
    method: "post",
    onResponse: (res) => {
      if (res.response.ok) {
        navigateTo("/dashboard/requests");
      }
    },
  },
});

const isLoadingPlaceOrder = ref(false);
async function placeOrder() {
  isLoadingPlaceOrder.value = true;
  await firePlaceOrder(form);
  isLoadingPlaceOrder.value = false;
}

const getSelectedGov = computed(() =>
  govData.value?.data.find((item) => item.id === form.governorate_id),
);
</script>
<template>
  <section class="bg-primary">
    <shared-title title="مراجعة الطلب" />
    <div class="flex flex-col-reverse xl:flex-row justify-start gap-24">
      <checkout-aside
        :details="cartData.data"
        @placeOrder="placeOrder"
        :isLoadingPlaceOrder="isLoadingPlaceOrder"
      />

      <div class="flex-1">
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

              <div class="absolute top-1/2 -translate-y-1/2 start-[5px]">
                <shared-menu
                  :items="govData.data"
                  :buttonProps="{
                    class:
                      'w-[11.1375rem] h-[3.06rem] !p-0 flex items-center justify-center rounded-[0.75rem] !border-gray-200 !bg-gray-100',
                  }"
                  :menuProps="{
                    class: 'w-[11.1375rem]',
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
