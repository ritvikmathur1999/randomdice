'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bbf787a71d0463f55fb785e1204d633a",
".git/config": "afdd160d4d97a6f2ac5056a28e1ce522",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "ae4605dd555ac30b3a483da0bd965903",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "483ed3d17e2f6818c831ffb5ab76f8a5",
".git/logs/refs/heads/master": "483ed3d17e2f6818c831ffb5ab76f8a5",
".git/logs/refs/remotes/origin/master": "db65b14c06ad481c82c494eed0cec7c2",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/67e7e0b6b28fc1966500579f70a56abaa32219": "ad22358e31ef0d42e3c181538012170a",
".git/objects/37/d8201fff46672ffe3daf65ea70564741b0a1c8": "9cdda6ea011e79d9e1cb2bedc888e539",
".git/objects/3b/179594c7218acef471ae7cf6a8dce67833af5e": "43a977f7621a1857cc46fde1d185ecc9",
".git/objects/3c/c443b2ce85cdc23391ad6c1987107246f4dc64": "8e78fb227cdb68ea2d45d92be3c9d69e",
".git/objects/42/063ac7daf7f8be9ab3a1e7b73ed497605c6447": "46c874e3767bace004b4b64add36d62a",
".git/objects/48/f3b733152c1570120f455148cfa0f01449c7c4": "7154b703065a0c69ad69aaadd962070b",
".git/objects/4f/891e15113d582f21abc8094384cc1b7ed166e5": "d0b71cb16a19a0a4dbd3106e39d539e9",
".git/objects/58/72f836921297465a3458b9905cee72ab369970": "53f3aa83d9fe591ca6e45cdff01ccd92",
".git/objects/71/3e751f77f46d45603ac9ee46d8d71bce5d708a": "74767b7272e4e02bcf323a166d876dcf",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/6fae661198124b3a39a13e6a545693f7ff65f2": "81bef428ba2982936142870b05ea3740",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/a0/0e15913604dbae21a8125deca0f38e63e6ba20": "2c7d6a6d1c08a59570d3ed04ddf20e28",
".git/objects/a2/329605070879e002869a3873f2bbba4ce60ba4": "5b4e156904a9d3ff4a73d6892e2664c2",
".git/objects/ad/e870055414c471e756b030bb5041a3e0b0e805": "cc7cd5b8cc033dcfb16b3b0909e87c79",
".git/objects/b6/548e8a43dca6486dd293fcc2126a8ab0b01032": "41a85dcc070c15a0ba437dc931464f02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/f1/b56f74dae76100dcdd08559e35d9b727462be6": "bb8003772ca463ef106dc8c77e4aff50",
".git/objects/f6/80ceb964467815a8ad248a83f316a667876058": "2a73b3adda84ccf21aba487f548333ab",
".git/objects/f9/4d809b7ab862b295cc76f733ff988c2649fe25": "65ca66c17d073bdae6ab1021242f033e",
".git/objects/f9/b6741aee0809ab87f7390dda8834665941439e": "f9fb92f74e09a3b9297c3e060e0f7647",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "ef0bb4b196095ab08c9552275b29999f",
".git/refs/remotes/origin/master": "ef0bb4b196095ab08c9552275b29999f",
"assets/AssetManifest.json": "6e9d159bea854be178c61faa18323cda",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/dice1.png": "5e0580134cde323cc6e2d54254b1a605",
"assets/images/dice2.png": "524559a3d0e61efa7b8a165bd2bad0da",
"assets/images/dice3.png": "683bc715f147a48b2e2dcabf2d573a05",
"assets/images/dice4.png": "3c7e0c5d05aeaa567bb90faf18f79f38",
"assets/images/dice5.png": "ae4a1c88865e22a54c7aeb91f18db784",
"assets/images/dice6.png": "2d7642d5229bb083f5e59cf1cee4aa28",
"assets/LICENSE": "28eb89b9741326b1de0cb7eee5a5558d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"icons/favicon.png.png": "35776e84b6087a7bc2d1db958cf77ce1",
"icons/Icon-192.png.png": "14e72e663126e538067a3067536a11e9",
"icons/Icon-512.png.png": "f55d29dd3000edc7f816464521a45065",
"index.html": "7120f4394b272365cb091191635069ed",
"/": "7120f4394b272365cb091191635069ed",
"main.dart.js": "a5ad00036cddc3e559b057f48c51f1a0",
"manifest.json": "19427036579d4da49833a2781ab1574d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
