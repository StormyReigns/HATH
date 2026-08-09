/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){'use strict';(function(c,x){"object"===typeof exports&&"undefined"!==typeof module?x(exports):"function"===typeof define&&define.amd?define(["exports"],x):(c=c||self,x(c.React={}))})(this,function(c){function x(a){if(null===a||"object"!==typeof a)return null;a=V&&a[V]||a["@@iterator"];return"function"===typeof a?a:null}function w(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Y(){}function K(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Z(a,b,
e){var m,d={},c=null,h=null;if(null!=b)for(m in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(c=""+b.key),b)aa.call(b,m)&&!ba.hasOwnProperty(m)&&(d[m]=b[m]);var l=arguments.length-2;if(1===l)d.children=e;else if(1<l){for(var f=Array(l),k=0;k<l;k++)f[k]=arguments[k+2];d.children=f}if(a&&a.defaultProps)for(m in l=a.defaultProps,l)void 0===d[m]&&(d[m]=l[m]);return{$$typeof:y,type:a,key:c,ref:h,props:d,_owner:L.current}}function oa(a,b){return{$$typeof:y,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===y}function pa(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?pa(""+a.key):b.toString(36)}function B(a,b,e,m,d){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;var h=!1;if(null===a)h=!0;else switch(c){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case y:case qa:h=!0}}if(h)return h=a,d=d(h),a=""===m?"."+
N(h,0):m,ca(d)?(e="",null!=a&&(e=a.replace(da,"$&/")+"/"),B(d,b,e,"",function(a){return a})):null!=d&&(M(d)&&(d=oa(d,e+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(da,"$&/")+"/")+a)),b.push(d)),1;h=0;m=""===m?".":m+":";if(ca(a))for(var l=0;l<a.length;l++){c=a[l];var f=m+N(c,l);h+=B(c,b,e,f,d)}else if(f=x(a),"function"===typeof f)for(a=f.call(a),l=0;!(c=a.next()).done;)c=c.value,f=m+N(c,l++),h+=B(c,b,e,f,d);else if("object"===c)throw b=String(a),Error("Objects are not valid as a React child (found: "+
("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function C(a,b,e){if(null==a)return a;var c=[],d=0;B(a,c,"","",function(a){return b.call(e,a,d++)});return c}function ra(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=
0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}function O(a,b){var e=a.length;a.push(b);a:for(;0<e;){var c=e-1>>>1,d=a[c];if(0<D(d,b))a[c]=b,a[e]=d,e=c;else break a}}function p(a){return 0===a.length?null:a[0]}function E(a){if(0===a.length)return null;var b=a[0],e=a.pop();if(e!==b){a[0]=e;a:for(var c=0,d=a.length,k=d>>>1;c<k;){var h=2*(c+1)-1,l=a[h],f=h+1,g=a[f];if(0>D(l,e))f<d&&0>D(g,l)?(a[c]=g,a[f]=e,c=f):(a[c]=l,a[h]=e,c=h);else if(f<d&&0>D(g,e))a[c]=g,a[f]=e,c=f;else break a}}return b}
function D(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function P(a){for(var b=p(r);null!==b;){if(null===b.callback)E(r);else if(b.startTime<=a)E(r),b.sortIndex=b.expirationTime,O(q,b);else break;b=p(r)}}function Q(a){z=!1;P(a);if(!u)if(null!==p(q))u=!0,R(S);else{var b=p(r);null!==b&&T(Q,b.startTime-a)}}function S(a,b){u=!1;z&&(z=!1,ea(A),A=-1);F=!0;var c=k;try{P(b);for(n=p(q);null!==n&&(!(n.expirationTime>b)||a&&!fa());){var m=n.callback;if("function"===typeof m){n.callback=null;
k=n.priorityLevel;var d=m(n.expirationTime<=b);b=v();"function"===typeof d?n.callback=d:n===p(q)&&E(q);P(b)}else E(q);n=p(q)}if(null!==n)var g=!0;else{var h=p(r);null!==h&&T(Q,h.startTime-b);g=!1}return g}finally{n=null,k=c,F=!1}}function fa(){return v()-ha<ia?!1:!0}function R(a){G=a;H||(H=!0,I())}function T(a,b){A=ja(function(){a(v())},b)}function ka(a){throw Error("act(...) is not supported in production builds of React.");}var y=Symbol.for("react.element"),qa=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),
ta=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),va=Symbol.for("react.provider"),wa=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),za=Symbol.for("react.memo"),Aa=Symbol.for("react.lazy"),V=Symbol.iterator,X={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,m){},enqueueSetState:function(a,b,c,m){}},la=Object.assign,W={};w.prototype.isReactComponent={};w.prototype.setState=function(a,
b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};w.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};Y.prototype=w.prototype;var t=K.prototype=new Y;t.constructor=K;la(t,w.prototype);t.isPureReactComponent=!0;var ca=Array.isArray,aa=Object.prototype.hasOwnProperty,L={current:null},
ba={key:!0,ref:!0,__self:!0,__source:!0},da=/\/+/g,g={current:null},J={transition:null};if("object"===typeof performance&&"function"===typeof performance.now){var Ba=performance;var v=function(){return Ba.now()}}else{var ma=Date,Ca=ma.now();v=function(){return ma.now()-Ca}}var q=[],r=[],Da=1,n=null,k=3,F=!1,u=!1,z=!1,ja="function"===typeof setTimeout?setTimeout:null,ea="function"===typeof clearTimeout?clearTimeout:null,na="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&
void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,G=null,A=-1,ia=5,ha=-1,U=function(){if(null!==G){var a=v();ha=a;var b=!0;try{b=G(!0,a)}finally{b?I():(H=!1,G=null)}}else H=!1};if("function"===typeof na)var I=function(){na(U)};else if("undefined"!==typeof MessageChannel){t=new MessageChannel;var Ea=t.port2;t.port1.onmessage=U;I=function(){Ea.postMessage(null)}}else I=function(){ja(U,0)};t={ReactCurrentDispatcher:g,
ReactCurrentOwner:L,ReactCurrentBatchConfig:J,Scheduler:{__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=k;k=a;try{return b()}finally{k=c}},unstable_next:function(a){switch(k){case 1:case 2:case 3:var b=3;break;default:b=k}var c=k;k=b;try{return a()}finally{k=c}},unstable_scheduleCallback:function(a,
b,c){var e=v();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?e+c:e):c=e;switch(a){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1E4;break;default:d=5E3}d=c+d;a={id:Da++,callback:b,priorityLevel:a,startTime:c,expirationTime:d,sortIndex:-1};c>e?(a.sortIndex=c,O(r,a),null===p(q)&&a===p(r)&&(z?(ea(A),A=-1):z=!0,T(Q,c-e))):(a.sortIndex=d,O(q,a),u||F||(u=!0,R(S)));return a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var b=
k;return function(){var c=k;k=b;try{return a.apply(this,arguments)}finally{k=c}}},unstable_getCurrentPriorityLevel:function(){return k},unstable_shouldYield:fa,unstable_requestPaint:function(){},unstable_continueExecution:function(){u||F||(u=!0,R(S))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return p(q)},get unstable_now(){return v},unstable_forceFrameRate:function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):
ia=0<a?Math.floor(1E3/a):5},unstable_Profiling:null}};c.Children={map:C,forEach:function(a,b,c){C(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;C(a,function(){b++});return b},toArray:function(a){return C(a,function(a){return a})||[]},only:function(a){if(!M(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};c.Component=w;c.Fragment=sa;c.Profiler=ua;c.PureComponent=K;c.StrictMode=ta;c.Suspense=ya;c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=
t;c.act=ka;c.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var e=la({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=L.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(f in b)aa.call(b,f)&&!ba.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==l?l[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){l=
Array(f);for(var g=0;g<f;g++)l[g]=arguments[g+2];e.children=l}return{$$typeof:y,type:a.type,key:d,ref:k,props:e,_owner:h}};c.createContext=function(a){a={$$typeof:wa,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:va,_context:a};return a.Consumer=a};c.createElement=Z;c.createFactory=function(a){var b=Z.bind(null,a);b.type=a;return b};c.createRef=function(){return{current:null}};c.forwardRef=function(a){return{$$typeof:xa,
render:a}};c.isValidElement=M;c.lazy=function(a){return{$$typeof:Aa,_payload:{_status:-1,_result:a},_init:ra}};c.memo=function(a,b){return{$$typeof:za,type:a,compare:void 0===b?null:b}};c.startTransition=function(a,b){b=J.transition;J.transition={};try{a()}finally{J.transition=b}};c.unstable_act=ka;c.useCallback=function(a,b){return g.current.useCallback(a,b)};c.useContext=function(a){return g.current.useContext(a)};c.useDebugValue=function(a,b){};c.useDeferredValue=function(a){return g.current.useDeferredValue(a)};
c.useEffect=function(a,b){return g.current.useEffect(a,b)};c.useId=function(){return g.current.useId()};c.useImperativeHandle=function(a,b,c){return g.current.useImperativeHandle(a,b,c)};c.useInsertionEffect=function(a,b){return g.current.useInsertionEffect(a,b)};c.useLayoutEffect=function(a,b){return g.current.useLayoutEffect(a,b)};c.useMemo=function(a,b){return g.current.useMemo(a,b)};c.useReducer=function(a,b,c){return g.current.useReducer(a,b,c)};c.useRef=function(a){return g.current.useRef(a)};
c.useState=function(a){return g.current.useState(a)};c.useSyncExternalStore=function(a,b,c){return g.current.useSyncExternalStore(a,b,c)};c.useTransition=function(){return g.current.useTransition()};c.version="18.3.1"});
})();
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';(function(Q,zb){"object"===typeof exports&&"undefined"!==typeof module?zb(exports,require("react")):"function"===typeof define&&define.amd?define(["exports","react"],zb):(Q=Q||self,zb(Q.ReactDOM={},Q.React))})(this,function(Q,zb){function m(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function mb(a,b){Ab(a,b);Ab(a+"Capture",b)}function Ab(a,b){$b[a]=b;for(a=0;a<b.length;a++)cg.add(b[a])}function bj(a){if(Zd.call(dg,a))return!0;if(Zd.call(eg,a))return!1;if(cj.test(a))return dg[a]=!0;eg[a]=!0;return!1}function dj(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function ej(a,b,c,d){if(null===
b||"undefined"===typeof b||dj(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function Y(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}function $d(a,b,c,d){var e=R.hasOwnProperty(b)?R[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==
b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])ej(b,c,e,d)&&(c=null),d||null===e?bj(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}function ac(a){if(null===a||"object"!==typeof a)return null;a=fg&&a[fg]||a["@@iterator"];return"function"===typeof a?a:null}function bc(a,b,
c){if(void 0===ae)try{throw Error();}catch(d){ae=(b=d.stack.trim().match(/\n( *(at )?)/))&&b[1]||""}return"\n"+ae+a}function be(a,b){if(!a||ce)return"";ce=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(n){var d=n}Reflect.construct(a,[],b)}else{try{b.call()}catch(n){d=n}a.call(b.prototype)}else{try{throw Error();
}catch(n){d=n}a()}}catch(n){if(n&&d&&"string"===typeof n.stack){for(var e=n.stack.split("\n"),f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{ce=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?bc(a):
""}function fj(a){switch(a.tag){case 5:return bc(a.type);case 16:return bc("Lazy");case 13:return bc("Suspense");case 19:return bc("SuspenseList");case 0:case 2:case 15:return a=be(a.type,!1),a;case 11:return a=be(a.type.render,!1),a;case 1:return a=be(a.type,!0),a;default:return""}}function de(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Bb:return"Fragment";case Cb:return"Portal";case ee:return"Profiler";case fe:return"StrictMode";
case ge:return"Suspense";case he:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case gg:return(a.displayName||"Context")+".Consumer";case hg:return(a._context.displayName||"Context")+".Provider";case ie:var b=a.render;a=a.displayName;a||(a=b.displayName||b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case je:return b=a.displayName||null,null!==b?b:de(a.type)||"Memo";case Ta:b=a._payload;a=a._init;try{return de(a(b))}catch(c){}}return null}function gj(a){var b=a.type;
switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(b);case 8:return b===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";
case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Ua(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}function ig(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===
b)}function hj(a){var b=ig(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Pc(a){a._valueTracker||(a._valueTracker=hj(a))}function jg(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=ig(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Qc(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ke(a,b){var c=b.checked;return E({},b,{defaultChecked:void 0,defaultValue:void 0,
value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function kg(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ua(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function lg(a,b){b=b.checked;null!=b&&$d(a,"checked",b,!1)}function le(a,b){lg(a,b);var c=Ua(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=
c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?me(a,b.type,c):b.hasOwnProperty("defaultValue")&&me(a,b.type,Ua(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}function mg(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;
c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function me(a,b,c){if("number"!==b||Qc(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Db(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=
!0)}else{c=""+Ua(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(m(91));return E({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ng(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(m(92));if(cc(c)){if(1<c.length)throw Error(m(93));
c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Ua(c)}}function og(a,b){var c=Ua(b.value),d=Ua(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function pg(a,b){b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function qg(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function oe(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?qg(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function rg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||dc.hasOwnProperty(a)&&dc[a]?(""+b).trim():b+"px"}function sg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rg(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}function pe(a,b){if(b){if(ij[a]&&
(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(m(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(m(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(m(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(m(62));}}function qe(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function re(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function tg(a){if(a=ec(a)){if("function"!==typeof se)throw Error(m(280));var b=a.stateNode;b&&(b=Rc(b),se(a.stateNode,a.type,b))}}function ug(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function vg(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;tg(a);if(b)for(a=0;a<b.length;a++)tg(b[a])}}function wg(a,b,c){if(te)return a(b,c);te=!0;try{return xg(a,b,c)}finally{if(te=
!1,null!==Eb||null!==Fb)yg(),vg()}}function fc(a,b){var c=a.stateNode;if(null===c)return null;var d=Rc(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;
if(c&&"function"!==typeof c)throw Error(m(231,b,typeof c));return c}function jj(a,b,c,d,e,f,g,h,k){gc=!1;Sc=null;kj.apply(lj,arguments)}function mj(a,b,c,d,e,f,g,h,k){jj.apply(this,arguments);if(gc){if(gc){var n=Sc;gc=!1;Sc=null}else throw Error(m(198));Tc||(Tc=!0,ue=n)}}function nb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function zg(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,
null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Ag(a){if(nb(a)!==a)throw Error(m(188));}function nj(a){var b=a.alternate;if(!b){b=nb(a);if(null===b)throw Error(m(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Ag(e),a;if(f===d)return Ag(e),b;f=f.sibling}throw Error(m(188));}if(c.return!==d.return)c=e,d=f;
else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(m(189));}}if(c.alternate!==d)throw Error(m(190));}if(3!==c.tag)throw Error(m(188));return c.stateNode.current===c?a:b}function Bg(a){a=nj(a);return null!==a?Cg(a):null}function Cg(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=Cg(a);if(null!==b)return b;a=a.sibling}return null}
function oj(a,b){if(Ca&&"function"===typeof Ca.onCommitFiberRoot)try{Ca.onCommitFiberRoot(Uc,a,void 0,128===(a.current.flags&128))}catch(c){}}function pj(a){a>>>=0;return 0===a?32:31-(qj(a)/rj|0)|0}function hc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&
4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Vc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=hc(h):(f&=g,0!==f&&(d=hc(f)))}else g=c&~e,0!==g?d=hc(g):0!==f&&(d=hc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&
(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-ta(b),e=1<<c,d|=a[c],b&=~e;return d}function sj(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tj(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-ta(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=sj(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function ve(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Dg(){var a=Wc;Wc<<=1;0===(Wc&4194240)&&(Wc=64);return a}function we(a){for(var b=[],c=0;31>c;c++)b.push(a);
return b}function ic(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-ta(b);a[b]=c}function uj(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-ta(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}function xe(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-ta(c),e=1<<d;e&b|a[d]&
b&&(a[d]|=b);c&=~e}}function Eg(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}function Fg(a,b){switch(a){case "focusin":case "focusout":Va=null;break;case "dragenter":case "dragleave":Wa=null;break;case "mouseover":case "mouseout":Xa=null;break;case "pointerover":case "pointerout":jc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":kc.delete(b.pointerId)}}function lc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,
nativeEvent:f,targetContainers:[e]},null!==b&&(b=ec(b),null!==b&&Gg(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}function vj(a,b,c,d,e){switch(b){case "focusin":return Va=lc(Va,a,b,c,d,e),!0;case "dragenter":return Wa=lc(Wa,a,b,c,d,e),!0;case "mouseover":return Xa=lc(Xa,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;jc.set(f,lc(jc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,kc.set(f,lc(kc.get(f)||null,a,b,
c,d,e)),!0}return!1}function Hg(a){var b=ob(a.target);if(null!==b){var c=nb(b);if(null!==c)if(b=c.tag,13===b){if(b=zg(c),null!==b){a.blockedOn=b;wj(a.priority,function(){xj(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=ye(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;
var d=new c.constructor(c.type,c);ze=d;c.target.dispatchEvent(d);ze=null}else return b=ec(c),null!==b&&Gg(b),a.blockedOn=c,!1;b.shift()}return!0}function Ig(a,b,c){Xc(a)&&c.delete(b)}function yj(){Ae=!1;null!==Va&&Xc(Va)&&(Va=null);null!==Wa&&Xc(Wa)&&(Wa=null);null!==Xa&&Xc(Xa)&&(Xa=null);jc.forEach(Ig);kc.forEach(Ig)}function mc(a,b){a.blockedOn===b&&(a.blockedOn=null,Ae||(Ae=!0,Jg(Kg,yj)))}function nc(a){if(0<Yc.length){mc(Yc[0],a);for(var b=1;b<Yc.length;b++){var c=Yc[b];c.blockedOn===a&&(c.blockedOn=
null)}}null!==Va&&mc(Va,a);null!==Wa&&mc(Wa,a);null!==Xa&&mc(Xa,a);b=function(b){return mc(b,a)};jc.forEach(b);kc.forEach(b);for(b=0;b<Ya.length;b++)c=Ya[b],c.blockedOn===a&&(c.blockedOn=null);for(;0<Ya.length&&(b=Ya[0],null===b.blockedOn);)Hg(b),null===b.blockedOn&&Ya.shift()}function zj(a,b,c,d){var e=z,f=Gb.transition;Gb.transition=null;try{z=1,Be(a,b,c,d)}finally{z=e,Gb.transition=f}}function Aj(a,b,c,d){var e=z,f=Gb.transition;Gb.transition=null;try{z=4,Be(a,b,c,d)}finally{z=e,Gb.transition=
f}}function Be(a,b,c,d){if(Zc){var e=ye(a,b,c,d);if(null===e)Ce(a,b,d,$c,c),Fg(a,d);else if(vj(e,a,b,c,d))d.stopPropagation();else if(Fg(a,d),b&4&&-1<Bj.indexOf(a)){for(;null!==e;){var f=ec(e);null!==f&&Cj(f);f=ye(a,b,c,d);null===f&&Ce(a,b,d,$c,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else Ce(a,b,d,null,c)}}function ye(a,b,c,d){$c=null;a=re(d);a=ob(a);if(null!==a)if(b=nb(a),null===b)a=null;else if(c=b.tag,13===c){a=zg(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===
b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);$c=a;return null}function Lg(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;
case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;case "message":switch(Dj()){case De:return 1;case Mg:return 4;case ad:case Ej:return 16;case Ng:return 536870912;default:return 16}default:return 16}}function Og(){if(bd)return bd;
var a,b=Ee,c=b.length,d,e="value"in Za?Za.value:Za.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return bd=e.slice(a,1<d?1-d:void 0)}function cd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function dd(){return!0}function Pg(){return!1}function ka(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;
for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?dd:Pg;this.isPropagationStopped=Pg;return this}E(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=dd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():
"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=dd)},persist:function(){},isPersistent:dd});return b}function Fj(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Gj[a])?!!b[a]:!1}function Fe(a){return Fj}function Qg(a,b){switch(a){case "keyup":return-1!==Hj.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function Rg(a){a=a.detail;return"object"===typeof a&&
"data"in a?a.data:null}function Ij(a,b){switch(a){case "compositionend":return Rg(b);case "keypress":if(32!==b.which)return null;Sg=!0;return Tg;case "textInput":return a=b.data,a===Tg&&Sg?null:a;default:return null}}function Jj(a,b){if(Hb)return"compositionend"===a||!Ge&&Qg(a,b)?(a=Og(),bd=Ee=Za=null,Hb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;
case "compositionend":return Ug&&"ko"!==b.locale?null:b.data;default:return null}}function Vg(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Kj[a.type]:"textarea"===b?!0:!1}function Lj(a){if(!Ia)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Wg(a,b,c,d){ug(d);b=ed(b,"onChange");0<b.length&&(c=new He("onChange","change",null,c,d),a.push({event:c,listeners:b}))}function Mj(a){Xg(a,
0)}function fd(a){var b=Ib(a);if(jg(b))return a}function Nj(a,b){if("change"===a)return b}function Yg(){oc&&(oc.detachEvent("onpropertychange",Zg),pc=oc=null)}function Zg(a){if("value"===a.propertyName&&fd(pc)){var b=[];Wg(b,pc,a,re(a));wg(Mj,b)}}function Oj(a,b,c){"focusin"===a?(Yg(),oc=b,pc=c,oc.attachEvent("onpropertychange",Zg)):"focusout"===a&&Yg()}function Pj(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return fd(pc)}function Qj(a,b){if("click"===a)return fd(b)}function Rj(a,b){if("input"===
a||"change"===a)return fd(b)}function Sj(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function qc(a,b){if(ua(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!Zd.call(b,e)||!ua(a[e],b[e]))return!1}return!0}function $g(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function ah(a,b){var c=$g(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;
if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=$g(c)}}function bh(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?bh(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function ch(){for(var a=window,b=Qc();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;
b=Qc(a.document)}return b}function Ie(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function Tj(a){var b=ch(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&bh(c.ownerDocument.documentElement,c)){if(null!==d&&Ie(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);
else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=ah(c,f);var g=ah(c,d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),
a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}function dh(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Je||null==Jb||Jb!==Qc(d)||(d=Jb,"selectionStart"in d&&Ie(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d=
{anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),rc&&qc(rc,d)||(rc=d,d=ed(Ke,"onSelect"),0<d.length&&(b=new He("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Jb)))}function gd(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function hd(a){if(Le[a])return Le[a];if(!Kb[a])return a;var b=Kb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in eh)return Le[a]=b[c];return a}function $a(a,
b){fh.set(a,b);mb(b,[a])}function gh(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;mj(d,b,void 0,a);a.currentTarget=null}function Xg(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,n=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;gh(e,h,n);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;n=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;
gh(e,h,n);f=k}}}if(Tc)throw a=ue,Tc=!1,ue=null,a;}function B(a,b){var c=b[Me];void 0===c&&(c=b[Me]=new Set);var d=a+"__bubble";c.has(d)||(hh(b,a,2,!1),c.add(d))}function Ne(a,b,c){var d=0;b&&(d|=4);hh(c,a,d,b)}function sc(a){if(!a[id]){a[id]=!0;cg.forEach(function(b){"selectionchange"!==b&&(Uj.has(b)||Ne(b,!1,a),Ne(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[id]||(b[id]=!0,Ne("selectionchange",!1,b))}}function hh(a,b,c,d,e){switch(Lg(b)){case 1:e=zj;break;case 4:e=Aj;break;default:e=
Be}c=e.bind(null,b,c,a);e=void 0;!Oe||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}function Ce(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;
if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=ob(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}wg(function(){var d=f,e=re(c),g=[];a:{var h=fh.get(a);if(void 0!==h){var k=He,m=a;switch(a){case "keypress":if(0===cd(c))break a;case "keydown":case "keyup":k=Vj;break;case "focusin":m="focus";k=Pe;break;case "focusout":m="blur";k=Pe;break;case "beforeblur":case "afterblur":k=Pe;break;
case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=ih;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=Wj;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Xj;break;case jh:case kh:case lh:k=Yj;break;case mh:k=Zj;break;case "scroll":k=ak;break;case "wheel":k=bk;break;case "copy":case "cut":case "paste":k=
ck;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=nh}var l=0!==(b&4),p=!l&&"scroll"===a,w=l?null!==h?h+"Capture":null:h;l=[];for(var A=d,t;null!==A;){t=A;var M=t.stateNode;5===t.tag&&null!==M&&(t=M,null!==w&&(M=fc(A,w),null!=M&&l.push(tc(A,M,t))));if(p)break;A=A.return}0<l.length&&(h=new k(h,m,null,c,e),g.push({event:h,listeners:l}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===
a;k="mouseout"===a||"pointerout"===a;if(h&&c!==ze&&(m=c.relatedTarget||c.fromElement)&&(ob(m)||m[Ja]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(m=c.relatedTarget||c.toElement,k=d,m=m?ob(m):null,null!==m&&(p=nb(m),m!==p||5!==m.tag&&6!==m.tag))m=null}else k=null,m=d;if(k!==m){l=ih;M="onMouseLeave";w="onMouseEnter";A="mouse";if("pointerout"===a||"pointerover"===a)l=nh,M="onPointerLeave",w="onPointerEnter",A="pointer";p=null==k?h:Ib(k);t=null==
m?h:Ib(m);h=new l(M,A+"leave",k,c,e);h.target=p;h.relatedTarget=t;M=null;ob(e)===d&&(l=new l(w,A+"enter",m,c,e),l.target=t,l.relatedTarget=p,M=l);p=M;if(k&&m)b:{l=k;w=m;A=0;for(t=l;t;t=Lb(t))A++;t=0;for(M=w;M;M=Lb(M))t++;for(;0<A-t;)l=Lb(l),A--;for(;0<t-A;)w=Lb(w),t--;for(;A--;){if(l===w||null!==w&&l===w.alternate)break b;l=Lb(l);w=Lb(w)}l=null}else l=null;null!==k&&oh(g,h,k,l,!1);null!==m&&null!==p&&oh(g,p,m,l,!0)}}}a:{h=d?Ib(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===
k&&"file"===h.type)var ma=Nj;else if(Vg(h))if(ph)ma=Rj;else{ma=Pj;var va=Oj}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(ma=Qj);if(ma&&(ma=ma(a,d))){Wg(g,ma,c,e);break a}va&&va(a,h,d);"focusout"===a&&(va=h._wrapperState)&&va.controlled&&"number"===h.type&&me(h,"number",h.value)}va=d?Ib(d):window;switch(a){case "focusin":if(Vg(va)||"true"===va.contentEditable)Jb=va,Ke=d,rc=null;break;case "focusout":rc=Ke=Jb=null;break;case "mousedown":Je=!0;break;case "contextmenu":case "mouseup":case "dragend":Je=
!1;dh(g,c,e);break;case "selectionchange":if(dk)break;case "keydown":case "keyup":dh(g,c,e)}var ab;if(Ge)b:{switch(a){case "compositionstart":var da="onCompositionStart";break b;case "compositionend":da="onCompositionEnd";break b;case "compositionupdate":da="onCompositionUpdate";break b}da=void 0}else Hb?Qg(a,c)&&(da="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(da="onCompositionStart");da&&(Ug&&"ko"!==c.locale&&(Hb||"onCompositionStart"!==da?"onCompositionEnd"===da&&Hb&&(ab=Og()):(Za=e,Ee=
"value"in Za?Za.value:Za.textContent,Hb=!0)),va=ed(d,da),0<va.length&&(da=new qh(da,a,null,c,e),g.push({event:da,listeners:va}),ab?da.data=ab:(ab=Rg(c),null!==ab&&(da.data=ab))));if(ab=ek?Ij(a,c):Jj(a,c))d=ed(d,"onBeforeInput"),0<d.length&&(e=new fk("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=ab)}Xg(g,b)})}function tc(a,b,c){return{instance:a,listener:b,currentTarget:c}}function ed(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==
f&&(e=f,f=fc(a,c),null!=f&&d.unshift(tc(a,f,e)),f=fc(a,b),null!=f&&d.push(tc(a,f,e)));a=a.return}return d}function Lb(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}function oh(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,n=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==n&&(h=n,e?(k=fc(c,f),null!=k&&g.unshift(tc(c,k,h))):e||(k=fc(c,f),null!=k&&g.push(tc(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function rh(a){return("string"===
typeof a?a:""+a).replace(gk,"\n").replace(hk,"")}function jd(a,b,c,d){b=rh(b);if(rh(a)!==b&&c)throw Error(m(425));}function kd(){}function Qe(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function ik(a){setTimeout(function(){throw a;})}function Re(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=
e.data,"/$"===c){if(0===d){a.removeChild(e);nc(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);nc(b)}function Ka(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}function sh(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}function ob(a){var b=a[Da];
if(b)return b;for(var c=a.parentNode;c;){if(b=c[Ja]||c[Da]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sh(a);null!==a;){if(c=a[Da])return c;a=sh(a)}return b}a=c;c=a.parentNode}return null}function ec(a){a=a[Da]||a[Ja];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Ib(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(m(33));}function Rc(a){return a[uc]||null}function bb(a){return{current:a}}function v(a,b){0>Mb||(a.current=Se[Mb],Se[Mb]=null,Mb--)}
function y(a,b,c){Mb++;Se[Mb]=a.current;a.current=b}function Nb(a,b){var c=a.type.contextTypes;if(!c)return cb;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function ea(a){a=a.childContextTypes;return null!==a&&void 0!==a}function th(a,b,c){if(J.current!==cb)throw Error(m(168));
y(J,b);y(S,c)}function uh(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(m(108,gj(a)||"Unknown",e));return E({},c,d)}function ld(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||cb;pb=J.current;y(J,a);y(S,S.current);return!0}function vh(a,b,c){var d=a.stateNode;if(!d)throw Error(m(169));c?(a=uh(a,b,pb),d.__reactInternalMemoizedMergedChildContext=a,v(S),v(J),y(J,a)):v(S);
y(S,c)}function wh(a){null===La?La=[a]:La.push(a)}function jk(a){md=!0;wh(a)}function db(){if(!Te&&null!==La){Te=!0;var a=0,b=z;try{var c=La;for(z=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}La=null;md=!1}catch(e){throw null!==La&&(La=La.slice(a+1)),xh(De,db),e;}finally{z=b,Te=!1}}return null}function qb(a,b){Ob[Pb++]=nd;Ob[Pb++]=od;od=a;nd=b}function yh(a,b,c){na[oa++]=Ma;na[oa++]=Na;na[oa++]=rb;rb=a;var d=Ma;a=Na;var e=32-ta(d)-1;d&=~(1<<e);c+=1;var f=32-ta(b)+e;if(30<f){var g=e-e%5;
f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;Ma=1<<32-ta(b)+e|c<<e|d;Na=f+a}else Ma=1<<f|c<<e|d,Na=a}function Ue(a){null!==a.return&&(qb(a,1),yh(a,1,0))}function Ve(a){for(;a===od;)od=Ob[--Pb],Ob[Pb]=null,nd=Ob[--Pb],Ob[Pb]=null;for(;a===rb;)rb=na[--oa],na[oa]=null,Na=na[--oa],na[oa]=null,Ma=na[--oa],na[oa]=null}function zh(a,b){var c=pa(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}function Ah(a,b){switch(a.tag){case 5:var c=
a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,la=a,fa=Ka(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,la=a,fa=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==rb?{id:Ma,overflow:Na}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=pa(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,la=a,fa=null,!0):!1;default:return!1}}function We(a){return 0!==
(a.mode&1)&&0===(a.flags&128)}function Xe(a){if(D){var b=fa;if(b){var c=b;if(!Ah(a,b)){if(We(a))throw Error(m(418));b=Ka(c.nextSibling);var d=la;b&&Ah(a,b)?zh(d,c):(a.flags=a.flags&-4097|2,D=!1,la=a)}}else{if(We(a))throw Error(m(418));a.flags=a.flags&-4097|2;D=!1;la=a}}}function Bh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;la=a}function pd(a){if(a!==la)return!1;if(!D)return Bh(a),D=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Qe(a.type,
a.memoizedProps));if(b&&(b=fa)){if(We(a)){for(a=fa;a;)a=Ka(a.nextSibling);throw Error(m(418));}for(;b;)zh(a,b),b=Ka(b.nextSibling)}Bh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(m(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){fa=Ka(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}fa=null}}else fa=la?Ka(a.stateNode.nextSibling):null;return!0}function Qb(){fa=la=null;D=!1}function Ye(a){null===
wa?wa=[a]:wa.push(a)}function vc(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(m(309));var d=c.stateNode}if(!d)throw Error(m(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(m(284));if(!c._owner)throw Error(m(290,a));}return a}function qd(a,b){a=
Object.prototype.toString.call(b);throw Error(m(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ch(a){var b=a._init;return b(a._payload)}function Dh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=eb(a,b);a.index=
0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ze(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===Bb)return l(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ta&&
Ch(f)===b.type))return d=e(b,c.props),d.ref=vc(a,b,c),d.return=a,d;d=rd(c.type,c.key,c.props,null,a.mode,d);d.ref=vc(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=$e(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function l(a,b,c,d,f){if(null===b||7!==b.tag)return b=sb(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function u(a,b,c){if("string"===
typeof b&&""!==b||"number"===typeof b)return b=Ze(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sd:return c=rd(b.type,b.key,b.props,null,a.mode,c),c.ref=vc(a,null,b),c.return=a,c;case Cb:return b=$e(b,a.mode,c),b.return=a,b;case Ta:var d=b._init;return u(a,d(b._payload),c)}if(cc(b)||ac(b))return b=sb(b,a.mode,c,null),b.return=a,b;qd(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==
e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sd:return c.key===e?k(a,b,c,d):null;case Cb:return c.key===e?n(a,b,c,d):null;case Ta:return e=c._init,r(a,b,e(c._payload),d)}if(cc(c)||ac(c))return null!==e?null:l(a,b,c,d,null);qd(a,c)}return null}function p(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sd:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,
e);case Cb:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e);case Ta:var f=d._init;return p(a,b,c,f(d._payload),e)}if(cc(d)||ac(d))return a=a.get(c)||null,l(b,a,d,e,null);qd(b,d)}return null}function x(e,g,h,k){for(var n=null,m=null,l=g,t=g=0,q=null;null!==l&&t<h.length;t++){l.index>t?(q=l,l=null):q=l.sibling;var A=r(e,l,h[t],k);if(null===A){null===l&&(l=q);break}a&&l&&null===A.alternate&&b(e,l);g=f(A,g,t);null===m?n=A:m.sibling=A;m=A;l=q}if(t===h.length)return c(e,l),D&&qb(e,t),n;if(null===l){for(;t<
h.length;t++)l=u(e,h[t],k),null!==l&&(g=f(l,g,t),null===m?n=l:m.sibling=l,m=l);D&&qb(e,t);return n}for(l=d(e,l);t<h.length;t++)q=p(l,e,t,h[t],k),null!==q&&(a&&null!==q.alternate&&l.delete(null===q.key?t:q.key),g=f(q,g,t),null===m?n=q:m.sibling=q,m=q);a&&l.forEach(function(a){return b(e,a)});D&&qb(e,t);return n}function I(e,g,h,k){var n=ac(h);if("function"!==typeof n)throw Error(m(150));h=n.call(h);if(null==h)throw Error(m(151));for(var l=n=null,q=g,t=g=0,A=null,w=h.next();null!==q&&!w.done;t++,w=
h.next()){q.index>t?(A=q,q=null):A=q.sibling;var x=r(e,q,w.value,k);if(null===x){null===q&&(q=A);break}a&&q&&null===x.alternate&&b(e,q);g=f(x,g,t);null===l?n=x:l.sibling=x;l=x;q=A}if(w.done)return c(e,q),D&&qb(e,t),n;if(null===q){for(;!w.done;t++,w=h.next())w=u(e,w.value,k),null!==w&&(g=f(w,g,t),null===l?n=w:l.sibling=w,l=w);D&&qb(e,t);return n}for(q=d(e,q);!w.done;t++,w=h.next())w=p(q,e,t,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?t:w.key),g=f(w,g,t),null===l?n=w:l.sibling=
w,l=w);a&&q.forEach(function(a){return b(e,a)});D&&qb(e,t);return n}function v(a,d,f,h){"object"===typeof f&&null!==f&&f.type===Bb&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case sd:a:{for(var k=f.key,n=d;null!==n;){if(n.key===k){k=f.type;if(k===Bb){if(7===n.tag){c(a,n.sibling);d=e(n,f.props.children);d.return=a;a=d;break a}}else if(n.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ta&&Ch(k)===n.type){c(a,n.sibling);d=e(n,f.props);d.ref=vc(a,
n,f);d.return=a;a=d;break a}c(a,n);break}else b(a,n);n=n.sibling}f.type===Bb?(d=sb(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=rd(f.type,f.key,f.props,null,a.mode,h),h.ref=vc(a,d,f),h.return=a,a=h)}return g(a);case Cb:a:{for(n=f.key;null!==d;){if(d.key===n)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=$e(f,a.mode,h);d.return=a;
a=d}return g(a);case Ta:return n=f._init,v(a,d,n(f._payload),h)}if(cc(f))return x(a,d,f,h);if(ac(f))return I(a,d,f,h);qd(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ze(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return v}function af(){bf=Rb=td=null}function cf(a,b){b=ud.current;v(ud);a._currentValue=b}function df(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=
b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Sb(a,b){td=a;bf=Rb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ha=!0),a.firstContext=null)}function qa(a){var b=a._currentValue;if(bf!==a)if(a={context:a,memoizedValue:b,next:null},null===Rb){if(null===td)throw Error(m(308));Rb=a;td.dependencies={lanes:0,firstContext:a}}else Rb=Rb.next=a;return b}function ef(a){null===tb?tb=[a]:tb.push(a)}function Eh(a,b,c,d){var e=b.interleaved;
null===e?(c.next=c,ef(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Oa(a,d)}function Oa(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}function ff(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue=
{baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Pa(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function fb(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(p&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return kk(a,c)}e=d.interleaved;null===e?(b.next=b,ef(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Oa(a,c)}function vd(a,b,c){b=
b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;xe(a,c)}}function Gh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,
shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=b;c.lastBaseUpdate=b}function wd(a,b,c,d){var e=a.updateQueue;gb=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,n=k.next;k.next=null;null===g?f=n:g.next=n;g=k;var l=a.alternate;null!==l&&(l=l.updateQueue,h=l.lastBaseUpdate,h!==g&&(null===h?l.firstBaseUpdate=n:h.next=n,l.lastBaseUpdate=k))}if(null!==f){var m=e.baseState;g=0;l=
n=k=null;h=f;do{var r=h.lane,p=h.eventTime;if((d&r)===r){null!==l&&(l=l.next={eventTime:p,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});a:{var x=a,v=h;r=b;p=c;switch(v.tag){case 1:x=v.payload;if("function"===typeof x){m=x.call(p,m,r);break a}m=x;break a;case 3:x.flags=x.flags&-65537|128;case 0:x=v.payload;r="function"===typeof x?x.call(p,m,r):x;if(null===r||void 0===r)break a;m=E({},m,r);break a;case 2:gb=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=
[h]:r.push(h))}else p={eventTime:p,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===l?(n=l=p,k=m):l=l.next=p,g|=r;h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===l&&(k=m);e.baseState=k;e.firstBaseUpdate=n;e.lastBaseUpdate=l;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);ra|=g;a.lanes=g;a.memoizedState=m}}function Hh(a,
b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(m(191,e));e.call(d)}}}function ub(a){if(a===wc)throw Error(m(174));return a}function gf(a,b){y(xc,b);y(yc,a);y(Ea,wc);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:oe(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=oe(b,a)}v(Ea);y(Ea,b)}function Tb(a){v(Ea);v(yc);v(xc)}function Ih(a){ub(xc.current);
var b=ub(Ea.current);var c=oe(b,a.type);b!==c&&(y(yc,a),y(Ea,c))}function hf(a){yc.current===a&&(v(Ea),v(yc))}function xd(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=
b.return;b=b.sibling}return null}function jf(){for(var a=0;a<kf.length;a++)kf[a]._workInProgressVersionPrimary=null;kf.length=0}function V(){throw Error(m(321));}function lf(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!ua(a[c],b[c]))return!1;return!0}function mf(a,b,c,d,e,f){vb=f;C=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;yd.current=null===a||null===a.memoizedState?lk:mk;a=c(d,e);if(zc){f=0;do{zc=!1;Ac=0;if(25<=f)throw Error(m(301));f+=1;N=K=null;b.updateQueue=null;
yd.current=nk;a=c(d,e)}while(zc)}yd.current=zd;b=null!==K&&null!==K.next;vb=0;N=K=C=null;Ad=!1;if(b)throw Error(m(300));return a}function nf(){var a=0!==Ac;Ac=0;return a}function Fa(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===N?C.memoizedState=N=a:N=N.next=a;return N}function sa(){if(null===K){var a=C.alternate;a=null!==a?a.memoizedState:null}else a=K.next;var b=null===N?C.memoizedState:N.next;if(null!==b)N=b,K=a;else{if(null===a)throw Error(m(310));K=a;
a={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null};null===N?C.memoizedState=N=a:N=N.next=a}return N}function Bc(a,b){return"function"===typeof b?b(a):b}function of(a,b,c){b=sa();c=b.queue;if(null===c)throw Error(m(311));c.lastRenderedReducer=a;var d=K,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,n=f;do{var l=n.lane;if((vb&
l)===l)null!==k&&(k=k.next={lane:0,action:n.action,hasEagerState:n.hasEagerState,eagerState:n.eagerState,next:null}),d=n.hasEagerState?n.eagerState:a(d,n.action);else{var u={lane:l,action:n.action,hasEagerState:n.hasEagerState,eagerState:n.eagerState,next:null};null===k?(h=k=u,g=d):k=k.next=u;C.lanes|=l;ra|=l}n=n.next}while(null!==n&&n!==f);null===k?g=d:k.next=h;ua(d,b.memoizedState)||(ha=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=
e.lane,C.lanes|=f,ra|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}function pf(a,b,c){b=sa();c=b.queue;if(null===c)throw Error(m(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);ua(f,b.memoizedState)||(ha=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Jh(a,b,c){}function Kh(a,b,c){c=C;var d=sa(),
e=b(),f=!ua(d.memoizedState,e);f&&(d.memoizedState=e,ha=!0);d=d.queue;qf(Lh.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==N&&N.memoizedState.tag&1){c.flags|=2048;Cc(9,Mh.bind(null,c,d,e,b),void 0,null);if(null===O)throw Error(m(349));0!==(vb&30)||Nh(c,b,e)}return e}function Nh(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=C.updateQueue;null===b?(b={lastEffect:null,stores:null},C.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}function Mh(a,b,c,d){b.value=c;b.getSnapshot=
d;Oh(b)&&Ph(a)}function Lh(a,b,c){return c(function(){Oh(b)&&Ph(a)})}function Oh(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!ua(a,c)}catch(d){return!0}}function Ph(a){var b=Oa(a,1);null!==b&&xa(b,a,1,-1)}function Qh(a){var b=Fa();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bc,lastRenderedState:a};b.queue=a;a=a.dispatch=ok.bind(null,C,a);return[b.memoizedState,a]}function Cc(a,b,c,d){a={tag:a,create:b,
destroy:c,deps:d,next:null};b=C.updateQueue;null===b?(b={lastEffect:null,stores:null},C.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Rh(a){return sa().memoizedState}function Bd(a,b,c,d){var e=Fa();C.flags|=a;e.memoizedState=Cc(1|b,c,void 0,void 0===d?null:d)}function Cd(a,b,c,d){var e=sa();d=void 0===d?null:d;var f=void 0;if(null!==K){var g=K.memoizedState;f=g.destroy;if(null!==d&&lf(d,g.deps)){e.memoizedState=
Cc(b,c,f,d);return}}C.flags|=a;e.memoizedState=Cc(1|b,c,f,d)}function Sh(a,b){return Bd(8390656,8,a,b)}function qf(a,b){return Cd(2048,8,a,b)}function Th(a,b){return Cd(4,2,a,b)}function Uh(a,b){return Cd(4,4,a,b)}function Vh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Wh(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Cd(4,4,Vh.bind(null,b,a),c)}function rf(a,b){}function Xh(a,b){var c=
sa();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&lf(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function Yh(a,b){var c=sa();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&lf(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Zh(a,b,c){if(0===(vb&21))return a.baseState&&(a.baseState=!1,ha=!0),a.memoizedState=c;ua(c,b)||(c=Dg(),C.lanes|=c,ra|=c,a.baseState=!0);return b}function pk(a,b,c){c=z;z=0!==c&&4>c?c:4;a(!0);var d=sf.transition;sf.transition=
{};try{a(!1),b()}finally{z=c,sf.transition=d}}function $h(){return sa().memoizedState}function qk(a,b,c){var d=hb(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(ai(a))bi(b,c);else if(c=Eh(a,b,c,d),null!==c){var e=Z();xa(c,a,d,e);ci(c,b,d)}}function ok(a,b,c){var d=hb(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(ai(a))bi(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,
h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(ua(h,g)){var k=b.interleaved;null===k?(e.next=e,ef(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(n){}finally{}c=Eh(a,b,e,d);null!==c&&(e=Z(),xa(c,a,d,e),ci(c,b,d))}}function ai(a){var b=a.alternate;return a===C||null!==b&&b===C}function bi(a,b){zc=Ad=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function ci(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;xe(a,c)}}function ya(a,b){if(a&&
a.defaultProps){b=E({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function tf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:E({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}function di(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qc(c,d)||!qc(e,f):!0}function ei(a,b,c){var d=!1,e=cb;var f=b.contextType;"object"===typeof f&&
null!==f?f=qa(f):(e=ea(b)?pb:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Nb(a,e):cb);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Dd;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}function fi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&
b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Dd.enqueueReplaceState(b,b.state,null)}function uf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};ff(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=qa(f):(f=ea(b)?pb:J.current,e.context=Nb(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(tf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==
typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Dd.enqueueReplaceState(e,e.state,null),wd(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ub(a,b){try{var c="",d=b;do c+=fj(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+
"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function vf(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function wf(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}function gi(a,b,c){c=Pa(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Ed||(Ed=!0,xf=d);wf(a,b)};return c}function hi(a,b,c){c=Pa(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};
c.callback=function(){wf(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){wf(a,b);"function"!==typeof d&&(null===ib?ib=new Set([this]):ib.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}function ii(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new rk;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=sk.bind(null,a,b,c),b.then(a,a))}function ji(a){do{var b;
if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}function ki(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=Pa(-1,1),b.tag=2,fb(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}function aa(a,b,c,d){b.child=null===a?li(b,null,c,d):Vb(b,a.child,c,d)}function mi(a,b,c,d,e){c=c.render;var f=b.ref;Sb(b,e);d=mf(a,b,c,d,f,
e);c=nf();if(null!==a&&!ha)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Qa(a,b,e);D&&c&&Ue(b);b.flags|=1;aa(a,b,d,e);return b.child}function ni(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!yf(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,oi(a,b,f,d,e);a=rd(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:qc;if(c(g,d)&&a.ref===
b.ref)return Qa(a,b,e)}b.flags|=1;a=eb(f,d);a.ref=b.ref;a.return=b;return b.child=a}function oi(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(qc(f,d)&&a.ref===b.ref)if(ha=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(ha=!0);else return b.lanes=a.lanes,Qa(a,b,e)}return zf(a,b,c,d,e)}function pi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},y(Ga,ba),ba|=c;
else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,y(Ga,ba),ba|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;y(Ga,ba);ba|=d}else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,y(Ga,ba),ba|=d;aa(a,b,e,c);return b.child}function qi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function zf(a,
b,c,d,e){var f=ea(c)?pb:J.current;f=Nb(b,f);Sb(b,e);c=mf(a,b,c,d,f,e);d=nf();if(null!==a&&!ha)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Qa(a,b,e);D&&d&&Ue(b);b.flags|=1;aa(a,b,c,e);return b.child}function ri(a,b,c,d,e){if(ea(c)){var f=!0;ld(b)}else f=!1;Sb(b,e);if(null===b.stateNode)Fd(a,b),ei(b,c,d),uf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,n=c.contextType;"object"===typeof n&&null!==n?n=qa(n):(n=ea(c)?pb:J.current,n=Nb(b,
n));var l=c.getDerivedStateFromProps,m="function"===typeof l||"function"===typeof g.getSnapshotBeforeUpdate;m||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==n)&&fi(b,g,d,n);gb=!1;var r=b.memoizedState;g.state=r;wd(b,d,g,e);k=b.memoizedState;h!==d||r!==k||S.current||gb?("function"===typeof l&&(tf(b,c,l,d),k=b.memoizedState),(h=gb||di(b,c,h,d,r,k,n))?(m||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||
("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=n,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;Fh(a,b);h=b.memoizedProps;n=b.type===b.elementType?h:ya(b.type,h);g.props=
n;m=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=qa(k):(k=ea(c)?pb:J.current,k=Nb(b,k));var p=c.getDerivedStateFromProps;(l="function"===typeof p||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==m||r!==k)&&fi(b,g,d,k);gb=!1;r=b.memoizedState;g.state=r;wd(b,d,g,e);var x=b.memoizedState;h!==m||r!==x||S.current||gb?("function"===typeof p&&(tf(b,c,p,d),x=b.memoizedState),
(n=gb||di(b,c,n,d,r,x,k)||!1)?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=
4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=n):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return Af(a,b,c,d,f,e)}function Af(a,b,c,d,e,f){qi(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&vh(b,c,!1),
Qa(a,b,f);d=b.stateNode;tk.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Vb(b,a.child,null,f),b.child=Vb(b,null,h,f)):aa(a,b,h,f);b.memoizedState=d.state;e&&vh(b,c,!0);return b.child}function si(a){var b=a.stateNode;b.pendingContext?th(a,b.pendingContext,b.pendingContext!==b.context):b.context&&th(a,b.context,!1);gf(a,b.containerInfo)}function ti(a,b,c,d,e){Qb();Ye(e);b.flags|=256;aa(a,b,c,d);return b.child}function Bf(a){return{baseLanes:a,
cachePool:null,transitions:null}}function ui(a,b,c){var d=b.pendingProps,e=F.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;y(F,e&1);if(null===a){Xe(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==
f?(f.childLanes=0,f.pendingProps=g):f=Gd(g,d,0,null),a=sb(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=Bf(c),b.memoizedState=Cf,a):Df(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return uk(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=eb(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=eb(h,f):(f=
sb(f,g,c,null),f.flags|=2);f.return=b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?Bf(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=Cf;return d}f=a.child;a=f.sibling;d=eb(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function Df(a,b,c){b=Gd({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function Hd(a,b,c,d){null!==d&&Ye(d);Vb(b,a.child,null,c);a=Df(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}function uk(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=vf(Error(m(422))),Hd(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=Gd({mode:"visible",children:d.children},e,0,null);f=sb(f,e,g,null);f.flags|=2;d.return=
b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Vb(b,a.child,null,g);b.child.memoizedState=Bf(g);b.memoizedState=Cf;return f}if(0===(b.mode&1))return Hd(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;if(d)var h=d.dgst;d=h;f=Error(m(419));d=vf(f,d,void 0);return Hd(a,b,g,d)}h=0!==(g&a.childLanes);if(ha||h){d=O;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=
32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;0!==e&&e!==f.retryLane&&(f.retryLane=e,Oa(a,e),xa(d,a,e,-1))}Ef();d=vf(Error(m(421)));return Hd(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vk.bind(null,a),e._reactRetry=b,null;a=f.treeContext;fa=Ka(e.nextSibling);la=b;D=!0;wa=null;null!==a&&(na[oa++]=Ma,na[oa++]=Na,na[oa++]=rb,Ma=a.id,Na=a.overflow,rb=b);b=Df(b,d.children);b.flags|=4096;return b}function vi(a,b,c){a.lanes|=b;var d=a.alternate;
null!==d&&(d.lanes|=b);df(a.return,b,c)}function Ff(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}function wi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;aa(a,b,d.children,c);d=F.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&
vi(a,c,b);else if(19===a.tag)vi(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(F,d);if(0===(b.mode&1))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===xd(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ff(b,!1,e,c,f);break;case "backwards":c=
null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===xd(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ff(b,!0,c,null,f);break;case "together":Ff(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function Fd(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Qa(a,b,c){null!==a&&(b.dependencies=a.dependencies);ra|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(m(153));if(null!==
b.child){a=b.child;c=eb(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=eb(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}function wk(a,b,c){switch(b.tag){case 3:si(b);Qb();break;case 5:Ih(b);break;case 1:ea(b.type)&&ld(b);break;case 4:gf(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;y(ud,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return y(F,F.current&
1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return ui(a,b,c);y(F,F.current&1);a=Qa(a,b,c);return null!==a?a.sibling:null}y(F,F.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return wi(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);y(F,F.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,pi(a,b,c)}return Qa(a,b,c)}function Dc(a,b){if(!D)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==
b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}function W(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,
d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}function xk(a,b,c){var d=b.pendingProps;Ve(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(b),null;case 1:return ea(b.type)&&(v(S),v(J)),W(b),null;case 3:d=b.stateNode;Tb();v(S);v(J);jf();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)pd(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&
256)||(b.flags|=1024,null!==wa&&(Gf(wa),wa=null));xi(a,b);W(b);return null;case 5:hf(b);var e=ub(xc.current);c=b.type;if(null!==a&&null!=b.stateNode)yk(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(m(166));W(b);return null}a=ub(Ea.current);if(pd(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Da]=b;d[uc]=f;a=0!==(b.mode&1);switch(c){case "dialog":B("cancel",d);B("close",d);break;case "iframe":case "object":case "embed":B("load",d);break;
case "video":case "audio":for(e=0;e<Ec.length;e++)B(Ec[e],d);break;case "source":B("error",d);break;case "img":case "image":case "link":B("error",d);B("load",d);break;case "details":B("toggle",d);break;case "input":kg(d,f);B("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};B("invalid",d);break;case "textarea":ng(d,f),B("invalid",d)}pe(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&
jd(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&jd(d.textContent,h,a),e=["children",""+h]):$b.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&B("scroll",d)}switch(c){case "input":Pc(d);mg(d,f,!0);break;case "textarea":Pc(d);pg(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=kd)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===
a&&(a=qg(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Da]=b;a[uc]=d;zk(a,b,!1,!1);b.stateNode=a;a:{g=qe(c,d);switch(c){case "dialog":B("cancel",a);B("close",a);e=d;break;case "iframe":case "object":case "embed":B("load",a);e=d;break;
case "video":case "audio":for(e=0;e<Ec.length;e++)B(Ec[e],a);e=d;break;case "source":B("error",a);e=d;break;case "img":case "image":case "link":B("error",a);B("load",a);e=d;break;case "details":B("toggle",a);e=d;break;case "input":kg(a,d);e=ke(a,d);B("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=E({},d,{value:void 0});B("invalid",a);break;case "textarea":ng(a,d);e=ne(a,d);B("invalid",a);break;default:e=d}pe(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=
h[f];"style"===f?sg(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&yi(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&Fc(a,k):"number"===typeof k&&Fc(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&($b.hasOwnProperty(f)?null!=k&&"onScroll"===f&&B("scroll",a):null!=k&&$d(a,f,k,g))}switch(c){case "input":Pc(a);mg(a,d,!1);break;case "textarea":Pc(a);pg(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Ua(d.value));
break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?Db(a,!!d.multiple,f,!1):null!=d.defaultValue&&Db(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=kd)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}W(b);return null;case 6:if(a&&null!=b.stateNode)Ak(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===
b.stateNode)throw Error(m(166));c=ub(xc.current);ub(Ea.current);if(pd(b)){d=b.stateNode;c=b.memoizedProps;d[Da]=b;if(f=d.nodeValue!==c)if(a=la,null!==a)switch(a.tag){case 3:jd(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&jd(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Da]=b,b.stateNode=d}W(b);return null;case 13:v(F);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(D&&
null!==fa&&0!==(b.mode&1)&&0===(b.flags&128)){for(f=fa;f;)f=Ka(f.nextSibling);Qb();b.flags|=98560;f=!1}else if(f=pd(b),null!==d&&null!==d.dehydrated){if(null===a){if(!f)throw Error(m(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(m(317));f[Da]=b}else Qb(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;W(b);f=!1}else null!==wa&&(Gf(wa),wa=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&
d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(F.current&1)?0===L&&(L=3):Ef()));null!==b.updateQueue&&(b.flags|=4);W(b);return null;case 4:return Tb(),xi(a,b),null===a&&sc(b.stateNode.containerInfo),W(b),null;case 10:return cf(b.type._context),W(b),null;case 17:return ea(b.type)&&(v(S),v(J)),W(b),null;case 19:v(F);f=b.memoizedState;if(null===f)return W(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dc(f,!1);else{if(0!==L||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=
xd(a);if(null!==g){b.flags|=128;Dc(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,
f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;y(F,F.current&1|2);return b.child}a=a.sibling}null!==f.tail&&P()>Hf&&(b.flags|=128,d=!0,Dc(f,!1),b.lanes=4194304)}else{if(!d)if(a=xd(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dc(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!D)return W(b),null}else 2*P()-f.renderingStartTime>Hf&&1073741824!==c&&(b.flags|=
128,d=!0,Dc(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=b,f.tail=b.sibling,f.renderingStartTime=P(),b.sibling=null,c=F.current,y(F,d?c&1|2:c&1),b;W(b);return null;case 22:case 23:return ba=Ga.current,v(Ga),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(ba&1073741824)&&(W(b),b.subtreeFlags&6&&(b.flags|=8192)):W(b),null;case 24:return null;
case 25:return null}throw Error(m(156,b.tag));}function Bk(a,b,c){Ve(b);switch(b.tag){case 1:return ea(b.type)&&(v(S),v(J)),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Tb(),v(S),v(J),jf(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return hf(b),null;case 13:v(F);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(m(340));Qb()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return v(F),null;case 4:return Tb(),
null;case 10:return cf(b.type._context),null;case 22:case 23:return ba=Ga.current,v(Ga),null;case 24:return null;default:return null}}function Wb(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){G(a,b,d)}else c.current=null}function If(a,b,c){try{c()}catch(d){G(a,b,d)}}function Ck(a,b){Jf=Zc;a=ch();if(Ie(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();
if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(M){c=null;break a}var g=0,h=-1,k=-1,n=0,q=0,u=a,r=null;b:for(;;){for(var p;;){u!==c||0!==e&&3!==u.nodeType||(h=g+e);u!==f||0!==d&&3!==u.nodeType||(k=g+d);3===u.nodeType&&(g+=u.nodeValue.length);if(null===(p=u.firstChild))break;r=u;u=p}for(;;){if(u===a)break b;r===c&&++n===e&&(h=g);r===f&&++q===d&&(k=g);if(null!==(p=u.nextSibling))break;u=r;r=u.parentNode}u=p}c=-1===h||-1===k?null:
{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Kf={focusedElem:a,selectionRange:c};Zc=!1;for(l=b;null!==l;)if(b=l,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,l=a;else for(;null!==l;){b=l;try{var x=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;case 1:if(null!==x){var v=x.memoizedProps,z=x.memoizedState,w=b.stateNode,A=w.getSnapshotBeforeUpdate(b.elementType===b.type?v:ya(b.type,v),z);w.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var t=
b.stateNode.containerInfo;1===t.nodeType?t.textContent="":9===t.nodeType&&t.documentElement&&t.removeChild(t.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163));}}catch(M){G(b,b.return,M)}a=b.sibling;if(null!==a){a.return=b.return;l=a;break}l=b.return}x=zi;zi=!1;return x}function Gc(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&If(b,c,f)}e=e.next}while(e!==d)}}
function Id(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Lf(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}function Ai(a){var b=a.alternate;null!==b&&(a.alternate=null,Ai(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Da],delete b[uc],delete b[Me],delete b[Dk],
delete b[Ek]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Bi(a){return 5===a.tag||3===a.tag||4===a.tag}function Ci(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Bi(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&
2))return a.stateNode}}function Mf(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=kd));else if(4!==d&&(a=a.child,null!==a))for(Mf(a,b,c),a=a.sibling;null!==a;)Mf(a,b,c),a=a.sibling}function Nf(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);
else if(4!==d&&(a=a.child,null!==a))for(Nf(a,b,c),a=a.sibling;null!==a;)Nf(a,b,c),a=a.sibling}function jb(a,b,c){for(c=c.child;null!==c;)Di(a,b,c),c=c.sibling}function Di(a,b,c){if(Ca&&"function"===typeof Ca.onCommitFiberUnmount)try{Ca.onCommitFiberUnmount(Uc,c)}catch(h){}switch(c.tag){case 5:X||Wb(c,b);case 6:var d=T,e=za;T=null;jb(a,b,c);T=d;za=e;null!==T&&(za?(a=T,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):T.removeChild(c.stateNode));break;case 18:null!==T&&(za?
(a=T,c=c.stateNode,8===a.nodeType?Re(a.parentNode,c):1===a.nodeType&&Re(a,c),nc(a)):Re(T,c.stateNode));break;case 4:d=T;e=za;T=c.stateNode.containerInfo;za=!0;jb(a,b,c);T=d;za=e;break;case 0:case 11:case 14:case 15:if(!X&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?If(c,b,g):0!==(f&4)&&If(c,b,g));e=e.next}while(e!==d)}jb(a,b,c);break;case 1:if(!X&&(Wb(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=
c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){G(c,b,h)}jb(a,b,c);break;case 21:jb(a,b,c);break;case 22:c.mode&1?(X=(d=X)||null!==c.memoizedState,jb(a,b,c),X=d):jb(a,b,c);break;default:jb(a,b,c)}}function Ei(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Fk);b.forEach(function(b){var d=Gk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function Aa(a,b,c){c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=
c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:T=h.stateNode;za=!1;break a;case 3:T=h.stateNode.containerInfo;za=!0;break a;case 4:T=h.stateNode.containerInfo;za=!0;break a}h=h.return}if(null===T)throw Error(m(160));Di(f,g,e);T=null;za=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(n){G(e,b,n)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)Fi(b,a),b=b.sibling}function Fi(a,b,c){var d=a.alternate;c=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Aa(b,a);
Ha(a);if(c&4){try{Gc(3,a,a.return),Id(3,a)}catch(I){G(a,a.return,I)}try{Gc(5,a,a.return)}catch(I){G(a,a.return,I)}}break;case 1:Aa(b,a);Ha(a);c&512&&null!==d&&Wb(d,d.return);break;case 5:Aa(b,a);Ha(a);c&512&&null!==d&&Wb(d,d.return);if(a.flags&32){var e=a.stateNode;try{Fc(e,"")}catch(I){G(a,a.return,I)}}if(c&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==d?d.memoizedProps:f,h=a.type,k=a.updateQueue;a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&lg(e,f);
qe(h,g);var n=qe(h,f);for(g=0;g<k.length;g+=2){var q=k[g],u=k[g+1];"style"===q?sg(e,u):"dangerouslySetInnerHTML"===q?yi(e,u):"children"===q?Fc(e,u):$d(e,q,u,n)}switch(h){case "input":le(e,f);break;case "textarea":og(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var p=f.value;null!=p?Db(e,!!f.multiple,p,!1):r!==!!f.multiple&&(null!=f.defaultValue?Db(e,!!f.multiple,f.defaultValue,!0):Db(e,!!f.multiple,f.multiple?[]:"",!1))}e[uc]=f}catch(I){G(a,a.return,
I)}}break;case 6:Aa(b,a);Ha(a);if(c&4){if(null===a.stateNode)throw Error(m(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(I){G(a,a.return,I)}}break;case 3:Aa(b,a);Ha(a);if(c&4&&null!==d&&d.memoizedState.isDehydrated)try{nc(b.containerInfo)}catch(I){G(a,a.return,I)}break;case 4:Aa(b,a);Ha(a);break;case 13:Aa(b,a);Ha(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||null!==e.alternate&&null!==e.alternate.memoizedState||(Of=P()));c&4&&Ei(a);break;case 22:q=
null!==d&&null!==d.memoizedState;a.mode&1?(X=(n=X)||q,Aa(b,a),X=n):Aa(b,a);Ha(a);if(c&8192){n=null!==a.memoizedState;if((a.stateNode.isHidden=n)&&!q&&0!==(a.mode&1))for(l=a,q=a.child;null!==q;){for(u=l=q;null!==l;){r=l;p=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Gc(4,r,r.return);break;case 1:Wb(r,r.return);var x=r.stateNode;if("function"===typeof x.componentWillUnmount){c=r;b=r.return;try{d=c,x.props=d.memoizedProps,x.state=d.memoizedState,x.componentWillUnmount()}catch(I){G(c,b,I)}}break;
case 5:Wb(r,r.return);break;case 22:if(null!==r.memoizedState){Gi(u);continue}}null!==p?(p.return=r,l=p):Gi(u)}q=q.sibling}a:for(q=null,u=a;;){if(5===u.tag){if(null===q){q=u;try{e=u.stateNode,n?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=u.stateNode,k=u.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=rg("display",g))}catch(I){G(a,a.return,I)}}}else if(6===u.tag){if(null===q)try{u.stateNode.nodeValue=
n?"":u.memoizedProps}catch(I){G(a,a.return,I)}}else if((22!==u.tag&&23!==u.tag||null===u.memoizedState||u===a)&&null!==u.child){u.child.return=u;u=u.child;continue}if(u===a)break a;for(;null===u.sibling;){if(null===u.return||u.return===a)break a;q===u&&(q=null);u=u.return}q===u&&(q=null);u.sibling.return=u.return;u=u.sibling}}break;case 19:Aa(b,a);Ha(a);c&4&&Ei(a);break;case 21:break;default:Aa(b,a),Ha(a)}}function Ha(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Bi(c)){var d=c;
break a}c=c.return}throw Error(m(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(Fc(e,""),d.flags&=-33);var f=Ci(a);Nf(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Ci(a);Mf(a,h,g);break;default:throw Error(m(161));}}catch(k){G(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function Hk(a,b,c){l=a;Hi(a,b,c)}function Hi(a,b,c){for(var d=0!==(a.mode&1);null!==l;){var e=l,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jd;if(!g){var h=e.alternate,k=null!==h&&null!==
h.memoizedState||X;h=Jd;var n=X;Jd=g;if((X=k)&&!n)for(l=e;null!==l;)g=l,k=g.child,22===g.tag&&null!==g.memoizedState?Ii(e):null!==k?(k.return=g,l=k):Ii(e);for(;null!==f;)l=f,Hi(f,b,c),f=f.sibling;l=e;Jd=h;X=n}Ji(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,l=f):Ji(a,b,c)}}function Ji(a,b,c){for(;null!==l;){b=l;if(0!==(b.flags&8772)){c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:X||Id(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!X)if(null===c)d.componentDidMount();
else{var e=b.elementType===b.type?c.memoizedProps:ya(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&Hh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=b.child.stateNode;break;case 1:c=b.child.stateNode}Hh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&
c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var n=b.alternate;if(null!==n){var q=n.memoizedState;if(null!==q){var p=q.dehydrated;null!==p&&nc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163));}X||b.flags&512&&Lf(b)}catch(r){G(b,b.return,r)}}if(b===a){l=null;break}c=b.sibling;if(null!==c){c.return=b.return;l=c;break}l=b.return}}function Gi(a){for(;null!==l;){var b=l;if(b===
a){l=null;break}var c=b.sibling;if(null!==c){c.return=b.return;l=c;break}l=b.return}}function Ii(a){for(;null!==l;){var b=l;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Id(4,b)}catch(k){G(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){G(b,e,k)}}var f=b.return;try{Lf(b)}catch(k){G(b,f,k)}break;case 5:var g=b.return;try{Lf(b)}catch(k){G(b,g,k)}}}catch(k){G(b,b.return,k)}if(b===a){l=null;break}var h=b.sibling;
if(null!==h){h.return=b.return;l=h;break}l=b.return}}function Hc(){Hf=P()+500}function Z(){return 0!==(p&6)?P():-1!==Kd?Kd:Kd=P()}function hb(a){if(0===(a.mode&1))return 1;if(0!==(p&2)&&0!==U)return U&-U;if(null!==Ik.transition)return 0===Ld&&(Ld=Dg()),Ld;a=z;if(0!==a)return a;a=window.event;a=void 0===a?16:Lg(a.type);return a}function xa(a,b,c,d){if(50<Ic)throw Ic=0,Pf=null,Error(m(185));ic(a,c,d);if(0===(p&2)||a!==O)a===O&&(0===(p&2)&&(Md|=c),4===L&&kb(a,U)),ia(a,d),1===c&&0===p&&0===(b.mode&1)&&
(Hc(),md&&db())}function ia(a,b){var c=a.callbackNode;tj(a,b);var d=Vc(a,a===O?U:0);if(0===d)null!==c&&Ki(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&Ki(c);if(1===b)0===a.tag?jk(Li.bind(null,a)):wh(Li.bind(null,a)),Jk(function(){0===(p&6)&&db()}),c=null;else{switch(Eg(d)){case 1:c=De;break;case 4:c=Mg;break;case 16:c=ad;break;case 536870912:c=Ng;break;default:c=ad}c=Mi(c,Ni.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}function Ni(a,b){Kd=-1;
Ld=0;if(0!==(p&6))throw Error(m(327));var c=a.callbackNode;if(Xb()&&a.callbackNode!==c)return null;var d=Vc(a,a===O?U:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Nd(a,d);else{b=d;var e=p;p|=2;var f=Oi();if(O!==a||U!==b)Ra=null,Hc(),wb(a,b);do try{Kk();break}catch(h){Pi(a,h)}while(1);af();Od.current=f;p=e;null!==H?b=0:(O=null,U=0,b=L)}if(0!==b){2===b&&(e=ve(a),0!==e&&(d=e,b=Qf(a,e)));if(1===b)throw c=Jc,wb(a,0),kb(a,d),ia(a,P()),c;if(6===b)kb(a,d);else{e=a.current.alternate;
if(0===(d&30)&&!Lk(e)&&(b=Nd(a,d),2===b&&(f=ve(a),0!==f&&(d=f,b=Qf(a,f))),1===b))throw c=Jc,wb(a,0),kb(a,d),ia(a,P()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(m(345));case 2:xb(a,ja,Ra);break;case 3:kb(a,d);if((d&130023424)===d&&(b=Of+500-P(),10<b)){if(0!==Vc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){Z();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Rf(xb.bind(null,a,ja,Ra),b);break}xb(a,ja,Ra);break;case 4:kb(a,d);if((d&4194240)===d)break;b=a.eventTimes;
for(e=-1;0<d;){var g=31-ta(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=P()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*Mk(d/1960))-d;if(10<d){a.timeoutHandle=Rf(xb.bind(null,a,ja,Ra),d);break}xb(a,ja,Ra);break;case 5:xb(a,ja,Ra);break;default:throw Error(m(329));}}}ia(a,P());return a.callbackNode===c?Ni.bind(null,a):null}function Qf(a,b){var c=Kc;a.current.memoizedState.isDehydrated&&(wb(a,b).flags|=256);a=Nd(a,b);2!==a&&(b=ja,ja=c,null!==b&&Gf(b));return a}function Gf(a){null===
ja?ja=a:ja.push.apply(ja,a)}function Lk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!ua(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}function kb(a,b){b&=~Sf;b&=~Md;a.suspendedLanes|=b;a.pingedLanes&=
~b;for(a=a.expirationTimes;0<b;){var c=31-ta(b),d=1<<c;a[c]=-1;b&=~d}}function Li(a){if(0!==(p&6))throw Error(m(327));Xb();var b=Vc(a,0);if(0===(b&1))return ia(a,P()),null;var c=Nd(a,b);if(0!==a.tag&&2===c){var d=ve(a);0!==d&&(b=d,c=Qf(a,d))}if(1===c)throw c=Jc,wb(a,0),kb(a,b),ia(a,P()),c;if(6===c)throw Error(m(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;xb(a,ja,Ra);ia(a,P());return null}function Tf(a,b){var c=p;p|=1;try{return a(b)}finally{p=c,0===p&&(Hc(),md&&db())}}function yb(a){null!==
lb&&0===lb.tag&&0===(p&6)&&Xb();var b=p;p|=1;var c=ca.transition,d=z;try{if(ca.transition=null,z=1,a)return a()}finally{z=d,ca.transition=c,p=b,0===(p&6)&&db()}}function wb(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Nk(c));if(null!==H)for(c=H.return;null!==c;){var d=c;Ve(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&(v(S),v(J));break;case 3:Tb();v(S);v(J);jf();break;case 5:hf(d);break;case 4:Tb();break;case 13:v(F);break;
case 19:v(F);break;case 10:cf(d.type._context);break;case 22:case 23:ba=Ga.current,v(Ga)}c=c.return}O=a;H=a=eb(a.current,null);U=ba=b;L=0;Jc=null;Sf=Md=ra=0;ja=Kc=null;if(null!==tb){for(b=0;b<tb.length;b++)if(c=tb[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}tb=null}return a}function Pi(a,b){do{var c=H;try{af();yd.current=zd;if(Ad){for(var d=C.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ad=
!1}vb=0;N=K=C=null;zc=!1;Ac=0;Uf.current=null;if(null===c||null===c.return){L=1;Jc=b;H=null;break}a:{var f=a,g=c.return,h=c,k=b;b=U;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var n=k,l=h,p=l.tag;if(0===(l.mode&1)&&(0===p||11===p||15===p)){var r=l.alternate;r?(l.updateQueue=r.updateQueue,l.memoizedState=r.memoizedState,l.lanes=r.lanes):(l.updateQueue=null,l.memoizedState=null)}var v=ji(g);if(null!==v){v.flags&=-257;ki(v,g,h,f,b);v.mode&1&&ii(f,n,b);b=v;k=n;var x=b.updateQueue;
if(null===x){var z=new Set;z.add(k);b.updateQueue=z}else x.add(k);break a}else{if(0===(b&1)){ii(f,n,b);Ef();break a}k=Error(m(426))}}else if(D&&h.mode&1){var y=ji(g);if(null!==y){0===(y.flags&65536)&&(y.flags|=256);ki(y,g,h,f,b);Ye(Ub(k,h));break a}}f=k=Ub(k,h);4!==L&&(L=2);null===Kc?Kc=[f]:Kc.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;b&=-b;f.lanes|=b;var w=gi(f,k,b);Gh(f,w);break a;case 1:h=k;var A=f.type,t=f.stateNode;if(0===(f.flags&128)&&("function"===typeof A.getDerivedStateFromError||
null!==t&&"function"===typeof t.componentDidCatch&&(null===ib||!ib.has(t)))){f.flags|=65536;b&=-b;f.lanes|=b;var B=hi(f,h,b);Gh(f,B);break a}}f=f.return}while(null!==f)}Qi(c)}catch(ma){b=ma;H===c&&null!==c&&(H=c=c.return);continue}break}while(1)}function Oi(){var a=Od.current;Od.current=zd;return null===a?zd:a}function Ef(){if(0===L||3===L||2===L)L=4;null===O||0===(ra&268435455)&&0===(Md&268435455)||kb(O,U)}function Nd(a,b){var c=p;p|=2;var d=Oi();if(O!==a||U!==b)Ra=null,wb(a,b);do try{Ok();break}catch(e){Pi(a,
e)}while(1);af();p=c;Od.current=d;if(null!==H)throw Error(m(261));O=null;U=0;return L}function Ok(){for(;null!==H;)Ri(H)}function Kk(){for(;null!==H&&!Pk();)Ri(H)}function Ri(a){var b=Qk(a.alternate,a,ba);a.memoizedProps=a.pendingProps;null===b?Qi(a):H=b;Uf.current=null}function Qi(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=xk(c,b,ba),null!==c){H=c;return}}else{c=Bk(c,b);if(null!==c){c.flags&=32767;H=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;
else{L=6;H=null;return}}b=b.sibling;if(null!==b){H=b;return}H=b=a}while(null!==b);0===L&&(L=5)}function xb(a,b,c){var d=z,e=ca.transition;try{ca.transition=null,z=1,Rk(a,b,c,d)}finally{ca.transition=e,z=d}return null}function Rk(a,b,c,d){do Xb();while(null!==lb);if(0!==(p&6))throw Error(m(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(m(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;
uj(a,f);a===O&&(H=O=null,U=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||Pd||(Pd=!0,Mi(ad,function(){Xb();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ca.transition;ca.transition=null;var g=z;z=1;var h=p;p|=4;Uf.current=null;Ck(a,c);Fi(c,a);Tj(Kf);Zc=!!Jf;Kf=Jf=null;a.current=c;Hk(c,a,e);Sk();p=h;z=g;ca.transition=f}else a.current=c;Pd&&(Pd=!1,lb=a,Qd=e);f=a.pendingLanes;0===f&&(ib=null);oj(c.stateNode,d);ia(a,P());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=
b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Ed)throw Ed=!1,a=xf,xf=null,a;0!==(Qd&1)&&0!==a.tag&&Xb();f=a.pendingLanes;0!==(f&1)?a===Pf?Ic++:(Ic=0,Pf=a):Ic=0;db();return null}function Xb(){if(null!==lb){var a=Eg(Qd),b=ca.transition,c=z;try{ca.transition=null;z=16>a?16:a;if(null===lb)var d=!1;else{a=lb;lb=null;Qd=0;if(0!==(p&6))throw Error(m(331));var e=p;p|=4;for(l=a.current;null!==l;){var f=l,g=f.child;if(0!==(l.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var n=
h[k];for(l=n;null!==l;){var q=l;switch(q.tag){case 0:case 11:case 15:Gc(8,q,f)}var u=q.child;if(null!==u)u.return=q,l=u;else for(;null!==l;){q=l;var r=q.sibling,v=q.return;Ai(q);if(q===n){l=null;break}if(null!==r){r.return=v;l=r;break}l=v}}}var x=f.alternate;if(null!==x){var y=x.child;if(null!==y){x.child=null;do{var C=y.sibling;y.sibling=null;y=C}while(null!==y)}}l=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,l=g;else b:for(;null!==l;){f=l;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Gc(9,
f,f.return)}var w=f.sibling;if(null!==w){w.return=f.return;l=w;break b}l=f.return}}var A=a.current;for(l=A;null!==l;){g=l;var t=g.child;if(0!==(g.subtreeFlags&2064)&&null!==t)t.return=g,l=t;else b:for(g=A;null!==l;){h=l;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Id(9,h)}}catch(ma){G(h,h.return,ma)}if(h===g){l=null;break b}var B=h.sibling;if(null!==B){B.return=h.return;l=B;break b}l=h.return}}p=e;db();if(Ca&&"function"===typeof Ca.onPostCommitFiberRoot)try{Ca.onPostCommitFiberRoot(Uc,
a)}catch(ma){}d=!0}return d}finally{z=c,ca.transition=b}}return!1}function Si(a,b,c){b=Ub(c,b);b=gi(a,b,1);a=fb(a,b,1);b=Z();null!==a&&(ic(a,1,b),ia(a,b))}function G(a,b,c){if(3===a.tag)Si(a,a,c);else for(;null!==b;){if(3===b.tag){Si(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===ib||!ib.has(d))){a=Ub(c,a);a=hi(b,a,1);b=fb(b,a,1);a=Z();null!==b&&(ic(b,1,a),ia(b,a));break}}b=b.return}}function sk(a,
b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Z();a.pingedLanes|=a.suspendedLanes&c;O===a&&(U&c)===c&&(4===L||3===L&&(U&130023424)===U&&500>P()-Of?wb(a,0):Sf|=c);ia(a,b)}function Ti(a,b){0===b&&(0===(a.mode&1)?b=1:(b=Rd,Rd<<=1,0===(Rd&130023424)&&(Rd=4194304)));var c=Z();a=Oa(a,b);null!==a&&(ic(a,b,c),ia(a,c))}function vk(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Ti(a,c)}function Gk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);
break;case 19:d=a.stateNode;break;default:throw Error(m(314));}null!==d&&d.delete(b);Ti(a,c)}function Mi(a,b){return xh(a,b)}function Tk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function yf(a){a=
a.prototype;return!(!a||!a.isReactComponent)}function Uk(a){if("function"===typeof a)return yf(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===ie)return 11;if(a===je)return 14}return 2}function eb(a,b){var c=a.alternate;null===c?(c=pa(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=
a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function rd(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)yf(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Bb:return sb(c.children,e,f,b);case fe:g=8;e|=8;break;case ee:return a=pa(12,c,b,e|2),a.elementType=ee,a.lanes=f,a;case ge:return a=
pa(13,c,b,e),a.elementType=ge,a.lanes=f,a;case he:return a=pa(19,c,b,e),a.elementType=he,a.lanes=f,a;case Ui:return Gd(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case hg:g=10;break a;case gg:g=9;break a;case ie:g=11;break a;case je:g=14;break a;case Ta:g=16;d=null;break a}throw Error(m(130,null==a?a:typeof a,""));}b=pa(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function sb(a,b,c,d){a=pa(7,a,d,b);a.lanes=c;return a}function Gd(a,b,c,d){a=pa(22,a,d,b);a.elementType=
Ui;a.lanes=c;a.stateNode={isHidden:!1};return a}function Ze(a,b,c){a=pa(6,a,null,b);a.lanes=c;return a}function $e(a,b,c){b=pa(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Vk(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=
0;this.eventTimes=we(0);this.expirationTimes=we(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=we(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=null}function Vf(a,b,c,d,e,f,g,h,k,l){a=new Vk(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=pa(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,
pendingSuspenseBoundaries:null};ff(f);return a}function Wk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Cb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function Vi(a){if(!a)return cb;a=a._reactInternals;a:{if(nb(a)!==a||1!==a.tag)throw Error(m(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(ea(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(m(171));
}if(1===a.tag){var c=a.type;if(ea(c))return uh(a,c,b)}return b}function Wi(a,b,c,d,e,f,g,h,k,l){a=Vf(c,d,!0,a,e,f,g,h,k);a.context=Vi(null);c=a.current;d=Z();e=hb(c);f=Pa(d,e);f.callback=void 0!==b&&null!==b?b:null;fb(c,f,e);a.current.lanes=e;ic(a,e,d);ia(a,d);return a}function Sd(a,b,c,d){var e=b.current,f=Z(),g=hb(e);c=Vi(c);null===b.context?b.context=c:b.pendingContext=c;b=Pa(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=fb(e,b,g);null!==a&&(xa(a,e,g,f),vd(a,e,g));return g}
function Td(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Xi(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function Wf(a,b){Xi(a,b);(a=a.alternate)&&Xi(a,b)}function Xk(a){a=Bg(a);return null===a?null:a.stateNode}function Yk(a){return null}function Xf(a){this._internalRoot=a}function Ud(a){this._internalRoot=a}function Yf(a){return!(!a||1!==a.nodeType&&9!==
a.nodeType&&11!==a.nodeType)}function Vd(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Yi(){}function Zk(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=Td(g);f.call(a)}}var g=Wi(b,d,a,0,null,!1,!1,"",Yi);a._reactRootContainer=g;a[Ja]=g.current;sc(8===a.nodeType?a.parentNode:a);yb();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=Td(k);
h.call(a)}}var k=Vf(a,0,!1,null,null,!1,!1,"",Yi);a._reactRootContainer=k;a[Ja]=k.current;sc(8===a.nodeType?a.parentNode:a);yb(function(){Sd(b,k,c,d)});return k}function Wd(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=Td(g);h.call(a)}}Sd(b,g,a,e)}else g=Zk(c,b,a,e,d);return Td(g)}var cg=new Set,$b={},Ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Zd=Object.prototype.hasOwnProperty,
cj=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eg={},dg={},R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){R[a]=
new Y(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];R[b]=new Y(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){R[a]=new Y(a,2,!1,a.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){R[a]=new Y(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){R[a]=
new Y(a,3,!1,a.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(a){R[a]=new Y(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){R[a]=new Y(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){R[a]=new Y(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){R[a]=new Y(a,5,!1,a.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g,$f=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){R[a]=new Y(a,1,!1,a.toLowerCase(),null,!1,!1)});R.xlinkHref=new Y("xlinkHref",
1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){R[a]=new Y(a,1,!1,a.toLowerCase(),null,!0,!0)});var Sa=zb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sd=Symbol.for("react.element"),Cb=Symbol.for("react.portal"),Bb=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),
he=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Ui=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var fg=Symbol.iterator,E=Object.assign,ae,ce=!1,cc=Array.isArray,Xd,yi=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,
c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{Xd=Xd||document.createElement("div");Xd.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Xd.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),Fc=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},dc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,
borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,
strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$k=["Webkit","ms","Moz","O"];Object.keys(dc).forEach(function(a){$k.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);dc[b]=dc[a]})});var ij=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),ze=null,se=null,Eb=null,Fb=null,xg=function(a,b){return a(b)},yg=function(){},te=!1,Oe=!1;if(Ia)try{var Lc={};Object.defineProperty(Lc,
"passive",{get:function(){Oe=!0}});window.addEventListener("test",Lc,Lc);window.removeEventListener("test",Lc,Lc)}catch(a){Oe=!1}var kj=function(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(q){this.onError(q)}},gc=!1,Sc=null,Tc=!1,ue=null,lj={onError:function(a){gc=!0;Sc=a}},Ba=zb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Jg=Ba.unstable_scheduleCallback,Kg=Ba.unstable_NormalPriority,xh=Jg,Ki=Ba.unstable_cancelCallback,Pk=Ba.unstable_shouldYield,
Sk=Ba.unstable_requestPaint,P=Ba.unstable_now,Dj=Ba.unstable_getCurrentPriorityLevel,De=Ba.unstable_ImmediatePriority,Mg=Ba.unstable_UserBlockingPriority,ad=Kg,Ej=Ba.unstable_LowPriority,Ng=Ba.unstable_IdlePriority,Uc=null,Ca=null,ta=Math.clz32?Math.clz32:pj,qj=Math.log,rj=Math.LN2,Wc=64,Rd=4194304,z=0,Ae=!1,Yc=[],Va=null,Wa=null,Xa=null,jc=new Map,kc=new Map,Ya=[],Bj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "),
Gb=Sa.ReactCurrentBatchConfig,Zc=!0,$c=null,Za=null,Ee=null,bd=null,Yb={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},He=ka(Yb),Mc=E({},Yb,{view:0,detail:0}),ak=ka(Mc),ag,bg,Nc,Yd=E({},Mc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fe,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:
a.relatedTarget},movementX:function(a){if("movementX"in a)return a.movementX;a!==Nc&&(Nc&&"mousemove"===a.type?(ag=a.screenX-Nc.screenX,bg=a.screenY-Nc.screenY):bg=ag=0,Nc=a);return ag},movementY:function(a){return"movementY"in a?a.movementY:bg}}),ih=ka(Yd),al=E({},Yd,{dataTransfer:0}),Wj=ka(al),bl=E({},Mc,{relatedTarget:0}),Pe=ka(bl),cl=E({},Yb,{animationName:0,elapsedTime:0,pseudoElement:0}),Yj=ka(cl),dl=E({},Yb,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),
ck=ka(dl),el=E({},Yb,{data:0}),qh=ka(el),fk=qh,fl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",
112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},hl=E({},Mc,{key:function(a){if(a.key){var b=fl[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=cd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?gl[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,
metaKey:0,repeat:0,locale:0,getModifierState:Fe,charCode:function(a){return"keypress"===a.type?cd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?cd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Vj=ka(hl),il=E({},Yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=ka(il),jl=E({},Mc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,
ctrlKey:0,shiftKey:0,getModifierState:Fe}),Xj=ka(jl),kl=E({},Yb,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zj=ka(kl),ll=E({},Yd,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),bk=ka(ll),Hj=[9,13,27,32],Ge=Ia&&"CompositionEvent"in window,Oc=null;Ia&&"documentMode"in document&&(Oc=document.documentMode);var ek=Ia&&"TextEvent"in
window&&!Oc,Ug=Ia&&(!Ge||Oc&&8<Oc&&11>=Oc),Tg=String.fromCharCode(32),Sg=!1,Hb=!1,Kj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},oc=null,pc=null,ph=!1;Ia&&(ph=Lj("input")&&(!document.documentMode||9<document.documentMode));var ua="function"===typeof Object.is?Object.is:Sj,dk=Ia&&"documentMode"in document&&11>=document.documentMode,Jb=null,Ke=null,rc=null,Je=!1,Kb={animationend:gd("Animation","AnimationEnd"),
animationiteration:gd("Animation","AnimationIteration"),animationstart:gd("Animation","AnimationStart"),transitionend:gd("Transition","TransitionEnd")},Le={},eh={};Ia&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete Kb.animationend.animation,delete Kb.animationiteration.animation,delete Kb.animationstart.animation),"TransitionEvent"in window||delete Kb.transitionend.transition);var jh=hd("animationend"),kh=hd("animationiteration"),lh=hd("animationstart"),mh=hd("transitionend"),
fh=new Map,Zi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
(function(){for(var a=0;a<Zi.length;a++){var b=Zi[a],c=b.toLowerCase();b=b[0].toUpperCase()+b.slice(1);$a(c,"on"+b)}$a(jh,"onAnimationEnd");$a(kh,"onAnimationIteration");$a(lh,"onAnimationStart");$a("dblclick","onDoubleClick");$a("focusin","onFocus");$a("focusout","onBlur");$a(mh,"onTransitionEnd")})();Ab("onMouseEnter",["mouseout","mouseover"]);Ab("onMouseLeave",["mouseout","mouseover"]);Ab("onPointerEnter",["pointerout","pointerover"]);Ab("onPointerLeave",["pointerout","pointerover"]);mb("onChange",
"change click focusin focusout input keydown keyup selectionchange".split(" "));mb("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mb("onBeforeInput",["compositionend","keypress","textInput","paste"]);mb("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mb("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mb("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ec="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ec)),id="_reactListening"+Math.random().toString(36).slice(2),gk=/\r\n?/g,hk=/\u0000|\uFFFD/g,Jf=null,Kf=null,Rf="function"===typeof setTimeout?setTimeout:void 0,Nk="function"===typeof clearTimeout?
clearTimeout:void 0,$i="function"===typeof Promise?Promise:void 0,Jk="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof $i?function(a){return $i.resolve(null).then(a).catch(ik)}:Rf,Zb=Math.random().toString(36).slice(2),Da="__reactFiber$"+Zb,uc="__reactProps$"+Zb,Ja="__reactContainer$"+Zb,Me="__reactEvents$"+Zb,Dk="__reactListeners$"+Zb,Ek="__reactHandles$"+Zb,Se=[],Mb=-1,cb={},J=bb(cb),S=bb(!1),pb=cb,La=null,md=!1,Te=!1,Ob=[],Pb=0,od=null,nd=0,na=[],oa=0,rb=null,Ma=1,Na="",la=
null,fa=null,D=!1,wa=null,Ik=Sa.ReactCurrentBatchConfig,Vb=Dh(!0),li=Dh(!1),ud=bb(null),td=null,Rb=null,bf=null,tb=null,kk=Oa,gb=!1,wc={},Ea=bb(wc),yc=bb(wc),xc=bb(wc),F=bb(0),kf=[],yd=Sa.ReactCurrentDispatcher,sf=Sa.ReactCurrentBatchConfig,vb=0,C=null,K=null,N=null,Ad=!1,zc=!1,Ac=0,ml=0,zd={readContext:qa,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useInsertionEffect:V,useLayoutEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,
useMutableSource:V,useSyncExternalStore:V,useId:V,unstable_isNewReconciler:!1},lk={readContext:qa,useCallback:function(a,b){Fa().memoizedState=[a,void 0===b?null:b];return a},useContext:qa,useEffect:Sh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Bd(4194308,4,Vh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Bd(4194308,4,a,b)},useInsertionEffect:function(a,b){return Bd(4,2,a,b)},useMemo:function(a,b){var c=Fa();b=void 0===b?null:b;a=a();c.memoizedState=
[a,b];return a},useReducer:function(a,b,c){var d=Fa();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=qk.bind(null,C,a);return[d.memoizedState,a]},useRef:function(a){var b=Fa();a={current:a};return b.memoizedState=a},useState:Qh,useDebugValue:rf,useDeferredValue:function(a){return Fa().memoizedState=a},useTransition:function(){var a=Qh(!1),b=a[0];a=pk.bind(null,a[1]);Fa().memoizedState=
a;return[b,a]},useMutableSource:function(a,b,c){},useSyncExternalStore:function(a,b,c){var d=C,e=Fa();if(D){if(void 0===c)throw Error(m(407));c=c()}else{c=b();if(null===O)throw Error(m(349));0!==(vb&30)||Nh(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;Sh(Lh.bind(null,d,f,a),[a]);d.flags|=2048;Cc(9,Mh.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Fa(),b=O.identifierPrefix;if(D){var c=Na;var d=Ma;c=(d&~(1<<32-ta(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Ac++;0<c&&
(b+="H"+c.toString(32));b+=":"}else c=ml++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},mk={readContext:qa,useCallback:Xh,useContext:qa,useEffect:qf,useImperativeHandle:Wh,useInsertionEffect:Th,useLayoutEffect:Uh,useMemo:Yh,useReducer:of,useRef:Rh,useState:function(a){return of(Bc)},useDebugValue:rf,useDeferredValue:function(a){var b=sa();return Zh(b,K.memoizedState,a)},useTransition:function(){var a=of(Bc)[0],b=sa().memoizedState;return[a,b]},useMutableSource:Jh,
useSyncExternalStore:Kh,useId:$h,unstable_isNewReconciler:!1},nk={readContext:qa,useCallback:Xh,useContext:qa,useEffect:qf,useImperativeHandle:Wh,useInsertionEffect:Th,useLayoutEffect:Uh,useMemo:Yh,useReducer:pf,useRef:Rh,useState:function(a){return pf(Bc)},useDebugValue:rf,useDeferredValue:function(a){var b=sa();return null===K?b.memoizedState=a:Zh(b,K.memoizedState,a)},useTransition:function(){var a=pf(Bc)[0],b=sa().memoizedState;return[a,b]},useMutableSource:Jh,useSyncExternalStore:Kh,useId:$h,
unstable_isNewReconciler:!1},Dd={isMounted:function(a){return(a=a._reactInternals)?nb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Z(),e=hb(a),f=Pa(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=fb(a,f,e);null!==b&&(xa(b,a,e,d),vd(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Z(),e=hb(a),f=Pa(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=fb(a,f,e);null!==b&&(xa(b,a,e,d),vd(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;
var c=Z(),d=hb(a),e=Pa(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=fb(a,e,d);null!==b&&(xa(b,a,d,c),vd(b,a,d))}},rk="function"===typeof WeakMap?WeakMap:Map,tk=Sa.ReactCurrentOwner,ha=!1,Cf={dehydrated:null,treeContext:null,retryLane:0};var zk=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=
c.return;c=c.sibling}};var xi=function(a,b){};var yk=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){a=b.stateNode;ub(Ea.current);e=null;switch(c){case "input":f=ke(a,f);d=ke(a,d);e=[];break;case "select":f=E({},f,{value:void 0});d=E({},d,{value:void 0});e=[];break;case "textarea":f=ne(a,f);d=ne(a,d);e=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(a.onclick=kd)}pe(c,d);var g;c=null;for(l in f)if(!d.hasOwnProperty(l)&&f.hasOwnProperty(l)&&null!=f[l])if("style"===
l){var h=f[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&($b.hasOwnProperty(l)?e||(e=[]):(e=e||[]).push(l,null));for(l in d){var k=d[l];h=null!=f?f[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(e||(e=[]),e.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(e=e||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(e=e||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&($b.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&B("scroll",a),e||h===k||(e=[])):(e=e||[]).push(l,k))}c&&(e=e||[]).push("style",c);var l=e;if(b.updateQueue=l)b.flags|=4}};var Ak=function(a,
b,c,d){c!==d&&(b.flags|=4)};var Jd=!1,X=!1,Fk="function"===typeof WeakSet?WeakSet:Set,l=null,zi=!1,T=null,za=!1,Mk=Math.ceil,Od=Sa.ReactCurrentDispatcher,Uf=Sa.ReactCurrentOwner,ca=Sa.ReactCurrentBatchConfig,p=0,O=null,H=null,U=0,ba=0,Ga=bb(0),L=0,Jc=null,ra=0,Md=0,Sf=0,Kc=null,ja=null,Of=0,Hf=Infinity,Ra=null,Ed=!1,xf=null,ib=null,Pd=!1,lb=null,Qd=0,Ic=0,Pf=null,Kd=-1,Ld=0;var Qk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||S.current)ha=!0;else{if(0===(a.lanes&c)&&0===(b.flags&
128))return ha=!1,wk(a,b,c);ha=0!==(a.flags&131072)?!0:!1}else ha=!1,D&&0!==(b.flags&1048576)&&yh(b,nd,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;Fd(a,b);a=b.pendingProps;var e=Nb(b,J.current);Sb(b,c);e=mf(null,b,d,a,e,c);var f=nf();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=null,ea(d)?(f=!0,ld(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ff(b),e.updater=Dd,b.stateNode=
e,e._reactInternals=b,uf(b,d,a,c),b=Af(null,b,d,!0,f,c)):(b.tag=0,D&&f&&Ue(b),aa(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{Fd(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Uk(d);a=ya(d,a);switch(e){case 0:b=zf(null,b,d,a,c);break a;case 1:b=ri(null,b,d,a,c);break a;case 11:b=mi(null,b,d,a,c);break a;case 14:b=ni(null,b,d,ya(d.type,a),c);break a}throw Error(m(306,d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),zf(a,b,d,e,c);
case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),ri(a,b,d,e,c);case 3:a:{si(b);if(null===a)throw Error(m(387));d=b.pendingProps;f=b.memoizedState;e=f.element;Fh(a,b);wd(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Ub(Error(m(423)),b);b=ti(a,b,d,c,e);break a}else if(d!==e){e=
Ub(Error(m(424)),b);b=ti(a,b,d,c,e);break a}else for(fa=Ka(b.stateNode.containerInfo.firstChild),la=b,D=!0,wa=null,c=li(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Qb();if(d===e){b=Qa(a,b,c);break a}aa(a,b,d,c)}b=b.child}return b;case 5:return Ih(b),null===a&&Xe(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Qe(d,e)?g=null:null!==f&&Qe(d,f)&&(b.flags|=32),qi(a,b),aa(a,b,g,c),b.child;case 6:return null===a&&Xe(b),null;case 13:return ui(a,b,c);case 4:return gf(b,
b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Vb(b,null,d,c):aa(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),mi(a,b,d,e,c);case 7:return aa(a,b,b.pendingProps,c),b.child;case 8:return aa(a,b,b.pendingProps.children,c),b.child;case 12:return aa(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;y(ud,d._currentValue);d._currentValue=g;if(null!==f)if(ua(f.value,g)){if(f.children===
e.children&&!S.current){b=Qa(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=Pa(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var p=l.pending;null===p?k.next=k:(k.next=p.next,p.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);df(f.return,c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===
f.tag){g=f.return;if(null===g)throw Error(m(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);df(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}aa(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Sb(b,c),e=qa(e),d=d(e),b.flags|=1,aa(a,b,d,c),b.child;case 14:return d=b.type,e=ya(d,b.pendingProps),e=ya(d.type,e),ni(a,b,d,e,c);case 15:return oi(a,
b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),Fd(a,b),b.tag=1,ea(d)?(a=!0,ld(b)):a=!1,Sb(b,c),ei(b,d,e),uf(b,d,e,c),Af(null,b,d,!0,a,c);case 19:return wi(a,b,c);case 22:return pi(a,b,c)}throw Error(m(156,b.tag));};var pa=function(a,b,c,d){return new Tk(a,b,c,d)},aj="function"===typeof reportError?reportError:function(a){console.error(a)};Ud.prototype.render=Xf.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(m(409));
Sd(a,b,null,null)};Ud.prototype.unmount=Xf.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;yb(function(){Sd(null,a,null,null)});b[Ja]=null}};Ud.prototype.unstable_scheduleHydration=function(a){if(a){var b=nl();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Ya.length&&0!==b&&b<Ya[c].priority;c++);Ya.splice(c,0,a);0===c&&Hg(a)}};var Cj=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=
hc(b.pendingLanes);0!==c&&(xe(b,c|1),ia(b,P()),0===(p&6)&&(Hc(),db()))}break;case 13:yb(function(){var b=Oa(a,1);if(null!==b){var c=Z();xa(b,a,1,c)}}),Wf(a,1)}};var Gg=function(a){if(13===a.tag){var b=Oa(a,134217728);if(null!==b){var c=Z();xa(b,a,134217728,c)}Wf(a,134217728)}};var xj=function(a){if(13===a.tag){var b=hb(a),c=Oa(a,b);if(null!==c){var d=Z();xa(c,a,b,d)}Wf(a,b)}};var nl=function(){return z};var wj=function(a,b){var c=z;try{return z=a,b()}finally{z=c}};se=function(a,b,c){switch(b){case "input":le(a,
c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Rc(d);if(!e)throw Error(m(90));jg(d);le(d,e)}}}break;case "textarea":og(a,c);break;case "select":b=c.value,null!=b&&Db(a,!!c.multiple,b,!1)}};(function(a,b,c){xg=a;yg=c})(Tf,function(a,b,c,d,e){var f=z,g=ca.transition;try{return ca.transition=null,z=1,a(b,c,d,e)}finally{z=f,ca.transition=
g,0===p&&Hc()}},yb);var ol={usingClientEntryPoint:!1,Events:[ec,Ib,Rc,ug,vg,Tf]};(function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sa.ReactCurrentDispatcher,findHostInstanceByFiber:Xk,
findFiberByHostInstance:a.findFiberByHostInstance||Yk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1"};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else{var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)a=!0;else{try{Uc=b.inject(a),Ca=b}catch(c){}a=b.checkDCE?!0:!1}}return a})({findFiberByHostInstance:ob,bundleType:0,version:"18.3.1-next-f1338f8080-20240426",
rendererPackageName:"react-dom"});Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ol;Q.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yf(b))throw Error(m(200));return Wk(a,b,null,c)};Q.createRoot=function(a,b){if(!Yf(a))throw Error(m(299));var c=!1,d="",e=aj;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=Vf(a,1,!1,null,null,
c,!1,d,e);a[Ja]=b.current;sc(8===a.nodeType?a.parentNode:a);return new Xf(b)};Q.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(m(188));a=Object.keys(a).join(",");throw Error(m(268,a));}a=Bg(b);a=null===a?null:a.stateNode;return a};Q.flushSync=function(a){return yb(a)};Q.hydrate=function(a,b,c){if(!Vd(b))throw Error(m(200));return Wd(null,a,b,!0,c)};Q.hydrateRoot=function(a,b,c){if(!Yf(a))throw Error(m(405));
var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=aj;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=Wi(b,null,a,1,null!=c?c:null,e,!1,f,g);a[Ja]=b.current;sc(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,e);return new Ud(b)};Q.render=
function(a,b,c){if(!Vd(b))throw Error(m(200));return Wd(null,a,b,!1,c)};Q.unmountComponentAtNode=function(a){if(!Vd(a))throw Error(m(40));return a._reactRootContainer?(yb(function(){Wd(null,null,a,!1,function(){a._reactRootContainer=null;a[Ja]=null})}),!0):!1};Q.unstable_batchedUpdates=Tf;Q.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!Vd(c))throw Error(m(200));if(null==a||void 0===a._reactInternals)throw Error(m(38));return Wd(a,b,c,!1,d)};Q.version="18.3.1-next-f1338f8080-20240426"});
})();
/* HATH Projects — production shims (replaces ios-frame.jsx host scaffold + tweaks-panel host protocol) */
(function () {
  var React = window.React;
  function _user(){ try { return localStorage.getItem('shasta_user') || 'guest'; } catch(e){ return 'guest'; } }
  function _tkey(){ return 'shasta_projtweaks_' + _user(); }

  window.useTweaks = function (defaults) {
    var st = React.useState(function () {
      try { var r = localStorage.getItem(_tkey()); if (r) return Object.assign({}, defaults, JSON.parse(r)); } catch (e) {}
      return defaults;
    });
    var values = st[0], setValues = st[1];
    var setTweak = React.useCallback(function (keyOrEdits, val) {
      var edits;
      if (typeof keyOrEdits === 'object' && keyOrEdits !== null) edits = keyOrEdits;
      else { edits = {}; edits[keyOrEdits] = val; }
      setValues(function (prev) {
        var nv = Object.assign({}, prev, edits);
        try { localStorage.setItem(_tkey(), JSON.stringify(nv)); } catch (e) {}
        return nv;
      });
    }, []);
    return [values, setTweak];
  };

  function Noop() { return null; }
  ['TweaksPanel','TweakSection','TweakRow','TweakSlider','TweakToggle','TweakRadio',
   'TweakSelect','TweakText','TweakNumber','TweakColor','TweakButton','IOSDevice'].forEach(function (k) { window[k] = Noop; });

  // AI bridge → ShastApp Apps Script backend (same endpoint the rest of the app uses)
  var AI_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxe-sLbkBGyrdCoT-NuUg1dzYfNIGc4Wq3PuHY7wxg98JAhyPV8sDmI4gVh_Cl7VMS-oA/exec';
  window.claude = window.claude || {};
  window.claude.complete = async function (prompt) {
    var res = await fetch(AI_ENDPOINT, {
      method: 'POST', redirect: 'follow', headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'projectsAI', message: prompt,
        systemOverride: 'You output exactly what the user asks for. No preamble, no commentary, no markdown code fences unless explicitly requested.',
        history: [], user: _user(), nickname: '', directPrompt: true })
    });
    var raw = await res.text();
    var data; try { data = JSON.parse(raw); } catch (_) { data = {}; }
    return (data && data.reply) || raw || '';
  };

  // ── Cloud backup ──────────────────────────────────────────────
  // Projects previously saved only to this device's localStorage, so clearing
  // site data or switching devices lost everything. This mirrors the project
  // list into the household spreadsheet via the backend's existing
  // ProjectsBackup endpoints — no backend schema change needed, since it
  // stores any JSON array, chunked, keyed by the signed-in email.
  //
  // The app-wide fetch interceptor in index.html attaches the session token to
  // any request to this endpoint, so there is no auth handling to do here.
  var _bkTimer = null;
  var _bkState = { status: 'idle', at: null, error: null };
  var _bkListeners = [];

  function _bkGet() { return { status: _bkState.status, at: _bkState.at, error: _bkState.error }; }
  function _bkSet(status, extra) {
    _bkState.status = status;
    if (extra && extra.at !== undefined) _bkState.at = extra.at;
    _bkState.error = (extra && extra.error) ? extra.error : null;
    _bkListeners.slice().forEach(function (f) { try { f(_bkGet()); } catch (e) {} });
  }
  function _bkSignedIn() {
    try { return !!localStorage.getItem('shasta_user') && !!localStorage.getItem('shasta_session'); }
    catch (e) { return false; }
  }
  function _bkEmail() {
    try { return localStorage.getItem('shasta_user') || ''; } catch (e) { return ''; }
  }
  /** Only adopt payloads shaped like this app's projects (sections[]), so a
      legacy backup from the retired phases-based tracker is never restored. */
  function _bkIsProjectsShape(arr) {
    return Array.isArray(arr) && arr.length > 0 && arr.every(function (p) {
      return p && typeof p === 'object' && Array.isArray(p.sections);
    });
  }
  function _bkSaveNow(projects) {
    if (!_bkSignedIn() || !Array.isArray(projects)) return Promise.resolve(false);
    _bkSet('saving');
    return fetch(AI_ENDPOINT, {
      method: 'POST', redirect: 'follow', headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'saveProjectsBackup', user: _bkEmail(), projects: projects })
    })
      .then(function (r) { return r.text(); })
      .then(function (raw) {
        var d = {}; try { d = JSON.parse(raw); } catch (e) {}
        if (d && d.error) { _bkSet('error', { error: String(d.error) }); return false; }
        _bkSet('saved', { at: Date.now() });
        return true;
      })
      .catch(function (e) { _bkSet('error', { error: String((e && e.message) || e) }); return false; });
  }
  window.__projBackup = {
    signedIn: _bkSignedIn,
    get: _bkGet,
    subscribe: function (fn) {
      _bkListeners.push(fn);
      return function () { _bkListeners = _bkListeners.filter(function (f) { return f !== fn; }); };
    },
    schedule: function (projects) {
      if (!_bkSignedIn()) return;
      if (_bkTimer) clearTimeout(_bkTimer);
      _bkSet('pending');
      _bkTimer = setTimeout(function () { _bkTimer = null; _bkSaveNow(projects); }, 2500);
    },
    flush: function (projects) {
      if (_bkTimer) { clearTimeout(_bkTimer); _bkTimer = null; }
      return _bkSaveNow(projects);
    },
    saveNow: _bkSaveNow,
    load: function () {
      if (!_bkSignedIn()) return Promise.resolve(null);
      var url = AI_ENDPOINT + '?action=getProjectsBackup&user=' + encodeURIComponent(_bkEmail());
      return fetch(url, { redirect: 'follow' })
        .then(function (r) { return r.text(); })
        .then(function (raw) {
          var d = {}; try { d = JSON.parse(raw); } catch (e) { return null; }
          if (!d || d.error || !_bkIsProjectsShape(d.projects)) return null;
          if (d.updatedAt) _bkState.at = Date.parse(d.updatedAt) || null;
          return d.projects;
        })
        .catch(function () { return null; });
    }
  };
})();


/* === data.js === */
/* HATH · Projects reimagined — seed data
   Plain globals (loaded as a normal <script>, no JSX) so it's ready before React mounts.
   The hero project is a Wind Waker 100% run; every section is a different tracker
   primitive so the view doubles as a showcase of what Projects can hold. */

(function () {
  // ── Nintendo Gallery figurines (collection counter + pip grid) — 49 total ──
  const FIGURINES = [
    'Link','Zelda','Tetra','Aryll','King of Red Lions','Ganondorf','Daphnes',
    'Medli','Makar','Komali','Quill','Rito Chieftain','Valoo','Great Deku Tree',
    'Korok (Hollo)','Korok (Olivio)','Tingle','Ankle','Knuckle','David Jr.',
    'Grandma','Sturgeon','Orca','Mesa','Abe','Rose','Joel','Zill','Mila',
    'Maggie','Mr. Hoskit','Linda','Anton','Kane','Gillian','Sam','Gummy',
    'Kreeb','Pompie','Vera','Minenco','Salvatore','Beedle','Garrickson',
    'Dampa','Kamo','Hoskit','Potova','Doc Bandam',
  ];
  const figCollected = 37; // first N marked got

  // ── Sea charts (map/region grid) — the Great Sea is a real 7×7 of 49 squares ──
  const SEA_LABELS = [
    'Forsaken Fortress','Star Island','N. Fairy I.','Gale I.','Crescent Moon','Seven-Star','Overlook',
    'Four-Eye Reef','Mother & Child','Spectacle I.','Windfall','Pawprint','Dragon Roost','Flight Control',
    'Western Fairy','Rock Spire','Tingle I.','N. Triangle','Eastern Fairy','Fire Mountain','Star Belt',
    'Three-Eye Reef','Greatfish','Cyclops Reef','Six-Eye Reef','Tower of Gods','E. Triangle','Thorned Fairy',
    'Needle Rock','Islet of Steel','Stone Watcher','S. Triangle','Private Oasis','Bomb I.','Birdsʼ Peak',
    'Diamond Steppe','Five-Eye Reef','Shark I.','Southern Fairy','Ice Ring','Forest Haven','Cliff Plateau',
    'Horseshoe I.','Outset I.','Headstone I.','Two-Eye Reef','Angular Isles','Boating Course','Five-Star',
  ];
  const seaCharted = 41; // first N squares charted

  // ── Islands set foot on (checklist · done / not done) ──
  const ISLANDS = [
    ['Outset Island', true], ['Windfall Island', true], ['Dragon Roost Island', true],
    ['Forest Haven', true], ['Greatfish Isle', true], ['Forsaken Fortress', true],
    ['Tower of the Gods', true], ['Headstone Island', true], ['Gale Isle', false],
    ['Ice Ring Isle', false], ['Fire Mountain', true], ['Private Oasis', false],
    ['Spectacle Island', true], ['Needle Rock Isle', false], ['Star Island', false],
    ['Cliff Plateau Isles', false],
  ];

  // ── Triforce shards (the chest delight triggers when the 8th is found) ──
  const SHARDS = [
    ['Shard 1', 'Greatfish Isle', true], ['Shard 2', 'Tower of the Gods', true],
    ['Shard 3', 'Needle Rock Isle', true], ['Shard 4', 'Stone Watcher', true],
    ['Shard 5', 'Outset Island', true], ['Shard 6', 'Private Oasis', true],
    ['Shard 7', 'Bird-Peak Rock', true], ['Shard 8', 'Cliff Plateau', false],
  ];

  // ── Dungeons (rated · 0 not started · 1 cleared · 2 mastered) ──
  const DUNGEONS = [
    ['Dragon Roost Cavern', 2], ['Forbidden Woods', 2], ['Tower of the Gods', 2],
    ['Forsaken Fortress', 1], ['Earth Temple', 1], ['Wind Temple', 1],
    ["Ganon's Tower", 0],
  ];

  // ── Loose notes / to-dos ──
  const NOTES = [
    'Trade Joy Pendants → Town Flower w/ Mrs. Marie (need 5 more)',
    'Tingle Tuner: tuck Tingle statues onto the chart',
    'Save Big Octo locations for Great Fairy upgrades',
    'Hyoi Pears for the seagull pictographs',
  ];

  function mkItems(names, gotCount) {
    return names.map((n, i) => ({ name: n, got: i < gotCount }));
  }

  const windWaker = {
    id: 'ww',
    title: 'Wind Waker',
    subtitle: '100% Completion Run',
    theme: 'zelda',
    cover: 'https://stormyreigns.github.io/HATH/projects-assets/king-of-red-lions.png',
    started: 'Apr 2',
    sections: [
      {
        id: 'figs', type: 'counter', title: 'Nintendo Gallery', noun: 'figurines',
        hint: 'Pictograph → figurine count', items: mkItems(FIGURINES, figCollected),
      },
      {
        id: 'sea', type: 'map', title: 'Sea Charts', noun: 'squares charted',
        cols: 7, rows: 7, labels: SEA_LABELS,
        cells: SEA_LABELS.map((_, i) => i < seaCharted),
      },
      {
        id: 'isl', type: 'checklist', title: 'Islands Explored', noun: 'islands',
        items: ISLANDS.map(([name, done]) => ({ name, done })),
      },
      {
        id: 'shard', type: 'collection', title: 'Triforce Shards', noun: 'shards',
        celebrate: true, // completing this fires the treasure chest
        items: SHARDS.map(([name, where, got]) => ({ name, where, got })),
      },
      {
        id: 'dgn', type: 'rated', title: 'Dungeons', noun: 'dungeons',
        states: ['Not started', 'Cleared', 'Mastered'],
        items: DUNGEONS.map(([name, state]) => ({ name, state })),
      },
      {
        id: 'notes', type: 'notes', title: 'Field Notes',
        items: NOTES.slice(),
      },
    ],
  };

  const ffxiv = {
    id: 'ffxiv', title: 'FFXIV · Heavensward', subtitle: 'Mount & minion hunt',
    theme: 'ffxiv', cover: 'https://stormyreigns.github.io/HATH/projects-assets/ffxiv-icon.png', started: 'Mar 18',
    sections: [
      { id: 'm', type: 'counter', noun: 'mounts', title: 'Mounts', items: mkItems(new Array(34).fill('Mount'), 21) },
      { id: 'mi', type: 'counter', noun: 'minions', title: 'Minions', items: mkItems(new Array(40).fill('Minion'), 33) },
    ],
  };

  const recipes = {
    id: 'rec', title: 'Recipes to Try', subtitle: 'Weeknight dinners',
    theme: 'base', cover: null, started: 'May 9',
    sections: [
      { id: 'r', type: 'checklist', noun: 'recipes', title: 'The list',
        items: ['Miso salmon','Shakshuka','Dan dan noodles','Green curry','Focaccia']
          .map((n, i) => ({ name: n, done: i < 2 })) },
    ],
  };

  window.HATH_DATA = { projects: [windWaker, ffxiv, recipes] };

  // ── Sample messy paste used by the "Paste a list" build path ──
  window.HATH_SAMPLE_PASTE =
`Nintendo Gallery figurines  37/49
Sea charts collected 41 / 49
Islands explored:
Outset Island
Windfall Island
Dragon Roost
Forest Haven
Greatfish Isle
Triforce Shards 7/8
Dungeons cleared 6`;
})();


/* === ui.jsx (compiled) === */
/* HATH · Projects — shared tracker primitives + progress math.
   Every section type the wife needs has a matching widget here. Styling reads
   the live design-system tokens (var(--accent) etc.), so each widget re-skins
   itself from whatever [data-theme] wraps it. */

// ── progress math ─────────────────────────────────────────────
function sectionProgress(sec) {
  if (sec.type === 'counter' || sec.type === 'collection') return {
    done: sec.items.filter(i => i.got).length,
    total: sec.items.length
  };
  if (sec.type === 'map') return {
    done: sec.cells.filter(Boolean).length,
    total: sec.cells.length
  };
  if (sec.type === 'checklist') return {
    done: sec.items.filter(i => i.done).length,
    total: sec.items.length
  };
  if (sec.type === 'rated') return {
    done: sec.items.reduce((a, i) => a + i.state, 0),
    total: sec.items.length * 2
  };
  return null; // notes — informational, not scored
}
function projectProgress(p) {
  const secs = (p && Array.isArray(p.sections)) ? p.sections : [];
  const ratios = secs.map(sectionProgress).filter(Boolean).map(s => s.total ? s.done / s.total : 0);
  if (!ratios.length) return 0;
  return ratios.reduce((a, b) => a + b, 0) / ratios.length;
}
function pct(v) {
  return Math.round(v * 100);
}

// ── progress ring ─────────────────────────────────────────────
function ProgressRing({
  value,
  size = 64,
  stroke = 8,
  track = 'rgba(255,255,255,0.35)',
  color = 'var(--accent)',
  children
}) {
  const r = (size - stroke) / 2,
    c = 2 * Math.PI * r,
    off = c * (1 - value);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: stroke,
    style: {
      stroke: track
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: off,
    style: {
      stroke: color,
      transition: 'stroke-dashoffset .7s var(--ease-soft)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, children));
}

// ── thin progress meter (used in compact + list layouts) ──────
function Meter({
  value,
  color = 'var(--accent)',
  h = 7
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 999,
      background: 'var(--bg-sunken)',
      overflow: 'hidden',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: pct(value) + '%',
      borderRadius: 999,
      background: color,
      transition: 'width .6s var(--ease-soft)'
    }
  }));
}

// ── tiny icons ────────────────────────────────────────────────
const Ic = {
  plus: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 4v12M4 10h12",
    stroke: c,
    strokeWidth: "2.4",
    strokeLinecap: "round"
  })),
  minus: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 10h12",
    stroke: c,
    strokeWidth: "2.4",
    strokeLinecap: "round"
  })),
  check: (c = '#fff') => /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8l3 3 6-7",
    stroke: c,
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  chev: (c = 'var(--text-faint)', d = 'down') => /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      transform: d === 'up' ? 'rotate(180deg)' : 'none',
      transition: 'transform .25s'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5l3.5 3.5L10 5",
    stroke: c,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  back: (c = 'var(--text)') => /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 4l-7 7 7 7",
    stroke: c,
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  spark: (c = 'var(--accent-gold,#E0B33C)') => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 0l1.6 5.4L15 7l-5.4 1.6L8 14l-1.6-5.4L1 7l5.4-1.6L8 0z",
    fill: c
  })),
  pencil: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.5 2.5l3 3L6 14l-3.5.5L3 11l8.5-8.5z",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  })),
  trash: (c = 'currentColor') => /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 17 17",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 4.5h10M6.5 4.5V3h4v1.5M5 4.5l.6 9h5.8l.6-9",
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
};

// ── shared tap-and-drag "paint" behaviour for the toggle grids ─
// Press a cell to flip it; keep dragging to paint that same new state across
// every cell you pass over (works for mouse + touch via elementFromPoint).
function usePaint(isOn, onSet, attr) {
  const target = React.useRef(null); // the value we're painting (true/false)
  const apply = idx => {
    if (idx == null || target.current == null) return;
    if (isOn(idx) !== target.current) onSet(idx, target.current);
  };
  const idxAt = (x, y) => {
    const el = document.elementFromPoint(x, y);
    const c = el && el.closest('[' + attr + ']');
    return c ? +c.getAttribute(attr) : null;
  };
  const start = i => {
    target.current = !isOn(i);
    onSet(i, target.current);
  };
  const move = e => {
    if (target.current == null) return;
    const p = e.touches ? e.touches[0] : e;
    apply(idxAt(p.clientX, p.clientY));
  };
  React.useEffect(() => {
    const end = () => {
      target.current = null;
    };
    window.addEventListener('pointerup', end);
    window.addEventListener('touchend', end);
    window.addEventListener('pointercancel', end);
    return () => {
      window.removeEventListener('pointerup', end);
      window.removeEventListener('touchend', end);
      window.removeEventListener('pointercancel', end);
    };
  }, []);
  return {
    start,
    move
  };
}

// ── collection counter (figurines / mounts) ───────────────────
const PIP_MASKS = {
  star: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 .6l2.95 7.06 7.62.61-5.8 4.96 1.77 7.43L12 17.27l-6.54 3.95 1.77-7.43-5.8-4.96 7.62-.61z'/%3E%3C/svg%3E\")",
  heart: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 29'%3E%3Cpath d='M16 28.7S1.4 20.6 1.4 9.9C1.4 5.4 5 2 9.2 2c2.8 0 5.3 1.5 6.8 3.8C17.5 3.5 20 2 22.8 2 27 2 30.6 5.4 30.6 9.9c0 10.7-14.6 18.8-14.6 18.8z'/%3E%3C/svg%3E\")"
};
function pipShapeStyle(got, shape, color) {
  const s = {
    aspectRatio: '1',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    background: got ? color : 'var(--surface-2)',
    transition: 'transform .18s var(--ease-soft), background .2s',
    WebkitTapHighlightColor: 'transparent'
  };
  if (shape === 'square') {
    s.borderRadius = '26%';
    s.boxShadow = got ? '0 1px 2px rgba(30,22,14,.3), inset 0 1px 0 rgba(255,255,255,.45)' : 'inset 0 0 0 1.5px var(--line-strong)';
  } else if (shape === 'star' || shape === 'heart') {
    s.borderRadius = 0;
    const m = PIP_MASKS[shape];
    s.WebkitMaskImage = m;
    s.maskImage = m;
    s.WebkitMaskRepeat = 'no-repeat';
    s.maskRepeat = 'no-repeat';
    s.WebkitMaskSize = '100% 100%';
    s.maskSize = '100% 100%';
    s.WebkitMaskPosition = 'center';
    s.maskPosition = 'center';
    if (!got) s.background = 'var(--line-strong)';
  } else {
    s.borderRadius = '50%';
    s.boxShadow = got ? '0 1px 2px rgba(30,22,14,.3), inset 0 1px 0 rgba(255,255,255,.45)' : 'inset 0 0 0 1.5px var(--line-strong)';
  }
  return s;
}
function PipGrid({
  items,
  onSet,
  color = 'var(--accent)',
  shape = 'circle'
}) {
  const paint = usePaint(i => items[i].got, onSet, 'data-pip');
  return /*#__PURE__*/React.createElement("div", {
    onPointerMove: paint.move,
    onTouchMove: paint.move,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gap: 6,
      touchAction: 'none'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    "data-pip": i,
    title: it.name,
    onPointerDown: e => {
      e.preventDefault();
      paint.start(i);
    },
    style: pipShapeStyle(it.got, shape, color)
  })));
}
function CounterControls({
  done,
  total,
  onAdd,
  onSub,
  color = 'var(--accent)'
}) {
  const btn = (kind, fn, dim) => /*#__PURE__*/React.createElement("button", {
    onClick: fn,
    disabled: dim,
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      border: 'none',
      cursor: dim ? 'default' : 'pointer',
      background: kind === 'add' ? color : 'var(--surface-2)',
      color: kind === 'add' ? 'var(--accent-contrast)' : 'var(--text-muted)',
      opacity: dim ? 0.4 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: kind === 'add' ? '0 2px 5px rgba(30,22,14,.18)' : 'none',
      flexShrink: 0,
      transition: 'transform .12s var(--ease-out)',
      WebkitTapHighlightColor: 'transparent'
    },
    onMouseDown: e => !dim && (e.currentTarget.style.transform = 'scale(0.92)'),
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, kind === 'add' ? Ic.plus('currentColor') : Ic.minus('currentColor'));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, btn('sub', onSub, done <= 0), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, done), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 18,
      color: 'var(--text-faint)'
    }
  }, " / ", total)), btn('add', onAdd, done >= total));
}

// ── sea-chart map grid (regions / areas) ──────────────────────
function MapGrid({
  cols,
  cells,
  labels,
  onSet,
  color = 'var(--accent)'
}) {
  const paint = usePaint(i => cells[i], onSet, 'data-cell');
  return /*#__PURE__*/React.createElement("div", {
    onPointerMove: paint.move,
    onTouchMove: paint.move,
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 4,
      padding: 8,
      borderRadius: 'var(--radius-md)',
      touchAction: 'none',
      background: 'repeating-linear-gradient(135deg, var(--surface-2) 0 9px, var(--bg-sunken) 9px 18px)'
    }
  }, cells.map((on, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    "data-cell": i,
    title: labels ? labels[i] : '',
    onPointerDown: e => {
      e.preventDefault();
      paint.start(i);
    },
    style: {
      aspectRatio: '1',
      borderRadius: 4,
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      position: 'relative',
      overflow: 'hidden',
      background: on ? color : 'rgba(255,255,255,0.55)',
      boxShadow: on ? 'inset 0 2px 4px rgba(0,0,0,.18)' : 'inset 0 0 0 1px var(--line)',
      transition: 'background .25s, transform .15s var(--ease-soft)',
      WebkitTapHighlightColor: 'transparent'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(255,255,255,.35), transparent 60%)'
    }
  }))));
}

// ── checklist row ─────────────────────────────────────────────
function CheckRow({
  label,
  done,
  onToggle,
  sub,
  color = 'var(--accent)'
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      border: 'none',
      background: 'transparent',
      padding: '11px 2px',
      cursor: 'pointer',
      textAlign: 'left',
      WebkitTapHighlightColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: done ? color : 'var(--surface-2)',
      boxShadow: done ? 'inset 0 1px 0 rgba(255,255,255,.35)' : 'inset 0 0 0 1.5px var(--line-strong)',
      transition: 'background .2s'
    }
  }, done && Ic.check('var(--accent-contrast)')), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15.5,
      color: done ? 'var(--text-muted)' : 'var(--text)',
      textDecorationLine: done ? 'line-through' : 'none',
      textDecorationColor: 'var(--line-strong)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-faint)',
      marginTop: 1
    }
  }, sub)));
}

// ── rated 3-state pills (dungeons) ────────────────────────────
function RatedRow({
  label,
  state,
  states,
  onCycle,
  color = 'var(--accent)'
}) {
  const shades = ['var(--surface-2)', 'color-mix(in oklab, var(--accent) 45%, white)', color];
  const ink = ['var(--text-faint)', 'var(--accent-ink)', 'var(--accent-contrast)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15.5,
      color: 'var(--text)'
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    onClick: onCycle,
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 999,
      padding: '7px 14px',
      minWidth: 96,
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12.5,
      background: shades[state],
      color: ink[state],
      transition: 'background .2s',
      WebkitTapHighlightColor: 'transparent'
    }
  }, states[state]));
}

// ── Shasta mascot bubble ──────────────────────────────────────
function Shasta({
  size = 44,
  ring = true
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: "https://stormyreigns.github.io/HATH/projects-assets/shasta.png",
    alt: "Shasta",
    style: {
      width: size,
      height: size,
      borderRadius: '32%',
      objectFit: 'cover',
      flexShrink: 0,
      boxShadow: ring ? '0 2px 8px rgba(30,22,14,.22)' : 'none'
    }
  });
}

// ── editing: type conversion + entry helpers ──────────────────
let _uidc = 0;
function uid(prefix) {
  return (prefix || 'x') + '-' + Date.now().toString(36) + '-' + _uidc++;
}

// Any section → a type-agnostic list of {name, done}. Lets us switch a section
// between counter / checklist / map / rated / notes without losing progress.
function sectionEntries(sec) {
  if (sec.type === 'counter' || sec.type === 'collection') return sec.items.map(i => ({
    name: i.name,
    done: !!i.got,
    where: i.where
  }));
  if (sec.type === 'checklist') return sec.items.map(i => ({
    name: i.name,
    done: !!i.done,
    where: i.where
  }));
  if (sec.type === 'rated') {
    const top = (sec.states ? sec.states.length : 3) - 1;
    return sec.items.map(i => ({
      name: i.name,
      done: i.state >= top
    }));
  }
  if (sec.type === 'map') return (sec.cells || []).map((on, i) => ({
    name: sec.labels && sec.labels[i] || 'Area ' + (i + 1),
    done: !!on
  }));
  if (sec.type === 'notes') return (sec.items || []).map(t => ({
    name: t,
    done: false
  }));
  return [];
}

// Rebuild a clean section of `type` from entries (drops stale type-specific props).
function buildSection(sec, type, entries) {
  const base = {
    id: sec.id || uid('sec'),
    title: sec.title || 'Section',
    noun: sec.noun || ''
  };
  if (type === 'counter') return {
    ...base,
    type: 'counter',
    shape: sec.shape || 'circle',
    celebrate: sec.celebrate,
    items: entries.map(e => ({
      name: e.name,
      got: !!e.done
    }))
  };
  if (type === 'checklist') return {
    ...base,
    type: 'checklist',
    items: entries.map(e => ({
      name: e.name,
      done: !!e.done,
      where: e.where
    }))
  };
  if (type === 'rated') return {
    ...base,
    type: 'rated',
    states: sec.states && sec.states.length >= 2 ? sec.states : ['Not started', 'In progress', 'Mastered'],
    items: entries.map(e => ({
      name: e.name,
      state: e.done ? 2 : 0
    }))
  };
  if (type === 'map') {
    const total = Math.max(entries.length, 4);
    const cols = Math.min(8, Math.max(3, Math.ceil(Math.sqrt(total))));
    const named = entries.length && entries.every(e => e.name && !/^Area \d+$/.test(e.name));
    return {
      ...base,
      type: 'map',
      cols,
      labels: named ? entries.map(e => e.name) : null,
      cells: entries.map(e => !!e.done)
    };
  }
  if (type === 'notes') return {
    ...base,
    type: 'notes',
    items: entries.map(e => e.name)
  };
  return {
    ...base,
    type,
    items: []
  };
}
function convertSection(sec, toType) {
  return buildSection(sec, toType, sectionEntries(sec));
}

// Append a named entry to a live section in its own shape (used by AI augment).
// Mutates `sec`. No-op on case-insensitive duplicates. Returns true if added.
function addEntryToSection(sec, name) {
  const n = ('' + (name || '')).trim();
  if (!n) return false;
  const has = (arr, get) => arr.some(x => (get(x) || '').toLowerCase() === n.toLowerCase());
  if (sec.type === 'counter' || sec.type === 'collection') {
    if (has(sec.items, x => x.name)) return false;
    sec.items.push({
      name: n,
      got: false
    });
    return true;
  }
  if (sec.type === 'checklist') {
    if (has(sec.items, x => x.name)) return false;
    sec.items.push({
      name: n,
      done: false
    });
    return true;
  }
  if (sec.type === 'rated') {
    if (has(sec.items, x => x.name)) return false;
    sec.items.push({
      name: n,
      state: 0
    });
    return true;
  }
  if (sec.type === 'notes') {
    if (has(sec.items, x => x)) return false;
    sec.items.push(n);
    return true;
  }
  if (sec.type === 'map') {
    if (!sec.labels) sec.labels = sec.cells.map((_, i) => 'Area ' + (i + 1));
    if (has(sec.labels, x => x)) return false;
    sec.labels.push(n);
    sec.cells.push(false);
    sec.cols = Math.min(8, Math.max(3, Math.ceil(Math.sqrt(sec.cells.length))));
    return true;
  }
  return false;
}
Object.assign(window, {
  sectionProgress,
  projectProgress,
  pct,
  ProgressRing,
  Meter,
  Ic,
  PipGrid,
  CounterControls,
  MapGrid,
  CheckRow,
  RatedRow,
  Shasta,
  uid,
  sectionEntries,
  buildSection,
  convertSection,
  addEntryToSection
});

/* === home.jsx (compiled) === */
/* HATH · Projects — Home: the list of trackers. */

const {
  projectProgress: _pp,
  sectionProgress: _sp,
  pct: __pct,
  ProgressRing: _Ring,
  Meter: _Meter,
  Ic: _Ic,
  Shasta: _Shasta
} = window;
function summaryLine(p) {
  // pick the most "collection-ish" section for a glanceable line
  const secs = (p && Array.isArray(p.sections)) ? p.sections : [];
  if (!secs.length) return 'Empty';
  const counter = secs.find(s => s.type === 'counter' || s.type === 'collection' || s.type === 'map');
  if (counter) {
    const s = _sp(counter);
    return `${s.done}/${s.total} ${counter.noun || ''}`.trim();
  }
  const first = secs[0];
  const s = _sp(first);
  return s ? `${s.done}/${s.total}` : `${(first.items || []).length} notes`;
}
function ProjectCard({
  project,
  onOpen
}) {
  const prog = _pp(project);
  const themed = project.theme && project.theme !== 'base';
  return /*#__PURE__*/React.createElement("button", {
    "data-theme": project.theme,
    onClick: onOpen,
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      border: 'none',
      padding: 0,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface)',
      boxShadow: 'var(--shadow-sm)',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .16s var(--ease-soft), box-shadow .2s'
    },
    onMouseDown: e => e.currentTarget.style.transform = 'scale(0.985)',
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 14,
      background: themed ? 'linear-gradient(120deg, var(--hero-tint-1), var(--surface) 78%)' : 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement(_Ring, {
    value: prog,
    size: 58,
    stroke: 7,
    track: "rgba(0,0,0,0.06)",
    color: "var(--accent)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--accent-ink)'
    }
  }, __pct(prog))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, project.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 1
    }
  }, project.subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--accent-deep)',
      background: 'var(--accent-soft)',
      borderRadius: 999,
      padding: '3px 9px'
    }
  }, summaryLine(project)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, project.sections.length, " sections"))), project.cover && /*#__PURE__*/React.createElement("img", {
    src: project.cover,
    alt: "",
    style: {
      width: 46,
      height: 46,
      objectFit: 'contain',
      flexShrink: 0,
      filter: 'drop-shadow(0 2px 4px rgba(30,22,14,.2))'
    }
  })));
}
function Home({
  projects,
  onOpen,
  onNew,
  backup
}) {
  const done = projects.filter(p => _pp(p) >= 1).length;
  const backupLabel = (function () {
    if (!backup || !window.__projBackup || !window.__projBackup.signedIn()) return null;
    if (backup.status === 'error') return { text: 'Backup failed \u2014 saved on this device only', bad: true };
    if (backup.status === 'saving' || backup.status === 'pending') return { text: 'Backing up\u2026' };
    if (backup.at) {
      const mins = Math.floor((Date.now() - backup.at) / 60000);
      const when = mins < 1 ? 'just now' : mins < 60 ? mins + 'm ago' : Math.floor(mins / 60) + 'h ago';
      return { text: 'Backed up ' + when };
    }
    return null;
  })();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px var(--gutter) 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "HATH"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      color: 'var(--text)',
      margin: '2px 0 0',
      lineHeight: 1
    }
  }, "Projects")), /*#__PURE__*/React.createElement(_Shasta, {
    size: 46
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      margin: '10px 0 0'
    }
  }, projects.length, " trackers \xB7 ", projects.length - done, " in progress"), backupLabel && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: backupLabel.bad ? 'var(--accent)' : 'var(--text-faint)',
      margin: '5px 0 0'
    }
  }, backupLabel.text)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '16px var(--gutter) 12px'
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    project: p,
    onOpen: () => onOpen(p.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px var(--gutter) 36px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onNew,
    style: {
      width: '100%',
      border: '2px dashed var(--line-strong)',
      background: 'transparent',
      borderRadius: 'var(--radius-lg)',
      padding: '18px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      WebkitTapHighlightColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, _Ic.plus('#fff')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text)'
    }
  }, "New tracker"))));
}
window.Home = Home;

/* === tracker.jsx (compiled) === */
/* HATH · Projects — Tracker detail view + per-section widgets.
   The same data drives three layout "directions" (cards / atlas / compact),
   switched live via the Tweaks panel. */

(function () {
  const {
    sectionProgress,
    projectProgress,
    pct: _pct,
    ProgressRing,
    Meter,
    Ic,
    PipGrid,
    CounterControls,
    MapGrid,
    CheckRow,
    RatedRow
  } = window;

  // small style helpers for the menu + rename/delete sheets
  function menuItemStyle(c) {
    return {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      border: 'none',
      background: 'transparent',
      padding: '10px 11px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14,
      color: c,
      WebkitTapHighlightColor: 'transparent'
    };
  }
  function fieldLabel() {
    return {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 10.5,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 6
    };
  }
  function fieldInput() {
    return {
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--line-strong)',
      background: 'var(--surface)',
      padding: '11px 13px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text)',
      outline: 'none'
    };
  }
  function sheetBtn(primary) {
    return {
      flex: 1,
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '12px',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      WebkitTapHighlightColor: 'transparent',
      background: primary ? 'var(--accent)' : 'var(--surface-2)',
      color: primary ? 'var(--accent-contrast)' : 'var(--text-muted)'
    };
  }

  // section card chrome adapts to the chosen layout direction
  function SecCard({
    layout,
    children,
    themed
  }) {
    if (layout === 'compact') return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 0',
        borderBottom: '1px solid var(--line)'
      }
    }, children);
    const atlas = layout === 'atlas';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: atlas ? 'var(--surface)' : 'var(--surface)',
        borderRadius: atlas ? 'var(--radius-xl)' : 'var(--radius-lg)',
        padding: atlas ? '18px 18px 20px' : '16px',
        boxShadow: atlas ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        border: atlas ? '1px solid var(--accent-soft)' : '1px solid var(--line)'
      }
    }, children);
  }
  function SecHeader({
    sec,
    prog,
    color,
    expanded,
    onToggle,
    collapsible
  }) {
    const ratio = prog && prog.total ? prog.done / prog.total : 0;
    return /*#__PURE__*/React.createElement("button", {
      onClick: onToggle,
      disabled: !collapsible,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        border: 'none',
        background: 'transparent',
        padding: 0,
        cursor: collapsible ? 'pointer' : 'default',
        textAlign: 'left',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17.5,
        color: 'var(--text)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        flex: '1 1 auto',
        minWidth: 0
      }
    }, sec.title), prog && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5,
        color: ratio >= 1 ? color : 'var(--text-faint)',
        fontWeight: 600,
        flexShrink: 0
      }
    }, ratio >= 1 ? '✓ complete' : `${prog.done}/${prog.total}`)), prog ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Meter, {
      value: ratio,
      color: color
    })) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12.5,
        color: 'var(--text-faint)'
      }
    }, sec.items.length, " notes")), collapsible && /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0
      }
    }, Ic.chev('var(--text-faint)', expanded ? 'up' : 'down')));
  }
  function NotesEditor({
    sec,
    color,
    update
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginTop: 12
      }
    }, sec.items.map((n, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 9,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: color,
        marginTop: 14,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("textarea", {
      value: n,
      rows: 1,
      onChange: e => {
        const v = e.target.value;
        update(s => {
          s.items[i] = v;
        });
      },
      onInput: e => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
      },
      ref: el => {
        if (el) {
          el.style.height = 'auto';
          el.style.height = el.scrollHeight + 'px';
        }
      },
      style: {
        flex: 1,
        resize: 'none',
        border: '1px solid transparent',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--surface-2)',
        padding: '8px 10px',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.45,
        color: 'var(--text)',
        outline: 'none',
        overflow: 'hidden',
        transition: 'border-color .15s, background .15s'
      },
      onFocus: e => {
        e.target.style.borderColor = 'var(--accent)';
        e.target.style.background = 'var(--surface)';
      },
      onBlur: e => {
        e.target.style.borderColor = 'transparent';
        e.target.style.background = 'var(--surface-2)';
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => update(s => {
        s.items.splice(i, 1);
      }),
      "aria-label": "Delete note",
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: 6,
        marginTop: 4,
        color: 'var(--text-faint)',
        flexShrink: 0,
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.5 4h8M6 4V3h3v1M5 4l.5 8h4l.5-8",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))))), /*#__PURE__*/React.createElement("button", {
      onClick: () => update(s => {
        s.items.push('');
      }),
      style: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 2,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 2px',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        color: color,
        WebkitTapHighlightColor: 'transparent'
      }
    }, Ic.plus(color), " Add note"));
  }
  function Section({
    sec,
    color,
    layout,
    update,
    celebrate,
    onEdit
  }) {
    const [open, setOpen] = React.useState(true);
    const prog = sectionProgress(sec);
    const collapsible = layout !== 'atlas';
    const show = !collapsible || open;
    const body = () => {
      if (sec.type === 'counter' || sec.type === 'collection') {
        const done = sec.items.filter(i => i.got).length;
        const setGot = (i, val) => update(items => {
          items[i].got = val;
        });
        if (sec.type === 'collection') {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              marginTop: 12
            }
          }, sec.items.map((it, i) => /*#__PURE__*/React.createElement(CheckRow, {
            key: i,
            label: it.name,
            sub: it.where,
            done: it.got,
            color: color,
            onToggle: () => setGot(i, !it.got)
          })));
        }
        return /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 14
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            marginBottom: 14
          }
        }, /*#__PURE__*/React.createElement(PipGrid, {
          items: sec.items,
          color: color,
          shape: sec.shape,
          onSet: (i, val) => setGot(i, val)
        })), /*#__PURE__*/React.createElement(CounterControls, {
          done: done,
          total: sec.items.length,
          color: color,
          onAdd: () => {
            const i = sec.items.findIndex(x => !x.got);
            if (i >= 0) setGot(i, true);
          },
          onSub: () => {
            const idx = [...sec.items].map((x, i) => [x, i]).filter(([x]) => x.got).pop();
            if (idx) setGot(idx[1], false);
          }
        }));
      }
      if (sec.type === 'map') {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 14
          }
        }, /*#__PURE__*/React.createElement(MapGrid, {
          cols: sec.cols,
          cells: sec.cells,
          labels: sec.labels,
          color: color,
          onSet: (i, val) => update(s => {
            s.cells[i] = val;
          })
        }), /*#__PURE__*/React.createElement("p", {
          style: {
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            color: 'var(--text-faint)',
            margin: '10px 2px 0'
          }
        }, "Tap a square \u2014 or press and drag \u2014 to chart the Great Sea."));
      }
      if (sec.type === 'checklist') {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginTop: 8
          }
        }, sec.items.map((it, i) => /*#__PURE__*/React.createElement(CheckRow, {
          key: i,
          label: it.name,
          done: it.done,
          color: color,
          onToggle: () => update(items => {
            items[i].done = !items[i].done;
          })
        })));
      }
      if (sec.type === 'rated') {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: 8
          }
        }, sec.items.map((it, i) => /*#__PURE__*/React.createElement(RatedRow, {
          key: i,
          label: it.name,
          state: it.state,
          states: sec.states,
          color: color,
          onCycle: () => update(items => {
            items[i].state = (items[i].state + 1) % sec.states.length;
          })
        })));
      }
      if (sec.type === 'notes') {
        return /*#__PURE__*/React.createElement(NotesEditor, {
          sec: sec,
          color: color,
          update: update
        });
      }
      return null;
    };
    return /*#__PURE__*/React.createElement(SecCard, {
      layout: layout
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(SecHeader, {
      sec: sec,
      prog: prog,
      color: color,
      expanded: open,
      collapsible: collapsible,
      onToggle: () => collapsible && setOpen(o => !o)
    })), onEdit && /*#__PURE__*/React.createElement("button", {
      onClick: onEdit,
      "aria-label": "Edit section",
      style: {
        flexShrink: 0,
        width: 30,
        height: 30,
        marginTop: -2,
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer',
        background: 'var(--surface-2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, Ic.pencil('var(--text-muted)'))), show && body());
  }
  function TrackerView({
    project,
    layout,
    onBack,
    update,
    celebrate,
    onRename,
    onDelete,
    onEditProject
  }) {
    const overall = projectProgress(project);
    const themed = project.theme && project.theme !== 'base';
    const color = 'var(--accent)';
    const heroFont = themed ? 'var(--font-theme-display)' : 'var(--font-display)';

    // Fire the celebration whenever ANY section crosses into 100%, and a bigger
    // one when the whole project reaches 100%. Never on initial mount; never
    // double-fires (project completion supersedes the section that triggered it).
    const seen = React.useRef(null);
    React.useEffect(() => {
      const secDone = {};
      project.sections.forEach(s => {
        const p = sectionProgress(s);
        secDone[s.id] = !!(p && p.total > 0 && p.done >= p.total);
      });
      const projDone = overall >= 1;
      const prev = seen.current;
      if (prev) {
        if (projDone && !prev.proj) {
          celebrate({
            kind: 'project',
            title: project.title,
            parent: project.title
          });
        } else {
          const justDone = project.sections.find(s => secDone[s.id] && !prev.sec[s.id]);
          if (justDone) celebrate({
            kind: 'section',
            title: justDone.title,
            parent: project.title
          });
        }
      }
      seen.current = {
        sec: secDone,
        proj: projDone
      };
    });
    const [menu, setMenu] = React.useState(false); // overflow menu open
    const [edit, setEdit] = React.useState(null); // {title, subtitle} while renaming
    const [confirmDel, setConfirmDel] = React.useState(false);
    const [editingSec, setEditingSec] = React.useState(null); // section obj being edited, or null
    const [addingSec, setAddingSec] = React.useState(false); // SectionEditor in "new" mode
    const [augment, setAugment] = React.useState(false); // AI augment sheet
    const [toast, setToast] = React.useState('');
    const replaceSection = newSec => {
      const np = JSON.parse(JSON.stringify(project));
      const i = np.sections.findIndex(s => s.id === newSec.id);
      if (i >= 0) np.sections[i] = newSec;else np.sections.push(newSec);
      onEditProject(np);
      setEditingSec(null);
      setAddingSec(false);
    };
    const deleteSection = id => {
      const np = JSON.parse(JSON.stringify(project));
      np.sections = np.sections.filter(s => s.id !== id);
      onEditProject(np);
      setEditingSec(null);
    };
    const flash = msg => {
      setToast(msg);
      setTimeout(() => setToast(''), 2600);
    };
    return /*#__PURE__*/React.createElement("div", {
      "data-theme": project.theme,
      style: {
        minHeight: '100%',
        background: 'var(--bg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, var(--hero-tint-1), var(--hero-tint-2))',
        marginTop: 0,
        padding: '14px var(--gutter) 22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        border: 'none',
        background: 'var(--surface)',
        boxShadow: 'var(--shadow-sm)',
        borderRadius: 999,
        padding: '7px 13px 7px 8px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13.5,
        color: 'var(--text)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, Ic.back('var(--text)'), " Projects"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        color: 'var(--text-muted)',
        background: 'rgba(255,255,255,.55)',
        borderRadius: 999,
        padding: '5px 11px',
        display: 'none'
      }
    }, "since ", project.started), /*#__PURE__*/React.createElement("button", {
      onClick: () => setMenu(m => !m),
      "aria-label": "Project options",
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        background: 'var(--surface)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "9",
      r: "1.6",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "1.6",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "9",
      r: "1.6",
      fill: "currentColor"
    }))), menu && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      onClick: () => setMenu(false),
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 40
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 40,
        right: 0,
        zIndex: 41,
        minWidth: 168,
        background: 'var(--surface)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--line)',
        overflow: 'hidden',
        padding: 5
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setMenu(false);
        setEdit({
          title: project.title,
          subtitle: project.subtitle || ''
        });
      },
      style: menuItemStyle('var(--text)')
    }, Ic.pencil('var(--text-muted)'), " Rename"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setMenu(false);
        setConfirmDel(true);
      },
      style: menuItemStyle('var(--danger, #C0492F)')
    }, Ic.trash('var(--danger, #C0492F)'), " Delete tracker"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(ProgressRing, {
      value: overall,
      size: 84,
      stroke: 9,
      track: "rgba(255,255,255,0.55)",
      color: "var(--accent)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        fontSize: 21,
        color: 'var(--accent-ink)',
        lineHeight: 1
      }
    }, _pct(overall)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 9.5,
        color: 'var(--text-muted)',
        letterSpacing: '.08em'
      }
    }, "PERCENT"))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, themed && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        fontSize: 10.5,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--accent-deep)'
      }
    }, project.subtitle), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: heroFont,
        fontWeight: 700,
        fontSize: 30,
        lineHeight: 1.05,
        color: 'var(--accent-ink)',
        letterSpacing: themed ? '.01em' : '-0.01em'
      }
    }, project.title)), project.cover && /*#__PURE__*/React.createElement("img", {
      src: project.cover,
      alt: "",
      style: {
        width: 64,
        height: 64,
        objectFit: 'contain',
        filter: 'drop-shadow(0 4px 8px rgba(30,22,14,.25))'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: layout === 'compact' ? '6px var(--gutter) 40px' : '16px var(--gutter) 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: layout === 'compact' ? 0 : layout === 'atlas' ? 16 : 12
      }
    }, project.sections.map(sec => /*#__PURE__*/React.createElement(Section, {
      key: sec.id,
      sec: sec,
      color: color,
      layout: layout,
      celebrate: celebrate,
      onEdit: () => setEditingSec(sec),
      update: mut => update(project.id, sec.id, mut)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: layout === 'compact' ? 16 : 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setAddingSec(true),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: '100%',
        border: '1.5px dashed var(--line-strong)',
        background: 'transparent',
        borderRadius: 'var(--radius-md)',
        padding: '13px',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14.5,
        color: 'var(--text-muted)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, Ic.plus('var(--text-muted)'), " Add a section"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setAugment(true),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: '100%',
        border: '1.5px solid var(--accent)',
        background: 'var(--accent-soft)',
        borderRadius: 'var(--radius-md)',
        padding: '13px',
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14.5,
        color: 'var(--accent-ink)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, Ic.spark('var(--accent-deep)'), " Add more with AI"))), editingSec && /*#__PURE__*/React.createElement(window.SectionEditor, {
      sec: editingSec,
      isNew: false,
      onApply: replaceSection,
      onDelete: () => deleteSection(editingSec.id),
      onClose: () => setEditingSec(null)
    }), addingSec && /*#__PURE__*/React.createElement(window.SectionEditor, {
      sec: window.newBlankSection(''),
      isNew: true,
      onApply: replaceSection,
      onClose: () => setAddingSec(false)
    }), augment && /*#__PURE__*/React.createElement(window.AIAugment, {
      project: project,
      onApply: (np, added) => {
        onEditProject(np);
        setAugment(false);
        flash(added ? `Added ${added} item${added === 1 ? '' : 's'}` : 'Nothing new added');
      },
      onClose: () => setAugment(false)
    }), toast && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 28,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 95,
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--text)',
        color: 'var(--bg)',
        borderRadius: 999,
        padding: '10px 18px',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13.5,
        boxShadow: 'var(--shadow-lg)',
        animation: 'hath-fade .2s ease'
      }
    }, toast)), edit && /*#__PURE__*/React.createElement("div", {
      onClick: () => setEdit(null),
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 80,
        background: 'rgba(30,22,14,.4)',
        display: 'flex',
        alignItems: 'flex-end',
        animation: 'hath-fade .2s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: '100%',
        background: 'var(--bg)',
        borderRadius: '24px 24px 0 0',
        padding: '20px var(--gutter) 28px',
        boxShadow: '0 -8px 30px rgba(0,0,0,.25)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 4,
        borderRadius: 999,
        background: 'var(--line-strong)',
        margin: '0 auto 16px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--text)',
        marginBottom: 14
      }
    }, "Rename tracker"), /*#__PURE__*/React.createElement("label", {
      style: fieldLabel()
    }, "Title"), /*#__PURE__*/React.createElement("input", {
      value: edit.title,
      autoFocus: true,
      onChange: e => setEdit({
        ...edit,
        title: e.target.value
      }),
      style: fieldInput()
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        ...fieldLabel(),
        marginTop: 12
      }
    }, "Subtitle"), /*#__PURE__*/React.createElement("input", {
      value: edit.subtitle,
      onChange: e => setEdit({
        ...edit,
        subtitle: e.target.value
      }),
      style: fieldInput()
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setEdit(null),
      style: sheetBtn(false)
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        onRename(project.id, {
          title: edit.title.trim() || project.title,
          subtitle: edit.subtitle.trim()
        });
        setEdit(null);
      },
      style: sheetBtn(true)
    }, "Save")))), confirmDel && /*#__PURE__*/React.createElement("div", {
      onClick: () => setConfirmDel(false),
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 80,
        background: 'rgba(30,22,14,.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 28,
        animation: 'hath-fade .2s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        background: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        padding: '22px 22px 18px',
        maxWidth: 300,
        boxShadow: 'var(--shadow-lg)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--text)'
      }
    }, "Delete \u201C", project.title, "\u201D?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        color: 'var(--text-muted)',
        margin: '8px 0 18px',
        lineHeight: 1.45
      }
    }, "This removes the tracker and all its sections. This can\u2019t be undone."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setConfirmDel(false),
      style: sheetBtn(false)
    }, "Keep"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setConfirmDel(false);
        onDelete(project.id);
      },
      style: {
        ...sheetBtn(true),
        background: 'var(--danger, #C0492F)',
        color: '#fff'
      }
    }, "Delete")))));
  }
  window.TrackerView = TrackerView;
})();

/* === build.jsx (compiled) === */
/* HATH · Projects — Build flow.
   Shasta invites a brain-dump; messy text is parsed into structured sections
   LIVE as you type. Each detected block can be renamed or re-typed with a tap.
   Minimal input in, a tappable tracker out. */

const {
  Ic: _bIc,
  Shasta: _bShasta
} = window;

// ── the parser: messy text → sections ────────────────────────
function parseToSections(text) {
  const lines = text.split('\n').map(l => l.replace(/\s+$/, ''));
  const out = [];
  let pendingList = null; // {title, items}
  const flush = () => {
    if (pendingList) {
      if (pendingList.items.length) out.push(pendingList);
      pendingList = null;
    }
  };
  const idify = (s, i) => (s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'sec') + '-' + i;
  lines.forEach((raw, li) => {
    const line = raw.trim();
    if (!line) {
      flush();
      return;
    }

    // "title  37 / 49"  or  "37 of 49"
    const frac = line.match(/^(.*?)[\s:]*?(\d+)\s*(?:\/|of)\s*(\d+)\s*(.*)$/i);
    if (frac && +frac[2] <= +frac[3] * 4) {
      flush();
      const title = (frac[1].trim() || frac[4].trim() || 'Items').replace(/[:\-–]\s*$/, '').trim();
      const total = Math.max(1, +frac[3]),
        done = Math.min(total, +frac[2]);
      out.push({
        id: idify(title, li),
        type: 'counter',
        title: titlecase(title),
        noun: '',
        total,
        done
      });
      return;
    }

    // a header introducing a list:  "Islands explored:"
    if (/:$/.test(line)) {
      flush();
      pendingList = {
        id: idify(line, li),
        type: 'checklist',
        title: titlecase(line.replace(/:$/, '').trim()),
        items: []
      };
      return;
    }

    // bare line while a list is open → list item
    if (pendingList && !/\d+\s*(?:\/|of)\s*\d+/.test(line)) {
      pendingList.items.push({
        name: titlecase(line),
        done: false
      });
      return;
    }

    // "Dungeons cleared 6" → counter w/ done=total (editable)
    const trailing = line.match(/^(.*?)\s+(\d+)$/);
    if (trailing) {
      flush();
      const n = +trailing[2];
      out.push({
        id: idify(trailing[1], li),
        type: 'counter',
        title: titlecase(trailing[1].trim()),
        noun: '',
        total: n,
        done: n
      });
      return;
    }

    // otherwise → a note
    flush();
    const last = out[out.length - 1];
    if (last && last.type === 'notes') last.notes.push(line);else out.push({
      id: idify('notes', li),
      type: 'notes',
      title: 'Notes',
      notes: [line]
    });
  });
  flush();
  return out;
}
function titlecase(s) {
  return s.replace(/\b\w/g, c => c.toUpperCase()).replace(/\bOf\b/g, 'of').replace(/\bThe\b/g, 'the');
}
function detectTheme(text) {
  const t = text.toLowerCase();
  if (/zelda|wind ?waker|triforce|hyrule|ganon|link\b|korok/.test(t)) return {
    theme: 'zelda',
    label: 'Zelda',
    cover: 'https://stormyreigns.github.io/HATH/projects-assets/king-of-red-lions.png'
  };
  if (/ffxiv|final fantasy|eorzea|chocobo/.test(t)) return {
    theme: 'ffxiv',
    label: 'Final Fantasy XIV',
    cover: 'https://stormyreigns.github.io/HATH/projects-assets/ffxiv-icon.png'
  };
  if (/recipe|dinner|cook|bake/.test(t)) return {
    theme: 'base',
    label: null,
    cover: null
  };
  return {
    theme: 'base',
    label: null,
    cover: null
  };
}

// ── turn a parsed block into the runtime section shape ───────
function materialize(block) {
  if (block.type === 'counter') {
    const items = Array.from({
      length: block.total
    }, (_, i) => ({
      name: `${block.title} ${i + 1}`,
      got: i < block.done
    }));
    const celeb = /triforce|shard/i.test(block.title);
    return {
      id: block.id,
      type: 'counter',
      title: block.title,
      noun: '',
      items,
      celebrate: celeb
    };
  }
  if (block.type === 'checklist') return {
    id: block.id,
    type: 'checklist',
    title: block.title,
    noun: '',
    items: block.items.map(i => ({
      ...i
    }))
  };
  if (block.type === 'map') {
    const total = block.total,
      cols = Math.ceil(Math.sqrt(total));
    return {
      id: block.id,
      type: 'map',
      title: block.title,
      cols,
      labels: null,
      cells: Array.from({
        length: total
      }, (_, i) => i < block.done)
    };
  }
  if (block.type === 'notes') return {
    id: block.id,
    type: 'notes',
    title: block.title,
    items: block.notes.slice()
  };
  return block;
}
const TYPE_META = {
  counter: {
    label: 'Counter',
    tip: 'X of Y'
  },
  checklist: {
    label: 'Checklist',
    tip: 'done / not'
  },
  map: {
    label: 'Map grid',
    tip: 'regions'
  },
  notes: {
    label: 'Notes',
    tip: 'free text'
  }
};
const CYCLE = ['counter', 'checklist', 'map'];
function PreviewBlock({
  block,
  onRetype
}) {
  const meta = TYPE_META[block.type];
  const count = block.type === 'checklist' ? block.items.length : block.type === 'notes' ? block.notes.length : block.total;
  const canType = block.type !== 'notes';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 14px',
      background: 'var(--surface)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--line)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15.5,
      color: 'var(--text)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, block.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-faint)',
      marginTop: 2
    }
  }, block.type === 'counter' && `${block.done} of ${block.total}`, block.type === 'checklist' && `${count} items`, block.type === 'map' && `${block.done}/${block.total} regions`, block.type === 'notes' && `${count} notes`)), /*#__PURE__*/React.createElement("button", {
    onClick: canType ? onRetype : undefined,
    disabled: !canType,
    style: {
      border: 'none',
      cursor: canType ? 'pointer' : 'default',
      borderRadius: 999,
      padding: '6px 12px',
      background: 'var(--accent-soft)',
      color: 'var(--accent-deep)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      flexShrink: 0,
      WebkitTapHighlightColor: 'transparent',
      opacity: canType ? 1 : 0.7
    }
  }, meta.label, canType && ' ↻'));
}
function Build({
  onCancel,
  onCreate,
  onAIImport
}) {
  const [mode, setMode] = React.useState(null); // null = method chooser · 'manual' = brain-dump
  const [text, setText] = React.useState('');
  const [overrides, setOverrides] = React.useState({}); // blockId → type
  const taRef = React.useRef(null);
  const blocks = React.useMemo(() => {
    const parsed = parseToSections(text);
    return parsed.map(b => overrides[b.id] && b.type !== 'notes' ? {
      ...b,
      type: overrides[b.id]
    } : b);
  }, [text, overrides]);
  const theme = React.useMemo(() => detectTheme(text), [text]);
  const retype = id => setOverrides(o => {
    const cur = blocks.find(b => b.id === id);
    const next = CYCLE[(CYCLE.indexOf(o[id] || cur.type) + 1) % CYCLE.length];
    return {
      ...o,
      [id]: next
    };
  });
  const useExample = () => {
    setText(window.HATH_SAMPLE_PASTE);
    setOverrides({});
    setTimeout(() => taRef.current && taRef.current.blur(), 0);
  };
  const create = () => {
    const sections = blocks.map(materialize);
    const title = theme.label || blocks[0] && blocks[0].title || 'New Tracker';
    const now = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
    onCreate({
      id: 'p' + Date.now(),
      title,
      subtitle: theme.label ? 'Completion tracker' : 'Tracker',
      theme: theme.theme,
      cover: theme.cover,
      started: now,
      sections
    });
  };

  // Shasta's running commentary
  let say = 'Drop in anything — a messy list, a few numbers, areas to explore. I’ll shape it into something you can tap.';
  if (blocks.length) {
    say = `Found ${blocks.length} thing${blocks.length > 1 ? 's' : ''} to track.`;
    if (theme.label) say += ` Looks like ${theme.label} — I’ll dress it up.`;
    say += ' Re-type any block, then create.';
  }

  // ── method chooser: the first thing you see on "New tracker" ──
  if (mode === null) {
    const Card = ({
      onClick,
      icon,
      title,
      desc,
      primary
    }) => /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        border: primary ? '1.5px solid var(--accent)' : '1.5px solid var(--line)',
        background: primary ? 'var(--accent-soft)' : 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        padding: '18px 16px',
        boxShadow: 'var(--shadow-sm)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: 'var(--radius-md)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: primary ? 'var(--accent)' : 'var(--surface-2)'
      }
    }, icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: primary ? 'var(--accent-ink)' : 'var(--text)'
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        lineHeight: 1.4,
        marginTop: 2,
        color: primary ? 'var(--accent-deep)' : 'var(--text-muted)'
      }
    }, desc)), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        color: primary ? 'var(--accent-deep)' : 'var(--text-faint)',
        transform: 'rotate(-90deg)'
      }
    }, _bIc.chev(primary ? 'var(--accent-deep)' : 'var(--text-faint)', 'down')));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100%',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onCancel,
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14.5,
        color: 'var(--text-muted)',
        padding: 4
      }
    }, "Cancel"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--text)'
      }
    }, "New tracker"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '4px var(--gutter) 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 11,
        alignItems: 'flex-start',
        margin: '6px 0 18px'
      }
    }, /*#__PURE__*/React.createElement(_bShasta, {
      size: 42
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--surface)',
        borderRadius: '4px 16px 16px 16px',
        padding: '11px 14px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        lineHeight: 1.45,
        color: 'var(--text)',
        margin: 0
      }
    }, "How do you want to start? I can read a link or a whole page for you \u2014 or you can jot it down yourself."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, onAIImport && /*#__PURE__*/React.createElement(Card, {
      primary: true,
      onClick: onAIImport,
      icon: _bIc.spark('var(--accent-contrast)'),
      title: "Import with AI",
      desc: "Paste a link or a page of info and I\u2019ll sort it into a tracker for you."
    }), /*#__PURE__*/React.createElement(Card, {
      onClick: () => setMode('manual'),
      icon: _bIc.pencil('var(--text-muted)'),
      title: "Jot it down",
      desc: "Type a quick list and I\u2019ll shape it into sections as you go."
    }))));
  }
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme.theme,
    style: {
      minHeight: '100%',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode(null),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-muted)',
      padding: 4
    }
  }, _bIc.back('var(--text-muted)'), " Back"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text)'
    }
  }, "Jot it down"), /*#__PURE__*/React.createElement("button", {
    onClick: create,
    disabled: !blocks.length,
    style: {
      border: 'none',
      background: blocks.length ? 'var(--accent)' : 'var(--surface-2)',
      color: blocks.length ? 'var(--accent-contrast)' : 'var(--text-faint)',
      cursor: blocks.length ? 'pointer' : 'default',
      borderRadius: 999,
      padding: '8px 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      WebkitTapHighlightColor: 'transparent',
      boxShadow: blocks.length ? '0 2px 6px rgba(30,22,14,.18)' : 'none'
    }
  }, "Create")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px var(--gutter) 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'flex-start',
      margin: '6px 0 14px'
    }
  }, /*#__PURE__*/React.createElement(_bShasta, {
    size: 42
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface)',
      borderRadius: '4px 16px 16px 16px',
      padding: '11px 14px',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.45,
      color: 'var(--text)',
      margin: 0
    }
  }, say))), /*#__PURE__*/React.createElement("textarea", {
    ref: taRef,
    value: text,
    onChange: e => setText(e.target.value),
    autoFocus: true,
    placeholder: "e.g.\nFigurines 37/49\nIslands explored:\nOutset Island\nWindfall Island\nTriforce Shards 7/8",
    rows: text ? 4 : 6,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'none',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--line-strong)',
      background: 'var(--surface)',
      padding: '13px 14px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--text)',
      outline: 'none'
    }
  }), !text && /*#__PURE__*/React.createElement("button", {
    onClick: useExample,
    style: {
      marginTop: 10,
      border: 'none',
      background: 'var(--accent-soft)',
      color: 'var(--accent-deep)',
      borderRadius: 999,
      padding: '8px 14px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12.5,
      WebkitTapHighlightColor: 'transparent'
    }
  }, "\u2728 Try an example"), blocks.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 10
    }
  }, "Preview \xB7 ", blocks.length, " sections"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, blocks.map(b => /*#__PURE__*/React.createElement(PreviewBlock, {
    key: b.id,
    block: b,
    onRetype: () => retype(b.id)
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-faint)',
      margin: '14px 2px 0',
      lineHeight: 1.4
    }
  }, "Tap a type pill to switch how a block is tracked. You can fine-tune everything once it\u2019s created."))));
}
window.Build = Build;

