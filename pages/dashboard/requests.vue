<script setup></script>

<template>
  <section>
    <div class="mb-16">
      <shared-cards-filter>
        <template v-slot:default>
          <div class="flex-1">
            <div class="flex-1 w-full mb-9">
              <shared-form-input
                type="search"
                placeholder="اسم العميل او رقم الهاتف"
                id="requeste-search-input"
                class="w-full"
              />
            </div>
            <div class="flex justify-between items-center">
              <div class="">
                <shared-from-to />
              </div>
              <div class="flex gap-9 align-items-center">
                <shared-languages-menu />
                <shared-buttons-secondary-button
                  submit-title="البحث"
                  class="h-[57px] w-[105px]"
                />
              </div>
            </div>
          </div>
        </template>
      </shared-cards-filter>
    </div>
  </section>
</template>

<style scoped></style>
