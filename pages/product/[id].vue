<script setup>
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import {
  api_get_single_product,
  api_get_products,
  api_add_to_cart,
} from "@/server";

import { productStatus } from "@/constants";

import JSZip from "jszip";

const { selectedCountry } = useCountries();
const modules = ref([FreeMode, Thumbs]);

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const { setCartLength, cartLength } = useCartLength();

const route = useRoute();

const { data: productData } = await api_get_single_product(route.params.id);

const { data: productDataByCategory } = await api_get_products({
  category_id: productData.data.category_id,
  country_id: selectedCountry.value?.id,
});

const productForm = reactive({
  quantity: 1,
  price: productData?.data.price,
});

const variantForm = ref({});

function getSelectedVariantsValues() {
  let selectedValue = [];
  for (const variantId in variantForm.value) {
    console.log(variantId);
    selectedValue.push({
      variant_id: variantId,
      variant_value_id: variantForm.value[variantId],
    });
  }
  return selectedValue;
}

const isLoading = ref(false);

const addedToCartStatus = ref(false);

function addToCart() {
  isLoading.value = true;
  const payload = {
    product_id: productData?.data.id,
    quantity: productForm.quantity,
    final_price: productData?.data.price,
    cartItemVariants: getSelectedVariantsValues(),
  };
  api_add_to_cart(payload)
    .then(() => {
      addedToCartStatus.value = true;
      setCartLength(
        parseInt(cartLength.value) + parseInt(productForm.quantity),
      );
    })
    .finally(() => {
      isLoading.value = false;
    });
}

const commission = computed(
  () =>
    (productForm.price -
      productData.data.price +
      productData.data.minCommission) *
    productForm.quantity,
);

const productStatuses = computed(() => {
  const percentage =
    (productData.data.orderConfirmedPercentage +
      productData.data.orderCompletedPercentage) /
    2;

  return productStatus.find((item) => {
    return (
      item.from <= percentage && (item.to >= percentage || item.to == undefined)
    );
  }).color;
});

const { setQuickOrderState } = useQuickProduct();

function requestNow() {
  setQuickOrderState({
    ...productData.data,
    qty: productForm.quantity,
    commission: commission.value,
    price: productForm.price,
    selectedVariants: getSelectedVariantsValues(),
  });

  navigateTo("/checkout-quick-order");
}

function downloadImages() {
  var zip = new JSZip();
  var promises = [];

  productData.data.images.forEach(function (url) {
    promises.push(
      fetch(url.url)
        .then((response) => response.blob())
        .then((blob) => {
          var filename = url.url.substring(url.url.lastIndexOf("/") + 1);
          zip.file(filename, blob);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        }),
    );
  });

  Promise.all(promises).then(() => {
    zip.generateAsync({ type: "blob" }).then(function (content) {
      var link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "images.zip";
      link.click();
    });
  });
}
// downloadImage(productData.data.images[i].url);

const selectedImage = ref(null);
</script>

<template>
  <div>
    <div class="flex items-center text-gray-400 text-2xl mb-9">
      <nuxt-link to="/suggested-products">المنتجات</nuxt-link>
      <span>&nbsp;/&nbsp;</span>
      <span>{{ productData?.data?.category?.name }}</span>
      <span>&nbsp;/&nbsp;</span>
      <span>{{ productData?.data?.title }}</span>
    </div>
    <template v-if="productData?.data">
      <div class="flex flex-col lg:flex-row gap-16 mb-24">
        <!-- Gallery -->
        <div
          class="bg-white p-9 rounded-lg max-w-[50rem] h-[45rem] flex flex-col overflow-hidden"
        >
          <div class="flex-1 flex flex-col sm:flex-row gap-2">
            <div class="w-full sm:w-[36rem] h-[36rem]">
              <swiper
                :spaceBetween="20"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                class="h-full"
              >
                <swiper-slide
                  v-for="(productImage, index) in productData.data.images"
                  :key="index"
                >
                  <img
                    :alt="productImage.alt_image"
                    :src="productImage.url"
                    class="w-full h-full object-cover cursor-pointer rounded-[0.75rem]"
                  />
                </swiper-slide>
              </swiper>
            </div>

            <div
              class="w-full sm:w-[8.5rem] h-auto sm:h-[36rem] overflow-hidden"
            >
              <swiper
                @swiper="setThumbsSwiper"
                :spaceBetween="20"
                :slidesPerView="4"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="modules"
                direction="horizontal"
                :breakpoints="{
                  640: {
                    direction: 'vertical',
                  },
                }"
                class="h-full"
              >
                <swiper-slide
                  v-for="(productImage, index) in productData.data.images"
                  :key="index"
                >
                  <img
                    :alt="productImage.alt_image"
                    :src="productImage.url"
                    class="w-[8.5rem] h-[8.5rem] object-cover cursor-pointer rounded-[0.75rem]"
                  />
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="text-primary-300 text-xl font-semibold mt-7">
            <span @click="downloadImages" class="cursor-pointer">
              تحميل كل صور المنتج
              <span>
                <Icon name="pepicons-pop:angle-left" />
              </span>
            </span>
          </div>
        </div>

        <!-- details -->
        <div class="details flex-1">
          <!-- main info -->
          <div class="main-info">
