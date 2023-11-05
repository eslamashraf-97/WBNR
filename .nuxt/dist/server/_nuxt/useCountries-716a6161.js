import "vue";
import "hookable";
import { u as useState } from "./state-df47e21c.js";
import { b as useCookie } from "../server.mjs";
import "devalue";
import "defu";
import "destr";
import "klona";
function useCountries() {
  const cookies = useCookie("country");
  const countries = useState("countries", () => []);
  const countriesMeta = useState("countriesMeta", () => null);
  const selectedCountry = useState("selectedCountry", () => null);
  function setCountries(data) {
    countries.value = data.data;
    countriesMeta.value = data.meta;
    if (cookies.value) {
      setSelectedCountry(cookies.value);
    } else {
      setSelectedCountry(data.data[0]);
    }
  }
  function setSelectedCountry(data) {
    const cloneCountry = selectedCountry;
    selectedCountry.value = data;
    cookies.value = data;
    if (cloneCountry && false) {
      window.location.reload();
    }
  }
  return { countries, selectedCountry, setCountries, setSelectedCountry };
}
export {
  useCountries as u
};
//# sourceMappingURL=useCountries-716a6161.js.map
