// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}function n(r){return Math.abs(r)}var u=Number.POSITIVE_INFINITY;function t(t,e,f){var a,N,i,o,p,h,l,s;if(2===(a=arguments.length))return o=n(e),t[0]=o,t[1]=o,t;if(3===a)return r(e)||r(f)?(t[0]=NaN,t[1]=NaN,t):(o=n(e))<(p=n(f))?(t[0]=o,t[1]=p,t):(t[0]=p,t[1]=o,t);for(N=u,i=0,s=0;s<a;s++){if(r(l=arguments[s]))return t[0]=NaN,t[1]=NaN,t;(h=n(l))<N&&(N=h),h>i&&(i=h)}return t[0]=N,t[1]=i,t}function e(r,n,u){var e,f,a,N;if(1===(a=arguments.length))return t([0,0],r);if(e="number"==typeof arguments[0],2===a)return e?t([0,0],r,n):t(r,n);if(3===a)return e?t([0,0],r,n,u):t(r,n,u);for(e?((f=[]).push([0,0]),N=0):((f=[]).push(arguments[0]),N=1);N<a;N++)f.push(arguments[N]);return t.apply(null,f)}export{e as default};
//# sourceMappingURL=mod.js.map
