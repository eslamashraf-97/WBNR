export default defineNuxtRouteMiddleware((to, from) => {
  // get cookies
  const tokenCookies = useCookie("token");

  // get path
  const path = to.path;

  const inAuthPage = path.includes("auth");

  const inLnadingPage = path === "/";

  const isAuthenticated = tokenCookies.value;

  const guestsPages = ["/home", "/products", "/suggested-products"];

  const pageHasGuest = guestsPages.includes(path);

  const inGuestPage = path.includes("-guest");

  const splitGuestPage = path.split("-guest")[0];

  if (isAuthenticated && inGuestPage) {
    return navigateTo(splitGuestPage);
  }

  if (!isAuthenticated && inGuestPage) {
    return;
  }

  if (!isAuthenticated && pageHasGuest) {
    return navigateTo(`${path}-guest`);
  }

  if (isAuthenticated && inLnadingPage) {
    return navigateTo("/home");
  }

  if (inLnadingPage) {
    return;
  }

  if (inAuthPage && isAuthenticated) {
    return navigateTo("/home");
  }

  if (!isAuthenticated && !inAuthPage) {
    return navigateTo("/auth/login");
  }

  return;
});
