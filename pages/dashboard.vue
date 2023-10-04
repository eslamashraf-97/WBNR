<script setup lang="ts"></script>

<template>
  <div class="bg-primary">
    <shared-title title="لوحة التحكم" />
    <div class="flex justify-start gap-24">
      <dashboard-aside />
      <div class="flex-1">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
