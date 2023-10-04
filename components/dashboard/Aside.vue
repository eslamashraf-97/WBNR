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
    link: "/dashboard/link-store",
    title: "ربط متجرك",
  },
];
</script>

<template>
  <aside
    class="flex flex-col gap-5 w-[448px] py-9 px-16 bg-gray-100 border border-gray-200 rounded-sm dashboard-aside h-fit"
  >
    <nuxt-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.link"
      class="flex items-center gap-6 text-2xl font-bold text-gray-700 py-3 aside-link"
    >
      <img src="@/assets/images/sound.svg" alt="" class="" />
      <span>{{ link.title }}</span>
    </nuxt-link>
  </aside>
</template>

<style scoped>
.dashboard-aside {
  box-shadow: 0px 1px 3px 0px rgba(23, 102, 68, 0.03),
    0px 10px 46px 0px rgba(23, 100, 67, 0.03);
}

.aside-link.router-link-exact-active {
  color: theme("colors.primary.300");
}
</style>
