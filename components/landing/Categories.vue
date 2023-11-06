<script setup>
import { Autoplay, FreeMode } from "swiper/modules";
</script>

<template>
  <section class="pb-40">
    <h2 class="mb-24 text-center text-6xl text-gray-700 leading-[6rem]">
      اقسام ومنتجات متنوعة
    </h2>
    <div class="mb-9">
      <swiper
        :modules="[Autoplay, FreeMode]"
        :slidesPerView="1.2"
        :spaceBetween="32"
        :loop="true"
        :autoplay="{
          delay: 1,
          disableOnInteraction: false,
        }"
        :disableOnInteraction="true"
        :centeredSlides="true"
        :speed="6000"
        :loopedSlides="4"
        :allowTouchMove="false"
        :freeMode="true"
        class="category-swiper"
        :breakpoints="{
          767: {
            slidesPerView: 2.2,
          },
          991: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }"
      >
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
        <swiper-slide>
          <lazy-shared-cards-category />
        </swiper-slide>
      </swiper>
    </div>
    <swiper
      :modules="[Autoplay, FreeMode]"
      :slidesPerView="1.2"
      :spaceBetween="32"
      :loop="true"
      :autoplay="{
        delay: 1,
        reverseDirection: true,
      }"
      :disableOnInteraction="true"
      :centeredSlides="true"
      :speed="6000"
      :loopedSlides="4"
      :allowTouchMove="false"
      :freeMode="true"
      class="category-swiper"
      :breakpoints="{
        767: {
          slidesPerView: 2.2,
        },
        991: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      }"
    >
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
      <swiper-slide>
        <lazy-shared-cards-category />
      </swiper-slide>
    </swiper>
  </section>
</template>

<style>
.category-swiper {
  -webkit-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
  position: relative;
}

.swiper-slide {
}
</style>
