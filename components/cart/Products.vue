<script setup>
const props = defineProps(["products", "clearCartIsPending"]);

defineEmits([
  "increaseQuantity",
  "decreaseQuantity",
  "deleteCartItem",
  "changePrice",
  "changeQuantity",
  "clearCart",
]);
</script>

<template>
  <div class="table w-full overflow-auto">
    <table class="w-full">
      <thead>
        <tr>
          <th class="text-2xl text-gray-800 font-normal leading-normal">
            المنتج
          </th>
          <th class="text-2xl text-gray-800 font-normal leading-normal">
            السعر
          </th>
          <th class="text-2xl text-gray-800 font-normal leading-normal">
            سعر البيع
          </th>
          <th class="text-2xl text-gray-800 font-normal leading-normal">
            الكمية
          </th>
          <th class="text-2xl text-gray-800 font-normal leading-normal">
            الربح
          </th>
          <th
            class="text-2xl text-error-400 font-normal leading-normal cursor-pointer whitespace-nowrap"
            @click="$emit('clearCart')"
            :aria-disabled="clearCartIsPending"
          >
            <span v-if="clearCartIsPending">
              <shared-loders-loader-button />
            </span>
            <span v-else> حذف الكل </span>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(product, index) in products" :key="product.id + index">
          <td class="whitespace-nowrap min-w-fit">
            <div class="flex items-center gap-[2.25rem]">
              <img
                :src="product.product.featured_image"
                :alt="product.product.title_ar"
                class="w-[4.6875rem] h-[4.6875rem] rounded-[0.5rem]"
              />
              <h5 class="text-2xl text-gray-700 font-normal leading-normal">
                {{ product.product.title_ar.length > 10 ? product.product.title_ar.substring(0,10) + '...' : product.product.title_ar }}
              </h5>
            </div>
          </td>
          <td class="text-2xl text-gray-700 font-normal leading-normal">
            {{ product.product.price }}
          </td>
          <td>
            <div class="relative w-[10.75rem]">
              <shared-form-input
                type="text"
                class="!w-[10.75rem] h-[3.3125rem] bg-transparent text-xl"
                @input="$emit('changePrice', $event.target.value, product)"
                :value="product.final_price"
              />
              <div
                class="absolute top-[1px] left-[1px] bottom-[1px] flex flex-col bg-white rounded-[11px]"
              >
                <div
                  class="w-[3.5625rem] flex-1 border-s border-s-gray-200 flex items-center justify-center text-xl text-gray-300 font-bold">
                  {{product?.product.country.currency}}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="relative w-[6rem]">
              <shared-form-input
                type="text"
                class="w-[6rem] h-[3.3125rem] bg-transparent text-xl"
                @input="$emit('changeQuantity', $event.target.value, product)"
                :value="product.quantity"
              />

              <div
                class="absolute top-[1px] left-[1px] bottom-[1px] flex flex-col items-center bg-white rounded-[11px]"
              >
                <button
                  type="button"
                  class="w-[24px] flex-1 border-b border-b-gray-200 border-s border-s-gray-200"
                  @click="$emit('increaseQuantity', product)"
                >
                  +
                </button>
                <button
                  type="button"
                  class="w-[24px] flex-1 border-s border-s-gray-200"
                  @click="$emit('decreaseQuantity', product)"
                >
                  -
                </button>
              </div>
            </div>
          </td>

          <td class="text-2xl text-primary-300 font-normal leading-normal">
            {{
              (product.final_price -
                product.product.price +
                product.product.minCommission) *
              product.quantity
            }}
          </td>

          <td>
            <button type="button" @click="$emit('deleteCartItem', product.id)">
              <img
                src="@/assets/images/delete-icon.svg"
                alt="delete"
                class=""
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
