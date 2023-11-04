<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

import {
  apiGetCateoriesUrl,
  apiGetSubCateoriesUrl,
  apiGetProductsUrl,
} from "@/server";

const { selectedCountry } = useCountries();

// catgeory
const { fire: fireGetCategories } = useApi({
  url: () => apiGetCateoriesUrl,
});

const { data: categoriesData, pending: categoriesPending } =
  await fireGetCategories();

const selectedCategory = ref(categoriesData.value?.data[0].id);

const selectedCategoryData = ref(categoriesData.value?.data[0]);

function changeCategory(cat) {
  selectedCategory.value = cat.id;
  selectedCategoryData.value = cat;
  productsData.value.data = [];
}

// sub categories
const { fire: fireGetSubCategories } = useApi({
  url: () => apiGetSubCateoriesUrl + "/" + selectedCategory.value,
  requestOptions: {
    watch: [selectedCategory],
  },
});

const { data: subCategoriesData, pending: subCategoriesPending } =
  await fireGetSubCategories();

const selectedSubCategory = ref(
  subCategoriesData.value?.data.sub_categories[0].id,
);

const selectedSubCategoryData = ref(
  subCategoriesData.value?.data.sub_categories[0],
);

function changeSubCategory(subCat) {
  selectedSubCategory.value = subCat.id;
  selectedSubCategoryData.value = subCat;
}

// products based on selected category
const { fire: fireGetProducts } = useApi({
  url: () => apiGetProductsUrl,
  requestOptions: {
    query: {
      country_id: selectedCountry.value.id,
      category_id: selectedSubCategory,
    },
    watch: [selectedSubCategory],
  },
});

const { data: productsData, pending: productsPending } =
  await fireGetProducts();
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="rounded-sm border border-gray-300 hover:bg-gray-200 flex items-center text-2xl font-normal h-[3.6rem] px-8 py-[.38rem] bg-primary-100 text-primary-300"
      >
        <div class="flex items-center gap-[19px]">
          <span>جميع الفئات</span>
          <Icon name="iconamoon:arrow-down-2-duotone" />
        </div>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute left-0 z-10 mt-2 border border-gray-200 rounded-[12px] px-8 py-9 bg-gray-100 text-start"
      >
        <div class="py-1 flex">
          <!-- category  -->
          <div class="overflow-auto max-h-[300px] w-[20rem] items-scroller">
            <MenuItem
              v-slot="{ active }"
              v-for="(cat, index) in categoriesData.data"
              :key="cat.id"
            >
              <div
                @click.stop.prevent="changeCategory(cat)"
                class="whitespace-nowrap text-xl text-gray-700 font-bold mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"
                :class="{
                  'text-primary-300': selectedCategoryData.id === cat.id,
                }"
              >
                <span>
                  {{ cat.name }}
                </span>
                <Icon name="carbon:chevron-left" />
              </div>
            </MenuItem>
          </div>

          <!-- sub category  -->
          <div
            class="overflow-auto max-h-[300px] w-[20rem] items-scroller"
            v-if="subCategoriesData.data.sub_categories.length"
          >
            <template v-if="subCategoriesPending">
              <div
                @click.stop.prevent
                class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
              ></div>

              <div
                @click.stop.prevent
                class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
              ></div>

              <div
                @click.stop.prevent
                class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
              ></div>

              <div
                @click.stop.prevent
                class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
              ></div>
            </template>
            <template v-else>
              <MenuItem
                v-slot="{ active }"
                v-for="(subCat, index) in subCategoriesData.data.sub_categories"
                :key="subCat.id"
              >
                <div
                  @click.stop.prevent="changeSubCategory(subCat)"
                  class="whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"
                  :class="{
                    'text-primary-300':
                      selectedSubCategoryData.id === subCat.id,
                  }"
                >
                  <span>
                    {{ subCat.name }}
                  </span>
                  <Icon name="carbon:chevron-left" />
                </div>
              </MenuItem>
            </template>
          </div>

          <!-- products  -->
          <div
            class="overflow-auto max-h-[300px] w-[20rem] items-scroller"
            v-if="productsData.data.length"
          >
            <template v-if="productsPending">
              <div
                @click.stop.prevent
                class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
              ></div>

              <div
                @click.stop.prevent
                class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
              ></div>

              <div
                @click.stop.prevent
                class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
              ></div>

              <div
                @click.stop.prevent
                class="h-[30px] bg-primary-100 animate-pulse mb-[1rem]"
              ></div>
            </template>
            <template v-else>
              <MenuItem
                v-slot="{ active }"
                v-for="(product, index) in productsData.data"
                :key="product.id"
              >
                <nuxt-link
                  :to="`/product/${product.id}`"
                  class="whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"
                >
                  {{ product.title }}
                </nuxt-link>
              </MenuItem>
            </template>
          </div>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>
.items-scroller {
  padding-inline-end: 2.25rem;
}

.items-scroller:not(:first-child) {
  padding-inline-start: 2.25rem;
}
.items-scroller:not(:last-child) {
  border-inline-end: 1px solid theme("colors.gray.200");
}

.items-scroller::-webkit-scrollbar {
  width: 1px;
}

/* Track */
.items-scroller::-webkit-scrollbar-track {
  background: theme("colors.gray.200");
}

/* Handle */
.items-scroller::-webkit-scrollbar-thumb {
  background: theme("colors.primary.300");
}

/* Handle on hover */
/* .items-scroller::-webkit-scrollbar-thumb:hover {
  background: #555;
} */
</style>
