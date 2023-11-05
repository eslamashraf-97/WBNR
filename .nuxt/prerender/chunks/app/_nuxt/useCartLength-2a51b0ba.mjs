import { u as useState } from './state-df47e21c.mjs';

function useCartLength() {
  const cartLength = useState("cartLength", () => 0);
  function setCartLength(count) {
    cartLength.value = count;
  }
  return { cartLength, setCartLength };
}

export { useCartLength as u };
//# sourceMappingURL=useCartLength-2a51b0ba.mjs.map
