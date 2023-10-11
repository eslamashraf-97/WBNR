export default defineNuxtRouteMiddleware((to, from) => {
  // get cookies
  const tokenCookies = useCookie("token");

  // get path
  const path = to.path;

  const inAuthPage = path.includes("auth");

  const inLnadingPage = path === "/";

  const isAuthenticated = tokenCookies.value;

  if (inLnadingPage) {
    return;
  }

  if (inAuthPage && isAuthenticated) {
    return navigateTo("/dashboard");
  }

  if (!isAuthenticated && !inAuthPage) {
    return navigateTo("/auth/login");
  }

  return;
});
