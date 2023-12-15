<script setup>
import { apiPlaceOrderUrl } from "@/server";

const props = defineProps(["details", "isLoadingPlaceOrder", "selectedGov"]);

defineEmits(["placeOrder"]);

const route = useRoute();

const totalPrice = computed(() => {
  return props.details.cartItems.reduce(
    (accumulator, currentValue) =>
      (+accumulator + +currentValue.price) * +currentValue.quantity,
    0,
  );
});

const totalCommission = computed(() => {
  return props.details.cartItems.reduce(
    (accumulator, currentValue) =>
      (+accumulator + +currentValue.minCommission) * +currentValue.quantity,
    0,
  );
});

const totalPriceSeller = computed(() => {
  return props.details.cartItems.reduce(
    (accumulator, currentValue) =>
      (+accumulator + +currentValue.final_price) * +currentValue.quantity,
    0,
  );
});

const totalWithoutShipping = computed(() => {
  return props.details.cartItems.reduce(
    (accumulator, currentValue) =>
      (+accumulator + +currentValue.final_price) * +currentValue.quantity,
    0,
  );
});

const totalWiShipping = computed(() => {
  return props.details.cartItems.reduce(
    (accumulator, currentValue) =>
      (+accumulator + +currentValue.final_price) * +currentValue.quantity +
      +props.details.delivery_cost,
    0,
  );
});
</script>

<template>
  <aside
    class="flex flex-col gap-9 w-full xl:w-[37.625rem] p-9 bg-white border border-gray-200 rounded-3xl dashboard-aside h-fit shadow-main"
  >
    <template v-if="details">
      <!-- start main info  -->
      <div class="flex items-center gap-8" v-for="product in details.cartItems">
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

      <div class="flex items-center justify-between">
        <h5 class="text-2xl text-gray-700 font-normal">
          سعر المنتجات الاساسى:
        </h5>
        <h5 class="text-2xl text-gray-500 font-normal">
          <span
            >{{ route.path.includes("quick") ? totalPrice : details.price }}
            {{ details.country.currency }}</span
          >
        </h5>
      </div>
      <div class="flex items-center justify-between">
        <h5 class="text-2xl text-gray-700 font-normal">سعر البيع:</h5>
        <h5 class="text-2xl text-gray-500 font-normal">
          <span>
            {{ totalPriceSeller }}
            {{ details.country.currency }}</span
          >
        </h5>
      </div>

      <div class="flex items-center justify-between">
        <h5 class="text-2xl text-gray-700 font-normal">اجمالي الربح:</h5>
        <h5 class="text-2xl text-gray-500 font-normal">
          <span>{{ totalCommission }} {{ details.country.currency }}</span>
        </h5>
      </div>

      <div
        class="flex items-center justify-between"
        v-if="
          selectedGov?.country?.taxPercentage ||
          details?.coountry?.taxPercentage
        "
      >
        <h5 class="text-2xl text-gray-700 font-normal">الضريبة:</h5>
        <h5 class="text-2xl text-gray-500 font-normal">
          <span
            >{{ details.tax_percentage }} {{ details.country.currency }}</span
          >
        </h5>
      </div>

      <div class="flex items-center justify-between">
        <h5 class="text-2xl text-gray-700 font-normal">سعر الشحن:</h5>
        <h5 class="text-2xl text-gray-500 font-normal">
          <span
            >{{ details.delivery_cost }} {{ details.country.currency }}</span
          >
        </h5>
      </div>
      <div class="flex items-center justify-between">
        <h5 class="text-2xl text-gray-700 font-normal">اجمالى بدون الشحن:</h5>
        <h5 class="text-2xl text-gray-500 font-normal">
          <span
            >{{
              route.path.includes("quick")
                ? totalWithoutShipping
                : details.final_price
            }}
            {{ details.country.currency }}</span
          >
        </h5>
      </div>
      <div class="flex items-center justify-between">
        <h5 class="text-2xl text-gray-700 font-normal">اجمالى:</h5>
        <h5 class="text-2xl text-gray-500 font-normal">
          <span
            >{{
              route.path.includes("quick")
                ? totalWiShipping
                : details.final_price + parseInt(details.delivery_cost)
            }}
            {{ details.country.currency }}</span
          >
        </h5>
      </div>

      <div class="mt-9">
        <shared-buttons-primary-button
          submit-title="تأكيد الطلب"
          class="w-[14.5rem] h-[4.1875rem]"
          @click="$emit('placeOrder')"
          :loading="isLoadingPlaceOrder"
        />
      </div>
    </template>
  </aside>
</template>

<style scoped></style>
