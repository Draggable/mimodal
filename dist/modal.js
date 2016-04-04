/*!
 * momodal - https://kevinchappell.github.io/momodal
 * Version: 0.0.1
 * Author: Kevin Chappell
 */
!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="dist/",e(0)}([/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(){var t=this,e={modal:window.momodal.dialog.bind(t),dialog:window.momodal.confirm.bind(t)},n={};for(var o in t.dataset)t.dataset.hasOwnProperty(o)&&-1!==o.indexOf("modal")&&(n[o]=t.dataset[o]);e[t.dataset.toggle](n)}n(1);var a=n(5),i=o(a);window.momodal=new i["default"];for(var u=document.querySelectorAll("[data-toggle]"),s=0;s<u.length;s++)u[s].addEventListener("click",r)},/*!******************************!*\
  !*** ./src/sass/_modal.scss ***!
  \******************************/
function(t,e){},,,,/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(6),a=o(r),i=n(21),u=o(i),s=n(22),c=o(s),l=n(25),f=new l.Helpers,d=new l.Events,p=function(){function t(e){(0,u["default"])(this,t);var n=this;n.defaults={buttons:[{tag:"button",content:"No",attrs:{className:"btn btn-sm btn-danger"},action:function(){n.closeDialog()}},{tag:"button",content:"Yes",attrs:{className:"btn btn-sm btn-success"},action:function(){n.closeDialog()}}],coords:{pageX:Math.max(document.documentElement.clientWidth,window.innerWidth||0)/2,pageY:Math.max(document.documentElement.clientHeight,window.innerHeight||0)/2},className:"minimal-modal",modalTransitionSpeed:500,modalStyle:"simple",prefix:"modal-"},console.log(d),n.opts=(0,a["default"])(n.defaults,e)}return(0,c["default"])(t,[{key:"getCoords",value:function(t){var e=t.getBoundingClientRect(),n=document.body.getBoundingClientRect();return{pageX:e.left+e.width/2,pageY:e.top-n.top-12}}},{key:"showOverlay",value:function(t){var e=this,n=t.className+"-overlay",o=f.markup({tag:"div",attrs:{className:n}});if(o.classList.add(window.momodal.opts.prefix+t.modalStyle),document.body.appendChild(o),"fade"===t.modalStyle?f.fadeIn(o):f.setVisible(o),t.modalTimeout){var r=Number(t.modalTimeout);setTimeout(function(){"fade"===t.modalStyle?f.fadeOut(o):o.remove()},r)}return o.onclick=function(r){r.target.classList.contains(n)&&e.closeDialog(o,t)},o}},{key:"closeDialog",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?this.opts:arguments[1];t=t||document.querySelector("."+e.className+"-overlay"),t.classList.remove(e.prefix+"visible"),t.classList.add(e.prefix+"removing"),"fade"===e.modalStyle?f.fadeOut(t):t.remove(),document.dispatchEvent(d.modalClosed)}},{key:"dialog",value:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=(0,a["default"])({},window.momodal.defaults,t),n=[],o=[],r=window.momodal.showOverlay(e);if(e.modalHeader&&n.push(f.markup({tag:"header",className:e.className+"-header",content:e.modalHeader})),e.modalContent&&n.push(f.markup({tag:"div",className:e.className+"-content",content:e.modalContent})),e.confirm){for(var i,u=0;u<e.buttons.length;u++){var s=f.markup(e.buttons[u]);e.buttons[u].action&&"function"==typeof e.buttons[u].action&&(s.onclick=e.buttons[u].action),o.push(s)}i=f.markup({tag:"div",attrs:{className:"btn-group"},content:o}),n.push(f.markup({tag:"footer",className:e.className+"-footer",content:i}))}var c=f.markup({tag:"div",content:n,attrs:{className:e.className}});return e.coords?c.style.position="fixed":c.classList.add("positioned"),c.style.left=e.coords.pageX+"px",c.style.top=e.coords.pageY+"px",r.appendChild(c),e.confirm&&o[e.buttons.length-1].focus(),document.dispatchEvent(d.modalOpened),c}},{key:"confirm",value:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=(0,a["default"])({},window.momodal.defaults,t);return e.confirm=!0,window.momodal.dialog(e)}}]),t}();e["default"]=p},/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/assign.js ***!
  \**************************************************/
