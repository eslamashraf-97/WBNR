export default function () {
  const cartLength = useState("cartLength", () => 0);

  function setCartLength(count) {
    cartLength.value = count;
  }

  return { cartLength, setCartLength };
}
