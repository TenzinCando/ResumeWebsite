var debug = false;

// 2019-04-25 PWA  Register service worker.
createServiceWorker();
deferLoadCss();

function createServiceWorker() {
  // 2019-04-25 PWA  Register service worker.
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('/service-worker.js')
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

function deferLoadCss() {
	/* First CSS File */
	var giftofspeed = document.createElement('link');
	giftofspeed.rel = 'stylesheet';
	giftofspeed.href = '/public/css/style.css';
	giftofspeed.type = 'text/css';
	var godefer = document.getElementsByTagName('link')[0];
	godefer.parentNode.insertBefore(giftofspeed, godefer);

	/* Icon CSS File */
	var giftofspeed2 = document.createElement('link');
	giftofspeed2.rel = 'stylesheet';
	giftofspeed2.href = 'https://use.fontawesome.com/releases/v5.8.1/css/all.css';
	giftofspeed2.type = 'text/css';
	giftofspeed2.integrity = 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf';
	giftofspeed2.crossOrigin = 'anonymous';
	var godefer2 = document.getElementsByTagName('link')[0];
	godefer2.parentNode.insertBefore(giftofspeed2, godefer2);	
}