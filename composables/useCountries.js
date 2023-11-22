export default function () {
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

    if (cloneCountry && typeof window !== "undefined") {
      window.location.href = "/home";
    }
  }

  return { countries, selectedCountry, setCountries, setSelectedCountry };
}
