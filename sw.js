//creating a constant for static cache
const statCache='statv19';
//creating a constant for dynamic cache
const dynaCache='dynav1';

//storing shell/static assets in an array
const assets=['/CB010292/','/CB010292/index.html','/CB010292/activities.html','/CB010292/fallback.html','styles/fallback.css','images/fallb.png', '/CB010292/donations.html', '/CB010292/food.html', '/CB010292/heritage.html', '/CB010292/hotels.html', '/CB010292/kandy.html', '/CB010292/sigirya.html', '/CB010292/styles/index.css', '/CB010292/styles/activities.css', '/CB010292/styles/beaches.css', '/CB010292/styles/donations.css', '/CB010292/wild.html', '/CB010292/styles/food.css', '/CB010292/styles/heritage.css', '/CB010292/styles/hotels.css', '/CB010292/styles/kandy.css', '/CB010292/styles/main.css', '/CB010292/styles/sigirya.css', '/CB010292/styles/wildlife.css','/CB010292/favicons/favicon-16x16.png','/CB010292/favicons/favicon-32x32.png','/CB010292/manifest.json', '/CB010292/main.js','/CB010292/styles/bg-images/wild-cropped.jpg','/CB010292/styles/bg-images/beach4.jpg','/CB010292/styles/bg-images/bg.webp','/CB010292/styles/bg-images/d4.jpg','/CB010292/styles/bg-images/h4.jpg','/CB010292/styles/bg-images/heritage bg.jpg','/CB010292/styles/bg-images/home2.jpg','/CB010292/styles/bg-images/home3.webp','/CB010292/styles/bg-images/main3.jpg','/CB010292/styles/bg-images/sl.jpg','/CB010292/styles/bg-images/toothrelic.jpg','/CB010292/styles/bg-images/wild.jpg','/CB010292/imageswebp/0c.webp','/CB010292/imageswebp/4.webp','/CB010292/imageswebp/14.webp','/CB010292/imageswebp/a1.webp','/CB010292/imageswebp/a6.webp','/CB010292/imageswebp/a7.webp','/CB010292/imageswebp/b4.webp','/CB010292/imageswebp/backpack.webp','/CB010292/imageswebp/beach4.webp','/CB010292/imageswebp/bundala.webp','/CB010292/imageswebp/bundala1.webp','/CB010292/imageswebp/bundala2.webp','/CB010292/imageswebp/bundala3.webp','/CB010292/imageswebp/bundala4.webp','/CB010292/imageswebp/camp.webp','/CB010292/imageswebp/cart.webp','/CB010292/imageswebp/cin.webp','/CB010292/imageswebp/dilmah.webp','/CB010292/imageswebp/ele.webp','/CB010292/imageswebp/flamingos.webp','/CB010292/imageswebp/frog.webp','/CB010292/imageswebp/gallery1.webp','/CB010292/imageswebp/gallery2.webp','/CB010292/imageswebp/gallery3.webp','/CB010292/imageswebp/gallery4.webp','/CB010292/imageswebp/gallery5.webp','/CB010292/imageswebp/gallery6.webp','/CB010292/imageswebp/gallery7.webp','/CB010292/imageswebp/gallery8.webp','/CB010292/imageswebp/h1.webp','/CB010292/imageswebp/h5.webp','/CB010292/imageswebp/hopper.webp','/CB010292/imageswebp/kandyh1.webp','/CB010292/imageswebp/kandyh2.webp','/CB010292/imageswebp/kandyh3.webp','/CB010292/imageswebp/kandyy.webp','/CB010292/imageswebp/kingsbury.webp','/CB010292/imageswebp/kiribath.webp','/CB010292/imageswebp/kottu.webp','/CB010292/imageswebp/lanur.webp','/CB010292/imageswebp/leopard.webp','/CB010292/imageswebp/leopardd.webp','/CB010292/imageswebp/leopardd.webp','/CB010292/imageswebp/lipton.webp','/CB010292/imageswebp/location222.webp','/CB010292/imageswebp/logo-resized.webp','/CB010292/imageswebp/logo-resized2.webp','/CB010292/imageswebp/logo.webp','/CB010292/imageswebp/logores1.webp','/CB010292/imageswebp/mackwoods.webp','/CB010292/imageswebp/mainn.webp','/CB010292/imageswebp/mask.webp','/CB010292/imageswebp/ocean.webp','/CB010292/imageswebp/raft.webp','/CB010292/imageswebp/resizedlogo.webp','/CB010292/imageswebp/rice.webp','/CB010292/imageswebp/sari.webp','/CB010292/imageswebp/sarong.webp','/CB010292/imageswebp/sentrance.webp','/CB010292/imageswebp/sentrance.webp','/CB010292/imageswebp/sinha1.webp','/CB010292/imageswebp/sinha3.webp','/CB010292/imageswebp/sinha4.webp','/CB010292/imageswebp/slopes.webp','/CB010292/imageswebp/slothyala.webp','/CB010292/imageswebp/spaa.webp','/CB010292/imageswebp/statue.webp','/CB010292/imageswebp/suurf.webp','/CB010292/imageswebp/tea2.webp','/CB010292/imageswebp/teaa.webp','/CB010292/imageswebp/toothrelic.webp','/CB010292/imageswebp/tuktuk.webp','/CB010292/imageswebp/u2.webp','/CB010292/imageswebp/u7.webp','/CB010292/imageswebp/u8.webp','/CB010292/imageswebp/unesco.webp','/CB010292/imageswebp//CB010292/imageswebp/yalaturt.webp/viper.webp','/CB010292/imageswebp/waterfall1.webp','/CB010292/imageswebp/WHALE.webp','/CB010292/imageswebp/yala-sri-lanka.webp','/CB010292/imageswebp/yala3.webp','/CB010292/imageswebp/yaladeers.webp','/CB010292/imageswebp/yalamonkey.webp','/CB010292/imageswebp/yalapea.webp','imageswebp/yalaturt.webp'];

//the install event
self.addEventListener('install',(evt)=>{
    //console.log("Service worker installed.");
    //install event should wait until whatever inside evt.waitUntil() finishes.
    evt.waitUntil(
        //open static cache
        caches.open(statCache)
    .then((cache)=>{
        console.log("Caching assets...");
        //adding all assets in assets array into cache
        cache.addAll(assets);
    })
    );
    
});

//The activate event
self.addEventListener('activate',(evt)=>{
    //console.log("Service worker is active!");
    evt.waitUntil(
        //accessing all versions of caches available currently
        caches.keys()
        .then((keys)=>{
            //console.log(keys);
            //going through the list pf caches, checking whether the cache name is equal to current cache version/s:static and dynamic and getting rid of any old cache versions
            return Promise.all(
                keys.filter(key=>key!==statCache && key!==dynaCache)
                .map(key=>caches.delete(key))
            );

        })
    );
});

//The fetch event handler
self.addEventListener('fetch',(evt)=>{
    //console.log("Fetch event",evt);
    //interrupt the normal request and respond with a custom response
    evt.respondWith(
        //check if the resource exists in cache
        caches.match(evt.request)
        .then((cacheRes)=>{
            //return from cache if it is there in cache. or else fetch from server
            return cacheRes || fetch(evt.request)
            //when fetching from server, add the request and response to dynamic cache to access the resource/s when offline
            .then(fetchRes=>{
                return caches.open(dynaCache)
                .then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes;
                });
            });
            //returning the fallback page if the resource is not available in any of the caches
        }).catch(()=>{
            //check whether the request url contains .html in it
            if(evt.request.url.indexOf('.html')>-1){
                return caches.match('fallback.html')
            }
            })
    );
})


