<script setup>
const menuIsOpen = ref(false);

function toggleMenu(link) {
  if (link) {
    menuIsOpen.value = false;
  } else {
    menuIsOpen.value = !menuIsOpen.value;
  }
}
</script>

<template>
  <div class="bg-primary">
    <shared-title title="لوحة التحكم" />
    <div class="flex justify-start gap-0 xl:gap-20 relative overflow-x-hidden">
      <div
        class="absolute xl:relative -start-full xl:start-0 transition-all top-16 xl:top-0"
        :class="{ '!start-0': menuIsOpen }"
      >
        <dashboard-aside @toggle-menu="toggleMenu" />
      </div>
      <div
        class="w-full transition-all"
        :class="{ '-translate-x-[30rem]': menuIsOpen }"
      >
        <button
          type="button"
          class="xl:hidden text-2xl flex items-center gap-4 mb-8 text-gray-700"
          @click="toggleMenu(false)"
        >
          <Icon name="uil:bars" class="text-3xl" />
          <span>القائمة</span>
        </button>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
