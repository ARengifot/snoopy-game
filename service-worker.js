// Service Worker para Snoopy vs Zombies
// Permite que el juego funcione offline y se instale como PWA

const CACHE_VERSION = 'snoopy-v2.0';
const CACHE_NAME = `${CACHE_VERSION}-${new Date().getTime()}`;

const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/assets-config.js',
  '/manifest.json'
];

// Instalar el Service Worker
self.addEventListener('install', event => {
  console.log('🔧 Instalando Service Worker...');
  
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('📦 Cache abierto:', CACHE_NAME);
      return cache.addAll(URLS_TO_CACHE);
    }).then(() => {
      // Limpiar caches antiguos
      return caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName.startsWith(CACHE_VERSION)) {
              console.log('🗑️  Eliminando cache antiguo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      });
    })
  );
  
  self.skipWaiting();
});

// Activar el Service Worker
self.addEventListener('activate', event => {
  console.log('✅ Service Worker activado');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheName.startsWith(CACHE_VERSION)) {
            console.log('🗑️  Eliminando cache obsoleto:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia de fetch: Cache first, fallback to network
self.addEventListener('fetch', event => {
  // Ignorar solicitudes que no sean GET
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Ignorar solicitudes a URLs externas complejas
  if (event.request.url.includes('unsplash') && !caches.match(event.request)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retornar del cache si existe
        if (response) {
          console.log('📦 Cache hit:', event.request.url);
          return response;
        }
        
        // Si no está en cache, hacer fetch
        return fetch(event.request)
          .then(response => {
            // No cachear si la respuesta no es válida
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }
            
            // Clonear la respuesta
            const responseToCache = response.clone();
            
            // Cachear la respuesta para futuras solicitudes
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
            
            return response;
          })
          .catch(() => {
            // Retornar una página offline si la solicitud falla
            console.log('🔌 Offline - usando cache para:', event.request.url);
            return caches.match(event.request)
              .then(response => response || new Response(
                'Lo siento, no hay conexión a internet. El juego requiere conexión para cargar imágenes externas.',
                { status: 503, statusText: 'Service Unavailable' }
              ));
          });
      })
  );
});

// Background Sync (cuando vuelva la conexión)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-game-data') {
    console.log('🔄 Sincronizando datos del juego...');
    event.waitUntil(syncGameData());
  }
});

async function syncGameData() {
  try {
    // Aquí puedes sincronizar datos guardados si lo necesitas
    console.log('✅ Datos sincronizados');
  } catch (error) {
    console.error('❌ Error al sincronizar:', error);
  }
}

// Notificaciones Push (opcional)
self.addEventListener('push', event => {
  const title = 'Snoopy vs Zombies';
  const options = {
    body: event.data ? event.data.text() : 'Vuelve a jugar',
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect fill="%23667eea" width="96" height="96" rx="20"/><text x="48" y="56" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle">🐕</text></svg>',
    badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><text x="48" y="56" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle">🐕</text></svg>'
  };
  
  event.waitUntil(self.registration.showNotification(title, options));
});

// Notificación al instalar
self.addEventListener('install', () => {
  console.log('🎮 Snoopy vs Zombies instalado como aplicación!');
});

console.log('🚀 Service Worker registrado para Snoopy vs Zombies v2.0');