/* === import.jsx (compiled) === */
/* HATH · Projects — AI import.
   Paste a link OR a page of info → Shasta digests it (built-in AI) → asks which
   things you want to track → you pick → she populates a full tracker.

   Robustness notes (this is why it no longer collapses to "1 Notes item"):
   - The DIGEST call returns the category list WITH a count estimate each.
     We parse the count from that, so collection/map totals never depend on a
     long reply that might get cut off.
   - A short SECOND call fetches just the real item NAMES for checklist/rated.
     Replies stay small, so they don't truncate.
   - looseJSON() repairs a truncated/odd reply (auto-closes open brackets) so a
     capped response still parses instead of falling through to a default.
   - Every section is built from the chosen category's real kind — never a
     surprise Notes section.

   The app can't fetch a URL itself, so a link leans on what the model already
   knows about that page/game (great for famous ones like Ocarina of Time);
   pasting the page text is always the most accurate. */

(function () {
  const {
    Shasta: _aShasta,
    Ic: _aIc
  } = window;
  const KIND_META = {
    counter: {
      label: 'Collection counter',
      defTotal: 12
    },
    checklist: {
      label: 'Checklist',
      defTotal: 8
    },
    map: {
      label: 'Map / region grid',
      defTotal: 9
    },
    rated: {
      label: 'Rated progress',
      defTotal: 8
    },
    notes: {
      label: 'Notes',
      defTotal: 1
    }
  };
  const ALLOWED = Object.keys(KIND_META);
  function looksLikeURL(s) {
    const t = (s || '').trim();
    return /^https?:\/\/\S+$/i.test(t) || /^[\w.-]+\.(com|net|org|io|gg|co|wiki)\b\S*$/i.test(t.split(/\s/)[0] || '');
  }
  function detectThemeLocal(s) {
    const t = (s || '').toLowerCase();
    if (/zelda|ocarina|wind ?waker|majora|triforce|hyrule|ganon|\blink\b|korok|breath of the wild|tears of the kingdom|skyward/.test(t)) return {
      theme: 'zelda',
      cover: 'https://stormyreigns.github.io/HATH/projects-assets/king-of-red-lions.png'
    };
    if (/ffxiv|final fantasy|eorzea|chocobo|heavensward|shadowbringers|endwalker/.test(t)) return {
      theme: 'ffxiv',
      cover: 'https://stormyreigns.github.io/HATH/projects-assets/ffxiv-icon.png'
    };
    return {
      theme: 'base',
      cover: null
    };
  }

  // Strip markdown / nav / formatting noise from a pasted page so the model sees
  // content, not symbols. Keeps it from inventing categories out of decoration.
  function cleanPaste(s) {
    return (s || '').replace(/```[\s\S]*?```/g, ' ').replace(/!?\[[^\]]*\]\([^)]*\)/g, ' ') // md images / links
    .replace(/https?:\/\/\S+/g, ' ').replace(/[#>*_`~|=]{1,}/g, ' ') // md + ascii-art symbols
    .replace(/\.{3,}|:{2,}|-{3,}/g, ' ') // … ::: ---
    .replace(/[ \t]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
  }

  // Reject category labels that are page noise rather than real trackables.
  function isJunkLabel(l) {
    const t = (l || '').trim();
    if (t.length < 3 || t.length > 28) return true;
    if (!/[a-z]/i.test(t)) return true; // no letters
    if (/^[^a-z0-9]/i.test(t)) return true; // starts with symbol/brace/quote
    if (/[~`*_#|<>{}]|:::|\.\.\.|\u2026/.test(t)) return true; // formatting artifacts
    if (/[.:!?]$/.test(t)) return true; // sentence / "Platform:" colon
    if ((t.match(/\s/g) || []).length > 3) return true; // >4 words = title/sentence
    if (/^(platform|publisher|developer|genre|release|esrb|rating|guide|complete guide|walkthrough|table of contents|introduction|overview|contents|tips|the legend of zelda|final fantasy)\b/i.test(t)) return true;
    return false;
  }

  // pull a count out of "36 pieces", "~15 story beats", "20+ items", "100 tokens"
  function estimateToTotal(estimate, kind) {
    const m = ('' + (estimate || '')).match(/\d{1,4}/);
    const n = m ? parseInt(m[0], 10) : 0;
    const cap = kind === 'map' ? 64 : 200; // keep grids visually sane on a phone
    if (n > 0) return Math.min(cap, n);
    return (KIND_META[kind] || KIND_META.checklist).defTotal;
  }

  // Truncation-tolerant JSON extraction: strip fences, find the first bracket,
  // try strict parse, then repair by closing any still-open strings/brackets.
  function looseJSON(text) {
    if (!text) return null;
    let s = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    const cand = ['{', '['].map(c => s.indexOf(c)).filter(i => i >= 0);
    if (!cand.length) return null;
    s = s.slice(Math.min(...cand));
    try {
      return JSON.parse(s);
    } catch (e) {/* fall through to repair */}
    let inStr = false,
      esc = false;
    const stack = [];
    let safe = '';
    let lastSafe = '';
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      safe += ch;
      if (inStr) {
        if (esc) esc = false;else if (ch === '\\') esc = true;else if (ch === '"') inStr = false;
        continue;
      }
      if (ch === '"') inStr = true;else if (ch === '{' || ch === '[') stack.push(ch === '{' ? '}' : ']');else if (ch === '}' || ch === ']') {
        stack.pop();
        lastSafe = safe;
      }
    }
    // candidate A: close whatever is still open from the full string
    let a = safe;
    if (inStr) a += '"';
    a = a.replace(/,\s*$/, '');
    for (let k = stack.length - 1; k >= 0; k--) a += stack[k];
    try {
      return JSON.parse(a);
    } catch (e) {/* try B */}
    // candidate B: trim back to the last balanced close, reclose the rest
    if (lastSafe) {
      let b = lastSafe.replace(/,\s*$/, '');
      // recompute remaining openers for the trimmed prefix
      const st2 = [];
      let is2 = false,
        es2 = false;
      for (let i = 0; i < b.length; i++) {
        const ch = b[i];
        if (is2) {
          if (es2) es2 = false;else if (ch === '\\') es2 = true;else if (ch === '"') is2 = false;
          continue;
        }
        if (ch === '"') is2 = true;else if (ch === '{' || ch === '[') st2.push(ch === '{' ? '}' : ']');else if (ch === '}' || ch === ']') st2.pop();
      }
      for (let k = st2.length - 1; k >= 0; k--) b += st2[k];
      try {
        return JSON.parse(b);
      } catch (e) {/* give up */}
    }
    return null;
  }

  // category spec + real names → runtime section (never produces a stray Notes)
  function materializeSection(c, names, i) {
    const id = (c.label || 'sec').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 24) + '-' + i;
    const kind = ALLOWED.includes(c.kind) ? c.kind : 'checklist';
    const clean = (names || []).filter(x => typeof x === 'string' && x.trim()).map(x => x.trim());
    const celeb = /triforce|shard|final|all .*complete|100%/i.test(c.label || '');
    if (kind === 'counter') {
      const total = Math.max(estimateToTotal(c.estimate, kind), clean.length, 1);
      return {
        id,
        type: 'counter',
        title: c.label,
        noun: c.noun || c.label.toLowerCase(),
        items: Array.from({
          length: total
        }, (_, k) => ({
          name: clean[k] || `${c.label} ${k + 1}`,
          got: false
        })),
        celebrate: celeb
      };
    }
    if (kind === 'map') {
      const total = Math.max(estimateToTotal(c.estimate, kind), clean.length, 4);
      const cols = Math.min(8, Math.max(3, Math.ceil(Math.sqrt(total))));
      return {
        id,
        type: 'map',
        title: c.label,
        cols,
        labels: clean.length === total ? clean : null,
        cells: Array.from({
          length: total
        }, () => false)
      };
    }
    if (kind === 'rated') {
      const base = (clean.length ? clean : Array.from({
        length: estimateToTotal(c.estimate, kind)
      }, (_, k) => `${c.label} ${k + 1}`)).slice(0, 50);
      return {
        id,
        type: 'rated',
        title: c.label,
        noun: '',
        states: ['Not started', 'In progress', 'Mastered'],
        items: base.map(n => ({
          name: n,
          state: 0
        }))
      };
    }
    if (kind === 'notes') {
      return {
        id,
        type: 'notes',
        title: c.label,
        items: clean.length ? clean.slice(0, 12) : ['']
      };
    }
    // checklist (default)
    const base = (clean.length ? clean : Array.from({
      length: estimateToTotal(c.estimate, kind)
    }, (_, k) => `${c.label} ${k + 1}`)).slice(0, 50);
    return {
      id,
      type: 'checklist',
      title: c.label,
      noun: '',
      items: base.map(n => ({
        name: n,
        done: false
      }))
    };
  }
  function Spinner({
    size = 22
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: size,
        height: size,
        display: 'inline-block',
        borderRadius: '50%',
        border: '2.5px solid var(--accent-soft)',
        borderTopColor: 'var(--accent)',
        animation: 'hath-spin .8s linear infinite'
      }
    });
  }
  function KindBadge({
    kind
  }) {
    const m = KIND_META[kind] || KIND_META.checklist;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10.5,
        fontWeight: 600,
        color: 'var(--accent-deep)',
        background: 'var(--accent-soft)',
        borderRadius: 999,
        padding: '3px 8px',
        whiteSpace: 'nowrap'
      }
    }, m.label);
  }
  function AIImport({
    onCancel,
    onCreate
  }) {
    const [step, setStep] = React.useState('input'); // input | digesting | choose | building | error
    const [text, setText] = React.useState('');
    const [digest, setDigest] = React.useState(null); // {game, summary, categories:[{id,label,kind,estimate}]}
    const [picked, setPicked] = React.useState({});
    const [err, setErr] = React.useState('');
    const [note, setNote] = React.useState(''); // soft warning under build

    const isURL = looksLikeURL(text);
    const themeGuess = detectThemeLocal(digest && digest.game || text);

    // STEP 2 — digest
    async function runDigest() {
      setStep('digesting');
      setErr('');
      const mode = isURL ? `The user gave this link: ${text.trim()}\nUse what you know about this page, its game, or collection. If you don't recognise the exact page, infer the game from the words in the URL.` : `The user pasted a page of text. Treat it ONLY as a reference to identify the game/collection and which things are worth tracking — IGNORE navigation, ads, headings, metadata (platform, publisher, rating), prose, and formatting. Pasted text:\n"""\n${cleanPaste(text).slice(0, 4500)}\n"""`;
      const prompt = `You turn a game guide / walkthrough / collection page into a clean progress tracker.\n${mode}\n\nUsing your OWN knowledge of the identified game (not the page's wording), list the genuine things a player checks off to 100% it — e.g. "Heart Pieces", "Ocarina Songs", "Dungeons", "Gold Skulltulas", "Regions". Do NOT invent categories from page headers, metadata, or decoration.\n\nReturn ONLY JSON, no prose, no markdown fences:\n{"game":"<short real name>","summary":"<=18 words","categories":[{"id":"kebab-id","label":"<1–3 words>","kind":"counter|checklist|map|rated|notes","estimate":"<the REAL total number, e.g. 36 pieces / 12 songs / 9 areas>"}]}\nRules: 3 to 6 categories MAX. Each label is a short noun phrase (no colons, no sentences). kind: counter=large numbered collection; map=explorable areas/regions; rated=stages of mastery; checklist=discrete done/not-done list; notes=loose reminders. Put the real count in every estimate.`;
      try {
        const raw = await window.claude.complete(prompt);
        const j = looseJSON(raw);
        if (!j || !Array.isArray(j.categories)) throw new Error('no-parse');
        const seen = {};
        const cats = j.categories.filter(c => c && !isJunkLabel(c.label)).filter(c => {
          const k = (c.label || '').toLowerCase();
          if (seen[k]) return false;
          seen[k] = 1;
          return true;
        }).slice(0, 6).map((c, i) => ({
          id: c.id || 'cat-' + i,
          label: (c.label || 'Category').trim().slice(0, 28),
          kind: ALLOWED.includes(c.kind) ? c.kind : 'checklist',
          estimate: c.estimate || ''
        }));
        if (!cats.length) throw new Error('all-junk');
        setDigest({
          game: (j.game || 'New tracker').slice(0, 48),
          summary: j.summary || '',
          categories: cats
        });
        const pre = {};
        cats.forEach(c => pre[c.id] = true);
        setPicked(pre);
        setStep('choose');
      } catch (e) {
        setErr('Shasta couldn’t find clean trackables there. Try a link or paste that names the game and its collectibles.');
        setStep('error');
      }
    }

    // STEP 5 — populate. Counts come from the digest; one short call fetches names.
    async function runBuild() {
      setStep('building');
      setErr('');
      setNote('');
      const chosen = digest.categories.filter(c => picked[c.id]);
      const named = chosen.filter(c => c.kind === 'checklist' || c.kind === 'rated');
      let nameMap = {};
      if (named.length) {
        const src = isURL ? `for "${digest.game}"` : `from this content:\n"""\n${cleanPaste(text).slice(0, 3000)}\n"""`;
        const prompt = `List the real entries for these "${digest.game}" categories ${src}, using your own knowledge of the game.\nCategories: ${named.map(c => `"${c.label}"`).join(', ')}.\n\nReturn ONLY compact JSON, no prose:\n{${named.map(c => `"${c.label}":["entry","entry"]`).join(',')}}\nUse real, known names. Cap each list at 40 entries. If you don't know a category's entries, give an empty array for it.`;
        try {
          const raw = await window.claude.complete(prompt);
          nameMap = looseJSON(raw) || {};
        } catch (e) {
          nameMap = {};
        }
      }
      const findNames = label => {
        const keys = Object.keys(nameMap);
        const k = keys.find(x => x.toLowerCase() === label.toLowerCase()) || keys.find(x => label.toLowerCase().includes(x.toLowerCase()) || x.toLowerCase().includes(label.toLowerCase()));
        return k && Array.isArray(nameMap[k]) ? nameMap[k] : [];
      };
      const sections = chosen.map((c, i) => materializeSection(c, findNames(c.label), i));
      const gotNames = named.length === 0 || named.some(c => findNames(c.label).length);
      const now = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
      onCreate({
        id: 'p' + Date.now(),
        title: digest.game,
        subtitle: themeGuess.theme !== 'base' ? 'Completion run' : 'Tracker',
        theme: themeGuess.theme,
        cover: themeGuess.cover,
        started: now,
        sections,
        _note: gotNames ? '' : 'named-missing'
      });
    }
    const anyPicked = digest && digest.categories.some(c => picked[c.id]);
    return /*#__PURE__*/React.createElement("div", {
      "data-theme": themeGuess.theme,
      style: {
        minHeight: '100%',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px var(--gutter)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onCancel,
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 14.5,
        color: 'var(--text-muted)',
        padding: 4
      }
    }, "Cancel"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--text)'
      }
    }, "AI import"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '4px var(--gutter) 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 11,
        alignItems: 'flex-start',
        margin: '6px 0 16px'
      }
    }, /*#__PURE__*/React.createElement(_aShasta, {
      size: 42
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--surface)',
        borderRadius: '4px 16px 16px 16px',
        padding: '11px 14px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        lineHeight: 1.45,
        color: 'var(--text)',
        margin: 0
      }
    }, step === 'input' && 'Paste a link to a walkthrough or collection page — or drop in the page text itself. I’ll read it and figure out what’s worth tracking.', step === 'digesting' && 'Reading it over…', step === 'choose' && `Here’s what I found${digest && digest.game ? ` in ${digest.game}` : ''}. Which of these do you want to track?`, step === 'building' && 'Got it — building your tracker…', step === 'error' && (err || 'Hmm, that didn’t work.')))), (step === 'input' || step === 'error') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("textarea", {
      value: text,
      onChange: e => setText(e.target.value),
      placeholder: 'https://www.zeldadungeon.net/ocarina-of-time-walkthrough/\n\n…or paste the page’s text here.',
      rows: 5,
      style: {
        width: '100%',
        boxSizing: 'border-box',
        resize: 'none',
        borderRadius: 'var(--radius-md)',
        border: '1.5px solid var(--line-strong)',
        background: 'var(--surface)',
        padding: '13px 14px',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.5,
        color: 'var(--text)',
        outline: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8,
        margin: '9px 2px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        marginTop: 1
      }
    }, _aIc.spark('var(--accent)')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        color: 'var(--text-faint)',
        lineHeight: 1.4
      }
    }, isURL ? 'A link works from what I already know about that page — great for well-known games. Pasting the page text is the most accurate.' : 'Pasting the page’s text gives the most accurate result.')), /*#__PURE__*/React.createElement("button", {
      onClick: runDigest,
      disabled: text.trim().length < 4,
      style: {
        marginTop: 16,
        width: '100%',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '14px',
        cursor: text.trim().length < 4 ? 'default' : 'pointer',
        background: text.trim().length < 4 ? 'var(--surface-2)' : 'var(--accent)',
        color: text.trim().length < 4 ? 'var(--text-faint)' : 'var(--accent-contrast)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        WebkitTapHighlightColor: 'transparent',
        boxShadow: text.trim().length < 4 ? 'none' : '0 2px 6px rgba(30,22,14,.18)'
      }
    }, "Digest it")), (step === 'digesting' || step === 'building') && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
        padding: '40px 0'
      }
    }, /*#__PURE__*/React.createElement(Spinner, {
      size: 30
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        color: 'var(--text-faint)'
      }
    }, step === 'digesting' ? 'Digesting the page' : 'Fetching real names & building')), step === 'choose' && digest && /*#__PURE__*/React.createElement(React.Fragment, null, digest.summary && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        color: 'var(--text-muted)',
        margin: '0 2px 14px',
        lineHeight: 1.5
      }
    }, digest.summary), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 9
      }
    }, digest.categories.map(c => {
      const on = !!picked[c.id];
      return /*#__PURE__*/React.createElement("button", {
        key: c.id,
        onClick: () => setPicked(p => ({
          ...p,
          [c.id]: !p[c.id]
        })),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          textAlign: 'left',
          cursor: 'pointer',
          border: on ? '1.5px solid var(--accent)' : '1.5px solid var(--line)',
          background: on ? 'var(--accent-soft)' : 'var(--surface)',
          borderRadius: 'var(--radius-md)',
          padding: '13px 14px',
          boxShadow: 'var(--shadow-sm)',
          WebkitTapHighlightColor: 'transparent',
          transition: 'border-color .15s, background .15s'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 24,
          height: 24,
          borderRadius: 7,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: on ? 'var(--accent)' : 'var(--surface-2)',
          boxShadow: on ? 'none' : 'inset 0 0 0 1.5px var(--line-strong)'
        }
      }, on && _aIc.check('var(--accent-contrast)')), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 15.5,
          color: 'var(--text)'
        }
      }, c.label), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--text-faint)'
        }
      }, c.estimate)), /*#__PURE__*/React.createElement(KindBadge, {
        kind: c.kind
      }));
    })), /*#__PURE__*/React.createElement("button", {
      onClick: runBuild,
      disabled: !anyPicked,
      style: {
        marginTop: 18,
        width: '100%',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '14px',
        cursor: anyPicked ? 'pointer' : 'default',
        background: anyPicked ? 'var(--accent)' : 'var(--surface-2)',
        color: anyPicked ? 'var(--accent-contrast)' : 'var(--text-faint)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        WebkitTapHighlightColor: 'transparent',
        boxShadow: anyPicked ? '0 2px 6px rgba(30,22,14,.18)' : 'none'
      }
    }, "Build my tracker"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setStep('input'),
      style: {
        marginTop: 10,
        width: '100%',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13.5,
        color: 'var(--text-muted)',
        padding: 6
      }
    }, "\u2190 Start over"))));
  }

  // ── AI augment: feed a new walkthrough OR tell Shasta what she missed, and
  //    she proposes additions to THIS project — extra entries for existing
  //    sections, and/or whole new sections. You pick what to merge in. ──────────
  function projectSummary(p) {
    return p.sections.map(s => {
      const ex = (window.sectionEntries(s) || []).slice(0, 60).map(e => e.name);
      return `- "${s.title}" (${s.type}): ${ex.length ? ex.join(', ') : '(empty)'}`;
    }).join('\n');
  }
  function AIAugment({
    project,
    onApply,
    onClose
  }) {
    const [step, setStep] = React.useState('input'); // input | thinking | review | error | empty
    const [text, setText] = React.useState('');
    const [props, setProps] = React.useState([]); // proposed additions
    const [picked, setPicked] = React.useState({}); // "gi-ii" → bool
    const [err, setErr] = React.useState('');
    const isURL = looksLikeURL(text);
    async function run() {
      setStep('thinking');
      setErr('');
      const feed = isURL ? `The user points to this link: ${text.trim()} — use what you know about that page / game.` : `The user wrote (a new walkthrough, OR a note about what's missing):\n"""\n${cleanPaste(text).slice(0, 4000)}\n"""`;
      const prompt = `This is an existing completion tracker for "${project.title}". Its current sections and entries:\n${projectSummary(project)}\n\n${feed}\n\nPropose ADDITIONS only — things genuinely missing that belong in this tracker. You may add entries to an EXISTING section (match its exact title) or propose a NEW section. NEVER repeat entries already listed above.\n\nReturn ONLY JSON, no prose, no fences:\n{"additions":[{"section":"<exact existing title OR a new short title>","existing":true|false,"kind":"counter|checklist|map|rated|notes","items":["real name","real name"]}]}\nUse real, known names. Keep each items list under 40. If nothing is genuinely missing, return {"additions":[]}.`;
      try {
        const raw = await window.claude.complete(prompt);
        const j = looseJSON(raw);
        const titles = project.sections.map(s => s.title.toLowerCase());
        const adds = (j && j.additions || []).map(a => {
          const items = (Array.isArray(a.items) ? a.items : []).map(x => ('' + (typeof x === 'string' ? x : x && x.name || '')).trim()).filter(Boolean);
          const label = ('' + (a.section || '')).trim();
          const existing = titles.includes(label.toLowerCase());
          return {
            label: label.slice(0, 40),
            existing,
            kind: ALLOWED.includes(a.kind) ? a.kind : 'checklist',
            items: [...new Set(items)].slice(0, 40)
          };
        }).filter(a => a.label && a.items.length && (a.existing || !isJunkLabel(a.label)));
        if (!adds.length) {
          setStep('empty');
          return;
        }
        const pre = {};
        adds.forEach((a, gi) => a.items.forEach((_, ii) => pre[gi + '-' + ii] = true));
        setProps(adds);
        setPicked(pre);
        setStep('review');
      } catch (e) {
        setErr('Shasta couldn’t work that one out. Try pasting the walkthrough text, or be specific about what’s missing.');
        setStep('error');
      }
    }
    function apply() {
      const next = JSON.parse(JSON.stringify(project));
      const byTitle = {};
      next.sections.forEach(s => {
        byTitle[s.title.toLowerCase()] = s;
      });
      let added = 0;
      props.forEach((a, gi) => {
        const chosen = a.items.filter((_, ii) => picked[gi + '-' + ii]);
        if (!chosen.length) return;
        let sec = a.existing ? byTitle[a.label.toLowerCase()] : null;
        if (!sec) {
          sec = window.buildSection({
            id: window.uid('sec'),
            title: a.label,
            type: a.kind
          }, a.kind, []);
          next.sections.push(sec);
          byTitle[a.label.toLowerCase()] = sec;
        }
        chosen.forEach(name => {
          if (window.addEntryToSection(sec, name)) added++;
        });
      });
      onApply(next, added);
    }
    const total = props.reduce((n, a, gi) => n + a.items.filter((_, ii) => picked[gi + '-' + ii]).length, 0);
    return /*#__PURE__*/React.createElement("div", {
      "data-theme": project.theme,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 90,
        background: 'rgba(30,22,14,.42)',
        display: 'flex',
        alignItems: 'flex-end',
        animation: 'hath-fade .2s ease'
      },
      onClick: onClose
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: '100%',
        maxHeight: '90%',
        background: 'var(--bg)',
        borderRadius: '24px 24px 0 0',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 -8px 30px rgba(0,0,0,.28)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px var(--gutter) 6px',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 4,
        borderRadius: 999,
        background: 'var(--line-strong)',
        margin: '0 auto 14px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 11,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(_aShasta, {
      size: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--surface)',
        borderRadius: '4px 16px 16px 16px',
        padding: '10px 13px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        lineHeight: 1.45,
        color: 'var(--text)',
        margin: 0
      }
    }, step === 'input' && `Feed me another walkthrough for ${project.title}, or just tell me what I missed — I’ll suggest what to add.`, step === 'thinking' && 'Looking for what’s missing…', step === 'review' && 'Here’s what I’d add. Uncheck anything you don’t want.', step === 'empty' && 'I couldn’t find anything missing — looks complete to me!', step === 'error' && (err || 'That didn’t work.'))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '10px var(--gutter) 8px'
      }
    }, (step === 'input' || step === 'error') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("textarea", {
      value: text,
      onChange: e => setText(e.target.value),
      autoFocus: true,
      placeholder: 'Paste another walkthrough, a link…\n\n…or: “You missed the Sunken Treasure charts and Knuckle’s figurine.”',
      rows: 5,
      style: {
        width: '100%',
        boxSizing: 'border-box',
        resize: 'none',
        borderRadius: 'var(--radius-md)',
        border: '1.5px solid var(--line-strong)',
        background: 'var(--surface)',
        padding: '12px 13px',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.5,
        color: 'var(--text)',
        outline: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'flex-start',
        margin: '9px 2px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        marginTop: 1
      }
    }, _aIc.spark('var(--accent)')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        color: 'var(--text-faint)',
        lineHeight: 1.4
      }
    }, "I\u2019ll only suggest things not already in your tracker."))), step === 'thinking' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
        padding: '36px 0'
      }
    }, /*#__PURE__*/React.createElement(Spinner, {
      size: 28
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13.5,
        color: 'var(--text-faint)'
      }
    }, "Comparing against your tracker")), step === 'empty' && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '24px 8px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setStep('input'),
      style: ghostBtn()
    }, "Try a different walkthrough")), step === 'review' && props.map((a, gi) => /*#__PURE__*/React.createElement("div", {
      key: gi,
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        margin: '2px 2px 8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--text)'
      }
    }, a.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 600,
        color: a.existing ? 'var(--text-faint)' : 'var(--accent-deep)',
        background: a.existing ? 'var(--surface-2)' : 'var(--accent-soft)',
        borderRadius: 999,
        padding: '2px 8px'
      }
    }, a.existing ? 'add to section' : 'new · ' + (KIND_META[a.kind] || {}).label)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, a.items.map((it, ii) => {
      const key = gi + '-' + ii,
        on = !!picked[key];
      return /*#__PURE__*/React.createElement("button", {
        key: ii,
        onClick: () => setPicked(p => ({
          ...p,
          [key]: !p[key]
        })),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          textAlign: 'left',
          cursor: 'pointer',
          border: '1px solid ' + (on ? 'var(--accent)' : 'var(--line)'),
          background: on ? 'var(--accent-soft)' : 'var(--surface)',
          borderRadius: 'var(--radius-sm)',
          padding: '9px 11px',
          WebkitTapHighlightColor: 'transparent'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 20,
          height: 20,
          borderRadius: 6,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: on ? 'var(--accent)' : 'var(--surface-2)',
          boxShadow: on ? 'none' : 'inset 0 0 0 1.5px var(--line-strong)'
        }
      }, on && _aIc.check('var(--accent-contrast)')), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 14.5,
          color: 'var(--text)'
        }
      }, it));
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        display: 'flex',
        gap: 10,
        padding: '12px var(--gutter)',
        borderTop: '1px solid var(--line)',
        background: 'var(--bg)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        ...ghostBtn(),
        flex: 1,
        padding: '12px'
      }
    }, step === 'review' ? 'Cancel' : 'Close'), (step === 'input' || step === 'error') && /*#__PURE__*/React.createElement("button", {
      onClick: run,
      disabled: text.trim().length < 3,
      style: {
        flex: 1,
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '12px',
        cursor: text.trim().length < 3 ? 'default' : 'pointer',
        background: text.trim().length < 3 ? 'var(--surface-2)' : 'var(--accent)',
        color: text.trim().length < 3 ? 'var(--text-faint)' : 'var(--accent-contrast)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        WebkitTapHighlightColor: 'transparent'
      }
    }, "Find additions"), step === 'review' && /*#__PURE__*/React.createElement("button", {
      onClick: apply,
      disabled: !total,
      style: {
        flex: 1.4,
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '12px',
        cursor: total ? 'pointer' : 'default',
        background: total ? 'var(--accent)' : 'var(--surface-2)',
        color: total ? 'var(--accent-contrast)' : 'var(--text-faint)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        WebkitTapHighlightColor: 'transparent',
        boxShadow: total ? '0 2px 6px rgba(30,22,14,.18)' : 'none'
      }
    }, "Add ", total || '', " ", total === 1 ? 'item' : 'items'))));
  }
  function ghostBtn() {
    return {
      border: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: 'var(--surface-2)',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      padding: '10px 16px',
      WebkitTapHighlightColor: 'transparent'
    };
  }
  window.AIImport = AIImport;
  window.AIAugment = AIAugment;
})();

