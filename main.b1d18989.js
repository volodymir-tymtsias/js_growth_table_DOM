parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return l(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=document.querySelector(".append-row"),i=document.querySelector(".remove-row"),a=document.querySelector(".append-column"),d=document.querySelector(".remove-column"),u=document.querySelector(".field").rows;c.addEventListener("click",function(){u[u.length-1].after(u[u.length-1].cloneNode(!0)),10===u.length&&(c.disabled=!0),3===u.length&&(i.disabled=!1)}),i.addEventListener("click",function(){u[u.length-1].remove(),2===u.length&&(i.disabled=!0),9===u.length&&(c.disabled=!1)}),a.addEventListener("click",function(){e(u).forEach(function(e){return e.lastElementChild.after(e.lastElementChild.cloneNode(!0))}),10===u[0].cells.length&&(a.disabled=!0),3===u[0].cells.length&&(d.disabled=!1)}),d.addEventListener("click",function(){e(u).forEach(function(e){return e.lastElementChild.remove()}),2===u[0].cells.length&&(d.disabled=!0),9===u[0].cells.length&&(a.disabled=!1)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b1d18989.js.map