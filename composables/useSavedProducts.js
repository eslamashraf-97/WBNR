export default function () {
  const savedProductsCount = useState("savedProductsCount", () => 0);

  function setSavedProductsCount(count) {
    savedProductsCount.value = count;
  }

  return { savedProductsCount, setSavedProductsCount };
}
