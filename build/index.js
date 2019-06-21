module.exports=function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}([function(n,t){n.exports=require("react")},function(n,t){n.exports=require("styled-components")},function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(1),a=e.n(i);function u(){var n=w(["\n  background: ",";\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  margin: 5px;\n  cursor: pointer;\n  border-radius: 50%;\n"]);return u=function(){return n},n}function c(){var n=w(["\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  height: 10%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  transform: translate(0, -0%);\n"]);return c=function(){return n},n}function l(){var n=w(["\n  border: solid ",";\n  border-width: 0 4px 4px 0;\n  display: inline-block;\n  margin: 20px;\n  padding: 7px;\n  transform: rotate(",");\n"]);return l=function(){return n},n}function f(){var n=w(["\n  justify-content: flex-end;\n  img{\n    opacity: ",";\n  }\n"]);return f=function(){return n},n}function s(){var n=w(["\n  justify-content: flex-start;\n  img{\n    opacity: ",";\n  }\n"]);return s=function(){return n},n}function d(){var n=w(["\n  width: 40%;\n  height: 100%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  img{\n    width: 40px;\n    transform: translate(0, -50%);\n    transition: opacity 0.4s;\n  };\n  &:hover img{\n    opacity: 1;\n  }\n"]);return d=function(){return n},n}function v(){var n=w(["\n  position: relative;\n  z-index: 5;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transform: translate(0, -100%);\n  user-select: none;\n"]);return v=function(){return n},n}function p(){var n=w(["\n  width: 100%;\n  white-space: normal;\n"]);return p=function(){return n},n}function y(){var n=w(["\n  margin: 10px;\n  margin-bottom: 5px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return y=function(){return n},n}function g(){var n=w(["\n  background: #FFFA;\n  color: #333;\n  text-align: center;\n  width: 100.5%;\n  position: absolute;\n  padding: 15px 20px;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%,0);\n"]);return g=function(){return n},n}function m(){var n=w(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: ",";\n"]);return m=function(){return n},n}function h(){var n=w(["\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  transform: translateX(",");\n  transition:  \n    ",";\n"]);return h=function(){return n},n}function b(){var n=w(["\n  height: 90%;\n  overflow: hidden;\n  margin: 0 auto;\n  white-space: nowrap;\n  width: ",";\n"]);return b=function(){return n},n}function x(){var n=w(["\n  width: 100%;\n  height: 100%;\n"]);return x=function(){return n},n}function w(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var S=a.a.div(x()),E=a.a.div(b(),function(n){return n.cover?"100%":"85%"}),C=a.a.div(h(),function(n){var t=n.sliderWidth,e=n.index,r=n.translateDrag;return"".concat(-e*t+r,"px")},function(n){var t=n.transition,e=n.translateDuration;return t?"transform cubic-bezier(1, 1.40, .70, .80) ".concat(.5*e,"s"):"none"}),j=a.a.div(m(),function(n){return n.image},function(n){return n.cover?"cover":"contain"}),O=a.a.div(g()),D=a.a.div(y()),k=a.a.p(p()),P=a.a.div(v()),T=a.a.div(d()),M=a()(T)(s(),function(n){return n.hover?"0":"1"}),z=a()(T)(f(),function(n){return n.hover?"0":"1"}),I=a.a.div(l(),function(n){return n.primaryColor},function(n){return n.right?"-45deg":"135deg"}),_=a.a.div(c()),H=a.a.div(u(),function(n){var t=n.active,e=n.color;return t?e.b:e.a}),L=function(n){var t=n.goToPreviousSlide,e=n.arrowStyle,r=n.arrowHover,i=n.arrowLeftImg,a=n.primaryColor,u=void 0===a?"#CCC":a;return o.a.createElement(M,{hover:r,onClick:t},i?o.a.createElement("img",{src:i,style:e,alt:""}):o.a.createElement(I,{style:e,primaryColor:u}))},R=function(n){var t=n.goToNextSlide,e=n.arrowStyle,r=n.arrowHover,i=n.arrowRightImg,a=n.primaryColor,u=void 0===a?"#CCC":a;return o.a.createElement(z,{hover:r,onClick:t},i?o.a.createElement("img",{src:i,style:e,alt:""}):o.a.createElement(I,{right:!0,style:e,primaryColor:u}))},F=function(n){var t=n.index,e=n.images,r=n.handleDotClick,i=n.dotStyle,a=n.primaryColor,u=void 0===a?"#CCC":a,c=n.secondaryColor,l=void 0===c?"#333":c;return o.a.createElement(_,null,e.map(function(n,e){return o.a.createElement(H,{key:e,style:i,active:e===t,color:{a:u,b:l},onClick:r.bind(null,e)})}))};var X=function(n){var t=n.curr,e=n.taglineStyle,r=n.titleStyle,i=n.captionStyle;return t.titles||t.captions?o.a.createElement(O,{style:e},o.a.createElement(D,{style:r},t.titles),o.a.createElement(k,{style:i},t.captions)):null};function A(){return(A=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function q(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){N(n,t,e[t])})}return n}function N(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function W(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=n[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var B={index:0,translateDrag:0,translateDuration:.5,x0:null},U=function(n){var t=n.cover,e=void 0===t||t,i=n.invert,a=void 0!==i&&i,u=n.loop,c=void 0===u?!n.swipe:u,l=n.transition,f=void 0===l||l,s=n.arrowHover,d=void 0!==s&&s,v=n.swipe,p=void 0!==v&&v,y=n.callback,g=n.containerStyle,m=n.slideStyle,h=n.taglineStyle,b=n.captionStyle,x=n.titleStyle,w=n.primaryColor,O=n.secondaryColor,D=n.dotStyle,k=n.arrowStyle,T=n.arrowLeftImg,M=n.arrowRightImg,z=n.autoPlay,I=n.duration,_=void 0===I?2e3:I,H=n.index,N=n.images,U=void 0===N?[]:N;if(!U.length)return null;var G=W(Object(r.useState)(B),2),J=G[0],K=G[1],Q=Object(r.useRef)();Object(r.useEffect)(function(){},[n]),Object(r.useEffect)(function(){document.addEventListener("mouseup",V,!1),document.addEventListener("touchend",V,!1)},[]),Object(r.useEffect)(function(){var n=z&&setTimeout(tn,_);return function(){return clearTimeout(n)}},[J.index,n.autoPlay]),Object(r.useEffect)(function(){en(H)},[H]);var V=function(){K(function(n){return q({},n,{x0:null,translateDrag:0,translateDuration:.5})})},Y=function(n){var t=nn(n).clientX;if(J.x0){var e=t-J.x0,r=Math.sign(e),o=+(r*e/rn(Q)).toFixed(2);o>.2&&(K(function(n){return q({},n,{x0:null,translateDrag:0,translateDuration:1-o})}),en(J.index-r))}else K(function(n){return q({},n,{translateDuration:.5,x0:null,translateDrag:0})})},Z=function(n){var t=nn(n).clientX;K(function(n){return q({},n,{x0:t,translateDuration:0})})},$=function(n){if(J.x0){var t=nn(n).clientX;K(function(n){return q({},n,{translateDrag:Math.round(t-n.x0)})})}},nn=function(n){return n.changedTouches?n.changedTouches[0]:n},tn=function(){var n=J.index,t=n<U.length-1?n+1:c?0:n;en(t)},en=function(n){n>=0&&n<U.length&&(K(function(t){return q({},t,{index:n})}),y&&y(n))},rn=function(n){var t=n.current;return t&&t.getBoundingClientRect().width};return o.a.createElement(S,null,o.a.createElement(E,{cover:e,style:g},o.a.createElement(C,{onTouchStart:Z,onTouchMove:$,onTouchEnd:Y,onMouseDown:Z,onMouseMove:$,onMouseUp:Y,sliderWidth:rn(Q),transition:p||f,index:J.index,translateDrag:J.translateDrag,translateDuration:J.translateDuration,ref:Q},U.map(function(n,t){return o.a.createElement(j,{style:m,cover:e,key:t,image:n.image},o.a.createElement(X,{curr:n,taglineStyle:h,titleStyle:x,captionStyle:b}))})),!p&&o.a.createElement(P,null,o.a.createElement(L,{arrowStyle:k,arrowLeftImg:T,arrowHover:d,goToPreviousSlide:function(){var n=J.index,t=n>0?n-1:c?U.length-1:n;en(t)},primaryColor:w}),o.a.createElement(R,{arrowStyle:k,arrowRightImg:M,arrowHover:d,goToNextSlide:tn,primaryColor:w}))),o.a.createElement(F,A({index:J.index},{images:U,handleDotClick:function(n){n!==J.index&&en(n)},dotStyle:D,invert:a,primaryColor:w,secondaryColor:O})))};t.default=U}]);