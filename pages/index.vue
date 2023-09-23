<script setup lang="ts">

</script>

<template>
  <div class="bg-primary">
    <!-- category -->
    <div class="grid grid-cols-3 gap-9 shadow-main mb-40">
      <lazy-shared-cards-category v-for="(i, key) in 9" :key="key" />
    </div>

    <!-- new arrival -->
    <shared-title title="وصل حديثا" url="/"/>
    <div class="grid grid-cols-4 gap-9 shadow-main mb-40">
      <lazy-shared-cards-product v-for="(i, key) in 4" :key="key"/>
    </div>

    <!-- more buy -->
    <shared-title title="الأكثر مبيعا" url="/"/>
    <div class="grid grid-cols-4 gap-9 shadow-main mb-40">
      <lazy-shared-cards-product v-for="(i, key) in 4" :key="key"/>
    </div>

    <!-- All Products -->
    <shared-title title="كل المنتجات" url="/"/>
    <div class="grid grid-cols-4 gap-9 shadow-main mb-40">
      <lazy-shared-cards-product v-for="(i, key) in 4" :key="key"/>
    </div>
  </div>
</template>

<style scoped>

</style>
