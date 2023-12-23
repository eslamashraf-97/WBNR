<script setup>
import LoaderButton from "~/components/shared/loders/LoaderButton.vue";
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  disabledClass: {
    type: String,
    default: "!bg-mutedColor",
  },
  type: {
    type: String,
    default: "button",
  },
  submitTitle: {
    type: String,
    default: "",
  },
  classContent: {
    type: String,
    default: "px-4",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="[
      'bg-primary-300 hover:bg-primary-200 text-white rounded-sm min-w-[12.5625rem] min-h-[4.1875rem] font-semibold text-3xl transition',
      disabled ? `${disabledClass} cursor-not-allowed` : '',
    ]"
    :type="type"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <loader-button v-if="loading" />
    <slot v-else>
      <span>{{ submitTitle }}</span>
    </slot>
  </button>
</template>

<style scoped></style>
