!function(){"use strict";var e=Array.isArray;function n(e){var n=typeof e;return"string"===n||"number"===n}function t(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function o(e){return"function"===typeof e}function i(e){return"string"===typeof e}function l(e){return null===e}function a(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function u(e,n){if(o(n))return{data:e,event:n};return null}function c(e){return!l(e)&&"object"===typeof e}var f={};function s(e){return e.substr(2).toLowerCase()}function d(e,n){e.appendChild(n)}function p(e,n,t){l(t)?d(e,n):e.insertBefore(n,t)}function h(e,n){e.removeChild(n)}function v(e){for(var n=0;n<e.length;n++)e[n]()}function m(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function g(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=m(e,n,t)}return null}function y(e,n){do{var t=e.flags;if(2033&t)return void h(n,e.dom);var r=e.children;if(4&t&&(e=r.$LI),8&t&&(e=r),8192&t){if(2!==e.childFlags){for(var o=0,i=r.length;o<i;++o)y(r[o],n);return}e=r}}while(e)}function b(e,n,t){do{var r=e.flags;if(2033&r)return void p(n,e.dom,t);var o=e.children;if(4&r&&(e=o.$LI),8&r&&(e=o),8192&r){if(2!==e.childFlags){for(var i=0,l=o.length;i<l;++i)b(o[i],n,t);return}e=o}}while(e)}function k(e,n,t){if(e.constructor.getDerivedStateFromProps)return a(t,e.constructor.getDerivedStateFromProps(n,t));return t}var C={v:!1},x={componentComparator:null,createVNode:null,renderComplete:null};function w(e,n){e.textContent=n}function $(e,n){return c(e)&&e.event===n.event&&e.data===n.data}function N(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function S(e,n){return!!o(e)&&(e(n),!0)}var P="$";function U(e,n,t,r,o,i,l,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===i?null:i,this.ref=void 0===l?null:l,this.type=a}function F(e,n,t,r,o,i,l,a){var u=void 0===o?1:o,c=new U(u,r,t,e,l,i,a,n);return x.createVNode&&x.createVNode(c),0===u&&E(c,c.children),c}function V(e,n,r,o,i){var l=new U(1,null,null,e=function(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}(e,n),o,function(e,n,r){var o=(32768&e?n.render:n).defaultProps;if(t(o))return r;if(t(r))return a(o,null);return N(r,o)}(e,n,r),function(e,n,r){if(4&e)return r;var o=(32768&e?n.render:n).defaultHooks;if(t(o))return r;if(t(r))return o;return N(r,o)}(e,n,i),n);return x.createVNode&&x.createVNode(l),l}function L(e,n){return new U(1,t(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function M(e,n,t){var r=F(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=_(),r.childFlags=2;break;case 16:r.children=[L(e)],r.childFlags=4}return r}function I(e){var n=e.props;if(n){var r=e.flags;481&r&&(void 0!==n.children&&t(e.children)&&E(e,n.children),void 0!==n.className&&(e.className=n.className||null,n.className=void 0)),void 0!==n.key&&(e.key=n.key,n.key=void 0),void 0!==n.ref&&(e.ref=8&r?a(e.ref,n.ref):n.ref,n.ref=void 0)}return e}function T(e){var n=-16385&e.flags,t=e.props;if(14&n&&!l(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&n))return new U(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return function(e){var n=e.children,t=e.childFlags;return M(2===t?T(n):n.map(T),t,e.key)}(e)}function _(){return L("",null)}function A(t,o,a,u){for(var c=t.length;a<c;a++){var f=t[a];if(!r(f)){var s=u+P+a;if(e(f))A(f,o,0,s);else{if(n(f))f=L(f,s);else{var d=f.key,p=i(d)&&d[0]===P;(81920&f.flags||p)&&(f=T(f)),f.flags|=65536,p?d.substring(0,u.length)!==u&&(f.key=u+d):l(d)?f.key=s:f.key=u+d}o.push(f)}}}}function D(e){switch(e){case"svg":return 32;case"input":return 64;case"select":return 256;case"textarea":return 128;case"$F":return 8192;default:return 1}}function E(t,o){var a,u=1;if(r(o))a=o;else if(n(o))u=16,a=o;else if(e(o)){for(var c=o.length,f=0;f<c;++f){var s=o[f];if(r(s)||e(s)){a=a||o.slice(0,f),A(o,a,f,"");break}if(n(s))(a=a||o.slice(0,f)).push(L(s,P+f));else{var d=s.key,p=(81920&s.flags)>0,h=l(d),v=i(d)&&d[0]===P;p||h||v?(a=a||o.slice(0,f),(p||v)&&(s=T(s)),(h||v)&&(s.key=P+f),a.push(s)):a&&a.push(s),s.flags|=65536}}u=0===(a=a||o).length?1:8}else(a=o).flags|=65536,81920&o.flags&&(a=T(o)),u=2;return t.children=a,t.childFlags=u,t}function O(t){if(r(t)||n(t))return L(t,null);if(e(t))return M(t,0,null);return 16384&t.flags?T(t):t}var B="http://www.w3.org/1999/xlink",R="http://www.w3.org/XML/1998/namespace",W={"xlink:actuate":B,"xlink:arcrole":B,"xlink:href":B,"xlink:role":B,"xlink:show":B,"xlink:title":B,"xlink:type":B,"xml:base":R,"xml:lang":R,"xml:space":R};function j(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var H=j(0),z=j(null),Q=j(!0);function X(e,n){var t=n.$EV;return t||(t=n.$EV=j(null)),t[e]||1===++H[e]&&(z[e]=function(e){var n="onClick"===e||"onDblClick"===e?function(e){return function(n){if(0!==n.button)return void n.stopPropagation();G(n,!0,e,Z(n))}}(e):function(e){return function(n){G(n,!1,e,Z(n))}}(e);return document.addEventListener(s(e),n),n}(e)),t}function q(e,n){var t=n.$EV;t&&t[e]&&(0===--H[e]&&(document.removeEventListener(s(e),z[e]),z[e]=null),t[e]=null)}function G(e,n,t,r){var i=function(e){return o(e.composedPath)?e.composedPath()[0]:e.target}(e);do{if(n&&i.disabled)return;var a=i.$EV;if(a){var u=a[t];if(u&&(r.dom=i,u.event?u.event(u.data,e):u(e),e.cancelBubble))return}i=i.parentNode}while(!l(i))}function K(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function J(){return this.defaultPrevented}function Y(){return this.cancelBubble}function Z(e){var n={dom:document};return e.isDefaultPrevented=J,e.isPropagationStopped=Y,e.stopPropagation=K,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function ee(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function ne(e,n){var t=function(t){var r=this.$V;if(!r)return;var l=r.props||f,a=r.dom;if(i(e))ee(l,e,t);else for(var u=0;u<e.length;++u)ee(l,e[u],t);if(o(n)){var c=this.$V,s=c.props||f;n(s,a,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function te(e,n,t){var r="$"+n,i=e[r];if(i){if(i[1].wrapped)return;e.removeEventListener(i[0],i[1]),e[r]=null}o(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function re(e){return"checkbox"===e||"radio"===e}var oe=ne("onInput",ae),ie=ne(["onClick","onChange"],ae);function le(e){e.stopPropagation()}function ae(e,n){var r=e.type,o=e.value,i=e.checked,l=e.multiple,a=e.defaultValue,u=!t(o);r&&r!==n.type&&n.setAttribute("type",r),t(l)||l===n.multiple||(n.multiple=l),t(a)||u||(n.defaultValue=a+""),re(r)?(u&&(n.value=o),t(i)||(n.checked=i)):u&&n.value!==o?(n.defaultValue=o,n.value=o):t(i)||(n.checked=i)}function ue(n,r){if("option"===n.type)!function(n,r){var o=n.props||f,i=n.dom;i.value=o.value,o.value===r||e(r)&&-1!==r.indexOf(o.value)?i.selected=!0:t(r)&&t(o.selected)||(i.selected=o.selected||!1)}(n,r);else{var o=n.children,i=n.flags;if(4&i)ue(o.$LI,r);else if(8&i)ue(o,r);else if(2===n.childFlags)ue(o,r);else if(12&n.childFlags)for(var l=0,a=o.length;l<a;++l)ue(o[l],r)}}le.wrapped=!0;var ce=ne("onChange",fe);function fe(e,n,r,o){var i=Boolean(e.multiple);t(e.multiple)||i===n.multiple||(n.multiple=i);var l=e.selectedIndex;if(-1===l&&(n.selectedIndex=-1),1!==o.childFlags){var a=e.value;"number"===typeof l&&l>-1&&n.options[l]&&(a=n.options[l].value),r&&t(a)&&(a=e.defaultValue),ue(o,a)}}var se,de,pe=ne("onInput",ve),he=ne("onChange");function ve(e,n,r){var o=e.value,i=n.value;if(t(o)){if(r){var l=e.defaultValue;t(l)||l===i||(n.defaultValue=l,n.value=l)}}else i!==o&&(n.defaultValue=o,n.value=o)}function me(e,n,t,r,o,i){64&e?ae(r,t):256&e?fe(r,t,o,n):128&e&&ve(r,t,o),i&&(t.$V=n)}function ge(e){return e.type&&re(e.type)?!t(e.checked):!t(e.value)}function ye(e){e&&!S(e,null)&&e.current&&(e.current=null)}function be(e,n,t){e&&(o(e)||void 0!==e.current)&&t.push((function(){S(e,n)||void 0===e.current||(e.current=n)}))}function ke(e,n){Ce(e),y(e,n)}function Ce(e){var n,r=e.flags,i=e.children;if(481&r){n=e.ref;var a=e.props;ye(n);var u=e.childFlags;if(!l(a))for(var c=Object.keys(a),s=0,d=c.length;s<d;s++){var p=c[s];Q[p]&&q(p,e.dom)}12&u?xe(i):2===u&&Ce(i)}else i&&(4&r?(o(i.componentWillUnmount)&&i.componentWillUnmount(),ye(e.ref),i.$UN=!0,Ce(i.$LI)):8&r?(!t(n=e.ref)&&o(n.onComponentWillUnmount)&&n.onComponentWillUnmount(g(e,!0),e.props||f),Ce(i)):1024&r?ke(i,e.ref):8192&r&&12&e.childFlags&&xe(i))}function xe(e){for(var n=0,t=e.length;n<t;++n)Ce(e[n])}function we(e){e.textContent=""}function $e(e,n,t){xe(t),8192&n.flags?y(n,e):we(e)}function Ne(e,n,r,a,u,f,d){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":a.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":a[e]=!!r;break;case"defaultChecked":case"value":case"volume":if(f&&"value"===e)break;var p=t(r)?"":r;a[e]!==p&&(a[e]=p);break;case"style":!function(e,n,r){if(t(n))return void r.removeAttribute("style");var o,l,a=r.style;if(i(n))return void(a.cssText=n);if(t(e)||i(e))for(o in n)l=n[o],a.setProperty(o,l);else{for(o in n)(l=n[o])!==e[o]&&a.setProperty(o,l);for(o in e)t(n[o])&&a.removeProperty(o)}}(n,r,a);break;case"dangerouslySetInnerHTML":!function(e,n,r,o){var i=e&&e.__html||"",a=n&&n.__html||"";i!==a&&(t(a)||function(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}(o,a)||(l(r)||(12&r.childFlags?xe(r.children):2===r.childFlags&&Ce(r.children),r.children=null,r.childFlags=1),o.innerHTML=a))}(n,r,d,a);break;default:Q[e]?function(e,n,t,r){if(o(t))X(e,r)[e]=t;else if(c(t)){if($(n,t))return;X(e,r)[e]=t}else q(e,r)}(e,n,r,a):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?function(e,n,t,r){if(c(t)){if($(n,t))return;t=function(e){var n=e.event;return function(t){n(e.data,t)}}(t)}te(r,s(e),t)}(e,n,r,a):t(r)?a.removeAttribute(e):u&&W[e]?a.setAttributeNS(W[e],e,r):a.setAttribute(e,r)}}function Se(e,n,t,r,o){var i=!1,l=(448&n)>0;for(var a in l&&(i=ge(t))&&function(e,n,t){64&e?function(e,n){re(n.type)?(te(e,"change",ie),te(e,"click",le)):te(e,"input",oe)}(n,t):256&e?function(e){te(e,"change",ce)}(n):128&e&&function(e,n){te(e,"input",pe),n.onChange&&te(e,"change",he)}(n,t)}(n,r,t),t)Ne(a,null,t[a],r,o,i,null);l&&me(n,e,r,t,!0,i)}function Pe(e,n,t){var r=O(e.render(n,e.state,t)),i=t;return o(e.getChildContext)&&(i=a(t,e.getChildContext())),e.$CX=i,r}function Ue(e,n,t,r,i,a){var u=new n(t,r),c=u.$N=Boolean(n.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=i,u.$L=a,e.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=k(u,t,u.state);else if(o(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!l(s)){var d=u.state;if(l(d))u.state=s;else for(var p in s)d[p]=s[p];u.$PS=null}u.$BR=!1}return u.$LI=Pe(u,t,r),u}function Fe(e,n){var t=e.props||f;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function Ve(e,n,t,r,o,i){var l=e.flags|=16384;481&l?Me(e,n,t,r,o,i):4&l?function(e,n,t,r,o,i){var l=Ue(e,e.type,e.props||f,t,r,i);Ve(l.$LI,n,l.$CX,r,o,i),Te(e.ref,l,i)}(e,n,t,r,o,i):8&l?(function(e,n,t,r,o,i){Ve(e.children=O(Fe(e,t)),n,t,r,o,i)}(e,n,t,r,o,i),_e(e,i)):512&l||16&l?Le(e,n,o):8192&l?function(e,n,t,r,o,i){var l=e.children,a=e.childFlags;12&a&&0===l.length&&(a=e.childFlags=2,l=e.children=_()),2===a?Ve(l,t,o,r,o,i):Ie(l,t,n,r,o,i)}(e,t,n,r,o,i):1024&l&&function(e,n,t,r,o){Ve(e.children,e.ref,n,!1,null,o);var i=_();Le(i,t,r),e.dom=i.dom}(e,t,n,o,i)}function Le(e,n,t){var r=e.dom=document.createTextNode(e.children);l(n)||p(n,r,t)}function Me(e,n,r,o,i,a){var u=e.flags,c=e.props,f=e.className,s=e.childFlags,d=e.dom=function(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}(e.type,o=o||(32&u)>0),h=e.children;if(t(f)||""===f||(o?d.setAttribute("class",f):d.className=f),16===s)w(d,h);else if(1!==s){var v=o&&"foreignObject"!==e.type;2===s?(16384&h.flags&&(e.children=h=T(h)),Ve(h,d,r,v,null,a)):8!==s&&4!==s||Ie(h,d,r,v,null,a)}l(n)||p(n,d,i),l(c)||Se(e,u,c,d,o),be(e.ref,d,a)}function Ie(e,n,t,r,o,i){for(var l=0;l<e.length;++l){var a=e[l];16384&a.flags&&(e[l]=a=T(a)),Ve(a,n,t,r,o,i)}}function Te(e,n,t){be(e,n,t),o(n.componentDidMount)&&t.push(function(e){return function(){e.componentDidMount()}}(n))}function _e(e,n){var r=e.ref;t(r)||(S(r.onComponentWillMount,e.props||f),o(r.onComponentDidMount)&&n.push(function(e,n){return function(){e.onComponentDidMount(g(n,!0),n.props||f)}}(r,e)))}function Ae(e,n,i,u,c,s,p){var v=n.flags|=16384;e.flags!==v||e.type!==n.type||e.key!==n.key||2048&v?16384&e.flags?function(e,n,t,r,o,i){Ce(e),0!==(n.flags&e.flags&2033)?(Ve(n,null,r,o,null,i),function(e,n,t){e.replaceChild(n,t)}(t,n.dom,e.dom)):(Ve(n,t,r,o,g(e,!0),i),y(e,t))}(e,n,i,u,c,p):Ve(n,i,u,c,s,p):481&v?function(e,n,r,o,i,l){var a,u=n.dom=e.dom,c=e.props,s=n.props,d=!1,p=!1;if(o=o||(32&i)>0,c!==s){var h=c||f;if((a=s||f)!==f)for(var v in(d=(448&i)>0)&&(p=ge(a)),a){var m=h[v],g=a[v];m!==g&&Ne(v,m,g,u,o,p,e)}if(h!==f)for(var y in h)t(a[y])&&!t(h[y])&&Ne(y,h[y],null,u,o,p,e)}var b=n.children,k=n.className;e.className!==k&&(t(k)?u.removeAttribute("class"):o?u.setAttribute("class",k):u.className=k),4096&i?function(e,n){e.textContent!==n&&(e.textContent=n)}(u,b):De(e.childFlags,n.childFlags,e.children,b,u,r,o&&"foreignObject"!==n.type,null,e,l),d&&me(i,n,u,a,!1,p);var C=n.ref,x=e.ref;x!==C&&(ye(x),be(C,u,l))}(e,n,u,c,v,p):4&v?function(e,n,t,r,i,u,c){var s=n.children=e.children;if(l(s))return;s.$L=c;var d=n.props||f,p=n.ref,h=e.ref,v=s.state;if(!s.$N){if(o(s.componentWillReceiveProps)){if(s.$BR=!0,s.componentWillReceiveProps(d,r),s.$UN)return;s.$BR=!1}l(s.$PS)||(v=a(v,s.$PS),s.$PS=null)}Ee(s,v,d,t,r,i,!1,u,c),h!==p&&(ye(h),be(p,s,c))}(e,n,i,u,c,s,p):8&v?function(e,n,r,i,l,a,u){var c=!0,s=n.props||f,d=n.ref,p=e.props,h=!t(d),v=e.children;if(h&&o(d.onComponentShouldUpdate)&&(c=d.onComponentShouldUpdate(p,s)),!1!==c){h&&o(d.onComponentWillUpdate)&&d.onComponentWillUpdate(p,s);var m=O(Fe(n,i));Ae(v,m,r,i,l,a,u),n.children=m,h&&o(d.onComponentDidUpdate)&&d.onComponentDidUpdate(p,s)}else n.children=v}(e,n,i,u,c,s,p):16&v?function(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}(e,n):512&v?n.dom=e.dom:8192&v?function(e,n,t,r,o,i){var l=e.children,a=n.children,u=e.childFlags,c=n.childFlags,f=null;12&c&&0===a.length&&(c=n.childFlags=2,a=n.children=_());var s=0!==(2&c);if(12&u){var d=l.length;(8&u&&8&c||s||!s&&a.length>d)&&(f=g(l[d-1],!1).nextSibling)}De(u,c,l,a,t,r,o,f,e,i)}(e,n,i,u,c,p):function(e,n,t,o){var i=e.ref,l=n.ref,a=n.children;if(De(e.childFlags,n.childFlags,e.children,a,i,t,!1,null,e,o),n.dom=e.dom,i!==l&&!r(a)){var u=a.dom;h(i,u),d(l,u)}}(e,n,u,p)}function De(e,n,t,r,o,i,l,a,u,c){switch(e){case 2:switch(n){case 2:Ae(t,r,o,i,l,a,c);break;case 1:ke(t,o);break;case 16:Ce(t),w(o,r);break;default:!function(e,n,t,r,o,i){Ce(e),Ie(n,t,r,o,g(e,!0),i),y(e,t)}(t,r,o,i,l,c)}break;case 1:switch(n){case 2:Ve(r,o,i,l,a,c);break;case 1:break;case 16:w(o,r);break;default:Ie(r,o,i,l,a,c)}break;case 16:switch(n){case 16:!function(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:w(t,n))}(t,r,o);break;case 2:we(o),Ve(r,o,i,l,a,c);break;case 1:we(o);break;default:we(o),Ie(r,o,i,l,a,c)}break;default:switch(n){case 16:xe(t),w(o,r);break;case 2:$e(o,u,t),Ve(r,o,i,l,a,c);break;case 1:$e(o,u,t);break;default:var f=0|t.length,s=0|r.length;0===f?s>0&&Ie(r,o,i,l,a,c):0===s?$e(o,u,t):8===n&&8===e?function(e,n,t,r,o,i,l,a,u,c){var f,s,d=i-1,p=l-1,h=0,v=e[h],m=n[h];e:{for(;v.key===m.key;){if(16384&m.flags&&(n[h]=m=T(m)),Ae(v,m,t,r,o,a,c),e[h]=m,++h>d||h>p)break e;v=e[h],m=n[h]}for(v=e[d],m=n[p];v.key===m.key;){if(16384&m.flags&&(n[p]=m=T(m)),Ae(v,m,t,r,o,a,c),e[d]=m,p--,h>--d||h>p)break e;v=e[d],m=n[p]}}if(h>d){if(h<=p)for(s=(f=p+1)<l?g(n[f],!0):a;h<=p;)16384&(m=n[h]).flags&&(n[h]=m=T(m)),++h,Ve(m,t,r,o,s,c)}else if(h>p)for(;h<=d;)ke(e[h++],t);else!function(e,n,t,r,o,i,l,a,u,c,f,s,d){var p,h,v,m=0,y=a,k=a,C=i-a+1,x=l-a+1,w=new Int32Array(x+1),$=C===r,N=!1,S=0,P=0;if(o<4||(C|x)<32)for(m=y;m<=i;++m)if(p=e[m],P<x){for(a=k;a<=l;a++)if(h=n[a],p.key===h.key){if(w[a-k]=m+1,$)for($=!1;y<m;)ke(e[y++],u);S>a?N=!0:S=a,16384&h.flags&&(n[a]=h=T(h)),Ae(p,h,u,t,c,f,d),++P;break}!$&&a>l&&ke(p,u)}else $||ke(p,u);else{var U={};for(m=k;m<=l;++m)U[n[m].key]=m;for(m=y;m<=i;++m)if(p=e[m],P<x)if(void 0!==(a=U[p.key])){if($)for($=!1;m>y;)ke(e[y++],u);w[a-k]=m+1,S>a?N=!0:S=a,16384&(h=n[a]).flags&&(n[a]=h=T(h)),Ae(p,h,u,t,c,f,d),++P}else $||ke(p,u);else $||ke(p,u)}if($)$e(u,s,e),Ie(n,u,t,c,f,d);else if(N){var F=function(e){var n=0,t=0,r=0,o=0,i=0,l=0,a=0,u=e.length;for(u>Oe&&(Oe=u,se=new Int32Array(u),de=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=se[o]]<n){de[t]=r,se[++o]=t;continue}for(i=0,l=o;i<l;)e[se[a=i+l>>1]]<n?i=a+1:l=a;n<e[se[i]]&&(i>0&&(de[t]=se[i-1]),se[i]=t)}i=o+1;var c=new Int32Array(i);for(l=se[i-1];i-- >0;)c[i]=l,l=de[l],se[i]=0;return c}(w);for(a=F.length-1,m=x-1;m>=0;m--)0===w[m]?(16384&(h=n[S=m+k]).flags&&(n[S]=h=T(h)),Ve(h,u,t,c,(v=S+1)<o?g(n[v],!0):f,d)):a<0||m!==F[a]?b(h=n[S=m+k],u,(v=S+1)<o?g(n[v],!0):f):a--}else if(P!==x)for(m=x-1;m>=0;m--)0===w[m]&&(16384&(h=n[S=m+k]).flags&&(n[S]=h=T(h)),Ve(h,u,t,c,(v=S+1)<o?g(n[v],!0):f,d))}(e,n,r,i,l,d,p,h,t,o,a,u,c)}(t,r,o,i,l,f,s,a,u,c):function(e,n,t,r,o,i,l,a,u){for(var c,f,s=i>l?l:i,d=0;d<s;++d)c=n[d],f=e[d],16384&c.flags&&(c=n[d]=T(c)),Ae(f,c,t,r,o,a,u),e[d]=c;if(i<l)for(d=s;d<l;++d)16384&(c=n[d]).flags&&(c=n[d]=T(c)),Ve(c,t,r,o,a,u);else if(i>l)for(d=s;d<i;++d)ke(e[d],t)}(t,r,o,i,l,f,s,a,c)}}}function Ee(e,n,t,r,i,l,u,c,f){var s=e.state,d=e.props,p=Boolean(e.$N),h=o(e.shouldComponentUpdate);if(p&&(n=k(e,t,n!==s?a(s,n):n)),u||!h||h&&e.shouldComponentUpdate(t,n,i)){!p&&o(e.componentWillUpdate)&&e.componentWillUpdate(t,n,i),e.props=t,e.state=n,e.context=i;var v=null,m=Pe(e,t,i);p&&o(e.getSnapshotBeforeUpdate)&&(v=e.getSnapshotBeforeUpdate(d,s)),Ae(e.$LI,m,r,e.$CX,l,c,f),e.$LI=m,o(e.componentDidUpdate)&&function(e,n,t,r,o){o.push((function(){e.componentDidUpdate(n,t,r)}))}(e,d,s,v,f)}else e.props=t,e.state=n,e.context=i}var Oe=0;function Be(e,n,r,i){var l=[],a=n.$V;C.v=!0,t(a)?t(e)||(16384&e.flags&&(e=T(e)),Ve(e,n,i,!1,null,l),n.$V=e,a=e):t(e)?(ke(a,n),n.$V=null):(16384&e.flags&&(e=T(e)),Ae(a,e,n,i,!1,null,l),a=n.$V=e),v(l),C.v=!1,o(r)&&r(),o(x.renderComplete)&&x.renderComplete(a,n)}function Re(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=f),Be(e,n,t,r)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var We=[],je="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(e){window.setTimeout(e,0)},He=!1;function ze(e,n,r,i){var l=e.$PS;if(o(n)&&(n=n(l?a(e.state,l):e.state,e.props,e.context)),t(l))e.$PS=n;else for(var u in n)l[u]=n[u];if(e.$BR)o(r)&&e.$L.push(r.bind(e));else{if(!C.v&&0===We.length)return qe(e,i),void(o(r)&&r.call(e));if(-1===We.indexOf(e)&&We.push(e),i&&(e.$F=!0),He||(He=!0,je(Xe)),o(r)){var c=e.$QU;c||(c=e.$QU=[]),c.push(r)}}}function Qe(e){for(var n=e.$QU,t=0;t<n.length;++t)n[t].call(e);e.$QU=null}function Xe(){var e;for(He=!1;e=We.shift();)if(!e.$UN){var n=e.$F;e.$F=!1,qe(e,n),e.$QU&&Qe(e)}}function qe(e,n){if(n||!e.$BR){var t=e.$PS;e.$PS=null;var r=[];C.v=!0,Ee(e,a(e.state,t),e.props,g(e.$LI,!0).parentNode,e.context,e.$SVG,n,null,r),v(r),C.v=!1}else e.state=e.$PS,e.$PS=null}var Ge=function(e,n){this.state=null,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=e||f,this.context=n||f};function Ke(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function Je(e,n,t){var r=arguments,o=e.flags,i=14&o?e.props&&e.props.children:e.children,l=arguments.length-2,a=e.className,u=e.key,c=e.ref;if(n?(void 0!==n.className&&(a=n.className),void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(u=n.key),void 0!==n.children&&(i=n.children)):n={},1===l)i=t;else if(l>1)for(i=[];l-- >0;)i[l]=r[l+2];if(n.children=i,14&o)return V(o,e.type,e.props||n?Ke(e.props,n):f,u,c);if(16&o)return L(i);if(8192&o)return M(1===l?[i]:i,0,u);return I(F(o,e.type,a,null,1,Ke(e.props,n),u,c))}function Ye(e){throw e||(e="a runtime error occured! Use Inferno in development environment to find the error."),new Error("Inferno Error: "+e)}Ge.prototype.forceUpdate=function(e){if(this.$UN)return;ze(this,{},e,!0)},Ge.prototype.setState=function(e,n){if(this.$UN)return;this.$BS||ze(this,e,n,!1)},Ge.prototype.render=function(e,n,t){return null};var Ze={componentDidMount:1,componentDidUnmount:1,componentDidUpdate:1,componentWillMount:1,componentWillUnmount:1,componentWillUpdate:1,constructor:1,render:1,shouldComponentUpdate:1};function en(e,n){for(var t in n)e[t]=n[t];return e}function nn(e,n){void 0===n&&(n={});for(var t=0,r=e.length;t<r;++t){var o=e[t];for(var i in o.mixins&&nn(o.mixins,n),o)o.hasOwnProperty(i)&&"function"===typeof o[i]&&(n[i]||(n[i]=[])).push(o[i])}return n}function tn(e,n){return function(){for(var t,r=arguments,o=0,i=e.length;o<i;++o){var l=e[o],a=l.apply(this,r);n?t=n(t,a):a&&(t=a)}return t}}function rn(e,n){if(n)for(var t in"object"!==typeof n&&Ye("Expected Mixin to return value to be an object or null."),e||(e={}),n)n.hasOwnProperty(t)&&(e.hasOwnProperty(t)&&Ye("Mixins return duplicate key "+t+" in their return values"),e[t]=n[t]);return e}function on(e,n,t){var r=void 0!==n[e]?t.concat(n[e]):t;n[e]="getDefaultProps"===e||"getInitialState"===e||"getChildContext"===e?tn(r,rn):tn(r)}function ln(e){return void 0===e||null===e}function an(e){return"string"===typeof e}function un(e){return void 0===e}var cn={onComponentDidMount:1,onComponentDidUpdate:1,onComponentShouldUpdate:1,onComponentWillMount:1,onComponentWillUnmount:1,onComponentWillUpdate:1};function fn(e,n,t){var r,o,i=arguments,l=null,a=null,u=null,c=0,f=arguments.length-2;if(1===f)r=t;else if(f>1)for(r=[];f-- >0;)r[f]=i[f+2];if(!an(e)){if(c=2,un(r)||(n||(n={}),n.children=r),!ln(n))for(var s in o={},n)"key"===s?a=n.key:"ref"===s?l=n.ref:1===cn[s]?(l||(l={}),l[s]=n[s]):o[s]=n[s];return V(c,e,o,a,l)}if(c=D(e),!ln(n))for(var d in o={},n)"className"===d||"class"===d?u=n[d]:"key"===d?a=n.key:"children"===d&&un(r)?r=n.children:"ref"===d?l=n.ref:("contenteditable"===d&&(c|=4096),o[d]=n[d]);if(8192&c)return M(1===f?[r]:r,0,a);return F(c,e,u,r,0,o,a,l)}function sn(e){return null===e}function dn(e,n,t,r,o,i){var l=e.childFlags,a=e.children,u=e.props,c=e.flags;if(1!==l){if(2===l)sn(t)?Ve(a,n,r,o,null,i):t=(t=hn(a,n,t,r,o,i))?t.nextSibling:null;else if(16===l)sn(t)?n.appendChild(document.createTextNode(a)):1!==n.childNodes.length||3!==t.nodeType?n.textContent=a:t.nodeValue!==a&&(t.nodeValue=a),t=null;else if(12&l)for(var f=!1,s=0,d=a.length;s<d;++s){var p=a[s];sn(t)||f&&(16&p.flags)>0?Ve(p,n,r,o,t,i):t=(t=hn(p,n,t,r,o,i))?t.nextSibling:null,f=(16&p.flags)>0}if(0===(8192&c))for(var h=null;t;)h=t.nextSibling,n.removeChild(t),t=h}else sn(n.firstChild)||function(e,n){return Boolean(n&&n.dangerouslySetInnerHTML&&n.dangerouslySetInnerHTML.__html&&function(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}(e,n.dangerouslySetInnerHTML.__html))}(n,u)||(n.textContent="",448&c&&(n.defaultValue=""))}function pn(e,n,t){if(3!==t.nodeType)n.replaceChild(e.dom=document.createTextNode(e.children),t);else{var r=e.children;t.nodeValue!==r&&(t.nodeValue=r),e.dom=t}return e.dom}function hn(e,n,t,r,o,i){var l=e.flags|=16384;if(14&l)return function(e,n,t,r,o,i,l){var a,u=e.type,c=e.ref,s=e.props||f;if(i){var d=Ue(e,u,s,r,o,l);a=hn(d.$LI,n,t,d.$CX,o,l),Te(c,d,l)}else{var p=O(Fe(e,r));a=hn(p,n,t,r,o,l),e.children=p,_e(e,l)}return a}(e,n,t,r,o,(4&l)>0,i);if(481&l)return function(e,n,t,r,o,i){var l,a=e.props,u=e.className,c=e.flags,f=e.ref;return o=o||(32&c)>0,1!==t.nodeType||t.tagName.toLowerCase()!==e.type?(Me(e,null,r,o,null,i),n.replaceChild(e.dom,t)):(e.dom=t,dn(e,t,t.firstChild,r,o,i),sn(a)||Se(e,c,a,t,o),void 0===(l=u)||null===l?""!==t.className&&t.removeAttribute("class"):o?t.setAttribute("class",u):t.className=u,be(f,t,i)),e.dom}(e,n,t,r,o,i);if(16&l)return pn(e,n,t);if(512&l)return e.dom=t;if(8192&l)return function(e,n,t,r,o,i){var l=e.children;if(2===e.childFlags)return pn(l,n,t),l.dom;return dn(e,n,t,r,o,i),function(e){for(var n,t;e;){if(2033&(n=e.flags))return e.dom;t=e.children,e=8192&n?2===e.childFlags?t:t[t.length-1]:4&n?t.$LI:t}return null}(l[l.length-1])}(e,n,t,r,o,i);return function(e){throw e||(e="a runtime error occured! Use Inferno in development environment to find the error."),new Error("Inferno Error: "+e)}(),null}var vn=Array.isArray;function mn(e){return void 0===e||null===e}function gn(e){return"string"===typeof e}function yn(e){return null===e}function bn(){}bn.isRequired=bn;var kn=function(){return bn},Cn={any:kn,array:bn,arrayOf:kn,bool:bn,checkPropTypes:function(){return null},element:kn,func:bn,instanceOf:kn,node:kn,number:bn,object:bn,objectOf:kn,oneOf:kn,oneOfType:kn,shape:kn,string:bn,symbol:bn},xn={htmlFor:"for",onDoubleClick:"onDblClick"},wn=/[\-:]([a-z])/g,$n=function(e){return e[1].toUpperCase()};function Nn(e,n){switch(e){case"animation-iteration-count":case"border-image-outset":case"border-image-slice":case"border-image-width":case"box-flex":case"box-flex-group":case"box-ordinal-group":case"column-count":case"fill-opacity":case"flex":case"flex-grow":case"flex-negative":case"flex-order":case"flex-positive":case"flex-shrink":case"flood-opacity":case"font-weight":case"grid-column":case"grid-row":case"line-clamp":case"line-height":case"opacity":case"order":case"orphans":case"stop-opacity":case"stroke-dasharray":case"stroke-dashoffset":case"stroke-miterlimit":case"stroke-opacity":case"stroke-width":case"tab-size":case"widows":case"z-index":case"zoom":return n;default:return n+"px"}}["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-constiant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","x-height","xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xmlns:xlink","xml:lang","xml:space"].forEach((function(e){var n=e.replace(wn,$n);xn[n]=e}));var Sn=/[A-Z]/g;function Pn(e,n){for(var t=0,r=e.length;t<r;++t){var o=e[t];vn(o)?Pn(o,n):n.push(o)}return n}x.reactStyles=!0;var Un=[],Fn={map:function(e,n,t){if(mn(e))return e;return e=Fn.toArray(e),t&&(n=n.bind(t)),e.map(n)},forEach:function(e,n,t){if(mn(e))return;e=Fn.toArray(e),t&&(n=n.bind(t));for(var r=0,o=e.length;r<o;++r)n(null===(i=e[r])||!1===i||!0===i||void 0===i?null:e[r],r,e);var i},count:function(e){return(e=Fn.toArray(e)).length},only:function(e){if(1!==(e=Fn.toArray(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){if(mn(e))return[];if(vn(e)){var n=[];return Pn(e,n),n}return Un.concat(e)}};Ge.prototype.isReactComponent={};var Vn="15.4.2",Ln={date:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};if("undefined"!==typeof Event){var Mn=Event.prototype;Mn.persist||(Mn.persist=function(){})}var In="undefined"===typeof window?global:window,Tn="undefined"!==typeof In.Symbol,_n=Tn?In.Symbol.iterator:"",An=x.createVNode;function Dn(e,n){var t;for(t in e)if(!(t in n))return!0;for(t in n)if(e[t]!==n[t])return!0;return!1}x.createVNode=function(e){var n=e.children,t=e.props;mn(t)&&(t=e.props={}),!Tn||yn(n)||"object"!==typeof n||vn(n)||"function"!==typeof n[_n]||(e.children=function(e){var n,t=[];do{n=e.next(),t.push(n.value)}while(!n.done);return t}(n[_n]())),!mn(n)&&mn(t.children)&&(t.children=n),14&e.flags&&gn(e.type)&&(e.flags=D(e.type),t&&I(e));var r=e.flags;448&r&&function(e,n){if(("input"===e||"textarea"===e)&&"radio"!==n.type&&n.onChange){var t,r=n.type&&n.type.toLowerCase();r&&!Ln[r]||(t="oninput"),t&&!n[t]&&(n[t]=n.onChange,n.onChange=void 0)}}(e.type,t),481&r&&(e.className&&(t.className=e.className),function(e){for(var n in e){var t=xn[n];if(t&&e[n]&&t!==n&&(e[t]=e[n],e[n]=void 0),x.reactStyles&&"style"===n){var r=e.style;if(r&&!gn(r)){var o={};for(var i in r){var l=r[i],a=i.replace(Sn,"-$&").toLowerCase();o[a]="number"===typeof l?Nn(a,l):l}e.style=o}}}}(t)),An&&An(e)};var En=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.shouldComponentUpdate=function(e,n){return Dn(this.props,e)||Dn(this.state,n)},n}(Ge),On=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.getChildContext=function(){return this.props.context},n.prototype.render=function(e){return e.children},n}(Ge);function Bn(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=f),Be(e,n,t,r);var o=n.$V;if(o&&14&o.flags)return o.children}if("undefined"!==typeof window&&"undefined"===typeof window.React){var Rn={Children:Fn,Component:Ge,EMPTY_OBJ:f,Fragment:"$F",PropTypes:Cn,PureComponent:En,_CI:Ue,_HI:O,_M:Ve,_MCCC:Te,_ME:Me,_MFCC:_e,_MP:Se,_MR:be,__render:Be,cloneElement:Je,cloneVNode:Je,createClass:function(e){var n=function(e){function n(n,t){e.call(this,n,t),function(e){for(var n in e){var t=e[n];"function"!==typeof t||t.__bound||Ze[n]||((e[n]=t.bind(e)).__bound=!0)}}(this),this.getInitialState&&(this.state=this.getInitialState())}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.replaceState=function(e,n){this.setState(e,n)},n.prototype.isMounted=function(){return null!==this.$LI&&!this.$UN},n}(Ge);return n.displayName=e.name||e.displayName||"Component",n.propTypes=e.propTypes,n.mixins=e.mixins&&nn(e.mixins),n.getDefaultProps=e.getDefaultProps,en(n.prototype,e),e.statics&&en(n,e.statics),e.mixins&&function(e,n){for(var t in n)if(n.hasOwnProperty(t)){var r=n[t],o=void 0;o="getDefaultProps"===t?e:e.prototype,"function"===typeof r[0]?on(t,o,r):o[t]=r}}(n,nn(e.mixins)),n.getDefaultProps&&(n.defaultProps=n.getDefaultProps()),n},createComponentVNode:V,createElement:fn,createFactory:function(e){return fn.bind(null,e)},createFragment:M,createPortal:function(e,n){var t=O(e);return F(1024,1024,null,t,0,null,t.key,n)},createRef:function(){return{current:null}},createRenderer:function(e){return function(n,t,r,o){e||(e=n),Re(t,e,r,o)}},createTextVNode:L,createVNode:F,directClone:T,findDOMNode:function(e){if(e&&e.nodeType)return e;if(!e||e.$UN)return null;if(e.$LI)return g(e.$LI,!0);if(e.flags)return g(e,!0);return null},findDOMfromVNode:g,forwardRef:function(e){return{render:e}},getFlagsForElementVnode:D,hydrate:function(e,n,t){var r,o=n.firstChild;if(sn(o))Re(e,n,t);else{var i=[];for(null!==(r=e)&&!1!==r&&!0!==r&&void 0!==r&&(o=hn(e,n,o,{},!1,i));o&&(o=o.nextSibling);)n.removeChild(o);if(i.length>0)for(var l;void 0!==(l=i.shift());)l()}n.$V=e,function(e){return"function"===typeof e}(t)&&t()},isValidElement:function(e){if("object"!==typeof e||yn(e))return!1;return(495&e.flags)>0},linkEvent:u,normalizeProps:I,options:x,render:Bn,rerender:Xe,unmountComponentAtNode:function(e){return Be(null,e,null,null),!0},unstable_renderSubtreeIntoContainer:function(e,n,t,r){Bn(V(4,On,{children:n,context:e.context}),t,null);var o=n.children;return r&&r.call(o),o},version:Vn};window.React=Rn,window.ReactDOM=Rn}function Wn(e){return F(1,"li","TreeLeaf",L(e.children),0,null,null,null)}function jn(e,n){return e!==n}function Hn(e){for(var n=e.data,t=n.children.length,r=new Array(t),o=0;o<t;o++){var i=n.children[o],l=i.id;i.container?r[o]=V(2,Hn,{data:i},l,{onComponentShouldUpdate:jn}):r[o]=V(2,Wn,{children:l},l,{onComponentShouldUpdate:jn})}return F(1,"ul","TreeNode",r,0,null,null,null)}function zn(e){var n=e.data,t=n.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return F(1,"div","AnimBox",null,1,{"data-id":n.id,style:r},null,null)}function Qn(e,n){console.log("Clicked",e),n.stopPropagation()}function Xn(e){var n=e.children;return F(1,"td","TableCell",L(n),0,{onClick:u(n,Qn)},null,null)}function qn(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");var r=n.props,o=r.length+1,i=new Array(o);i[0]=V(2,Xn,{children:"#"+n.id},null,{onComponentShouldUpdate:jn});for(var l=1;l<o;l++)i[l]=V(2,Xn,{children:r[l-1]},null,{onComponentShouldUpdate:jn});return F(1,"tr",t,i,0,{"data-id":n.id},null,null)}uibench.init("Inferno compat (simple)",Vn),document.addEventListener("DOMContentLoaded",(function(e){var n=document.querySelector("#App");uibench.run((function(e){var t,r,o;Bn(("table"===(o=(t=e).location)?r=function(e){for(var n=e.items,t=n.length,r=new Array(t),o=0;o<t;o++){var i=n[o];r[o]=V(2,qn,{data:i,children:i},i.id,{onComponentShouldUpdate:jn})}return F(1,"table","Table",r,0,null,null,null)}(t.table):"anim"===o?r=function(e){for(var n=e.items,t=n.length,r=new Array(t),o=0;o<t;o++){var i=n[o];r[o]=V(2,zn,{data:i},i.id,{onComponentShouldUpdate:jn})}return F(1,"div","Anim",r,0,null,null,null)}(t.anim):"tree"===o&&(r=function(e){return F(1,"div","Tree",V(2,Hn,{data:e.root},null,{onComponentShouldUpdate:jn}),2,null,null,null)}(t.tree)),F(1,"div","Main",r,0,null,null,null)),n)}),(function(e){Bn(F(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),n)}))}))}();
