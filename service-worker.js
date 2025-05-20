const CACHE_NAME = 'wt-timer-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './service-worker.js'
];

// Install and cache required files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
