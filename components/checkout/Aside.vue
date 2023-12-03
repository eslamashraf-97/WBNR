<script setup>
import { apiPlaceOrderUrl } from "@/server";

defineProps(["details", "isLoadingPlaceOrder"]);

defineEmits(["placeOrder"]);
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
          <span>{{ details.price }} {{ details.country.currency }}</span>
        </h5>
      </div>
      <div class="flex items-center justify-between">
        <h5 class="text-2xl text-gray-700 font-normal">سعر البيع:</h5>
        <h5 class="text-2xl text-gray-500 font-normal">
          <span>
            {{
              details?.cartItems[0]?.final_price
                ? details.cartItems.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.final_price,
                    0,
                  )
                : details.final_price
            }}
            {{ details.country.currency }}</span
          >
        </h5>
      </div>

      <div class="flex items-center justify-between">
        <h5 class="text-2xl text-gray-700 font-normal">اجمالي الربح:</h5>
        <h5 class="text-2xl text-gray-500 font-normal">
          <span
            >{{
              details?.cartItems[0]?.customer_earn
                ? details.cartItems.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.customer_earn,
                    0,
                  )
                : details.minCommission
            }}
            {{ details.country.currency }}</span
          >
        </h5>
      </div>

      <div
        class="flex items-center justify-between"
        v-if="details.tax_percentage"
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
            >{{ details.final_price - details.delivery_cost }}
            {{ details.country.currency }}</span
          >
        </h5>
      </div>
      <div class="flex items-center justify-between">
        <h5 class="text-2xl text-gray-700 font-normal">اجمالى:</h5>
        <h5 class="text-2xl text-gray-500 font-normal">
          <span>{{ details.final_price }} {{ details.country.currency }}</span>
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
