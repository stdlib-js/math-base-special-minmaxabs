"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=m(function(h,x){
var c=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function g(e,r,a,u,i){var n,s;return c(e)||c(r)?(a[i]=NaN,a[i+u]=NaN,a):(n=q(e),s=q(r),n<s?(a[i]=n,a[i+u]=s,a):(a[i]=s,a[i+u]=n,a))}x.exports=g
});var p=m(function(j,b){
var t=v();function l(e,r){return t(e,r,[0,0],1,0)}b.exports=l
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=v(),N=p();y(N,"assign",O);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
