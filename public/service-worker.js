//console.log("Inside Service-worker.js");
var debug = false;

// 2019-04-25 TK: Update cache names any time any of the cached files change.
// Update the name if any changes are made
var CACHE_NAME = 'resume-site-cache-v1';
// TODO: Test a static index.html VS using vue-js to populate index.html
const FILES_TO_CACHE = [
    'index.html',
    'js/main.js',
    'js/util.js',
    'js/effects.js'
];

// STATE: ONLINE
// 2019-04-25 TK: Precache static resources here.
self.addEventListener('install', function(evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            if (debug) console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

// STATE: ONLINE
// 2019-04-26 TK: Remove previous cached data from disk.
self.addEventListener('activate', function(evt) {
    if (debug) console.log('[ServiceWorker] Activate');
    evt.waitUntil(
        caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
            // console.log('[ServiceWorker] Activate | Key: ' + key);
            // Update the CACHE_NAME if any changes are made
            if (key !== CACHE_NAME) {
                if (debug) console.log('[ServiceWorker] Removing old cache', key);
              return caches.delete(key);
            }
          }));
        })
    );

    self.clients.claim();
});

// STATE: OFFLINE
// 2019-04-26 TK: What to do when the user is offline and tries to visit other pages
self.addEventListener('fetch', function(evt) {
    if (debug) console.log('[ServiceWorker] Fetch');
    
    // 2019-04-26 TK: Add fetch event handler here.
    if (evt.request.mode !== 'navigate') return;

    if (debug) console.log('[ServiceWorker] Fetching: ' + evt.request);

    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
            // if it fails to find the requested page, send them back to the homepage
            return caches.open(CACHE_NAME)
                .then((cache) => {
                    return cache.match(FILES_TO_CACHE[0]);
                });
            })
    );
});
