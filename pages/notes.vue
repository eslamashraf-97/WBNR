<script setup>
import { apiGetNotesUrl } from "@/server";
import { handleDate } from "@/helpers";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
const { selectedCountry } = useCountries();

const { data } = await useRequest({
  url: () => apiGetNotesUrl + "/" + selectedCountry.value?.id,
});
</script>

<template>
  <div class="mx-auto px-2 ">
    <div class="mx-auto divide-y divide-gray-900/10">
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
<!--        <div v-if="data.data" v-for="note in data.data" :key="note.id" class="py-2">-->
<!--          <h5 class="mb-3">{{note.delivery_notes}}</h5>-->
<!--          <img  :src="note.image_src" class="mb-4 w-[200px] rounded-lg" />-->
<!--        </div>-->

        <div v-if="!data?.data.length">
          <h4
            class="mt-8 border border-primary-300 bg-primary-100 p-4 rounded-xs"
          >
            لا توجد ملاحظات
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
