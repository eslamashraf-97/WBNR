export default defineNuxtRouteMiddleware((to, from) => {
  // get cookies
  const tokenCookies = useCookie("token");

  // get path
  const path = to.path;

  const inAuthPage = path.includes("auth");

  const isAuthenticated = tokenCookies.value;

  if (inAuthPage && isAuthenticated) {
    return navigateTo("/dashboard");
  }

  if (!isAuthenticated && !inAuthPage) {
    return navigateTo("/auth/login");
  }

  return;
});
