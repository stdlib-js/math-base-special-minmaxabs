"use strict";var m=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(r){throw (a=0, r)}};};var v=m(function(h,x){
var c=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function g(e,a,r,u,i){var n,s;return c(e)||c(a)?(r[i]=NaN,r[i+u]=NaN,r):(n=q(e),s=q(a),n<s?(r[i]=n,r[i+u]=s,r):(r[i]=s,r[i+u]=n,r))}x.exports=g
});var p=m(function(j,b){
var t=v();function l(e,a){return t(e,a,[0,0],1,0)}b.exports=l
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=v(),N=p();y(N,"assign",O);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
