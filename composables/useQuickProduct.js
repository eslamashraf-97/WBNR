export default function () {
  const quickOrderCookie = useCookie("quickOrderCookie");

  const quickOrderState = useState(
    "quickOrderState",
    () => quickOrderCookie.value,
  );

  function setQuickOrderState(data) {
    quickOrderState.value = data;
    quickOrderCookie.value = data;
  }

  function getQuickOrderState() {
    return quickOrderCookie.value;
  }

  return { quickOrderState, setQuickOrderState, getQuickOrderState };
}
