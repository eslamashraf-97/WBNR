<script setup>
const links = [
  {
    link: "/dashboard",
    title: "إحصائيات تجارتك",
  },
  {
    link: "/dashboard/wallet",
    title: "المحفظة",
  },
  {
    link: "/dashboard/requests",
    title: "الطلبات",
  },
  {
    link: "/dashboard/replace-returns",
    title: "استبدال واسترجاع",
  },
  {
    link: "/dashboard/link-store",
    title: "ربط متجرك",
  },
];

defineEmits(["toggleMenu"]);
</script>

<template>
  <button
    class="ms-auto block xl:hidden"
    type="button"
    @click="$emit('toggleMenu')"
  >
    <Icon name="material-symbols:close" class="text-3xl mb-4" />
  </button>
  <aside
    class="flex flex-col gap-5 w-[26rem] lg:w-[28rem] py-9 px-16 bg-gray-100 border border-gray-200 rounded-sm dashboard-aside h-fit shadow-main"
  >
    <nuxt-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.link"
      class="flex items-center gap-6 text-2xl font-bold text-gray-700 py-3 aside-link"
      @click="$emit('toggleMenu', true)"
    >
      <img src="@/assets/images/sound.svg" alt="" class="" />
      <span>{{ link.title }}</span>
    </nuxt-link>
  </aside>
</template>

<style scoped>
.aside-link.router-link-exact-active {
  color: theme("colors.primary.300");
}
</style>
