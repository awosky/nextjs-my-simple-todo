if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(n[a])return;let o={};const t=e=>s(e,a),r={module:{uri:a},exports:o,require:t};n[a]=Promise.all(i.map((e=>r[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-e13f827e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TQxAjpg49jbTU27S1p4-0/_buildManifest.js",revision:"aa5ab44e7629c68f4c7a06778b982c6b"},{url:"/_next/static/TQxAjpg49jbTU27S1p4-0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/339-a0967dfd3ce88836.js",revision:"a0967dfd3ce88836"},{url:"/_next/static/chunks/7112840a-32c09ee861797cbe.js",revision:"32c09ee861797cbe"},{url:"/_next/static/chunks/79-052470261a9dce91.js",revision:"052470261a9dce91"},{url:"/_next/static/chunks/d70ca943-2b264d0d826eddbe.js",revision:"2b264d0d826eddbe"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-7a46f4b6af56c1ba.js",revision:"7a46f4b6af56c1ba"},{url:"/_next/static/chunks/pages/_app-999e9408f4c3b81b.js",revision:"999e9408f4c3b81b"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-b78d447eff3ea1a5.js",revision:"b78d447eff3ea1a5"},{url:"/_next/static/chunks/pages/login-1801d67fdebd8385.js",revision:"1801d67fdebd8385"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-87b3a303122f2f0d.js",revision:"87b3a303122f2f0d"},{url:"/_next/static/css/28efa5e702582769.css",revision:"28efa5e702582769"},{url:"/_next/static/css/9922115d943d7729.css",revision:"9922115d943d7729"},{url:"/_next/static/css/cd147398ca1e3cda.css",revision:"cd147398ca1e3cda"},{url:"/_next/static/media/1c57ca6f5208a29b.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/5647e4c23315a2d2.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/7be645d133f3ee22.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/cff529cd86cc0276.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/favicon.ico",revision:"477893a1cc4838b9af22da7702952a4d"},{url:"/icons/android-icon-144x144.png",revision:"9d9939e52827e5a7e4af23c2f2db77a4"},{url:"/icons/android-icon-192x192.png",revision:"29a050428ccc611f378153068a86884d"},{url:"/icons/android-icon-36x36.png",revision:"af2bfb0c46cd6046c53aa0b975268ab8"},{url:"/icons/android-icon-48x48.png",revision:"ccecad54f03686f66ca59adbb4b84c89"},{url:"/icons/android-icon-72x72.png",revision:"90cd27631804f96a54b60e2b88a657d7"},{url:"/icons/android-icon-96x96.png",revision:"9e472c17018e1eb1b9ab0274df2c9b5e"},{url:"/icons/apple-icon-114x114.png",revision:"7f6322705189a9faa77d6aad0476bd22"},{url:"/icons/apple-icon-120x120.png",revision:"ae9951fc45defe1a5f1b6ed08c53bec2"},{url:"/icons/apple-icon-144x144.png",revision:"9d9939e52827e5a7e4af23c2f2db77a4"},{url:"/icons/apple-icon-152x152.png",revision:"83b3f5726b5cf659320124871c2bb9fd"},{url:"/icons/apple-icon-180x180.png",revision:"8cb9d75960274d5d033d75b6be1e36b5"},{url:"/icons/apple-icon-57x57.png",revision:"c6dff39b72313fae9aca50d73f835752"},{url:"/icons/apple-icon-60x60.png",revision:"e5389607aa2992969f02a03b22a9cede"},{url:"/icons/apple-icon-72x72.png",revision:"90cd27631804f96a54b60e2b88a657d7"},{url:"/icons/apple-icon-76x76.png",revision:"edba1424decf11e6e1e769e757f9829e"},{url:"/icons/apple-icon-precomposed.png",revision:"81185c546c14d7579119f947d686b0f5"},{url:"/icons/apple-icon.png",revision:"81185c546c14d7579119f947d686b0f5"},{url:"/icons/favicon-16x16.png",revision:"62977617562ea3717d2085cd93876bb3"},{url:"/icons/favicon-32x32.png",revision:"bd70212c915034c037b29e1655fcbb81"},{url:"/icons/favicon-96x96.png",revision:"9e472c17018e1eb1b9ab0274df2c9b5e"},{url:"/icons/ms-icon-144x144.png",revision:"9d9939e52827e5a7e4af23c2f2db77a4"},{url:"/icons/ms-icon-150x150.png",revision:"3ba550577e2f4a7c24face22ad64d7bc"},{url:"/icons/ms-icon-310x310.png",revision:"7bbce5e44b7482c3505ab25c19b3c4d8"},{url:"/icons/ms-icon-70x70.png",revision:"55955a0f876851fe9d2582f78cbdf4b2"},{url:"/images/empty.svg",revision:"7a59611582e5a9b46d05304a2239fd45"},{url:"/manifest.json",revision:"d520f32a65af09d21567d069f930e0e6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));