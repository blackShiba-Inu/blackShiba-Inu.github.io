'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2d10529a278465166b4f10192a91a08c",
"favicon.ico": "ce7d2f7c279cc9efc5be62daa8fc8a6d",
"index.html": "78f123b3fe962f70f25146f052e07ac9",
"/": "78f123b3fe962f70f25146f052e07ac9",
"main.dart.js": "92a26fb86871293fd629631902f3d382",
"README.md": "21681375e4d5c27497bba2da36401eda",
"icons/Icon-512_temp.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icoin-512.png": "703eaf3be2767f1a90eb178488ebf00f",
"icons/Icon-192.png": "1b002ffc776a2b2c41964e0761d5789e",
"icons/Icon-192_temp.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "770338708abe42586efbe6c06e98c8d7",
".git/ORIG_HEAD": "ce1ca852fd4ee1a20dbe236536b2b459",
".git/config": "66e76337f9071ad1dfce08e9207f7ca4",
".git/objects/59/7e6ad7267c0754a0da8e2e500862a57d91c468": "fc80bce888adbf18a991aca39035803f",
".git/objects/3c/377e484b179983f5e40e34915891b0d00ce7c2": "72d6322b30485bdb8887b499465609d4",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/a3/12c2878f439d20adf5ffb0da7e6b8eeb8ad77f": "5b81a9442eb37f14d81ebe33b9940cb8",
".git/objects/d9/7c8bb6b4f907d8300c750f937e918f55993c41": "8b812d32f4cfcc0e0296cf31cf4d8abf",
".git/objects/bc/b6a9ba03a54b6e190da5210039e1377deae7c7": "0c95b0a05d12b06f6997ecbde26574a9",
".git/objects/bc/09572b0c44cf6960c6893081c7d996b780ce87": "76fef29fa800844ed379ea063948f17e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/e3/bfe17af49e686a91a7d0f0eab6a8cf0c21de29": "7bc68c986062327a706789176110bb52",
".git/objects/e3/ac48a0ff27022e496b927ee6fbcd522aa73458": "1cc30a20282d1bbcddc8b109cb6320fd",
".git/objects/c1/caa7d9e6a08071890d2eda8b25c240ef556e9c": "4608385f90d40280221a8c438b772ae5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7c/5044d0cd86cf9c5eacfa90977fee22b311a0d2": "60d927a96af3d995dc10672975fbfe13",
".git/objects/80/a09865e655a15d75b022339fab13e86851ecc5": "7e793ac776e5791e12cbcfeeb45184e4",
".git/objects/72/9acf559e162b69184726b729dccaf2cae2449d": "1a47253096cd25f4dfaa362a4ce6f5fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/f0d2dc9a86b50fc7fc27468238c5f66cb71ecb": "04e6cf7c4f725786742d15ca35739c41",
".git/objects/d4/6567a2f6d6ba0b876d1b2e6c7722cea30ac22d": "c1d5e818abefd8eded2cf71e53e07a39",
".git/objects/d2/8215a81c3603221bc9eb8dc2473cf6d5a602c4": "b3e87e9a305753cace624ff70e7a0e4b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/348f26efd50d6aea28f757662dd4354567bb41": "5a8d24abbfaa4f1b9f3565ec084bbfa4",
".git/objects/c4/a0dd8c4e4eb330376af73215d7c354f7626f8a": "2f469d887d695713982a8ab87bba3f31",
".git/objects/e0/52e3337b9780367547e94344031f18aea46407": "65b9b31b6cdd35d8ef9dc6fdb3853cdf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6828ff57cb38ce440c3bdfd5e57d14b2e6cb6b": "10896aa5915eb721e40c1dd87f9fc258",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/8a5f8d1dea9c1feabd70911bf601d2e0808210": "428fae1bd2903fdf4aed47de09909bb9",
".git/objects/84/6792e26f31a6770fe8a10189eaec31f0e83e84": "9d468a51f68acf9aeda088d00b96d0c1",
".git/objects/85/89b86d4892c47dfb105b56e5cdcb097c7de775": "1c668567a57445411dc52cf214d24da1",
".git/objects/8b/81420bdc77eb600093b2acd5fd80cc2a39074d": "df6c26caeb7e440dad7ec909cf11a8c2",
".git/objects/7a/d6d84917f1903c5e75e7a5bdfd765bf0405754": "5abe5acea9662ca53c514e3b7a52bfcf",
".git/objects/25/0f042cb99f787dfa3e960123ff5ad286395410": "70935af209bed948f7d9d09ac700f8a7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "68c91d11bddfd896cd745287d284306e",
".git/logs/refs/heads/main": "c9d4edd4ea2145795126d01d7c3c7cc5",
".git/logs/refs/remotes/shiba/main": "ff256582fd5d2424cc706e176a59526d",
".git/logs/refs/remotes/origin/master": "03398712d8bd470f5b60e085671c74a9",
".git/logs/refs/remotes/origin/main": "b05ae3239a563eb05b6ed8694243549f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8d2567841d58c441ffbc1f3ef00885ce",
".git/refs/remotes/shiba/main": "8d2567841d58c441ffbc1f3ef00885ce",
".git/refs/remotes/origin/master": "5e56f5e3c6aeead4773547ccdf87396e",
".git/refs/remotes/origin/main": "8d2567841d58c441ffbc1f3ef00885ce",
".git/index": "6af0e9f267f0e84f86906b9a30ae5112",
".git/COMMIT_EDITMSG": "c60727170dbb024ff4ef0ac3afcaaa68",
".git/FETCH_HEAD": "84d1cc424f6a3a3f93eca74bed8f1919",
"assets/AssetManifest.json": "e58dfcf8731c1be7a348883aea8e8f6c",
"assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/logo.png": "1338a202051aaebee6f872551e0a3335",
"assets/assets/images/shiba_logo.jpg": "7e4f8a725f58b785fd47e0ee646d3e41",
"assets/assets/images/bg.png": "e864db697af644144857548316e42001"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
