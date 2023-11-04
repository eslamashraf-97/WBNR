<script setup lang="ts"></script>

<template>
  <div
    class="bg-white rounded-xl shadow-main py-6 px-8 xl:py-9 xl:px-16 flex justify-between items-center"
    v-bind="$attrs"
  >
    <slot />

    <div>
      <slot name="right" />
    </div>
    <div>
      <slot name="left" />
    </div>
  </div>
</template>

<style scoped></style>
