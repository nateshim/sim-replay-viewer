var Q_=Object.defineProperty;var sp=t=>{throw TypeError(t)};var J_=(t,e,n)=>e in t?Q_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ee=(t,e,n)=>J_(t,typeof e!="symbol"?e+"":e,n),ec=(t,e,n)=>e.has(t)||sp("Cannot "+n);var ce=(t,e,n)=>(ec(t,e,"read from private field"),n?n.call(t):e.get(t)),ct=(t,e,n)=>e.has(t)?sp("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),at=(t,e,n,i)=>(ec(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),_n=(t,e,n)=>(ec(t,e,"access private method"),n);var ap=(t,e,n,i)=>({set _(r){at(t,e,r,n)},get _(){return ce(t,e,i)}});function ey(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ty(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bg={exports:{}},Au={},Lg={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),ny=Symbol.for("react.portal"),iy=Symbol.for("react.fragment"),ry=Symbol.for("react.strict_mode"),sy=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),oy=Symbol.for("react.context"),ly=Symbol.for("react.forward_ref"),uy=Symbol.for("react.suspense"),cy=Symbol.for("react.memo"),fy=Symbol.for("react.lazy"),op=Symbol.iterator;function hy(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var Ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ng=Object.assign,Dg={};function pa(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||Ig}pa.prototype.isReactComponent={};pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ug(){}Ug.prototype=pa.prototype;function Vh(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||Ig}var Gh=Vh.prototype=new Ug;Gh.constructor=Vh;Ng(Gh,pa.prototype);Gh.isPureReactComponent=!0;var lp=Array.isArray,Fg=Object.prototype.hasOwnProperty,Wh={current:null},Og={key:!0,ref:!0,__self:!0,__source:!0};function kg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Fg.call(e,i)&&!Og.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ao,type:t,key:s,ref:a,props:r,_owner:Wh.current}}function dy(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function py(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var up=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?py(""+t.key):e.toString(36)}function Rl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ao:case ny:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+tc(a,0):i,lp(r)?(n="",t!=null&&(n=t.replace(up,"$&/")+"/"),Rl(r,e,n,"",function(u){return u})):r!=null&&(Xh(r)&&(r=dy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(up,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",lp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+tc(s,o);a+=Rl(s,e,n,l,r)}else if(l=hy(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+tc(s,o++),a+=Rl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ko(t,e,n){if(t==null)return t;var i=[],r=0;return Rl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function my(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Pl={transition:null},gy={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:Wh};function Bg(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ko,forEach:function(t,e,n){ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ko(t,function(){e++}),e},toArray:function(t){return ko(t,function(e){return e})||[]},only:function(t){if(!Xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=pa;Ge.Fragment=iy;Ge.Profiler=sy;Ge.PureComponent=Vh;Ge.StrictMode=ry;Ge.Suspense=uy;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gy;Ge.act=Bg;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ng({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Wh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Fg.call(e,l)&&!Og.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ao,type:t.type,key:r,ref:s,props:i,_owner:a}};Ge.createContext=function(t){return t={$$typeof:oy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ay,_context:t},t.Consumer=t};Ge.createElement=kg;Ge.createFactory=function(t){var e=kg.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:ly,render:t}};Ge.isValidElement=Xh;Ge.lazy=function(t){return{$$typeof:fy,_payload:{_status:-1,_result:t},_init:my}};Ge.memo=function(t,e){return{$$typeof:cy,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};Ge.unstable_act=Bg;Ge.useCallback=function(t,e){return rn.current.useCallback(t,e)};Ge.useContext=function(t){return rn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return rn.current.useEffect(t,e)};Ge.useId=function(){return rn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return rn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Ge.useRef=function(t){return rn.current.useRef(t)};Ge.useState=function(t){return rn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return rn.current.useTransition()};Ge.version="18.3.1";Lg.exports=Ge;var ee=Lg.exports;const zg=ty(ee),vy=ey({__proto__:null,default:zg},[ee]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=ee,yy=Symbol.for("react.element"),xy=Symbol.for("react.fragment"),Sy=Object.prototype.hasOwnProperty,My=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ey={key:!0,ref:!0,__self:!0,__source:!0};function Hg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Sy.call(e,i)&&!Ey.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:yy,type:t,key:s,ref:a,props:r,_owner:My.current}}Au.Fragment=xy;Au.jsx=Hg;Au.jsxs=Hg;bg.exports=Au;var q=bg.exports,af={},Vg={exports:{}},Cn={},Gg={exports:{}},Wg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,W){var Y=I.length;I.push(W);e:for(;0<Y;){var Q=Y-1>>>1,de=I[Q];if(0<r(de,W))I[Q]=W,I[Y]=de,Y=Q;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var W=I[0],Y=I.pop();if(Y!==W){I[0]=Y;e:for(var Q=0,de=I.length,Te=de>>>1;Q<Te;){var $=2*(Q+1)-1,K=I[$],fe=$+1,le=I[fe];if(0>r(K,Y))fe<de&&0>r(le,K)?(I[Q]=le,I[fe]=Y,Q=fe):(I[Q]=K,I[$]=Y,Q=$);else if(fe<de&&0>r(le,Y))I[Q]=le,I[fe]=Y,Q=fe;else break e}}return W}function r(I,W){var Y=I.sortIndex-W.sortIndex;return Y!==0?Y:I.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,h=null,d=3,m=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var W=n(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=I)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function x(I){if(y=!1,v(I),!_)if(n(l)!==null)_=!0,N(C);else{var W=n(u);W!==null&&j(x,W.startTime-I)}}function C(I,W){_=!1,y&&(y=!1,f(b),b=-1),m=!0;var Y=d;try{for(v(W),h=n(l);h!==null&&(!(h.expirationTime>W)||I&&!R());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,d=h.priorityLevel;var de=Q(h.expirationTime<=W);W=t.unstable_now(),typeof de=="function"?h.callback=de:h===n(l)&&i(l),v(W)}else i(l);h=n(l)}if(h!==null)var Te=!0;else{var $=n(u);$!==null&&j(x,$.startTime-W),Te=!1}return Te}finally{h=null,d=Y,m=!1}}var T=!1,A=null,b=-1,w=5,S=-1;function R(){return!(t.unstable_now()-S<w)}function H(){if(A!==null){var I=t.unstable_now();S=I;var W=!0;try{W=A(!0,I)}finally{W?k():(T=!1,A=null)}}else T=!1}var k;if(typeof g=="function")k=function(){g(H)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=H,k=function(){D.postMessage(null)}}else k=function(){p(H,0)};function N(I){A=I,T||(T=!0,k())}function j(I,W){b=p(function(){I(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,N(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var Y=d;d=W;try{return I()}finally{d=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=d;d=I;try{return W()}finally{d=Y}},t.unstable_scheduleCallback=function(I,W,Y){var Q=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Q+Y:Q):Y=Q,I){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Y+de,I={id:c++,callback:W,priorityLevel:I,startTime:Y,expirationTime:de,sortIndex:-1},Y>Q?(I.sortIndex=Y,e(u,I),n(l)===null&&I===n(u)&&(y?(f(b),b=-1):y=!0,j(x,Y-Q))):(I.sortIndex=de,e(l,I),_||m||(_=!0,N(C))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var W=d;return function(){var Y=d;d=W;try{return I.apply(this,arguments)}finally{d=Y}}}})(Wg);Gg.exports=Wg;var wy=Gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=ee,An=wy;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,Ja={};function as(t,e){na(t,e),na(t+"Capture",e)}function na(t,e){for(Ja[t]=e,t=0;t<e.length;t++)Xg.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=Object.prototype.hasOwnProperty,Ay=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cp={},fp={};function Cy(t){return of.call(fp,t)?!0:of.call(cp,t)?!1:Ay.test(t)?fp[t]=!0:(cp[t]=!0,!1)}function Ry(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Py(t,e,n,i){if(e===null||typeof e>"u"||Ry(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var jh=/[\-:]([a-z])/g;function $h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jh,$h);Wt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jh,$h);Wt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jh,$h);Wt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yh(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Py(e,n,r,i)&&(n=null),i||r===null?Cy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),jg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Kh=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),cf=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),Yg=Symbol.for("react.offscreen"),hp=Symbol.iterator;function Sa(t){return t===null||typeof t!="object"?null:(t=hp&&t[hp]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,nc;function Fa(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var ic=!1;function rc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fa(t):""}function by(t){switch(t.tag){case 5:return Fa(t.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case Ps:return"Portal";case lf:return"Profiler";case qh:return"StrictMode";case uf:return"Suspense";case cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $g:return(t.displayName||"Context")+".Consumer";case jg:return(t._context.displayName||"Context")+".Provider";case Kh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:ff(t.type)||"Memo";case Yi:e=t._payload,t=t._init;try{return ff(t(e))}catch{}}return null}function Ly(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ff(e);case 8:return e===qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Iy(t){var e=qg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zo(t){t._valueTracker||(t._valueTracker=Iy(t))}function Kg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hf(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zg(t,e){e=e.checked,e!=null&&Yh(t,"checked",e,!1)}function df(t,e){Zg(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oa=Array.isArray;function Vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Oa(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function Qg(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ho,ev=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ny=["Webkit","ms","Moz","O"];Object.keys(Ga).forEach(function(t){Ny.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ga[e]=Ga[t]})});function tv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ga.hasOwnProperty(t)&&Ga[t]?(""+e).trim():e+"px"}function nv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Dy=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vf(t,e){if(e){if(Dy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function _f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yf=null;function Qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xf=null,Gs=null,Ws=null;function vp(t){if(t=Po(t)){if(typeof xf!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Lu(e),xf(t.stateNode,t.type,e))}}function iv(t){Gs?Ws?Ws.push(t):Ws=[t]:Gs=t}function rv(){if(Gs){var t=Gs,e=Ws;if(Ws=Gs=null,vp(t),e)for(t=0;t<e.length;t++)vp(e[t])}}function sv(t,e){return t(e)}function av(){}var sc=!1;function ov(t,e,n){if(sc)return t(e,n);sc=!0;try{return sv(t,e,n)}finally{sc=!1,(Gs!==null||Ws!==null)&&(av(),rv())}}function to(t,e){var n=t.stateNode;if(n===null)return null;var i=Lu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Sf=!1;if(Ni)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{Sf=!1}function Uy(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Wa=!1,$l=null,Yl=!1,Mf=null,Fy={onError:function(t){Wa=!0,$l=t}};function Oy(t,e,n,i,r,s,a,o,l){Wa=!1,$l=null,Uy.apply(Fy,arguments)}function ky(t,e,n,i,r,s,a,o,l){if(Oy.apply(this,arguments),Wa){if(Wa){var u=$l;Wa=!1,$l=null}else throw Error(ie(198));Yl||(Yl=!0,Mf=u)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _p(t){if(os(t)!==t)throw Error(ie(188))}function By(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _p(r),t;if(s===i)return _p(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function uv(t){return t=By(t),t!==null?cv(t):null}function cv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cv(t);if(e!==null)return e;t=t.sibling}return null}var fv=An.unstable_scheduleCallback,yp=An.unstable_cancelCallback,zy=An.unstable_shouldYield,Hy=An.unstable_requestPaint,St=An.unstable_now,Vy=An.unstable_getCurrentPriorityLevel,Jh=An.unstable_ImmediatePriority,hv=An.unstable_UserBlockingPriority,ql=An.unstable_NormalPriority,Gy=An.unstable_LowPriority,dv=An.unstable_IdlePriority,Cu=null,di=null;function Wy(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:$y,Xy=Math.log,jy=Math.LN2;function $y(t){return t>>>=0,t===0?32:31-(Xy(t)/jy|0)|0}var Vo=64,Go=4194304;function ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ka(o):(s&=a,s!==0&&(i=ka(s)))}else a=n&~r,a!==0?i=ka(a):s!==0&&(i=ka(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function Yy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Qn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Yy(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pv(){var t=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),t}function ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function Ky(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function mv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gv,td,vv,_v,yv,wf=!1,Wo=[],sr=null,ar=null,or=null,no=new Map,io=new Map,Ki=[],Zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":no.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function Ea(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Po(e),e!==null&&td(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Qy(t,e,n,i,r){switch(e){case"focusin":return sr=Ea(sr,t,e,n,i,r),!0;case"dragenter":return ar=Ea(ar,t,e,n,i,r),!0;case"mouseover":return or=Ea(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return no.set(s,Ea(no.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,io.set(s,Ea(io.get(s)||null,t,e,n,i,r)),!0}return!1}function xv(t){var e=kr(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=lv(n),e!==null){t.blockedOn=e,yv(t.priority,function(){vv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yf=i,n.target.dispatchEvent(i),yf=null}else return e=Po(n),e!==null&&td(e),t.blockedOn=n,!1;e.shift()}return!0}function Sp(t,e,n){bl(t)&&n.delete(e)}function Jy(){wf=!1,sr!==null&&bl(sr)&&(sr=null),ar!==null&&bl(ar)&&(ar=null),or!==null&&bl(or)&&(or=null),no.forEach(Sp),io.forEach(Sp)}function wa(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,Jy)))}function ro(t){function e(r){return wa(r,t)}if(0<Wo.length){wa(Wo[0],t);for(var n=1;n<Wo.length;n++){var i=Wo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&wa(sr,t),ar!==null&&wa(ar,t),or!==null&&wa(or,t),no.forEach(e),io.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)xv(n),n.blockedOn===null&&Ki.shift()}var Xs=ki.ReactCurrentBatchConfig,Zl=!0;function ex(t,e,n,i){var r=nt,s=Xs.transition;Xs.transition=null;try{nt=1,nd(t,e,n,i)}finally{nt=r,Xs.transition=s}}function tx(t,e,n,i){var r=nt,s=Xs.transition;Xs.transition=null;try{nt=4,nd(t,e,n,i)}finally{nt=r,Xs.transition=s}}function nd(t,e,n,i){if(Zl){var r=Tf(t,e,n,i);if(r===null)gc(t,e,i,Ql,n),xp(t,i);else if(Qy(r,t,e,n,i))i.stopPropagation();else if(xp(t,i),e&4&&-1<Zy.indexOf(t)){for(;r!==null;){var s=Po(r);if(s!==null&&gv(s),s=Tf(t,e,n,i),s===null&&gc(t,e,i,Ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gc(t,e,i,null,n)}}var Ql=null;function Tf(t,e,n,i){if(Ql=null,t=Qh(i),t=kr(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function Sv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vy()){case Jh:return 1;case hv:return 4;case ql:case Gy:return 16;case dv:return 536870912;default:return 16}default:return 16}}var nr=null,id=null,Ll=null;function Mv(){if(Ll)return Ll;var t,e=id,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ll=r.slice(t,1<i?1-i:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function Mp(){return!1}function Rn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xo:Mp,this.isPropagationStopped=Mp,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=Rn(ma),Ro=gt({},ma,{view:0,detail:0}),nx=Rn(Ro),oc,lc,Ta,Ru=gt({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ta&&(Ta&&t.type==="mousemove"?(oc=t.screenX-Ta.screenX,lc=t.screenY-Ta.screenY):lc=oc=0,Ta=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),Ep=Rn(Ru),ix=gt({},Ru,{dataTransfer:0}),rx=Rn(ix),sx=gt({},Ro,{relatedTarget:0}),uc=Rn(sx),ax=gt({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=Rn(ax),lx=gt({},ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ux=Rn(lx),cx=gt({},ma,{data:0}),wp=Rn(cx),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dx[t])?!!e[t]:!1}function sd(){return px}var mx=gt({},Ro,{key:function(t){if(t.key){var e=fx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gx=Rn(mx),vx=gt({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Rn(vx),_x=gt({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),yx=Rn(_x),xx=gt({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=Rn(xx),Mx=gt({},Ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ex=Rn(Mx),wx=[9,13,27,32],ad=Ni&&"CompositionEvent"in window,Xa=null;Ni&&"documentMode"in document&&(Xa=document.documentMode);var Tx=Ni&&"TextEvent"in window&&!Xa,Ev=Ni&&(!ad||Xa&&8<Xa&&11>=Xa),Ap=" ",Cp=!1;function wv(t,e){switch(t){case"keyup":return wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function Ax(t,e){switch(t){case"compositionend":return Tv(e);case"keypress":return e.which!==32?null:(Cp=!0,Ap);case"textInput":return t=e.data,t===Ap&&Cp?null:t;default:return null}}function Cx(t,e){if(Ls)return t==="compositionend"||!ad&&wv(t,e)?(t=Mv(),Ll=id=nr=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ev&&e.locale!=="ko"?null:e.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rx[t.type]:e==="textarea"}function Av(t,e,n,i){iv(i),e=Jl(e,"onChange"),0<e.length&&(n=new rd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ja=null,so=null;function Px(t){Ov(t,0)}function Pu(t){var e=Ds(t);if(Kg(e))return t}function bx(t,e){if(t==="change")return e}var Cv=!1;if(Ni){var cc;if(Ni){var fc="oninput"in document;if(!fc){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),fc=typeof Pp.oninput=="function"}cc=fc}else cc=!1;Cv=cc&&(!document.documentMode||9<document.documentMode)}function bp(){ja&&(ja.detachEvent("onpropertychange",Rv),so=ja=null)}function Rv(t){if(t.propertyName==="value"&&Pu(so)){var e=[];Av(e,so,t,Qh(t)),ov(Px,e)}}function Lx(t,e,n){t==="focusin"?(bp(),ja=e,so=n,ja.attachEvent("onpropertychange",Rv)):t==="focusout"&&bp()}function Ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(so)}function Nx(t,e){if(t==="click")return Pu(e)}function Dx(t,e){if(t==="input"||t==="change")return Pu(e)}function Ux(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:Ux;function ao(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!of.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,e){var n=Lp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lp(n)}}function Pv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bv(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fx(t){var e=bv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pv(n.ownerDocument.documentElement,n)){if(i!==null&&od(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ip(n,s);var a=Ip(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ox=Ni&&"documentMode"in document&&11>=document.documentMode,Is=null,Af=null,$a=null,Cf=!1;function Np(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cf||Is==null||Is!==jl(i)||(i=Is,"selectionStart"in i&&od(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$a&&ao($a,i)||($a=i,i=Jl(Af,"onSelect"),0<i.length&&(e=new rd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Is)))}function jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ns={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},hc={},Lv={};Ni&&(Lv=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function bu(t){if(hc[t])return hc[t];if(!Ns[t])return t;var e=Ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lv)return hc[t]=e[n];return t}var Iv=bu("animationend"),Nv=bu("animationiteration"),Dv=bu("animationstart"),Uv=bu("transitionend"),Fv=new Map,Dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){Fv.set(t,e),as(e,[t])}for(var dc=0;dc<Dp.length;dc++){var pc=Dp[dc],kx=pc.toLowerCase(),Bx=pc[0].toUpperCase()+pc.slice(1);xr(kx,"on"+Bx)}xr(Iv,"onAnimationEnd");xr(Nv,"onAnimationIteration");xr(Dv,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Uv,"onTransitionEnd");na("onMouseEnter",["mouseout","mouseover"]);na("onMouseLeave",["mouseout","mouseover"]);na("onPointerEnter",["pointerout","pointerover"]);na("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function Up(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ky(i,e,void 0,t),t.currentTarget=null}function Ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Up(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Up(r,o,u),s=l}}}if(Yl)throw t=Mf,Yl=!1,Mf=null,t}function ot(t,e){var n=e[If];n===void 0&&(n=e[If]=new Set);var i=t+"__bubble";n.has(i)||(kv(e,t,2,!1),n.add(i))}function mc(t,e,n){var i=0;e&&(i|=4),kv(n,t,i,e)}var $o="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[$o]){t[$o]=!0,Xg.forEach(function(n){n!=="selectionchange"&&(zx.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$o]||(e[$o]=!0,mc("selectionchange",!1,e))}}function kv(t,e,n,i){switch(Sv(e)){case 1:var r=ex;break;case 4:r=tx;break;default:r=nd}n=r.bind(null,e,n,t),r=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=kr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ov(function(){var u=s,c=Qh(n),h=[];e:{var d=Fv.get(t);if(d!==void 0){var m=rd,_=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":m=gx;break;case"focusin":_="focus",m=uc;break;case"focusout":_="blur",m=uc;break;case"beforeblur":case"afterblur":m=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=yx;break;case Iv:case Nv:case Dv:m=ox;break;case Uv:m=Sx;break;case"scroll":m=nx;break;case"wheel":m=Ex;break;case"copy":case"cut":case"paste":m=ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Tp}var y=(e&4)!==0,p=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var g=u,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,f!==null&&(x=to(g,f),x!=null&&y.push(lo(g,x,v)))),p)break;g=g.return}0<y.length&&(d=new m(d,_,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==yf&&(_=n.relatedTarget||n.fromElement)&&(kr(_)||_[Di]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?kr(_):null,_!==null&&(p=os(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(y=Ep,x="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Tp,x="onPointerLeave",f="onPointerEnter",g="pointer"),p=m==null?d:Ds(m),v=_==null?d:Ds(_),d=new y(x,g+"leave",m,n,c),d.target=p,d.relatedTarget=v,x=null,kr(c)===u&&(y=new y(f,g+"enter",_,n,c),y.target=v,y.relatedTarget=p,x=y),p=x,m&&_)t:{for(y=m,f=_,g=0,v=y;v;v=fs(v))g++;for(v=0,x=f;x;x=fs(x))v++;for(;0<g-v;)y=fs(y),g--;for(;0<v-g;)f=fs(f),v--;for(;g--;){if(y===f||f!==null&&y===f.alternate)break t;y=fs(y),f=fs(f)}y=null}else y=null;m!==null&&Fp(h,d,m,y,!1),_!==null&&p!==null&&Fp(h,p,_,y,!0)}}e:{if(d=u?Ds(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var C=bx;else if(Rp(d))if(Cv)C=Dx;else{C=Ix;var T=Lx}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Nx);if(C&&(C=C(t,u))){Av(h,C,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&pf(d,"number",d.value)}switch(T=u?Ds(u):window,t){case"focusin":(Rp(T)||T.contentEditable==="true")&&(Is=T,Af=u,$a=null);break;case"focusout":$a=Af=Is=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,Np(h,n,c);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":Np(h,n,c)}var A;if(ad)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ls?wv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Ev&&n.locale!=="ko"&&(Ls||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ls&&(A=Mv()):(nr=c,id="value"in nr?nr.value:nr.textContent,Ls=!0)),T=Jl(u,b),0<T.length&&(b=new wp(b,t,null,n,c),h.push({event:b,listeners:T}),A?b.data=A:(A=Tv(n),A!==null&&(b.data=A)))),(A=Tx?Ax(t,n):Cx(t,n))&&(u=Jl(u,"onBeforeInput"),0<u.length&&(c=new wp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}Ov(h,e)})}function lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=to(t,n),s!=null&&i.unshift(lo(t,s,r)),s=to(t,e),s!=null&&i.push(lo(t,s,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=to(n,s),l!=null&&a.unshift(lo(n,l,o))):r||(l=to(n,s),l!=null&&a.push(lo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Hx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function Op(t){return(typeof t=="string"?t:""+t).replace(Hx,`
`).replace(Vx,"")}function Yo(t,e,n){if(e=Op(e),Op(t)!==e&&n)throw Error(ie(425))}function eu(){}var Rf=null,Pf=null;function bf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(t){return kp.resolve(null).then(t).catch(Xx)}:Lf;function Xx(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ro(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ro(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),ci="__reactFiber$"+ga,uo="__reactProps$"+ga,Di="__reactContainer$"+ga,If="__reactEvents$"+ga,jx="__reactListeners$"+ga,$x="__reactHandles$"+ga;function kr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bp(t);t!==null;){if(n=t[ci])return n;t=Bp(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[ci]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Lu(t){return t[uo]||null}var Nf=[],Us=-1;function Sr(t){return{current:t}}function ut(t){0>Us||(t.current=Nf[Us],Nf[Us]=null,Us--)}function rt(t,e){Us++,Nf[Us]=t.current,t.current=e}var vr={},Qt=Sr(vr),fn=Sr(!1),Zr=vr;function ia(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function tu(){ut(fn),ut(Qt)}function zp(t,e,n){if(Qt.current!==vr)throw Error(ie(168));rt(Qt,e),rt(fn,n)}function Bv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Ly(t)||"Unknown",r));return gt({},n,i)}function nu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Zr=Qt.current,rt(Qt,t),rt(fn,fn.current),!0}function Hp(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Bv(t,e,Zr),i.__reactInternalMemoizedMergedChildContext=t,ut(fn),ut(Qt),rt(Qt,t)):ut(fn),rt(fn,n)}var Ti=null,Iu=!1,_c=!1;function zv(t){Ti===null?Ti=[t]:Ti.push(t)}function Yx(t){Iu=!0,zv(t)}function Mr(){if(!_c&&Ti!==null){_c=!0;var t=0,e=nt;try{var n=Ti;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,Iu=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),fv(Jh,Mr),r}finally{nt=e,_c=!1}}return null}var Fs=[],Os=0,iu=null,ru=0,Nn=[],Dn=0,Qr=null,Ri=1,Pi="";function Ir(t,e){Fs[Os++]=ru,Fs[Os++]=iu,iu=t,ru=e}function Hv(t,e,n){Nn[Dn++]=Ri,Nn[Dn++]=Pi,Nn[Dn++]=Qr,Qr=t;var i=Ri;t=Pi;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ri=1<<32-Qn(e)+r|n<<r|i,Pi=s+t}else Ri=1<<s|n<<r|i,Pi=t}function ld(t){t.return!==null&&(Ir(t,1),Hv(t,1,0))}function ud(t){for(;t===iu;)iu=Fs[--Os],Fs[Os]=null,ru=Fs[--Os],Fs[Os]=null;for(;t===Qr;)Qr=Nn[--Dn],Nn[Dn]=null,Pi=Nn[--Dn],Nn[Dn]=null,Ri=Nn[--Dn],Nn[Dn]=null}var Tn=null,wn=null,ht=!1,qn=null;function Vv(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function Df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(ht){var e=wn;if(e){var n=e;if(!Vp(t,e)){if(Df(t))throw Error(ie(418));e=lr(n.nextSibling);var i=Tn;e&&Vp(t,e)?Vv(i,n):(t.flags=t.flags&-4097|2,ht=!1,Tn=t)}}else{if(Df(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ht=!1,Tn=t}}}function Gp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function qo(t){if(t!==Tn)return!1;if(!ht)return Gp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bf(t.type,t.memoizedProps)),e&&(e=wn)){if(Df(t))throw Gv(),Error(ie(418));for(;e;)Vv(t,e),e=lr(e.nextSibling)}if(Gp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?lr(t.stateNode.nextSibling):null;return!0}function Gv(){for(var t=wn;t;)t=lr(t.nextSibling)}function ra(){wn=Tn=null,ht=!1}function cd(t){qn===null?qn=[t]:qn.push(t)}var qx=ki.ReactCurrentBatchConfig;function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Ko(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wp(t){var e=t._init;return e(t._payload)}function Wv(t){function e(f,g){if(t){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=hr(f,g),f.index=0,f.sibling=null,f}function s(f,g,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,g,v,x){return g===null||g.tag!==6?(g=Tc(v,f.mode,x),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,x){var C=v.type;return C===bs?c(f,g,v.props.children,x,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yi&&Wp(C)===g.type)?(x=r(g,v.props),x.ref=Aa(f,g,v),x.return=f,x):(x=Bl(v.type,v.key,v.props,null,f.mode,x),x.ref=Aa(f,g,v),x.return=f,x)}function u(f,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Ac(v,f.mode,x),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function c(f,g,v,x,C){return g===null||g.tag!==7?(g=Kr(v,f.mode,x,C),g.return=f,g):(g=r(g,v),g.return=f,g)}function h(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Tc(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bo:return v=Bl(g.type,g.key,g.props,null,f.mode,v),v.ref=Aa(f,null,g),v.return=f,v;case Ps:return g=Ac(g,f.mode,v),g.return=f,g;case Yi:var x=g._init;return h(f,x(g._payload),v)}if(Oa(g)||Sa(g))return g=Kr(g,f.mode,v,null),g.return=f,g;Ko(f,g)}return null}function d(f,g,v,x){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:o(f,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bo:return v.key===C?l(f,g,v,x):null;case Ps:return v.key===C?u(f,g,v,x):null;case Yi:return C=v._init,d(f,g,C(v._payload),x)}if(Oa(v)||Sa(v))return C!==null?null:c(f,g,v,x,null);Ko(f,v)}return null}function m(f,g,v,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(v)||null,o(g,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bo:return f=f.get(x.key===null?v:x.key)||null,l(g,f,x,C);case Ps:return f=f.get(x.key===null?v:x.key)||null,u(g,f,x,C);case Yi:var T=x._init;return m(f,g,v,T(x._payload),C)}if(Oa(x)||Sa(x))return f=f.get(v)||null,c(g,f,x,C,null);Ko(g,x)}return null}function _(f,g,v,x){for(var C=null,T=null,A=g,b=g=0,w=null;A!==null&&b<v.length;b++){A.index>b?(w=A,A=null):w=A.sibling;var S=d(f,A,v[b],x);if(S===null){A===null&&(A=w);break}t&&A&&S.alternate===null&&e(f,A),g=s(S,g,b),T===null?C=S:T.sibling=S,T=S,A=w}if(b===v.length)return n(f,A),ht&&Ir(f,b),C;if(A===null){for(;b<v.length;b++)A=h(f,v[b],x),A!==null&&(g=s(A,g,b),T===null?C=A:T.sibling=A,T=A);return ht&&Ir(f,b),C}for(A=i(f,A);b<v.length;b++)w=m(A,f,b,v[b],x),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?b:w.key),g=s(w,g,b),T===null?C=w:T.sibling=w,T=w);return t&&A.forEach(function(R){return e(f,R)}),ht&&Ir(f,b),C}function y(f,g,v,x){var C=Sa(v);if(typeof C!="function")throw Error(ie(150));if(v=C.call(v),v==null)throw Error(ie(151));for(var T=C=null,A=g,b=g=0,w=null,S=v.next();A!==null&&!S.done;b++,S=v.next()){A.index>b?(w=A,A=null):w=A.sibling;var R=d(f,A,S.value,x);if(R===null){A===null&&(A=w);break}t&&A&&R.alternate===null&&e(f,A),g=s(R,g,b),T===null?C=R:T.sibling=R,T=R,A=w}if(S.done)return n(f,A),ht&&Ir(f,b),C;if(A===null){for(;!S.done;b++,S=v.next())S=h(f,S.value,x),S!==null&&(g=s(S,g,b),T===null?C=S:T.sibling=S,T=S);return ht&&Ir(f,b),C}for(A=i(f,A);!S.done;b++,S=v.next())S=m(A,f,b,S.value,x),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?b:S.key),g=s(S,g,b),T===null?C=S:T.sibling=S,T=S);return t&&A.forEach(function(H){return e(f,H)}),ht&&Ir(f,b),C}function p(f,g,v,x){if(typeof v=="object"&&v!==null&&v.type===bs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Bo:e:{for(var C=v.key,T=g;T!==null;){if(T.key===C){if(C=v.type,C===bs){if(T.tag===7){n(f,T.sibling),g=r(T,v.props.children),g.return=f,f=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yi&&Wp(C)===T.type){n(f,T.sibling),g=r(T,v.props),g.ref=Aa(f,T,v),g.return=f,f=g;break e}n(f,T);break}else e(f,T);T=T.sibling}v.type===bs?(g=Kr(v.props.children,f.mode,x,v.key),g.return=f,f=g):(x=Bl(v.type,v.key,v.props,null,f.mode,x),x.ref=Aa(f,g,v),x.return=f,f=x)}return a(f);case Ps:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=Ac(v,f.mode,x),g.return=f,f=g}return a(f);case Yi:return T=v._init,p(f,g,T(v._payload),x)}if(Oa(v))return _(f,g,v,x);if(Sa(v))return y(f,g,v,x);Ko(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,v),g.return=f,f=g):(n(f,g),g=Tc(v,f.mode,x),g.return=f,f=g),a(f)):n(f,g)}return p}var sa=Wv(!0),Xv=Wv(!1),su=Sr(null),au=null,ks=null,fd=null;function hd(){fd=ks=au=null}function dd(t){var e=su.current;ut(su),t._currentValue=e}function Ff(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){au=t,fd=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(fd!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(au===null)throw Error(ie(308));ks=t,au.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Br=null;function pd(t){Br===null?Br=[t]:Br.push(t)}function jv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ed(t,n)}}function Xp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,c=u=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(d=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(m,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break e;h=gt({},h,d);break e;case 2:qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);es|=a,t.lanes=a,t.memoizedState=h}}function jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var bo={},pi=Sr(bo),co=Sr(bo),fo=Sr(bo);function zr(t){if(t===bo)throw Error(ie(174));return t}function gd(t,e){switch(rt(fo,e),rt(co,t),rt(pi,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}ut(pi),rt(pi,e)}function aa(){ut(pi),ut(co),ut(fo)}function Yv(t){zr(fo.current);var e=zr(pi.current),n=gf(e,t.type);e!==n&&(rt(co,t),rt(pi,n))}function vd(t){co.current===t&&(ut(pi),ut(co))}var pt=Sr(0);function lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yc=[];function _d(){for(var t=0;t<yc.length;t++)yc[t]._workInProgressVersionPrimary=null;yc.length=0}var Dl=ki.ReactCurrentDispatcher,xc=ki.ReactCurrentBatchConfig,Jr=0,mt=null,Pt=null,Ft=null,uu=!1,Ya=!1,ho=0,Kx=0;function Xt(){throw Error(ie(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function xd(t,e,n,i,r,s){if(Jr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?eS:tS,t=n(i,r),Ya){s=0;do{if(Ya=!1,ho=0,25<=s)throw Error(ie(301));s+=1,Ft=Pt=null,e.updateQueue=null,Dl.current=nS,t=n(i,r)}while(Ya)}if(Dl.current=cu,e=Pt!==null&&Pt.next!==null,Jr=0,Ft=Pt=mt=null,uu=!1,e)throw Error(ie(300));return t}function Sd(){var t=ho!==0;return ho=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?mt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function zn(){if(Pt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ft===null?mt.memoizedState:Ft.next;if(e!==null)Ft=e,Pt=t;else{if(t===null)throw Error(ie(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ft===null?mt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function po(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((Jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,mt.lanes|=c,es|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,ei(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,es|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ei(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function qv(){}function Kv(t,e){var n=mt,i=zn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Md(Jv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,mo(9,Qv.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ie(349));Jr&30||Zv(n,e,r)}return r}function Zv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qv(t,e,n,i){e.value=n,e.getSnapshot=i,e0(e)&&t0(t)}function Jv(t,e,n){return n(function(){e0(e)&&t0(t)})}function e0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function t0(t){var e=Ui(t,1);e!==null&&Jn(e,t,1,-1)}function $p(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:t},e.queue=t,t=t.dispatch=Jx.bind(null,mt,t),[e.memoizedState,t]}function mo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function n0(){return zn().memoizedState}function Ul(t,e,n,i){var r=ai();mt.flags|=t,r.memoizedState=mo(1|e,n,void 0,i===void 0?null:i)}function Nu(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var a=Pt.memoizedState;if(s=a.destroy,i!==null&&yd(i,a.deps)){r.memoizedState=mo(e,n,s,i);return}}mt.flags|=t,r.memoizedState=mo(1|e,n,s,i)}function Yp(t,e){return Ul(8390656,8,t,e)}function Md(t,e){return Nu(2048,8,t,e)}function i0(t,e){return Nu(4,2,t,e)}function r0(t,e){return Nu(4,4,t,e)}function s0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a0(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,s0.bind(null,e,t),n)}function Ed(){}function o0(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function l0(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function u0(t,e,n){return Jr&21?(ei(n,e)||(n=pv(),mt.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function Zx(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=xc.transition;xc.transition={};try{t(!1),e()}finally{nt=n,xc.transition=i}}function c0(){return zn().memoizedState}function Qx(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},f0(t))h0(e,n);else if(n=jv(t,e,n,i),n!==null){var r=nn();Jn(n,t,i,r),d0(n,e,i)}}function Jx(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(f0(t))h0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ei(o,a)){var l=e.interleaved;l===null?(r.next=r,pd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=jv(t,e,r,i),n!==null&&(r=nn(),Jn(n,t,i,r),d0(n,e,i))}}function f0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function h0(t,e){Ya=uu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ed(t,n)}}var cu={readContext:Bn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},eS={readContext:Bn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:Yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4194308,4,s0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ul(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Qx.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:$p,useDebugValue:Ed,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=$p(!1),e=t[0];return t=Zx.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ai();if(ht){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ot===null)throw Error(ie(349));Jr&30||Zv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Yp(Jv.bind(null,i,s,t),[t]),i.flags|=2048,mo(9,Qv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=Ot.identifierPrefix;if(ht){var n=Pi,i=Ri;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Kx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tS={readContext:Bn,useCallback:o0,useContext:Bn,useEffect:Md,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:Sc,useRef:n0,useState:function(){return Sc(po)},useDebugValue:Ed,useDeferredValue:function(t){var e=zn();return u0(e,Pt.memoizedState,t)},useTransition:function(){var t=Sc(po)[0],e=zn().memoizedState;return[t,e]},useMutableSource:qv,useSyncExternalStore:Kv,useId:c0,unstable_isNewReconciler:!1},nS={readContext:Bn,useCallback:o0,useContext:Bn,useEffect:Md,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:Mc,useRef:n0,useState:function(){return Mc(po)},useDebugValue:Ed,useDeferredValue:function(t){var e=zn();return Pt===null?e.memoizedState=t:u0(e,Pt.memoizedState,t)},useTransition:function(){var t=Mc(po)[0],e=zn().memoizedState;return[t,e]},useMutableSource:qv,useSyncExternalStore:Kv,useId:c0,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Du={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=fr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(Jn(e,t,r,i),Nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=fr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(Jn(e,t,r,i),Nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=fr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(Jn(e,t,i,n),Nl(e,t,i))}};function qp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ao(n,i)||!ao(r,s):!0}function p0(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=hn(e)?Zr:Qt.current,i=e.contextTypes,s=(i=i!=null)?ia(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Du,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Du.enqueueReplaceState(e,e.state,null)}function kf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},md(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=hn(e)?Zr:Qt.current,r.context=ia(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Du.enqueueReplaceState(r,r.state,null),ou(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oa(t,e){try{var n="",i=e;do n+=by(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iS=typeof WeakMap=="function"?WeakMap:Map;function m0(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hu||(hu=!0,qf=i),Bf(t,e)},n}function g0(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bf(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Zp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=vS.bind(null,t,e,n),e.then(t,t))}function Qp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var rS=ki.ReactCurrentOwner,cn=!1;function tn(t,e,n,i){e.child=t===null?Xv(e,null,n,i):sa(e,t.child,n,i)}function em(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=xd(t,e,n,i,s,r),n=Sd(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(ht&&n&&ld(e),e.flags|=1,tn(t,e,i,r),e.child)}function tm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ld(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,v0(t,e,s,i,r)):(t=Bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(a,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=hr(s,i),t.ref=e.ref,t.return=e,e.child=t}function v0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ao(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return zf(t,e,n,i,r)}function _0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(zs,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(zs,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(zs,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(zs,En),En|=i;return tn(t,e,r,n),e.child}function y0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zf(t,e,n,i,r){var s=hn(n)?Zr:Qt.current;return s=ia(e,s),js(e,r),n=xd(t,e,n,i,s,r),i=Sd(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(ht&&i&&ld(e),e.flags|=1,tn(t,e,n,r),e.child)}function nm(t,e,n,i,r){if(hn(n)){var s=!0;nu(e)}else s=!1;if(js(e,r),e.stateNode===null)Fl(t,e),p0(e,n,i),kf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bn(u):(u=hn(n)?Zr:Qt.current,u=ia(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Kp(e,a,i,u),qi=!1;var d=e.memoizedState;a.state=d,ou(e,i,a,r),l=e.memoizedState,o!==i||d!==l||fn.current||qi?(typeof c=="function"&&(Of(e,n,c,i),l=e.memoizedState),(o=qi||qp(e,n,o,i,d,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,$v(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:jn(e.type,o),a.props=u,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=hn(n)?Zr:Qt.current,l=ia(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&Kp(e,a,i,l),qi=!1,d=e.memoizedState,a.state=d,ou(e,i,a,r);var _=e.memoizedState;o!==h||d!==_||fn.current||qi?(typeof m=="function"&&(Of(e,n,m,i),_=e.memoizedState),(u=qi||qp(e,n,u,i,d,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Hf(t,e,n,i,s,r)}function Hf(t,e,n,i,r,s){y0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Hp(e,n,!1),Fi(t,e,s);i=e.stateNode,rS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=sa(e,t.child,null,s),e.child=sa(e,null,o,s)):tn(t,e,o,s),e.memoizedState=i.state,r&&Hp(e,n,!0),e.child}function x0(t){var e=t.stateNode;e.pendingContext?zp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zp(t,e.context,!1),gd(t,e.containerInfo)}function im(t,e,n,i,r){return ra(),cd(r),e.flags|=256,tn(t,e,n,i),e.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function Gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function S0(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(pt,r&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ou(a,i,0,null),t=Kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gf(n),e.memoizedState=Vf,t):wd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return sS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=hr(o,s):(s=Kr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Gf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Vf,i}return s=t.child,t=s.sibling,i=hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wd(t,e){return e=Ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zo(t,e,n,i){return i!==null&&cd(i),sa(e,t.child,null,n),t=wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(ie(422))),Zo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ou({mode:"visible",children:i.children},r,0,null),s=Kr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&sa(e,t.child,null,a),e.child.memoizedState=Gf(a),e.memoizedState=Vf,s);if(!(e.mode&1))return Zo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Ec(s,i,void 0),Zo(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),Jn(i,t,r,-1))}return bd(),i=Ec(Error(ie(421))),Zo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_S.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=lr(r.nextSibling),Tn=e,ht=!0,qn=null,t!==null&&(Nn[Dn++]=Ri,Nn[Dn++]=Pi,Nn[Dn++]=Qr,Ri=t.id,Pi=t.overflow,Qr=e),e=wd(e,i.children),e.flags|=4096,e)}function rm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ff(t.return,e,n)}function wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function M0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rm(t,n,e);else if(t.tag===19)rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&lu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&lu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aS(t,e,n){switch(e.tag){case 3:x0(e),ra();break;case 5:Yv(e);break;case 1:hn(e.type)&&nu(e);break;case 4:gd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(su,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?S0(t,e,n):(rt(pt,pt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);rt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return M0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,_0(t,e,n)}return Fi(t,e,n)}var E0,Wf,w0,T0;E0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};w0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(pi.current);var s=null;switch(n){case"input":r=hf(t,r),i=hf(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=mf(t,r),i=mf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=eu)}vf(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ja.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};T0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ca(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oS(t,e,n){var i=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return hn(e.type)&&tu(),jt(e),null;case 3:return i=e.stateNode,aa(),ut(fn),ut(Qt),_d(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Qf(qn),qn=null))),Wf(t,e),jt(e),null;case 5:vd(e);var r=zr(fo.current);if(n=e.type,t!==null&&e.stateNode!=null)w0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return jt(e),null}if(t=zr(pi.current),qo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[uo]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<Ba.length;r++)ot(Ba[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":dp(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":mp(i,s),ot("invalid",i)}vf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,o,t),r=["children",""+o]):Ja.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ot("scroll",i)}switch(n){case"input":zo(i),pp(i,s,!0);break;case"textarea":zo(i),gp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=eu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ci]=e,t[uo]=i,E0(t,e,!1,!1),e.stateNode=t;e:{switch(a=_f(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ba.length;r++)ot(Ba[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":dp(t,i),r=hf(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":mp(t,i),r=mf(t,i),ot("invalid",t);break;default:r=i}vf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?nv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ev(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&eo(t,l):typeof l=="number"&&eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ja.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&Yh(t,s,l,a))}switch(n){case"input":zo(t),pp(t,i,!1);break;case"textarea":zo(t),gp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=eu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)T0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=zr(fo.current),zr(pi.current),qo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return jt(e),null;case 13:if(ut(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&wn!==null&&e.mode&1&&!(e.flags&128))Gv(),ra(),e.flags|=98560,s=!1;else if(s=qo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ci]=e}else ra(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else qn!==null&&(Qf(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Lt===0&&(Lt=3):bd())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return aa(),Wf(t,e),t===null&&oo(e.stateNode.containerInfo),jt(e),null;case 10:return dd(e.type._context),jt(e),null;case 17:return hn(e.type)&&tu(),jt(e),null;case 19:if(ut(pt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ca(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=lu(t),a!==null){for(e.flags|=128,Ca(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>la&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=lu(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return jt(e),null}else 2*St()-s.renderingStartTime>la&&n!==1073741824&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=pt.current,rt(pt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Pd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function lS(t,e){switch(ud(e),e.tag){case 1:return hn(e.type)&&tu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return aa(),ut(fn),ut(Qt),_d(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vd(e),null;case 13:if(ut(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(pt),null;case 4:return aa(),null;case 10:return dd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Qo=!1,Zt=!1,uS=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Xf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var sm=!1;function cS(t,e){if(Rf=Zl,t=bv(),od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++c===i&&(l=a),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pf={focusedElem:t,selectionRange:n},Zl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),p);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(x){yt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=sm,sm=!1,_}function qa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xf(e,n,s)}r=r.next}while(r!==i)}}function Uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function A0(t){var e=t.alternate;e!==null&&(t.alternate=null,A0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[uo],delete e[If],delete e[jx],delete e[$x])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C0(t){return t.tag===5||t.tag===3||t.tag===4}function am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=eu));else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}function Yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}var Ht=null,Yn=!1;function zi(t,e,n){for(n=n.child;n!==null;)R0(t,e,n),n=n.sibling}function R0(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:Zt||Bs(n,e);case 6:var i=Ht,r=Yn;Ht=null,zi(t,e,n),Ht=i,Yn=r,Ht!==null&&(Yn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Yn?(t=Ht,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),ro(t)):vc(Ht,n.stateNode));break;case 4:i=Ht,r=Yn,Ht=n.stateNode.containerInfo,Yn=!0,zi(t,e,n),Ht=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Xf(n,e,a),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!Zt&&(Bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,zi(t,e,n),Zt=i):zi(t,e,n);break;default:zi(t,e,n)}}function om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uS),e.forEach(function(i){var r=yS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,Yn=!1;break e;case 3:Ht=o.stateNode.containerInfo,Yn=!0;break e;case 4:Ht=o.stateNode.containerInfo,Yn=!0;break e}o=o.return}if(Ht===null)throw Error(ie(160));R0(s,a,r),Ht=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P0(e,t),e=e.sibling}function P0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ni(t),i&4){try{qa(3,t,t.return),Uu(3,t)}catch(y){yt(t,t.return,y)}try{qa(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Vn(e,t),ni(t),i&512&&n!==null&&Bs(n,n.return);break;case 5:if(Vn(e,t),ni(t),i&512&&n!==null&&Bs(n,n.return),t.flags&32){var r=t.stateNode;try{eo(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Zg(r,s),_f(o,a);var u=_f(o,s);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];c==="style"?nv(r,h):c==="dangerouslySetInnerHTML"?ev(r,h):c==="children"?eo(r,h):Yh(r,c,h,u)}switch(o){case"input":df(r,s);break;case"textarea":Qg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Vs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Vs(r,!!s.multiple,s.defaultValue,!0):Vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[uo]=s}catch(y){yt(t,t.return,y)}}break;case 6:if(Vn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){yt(t,t.return,y)}}break;case 3:if(Vn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Vn(e,t),ni(t);break;case 13:Vn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cd=St())),i&4&&om(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||c,Vn(e,t),Zt=u):Vn(e,t),ni(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ge=t,c=t.child;c!==null;){for(h=ge=c;ge!==null;){switch(d=ge,m=d.child,d.tag){case 0:case 11:case 14:case 15:qa(4,d,d.return);break;case 1:Bs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:Bs(d,d.return);break;case 22:if(d.memoizedState!==null){um(h);continue}}m!==null?(m.return=d,ge=m):um(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=tv("display",a))}catch(y){yt(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){yt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vn(e,t),ni(t),i&4&&om(t);break;case 21:break;default:Vn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(eo(r,""),i.flags&=-33);var s=am(t);Yf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=am(t);$f(t,o,a);break;default:throw Error(ie(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fS(t,e,n){ge=t,b0(t)}function b0(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Qo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=Qo;var u=Zt;if(Qo=a,(Zt=l)&&!u)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?cm(r):l!==null?(l.return=a,ge=l):cm(r);for(;s!==null;)ge=s,b0(s),s=s.sibling;ge=r,Qo=o,Zt=u}lm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):lm(t)}}function lm(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Uu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ro(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Zt||e.flags&512&&jf(e)}catch(d){yt(e,e.return,d)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function um(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function cm(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uu(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{jf(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{jf(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var hS=Math.ceil,fu=ki.ReactCurrentDispatcher,Td=ki.ReactCurrentOwner,kn=ki.ReactCurrentBatchConfig,$e=0,Ot=null,Ct=null,Vt=0,En=0,zs=Sr(0),Lt=0,go=null,es=0,Fu=0,Ad=0,Ka=null,ln=null,Cd=0,la=1/0,wi=null,hu=!1,qf=null,cr=null,Jo=!1,ir=null,du=0,Za=0,Kf=null,Ol=-1,kl=0;function nn(){return $e&6?St():Ol!==-1?Ol:Ol=St()}function fr(t){return t.mode&1?$e&2&&Vt!==0?Vt&-Vt:qx.transition!==null?(kl===0&&(kl=pv()),kl):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Sv(t.type)),t):1}function Jn(t,e,n,i){if(50<Za)throw Za=0,Kf=null,Error(ie(185));Co(t,n,i),(!($e&2)||t!==Ot)&&(t===Ot&&(!($e&2)&&(Fu|=n),Lt===4&&Zi(t,Vt)),dn(t,i),n===1&&$e===0&&!(e.mode&1)&&(la=St()+500,Iu&&Mr()))}function dn(t,e){var n=t.callbackNode;qy(t,e);var i=Kl(t,t===Ot?Vt:0);if(i===0)n!==null&&yp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yp(n),e===1)t.tag===0?Yx(fm.bind(null,t)):zv(fm.bind(null,t)),Wx(function(){!($e&6)&&Mr()}),n=null;else{switch(mv(i)){case 1:n=Jh;break;case 4:n=hv;break;case 16:n=ql;break;case 536870912:n=dv;break;default:n=ql}n=k0(n,L0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function L0(t,e){if(Ol=-1,kl=0,$e&6)throw Error(ie(327));var n=t.callbackNode;if($s()&&t.callbackNode!==n)return null;var i=Kl(t,t===Ot?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=pu(t,i);else{e=i;var r=$e;$e|=2;var s=N0();(Ot!==t||Vt!==e)&&(wi=null,la=St()+500,qr(t,e));do try{mS();break}catch(o){I0(t,o)}while(!0);hd(),fu.current=s,$e=r,Ct!==null?e=0:(Ot=null,Vt=0,e=Lt)}if(e!==0){if(e===2&&(r=Ef(t),r!==0&&(i=r,e=Zf(t,r))),e===1)throw n=go,qr(t,0),Zi(t,i),dn(t,St()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!dS(r)&&(e=pu(t,i),e===2&&(s=Ef(t),s!==0&&(i=s,e=Zf(t,s))),e===1))throw n=go,qr(t,0),Zi(t,i),dn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Nr(t,ln,wi);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=Cd+500-St(),10<e)){if(Kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Lf(Nr.bind(null,t,ln,wi),e);break}Nr(t,ln,wi);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Qn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hS(i/1960))-i,10<i){t.timeoutHandle=Lf(Nr.bind(null,t,ln,wi),i);break}Nr(t,ln,wi);break;case 5:Nr(t,ln,wi);break;default:throw Error(ie(329))}}}return dn(t,St()),t.callbackNode===n?L0.bind(null,t):null}function Zf(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=pu(t,e),t!==2&&(e=ln,ln=n,e!==null&&Qf(e)),t}function Qf(t){ln===null?ln=t:ln.push.apply(ln,t)}function dS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~Ad,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function fm(t){if($e&6)throw Error(ie(327));$s();var e=Kl(t,0);if(!(e&1))return dn(t,St()),null;var n=pu(t,e);if(t.tag!==0&&n===2){var i=Ef(t);i!==0&&(e=i,n=Zf(t,i))}if(n===1)throw n=go,qr(t,0),Zi(t,e),dn(t,St()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,ln,wi),dn(t,St()),null}function Rd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(la=St()+500,Iu&&Mr())}}function ts(t){ir!==null&&ir.tag===0&&!($e&6)&&$s();var e=$e;$e|=1;var n=kn.transition,i=nt;try{if(kn.transition=null,nt=1,t)return t()}finally{nt=i,kn.transition=n,$e=e,!($e&6)&&Mr()}}function Pd(){En=zs.current,ut(zs)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gx(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(ud(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tu();break;case 3:aa(),ut(fn),ut(Qt),_d();break;case 5:vd(i);break;case 4:aa();break;case 13:ut(pt);break;case 19:ut(pt);break;case 10:dd(i.type._context);break;case 22:case 23:Pd()}n=n.return}if(Ot=t,Ct=t=hr(t.current,null),Vt=En=e,Lt=0,go=null,Ad=Fu=es=0,ln=Ka=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Br=null}return t}function I0(t,e){do{var n=Ct;try{if(hd(),Dl.current=cu,uu){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uu=!1}if(Jr=0,Ft=Pt=mt=null,Ya=!1,ho=0,Td.current=null,n===null||n.return===null){Lt=1,go=e,Ct=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Qp(a);if(m!==null){m.flags&=-257,Jp(m,a,o,s,e),m.mode&1&&Zp(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Zp(s,u,e),bd();break e}l=Error(ie(426))}}else if(ht&&o.mode&1){var p=Qp(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Jp(p,a,o,s,e),cd(oa(l,o));break e}}s=l=oa(l,o),Lt!==4&&(Lt=2),Ka===null?Ka=[s]:Ka.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=m0(s,l,e);Xp(s,f);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=g0(s,o,e);Xp(s,x);break e}}s=s.return}while(s!==null)}U0(n)}catch(C){e=C,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function N0(){var t=fu.current;return fu.current=cu,t===null?cu:t}function bd(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ot===null||!(es&268435455)&&!(Fu&268435455)||Zi(Ot,Vt)}function pu(t,e){var n=$e;$e|=2;var i=N0();(Ot!==t||Vt!==e)&&(wi=null,qr(t,e));do try{pS();break}catch(r){I0(t,r)}while(!0);if(hd(),$e=n,fu.current=i,Ct!==null)throw Error(ie(261));return Ot=null,Vt=0,Lt}function pS(){for(;Ct!==null;)D0(Ct)}function mS(){for(;Ct!==null&&!zy();)D0(Ct)}function D0(t){var e=O0(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?U0(t):Ct=e,Td.current=null}function U0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lS(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Ct=null;return}}else if(n=oS(n,e,En),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Lt===0&&(Lt=5)}function Nr(t,e,n){var i=nt,r=kn.transition;try{kn.transition=null,nt=1,gS(t,e,n,i)}finally{kn.transition=r,nt=i}return null}function gS(t,e,n,i){do $s();while(ir!==null);if($e&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ky(t,s),t===Ot&&(Ct=Ot=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,k0(ql,function(){return $s(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=nt;nt=1;var o=$e;$e|=4,Td.current=null,cS(t,n),P0(n,t),Fx(Pf),Zl=!!Rf,Pf=Rf=null,t.current=n,fS(n),Hy(),$e=o,nt=a,kn.transition=s}else t.current=n;if(Jo&&(Jo=!1,ir=t,du=r),s=t.pendingLanes,s===0&&(cr=null),Wy(n.stateNode),dn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hu)throw hu=!1,t=qf,qf=null,t;return du&1&&t.tag!==0&&$s(),s=t.pendingLanes,s&1?t===Kf?Za++:(Za=0,Kf=t):Za=0,Mr(),null}function $s(){if(ir!==null){var t=mv(du),e=kn.transition,n=nt;try{if(kn.transition=null,nt=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,du=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ge=u;ge!==null;){var c=ge;switch(c.tag){case 0:case 11:case 15:qa(8,c,s)}var h=c.child;if(h!==null)h.return=c,ge=h;else for(;ge!==null;){c=ge;var d=c.sibling,m=c.return;if(A0(c),c===u){ge=null;break}if(d!==null){d.return=m,ge=d;break}ge=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ge=f;break e}ge=s.return}}var g=t.current;for(ge=g;ge!==null;){a=ge;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ge=v;else e:for(a=g;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Uu(9,o)}}catch(C){yt(o,o.return,C)}if(o===a){ge=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,ge=x;break e}ge=o.return}}if($e=r,Mr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(Cu,t)}catch{}i=!0}return i}finally{nt=n,kn.transition=e}}return!1}function hm(t,e,n){e=oa(n,e),e=m0(t,e,1),t=ur(t,e,1),e=nn(),t!==null&&(Co(t,1,e),dn(t,e))}function yt(t,e,n){if(t.tag===3)hm(t,t,n);else for(;e!==null;){if(e.tag===3){hm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=oa(n,t),t=g0(e,t,1),e=ur(e,t,1),t=nn(),e!==null&&(Co(e,1,t),dn(e,t));break}}e=e.return}}function vS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Vt&n)===n&&(Lt===4||Lt===3&&(Vt&130023424)===Vt&&500>St()-Cd?qr(t,0):Ad|=n),dn(t,e)}function F0(t,e){e===0&&(t.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var n=nn();t=Ui(t,e),t!==null&&(Co(t,e,n),dn(t,n))}function _S(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),F0(t,n)}function yS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),F0(t,n)}var O0;O0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,aS(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ht&&e.flags&1048576&&Hv(e,ru,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fl(t,e),t=e.pendingProps;var r=ia(e,Qt.current);js(e,n),r=xd(null,e,i,t,r,n);var s=Sd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,nu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,md(e),r.updater=Du,e.stateNode=r,r._reactInternals=e,kf(e,i,t,n),e=Hf(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&ld(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=SS(i),t=jn(i,t),r){case 0:e=zf(null,e,i,t,n);break e;case 1:e=nm(null,e,i,t,n);break e;case 11:e=em(null,e,i,t,n);break e;case 14:e=tm(null,e,i,jn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),zf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),nm(t,e,i,r,n);case 3:e:{if(x0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$v(t,e),ou(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oa(Error(ie(423)),e),e=im(t,e,i,n,r);break e}else if(i!==r){r=oa(Error(ie(424)),e),e=im(t,e,i,n,r);break e}else for(wn=lr(e.stateNode.containerInfo.firstChild),Tn=e,ht=!0,qn=null,n=Xv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),i===r){e=Fi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return Yv(e),t===null&&Uf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,bf(i,r)?a=null:s!==null&&bf(i,s)&&(e.flags|=32),y0(t,e),tn(t,e,a,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return S0(t,e,n);case 4:return gd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=sa(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),em(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(su,i._currentValue),i._currentValue=a,s!==null)if(ei(s.value,a)){if(s.children===r.children&&!fn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ff(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ff(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=Bn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),tm(t,e,i,r,n);case 15:return v0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Fl(t,e),e.tag=1,hn(i)?(t=!0,nu(e)):t=!1,js(e,n),p0(e,i,r),kf(e,i,r,n),Hf(null,e,i,!0,t,n);case 19:return M0(t,e,n);case 22:return _0(t,e,n)}throw Error(ie(156,e.tag))};function k0(t,e){return fv(t,e)}function xS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new xS(t,e,n,i)}function Ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SS(t){if(typeof t=="function")return Ld(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kh)return 11;if(t===Zh)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Ld(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case bs:return Kr(n.children,r,s,e);case qh:a=8,r|=8;break;case lf:return t=Fn(12,n,e,r|2),t.elementType=lf,t.lanes=s,t;case uf:return t=Fn(13,n,e,r),t.elementType=uf,t.lanes=s,t;case cf:return t=Fn(19,n,e,r),t.elementType=cf,t.lanes=s,t;case Yg:return Ou(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jg:a=10;break e;case $g:a=9;break e;case Kh:a=11;break e;case Zh:a=14;break e;case Yi:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Fn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Kr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Ou(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Yg,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Id(t,e,n,i,r,s,a,o,l){return t=new MS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(s),t}function ES(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function B0(t){if(!t)return vr;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(hn(n))return Bv(t,n,e)}return e}function z0(t,e,n,i,r,s,a,o,l){return t=Id(n,i,!0,t,r,s,a,o,l),t.context=B0(null),n=t.current,i=nn(),r=fr(n),s=Ii(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,Co(t,r,i),dn(t,i),t}function ku(t,e,n,i){var r=e.current,s=nn(),a=fr(r);return n=B0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,a),t!==null&&(Jn(t,r,a,s),Nl(t,r,a)),a}function mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nd(t,e){dm(t,e),(t=t.alternate)&&dm(t,e)}function wS(){return null}var H0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dd(t){this._internalRoot=t}Bu.prototype.render=Dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));ku(t,e,null,null)};Bu.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){ku(null,t,null,null)}),e[Di]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=_v();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&xv(t)}};function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pm(){}function TS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=mu(a);s.call(u)}}var a=z0(e,i,t,0,null,!1,!1,"",pm);return t._reactRootContainer=a,t[Di]=a.current,oo(t.nodeType===8?t.parentNode:t),ts(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=mu(l);o.call(u)}}var l=Id(t,0,!1,null,null,!1,!1,"",pm);return t._reactRootContainer=l,t[Di]=l.current,oo(t.nodeType===8?t.parentNode:t),ts(function(){ku(e,l,n,i)}),l}function Hu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=mu(a);o.call(l)}}ku(e,a,t,r)}else a=TS(n,e,t,r,i);return mu(a)}gv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ka(e.pendingLanes);n!==0&&(ed(e,n|1),dn(e,St()),!($e&6)&&(la=St()+500,Mr()))}break;case 13:ts(function(){var i=Ui(t,1);if(i!==null){var r=nn();Jn(i,t,1,r)}}),Nd(t,1)}};td=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=nn();Jn(e,t,134217728,n)}Nd(t,134217728)}};vv=function(t){if(t.tag===13){var e=fr(t),n=Ui(t,e);if(n!==null){var i=nn();Jn(n,t,e,i)}Nd(t,e)}};_v=function(){return nt};yv=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};xf=function(t,e,n){switch(e){case"input":if(df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lu(i);if(!r)throw Error(ie(90));Kg(i),df(i,r)}}}break;case"textarea":Qg(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};sv=Rd;av=ts;var AS={usingClientEntryPoint:!1,Events:[Po,Ds,Lu,iv,rv,Rd]},Ra={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CS={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=uv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||wS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Cu=el.inject(CS),di=el}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(e))throw Error(ie(200));return ES(t,e,null,n)};Cn.createRoot=function(t,e){if(!Ud(t))throw Error(ie(299));var n=!1,i="",r=H0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Id(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,oo(t.nodeType===8?t.parentNode:t),new Dd(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=uv(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return ts(t)};Cn.hydrate=function(t,e,n){if(!zu(e))throw Error(ie(200));return Hu(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Ud(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=H0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=z0(e,null,t,1,n??null,r,!1,s,a),t[Di]=e.current,oo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bu(e)};Cn.render=function(t,e,n){if(!zu(e))throw Error(ie(200));return Hu(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!zu(t))throw Error(ie(40));return t._reactRootContainer?(ts(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Cn.unstable_batchedUpdates=Rd;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Hu(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function V0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V0)}catch(t){console.error(t)}}V0(),Vg.exports=Cn;var RS=Vg.exports,mm=RS;af.createRoot=mm.createRoot,af.hydrateRoot=mm.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vo.apply(null,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));const gm="popstate";function PS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Jf("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:gu(r)}return LS(e,n,null,t)}function Rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function G0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bS(){return Math.random().toString(36).substr(2,8)}function vm(t,e){return{usr:t.state,key:t.key,idx:e}}function Jf(t,e,n,i){return n===void 0&&(n=null),vo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?va(e):e,{state:n,key:e&&e.key||i||bS()})}function gu(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function va(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function LS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=rr.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(vo({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function h(){o=rr.Pop;let p=c(),f=p==null?null:p-u;u=p,l&&l({action:o,location:y.location,delta:f})}function d(p,f){o=rr.Push;let g=Jf(y.location,p,f);u=c()+1;let v=vm(g,u),x=y.createHref(g);try{a.pushState(v,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(x)}s&&l&&l({action:o,location:y.location,delta:1})}function m(p,f){o=rr.Replace;let g=Jf(y.location,p,f);u=c();let v=vm(g,u),x=y.createHref(g);a.replaceState(v,"",x),s&&l&&l({action:o,location:y.location,delta:0})}function _(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:gu(p);return g=g.replace(/ $/,"%20"),Rt(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let y={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(gm,h),l=p,()=>{r.removeEventListener(gm,h),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let f=_(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:d,replace:m,go(p){return a.go(p)}};return y}var _m;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_m||(_m={}));function IS(t,e,n){return n===void 0&&(n="/"),NS(t,e,n)}function NS(t,e,n,i){let r=typeof e=="string"?va(e):e,s=Fd(r.pathname||"/",n);if(s==null)return null;let a=W0(t);DS(a);let o=null,l=jS(s);for(let u=0;o==null&&u<a.length;++u)o=GS(a[u],l);return o}function W0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Rt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=dr([i,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Rt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),W0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:HS(u,s.index),routesMeta:c})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of X0(s.path))r(s,a,l)}),e}function X0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=X0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function DS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const US=/^:[\w-]+$/,FS=3,OS=2,kS=1,BS=10,zS=-2,ym=t=>t==="*";function HS(t,e){let n=t.split("/"),i=n.length;return n.some(ym)&&(i+=zS),e&&(i+=OS),n.filter(r=>!ym(r)).reduce((r,s)=>r+(US.test(s)?FS:s===""?kS:BS),i)}function VS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function GS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",h=WS({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),d=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:dr([s,h.pathname]),pathnameBase:qS(dr([s,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(s=dr([s,h.pathnameBase]))}return a}function WS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=XS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,c,h)=>{let{paramName:d,isOptional:m}=c;if(d==="*"){let y=o[h]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=o[h];return m&&!_?u[d]=void 0:u[d]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function XS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),G0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function jS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return G0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Fd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function $S(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?va(t):t,s;return n?(n=Y0(n),n.startsWith("/")?s=xm(n.substring(1),"/"):s=xm(n,e)):s=e,{pathname:s,search:KS(i),hash:ZS(r)}}function xm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Cc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function j0(t,e){let n=YS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function $0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=va(t):(r=vo({},t),Rt(!r.pathname||!r.pathname.includes("?"),Cc("?","pathname","search",r)),Rt(!r.pathname||!r.pathname.includes("#"),Cc("#","pathname","hash",r)),Rt(!r.search||!r.search.includes("#"),Cc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),h-=1;r.pathname=d.join("/")}o=h>=0?e[h]:"/"}let l=$S(r,o),u=a&&a!=="/"&&a.endsWith("/"),c=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Y0=t=>t.replace(/\/\/+/g,"/"),dr=t=>Y0(t.join("/")),qS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),KS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const q0=["post","put","patch","delete"];new Set(q0);const JS=["get",...q0];new Set(JS);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_o.apply(null,arguments)}const Od=ee.createContext(null),eM=ee.createContext(null),ls=ee.createContext(null),Vu=ee.createContext(null),Er=ee.createContext({outlet:null,matches:[],isDataRoute:!1}),K0=ee.createContext(null);function tM(t,e){let{relative:n}=e===void 0?{}:e;Lo()||Rt(!1);let{basename:i,navigator:r}=ee.useContext(ls),{hash:s,pathname:a,search:o}=Q0(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:dr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Lo(){return ee.useContext(Vu)!=null}function Gu(){return Lo()||Rt(!1),ee.useContext(Vu).location}function Z0(t){ee.useContext(ls).static||ee.useLayoutEffect(t)}function nM(){let{isDataRoute:t}=ee.useContext(Er);return t?gM():iM()}function iM(){Lo()||Rt(!1);let t=ee.useContext(Od),{basename:e,future:n,navigator:i}=ee.useContext(ls),{matches:r}=ee.useContext(Er),{pathname:s}=Gu(),a=JSON.stringify(j0(r,n.v7_relativeSplatPath)),o=ee.useRef(!1);return Z0(()=>{o.current=!0}),ee.useCallback(function(u,c){if(c===void 0&&(c={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let h=$0(u,JSON.parse(a),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:dr([e,h.pathname])),(c.replace?i.replace:i.push)(h,c.state,c)},[e,i,a,s,t])}function rM(){let{matches:t}=ee.useContext(Er),e=t[t.length-1];return e?e.params:{}}function Q0(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=ee.useContext(ls),{matches:r}=ee.useContext(Er),{pathname:s}=Gu(),a=JSON.stringify(j0(r,i.v7_relativeSplatPath));return ee.useMemo(()=>$0(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function sM(t,e){return aM(t,e)}function aM(t,e,n,i){Lo()||Rt(!1);let{navigator:r}=ee.useContext(ls),{matches:s}=ee.useContext(Er),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Gu(),c;if(e){var h;let p=typeof e=="string"?va(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||Rt(!1),c=p}else c=u;let d=c.pathname||"/",m=d;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=IS(t,{pathname:m}),y=fM(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:dr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:dr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?ee.createElement(Vu.Provider,{value:{location:_o({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:rr.Pop}},y):y}function oM(){let t=mM(),e=QS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ee.createElement(ee.Fragment,null,ee.createElement("h2",null,"Unexpected Application Error!"),ee.createElement("h3",{style:{fontStyle:"italic"}},e),n?ee.createElement("pre",{style:r},n):null,null)}const lM=ee.createElement(oM,null);class uM extends ee.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ee.createElement(Er.Provider,{value:this.props.routeContext},ee.createElement(K0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cM(t){let{routeContext:e,match:n,children:i}=t,r=ee.useContext(Od);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ee.createElement(Er.Provider,{value:e},i)}function fM(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let c=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);c>=0||Rt(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let c=0;c<a.length;c++){let h=a[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:m}=n,_=h.route.loader&&d[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||_){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,h,d)=>{let m,_=!1,y=null,p=null;n&&(m=o&&h.route.id?o[h.route.id]:void 0,y=h.route.errorElement||lM,l&&(u<0&&d===0?(vM("route-fallback"),_=!0,p=null):u===d&&(_=!0,p=h.route.hydrateFallbackElement||null)));let f=e.concat(a.slice(0,d+1)),g=()=>{let v;return m?v=y:_?v=p:h.route.Component?v=ee.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=c,ee.createElement(cM,{match:h,routeContext:{outlet:c,matches:f,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?ee.createElement(uM,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var J0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(J0||{}),e_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(e_||{});function hM(t){let e=ee.useContext(Od);return e||Rt(!1),e}function dM(t){let e=ee.useContext(eM);return e||Rt(!1),e}function pM(t){let e=ee.useContext(Er);return e||Rt(!1),e}function t_(t){let e=pM(),n=e.matches[e.matches.length-1];return n.route.id||Rt(!1),n.route.id}function mM(){var t;let e=ee.useContext(K0),n=dM(),i=t_();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function gM(){let{router:t}=hM(J0.UseNavigateStable),e=t_(e_.UseNavigateStable),n=ee.useRef(!1);return Z0(()=>{n.current=!0}),ee.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,_o({fromRouteId:e},s)))},[t,e])}const Sm={};function vM(t,e,n){Sm[t]||(Sm[t]=!0)}function _M(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function eh(t){Rt(!1)}function yM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=rr.Pop,navigator:s,static:a=!1,future:o}=t;Lo()&&Rt(!1);let l=e.replace(/^\/*/,"/"),u=ee.useMemo(()=>({basename:l,navigator:s,static:a,future:_o({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=va(i));let{pathname:c="/",search:h="",hash:d="",state:m=null,key:_="default"}=i,y=ee.useMemo(()=>{let p=Fd(c,l);return p==null?null:{location:{pathname:p,search:h,hash:d,state:m,key:_},navigationType:r}},[l,c,h,d,m,_,r]);return y==null?null:ee.createElement(ls.Provider,{value:u},ee.createElement(Vu.Provider,{children:n,value:y}))}function xM(t){let{children:e,location:n}=t;return sM(th(e),n)}new Promise(()=>{});function th(t,e){e===void 0&&(e=[]);let n=[];return ee.Children.forEach(t,(i,r)=>{if(!ee.isValidElement(i))return;let s=[...e,r];if(i.type===ee.Fragment){n.push.apply(n,th(i.props.children,s));return}i.type!==eh&&Rt(!1),!i.props.index||!i.props.children||Rt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=th(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nh(){return nh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},nh.apply(null,arguments)}function SM(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function MM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function EM(t,e){return t.button===0&&(!e||e==="_self")&&!MM(t)}const wM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],TM="6";try{window.__reactRouterVersion=TM}catch{}const AM="startTransition",Mm=vy[AM];function CM(t){let{basename:e,children:n,future:i,window:r}=t,s=ee.useRef();s.current==null&&(s.current=PS({window:r,v5Compat:!0}));let a=s.current,[o,l]=ee.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},c=ee.useCallback(h=>{u&&Mm?Mm(()=>l(h)):l(h)},[l,u]);return ee.useLayoutEffect(()=>a.listen(c),[a,c]),ee.useEffect(()=>_M(i),[i]),ee.createElement(yM,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const RM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ih=ee.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:c,viewTransition:h}=e,d=SM(e,wM),{basename:m}=ee.useContext(ls),_,y=!1;if(typeof u=="string"&&PM.test(u)&&(_=u,RM))try{let v=new URL(window.location.href),x=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=Fd(x.pathname,m);x.origin===v.origin&&C!=null?u=C+x.search+x.hash:y=!0}catch{}let p=tM(u,{relative:r}),f=bM(u,{replace:a,state:o,target:l,preventScrollReset:c,relative:r,viewTransition:h});function g(v){i&&i(v),v.defaultPrevented||f(v)}return ee.createElement("a",nh({},d,{href:_||p,onClick:y||s?i:g,ref:n,target:l}))});var Em;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Em||(Em={}));var wm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wm||(wm={}));function bM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=nM(),u=Gu(),c=Q0(t,{relative:a});return ee.useCallback(h=>{if(EM(h,n)){h.preventDefault();let d=i!==void 0?i:gu(u)===gu(c);l(t,{replace:d,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[u,l,c,i,r,n,t,s,a,o])}const LM="https://sim-playback-test-data.s3.us-west-2.amazonaws.com",rh=t=>`${LM}${t}`;function IM(t){var u,c,h,d;const n=new DOMParser().parseFromString(t,"text/xml"),i=((u=n.querySelector("Name"))==null?void 0:u.textContent)??"",r=((c=n.querySelector("Prefix"))==null?void 0:c.textContent)??"",s=((h=n.querySelector("IsTruncated"))==null?void 0:h.textContent)==="true",a=((d=n.querySelector("NextContinuationToken"))==null?void 0:d.textContent)??void 0,o=[];return n.querySelectorAll("Contents").forEach(m=>{var g,v,x,C;const _=((g=m.querySelector("Key"))==null?void 0:g.textContent)??"",y=((v=m.querySelector("LastModified"))==null?void 0:v.textContent)??"",p=((x=m.querySelector("Size"))==null?void 0:x.textContent)??"0",f=((C=m.querySelector("ETag"))==null?void 0:C.textContent)??"";o.push({key:_,lastModified:new Date(y),size:parseInt(p,10),etag:f.replace(/"/g,"")})}),{name:i,prefix:r,contents:o,isTruncated:s,continuationToken:a}}async function NM(){const t=rh("?list-type=2&prefix=mcap/"),e=await fetch(t);if(!e.ok)throw new Error(`Failed to fetch simulations: ${e.status} ${e.statusText}`);const n=await e.text(),r=IM(n).contents.filter(s=>s.key.endsWith(".mcap")).map(s=>{const o=(s.key.split("/").pop()??s.key).replace(".mcap","");return{id:encodeURIComponent(s.key),name:o,url:rh(`/${s.key}`),size:s.size,lastModified:s.lastModified}});if(r.length===0)throw new Error("No MCAP files found in S3 bucket");return r}function DM(t){const e=decodeURIComponent(t);return rh(`/${e}`)}function UM(t){return t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:t<1024*1024*1024?`${(t/(1024*1024)).toFixed(1)} MB`:`${(t/(1024*1024*1024)).toFixed(2)} GB`}function FM(){const[t,e]=ee.useState([]),[n,i]=ee.useState(!0),[r,s]=ee.useState(null);return ee.useEffect(()=>{async function a(){try{i(!0),s(null);const o=await NM();e(o)}catch(o){s(o instanceof Error?o.message:"Failed to load simulations")}finally{i(!1)}}a()},[]),n?q.jsxs("div",{className:"simulation-list-container",children:[q.jsx("header",{className:"simulation-list-header",children:q.jsx("h1",{children:"Simulation Replay Viewer"})}),q.jsx("div",{className:"simulation-list-content",children:q.jsxs("div",{className:"loading-state",children:[q.jsx("div",{className:"loading-spinner"}),q.jsx("p",{children:"Loading simulations..."})]})})]}):r?q.jsxs("div",{className:"simulation-list-container",children:[q.jsx("header",{className:"simulation-list-header",children:q.jsx("h1",{children:"Simulation Replay Viewer"})}),q.jsx("div",{className:"simulation-list-content",children:q.jsxs("div",{className:"error-state",children:[q.jsxs("p",{children:["Error: ",r]}),q.jsx("button",{onClick:()=>window.location.reload(),children:"Retry"})]})})]}):q.jsxs("div",{className:"simulation-list-container",children:[q.jsxs("header",{className:"simulation-list-header",children:[q.jsx("h1",{children:"Simulation Replay Viewer"}),q.jsx("p",{className:"subtitle",children:"Select a simulation to view"})]}),q.jsx("div",{className:"simulation-list-content",children:t.length===0?q.jsx("div",{className:"empty-state",children:q.jsx("p",{children:"No simulations found"})}):q.jsx("div",{className:"simulation-grid",children:t.map(a=>q.jsxs(ih,{to:`/viewer/${a.id}`,className:"simulation-card",children:[q.jsx("div",{className:"simulation-icon",children:q.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:q.jsx("path",{d:"M8 5v14l11-7z"})})}),q.jsxs("div",{className:"simulation-info",children:[q.jsx("h3",{className:"simulation-name",children:a.name}),q.jsxs("div",{className:"simulation-meta",children:[q.jsx("span",{className:"simulation-size",children:UM(a.size)}),q.jsx("span",{className:"simulation-date",children:a.lastModified.toLocaleDateString()})]})]})]},a.id))})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="167",OM=0,Tm=1,kM=2,n_=1,i_=2,Ei=3,_r=0,pn=1,Ci=2,pr=0,Ys=1,Am=2,Cm=3,Rm=4,BM=5,Fr=100,zM=101,HM=102,VM=103,GM=104,WM=200,XM=201,jM=202,$M=203,sh=204,ah=205,YM=206,qM=207,KM=208,ZM=209,QM=210,JM=211,eE=212,tE=213,nE=214,iE=0,rE=1,sE=2,vu=3,aE=4,oE=5,lE=6,uE=7,r_=0,cE=1,fE=2,mr=0,hE=1,dE=2,pE=3,mE=4,gE=5,vE=6,_E=7,s_=300,ua=301,ca=302,oh=303,lh=304,Wu=306,uh=1e3,Hr=1001,ch=1002,On=1003,yE=1004,tl=1005,Kn=1006,Rc=1007,Vr=1008,Oi=1009,a_=1010,o_=1011,yo=1012,Bd=1013,ns=1014,bi=1015,Io=1016,zd=1017,Hd=1018,fa=1020,l_=35902,u_=1021,c_=1022,Zn=1023,f_=1024,h_=1025,qs=1026,ha=1027,d_=1028,Vd=1029,p_=1030,Gd=1031,Wd=1033,zl=33776,Hl=33777,Vl=33778,Gl=33779,fh=35840,hh=35841,dh=35842,ph=35843,mh=36196,gh=37492,vh=37496,_h=37808,yh=37809,xh=37810,Sh=37811,Mh=37812,Eh=37813,wh=37814,Th=37815,Ah=37816,Ch=37817,Rh=37818,Ph=37819,bh=37820,Lh=37821,Wl=36492,Ih=36494,Nh=36495,m_=36283,Dh=36284,Uh=36285,Fh=36286,xE=3200,SE=3201,g_=0,ME=1,Qi="",oi="srgb",wr="srgb-linear",Xd="display-p3",Xu="display-p3-linear",_u="linear",lt="srgb",yu="rec709",xu="p3",hs=7680,Pm=519,EE=512,wE=513,TE=514,v_=515,AE=516,CE=517,RE=518,PE=519,bm=35044,Lm="300 es",Li=2e3,Su=2001;class _a{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,Oh=180/Math.PI;function No(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function un(t,e,n){return Math.max(e,Math.min(n,t))}function bE(t,e){return(t%e+e)%e}function bc(t,e,n){return(1-n)*t+n*e}function Pa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,a,o,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],m=i[5],_=i[8],y=r[0],p=r[3],f=r[6],g=r[1],v=r[4],x=r[7],C=r[2],T=r[5],A=r[8];return s[0]=a*y+o*g+l*C,s[3]=a*p+o*v+l*T,s[6]=a*f+o*x+l*A,s[1]=u*y+c*g+h*C,s[4]=u*p+c*v+h*T,s[7]=u*f+c*x+h*A,s[2]=d*y+m*g+_*C,s[5]=d*p+m*v+_*T,s[8]=d*f+m*x+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*a-o*u,d=o*l-c*s,m=u*s-a*l,_=n*h+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*u-c*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Lc.makeScale(e,n)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new ze;function __(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LE(){const t=Mu("canvas");return t.style.display="block",t}const Im={};function Qa(t){t in Im||(Im[t]=!0,console.warn(t))}function IE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Nm=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dm=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ba={[wr]:{transfer:_u,primaries:yu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[oi]:{transfer:lt,primaries:yu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Xu]:{transfer:_u,primaries:xu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Dm),fromReference:t=>t.applyMatrix3(Nm)},[Xd]:{transfer:lt,primaries:xu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dm),fromReference:t=>t.applyMatrix3(Nm).convertLinearToSRGB()}},NE=new Set([wr,Xu]),Je={enabled:!0,_workingColorSpace:wr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!NE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ba[e].toReference,r=ba[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ba[t].primaries},getTransfer:function(t){return t===Qi?_u:ba[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ba[e].luminanceCoefficients)}};function Ks(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ic(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ds;class DE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=Mu("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ds}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ks(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ks(n[i]/255)*255):n[i]=Ks(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UE=0;class y_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nc(r[a].image)):s.push(Nc(r[a]))}else s=Nc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?DE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FE=0;class mn extends _a{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Hr,r=Hr,s=Kn,a=Vr,o=Zn,l=Oi,u=mn.DEFAULT_ANISOTROPY,c=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=No(),this.name="",this.source=new y_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=s_;mn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],m=l[5],_=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,x=(m+1)/2,C=(f+1)/2,T=(c+d)/4,A=(h+y)/4,b=(_+p)/4;return v>x&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(h-y)*(h-y)+(d-c)*(d-c));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(h-y)/g,this.z=(d-c)/g,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OE extends _a{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new y_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends OE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class x_ extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kE extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(o===1){e[n+0]=d,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==d||u!==m||c!==_){let p=1-o;const f=l*d+u*m+c*_+h*y,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),T=Math.atan2(C,f*g);p=Math.sin(p*T)/C,o=Math.sin(o*T)/C}const x=o*g;if(l=l*p+d*x,u=u*p+m*x,c=c*p+_*x,h=h*p+y*x,p===1-o){const C=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=C,u*=C,c*=C,h*=C}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+c*h+l*m-u*d,e[n+1]=l*_+c*d+u*h-o*m,e[n+2]=u*_+c*m+o*d-l*h,e[n+3]=c*_-o*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*c*h+u*m*_,this._y=u*m*h-d*c*_,this._z=u*c*_+d*m*h,this._w=u*c*h-d*m*_;break;case"YXZ":this._x=d*c*h+u*m*_,this._y=u*m*h-d*c*_,this._z=u*c*_-d*m*h,this._w=u*c*h+d*m*_;break;case"ZXY":this._x=d*c*h-u*m*_,this._y=u*m*h+d*c*_,this._z=u*c*_+d*m*h,this._w=u*c*h-d*m*_;break;case"ZYX":this._x=d*c*h-u*m*_,this._y=u*m*h+d*c*_,this._z=u*c*_-d*m*h,this._w=u*c*h+d*m*_;break;case"YZX":this._x=d*c*h+u*m*_,this._y=u*m*h+d*c*_,this._z=u*c*_-d*m*h,this._w=u*c*h-d*m*_;break;case"XZY":this._x=d*c*h-u*m*_,this._y=u*m*h-d*c*_,this._z=u*c*_+d*m*h,this._w=u*c*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*c,this.y=i+l*c+o*u-s*h,this.z=r+l*h+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new z,Um=new rs;class Do{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),il.subVectors(this.max,La),ps.subVectors(e.a,La),ms.subVectors(e.b,La),gs.subVectors(e.c,La),Hi.subVectors(ms,ps),Vi.subVectors(gs,ms),Ar.subVectors(ps,gs);let n=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-Ar.z,Ar.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,Ar.z,0,-Ar.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-Ar.y,Ar.x,0];return!Uc(n,ps,ms,gs,il)||(n=[1,0,0,0,1,0,0,0,1],!Uc(n,ps,ms,gs,il))?!1:(rl.crossVectors(Hi,Vi),n=[rl.x,rl.y,rl.z],Uc(n,ps,ms,gs,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new z,new z,new z,new z,new z,new z,new z,new z],Gn=new z,nl=new Do,ps=new z,ms=new z,gs=new z,Hi=new z,Vi=new z,Ar=new z,La=new z,il=new z,rl=new z,Cr=new z;function Uc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Cr.fromArray(t,s);const o=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),u=n.dot(Cr),c=i.dot(Cr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const BE=new Do,Ia=new z,Fc=new z;class ju{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const n=Ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Fc)),this.expandByPoint(Ia.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new z,Oc=new z,sl=new z,Gi=new z,kc=new z,al=new z,Bc=new z;class S_{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oc.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Oc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(sl),o=Gi.dot(this.direction),l=-Gi.dot(sl),u=Gi.lengthSq(),c=Math.abs(1-a*a);let h,d,m,_;if(c>0)if(h=a*l-o,d=a*o-l,_=s*c,h>=0)if(d>=-_)if(d<=_){const y=1/c;h*=y,d*=y,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+u}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Oc).addScaledVector(sl,d),m}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){kc.subVectors(n,e),al.subVectors(i,e),Bc.crossVectors(kc,al);let a=this.direction.dot(Bc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(al.crossVectors(Gi,al));if(l<0)return null;const u=o*this.direction.dot(kc.cross(Gi));if(u<0||l+u>a)return null;const c=-o*Gi.dot(Bc);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,a,o,l,u,c,h,d,m,_,y,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,c,h,d,m,_,y,p)}set(e,n,i,r,s,a,o,l,u,c,h,d,m,_,y,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*c,m=a*h,_=o*c,y=o*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=m+_*u,n[5]=d-y*u,n[9]=-o*l,n[2]=y-d*u,n[6]=_+m*u,n[10]=a*l}else if(e.order==="YXZ"){const d=l*c,m=l*h,_=u*c,y=u*h;n[0]=d+y*o,n[4]=_*o-m,n[8]=a*u,n[1]=a*h,n[5]=a*c,n[9]=-o,n[2]=m*o-_,n[6]=y+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*c,m=l*h,_=u*c,y=u*h;n[0]=d-y*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*c,n[9]=y-d*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*c,m=a*h,_=o*c,y=o*h;n[0]=l*c,n[4]=_*u-m,n[8]=d*u+y,n[1]=l*h,n[5]=y*u+d,n[9]=m*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*u,_=o*l,y=o*u;n[0]=l*c,n[4]=y-d*h,n[8]=_*h+m,n[1]=h,n[5]=a*c,n[9]=-o*c,n[2]=-u*c,n[6]=m*h+_,n[10]=d-y*h}else if(e.order==="XZY"){const d=a*l,m=a*u,_=o*l,y=o*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+y,n[5]=a*c,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*c,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zE,e,HE)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Wi.crossVectors(i,yn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Wi.crossVectors(i,yn)),Wi.normalize(),ol.crossVectors(yn,Wi),r[0]=Wi.x,r[4]=ol.x,r[8]=yn.x,r[1]=Wi.y,r[5]=ol.y,r[9]=yn.y,r[2]=Wi.z,r[6]=ol.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],m=i[13],_=i[2],y=i[6],p=i[10],f=i[14],g=i[3],v=i[7],x=i[11],C=i[15],T=r[0],A=r[4],b=r[8],w=r[12],S=r[1],R=r[5],H=r[9],k=r[13],U=r[2],D=r[6],N=r[10],j=r[14],I=r[3],W=r[7],Y=r[11],Q=r[15];return s[0]=a*T+o*S+l*U+u*I,s[4]=a*A+o*R+l*D+u*W,s[8]=a*b+o*H+l*N+u*Y,s[12]=a*w+o*k+l*j+u*Q,s[1]=c*T+h*S+d*U+m*I,s[5]=c*A+h*R+d*D+m*W,s[9]=c*b+h*H+d*N+m*Y,s[13]=c*w+h*k+d*j+m*Q,s[2]=_*T+y*S+p*U+f*I,s[6]=_*A+y*R+p*D+f*W,s[10]=_*b+y*H+p*N+f*Y,s[14]=_*w+y*k+p*j+f*Q,s[3]=g*T+v*S+x*U+C*I,s[7]=g*A+v*R+x*D+C*W,s[11]=g*b+v*H+x*N+C*Y,s[15]=g*w+v*k+x*j+C*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],m=e[14],_=e[3],y=e[7],p=e[11],f=e[15];return _*(+s*l*h-r*u*h-s*o*d+i*u*d+r*o*m-i*l*m)+y*(+n*l*m-n*u*d+s*a*d-r*a*m+r*u*c-s*l*c)+p*(+n*u*h-n*o*m-s*a*h+i*a*m+s*o*c-i*u*c)+f*(-r*o*c-n*l*h+n*o*d+r*a*h-i*a*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],m=e[11],_=e[12],y=e[13],p=e[14],f=e[15],g=h*p*u-y*d*u+y*l*m-o*p*m-h*l*f+o*d*f,v=_*d*u-c*p*u-_*l*m+a*p*m+c*l*f-a*d*f,x=c*y*u-_*h*u+_*o*m-a*y*m-c*o*f+a*h*f,C=_*h*l-c*y*l-_*o*d+a*y*d+c*o*p-a*h*p,T=n*g+i*v+r*x+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(y*d*s-h*p*s-y*r*m+i*p*m+h*r*f-i*d*f)*A,e[2]=(o*p*s-y*l*s+y*r*u-i*p*u-o*r*f+i*l*f)*A,e[3]=(h*l*s-o*d*s-h*r*u+i*d*u+o*r*m-i*l*m)*A,e[4]=v*A,e[5]=(c*p*s-_*d*s+_*r*m-n*p*m-c*r*f+n*d*f)*A,e[6]=(_*l*s-a*p*s-_*r*u+n*p*u+a*r*f-n*l*f)*A,e[7]=(a*d*s-c*l*s+c*r*u-n*d*u-a*r*m+n*l*m)*A,e[8]=x*A,e[9]=(_*h*s-c*y*s-_*i*m+n*y*m+c*i*f-n*h*f)*A,e[10]=(a*y*s-_*o*s+_*i*u-n*y*u-a*i*f+n*o*f)*A,e[11]=(c*o*s-a*h*s-c*i*u+n*h*u+a*i*m-n*o*m)*A,e[12]=C*A,e[13]=(c*y*r-_*h*r+_*i*d-n*y*d-c*i*p+n*h*p)*A,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*p-n*o*p)*A,e[15]=(a*h*r-c*o*r+c*i*l-n*h*l-a*i*d+n*o*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,c=a+a,h=o+o,d=s*u,m=s*c,_=s*h,y=a*c,p=a*h,f=o*h,g=l*u,v=l*c,x=l*h,C=i.x,T=i.y,A=i.z;return r[0]=(1-(y+f))*C,r[1]=(m+x)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(m-x)*T,r[5]=(1-(d+f))*T,r[6]=(p+g)*T,r[7]=0,r[8]=(_+v)*A,r[9]=(p-g)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const a=vs.set(r[4],r[5],r[6]).length(),o=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const u=1/s,c=1/a,h=1/o;return Wn.elements[0]*=u,Wn.elements[1]*=u,Wn.elements[2]*=u,Wn.elements[4]*=c,Wn.elements[5]*=c,Wn.elements[6]*=c,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,n.setFromRotationMatrix(Wn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Li){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,_;if(o===Li)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Su)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Li){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(a-s),d=(n+e)*u,m=(i+r)*c;let _,y;if(o===Li)_=(a+s)*h,y=-2*h;else if(o===Su)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new z,Wn=new xt,zE=new z(0,0,0),HE=new z(1,1,1),Wi=new z,ol=new z,yn=new z,Fm=new xt,Om=new rs;class gi{constructor(e=0,n=0,i=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-un(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class M_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VE=0;const km=new z,_s=new rs,xi=new xt,ll=new z,Na=new z,GE=new z,WE=new rs,Bm=new z(1,0,0),zm=new z(0,1,0),Hm=new z(0,0,1),Vm={type:"added"},XE={type:"removed"},ys={type:"childadded",child:null},zc={type:"childremoved",child:null};class Gt extends _a{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new z,n=new gi,i=new rs,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new ze}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,n){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ll.copy(e):ll.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Na,ll,this.up):xi.lookAt(ll,Na,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(xi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XE),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,WE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new z,Si=new z,Hc=new z,Mi=new z,xs=new z,Ss=new z,Gm=new z,Vc=new z,Gc=new z,Wc=new z;class fi{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),Si.subVectors(i,n),Hc.subVectors(e,n);const a=Xn.dot(Xn),o=Xn.dot(Si),l=Xn.dot(Hc),u=Si.dot(Si),c=Si.dot(Hc),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(u*l-o*c)*d,_=(a*c-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),Si.subVectors(e,n),Xn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Xn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xs.subVectors(r,i),Ss.subVectors(s,i),Vc.subVectors(e,i);const l=xs.dot(Vc),u=Ss.dot(Vc);if(l<=0&&u<=0)return n.copy(i);Gc.subVectors(e,r);const c=xs.dot(Gc),h=Ss.dot(Gc);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(xs,a);Wc.subVectors(e,s);const m=xs.dot(Wc),_=Ss.dot(Wc);if(_>=0&&m<=_)return n.copy(s);const y=m*u-l*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Ss,o);const p=c*_-m*h;if(p<=0&&h-c>=0&&m-_>=0)return Gm.subVectors(s,r),o=(h-c)/(h-c+(m-_)),n.copy(r).addScaledVector(Gm,o);const f=1/(p+y+d);return a=y*f,o=d*f,n.copy(i).addScaledVector(xs,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Xc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=bE(e,1),n=un(n,0,1),i=un(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Xc(a,s,e+1/3),this.g=Xc(a,s,e),this.b=Xc(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=oi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=oi){const i=E_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}copyLinearToSRGB(e){return this.r=Ic(e.r),this.g=Ic(e.g),this.b=Ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Je.fromWorkingColorSpace(Yt.copy(this),e),Math.round(un(Yt.r*255,0,255))*65536+Math.round(un(Yt.g*255,0,255))*256+Math.round(un(Yt.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=c<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=oi){Je.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==oi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(ul);const i=bc(Xi.h,ul.h,n),r=bc(Xi.s,ul.s,n),s=bc(Xi.l,ul.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ve;Ve.NAMES=E_;let jE=0;class ya extends _a{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Ys,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=ah,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=vu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sh&&(i.blendSrc=this.blendSrc),this.blendDst!==ah&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Eu extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new z,cl=new Xe;class mi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Pa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bm&&(e.usage=this.usage),e}}class w_ extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class T_ extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class It extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $E=0;const Ln=new xt,jc=new Gt,Ms=new z,xn=new Do,Da=new Do,Ut=new z;class Pn extends _a{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(__(e)?T_:w_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ju);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Da.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(xn.min,Da.min),xn.expandByPoint(Ut),Ut.addVectors(xn.max,Da.max),xn.expandByPoint(Ut)):(xn.expandByPoint(Da.min),xn.expandByPoint(Da.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Ut.fromBufferAttribute(o,u),l&&(Ms.fromBufferAttribute(e,u),Ut.add(Ms)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new z,l[b]=new z;const u=new z,c=new z,h=new z,d=new Xe,m=new Xe,_=new Xe,y=new z,p=new z;function f(b,w,S){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),_.fromBufferAttribute(s,S),c.sub(u),h.sub(u),m.sub(d),_.sub(d);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(y.copy(c).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(c,-_.x).multiplyScalar(R),o[b].add(y),o[w].add(y),o[S].add(y),l[b].add(p),l[w].add(p),l[S].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,w=g.length;b<w;++b){const S=g[b],R=S.start,H=S.count;for(let k=R,U=R+H;k<U;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new z,x=new z,C=new z,T=new z;function A(b){C.fromBufferAttribute(r,b),T.copy(C);const w=o[b];v.copy(w),v.sub(C.multiplyScalar(C.dot(w))).normalize(),x.crossVectors(T,w);const R=x.dot(l[b])<0?-1:1;a.setXYZW(b,v.x,v.y,v.z,R)}for(let b=0,w=g.length;b<w;++b){const S=g[b],R=S.start,H=S.count;for(let k=R,U=R+H;k<U;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,u=new z,c=new z,h=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,p),c.subVectors(a,s),h.subVectors(r,s),c.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,p),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),c.subVectors(a,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,h=o.normalized,d=new u.constructor(l.length*c);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*c;for(let f=0;f<c;f++)d[_++]=u[m++]}return new mi(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,h=u.length;c<h;c++){const d=u[c],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,m=h.length;d<m;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wm=new xt,Rr=new S_,fl=new ju,Xm=new z,Es=new z,ws=new z,Ts=new z,$c=new z,hl=new z,dl=new Xe,pl=new Xe,ml=new Xe,jm=new z,$m=new z,Ym=new z,gl=new z,vl=new z;class Kt extends Gt{constructor(e=new Pn,n=new Eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){hl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],h=s[l];c!==0&&($c.fromBufferAttribute(h,e),a?hl.addScaledVector($c,c):hl.addScaledVector($c.sub(n),c))}n.add(hl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(fl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(fl,Xm)===null||Rr.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const p=d[_],f=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let x=g,C=v;x<C;x+=3){const T=o.getX(x),A=o.getX(x+1),b=o.getX(x+2);r=_l(this,f,e,i,u,c,h,T,A,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let p=_,f=y;p<f;p+=3){const g=o.getX(p),v=o.getX(p+1),x=o.getX(p+2);r=_l(this,a,e,i,u,c,h,g,v,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const p=d[_],f=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=g,C=v;x<C;x+=3){const T=x,A=x+1,b=x+2;r=_l(this,f,e,i,u,c,h,T,A,b),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,f=y;p<f;p+=3){const g=p,v=p+1,x=p+2;r=_l(this,a,e,i,u,c,h,g,v,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function YE(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===_r,o),l===null)return null;vl.copy(o),vl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(vl);return u<n.near||u>n.far?null:{distance:u,point:vl.clone(),object:t}}function _l(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Es),t.getVertexPosition(l,ws),t.getVertexPosition(u,Ts);const c=YE(t,e,n,i,Es,ws,Ts,gl);if(c){r&&(dl.fromBufferAttribute(r,o),pl.fromBufferAttribute(r,l),ml.fromBufferAttribute(r,u),c.uv=fi.getInterpolation(gl,Es,ws,Ts,dl,pl,ml,new Xe)),s&&(dl.fromBufferAttribute(s,o),pl.fromBufferAttribute(s,l),ml.fromBufferAttribute(s,u),c.uv1=fi.getInterpolation(gl,Es,ws,Ts,dl,pl,ml,new Xe)),a&&(jm.fromBufferAttribute(a,o),$m.fromBufferAttribute(a,l),Ym.fromBufferAttribute(a,u),c.normal=fi.getInterpolation(gl,Es,ws,Ts,jm,$m,Ym,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new z,materialIndex:0};fi.getNormal(Es,ws,Ts,h.normal),c.face=h}return c}class ss extends Pn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(h,2));function _(y,p,f,g,v,x,C,T,A,b,w){const S=x/A,R=C/b,H=x/2,k=C/2,U=T/2,D=A+1,N=b+1;let j=0,I=0;const W=new z;for(let Y=0;Y<N;Y++){const Q=Y*R-k;for(let de=0;de<D;de++){const Te=de*S-H;W[y]=Te*g,W[p]=Q*v,W[f]=U,u.push(W.x,W.y,W.z),W[y]=0,W[p]=0,W[f]=T>0?1:-1,c.push(W.x,W.y,W.z),h.push(de/A),h.push(1-Y/b),j+=1}}for(let Y=0;Y<b;Y++)for(let Q=0;Q<A;Q++){const de=d+Q+D*Y,Te=d+Q+D*(Y+1),$=d+(Q+1)+D*(Y+1),K=d+(Q+1)+D*Y;l.push(de,Te,K),l.push(Te,$,K),I+=6}o.addGroup(m,I,w),m+=I,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function da(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=da(t[n]);for(const r in i)e[r]=i[r]}return e}function qE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function A_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const KE={clone:da,merge:en};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=QE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=qE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class C_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new z,qm=new Xe,Km=new Xe;class Un extends C_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Oh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,qm,Km),n.subVectors(Km,qm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,Cs=1;class JE extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(As,Cs,e,n);r.layers=this.layers,this.add(r);const s=new Un(As,Cs,e,n);s.layers=this.layers,this.add(s);const a=new Un(As,Cs,e,n);a.layers=this.layers,this.add(a);const o=new Un(As,Cs,e,n);o.layers=this.layers,this.add(o);const l=new Un(As,Cs,e,n);l.layers=this.layers,this.add(l);const u=new Un(As,Cs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Su)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class R_ extends mn{constructor(e,n,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ua,super(e,n,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ew extends is{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new R_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ss(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:pr});s.uniforms.tEquirect.value=n;const a=new Kt(r,s),o=n.minFilter;return n.minFilter===Vr&&(n.minFilter=Kn),new JE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Yc=new z,tw=new z,nw=new ze;class Dr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yc.subVectors(i,n).cross(tw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nw.getNormalMatrix(e),r=this.coplanarPoint(Yc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new ju,yl=new z;class jd{constructor(e=new Dr,n=new Dr,i=new Dr,r=new Dr,s=new Dr,a=new Dr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Li){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],m=r[8],_=r[9],y=r[10],p=r[11],f=r[12],g=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,d-u,p-m,x-f).normalize(),i[1].setComponents(l+s,d+u,p+m,x+f).normalize(),i[2].setComponents(l+a,d+c,p+_,x+g).normalize(),i[3].setComponents(l-a,d-c,p-_,x-g).normalize(),i[4].setComponents(l-o,d-h,p-y,x-v).normalize(),n===Li)i[5].setComponents(l+o,d+h,p+y,x+v).normalize();else if(n===Su)i[5].setComponents(o,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function P_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function iw(t){const e=new WeakMap;function n(o,l){const u=o.array,c=o.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const c=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,o),h.count===-1&&d.length===0&&t.bufferSubData(u,0,c),d.length!==0){for(let m=0,_=d.length;m<_;m++){const y=d[m];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*c.BYTES_PER_ELEMENT,c,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Uo extends Pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,h=e/o,d=n/l,m=[],_=[],y=[],p=[];for(let f=0;f<c;f++){const g=f*d-a;for(let v=0;v<u;v++){const x=v*h-s;_.push(x,-g,0),y.push(0,0,1),p.push(v/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){const v=g+u*f,x=g+u*(f+1),C=g+1+u*(f+1),T=g+1+u*f;m.push(v,x,T),m.push(x,C,T)}this.setIndex(m),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var rw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ow=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_w=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ew=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ww=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Aw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ow=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ww=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$w=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,n1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,d1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,H1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,UT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:rw,alphahash_pars_fragment:sw,alphamap_fragment:aw,alphamap_pars_fragment:ow,alphatest_fragment:lw,alphatest_pars_fragment:uw,aomap_fragment:cw,aomap_pars_fragment:fw,batching_pars_vertex:hw,batching_vertex:dw,begin_vertex:pw,beginnormal_vertex:mw,bsdfs:gw,iridescence_fragment:vw,bumpmap_pars_fragment:_w,clipping_planes_fragment:yw,clipping_planes_pars_fragment:xw,clipping_planes_pars_vertex:Sw,clipping_planes_vertex:Mw,color_fragment:Ew,color_pars_fragment:ww,color_pars_vertex:Tw,color_vertex:Aw,common:Cw,cube_uv_reflection_fragment:Rw,defaultnormal_vertex:Pw,displacementmap_pars_vertex:bw,displacementmap_vertex:Lw,emissivemap_fragment:Iw,emissivemap_pars_fragment:Nw,colorspace_fragment:Dw,colorspace_pars_fragment:Uw,envmap_fragment:Fw,envmap_common_pars_fragment:Ow,envmap_pars_fragment:kw,envmap_pars_vertex:Bw,envmap_physical_pars_fragment:Kw,envmap_vertex:zw,fog_vertex:Hw,fog_pars_vertex:Vw,fog_fragment:Gw,fog_pars_fragment:Ww,gradientmap_pars_fragment:Xw,lightmap_pars_fragment:jw,lights_lambert_fragment:$w,lights_lambert_pars_fragment:Yw,lights_pars_begin:qw,lights_toon_fragment:Zw,lights_toon_pars_fragment:Qw,lights_phong_fragment:Jw,lights_phong_pars_fragment:e1,lights_physical_fragment:t1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:r1,lights_fragment_end:s1,logdepthbuf_fragment:a1,logdepthbuf_pars_fragment:o1,logdepthbuf_pars_vertex:l1,logdepthbuf_vertex:u1,map_fragment:c1,map_pars_fragment:f1,map_particle_fragment:h1,map_particle_pars_fragment:d1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:m1,morphinstance_vertex:g1,morphcolor_vertex:v1,morphnormal_vertex:_1,morphtarget_pars_vertex:y1,morphtarget_vertex:x1,normal_fragment_begin:S1,normal_fragment_maps:M1,normal_pars_fragment:E1,normal_pars_vertex:w1,normal_vertex:T1,normalmap_pars_fragment:A1,clearcoat_normal_fragment_begin:C1,clearcoat_normal_fragment_maps:R1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:b1,opaque_fragment:L1,packing:I1,premultiplied_alpha_fragment:N1,project_vertex:D1,dithering_fragment:U1,dithering_pars_fragment:F1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:z1,shadowmap_vertex:H1,shadowmask_pars_fragment:V1,skinbase_vertex:G1,skinning_pars_vertex:W1,skinning_vertex:X1,skinnormal_vertex:j1,specularmap_fragment:$1,specularmap_pars_fragment:Y1,tonemapping_fragment:q1,tonemapping_pars_fragment:K1,transmission_fragment:Z1,transmission_pars_fragment:Q1,uv_pars_fragment:J1,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:rT,backgroundCube_vert:sT,backgroundCube_frag:aT,cube_vert:oT,cube_frag:lT,depth_vert:uT,depth_frag:cT,distanceRGBA_vert:fT,distanceRGBA_frag:hT,equirect_vert:dT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:vT,meshbasic_frag:_T,meshlambert_vert:yT,meshlambert_frag:xT,meshmatcap_vert:ST,meshmatcap_frag:MT,meshnormal_vert:ET,meshnormal_frag:wT,meshphong_vert:TT,meshphong_frag:AT,meshphysical_vert:CT,meshphysical_frag:RT,meshtoon_vert:PT,meshtoon_frag:bT,points_vert:LT,points_frag:IT,shadow_vert:NT,shadow_frag:DT,sprite_vert:UT,sprite_frag:FT},he={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ui={basic:{uniforms:en([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:en([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:en([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:en([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:en([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:en([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:en([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:en([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:en([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:en([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:en([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:en([he.common,he.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:en([he.lights,he.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ui.physical={uniforms:en([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const xl={r:0,b:0,g:0},br=new gi,OT=new xt;function kT(t,e,n,i,r,s,a){const o=new Ve(0);let l=s===!0?0:1,u,c,h=null,d=0,m=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const x=_(g);x===null?f(o,l):x&&x.isColor&&(f(x,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,v){const x=_(v);x&&(x.isCubeTexture||x.mapping===Wu)?(c===void 0&&(c=new Kt(new ss(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:da(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),br.copy(v.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(br)),c.material.toneMapped=Je.getTransfer(x.colorSpace)!==lt,(h!==x||d!==x.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Kt(new Uo(2,2),new yr({name:"BackgroundMaterial",uniforms:da(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Je.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function f(g,v){g.getRGB(xl,A_(t)),i.buffers.color.setClear(xl.r,xl.g,xl.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(o,l)},render:y,addToRenderList:p}}function BT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,R,H,k,U){let D=!1;const N=h(k,H,R);s!==N&&(s=N,u(s.object)),D=m(S,k,H,U),D&&_(S,k,H,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,x(S,R,H,k),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function h(S,R,H){const k=H.wireframe===!0;let U=i[S.id];U===void 0&&(U={},i[S.id]=U);let D=U[R.id];D===void 0&&(D={},U[R.id]=D);let N=D[k];return N===void 0&&(N=d(l()),D[k]=N),N}function d(S){const R=[],H=[],k=[];for(let U=0;U<n;U++)R[U]=0,H[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:k,object:S,attributes:{},index:null}}function m(S,R,H,k){const U=s.attributes,D=R.attributes;let N=0;const j=H.getAttributes();for(const I in j)if(j[I].location>=0){const Y=U[I];let Q=D[I];if(Q===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Y===void 0||Y.attribute!==Q||Q&&Y.data!==Q.data)return!0;N++}return s.attributesNum!==N||s.index!==k}function _(S,R,H,k){const U={},D=R.attributes;let N=0;const j=H.getAttributes();for(const I in j)if(j[I].location>=0){let Y=D[I];Y===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor));const Q={};Q.attribute=Y,Y&&Y.data&&(Q.data=Y.data),U[I]=Q,N++}s.attributes=U,s.attributesNum=N,s.index=k}function y(){const S=s.newAttributes;for(let R=0,H=S.length;R<H;R++)S[R]=0}function p(S){f(S,0)}function f(S,R){const H=s.newAttributes,k=s.enabledAttributes,U=s.attributeDivisors;H[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),U[S]!==R&&(t.vertexAttribDivisor(S,R),U[S]=R)}function g(){const S=s.newAttributes,R=s.enabledAttributes;for(let H=0,k=R.length;H<k;H++)R[H]!==S[H]&&(t.disableVertexAttribArray(H),R[H]=0)}function v(S,R,H,k,U,D,N){N===!0?t.vertexAttribIPointer(S,R,H,U,D):t.vertexAttribPointer(S,R,H,k,U,D)}function x(S,R,H,k){y();const U=k.attributes,D=H.getAttributes(),N=R.defaultAttributeValues;for(const j in D){const I=D[j];if(I.location>=0){let W=U[j];if(W===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const Y=W.normalized,Q=W.itemSize,de=e.get(W);if(de===void 0)continue;const Te=de.buffer,$=de.type,K=de.bytesPerElement,fe=$===t.INT||$===t.UNSIGNED_INT||W.gpuType===Bd;if(W.isInterleavedBufferAttribute){const le=W.data,Ie=le.stride,Fe=W.offset;if(le.isInstancedInterleavedBuffer){for(let Ue=0;Ue<I.locationSize;Ue++)f(I.location+Ue,le.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ue=0;Ue<I.locationSize;Ue++)p(I.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let Ue=0;Ue<I.locationSize;Ue++)v(I.location+Ue,Q/I.locationSize,$,Y,Ie*K,(Fe+Q/I.locationSize*Ue)*K,fe)}else{if(W.isInstancedBufferAttribute){for(let le=0;le<I.locationSize;le++)f(I.location+le,W.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let le=0;le<I.locationSize;le++)p(I.location+le);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let le=0;le<I.locationSize;le++)v(I.location+le,Q/I.locationSize,$,Y,Q*K,Q/I.locationSize*le*K,fe)}}else if(N!==void 0){const Y=N[j];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(I.location,Y);break;case 3:t.vertexAttrib3fv(I.location,Y);break;case 4:t.vertexAttrib4fv(I.location,Y);break;default:t.vertexAttrib1fv(I.location,Y)}}}}g()}function C(){b();for(const S in i){const R=i[S];for(const H in R){const k=R[H];for(const U in k)c(k[U].object),delete k[U];delete R[H]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const H in R){const k=R[H];for(const U in k)c(k[U].object),delete k[U];delete R[H]}delete i[S.id]}function A(S){for(const R in i){const H=i[R];if(H[S.id]===void 0)continue;const k=H[S.id];for(const U in k)c(k[U].object),delete k[U];delete H[S.id]}}function b(){w(),a=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:g}}function zT(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function a(u,c,h){h!==0&&(t.drawArraysInstanced(i,u,c,h),n.update(c,i,h))}function o(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let m=0;for(let _=0;_<h;_++)m+=c[_];n.update(m,i,1)}function l(u,c,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)a(u[_],c[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=c[y];for(let y=0;y<d.length;y++)n.update(_,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function HT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Zn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Oi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==bi&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,maxSamples:C}}function VT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Dr,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,f=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?c(null):u();else{const g=s?0:i,v=g*4;let x=f.clippingState||null;l.value=x,x=c(_,d,v,m);for(let C=0;C!==v;++C)x[C]=n[C];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,m,_){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const f=m+y*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,x=m;v!==y;++v,x+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function GT(t){let e=new WeakMap;function n(a,o){return o===oh?a.mapping=ua:o===lh&&(a.mapping=ca),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===oh||o===lh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new ew(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class b_ extends C_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Hs=4,Zm=[.125,.215,.35,.446,.526,.582],Or=20,qc=new b_,Qm=new Ve;let Kc=null,Zc=0,Qc=0,Jc=!1;const Ur=(1+Math.sqrt(5))/2,Rs=1/Ur,Jm=[new z(-Ur,Rs,0),new z(Ur,Rs,0),new z(-Rs,0,Ur),new z(Rs,0,Ur),new z(0,Ur,-Rs),new z(0,Ur,Rs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Qc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ua||e.mapping===ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Io,format:Zn,colorSpace:wr,depthBuffer:!1},r=tg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WT(s)),this._blurMaterial=XT(s,e,n)}return r}_compileMaterial(e){const n=new Kt(this._lodPlanes[0],e);this._renderer.compile(n,qc)}_sceneToCubeUV(e,n,i,r){const o=new Un(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Qm),c.toneMapping=mr,c.autoClear=!1;const m=new Eu({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new Kt(new ss,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Qm),y=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(o.up.set(0,l[f],0),o.lookAt(u[f],0,0)):g===1?(o.up.set(0,0,l[f]),o.lookAt(0,u[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,u[f]));const v=this._cubeSize;Sl(r,g*v,f>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(_,o),c.render(e,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ua||e.mapping===ca;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,qc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jm[(r-s-1)%Jm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Kt(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Or-1),y=s/_,p=isFinite(s)?1+Math.floor(c*y):Or;p>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Or}`);const f=[];let g=0;for(let A=0;A<Or;++A){const b=A/y,w=Math.exp(-b*b/2);f.push(w),A===0?g+=w:A<p&&(g+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const x=this._sizeLods[r],C=3*x*(r>v-Hs?r-v+Hs:0),T=4*(this._cubeSize-x);Sl(n,C,T,3*x,2*x),l.setRenderTarget(n),l.render(h,qc)}}function WT(t){const e=[],n=[],i=[];let r=t;const s=t-Hs+1+Zm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Hs?l=Zm[a-t+Hs-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,_=6,y=3,p=2,f=1,g=new Float32Array(y*_*m),v=new Float32Array(p*_*m),x=new Float32Array(f*_*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,b=T>2?0:-1,w=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];g.set(w,y*_*T),v.set(d,p*_*T);const S=[T,T,T,T,T,T];x.set(S,f*_*T)}const C=new Pn;C.setAttribute("position",new mi(g,y)),C.setAttribute("uv",new mi(v,p)),C.setAttribute("faceIndex",new mi(x,f)),e.push(C),r>Hs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function tg(t,e,n){const i=new is(t,e,n);return i.texture.mapping=Wu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function XT(t,e,n){const i=new Float32Array(Or),r=new z(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function ng(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function ig(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function $d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===oh||l===lh,c=l===ua||l===ca;if(u||c){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new eg(t)),h=u?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return u&&m&&m.height>0||c&&m&&r(m)?(n===null&&(n=new eg(t)),h=u?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function $T(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Qa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YT(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,f=y.length;p<f;p++)e.update(y[p],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,_=h.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let v=0,x=g.length;v<x;v+=3){const C=g[v+0],T=g[v+1],A=g[v+2];d.push(C,T,T,A,A,C)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,x=g.length/3-1;v<x;v+=3){const C=v+0,T=v+1,A=v+2;d.push(C,T,T,A,A,C)}}else return;const p=new(__(d)?T_:w_)(d,1);p.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function c(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function qT(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*a),n.update(m,i,1)}function u(d,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,d*a,_),n.update(m,i,_))}function c(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];n.update(p,i,1)}function h(d,m,_,y){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)u(d[f]/a,m[f],y[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,y,0,_);let f=0;for(let g=0;g<_;g++)f+=m[g];for(let g=0;g<y.length;g++)n.update(f,i,y[g])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function KT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ZT(t,e,n){const i=new WeakMap,r=new bt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),p===!0&&(x=3);let C=o.attributes.position.count*x,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*h),b=new x_(A,C,T,h);b.type=bi,b.needsUpdate=!0;const w=x*4;for(let R=0;R<h;R++){const H=f[R],k=g[R],U=v[R],D=C*T*4*R;for(let N=0;N<H.count;N++){const j=N*w;_===!0&&(r.fromBufferAttribute(H,N),A[D+j+0]=r.x,A[D+j+1]=r.y,A[D+j+2]=r.z,A[D+j+3]=0),y===!0&&(r.fromBufferAttribute(k,N),A[D+j+4]=r.x,A[D+j+5]=r.y,A[D+j+6]=r.z,A[D+j+7]=0),p===!0&&(r.fromBufferAttribute(U,N),A[D+j+8]=r.x,A[D+j+9]=r.y,A[D+j+10]=r.z,A[D+j+11]=U.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new Xe(C,T)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<u.length;p++)_+=u[p];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function QT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class L_ extends mn{constructor(e,n,i,r,s,a,o,l,u,c=qs){if(c!==qs&&c!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===qs&&(i=ns),i===void 0&&c===ha&&(i=fa),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const I_=new mn,rg=new L_(1,1),N_=new x_,D_=new kE,U_=new R_,sg=[],ag=[],og=new Float32Array(16),lg=new Float32Array(9),ug=new Float32Array(4);function xa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sg[r];if(s===void 0&&(s=new Float32Array(r),sg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $u(t,e){let n=ag[e];n===void 0&&(n=new Int32Array(e),ag[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function iA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;ug.set(i),t.uniformMatrix2fv(this.addr,!1,ug),Dt(n,i)}}function rA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;lg.set(i),t.uniformMatrix3fv(this.addr,!1,lg),Dt(n,i)}}function sA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Nt(n,i))return;og.set(i),t.uniformMatrix4fv(this.addr,!1,og),Dt(n,i)}}function aA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function cA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function hA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function dA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function pA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(rg.compareFunction=v_,s=rg):s=I_,n.setTexture2D(e||s,r)}function mA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||D_,r)}function gA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||U_,r)}function vA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||N_,r)}function _A(t){switch(t){case 5126:return JT;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return rA;case 35676:return sA;case 5124:case 35670:return aA;case 35667:case 35671:return oA;case 35668:case 35672:return lA;case 35669:case 35673:return uA;case 5125:return cA;case 36294:return fA;case 36295:return hA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return vA}}function yA(t,e){t.uniform1fv(this.addr,e)}function xA(t,e){const n=xa(e,this.size,2);t.uniform2fv(this.addr,n)}function SA(t,e){const n=xa(e,this.size,3);t.uniform3fv(this.addr,n)}function MA(t,e){const n=xa(e,this.size,4);t.uniform4fv(this.addr,n)}function EA(t,e){const n=xa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function wA(t,e){const n=xa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TA(t,e){const n=xa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AA(t,e){t.uniform1iv(this.addr,e)}function CA(t,e){t.uniform2iv(this.addr,e)}function RA(t,e){t.uniform3iv(this.addr,e)}function PA(t,e){t.uniform4iv(this.addr,e)}function bA(t,e){t.uniform1uiv(this.addr,e)}function LA(t,e){t.uniform2uiv(this.addr,e)}function IA(t,e){t.uniform3uiv(this.addr,e)}function NA(t,e){t.uniform4uiv(this.addr,e)}function DA(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||I_,s[a])}function UA(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||D_,s[a])}function FA(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||U_,s[a])}function OA(t,e,n){const i=this.cache,r=e.length,s=$u(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||N_,s[a])}function kA(t){switch(t){case 5126:return yA;case 35664:return xA;case 35665:return SA;case 35666:return MA;case 35674:return EA;case 35675:return wA;case 35676:return TA;case 5124:case 35670:return AA;case 35667:case 35671:return CA;case 35668:case 35672:return RA;case 35669:case 35673:return PA;case 5125:return bA;case 36294:return LA;case 36295:return IA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return OA}}class BA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_A(n.type)}}class zA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kA(n.type)}}class HA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function cg(t,e){t.seq.push(e),t.map[e.id]=e}function VA(t,e,n){const i=t.name,r=i.length;for(ef.lastIndex=0;;){const s=ef.exec(i),a=ef.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){cg(n,u===void 0?new BA(o,t,e):new zA(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new HA(o),cg(n,h)),n=h}}}class Xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);VA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const GA=37297;let WA=0;function XA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function jA(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===xu&&n===yu?i="LinearDisplayP3ToLinearSRGB":e===yu&&n===xu&&(i="LinearSRGBToLinearDisplayP3"),t){case wr:case Xu:return[i,"LinearTransferOETF"];case oi:case Xd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function hg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+XA(t.getShaderSource(e),a)}else return r}function $A(t,e){const n=jA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function YA(t,e){let n;switch(e){case hE:n="Linear";break;case dE:n="Reinhard";break;case pE:n="OptimizedCineon";break;case mE:n="ACESFilmic";break;case vE:n="AgX";break;case _E:n="Neutral";break;case gE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ml=new z;function qA(){Je.getLuminanceCoefficients(Ml);const t=Ml.x.toFixed(4),e=Ml.y.toFixed(4),n=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function ZA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function QA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function za(t){return t!==""}function dg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JA=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(t){return t.replace(JA,tC)}const eC=new Map;function tC(t,e){let n=Be[e];if(n===void 0){const i=eC.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kh(n)}const nC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(t){return t.replace(nC,iC)}function iC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===i_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function sC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ua:case ca:e="ENVMAP_TYPE_CUBE";break;case Wu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ca:e="ENVMAP_MODE_REFRACTION";break}return e}function oC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case cE:e="ENVMAP_BLENDING_MIX";break;case fE:e="ENVMAP_BLENDING_ADD";break}return e}function lC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uC(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=rC(n),u=sC(n),c=aC(n),h=oC(n),d=lC(n),m=KA(n),_=ZA(s),y=r.createProgram();let p,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(za).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(za).join(`
`),f.length>0&&(f+=`
`)):(p=[gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),f=[gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?Be.tonemapping_pars_fragment:"",n.toneMapping!==mr?YA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,$A("linearToOutputTexel",n.outputColorSpace),qA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(za).join(`
`)),a=kh(a),a=dg(a,n),a=pg(a,n),o=kh(o),o=dg(o,n),o=pg(o,n),a=mg(a),o=mg(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=g+p+a,x=g+f+o,C=fg(r,r.VERTEX_SHADER,v),T=fg(r,r.FRAGMENT_SHADER,x);r.attachShader(y,C),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(R){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(C).trim(),U=r.getShaderInfoLog(T).trim();let D=!0,N=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,T);else{const j=hg(r,C,"vertex"),I=hg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+j+`
`+I)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||U==="")&&(N=!1);N&&(R.diagnostics={runnable:D,programLog:H,vertexShader:{log:k,prefix:p},fragmentShader:{log:U,prefix:f}})}r.deleteShader(C),r.deleteShader(T),b=new Xl(r,y),w=QA(r,y)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,GA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}let cC=0;class fC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new hC(e),n.set(e,i)),i}}class hC{constructor(e){this.id=cC++,this.code=e,this.usedTimes=0}}function dC(t,e,n,i,r,s,a){const o=new M_,l=new fC,u=new Set,c=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return u.add(w),w===0?"uv":`uv${w}`}function p(w,S,R,H,k){const U=H.fog,D=k.geometry,N=w.isMeshStandardMaterial?H.environment:null,j=(w.isMeshStandardMaterial?n:e).get(w.envMap||N),I=j&&j.mapping===Wu?j.image.height:null,W=_[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=Y!==void 0?Y.length:0;let de=0;D.morphAttributes.position!==void 0&&(de=1),D.morphAttributes.normal!==void 0&&(de=2),D.morphAttributes.color!==void 0&&(de=3);let Te,$,K,fe;if(W){const Ye=ui[W];Te=Ye.vertexShader,$=Ye.fragmentShader}else Te=w.vertexShader,$=w.fragmentShader,l.update(w),K=l.getVertexShaderID(w),fe=l.getFragmentShaderID(w);const le=t.getRenderTarget(),Ie=k.isInstancedMesh===!0,Fe=k.isBatchedMesh===!0,Ue=!!w.map,st=!!w.matcap,L=!!j,Mt=!!w.aoMap,et=!!w.lightMap,it=!!w.bumpMap,we=!!w.normalMap,Et=!!w.displacementMap,Ne=!!w.emissiveMap,Oe=!!w.metalnessMap,P=!!w.roughnessMap,M=w.anisotropy>0,X=w.clearcoat>0,ne=w.dispersion>0,re=w.iridescence>0,te=w.sheen>0,Ae=w.transmission>0,pe=M&&!!w.anisotropyMap,_e=X&&!!w.clearcoatMap,ke=X&&!!w.clearcoatNormalMap,se=X&&!!w.clearcoatRoughnessMap,ve=re&&!!w.iridescenceMap,We=re&&!!w.iridescenceThicknessMap,Le=te&&!!w.sheenColorMap,ye=te&&!!w.sheenRoughnessMap,De=!!w.specularMap,He=!!w.specularColorMap,dt=!!w.specularIntensityMap,F=Ae&&!!w.transmissionMap,ae=Ae&&!!w.thicknessMap,Z=!!w.gradientMap,J=!!w.alphaMap,ue=w.alphaTest>0,Re=!!w.alphaHash,je=!!w.extensions;let wt=mr;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(wt=t.toneMapping);const kt={shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:Te,fragmentShader:$,defines:w.defines,customVertexShaderID:K,customFragmentShaderID:fe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Fe,batchingColor:Fe&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:wr,alphaToCoverage:!!w.alphaToCoverage,map:Ue,matcap:st,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:I,aoMap:Mt,lightMap:et,bumpMap:it,normalMap:we,displacementMap:d&&Et,emissiveMap:Ne,normalMapObjectSpace:we&&w.normalMapType===ME,normalMapTangentSpace:we&&w.normalMapType===g_,metalnessMap:Oe,roughnessMap:P,anisotropy:M,anisotropyMap:pe,clearcoat:X,clearcoatMap:_e,clearcoatNormalMap:ke,clearcoatRoughnessMap:se,dispersion:ne,iridescence:re,iridescenceMap:ve,iridescenceThicknessMap:We,sheen:te,sheenColorMap:Le,sheenRoughnessMap:ye,specularMap:De,specularColorMap:He,specularIntensityMap:dt,transmission:Ae,transmissionMap:F,thicknessMap:ae,gradientMap:Z,opaque:w.transparent===!1&&w.blending===Ys&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:ue,alphaHash:Re,combine:w.combine,mapUv:Ue&&y(w.map.channel),aoMapUv:Mt&&y(w.aoMap.channel),lightMapUv:et&&y(w.lightMap.channel),bumpMapUv:it&&y(w.bumpMap.channel),normalMapUv:we&&y(w.normalMap.channel),displacementMapUv:Et&&y(w.displacementMap.channel),emissiveMapUv:Ne&&y(w.emissiveMap.channel),metalnessMapUv:Oe&&y(w.metalnessMap.channel),roughnessMapUv:P&&y(w.roughnessMap.channel),anisotropyMapUv:pe&&y(w.anisotropyMap.channel),clearcoatMapUv:_e&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:ke&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:We&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:ye&&y(w.sheenRoughnessMap.channel),specularMapUv:De&&y(w.specularMap.channel),specularColorMapUv:He&&y(w.specularColorMap.channel),specularIntensityMapUv:dt&&y(w.specularIntensityMap.channel),transmissionMapUv:F&&y(w.transmissionMap.channel),thicknessMapUv:ae&&y(w.thicknessMap.channel),alphaMapUv:J&&y(w.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(we||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!D.attributes.uv&&(Ue||J),fog:!!U,useFog:w.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,decodeVideoTexture:Ue&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ci,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:je&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&w.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return kt.vertexUv1s=u.has(1),kt.vertexUv2s=u.has(2),kt.vertexUv3s=u.has(3),u.clear(),kt}function f(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)S.push(R),S.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(g(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),w.push(o.mask)}function x(w){const S=_[w.type];let R;if(S){const H=ui[S];R=KE.clone(H.uniforms)}else R=w.uniforms;return R}function C(w,S){let R;for(let H=0,k=c.length;H<k;H++){const U=c[H];if(U.cacheKey===S){R=U,++R.usedTimes;break}}return R===void 0&&(R=new uC(t,S,w,s),c.push(R)),R}function T(w){if(--w.usedTimes===0){const S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function A(w){l.remove(w)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:b}}function pC(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function mC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function vg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _g(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,m,_,y,p){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:y,group:p},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=y,f.group=p),e++,f}function o(h,d,m,_,y,p){const f=a(h,d,m,_,y,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(h,d,m,_,y,p){const f=a(h,d,m,_,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||mC),i.length>1&&i.sort(d||vg),r.length>1&&r.sort(d||vg)}function c(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function gC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new _g,t.set(i,[a])):r>=s.length?(a=new _g,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function vC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ve};break;case"SpotLight":n={position:new z,direction:new z,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function _C(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let yC=0;function xC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SC(t){const e=new vC,n=_C(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new xt,a=new xt;function o(u){let c=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,_=0,y=0,p=0,f=0,g=0,v=0,x=0,C=0,T=0,A=0;u.sort(xC);for(let w=0,S=u.length;w<S;w++){const R=u[w],H=R.color,k=R.intensity,U=R.distance,D=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=H.r*k,h+=H.g*k,d+=H.b*k;else if(R.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(R.sh.coefficients[N],k);A++}else if(R.isDirectionalLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,I=n.get(R);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=D,i.directionalShadowMatrix[m]=R.shadow.matrix,g++}i.directional[m]=N,m++}else if(R.isSpotLight){const N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(H).multiplyScalar(k),N.distance=U,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,i.spot[y]=N;const j=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,j.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[y]=j.matrix,R.castShadow){const I=n.get(R);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=D,x++}y++}else if(R.isRectAreaLight){const N=e.get(R);N.color.copy(H).multiplyScalar(k),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=N,p++}else if(R.isPointLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const j=R.shadow,I=n.get(R);I.shadowIntensity=j.intensity,I.shadowBias=j.bias,I.shadowNormalBias=j.normalBias,I.shadowRadius=j.radius,I.shadowMapSize=j.mapSize,I.shadowCameraNear=j.camera.near,I.shadowCameraFar=j.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=D,i.pointShadowMatrix[_]=R.shadow.matrix,v++}i.point[_]=N,_++}else if(R.isHemisphereLight){const N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(k),N.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[f]=N,f++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==m||b.pointLength!==_||b.spotLength!==y||b.rectAreaLength!==p||b.hemiLength!==f||b.numDirectionalShadows!==g||b.numPointShadows!==v||b.numSpotShadows!==x||b.numSpotMaps!==C||b.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,b.directionalLength=m,b.pointLength=_,b.spotLength=y,b.rectAreaLength=p,b.hemiLength=f,b.numDirectionalShadows=g,b.numPointShadows=v,b.numSpotShadows=x,b.numSpotMaps=C,b.numLightProbes=A,i.version=yC++)}function l(u,c){let h=0,d=0,m=0,_=0,y=0;const p=c.matrixWorldInverse;for(let f=0,g=u.length;f<g;f++){const v=u[f];if(v.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),h++}else if(v.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:i}}function yg(t){const e=new SC(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function a(c){i.push(c)}function o(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function MC(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new yg(t),e.set(r,[o])):s>=a.length?(o=new yg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class EC extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wC extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CC(t,e,n){let i=new jd;const r=new Xe,s=new Xe,a=new bt,o=new EC({depthPacking:SE}),l=new wC,u={},c=n.maxTextureSize,h={[_r]:pn,[pn]:_r,[Ci]:Ci},d=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:TC,fragmentShader:AC}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Pn;_.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Kt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let f=this.type;this.render=function(T,A,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),H=t.state;H.setBlending(pr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=f!==Ei&&this.type===Ei,U=f===Ei&&this.type!==Ei;for(let D=0,N=T.length;D<N;D++){const j=T[D],I=j.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const W=I.getFrameExtents();if(r.multiply(W),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/W.x),r.x=s.x*W.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/W.y),r.y=s.y*W.y,I.mapSize.y=s.y)),I.map===null||k===!0||U===!0){const Q=this.type!==Ei?{minFilter:On,magFilter:On}:{};I.map!==null&&I.map.dispose(),I.map=new is(r.x,r.y,Q),I.map.texture.name=j.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const Y=I.getViewportCount();for(let Q=0;Q<Y;Q++){const de=I.getViewport(Q);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),H.viewport(a),I.updateMatrices(j,Q),i=I.getFrustum(),x(A,b,I.camera,j,this.type)}I.isPointLightShadow!==!0&&this.type===Ei&&g(I,b),I.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(w,S,R)};function g(T,A){const b=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new is(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,b,d,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,b,m,y,null)}function v(T,A,b,w){let S=null;const R=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=b.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=S.uuid,k=A.uuid;let U=u[H];U===void 0&&(U={},u[H]=U);let D=U[k];D===void 0&&(D=S.clone(),U[k]=D,A.addEventListener("dispose",C)),S=D}if(S.visible=A.visible,S.wireframe=A.wireframe,w===Ei?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=b}return S}function x(T,A,b,w,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Ei)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const k=e.update(T),U=T.material;if(Array.isArray(U)){const D=k.groups;for(let N=0,j=D.length;N<j;N++){const I=D[N],W=U[I.materialIndex];if(W&&W.visible){const Y=v(T,W,w,S);T.onBeforeShadow(t,T,A,b,k,Y,I),t.renderBufferDirect(b,null,k,Y,T,I),T.onAfterShadow(t,T,A,b,k,Y,I)}}}else if(U.visible){const D=v(T,U,w,S);T.onBeforeShadow(t,T,A,b,k,D,null),t.renderBufferDirect(b,null,k,D,T,null),T.onAfterShadow(t,T,A,b,k,D,null)}}const H=T.children;for(let k=0,U=H.length;k<U;k++)x(H[k],A,b,w,S)}function C(T){T.target.removeEventListener("dispose",C);for(const b in u){const w=u[b],S=T.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function RC(t){function e(){let F=!1;const ae=new bt;let Z=null;const J=new bt(0,0,0,0);return{setMask:function(ue){Z!==ue&&!F&&(t.colorMask(ue,ue,ue,ue),Z=ue)},setLocked:function(ue){F=ue},setClear:function(ue,Re,je,wt,kt){kt===!0&&(ue*=wt,Re*=wt,je*=wt),ae.set(ue,Re,je,wt),J.equals(ae)===!1&&(t.clearColor(ue,Re,je,wt),J.copy(ae))},reset:function(){F=!1,Z=null,J.set(-1,0,0,0)}}}function n(){let F=!1,ae=null,Z=null,J=null;return{setTest:function(ue){ue?fe(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(ue){ae!==ue&&!F&&(t.depthMask(ue),ae=ue)},setFunc:function(ue){if(Z!==ue){switch(ue){case iE:t.depthFunc(t.NEVER);break;case rE:t.depthFunc(t.ALWAYS);break;case sE:t.depthFunc(t.LESS);break;case vu:t.depthFunc(t.LEQUAL);break;case aE:t.depthFunc(t.EQUAL);break;case oE:t.depthFunc(t.GEQUAL);break;case lE:t.depthFunc(t.GREATER);break;case uE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=ue}},setLocked:function(ue){F=ue},setClear:function(ue){J!==ue&&(t.clearDepth(ue),J=ue)},reset:function(){F=!1,ae=null,Z=null,J=null}}}function i(){let F=!1,ae=null,Z=null,J=null,ue=null,Re=null,je=null,wt=null,kt=null;return{setTest:function(Ye){F||(Ye?fe(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Ye){ae!==Ye&&!F&&(t.stencilMask(Ye),ae=Ye)},setFunc:function(Ye,vi,ti){(Z!==Ye||J!==vi||ue!==ti)&&(t.stencilFunc(Ye,vi,ti),Z=Ye,J=vi,ue=ti)},setOp:function(Ye,vi,ti){(Re!==Ye||je!==vi||wt!==ti)&&(t.stencilOp(Ye,vi,ti),Re=Ye,je=vi,wt=ti)},setLocked:function(Ye){F=Ye},setClear:function(Ye){kt!==Ye&&(t.clearStencil(Ye),kt=Ye)},reset:function(){F=!1,ae=null,Z=null,J=null,ue=null,Re=null,je=null,wt=null,kt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,d=[],m=null,_=!1,y=null,p=null,f=null,g=null,v=null,x=null,C=null,T=new Ve(0,0,0),A=0,b=!1,w=null,S=null,R=null,H=null,k=null;const U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,N=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(j)[1]),D=N>=1):j.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),D=N>=2);let I=null,W={};const Y=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),de=new bt().fromArray(Y),Te=new bt().fromArray(Q);function $(F,ae,Z,J){const ue=new Uint8Array(4),Re=t.createTexture();t.bindTexture(F,Re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<Z;je++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(ae+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Re}const K={};K[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),s.setFunc(vu),it(!1),we(Tm),fe(t.CULL_FACE),Mt(pr);function fe(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function le(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function Ie(F,ae){return c[F]!==ae?(t.bindFramebuffer(F,ae),c[F]=ae,F===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=ae),F===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Fe(F,ae){let Z=d,J=!1;if(F){Z=h.get(ae),Z===void 0&&(Z=[],h.set(ae,Z));const ue=F.textures;if(Z.length!==ue.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,je=ue.length;Re<je;Re++)Z[Re]=t.COLOR_ATTACHMENT0+Re;Z.length=ue.length,J=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,J=!0);J&&t.drawBuffers(Z)}function Ue(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const st={[Fr]:t.FUNC_ADD,[zM]:t.FUNC_SUBTRACT,[HM]:t.FUNC_REVERSE_SUBTRACT};st[VM]=t.MIN,st[GM]=t.MAX;const L={[WM]:t.ZERO,[XM]:t.ONE,[jM]:t.SRC_COLOR,[sh]:t.SRC_ALPHA,[QM]:t.SRC_ALPHA_SATURATE,[KM]:t.DST_COLOR,[YM]:t.DST_ALPHA,[$M]:t.ONE_MINUS_SRC_COLOR,[ah]:t.ONE_MINUS_SRC_ALPHA,[ZM]:t.ONE_MINUS_DST_COLOR,[qM]:t.ONE_MINUS_DST_ALPHA,[JM]:t.CONSTANT_COLOR,[eE]:t.ONE_MINUS_CONSTANT_COLOR,[tE]:t.CONSTANT_ALPHA,[nE]:t.ONE_MINUS_CONSTANT_ALPHA};function Mt(F,ae,Z,J,ue,Re,je,wt,kt,Ye){if(F===pr){_===!0&&(le(t.BLEND),_=!1);return}if(_===!1&&(fe(t.BLEND),_=!0),F!==BM){if(F!==y||Ye!==b){if((p!==Fr||v!==Fr)&&(t.blendEquation(t.FUNC_ADD),p=Fr,v=Fr),Ye)switch(F){case Ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Am:t.blendFunc(t.ONE,t.ONE);break;case Cm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Am:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Cm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}f=null,g=null,x=null,C=null,T.set(0,0,0),A=0,y=F,b=Ye}return}ue=ue||ae,Re=Re||Z,je=je||J,(ae!==p||ue!==v)&&(t.blendEquationSeparate(st[ae],st[ue]),p=ae,v=ue),(Z!==f||J!==g||Re!==x||je!==C)&&(t.blendFuncSeparate(L[Z],L[J],L[Re],L[je]),f=Z,g=J,x=Re,C=je),(wt.equals(T)===!1||kt!==A)&&(t.blendColor(wt.r,wt.g,wt.b,kt),T.copy(wt),A=kt),y=F,b=!1}function et(F,ae){F.side===Ci?le(t.CULL_FACE):fe(t.CULL_FACE);let Z=F.side===pn;ae&&(Z=!Z),it(Z),F.blending===Ys&&F.transparent===!1?Mt(pr):Mt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const J=F.stencilWrite;a.setTest(J),J&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ne(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function it(F){w!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),w=F)}function we(F){F!==OM?(fe(t.CULL_FACE),F!==S&&(F===Tm?t.cullFace(t.BACK):F===kM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),S=F}function Et(F){F!==R&&(D&&t.lineWidth(F),R=F)}function Ne(F,ae,Z){F?(fe(t.POLYGON_OFFSET_FILL),(H!==ae||k!==Z)&&(t.polygonOffset(ae,Z),H=ae,k=Z)):le(t.POLYGON_OFFSET_FILL)}function Oe(F){F?fe(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function P(F){F===void 0&&(F=t.TEXTURE0+U-1),I!==F&&(t.activeTexture(F),I=F)}function M(F,ae,Z){Z===void 0&&(I===null?Z=t.TEXTURE0+U-1:Z=I);let J=W[Z];J===void 0&&(J={type:void 0,texture:void 0},W[Z]=J),(J.type!==F||J.texture!==ae)&&(I!==Z&&(t.activeTexture(Z),I=Z),t.bindTexture(F,ae||K[F]),J.type=F,J.texture=ae)}function X(){const F=W[I];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(F){de.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),de.copy(F))}function ye(F){Te.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Te.copy(F))}function De(F,ae){let Z=l.get(ae);Z===void 0&&(Z=new WeakMap,l.set(ae,Z));let J=Z.get(F);J===void 0&&(J=t.getUniformBlockIndex(ae,F.name),Z.set(F,J))}function He(F,ae){const J=l.get(ae).get(F);o.get(ae)!==J&&(t.uniformBlockBinding(ae,J,F.__bindingPointIndex),o.set(ae,J))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},I=null,W={},c={},h=new WeakMap,d=[],m=null,_=!1,y=null,p=null,f=null,g=null,v=null,x=null,C=null,T=new Ve(0,0,0),A=0,b=!1,w=null,S=null,R=null,H=null,k=null,de.set(0,0,t.canvas.width,t.canvas.height),Te.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:fe,disable:le,bindFramebuffer:Ie,drawBuffers:Fe,useProgram:Ue,setBlending:Mt,setMaterial:et,setFlipSided:it,setCullFace:we,setLineWidth:Et,setPolygonOffset:Ne,setScissorTest:Oe,activeTexture:P,bindTexture:M,unbindTexture:X,compressedTexImage2D:ne,compressedTexImage3D:re,texImage2D:ve,texImage3D:We,updateUBOMapping:De,uniformBlockBinding:He,texStorage2D:ke,texStorage3D:se,texSubImage2D:te,texSubImage3D:Ae,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Le,viewport:ye,reset:dt}}function xg(t,e,n,i){const r=PC(i);switch(n){case u_:return t*e;case f_:return t*e;case h_:return t*e*2;case d_:return t*e/r.components*r.byteLength;case Vd:return t*e/r.components*r.byteLength;case p_:return t*e*2/r.components*r.byteLength;case Gd:return t*e*2/r.components*r.byteLength;case c_:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case Wd:return t*e*4/r.components*r.byteLength;case zl:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:case ph:return Math.max(t,16)*Math.max(e,8)/4;case fh:case dh:return Math.max(t,8)*Math.max(e,8)/2;case mh:case gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case xh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Th:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Ih:case Nh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case m_:case Dh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Uh:case Fh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function PC(t){switch(t){case Oi:case a_:return{byteLength:1,components:1};case yo:case o_:case Io:return{byteLength:2,components:1};case zd:case Hd:return{byteLength:2,components:4};case ns:case Bd:case bi:return{byteLength:4,components:1};case l_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function bC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Xe,c=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return m?new OffscreenCanvas(P,M):Mu("canvas")}function y(P,M,X){let ne=1;const re=Oe(P);if((re.width>X||re.height>X)&&(ne=X/Math.max(re.width,re.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(ne*re.width),Ae=Math.floor(ne*re.height);h===void 0&&(h=_(te,Ae));const pe=M?_(te,Ae):h;return pe.width=te,pe.height=Ae,pe.getContext("2d").drawImage(P,0,0,te,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+te+"x"+Ae+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==On&&P.minFilter!==Kn}function f(P){t.generateMipmap(P)}function g(P,M,X,ne,re=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=M;if(M===t.RED&&(X===t.FLOAT&&(te=t.R32F),X===t.HALF_FLOAT&&(te=t.R16F),X===t.UNSIGNED_BYTE&&(te=t.R8)),M===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(te=t.R8UI),X===t.UNSIGNED_SHORT&&(te=t.R16UI),X===t.UNSIGNED_INT&&(te=t.R32UI),X===t.BYTE&&(te=t.R8I),X===t.SHORT&&(te=t.R16I),X===t.INT&&(te=t.R32I)),M===t.RG&&(X===t.FLOAT&&(te=t.RG32F),X===t.HALF_FLOAT&&(te=t.RG16F),X===t.UNSIGNED_BYTE&&(te=t.RG8)),M===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(te=t.RG8UI),X===t.UNSIGNED_SHORT&&(te=t.RG16UI),X===t.UNSIGNED_INT&&(te=t.RG32UI),X===t.BYTE&&(te=t.RG8I),X===t.SHORT&&(te=t.RG16I),X===t.INT&&(te=t.RG32I)),M===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),M===t.RGBA){const Ae=re?_u:Je.getTransfer(ne);X===t.FLOAT&&(te=t.RGBA32F),X===t.HALF_FLOAT&&(te=t.RGBA16F),X===t.UNSIGNED_BYTE&&(te=Ae===lt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(P,M){let X;return P?M===null||M===ns||M===fa?X=t.DEPTH24_STENCIL8:M===bi?X=t.DEPTH32F_STENCIL8:M===yo&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ns||M===fa?X=t.DEPTH_COMPONENT24:M===bi?X=t.DEPTH_COMPONENT32F:M===yo&&(X=t.DEPTH_COMPONENT16),X}function x(P,M){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==On&&P.minFilter!==Kn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){const M=P.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&c.delete(M)}function T(P){const M=P.target;M.removeEventListener("dispose",T),w(M)}function A(P){const M=i.get(P);if(M.__webglInit===void 0)return;const X=P.source,ne=d.get(X);if(ne){const re=ne[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(P),Object.keys(ne).length===0&&d.delete(X)}i.remove(P)}function b(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const X=P.source,ne=d.get(X);delete ne[M.__cacheKey],a.memory.textures--}function w(P){const M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let re=0;re<M.__webglFramebuffer[ne].length;re++)t.deleteFramebuffer(M.__webglFramebuffer[ne][re]);else t.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[ne]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=P.textures;for(let ne=0,re=X.length;ne<re;ne++){const te=i.get(X[ne]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(X[ne])}i.remove(P)}let S=0;function R(){S=0}function H(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function U(P,M){const X=i.get(P);if(P.isVideoTexture&&Et(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(X,P,M);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+M)}function D(P,M){const X=i.get(P);if(P.version>0&&X.__version!==P.version){Te(X,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+M)}function N(P,M){const X=i.get(P);if(P.version>0&&X.__version!==P.version){Te(X,P,M);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+M)}function j(P,M){const X=i.get(P);if(P.version>0&&X.__version!==P.version){$(X,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+M)}const I={[uh]:t.REPEAT,[Hr]:t.CLAMP_TO_EDGE,[ch]:t.MIRRORED_REPEAT},W={[On]:t.NEAREST,[yE]:t.NEAREST_MIPMAP_NEAREST,[tl]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[Rc]:t.LINEAR_MIPMAP_NEAREST,[Vr]:t.LINEAR_MIPMAP_LINEAR},Y={[EE]:t.NEVER,[PE]:t.ALWAYS,[wE]:t.LESS,[v_]:t.LEQUAL,[TE]:t.EQUAL,[RE]:t.GEQUAL,[AE]:t.GREATER,[CE]:t.NOTEQUAL};function Q(P,M){if(M.type===bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Kn||M.magFilter===Rc||M.magFilter===tl||M.magFilter===Vr||M.minFilter===Kn||M.minFilter===Rc||M.minFilter===tl||M.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,I[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,W[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,W[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Y[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==tl&&M.minFilter!==Vr||M.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function de(P,M){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));const ne=M.source;let re=d.get(ne);re===void 0&&(re={},d.set(ne,re));const te=k(M);if(te!==P.__cacheKey){re[te]===void 0&&(re[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),re[te].usedTimes++;const Ae=re[P.__cacheKey];Ae!==void 0&&(re[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(M)),P.__cacheKey=te,P.__webglTexture=re[te].texture}return X}function Te(P,M,X){let ne=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=t.TEXTURE_3D);const re=de(P,M),te=M.source;n.bindTexture(ne,P.__webglTexture,t.TEXTURE0+X);const Ae=i.get(te);if(te.version!==Ae.__version||re===!0){n.activeTexture(t.TEXTURE0+X);const pe=Je.getPrimaries(Je.workingColorSpace),_e=M.colorSpace===Qi?null:Je.getPrimaries(M.colorSpace),ke=M.colorSpace===Qi||pe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let se=y(M.image,!1,r.maxTextureSize);se=Ne(M,se);const ve=s.convert(M.format,M.colorSpace),We=s.convert(M.type);let Le=g(M.internalFormat,ve,We,M.colorSpace,M.isVideoTexture);Q(ne,M);let ye;const De=M.mipmaps,He=M.isVideoTexture!==!0,dt=Ae.__version===void 0||re===!0,F=te.dataReady,ae=x(M,se);if(M.isDepthTexture)Le=v(M.format===ha,M.type),dt&&(He?n.texStorage2D(t.TEXTURE_2D,1,Le,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,ve,We,null));else if(M.isDataTexture)if(De.length>0){He&&dt&&n.texStorage2D(t.TEXTURE_2D,ae,Le,De[0].width,De[0].height);for(let Z=0,J=De.length;Z<J;Z++)ye=De[Z],He?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,ve,We,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Le,ye.width,ye.height,0,ve,We,ye.data);M.generateMipmaps=!1}else He?(dt&&n.texStorage2D(t.TEXTURE_2D,ae,Le,se.width,se.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ve,We,se.data)):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,ve,We,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Le,De[0].width,De[0].height,se.depth);for(let Z=0,J=De.length;Z<J;Z++)if(ye=De[Z],M.format!==Zn)if(ve!==null)if(He){if(F)if(M.layerUpdates.size>0){const ue=xg(ye.width,ye.height,M.format,M.type);for(const Re of M.layerUpdates){const je=ye.data.subarray(Re*ue/ye.data.BYTES_PER_ELEMENT,(Re+1)*ue/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Re,ye.width,ye.height,1,ve,je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,se.depth,ve,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Le,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,se.depth,ve,We,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Le,ye.width,ye.height,se.depth,0,ve,We,ye.data)}else{He&&dt&&n.texStorage2D(t.TEXTURE_2D,ae,Le,De[0].width,De[0].height);for(let Z=0,J=De.length;Z<J;Z++)ye=De[Z],M.format!==Zn?ve!==null?He?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,ve,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,ve,We,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Le,ye.width,ye.height,0,ve,We,ye.data)}else if(M.isDataArrayTexture)if(He){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Le,se.width,se.height,se.depth),F)if(M.layerUpdates.size>0){const Z=xg(se.width,se.height,M.format,M.type);for(const J of M.layerUpdates){const ue=se.data.subarray(J*Z/se.data.BYTES_PER_ELEMENT,(J+1)*Z/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,ve,We,ue)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,We,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,ve,We,se.data);else if(M.isData3DTexture)He?(dt&&n.texStorage3D(t.TEXTURE_3D,ae,Le,se.width,se.height,se.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,We,se.data)):n.texImage3D(t.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,ve,We,se.data);else if(M.isFramebufferTexture){if(dt)if(He)n.texStorage2D(t.TEXTURE_2D,ae,Le,se.width,se.height);else{let Z=se.width,J=se.height;for(let ue=0;ue<ae;ue++)n.texImage2D(t.TEXTURE_2D,ue,Le,Z,J,0,ve,We,null),Z>>=1,J>>=1}}else if(De.length>0){if(He&&dt){const Z=Oe(De[0]);n.texStorage2D(t.TEXTURE_2D,ae,Le,Z.width,Z.height)}for(let Z=0,J=De.length;Z<J;Z++)ye=De[Z],He?F&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ve,We,ye):n.texImage2D(t.TEXTURE_2D,Z,Le,ve,We,ye);M.generateMipmaps=!1}else if(He){if(dt){const Z=Oe(se);n.texStorage2D(t.TEXTURE_2D,ae,Le,Z.width,Z.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,We,se)}else n.texImage2D(t.TEXTURE_2D,0,Le,ve,We,se);p(M)&&f(ne),Ae.__version=te.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function $(P,M,X){if(M.image.length!==6)return;const ne=de(P,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+X);const te=i.get(re);if(re.version!==te.__version||ne===!0){n.activeTexture(t.TEXTURE0+X);const Ae=Je.getPrimaries(Je.workingColorSpace),pe=M.colorSpace===Qi?null:Je.getPrimaries(M.colorSpace),_e=M.colorSpace===Qi||Ae===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ke=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!ke&&!se?ve[J]=y(M.image[J],!0,r.maxCubemapSize):ve[J]=se?M.image[J].image:M.image[J],ve[J]=Ne(M,ve[J]);const We=ve[0],Le=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),De=g(M.internalFormat,Le,ye,M.colorSpace),He=M.isVideoTexture!==!0,dt=te.__version===void 0||ne===!0,F=re.dataReady;let ae=x(M,We);Q(t.TEXTURE_CUBE_MAP,M);let Z;if(ke){He&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,De,We.width,We.height);for(let J=0;J<6;J++){Z=ve[J].mipmaps;for(let ue=0;ue<Z.length;ue++){const Re=Z[ue];M.format!==Zn?Le!==null?He?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,Re.width,Re.height,Le,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,De,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,Re.width,Re.height,Le,ye,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,De,Re.width,Re.height,0,Le,ye,Re.data)}}}else{if(Z=M.mipmaps,He&&dt){Z.length>0&&ae++;const J=Oe(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,De,J.width,J.height)}for(let J=0;J<6;J++)if(se){He?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Le,ye,ve[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,De,ve[J].width,ve[J].height,0,Le,ye,ve[J].data);for(let ue=0;ue<Z.length;ue++){const je=Z[ue].image[J].image;He?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,je.width,je.height,Le,ye,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,De,je.width,je.height,0,Le,ye,je.data)}}else{He?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,ye,ve[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,De,Le,ye,ve[J]);for(let ue=0;ue<Z.length;ue++){const Re=Z[ue];He?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Le,ye,Re.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,De,Le,ye,Re.image[J])}}}p(M)&&f(t.TEXTURE_CUBE_MAP),te.__version=re.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function K(P,M,X,ne,re,te){const Ae=s.convert(X.format,X.colorSpace),pe=s.convert(X.type),_e=g(X.internalFormat,Ae,pe,X.colorSpace);if(!i.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>te),ve=Math.max(1,M.height>>te);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,te,_e,se,ve,M.depth,0,Ae,pe,null):n.texImage2D(re,te,_e,se,ve,0,Ae,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),we(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,re,i.get(X).__webglTexture,0,it(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,re,i.get(X).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(P,M,X){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const ne=M.depthTexture,re=ne&&ne.isDepthTexture?ne.type:null,te=v(M.stencilBuffer,re),Ae=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=it(M);we(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,te,M.width,M.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,te,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,P)}else{const ne=M.textures;for(let re=0;re<ne.length;re++){const te=ne[re],Ae=s.convert(te.format,te.colorSpace),pe=s.convert(te.type),_e=g(te.internalFormat,Ae,pe,te.colorSpace),ke=it(M);X&&we(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,_e,M.width,M.height):we(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,_e,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,_e,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),U(M.depthTexture,0);const ne=i.get(M.depthTexture).__webglTexture,re=it(M);if(M.depthTexture.format===qs)we(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(M.depthTexture.format===ha)we(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ie(P){const M=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");le(M.__webglFramebuffer,P)}else if(X){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=t.createRenderbuffer(),fe(M.__webglDepthbuffer[ne],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),fe(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(P,M,X){const ne=i.get(P);M!==void 0&&K(ne.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Ie(P)}function Ue(P){const M=P.texture,X=i.get(P),ne=i.get(M);P.addEventListener("dispose",T);const re=P.textures,te=P.isWebGLCubeRenderTarget===!0,Ae=re.length>1;if(Ae||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=M.version,a.memory.textures++),te){X.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[pe]=[];for(let _e=0;_e<M.mipmaps.length;_e++)X.__webglFramebuffer[pe][_e]=t.createFramebuffer()}else X.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)X.__webglFramebuffer[pe]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let pe=0,_e=re.length;pe<_e;pe++){const ke=i.get(re[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&we(P)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const _e=re[pe];X.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[pe]);const ke=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),ve=g(_e.internalFormat,ke,se,_e.colorSpace,P.isXRRenderTarget===!0),We=it(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,ve,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,X.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(X.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Q(t.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)K(X.__webglFramebuffer[pe][_e],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else K(X.__webglFramebuffer[pe],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let pe=0,_e=re.length;pe<_e;pe++){const ke=re[pe],se=i.get(ke);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Q(t.TEXTURE_2D,ke),K(X.__webglFramebuffer,P,ke,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),p(ke)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,ne.__webglTexture),Q(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)K(X.__webglFramebuffer[_e],P,M,t.COLOR_ATTACHMENT0,pe,_e);else K(X.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,pe,0);p(M)&&f(pe),n.unbindTexture()}P.depthBuffer&&Ie(P)}function st(P){const M=P.textures;for(let X=0,ne=M.length;X<ne;X++){const re=M[X];if(p(re)){const te=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(re).__webglTexture;n.bindTexture(te,Ae),f(te),n.unbindTexture()}}}const L=[],Mt=[];function et(P){if(P.samples>0){if(we(P)===!1){const M=P.textures,X=P.width,ne=P.height;let re=t.COLOR_BUFFER_BIT;const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(P),pe=M.length>1;if(pe)for(let _e=0;_e<M.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const ke=i.get(M[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,X,ne,0,0,X,ne,re,t.NEAREST),l===!0&&(L.length=0,Mt.length=0,L.push(t.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(L.push(te),Mt.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Mt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<M.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[_e]);const ke=i.get(M[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function it(P){return Math.min(r.maxSamples,P.samples)}function we(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Et(P){const M=a.render.frame;c.get(P)!==M&&(c.set(P,M),P.update())}function Ne(P,M){const X=P.colorSpace,ne=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==wr&&X!==Qi&&(Je.getTransfer(X)===lt?(ne!==Zn||re!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=R,this.setTexture2D=U,this.setTexture2DArray=D,this.setTexture3D=N,this.setTextureCube=j,this.rebindTextures=Fe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=K,this.useMultisampledRTT=we}function LC(t,e){function n(i,r=Qi){let s;const a=Je.getTransfer(r);if(i===Oi)return t.UNSIGNED_BYTE;if(i===zd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===l_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===a_)return t.BYTE;if(i===o_)return t.SHORT;if(i===yo)return t.UNSIGNED_SHORT;if(i===Bd)return t.INT;if(i===ns)return t.UNSIGNED_INT;if(i===bi)return t.FLOAT;if(i===Io)return t.HALF_FLOAT;if(i===u_)return t.ALPHA;if(i===c_)return t.RGB;if(i===Zn)return t.RGBA;if(i===f_)return t.LUMINANCE;if(i===h_)return t.LUMINANCE_ALPHA;if(i===qs)return t.DEPTH_COMPONENT;if(i===ha)return t.DEPTH_STENCIL;if(i===d_)return t.RED;if(i===Vd)return t.RED_INTEGER;if(i===p_)return t.RG;if(i===Gd)return t.RG_INTEGER;if(i===Wd)return t.RGBA_INTEGER;if(i===zl||i===Hl||i===Vl||i===Gl)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fh||i===hh||i===dh||i===ph)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ph)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mh||i===gh||i===vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mh||i===gh)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_h||i===yh||i===xh||i===Sh||i===Mh||i===Eh||i===wh||i===Th||i===Ah||i===Ch||i===Rh||i===Ph||i===bh||i===Lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_h)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Eh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Th)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ah)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ch)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ph)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lh)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wl||i===Ih||i===Nh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wl)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===m_||i===Dh||i===Uh||i===Fh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Dh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class IC extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ha extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NC={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),f=this._getHandJoint(u,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&d>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(NC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ha;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const DC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new mn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yr({vertexShader:DC,fragmentShader:UC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kt(new Uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OC extends _a{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,h=null,d=null,m=null,_=null;const y=new FC,p=n.getContextAttributes();let f=null,g=null;const v=[],x=[],C=new Xe;let T=null;const A=new Un;A.layers.enable(1),A.viewport=new bt;const b=new Un;b.layers.enable(2),b.viewport=new bt;const w=[A,b],S=new IC;S.layers.enable(1),S.layers.enable(2);let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=v[$];return K===void 0&&(K=new tf,v[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=v[$];return K===void 0&&(K=new tf,v[$]=K),K.getGripSpace()},this.getHand=function($){let K=v[$];return K===void 0&&(K=new tf,v[$]=K),K.getHandSpace()};function k($){const K=x.indexOf($.inputSource);if(K===-1)return;const fe=v[K];fe!==void 0&&(fe.update($.inputSource,$.frame,u||a),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",D);for(let $=0;$<v.length;$++){const K=x[$];K!==null&&(x[$]=null,v[$].disconnect(K))}R=null,H=null,y.reset(),e.setRenderTarget(f),m=null,d=null,h=null,r=null,g=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",U),r.addEventListener("inputsourceschange",D),p.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const K={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new is(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,fe=null,le=null;p.depth&&(le=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=p.stencil?ha:qs,fe=p.stencil?fa:ns);const Ie={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new is(d.textureWidth,d.textureHeight,{format:Zn,type:Oi,depthTexture:new L_(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function D($){for(let K=0;K<$.removed.length;K++){const fe=$.removed[K],le=x.indexOf(fe);le>=0&&(x[le]=null,v[le].disconnect(fe))}for(let K=0;K<$.added.length;K++){const fe=$.added[K];let le=x.indexOf(fe);if(le===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=x.length){x.push(fe),le=Fe;break}else if(x[Fe]===null){x[Fe]=fe,le=Fe;break}if(le===-1)break}const Ie=v[le];Ie&&Ie.connect(fe)}}const N=new z,j=new z;function I($,K,fe){N.setFromMatrixPosition(K.matrixWorld),j.setFromMatrixPosition(fe.matrixWorld);const le=N.distanceTo(j),Ie=K.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,Ue=Ie[14]/(Ie[10]-1),st=Ie[14]/(Ie[10]+1),L=(Ie[9]+1)/Ie[5],Mt=(Ie[9]-1)/Ie[5],et=(Ie[8]-1)/Ie[0],it=(Fe[8]+1)/Fe[0],we=Ue*et,Et=Ue*it,Ne=le/(-et+it),Oe=Ne*-et;K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Oe),$.translateZ(Ne),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const P=Ue+Ne,M=st+Ne,X=we-Oe,ne=Et+(le-Oe),re=L*st/M*P,te=Mt*st/M*P;$.projectionMatrix.makePerspective(X,ne,re,te,P,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function W($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;y.texture!==null&&($.near=y.depthNear,$.far=y.depthFar),S.near=b.near=A.near=$.near,S.far=b.far=A.far=$.far,(R!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,H=S.far,A.near=R,A.far=H,b.near=R,b.far=H,A.updateProjectionMatrix(),b.updateProjectionMatrix(),$.updateProjectionMatrix());const K=$.parent,fe=S.cameras;W(S,K);for(let le=0;le<fe.length;le++)W(fe[le],K);fe.length===2?I(S,A,b):S.projectionMatrix.copy(A.projectionMatrix),Y($,S,K)};function Y($,K,fe){fe===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Oh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Q=null;function de($,K){if(c=K.getViewerPose(u||a),_=K,c!==null){const fe=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let le=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Fe=0;Fe<fe.length;Fe++){const Ue=fe[Fe];let st=null;if(m!==null)st=m.getViewport(Ue);else{const Mt=h.getViewSubImage(d,Ue);st=Mt.viewport,Fe===0&&(e.setRenderTargetTextures(g,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(g))}let L=w[Fe];L===void 0&&(L=new Un,L.layers.enable(Fe),L.viewport=new bt,w[Fe]=L),L.matrix.fromArray(Ue.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ue.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(st.x,st.y,st.width,st.height),Fe===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(L)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Fe=h.getDepthInformation(fe[0]);Fe&&Fe.isValid&&Fe.texture&&y.init(e,Fe,r.renderState)}}for(let fe=0;fe<v.length;fe++){const le=x[fe],Ie=v[fe];le!==null&&Ie!==void 0&&Ie.update(le,K,u||a)}Q&&Q($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Te=new P_;Te.setAnimationLoop(de),this.setAnimationLoop=function($){Q=$},this.dispose=function(){}}}const Lr=new gi,kC=new xt;function BC(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,A_(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,g,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),c(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,x)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),y(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,g,v):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===pn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===pn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=e.get(f),v=g.envMap,x=g.envMapRotation;v&&(p.envMap.value=v,Lr.copy(x),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),p.envMapRotation.value.setFromMatrix4(kC.makeRotationFromEuler(Lr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,g,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=v*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const g=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const x=v.program;i.uniformBlockBinding(g,x)}function u(g,v){let x=r[g.id];x===void 0&&(_(g),x=c(g),r[g.id]=x,g.addEventListener("dispose",p));const C=v.program;i.updateUBOMapping(g,C);const T=e.render.frame;s[g.id]!==T&&(d(g),s[g.id]=T)}function c(g){const v=h();g.__bindingPointIndex=v;const x=t.createBuffer(),C=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function h(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],x=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=x.length;T<A;T++){const b=Array.isArray(x[T])?x[T]:[x[T]];for(let w=0,S=b.length;w<S;w++){const R=b[w];if(m(R,T,w,C)===!0){const H=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let D=0;D<k.length;D++){const N=k[D],j=y(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,H+U,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,U),U+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,x,C){const T=g.value,A=v+"_"+x;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const b=C[A];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return C[A]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function _(g){const v=g.uniforms;let x=0;const C=16;for(let A=0,b=v.length;A<b;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,R=w.length;S<R;S++){const H=w[S],k=Array.isArray(H.value)?H.value:[H.value];for(let U=0,D=k.length;U<D;U++){const N=k[U],j=y(N),I=x%C,W=I%j.boundary,Y=I+W;x+=W,Y!==0&&C-Y<j.storage&&(x+=C-Y),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=j.storage}}}const T=x%C;return T>0&&(x+=C-T),g.__size=x,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:u,dispose:f}}class HC{constructor(e={}){const{canvas:n=LE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=mr,this.toneMappingExposure=1;const v=this;let x=!1,C=0,T=0,A=null,b=-1,w=null;const S=new bt,R=new bt;let H=null;const k=new Ve(0);let U=0,D=n.width,N=n.height,j=1,I=null,W=null;const Y=new bt(0,0,D,N),Q=new bt(0,0,D,N);let de=!1;const Te=new jd;let $=!1,K=!1;const fe=new xt,le=new z,Ie=new bt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function st(){return A===null?j:1}let L=i;function Mt(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kd}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",J,!1),n.addEventListener("webglcontextcreationerror",ue,!1),L===null){const O="webgl2";if(L=Mt(O,E),L===null)throw Mt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let et,it,we,Et,Ne,Oe,P,M,X,ne,re,te,Ae,pe,_e,ke,se,ve,We,Le,ye,De,He,dt;function F(){et=new $T(L),et.init(),De=new LC(L,et),it=new HT(L,et,e,De),we=new RC(L),Et=new KT(L),Ne=new pC,Oe=new bC(L,et,we,Ne,it,De,Et),P=new GT(v),M=new jT(v),X=new iw(L),He=new BT(L,X),ne=new YT(L,X,Et,He),re=new QT(L,ne,X,Et),We=new ZT(L,it,Oe),ke=new VT(Ne),te=new dC(v,P,M,et,it,He,ke),Ae=new BC(v,Ne),pe=new gC,_e=new MC(et),ve=new kT(v,P,M,we,re,d,l),se=new CC(v,re,it),dt=new zC(L,Et,it,we),Le=new zT(L,et,Et),ye=new qT(L,et,Et),Et.programs=te.programs,v.capabilities=it,v.extensions=et,v.properties=Ne,v.renderLists=pe,v.shadowMap=se,v.state=we,v.info=Et}F();const ae=new OC(v,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(D,N,!1))},this.getSize=function(E){return E.set(D,N)},this.setSize=function(E,O,V=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=E,N=O,n.width=Math.floor(E*j),n.height=Math.floor(O*j),V===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(D*j,N*j).floor()},this.setDrawingBufferSize=function(E,O,V){D=E,N=O,j=V,n.width=Math.floor(E*V),n.height=Math.floor(O*V),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,O,V,G){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,O,V,G),we.viewport(S.copy(Y).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,O,V,G){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,O,V,G),we.scissor(R.copy(Q).multiplyScalar(j).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){we.setScissorTest(de=E)},this.setOpaqueSort=function(E){I=E},this.setTransparentSort=function(E){W=E},this.getClearColor=function(E){return E.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(E=!0,O=!0,V=!0){let G=0;if(E){let B=!1;if(A!==null){const oe=A.texture.format;B=oe===Wd||oe===Gd||oe===Vd}if(B){const oe=A.texture.type,me=oe===Oi||oe===ns||oe===yo||oe===fa||oe===zd||oe===Hd,xe=ve.getClearColor(),Se=ve.getClearAlpha(),Pe=xe.r,be=xe.g,Ce=xe.b;me?(m[0]=Pe,m[1]=be,m[2]=Ce,m[3]=Se,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Pe,_[1]=be,_[2]=Ce,_[3]=Se,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}O&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",J,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),pe.dispose(),_e.dispose(),Ne.dispose(),P.dispose(),M.dispose(),re.dispose(),He.dispose(),dt.dispose(),te.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ti),ae.removeEventListener("sessionend",Qd),Tr.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=Et.autoReset,O=se.enabled,V=se.autoUpdate,G=se.needsUpdate,B=se.type;F(),Et.autoReset=E,se.enabled=O,se.autoUpdate=V,se.needsUpdate=G,se.type=B}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){const O=E.target;O.removeEventListener("dispose",Re),je(O)}function je(E){wt(E),Ne.remove(E)}function wt(E){const O=Ne.get(E).programs;O!==void 0&&(O.forEach(function(V){te.releaseProgram(V)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,V,G,B,oe){O===null&&(O=Fe);const me=B.isMesh&&B.matrixWorld.determinant()<0,xe=Y_(E,O,V,G,B);we.setMaterial(G,me);let Se=V.index,Pe=1;if(G.wireframe===!0){if(Se=ne.getWireframeAttribute(V),Se===void 0)return;Pe=2}const be=V.drawRange,Ce=V.attributes.position;let qe=be.start*Pe,vt=(be.start+be.count)*Pe;oe!==null&&(qe=Math.max(qe,oe.start*Pe),vt=Math.min(vt,(oe.start+oe.count)*Pe)),Se!==null?(qe=Math.max(qe,0),vt=Math.min(vt,Se.count)):Ce!=null&&(qe=Math.max(qe,0),vt=Math.min(vt,Ce.count));const _t=vt-qe;if(_t<0||_t===1/0)return;He.setup(B,G,xe,V,Se);let gn,Ke=Le;if(Se!==null&&(gn=X.get(Se),Ke=ye,Ke.setIndex(gn)),B.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*st()),Ke.setMode(L.LINES)):Ke.setMode(L.TRIANGLES);else if(B.isLine){let Me=G.linewidth;Me===void 0&&(Me=1),we.setLineWidth(Me*st()),B.isLineSegments?Ke.setMode(L.LINES):B.isLineLoop?Ke.setMode(L.LINE_LOOP):Ke.setMode(L.LINE_STRIP)}else B.isPoints?Ke.setMode(L.POINTS):B.isSprite&&Ke.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ke.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Ke.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Me=B._multiDrawStarts,Bt=B._multiDrawCounts,Ze=B._multiDrawCount,Hn=Se?X.get(Se).bytesPerElement:1,cs=Ne.get(G).currentProgram.getUniforms();for(let vn=0;vn<Ze;vn++)cs.setValue(L,"_gl_DrawID",vn),Ke.render(Me[vn]/Hn,Bt[vn])}else if(B.isInstancedMesh)Ke.renderInstances(qe,_t,B.count);else if(V.isInstancedBufferGeometry){const Me=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Bt=Math.min(V.instanceCount,Me);Ke.renderInstances(qe,_t,Bt)}else Ke.render(qe,_t)};function kt(E,O,V){E.transparent===!0&&E.side===Ci&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,Oo(E,O,V),E.side=_r,E.needsUpdate=!0,Oo(E,O,V),E.side=Ci):Oo(E,O,V)}this.compile=function(E,O,V=null){V===null&&(V=E),p=_e.get(V),p.init(O),g.push(p),V.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==V&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const G=new Set;return E.traverse(function(B){const oe=B.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const xe=oe[me];kt(xe,V,B),G.add(xe)}else kt(oe,V,B),G.add(oe)}),g.pop(),p=null,G},this.compileAsync=function(E,O,V=null){const G=this.compile(E,O,V);return new Promise(B=>{function oe(){if(G.forEach(function(me){Ne.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){B(E);return}setTimeout(oe,10)}et.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ye=null;function vi(E){Ye&&Ye(E)}function ti(){Tr.stop()}function Qd(){Tr.start()}const Tr=new P_;Tr.setAnimationLoop(vi),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(E){Ye=E,ae.setAnimationLoop(E),E===null?Tr.stop():Tr.start()},ae.addEventListener("sessionstart",ti),ae.addEventListener("sessionend",Qd),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,A),p=_e.get(E,g.length),p.init(O),g.push(p),fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Te.setFromProjectionMatrix(fe),K=this.localClippingEnabled,$=ke.init(this.clippingPlanes,K),y=pe.get(E,f.length),y.init(),f.push(y),ae.enabled===!0&&ae.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&Ku(oe,O,-1/0,v.sortObjects)}Ku(E,O,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(I,W),Ue=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ue&&ve.addToRenderList(y,E),this.info.render.frame++,$===!0&&ke.beginShadows();const V=p.state.shadowsArray;se.render(V,E,O),$===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,B=y.transmissive;if(p.setupLights(),O.isArrayCamera){const oe=O.cameras;if(B.length>0)for(let me=0,xe=oe.length;me<xe;me++){const Se=oe[me];ep(G,B,E,Se)}Ue&&ve.render(E);for(let me=0,xe=oe.length;me<xe;me++){const Se=oe[me];Jd(y,E,Se,Se.viewport)}}else B.length>0&&ep(G,B,E,O),Ue&&ve.render(E),Jd(y,E,O);A!==null&&(Oe.updateMultisampleRenderTarget(A),Oe.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,O),He.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?(p=g[g.length-1],$===!0&&ke.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Ku(E,O,V,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Te.intersectsSprite(E)){G&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(fe);const me=re.update(E),xe=E.material;xe.visible&&y.push(E,me,xe,V,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Te.intersectsObject(E))){const me=re.update(E),xe=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ie.copy(me.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(fe)),Array.isArray(xe)){const Se=me.groups;for(let Pe=0,be=Se.length;Pe<be;Pe++){const Ce=Se[Pe],qe=xe[Ce.materialIndex];qe&&qe.visible&&y.push(E,me,qe,V,Ie.z,Ce)}}else xe.visible&&y.push(E,me,xe,V,Ie.z,null)}}const oe=E.children;for(let me=0,xe=oe.length;me<xe;me++)Ku(oe[me],O,V,G)}function Jd(E,O,V,G){const B=E.opaque,oe=E.transmissive,me=E.transparent;p.setupLightsView(V),$===!0&&ke.setGlobalState(v.clippingPlanes,V),G&&we.viewport(S.copy(G)),B.length>0&&Fo(B,O,V),oe.length>0&&Fo(oe,O,V),me.length>0&&Fo(me,O,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ep(E,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new is(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Io:Oi,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const oe=p.state.transmissionRenderTarget[G.id],me=G.viewport||S;oe.setSize(me.z,me.w);const xe=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(k),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear(),Ue&&ve.render(V);const Se=v.toneMapping;v.toneMapping=mr;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),$===!0&&ke.setGlobalState(v.clippingPlanes,G),Fo(E,V,G),Oe.updateMultisampleRenderTarget(oe),Oe.updateRenderTargetMipmap(oe),et.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ce=0,qe=O.length;Ce<qe;Ce++){const vt=O[Ce],_t=vt.object,gn=vt.geometry,Ke=vt.material,Me=vt.group;if(Ke.side===Ci&&_t.layers.test(G.layers)){const Bt=Ke.side;Ke.side=pn,Ke.needsUpdate=!0,tp(_t,V,G,gn,Ke,Me),Ke.side=Bt,Ke.needsUpdate=!0,be=!0}}be===!0&&(Oe.updateMultisampleRenderTarget(oe),Oe.updateRenderTargetMipmap(oe))}v.setRenderTarget(xe),v.setClearColor(k,U),Pe!==void 0&&(G.viewport=Pe),v.toneMapping=Se}function Fo(E,O,V){const G=O.isScene===!0?O.overrideMaterial:null;for(let B=0,oe=E.length;B<oe;B++){const me=E[B],xe=me.object,Se=me.geometry,Pe=G===null?me.material:G,be=me.group;xe.layers.test(V.layers)&&tp(xe,O,V,Se,Pe,be)}}function tp(E,O,V,G,B,oe){E.onBeforeRender(v,O,V,G,B,oe),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.transparent===!0&&B.side===Ci&&B.forceSinglePass===!1?(B.side=pn,B.needsUpdate=!0,v.renderBufferDirect(V,O,G,B,E,oe),B.side=_r,B.needsUpdate=!0,v.renderBufferDirect(V,O,G,B,E,oe),B.side=Ci):v.renderBufferDirect(V,O,G,B,E,oe),E.onAfterRender(v,O,V,G,B,oe)}function Oo(E,O,V){O.isScene!==!0&&(O=Fe);const G=Ne.get(E),B=p.state.lights,oe=p.state.shadowsArray,me=B.state.version,xe=te.getParameters(E,B.state,oe,O,V),Se=te.getProgramCacheKey(xe);let Pe=G.programs;G.environment=E.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(E.isMeshStandardMaterial?M:P).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",Re),Pe=new Map,G.programs=Pe);let be=Pe.get(Se);if(be!==void 0){if(G.currentProgram===be&&G.lightsStateVersion===me)return ip(E,xe),be}else xe.uniforms=te.getUniforms(E),E.onBeforeCompile(xe,v),be=te.acquireProgram(xe,Se),Pe.set(Se,be),G.uniforms=xe.uniforms;const Ce=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=ke.uniform),ip(E,xe),G.needsLights=K_(E),G.lightsStateVersion=me,G.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=be,G.uniformsList=null,be}function np(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Xl.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function ip(E,O){const V=Ne.get(E);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Y_(E,O,V,G,B){O.isScene!==!0&&(O=Fe),Oe.resetTextureUnits();const oe=O.fog,me=G.isMeshStandardMaterial?O.environment:null,xe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:wr,Se=(G.isMeshStandardMaterial?M:P).get(G.envMap||me),Pe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,be=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!V.morphAttributes.position,qe=!!V.morphAttributes.normal,vt=!!V.morphAttributes.color;let _t=mr;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=v.toneMapping);const gn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ke=gn!==void 0?gn.length:0,Me=Ne.get(G),Bt=p.state.lights;if($===!0&&(K===!0||E!==w)){const bn=E===w&&G.id===b;ke.setState(G,E,bn)}let Ze=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Bt.state.version||Me.outputColorSpace!==xe||B.isBatchedMesh&&Me.batching===!1||!B.isBatchedMesh&&Me.batching===!0||B.isBatchedMesh&&Me.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Me.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Me.instancing===!1||!B.isInstancedMesh&&Me.instancing===!0||B.isSkinnedMesh&&Me.skinning===!1||!B.isSkinnedMesh&&Me.skinning===!0||B.isInstancedMesh&&Me.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Me.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Me.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Me.instancingMorph===!1&&B.morphTexture!==null||Me.envMap!==Se||G.fog===!0&&Me.fog!==oe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ke.numPlanes||Me.numIntersection!==ke.numIntersection)||Me.vertexAlphas!==Pe||Me.vertexTangents!==be||Me.morphTargets!==Ce||Me.morphNormals!==qe||Me.morphColors!==vt||Me.toneMapping!==_t||Me.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,Me.__version=G.version);let Hn=Me.currentProgram;Ze===!0&&(Hn=Oo(G,O,B));let cs=!1,vn=!1,Zu=!1;const Tt=Hn.getUniforms(),Bi=Me.uniforms;if(we.useProgram(Hn.program)&&(cs=!0,vn=!0,Zu=!0),G.id!==b&&(b=G.id,vn=!0),cs||w!==E){Tt.setValue(L,"projectionMatrix",E.projectionMatrix),Tt.setValue(L,"viewMatrix",E.matrixWorldInverse);const bn=Tt.map.cameraPosition;bn!==void 0&&bn.setValue(L,le.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,vn=!0,Zu=!0)}if(B.isSkinnedMesh){Tt.setOptional(L,B,"bindMatrix"),Tt.setOptional(L,B,"bindMatrixInverse");const bn=B.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Tt.setValue(L,"boneTexture",bn.boneTexture,Oe))}B.isBatchedMesh&&(Tt.setOptional(L,B,"batchingTexture"),Tt.setValue(L,"batchingTexture",B._matricesTexture,Oe),Tt.setOptional(L,B,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",B._indirectTexture,Oe),Tt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",B._colorsTexture,Oe));const Qu=V.morphAttributes;if((Qu.position!==void 0||Qu.normal!==void 0||Qu.color!==void 0)&&We.update(B,V,Hn),(vn||Me.receiveShadow!==B.receiveShadow)&&(Me.receiveShadow=B.receiveShadow,Tt.setValue(L,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Bi.envMap.value=Se,Bi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Bi.envMapIntensity.value=O.environmentIntensity),vn&&(Tt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Me.needsLights&&q_(Bi,Zu),oe&&G.fog===!0&&Ae.refreshFogUniforms(Bi,oe),Ae.refreshMaterialUniforms(Bi,G,j,N,p.state.transmissionRenderTarget[E.id]),Xl.upload(L,np(Me),Bi,Oe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Xl.upload(L,np(Me),Bi,Oe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(L,"center",B.center),Tt.setValue(L,"modelViewMatrix",B.modelViewMatrix),Tt.setValue(L,"normalMatrix",B.normalMatrix),Tt.setValue(L,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const bn=G.uniformsGroups;for(let Ju=0,Z_=bn.length;Ju<Z_;Ju++){const rp=bn[Ju];dt.update(rp,Hn),dt.bind(rp,Hn)}}return Hn}function q_(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function K_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,O,V){Ne.get(E.texture).__webglTexture=O,Ne.get(E.depthTexture).__webglTexture=V;const G=Ne.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const V=Ne.get(E);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,V=0){A=E,C=O,T=V;let G=!0,B=null,oe=!1,me=!1;if(E){const Se=Ne.get(E);Se.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(L.FRAMEBUFFER,null),G=!1):Se.__webglFramebuffer===void 0?Oe.setupRenderTarget(E):Se.__hasExternalTextures&&Oe.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(me=!0);const be=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[O])?B=be[O][V]:B=be[O],oe=!0):E.samples>0&&Oe.useMultisampledRTT(E)===!1?B=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?B=be[V]:B=be,S.copy(E.viewport),R.copy(E.scissor),H=E.scissorTest}else S.copy(Y).multiplyScalar(j).floor(),R.copy(Q).multiplyScalar(j).floor(),H=de;if(we.bindFramebuffer(L.FRAMEBUFFER,B)&&G&&we.drawBuffers(E,B),we.viewport(S),we.scissor(R),we.setScissorTest(H),oe){const Se=Ne.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,V)}else if(me){const Se=Ne.get(E.texture),Pe=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Pe)}b=-1},this.readRenderTargetPixels=function(E,O,V,G,B,oe,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){we.bindFramebuffer(L.FRAMEBUFFER,xe);try{const Se=E.texture,Pe=Se.format,be=Se.type;if(!it.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&V>=0&&V<=E.height-B&&L.readPixels(O,V,G,B,De.convert(Pe),De.convert(be),oe)}finally{const Se=A!==null?Ne.get(A).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(E,O,V,G,B,oe,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){we.bindFramebuffer(L.FRAMEBUFFER,xe);try{const Se=E.texture,Pe=Se.format,be=Se.type;if(!it.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-G&&V>=0&&V<=E.height-B){const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),L.readPixels(O,V,G,B,De.convert(Pe),De.convert(be),0),L.flush();const qe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await IE(L,qe,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe)}finally{L.deleteBuffer(Ce),L.deleteSync(qe)}return oe}}finally{const Se=A!==null?Ne.get(A).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(E,O=null,V=0){E.isTexture!==!0&&(Qa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-V),B=Math.floor(E.image.width*G),oe=Math.floor(E.image.height*G),me=O!==null?O.x:0,xe=O!==null?O.y:0;Oe.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,me,xe,B,oe),we.unbindTexture()},this.copyTextureToTexture=function(E,O,V=null,G=null,B=0){E.isTexture!==!0&&(Qa("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],O=arguments[2],B=arguments[3]||0,V=null);let oe,me,xe,Se,Pe,be;V!==null?(oe=V.max.x-V.min.x,me=V.max.y-V.min.y,xe=V.min.x,Se=V.min.y):(oe=E.image.width,me=E.image.height,xe=0,Se=0),G!==null?(Pe=G.x,be=G.y):(Pe=0,be=0);const Ce=De.convert(O.format),qe=De.convert(O.type);Oe.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const vt=L.getParameter(L.UNPACK_ROW_LENGTH),_t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ke=L.getParameter(L.UNPACK_SKIP_ROWS),Me=L.getParameter(L.UNPACK_SKIP_IMAGES),Bt=E.isCompressedTexture?E.mipmaps[B]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Se),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,Pe,be,oe,me,Ce,qe,Bt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,Pe,be,Bt.width,Bt.height,Ce,Bt.data):L.texSubImage2D(L.TEXTURE_2D,B,Pe,be,oe,me,Ce,qe,Bt),L.pixelStorei(L.UNPACK_ROW_LENGTH,vt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me),B===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(E,O,V=null,G=null,B=0){E.isTexture!==!0&&(Qa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],O=arguments[3],B=arguments[4]||0);let oe,me,xe,Se,Pe,be,Ce,qe,vt;const _t=E.isCompressedTexture?E.mipmaps[B]:E.image;V!==null?(oe=V.max.x-V.min.x,me=V.max.y-V.min.y,xe=V.max.z-V.min.z,Se=V.min.x,Pe=V.min.y,be=V.min.z):(oe=_t.width,me=_t.height,xe=_t.depth,Se=0,Pe=0,be=0),G!==null?(Ce=G.x,qe=G.y,vt=G.z):(Ce=0,qe=0,vt=0);const gn=De.convert(O.format),Ke=De.convert(O.type);let Me;if(O.isData3DTexture)Oe.setTexture3D(O,0),Me=L.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Oe.setTexture2DArray(O,0),Me=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Bt=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Hn=L.getParameter(L.UNPACK_SKIP_PIXELS),cs=L.getParameter(L.UNPACK_SKIP_ROWS),vn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Me,B,Ce,qe,vt,oe,me,xe,gn,Ke,_t.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,B,Ce,qe,vt,oe,me,xe,gn,_t.data):L.texSubImage3D(Me,B,Ce,qe,vt,oe,me,xe,gn,Ke,_t),L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Hn),L.pixelStorei(L.UNPACK_SKIP_ROWS,cs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vn),B===0&&O.generateMipmaps&&L.generateMipmap(Me),we.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&Oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Oe.setTextureCube(E,0):E.isData3DTexture?Oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Oe.setTexture2DArray(E,0):Oe.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,we.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Xd?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Xu?"display-p3":"srgb"}}class Yd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=n,this.far=i}clone(){return new Yd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class VC extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Yu extends ya{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wu=new z,Tu=new z,Sg=new xt,Ua=new S_,El=new ju,nf=new z,Mg=new z;class F_ extends Gt{constructor(e=new Pn,n=new Yu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)wu.fromBufferAttribute(n,r-1),Tu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=wu.distanceTo(Tu);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),El.radius+=s,e.ray.intersectsSphere(El)===!1)return;Sg.copy(r).invert(),Ua.copy(e.ray).applyMatrix4(Sg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const m=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let y=m,p=_-1;y<p;y+=u){const f=c.getX(y),g=c.getX(y+1),v=wl(this,e,Ua,l,f,g);v&&n.push(v)}if(this.isLineLoop){const y=c.getX(_-1),p=c.getX(m),f=wl(this,e,Ua,l,y,p);f&&n.push(f)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=m,p=_-1;y<p;y+=u){const f=wl(this,e,Ua,l,y,y+1);f&&n.push(f)}if(this.isLineLoop){const y=wl(this,e,Ua,l,_-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wl(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(wu.fromBufferAttribute(a,r),Tu.fromBufferAttribute(a,s),n.distanceSqToSegment(wu,Tu,nf,Mg)>i)return;nf.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(nf);if(!(l<e.near||l>e.far))return{distance:l,point:Mg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Eg=new z,wg=new z;class O_ extends F_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Eg.fromBufferAttribute(n,r),wg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Eg.distanceTo(wg);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qu extends Pn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],d=[],m=[];let _=0;const y=[],p=i/2;let f=0;g(),a===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(m,2));function g(){const x=new z,C=new z;let T=0;const A=(n-e)/i;for(let b=0;b<=s;b++){const w=[],S=b/s,R=S*(n-e)+e;for(let H=0;H<=r;H++){const k=H/r,U=k*l+o,D=Math.sin(U),N=Math.cos(U);C.x=R*D,C.y=-S*i+p,C.z=R*N,h.push(C.x,C.y,C.z),x.set(D,A,N).normalize(),d.push(x.x,x.y,x.z),m.push(k,1-S),w.push(_++)}y.push(w)}for(let b=0;b<r;b++)for(let w=0;w<s;w++){const S=y[w][b],R=y[w+1][b],H=y[w+1][b+1],k=y[w][b+1];c.push(S,R,k),c.push(R,H,k),T+=6}u.addGroup(f,T,0),f+=T}function v(x){const C=_,T=new Xe,A=new z;let b=0;const w=x===!0?e:n,S=x===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,p*S,0),d.push(0,S,0),m.push(.5,.5),_++;const R=_;for(let H=0;H<=r;H++){const U=H/r*l+o,D=Math.cos(U),N=Math.sin(U);A.x=w*N,A.y=p*S,A.z=w*D,h.push(A.x,A.y,A.z),d.push(0,S,0),T.x=D*.5+.5,T.y=N*.5*S+.5,m.push(T.x,T.y),_++}for(let H=0;H<r;H++){const k=C+H,U=R+H;x===!0?c.push(U,U+1,k):c.push(U+1,U,k),b+=3}u.addGroup(f,b,x===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qd extends qu{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new qd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kd extends Pn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const c=[],h=new z,d=new z,m=[],_=[],y=[],p=[];for(let f=0;f<=i;f++){const g=[],v=f/i;let x=0;f===0&&a===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let C=0;C<=n;C++){const T=C/n;h.x=-e*Math.cos(r+T*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+v*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),p.push(T+x,1-v),g.push(u++)}c.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const v=c[f][g+1],x=c[f][g],C=c[f+1][g],T=c[f+1][g+1];(f!==0||a>0)&&m.push(v,x,T),(f!==i-1||l<Math.PI)&&m.push(x,C,T)}this.setIndex(m),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tl extends ya{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=g_,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class k_ extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const rf=new xt,Tg=new z,Ag=new z;class GC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jd,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Tg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tg),Ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ag),n.updateMatrixWorld(),rf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class WC extends GC{constructor(){super(new b_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XC extends k_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new WC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jC extends k_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class $C extends O_{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=n/2,a=e/n,o=e/2,l=[],u=[];for(let d=0,m=0,_=-o;d<=n;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const y=d===s?i:r;y.toArray(u,m),m+=3,y.toArray(u,m),m+=3,y.toArray(u,m),m+=3,y.toArray(u,m),m+=3}const c=new Pn;c.setAttribute("position",new It(l,3)),c.setAttribute("color",new It(u,3));const h=new Yu({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class YC extends O_{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Pn;r.setAttribute("position",new It(n,3)),r.setAttribute("color",new It(i,3));const s=new Yu({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Ve,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);class qC{constructor(e){Ee(this,"scene");Ee(this,"camera");Ee(this,"renderer");Ee(this,"vehicle");Ee(this,"trajectory",null);Ee(this,"ground");Ee(this,"grid");Ee(this,"axesHelper");Ee(this,"cameraOffset",new z(0,10,-25));Ee(this,"cameraLookAhead",new z(0,2,30));Ee(this,"followVehicle",!0);Ee(this,"cameraLerpFactor",.1);Ee(this,"tempPosition",new z);Ee(this,"tempQuaternion",new rs);Ee(this,"tempCameraPos",new z);Ee(this,"tempLookAt",new z);Ee(this,"baseRotation",new rs().setFromAxisAngle(new z(0,1,0),Math.PI/2));Ee(this,"handleResize",()=>{const e=this.renderer.domElement.parentElement;if(!e)return;const n=e.clientWidth,i=e.clientHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i)});this.scene=new VC,this.scene.background=new Ve(1710638),this.scene.fog=new Yd(1710638,100,500),this.camera=new Un(60,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(0,50,80),this.camera.lookAt(0,0,0),this.renderer=new HC({antialias:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=i_,e.appendChild(this.renderer.domElement);const n=new jC(16777215,.5);this.scene.add(n);const i=new XC(16777215,1);i.position.set(50,100,50),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=500,i.shadow.camera.left=-100,i.shadow.camera.right=100,i.shadow.camera.top=100,i.shadow.camera.bottom=-100,this.scene.add(i);const r=new Uo(1e3,1e3),s=new Tl({color:2763338,roughness:.8,metalness:.2});this.ground=new Kt(r,s),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.grid=new $C(200,40,4868714,3816026),this.grid.position.y=.1,this.scene.add(this.grid),this.axesHelper=new YC(10),this.scene.add(this.axesHelper),this.vehicle=this.createVehicle(),this.scene.add(this.vehicle),window.addEventListener("resize",this.handleResize)}createVehicle(){const e=new Ha,n=new ss(4,1.5,8),i=new Tl({color:5089023,metalness:.6,roughness:.4}),r=new Kt(n,i);r.position.y=1,r.castShadow=!0,e.add(r);const s=new ss(3,1.2,4),a=new Tl({color:2972295,metalness:.8,roughness:.2}),o=new Kt(s,a);o.position.set(0,2,-.5),o.castShadow=!0,e.add(o);const l=new qu(.5,.5,.4,16),u=new Tl({color:3355443,roughness:.9});[{x:2,y:.5,z:2.5},{x:-2,y:.5,z:2.5},{x:2,y:.5,z:-2.5},{x:-2,y:.5,z:-2.5}].forEach(f=>{const g=new Kt(l,u);g.rotation.z=Math.PI/2,g.position.set(f.x,f.y,f.z),g.castShadow=!0,e.add(g)});const h=new Kd(.2,8,8),d=new Eu({color:16777164});[{x:1.2,y:1,z:4},{x:-1.2,y:1,z:4}].forEach(f=>{const g=new Kt(h,d);g.position.set(f.x,f.y,f.z),e.add(g)});const _=new qd(.5,1.5,4),y=new Eu({color:16739179}),p=new Kt(_,y);return p.rotation.x=Math.PI/2,p.position.set(0,3.5,2),e.add(p),e}setTrajectory(e){if(this.trajectory&&(this.scene.remove(this.trajectory),this.trajectory.geometry.dispose(),this.trajectory.material.dispose(),this.trajectory=null),e.length<2){console.log("Trajectory: Not enough points",e.length);return}const n=e.map(o=>new z(o.x,(o.z||0)+.5,-o.y)),i=n[0],r=n[n.length-1];console.log(`Trajectory: ${n.length} points`),console.log(`  First Three.js: (${i.x.toFixed(2)}, ${i.y.toFixed(2)}, ${i.z.toFixed(2)})`),console.log(`  Last Three.js: (${r.x.toFixed(2)}, ${r.y.toFixed(2)}, ${r.z.toFixed(2)})`);const s=new Pn().setFromPoints(n),a=new Yu({color:65535,linewidth:2});this.trajectory=new F_(s,a),this.scene.add(this.trajectory),console.log("Trajectory line added to scene with",n.length,"points")}updateVehicle(e){e&&(this.tempPosition.set(e.position.x,e.position.z||0,-e.position.y),this.vehicle.position.copy(this.tempPosition),this.tempQuaternion.set(e.rotation.x,e.rotation.z,-e.rotation.y,e.rotation.w),this.tempQuaternion.multiply(this.baseRotation),this.vehicle.quaternion.copy(this.tempQuaternion),this.followVehicle&&(this.tempCameraPos.copy(this.cameraOffset),this.tempCameraPos.applyQuaternion(this.tempQuaternion),this.tempCameraPos.add(this.tempPosition),this.tempLookAt.copy(this.cameraLookAhead),this.tempLookAt.applyQuaternion(this.tempQuaternion),this.tempLookAt.add(this.tempPosition),this.camera.position.lerp(this.tempCameraPos,this.cameraLerpFactor),this.camera.lookAt(this.tempLookAt)))}render(){this.renderer.render(this.scene,this.camera)}setFollowVehicle(e){this.followVehicle=e}resetCamera(){this.camera.position.set(0,50,80),this.camera.lookAt(0,0,0)}dispose(){window.removeEventListener("resize",this.handleResize),this.scene.traverse(e=>{e instanceof Kt&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())}),this.renderer.dispose(),this.renderer.domElement.remove()}}function KC({polynomial:t,numTables:e}){const n=new Uint32Array(256*e);for(let i=0;i<256;i++){let r=i;r=(r&1)*t^r>>>1,r=(r&1)*t^r>>>1,r=(r&1)*t^r>>>1,r=(r&1)*t^r>>>1,r=(r&1)*t^r>>>1,r=(r&1)*t^r>>>1,r=(r&1)*t^r>>>1,r=(r&1)*t^r>>>1,n[i]=r}for(let i=256;i<n.length;i++){const r=n[i-256];n[i]=n[r&255]^r>>>8}return n}const ii=KC({polynomial:3988292384,numTables:8});function B_(){return-1}function Bh(t,e){const n=e.byteLength,i=new DataView(e.buffer,e.byteOffset,n);let r=t,s=0;const a=-i.byteOffset&3;for(;s<a&&s<n;s++)r=ii[(r^i.getUint8(s))&255]^r>>>8;if(s===n)return r;s=a;let o=n-s;for(;o>=8;s+=8,o-=8){r^=i.getUint32(s,!0);const l=i.getUint32(s+4,!0);r=ii[0*256+(l>>>24&255)]^ii[1*256+(l>>>16&255)]^ii[2*256+(l>>>8&255)]^ii[3*256+(l>>>0&255)]^ii[4*256+(r>>>24&255)]^ii[5*256+(r>>>16&255)]^ii[6*256+(r>>>8&255)]^ii[7*256+(r>>>0&255)]}for(let l=s;l<n;l++)r=ii[(r^i.getUint8(l))&255]^r>>>8;return r}function z_(t){return(t^-1)>>>0}function H_(t){return z_(Bh(B_(),t))}var tt=function(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(c){try{u(i.next(c))}catch(h){a(h)}}function l(c){try{u(i.throw(c))}catch(h){a(h)}}function u(c){c.done?s(c.value):r(c.value).then(o,l)}u((i=i.apply(t,e||[])).next())})},Qe=function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=o(0),a.throw=o(1),a.return=o(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(u){return function(c){return l([u,c])}}function l(u){if(i)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(n=0)),n;)try{if(i=1,r&&(s=u[0]&2?r.return:u[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;switch(r=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,r=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],r=0}finally{i=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Sn=function(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],a;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return s},In=function(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))},Cg=function(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};(function(){function t(e){e===void 0&&(e=t.minComparator);var n=this;this.compare=e,this.heapArray=[],this._limit=0,this.offer=this.add,this.element=this.peek,this.poll=this.pop,this._invertedCompare=function(i,r){return n.compare(i,r).then(function(s){return-1*s})}}return t.getChildrenIndexOf=function(e){return[e*2+1,e*2+2]},t.getParentIndexOf=function(e){if(e<=0)return-1;var n=e%2?1:2;return Math.floor((e-n)/2)},t.getSiblingIndexOf=function(e){if(e<=0)return-1;var n=e%2?1:-1;return e+n},t.minComparator=function(e,n){return tt(this,void 0,void 0,function(){return Qe(this,function(i){return e>n?[2,1]:e<n?[2,-1]:[2,0]})})},t.maxComparator=function(e,n){return tt(this,void 0,void 0,function(){return Qe(this,function(i){return n>e?[2,1]:n<e?[2,-1]:[2,0]})})},t.minComparatorNumber=function(e,n){return tt(this,void 0,void 0,function(){return Qe(this,function(i){return[2,e-n]})})},t.maxComparatorNumber=function(e,n){return tt(this,void 0,void 0,function(){return Qe(this,function(i){return[2,n-e]})})},t.defaultIsEqual=function(e,n){return tt(this,void 0,void 0,function(){return Qe(this,function(i){return[2,e===n]})})},t.print=function(e){function n(c){var h=t.getParentIndexOf(c);return Math.floor(Math.log2(h+1))}function i(c,h){for(var d="";h>0;--h)d+=c;return d}for(var r=0,s=[],a=n(e.length-1)+2,o=0;r<e.length;){var l=n(r)+1;r===0&&(l=0);var u=String(e.get(r));u.length>o&&(o=u.length),s[l]=s[l]||[],s[l].push(u),r+=1}return s.map(function(c,h){var d=Math.pow(2,a-h)-1;return i(" ",Math.floor(d/2)*o)+c.map(function(m){var _=(o-m.length)/2;return i(" ",Math.ceil(_))+m+i(" ",Math.floor(_))}).join(i(" ",d*o))}).join(`
`)},t.heapify=function(e,n){return tt(this,void 0,void 0,function(){var i;return Qe(this,function(r){switch(r.label){case 0:return i=new t(n),i.heapArray=e,[4,i.init()];case 1:return r.sent(),[2,i]}})})},t.heappop=function(e,n){var i=new t(n);return i.heapArray=e,i.pop()},t.heappush=function(e,n,i){return tt(this,void 0,void 0,function(){var r;return Qe(this,function(s){switch(s.label){case 0:return r=new t(i),r.heapArray=e,[4,r.push(n)];case 1:return s.sent(),[2]}})})},t.heappushpop=function(e,n,i){var r=new t(i);return r.heapArray=e,r.pushpop(n)},t.heapreplace=function(e,n,i){var r=new t(i);return r.heapArray=e,r.replace(n)},t.heaptop=function(e,n,i){n===void 0&&(n=1);var r=new t(i);return r.heapArray=e,r.top(n)},t.heapbottom=function(e,n,i){n===void 0&&(n=1);var r=new t(i);return r.heapArray=e,r.bottom(n)},t.nlargest=function(e,n,i){return tt(this,void 0,void 0,function(){var r;return Qe(this,function(s){switch(s.label){case 0:return r=new t(i),r.heapArray=In([],Sn(n),!1),[4,r.init()];case 1:return s.sent(),[2,r.top(e)]}})})},t.nsmallest=function(e,n,i){return tt(this,void 0,void 0,function(){var r;return Qe(this,function(s){switch(s.label){case 0:return r=new t(i),r.heapArray=In([],Sn(n),!1),[4,r.init()];case 1:return s.sent(),[2,r.bottom(e)]}})})},t.prototype.add=function(e){return tt(this,void 0,void 0,function(){return Qe(this,function(n){switch(n.label){case 0:return[4,this._sortNodeUp(this.heapArray.push(e)-1)];case 1:return n.sent(),this._applyLimit(),[2,!0]}})})},t.prototype.addAll=function(e){return tt(this,void 0,void 0,function(){var n,i,r;return Qe(this,function(s){switch(s.label){case 0:n=this.length,(r=this.heapArray).push.apply(r,In([],Sn(e),!1)),i=this.length,s.label=1;case 1:return n<i?[4,this._sortNodeUp(n)]:[3,4];case 2:s.sent(),s.label=3;case 3:return++n,[3,1];case 4:return this._applyLimit(),[2,!0]}})})},t.prototype.bottom=function(){return tt(this,arguments,void 0,function(e){return e===void 0&&(e=1),Qe(this,function(n){return this.heapArray.length===0||e<=0?[2,[]]:this.heapArray.length===1?[2,[this.heapArray[0]]]:e>=this.heapArray.length?[2,In([],Sn(this.heapArray),!1)]:[2,this._bottomN_push(~~e)]})})},t.prototype.check=function(){return tt(this,void 0,void 0,function(){var e,n,i,r,s,a,o,l,u;return Qe(this,function(c){switch(c.label){case 0:e=0,c.label=1;case 1:if(!(e<this.heapArray.length))return[3,10];n=this.heapArray[e],i=this.getChildrenOf(e),c.label=2;case 2:c.trys.push([2,7,8,9]),r=(l=void 0,Cg(i)),s=r.next(),c.label=3;case 3:return s.done?[3,6]:(a=s.value,[4,this.compare(n,a)]);case 4:if(c.sent()>0)return[2,n];c.label=5;case 5:return s=r.next(),[3,3];case 6:return[3,9];case 7:return o=c.sent(),l={error:o},[3,9];case 8:try{s&&!s.done&&(u=r.return)&&u.call(r)}finally{if(l)throw l.error}return[7];case 9:return++e,[3,1];case 10:return[2]}})})},t.prototype.clear=function(){this.heapArray=[]},t.prototype.clone=function(){var e=new t(this.comparator());return e.heapArray=this.toArray(),e._limit=this._limit,e},t.prototype.comparator=function(){return this.compare},t.prototype.contains=function(e){return tt(this,arguments,void 0,function(n,i){var r,s,a,o,l,u;return i===void 0&&(i=t.defaultIsEqual),Qe(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,7]),r=Cg(this.heapArray),s=r.next(),c.label=1;case 1:return s.done?[3,4]:(a=s.value,[4,i(a,n)]);case 2:if(c.sent())return[2,!0];c.label=3;case 3:return s=r.next(),[3,1];case 4:return[3,7];case 5:return o=c.sent(),l={error:o},[3,7];case 6:try{s&&!s.done&&(u=r.return)&&u.call(r)}finally{if(l)throw l.error}return[7];case 7:return[2,!1]}})})},t.prototype.init=function(e){return tt(this,void 0,void 0,function(){var n;return Qe(this,function(i){switch(i.label){case 0:e&&(this.heapArray=In([],Sn(e),!1)),n=t.getParentIndexOf(this.length-1),i.label=1;case 1:return n>=0?[4,this._sortNodeDown(n)]:[3,4];case 2:i.sent(),i.label=3;case 3:return--n,[3,1];case 4:return this._applyLimit(),[2]}})})},t.prototype.isEmpty=function(){return this.length===0},t.prototype.leafs=function(){if(this.heapArray.length===0)return[];var e=t.getParentIndexOf(this.heapArray.length-1);return this.heapArray.slice(e+1)},Object.defineProperty(t.prototype,"length",{get:function(){return this.heapArray.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"limit",{get:function(){return this._limit},set:function(e){this._limit=~~e,this._applyLimit()},enumerable:!1,configurable:!0}),t.prototype.peek=function(){return this.heapArray[0]},t.prototype.pop=function(){return tt(this,void 0,void 0,function(){var e;return Qe(this,function(n){return e=this.heapArray.pop(),this.length>0&&e!==void 0?[2,this.replace(e)]:[2,e]})})},t.prototype.push=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return tt(this,void 0,void 0,function(){return Qe(this,function(i){return e.length<1?[2,!1]:e.length===1?[2,this.add(e[0])]:[2,this.addAll(e)]})})},t.prototype.pushpop=function(e){return tt(this,void 0,void 0,function(){var n;return Qe(this,function(i){switch(i.label){case 0:return[4,this.compare(this.heapArray[0],e)];case 1:return i.sent()<0?(n=Sn([this.heapArray[0],e],2),e=n[0],this.heapArray[0]=n[1],[4,this._sortNodeDown(0)]):[3,3];case 2:i.sent(),i.label=3;case 3:return[2,e]}})})},t.prototype.remove=function(e){return tt(this,arguments,void 0,function(n,i){var r,s,a,o=this;return i===void 0&&(i=t.defaultIsEqual),Qe(this,function(l){switch(l.label){case 0:return this.heapArray.length?n!==void 0?[3,2]:[4,this.pop()]:[2,!1];case 1:return l.sent(),[2,!0];case 2:r=[0],l.label=3;case 3:return r.length?(s=r.shift(),[4,i(this.heapArray[s],n)]):[3,13];case 4:return l.sent()?s!==0?[3,6]:[4,this.pop()]:[3,11];case 5:return l.sent(),[3,10];case 6:return s!==this.heapArray.length-1?[3,7]:(this.heapArray.pop(),[3,10]);case 7:return this.heapArray.splice(s,1,this.heapArray.pop()),[4,this._sortNodeUp(s)];case 8:return l.sent(),[4,this._sortNodeDown(s)];case 9:l.sent(),l.label=10;case 10:return[2,!0];case 11:a=t.getChildrenIndexOf(s).filter(function(u){return u<o.heapArray.length}),r.push.apply(r,In([],Sn(a),!1)),l.label=12;case 12:return[3,3];case 13:return[2,!1]}})})},t.prototype.replace=function(e){return tt(this,void 0,void 0,function(){var n;return Qe(this,function(i){switch(i.label){case 0:return n=this.heapArray[0],this.heapArray[0]=e,[4,this._sortNodeDown(0)];case 1:return i.sent(),[2,n]}})})},t.prototype.size=function(){return this.length},t.prototype.top=function(){return tt(this,arguments,void 0,function(e){return e===void 0&&(e=1),Qe(this,function(n){return this.heapArray.length===0||e<=0?[2,[]]:this.heapArray.length===1||e===1?[2,[this.heapArray[0]]]:e>=this.heapArray.length?[2,In([],Sn(this.heapArray),!1)]:[2,this._topN_push(~~e)]})})},t.prototype.toArray=function(){return In([],Sn(this.heapArray),!1)},t.prototype.toString=function(){return this.heapArray.toString()},t.prototype.get=function(e){return this.heapArray[e]},t.prototype.getChildrenOf=function(e){var n=this;return t.getChildrenIndexOf(e).map(function(i){return n.heapArray[i]}).filter(function(i){return i!==void 0})},t.prototype.getParentOf=function(e){var n=t.getParentIndexOf(e);return this.heapArray[n]},t.prototype[Symbol.iterator]=function(){return Qe(this,function(e){switch(e.label){case 0:return this.length?[4,this.pop()]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})},t.prototype.iterator=function(){return this},t.prototype._applyLimit=function(){if(this._limit&&this._limit<this.heapArray.length)for(var e=this.heapArray.length-this._limit;e;)this.heapArray.pop(),--e},t.prototype._bottomN_push=function(e){return tt(this,void 0,void 0,function(){var n,i,r,s,o,a,o;return Qe(this,function(l){switch(l.label){case 0:return n=new t(this.compare),n.limit=e,n.heapArray=this.heapArray.slice(-e),[4,n.init()];case 1:for(l.sent(),i=this.heapArray.length-1-e,r=t.getParentIndexOf(i),s=[],o=i;o>r;--o)s.push(o);a=this.heapArray,l.label=2;case 2:return s.length?(o=s.shift(),[4,this.compare(a[o],n.peek())]):[3,6];case 3:return l.sent()>0?[4,n.replace(a[o])]:[3,5];case 4:l.sent(),o%2&&s.push(t.getParentIndexOf(o)),l.label=5;case 5:return[3,2];case 6:return[2,n.toArray()]}})})},t.prototype._moveNode=function(e,n){var i=this.heapArray[e];this.heapArray[e]=this.heapArray[n],this.heapArray[n]=i},t.prototype._sortNodeDown=function(e){return tt(this,void 0,void 0,function(){var n,i,r,s,a,o,l;return Qe(this,function(u){switch(u.label){case 0:n=this.heapArray.length,i=e,r=this.heapArray[e],s=2*e+1,u.label=1;case 1:return s<n?(a=s+1,l=a>=n,l?[3,3]:[4,this.compare(this.heapArray[s],this.heapArray[a])]):[3,5];case 2:l=u.sent()<0,u.label=3;case 3:return o=l?s:a,[4,this.compare(this.heapArray[o],r)];case 4:if(u.sent()<0)this.heapArray[e]=this.heapArray[o],e=o,s=2*e+1;else return[3,5];return[3,1];case 5:return e!==i&&(this.heapArray[e]=r),[2]}})})},t.prototype._sortNodeUp=function(e){return tt(this,void 0,void 0,function(){var n,i,r;return Qe(this,function(s){switch(s.label){case 0:n=this.heapArray[e],i=e,s.label=1;case 1:return e>0?(r=t.getParentIndexOf(e),[4,this.compare(n,this.heapArray[r])]):[3,3];case 2:if(s.sent()<0)this.heapArray[e]=this.heapArray[r],e=r;else return[3,3];return[3,1];case 3:return e!==i&&(this.heapArray[e]=n),[2]}})})},t.prototype._topN_push=function(e){return tt(this,void 0,void 0,function(){var n,i,r,s;return Qe(this,function(a){switch(a.label){case 0:n=new t(this._invertedCompare),n.limit=e,i=[0],r=this.heapArray,a.label=1;case 1:return i.length?(s=i.shift(),s<r.length?n.length<e?[4,n.push(r[s])]:[3,3]:[3,6]):[3,7];case 2:return a.sent(),i.push.apply(i,In([],Sn(t.getChildrenIndexOf(s)),!1)),[3,6];case 3:return[4,this.compare(r[s],n.peek())];case 4:return a.sent()<0?[4,n.replace(r[s])]:[3,6];case 5:a.sent(),i.push.apply(i,In([],Sn(t.getChildrenIndexOf(s)),!1)),a.label=6;case 6:return[3,1];case 7:return[2,n.toArray()]}})})},t.prototype._topN_fill=function(e){return tt(this,void 0,void 0,function(){var n,i,r,s,a,a;return Qe(this,function(o){switch(o.label){case 0:return n=this.heapArray,i=new t(this._invertedCompare),i.limit=e,i.heapArray=n.slice(0,e),[4,i.init()];case 1:for(o.sent(),r=t.getParentIndexOf(e-1)+1,s=[],a=r;a<e;++a)s.push.apply(s,In([],Sn(t.getChildrenIndexOf(a).filter(function(l){return l<n.length})),!1));(e-1)%2&&s.push(e),o.label=2;case 2:return s.length?(a=s.shift(),a<n.length?[4,this.compare(n[a],i.peek())]:[3,5]):[3,6];case 3:return o.sent()<0?[4,i.replace(n[a])]:[3,5];case 4:o.sent(),s.push.apply(s,In([],Sn(t.getChildrenIndexOf(a)),!1)),o.label=5;case 5:return[3,2];case 6:return[2,i.toArray()]}})})},t.prototype._topN_heap=function(e){return tt(this,void 0,void 0,function(){var n,i,r,s,a;return Qe(this,function(o){switch(o.label){case 0:n=this.clone(),i=[],r=0,o.label=1;case 1:return r<e?(a=(s=i).push,[4,n.pop()]):[3,4];case 2:a.apply(s,[o.sent()]),o.label=3;case 3:return++r,[3,1];case 4:return[2,i]}})})},t.prototype._topIdxOf=function(e){return tt(this,void 0,void 0,function(){var n,i,r,s;return Qe(this,function(a){switch(a.label){case 0:if(!e.length)return[2,-1];n=0,i=e[n],r=1,a.label=1;case 1:return r<e.length?[4,this.compare(e[r],i)]:[3,4];case 2:s=a.sent(),s<0&&(n=r,i=e[r]),a.label=3;case 3:return++r,[3,1];case 4:return[2,n]}})})},t.prototype._topOf=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return tt(this,void 0,void 0,function(){var i;return Qe(this,function(r){switch(r.label){case 0:return i=new t(this.compare),[4,i.init(e)];case 1:return r.sent(),[2,i.peek()]}})})},t})();var ZC=function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=o(0),a.throw=o(1),a.return=o(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(u){return function(c){return l([u,c])}}function l(u){if(i)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(n=0)),n;)try{if(i=1,r&&(s=u[0]&2?r.return:u[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;switch(r=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,r=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],r=0}finally{i=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},qt=function(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],a;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return s},Jt=function(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))},QC=function(){function t(e){e===void 0&&(e=t.minComparator);var n=this;this.compare=e,this.heapArray=[],this._limit=0,this.offer=this.add,this.element=this.peek,this.poll=this.pop,this.removeAll=this.clear,this._invertedCompare=function(i,r){return-1*n.compare(i,r)}}return t.getChildrenIndexOf=function(e){return[e*2+1,e*2+2]},t.getParentIndexOf=function(e){return e<=0?-1:e-1>>1},t.getSiblingIndexOf=function(e){if(e<=0)return-1;var n=e%2?1:-1;return e+n},t.minComparator=function(e,n){return e>n?1:e<n?-1:0},t.maxComparator=function(e,n){return n>e?1:n<e?-1:0},t.minComparatorNumber=function(e,n){return e-n},t.maxComparatorNumber=function(e,n){return n-e},t.defaultIsEqual=function(e,n){return e===n},t.print=function(e){function n(c){var h=t.getParentIndexOf(c);return Math.floor(Math.log2(h+1))}function i(c,h){for(var d="";h>0;--h)d+=c;return d}for(var r=0,s=[],a=n(e.length-1)+2,o=0;r<e.length;){var l=n(r)+1;r===0&&(l=0);var u=String(e.get(r));u.length>o&&(o=u.length),s[l]=s[l]||[],s[l].push(u),r+=1}return s.map(function(c,h){var d=Math.pow(2,a-h)-1;return i(" ",Math.floor(d/2)*o)+c.map(function(m){var _=(o-m.length)/2;return i(" ",Math.ceil(_))+m+i(" ",Math.floor(_))}).join(i(" ",d*o))}).join(`
`)},t.heapify=function(e,n){var i=new t(n);return i.heapArray=e,i.init(),i},t.heappop=function(e,n){var i=new t(n);return i.heapArray=e,i.pop()},t.heappush=function(e,n,i){var r=new t(i);r.heapArray=e,r.push(n)},t.heappushpop=function(e,n,i){var r=new t(i);return r.heapArray=e,r.pushpop(n)},t.heapreplace=function(e,n,i){var r=new t(i);return r.heapArray=e,r.replace(n)},t.heaptop=function(e,n,i){n===void 0&&(n=1);var r=new t(i);return r.heapArray=e,r.top(n)},t.heapbottom=function(e,n,i){n===void 0&&(n=1);var r=new t(i);return r.heapArray=e,r.bottom(n)},t.nlargest=function(e,n,i){var r=new t(i);return r.heapArray=Jt([],qt(n),!1),r.init(),r.top(e)},t.nsmallest=function(e,n,i){var r=new t(i);return r.heapArray=Jt([],qt(n),!1),r.init(),r.bottom(e)},t.prototype.add=function(e){return this._sortNodeUp(this.heapArray.push(e)-1),this._applyLimit(),!0},t.prototype.addAll=function(e){var n,i=this.length;(n=this.heapArray).push.apply(n,Jt([],qt(e),!1));for(var r=this.length;i<r;++i)this._sortNodeUp(i);return this._applyLimit(),!0},t.prototype.bottom=function(e){return e===void 0&&(e=1),this.heapArray.length===0||e<=0?[]:this.heapArray.length===1?[this.heapArray[0]]:e>=this.heapArray.length?Jt([],qt(this.heapArray),!1):this._bottomN_push(~~e)},t.prototype.check=function(){var e=this;return this.heapArray.find(function(n,i){return!!e.getChildrenOf(i).find(function(r){return e.compare(n,r)>0})})},t.prototype.clear=function(){this.heapArray=[]},t.prototype.clone=function(){var e=new t(this.comparator());return e.heapArray=this.toArray(),e._limit=this._limit,e},t.prototype.comparator=function(){return this.compare},t.prototype.contains=function(e,n){return n===void 0&&(n=t.defaultIsEqual),this.indexOf(e,n)!==-1},t.prototype.init=function(e){e&&(this.heapArray=Jt([],qt(e),!1));for(var n=t.getParentIndexOf(this.length-1);n>=0;--n)this._sortNodeDown(n);this._applyLimit()},t.prototype.isEmpty=function(){return this.length===0},t.prototype.indexOf=function(e,n){if(n===void 0&&(n=t.defaultIsEqual),this.heapArray.length===0)return-1;for(var i=[],r=0;r<this.heapArray.length;){var s=this.heapArray[r];if(n(s,e))return r;this.compare(s,e)<=0&&i.push.apply(i,Jt([],qt(t.getChildrenIndexOf(r)),!1)),r=i.shift()||this.heapArray.length}return-1},t.prototype.indexOfEvery=function(e,n){if(n===void 0&&(n=t.defaultIsEqual),this.heapArray.length===0)return[];for(var i=[],r=[],s=0;s<this.heapArray.length;){var a=this.heapArray[s];n(a,e)?(r.push(s),i.push.apply(i,Jt([],qt(t.getChildrenIndexOf(s)),!1))):this.compare(a,e)<=0&&i.push.apply(i,Jt([],qt(t.getChildrenIndexOf(s)),!1)),s=i.shift()||this.heapArray.length}return r},t.prototype.leafs=function(){if(this.heapArray.length===0)return[];var e=t.getParentIndexOf(this.heapArray.length-1);return this.heapArray.slice(e+1)},Object.defineProperty(t.prototype,"length",{get:function(){return this.heapArray.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"limit",{get:function(){return this._limit},set:function(e){e<0||isNaN(e)?this._limit=0:this._limit=~~e,this._applyLimit()},enumerable:!1,configurable:!0}),t.prototype.setLimit=function(e){return this.limit=e,e<0||isNaN(e)?NaN:this._limit},t.prototype.peek=function(){return this.heapArray[0]},t.prototype.pop=function(){var e=this.heapArray.pop();return this.length>0&&e!==void 0?this.replace(e):e},t.prototype.push=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.length<1?!1:e.length===1?this.add(e[0]):this.addAll(e)},t.prototype.pushpop=function(e){var n;return this.compare(this.heapArray[0],e)<0&&(n=qt([this.heapArray[0],e],2),e=n[0],this.heapArray[0]=n[1],this._sortNodeDown(0)),e},t.prototype.remove=function(e,n){var i=this;if(n===void 0&&(n=t.defaultIsEqual),!this.heapArray.length)return!1;if(e===void 0)return this.pop(),!0;for(var r=[0];r.length;){var s=r.shift();if(n(this.heapArray[s],e))return s===0?this.pop():s===this.heapArray.length-1?this.heapArray.pop():(this.heapArray.splice(s,1,this.heapArray.pop()),this._sortNodeUp(s),this._sortNodeDown(s)),!0;if(this.compare(this.heapArray[s],e)<=0){var a=t.getChildrenIndexOf(s).filter(function(o){return o<i.heapArray.length});r.push.apply(r,Jt([],qt(a),!1))}}return!1},t.prototype.replace=function(e){var n=this.heapArray[0];return this.heapArray[0]=e,this._sortNodeDown(0),n},t.prototype.size=function(){return this.length},t.prototype.top=function(e){return e===void 0&&(e=1),this.heapArray.length===0||e<=0?[]:this.heapArray.length===1||e===1?[this.heapArray[0]]:e>=this.heapArray.length?Jt([],qt(this.heapArray),!1):this._topN_push(~~e)},t.prototype.toArray=function(){return Jt([],qt(this.heapArray),!1)},t.prototype.toString=function(){return this.heapArray.toString()},t.prototype.get=function(e){return this.heapArray[e]},t.prototype.getChildrenOf=function(e){var n=this;return t.getChildrenIndexOf(e).map(function(i){return n.heapArray[i]}).filter(function(i){return i!==void 0})},t.prototype.getParentOf=function(e){var n=t.getParentIndexOf(e);return this.heapArray[n]},t.prototype[Symbol.iterator]=function(){return ZC(this,function(e){switch(e.label){case 0:return this.length?[4,this.pop()]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})},t.prototype.iterator=function(){return this.toArray()},t.prototype._applyLimit=function(){if(this._limit>0&&this._limit<this.heapArray.length)for(var e=this.heapArray.length-this._limit;e;)this.heapArray.pop(),--e},t.prototype._bottomN_push=function(e){var n=new t(this.compare);n.limit=e,n.heapArray=this.heapArray.slice(-e),n.init();for(var i=this.heapArray.length-1-e,r=t.getParentIndexOf(i),s=[],a=i;a>r;--a)s.push(a);for(var o=this.heapArray;s.length;){var a=s.shift();this.compare(o[a],n.peek())>0&&(n.replace(o[a]),a%2&&s.push(t.getParentIndexOf(a)))}return n.toArray()},t.prototype._moveNode=function(e,n){var i=this.heapArray[e];this.heapArray[e]=this.heapArray[n],this.heapArray[n]=i},t.prototype._sortNodeDown=function(e){for(var n=this.heapArray.length,i=e,r=this.heapArray[e],s=2*e+1;s<n;){var a=s+1,o=a>=n||this.compare(this.heapArray[s],this.heapArray[a])<0?s:a;if(this.compare(this.heapArray[o],r)<0)this.heapArray[e]=this.heapArray[o],e=o,s=2*e+1;else break}e!==i&&(this.heapArray[e]=r)},t.prototype._sortNodeUp=function(e){for(var n=this.heapArray[e],i=e;e>0;){var r=t.getParentIndexOf(e);if(this.compare(n,this.heapArray[r])<0)this.heapArray[e]=this.heapArray[r],e=r;else break}e!==i&&(this.heapArray[e]=n)},t.prototype._topN_push=function(e){var n=new t(this._invertedCompare);n.limit=e;for(var i=[0],r=this.heapArray;i.length;){var s=i.shift();s<r.length&&(n.length<e?(n.push(r[s]),i.push.apply(i,Jt([],qt(t.getChildrenIndexOf(s)),!1))):this.compare(r[s],n.peek())<0&&(n.replace(r[s]),i.push.apply(i,Jt([],qt(t.getChildrenIndexOf(s)),!1))))}return n.toArray()},t.prototype._topN_fill=function(e){var n=this.heapArray,i=new t(this._invertedCompare);i.limit=e,i.heapArray=n.slice(0,e),i.init();for(var r=t.getParentIndexOf(e-1)+1,s=[],a=r;a<e;++a)s.push.apply(s,Jt([],qt(t.getChildrenIndexOf(a).filter(function(o){return o<n.length})),!1));for((e-1)%2&&s.push(e);s.length;){var a=s.shift();a<n.length&&this.compare(n[a],i.peek())<0&&(i.replace(n[a]),s.push.apply(s,Jt([],qt(t.getChildrenIndexOf(a)),!1)))}return i.toArray()},t.prototype._topN_heap=function(e){for(var n=this.clone(),i=[],r=0;r<e;++r)i.push(n.pop());return i},t.prototype._topIdxOf=function(e){if(!e.length)return-1;for(var n=0,i=e[n],r=1;r<e.length;++r){var s=this.compare(e[r],i);s<0&&(n=r,i=e[r])}return n},t.prototype._topOf=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var i=new t(this.compare);return i.init(e),i.peek()},t}(),Zs,xo,So,Mo,Qs;class JC{constructor(e,n){ct(this,Zs);ct(this,xo,new Map);ct(this,So);ct(this,Mo,0);ct(this,Qs);at(this,Zs,e),at(this,So,n)}async size(){return ce(this,Qs)==null&&at(this,Qs,await ce(this,Zs).size()),ce(this,Qs)}async read(e,n){const i=Number(n),r=ce(this,xo).get(e);if(r!=null&&r.byteLength>=i)return r.byteLength===i?r:r.subarray(0,i);const s=await ce(this,Zs).read(e,n);if(ce(this,Mo)+s.byteLength<=ce(this,So)){const a=new Uint8Array(s);return ce(this,xo).set(e,a),at(this,Mo,ce(this,Mo)+a.byteLength),a}return s}}Zs=new WeakMap,xo=new WeakMap,So=new WeakMap,Mo=new WeakMap,Qs=new WeakMap;const eR=typeof DataView.prototype.getBigUint64=="function"?DataView.prototype.getBigUint64:function(t,e){const n=e===!0?this.getUint32(t,e):this.getUint32(t+4,e),i=e===!0?this.getUint32(t+4,e):this.getUint32(t,e);return BigInt(i)<<32n|BigInt(n)},tR=new TextDecoder;var $n,Ji;class ri{constructor(e,n=0){ct(this,$n);ct(this,Ji);Ee(this,"offset");at(this,$n,e),at(this,Ji,new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),this.offset=n}reset(e,n=0){at(this,$n,e),at(this,Ji,new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),this.offset=n}bytesRemaining(){return ce(this,Ji).length-this.offset}uint8(){const e=ce(this,$n).getUint8(this.offset);return this.offset+=1,e}uint16(){const e=ce(this,$n).getUint16(this.offset,!0);return this.offset+=2,e}uint32(){const e=ce(this,$n).getUint32(this.offset,!0);return this.offset+=4,e}uint64(){const e=eR.call(ce(this,$n),this.offset,!0);return this.offset+=8,e}string(){const e=this.uint32();if(e===0)return"";if(e>this.bytesRemaining())throw new Error(`String length ${e} exceeds bounds of buffer`);return tR.decode(this.u8ArrayBorrow(e))}keyValuePairs(e,n){const i=this.uint32();if(this.offset+i>ce(this,$n).byteLength)throw new Error(`Key-value pairs length ${i} exceeds bounds of buffer`);const r=[],s=this.offset+i;try{for(;this.offset<s;)r.push([e(this),n(this)])}catch(a){throw new Error(`Error reading key-value pairs: ${a.message}`)}if(this.offset!==s)throw new Error(`Key-value pairs length (${this.offset-s+i}) greater than expected (${i})`);return r}map(e,n){const i=this.uint32();if(this.offset+i>ce(this,$n).byteLength)throw new Error(`Map length ${i} exceeds bounds of buffer`);const r=new Map,s=this.offset+i;try{for(;this.offset<s;){const a=e(this),o=n(this),l=r.get(a);if(l!=null)throw new Error(`Duplicate key ${String(a)} (${String(l)} vs ${String(o)})`);r.set(a,o)}}catch(a){throw new Error(`Error reading map: ${a.message}`)}if(this.offset!==s)throw new Error(`Map length (${this.offset-s+i}) greater than expected (${i})`);return r}u8ArrayBorrow(e){const n=ce(this,Ji).subarray(this.offset,this.offset+e);return this.offset+=e,n}u8ArrayCopy(e){const n=ce(this,Ji).slice(this.offset,this.offset+e);return this.offset+=e,n}}$n=new WeakMap,Ji=new WeakMap;const Mn=Object.freeze([137,77,67,65,80,48,13,10]);var zt;(function(t){t[t.MIN=1]="MIN",t[t.HEADER=1]="HEADER",t[t.FOOTER=2]="FOOTER",t[t.SCHEMA=3]="SCHEMA",t[t.CHANNEL=4]="CHANNEL",t[t.MESSAGE=5]="MESSAGE",t[t.CHUNK=6]="CHUNK",t[t.MESSAGE_INDEX=7]="MESSAGE_INDEX",t[t.CHUNK_INDEX=8]="CHUNK_INDEX",t[t.ATTACHMENT=9]="ATTACHMENT",t[t.ATTACHMENT_INDEX=10]="ATTACHMENT_INDEX",t[t.STATISTICS=11]="STATISTICS",t[t.METADATA=12]="METADATA",t[t.METADATA_INDEX=13]="METADATA_INDEX",t[t.SUMMARY_OFFSET=14]="SUMMARY_OFFSET",t[t.DATA_END=15]="DATA_END",t[t.MAX=15]="MAX"})(zt||(zt={}));function Rg(t){if(t.bytesRemaining()<Mn.length)return;const e=t.u8ArrayBorrow(Mn.length);if(!Mn.every((n,i)=>n===e[i]))throw new Error(`Expected MCAP magic '${Mn.map(n=>n.toString(16).padStart(2,"0")).join(" ")}', found '${Array.from(e,(n,i)=>e[i].toString(16).padStart(2,"0")).join(" ")}'`);return{specVersion:"0"}}function $i(t,e=!1){if(t.bytesRemaining()<9)return;const i=t.offset,r=t.uint8(),s=t.uint64();if(s>Number.MAX_SAFE_INTEGER)throw new Error(`Record content length ${s} is too large`);const a=Number(s);if(t.bytesRemaining()<a){t.offset=i;return}let o;switch(r){case zt.HEADER:o=iR(t,a);break;case zt.FOOTER:o=rR(t,a);break;case zt.SCHEMA:o=sR(t,a);break;case zt.CHANNEL:o=aR(t,a);break;case zt.MESSAGE:o=oR(t,a);break;case zt.CHUNK:o=lR(t,a);break;case zt.MESSAGE_INDEX:o=uR(t,a);break;case zt.CHUNK_INDEX:o=cR(t,a);break;case zt.ATTACHMENT:o=fR(t,a,e);break;case zt.ATTACHMENT_INDEX:o=hR(t,a);break;case zt.STATISTICS:o=dR(t,a);break;case zt.METADATA:o=pR(t,a);break;case zt.METADATA_INDEX:o=mR(t,a);break;case zt.SUMMARY_OFFSET:o=gR(t,a);break;case zt.DATA_END:o=vR(t,a);break;default:o=nR(t,a,r);break}return t.offset=i+9+a,o}function nR(t,e,n){const i=t.u8ArrayBorrow(e);return{type:"Unknown",opcode:n,data:i}}function iR(t,e){const n=t.offset,i=t.string(),r=t.string();return t.offset=n+e,{type:"Header",profile:i,library:r}}function rR(t,e){const n=t.offset,i=t.uint64(),r=t.uint64(),s=t.uint32();return t.offset=n+e,{type:"Footer",summaryStart:i,summaryOffsetStart:r,summaryCrc:s}}function sR(t,e){const n=t.offset,i=t.uint16(),r=t.string(),s=t.string(),a=t.uint32(),o=t.offset;if(e-(o-n)<a)throw new Error(`Schema data length ${a} exceeds bounds of record`);const l=t.u8ArrayCopy(a);return t.offset=n+e,{type:"Schema",id:i,encoding:s,name:r,data:l}}function aR(t,e){const n=t.offset,i=t.uint16(),r=t.uint16(),s=t.string(),a=t.string(),o=t.map(l=>l.string(),l=>l.string());return t.offset=n+e,{type:"Channel",id:i,schemaId:r,topic:s,messageEncoding:a,metadata:o}}function oR(t,e){const i=t.uint16(),r=t.uint32(),s=t.uint64(),a=t.uint64(),o=t.u8ArrayCopy(e-22);return{type:"Message",channelId:i,sequence:r,logTime:s,publishTime:a,data:o}}function lR(t,e){const n=t.offset,i=t.uint64(),r=t.uint64(),s=t.uint64(),a=t.uint32(),o=t.string(),l=Number(t.uint64()),c=t.offset-n;if(l+c>e)throw new Error("Chunk records length exceeds remaining record size");const h=t.u8ArrayCopy(l);return t.offset=n+e,{type:"Chunk",messageStartTime:i,messageEndTime:r,compression:o,uncompressedSize:s,uncompressedCrc:a,records:h}}function uR(t,e){const n=t.offset,i=t.uint16(),r=t.keyValuePairs(s=>s.uint64(),s=>s.uint64());return t.offset=n+e,{type:"MessageIndex",channelId:i,records:r}}function cR(t,e){const n=t.offset,i=t.uint64(),r=t.uint64(),s=t.uint64(),a=t.uint64(),o=t.map(d=>d.uint16(),d=>d.uint64()),l=t.uint64(),u=t.string(),c=t.uint64(),h=t.uint64();return t.offset=n+e,{type:"ChunkIndex",messageStartTime:i,messageEndTime:r,chunkStartOffset:s,chunkLength:a,messageIndexOffsets:o,messageIndexLength:l,compression:u,compressedSize:c,uncompressedSize:h}}function fR(t,e,n){const i=t.offset,r=t.uint64(),s=t.uint64(),a=t.string(),o=t.string(),l=t.uint64();if(BigInt(t.offset)+l>Number.MAX_SAFE_INTEGER)throw new Error(`Attachment too large: ${l}`);if(t.offset+Number(l)+4>i+e)throw new Error(`Attachment data length ${l} exceeds bounds of record`);const u=t.u8ArrayCopy(Number(l)),c=t.offset-i,h=t.uint32();if(n&&h!==0){t.offset=i;const d=t.u8ArrayBorrow(c),m=H_(d);if(t.offset=i+c+4,m!==h)throw new Error(`Attachment CRC32 mismatch: expected ${h}, actual ${m}`)}return t.offset=i+e,{type:"Attachment",logTime:r,createTime:s,name:a,mediaType:o,data:u}}function hR(t,e){const n=t.offset,i=t.uint64(),r=t.uint64(),s=t.uint64(),a=t.uint64(),o=t.uint64(),l=t.string(),u=t.string();return t.offset=n+e,{type:"AttachmentIndex",offset:i,length:r,logTime:s,createTime:a,dataSize:o,name:l,mediaType:u}}function dR(t,e){const n=t.offset,i=t.uint64(),r=t.uint16(),s=t.uint32(),a=t.uint32(),o=t.uint32(),l=t.uint32(),u=t.uint64(),c=t.uint64(),h=t.map(d=>d.uint16(),d=>d.uint64());return t.offset=n+e,{type:"Statistics",messageCount:i,schemaCount:r,channelCount:s,attachmentCount:a,metadataCount:o,chunkCount:l,messageStartTime:u,messageEndTime:c,channelMessageCounts:h}}function pR(t,e){const n=t.offset,i=t.string(),r=t.map(s=>s.string(),s=>s.string());return t.offset=n+e,{type:"Metadata",metadata:r,name:i}}function mR(t,e){const n=t.offset,i=t.uint64(),r=t.uint64(),s=t.string();return t.offset=n+e,{type:"MetadataIndex",offset:i,length:r,name:s}}function gR(t,e){const n=t.offset,i=t.uint8(),r=t.uint64(),s=t.uint64();return t.offset=n+e,{type:"SummaryOffset",groupOpcode:i,groupStart:r,groupLength:s}}function vR(t,e){const n=t.offset,i=t.uint32();return t.offset=n+e,{type:"DataEnd",dataSectionCrc:i}}function _R(t,e,n){let i=0,r=t.length;if(r===0)return 0;const s=n(e);for(;i<r;){const a=i+r>>>1;n(t[a][0])<s?i=a+1:r=a}return r}function yR(t,e,n){let i=0,r=t.length;if(r===0)return 0;const s=n(e);for(;i<r;){const a=i+r>>>1;n(t[a][0])<=s?i=a+1:r=a}return r}var er,Js,ea,Ai,Eo,ft,tr,wo,zh;class xR{constructor(e){ct(this,wo);Ee(this,"chunkIndex");ct(this,er);ct(this,Js);ct(this,ea);ct(this,Ai);ct(this,Eo);ct(this,ft);ct(this,tr,0);if(this.chunkIndex=e.chunkIndex,at(this,er,e.relevantChannels),at(this,Js,e.startTime),at(this,ea,e.endTime),at(this,Ai,e.reverse),at(this,Eo,e.readFullMessageIndexRange??!1),this.chunkIndex.messageIndexLength===0n&&(this.chunkIndex.messageStartTime!==0n||this.chunkIndex.messageEndTime!==0n))throw new Error("Encountered a chunk index without message indexes and non-zero start and end times")}compare(e){var i;if(ce(this,Ai)!==ce(e,Ai))throw new Error("Cannot compare a reversed ChunkCursor to a non-reversed ChunkCursor");let n=Number(_n(this,wo,zh).call(this)-_n(i=e,wo,zh).call(i));return n===0&&(n=Number(this.chunkIndex.chunkStartOffset-e.chunkIndex.chunkStartOffset)),ce(this,Ai)?-n:n}hasMoreMessages(){if(ce(this,ft)==null)throw new Error("loadMessageIndexes() must be called before hasMore()");return ce(this,tr)<ce(this,ft).length}popMessage(){if(ce(this,ft)==null)throw new Error("loadMessageIndexes() must be called before popMessage()");if(ce(this,tr)>=ce(this,ft).length)throw new Error(`Unexpected popMessage() call when no more messages are available, in chunk at offset ${this.chunkIndex.chunkStartOffset}`);return ce(this,ft)[ap(this,tr)._++]}hasMessageIndexes(){return ce(this,ft)!=null}async loadMessageIndexes(e){const n=ce(this,Ai);let i,r;const s=ce(this,Eo);for(const[v,x]of this.chunkIndex.messageIndexOffsets)(i==null||x<i)&&(i=x),(s||!ce(this,er)||ce(this,er).has(v))&&(r==null||x<r)&&(r=x);if(i==null||r==null){at(this,ft,[]);return}const a=i+this.chunkIndex.messageIndexLength,o=await e.read(r,a-r),l=new DataView(o.buffer,o.byteOffset,o.byteLength),u=new ri(l),c=[];let h;for(;h=$i(u,!0);)h.type==="MessageIndex"&&(h.records.length===0||ce(this,er)&&!ce(this,er).has(h.channelId)||c.push(h.records));if(u.bytesRemaining()!==0)throw new Error(`${u.bytesRemaining()} bytes remaining in message index section`);if(at(this,ft,c.flat().sort(([v,x],[C,T])=>{let A=Number(v-C);return A===0&&(A=Number(x-T)),A})),n&&ce(this,ft).reverse(),ce(this,ft).length===0)return;const[d]=ce(this,ft)[0];if(d<this.chunkIndex.messageStartTime)throw new Error(`Chunk at offset ${this.chunkIndex.chunkStartOffset} contains a message with logTime (${d}) earlier than chunk messageStartTime (${this.chunkIndex.messageStartTime})`);const[m]=ce(this,ft)[ce(this,ft).length-1];if(m>this.chunkIndex.messageEndTime)throw new Error(`Chunk at offset ${this.chunkIndex.chunkStartOffset} contains a message with logTime (${m}) later than chunk messageEndTime (${this.chunkIndex.messageEndTime})`);const _=n?ce(this,ea):ce(this,Js),y=n?ce(this,Js):ce(this,ea),p=n?v=>-v:v=>v;let f,g;_!=null&&(f=_R(ce(this,ft),_,p)),y!=null&&(g=yR(ce(this,ft),y,p)),(f!=null||g!=null)&&at(this,ft,ce(this,ft).slice(f,g))}}er=new WeakMap,Js=new WeakMap,ea=new WeakMap,Ai=new WeakMap,Eo=new WeakMap,ft=new WeakMap,tr=new WeakMap,wo=new WeakSet,zh=function(){return ce(this,ft)!=null&&ce(this,ft).length>0&&ce(this,tr)<ce(this,ft).length?ce(this,ft)[ce(this,tr)][0]:ce(this,Ai)?this.chunkIndex.messageEndTime:this.chunkIndex.messageStartTime};var li,ta,To,Xr,jr,$r,Yr,on,si,V_;const Zd=class Zd{constructor(e){ct(this,on);Ee(this,"chunkIndexes");Ee(this,"attachmentIndexes");Ee(this,"metadataIndexes",[]);Ee(this,"channelsById");Ee(this,"schemasById");Ee(this,"statistics");Ee(this,"summaryOffsetsByOpcode");Ee(this,"header");Ee(this,"footer");Ee(this,"dataEndOffset");Ee(this,"dataSectionCrc");ct(this,li);ct(this,ta);ct(this,To);ct(this,Xr);ct(this,jr);ct(this,$r);ct(this,Yr);at(this,li,e.readable),this.chunkIndexes=e.chunkIndexes,this.attachmentIndexes=e.attachmentIndexes,this.metadataIndexes=e.metadataIndexes,this.statistics=e.statistics,at(this,To,e.decompressHandlers),this.channelsById=e.channelsById,this.schemasById=e.schemasById,this.summaryOffsetsByOpcode=e.summaryOffsetsByOpcode,this.header=e.header,this.footer=e.footer,this.dataEndOffset=e.dataEndOffset,this.dataSectionCrc=e.dataSectionCrc;const n=e.messageIndexCacheSizeBytes??0;at(this,ta,n>0?new JC(ce(this,li),n):ce(this,li));for(const i of e.chunkIndexes)(ce(this,Xr)==null||i.messageStartTime<ce(this,Xr))&&at(this,Xr,i.messageStartTime),(ce(this,jr)==null||i.messageEndTime>ce(this,jr))&&at(this,jr,i.messageEndTime);for(const i of e.attachmentIndexes)(ce(this,$r)==null||i.logTime<ce(this,$r))&&at(this,$r,i.logTime),(ce(this,Yr)==null||i.logTime>ce(this,Yr))&&at(this,Yr,i.logTime)}static async Initialize({readable:e,decompressHandlers:n,messageIndexCacheSizeBytes:i}){const r=await e.size();let s,a;{const R=await e.read(0n,BigInt(Mn.length+1+8)),H=new DataView(R.buffer,R.byteOffset,R.byteLength);Rg(new ri(H));const k=H.getBigUint64(Mn.length+1,!0),U=1n+8n+k,D=await e.read(BigInt(Mn.length),U);a=BigInt(Mn.length)+U;const N=new ri(new DataView(D.buffer,D.byteOffset,D.byteLength)),j=$i(N,!0);if((j==null?void 0:j.type)!=="Header")throw new Error(`Unable to read header at beginning of file; found ${(j==null?void 0:j.type)??"nothing"}`);if(N.bytesRemaining()!==0)throw new Error(`${N.bytesRemaining()} bytes remaining after parsing header`);s=j}function o(R){return new Error(`${R} [library=${s.library}]`)}let l,u;{const R=BigInt(Mn.length+1+8+4+4),H=BigInt(29+Mn.length);if(r<R+H)throw o(`File size (${r}) is too small to be valid MCAP`);l=r-H;const k=await e.read(l,H);u=new DataView(k.buffer,k.byteOffset,k.byteLength)}try{Rg(new ri(u,u.byteLength-Mn.length))}catch(R){throw o(R.message)}let c;{const R=new ri(u),H=$i(R,!0);if((H==null?void 0:H.type)!=="Footer")throw o(`Unable to read footer from end of file (offset ${l}); found ${(H==null?void 0:H.type)??"nothing"}`);if(R.bytesRemaining()!==Mn.length)throw o(`${R.bytesRemaining()-Mn.length} bytes remaining after parsing footer`);c=H}if(c.summaryStart===0n)throw o("File is not indexed");const h=new Uint8Array(25);h.set(new Uint8Array(u.buffer,u.byteOffset,h.byteLength));const d=1n+8n+4n,m=c.summaryStart-d;if(m<a)throw o(`Expected DataEnd position (summary start ${c.summaryStart} - ${d} = ${m}) to be after Header end offset (${a})`);const _=await e.read(m,l-m);if(c.summaryCrc!==0){let R=B_();if(R=Bh(R,_.subarray(Number(d))),R=Bh(R,h),R=z_(R),R!==c.summaryCrc)throw o(`Incorrect summary CRC ${R} (expected ${c.summaryCrc})`)}const y=new DataView(_.buffer,_.byteOffset,_.byteLength),p=new ri(y),f=new Map,g=new Map,v=[],x=[],C=[],T=new Map;let A,b,w=!0,S;for(;S=$i(p,!0);){if(w&&S.type!=="DataEnd")throw o(`Expected DataEnd record to precede summary section, but found ${S.type}`);switch(w=!1,S.type){case"Schema":g.set(S.id,S);break;case"Channel":f.set(S.id,S);break;case"ChunkIndex":v.push(S);break;case"AttachmentIndex":x.push(S);break;case"MetadataIndex":C.push(S);break;case"Statistics":if(A)throw o("Duplicate Statistics record");A=S;break;case"SummaryOffset":T.set(S.groupOpcode,S);break;case"DataEnd":b=S.dataSectionCrc===0?void 0:S.dataSectionCrc;break;case"Header":case"Footer":case"Message":case"Chunk":case"MessageIndex":case"Attachment":case"Metadata":throw o(`${S.type} record not allowed in index section`)}}if(p.bytesRemaining()!==0)throw o(`${p.bytesRemaining()} bytes remaining in index section`);return new Zd({readable:e,chunkIndexes:v,attachmentIndexes:x,metadataIndexes:C,statistics:A,decompressHandlers:n,channelsById:f,schemasById:g,summaryOffsetsByOpcode:T,header:s,footer:c,dataEndOffset:m,dataSectionCrc:b,messageIndexCacheSizeBytes:i})}async*readMessages(e={}){const{topics:n,startTime:i=ce(this,Xr),endTime:r=ce(this,jr),reverse:s=!1,validateCrcs:a}=e;if(i==null||r==null)return;let o;if(n){o=new Set;for(const _ of this.channelsById.values())n.includes(_.topic)&&o.add(_.id)}const l=new QC((_,y)=>_.compare(y));let u=!0,c;const h=ce(this,ta)!==ce(this,li);for(const _ of this.chunkIndexes)_.messageStartTime<=r&&_.messageEndTime>=i&&(l.push(new xR({chunkIndex:_,relevantChannels:o,startTime:i,endTime:r,reverse:s,readFullMessageIndexRange:h})),u&&c!=null&&(u=_.messageStartTime>=c),c=_.messageEndTime);const d=new Map,m=new ri(new DataView(new ArrayBuffer(0)));for(let _;_=l.peek();){if(!_.hasMessageIndexes()){await _.loadMessageIndexes(ce(this,ta)),_.hasMoreMessages()?l.replace(_):l.pop();continue}let y=d.get(_.chunkIndex.chunkStartOffset);y||(y=await _n(this,on,V_).call(this,_.chunkIndex,{validateCrcs:a??!0}),d.set(_.chunkIndex.chunkStartOffset,y));const[p,f]=_.popMessage();if(f>=BigInt(y.byteLength))throw _n(this,on,si).call(this,`Message offset beyond chunk bounds (log time ${p}, offset ${f}, chunk data length ${y.byteLength}) in chunk at offset ${_.chunkIndex.chunkStartOffset}`);m.reset(y,Number(f));const g=$i(m,a??!0);if(!g)throw _n(this,on,si).call(this,`Unable to parse record at offset ${f} in chunk at offset ${_.chunkIndex.chunkStartOffset}`);if(g.type!=="Message")throw _n(this,on,si).call(this,`Unexpected record type ${g.type} in message index (time ${p}, offset ${f} in chunk at offset ${_.chunkIndex.chunkStartOffset})`);if(g.logTime!==p)throw _n(this,on,si).call(this,`Message log time ${g.logTime} did not match message index entry (${p} at offset ${f} in chunk at offset ${_.chunkIndex.chunkStartOffset})`);yield g,_.hasMoreMessages()?u||l.replace(_):(l.pop(),d.delete(_.chunkIndex.chunkStartOffset))}}async*readMetadata(e={}){const{name:n}=e;for(const i of this.metadataIndexes){if(n!=null&&i.name!==n)continue;const r=await ce(this,li).read(i.offset,i.length),s=new ri(new DataView(r.buffer,r.byteOffset,r.byteLength)),a=$i(s,!1);if((a==null?void 0:a.type)!=="Metadata")throw _n(this,on,si).call(this,`Metadata data at offset ${i.offset} does not point to metadata record (found ${String(a==null?void 0:a.type)})`);yield a}}async*readAttachments(e={}){const{name:n,mediaType:i,startTime:r=ce(this,$r),endTime:s=ce(this,Yr),validateCrcs:a}=e;if(!(r==null||s==null))for(const o of this.attachmentIndexes){if(n!=null&&o.name!==n||i!=null&&o.mediaType!==i||o.logTime>s||o.logTime<r)continue;const l=await ce(this,li).read(o.offset,o.length),u=new ri(new DataView(l.buffer,l.byteOffset,l.byteLength)),c=$i(u,a??!0);if((c==null?void 0:c.type)!=="Attachment")throw _n(this,on,si).call(this,`Attachment data at offset ${o.offset} does not point to attachment record (found ${String(c==null?void 0:c.type)})`);yield c}}};li=new WeakMap,ta=new WeakMap,To=new WeakMap,Xr=new WeakMap,jr=new WeakMap,$r=new WeakMap,Yr=new WeakMap,on=new WeakSet,si=function(e){return new Error(`${e} [library=${this.header.library}]`)},V_=async function(e,n){var l;const i=await ce(this,li).read(e.chunkStartOffset,e.chunkLength),r=new ri(new DataView(i.buffer,i.byteOffset,i.byteLength)),s=$i(r,(n==null?void 0:n.validateCrcs)??!0);if((s==null?void 0:s.type)!=="Chunk")throw _n(this,on,si).call(this,`Chunk start offset ${e.chunkStartOffset} does not point to chunk record (found ${String(s==null?void 0:s.type)})`);const a=s;let o=a.records;if(a.compression!==""&&o.byteLength>0){const u=(l=ce(this,To))==null?void 0:l[a.compression];if(!u)throw _n(this,on,si).call(this,`Unsupported compression ${a.compression}`);o=u(o,a.uncompressedSize)}if(a.uncompressedCrc!==0&&(n==null?void 0:n.validateCrcs)!==!1){const u=H_(o);if(u!==a.uncompressedCrc)throw _n(this,on,si).call(this,`Incorrect chunk CRC ${u} (expected ${a.uncompressedCrc})`)}return new DataView(o.buffer,o.byteOffset,o.byteLength)};let Hh=Zd;var G_={},W_={},us={};us.hashU32=function(e){return e=e|0,e=e+2127912214+(e<<12)|0,e=e^-949894596^e>>>19,e=e+374761393+(e<<5)|0,e=e+-744332180^e<<9,e=e+-42973499+(e<<3)|0,e^-1252372727^e>>>16|0};us.readU64=function(e,n){var i=0;return i|=e[n++]<<0,i|=e[n++]<<8,i|=e[n++]<<16,i|=e[n++]<<24,i|=e[n++]<<32,i|=e[n++]<<40,i|=e[n++]<<48,i|=e[n++]<<56,i};us.readU32=function(e,n){var i=0;return i|=e[n++]<<0,i|=e[n++]<<8,i|=e[n++]<<16,i|=e[n++]<<24,i};us.writeU32=function(e,n,i){e[n++]=i>>0&255,e[n++]=i>>8&255,e[n++]=i>>16&255,e[n++]=i>>24&255};us.imul=function(e,n){var i=e>>>16,r=e&65535,s=n>>>16,a=n&65535;return r*a+(i*a+r*s<<16)|0};var hi=us,Gr=2654435761,Wr=2246822519,X_=3266489917,SR=668265263,j_=374761393;function Al(t,e){return t=t|0,e=e|0,t>>>(32-e|0)|t<<e|0}function $_(t,e,n){return t=t|0,e=e|0,n=n|0,hi.imul(t>>>(32-e|0)|t<<e,n)|0}function sf(t,e){return t=t|0,e=e|0,t>>>e^t|0}function Va(t,e,n,i,r){return $_(hi.imul(e,n)+t,i,r)}function MR(t,e,n){return $_(t+hi.imul(e[n],j_),11,Gr)}function ER(t,e,n){return Va(t,hi.readU32(e,n),X_,17,SR)}function wR(t,e,n){return[Va(t[0],hi.readU32(e,n+0),Wr,13,Gr),Va(t[1],hi.readU32(e,n+4),Wr,13,Gr),Va(t[2],hi.readU32(e,n+8),Wr,13,Gr),Va(t[3],hi.readU32(e,n+12),Wr,13,Gr)]}function TR(t,e,n,i){var r,s;if(s=i,i>=16){for(r=[t+Gr+Wr,t+Wr,t,t-Gr];i>=16;)r=wR(r,e,n),n+=16,i-=16;r=Al(r[0],1)+Al(r[1],7)+Al(r[2],12)+Al(r[3],18)+s}else r=t+j_+i>>>0;for(;i>=4;)r=ER(r,e,n),n+=4,i-=4;for(;i>0;)r=MR(r,e,n),n++,i--;return r=sf(hi.imul(sf(hi.imul(sf(r,15),Wr),13),X_),16),r>>>0}W_.hash=TR;(function(t){var e=W_,n=us,i=4,r=13,s=5,a=6,o=65536,l=4,u=(1<<l)-1,c=4,h=(1<<c)-1,d=R(5<<20),m=w(),_=407708164,y=4,p=8,f=16,g=64,v=192,x=2147483648,C=7,T=4,A=7,b={4:65536,5:262144,6:1048576,7:4194304};function w(){try{return new Uint32Array(o)}catch{for(var k=new Array(o),U=0;U<o;U++)k[U]=0;return k}}function S(k){for(var U=0;U<o;U++)m[U]=0}function R(k){try{return new Uint8Array(k)}catch{for(var U=new Array(k),D=0;D<k;D++)U[D]=0;return U}}function H(k,U,D){if(typeof k.buffer!==void 0){if(Uint8Array.prototype.slice)return k.slice(U,D);var N=k.length;U=U|0,U=U<0?Math.max(N+U,0):Math.min(U,N),D=D===void 0?N:D|0,D=D<0?Math.max(N+D,0):Math.min(D,N);for(var j=new Uint8Array(D-U),I=U,W=0;I<D;)j[W++]=k[I++];return j}else return k.slice(U,D)}t.compressBound=function(U){return U+U/255+16|0},t.decompressBound=function(U){var D=0;if(n.readU32(U,D)!==_)throw new Error("invalid magic number");D+=4;var N=U[D++];if((N&v)!==g)throw new Error("incompatible descriptor version "+(N&v));var j=(N&f)!==0,I=(N&p)!==0,W=U[D++]>>T&A;if(b[W]===void 0)throw new Error("invalid block size "+W);var Y=b[W];if(I)return n.readU64(U,D);D++;for(var Q=0;;){var de=n.readU32(U,D);if(D+=4,de&x?(de&=~x,Q+=de):Q+=Y,de===0)return Q;j&&(D+=4),D+=de}},t.makeBuffer=R,t.decompressBlock=function(U,D,N,j,I){var W,Y,Q,de,Te;for(Q=N+j;N<Q;){var $=U[N++],K=$>>4;if(K>0){if(K===15)for(;K+=U[N],U[N++]===255;);for(de=N+K;N<de;)D[I++]=U[N++]}if(N>=Q)break;if(W=$&15,Y=U[N++]|U[N++]<<8,W===15)for(;W+=U[N],U[N++]===255;);for(W+=i,Te=I-Y,de=Te+W;Te<de;)D[I++]=D[Te++]|0}return I},t.compressBlock=function(U,D,N,j,I){var W,Y,Q,de,Te,$,K,fe,le;if(K=0,fe=j+N,Y=N,j>=r)for(var Ie=(1<<a)+3;N+i<fe-s;){var Fe=n.readU32(U,N),Ue=n.hashU32(Fe)>>>0;if(Ue=(Ue>>16^Ue)>>>0&65535,W=I[Ue]-1,I[Ue]=N+1,W<0||N-W>>>16>0||n.readU32(U,W)!==Fe){Te=Ie++>>a,N+=Te;continue}for(Ie=(1<<a)+3,$=N-Y,de=N-W,N+=i,W+=i,Q=N;N<fe-s&&U[N]===U[W];)N++,W++;Q=N-Q;var st=Q<u?Q:u;if($>=h){for(D[K++]=(h<<l)+st,le=$-h;le>=255;le-=255)D[K++]=255;D[K++]=le}else D[K++]=($<<l)+st;for(var L=0;L<$;L++)D[K++]=U[Y+L];if(D[K++]=de,D[K++]=de>>8,Q>=u){for(le=Q-u;le>=255;le-=255)D[K++]=255;D[K++]=le}Y=N}if(Y===0)return 0;if($=fe-Y,$>=h){for(D[K++]=h<<l,le=$-h;le>=255;le-=255)D[K++]=255;D[K++]=le}else D[K++]=$<<l;for(N=Y;N<fe;)D[K++]=U[N++];return K},t.decompressFrame=function(U,D){var N,j,I,W,Y=0,Q=0;if(n.readU32(U,Y)!==_)throw new Error("invalid magic number");if(Y+=4,W=U[Y++],(W&v)!==g)throw new Error("incompatible descriptor version");N=(W&f)!==0,j=(W&y)!==0,I=(W&p)!==0;var de=U[Y++]>>T&A;if(b[de]===void 0)throw new Error("invalid block size");for(I&&(Y+=8),Y++;;){var Te;if(Te=n.readU32(U,Y),Y+=4,Te===0)break;if(N&&(Y+=4),Te&x){Te&=~x;for(var $=0;$<Te;$++)D[Q++]=U[Y++]}else Q=t.decompressBlock(U,D,Y,Te,Q),Y+=Te}return j&&(Y+=4),Q},t.compressFrame=function(U,D){var N=0;n.writeU32(D,N,_),N+=4,D[N++]=g,D[N++]=C<<T,D[N]=e.hash(0,D,4,N-4)>>8,N++;var j=b[C],I=U.length,W=0;for(S();I>0;){var Y=0,Q=I>j?j:I;if(Y=t.compressBlock(U,d,W,Q,m),Y>Q||Y===0){n.writeU32(D,N,2147483648|Q),N+=4;for(var de=W+Q;W<de;)D[N++]=U[W++];I-=Q}else{n.writeU32(D,N,Y),N+=4;for(var Te=0;Te<Y;)D[N++]=d[Te++];W+=Q,I-=Q}}return n.writeU32(D,N,0),N+=4,N},t.decompress=function(U,D){var N,j;return D===void 0&&(D=t.decompressBound(U)),N=t.makeBuffer(D),j=t.decompressFrame(U,N),j!==D&&(N=H(N,0,j)),N},t.compress=function(U,D){var N,j;return D===void 0&&(D=t.compressBound(U.length)),N=t.makeBuffer(D),j=t.compressFrame(U,N),j!==D&&(N=H(N,0,j)),N}})(G_);const AR={lz4:(t,e)=>G_.decompress(t,Number(e))};class CR{constructor(e){Ee(this,"url");Ee(this,"fileSize",null);Ee(this,"abortController");Ee(this,"isAborted",!1);this.url=e,this.abortController=new AbortController}async size(){if(this.isAborted)throw new Error("Reader has been aborted");if(this.fileSize===null){const n=(await fetch(this.url,{method:"HEAD",signal:this.abortController.signal})).headers.get("content-length");this.fileSize=n?parseInt(n,10):0}return BigInt(this.fileSize)}async read(e,n){if(this.isAborted)throw new Error("Reader has been aborted");const i=Number(e),r=Number(e+n)-1,s=await fetch(this.url,{headers:{Range:`bytes=${i}-${r}`},signal:this.abortController.signal});if(!s.ok&&s.status!==206)throw new Error(`HTTP range request failed: ${s.status}`);const a=await s.arrayBuffer();return new Uint8Array(a)}abort(){this.isAborted=!0,this.abortController.abort()}}class RR{constructor(e=5){Ee(this,"ranges",[]);Ee(this,"maxRanges");this.maxRanges=e}findRange(e){return this.ranges.find(n=>e>=n.startTime&&e<=n.endTime)}addRange(e){const n=this.ranges.filter(i=>!(e.endTime<i.startTime||e.startTime>i.endTime));if(n.length>0){this.ranges=this.ranges.filter(a=>e.endTime<a.startTime||e.startTime>a.endTime);const i=[...e.states],r=[...e.telemetry];for(const a of n)i.push(...a.states),r.push(...a.telemetry);i.sort((a,o)=>a.timestamp-o.timestamp),r.sort((a,o)=>a.timestamp-o.timestamp);const s={startTime:Math.min(e.startTime,...n.map(a=>a.startTime)),endTime:Math.max(e.endTime,...n.map(a=>a.endTime)),states:this.dedupeByTimestamp(i),telemetry:this.dedupeByTimestamp(r)};this.ranges.push(s)}else this.ranges.length>=this.maxRanges&&this.ranges.shift(),this.ranges.push(e)}dedupeByTimestamp(e){const n=new Set;return e.filter(i=>n.has(i.timestamp)?!1:(n.add(i.timestamp),!0))}getAllStates(){const e=[];for(const n of this.ranges)e.push(...n.states);return e.sort((n,i)=>n.timestamp-i.timestamp),this.dedupeByTimestamp(e)}getAllTelemetry(){const e=[];for(const n of this.ranges)e.push(...n.telemetry);return e.sort((n,i)=>n.timestamp-i.timestamp),this.dedupeByTimestamp(e)}hasTimestamp(e){return this.findRange(e)!==void 0}clear(){this.ranges=[]}}class PR{constructor(e){Ee(this,"url");Ee(this,"httpReader",null);Ee(this,"reader",null);Ee(this,"index",null);Ee(this,"rangeCache",new RR(5));Ee(this,"schemasInfo",[]);Ee(this,"loadingRanges",new Map);Ee(this,"loggedSchemas",new Set);Ee(this,"chunkDuration",5);this.url=e}async loadIndex(){var l,u,c;(l=this.httpReader)==null||l.abort();const e=new CR(this.url);this.httpReader=e,this.reader=await Hh.Initialize({readable:e,decompressHandlers:AR});const n=[...this.reader.chunkIndexes],i=new Map(Array.from(this.reader.channelsById.entries()).map(([h,d])=>[h,{id:d.id,schemaId:d.schemaId,topic:d.topic,messageEncoding:d.messageEncoding,metadata:d.metadata}])),r=new Map(Array.from(this.reader.schemasById.entries()).map(([h,d])=>[h,{id:d.id,name:d.name,encoding:d.encoding,data:d.data}]));this.schemasInfo=Array.from(this.reader.schemasById.values()).map(h=>`${h.name} (encoding: ${h.encoding})`);let s=Number.MAX_SAFE_INTEGER,a=0,o=0;for(const h of n){const d=Number(h.messageStartTime)/1e9,m=Number(h.messageEndTime)/1e9;s=Math.min(s,d),a=Math.max(a,m)}for(const h of((c=(u=this.reader.statistics)==null?void 0:u.channelMessageCounts)==null?void 0:c.entries())??[])o+=Number(h[1]);if(s===Number.MAX_SAFE_INTEGER)throw new Error("MCAP file contains no messages");return this.index={startTime:s,endTime:a,duration:a-s,chunkIndexes:n,channels:i,schemas:r,messageCount:o},this.index}async loadTimeRange(e){if(!this.reader||!this.index)throw new Error("Index not loaded. Call loadIndex() first.");const n=this.index.startTime+e,i=Math.max(this.index.startTime,n-this.chunkDuration/2),r=Math.min(this.index.endTime,n+this.chunkDuration/2);if(this.rangeCache.hasTimestamp(e))return;const s=`${i.toFixed(2)}-${r.toFixed(2)}`,a=this.loadingRanges.get(s);if(a)return a;const o=this.doLoadRange(i,r);this.loadingRanges.set(s,o);try{await o}finally{this.loadingRanges.delete(s)}}async doLoadRange(e,n){if(!this.reader||!this.index)return;const i=BigInt(Math.floor(e*1e9)),r=BigInt(Math.floor(n*1e9)),s=this.index.startTime,a=[],o=[],l=[];let u=0;const c=new Set;for await(const m of this.reader.readMessages({startTime:i,endTime:r})){const y=Number(m.logTime)/1e9-s,p=this.reader.channelsById.get(m.channelId);if(!p)continue;const f=this.reader.schemasById.get(p.schemaId),g=(f==null?void 0:f.name)??"unknown",v=`${p.topic}:${g}`;if(!c.has(v)&&u<20){c.add(v),u++,console.log(`Topic: ${p.topic}, Schema: ${g}, Encoding: ${p.messageEncoding}`);try{const T=new TextDecoder().decode(m.data),A=JSON.parse(T);console.log("  Data sample:",JSON.stringify(A,null,2).slice(0,500))}catch{console.log(`  Data: [Binary, ${m.data.length} bytes]`)}}const x=this.parseVehicleState(m.data,y,p.topic,p.messageEncoding,g);x.state?(a.push(x.state),o.push({timestamp:x.state.timestamp,speed:x.state.speed,acceleration:x.state.acceleration,jerk:x.state.jerk,yawRate:x.state.yawRate})):x.error&&l.length<3&&l.push(x.error)}a.sort((m,_)=>m.timestamp-_.timestamp),o.sort((m,_)=>m.timestamp-_.timestamp);const h=e-s,d=n-s;this.rangeCache.addRange({startTime:h,endTime:d,states:a,telemetry:o}),console.log(`Loaded range ${h.toFixed(2)}-${d.toFixed(2)}s: ${a.length} vehicle states`),a.length===0&&console.warn(`No vehicle states parsed for range ${h.toFixed(2)}-${d.toFixed(2)}s.`,`Available schemas: ${this.schemasInfo.join(", ")}`,l.length>0?`Parse errors: ${l.join("; ")}`:"")}async prefetchRange(e,n){if(!this.index)return;const i=this.chunkDuration*Math.max(1,n),r=e+i;r<=this.index.endTime&&!this.rangeCache.hasTimestamp(r)&&this.loadTimeRange(r).catch(s=>{console.warn("Prefetch failed:",s)})}parseVehicleState(e,n,i,r,s){var l,u,c,h,d,m;if(!["Pose","PoseInFrame","foxglove.PoseInFrame","geometry_msgs/Pose","nav_msgs/Odometry"].some(_=>s.includes(_)||s===_))return{state:null};if(r==="protobuf")return{state:null,error:`Schema "${s}": protobuf encoding requires schema definition`};try{const y=new TextDecoder().decode(e),p=JSON.parse(y);this.loggedSchemas.has(s)||(this.loggedSchemas.add(s),console.log(`Sample ${s} message - ALL FIELDS:`,Object.keys(p)),console.log("Full message:",JSON.stringify(p,null,2).slice(0,1500)));let f={x:0,y:0,z:0},g={x:0,y:0,z:0,w:1},v=0,x=0,C=0,T=!1;return p.pos!==void 0&&(f={x:p.pos.x??0,y:p.pos.y??0,z:p.pos.z??0},T=!0),p.orientation!==void 0&&(g={x:p.orientation.x??0,y:p.orientation.y??0,z:p.orientation.z??0,w:p.orientation.w??1}),p.vel!==void 0&&(v=p.vel.x??Math.sqrt((p.vel.x??0)**2+(p.vel.y??0)**2+(p.vel.z??0)**2)),p.accel!==void 0&&(x=p.accel.x??0),p.rotation_rate!==void 0&&(C=p.rotation_rate.z??0),!T&&p.position!==void 0&&(f={x:p.position.x??p.position[0]??0,y:p.position.y??p.position[1]??0,z:p.position.z??p.position[2]??0},T=!0,p.orientation!==void 0&&(g={x:p.orientation.x??p.orientation[0]??0,y:p.orientation.y??p.orientation[1]??0,z:p.orientation.z??p.orientation[2]??0,w:p.orientation.w??p.orientation[3]??1})),!T&&((l=p.pose)==null?void 0:l.position)!==void 0&&(f={x:p.pose.position.x??0,y:p.pose.position.y??0,z:p.pose.position.z??0},T=!0,((u=p.pose)==null?void 0:u.orientation)!==void 0&&(g={x:p.pose.orientation.x??0,y:p.pose.orientation.y??0,z:p.pose.orientation.z??0,w:p.pose.orientation.w??1})),!T&&p.x!==void 0&&p.y!==void 0&&(f={x:p.x,y:p.y,z:p.z??0},T=!0),T?(this.loggedSchemas.has(`${s}_parsed`)||(this.loggedSchemas.add(`${s}_parsed`),console.log(`Successfully parsed ${s}: pos=(${f.x.toFixed(2)}, ${f.y.toFixed(2)}), timestamp=${n.toFixed(2)}`)),(n<1||n>5&&n<5.5)&&console.log(`Vehicle pos at t=${n.toFixed(2)}: (${f.x.toFixed(2)}, ${f.y.toFixed(2)})`),{state:{timestamp:n,position:f,rotation:g,speed:v||((h=(c=p.twist)==null?void 0:c.linear)==null?void 0:h.x)||p.speed||p.velocity||0,acceleration:x||p.acceleration||0,yawRate:C||((m=(d=p.twist)==null?void 0:d.angular)==null?void 0:m.z)||p.yaw_rate||0,jerk:p.jerk??0}}):{state:null,error:`Schema "${s}": No position data found in message`}}catch{return{state:null,error:`Schema "${s}": Unable to parse ${r} as JSON`}}}getStateAtTime(e){const n=this.rangeCache.getAllStates();if(n.length===0)return null;let i=0,r=n.length-1;for(;i<r;){const l=Math.floor((i+r)/2);n[l].timestamp<e?i=l+1:r=l}if(i===0)return n[0];if(i>=n.length)return n[n.length-1];const s=n[i-1],a=n[i],o=(e-s.timestamp)/(a.timestamp-s.timestamp);return this.interpolateStates(s,a,o)}hasDataForTime(e){return this.rangeCache.hasTimestamp(e)}interpolateStates(e,n,i){const r=(s,a)=>s+(a-s)*i;return{timestamp:r(e.timestamp,n.timestamp),position:{x:r(e.position.x,n.position.x),y:r(e.position.y,n.position.y),z:r(e.position.z,n.position.z)},rotation:this.slerpQuaternion(e.rotation,n.rotation,i),speed:r(e.speed,n.speed),acceleration:r(e.acceleration,n.acceleration),yawRate:r(e.yawRate,n.yawRate),jerk:r(e.jerk,n.jerk)}}slerpQuaternion(e,n,i){let r=e.x*n.x+e.y*n.y+e.z*n.z+e.w*n.w;const s={...n};if(r<0&&(s.x=-n.x,s.y=-n.y,s.z=-n.z,s.w=-n.w,r=-r),r>.9995)return{x:e.x+(s.x-e.x)*i,y:e.y+(s.y-e.y)*i,z:e.z+(s.z-e.z)*i,w:e.w+(s.w-e.w)*i};const a=Math.acos(r),o=a*i,l=Math.sin(o),u=Math.sin(a),c=Math.cos(o)-r*l/u,h=l/u;return{x:e.x*c+s.x*h,y:e.y*c+s.y*h,z:e.z*c+s.z*h,w:e.w*c+s.w*h}}getAllTelemetry(){return this.rangeCache.getAllTelemetry()}getAllVehicleStates(){return this.rangeCache.getAllStates()}getTrajectory(){return this.rangeCache.getAllStates().map(e=>e.position)}async loadFullTrajectory(){if(console.log("loadFullTrajectory called, reader:",!!this.reader,"index:",!!this.index),!this.reader||!this.index)return console.log("loadFullTrajectory: No reader or index, returning empty"),[];let e=[];for(const[,l]of this.reader.channelsById){const u=this.reader.schemasById.get(l.schemaId);(u==null?void 0:u.name)==="Pose"&&e.push(l.topic)}if(console.log("loadFullTrajectory: Pose topics:",e),e.length===0)return console.log("loadFullTrajectory: No Pose topics found"),[];const n=[],i=this.index.startTime;console.log("loadFullTrajectory: Reading Pose messages only...");const r=1e4;let s=-1;const a=.1;let o=0;try{for await(const l of this.reader.readMessages({topics:e})){if(o++,o===1&&console.log("loadFullTrajectory: First message received"),n.length>=r){console.log("loadFullTrajectory: Reached max points limit");break}try{const c=new TextDecoder().decode(l.data),h=JSON.parse(c);if(h.pos){const d=Number(l.logTime)/1e9-i;if(d-s<a)continue;s=d;const m=Number(h.pos.x)||0,_=Number(h.pos.y)||0,y=Number(h.pos.z)||0;n.push({x:m,y:_,z:y,timestamp:d}),n.length<=3&&console.log(`loadFullTrajectory point ${n.length}: (${m.toFixed(2)}, ${_.toFixed(2)}, ${y.toFixed(2)}) at t=${d.toFixed(2)}`),n.length%100===0&&console.log(`loadFullTrajectory: ${n.length} points at (${m.toFixed(2)}, ${_.toFixed(2)})`)}}catch{}}}catch(l){console.error("loadFullTrajectory: Error reading messages:",l)}return console.log(`loadFullTrajectory: Processed ${o} messages, got ${n.length} positions`),console.log(`loadFullTrajectory: Found ${n.length} positions`),n.sort((l,u)=>l.timestamp-u.timestamp),n.map(l=>({x:l.x,y:l.y,z:l.z}))}getIndex(){return this.index}getSchemaInfo(){return this.schemasInfo}dispose(){var e;(e=this.httpReader)==null||e.abort(),this.httpReader=null,this.reader=null,this.index=null,this.rangeCache.clear(),this.loadingRanges.clear()}}class bR{constructor(){Ee(this,"loader",null);Ee(this,"state");Ee(this,"lastUpdateTime",0);Ee(this,"lastStateEmitTime",0);Ee(this,"animationFrameId",null);Ee(this,"eventListeners",new Map);Ee(this,"prefetchScheduled",!1);Ee(this,"STATE_EMIT_INTERVAL",100);this.state={currentTime:0,duration:0,isPlaying:!1,playbackRate:1,isLoading:!1,isSeeking:!1}}async loadSimulation(e){this.updateState({isLoading:!0}),this.emit("stateChange",this.state);try{this.loader&&(this.loader.dispose(),this.loader=null);const n=new PR(e);this.loader=n;const i=await n.loadIndex();if(this.loader!==n||(this.updateState({duration:i.duration,currentTime:0}),await n.loadTimeRange(0),this.loader!==n))return;this.updateState({isLoading:!1}),this.emit("loaded",{duration:i.duration}),this.emit("stateChange",this.state)}catch(n){throw this.updateState({isLoading:!1}),this.emit("error",n),n}}play(){this.state.isPlaying||(this.updateState({isPlaying:!0}),this.lastUpdateTime=performance.now(),this.startAnimationLoop(),this.emit("stateChange",this.state))}pause(){this.state.isPlaying&&(this.updateState({isPlaying:!1}),this.stopAnimationLoop(),this.emit("stateChange",this.state))}togglePlayPause(){this.state.isPlaying?this.pause():this.play()}seek(e){const n=Math.max(0,Math.min(e,this.state.duration));this.updateState({currentTime:n,isSeeking:!0}),this.emit("timeUpdate",{currentTime:n}),this.emit("stateChange",this.state),this.loader&&!this.loader.hasDataForTime(n)?(this.emit("dataLoading",{time:n}),this.loader.loadTimeRange(n).then(()=>{this.updateState({isSeeking:!1}),this.emit("stateChange",this.state)}).catch(i=>{console.warn("Failed to load data for seek:",i),this.updateState({isSeeking:!1}),this.emit("stateChange",this.state)})):requestAnimationFrame(()=>{this.updateState({isSeeking:!1})})}setPlaybackRate(e){this.updateState({playbackRate:e}),this.emit("stateChange",this.state)}skip(e){this.seek(this.state.currentTime+e)}getState(){return{...this.state}}getCurrentVehicleState(){return this.loader?this.loader.getStateAtTime(this.state.currentTime):null}getTelemetry(){var e;return((e=this.loader)==null?void 0:e.getAllTelemetry())??[]}getTrajectory(){var e;return((e=this.loader)==null?void 0:e.getTrajectory())??[]}async loadFullTrajectory(){var e;return((e=this.loader)==null?void 0:e.loadFullTrajectory())??[]}on(e,n){this.eventListeners.has(e)||this.eventListeners.set(e,new Set),this.eventListeners.get(e).add(n)}off(e,n){var i;(i=this.eventListeners.get(e))==null||i.delete(n)}dispose(){var e;this.stopAnimationLoop(),(e=this.loader)==null||e.dispose(),this.loader=null,this.eventListeners.clear()}updateState(e){this.state={...this.state,...e}}emit(e,n){var i;(i=this.eventListeners.get(e))==null||i.forEach(r=>r(n))}startAnimationLoop(){if(this.animationFrameId!==null)return;const e=()=>{if(!this.state.isPlaying)return;const n=performance.now(),i=(n-this.lastUpdateTime)/1e3;this.lastUpdateTime=n;const r=this.state.currentTime+i*this.state.playbackRate;if(r>=this.state.duration){this.updateState({currentTime:this.state.duration,isPlaying:!1}),this.emit("timeUpdate",{currentTime:this.state.duration}),this.emit("stateChange",this.state);return}this.loader&&!this.loader.hasDataForTime(r)&&this.loader.loadTimeRange(r).catch(s=>{console.warn("Failed to load data during playback:",s)}),!this.prefetchScheduled&&this.loader&&(this.prefetchScheduled=!0,setTimeout(()=>{var s;(s=this.loader)==null||s.prefetchRange(this.state.currentTime,this.state.playbackRate),this.prefetchScheduled=!1},0)),this.updateState({currentTime:r}),this.emit("timeUpdate",{currentTime:r}),n-this.lastStateEmitTime>=this.STATE_EMIT_INTERVAL&&(this.lastStateEmitTime=n,this.emit("stateChange",this.state)),this.animationFrameId=requestAnimationFrame(e)};this.animationFrameId=requestAnimationFrame(e)}stopAnimationLoop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}}function LR(t){const e=ee.useRef(null),[n,i]=ee.useState({currentTime:0,duration:0,isPlaying:!1,playbackRate:1,isLoading:!1,isSeeking:!1}),[r,s]=ee.useState(null),[a,o]=ee.useState([]),[l,u]=ee.useState([]);ee.useEffect(()=>{const g=new bR;return e.current=g,g.on("stateChange",v=>{i(v)}),g.on("error",v=>{s(v instanceof Error?v.message:"Unknown error")}),g.on("loaded",()=>{o(g.getTelemetry())}),()=>{e.current=null,g.dispose()}},[]),ee.useEffect(()=>{const g=e.current;if(!t||!g)return;let v=!1;return(async()=>{try{if(s(null),await g.loadSimulation(t),v)return;o(g.getTelemetry()),console.log("useReplay: Loading full trajectory...");try{const C=await g.loadFullTrajectory();if(console.log("useReplay: Got trajectory with",C.length,"points"),v)return;C.length>0?(u(C),console.log("useReplay: Trajectory state updated")):console.warn("useReplay: Trajectory is empty")}catch(C){console.error("useReplay: Failed to load trajectory:",C)}}catch(C){if(v)return;s(C instanceof Error?C.message:"Failed to load simulation")}})(),()=>{v=!0}},[t]);const c=ee.useCallback(()=>{var g;(g=e.current)==null||g.play()},[]),h=ee.useCallback(()=>{var g;(g=e.current)==null||g.pause()},[]),d=ee.useCallback(()=>{var g;(g=e.current)==null||g.togglePlayPause()},[]),m=ee.useCallback(g=>{var v;(v=e.current)==null||v.seek(g)},[]),_=ee.useCallback(g=>{var v;(v=e.current)==null||v.skip(g)},[]),y=ee.useCallback(g=>{var v;(v=e.current)==null||v.setPlaybackRate(g)},[]),p=ee.useCallback(()=>{var g;return((g=e.current)==null?void 0:g.getCurrentVehicleState())??null},[]),f=ee.useCallback(()=>{var g;return((g=e.current)==null?void 0:g.getTrajectory())??[]},[]);return{state:n,error:r,telemetry:a,fullTrajectory:l,play:c,pause:h,togglePlayPause:d,seek:m,skip:_,setPlaybackRate:y,getCurrentVehicleState:p,getTrajectory:f}}function IR(){const[t,e]=ee.useState(0),n=ee.useRef(0),i=ee.useRef(performance.now()),r=ee.useCallback(()=>{n.current++;const s=performance.now(),a=s-i.current;if(a>=500){const o=Math.round(n.current*1e3/a);e(o),n.current=0,i.current=s}},[]);return{fps:t,measureFrame:r}}function NR({isPlaying:t,playbackRate:e,onPlayPause:n,onSkip:i,onPlaybackRateChange:r}){const s=[.25,.5,1,1.5,2,4];return q.jsxs("div",{className:"playback-controls",children:[q.jsxs("div",{className:"controls-left",children:[q.jsx("button",{className:"control-btn skip-btn",onClick:()=>i(-10),title:"Skip back 10s",children:q.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:q.jsx("path",{d:"M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"})})}),q.jsx("button",{className:"control-btn play-btn",onClick:n,title:t?"Pause":"Play",children:t?q.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:q.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}):q.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:q.jsx("path",{d:"M8 5v14l11-7z"})})}),q.jsx("button",{className:"control-btn skip-btn",onClick:()=>i(10),title:"Skip forward 10s",children:q.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:q.jsx("path",{d:"M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"})})})]}),q.jsx("div",{className:"controls-right",children:q.jsxs("div",{className:"playback-rate",children:[q.jsx("label",{children:"Speed:"}),q.jsx("select",{value:e,onChange:a=>r(parseFloat(a.target.value)),children:s.map(a=>q.jsxs("option",{value:a,children:[a,"x"]},a))})]})})]})}function Pg(t){const e=Math.floor(t/60),n=Math.floor(t%60);return`${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}function DR({currentTime:t,duration:e,onSeek:n}){const i=ee.useRef(null),r=ee.useRef(!1),s=e>0?t/e*100:0,a=ee.useCallback(u=>{const h=parseFloat(u.target.value)/100*e;n(h)},[e,n]),o=ee.useCallback(()=>{r.current=!0},[]),l=ee.useCallback(()=>{r.current=!1},[]);return q.jsxs("div",{className:"timeline",children:[q.jsx("span",{className:"timeline-time current",children:Pg(t)}),q.jsxs("div",{className:"timeline-slider-container",children:[q.jsx("div",{className:"timeline-progress",style:{width:`${s}%`}}),q.jsx("input",{ref:i,type:"range",min:"0",max:"100",step:"0.1",value:s,onChange:a,onMouseDown:o,onMouseUp:l,onTouchStart:o,onTouchEnd:l,className:"timeline-slider"})]}),q.jsx("span",{className:"timeline-time duration",children:Pg(e)})]})}function Cl({data:t,dataKey:e,currentTime:n,duration:i,color:r}){const s=ee.useRef(null),{minValue:a,maxValue:o}=ee.useMemo(()=>{if(t.length===0)return{minValue:0,maxValue:1,values:[]};const l=t.map(d=>d[e]),u=Math.min(...l),c=Math.max(...l),h=(c-u)*.1||1;return{minValue:u-h,maxValue:c+h}},[t,e]);return ee.useEffect(()=>{const l=s.current;if(!l)return;const u=l.getContext("2d");if(!u)return;const c=window.devicePixelRatio||1,h=l.getBoundingClientRect();l.width=h.width*c,l.height=h.height*c,u.scale(c,c);const d=h.width,m=h.height;u.clearRect(0,0,d,m),u.strokeStyle="rgba(255, 255, 255, 0.1)",u.lineWidth=1;for(let _=0;_<=4;_++){const y=m/4*_;u.beginPath(),u.moveTo(0,y),u.lineTo(d,y),u.stroke()}if(t.length>1&&(u.beginPath(),u.strokeStyle=r,u.lineWidth=2,u.lineJoin="round",u.lineCap="round",t.forEach((_,y)=>{const p=i>0?_.timestamp/i*d:0,g=(_[e]-a)/(o-a),v=m-g*m;y===0?u.moveTo(p,v):u.lineTo(p,v)}),u.stroke(),u.lineTo(d,m),u.lineTo(0,m),u.closePath(),u.fillStyle=r.replace(")",", 0.1)").replace("rgb","rgba"),u.fill()),i>0){const _=n/i*d;u.beginPath(),u.strokeStyle="#ffffff",u.lineWidth=2,u.setLineDash([4,4]),u.moveTo(_,0),u.lineTo(_,m),u.stroke(),u.setLineDash([]);const y=t.findIndex(p=>p.timestamp>=n);if(y>=0){const f=(t[y][e]-a)/(o-a),g=m-f*m;u.beginPath(),u.fillStyle="#ffffff",u.arc(_,g,4,0,Math.PI*2),u.fill()}}},[t,e,n,i,r,a,o]),q.jsx("div",{className:"metric-plot",children:q.jsx("canvas",{ref:s})})}function UR({telemetry:t,currentTime:e,duration:n,currentState:i}){const r=(i==null?void 0:i.speed)??0,s=(i==null?void 0:i.acceleration)??0,a=(i==null?void 0:i.jerk)??0,o=(i==null?void 0:i.yawRate)??0;return q.jsxs("div",{className:"telemetry-sidebar",children:[q.jsx("div",{className:"sidebar-header",children:q.jsx("h2",{children:"Telemetry"})}),q.jsxs("div",{className:"metrics-container",children:[q.jsxs("div",{className:"metric-card",children:[q.jsxs("div",{className:"metric-header",children:[q.jsx("span",{className:"metric-label",children:"Speed"}),q.jsxs("span",{className:"metric-value",children:[r.toFixed(1)," m/s"]})]}),q.jsx(Cl,{data:t,dataKey:"speed",currentTime:e,duration:n,color:"#4da6ff"})]}),q.jsxs("div",{className:"metric-card",children:[q.jsxs("div",{className:"metric-header",children:[q.jsx("span",{className:"metric-label",children:"Acceleration"}),q.jsxs("span",{className:"metric-value",children:[s.toFixed(2)," m/s²"]})]}),q.jsx(Cl,{data:t,dataKey:"acceleration",currentTime:e,duration:n,color:"#6bcf7f"})]}),q.jsxs("div",{className:"metric-card",children:[q.jsxs("div",{className:"metric-header",children:[q.jsx("span",{className:"metric-label",children:"Jerk"}),q.jsxs("span",{className:"metric-value",children:[a.toFixed(2)," m/s³"]})]}),q.jsx(Cl,{data:t,dataKey:"jerk",currentTime:e,duration:n,color:"#ffb347"})]}),q.jsxs("div",{className:"metric-card",children:[q.jsxs("div",{className:"metric-header",children:[q.jsx("span",{className:"metric-label",children:"Yaw Rate"}),q.jsxs("span",{className:"metric-value",children:[o.toFixed(3)," rad/s"]})]}),q.jsx(Cl,{data:t,dataKey:"yawRate",currentTime:e,duration:n,color:"#ff6b6b"})]})]}),q.jsxs("div",{className:"position-info",children:[q.jsx("h3",{children:"Position"}),q.jsxs("div",{className:"position-values",children:[q.jsxs("div",{className:"position-item",children:[q.jsx("span",{className:"pos-label",children:"X"}),q.jsx("span",{className:"pos-value",children:((i==null?void 0:i.position.x)??0).toFixed(2)})]}),q.jsxs("div",{className:"position-item",children:[q.jsx("span",{className:"pos-label",children:"Y"}),q.jsx("span",{className:"pos-value",children:((i==null?void 0:i.position.y)??0).toFixed(2)})]}),q.jsxs("div",{className:"position-item",children:[q.jsx("span",{className:"pos-label",children:"Z"}),q.jsx("span",{className:"pos-value",children:((i==null?void 0:i.position.z)??0).toFixed(2)})]})]})]})]})}function FR(){var v;const{simulationId:t}=rM(),e=ee.useRef(null),n=ee.useRef(null),i=ee.useRef(null),r=t?DM(t):null,{state:s,error:a,telemetry:o,fullTrajectory:l,togglePlayPause:u,seek:c,skip:h,setPlaybackRate:d,getCurrentVehicleState:m}=LR(r),{fps:_,measureFrame:y}=IR(),[p,f]=ee.useState(null);ee.useEffect(()=>{if(e.current)return n.current=new qC(e.current),()=>{var x;(x=n.current)==null||x.dispose(),n.current=null}},[]),ee.useEffect(()=>{if(n.current&&l.length>0){n.current.setTrajectory(l);const x=l[0],C=l[l.length-1];console.log(`Trajectory loaded: ${l.length} points`),console.log(`  First point: (${x.x.toFixed(2)}, ${x.y.toFixed(2)}, ${x.z.toFixed(2)})`),console.log(`  Last point: (${C.x.toFixed(2)}, ${C.y.toFixed(2)}, ${C.z.toFixed(2)})`)}},[l]),ee.useEffect(()=>{let x=0;const C=()=>{const T=m();f(T);const A=performance.now();A-x>2e3&&(x=A,T?console.log("Vehicle state:",{time:T.timestamp.toFixed(2),pos:`(${T.position.x.toFixed(2)}, ${T.position.y.toFixed(2)}, ${T.position.z.toFixed(2)})`,speed:T.speed.toFixed(2)}):console.log("Vehicle state: null (no data loaded for current time)")),n.current&&(n.current.updateVehicle(T),n.current.render()),y(),i.current=requestAnimationFrame(C)};return i.current=requestAnimationFrame(C),()=>{i.current&&cancelAnimationFrame(i.current)}},[m,y]),ee.useEffect(()=>{const x=C=>{switch(C.code){case"Space":C.preventDefault(),u();break;case"ArrowLeft":C.preventDefault(),h(-5);break;case"ArrowRight":C.preventDefault(),h(5);break;case"KeyJ":h(-10);break;case"KeyL":h(10);break}};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[u,h]);const g=t?((v=decodeURIComponent(t).split("/").pop())==null?void 0:v.replace(".mcap",""))??"Unknown":"Unknown";return a?q.jsx("div",{className:"viewer-container",children:q.jsxs("div",{className:"viewer-error",children:[q.jsx("h2",{children:"Error Loading Simulation"}),q.jsx("p",{children:a}),q.jsx(ih,{to:"/",children:"Back to simulations"})]})}):q.jsxs("div",{className:"viewer-container",children:[q.jsxs("header",{className:"viewer-header",children:[q.jsxs(ih,{to:"/",className:"back-link",children:[q.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:q.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})}),"Back"]}),q.jsx("h1",{children:g}),q.jsxs("div",{className:"fps-indicator",children:["FPS: ",_]})]}),q.jsxs("div",{className:"viewer-content",children:[q.jsx("div",{className:"viewer-main",children:q.jsx("div",{className:"three-container",ref:e,children:s.isLoading&&q.jsxs("div",{className:"loading-overlay",children:[q.jsx("div",{className:"loading-spinner"}),q.jsx("p",{children:"Loading simulation..."})]})})}),q.jsx("div",{className:"viewer-sidebar",children:q.jsx(UR,{telemetry:o,currentTime:s.currentTime,duration:s.duration,currentState:p})})]}),q.jsxs("footer",{className:"viewer-footer",children:[q.jsx("div",{className:"controls-section",children:q.jsx(NR,{isPlaying:s.isPlaying,playbackRate:s.playbackRate,onPlayPause:u,onSkip:h,onPlaybackRateChange:d})}),q.jsx("div",{className:"timeline-section",children:q.jsx(DR,{currentTime:s.currentTime,duration:s.duration,onSeek:c,isPlaying:s.isPlaying})})]})]})}function OR(){return q.jsxs(xM,{children:[q.jsx(eh,{path:"/",element:q.jsx(FM,{})}),q.jsx(eh,{path:"/viewer/:simulationId",element:q.jsx(FR,{})})]})}af.createRoot(document.getElementById("root")).render(q.jsx(zg.StrictMode,{children:q.jsx(CM,{children:q.jsx(OR,{})})}));
