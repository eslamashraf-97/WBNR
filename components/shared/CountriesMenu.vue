<script setup>
const { countries, selectedCountry, setSelectedCountry } = useCountries();
defineProps({
  inMenu: {
    default: false,
  },
});
</script>

<template>
  <shared-menu
    :items="countries"
    :button-props="{
      class: `h-[3.6rem]  px-8 py-[.38rem]`,
    }"
    :menu-props="{
      class: `max-w-[13.5rem]`,
    }"
  >
    <template #label>
      <div class="flex items-center gap-[19px]">
        <template v-if="inMenu">
          شحن الى
          <img :src="selectedCountry?.image" class="max-w-[2rem]" alt="" />
          <Icon name="iconamoon:arrow-down-2-duotone" />
        </template>
        <template v-else>
          <Icon name="iconamoon:arrow-down-2-duotone" />
          <img :src="selectedCountry?.image" class="max-w-[2rem]" alt="" />
        </template>
      </div>
    </template>
    <template #item="{ data }">
      <button
        type="button"
        class="flex gap-[1.19rem] items-center mb-[1.19rem] last:mb-0 py-2"
        @click="setSelectedCountry(data)"
      >
        <img :src="data?.image" class="max-w-[2rem]" alt="" />
        <span>{{ data.name }}</span>
      </button>
    </template>
  </shared-menu>
</template>
