// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(l.call(e,r)||i.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e};var c=r;function _(e){return e!=e}function f(e){return Math.abs(e)}var p=Number.POSITIVE_INFINITY;function s(e,r,t,n,a){var o,u,l,i,c,s,b,y;if(t=arguments[(o=arguments.length)-3],n=arguments[o-2],a=arguments[o-1],3===o)return t[a]=p,t[a+n]=p,t;if(4===o)return i=f(e),t[a]=i,t[a+n]=i,t;if(5===o)return _(e)||_(r)?(t[a]=NaN,t[a+n]=NaN,t):(i=f(e))<(c=f(r))?(t[a]=i,t[a+n]=c,t):(t[a]=c,t[a+n]=i,t);for(u=p,l=0,y=0;y<o-3;y++){if(_(b=arguments[y]))return t[a]=NaN,t[a+n]=NaN,t;(s=f(b))<u&&(u=s),s>l&&(l=s)}return t[a]=u,t[a+n]=l,t}function b(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return e.push([0,0],1,0),s.apply(null,e)}c(b,"assign",{configurable:!1,enumerable:!1,writable:!1,value:s});export{s as assign,b as default};
//# sourceMappingURL=mod.js.map
