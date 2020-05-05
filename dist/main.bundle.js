!function(e){function n(n){for(var r,o,c=n[0],i=n[1],a=n[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(x,o)&&x[o]&&u.push(x[o][0]),x[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(n);u.length;)u.shift()();return A.push.apply(A,a||[]),t()}function t(){for(var e,n=0;n<A.length;n++){for(var t=A[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==x[c]&&(r=!1)}r&&(A.splice(n--,1),e=I(I.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!g[e]||!O[e])return;for(var t in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(y[t]=n[t]);0==--b&&0===m&&P()}(e,n),r&&r(e,n)};var o,c=!0,i="d62a8207248f89ce89d2",a={},l=[],u=[];function d(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:j,apply:D,status:function(e){if(!e)return s;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:a[e]};return o=void 0,n}var p=[],s="idle";function f(e){s=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var h,y,v,b=0,m=0,w={},O={},g={};function _(e){return+e+""===e?+e:e}function j(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return c=e,f("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=I.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return f("idle"),null;O={},w={},g=e.c,v=e.h,f("prepare");var n=new Promise((function(e,n){h={resolve:e,reject:n}}));for(var t in y={},x)E(t);return"prepare"===s&&0===m&&0===b&&P(),n}));var n}function E(e){g[e]?(O[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=I.p+""+e+"."+i+".hot-update.js",document.head.appendChild(n)}(e)):w[e]=!0}function P(){f("ready");var e=h;if(h=null,e)if(c)Promise.resolve().then((function(){return D(c)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in y)Object.prototype.hasOwnProperty.call(y,t)&&n.push(_(t));e.resolve(n)}}function D(n){if("ready"!==s)throw new Error("apply() is only allowed in ready status");var t,r,o,c,u;function d(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((c=H[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var l=0;l<c.parents.length;l++){var u=c.parents[l],d=H[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===n.indexOf(u)&&(d.hot._acceptedDependencies[i]?(t[u]||(t[u]=[]),p(t[u],[i])):(delete t[u],n.push(u),r.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},b=[],m={},w=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var O in y)if(Object.prototype.hasOwnProperty.call(y,O)){var j;u=_(O);var E=!1,P=!1,D=!1,A="";switch((j=y[O]?d(u):{type:"disposed",moduleId:O}).chain&&(A="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+j.moduleId+A));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+A));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(E=new Error("Aborted because "+u+" is not accepted"+A));break;case"accepted":n.onAccepted&&n.onAccepted(j),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),D=!0;break;default:throw new Error("Unexception type "+j.type)}if(E)return f("abort"),Promise.reject(E);if(P)for(u in m[u]=y[u],p(b,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,u)&&(h[u]||(h[u]=[]),p(h[u],j.outdatedDependencies[u]));D&&(p(b,[j.moduleId]),m[u]=w)}var k,S=[];for(r=0;r<b.length;r++)u=b[r],H[u]&&H[u].hot._selfAccepted&&m[u]!==w&&S.push({module:u,errorHandler:H[u].hot._selfAccepted});f("dispose"),Object.keys(g).forEach((function(e){!1===g[e]&&function(e){delete x[e]}(e)}));for(var M,R,T=b.slice();T.length>0;)if(u=T.pop(),c=H[u]){var U={},q=c.hot._disposeHandlers;for(o=0;o<q.length;o++)(t=q[o])(U);for(a[u]=U,c.hot.active=!1,delete H[u],delete h[u],o=0;o<c.children.length;o++){var J=H[c.children[o]];J&&((k=J.parents.indexOf(u))>=0&&J.parents.splice(k,1))}}for(u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&(c=H[u]))for(R=h[u],o=0;o<R.length;o++)M=R[o],(k=c.children.indexOf(M))>=0&&c.children.splice(k,1);for(u in f("apply"),i=v,m)Object.prototype.hasOwnProperty.call(m,u)&&(e[u]=m[u]);var C=null;for(u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&(c=H[u])){R=h[u];var N=[];for(r=0;r<R.length;r++)if(M=R[r],t=c.hot._acceptedDependencies[M]){if(-1!==N.indexOf(t))continue;N.push(t)}for(r=0;r<N.length;r++){t=N[r];try{t(R)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:R[r],error:e}),n.ignoreErrored||C||(C=e)}}}for(r=0;r<S.length;r++){var L=S[r];u=L.module,l=[u];try{I(u)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,originalError:e}),n.ignoreErrored||C||(C=t),C||(C=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||C||(C=e)}}return C?(f("fail"),Promise.reject(C)):(f("idle"),new Promise((function(e){e(b)})))}var H={},x={0:0},A=[];function I(n){if(H[n])return H[n].exports;var t=H[n]={i:n,l:!1,exports:{},hot:d(n),parents:(u=l,l=[],u),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=H[e];if(!n)return I;var t=function(t){return n.hot.active?(H[t]?-1===H[t].parents.indexOf(e)&&H[t].parents.push(e):(l=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),l=[]),I(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(n){I[e]=n}}};for(var c in I)Object.prototype.hasOwnProperty.call(I,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(t,c,r(c));return t.e=function(e){return"ready"===s&&f("prepare"),m++,I.e(e).then(n,(function(e){throw n(),e}));function n(){m--,"prepare"===s&&(w[e]||E(e),0===m&&0===b&&P())}},t.t=function(e,n){return 1&n&&(e=t(e)),I.t(e,-2&n)},t}(n)),t.l=!0,t.exports}I.m=e,I.c=H,I.d=function(e,n,t){I.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,n){if(1&n&&(e=I(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(I.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)I.d(t,r,function(n){return e[n]}.bind(null,r));return t},I.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(n,"a",n),n},I.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},I.p="/dist/",I.h=function(){return i};var k=window.webpackJsonp=window.webpackJsonp||[],S=k.push.bind(k);k.push=n,k=k.slice();for(var M=0;M<k.length;M++)n(k[M]);var R=S;A.push([11,1]),t()}({1:function(e,n,t){(n=t(10)(!1)).push([e.i,".App {\n  margin: 1rem;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.App h1 {\n  color: #b61919;\n}",""]),e.exports=n},11:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(3),i=t.n(c),a=(t(8),function(){return o.a.createElement("h1",null,"Hello, ","React App","!")});function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?f(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var v=function(e){function n(){var e,t;u(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return y(f(t=p(this,(e=s(n)).call.apply(e,[this].concat(o)))),"state",{user:"John"}),t}var t,r,c;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,e),t=n,(r=[{key:"render",value:function(){return o.a.createElement("p",null,"How are you, ",this.state.user,"?")}}])&&d(t.prototype,r),c&&d(t,c),n}(r.Component),b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(a,null),o.a.createElement(v,null),o.a.createElement("span",null,"This is React App template"))};i.a.render(o.a.createElement(b,null),document.getElementById("root"))},8:function(e,n,t){var r=t(9),o=t(1);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var c={insert:"head",singleton:!1},i=r(o,c),a=o.locals?o.locals:{};o.locals||e.hot.accept(1,(function(){var n=t(1);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]),i(n)})),e.hot.dispose((function(){i()})),e.exports=a}});