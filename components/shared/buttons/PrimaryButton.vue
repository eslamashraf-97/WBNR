<script setup lang="ts">
  import LoaderButton from "~/components/shared/loders/LoaderButton.vue";
  defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  disabledClass :{
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
})
</script>

<template>
  <button
      :class="[
      'bg-primary-300 text-white rounded-sm min-w-[231px] min-h-[67px] font-semibold text-3xl',
      disabled ? `${ disabledClass } cursor-not-allowed` : ''
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

<style scoped>

</style>
