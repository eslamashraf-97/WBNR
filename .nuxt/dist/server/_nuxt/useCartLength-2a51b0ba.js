import "vue";
import "hookable";
import { u as useState } from "./state-df47e21c.js";
import "destr";
import "devalue";
import "defu";
import "klona";
function useCartLength() {
  const cartLength = useState("cartLength", () => 0);
  function setCartLength(count) {
    cartLength.value = count;
  }
  return { cartLength, setCartLength };
}
export {
  useCartLength as u
};
//# sourceMappingURL=useCartLength-2a51b0ba.js.map
