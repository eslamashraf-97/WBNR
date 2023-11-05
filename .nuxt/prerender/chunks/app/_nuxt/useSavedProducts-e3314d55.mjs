import { u as useState } from './state-df47e21c.mjs';

function useSavedProducts() {
  const savedProductsCount = useState("savedProductsCount", () => 0);
  function setSavedProductsCount(count) {
    savedProductsCount.value = count;
  }
  return { savedProductsCount, setSavedProductsCount };
}

export { useSavedProducts as u };
//# sourceMappingURL=useSavedProducts-e3314d55.mjs.map
