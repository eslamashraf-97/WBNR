<script setup>
import { api_single_product, api_products } from "@/server";

// // Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";

// // Import Swiper styles
// import "swiper/css";

// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// // import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const route = useRoute();

const isLoading = ref(true);

const productData = ref(null);

const sliders = ref([
  {
    title: "asasas",
    header: "assssssss",
    description: "asasdasda",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
  },
  {
    title: "sdddddd",
    header: "fffffffff",
    description: "gggggg",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
  },
]);

(function getProductData() {
  console.log(route);
  api_single_product(route.params.id)
    .then((res) => {
      productData.value = res.data.data;
    })
    .finally(() => {
      isLoading.value = false;
    });
})();

const productForm = reactive({
  quantity: 1,
  price: "",
});

watch([productForm, productData], () => {
  productForm.price = productForm.quantity * +productData.value?.price;
});

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <!-- <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :loop="true"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper.value }"
    :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay, SwiperThumbs]"
    class="mySwiper2"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
    /></swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :loop="true"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
    /></swiper-slide>
  </swiper> -->
  <div>
    <p class="text-gray-400 text-2xl mb-9">
      المنتجات / إلكترونيات/ اكسسوارات/ حوامل
    </p>
    <template v-if="productData">
      <div class="flex gap-16 mb-24">
        <!-- Gallery -->
        <div class="bg-white p-9 rounded-lg">
          <div class="gallery flex gap-2">
            <img
              :src="productData.featured_image"
              class="w-[36rem] h-[36rem] object-cover"
            />
            <div
              class="flex flex-col justify-between rounded-lg overflow-hidden"
            >
              <img
                src="~/assets/images/products/main-image.png"
                class="w-32 h-32 object-cover"
              />
              <img
                src="~/assets/images/products/main-image.png"
                class="w-32 h-32 object-cover"
              />
              <img
                src="~/assets/images/products/main-image.png"
                class="w-32 h-32 object-cover"
              />
              <img
                src="~/assets/images/products/main-image.png"
                class="w-32 h-32 object-cover"
              />
            </div>
          </div>
          <!-- <swiper
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2"
          >
            <swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
            ><swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
            /></swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
            ><swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
            /></swiper-slide>
          </swiper> -->
          <!-- <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slides-per-view="3"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="[SwiperAutoplay, SwiperController]"
          >
            <swiper-slide>1</swiper-slide>
            <swiper-slide>1</swiper-slide>
            <swiper-slide>1</swiper-slide>
            <swiper-slide>1</swiper-slide>
            <swiper-slide
              v-for="productImage in productData.images"
              :key="productImage.id"
            >
              <img
                :alt="productImage.alt_image"
                :src="productImage.url"
                class="w-32 h-32 object-cover"
              />
            </swiper-slide>
          </swiper> -->
          <p class="text-primary-300 text-xl font-semibold mt-7">
            تحميل كل صور المنتج
            <span>
              <Icon name="pepicons-pop:angle-left" />
            </span>
          </p>
        </div>

        <!-- details -->
        <div class="details flex-1">
          <!-- main info -->
          <div class="main-info">
            <p class="text-gray-700 text-2xl font-normal">اداء المنتج:</p>
            <h1 class="text-gray-800 text-5xl my-4">
              {{ productData.title }}
            </h1>
            <p class="text-gray-400 text-2xl flex gap-3 items-center">
              <span>كود المنتج:</span>
              <span>{{ productData.code }}</span>
            </p>
          </div>

          <div class="flex items-center gap-16 mt-10">
            <div>
              <span class="text-base text-gray-400 font-light">سعر المنتج</span>
              <h6
                class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]"
              >
                {{ productData.price }} <span>ج.م</span>
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
                {{ productData.maxCommission }} <span>ج.م</span>
              </h6>
            </div>
          </div>

          <div class="mt-10 mb-10">
            <span class="text-base text-gray-400 font-light"
              >الكمية المتوفرة</span
            >
            <h6
              class="mb-0 text-3xl text-gray-800 flex gap-[10px] items-center leading-[48px]"
            >
              {{ productData.orderCount }} <span>قطعة</span>
            </h6>
          </div>

          <div
            class="px-9 py-5 shadow-main rounded-sm border border-gray-200 max-w-[650px]"
          >
            <div class="flex items-center gap-6">
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
                    class="absolute top-[1px] left-[1px] h-full flex flex-col items-center bg-white rounded-[11px]"
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
                    class="w-[172px] h-[53px] bg-transparent text-xl"
                    v-model="productForm.price"
                    :disabled="true"
                  />
                  <div
                    class="absolute top-[1px] left-[1px] h-full flex flex-col bg-white rounded-[11px]"
                  >
                    <div
                      class="w-[57px] flex-1 border-s border-s-gray-200 flex items-center justify-center text-xl text-gray-300 font-bold"
                    >
                      ج.م
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="text-base text-gray-400 flex gap-[12px] mt-auto mb-4"
              >
                <span>الربح من اجمالي السعر</span>
                <span
                  class="flex items-center gap-[10px] text-primary-300 text-xl"
                  >455
                  <span>ج.م</span>
                </span>
              </span>
            </div>

            <div class="mt-12 flex items-center gap-7">
              <shared-buttons-primary-button
                submit-title="اطلب الان"
                class="w-[232px] h-[67px]"
              />
              <shared-buttons-secondary-button
                class="w-[93px] h-[67px] flex items-center justify-center"
              >
                <img src="@/assets/images/cart-icon.svg" />
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
          v-html="productData.description"
        ></div>
      </div>
    </template>

    <!-- All Products -->
    <!-- <shared-title title="كل المنتجات" url="/" />
    <div class="grid grid-cols-4 gap-9 shadow-main">
      <lazy-shared-cards-product v-for="(i, key) in 4" :key="key" />
    </div> -->
  </div>
</template>

<style scoped></style>