function(t,e,n){t.exports={"default":n(7),__esModule:!0}},/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/assign.js ***!
  \***********************************************/
function(t,e,n){n(8),t.exports=n(11).Object.assign},/*!********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.assign.js ***!
  \********************************************************/
function(t,e,n){var o=n(9);o(o.S+o.F,"Object",{assign:n(14)})},/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.export.js ***!
  \***********************************************/
function(t,e,n){var o=n(10),r=n(11),a=n(12),i="prototype",u=function(t,e,n){var s,c,l,f=t&u.F,d=t&u.G,p=t&u.S,m=t&u.P,y=t&u.B,v=t&u.W,g=d?r:r[e]||(r[e]={}),h=d?o:p?o[e]:(o[e]||{})[i];d&&(n=e);for(s in n)c=!f&&h&&s in h,c&&s in g||(l=c?h[s]:n[s],g[s]=d&&"function"!=typeof h[s]?n[s]:y&&c?a(l,o):v&&h[s]==l?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[i]=t[i],e}(l):m&&"function"==typeof l?a(Function.call,l):l,m&&((g[i]||(g[i]={}))[s]=l))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,t.exports=u},/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.global.js ***!
  \***********************************************/
function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.core.js ***!
  \*********************************************/
function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.ctx.js ***!
  \********************************************/
function(t,e,n){var o=n(13);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.a-function.js ***!
  \***************************************************/
function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.object-assign.js ***!
  \******************************************************/
function(t,e,n){var o=n(15),r=n(16),a=n(18);t.exports=n(20)(function(){var t=Object.assign,e={},n={},o=Symbol(),r="abcdefghijklmnopqrst";return e[o]=7,r.split("").forEach(function(t){n[t]=t}),7!=t({},e)[o]||Object.keys(t({},n)).join("")!=r})?function(t,e){for(var n=r(t),i=arguments,u=i.length,s=1,c=o.getKeys,l=o.getSymbols,f=o.isEnum;u>s;)for(var d,p=a(i[s++]),m=l?c(p).concat(l(p)):c(p),y=m.length,v=0;y>v;)f.call(p,d=m[v++])&&(n[d]=p[d]);return n}:Object.assign},/*!****************************************!*\
  !*** ./~/core-js/library/modules/$.js ***!
  \****************************************/
function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.to-object.js ***!
  \**************************************************/
function(t,e,n){var o=n(17);t.exports=function(t){return Object(o(t))}},/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.defined.js ***!
  \************************************************/
function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.iobject.js ***!
  \************************************************/
function(t,e,n){var o=n(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.cof.js ***!
  \********************************************/
function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},/*!**********************************************!*\
  !*** ./~/core-js/library/modules/$.fails.js ***!
  \**********************************************/
function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},/*!***************************************************!*\
  !*** ./~/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************/
function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},/*!************************************************!*\
  !*** ./~/babel-runtime/helpers/createClass.js ***!
  \************************************************/
function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(23),a=o(r);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,a["default"])(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()},/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
function(t,e,n){t.exports={"default":n(24),__esModule:!0}},/*!********************************************************!*\
  !*** ./~/core-js/library/fn/object/define-property.js ***!
  \********************************************************/
