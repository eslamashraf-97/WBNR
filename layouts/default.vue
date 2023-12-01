<script setup>
import { initializeApp, getApps } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import {
  apiGetCountriesUrl,
  apiGetCartLengthUrl,
  apiGetSavedProductsUrl,
  submitFcm,
  apiSubmitFcm,
} from "@/server";

const { user } = useAuth();

// <!-- start firebase Notifications-->
const firebaseConfig = {
  apiKey: "AIzaSyDs3KvHilOfojecJnTmJifN0KxEOxl5UNI",
  authDomain: "myr-group.firebaseapp.com",
  projectId: "myr-group",
  storageBucket: "myr-group.appspot.com",
  messagingSenderId: "1081113478426",
  appId: "1:1081113478426:web:f87917fffe1c918d3358a3",
  measurementId: "G-02319K2TSP",
};
const apps = getApps();

const app = !apps.length ? initializeApp(firebaseConfig) : apps[0];

const fcm_token = ref(user.value.fcm_token);

async function activate() {
  if (!user.value.fcm_token) {
    const token = await getToken(getMessaging(app));
    if (token) {
      fcm_token.value = token;
    }
  }
}

async function authenticate() {
  await activate();
}

onMounted(async () => {
  await authenticate();

  await apiSubmitFcm({ fcm_token: fcm_token.value });
});

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
  <chat-toggler />
</template>


