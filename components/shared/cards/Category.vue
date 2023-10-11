<script setup>
import ComputerImage from "@/assets/images/computer.png";
defineProps(["details"]);
</script>

<template>
  <div class="p-6 bg-white flex gap-8 items-center rounded-md">
    <img :src="details?.image || ComputerImage" />
    <p class="text-gray-500 text-xl" v-html="details?.name"></p>
  </div>
</template>

<style scoped></style>
