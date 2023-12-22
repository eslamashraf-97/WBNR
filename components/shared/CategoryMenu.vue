<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

import {
  apiGetCateoriesUrl,
  apiGetSubCateoriesUrl,
  apiGetProductsUrl,
} from "@/server";

const { selectedCountry } = useCountries();

const { $api } = useNuxtApp();

const categoriesData = ref();

const categoriesPending = ref(true);

const selectedCategory = ref();

const selectedCategoryData = ref();

async function fireGetCategories() {
  categoriesPending.value = true;
  $api
    .get(apiGetCateoriesUrl)
    .then((response) => {
      categoriesData.value = response.data;
    })
    .finally(() => {
      categoriesPending.value = false;
    });
}

await fireGetCategories();

const selectedSubCategory = ref();

const selectedSubCategoryData = ref();

// products based on selected category
const productsData = ref([]);

const productsPending = ref(true);

async function fireGetProducts() {
  productsPending.value = true;
  $api
    .get(apiGetProductsUrl, {
      params: {
        country_id: selectedCountry.value.id,
        category_id: selectedSubCategory.value,
      },
    })
    .then((response) => {
      productsData.value = response.data.data;
    })
    .finally(() => {
      productsPending.value = false;
    });
}

watch(selectedSubCategory, () => {
  fireGetProducts();
});

function changeCategory(cat) {
  selectedCategory.value = cat.id;
  selectedCategoryData.value = cat;
  productsData.value.data = [];
}

function changeSubCategory(subCat) {
  productsData.value.data = [];
  selectedSubCategory.value = subCat.id;
  selectedSubCategoryData.value = subCat;
}
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="rounded-sm border border-gray-200 hover:bg-gray-200 flex items-center text-2xl font-normal h-[3.6rem] px-8 py-[.38rem] bg-primary-50 text-primary-300"
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
        class="absolute right-0 z-10 mt-2 border border-gray-200 rounded-[12px] px-8 py-9 bg-gray-100 text-start"
      >
        <div class="py-1 flex">
          <!-- category  -->
          <div class="overflow-auto max-h-[300px] w-[20rem] items-scroller">
            <MenuItem v-for="(cat, index) in categoriesData.data" :key="cat.id">
              <div
                @click="
                  navigateTo({
                    path: '/products',
                    query: {
                      category_id: cat.id,
                      category_title: cat.name,
                    },
                  })
                "
                @mouseenter="changeCategory(cat)"
                class="whitespace-nowrap text-xl text-gray-700 font-bold mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"
                :class="{
                  'text-primary-300': selectedCategoryData?.id === cat.id,
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
            v-if="
              selectedCategoryData &&
              selectedCategoryData?.sub_categories.length
            "
          >
            <MenuItem
              v-for="(subCat, index) in selectedCategoryData?.sub_categories"
              :key="subCat.id + 'subcat' + index"
              as="div"
            >
              <div
                @click="
                  navigateTo({
                    path: '/products',
                    query: {
                      category_id: subCat.id,
                      category_title: subCat.name,
                    },
                  })
                "
                @mouseover="changeSubCategory(subCat)"
                class="whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"
                :class="{
                  'text-primary-300': selectedSubCategoryData?.id === subCat.id,
                }"
              >
                <span>
                  {{ subCat.name }}
                </span>
                <Icon name="carbon:chevron-left" />
              </div>
            </MenuItem>
          </div>

          <!-- products  -->
          <div
            class="overflow-auto max-h-[300px] w-[20rem] items-scroller"
            v-if="productsData.length"
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
                v-for="(product, index) in productsData"
                :key="product.id + 'product' + index"
                as="div"
              >
                <div
                  @click="navigateTo({ path: `/product/${product.id}` })"
                  class="whitespace-nowrap text-xl text-gray-700 font-normal mb-[1rem] py-[.75rem] flex justify-between items-center cursor-pointer"
                >
                  {{ product.title.substring(0, 20) }}
                  {{ product.title.length > 20 ? "..." : "" }}
                </div>
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
