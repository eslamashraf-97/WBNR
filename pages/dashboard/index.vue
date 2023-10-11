<script setup lang="ts"></script>

<template>
  <section>
    <div class="mb-16">
      <shared-cards-filter>
        <template v-slot:right>
          <shared-from-to />
        </template>
        <template v-slot:left>
          <shared-languages-menu />
        </template>
      </shared-cards-filter>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7">
      <shared-cards-stats title="اجمالي المنتجات" value="546" />
      <shared-cards-stats title="اجمالي الأرباح" value="4,545" />
      <shared-cards-stats title="طلبات ملغية" value="43" />
      <shared-cards-stats title="طلبات تحت التسليم" value="3645" />
      <shared-cards-stats title="طلبات معلقة" value="6536" />
      <shared-cards-stats title="منتجات مسلمة" value="4523" />
    </div>
  </section>
</template>

<style scoped></style>
