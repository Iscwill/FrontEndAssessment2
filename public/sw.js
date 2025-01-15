const CACHE_NAME = "frontend-assessment-v2";
const ASSETS = [
  "/",
  "/manifest.json",
  "/icon-192x192.png?v=2",
  "/icon-512x512.png?v=2",
  "/screenshot1.png?v=2",
];

// Install Event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets");
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event
self.addEventListener("activate", (event) => {
  console.log("Activating new service worker...");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Removing old cache:", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch Event
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Skip fonts.gstatic.com and fonts.googleapis.com from being intercepted
  if (
    requestUrl.hostname === "fonts.gstatic.com" ||
    requestUrl.hostname === "fonts.googleapis.com"
  ) {
    return;
  }

  // Handle static assets from the cache (cache-first strategy)
  if (ASSETS.includes(requestUrl.pathname)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
    return;
  }

  // Handle API requests (network-first strategy)
  if (requestUrl.pathname.startsWith("/api")) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          const clonedResponse = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
          return networkResponse;
        })
        .catch(() => caches.match(event.request)) // Fallback to cache if offline
    );
    return;
  }``

  // Default fetch behavior
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

