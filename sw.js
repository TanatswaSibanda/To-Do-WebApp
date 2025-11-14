const cacheName = 'todo-cache-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/images/Top_Image.png',
    '/images/Side_Image.png',
    '/icons/cancel.svg',
    '/icons/Ellipse 1.svg',
    '/icons/Shape Set.svg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(filesToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
