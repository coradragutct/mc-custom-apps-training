(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"./node_modules/@flopflip/sessionstorage-cache/dist/flopflip-sessionstorage-cache.esm.js":function(e,t,n){"use strict";n.r(t),n.d(t,"version",(function(){return s}));var s="1.0.13";t.default=function createCache(e){return{get:function get(t){var n=sessionStorage.getItem("".concat(e.prefix,"__").concat(t));return n?JSON.parse(n):null},set:function set(t,n){try{return sessionStorage.setItem("".concat(e.prefix,"__").concat(t),JSON.stringify(n)),!0}catch(s){return!1}},unset:function unset(t){sessionStorage.removeItem("".concat(e.prefix,"__").concat(t))}}}}}]);
//# sourceMappingURL=52.52.9de5ff01f3f15d0a77e3.js.map