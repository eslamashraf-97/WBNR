<script setup>
defineProps({
  details: {
    type: Object,
  },
});
</script>

<template>
  <div
    v-if="details"
    class="w-96 border border-gray-200 shadow-product rounded-md overflow-hidden"
  >
    <img :src="details.featured_image" class="object-cover w-full h-80" />
    <div class="py-9 px-7 relative">
      <div
        class="w-36 bg-white py-3 flex justify-center text-primary-300 text-2xl rounded-xs absolute gap-2 top-[-25px] left-5"
      >
        <Icon name="fluent:bookmark-20-regular" />
        <Icon name="ci:line-l" class="text-gray-200" />
        <Icon name="la:cart-arrow-down" />
      </div>
      <h1 class="text-[28px] leading-10">{{ details.title }}</h1>
      <div class="flex justify-between my-9">
        <div>
          <h5 class="text-gray-400 text-base font-normal mb-1">
            اقل سعر للبيع
          </h5>
          <h3 class="text-2xl">{{ details.price }}</h3>
        </div>
        <div>
          <h5 class="text-gray-400 text-base font-normal mb-1">
            اقل سعر للربح
          </h5>
          <h3 class="text-2xl">{{ details.minCommission }}</h3>
        </div>
      </div>
      <nuxt-link
        :to="`/product/${details.id}`"
        class="text-primary-300 flex gap-1 font-semibold items-center text-lg"
      >
        <span>تفاصيل المنتج</span>
        <Icon name="iconamoon:arrow-left-2-duotone" class="text-2xl" />
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped></style>
