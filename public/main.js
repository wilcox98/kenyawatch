/*if ('serviceWorker' in navigator) {
	console.log("Will the service worker register?");
	navigator.serviceWorker.register('/service-worker.js', { scope: ‘/’ })
	.then(function(reg){
		console.log("Yes, it did.");
	}).catch(function(err) {
		console.log("No it didn't. This happened:", err)
	});
}
*/
if(!this.document) {
    self.addEventListener('install', function(e) {
        console.log('service worker installation');
    });
} else {
    navigator.serviceWorker.register('/service-worker.js');
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});
// Update UI notify the user they can add to home screen
  btnAdd.style.display = 'block';
  btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});
window.addEventListener('appinstalled', (evt) => {
  app.logEvent('a2hs', 'installed');
});
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
}
if (window.navigator.standalone === true) {
  console.log('display-mode is standalone');
}
