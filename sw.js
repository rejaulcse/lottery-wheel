// This service worker exists for one reason: make sure the app
// always loads the latest uploaded version instead of an old
// cached copy from the phone's browser.

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
  // Always go to the network for a fresh copy; never trust the
  // browser's HTTP cache. If the network is unreachable, let the
  // request fail normally (no offline copy is kept).
  event.respondWith(
    fetch(event.request, { cache: "no-store" })
  );
});
