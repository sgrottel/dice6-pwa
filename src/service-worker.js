const CACHE_NAME = "dice6-pwa-cache-v1";
// gci | Select-Object -ExpandProperty Name | ConvertTo-Json
const FILES_TO_CACHE = [
  "app.js",
  "dice6_x192.png",
  "dice6_x512.png",
  "dice6.svg",
  "favicon.ico",
  "index.html",
  "manifest.json",
  "service-worker.js",
  "style.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
