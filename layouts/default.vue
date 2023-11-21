<script setup>
import {initializeApp, getApps} from 'firebase/app'
import { getMessaging, onMessage, getToken} from "firebase/messaging";
import {
  apiGetCountriesUrl,
  apiGetCartLengthUrl,
  apiGetSavedProductsUrl,
  submitFcm
} from "@/server";


const openMessagePopup = ref(false)
// <!-- start firebase Notifications-->
const firebaseConfig = {
  apiKey: "AIzaSyDs3KvHilOfojecJnTmJifN0KxEOxl5UNI",
  authDomain: "myr-group.firebaseapp.com",
  projectId: "myr-group",
  storageBucket: "myr-group.appspot.com",
  messagingSenderId: "1081113478426",
  appId: "1:1081113478426:web:f87917fffe1c918d3358a3",
  measurementId: "G-02319K2TSP"
};
const apps = getApps()
const app = !apps.length ? initializeApp(firebaseConfig) : apps[0]

async function activate () {
  const token = await getToken(getMessaging(app))
  if(token) {
    console.log(token)
  } else {
    // request permission
  }
}

async function authenticate () {
  await activate()
}


onMounted(async () => {
  await authenticate()
  const messaging  = getMessaging()
  onMessage(messaging, (payload)=> {
    console.log('hello this is ', payload)
  })
})

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
await useRequest({
  url: () => submitFcm,
  requetOptions: {
    body: JSON.stringify({
      "fcm_token" : ''
    }),
    method: "post",
    onResponse: ({ response }) => {
      const responseData = response._data;
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
<!--  <div :class="{'show-chatbot': openMessagePopup}">-->
<!--    <button class="chatbot-toggler bg-primary-300"  @click="openMessagePopup = !openMessagePopup">-->
<!--      <span class="material-symbols-rounded">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.587-1.112l-3.826 1.067a1.25 1.25 0 0 1-1.54-1.54l1.068-3.823A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5A8.5 8.5 0 0 0 3.5 12c0 1.47.373 2.883 1.073 4.137l.15.27l-1.112 3.984l3.987-1.112l.27.15A8.5 8.5 0 1 0 12 3.5ZM8.75 13h4.498a.75.75 0 0 1 .102 1.493l-.102.007H8.75a.75.75 0 0 1-.102-1.493L8.75 13h4.498H8.75Zm0-3.5h6.505a.75.75 0 0 1 .101 1.493l-.101.007H8.75a.75.75 0 0 1-.102-1.493L8.75 9.5h6.505H8.75Z"/></svg>-->
<!--      </span>-->
<!--      <span class="material-symbols-outlined">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94L4.28 3.22Z" clip-rule="evenodd"/></svg>-->
<!--      </span>-->
<!--    </button>-->
<!--    <div class="chatbot">-->
<!--      <header>-->
<!--        <h2>Chatbot</h2>-->
<!--        <span class="close-btn material-symbols-outlined">close</span>-->
<!--      </header>-->
<!--      <ul class="chatbox">-->
<!--        <li class="chat incoming">-->
<!--          <span class="material-symbols-outlined flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .04a1.743 1.743 0 0 0-.537 3.401l-.631 2.579H2.456A2.456 2.456 0 0 0 0 8.476v13.029a2.456 2.456 0 0 0 2.456 2.456h19.088c1.356 0 2.456-1.1 2.456-2.456V8.476c0-1.356-1.1-2.456-2.456-2.456h-8.403l-.616-2.575A1.743 1.743 0 0 0 11.999.04zM3.933 7.881h16.136c1.101 0 1.994.893 1.994 1.994v10.117a1.994 1.994 0 0 1-1.994 1.994H3.933a1.994 1.994 0 0 1-1.994-1.994V9.875c0-1.101.893-1.994 1.994-1.994zm3.254 2.312a4.575 4.575 0 1 0 0 9.15a4.575 4.575 0 0 0 0-9.15zm9.743 0a4.575 4.575 0 1 0 0 9.15a4.575 4.575 0 0 0 0-9.15zm-9.743 1.07a3.506 3.506 0 1 1 0 7.011a3.506 3.506 0 0 1 0-7.011zm9.743 0a3.506 3.506 0 1 1 0 7.011a3.506 3.506 0 0 1 0-7.011zm-9.743 1.663a1.843 1.843 0 1 0 0 3.686a1.843 1.843 0 0 0 0-3.686zm9.743 0a1.843 1.843 0 1 0 0 3.686a1.843 1.843 0 0 0 0-3.686zm-6.927 6.5v2.159h.706v-2.159h-.706zm1.077 0v2.159h.705v-2.159h-.705zm1.076 0v2.159h.706v-2.159h-.706zm1.077 0v2.159h.706v-2.159h-.706zm1.077.03v2.1a1.08 1.08 0 0 0 .829-1.049v-.001c0-.51-.354-.937-.829-1.05zm-4.678.028a1.08 1.08 0 0 0-.731 1.021v.001c0 .474.306.876.731 1.021v-2.043z"/></svg></span>-->
<!--          <p>Hi there 👋<br>How can I help you today?</p>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <div class="chat-input">-->
<!--        <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>-->
<!--        <span id="send-btn" class="material-symbols-rounded">send</span>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<style scoped>
.chatbot-toggler {
  position: fixed;
  bottom: 30px;
  left: 35px;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 100;
}
.show-chatbot .chatbot-toggler {
  transform: rotate(90deg);
}
.chatbot-toggler span {
  color: #fff;
  position: absolute;
}
.chatbot-toggler span:last-child,
.show-chatbot .chatbot-toggler span:first-child  {
  opacity: 0;
}
.show-chatbot .chatbot-toggler span:last-child {
  opacity: 1;
}
.chatbot {
  position: fixed;
  left: 35px;
  bottom: 90px;
  width: 420px;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transform: scale(0.5);
  transform-origin: bottom left;
  box-shadow: 0 0 128px 0 rgba(0,0,0,0.1),
  0 32px 64px -48px rgba(0,0,0,0.5);
  transition: all 0.1s ease;
  z-index: 100;
}
.show-chatbot .chatbot {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1);
}
.chatbot header {
  padding: 16px 0;
  position: relative;
  text-align: center;
  color: #fff;
  background: #05BD6E;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.chatbot header span {
  position: absolute;
  right: 15px;
  top: 50%;
  display: none;
  cursor: pointer;
  transform: translateY(-50%);
}
header h2 {
  font-size: 1.4rem;
}
.chatbot .chatbox {
  overflow-y: auto;
  height: 510px;
  padding: 30px 20px 100px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
  width: 6px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 25px;
}
.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}
.chatbox .chat {
  display: flex;
  list-style: none;
}
.chatbox .outgoing {
  margin: 20px 0;
  justify-content: flex-end;
}
.chatbox .incoming span {
  width: 32px;
  height: 32px;
  color: #fff;
  cursor: default;
  text-align: center;
  line-height: 32px;
  align-self: flex-end;
  background: #05BD6E;
  border-radius: 4px;
  margin: 0 0 7px 10px;
}
.chatbox .chat p {
  white-space: pre-wrap;
  padding: 12px 16px;
  border-radius: 10px 10px 0 10px;
  max-width: 75%;
  color: #fff;
  font-size: 0.95rem;
  background: #05BD6E;
}
.chatbox .incoming p {
  border-radius: 10px 10px 10px 0;
}
.chatbox .chat p.error {
  color: #721c24;
  background: #f8d7da;
}
.chatbox .incoming p {
  color: #000;
  background: #f2f2f2;
}
.chatbot .chat-input {
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 3px 20px;
  border-top: 1px solid #ddd;
}
.chat-input textarea {
  height: 55px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  max-height: 180px;
  padding: 15px 15px 15px 0;
  font-size: 0.95rem;
}
.chat-input span {
  align-self: flex-end;
  color: #05BD6E;
  cursor: pointer;
  height: 55px;
  display: flex;
  align-items: center;
  visibility: hidden;
  font-size: 1.35rem;
}
.chat-input textarea:valid ~ span {
  visibility: visible;
}
@media (max-width: 490px) {
  .chatbot-toggler {
    right: 20px;
    bottom: 20px;
  }
  .chatbot {
    right: 0;
    bottom: 0;
    height: 100%;
    border-radius: 0;
    width: 100%;
    z-index: 100;
  }
  .chatbot .chatbox {
    height: 90%;
    padding: 25px 15px 100px;
  }
  .chatbot .chat-input {
    padding: 5px 15px;
  }
  .chatbot header span {
    display: block;
  }
}
</style>
