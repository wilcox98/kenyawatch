self.addEventListener('fetch', function(event) {
  console.log(event.request);
});
//ofline functionalities
self.addEventListener("fetch", event => {
    if(event.request.method !== "GET") {
        return;
    }
    if (event.request.mode === 'navigate') {
    event.respondWith(caches.match('/'));
    return;
  }
    event.respondWith(
        fetch(event.request)
            .then(networkResponse => {
                var responseClone = networkResponse.clone();
                if (networkResponse.status == 200) {
                    caches.open("mycache").then(cache => cache.put(event.request, responseClone));
                }
            return networkResponse;
        })
        .catch(_ => {
            return caches.match(event.request);
        })
    )
})
