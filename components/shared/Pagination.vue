<script setup>
defineProps(["meta"]);
</script>

<template>
  <div
    class="flex flex-row-reverse items-center justify-center gap-9"
    v-if="meta?.pageCount"
  >
    <button
      type="button"
      v-for="(page, index) in meta.pageCount"
      :key="page"
      @click="navigateTo({ query: { page } })"
    >
      {{ page }}
    </button>
  </div>
</template>

<style scoped></style>
