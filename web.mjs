#!/usr/bin/env node
"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
    function $mol_offline() { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.entries(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i][1] === 'string') ? '%s: %s\n' : '%s: %o\n';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl.trim(), style, ...[].concat(...chunks));
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    function $mol_offline_web() {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                ;
                self.skipWaiting();
            });
            self.addEventListener('activate', (event) => {
                ;
                self.clients.claim();
                $$.$mol_log3_done({
                    place: '$mol_offline',
                    message: 'Activated',
                });
            });
            self.addEventListener('fetch', (event) => {
                const request = event.request;
                if (blacklist.has(request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                if (request.method !== 'GET')
                    return;
                if (!/^https?:/.test(request.url))
                    return;
                if (/\?/.test(request.url))
                    return;
                if (request.cache === 'no-store')
                    return;
                const fetch_data = () => fetch(new Request(request, { credentials: 'omit' })).then(response => {
                    if (response.status !== 200)
                        return response;
                    event.waitUntil(caches.open('$mol_offline').then(cache => cache.put(request, response)));
                    return response.clone();
                });
                const enrich = (response) => {
                    if (!response.status)
                        return response;
                    const headers = new Headers(response.headers);
                    headers.set("$mol_offline", "");
                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers,
                    });
                };
                const fresh = request.cache === 'force-cache' ? null : fetch_data();
                if (fresh)
                    event.waitUntil(fresh.then(enrich));
                event.respondWith(caches.match(request).then(cached => request.cache === 'no-cache' || request.cache === 'reload'
                    ? (cached
                        ? fresh
                            .then(actual => {
                            if (actual.status === cached.status)
                                return actual;
                            throw new Error(`${actual.status}${actual.statusText ? ` ${actual.statusText}` : ''}`, { cause: actual });
                        })
                            .catch((err) => {
                            const cloned = cached.clone();
                            const message = `${err.cause instanceof Response ? '' : '500 '}${err.message} $mol_offline fallback to cache`;
                            cloned.headers.set('$mol_offline_remote_status', message);
                            return cloned;
                        })
                        : fresh)
                    : (cached || fresh || fetch_data())).then(enrich));
            });
            self.addEventListener('beforeinstallprompt', (event) => event.prompt());
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            navigator.serviceWorker.register('web.js').then(reg => {
            });
        }
    }
    $.$mol_offline_web = $mol_offline_web;
    $.$mol_offline = $mol_offline_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    try {
        $mol_offline();
    }
    catch (error) {
        console.error(error);
    }
})($ || ($ = {}));


export default $
//# sourceMappingURL=web.js.map
