<script setup>
import Step1 from "@/assets/images/step-one.svg";
import Step2 from "@/assets/images/step-two.svg";
import Step3 from "@/assets/images/step-three.svg";
import Step4 from "@/assets/images/step-four.svg";
const steps = [
  {
    title: "اختار المنتج",
    desc: "من غير ما تشيل هم التخزين و رأس المال",
    image: Step1,
  },
  {
    title: "تسويق المنتج",
    desc: "من غير ما تشيل هم التخزين و رأس المال",
    image: Step2,
  },
  {
    title: "الشحن والتوصيل",
    desc: "من غير ما تشيل هم التخزين و رأس المال",
    image: Step3,
  },
  {
    title: "تحصيل الأرباح",
    desc: "من غير ما تشيل هم التخزين و رأس المال",
    image: Step4,
  },
];

const activeIndex = ref(0);

function handleHover(index) {
  activeIndex.value = 25 * (index + 1) + "%";
}
</script>
<template>
  <section class="pb-40 xl:pt-32">
    <!-- line  -->
    <div
      class="hidden xl:block relative h-[0.0625rem] bg-primary-200 mb-[3.125rem]"
      id="steps-line-wrapper"
    >
      <div class="h-full bg-primary-300 w-0" id="steps-line-inner"></div>
    </div>

    <!-- boxes  -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
      <div v-for="(step, index) in steps" :key="index">
        <div
          class="shadow-main bg-white rounded-2xl xl:max-w-xs p-10 step-box relative border border-transparent"
          @mouseenter="handleHover(index)"
          @mouseleave="activeIndex = 0"
        >
          <div class="step-box-tooltip hidden xl:block">كل اللى عليك</div>
          <h4 class="text-[1.875rem] text-gray-700 leading-[3rem] mb-2">
            {{ step.title }}
          </h4>
          <p class="leading-normal text-gray-400 text-xl mb-2">
            {{ step.desc }}
          </p>
          <div class="flex justify-end">
            <img :src="step.image" alt="" class="w-[6.10794rem] h-[6.25rem]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.step-box,
#steps-line-inner {
  transition: 0.3s;
}

.step-box::after {
  content: "";
  position: absolute;
  top: -3.125rem;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.75rem;
  height: 0.75rem;
  background-color: theme("colors.primary.300");
  border-radius: 50%;
}

@media (max-width: 1279px) {
  .step-box::after {
    display: none;
  }
}

.step-box-tooltip {
  position: absolute;
  top: calc(-1 * (3.125rem + 10px + 70px));
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 0.75rem 1.25rem;
  background-color: theme("colors.gray.800");
  border-radius: 0.5625rem;
  font-size: 1.125rem;
  color: theme("colors.gray.100");
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}

.step-box-tooltip::after {
  content: "";
  position: absolute;
  top: 99%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px;
  border-style: solid;
  border-color: theme("colors.gray.800") transparent transparent transparent;
}

.step-box:hover,
.step-box.active {
  border-color: theme("colors.primary.300");
  background: theme("colors.primary.100");
}

.step-box:hover .step-box-tooltip,
.step-box.active .step-box-tooltip {
  transform: translate(-50%, 0);
  opacity: 1;
  visibility: visible;
}

#steps-line-inner {
  width: v-bind(activeIndex);
}
</style>
