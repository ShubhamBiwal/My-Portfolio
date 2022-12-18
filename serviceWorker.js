let staticShubhamKumar = "shubham-kumar-site-v1";
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/images/favicon_io/favicon-128x128.png",
  "/images/favicon_io/favicon-144x144.png"
  //   "/images/document-page.jpg",
  //   "/images/front-end-logo.png",
  //   "/images/product-landing-page.jpg",
  //   "/images/profile-pic.png",
  //   "/images/profile-pic2.png",
  //   "/images/survey-form.jpg",
  //   "/images/tribute-page.jpg"
];

self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(staticShubhamKumar).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", function (event) {
  let online = navigator.onLine;
  if (!online) {
    event.respondWith(
      caches.match(event.request).then(function (res) {
        if (res) {
          return res;
        }
      })
    );
  }
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return prompt.all(
        keys.map(function (keys, i) {
          if (keys !== staticShubhamKumar) {
            return caches.delete(keys[i]);
          }
        })
      );
    })
  );
});


// self.addEventListener("install", (installEvent) => {
//   installEvent.waitUntil(
//     caches.open(staticShubhamKumar).then((cache) => {
//       cache.addAll(assets);
//     })
//   );
// });

// self.addEventListener("fetch", (fetchEvent) => {
//   fetchEvent.respondWith(
//     caches.match(fetchEvent.request).then((res) => {
//       return res || fetch(fetchEvent.request);
//     })
//   );
// });
