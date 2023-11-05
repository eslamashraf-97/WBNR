import "vue";
import "hookable";
import { u as useState } from "./state-df47e21c.js";
import { b as useCookie } from "../server.mjs";
import "devalue";
import "defu";
import "destr";
import "klona";
function useAuth() {
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
export {
  useAuth as u
};
//# sourceMappingURL=useAuth-e93f3d3d.js.map
