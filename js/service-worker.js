const CACHE_NAME = "qrify-cache-v1";
const urlsToCache = [
  "./",
  "../index.html",
  "../css/style.css",
  "../js/script.js",
  "../js/qrcode.min.js",
  "../img/favicon.png",
  "../img/icon-192x192.png",
  "../img/icon-512x512.png",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
