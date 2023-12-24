<script setup>
import { Autoplay } from "swiper/modules";

const { data, pending } = await useRequest({
  url: "testimonial",
});

const selectedUser = ref(data.value?.data[0]);
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
            <template v-if="data?.data">
              <swiper-slide v-for="user in data.data" :key="user.id">
                <div
                  class="px-16 py-9 rounded-2xl flex items-center gap-7 cursor-pointer"
                  :class="{ 'bg-white': selectedUser.id === user.id }"
                  @click="selectedUser = user"
                >
                  <img
                    :src="user.marketer_image"
                    :alt="user.marketer_name"
                    class="img-fluid rounded"
                  />

                  <div>
                    <h6 class="text-3xl text-gray-700 leading-[3rem]">
                      {{ user.marketer_name }}
                    </h6>
                    <p class="text-gray-300 text-[1.75rem] leading-[2.8rem]">
                      {{ user.description }}
                    </p>
                  </div>
                </div>
              </swiper-slide>
            </template>
          </swiper>
        </div>
        <div class="flex-1">
          <p class="text-gray-400 text-[2.25rem] leading-normal">
            {{ selectedUser.testimonial }}
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
