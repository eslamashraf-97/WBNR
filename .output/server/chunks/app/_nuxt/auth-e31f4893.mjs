import { g as defineNuxtRouteMiddleware, n as navigateTo } from '../server.mjs';
import 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-toastify';
import 'vue/server-renderer';

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/auth") {
    return navigateTo("/auth/login");
  }
  return;
});

export { auth as default };
//# sourceMappingURL=auth-e31f4893.mjs.map