function(t,e,n){var o=n(15);t.exports=function(t,e,n){return o.setDesc(t,e,n)}},/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Events=e.Helpers=void 0;var r=n(26),a=o(r),i=n(21),u=o(i),s=n(22),c=o(s);e.Helpers=function(){function t(){(0,u["default"])(this,t)}return(0,c["default"])(t,[{key:"hyphenCase",value:function(t){return t=t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()}),t.replace(/\s/g,"-").replace(/^-+/g,"")}},{key:"setVisible",value:function(t){t.style.opacity=1,t.style.display="block"}},{key:"safeAttrName",value:function(t){var e={className:"class"};return e[t]||this.hyphenCase(t)}},{key:"fadeOut",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?500:arguments[1],n=1/(e/60);t.style.opacity=1,function o(){var e=Number(t.style.opacity)-n;e>0?(t.style.opacity=e,requestAnimationFrame(o)):t.remove()}()}},{key:"fadeIn",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?500:arguments[1],n=this,o=1/(e/60);t.classList.contains("modal-hidden")&&t.classList.remove("modal-hidden"),t.style.opacity=0,t.style.display="block",function r(){var e=Number(t.style.opacity)+o;1>e?(t.style.opacity=e,requestAnimationFrame(r)):n.setVisible(t)}()}},{key:"markup",value:function(t){var e=void 0,n=document.createElement(t.tag),o=function(t){return Array.isArray(t)?"array":"undefined"==typeof t?"undefined":(0,a["default"])(t)},r={string:function(t){n.innerHTML=t},object:function(t){return n.appendChild(t)},array:function(t){for(var n=0;n<t.length;n++)e=o(t[n]),r[e](t[n])}};if(t.attrs)for(var i in t.attrs)if(t.attrs.hasOwnProperty(i)&&t.attrs[i]){var u=this.safeAttrName(i);n.setAttribute(u,t.attrs[i])}return e=o(t.content),t.content&&r[e].call(this,t.content),n}}]),t}(),e.Events=function(){function t(){(0,u["default"])(this,t),this.modalOpened=new Event("modalOpened"),this.modalClosed=new Event("modalClosed")}return(0,c["default"])(t,[{key:"resize",value:function e(){function e(){r||(r=!0,window.requestAnimationFrame?window.requestAnimationFrame(t):setTimeout(t,66))}function t(){o.forEach(function(t){t()}),r=!1}function n(t){t&&o.push(t)}var o=[],r=!1;return{add:function(t){o.length||window.addEventListener("resize",e),n(t)}}}}]),t}()},/*!*******************************************!*\
  !*** ./~/babel-runtime/helpers/typeof.js ***!
  \*******************************************/
function(t,e,n){"use strict";var o=n(27)["default"];e["default"]=function(t){return t&&t.constructor===o?"symbol":typeof t},e.__esModule=!0},/*!*******************************************!*\
  !*** ./~/babel-runtime/core-js/symbol.js ***!
  \*******************************************/
function(t,e,n){t.exports={"default":n(28),__esModule:!0}},/*!**********************************************!*\
  !*** ./~/core-js/library/fn/symbol/index.js ***!
  \**********************************************/
function(t,e,n){n(29),n(47),t.exports=n(11).Symbol},/*!*************************************************!*\
  !*** ./~/core-js/library/modules/es6.symbol.js ***!
  \*************************************************/
