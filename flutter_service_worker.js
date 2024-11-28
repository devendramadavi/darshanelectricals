'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/WorkSans-Regular.ttf": "6f916ce8ada5d5facf5ad4e1266a486d",
"assets/assets/WorkSans-Bold.ttf": "a0bf66dd6fc75494a0a51f7662a99c41",
"assets/assets/WorkSans-Thin.ttf": "2a52f7f10b4691d08b355521131505ae",
"assets/assets/WorkSans-SemiBold.ttf": "9e1952c9d61a6cd14bf2162b85ee61df",
"assets/assets/WorkSans-Medium.ttf": "38263ba46663a666f7730f69e804b028",
"assets/assets/pics/Screenshot_20240912-121340_Maps.jpg": "2df89c3543dcc730f57027a0281924e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "038485c282191d41bf5361ecbed016a2",
"assets/AssetManifest.bin": "37b2fbe4aaa7adb8a45be0c02908d46e",
"assets/NOTICES": "1843210446846c24a510e3908cae51cb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "54ece002a9204d82fb48c7ff5d708fe3",
"assets/fonts/MaterialIcons-Regular.otf": "724c300aaed7d06e88e38d5949ab9163",
"assets/AssetManifest.bin.json": "4af8f7f14127a21789956c3077c2a884",
"assets/FontManifest.json": "e89446b55f9cac1c8ce38449a6be0f15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "52cf288afcd44cc9779ad3c2b3a19ead",
"flutter_bootstrap.js": "b6b8e023bbbc2bc628bc1f580e6b173f",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "3b706de0acd8d8b0d5d2595b0df6275c",
"main.dart.js": "b8ac93ffdfc1ba4efee00a16107cc0f5",
".git/config": "54ca6db4cc962ce66a9801cc5420c6df",
".git/ORIG_HEAD": "ec880ab91eb534ac8221f61918b42e16",
".git/FETCH_HEAD": "715c5e123c7ac42ca666bd4b53474aef",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/logs/HEAD": "e010e7f70d8616e97a37c0d941642818",
".git/logs/refs/remotes/origin/main": "58e45d39b30097f55655983009ef53f5",
".git/logs/refs/heads/main": "6e93b173e20857622679bfba50fb5cba",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "4234e41d6fb28a42340549f96a88f120",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/remotes/origin/main": "5f06bb22d2119e80380ca157b78e45ea",
".git/refs/heads/main": "ec880ab91eb534ac8221f61918b42e16",
".git/index": "20b21f08bb0a36bb756cfe1f0fa4a7fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/ca/b4014d18cfd5b90b6ded24bde41e7a7de92ef3": "f645c5cf8450fa0895553accf5a18fc2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/15/047f2a0a62cee429058fe7c08ef4e01ee192be": "5b27ba0fb7716b4414c696f38616752f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/59/b0de752f5e0be81c730fede81ae8c6dbcf162e": "8be5f3c1fd8f74296fe809e87da5f994",
".git/objects/25/1256ea2d99d8e89dfde8e4bab890365fd652f4": "6f950a8746a38bd389348c601a71450e",
".git/objects/ec/27a79bdd465dc8b6c3d4db3447472912e2eb91": "b6542c0f630a2a68b832f2af182015b0",
".git/objects/85/471a3c95d66432d4163bee7c137ca5e8814a30": "41f2c6bda364305e1419c2b1d2be920f",
".git/objects/90/faffa17285799d8381ca6a758d4ff735bf0751": "58fcc16de947b2f168796235a6db6268",
".git/objects/90/deff2c45d066b67644b21c1ba73ce2ce5130a6": "0971d9e34ece098bd6ad7a1ab169e194",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/b3/363ab460d1f91aee1baccf2de6b6f1801eec53": "8aaa3a163732c204957691249b74593c",
".git/objects/c3/388e937e3f005bdda5400db8a3426c686f360b": "055113bee976ae3fd0cef4da531a2e57",
".git/objects/38/bc9270d26086a666d70f5a7edffbf1f41f4aba": "30ace26f4d1833b9c1b43d8856631dfd",
".git/objects/91/ea14ffd3d2a82ad847f7c157cdc3c0cb49e09f": "a4a57be296c3f56854b3f945294e4883",
".git/objects/d8/215b4066195ac6d2f9b78b9940c26e7ff60139": "7db560ea193c6379d9c640b5cea9e599",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/2d/8c34e6380c570e8eca1e1533579ae4e642c395": "127a7a11694281c6d8747ee7e9bdb9a9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/60/d11c99803bdcbc469a872c2836af4db6f569c6": "7cbdb2491d582417a26b2e43305a4727",
".git/objects/cb/b2b713b40ed862dd2fc053475e60ff92050e8e": "faa3d94c99c25cef4b25db7cfbfde628",
".git/objects/23/c492d024ab93bbd0477b11ae35fdd17a5a624e": "0c6e5d3f8c9f1d7bae56361de3ed703c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/31/6827ff364c6fc5c214d71667cc16cfa8b83e53": "2c7df7690e17bcc99c92a2fc37d8e8d4",
".git/objects/b1/22f94771d420aefd7011dbb425eb89fbe78316": "d36929ea86cabd4ee5e94e66d8ae121f",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/1e/7bb312e2c88081ff291ff0cdf2ac59518a1984": "83195f0b686a1ed089e5d2ef8e78dcaa",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/4e/f347a97b6d9d7b8d96f76deaa52f2e682f31c5": "410379d4d46db4b29ba8b502d4831b66",
".git/objects/7a/dd18e88ff1ac89d679def0f459f78cdf904515": "4f3dbac51045dc9e86cb75f5ce946d9f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/75603566bbec3b3c9c601ed2d8a8db911c82ba": "9e99c339b17629766c7540c874a758e6",
".git/objects/46/ff37339ba9fd62b177a927d8e172ac4e6e3a7d": "0abe5f80af4740ee351e0528322cbfb4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ad/a82684fa3c4fff1c23200d6a1c072ae1a62845": "bc2c585d3d5a4e2ad02e4e82f2f38027",
".git/objects/3e/f9f833aa7091674fd186dc9ef7567e44d1bf12": "4e0be7ba6e5876f192762cfdeb98e28a",
".git/objects/f6/11dd6b93ce1550f08daef808bcbb2f40cf515a": "b09847b9f58fb87116504f79eb1bd384",
".git/objects/f6/da2981f074f7684bc9dcf41885de727b88520f": "ef8f9a2dd77ca4ba4feca5aad14a816a",
".git/objects/ee/2e66a7b91ed7d5d6160990e03d33c8773d7583": "ebee31755663d4a2a173eb98d52af18f",
".git/objects/fa/a68d8a618ab49e27bc024598345a65b3c0ea7f": "2a760e78187842c54f78d99630d38c34",
".git/objects/66/af7dd4f536841fe1f6fc8eec3ae30361484987": "7745ec6d867c4156c66a491713cf0c8c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/55/d219459a354f0d93b7d4c68b7e0319f004c66d": "f3d8e45c414a105c2af730f7fd3f05d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/4b/2e2019e62a0bcf281d1bf4680cb0eed5fbdb02": "509ae60494217e864539450a5df82360",
".git/objects/81/04ce4bd6f0dd6f4e37ffac9cf7631f5117e1b5": "5644ad97d58f9d79a8a94e80a0c15652",
".git/objects/ef/856b3a95d57df5de786a92a7a1795b80db3aa3": "4120fd59aed02ed21a6e0416b5581b14",
".git/objects/ef/175d395631c8cbedc9979ba666d16a490e2b01": "37b21fc9fa74e425d13df6ccfbc856f4",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/a3/4319fb74631b3148191298ca272ef272494af8": "03ba99c8f0796c6baf849c58d9f09aa2",
".git/objects/5c/f980ba27074811829d33fe5b748e824c02df02": "7262f8d4ab63ab0b3b4e298a647a0da3",
".git/objects/6f/32ad822fa5e6976536f1ac991d74a692c00c7b": "cdd787e30fe82f8479ea92e7fce580ca",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/34/0c1ba015d9e08af44fc3dd5d2c140345dae0e2": "14edb1d3eac274cad4fdebc96dc4d4fd",
".git/objects/1d/b5ef6b0cd391603c565ea3d7db24e20426d692": "0b5adf5efb702e5d1288a8c04c195f76",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"index.html": "8e2682e8dc517801c13fcf1a22e23421",
"/": "8e2682e8dc517801c13fcf1a22e23421"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
