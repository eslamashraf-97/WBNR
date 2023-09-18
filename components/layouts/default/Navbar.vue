<script setup lang="ts">

</script>

<template>
  <div class="bg-white py-8">
    <div class="container flex justify-between items-center">
      <div class="flex items-center">
        <img src="@/assets/images/logo.png" />
        <input type="text" class="border" />
      </div>
      <div class="flex gap-8">
        <div class="flex items-center gap-9">
          <Icon name="pepicons-pencil:bell" class="text-gray-600 text-2xl"/>
          <span class="flex items-center gap-2 text-2xl">
              <span>0</span>
             <Icon name="fluent:bookmark-20-regular" class="text-gray-600"/>
          </span>
          <span class="flex items-center gap-2 text-2xl">
              <span>0</span>
             <Icon name="solar:cart-large-minimalistic-linear" class="text-gray-600"/>
          </span>
        </div>
        <shared-menu />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
