<script setup>
  defineProps({
    user: {
      type: Object,
    }
  })
</script>

<template>
  <div class="bg-transparent hover:bg-white py-9 px-16 flex gap-7	items-center rounded-md cursor-pointer">
    <div class="w-[100px] h-[100px] rounded-full border"></div>
    <div class="flex flex-col justify-between">
      <h1 class="text-3xl text-gray-700 font-semibold mb-2">{{ user?.name }}</h1>
      <p class="text-gray-300 text-2xl font-semibold">{{ user?.title }} </p>
    </div>
  </div>
</template>