function(t,e,n){"use strict";var o=n(15),r=n(10),a=n(30),i=n(31),u=n(9),s=n(32),c=n(20),l=n(35),f=n(36),d=n(38),p=n(37),m=n(39),y=n(41),v=n(42),g=n(43),h=n(44),b=n(40),w=n(34),x=o.getDesc,S=o.setDesc,O=o.create,_=y.get,k=r.Symbol,N=r.JSON,E=N&&N.stringify,j=!1,P=p("_hidden"),M=o.isEnum,C=l("symbol-registry"),D=l("symbols"),A="function"==typeof k,T=Object.prototype,F=i&&c(function(){return 7!=O(S({},"a",{get:function(){return S(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=x(T,e);o&&delete T[e],S(t,e,n),o&&t!==T&&S(T,e,o)}:S,L=function(t){var e=D[t]=O(k.prototype);return e._k=t,i&&j&&F(T,t,{configurable:!0,set:function(e){a(this,P)&&a(this[P],t)&&(this[P][t]=!1),F(this,t,w(1,e))}}),e},H=function(t){return"symbol"==typeof t},q=function(t,e,n){return n&&a(D,e)?(n.enumerable?(a(t,P)&&t[P][e]&&(t[P][e]=!1),n=O(n,{enumerable:w(0,!1)})):(a(t,P)||S(t,P,w(1,{})),t[P][e]=!0),F(t,e,n)):S(t,e,n)},I=function(t,e){h(t);for(var n,o=v(e=b(e)),r=0,a=o.length;a>r;)q(t,n=o[r++],e[n]);return t},W=function(t,e){return void 0===e?O(t):I(O(t),e)},B=function(t){var e=M.call(this,t);return e||!a(this,t)||!a(D,t)||a(this,P)&&this[P][t]?e:!0},J=function(t,e){var n=x(t=b(t),e);return!n||!a(D,e)||a(t,P)&&t[P][e]||(n.enumerable=!0),n},K=function(t){for(var e,n=_(b(t)),o=[],r=0;n.length>r;)a(D,e=n[r++])||e==P||o.push(e);return o},Y=function(t){for(var e,n=_(b(t)),o=[],r=0;n.length>r;)a(D,e=n[r++])&&o.push(D[e]);return o},z=function(t){if(void 0!==t&&!H(t)){for(var e,n,o=[t],r=1,a=arguments;a.length>r;)o.push(a[r++]);return e=o[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),H(e)?void 0:e}),o[1]=e,E.apply(N,o)}},G=c(function(){var t=k();return"[null]"!=E([t])||"{}"!=E({a:t})||"{}"!=E(Object(t))});A||(k=function(){if(H(this))throw TypeError("Symbol is not a constructor");return L(d(arguments.length>0?arguments[0]:void 0))},s(k.prototype,"toString",function(){return this._k}),H=function(t){return t instanceof k},o.create=W,o.isEnum=B,o.getDesc=J,o.setDesc=q,o.setDescs=I,o.getNames=y.get=K,o.getSymbols=Y,i&&!n(46)&&s(T,"propertyIsEnumerable",B,!0));var V={"for":function(t){return a(C,t+="")?C[t]:C[t]=k(t)},keyFor:function(t){return m(C,t)},useSetter:function(){j=!0},useSimple:function(){j=!1}};o.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=p(t);V[t]=A?e:L(e)}),j=!0,u(u.G+u.W,{Symbol:k}),u(u.S,"Symbol",V),u(u.S+u.F*!A,"Object",{create:W,defineProperty:q,defineProperties:I,getOwnPropertyDescriptor:J,getOwnPropertyNames:K,getOwnPropertySymbols:Y}),N&&u(u.S+u.F*(!A||G),"JSON",{stringify:z}),f(k,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.has.js ***!
  \********************************************/
function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.descriptors.js ***!
  \****************************************************/
function(t,e,n){t.exports=!n(20)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine.js ***!
  \*************************************************/
function(t,e,n){t.exports=n(33)},/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.hide.js ***!
  \*********************************************/
function(t,e,n){var o=n(15),r=n(34);t.exports=n(31)?function(t,e,n){return o.setDesc(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.property-desc.js ***!
  \******************************************************/
function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.shared.js ***!
  \***********************************************/
function(t,e,n){var o=n(10),r="__core-js_shared__",a=o[r]||(o[r]={});t.exports=function(t){return a[t]||(a[t]={})}},/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/$.set-to-string-tag.js ***!
  \**********************************************************/
function(t,e,n){var o=n(15).setDesc,r=n(30),a=n(37)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,a)&&o(t,a,{configurable:!0,value:e})}},/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.wks.js ***!
  \********************************************/
function(t,e,n){var o=n(35)("wks"),r=n(38),a=n(10).Symbol;t.exports=function(t){return o[t]||(o[t]=a&&a[t]||(a||r)("Symbol."+t))}},/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.uid.js ***!
  \********************************************/
function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},/*!**********************************************!*\
  !*** ./~/core-js/library/modules/$.keyof.js ***!
  \**********************************************/
function(t,e,n){var o=n(15),r=n(40);t.exports=function(t,e){for(var n,a=r(t),i=o.getKeys(a),u=i.length,s=0;u>s;)if(a[n=i[s++]]===e)return n}},/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-iobject.js ***!
  \***************************************************/
function(t,e,n){var o=n(18),r=n(17);t.exports=function(t){return o(r(t))}},/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.get-names.js ***!
  \**************************************************/
function(t,e,n){var o=n(40),r=n(15).getNames,a={}.toString,i="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return r(t)}catch(e){return i.slice()}};t.exports.get=function(t){return i&&"[object Window]"==a.call(t)?u(t):r(o(t))}},/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.enum-keys.js ***!
  \**************************************************/
function(t,e,n){var o=n(15);t.exports=function(t){var e=o.getKeys(t),n=o.getSymbols;if(n)for(var r,a=n(t),i=o.isEnum,u=0;a.length>u;)i.call(t,r=a[u++])&&e.push(r);return e}},/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.is-array.js ***!
  \*************************************************/
function(t,e,n){var o=n(19);t.exports=Array.isArray||function(t){return"Array"==o(t)}},/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.an-object.js ***!
  \**************************************************/
function(t,e,n){var o=n(45);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.is-object.js ***!
  \**************************************************/
function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.library.js ***!
  \************************************************/
function(t,e){t.exports=!0},/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************/
function(t,e){}]);
//# sourceMappingURL=modal.js.map