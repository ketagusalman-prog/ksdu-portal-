const CACHE_NAME = 'm4-portal-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Uygulama yüklenirken temel dosyaları hafızaya al
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Çevrimdışı veya hızlı yükleme için hafızadaki dosyaları kullan
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
