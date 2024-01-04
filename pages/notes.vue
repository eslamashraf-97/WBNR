<script setup>
import { apiGetNotesUrl } from "@/server";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

import { handleDate } from "@/helpers";

const { selectedCountry } = useCountries();

const { data } = await useRequest({
  url: () => apiGetNotesUrl + "/" + selectedCountry.value?.id,
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <shared-title title="ملاحظات الشحن" />

      <div v-if="data?.data" class="">
        <div
          v-for="note in data.data"
          class="flex gap-8 shadow-main bg-white rounded-2xl p-4 mb-8"
        >
          <img
            :key="note.id"
            :src="note.image_src"
            class="w-[300px] rounded-xl"
          />
          <div>
            <h6 v-html="note.delivery_notes" class="text-2xl mb-2 mt-2"></h6>
            <span class="text-gray-500 text-lg">{{
              handleDate(note.updated_at)
            }}</span>
          </div>
        </div>
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
