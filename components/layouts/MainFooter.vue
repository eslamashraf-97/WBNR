<script setup lang="ts"></script>

<template>
  <div class="bg-gray-800 text-white pt-16 pb-9">
    <div class="container">
      <div class="border-b border-gray-700 pb-9">
        <div class="flex flex-wrap justify-between items-center gap-6 mb-16">
          <img src="~/assets/images/myr-logo-light.svg" class="max-w-[12rem]" />

          <div class="flex items-center gap-8">
            <a href="#" target="_blank" class="flex-1">
              <img src="~/assets/images/play-store.png" class="max-w-[12rem]" />
            </a>
            <a href="#" target="_blank" class="flex-1">
              <img src="~/assets/images/app-store.png" class="max-w-[12rem]" />
            </a>
          </div>
        </div>

        <div class="flex flex-wrap justify-between items-center gap-6">
          <ul class="list-none flex gap-9">
            <li>ملاحظات عن الشحن</li>
            <li>مركز المساعدة</li>
            <li>الشروط والأحكام</li>
          </ul>

          <div class="flex items-center gap-4 text-3xl">
            <a href="#">
              <Icon name="skill-icons:instagram" class="cursor-pointer" />
            </a>
            <a href="#">
              <Icon name="logos:whatsapp-icon" class="cursor-pointer" />
            </a>
            <a href="#">
              <Icon name="logos:facebook" class="cursor-pointer" />
            </a>
            <a href="#">
              <Icon name="openmoji:youtube" class="cursor-pointer" />
            </a>
            <a href="#">
              <Icon name="grommet-icons:tictok" class="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div class="pt-9 text-gray-700 text-xl text-center">
        جميع الحقوق محفوظة لدى MYR GROUP
      </div>
    </div>
  </div>
</template>

<style scoped></style>
