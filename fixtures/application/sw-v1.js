const VER='v1';
self.addEventListener('install', e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate', e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e=>{
  if (new URL(e.request.url).pathname.endsWith('/version.txt')) {
    e.respondWith(new Response(VER, {headers:{'Content-Type':'text/plain'}}));
  }
});
