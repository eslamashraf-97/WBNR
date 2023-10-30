export default defineNuxtRouteMiddleware((to, from) => {
  // get cookies
  const tokenCookies = useCookie("token");

  // get path
  const path = to.path;

  const inAuthPage = path.includes("auth");

  const inLnadingPage = path === "/";

  const isAuthenticated = tokenCookies.value;

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
