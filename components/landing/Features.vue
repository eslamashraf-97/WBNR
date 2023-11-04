<script setup>
const feaures = [
  {
    title: "سهولة عملية سحب الأرباح",
    desc: "خيارات مختلفة للسحب من حساب بنكي او محفظة الكترونية",
    image: null,
  },
  {
    title: "ربط حسابك بمتجرك",
    desc: "اختار المنتج وبضغطة زر  يكون في متجرك",
    image: null,
  },
  {
    title: "سهولة عملية سحب الأرباح",
    desc: "خيارات مختلفة للسحب من حساب بنكي او محفظة الكترونية",
    image: null,
  },
  {
    title: "ربط حسابك بمتجرك",
    desc: "اختار المنتج وبضغطة زر  يكون في متجرك",
    image: null,
  },
];
</script>

<template>
  <div class="grid justify-center gap-16">
    <div
      v-for="(feat, index) in feaures"
      :key="index"
      class="flex justify-center"
    >
      <div
        class="p-16 max-w-[61.5rem] flex-1 shadow-main rounded-2xl bg-white border border-primary-300 flex flex-wrap-reverse md:flex-nowrap items-center justify-between gap-5"
      >
        <div>
          <h5 class="mb-[0.56rem] text-gray-700 text-5xl leading-[4.8rem]">
            {{ feat.title }}
          </h5>
          <p
            class="text-gray-400 text-2xl leading-[2.8rem] feature-desc flex items-center gap-4"
          >
            {{ feat.desc }}
          </p>
        </div>
        <img :src="feat.image" alt="" class="w-[18.75rem] h-[11.375rem]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-desc::before {
  content: "";
  width: 8px;
  height: 8px;
  background-color: theme("colors.gray.400");
}
</style>
