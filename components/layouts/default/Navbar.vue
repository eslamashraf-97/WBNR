<script setup>
import WalletImage from "@/assets/images/wallet.svg";

import OrdersImage from "@/assets/images/orders.svg";

import AvatarImage from "@/assets/images/avatar.svg";

import LogoutImage from "@/assets/images/logout.svg";

import { apiGetNotificationListUrl, apiGetNotificationList } from "@/server";

import { getMessaging, onMessage } from "firebase/messaging";

import { toast } from "vue3-toastify";

// const { fire } = useApi({
//   url: apiGetNotificationListUrl,
// });

const notificationData = ref([]);

await apiGetNotificationList().then((res) => {
  notificationData.value = res.data.data;
});

const { cartLength } = useCartLength();

const { savedProductsCount } = useSavedProducts();

const { removeUserData, user } = useAuth();

const userMenu = [
  {
    image: WalletImage,
    function: () => {
      navigateTo("/dashboard/wallet");
    },
    title: "المحفظة",
  },
  {
    image: OrdersImage,
    function: () => {
      navigateTo("/dashboard/requests");
    },
    title: "الطلبات",
  },
  {
    image: AvatarImage,
    function: () => {
      navigateTo("/profile");
    },
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

const menuIsOpen = ref(false);

function toggleMenu() {
  menuIsOpen.value = !menuIsOpen.value;
}

onMounted(() => {
  const messaging = getMessaging();
  onMessage(messaging, (payload) => {
    console.log("hello this is ", payload);
    notificationData.value = [payload.notification, ...notificationData.value];
    toast.info(payload.notification.title);
  });
});

const route = useRoute();

const search = ref(route.query.title);
</script>

<template>
  <div class="bg-primary-300 py-2">
    <div class="text-white container flex justify-between items-center">
      <div class="flex gap-12">
        <span>عربى</span>
        <div class="flex gap-6 items-center">
          <p>حمل التطبيق الان</p>
          <img src="assets/images/google-play.png" class="w-[120px]" />
          <img src="assets/images/app-app-store.png" class="w-[120px]" />
        </div>
      </div>
      <div class="flex gap-6 items-center">
        <nuxt-link to="/faq">الاسأله الشائعة</nuxt-link>
        <nuxt-link to="/notes">ملاحظات الشحن</nuxt-link>
      </div>
    </div>
  </div>
  <div class="bg-white py-8">
    <div
      class="container flex justify-between items-center border-b border-b-primary-100 pb-[24px] mb-[24px]"
    >
      <div class="flex items-center gap-[64px]">
        <NuxtLink to="/home">
          <img src="@/assets/images/myr-logo.svg" class="w-[130px]" />
        </NuxtLink>
        <form
          @submit.prevent="
            navigateTo({
              path: '/products',
              query: {
                title: search,
              },
            })
          "
          class="relative layout-navbar-search hidden xl:block"
        >
          <shared-form-input
            placeholder="ما الذي تبحث عنه؟"
            type="text"
            class="pe-[80px] !w-[35rem]"
            v-model="search"
          />
          <span
            class="cursor-pointer absolute top-0 left-0 bottom-0 rounded-tl-[11px] rounded-bl-[11px] bg-primary-100 text-primary-300 w-[75px] flex items-center justify-center border border-gray-200 border-s-0"
            @click="
              navigateTo({
                path: '/products',
                query: {
                  title: search,
                },
              })
            "
          >
            <icon name="system-uicons:search" class="text-4xl" />
          </span>
        </form>
      </div>
      <div
        class="flex flex-col-reverse sm:flex-row items-end sm:items-center gap-4 sm:gap-8"
      >
        <div class="flex items-center gap-9">
          <shared-menu
            :items="notificationData"
            :menu-props="{
              class:
                '!min-w-0 w-[300px] xl:w-[52rem] max-h-[52rem] text-start notification-menu',
            }"
            :button-props="{
              class: '!px-0 bg-transparent border-0 hover:bg-transparent',
            }"
          >
            <template #label>
              <Icon
                name="pepicons-pencil:bell"
                class="text-gray-600 text-2xl"
              />
            </template>

            <template #item="{ data }">
              <button
                type="button"
                @click="
                  navigateTo({
                    path: `/dashboard/requests`,
                    query: { id: data.target_id },
                  })
                "
                class="pb-[2.25rem] border-b border-b-gray-200 mb-2 last:border-0 last:mb-0 block"
                v-if="data.type === 'order'"
              >
                <h5 class="text-gray-700 font-bold text-2xl leading-normal">
                  {{ data?.title }}
                </h5>
                <p class="text-gray-500 text-2xl mb-0 leading-normal">
                  {{ data.body }}
                </p>
              </button>
              <div
                class="pb-[2.25rem] border-b border-b-gray-200 mb-2 last:border-0 last:mb-0"
                v-else
              >
                <h5 class="text-gray-700 font-bold text-2xl leading-normal">
                  {{ data?.title }}
                </h5>
                <p class="text-gray-500 text-2xl mb-0 leading-normal">
                  {{ data.body }}
                </p>
              </div>
            </template>
          </shared-menu>
          <nuxt-link
            to="/saved-products"
            :class="[
              'flex items-center gap-2 text-2xl',
              { '!text-primary-300': $route.path == '/saved-products' },
            ]"
          >
            <span>{{ savedProductsCount }}</span>
            <Icon
              name="fluent:bookmark-20-regular"
              :class="[
                'text-gray-600',
                { 'text-primary-300': $route.path == '/saved-products' },
              ]"
            />
          </nuxt-link>
          <nuxt-link
            to="/cart"
            :class="[
              'flex items-center gap-2 text-2xl',
              { '!text-primary-300': $route.path == '/cart' },
            ]"
          >
            <span>{{ cartLength }}</span>
            <Icon
              name="solar:cart-large-minimalistic-linear"
              :class="[
                'text-gray-600',
                { 'text-primary-300': $route.path == '/cart' },
              ]"
            />
          </nuxt-link>
        </div>
        <shared-menu
          :items="userMenu"
          :menu-props="{
            class: '!min-w-0 text-start',
          }"
          :button-props="{
            class: '!px-8',
          }"
        >
          <template #label>
            <div class="flex items-center gap-[19px]">
              <Icon name="iconamoon:arrow-down-2-duotone" />
              <span class="leading-normal text-2xl text-gray-700">
                اهلا, {{ user?.name ? user.name.substring(0, 5) : null }}
              </span>
            </div>
          </template>
          <template #item="{ data }">
            <button
              type="button"
              @click="data.function()"
              class="flex items-center gap-6 leading-normal text-2xl text-gray-700 mb-[1.19rem] last:mb-0"
            >
              <img
                :src="data?.image"
                :alt="data.title"
                class="w-[20px] h-[20px] block"
              />
              <span class="flex-1 whitespace-nowrap">
                {{ data.title }}
              </span>
            </button>
          </template>
        </shared-menu>
      </div>
    </div>
    <div class="container flex justify-between items-center">
      <nav class="hidden xl:flex items-center gap-[24px]">
        <div class="hidden xl:block">
          <shared-category-menu />
        </div>
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

      <button
        type="button"
        class="block xl:hidden text-gray-500"
        @click="toggleMenu"
      >
        <Icon name="uil:bars" class="text-5xl" />
      </button>

      <div class="flex items-center gap-[36px]">
        <shared-countries-menu :inMenu="true" />
      </div>
    </div>
  </div>

  <div
    class="fixed top-0 bottom-0 left-full w-full z-50 transition-all"
    :class="{ '!left-0': menuIsOpen }"
  >
    <div class="absolute inset-0 bg-black/10" @click="toggleMenu"></div>
    <nav
      class="flex flex-col gap-[24px] relative z-10 bg-white w-[300px] h-full p-8"
    >
      <NuxtLink
        to="/home"
        class="h-[57px] text-2xl text-gray-500 font-semibold border-b border-b-transparent"
        @click="toggleMenu"
        >الرئيسية</NuxtLink
      >
      <NuxtLink
        to="/suggested-products"
        class="h-[57px] text-2xl text-gray-500 font-semibold border-b border-b-transparent"
        @click="toggleMenu"
        >منتجات مرشحة لك</NuxtLink
      >
      <NuxtLink
        to="/dashboard"
        class="h-[57px] text-2xl text-gray-500 font-semibold border-b border-b-transparent"
        @click="toggleMenu"
        >لوحة التحكم</NuxtLink
      >
    </nav>
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
