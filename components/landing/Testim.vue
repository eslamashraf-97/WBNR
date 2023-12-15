<script setup>
import { Autoplay } from "swiper/modules";

import testim1 from "@/assets/images/testim1.png";
import testim2 from "@/assets/images/testim2.png";
import testim3 from "@/assets/images/testim3.png";

const users = [
  {
    id: 1,
    image: testim1,
    name: "كريم حسن",
    title: "صاحب  متجر: بيت العطور",
    desc: "التشكيلة المعروضة كانت رائعة، تضم مجموعة واسعة من المنتجات الفريدة والعالية الجودة. من الحرف اليدوية والتحف إلى الملابس والإكسسوارات، كل شيء يعكس الذوق الرفيع",
  },
  {
    id: 2,
    image: testim2,
    name: "ابراهيم محمد",
    title: "صاحب  متجر: الزهور",
    desc: "التشكيلة المعروضة كانت رائعة، تضم مجموعة واسعة من المنتجات الفريدة والعالية الجودة. من الحرف اليدوية والتحف إلى الملابس والإكسسوارات، كل شيء يعكس الذوق الرفيع",
  },
  {
    id: 3,
    image: testim3,
    name: "صالح محمود",
    title: "صاحب  متجر: الاصالة",
    desc: "التشكيلة المعروضة كانت رائعة، تضم مجموعة واسعة من المنتجات الفريدة والعالية الجودة. من الحرف اليدوية والتحف إلى الملابس والإكسسوارات، كل شيء يعكس الذوق الرفيع",
  },
  {
    id: 4,
    image: testim3,
    name: "صالح محمود",
    title: "صاحب  متجر: الاصالة",
    desc: "التشكيلة المعروضة كانت رائعة، تضم مجموعة واسعة من المنتجات الفريدة والعالية الجودة. من الحرف اليدوية والتحف إلى الملابس والإكسسوارات، كل شيء يعكس الذوق الرفيع",
  },

  {
    id: 53,
    image: testim3,
    name: "صالح محمود",
    title: "صاحب  متجر: الاصالة",
    desc: "التشكيلة المعروضة كانت رائعة، تضم مجموعة واسعة من المنتجات الفريدة والعالية الجودة. من الحرف اليدوية والتحف إلى الملابس والإكسسوارات، كل شيء يعكس الذوق الرفيع",
  },
];

const selectedUser = ref(users[0]);
</script>

<template>
  <section class="">
    <h2 class="mb-24 text-center text-6xl text-gray-700 leading-[6rem]">
      كن واحد منهم
    </h2>

    <div>
      <div class="flex flex-col-reverse lg:flex-row gap-16">
        <div class="w-full lg:w-[34rem] h-[522]">
          <swiper
            :modules="[Autoplay]"
            :slidesPerView="1"
            :direction="'horizontal'"
            :spaceBetween="0"
            :loop="false"
            :autoplay="false"
            :breakpoints="{
              576: {
                slidesPerView: 1.3,
                direction: 'horizontal',
              },
              767: {
                slidesPerView: 2,
                direction: 'horizontal',
              },
              991: {
                direction: 'vertical',
                slidesPerView: 3,
              },
            }"
            class="testim-swiper lg:h-[522px]"
          >
            <swiper-slide v-for="user in users" :key="user.name">
              <div
                class="px-16 py-9 rounded-2xl flex items-center gap-7 cursor-pointer"
                :class="{ 'bg-white': selectedUser.id === user.id }"
                @click="selectedUser = user"
              >
                <img
                  :src="user.image"
                  :alt="user.name"
                  class="img-fluid rounded"
                />

                <div>
                  <h6 class="text-3xl text-gray-700 leading-[3rem]">
                    {{ user.name }}
                  </h6>
                  <p class="text-gray-300 text-[1.75rem] leading-[2.8rem]">
                    {{ user.title }}
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="flex-1">
          <p class="text-gray-400 text-[2.25rem] leading-normal">
            {{ selectedUser.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* @media (min-width: 991px) {
  .testim-swiper {
    height: 522px;
  }
} */
</style>
