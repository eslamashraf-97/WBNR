<script setup lang="ts">

</script>

<template>
  <div class="bg-primary">
    <shared-title title="منتجات محفوظة"/>

    <!-- filter box -->
    <shared-cards-filter>
      <template v-slot:right>تحديد الفلتر</template>
      <template v-slot:left>تحديد</template>
    </shared-cards-filter>

    <div class="mt-24 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-9 shadow-main mb-40 grid-flow-row-dense">
      <lazy-shared-cards-product v-for="(i, key) in 16" :key="key"/>
    </div>
  </div>
</template>

<style scoped>

</style>
