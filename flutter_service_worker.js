'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "5619a40b2178821d2d946a963411ab0e",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "f3c328185695e85e1de0ff1bb05c07c4",
"/assets/FontManifest.json": "a7d08d485e5a437f7a8a3b3d22a98f3f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/users/user.png": "7cc7a630624d20f7797cb4c8e93c09c1",
"/assets/assets/users/person1.jpg": "1a5231b2ba533417f5bc4822eb6813bc",
"/assets/assets/users/person3.jpg": "27221023e6337f4ad663d232b25e2ab2",
"/assets/assets/users/person2.jpg": "84cbad35a49f245a3864dcdb7282f9a7",
"/assets/assets/4.jpg": "901c2f04a1fe2762d98741c898a69300",
"/assets/assets/fonts/Billabong.ttf": "52b04f1c2bd73f240b4ad620924a40c9",
"/assets/assets/2.jpg": "368e43befc60f80ca46eb581373a1312",
"/assets/assets/3.jpg": "97a70ba243546b7b1d6510c97cd2964c",
"/assets/assets/1.jpg": "b3764df19f4bc6725db5bdddbfa42b10",
"/assets/assets/priview.png": "ae2aa2b267bda90db1e7555d4c45c410"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
