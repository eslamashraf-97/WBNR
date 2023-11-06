globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file://D:/WBNR/WBNR/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/WBNR/WBNR/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/WBNR/WBNR/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/WBNR/WBNR/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/WBNR/WBNR/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://D:/WBNR/WBNR/node_modules/scule/dist/index.mjs';
import { klona } from 'file://D:/WBNR/WBNR/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://D:/WBNR/WBNR/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://D:/WBNR/WBNR/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file://D:/WBNR/WBNR/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/WBNR/WBNR/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file://D:/WBNR/WBNR/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/WBNR/WBNR/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://D:/WBNR/WBNR/node_modules/pathe/dist/index.mjs';

const inlineAppConfig = {
  "nuxt": {
    "buildId": "94520237-4fc0-48e1-84be-1f8c69acbb00"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"D:/WBNR/WBNR/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"D:\\WBNR\\WBNR\\.data\\kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\WBNR\\WBNR","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\WBNR\\WBNR\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\WBNR\\WBNR\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\WBNR\\WBNR\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-11-02T01:21:55.755Z",
    "size": 4286,
    "path": "../../.output/public/favicon.ico"
  },
  "/_nuxt/app-app-store.ba7c1b88.png": {
    "type": "image/png",
    "etag": "\"2cbe-ppEB4Dq/sK+mQ8dLrLj95591opo\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 11454,
    "path": "../../.output/public/_nuxt/app-app-store.ba7c1b88.png"
  },
  "/_nuxt/app-screen.3427a43c.png": {
    "type": "image/png",
    "etag": "\"11a48-BEAlKlDG42KBQNg3dMtz4686yXM\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 72264,
    "path": "../../.output/public/_nuxt/app-screen.3427a43c.png"
  },
  "/_nuxt/app-store.da4258e9.png": {
    "type": "image/png",
    "etag": "\"1f6a-oPbxI8QPf6tB2Rq2XGzbLlzB8gQ\"",
    "mtime": "2023-11-05T21:52:36.457Z",
    "size": 8042,
    "path": "../../.output/public/_nuxt/app-store.da4258e9.png"
  },
  "/_nuxt/Aside.db2b4afb.js": {
    "type": "application/javascript",
    "etag": "\"946-PFzVMF7wz6JndY8K2cYC0d9k2Hk\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 2374,
    "path": "../../.output/public/_nuxt/Aside.db2b4afb.js"
  },
  "/_nuxt/auth.35f57ad6.js": {
    "type": "application/javascript",
    "etag": "\"74-8qOvwFRm4iS6nJg4y6JDE2aNOLY\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 116,
    "path": "../../.output/public/_nuxt/auth.35f57ad6.js"
  },
  "/_nuxt/auth.4cd7cee5.js": {
    "type": "application/javascript",
    "etag": "\"291-TiS8ErYzmySxA2QIAYWJaU8muMk\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 657,
    "path": "../../.output/public/_nuxt/auth.4cd7cee5.js"
  },
  "/_nuxt/avatar.a9b68373.svg": {
    "type": "image/svg+xml",
    "etag": "\"3a5-kKEGwwmIz0v4Njspro7s4/SqbmY\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 933,
    "path": "../../.output/public/_nuxt/avatar.a9b68373.svg"
  },
  "/_nuxt/bank-icon.823313c7.svg": {
    "type": "image/svg+xml",
    "etag": "\"79c-OSLOh5aBBk+wMmk3xbGDxvvytOg\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 1948,
    "path": "../../.output/public/_nuxt/bank-icon.823313c7.svg"
  },
  "/_nuxt/Cairo-Black.aac1f813.ttf": {
    "type": "font/ttf",
    "etag": "\"171fc-Udh5Av9WsuiYf38G70no01H+ACI\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 94716,
    "path": "../../.output/public/_nuxt/Cairo-Black.aac1f813.ttf"
  },
  "/_nuxt/Cairo-Bold.443f8f45.ttf": {
    "type": "font/ttf",
    "etag": "\"171c0-WnsFQ8bGKEOQD11aBJ68MrVDT10\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 94656,
    "path": "../../.output/public/_nuxt/Cairo-Bold.443f8f45.ttf"
  },
  "/_nuxt/Cairo-ExtraBold.76e8457c.ttf": {
    "type": "font/ttf",
    "etag": "\"171f8-LkiZLMT/1zM83J60qiuog8THTxo\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 94712,
    "path": "../../.output/public/_nuxt/Cairo-ExtraBold.76e8457c.ttf"
  },
  "/_nuxt/Cairo-ExtraLight.a899bb20.ttf": {
    "type": "font/ttf",
    "etag": "\"16a48-sw3frlLGK0nLOv/WVLCXr/Xm6Ek\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 92744,
    "path": "../../.output/public/_nuxt/Cairo-ExtraLight.a899bb20.ttf"
  },
  "/_nuxt/Cairo-Light.2e86b140.ttf": {
    "type": "font/ttf",
    "etag": "\"16a84-WaoEnVb3D3cK+S/Yae4C9rQI5EQ\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 92804,
    "path": "../../.output/public/_nuxt/Cairo-Light.2e86b140.ttf"
  },
  "/_nuxt/Cairo-Regular.7560e24b.ttf": {
    "type": "font/ttf",
    "etag": "\"17114-xAzWnYVNEsgYswyGZopFMFtTHF0\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 94484,
    "path": "../../.output/public/_nuxt/Cairo-Regular.7560e24b.ttf"
  },
  "/_nuxt/Cairo-SemiBold.6818d5e0.ttf": {
    "type": "font/ttf",
    "etag": "\"171e4-YuvZXH9EDgMxEYjJ7tAqrjEwRcU\"",
    "mtime": "2023-11-05T21:52:36.450Z",
    "size": 94692,
    "path": "../../.output/public/_nuxt/Cairo-SemiBold.6818d5e0.ttf"
  },
  "/_nuxt/cart-icon.a5682f49.svg": {
    "type": "image/svg+xml",
    "etag": "\"bc2-9rpaKzVyMPBgjp9HP2TAu4bL8y0\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 3010,
    "path": "../../.output/public/_nuxt/cart-icon.a5682f49.svg"
  },
  "/_nuxt/cart.da7201a3.js": {
    "type": "application/javascript",
    "etag": "\"1bef-knQWuJOs3mYn09ZSlbr5OTAVHqM\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 7151,
    "path": "../../.output/public/_nuxt/cart.da7201a3.js"
  },
  "/_nuxt/Category.83ac3577.js": {
    "type": "application/javascript",
    "etag": "\"62b-6xmfpLYacvmhSMM5vtnDn5Lq74U\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 1579,
    "path": "../../.output/public/_nuxt/Category.83ac3577.js"
  },
  "/_nuxt/checkout-quick-order.42902a04.js": {
    "type": "application/javascript",
    "etag": "\"11e6-NbMh457hZ8o/vgSN/MfIJ6oHFY0\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 4582,
    "path": "../../.output/public/_nuxt/checkout-quick-order.42902a04.js"
  },
  "/_nuxt/checkout.2eb22f68.js": {
    "type": "application/javascript",
    "etag": "\"120a-zpnV71rbv+UHGVFB62MS4nBaxQk\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 4618,
    "path": "../../.output/public/_nuxt/checkout.2eb22f68.js"
  },
  "/_nuxt/clipboard.e656b8c5.svg": {
    "type": "image/svg+xml",
    "etag": "\"b66-n72SV1OSmjXV8fM1dpWjORlaZkA\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 2918,
    "path": "../../.output/public/_nuxt/clipboard.e656b8c5.svg"
  },
  "/_nuxt/CountryMenu.2a5e1431.js": {
    "type": "application/javascript",
    "etag": "\"3f4-qfDEAt16JL0mWwGMYP17JuW3PuM\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 1012,
    "path": "../../.output/public/_nuxt/CountryMenu.2a5e1431.js"
  },
  "/_nuxt/dashboard.e9b31340.js": {
    "type": "application/javascript",
    "etag": "\"8d9-0VDF+FeAqrK3kcuvBUPfx67RRNY\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 2265,
    "path": "../../.output/public/_nuxt/dashboard.e9b31340.js"
  },
  "/_nuxt/dashboard.fc03424a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"45-rn7XrZo0qkTHi1JldWVFpwbjHcM\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 69,
    "path": "../../.output/public/_nuxt/dashboard.fc03424a.css"
  },
  "/_nuxt/default.735293a6.js": {
    "type": "application/javascript",
    "etag": "\"2c2e-raBsCFYx6oX+2H//lY49ShCOLN0\"",
    "mtime": "2023-11-05T21:52:36.471Z",
    "size": 11310,
    "path": "../../.output/public/_nuxt/default.735293a6.js"
  },
  "/_nuxt/default.af972ea8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"258-LBW2rmIZ1HM3pi1Bi+jhQw31q70\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 600,
    "path": "../../.output/public/_nuxt/default.af972ea8.css"
  },
  "/_nuxt/delete-icon.41c3d8bb.svg": {
    "type": "image/svg+xml",
    "etag": "\"34e-R+a8DSsY8sqfM2cfW5FTuKu6uWE\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 846,
    "path": "../../.output/public/_nuxt/delete-icon.41c3d8bb.svg"
  },
  "/_nuxt/entry.6d26f239.js": {
    "type": "application/javascript",
    "etag": "\"1af41-sw/C7r/2i89mF/+aCg59uCq0BD0\"",
    "mtime": "2023-11-05T21:52:36.471Z",
    "size": 110401,
    "path": "../../.output/public/_nuxt/entry.6d26f239.js"
  },
  "/_nuxt/entry.755185d7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c03-q3upR0m5HcDlBU7qT7duHHcOB5Y\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 11267,
    "path": "../../.output/public/_nuxt/entry.755185d7.css"
  },
  "/_nuxt/error-404.34998d85.js": {
    "type": "application/javascript",
    "etag": "\"920-2YmM1+uw+6KoygTX2EFeXoBFx3g\"",
    "mtime": "2023-11-05T21:52:36.468Z",
    "size": 2336,
    "path": "../../.output/public/_nuxt/error-404.34998d85.js"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 3630,
    "path": "../../.output/public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 1950,
    "path": "../../.output/public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/error-500.e53ab5b5.js": {
    "type": "application/javascript",
    "etag": "\"7a4-Ds2XRMd+BDSBtFf6v44cpF/4UyI\"",
    "mtime": "2023-11-05T21:52:36.468Z",
    "size": 1956,
    "path": "../../.output/public/_nuxt/error-500.e53ab5b5.js"
  },
  "/_nuxt/filter.ccde41cc.js": {
    "type": "application/javascript",
    "etag": "\"1a2-pLAXiyDb/hMUmUSDPdLk6Ad1b20\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 418,
    "path": "../../.output/public/_nuxt/filter.ccde41cc.js"
  },
  "/_nuxt/final.ba05bc51.svg": {
    "type": "image/svg+xml",
    "etag": "\"638-YJPxhLL7yxrf2i5ITVbH0nzFWjs\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 1592,
    "path": "../../.output/public/_nuxt/final.ba05bc51.svg"
  },
  "/_nuxt/flag-em.0419feb2.js": {
    "type": "application/javascript",
    "etag": "\"98f-rGoox8EAlW505Umtzt+AIvtREtY\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 2447,
    "path": "../../.output/public/_nuxt/flag-em.0419feb2.js"
  },
  "/_nuxt/google-play.216a9197.png": {
    "type": "image/png",
    "etag": "\"1db6-pd9vNO9312zaax7KZn/369MllBg\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 7606,
    "path": "../../.output/public/_nuxt/google-play.216a9197.png"
  },
  "/_nuxt/hero.d954705c.svg": {
    "type": "image/svg+xml",
    "etag": "\"3332-LURoE2UzqnPvD+lkiL54Lf/gzYY\"",
    "mtime": "2023-11-05T21:52:36.458Z",
    "size": 13106,
    "path": "../../.output/public/_nuxt/hero.d954705c.svg"
  },
  "/_nuxt/home.f79ef664.js": {
    "type": "application/javascript",
    "etag": "\"aff-RiXtp6RAIlvC6GvHTRuTvO2hwGQ\"",
    "mtime": "2023-11-05T21:52:36.468Z",
    "size": 2815,
    "path": "../../.output/public/_nuxt/home.f79ef664.js"
  },
  "/_nuxt/Icon.6f5d80f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-JMK9uCbKePUzi/rOIeYOKAmsaWg\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 67,
    "path": "../../.output/public/_nuxt/Icon.6f5d80f8.css"
  },
  "/_nuxt/Icon.fe93bad7.js": {
    "type": "application/javascript",
    "etag": "\"530d-8I7tv47xJ7pHOgbJCZ3LE9DAIvU\"",
    "mtime": "2023-11-05T21:52:36.471Z",
    "size": 21261,
    "path": "../../.output/public/_nuxt/Icon.fe93bad7.js"
  },
  "/_nuxt/IconCSS.a9693787.js": {
    "type": "application/javascript",
    "etag": "\"34d-wkDtTsBM6RTDaY7q8ntx+Z8jxCU\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 845,
    "path": "../../.output/public/_nuxt/IconCSS.a9693787.js"
  },
  "/_nuxt/IconCSS.fe0874d9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-wcoyXH7uDWGP6s8t4bK/iz3ANnk\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 258,
    "path": "../../.output/public/_nuxt/IconCSS.fe0874d9.css"
  },
  "/_nuxt/index.12fd3ed4.js": {
    "type": "application/javascript",
    "etag": "\"78-pXfDFTVQZC2dPqo0wW4C1gAmuQk\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 120,
    "path": "../../.output/public/_nuxt/index.12fd3ed4.js"
  },
  "/_nuxt/index.35d185fd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f3-P04e8/bVovVbKce1GETMVTLHQS8\"",
    "mtime": "2023-11-05T21:52:36.460Z",
    "size": 1267,
    "path": "../../.output/public/_nuxt/index.35d185fd.css"
  },
  "/_nuxt/index.43aecd79.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-MR7cCrI6C9ZVPfvW8KyHcRT2Kt4\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 84,
    "path": "../../.output/public/_nuxt/index.43aecd79.css"
  },
  "/_nuxt/index.7de4f987.js": {
    "type": "application/javascript",
    "etag": "\"2184-SlywlJm61aMstZekdV56brK07/c\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 8580,
    "path": "../../.output/public/_nuxt/index.7de4f987.js"
  },
  "/_nuxt/index.91beaf37.js": {
    "type": "application/javascript",
    "etag": "\"3446-kfE87wN1Ap/RA0BYRafk8bb5bt8\"",
    "mtime": "2023-11-05T21:52:36.468Z",
    "size": 13382,
    "path": "../../.output/public/_nuxt/index.91beaf37.js"
  },
  "/_nuxt/index.e297d5fd.js": {
    "type": "application/javascript",
    "etag": "\"474-rFCnfOF9MUFhflCvjNVv5tiVN8w\"",
    "mtime": "2023-11-05T21:52:36.468Z",
    "size": 1140,
    "path": "../../.output/public/_nuxt/index.e297d5fd.js"
  },
  "/_nuxt/index.e7c4d71a.js": {
    "type": "application/javascript",
    "etag": "\"99d-RumZRwMX28v2PXt1ggAnA2scIXg\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 2461,
    "path": "../../.output/public/_nuxt/index.e7c4d71a.js"
  },
  "/_nuxt/Input.ee62193e.js": {
    "type": "application/javascript",
    "etag": "\"1ba-mG7Je2MDBmfYFF1LvpKmdrEhMs4\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 442,
    "path": "../../.output/public/_nuxt/Input.ee62193e.js"
  },
  "/_nuxt/insta-icon.4428a61c.svg": {
    "type": "image/svg+xml",
    "etag": "\"7f75-uSfhn/eQMMhA0J+Jjf7vy9EuB94\"",
    "mtime": "2023-11-05T21:52:36.456Z",
    "size": 32629,
    "path": "../../.output/public/_nuxt/insta-icon.4428a61c.svg"
  },
  "/_nuxt/landing.28dbd088.js": {
    "type": "application/javascript",
    "etag": "\"460-2TiGkgjF03lOIjh/QW8O+hm0eZo\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 1120,
    "path": "../../.output/public/_nuxt/landing.28dbd088.js"
  },
  "/_nuxt/link-store.30bdda96.js": {
    "type": "application/javascript",
    "etag": "\"266d-BvTbJkxI8y6qfwnAJXueOworllI\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 9837,
    "path": "../../.output/public/_nuxt/link-store.30bdda96.js"
  },
  "/_nuxt/LoaderButton.181013ce.js": {
    "type": "application/javascript",
    "etag": "\"1b9-HDc3mdAkCIEmZcASXkLoC6yCwFg\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 441,
    "path": "../../.output/public/_nuxt/LoaderButton.181013ce.js"
  },
  "/_nuxt/LoaderButton.884695b4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"397-biURRbIYTVVVZFyE+fBFlMRflmM\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 919,
    "path": "../../.output/public/_nuxt/LoaderButton.884695b4.css"
  },
  "/_nuxt/Loading.78e29850.js": {
    "type": "application/javascript",
    "etag": "\"e8-b7OSx+jLMcG+kRCpiI05hO9uoV4\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 232,
    "path": "../../.output/public/_nuxt/Loading.78e29850.js"
  },
  "/_nuxt/Loading.cdc63a92.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3bb-0dDHiLkm5mr7p+qz6RsBiVNgXD0\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 955,
    "path": "../../.output/public/_nuxt/Loading.cdc63a92.css"
  },
  "/_nuxt/login.7c3d0858.js": {
    "type": "application/javascript",
    "etag": "\"73b-eR5k2UFgqYXiJsDxNdwlI/5xIfY\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 1851,
    "path": "../../.output/public/_nuxt/login.7c3d0858.js"
  },
  "/_nuxt/logout.e574a3de.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d9-ily99bc2AU18sbchRA39r86gC4E\"",
    "mtime": "2023-11-05T21:52:36.456Z",
    "size": 1497,
    "path": "../../.output/public/_nuxt/logout.e574a3de.svg"
  },
  "/_nuxt/MainFooter.ed9209c8.js": {
    "type": "application/javascript",
    "etag": "\"1667-NY/qJdV0PUWzkpES/gkOV8IEYqs\"",
    "mtime": "2023-11-05T21:52:36.468Z",
    "size": 5735,
    "path": "../../.output/public/_nuxt/MainFooter.ed9209c8.js"
  },
  "/_nuxt/menu.af383dd6.js": {
    "type": "application/javascript",
    "etag": "\"4bf5-eA0icmdz1ZF/+tKTzByEGdnHn/Y\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 19445,
    "path": "../../.output/public/_nuxt/menu.af383dd6.js"
  },
  "/_nuxt/nuxt-link.9b0c7cb7.js": {
    "type": "application/javascript",
    "etag": "\"ff0-xL609fg0NnVG33+TYw9N2bPJUHs\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 4080,
    "path": "../../.output/public/_nuxt/nuxt-link.9b0c7cb7.js"
  },
  "/_nuxt/paypal-icon.619293d5.svg": {
    "type": "image/svg+xml",
    "etag": "\"a01-T4skQXb0zWPvUF35LrnBcN0e2s8\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 2561,
    "path": "../../.output/public/_nuxt/paypal-icon.619293d5.svg"
  },
  "/_nuxt/play-store.d9937be1.png": {
    "type": "image/png",
    "etag": "\"1709-PlF9H6nt2qDNxZnTZGoGJhNQbFM\"",
    "mtime": "2023-11-05T21:52:36.456Z",
    "size": 5897,
    "path": "../../.output/public/_nuxt/play-store.d9937be1.png"
  },
  "/_nuxt/PrimaryButton.3590a7ea.js": {
    "type": "application/javascript",
    "etag": "\"329-uPtEZthZkzxo8VXfavs8GUb7IF0\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 809,
    "path": "../../.output/public/_nuxt/PrimaryButton.3590a7ea.js"
  },
  "/_nuxt/Product.e188e8a5.js": {
    "type": "application/javascript",
    "etag": "\"c98-RQhq/SGkRndsch9+QJzv6ZdFPDo\"",
    "mtime": "2023-11-05T21:52:36.468Z",
    "size": 3224,
    "path": "../../.output/public/_nuxt/Product.e188e8a5.js"
  },
  "/_nuxt/ProductSwiper.fb57cd90.js": {
    "type": "application/javascript",
    "etag": "\"25a-yLEm6+kQKzIo/FCxbTcx3CESfIE\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 602,
    "path": "../../.output/public/_nuxt/ProductSwiper.fb57cd90.js"
  },
  "/_nuxt/profile.237eadfe.js": {
    "type": "application/javascript",
    "etag": "\"1685-+puJuH5bUNrv1Z93ngE5Qz4AXT0\"",
    "mtime": "2023-11-05T21:52:36.471Z",
    "size": 5765,
    "path": "../../.output/public/_nuxt/profile.237eadfe.js"
  },
  "/_nuxt/profile.7674c2b8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3f-H2x6QnQN/o/62ujX2iLXE9RPRbI\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 63,
    "path": "../../.output/public/_nuxt/profile.7674c2b8.css"
  },
  "/_nuxt/register.0469b4ff.js": {
    "type": "application/javascript",
    "etag": "\"b75-zlHNmYcIKmFFUkCFAxMh7K4dcxc\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 2933,
    "path": "../../.output/public/_nuxt/register.0469b4ff.js"
  },
  "/_nuxt/replace-returns.00f0ff32.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"147-8u+qkW7ceM7POKqeSo8x0odoIM0\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 327,
    "path": "../../.output/public/_nuxt/replace-returns.00f0ff32.css"
  },
  "/_nuxt/replace-returns.c21bd766.js": {
    "type": "application/javascript",
    "etag": "\"1b0f-vzxlbe7ReRdmr1t3lLkS3ZHdfIw\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 6927,
    "path": "../../.output/public/_nuxt/replace-returns.c21bd766.js"
  },
  "/_nuxt/requests.051f5143.js": {
    "type": "application/javascript",
    "etag": "\"c70-5k8mQcMvQSeO71iKV16k1KqqU88\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 3184,
    "path": "../../.output/public/_nuxt/requests.051f5143.js"
  },
  "/_nuxt/saved-products.f777c307.js": {
    "type": "application/javascript",
    "etag": "\"18cf-7M/tLxu/IMafGz1HDj/xCEKr50U\"",
    "mtime": "2023-11-05T21:52:36.468Z",
    "size": 6351,
    "path": "../../.output/public/_nuxt/saved-products.f777c307.js"
  },
  "/_nuxt/SecondaryButton.68fdc712.js": {
    "type": "application/javascript",
    "etag": "\"31c-kzD6+7M6KvO2Jk4u0vizVA2WY80\"",
    "mtime": "2023-11-05T21:52:36.464Z",
    "size": 796,
    "path": "../../.output/public/_nuxt/SecondaryButton.68fdc712.js"
  },
  "/_nuxt/SocialMediaLogin.a95a92b7.js": {
    "type": "application/javascript",
    "etag": "\"fb9-MZumnNzTv17/x42DGZJHawGng9o\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 4025,
    "path": "../../.output/public/_nuxt/SocialMediaLogin.a95a92b7.js"
  },
  "/_nuxt/sound.5e1b584a.svg": {
    "type": "image/svg+xml",
    "etag": "\"a61-mLuaa6GD3EehtYoWeCzDDaNqgHI\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 2657,
    "path": "../../.output/public/_nuxt/sound.5e1b584a.svg"
  },
  "/_nuxt/state.b5e2d2f6.js": {
    "type": "application/javascript",
    "etag": "\"239-rbSPYyVGv1FPfdF2jiycUJZxiZE\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 569,
    "path": "../../.output/public/_nuxt/state.b5e2d2f6.js"
  },
  "/_nuxt/Status.175d9aa0.js": {
    "type": "application/javascript",
    "etag": "\"19a-SMuFMnW8zNDpVzPPLspztVEwTuA\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 410,
    "path": "../../.output/public/_nuxt/Status.175d9aa0.js"
  },
  "/_nuxt/Status.769ad805.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"166-joVl54t2VXTZdduEdyPI41m5vXE\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 358,
    "path": "../../.output/public/_nuxt/Status.769ad805.css"
  },
  "/_nuxt/step-four.ddb2f310.svg": {
    "type": "image/svg+xml",
    "etag": "\"983-F2oLMP6SJQcVTLl9uMW7ip23tjg\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 2435,
    "path": "../../.output/public/_nuxt/step-four.ddb2f310.svg"
  },
  "/_nuxt/step-one.fb372b62.svg": {
    "type": "image/svg+xml",
    "etag": "\"12f0-SX0NaALV70nl7CSLR43S6KacGcA\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 4848,
    "path": "../../.output/public/_nuxt/step-one.fb372b62.svg"
  },
  "/_nuxt/step-three.fdfaf7d8.svg": {
    "type": "image/svg+xml",
    "etag": "\"a14-6dma42ydSMHTJHkkut/hcgpHVlI\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 2580,
    "path": "../../.output/public/_nuxt/step-three.fdfaf7d8.svg"
  },
  "/_nuxt/step-two.3b2b4bea.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a75-YseMXHaSIHsSpQKb9oncMNoQtUA\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 6773,
    "path": "../../.output/public/_nuxt/step-two.3b2b4bea.svg"
  },
  "/_nuxt/subscribe.ac912b6a.svg": {
    "type": "image/svg+xml",
    "etag": "\"1364-EJPKeTpjWDwyzkdTFEFueZWvTiY\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 4964,
    "path": "../../.output/public/_nuxt/subscribe.ac912b6a.svg"
  },
  "/_nuxt/suggested-products.58d7e746.js": {
    "type": "application/javascript",
    "etag": "\"1959-0ZqBQC1H5FJkK1pGNFRnIHIcQ/8\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 6489,
    "path": "../../.output/public/_nuxt/suggested-products.58d7e746.js"
  },
  "/_nuxt/swiper-vue.25ac1039.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4591-BEDT+fl2BCOXLVkWYU6bRMD5oqU\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 17809,
    "path": "../../.output/public/_nuxt/swiper-vue.25ac1039.css"
  },
  "/_nuxt/swiper-vue.cec2437d.js": {
    "type": "application/javascript",
    "etag": "\"27671-LgATm7lhuW48j2hgaVdyc8XLZAM\"",
    "mtime": "2023-11-05T21:52:36.471Z",
    "size": 161393,
    "path": "../../.output/public/_nuxt/swiper-vue.cec2437d.js"
  },
  "/_nuxt/Title.9bdd06cd.js": {
    "type": "application/javascript",
    "etag": "\"2ad-wS5dV2C/FR4z+xtTTjHR5tC32Yk\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 685,
    "path": "../../.output/public/_nuxt/Title.9bdd06cd.js"
  },
  "/_nuxt/upload-icon.2b58cf17.svg": {
    "type": "image/svg+xml",
    "etag": "\"668-qf1tXULC1y2zVZBkp+W6Z+OWQnU\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 1640,
    "path": "../../.output/public/_nuxt/upload-icon.2b58cf17.svg"
  },
  "/_nuxt/upload-icon.9f672ede.js": {
    "type": "application/javascript",
    "etag": "\"70-Vs5kEUSg4D0kMTbDgFn/UrtECmY\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 112,
    "path": "../../.output/public/_nuxt/upload-icon.9f672ede.js"
  },
  "/_nuxt/useApi.a33fd01d.js": {
    "type": "application/javascript",
    "etag": "\"3cb-ta5yj+0Mu34Ked0lA6k+XtiYzzI\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 971,
    "path": "../../.output/public/_nuxt/useApi.a33fd01d.js"
  },
  "/_nuxt/useAuth.b517ff58.js": {
    "type": "application/javascript",
    "etag": "\"138-tgQU01dEqLT2U7g8zV9vs9c9raU\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 312,
    "path": "../../.output/public/_nuxt/useAuth.b517ff58.js"
  },
  "/_nuxt/useCartLength.2c8490eb.js": {
    "type": "application/javascript",
    "etag": "\"9b-tPjAiIL8HGFp6XD0wFuF2XflTx8\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 155,
    "path": "../../.output/public/_nuxt/useCartLength.2c8490eb.js"
  },
  "/_nuxt/useCountries.9cb2765d.js": {
    "type": "application/javascript",
    "etag": "\"1c4-Y/JXgFnFtMPfPzWKkANoLTZTakA\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 452,
    "path": "../../.output/public/_nuxt/useCountries.9cb2765d.js"
  },
  "/_nuxt/usePagination.9d9017b7.js": {
    "type": "application/javascript",
    "etag": "\"451-u5mbSGi9bm3gXRJpsZxgpYAfjlI\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 1105,
    "path": "../../.output/public/_nuxt/usePagination.9d9017b7.js"
  },
  "/_nuxt/user-image.0b3a482c.svg": {
    "type": "image/svg+xml",
    "etag": "\"a6b-jCKCYlTPNdGYW6lRb/sVh0nC08c\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 2667,
    "path": "../../.output/public/_nuxt/user-image.0b3a482c.svg"
  },
  "/_nuxt/useRequest.c26dc291.js": {
    "type": "application/javascript",
    "etag": "\"38c-BnK5i6wVV2lIfnb5vcozKvB9vRQ\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 908,
    "path": "../../.output/public/_nuxt/useRequest.c26dc291.js"
  },
  "/_nuxt/useSavedProducts.a3ecb773.js": {
    "type": "application/javascript",
    "etag": "\"b8-EOXUyOjdFpjEkaWhC9q+tZCXxyA\"",
    "mtime": "2023-11-05T21:52:36.468Z",
    "size": 184,
    "path": "../../.output/public/_nuxt/useSavedProducts.a3ecb773.js"
  },
  "/_nuxt/vodafone-icon.7d61d299.svg": {
    "type": "image/svg+xml",
    "etag": "\"2d9f-5Swa8vOr41Hi9OV8ZbFoL+2OE/4\"",
    "mtime": "2023-11-05T21:52:36.455Z",
    "size": 11679,
    "path": "../../.output/public/_nuxt/vodafone-icon.7d61d299.svg"
  },
  "/_nuxt/vue.f36acd1f.f9d749c9.js": {
    "type": "application/javascript",
    "etag": "\"1ac-HLSOYK0f9YN2Kz0z3dW3Nbqz5rU\"",
    "mtime": "2023-11-05T21:52:36.462Z",
    "size": 428,
    "path": "../../.output/public/_nuxt/vue.f36acd1f.f9d749c9.js"
  },
  "/_nuxt/wallet.2adde5b5.js": {
    "type": "application/javascript",
    "etag": "\"314c-s51wMl4TgkTj75jpdnW16L+BzBg\"",
    "mtime": "2023-11-05T21:52:36.469Z",
    "size": 12620,
    "path": "../../.output/public/_nuxt/wallet.2adde5b5.js"
  },
  "/_nuxt/wallet.d41d5bc9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-MCcxOr5psVTAt/T7J/i9/n7AGUM\"",
    "mtime": "2023-11-05T21:52:36.459Z",
    "size": 84,
    "path": "../../.output/public/_nuxt/wallet.d41d5bc9.css"
  },
  "/_nuxt/_id_.423af19b.js": {
    "type": "application/javascript",
    "etag": "\"1e9a-c1BOj7cn2XfE5Phwuxk3U8bp7tE\"",
    "mtime": "2023-11-05T21:52:36.465Z",
    "size": 7834,
    "path": "../../.output/public/_nuxt/_id_.423af19b.js"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-/K84zPJdqlYGyXsI9DvDavPYgpo\"",
    "mtime": "2023-11-05T21:52:39.946Z",
    "size": 71,
    "path": "../../.output/public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/94520237-4fc0-48e1-84be-1f8c69acbb00.json": {
    "type": "application/json",
    "etag": "\"8b-A44RkffLSDD4wNuD1tIwccExnXc\"",
    "mtime": "2023-11-05T21:52:39.946Z",
    "size": 139,
    "path": "../../.output/public/_nuxt/builds/meta/94520237-4fc0-48e1-84be-1f8c69acbb00.json"
  },
  "/_nuxt/builds/meta/test.json": {
    "type": "application/json",
    "etag": "\"6b-RLfItq+ad1M9NDM9yDPOpaWNKuk\"",
    "mtime": "2023-11-05T21:52:20.079Z",
    "size": 107,
    "path": "../../.output/public/_nuxt/builds/meta/test.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_l1wK5y = () => import('../renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_l1wK5y, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, useStorage as b, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
