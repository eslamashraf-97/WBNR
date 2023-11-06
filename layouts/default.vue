<script setup>
import {
  apiGetCountriesUrl,
  apiGetCartLengthUrl,
  apiGetSavedProductsUrl,
} from "@/server";

const { setCountries, selectedCountry } = useCountries();

const { setCartLength } = useCartLength();

const { setSavedProductsCount } = useSavedProducts();

await useRequest({
  url: apiGetCountriesUrl,
  requetOptions: {
    onResponse: (response) => {
      setCountries(response.response._data);
    },
  },
});

await useRequest({
  url: () => apiGetCartLengthUrl,
  requetOptions: {
    query: { country_id: selectedCountry.value?.id },
    onResponse: (response) => {
      setCartLength(response.response?._data?.data.cart_length);
    },
  },
});

await useRequest({
  url: () => apiGetSavedProductsUrl,
  requetOptions: {
    query: { country_id: selectedCountry.value?.id },
    onResponse: (response) => {
      console.log(response.response?._data);
      setSavedProductsCount(response.response?._data?.data.length);
    },
  },
});
</script>

<template>
  <layouts-default-navbar />
  <div class="min-h-screen pt-[128px] pb-[160px] container">
    <slot />
  </div>
  <layouts-main-footer />
</template>

<style scoped></style>