/* === edit.jsx (compiled) === */
/* HATH · Projects — manual editing.
   SectionEditor: a bottom sheet to rename a section, switch how it's tracked
   (counter ↔ checklist ↔ map ↔ rated ↔ notes), and add / rename / delete its
   entries. Progress (done / collected) is preserved across a type switch.
   Used both for editing an existing section and for adding a new one. */

(function () {
  const {
    Ic: _eIc,
    uid: _uid,
    sectionEntries: _entries,
    buildSection: _build
  } = window;
  const TYPES = [{
    k: 'counter',
    label: 'Counter',
    tip: 'dots, X of Y'
  }, {
    k: 'checklist',
    label: 'Checklist',
    tip: 'done / not done'
  }, {
    k: 'map',
    label: 'Map grid',
    tip: 'areas / regions'
  }, {
    k: 'rated',
    label: 'Rated',
    tip: 'stages of mastery'
  }, {
    k: 'notes',
    label: 'Notes',
    tip: 'free text'
  }];
  function SectionEditor({
    sec,
    isNew,
    onApply,
    onDelete,
    onClose
  }) {
    const [title, setTitle] = React.useState(sec.title || '');
    const [type, setType] = React.useState(sec.type === 'collection' ? 'counter' : sec.type || 'checklist');
    const [shape, setShape] = React.useState(sec.shape || 'circle');
    const [rows, setRows] = React.useState(() => {
      const e = _entries(sec);
      return e.length ? e : type === 'notes' ? [{
        name: '',
        done: false
      }] : [{
        name: '',
        done: false
      }, {
        name: '',
        done: false
      }];
    });
    const lastRef = React.useRef(null);
    const isNotes = type === 'notes';
    const addRow = () => setRows(r => [...r, {
      name: '',
      done: false
    }]);
    const setName = (i, v) => setRows(r => r.map((x, j) => j === i ? {
      ...x,
      name: v
    } : x));
    const delRow = i => setRows(r => r.filter((_, j) => j !== i));
    React.useEffect(() => {
      if (lastRef.current) lastRef.current.focus();
    }, [rows.length]);
    const save = () => {
      const clean = rows.map(r => ({
        ...r,
        name: ('' + r.name).trim()
      })).filter(r => r.name.length);
      onApply(_build({
        ...sec,
        title: title.trim() || 'Section',
        shape: shape
      }, type, clean));
    };
    const sheet = children => /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        zIndex: 90,
        background: 'rgba(30,22,14,.42)',
        display: 'flex',
        alignItems: 'flex-end',
        animation: 'hath-fade .2s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: '100%',
        maxHeight: '88%',
        background: 'var(--bg)',
        borderRadius: '24px 24px 0 0',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 -8px 30px rgba(0,0,0,.28)'
      }
    }, children));
    return sheet(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px var(--gutter) 0',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 4,
        borderRadius: 999,
        background: 'var(--line-strong)',
        margin: '0 auto 14px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--text)',
        marginBottom: 14
      }
    }, isNew ? 'New section' : 'Edit section'), /*#__PURE__*/React.createElement("label", {
      style: lbl()
    }, "Title"), /*#__PURE__*/React.createElement("input", {
      value: title,
      onChange: e => setTitle(e.target.value),
      placeholder: "e.g. Heart Pieces",
      style: inp()
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        ...lbl(),
        marginTop: 14
      }
    }, "Track it as"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 7
      }
    }, TYPES.map(t => {
      const on = type === t.k;
      return /*#__PURE__*/React.createElement("button", {
        key: t.k,
        onClick: () => setType(t.k),
        style: {
          border: on ? '1.5px solid var(--accent)' : '1.5px solid var(--line-strong)',
          background: on ? 'var(--accent)' : 'var(--surface)',
          color: on ? 'var(--accent-contrast)' : 'var(--text-muted)',
          borderRadius: 999,
          padding: '8px 13px',
          cursor: 'pointer',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 13,
          WebkitTapHighlightColor: 'transparent',
          transition: 'background .15s, border-color .15s'
        }
      }, t.label);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        color: 'var(--text-faint)',
        margin: '8px 2px 4px'
      }
    }, (TYPES.find(t => t.k === type) || {}).tip, !isNew && ' · your progress carries over'), type === 'counter' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
      style: {
        ...lbl(),
        marginTop: 14
      }
    }, "Counter shape"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 7
      }
    }, [['circle', '\u25CF', 'Circle'], ['square', '\u25A0', 'Square'], ['star', '\u2605', 'Star'], ['heart', '\u2665', 'Heart']].map(([k, glyph, label]) => {
      const on = shape === k;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        onClick: () => setShape(k),
        style: {
          border: on ? '1.5px solid var(--accent)' : '1.5px solid var(--line-strong)',
          background: on ? 'var(--accent)' : 'var(--surface)',
          color: on ? 'var(--accent-contrast)' : 'var(--text-muted)',
          borderRadius: 999,
          padding: '8px 14px',
          cursor: 'pointer',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 13,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          WebkitTapHighlightColor: 'transparent',
          transition: 'background .15s, border-color .15s'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14
        }
      }, glyph), " ", label);
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        margin: '14px 2px 8px'
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        ...lbl(),
        margin: 0
      }
    }, isNotes ? 'Notes' : 'Entries'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11.5,
        color: 'var(--text-faint)'
      }
    }, rows.filter(r => ('' + r.name).trim()).length))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '0 var(--gutter)',
        minHeight: 60
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, !isNotes && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        flexShrink: 0,
        background: r.done ? 'var(--accent)' : 'var(--line-strong)'
      },
      title: r.done ? 'done' : 'not done'
    }), /*#__PURE__*/React.createElement("input", {
      value: r.name,
      onChange: e => setName(i, e.target.value),
      ref: i === rows.length - 1 ? lastRef : null,
      placeholder: isNotes ? 'Write a note…' : 'Entry name',
      onKeyDown: e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addRow();
        }
      },
      style: {
        flex: 1,
        boxSizing: 'border-box',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--line)',
        background: 'var(--surface)',
        padding: '9px 11px',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        color: 'var(--text)',
        outline: 'none'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => delRow(i),
      "aria-label": "Delete",
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: 6,
        flexShrink: 0,
        color: 'var(--text-faint)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, _eIc.trash('var(--text-faint)'))))), /*#__PURE__*/React.createElement("button", {
      onClick: addRow,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '10px 2px 4px',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13.5,
        color: 'var(--accent)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, _eIc.plus('var(--accent)'), " ", isNotes ? 'Add note' : 'Add entry')), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        display: 'flex',
        gap: 10,
        padding: '12px var(--gutter)',
        borderTop: '1px solid var(--line)',
        background: 'var(--bg)'
      }
    }, !isNew && /*#__PURE__*/React.createElement("button", {
      onClick: onDelete,
      style: {
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '12px 16px',
        cursor: 'pointer',
        flexShrink: 0,
        background: 'var(--danger-soft, #F6DED7)',
        color: 'var(--danger, #C2503B)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        WebkitTapHighlightColor: 'transparent'
      }
    }, "Delete"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        flex: 1,
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '12px',
        cursor: 'pointer',
        background: 'var(--surface-2)',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        WebkitTapHighlightColor: 'transparent'
      }
    }, "Cancel"), /*#__PURE__*/React.createElement("button", {
      onClick: save,
      style: {
        flex: 1,
        border: 'none',
        borderRadius: 'var(--radius-md)',
        padding: '12px',
        cursor: 'pointer',
        background: 'var(--accent)',
        color: 'var(--accent-contrast)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        WebkitTapHighlightColor: 'transparent',
        boxShadow: '0 2px 6px rgba(30,22,14,.18)'
      }
    }, isNew ? 'Add section' : 'Save'))));
  }
  function lbl() {
    return {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 10.5,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 6
    };
  }
  function inp() {
    return {
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--line-strong)',
      background: 'var(--surface)',
      padding: '11px 13px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text)',
      outline: 'none'
    };
  }
  window.SectionEditor = SectionEditor;
  window.newBlankSection = function (title) {
    return {
      id: _uid('sec'),
      title: title || '',
      type: 'checklist',
      items: []
    };
  };
})();

