<script setup>
const { countries, selectedCountry, setSelectedCountry } = useCountries();
</script>

<template>
  <shared-menu
    :items="countries"
    :button-props="{
      class: `h-[3.5625rem]  px-8 py-[.38rem]`,
    }"
    :menu-props="{
      class: `max-w-[13.5rem]`,
    }"
  >
    <template #label>
      <div class="flex items-center gap-[19px]">
        <Icon name="iconamoon:arrow-down-2-duotone" />
        <img :src="selectedCountry.image" class="" alt="" />
      </div>
    </template>
    <template #item="{ data }">
      <button
        type="button"
        class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"
        @click="setSelectedCountry(data)"
      >
        <img :src="data.image" class="" alt="" />
        <span>{{ data.name }}</span>
      </button>
    </template>
  </shared-menu>
</template>
