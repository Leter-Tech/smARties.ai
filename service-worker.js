const CACHE_NAME = 'smartiesai-cache-v1';
const urlsToCache = [
    '/',
    '/favicon.png',
    '/app.html',
    '/images/airplane.png',
    '/images/apple.png',
    '/images/arm.png',
    '/images/banana.png',
    '/images/bicycle.png',
    '/images/broccoli.png',
    '/images/bus.png',
    '/images/car.png',
    '/images/carrot.png',
    '/images/cat.png',
    '/images/circle.png',
    '/images/corn.png',
    '/images/cow.png',
    '/images/cucumber.png',
    '/images/diamond.png',
    '/images/dog.png',
    '/images/ears.png',
    '/images/elephant.png',
    '/images/eyes.png',
    '/images/grapes.png',
    '/images/hand.png',
    '/images/head.png',
    '/images/heart.png',
    '/images/helicopter.png',
    '/images/horse.png',
    '/images/leg.png',
    '/images/lion.png',
    '/images/mango.png',
    '/images/monkey.png',
    '/images/mouth.png',
    '/images/neck.png',
    '/images/nose.png',
    '/images/onion.png',
    '/images/oranges.png',
    '/images/oval.png',
    '/images/pineapple.png',
    '/images/potato.png',
    '/images/pumpkin.png',
    '/images/rabbit.png',
    '/images/rectangle.png',
    '/images/rocket.png',
    '/images/ship.png',
    '/images/square.png',
    '/images/star.png',
    '/images/strawberry.png',
    '/images/tiger.png',
    '/images/tomato.png',
    '/images/train.png',
    '/images/triangle.png',
    '/images/truck.png',
    '/images/watermelon.png',
    '/images/zebra.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});