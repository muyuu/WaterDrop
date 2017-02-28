var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/WaterDrop/',
  '/WaterDrop/2015/04/01/hello-world/index.html',
  '/WaterDrop/2015/04/01/open-new-blog/index.html',
  '/WaterDrop/2015/04/02/This-blog-made-Hexo/index.html',
  '/WaterDrop/2017/02/24/restart-this-blog/index.html',
  '/WaterDrop/2017/02/26/How-to-use-HTTPS-for-GitHub-pages/index.html',
  '/WaterDrop/2017/02/26/update-npm-commands/index.html',
  '/WaterDrop/2017/02/28/Listen-Movie/index.html',
  '/WaterDrop/archives/2015/04/index.html',
  '/WaterDrop/archives/2015/index.html',
  '/WaterDrop/archives/2017/02/index.html',
  '/WaterDrop/archives/2017/index.html',
  '/WaterDrop/archives/index.html',
  '/WaterDrop/atom.xml',
  '/WaterDrop/css/style.css',
  '/WaterDrop/images/icon-reorder@2x.png',
  '/WaterDrop/images/rss.svg',
  '/WaterDrop/images/search.svg',
  '/WaterDrop/index.html',
  '/WaterDrop/js/script.js',
  '/WaterDrop/tags/GitHub/index.html',
  '/WaterDrop/tags/blog/index.html',
  '/WaterDrop/tags/english/index.html'
];

self.addEventListener('install', function(event) {
  // インストール処理
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // キャッシュがあったのでそのレスポンスを返す
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});