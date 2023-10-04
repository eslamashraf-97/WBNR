<script setup lang="ts">
import FlagEg from "@/assets/images/flag-eg.png";
import FlagEm from "@/assets/images/flag-em.png";
import FlagKu from "@/assets/images/flag-ku.png";
import FlagSa from "@/assets/images/flag-sa.png";
</script>

<template>
  <section>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-7"
    >
      <div>
        <shared-cards-wallet
          title="ارباحك"
          value="930"
          :flag="FlagEg"
          expected="30"
        />
        <shared-buttons-secondary-button
          submitTitle="سحب الارباح"
          class="w-[256px] mt-4"
        />
      </div>
      <div>
        <shared-cards-wallet
          title="ارباحك"
          value="930"
          :flag="FlagEm"
          expected="30"
        />
        <shared-buttons-secondary-button
          submitTitle="سحب الارباح"
          class="w-[256px] mt-4"
        />
      </div>
      <div>
        <shared-cards-wallet
          title="ارباحك"
          value="930"
          :flag="FlagKu"
          expected="30"
        />
        <shared-buttons-secondary-button
          submitTitle="سحب الارباح"
          class="w-[256px] mt-4"
        />
      </div>
      <div>
        <shared-cards-wallet
          title="ارباحك"
          value="930"
          :flag="FlagSa"
          expected="30"
        />
        <shared-buttons-secondary-button
          submitTitle="سحب الارباح"
          class="w-[256px] mt-4"
        />
      </div>
    </div>

    <h4 class="my-16 text-gray-700 font-normal">طلبات السحب السابقة</h4>
  </section>
</template>

<style scoped></style>
