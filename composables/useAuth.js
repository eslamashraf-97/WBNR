export default function () {
  const userCookies = useCookie("user");

  const tokenCookies = useCookie("token");

  const user = useState("userAuth", () => userCookies.value);

  function setUserData(data, token) {
    user.value = data;
    userCookies.value = data;
    tokenCookies.value = token;
  }

  function removeUserData() {
    user.value = null;
    userCookies.value = null;
    tokenCookies.value = null;
  }

  return { user, setUserData, removeUserData };
}
