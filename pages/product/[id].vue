<script setup>
import {
  apiGetSingleProductUrl,
  apiAddToCartUrl,
  apiGetProductsUrl,
} from "@/server";

const { setCartLength, cartLength } = useCartLength();

const route = useRoute();

const { fire } = useApi({
  url: apiGetSingleProductUrl + "/" + route.params.id,
});

const { data: productData } = await fire();

const { fire: fireGetByCategory } = useApi({
  url: apiGetProductsUrl,
  requestOptions: {
    query: { category_id: productData.value?.data.category_id },
  },
});

const { data: productDataByCategory } = await fireGetByCategory();

const productForm = reactive({
  quantity: 1,
  price: productData.value?.data.price,
});

const isLoading = ref(false);

const addedToCartStatus = ref(false);

async function addToCart() {
  isLoading.value = true;
  const payload = {
    product_id: productData.value?.data.id,
    quantity: productForm.quantity, // must be 1 or more no 0,
    final_price: productData.value?.data.price,
  };
  await useRequest({
    url: apiAddToCartUrl,
    requetOptions: {
      body: JSON.stringify(payload),
      method: "post",
      onResponse: (response) => {
        addedToCartStatus.value = true;
        setCartLength(cartLength.value + productForm.quantity);
      },
    },
  });
  isLoading.value = false;
}

const commission = computed(
  () =>
    (productForm.price -
      productData.value.data.price +
      productData.value.data.minCommission) *
    productForm.quantity,
);
</script>

<template>
  <div>
    <p class="text-gray-400 text-2xl mb-9">
      المنتجات / إلكترونيات/ اكسسوارات/ حوامل
    </p>
    <template v-if="productData?.data">
      <div class="flex gap-16 mb-24">
        <!-- Gallery -->
        <div class="bg-white p-9 rounded-lg">
          <div class="gallery flex gap-2">
            <img
              :src="productData.data.featured_image"
              class="w-[36rem] h-[36rem] object-cover"
            />
            <div
              class="flex flex-col justify-between rounded-lg overflow-hidden"
            >
              <img
                v-for="(productImage, index) in productData.data.images"
                :alt="productImage.alt_image"
                :src="productImage.url"
                class="w-32 h-32 object-cover cursor-pointer"
                @click="productData.data.featured_image = productImage.url"
              />
            </div>
          </div>
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
              {{ productData.data.title }}
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
                {{ productData.data.price }} <span>ج.م</span>
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
                {{ productData.data.minCommission }} <span>ج.م</span>
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
              {{ productData.data.stock }} <span>قطعة</span>
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
                      ج.م
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
                  <span>ج.م</span>
                </span>
              </span>
            </div>

            <div class="mt-12 flex items-center gap-7">
              <shared-buttons-primary-button
                submit-title="اطلب الان"
                class="w-[232px] h-[67px]"
                @click="
                  navigateTo(
                    `/checkout-quick-order?product=${productData.data.id}&title=${productData.data.title}&price=${productData.data.price}&minCommission=${productData.data.minCommission}&commission=${commission}&qty=${productForm.quantity}&image=${productData.data.featured_image}`,
                  )
                "
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
  </div>
</template>

<style scoped></style>
