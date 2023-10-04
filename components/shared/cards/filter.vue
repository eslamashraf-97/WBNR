<script setup lang="ts"></script>

<template>
  <div
    class="bg-white rounded-xl shadow-main py-9 px-16 flex justify-between"
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
