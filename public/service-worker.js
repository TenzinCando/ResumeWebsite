//console.log("Inside Service-worker.js");

// 2019-03-25 TK: Update cache names any time any of the cached files change.
var CACHE_NAME = 'resume-site-cache-v1';
// TODO: Test a static index.html VS using vue-js to populate index.html
const FILES_TO_CACHE = [
    'index.html',
    'js/main.js',
    'js/util.js',
    'js/effects.js'
];


// 2019-03-25 TK: Precache static resources here.
self.addEventListener('install', function(evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            CACHE_NAME += '.';
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});
