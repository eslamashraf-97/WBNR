// import {} from "vue"

export default function () {
  const route = useRoute();

  const page = ref(route.query.page || 1);

  function changePage(n) {
    page.value = n;
    navigateTo({ query: { ...route.query, page: n } });
  }

  return { changePage, page };
}
