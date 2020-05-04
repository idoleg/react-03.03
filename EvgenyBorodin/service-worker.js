// Must be true in production
const doCache = true;

// Cache name
const CACHE_NAME = 'react-chat-cache';

// Clears the old cache
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(keyList => 
                Promise.all(keyList.map(key => {
                    if (!cacheWhitelist.includes(key)) {
                        console.log('Deleting cache: ', key);
                        return caches.delete(key);
                    }
                }))
            )
    );
});

// 'install' is called when the user opens PWA for the first time
self.addEventListener('install', function (event) {
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function (cache) {
                    // Getting the information from the manifest (it will be cached)
                    fetch('/manifest/manifest.json')
                        .then(response => {
                            response.json();
                        })
                        .then(assets => {
                            // opening and caching pages and files that are needed
                            const urlsToCache = [
                                '',
                                '/',
                                '/chats',
                                '/chats/*',
                                '/profile',
                                '/about'
                            ];
                            cache.addAll(urlsToCache);
                            console.log('cached');
                        })
                })
        );
    }
});

// When the app is running service worker is catching queries and answering to them with data in cache if they exist
self.addEventListener('fetch', function (event) {
    if (doCache) {
        event.respondWith(
            caches.match(event.request).then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});

self.addEventListener('push', function (event) {
    console.info('Event: Push');

    var title = 'Тут новый пуш прилетел!';

    var body = {
        'body': 'Нажми сюда, чтобы открыть',
        'tag': 'pwa',
        'icon': './manifest/logo-pwa-48.png'
    };

    event.waitUntil(
        self.registration.showNotification(title, body)
    );
});
