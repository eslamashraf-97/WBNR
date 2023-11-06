<script setup>
const emits = defineEmits(["changeCountry"]);

const { countries, selectedCountry: initialSelectedCountry } = useCountries();

const selectedCountry = ref(initialSelectedCountry);

function setSelectedCountry(data) {
  selectedCountry.value = data;
  emits("changeCountry", data?.id);
}
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
        <img :src="selectedCountry.image" class="max-w-[2rem]" alt="" />
      </div>
    </template>
    <template #item="{ data }">
      <button
        type="button"
        class="flex gap-[24px] items-center mb-[19px] last:mb-0 h-[45px]"
        @click="setSelectedCountry(data)"
      >
        <img :src="data.image" class="max-w-[2rem]" alt="" />
        <span>{{ data.name }}</span>
      </button>
    </template>
  </shared-menu>
</template>
