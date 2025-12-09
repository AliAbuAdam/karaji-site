'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "98831083b27fdc4b302770cc5f08ba7e",
"version.json": "9444c25a74e525640296d2a9795ceef8",
"index.html": "57bbe6ce949e829b426dd4e90012f4ce",
"/": "57bbe6ce949e829b426dd4e90012f4ce",
"main.dart.js": "03cf050c60778004597f16f67c4766dc",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "3b424b9ee5c5ad27e99b6acd94b346e9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f3a2f48272280e87de18854bca532aa6",
".git/config": "3bde81c017e856e4cd484a36d34bdcd7",
".git/objects/0d/ff722f4ffeaec7d7bc982b9a4d9009e995a714": "06aa8d42a45636db11b6f0b70d83a06e",
".git/objects/0d/80d328d83b566b53fb0f882bcc15b45cc36459": "37bfbad04e4b757cccaa9984ae5ebd26",
".git/objects/66/f8ba5245a5401184c6760a73f01f900f8785cf": "d9a7319d313cc02f8e8bea3864ef66c2",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/32d32dc70c66aca170e028d8fdafcfbd615f1d": "683287ca7a0d4ca047f8a80ffcc5383d",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/5f/4557a4b5192896f8a1740b690064112c7ca943": "c7478e8c270748d499ddcf1364129b18",
".git/objects/33/55e3edf28f81c54592cbc1df3f9572cacb4a04": "1263df150826fc528d31c0099d398a93",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/b2/1dea147e67b05add17433a859cab91dbd7080d": "74cc6768c2407140e2d22f49f195b307",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d1/03ae840bf245f4af429a19b49085662f62e8c1": "f63f6265b22c919285a8e20bf96f588c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/9b0bcf7f3c0f60d7f274c092beb1d346fa0921": "9ef2be46e3f79e57115df4461e9ee98e",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/22e5651dd16f978d2122b31ee8a62e07c1d14d": "0064ae14cdc3cc764856d9e7eceadf20",
".git/objects/cf/774d1f62c9dfc7b46eac1be6a17ae45e6f83b5": "b4c577812664359964f0262b91e33b91",
".git/objects/cf/97ecc36239c59300cb0d90b13cbcae9bf6a7e8": "bed50be28960247d2c326064b9a8dab2",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/fb/c293d83839d533c87e3c0469f321fb31d955ae": "f42c6ac54d969a95cdf824eec341471f",
".git/objects/18/e88ad3997bd3c3f38287f8e32b438ca8ee7511": "aadab5dd4a83af85b4a00ad32a4a1fd7",
".git/objects/27/69cfa680ece03a20e2479c66509cb32da20388": "efab38133a60a6da490841c8af6fc814",
".git/objects/11/3f7966f286ca4836677af5ebfd0166321e962c": "1bfde4fd9caf81ed13b5a6ef88f74466",
".git/objects/7d/511b71bf5527e46b26a8bb51cda6e24f0b5015": "7f5a604160d62d50467d1d8fd8a9acda",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/16/89bb8d2bcb05a20620500fd414d89aed143b1a": "2f77ee68bfbfef740d4b0a7fc19be9d7",
".git/objects/8a/76bc059702ad962bbfc659cafa3a861d834617": "7085709c3925c780e2ea6604c29d118a",
".git/objects/19/e08e8775f3404bc0ba46a40b22269338d7e0ea": "1c5cf7789b8b8520f1b8f83c7bef5c6a",
".git/objects/19/a6c9cfe151eb67dcfc31721f961dd8450a09b4": "91e28073440264e6720a1f6dd798ac13",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/26/d6531fb307bf495e167183d93cefef5bd745dc": "88a95d791ec540227259cc6d5ea8d996",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/2a/382877c88c5e120831782eb950afd895059d73": "ecad0705c4c50f6d451f9cb5629611b2",
".git/objects/43/356c283107ac88ed29dab511e6d8441677e62b": "c54d1c41165e38347786ad26622b44f5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/5b/5406758f3e2f14792c9a6921a7190820ef885c": "2b39743b6ee410c5e21817db81f54b89",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e38044dff4ca5fcf174b9927271cd91aea494a": "ac8ed8fbc985f9c51a7db0ca878eb216",
".git/objects/dc/b14c00c35eff5d13dd9ec0cd7ab6f30b5aa364": "a157072790e57df72336854c2f081d85",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/5633873e069c034492e25b8dcb00c7cc9bb81b": "795808dd996544ebc92b28118cc29ec3",
".git/objects/db/0af7ea45cde4c60dd1b036fdea48cc316837bc": "ef89ba4a7d9351e5524d7620cb32c0f4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f9/2df79c0d1706ee323b1211523a5b95dd3cc923": "173a5434808eec3b458033d7ee70a784",
".git/objects/ff/231d9ea7c4145602e8953c53a2fdfbf84d7367": "202a34d424b65b7950610777ec3f2646",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/cb/6d244e7fffe9a3b864f98cfe7a73b5f4d83bcb": "86569539a460121972b54502336d5a40",
".git/objects/83/0f8f0476dcdad350f56bb775839de0f809df4c": "0c091e1a48f4a981a5c1adcbb7e83972",
".git/objects/70/7835ab2d1516d9886bba139dcdd46e9706c3a3": "6d3dba419267ea4e459940f7835dcea7",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/12/11cbd7023172c6d7eec1cdd21a8e1cdb13ac36": "3915c1dc0141408ba32a4822c34a1f39",
".git/objects/85/0af8c995bc71bc8613b3333c91a9943dd5ffac": "ab1b52ffa967f242f45e7a92fd8c8727",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/82/04e2927e93a12e08da06471b399130e6fcc36c": "2342840c3a0ec64c6c48fc0887b51c25",
".git/objects/14/043566e071ee93e3c1a8dcbb96fd9d7320f511": "a30d4560eb44e5ce7036865bf0110315",
".git/objects/8e/1330fd6e51dc3163d2abfe5082f20bddc066b1": "8d19ea14f7db59cddbedf9ebd9bb35ab",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ea2a6f8893b56e17103aa415f62f732b",
".git/logs/refs/heads/main": "6f2e3705734f9af289cc3370a10b4b5f",
".git/logs/refs/remotes/origin/main": "f487a833ff5613544aa6a73ad96846d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ca4eb9fa22e6447e5c27165d3bacd64b",
".git/refs/remotes/origin/main": "ca4eb9fa22e6447e5c27165d3bacd64b",
".git/index": "8231d13da0aacc34f8db95f9067571bc",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/NOTICES": "11d47d4ddb45c7f686b915604e98fab2",
"assets/FontManifest.json": "18aec6984f9b5ca4da90fa354e5600c6",
"assets/AssetManifest.bin.json": "0fc5cb9c3e0cc2ff620526c99ae823d1",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "5affe925ae3c60903d9b8572685d36d9",
"assets/fonts/MaterialIcons-Regular.otf": "60f480fffbfb3d202c3770ffdb8e6e9b",
"assets/assets/images/svg/karaji-logo.svg": "973ce1beb4d715d9aea83f34d3b721c3",
"assets/assets/images/svg/google_button.svg": "1793bd41838ba57812dca27fb57c7e68",
"assets/assets/images/svg/tile_icon.svg": "b189ccf18955dd02f7c96255fc4229ea",
"assets/assets/images/svg/logo.svg": "5fdac17db28d015699f8ce4124f075a4",
"assets/assets/images/svg/apple_button.svg": "9883c1f40fd7b2a09268212e1f7002f9",
"assets/assets/images/main/background.png": "2a113c6a64242e0d4fe77c2636c3bb38",
"assets/assets/images/splash_logo.png": "4989b59a1b810fd595ad1203ee00f126",
"assets/assets/fonts/RFDewi-Black.ttf": "afdb68b48c76811ebae99b2274129155",
"assets/assets/fonts/RFDewi-Semibold.ttf": "dc14c330e4912dd595f88ff902978c45",
"assets/assets/fonts/Helvetica-Neue-Regular.ttf": "53154fc364e3b971a9172cfb9955572c",
"assets/assets/fonts/RFDewi-Ultrabold.ttf": "7b074817d769a445b216f78cbaabc456",
"assets/assets/fonts/RFDewi-Regular.ttf": "bfb30c2677ae3236b6f893704c76f019",
"assets/assets/fonts/RFDewi-Thin.ttf": "798b664893954f51075a65edba994968",
"assets/assets/fonts/RFDewi-Bold.ttf": "b68b4f571874a966f4e4c3a01dd90d9e",
"assets/assets/fonts/Helvetica-Neue-Medium.ttf": "7041884185e13c6187390afe25b1e9e7",
"assets/assets/fonts/RFDewi-Ultralight.ttf": "3771adf0ffd66a930da44b0f43d66d5f",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
