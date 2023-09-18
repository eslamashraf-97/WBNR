<script setup lang="ts"></script>

<template>
  <layouts-auth-navbar />
  <br />

  <layouts-landing-navbar />
  <br />

  <layouts-default-navbar />
  <br />

  <shared-buttons-primary-button />
  <br />
  <br />

  <shared-buttons-secondary-button />

  <br />
  <br />
  <shared-cards-testimonial-card :user="{name: 'كريم حسن', title: 'صاحب  متجر: اسم متجر '}"/>
  <br />
  <br />
  <shared-cards-product />
  <br />
  <br />
  <br />
  <layouts-main-footer />
  <slot />
</template>

<style scoped></style>
