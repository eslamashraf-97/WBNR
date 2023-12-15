<script setup>
import { apiGetFaqUrl } from "@/server";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const { data } = await useRequest({
  url: apiGetFaqUrl,
});
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <shared-title title="الاسأله الشائعة" />

      <dl class="mt-10 space-y-6 divide-y divide-gray-900/10" v-if="data?.data">
        <Disclosure
          as="div"
          v-for="faq in data.data"
          :key="faq.id"
          class="pt-6"
          v-slot="{ open }"
        >
          <dt>
            <DisclosureButton
              class="flex w-full items-start justify-between text-left text-gray-900"
            >
              <span class="text-xl font-semibold leading-7">{{
                faq.question_ar
              }}</span>
              <span class="ml-6 flex h-7 items-center">
                <Icon name="ic:baseline-plus" v-if="!open" aria-hidden="true" />
                <Icon name="material-symbols:close" v-else aria-hidden="true" />
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as="dd" class="mt-2 pr-12">
            <p class="text-xl leading-7 text-gray-600">{{ faq.answer_ar }}</p>
          </DisclosurePanel>
        </Disclosure>
      </dl>
    </div>
  </div>
</template>
