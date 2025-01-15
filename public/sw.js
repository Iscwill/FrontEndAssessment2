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
});

// Fetch Event
// Fetch Event
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Skip caching for dynamic resources in development
  if (
    requestUrl.pathname.startsWith("/_next/static") ||
    requestUrl.pathname.endsWith(".js") ||
    requestUrl.pathname.endsWith(".css")
  ) {
    event.respondWith(fetch(event.request)); // Always fetch from the network
    return;
  }

  // Cache-first for static assets
  if (ASSETS.includes(requestUrl.pathname)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
    return;
  }

  // Network-first for everything else (e.g., API requests)
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
});
