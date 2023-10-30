!function(){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.apply(this,arguments)}var e=Array.isArray;function t(n){var e=typeof n;return"string"===e||"number"===e}function r(n){return void 0===n||null===n}function o(n){return null===n||!1===n||!0===n||void 0===n}function l(n){return"function"===typeof n}function i(n){return"string"===typeof n}function a(n){return null===n}function u(n,e){if(l(e))return{data:n,event:e};return null}function c(n){return!a(n)&&"object"===typeof n}var f={},s=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function p(n){return n.substring(2).toLowerCase()}function d(n,e){n.appendChild(e)}function v(n,e,t){a(t)?d(n,e):n.insertBefore(e,t)}function h(n,e){if(e)return document.createElementNS("http://www.w3.org/2000/svg",n);return document.createElement(n)}function m(n,e,t){n.replaceChild(e,t)}function g(n,e){n.removeChild(e)}function y(n){for(var e=0;e<n.length;e++)n[e]()}function k(n,e,t){var r=n.children;if(0!==(4&t))return r.$LI;if(0!==(8192&t))return 2===n.childFlags?r:r[e?0:r.length-1];return r}function b(n,e){for(var t,o=n;!r(o);){if(0!==(1521&(t=o.flags)))return o.dom;o=k(o,e,t)}return null}function w(n,e){for(var t,r=n.length;void 0!==(t=n.pop());)t((function(){--r<=0&&l(e)&&e()}))}function C(n){for(var e=0;e<n.length;e++)n[e].fn();for(var t=0;t<n.length;t++){var r=n[t];v(r.parent,r.dom,r.next)}n.splice(0,n.length)}function $(n,e,t){for(;!r(n);){var o=n.flags;if(0!==(1521&o))return void(t&&n.dom.parentNode!==e||g(e,n.dom));var l=n.children;if(0!==(4&o)&&(n=l.$LI),0!==(8&o)&&(n=l),0!==(8192&o)){if(2!==n.childFlags){for(var i=0,a=l.length;i<a;++i)$(l[i],e,!1);return}n=l}}}function D(n,e){return function(){$(n,e,!0)}}function x(n,e,t){t.componentWillDisappear.length>0?w(t.componentWillDisappear,D(n,e)):$(n,e,!1)}function F(n,e,t,r,o,l,i,a){n.componentWillMove.push({dom:r,fn:function(){0!==(4&i)?t.componentWillMove(e,o,r):0!==(8&i)&&t.onComponentWillMove(e,o,r,a)},next:l,parent:o})}function M(n,e,t,o,i){for(var a,u,c=e.flags;!r(e);){var f=e.flags;if(0!==(1521&f))return void(r(a)||!l(a.componentWillMove)&&!l(a.onComponentWillMove)?v(t,e.dom,o):F(i,n,a,e.dom,t,o,c,u));var s=e.children;if(0!==(4&f))a=e.children,u=e.props,e=s.$LI;else if(0!==(8&f))a=e.ref,u=e.props,e=s;else if(0!==(8192&f)){if(2!==e.childFlags){for(var p=0,d=s.length;p<d;++p)M(n,s[p],t,o,i);return}e=s}}}function W(e,t,r){if(l(e.constructor.getDerivedStateFromProps))return n({},r,e.constructor.getDerivedStateFromProps(t,r));return r}var P={createVNode:null};function A(n,e){n.textContent=e}function L(n,e){return c(n)&&n.event===e.event&&n.data===e.data}function N(n,e){for(var t in e)void 0===n[t]&&(n[t]=e[t]);return n}function S(n,e){return l(n)&&(n(e),!0)}var V="$";function I(n,e,t,r,o,l,i,a){this.childFlags=n,this.children=e,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function U(n,e,t,r,o,l,i,a){var u=void 0===o?1:o,c=new I(u,r,t,n,i,l,a,e);return 0===u&&q(c,c.children),c}function E(n,e,t){if(4&n)return t;var o=(32768&n?e.render:e).defaultHooks;if(r(o))return t;if(r(t))return o;return N(t,o)}function T(e,t,o){var l=(32768&e?t.render:t).defaultProps;if(r(l))return o;if(r(o))return n({},l);return N(o,l)}function B(n,e){var t;if(12&n)return n;if(null!=(t=e.prototype)&&t.render)return 4;if(e.render)return 32776;return 8}function O(n,e,t,r,o){var i=new I(1,null,null,n=B(n,e),r,T(n,e,t),E(n,e,o),e);return l(P.createVNode)&&P.createVNode(i),i}function j(n,e){return new I(1,r(n)||!0===n||!1===n?"":n,null,16,e,null,null,null)}function H(n,e,t){var r=U(8192,8192,null,n,e,null,t,null);switch(r.childFlags){case 1:r.children=_(),r.childFlags=2;break;case 16:r.children=[j(n)],r.childFlags=4}return r}function R(n){var e=n.children,t=n.childFlags;return H(2===t?X(e):e.map(X),t,n.key)}function X(n){var e=-16385&n.flags,t=n.props;if(14&e&&!a(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&e))return new I(n.childFlags,n.children,n.className,e,n.key,t,n.ref,n.type);return R(n)}function _(){return j("",null)}function K(n,r,l,u){for(var c=n.length;l<c;l++){var f=n[l];if(!o(f)){var s=u+V+l;if(e(f))K(f,r,0,s);else{if(t(f))f=j(f,s);else{var p=f.key,d=i(p)&&p[0]===V;(81920&f.flags||d)&&(f=X(f)),f.flags|=65536,d?p.substring(0,u.length)!==u&&(f.key=u+p):a(p)?f.key=s:f.key=u+p}r.push(f)}}}}function q(n,r){var l,u=1;if(o(r))l=r;else if(t(r))u=16,l=r;else if(e(r)){for(var c=r.length,f=0;f<c;++f){var s=r[f];if(o(s)||e(s)){l=l||r.slice(0,f),K(r,l,f,"");break}if(t(s))(l=l||r.slice(0,f)).push(j(s,V+f));else{var p=s.key,d=(81920&s.flags)>0,v=a(p),h=i(p)&&p[0]===V;d||v||h?(l=l||r.slice(0,f),(d||h)&&(s=X(s)),(v||h)&&(s.key=V+f),l.push(s)):l&&l.push(s),s.flags|=65536}}u=0===(l=l||r).length?1:8}else(l=r).flags|=65536,81920&r.flags&&(l=X(r)),u=2;return n.children=l,n.childFlags=u,n}function G(n){if(o(n)||t(n))return j(n,null);if(e(n))return H(n,0,null);return 16384&n.flags?X(n):n}var z="http://www.w3.org/1999/xlink",J="http://www.w3.org/XML/1998/namespace",Q={"xlink:actuate":z,"xlink:arcrole":z,"xlink:href":z,"xlink:role":z,"xlink:show":z,"xlink:title":z,"xlink:type":z,"xml:base":J,"xml:lang":J,"xml:space":J};function Y(n){return{onClick:n,onDblClick:n,onFocusIn:n,onFocusOut:n,onKeyDown:n,onKeyPress:n,onKeyUp:n,onMouseDown:n,onMouseMove:n,onMouseUp:n,onTouchEnd:n,onTouchMove:n,onTouchStart:n}}var Z=Y(0),nn=Y(null),en=Y(!0);function tn(n,e){var t=e.$EV;return t||(t=e.$EV=Y(null)),t[n]||1===++Z[n]&&(nn[n]=vn(n)),t}function rn(n,e){var t=e.$EV;null!=t&&t[n]&&(0===--Z[n]&&(document.removeEventListener(p(n),nn[n]),nn[n]=null),t[n]=null)}function on(n,e,t,r){if(l(t))tn(n,r)[n]=t;else if(c(t)){if(L(e,t))return;tn(n,r)[n]=t}else rn(n,r)}function ln(n){return l(n.composedPath)?n.composedPath()[0]:n.target}function an(n,e,t,o){var l=ln(n);do{if(e&&l.disabled)return;var i=l.$EV;if(!r(i)){var u=i[t];if(u&&(o.dom=l,u.event?u.event(u.data,n):u(n),n.cancelBubble))return}l=l.parentNode}while(!a(l))}function un(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function cn(){return this.defaultPrevented}function fn(){return this.cancelBubble}function sn(n){var e={dom:document};return n.isDefaultPrevented=cn,n.isPropagationStopped=fn,n.stopPropagation=un,Object.defineProperty(n,"currentTarget",{configurable:!0,get:function(){return e.dom}}),e}function pn(n){return function(e){if(0!==e.button)return void e.stopPropagation();an(e,!0,n,sn(e))}}function dn(n){return function(e){an(e,!1,n,sn(e))}}function vn(n){var e="onClick"===n||"onDblClick"===n?pn(n):dn(n);return document.addEventListener(p(n),e),e}function hn(n,e){var t=document.createElement("i");return t.innerHTML=e,t.innerHTML===n.innerHTML}function mn(n,e,t){var r=n[e];if(r)r.event?r.event(r.data,t):r(t);else{var o=e.toLowerCase();l(n[o])&&n[o](t)}}function gn(n,e){var t=function(t){var o,a=this.$V;if(r(a))return;var u=null!=(o=a.props)?o:f,c=a.dom;if(i(n))mn(u,n,t);else for(var s=0;s<n.length;++s)mn(u,n[s],t);if(l(e)){var p,d=this.$V,v=null!=(p=d.props)?p:f;e(v,c,!1,d)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function yn(n,e,t){var r="$"+e,o=n[r];if(o){if(o[1].wrapped)return;n.removeEventListener(o[0],o[1]),n[r]=null}l(t)&&(n.addEventListener(e,t),n[r]=[e,t])}function kn(n){return"checkbox"===n||"radio"===n}var bn=gn("onInput",Dn),wn=gn(["onClick","onChange"],Dn);function Cn(n){n.stopPropagation()}function $n(n,e){kn(e.type)?(yn(n,"change",wn),yn(n,"click",Cn)):yn(n,"input",bn)}function Dn(n,e){var t=n.type,o=n.value,l=n.checked,i=n.multiple,a=n.defaultValue,u=!r(o);null!=t&&t!==e.type&&e.setAttribute("type",t),r(i)||i===e.multiple||(e.multiple=i),r(a)||u||(e.defaultValue=a+""),kn(t)?(u&&(e.value=o),r(l)||(e.checked=l)):u&&e.value!==o?(e.defaultValue=o,e.value=o):r(l)||(e.checked=l)}function xn(n,e){if("option"===n.type)Fn(n,e);else{var t=n.children,r=n.flags;if(0!==(4&r))xn(t.$LI,e);else if(0!==(8&r))xn(t,e);else if(2===n.childFlags)xn(t,e);else if(0!==(12&n.childFlags))for(var o=0,l=t.length;o<l;++o)xn(t[o],e)}}function Fn(n,t){var o,l=null!=(o=n.props)?o:f,i=l.value,a=n.dom;a.value=i,i===t||e(t)&&t.includes(i)?a.selected=!0:r(t)&&r(l.selected)||(a.selected=Boolean(l.selected))}Cn.wrapped=!0;var Mn=gn("onChange",Pn);function Wn(n){yn(n,"change",Mn)}function Pn(n,e,t,o){var l=Boolean(n.multiple);r(n.multiple)||l===e.multiple||(e.multiple=l);var i=n.selectedIndex;if(-1===i&&(e.selectedIndex=-1),1!==o.childFlags){var a=n.value;"number"===typeof i&&i>-1&&!r(e.options[i])&&(a=e.options[i].value),t&&r(a)&&(a=n.defaultValue),xn(o,a)}}var An,Ln,Nn=gn("onInput",In),Sn=gn("onChange");function Vn(n,e){yn(n,"input",Nn),l(e.onChange)&&yn(n,"change",Sn)}function In(n,e,t){var o=n.value,l=e.value;if(r(o)){if(t){var i=n.defaultValue;r(i)||i===l||(e.defaultValue=i,e.value=i)}}else l!==o&&(e.defaultValue=o,e.value=o)}function Un(n,e,t,r,o,l){0!==(64&n)?Dn(r,t):0!==(256&n)?Pn(r,t,o,e):0!==(128&n)&&In(r,t,o),l&&(t.$V=e)}function En(n,e,t){0!==(64&n)?$n(e,t):0!==(256&n)?Wn(e):0!==(128&n)&&Vn(e,t)}function Tn(n){return kn(n.type)?!r(n.checked):!r(n.value)}function Bn(n){r(n)||!S(n,null)&&n.current&&(n.current=null)}function On(n,e,t){r(n)||!l(n)&&void 0===n.current||t.push((function(){S(n,e)||void 0===n.current||(n.current=e)}))}function jn(n,e,t){Hn(n,t),x(n,e,t)}function Hn(n,e){var t,o=n.flags,i=n.children;if(0!==(481&o)){t=n.ref;var u=n.props;Bn(t);var c=n.childFlags;if(!a(u))for(var p=Object.keys(u),d=0,v=p.length;d<v;d++){var h=p[d];en[h]&&rn(h,n.dom)}12&c?Rn(i,e):2===c&&Hn(i,e)}else if(i)if(4&o){l(i.componentWillUnmount)&&i.componentWillUnmount();var m=e;l(i.componentWillDisappear)&&(m=new s,qn(e,i,i.$LI.dom,o,void 0)),Bn(n.ref),i.$UN=!0,Hn(i.$LI,m)}else if(8&o){var g=e;if(!r(t=n.ref)){var y=null;l(t.onComponentWillUnmount)&&(y=b(n,!0),t.onComponentWillUnmount(y,n.props||f)),l(t.onComponentWillDisappear)&&(g=new s,qn(e,t,y=y||b(n,!0),o,n.props))}Hn(i,g)}else 1024&o?jn(i,n.ref,e):8192&o&&12&n.childFlags&&Rn(i,e)}function Rn(n,e){for(var t=0,r=n.length;t<r;++t)Hn(n[t],e)}function Xn(n,e){return function(){if(e)for(var t=0;t<n.length;t++)$(n[t],e,!1)}}function _n(n,e,t){t.componentWillDisappear.length>0?w(t.componentWillDisappear,Xn(e,n)):n.textContent=""}function Kn(n,e,t,r){Rn(t,r),8192&e.flags?x(e,n,r):_n(n,t,r)}function qn(n,e,t,r,o){n.componentWillDisappear.push((function(n){4&r?e.componentWillDisappear(t,n):8&r&&e.onComponentWillDisappear(t,o,n)}))}function Gn(n){var e=n.event;return function(t){e(n.data,t)}}function zn(n,e,t,r){if(c(t)){if(L(e,t))return;t=Gn(t)}yn(r,p(n),t)}function Jn(n,e,t){if(r(e))return void t.removeAttribute("style");var o,l,a=t.style;if(i(e))return void(a.cssText=e);if(r(n)||i(n))for(o in e)l=e[o],a.setProperty(o,l);else{for(o in e)(l=e[o])!==n[o]&&a.setProperty(o,l);for(o in n)r(e[o])&&a.removeProperty(o)}}function Qn(n,e,t,o,l){var i=(null==n?void 0:n.__html)||"",u=(null==e?void 0:e.__html)||"";i!==u&&(r(u)||hn(o,u)||(a(t)||(12&t.childFlags?Rn(t.children,l):2===t.childFlags&&Hn(t.children,l),t.children=null,t.childFlags=1),o.innerHTML=u))}function Yn(n,e,t){var o=r(n)?"":n;e[t]!==o&&(e[t]=o)}function Zn(n,e,t,o,l,i,a,u){switch(n){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":o.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":o[n]=!!t;break;case"defaultChecked":case"value":case"volume":if(i&&"value"===n)break;Yn(t,o,n);break;case"style":Jn(e,t,o);break;case"dangerouslySetInnerHTML":Qn(e,t,a,o,u);break;default:en[n]?on(n,e,t,o):111===n.charCodeAt(0)&&110===n.charCodeAt(1)?zn(n,e,t,o):r(t)?o.removeAttribute(n):l&&Q[n]?o.setAttributeNS(Q[n],n,t):o.setAttribute(n,t)}}function ne(n,e,t,r,o,l){var i=!1,a=(448&e)>0;for(var u in a&&(i=Tn(t))&&En(e,r,t),t)Zn(u,null,t[u],r,o,i,null,l);a&&Un(e,n,r,t,!0,i)}function ee(e,t,r){var o=G(e.render(t,e.state,r)),i=r;return l(e.getChildContext)&&(i=n({},r,e.getChildContext())),e.$CX=i,o}function te(n,e,t,r,o,i){var u=new e(t,r),c=u.$N=Boolean(e.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=o,u.$L=i,n.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=W(u,t,u.state);else if(l(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!a(s)){var p=u.state;if(a(p))u.state=s;else for(var d in s)p[d]=s[d];u.$PS=null}u.$BR=!1}return u.$LI=ee(u,t,r),u}function re(n,e){var t=n.props||f;return 32768&n.flags?n.type.render(t,n.ref,e):n.type(t,e)}function oe(n,e,t,r,o,l,i){var a=n.flags|=16384;0!==(481&a)?ue(n,e,t,r,o,l,i):0!==(4&a)?fe(n,e,t,r,o,l,i):8&a?se(n,e,t,r,o,l,i):16&a?ae(n,e,o):8192&a?ie(n,t,e,r,o,l,i):1024&a&&le(n,t,e,o,l,i)}function le(n,e,t,r,o,l){oe(n.children,n.ref,e,!1,null,o,l);var i=_();ae(i,t,r),n.dom=i.dom}function ie(n,e,t,r,o,l,i){var a=n.children,u=n.childFlags;12&u&&0===a.length&&(u=n.childFlags=2,a=n.children=_()),2===u?oe(a,t,e,r,o,l,i):ce(a,t,e,r,o,l,i)}function ae(n,e,t){var r=n.dom=document.createTextNode(n.children);a(e)||v(e,r,t)}function ue(n,e,t,o,l,i,u){var c=n.flags,f=n.props,s=n.className,p=n.childFlags,d=n.dom=h(n.type,o=o||(32&c)>0),m=n.children;if(r(s)||""===s||(o?d.setAttribute("class",s):d.className=s),16===p)A(d,m);else if(1!==p){var g=o&&"foreignObject"!==n.type;2===p?(16384&m.flags&&(n.children=m=X(m)),oe(m,d,t,g,null,i,u)):8!==p&&4!==p||ce(m,d,t,g,null,i,u)}a(e)||v(e,d,l),a(f)||ne(n,c,f,d,o,u),On(n.ref,d,i)}function ce(n,e,t,r,o,l,i){for(var a=0;a<n.length;++a){var u=n[a];16384&u.flags&&(n[a]=u=X(u)),oe(u,e,t,r,o,l,i)}}function fe(n,e,t,r,o,i,a){var u=te(n,n.type,n.props||f,t,r,i),c=a;l(u.componentDidAppear)&&(c=new s),oe(u.$LI,e,u.$CX,r,o,i,c),he(n.ref,u,i,a)}function se(n,e,t,o,i,a,u){var c=n.ref,f=u;!r(c)&&l(c.onComponentDidAppear)&&(f=new s),oe(n.children=G(re(n,t)),e,t,o,i,a,f),ge(n,a,u)}function pe(n){return function(){n.componentDidMount()}}function de(n,e,t){n.componentDidAppear.push((function(){e.componentDidAppear(t)}))}function ve(n,e,t,r){n.componentDidAppear.push((function(){e.onComponentDidAppear(t,r)}))}function he(n,e,t,r){On(n,e,t),l(e.componentDidMount)&&t.push(pe(e)),l(e.componentDidAppear)&&de(r,e,e.$LI.dom)}function me(n,e){return function(){n.onComponentDidMount(b(e,!0),e.props||f)}}function ge(n,e,t){var o=n.ref;r(o)||(S(o.onComponentWillMount,n.props||f),l(o.onComponentDidMount)&&e.push(me(o,n)),l(o.onComponentDidAppear)&&ve(t,o,b(n,!0),n.props))}function ye(n,e,t,r,o,l,i){Hn(n,i),0!==(e.flags&n.flags&1521)?(oe(e,null,r,o,null,l,i),m(t,e.dom,n.dom)):(oe(e,t,r,o,b(n,!0),l,i),x(n,t,i))}function ke(n,e,t,r,o,l,i,a){var u=e.flags|=16384;n.flags!==u||n.type!==e.type||n.key!==e.key||2048&u?16384&n.flags?ye(n,e,t,r,o,i,a):oe(e,t,r,o,l,i,a):481&u?De(n,e,r,o,i,a):4&u?Ae(n,e,t,r,o,l,i,a):8&u?Le(n,e,t,r,o,l,i,a):16&u?Ne(n,e):8192&u?Ce(n,e,t,r,o,i,a):$e(n,e,r,i,a)}function be(n,e,t){n!==e&&(""!==n?t.firstChild.nodeValue=e:A(t,e))}function we(n,e){n.textContent!==e&&(n.textContent=e)}function Ce(n,e,t,r,o,l,i){var a=n.children,u=e.children,c=n.childFlags,f=e.childFlags,s=null;12&f&&0===u.length&&(f=e.childFlags=2,u=e.children=_());var p=0!==(2&f);if(12&c){var d=a.length;(8&c&&8&f||p||!p&&u.length>d)&&(s=b(a[d-1],!1).nextSibling)}Me(c,f,a,u,t,r,o,s,n,l,i)}function $e(n,e,t,r,l){var i=n.ref,a=e.ref,u=e.children;if(Me(n.childFlags,e.childFlags,n.children,u,i,t,!1,null,n,r,l),e.dom=n.dom,i!==a&&!o(u)){var c=u.dom;g(i,c),d(a,c)}}function De(n,e,t,o,l,i){var a,u=e.dom=n.dom,c=n.props,s=e.props,p=e.flags,d=!1,v=!1;if(o=o||(32&p)>0,c!==s){var h=c||f;if((a=s||f)!==f)for(var m in(d=(448&p)>0)&&(v=Tn(a)),a){var g=h[m],y=a[m];g!==y&&Zn(m,g,y,u,o,v,n,i)}if(h!==f)for(var k in h)r(a[k])&&!r(h[k])&&Zn(k,h[k],null,u,o,v,n,i)}var b=e.children,w=e.className;n.className!==w&&(r(w)?u.removeAttribute("class"):o?u.setAttribute("class",w):u.className=w),4096&p?we(u,b):Me(n.childFlags,e.childFlags,n.children,b,u,t,o&&"foreignObject"!==e.type,null,n,l,i),d&&Un(p,e,u,a,!1,v);var C=e.ref,$=n.ref;$!==C&&(Bn($),On(C,u,l))}function xe(n,e,t,r,o,l,i){Hn(n,i),ce(e,t,r,o,b(n,!0),l,i),x(n,t,i)}function Fe(n,e,t,r,o,l,i,a,u,c,f){var s=0|n.length,p=0|e.length;0===s?p>0&&ce(e,t,r,o,l,i,a):0===p?Kn(t,u,n,a):8===c&&8===f?Ve(n,e,t,r,o,s,p,l,u,i,a):Se(n,e,t,r,o,s,p,l,i,a)}function Me(n,e,t,r,o,l,i,a,u,c,f){switch(n){case 2:switch(e){case 2:ke(t,r,o,l,i,a,c,f);break;case 1:jn(t,o,f);break;case 16:Hn(t,f),A(o,r);break;default:xe(t,r,o,l,i,c,f)}break;case 1:switch(e){case 2:oe(r,o,l,i,a,c,f);break;case 1:break;case 16:A(o,r);break;default:ce(r,o,l,i,a,c,f)}break;case 16:switch(e){case 16:be(t,r,o);break;case 2:_n(o,t,f),oe(r,o,l,i,a,c,f);break;case 1:_n(o,t,f);break;default:_n(o,t,f),ce(r,o,l,i,a,c,f)}break;default:switch(e){case 16:Rn(t,f),A(o,r);break;case 2:Kn(o,u,t,f),oe(r,o,l,i,a,c,f);break;case 1:Kn(o,u,t,f);break;default:Fe(t,r,o,l,i,a,c,f,u,e,n)}}}function We(n,e,t,r,o){o.push((function(){n.componentDidUpdate(e,t,r)}))}function Pe(e,t,r,o,i,a,u,c,f,s){var p=e.state,d=e.props,v=Boolean(e.$N),h=l(e.shouldComponentUpdate);if(v&&(t=W(e,r,t!==p?n({},p,t):t)),u||!h||h&&e.shouldComponentUpdate(r,t,i)){!v&&l(e.componentWillUpdate)&&e.componentWillUpdate(r,t,i),e.props=r,e.state=t,e.context=i;var m=null,g=ee(e,r,i);v&&l(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(d,p)),ke(e.$LI,g,o,e.$CX,a,c,f,s),e.$LI=g,l(e.componentDidUpdate)&&We(e,d,p,m,f)}else e.props=r,e.state=t,e.context=i}function Ae(e,t,r,o,i,u,c,s){var p=t.children=e.children;if(a(p))return;p.$L=c;var d=t.props||f,v=t.ref,h=e.ref,m=p.state;if(!p.$N){if(l(p.componentWillReceiveProps)){if(p.$BR=!0,p.componentWillReceiveProps(d,o),p.$UN)return;p.$BR=!1}a(p.$PS)||(m=n({},m,p.$PS),p.$PS=null)}Pe(p,m,d,r,o,i,!1,u,c,s),h!==v&&(Bn(h),On(v,p,c))}function Le(n,e,t,o,i,a,u,c){var s=!0,p=e.props||f,d=e.ref,v=n.props,h=!r(d),m=n.children;if(h&&l(d.onComponentShouldUpdate)&&(s=d.onComponentShouldUpdate(v,p)),s){h&&l(d.onComponentWillUpdate)&&d.onComponentWillUpdate(v,p);var g=G(re(e,o));ke(m,g,t,o,i,a,u,c),e.children=g,h&&l(d.onComponentDidUpdate)&&d.onComponentDidUpdate(v,p)}else e.children=m}function Ne(n,e){var t=e.children,r=e.dom=n.dom;t!==n.children&&(r.nodeValue=t)}function Se(n,e,t,r,o,l,i,a,u,c){for(var f,s,p=l>i?i:l,d=0;d<p;++d)f=e[d],s=n[d],16384&f.flags&&(f=e[d]=X(f)),ke(s,f,t,r,o,a,u,c),n[d]=f;if(l<i)for(d=p;d<i;++d)16384&(f=e[d]).flags&&(f=e[d]=X(f)),oe(f,t,r,o,a,u,c);else if(l>i)for(d=p;d<l;++d)jn(n[d],t,c)}function Ve(n,e,t,r,o,l,i,a,u,c,f){var s,p,d=l-1,v=i-1,h=0,m=n[h],g=e[h];n:{for(;m.key===g.key;){if(16384&g.flags&&(e[h]=g=X(g)),ke(m,g,t,r,o,a,c,f),n[h]=g,++h>d||h>v)break n;m=n[h],g=e[h]}for(m=n[d],g=e[v];m.key===g.key;){if(16384&g.flags&&(e[v]=g=X(g)),ke(m,g,t,r,o,a,c,f),n[d]=g,v--,h>--d||h>v)break n;m=n[d],g=e[v]}}if(h>d){if(h<=v)for(p=(s=v+1)<i?b(e[s],!0):a;h<=v;)16384&(g=e[h]).flags&&(e[h]=g=X(g)),++h,oe(g,t,r,o,p,c,f)}else if(h>v)for(;h<=d;)jn(n[h++],t,f);else Ie(n,e,r,l,i,d,v,h,t,o,a,u,c,f)}function Ie(n,e,t,r,o,l,i,a,u,c,f,s,p,d){var v,h,m=0,g=0,y=a,k=a,w=l-a+1,$=i-a+1,D=new Int32Array($+1),x=w===r,F=!1,W=0,P=0;if(o<4||(w|$)<32)for(g=y;g<=l;++g)if(v=n[g],P<$){for(a=k;a<=i;a++)if(h=e[a],v.key===h.key){if(D[a-k]=g+1,x)for(x=!1;y<g;)jn(n[y++],u,d);W>a?F=!0:W=a,16384&h.flags&&(e[a]=h=X(h)),ke(v,h,u,t,c,f,p,d),++P;break}!x&&a>i&&jn(v,u,d)}else x||jn(v,u,d);else{var A={};for(g=k;g<=i;++g)A[e[g].key]=g;for(g=y;g<=l;++g)if(v=n[g],P<$)if(void 0!==(a=A[v.key])){if(x)for(x=!1;g>y;)jn(n[y++],u,d);D[a-k]=g+1,W>a?F=!0:W=a,16384&(h=e[a]).flags&&(e[a]=h=X(h)),ke(v,h,u,t,c,f,p,d),++P}else x||jn(v,u,d);else x||jn(v,u,d)}if(x)Kn(u,s,n,d),ce(e,u,t,c,f,p,d);else if(F){var L=Ee(D);for(a=L.length-1,g=$-1;g>=0;g--)0===D[g]?(16384&(h=e[W=g+k]).flags&&(e[W]=h=X(h)),oe(h,u,t,c,(m=W+1)<o?b(e[m],!0):f,p,d)):a<0||g!==L[a]?M(s,h=e[W=g+k],u,(m=W+1)<o?b(e[m],!0):f,d):a--;d.componentWillMove.length>0&&C(d.componentWillMove)}else if(P!==$)for(g=$-1;g>=0;g--)0===D[g]&&(16384&(h=e[W=g+k]).flags&&(e[W]=h=X(h)),oe(h,u,t,c,(m=W+1)<o?b(e[m],!0):f,p,d))}var Ue=0;function Ee(n){var e=0,t=0,r=0,o=0,l=0,i=0,a=0,u=n.length;for(u>Ue&&(Ue=u,An=new Int32Array(u),Ln=new Int32Array(u));t<u;++t)if(0!==(e=n[t])){if(n[r=An[o]]<e){Ln[t]=r,An[++o]=t;continue}for(l=0,i=o;l<i;)n[An[a=l+i>>1]]<e?l=a+1:i=a;e<n[An[l]]&&(l>0&&(Ln[t]=An[l-1]),An[l]=t)}l=o+1;var c=new Int32Array(l);for(i=An[l-1];l-- >0;)c[l]=i,i=Ln[i],An[l]=0;return c}function Te(n,e,t,o){var i=[],a=new s,u=e.$V;r(u)?r(n)||(0!==(16384&n.flags)&&(n=X(n)),oe(n,e,o,!1,null,i,a),e.$V=n,u=n):r(n)?(jn(u,e,a),e.$V=null):(16384&n.flags&&(n=X(n)),ke(u,n,e,o,!1,null,i,a),u=e.$V=n),y(i),w(a.componentDidAppear),l(t)&&t()}function Be(n,e,t,r){void 0===t&&(t=null),void 0===r&&(r=f),Te(n,e,t,r)}function Oe(n){console.log("ok",n)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),Promise.resolve().then.bind(Promise.resolve());var je=500,He=[function(){for(var n=[],e=0;e<je;e++)n.push(U(1,"li",null,e,16,{onclick:Oe},null,null));return U(1,"ul",null,n,4,null,null,null)},function(){for(var n=[],e=0;e<je;e++)n.push(U(1,"li",null,e,16,{onclick:u(e,Oe)},null,null));return U(1,"ul",null,n,4,null,null,null)},function(){for(var n=[],e=0;e<je;e++)n.push(U(1,"li",null,e,16,{onClick:Oe},null,null));return U(1,"ul",null,n,4,null,null,null)},function(){for(var n=[],e=0;e<je;e++)n.push(U(1,"li",null,e,16,{onclick:function(){console.log("ok")}},null,null));return U(1,"ul",null,n,4,null,null,null)}],Re=["hoistedNonSyntheticEvents","hoistedLinkEventNonSynthetic","hoistedSyntheticEvents","newFuncsNonSyntheticEvents"],Xe=function(n){return n.reduce((function(n,e){return n+e}),0)/n.length},_e=function(n){return Math.min.apply(Math,n)},Ke=function(n){return Math.max.apply(Math,n)};function qe(n){for(var e=n.results,t=[],r=0;r<e.length;r++){var o=e[r],l=["mount","patch","unmount"];t.push(U(1,"div","test-name",o.name,0,null,null,null));for(var i=0;i<l.length;i++){var a=l[i],u=o[a];t.push(U(1,"div","test-part",a,0,null,null,null)),t.push(U(1,"div","test-result",[j("Avg: "),u.avg],0,null,null,null)),t.push(U(1,"div","test-result",[j("Min: "),u.min],0,null,null,null)),t.push(U(1,"div","test-result",[j("Max: "),u.max],0,null,null,null))}}return U(1,"div","results",t,4,null,null,null)}document.addEventListener("DOMContentLoaded",(function(n){for(var e=document.querySelector("#App"),t=[],r=[],o=[],l=[],i=0,a=0;a<3;a++)for(var u=0;u<He.length;u++)Be(O(8,He[u]),e);function c(n){var t=performance.now();Be(O(8,He[i]),e);var o=performance.now();r.push(o-t),setTimeout(f,30,n)}function f(n){for(var t=performance.now(),r=0;r<7;r++)Be(O(8,He[i]),e);var l=performance.now();o.push(l-t),setTimeout(s,30,n)}function s(n){var t=performance.now();Be(null,e);var r=performance.now();l.push(r-t),setTimeout(n,30)}Be(null,e);var p=0;!function n(){p<10&&i<He.length?(p++,setTimeout(c,30,n)):i<He.length?(t.push({name:Re[i],mount:{min:_e(r),avg:Xe(r),max:Ke(r)},patch:{min:_e(o),avg:Xe(o),max:Ke(o)},unmount:{min:_e(l),avg:Xe(l),max:Ke(l)}}),r=[],o=[],l=[],i++,p=0,n()):setTimeout((function(){Be(O(2,qe,{results:t},null,null),e)}),1e3)}()}))}();
