<script setup>
import YoucanLogo from "@/assets/images/youcan-logo.png";
import ZidLogo from "@/assets/images/zid.png";
</script>

<template>
  <section>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-7">
      <shared-cards-store
        desc="اضافة منتجاتنا الى متجرك على YouCan مباشرة"
        :logo="YoucanLogo"
      />
      <shared-cards-store
        desc="اضافة منتجاتنا الى متجرك على زد مباشرة"
        :logo="ZidLogo"
      />
    </div>
  </section>
</template>

<style scoped></style>
