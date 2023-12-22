<script setup>
import { apiGetNotesUrl } from "@/server";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const { selectedCountry } = useCountries();

const { data } = await useRequest({
  url: () => apiGetNotesUrl + "/" + selectedCountry.value?.id,
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <shared-title title="ملاحظات الشحن" />

      <div v-if="data.data">
        <img v-for="note in data.data" :key="note.id" :src="not.image_src" />
      </div>

      <div v-if="!data?.data.length">
        <h4
          class="mt-8 border border-primary-300 bg-primary-100 p-4 rounded-xs"
        >
          لا توجد ملاحظات
        </h4>
      </div>
    </div>
  </div>
</template>
