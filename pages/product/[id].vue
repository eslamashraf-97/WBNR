<template>
  <div>
    <p class="text-gray-400 text-2xl mb-9">المنتجات / إلكترونيات/ اكسسوارات/ حوامل</p>
    <div class="flex gap-16 mb-24">
      <!-- Gallery -->
      <div class="bg-white p-9 rounded-lg">
        <div class="gallery flex gap-2">
          <img src="~/assets/images/products/main-image.png" class="w-[36rem] h-[36rem] object-cover"/>
          <div class="flex flex-col justify-between rounded-lg overflow-hidden">
            <img src="~/assets/images/products/main-image.png" class="w-32 h-32 object-cover"/>
            <img src="~/assets/images/products/main-image.png" class="w-32 h-32 object-cover"/>
            <img src="~/assets/images/products/main-image.png" class="w-32 h-32 object-cover"/>
            <img src="~/assets/images/products/main-image.png" class="w-32 h-32 object-cover"/>
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
      <div class="details">
        <!-- main info -->
        <div class="main-info">
          <p class="text-gray-700 text-2xl font-normal">اداء المنتج:</p>
          <h1 class="text-gray-800 text-5xl my-4">سبيكر وناسة النجوم العجيب</h1>
          <p class="text-gray-400 text-2xl flex gap-3 items-center">
            <span>كود المنتج:</span>
            <span>h45fdf343750c1794469d3</span>
          </p>
        </div>

        <!-- price details -->
        <div></div>
      </div>
    </div>

    <!-- description -->
    <div class="mb-24">
      <p class="text-gray-700 text-3xl font-normal mb-8">وصف المنتج</p>
      <div class="bg-white rounded-lg border p-9">
        <ul class="m-0 p-0 list-inside list-square flex flex-col gap-3">
          <li class="text-gray-400 text-2xl">تتوافق مع: V4.0</li>
          <li class="text-gray-400 text-2xl">الدعم: HSP، A2DP، AVRCP</li>
          <li class="text-gray-400 text-2xl">طاقة الإرسال: الفئة 2</li>
          <li class="text-gray-400 text-2xl">مسافة العمل 10m</li>
          <li class="text-gray-400 text-2xl">وقت التحدث: 7 ساعات</li>
          <li class="text-gray-400 text-2xl">وقت الموسيقى: 4 ساعات</li>
          <li class="text-gray-400 text-2xl">وقت الاستعداد: 60 ساعة</li>
          <li class="text-gray-400 text-2xl">وقت الشحن: 1.5 ساعة</li>
          <li class="text-gray-400 text-2xl">تدعم Siri</li>
          <li class="text-gray-400 text-2xl">مزودة بباورك بانك</li>
          <li class="text-gray-400 text-2xl">بطارية 2000 ملي امبير</li>
          <li class="text-gray-400 text-2xl">وقت التحدث: 7 ساعات</li>
          <li class="text-gray-400 text-2xl">وقت الموسيقى: 4 ساعات</li>
          <li class="text-gray-400 text-2xl">وقت الاستعداد: 60 ساعة</li>
          <li class="text-gray-400 text-2xl">بطارية 2000 ملي امبير</li>
        </ul>
      </div>
    </div>

    <!-- All Products -->
    <shared-title title="كل المنتجات" url="/"/>
    <div class="grid grid-cols-4 gap-9 shadow-main">
      <lazy-shared-cards-product v-for="(i, key) in 4" :key="key"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
