if(!this.document) {
    self.addEventListener('install', function(e) {
        console.log('service worker installation');
    });
} else {
    navigator.serviceWorker.register('js/service-worker.js');
}