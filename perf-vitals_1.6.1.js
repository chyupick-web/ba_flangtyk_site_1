!function(){"use strict";var t,e,n=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:e,delta:0,entries:[],id:n(),isFinal:!1}},a=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},r=!1,s=!1,o=function(t){r=!t.persisted},u=function(){addEventListener("pagehide",o),addEventListener("beforeunload",(function(){}))},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(u(),s=!0),addEventListener("visibilitychange",(function(e){var n=e.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:n,isUnloading:r})}),{capture:!0,once:e})},d=function(t,e,n,i){var a;return function(){n&&e.isFinal&&n.disconnect(),e.value>=0&&(i||e.isFinal||"hidden"===document.visibilityState)&&(e.delta=e.value-(a||0),(e.delta||e.isFinal||void 0===a)&&(t(e),a=e.value))}},p=function(){return void 0===t&&(t="hidden"===document.visibilityState?0:1/0,c((function(e){var n=e.timeStamp;return t=n}),!0)),{get timeStamp(){return t}}},l=function(){return e||(e=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(e){addEventListener(e,t,{once:!0,passive:!0,capture:!0})}))}))),e};var f,v,m=/\s+/g,g=window,h=[];function y(){var t=g.rapidInstance;if(t)for(f=f||t.getRapidAttribute("keys"),v=v||t.getRapidAttribute("spaceid");h.length;)b(h.shift())}function b(t){var e=t.entries,n=void 0===e?[]:e,i=t.isFinal,a=t.name,r=t.value,s=g.rapidInstance,o="CLS"===a?parseFloat(r.toFixed(3)):Math.round(r),u="perf_"+a.toLowerCase();if(s&&s.beaconPerformanceData&&i){for(var c=n.length,d=n[c-1]||{},p=c-2;p>=0;p--)n[p].value>d.value&&(d=n[p]);var l=d.element||d.target||d.sources&&d.sources[0]&&d.sources[0].node,h={};h[u]=o,l&&(h[u+"_elmt"]=(l.nodeName||"").toLowerCase(),h[u+"_id"]=l.id||l.className||"",h[u+"_slk"]=(l.innerText||l.alt||l.title||"").replace(m," ").substr(0,150)),d.url&&(h[u+"_url"]=d.url);var y=s.getRapidAttribute("keys"),b=s.getRapidAttribute("spaceid");if(y&&f)for(var F in y)y.hasOwnProperty(F)&&!f.hasOwnProperty(F)&&(f[F]="");s.setRapidAttribute({spaceid:v}),s.beaconPerformanceData({perf_usertime:{utm:h}},f),s.setRapidAttribute({spaceid:b})}}function F(t){g.rapidInstance?(y(),b(t)):h.push(t)}!function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("CLS",0),s=function(t){t.hadRecentInput||(r.value+=t.value,r.entries.push(t),e())},o=a("layout-shift",s);o&&(e=d(t,r,o,n),c((function(t){var n=t.isUnloading;o.takeRecords().map(s),n&&(r.isFinal=!0),e()})))}(F),function(t){var e,n=i("FCP"),r=p(),s=a("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<r.timeStamp&&(n.value=t.startTime,n.isFinal=!0,n.entries.push(t),e())}));s&&(e=d(t,n,s))}(F),function(t){var e=i("FID"),n=p(),r=function(t){t.startTime<n.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,o())},s=a("first-input",r),o=d(t,e,s);s?c((function(){s.takeRecords().map(r),s.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,i){i.timeStamp<n.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],o())}))}(F),function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("LCP"),s=p(),o=function(t){var n=t.startTime;n<s.timeStamp?(r.value=n,r.entries.push(t)):r.isFinal=!0,e()},u=a("largest-contentful-paint",o);if(u){e=d(t,r,u,n);var f=function(){r.isFinal||(u.takeRecords().map(o),r.isFinal=!0,e())};l().then(f),c(f,!0)}}(F),function(t,e,n){try{var i=window.performance,a=i.getEntriesByType&&i.getEntriesByType("navigation")[0]||{entryType:"navigation",startTime:0},r=i.timing||{};!a[n]&&r[n]&&(a[n]=Math.max(r[n]-r.navigationStart,0));var s=a[n];s>0&&t({delta:s,entries:[a],id:e,isFinal:!0,name:e,value:s})}catch(t){}}(F,"TTFB","responseStart"),g.addEventListener&&g.addEventListener("DOMContentLoaded",y)}();
