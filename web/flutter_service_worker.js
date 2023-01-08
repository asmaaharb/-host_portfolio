'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "53f6553421a4ef82f1079e58dbabbfab",
"assets/assets/fonts/Unbounded-Black.ttf": "85b135986fa583548acad93c3b5e53b0",
"assets/assets/fonts/Unbounded-Bold.ttf": "2fa338e9befbf34e76c5c0f13208de1b",
"assets/assets/fonts/Unbounded-ExtraBold.ttf": "03db5d0a399a182b90b8ec2e40c4746c",
"assets/assets/fonts/Unbounded-Light.ttf": "76c6f5f19839af45ead1f45c64ba3872",
"assets/assets/fonts/Unbounded-Medium.ttf": "5bb114741f9ffdb224e1698bfcc51d10",
"assets/assets/fonts/Unbounded-Regular.ttf": "2430b9e2222630e5794de6de534e7a68",
"assets/assets/fonts/Unbounded-SemiBold.ttf": "3b193fee49a22540250c7b4891e41c23",
"assets/assets/images/1.jpg": "8b6f9c7d0eb2994185e1e0f269ea05fa",
"assets/assets/images/2.jpg": "3e75d252aefe2bc13d6c034c99dec901",
"assets/assets/images/3.jpg": "281b730e4c3196ed68f07c792d1b3124",
"assets/assets/images/android.png": "eda04b86c284e52ff0eb7ab0bee36a1e",
"assets/assets/images/ar.png": "82467a85f8be0d521120abb286529fcf",
"assets/assets/images/arrow.png": "33a9beffd043d8490e198e72f50e4f20",
"assets/assets/images/asma.jpg": "ff9aa41ff2c405acc1f53ef3fbfecac3",
"assets/assets/images/ath.png": "1f07b974d3c50bad7c405ef3555cb262",
"assets/assets/images/border.png": "c34277ae2b2768232f53b1875ff3d369",
"assets/assets/images/card.png": "17b7b5e2a7e0bf224baa246fc8739819",
"assets/assets/images/contact.jpg": "1a50bcae7bd9876de1810c22fa3bbbe7",
"assets/assets/images/dots.png": "191f257f3308de8d6e447f6d6f2b20b1",
"assets/assets/images/edu.jpg": "5b2006974e8723e66ea9405d4c255e20",
"assets/assets/images/edu_card.png": "cf67ed5162175b3ec16427e80065b62b",
"assets/assets/images/edu_data.png": "b3456f83d9aa759c8f147b0dc2a8e8a6",
"assets/assets/images/ex.jpg": "7d9666694e160fa6a0abcc9748400de0",
"assets/assets/images/flutter.png": "d13225692890b20e329f1bb45cda8d80",
"assets/assets/images/github.png": "6ab44c8d165a42a360f34da8fd6374c9",
"assets/assets/images/gmail.png": "f21b2cabb6f0187904756a330a6a77a1",
"assets/assets/images/home.png": "68e2b46799a306b3f8a89f6de2f23b22",
"assets/assets/images/info.png": "f8be950a7bc1a74ab2ebe68aa89deb6e",
"assets/assets/images/info_data.jpg": "7973147a4d92b5d849ff627634a09478",
"assets/assets/images/ios.png": "185273c7eaa1351b87d116307d77ea7f",
"assets/assets/images/linkedin.png": "4efb7c2f9f46382d441a842135088102",
"assets/assets/images/mail_icon.jpg": "0d30d846ea0287cd6d40a2b956ce1632",
"assets/assets/images/phone_icon.jpg": "92a182a7427f64a1fd506079c95eaf85",
"assets/assets/images/pro.jpg": "03cd140ad2669307e94a0af3f05871c6",
"assets/assets/images/projects.jpg": "e9c5d07bfb3ea89d37582b7dd443aff3",
"assets/assets/images/skills.jpg": "b19a80cee32506acbac031ccd20e877c",
"assets/assets/images/smartphone.png": "fe983feb40ad3495be49ca95782e8ada",
"assets/assets/images/splash.png": "469857e14ad7929281c4ded39868ee06",
"assets/assets/images/tab.png": "f80a69cfaeda832840aeabe091696f26",
"assets/assets/images/title.webp": "dd5b13a5ad1be1933e2ca8991bb9c34c",
"assets/FontManifest.json": "aab833a1d3c8554fd29f317c801cad8b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "eac563b063b08ab647e2e5058b97285f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "74855b977de2d63ac6b149eb9c9e207a",
"/": "74855b977de2d63ac6b149eb9c9e207a",
"main.dart.js": "86f50d2860be58bc9b5d33b5b750e12e",
"manifest.json": "bbb316ff0a5e9d95985247a712219bee",
"version.json": "f957497607fb56b3270ab4c34c568a0c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
