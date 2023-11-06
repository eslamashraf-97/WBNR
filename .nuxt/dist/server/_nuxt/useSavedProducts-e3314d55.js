import "vue";
import "hookable";
import { u as useState } from "./state-df47e21c.js";
import "destr";
import "devalue";
import "defu";
import "klona";
function useSavedProducts() {
  const savedProductsCount = useState("savedProductsCount", () => 0);
  function setSavedProductsCount(count) {
    savedProductsCount.value = count;
  }
  return { savedProductsCount, setSavedProductsCount };
}
export {
  useSavedProducts as u
};
//# sourceMappingURL=useSavedProducts-e3314d55.js.map
