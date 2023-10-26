<script setup>
import AvatarImage from "@/assets/images/avatar.svg";

import LogoutImage from "@/assets/images/logout.svg";

const { cartLength } = useCartLength();

const { removeUserData, user } = useAuth();

const userMenu = [
  {
    image: AvatarImage,
    link: "/profile",
    title: "اعدادات الحساب",
  },
  {
    image: LogoutImage,
    function: () => {
      removeUserData();
      window.location.reload();
    },
    title: "تسجيل الخروج",
  },
];
</script>

<template>
  <div class="bg-white py-8">
    <div
      class="container flex justify-between items-center border-b border-b-primary-100 pb-[24px] mb-[24px]"
    >
      <div class="flex items-center gap-[64px]">
        <img src="@/assets/images/logo.png" />
        <div class="relative layout-navbar-search">
          <shared-form-input
            placeholder="ما الذي تبحث عنه؟"
            type="text"
            class="pe-[80px]"
          />
          <span
            class="absolute top-0 left-0 bottom-0 rounded-tl-[11px] rounded-bl-[11px] bg-primary-100 text-primary-300 w-[75px] flex items-center justify-center border border-gray-200 border-s-0"
          >
            <icon name="system-uicons:search" class="text-4xl" />
          </span>
        </div>
      </div>
      <div class="flex gap-8">
        <div class="flex items-center gap-9">
          <Icon name="pepicons-pencil:bell" class="text-gray-600 text-2xl" />
          <nuxt-link
            to="/saved-products"
            class="flex items-center gap-2 text-2xl"
          >
            <span>0</span>
            <Icon name="fluent:bookmark-20-regular" class="text-gray-600" />
          </nuxt-link>
          <nuxt-link to="/cart" class="flex items-center gap-2 text-2xl">
            <span>{{ cartLength }}</span>
            <Icon
              name="solar:cart-large-minimalistic-linear"
              class="text-gray-600"
            />
          </nuxt-link>
        </div>
        <shared-menu
          :items="userMenu"
          :menu-props="{
            class: '!min-w-0',
          }"
        >
          <template #label>
            <div class="flex items-center gap-[19px]">
              <Icon name="iconamoon:arrow-down-2-duotone" />
              <span class="leading-normal text-2xl text-gray-700">
                {{ user.name }}
              </span>
            </div>
          </template>
          <template #item="{ data }">
            <nuxt-link
              v-if="data.link"
              :to="data.link"
              class="flex items-center gap-6 leading-normal text-2xl text-gray-700 mb-[1.19rem]"
            >
              <img :src="data.image" :alt="data.title" class="" />
              <span class="flex-1 whitespace-nowrap">
                {{ data.title }}
              </span>
            </nuxt-link>
            <button
              v-else
              type="button"
              @click="data.function()"
              class="flex items-center gap-6 leading-normal text-2xl text-gray-700"
            >
              <img :src="data.image" :alt="data.title" class="" />
              <span class="flex-1 whitespace-nowrap">
                {{ data.title }}
              </span>
            </button>
          </template>
        </shared-menu>
      </div>
    </div>
    <div class="container flex justify-between items-center">
      <nav class="flex items-center gap-[24px]">
        <NuxtLink
          to="/home"
          class="px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"
          >الرئيسية</NuxtLink
        >
        <NuxtLink
          to="/suggested-products"
          class="px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"
          >منتجات مرشحة لك</NuxtLink
        >
        <span class="h-[36px] w-[1px] bg-gray-200"></span>
        <NuxtLink
          to="/dashboard"
          class="px-[36px] py-[6px] h-[57px] text-[24px] text-gray-500 font-semibold border-b border-b-transparent"
          >لوحة التحكم</NuxtLink
        >
      </nav>
      <div class="flex items-center gap-[36px]">
        <shared-countries-menu />

        <shared-menu
          :items="[]"
          :button-props="{
            class:
              'h-[57px] px-[32px] py-[6px] bg-primary-100 text-primary-300',
          }"
        >
          <template #label>
            <div class="flex items-center gap-[19px]">
              <span>جميع الفئات</span>
              <Icon name="iconamoon:arrow-down-2-duotone" />
            </div>
          </template>
        </shared-menu>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-navbar-search:focus-within > span {
  border-color: theme("colors.primary.300");
}

.router-link-active {
  color: theme("colors.gray.700");
  border-bottom-color: theme("colors.primary.300");
}
</style>
