var debug = false;

// 2019-04-25 PWA  Register service worker.
createServiceWorker();


function createServiceWorker() {
  // 2019-04-25 PWA  Register service worker.
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('service-worker.js')
				.then(( reg) => {
          //TODO: comment out when set in live production
					if (debug) console.log('Service worker registered.', reg);
				})
				.catch((err) => {
					if (debug) console.log('Service worker NOT registered.', err);
				});
		});
  } 
}