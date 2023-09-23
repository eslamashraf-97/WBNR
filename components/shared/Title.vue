<template>
  <div class="flex items-center justify-between mb-24">
    <h6 class="text-[30px] font-semibold text-gray-700">{{ title }}</h6>
    <NuxtLink
      v-if="url"
      :to="url"
      class="text-primary-300 text-[18px] font-semibold flex items-center gap-[16px]"
    >
      عرض الكل
      <span>
        <Icon name="pepicons-pop:angle-left" />
      </span>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(["title", "url", "link"]);
</script>