<!--            <p :style="{ background: 'rgb(83 238 173)'}" class="p-2 px-4 rounded inline-block" v-if="productData.data.stock > 10"> متوفر </p>-->
            <!--            <p class="text-gray-700 text-2xl font-normal flex items-end gap-4">-->
<!--              اداء المنتج:-->

<!--              <span-->
<!--                class="w-[1.5rem] h-[.25rem] rounded-[3rem] block mb-2"-->
<!--                :style="{ background: productStatuses }"-->
<!--              ></span>-->
<!--            </p>-->
            <h1 class="text-gray-800 text-5xl my-4">
              {{ productData.data.title }}
              <p :style="{ background: '#34d77d'}" class="p-2 text-sm text-white px-4 rounded inline-block" v-if="productData.data.stock > 10"> متوفر </p>
              <p :style="{ background: '#ea2020' }" class="p-2 px-4 rounded inline-block" v-else> على وشك الانتهاء </p>

            </h1>
            <p class="text-gray-400 text-2xl flex gap-3 items-center">
              <span>كود المنتج:</span>
              <span>{{ productData.data.code }}</span>
            </p>
          </div>

          <div class="flex items-center gap-16 mt-10">
            <div>
              <span class="text-base text-gray-400 font-light">سعر المنتج</span>
              <h6
                class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]"
              >
                {{ productData.data.price }}
                <span>{{ productData.data.country.currency }}</span>
              </h6>
            </div>

            <div class="h-[36px] bg-gray-200 w-[1px]"></div>

            <div>
              <span class="text-base text-gray-400 font-light"
                >الربح من اجمالي السعر</span
              >
              <h6
                class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]"
              >
                {{ productData.data.minCommission }}
                <span>{{ productData.data.country.currency }}</span>
              </h6>
            </div>
          </div>

          <div class="mt-10 mb-10 flex gap-16">
            <div>
              <span class="text-base text-gray-400 font-light"
                >الكمية المتوفرة</span
              >
              <h6
                class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]"
              >
                {{ productData.data.stock }} <span>قطعة</span>
              </h6>
            </div>
            <div>
              <span class="text-base text-gray-400 font-light"
                >السعر الموصى به</span
              >
              <h6
                class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]"
              >
                {{ productData.data.recommended_price }}
                <span> {{ productData.data.country.currency }} </span>
              </h6>
            </div>
          </div>

          <div class="">
            <div
              class="mt-10 mb-10"
              v-for="(variant, index) in productData.data.variants"
              :key="index"
            >
              <span class="text-base text-gray-400 font-light mb-3 block">{{
                variant.name_ar
              }}</span>

              <div class="flex items-center gap-5">
                <div
                  v-for="(variantVal, idx) in variant.values"
                  :key="variantVal.id"
                >
                  <input
                    :id="`variantVal-${variantVal.id}`"
                    type="radio"
                    class="hidden input-check-box"
                    :name="variant.name"
                    :value="variantVal.id"
                    v-model="variantForm[variant.id]"
                  />
                  <label
                    v-if="variant.name_ar === 'الالوان'"
                    :for="`variantVal-${variantVal.id}`"
                    class="w-[18px] h-[18px] rounded-full block cursor-pointer label-check-box relative transition"
                    :style="{
                      backgroundColor: variantVal.name_ar,
                      '--label-check-box': variantVal.name_ar,
                    }"
                  >
                  </label>
                  <label
                    v-else
                    :for="`variantVal-${variantVal.id}`"
                    class="border px-4 pb-2 flex items-center justify-center rounded cursor-pointer label-check-box-other relative transition"
                  >
                    {{ variantVal.name_ar }}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div
            class="px-9 py-5 shadow-main rounded-sm border border-gray-200 max-w-[650px]"
          >
            <div class="flex flex-wrap items-center gap-6">
              <div>
                <span class="text-base text-gray-400 font-light mb-5 block"
                  >الكمية</span
                >
                <div class="relative w-[96px]">
                  <shared-form-input
                    type="text"
                    class="w-[96px] h-[53px] bg-transparent text-xl"
                    v-model.number="productForm.quantity"
                  />
                  <div
                    class="absolute top-[1px] left-[1px] bottom-[1px] flex flex-col items-center bg-white rounded-[11px]"
                  >
                    <button
                      type="button"
                      class="w-[24px] flex-1 border-b border-b-gray-200 border-s border-s-gray-200"
                      @click="productForm.quantity++"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      class="w-[24px] flex-1 border-s border-s-gray-200"
                      @click="
                        productForm.quantity > 1 ? productForm.quantity-- : null
                      "
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <span class="text-base text-gray-400 font-light mb-5 block"
                  >سعر البيع للقطعة</span
                >
                <div class="relative w-[172px]">
                  <shared-form-input
                    type="text"
                    class="!w-[172px] h-[53px] bg-transparent text-xl"
                    v-model="productForm.price"
                  />
                  <div
                    class="absolute top-[1px] left-[1px] bottom-[1px] flex flex-col bg-white rounded-[11px]"
                  >
                    <div
                      class="w-[57px] flex-1 border-s border-s-gray-200 flex items-center justify-center text-xl text-gray-300 font-bold"
                    >
                      {{ productData.data.country.currency }}
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="text-base text-gray-400 flex gap-[12px] mt-auto mb-3"
              >
                <span>الربح من اجمالي السعر</span>
                <span
                  class="flex items-center gap-[10px] text-primary-300 text-xl"
                  >{{ commission }}
                  <span>{{ productData.data.country.currency }}</span>
                </span>
              </span>
            </div>

            <div class="mt-12 flex items-center gap-7">
              <shared-buttons-primary-button
                submit-title="اطلب الان"
                class="w-[232px] h-[67px]"
                @click="requestNow"
              />
              <shared-buttons-secondary-button
                class="w-[93px] h-[67px] flex items-center justify-center"
                @click="addToCart"
                :loading="isLoading"
                v-if="!addedToCartStatus"
              >
                <img src="@/assets/images/cart-icon.svg" />
              </shared-buttons-secondary-button>
              <shared-buttons-secondary-button
                class="w-[232px h-[67px] flex items-center justify-center"
                @click="navigateTo('/cart')"
                v-else
              >
                اذهب الى العربة
                <Icon name="iconamoon:arrow-left-2-duotone" class="text-2xl" />
              </shared-buttons-secondary-button>
            </div>
          </div>
        </div>
      </div>

      <!-- description -->
      <div class="mb-24">
        <p class="text-gray-700 text-3xl font-normal mb-8">وصف المنتج</p>
        <div
          class="bg-white rounded-lg border p-9"
          v-html="productData.data.description"
        ></div>
      </div>

      <!-- description -->
      <div class="mb-24">
        <p class="text-gray-700 text-3xl font-normal mb-8">شرح المنتج</p>
        <div
          class="bg-white rounded-lg border p-9"
          v-html="productData.data.catalog"
        ></div>
      </div>

      <template
        v-if="productDataByCategory.data && productDataByCategory.data.length"
      >
        <shared-title
          :title="productData.data.category?.name"
          url="/suggested-products"
        />

        <shared-product-swiper>
          <swiper-slide
            v-for="(product, key) in productDataByCategory.data"
            :key="key"
          >
            <lazy-shared-cards-product :details="product" />
          </swiper-slide>
        </shared-product-swiper>
      </template>
    </template>
  </div>
</template>

<style scoped>
.label-check-box::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid var(--label-check-box);
  opacity: 0;
  transition: 0.3s;
}
.input-check-box:checked ~ .label-check-box::after {
  opacity: 1;
}
.input-check-box:checked ~ .label-check-box {
  width: 14px;
  height: 14px;
}

.input-check-box:checked ~ .label-check-box-other {
  background-color: theme("colors.primary.300");
  color: #fff;
}
</style>
