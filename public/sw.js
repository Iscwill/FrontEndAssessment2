const CACHE_NAME = "frontend-assessment-v3"; // Increment cache version
const ASSETS = [
  "/",
  "/manifest.json",
  "/icon-192x192.png?v=3",
  "/icon-512x512.png?v=3",
  "/screenshot1.png?v=3",
];

// Install Event
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets...");
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event
self.addEventListener("activate", (event) => {
  console.log("Activating new Service Worker...");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim(); // Claim any clients immediately

  // Notify the client that the service worker is ready
  self.clients.matchAll({ type: "window" }).then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type: "SW_ACTIVATED" });
    });
  });
});

// Fetch Event
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Network-first strategy for API requests or dynamic resources
  if (requestUrl.pathname.startsWith("/api")) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Cache the latest API response
          return caches.open("api-cache").then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(event.request);
        })
    );
    return;
  }

  // Default behavior for other static assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
