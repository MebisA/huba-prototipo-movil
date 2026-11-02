const CACHE_NAME = "huba-prototipo-offline-v1";
const OFFLINE_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./prototype.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./mapa_interacciones.json",
  "./assets/asistente.png",
  "./assets/buscador.png",
  "./assets/calendario.png",
  "./assets/inicio.png",
  "./assets/mas.png",
  "./assets/mis_cosas.png",
  "./assets/qr.png",
  "./assets/recordatorios.png",
  "./materiales/Organizador_ICP1.pdf",
  "./materiales/Programa_ICP2.pdf",
  "./materiales/Programa_ICSE.pdf",
  "./materiales/Programa_IPC.pdf"
];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(OFFLINE_FILES.map(file => new URL(file, self.registration.scope).href));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('huba-prototipo-offline-') && name !== CACHE_NAME).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (event.request.mode === 'navigate') {
      try {
        const response = await fetch(event.request);
        if (response.ok) await cache.put(event.request, response.clone());
        return response;
      } catch {
        return await cache.match(new URL('./index.html',self.registration.scope).href);
      }
    }
    return await cache.match(event.request) || fetch(event.request);
  })());
});