/* === chest.jsx (compiled) === */
/* HATH · Projects — the treasure-chest moment.
   Fires whenever a section (or a whole project) reaches 100%.
   Chest drops in → shakes → bursts; the Triforce erupts UP out of the chest
   and floats above it on a fan of light with a shower of gold sparkles.
   (The chest art is a closed chest, so the treasure rises out the top rather
   than the lid hinging open.) Tap anywhere to close. */

function playChime() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    [0, 0.12, 0.24, 0.42].forEach((t, i) => {
      const f = [523.25, 659.25, 783.99, 1046.5][i];
      const o = ctx.createOscillator(),
        g = ctx.createGain();
      o.type = 'triangle';
      o.frequency.value = f;
      o.connect(g);
      g.connect(ctx.destination);
      const s = ctx.currentTime + t;
      g.gain.setValueAtTime(0.0001, s);
      g.gain.exponentialRampToValueAtTime(0.16, s + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, s + 0.5);
      o.start(s);
      o.stop(s + 0.55);
    });
  } catch (e) {}
}

// gold sparkle burst, centred wherever you place it
function Sparkles({
  n = 20,
  style
}) {
  const parts = React.useMemo(() => Array.from({
    length: n
  }, (_, i) => {
    const a = i / n * Math.PI * 2 + Math.random() * 0.5;
    const dist = 70 + Math.random() * 130;
    return {
      tx: Math.cos(a) * dist,
      ty: Math.sin(a) * dist - 40,
      size: 5 + Math.random() * 9,
      delay: Math.random() * 0.5,
      dur: 0.9 + Math.random() * 0.8,
      gold: Math.random() > 0.4
    };
  }), [n]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 0,
      height: 0,
      ...style
    }
  }, parts.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      width: p.size,
      height: p.size,
      marginLeft: -p.size / 2,
      marginTop: -p.size / 2,
      background: p.gold ? '#FFE27A' : '#FFF6D9',
      borderRadius: '50%',
      boxShadow: `0 0 ${p.size * 1.5}px ${p.gold ? '#E0B33C' : '#FFF'}`,
      ['--tx']: p.tx + 'px',
      ['--ty']: p.ty + 'px',
      animation: `hath-spark ${p.dur}s var(--ease-out) ${p.delay}s both`
    }
  })));
}
function TreasureChest({
  reason,
  onClose
}) {
  const [phase, setPhase] = React.useState(0); // 0 drop · 1 shake · 2 burst/open
  React.useEffect(() => {
    playChime();
    const t1 = setTimeout(() => setPhase(1), 480);
    const t2 = setTimeout(() => setPhase(2), 1080);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  const open = phase >= 2;

  // caption copy adapts to what completed
  const r = reason || {};
  const isProject = r.kind === 'project';
  const eyebrow = isProject ? 'Project complete!' : 'Section complete!';
  const headline = isProject ? 'You did it — 100%!' : r.title || 'Complete!';
  const sub = isProject ? `Every section of ${r.parent || r.title || 'this tracker'} is done.` : `${r.title || 'This section'} is fully charted${r.parent ? ' · ' + r.parent : ''}.`;
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    "data-theme": "zelda",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 2147483000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      overflow: 'hidden',
      background: '#15281b',
      WebkitTapHighlightColor: 'transparent',
      '--ease-soft': 'cubic-bezier(.4,0,.2,1)',
      '--ease-out': 'cubic-bezier(.2,.8,.3,1)',
      '--font-theme-display': "'Playfair Display',Georgia,serif",
      '--font-body': "-apple-system,system-ui,'Segoe UI',sans-serif",
      '--font-mono': "ui-monospace,'SF Mono',Menlo,monospace"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(120% 80% at 50% 42%, rgba(60,125,78,.55), rgba(21,40,27,0) 70%)'
    }
  }), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#FFF8E0',
      animation: 'hath-flash .6s ease-out both',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 300,
      height: 420,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 92,
      transform: 'translateX(-50%)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'translateY(34px) scale(.28)',
      opacity: open ? 1 : 0,
      animation: open ? 'hath-erupt 1s var(--ease-soft) both, hath-erupt-bob 3.4s ease-in-out 1s infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 132,
      height: 116
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 360,
      height: 360,
      marginLeft: -180,
      marginTop: -180,
      zIndex: 0,
      background: 'repeating-conic-gradient(from 0deg at 50% 50%, rgba(255,231,138,.42) 0deg 7deg, transparent 7deg 17deg)',
      maskImage: 'radial-gradient(closest-side, #000 26%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(closest-side, #000 26%, transparent 70%)',
      animation: 'hath-spin 16s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://stormyreigns.github.io/HATH/projects-assets/triforce.webp",
    alt: "",
    style: {
      position: 'relative',
      zIndex: 1,
      width: 132,
      display: 'block',
      filter: 'drop-shadow(0 0 26px rgba(255,210,90,.95))'
    }
  })))), open && /*#__PURE__*/React.createElement(Sparkles, {
    style: {
      left: '50%',
      bottom: 150
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 0,
      transform: 'translateX(-50%)',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://stormyreigns.github.io/HATH/projects-assets/treasure-chest.png",
    alt: "",
    style: {
      width: 204,
      display: 'block',
      transformOrigin: '50% 100%',
      filter: open ? 'brightness(1.08) drop-shadow(0 12px 24px rgba(0,0,0,.55))' : 'drop-shadow(0 12px 24px rgba(0,0,0,.55))',
      animation: phase === 0 ? 'hath-drop .55s var(--ease-soft) both' : phase === 1 ? 'hath-shake .5s ease-in-out' : 'hath-burst .5s var(--ease-soft) both'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      textAlign: 'center',
      padding: '0 32px',
      flexShrink: 0,
      opacity: open ? 1 : 0,
      transform: open ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity .5s ease .5s, transform .5s var(--ease-soft) .5s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: '#FFE27A',
      marginBottom: 6
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-theme-display)',
      fontWeight: 700,
      fontSize: 27,
      color: '#FFF',
      lineHeight: 1.12,
      textShadow: '0 2px 14px rgba(0,0,0,.4)'
    }
  }, headline), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,.82)',
      marginTop: 8,
      lineHeight: 1.4
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      color: 'rgba(255,255,255,.62)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.55)',
      animation: 'hath-pulse 1.4s ease-in-out infinite'
    }
  }), " tap to close"))), document.body);
}
window.TreasureChest = TreasureChest;

