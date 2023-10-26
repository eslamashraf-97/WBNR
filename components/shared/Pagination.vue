<script setup>
defineProps(["meta", "page"]);

const emits = defineEmits(["changePage"]);

const router = useRoute();

const thePage = ref(+router.query.page || 1);

function handleChangePage(page) {
  emits("changePage", page);
  thePage.value = page;
}
</script>

<template>
  <div
    class="flex flex-row-reverse items-center justify-center gap-9"
    v-if="meta?.pageCount"
  >
    <button
      type="button"
      v-for="(page, index) in meta.pageCount"
      :key="page"
      @click="handleChangePage(page)"
      class="border border-gray-200 rounded-[0.6875rem] text-gray-500 text-2xl w-[4.6875rem] h-[4.6875rem]"
      :class="{
        '!border-primary-300 !text-gray-800': thePage === page,
      }"
    >
      {{ page }}
    </button>
  </div>
</template>

<style scoped></style>
