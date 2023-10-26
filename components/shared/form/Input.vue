<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    class="h-[57px] w-[560px] border border-gray-200 rounded-[11px] px-[16px] focus:border-primary-300 focus-within:!outline-0"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