/* === app.jsx (compiled) === */
/* HATH · Projects — root app. Navigation + live data + celebration glue. */

const {
  Home: _Home,
  TrackerView: _TV,
  Build: _Build,
  TreasureChest: _Chest,
  AIImport: _AI
} = window;
function clone(x) {
  return JSON.parse(JSON.stringify(x));
}
const PROJ_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "layout": "cards",
  "celebrations": true
} /*EDITMODE-END*/;
function ProjectsApp() {
  const [t, setTweak] = window.useTweaks(PROJ_TWEAK_DEFAULTS);
  const PROJ_PERSIST_KEY = 'shasta_projapp_' + function () {
    try {
      return localStorage.getItem('shasta_user') || 'guest';
    } catch (e) {
      return 'guest';
    }
  }();
  const [projects, setProjects] = React.useState(() => {
    try {
      const _r = localStorage.getItem(PROJ_PERSIST_KEY);
      if (_r) {
        const _p = JSON.parse(_r);
        if (Array.isArray(_p)) return _p;
      }
    } catch (e) {}
    return clone(window.HATH_DATA.projects);
  });
  // True when this device had no saved projects, so what's on screen is only
  // the demo seed and can safely be replaced by a cloud backup.
  const freshDeviceRef = React.useRef(function () {
    try { return !localStorage.getItem(PROJ_PERSIST_KEY); } catch (e) { return false; }
  }());
  const [backup, setBackup] = React.useState(function () {
    return window.__projBackup ? window.__projBackup.get() : { status: 'idle', at: null, error: null };
  });
  const projectsRef = React.useRef(projects);
  React.useEffect(() => { projectsRef.current = projects; }, [projects]);

  React.useEffect(() => {
    try {
      localStorage.setItem(PROJ_PERSIST_KEY, JSON.stringify(projects));
    } catch (e) {}
    if (window.__projBackup) window.__projBackup.schedule(projects);
  }, [projects]);

  // Mirror backup status into render, and pull a backup on a fresh device.
  React.useEffect(() => {
    if (!window.__projBackup) return;
    const off = window.__projBackup.subscribe(setBackup);
    window.__projBackup.load().then(function (remote) {
      if (remote && freshDeviceRef.current) {
        freshDeviceRef.current = false;
        setProjects(remote);
      }
    });
    // Don't lose the last few seconds of edits when the app is backgrounded.
    const onHide = function () {
      if (document.visibilityState === 'hidden') window.__projBackup.flush(projectsRef.current);
    };
    document.addEventListener('visibilitychange', onHide);
    return function () {
      off();
      document.removeEventListener('visibilitychange', onHide);
    };
  }, []);
  const [view, setView] = React.useState('home'); // home | build | tracker
  const [sel, setSel] = React.useState(null);
  // Published so the Blathers chat in index.html can say which tracker is open.
  React.useEffect(() => {
    window.__projectsOpenId = (view === 'tracker') ? sel : null;
  }, [sel, view]);
  // Lets the Blathers chat add or update a tracker through React rather than
  // writing localStorage behind the app's back (which wouldn't re-render).
  React.useEffect(() => {
    window.__projectsUpsertTracker = function (t) {
      if (!t || !Array.isArray(t.sections)) return false;
      setProjects(prev => {
        const i = prev.findIndex(p => String(p.id) === String(t.id));
        if (i >= 0) { const c = prev.slice(); c[i] = t; return c; }
        return prev.concat([t]);
      });
      return true;
    };
    return () => { delete window.__projectsUpsertTracker; };
  }, []);
  const [chest, setChest] = React.useState(null); // celebration payload or null

  const celebrate = reason => {
    if (t.celebrations) setChest(reason || {
      kind: 'section'
    });
  };
  const current = projects.find(p => p.id === sel);

  // map's mutator closes over the section's cells; ensure update passes the section for maps.
  const updateForView = (pid, sid, mut) => {
    setProjects(ps => ps.map(p => {
      if (p.id !== pid) return p;
      const np = clone(p);
      const sec = np.sections.find(s => s.id === sid);
      if (!sec) return np;
      if (sec.type === 'map' || sec.type === 'notes') mut(sec);else mut(sec.items);
      return np;
    }));
  };
  let screen;
  if (view === 'build') {
    screen = /*#__PURE__*/React.createElement(_Build, {
      onCancel: () => setView('home'),
      onAIImport: () => setView('import'),
      onCreate: p => {
        setProjects(ps => [p, ...ps]);
        setSel(p.id);
        setView('tracker');
      }
    });
  } else if (view === 'import') {
    screen = /*#__PURE__*/React.createElement(_AI, {
      onCancel: () => setView('build'),
      onCreate: p => {
        setProjects(ps => [p, ...ps]);
        setSel(p.id);
        setView('tracker');
      }
    });
  } else if (view === 'tracker' && current) {
    screen = /*#__PURE__*/React.createElement(_TV, {
      project: current,
      layout: t.layout,
      celebrate: celebrate,
      onBack: () => setView('home'),
      update: updateForView,
      onEditProject: np => setProjects(ps => ps.map(p => p.id === np.id ? np : p)),
      onRename: (pid, vals) => setProjects(ps => ps.map(p => p.id === pid ? {
        ...p,
        ...vals
      } : p)),
      onDelete: pid => {
        setProjects(ps => ps.filter(p => p.id !== pid));
        setSel(null);
        setView('home');
      }
    });
  } else {
    screen = /*#__PURE__*/React.createElement(_Home, {
      projects: projects,
      backup: backup,
      onOpen: id => {
        setSel(id);
        setView('tracker');
      },
      onNew: () => setView('build')
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      paddingTop: 8
    }
  }, screen), chest && /*#__PURE__*/React.createElement(_Chest, {
    reason: chest,
    onClose: () => setChest(null)
  }), /*#__PURE__*/React.createElement(window.TweaksPanel, null, /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Tracker layout"
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Direction",
    value: t.layout,
    options: ['cards', 'atlas', 'compact'],
    onChange: v => setTweak('layout', v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '11px/1.4 ui-sans-serif, system-ui',
      color: 'rgba(41,38,27,.55)',
      marginTop: -2
    }
  }, "cards \xB7 default \xB7 atlas \xB7 big & game-like \xB7 compact \xB7 dense meters"), /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Delight"
  }), /*#__PURE__*/React.createElement(window.TweakToggle, {
    label: "Treasure-chest celebration",
    value: t.celebrations,
    onChange: v => setTweak('celebrations', v)
  }), /*#__PURE__*/React.createElement(window.TweakButton, {
    label: "Replay chest",
    onClick: () => setChest({
      kind: 'project',
      title: 'Wind Waker',
      parent: 'Wind Waker'
    })
  })));
}
window.ProjectsApp = ProjectsApp;

/* HATH Projects — on-demand mount into #projectsAppRoot */
(function () {
  window.mountProjectsApp = function () {
    var el = document.getElementById('projectsAppRoot');
    if (!el || !window.React || !window.ReactDOM || !window.ProjectsApp) return;
    if (!window.__projectsRoot) window.__projectsRoot = window.ReactDOM.createRoot(el);
    window.__projectsRoot.render(window.React.createElement(window.ProjectsApp));
  };
})();

window.__showProjectsApp = function(){
  ['projectsLanding','projectsView','programView'].forEach(function(id){ var el=document.getElementById(id); if(el) el.style.display='none'; });
  var root=document.getElementById('projectsAppRoot'); if(root) root.classList.add('pa-show');
  if(window.mountProjectsApp) window.mountProjectsApp();
};
