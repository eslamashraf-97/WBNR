<script setup>
import { apiLoginWithGoogleUrl } from "@/server";

const emits = defineEmits(["loginWith"]);

const token = ref({ token: "" });
let googleLoginWrapperButton = ''
onMounted(() => {
  if (!window.google) return;
  window?.google.accounts.id.initialize({
    client_id:
      "1081113478426-dar8vkgmv9anrnoa5ofn49q8vsi0vaik.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  // const el = window.document.getElementById("googleSignInBtn");
  // if (!el) return;
  // window?.google.accounts.id.renderButton(el, {
  //   theme: "outline",
  //   size: "large",
  //   width: "100%",
  //   height: "100%",
  // });

  window.createFakeGoogleWrapper = () => {
    const googleLoginWrapper = document.createElement("div");
    googleLoginWrapper.style.display = "none";
    googleLoginWrapper.classList.add("custom-google-button");
    document.body.appendChild(googleLoginWrapper);
    window.google.accounts.id.renderButton(googleLoginWrapper, {
      type: "icon",
      width: "200",
    });
    googleLoginWrapperButton = googleLoginWrapper.querySelector("div[role=button]");
    return {
      click: () => {
        googleLoginWrapperButton.click();
      },
    };
  };
});

const handleGoogleLogin = () => {
  createFakeGoogleWrapper().click()
};
const logInWithFacebook = () => {
  window.FB.init({
    appId: "12132154648949898",
    version: "v11.0",
  });
  window.FB.login(
      function (response) {
        console.log(response)
        if (response.authResponse) {
          model.value.facebook_access_token = response.authResponse.accessToken;
          window.FB.api("/me", { fields: "name, email" }, function (userRes) {
            console.log(userRes)
          });
        }
      },
      { scope: "email", return_scopes: true }
  );
  return false;
};

const { fire } = useApi({
  url: () => apiLoginWithGoogleUrl,
  requestOptions: {
    method: "POST",
    onResponse: (response) => {
      if (response.response.ok) {
        emits("loginWith", response.response._data);
      }
    },
  },
});

async function handleCredentialResponse(response) {
  token.value.token = response.credential;
  await fire(token.value);
}
</script>

<template>
  <div id="googleSignInBtn"></div>

  <div
      @click="handleGoogleLogin()"
      id="customBtn" class="cursor-pointer bg-white flex justify-between items-center text-2xl py-4 px-14 mb-4">
    <p class="m-0">تسجيل بواسطة جوجل</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
    >
      <path
        d="M39.611 16.583H38V16.5H20V24.5H31.303C29.654 29.157 25.223 32.5 20 32.5C13.373 32.5 8 27.127 8 20.5C8 13.873 13.373 8.5 20 8.5C23.059 8.5 25.842 9.654 27.961 11.539L33.618 5.882C30.046 2.553 25.268 0.5 20 0.5C8.955 0.5 0 9.455 0 20.5C0 31.545 8.955 40.5 20 40.5C31.045 40.5 40 31.545 40 20.5C40 19.159 39.862 17.85 39.611 16.583Z"
        fill="#FFC107"
      />
      <path
        d="M2.30615 11.191L8.87715 16.01C10.6552 11.608 14.9612 8.5 20.0002 8.5C23.0592 8.5 25.8422 9.654 27.9612 11.539L33.6182 5.882C30.0462 2.553 25.2682 0.5 20.0002 0.5C12.3182 0.5 5.65615 4.837 2.30615 11.191Z"
        fill="#FF3D00"
      />
      <path
        d="M19.9998 40.5C25.1658 40.5 29.8598 38.523 33.4088 35.308L27.2188 30.07C25.2108 31.591 22.7148 32.5 19.9998 32.5C14.7978 32.5 10.3808 29.183 8.71682 24.554L2.19482 29.579C5.50482 36.056 12.2268 40.5 19.9998 40.5Z"
        fill="#4CAF50"
      />
      <path
        d="M39.611 16.583H38V16.5H20V24.5H31.303C30.511 26.737 29.072 28.666 27.216 30.071L27.219 30.069L33.409 35.307C32.971 35.705 40 30.5 40 20.5C40 19.159 39.862 17.85 39.611 16.583Z"
        fill="#1976D2"
      />
    </svg>
  </div>
  <div @click="logInWithFacebook" class="cursor-pointer bg-white flex justify-between items-center text-2xl py-4 px-14">
    <p class="m-0">تسجيل بواسطة فيسبوك</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
    >
      <path
        d="M20 0.5C14.6957 0.5 9.60859 2.60714 5.85786 6.35786C2.10714 10.1086 0 15.1957 0 20.5C0 25.8043 2.10714 30.8914 5.85786 34.6421C9.60859 38.3928 14.6957 40.5 20 40.5C25.3043 40.5 30.3914 38.3928 34.1421 34.6421C37.8928 30.8914 40 25.8043 40 20.5C40 15.1957 37.8928 10.1086 34.1421 6.35786C30.3914 2.60714 25.3043 0.5 20 0.5Z"
        fill="#039BE5"
      />
      <path
        d="M22.7069 25.8011H27.8827L28.6954 20.5432H22.7059V17.6695C22.7059 15.4853 23.4196 13.5484 25.4627 13.5484H28.7459V8.96003C28.169 8.88214 26.949 8.71161 24.6438 8.71161C19.8301 8.71161 17.008 11.2537 17.008 17.0453V20.5432H12.0596V25.8011H17.008V40.2526C17.988 40.4 18.9806 40.5 19.9996 40.5C20.9206 40.5 21.8196 40.4158 22.7069 40.2958V25.8011Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<style scoped></style>
