!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);var r=function(t){return Element.prototype.closest||function(e){let n=this;for(;n;){if(t.call(n,e))return n;n=n.parentElement}return null}}(function(){const t=Element.prototype;return t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector}());function a(t,e){var n=t.target;return n instanceof Element?r.call(n,e):null}var o=document,c="http://www.w3.org/2000/svg";function i(t,e,n){var r=e?o.createElementNS(c,t):o.createElement(t);return"svg"===t&&r.setAttribute("xmlns",c),n&&n.forEach((function(t){r.classList.add(t)})),r}function l(t,e){e=e.toString(),t.style.transform=e,t.setAttribute("transform","none"!==e?e:"")}function s(t){return Array.prototype.slice.call(t)}function u(t,e){var n="DOMPoint"in window?new DOMPoint:{};return n.x=t||0,n.y=e||0,n}function f(t){var e=u();return t.forEach((function(t){e.x+=t.x,e.y+=t.y})),e.x/=t.length,e.y/=t.length,e}function h(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function d(t,e){return u(t.x*e.a+t.y*e.c+e.e,t.x*e.b+t.y*e.d+e.f)}function g(t){var e=u();return t.forEach((function(t){e.x+=t.x,e.y+=t.y})),e.x/=t.length,e.y/=t.length,e}function p(t){var e=[];return t.forEach((function(t){e.push([Math.round(t.x),Math.round(t.y)].join(","))})),e}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function x(t,e,n,r){var a="DOMRect"in window?new DOMRect:{};return a.x=t||0,a.y=e||0,a.width=n||0,a.height=r||0,a}function m(t){return[u(t.x,t.y),u(t.x+t.width,t.y),u(t.x+t.width,t.y+t.height),u(t.x,t.y+t.height)]}function _(t){return new(window.DOMMatrix||window.WebKitCSSMatrix||window.MSCSSMatrix)(t)}function b(t){var e=getComputedStyle(t).transform;if("none"!==e)return _(e);var n=t.transform.baseVal.consolidate();return(n=n&&n.matrix)?_([n.a,n.b,n.c,n.d,n.e,n.f]):_()}function E(t,e){var n=t.root.getBoundingClientRect();return e.width?x(e.x-n.x,e.y-n.y,e.width,e.height):u(e.x-n.x,e.y-n.y)}function w(t,e){var n=t.root.getBoundingClientRect();return e.width?x(e.x+n.x,e.y+n.y,e.width,e.height):u(e.x+n.x,e.y+n.y)}function M(t,e){var n,r,a=t.svg.viewBox.baseVal,o=t.root.viewBox.baseVal,c=a.width/a.height;o.width/o.height>c?(n=c*o.height,r=o.height):(n=o.width,r=o.width/c);var i=(o.width-n)/2,l=(o.height-r)/2,s=a.width/n,f=a.height/r;return e.width?x((e.x-i)*s,(e.y-l)*f,e.width*s,e.height*f):u((e.x-i)*s,(e.y-l)*f)}function H(t){var e;0!==t.selection.length?(e=1===t.selection.length?N(t,t.selection[0]):function(t){var e=(n=t.selection,r={},a=[["x",function(t){return t.x}],["y",function(t){return t.y}],["x2",function(t){return t.x+t.width}],["y2",function(t){return t.y+t.height}]],n.forEach((function(t){var e=t.getBoundingClientRect();a.forEach((function(t){var n=v(t,2),a=n[0],o=(0,n[1])(e);(void 0===r[a]||o<r[a])&&(r[a]=o)}))})),x(r.x,r.y,r.x2-r.x,r.y2-r.y));var n,r,a;return m(e=E(t,e))}(t),t.helperPoints=e,A(t,e)):t.helperPoints=[]}function S(t){t.helper&&(t.helpers.removeChild(t.helper),t.helper=null)}function N(t,e,n){var r=m((n||e).getBBox()),a=b(e);return r.forEach((function(e,n){e=d(e,a),e=function(t,e){var n,r,a=t.svg.viewBox.baseVal,o=t.root.viewBox.baseVal,c=a.width/a.height;o.width/o.height>c?(n=c*o.height,r=o.height):(n=o.width,r=o.width/c);var i=(o.width-n)/2,l=(o.height-r)/2,s=a.width/n,f=a.height/r;return e.width?x(e.x/s+i,e.y/f+l,e.width/s,e.height/f):u(e.x/s+i,e.y/f+l)}(t,e),r[n]=e})),r}function A(t,e){if(!X.createHelper)throw new Error("createHelper is not set");var n=X.createHelper(t,e);t.helper=n,t.helpers.appendChild(n)}var T=document,C=null;function L(t){var e=a(t,"."+X.base),n=e&&$.getInstance(e);n&&function(t,e){var n="."+X.base,r=null;a(t,"".concat(n,"__move"))&&(r=P);a(t,"".concat(n,"__rotate"))&&(r=Z);a(t,"".concat(n,"__scale"))&&(r=j);var o={operation:r,event:t},c=e.triggerEvent("DragStart",o);r=o.operation,!c&&r&&(C={editor:e,x:t.clientX,y:t.clientY,operation:r})}(t,n)}function O(t){C&&function(t){C.operation(t,C)}(t)}function B(t){C&&function(t){var e=C.editor;C.operation(t,C),!e.triggerEvent("DragEnd",{event:t,operation:C.operation})&&e.refreshHelper(),C=null}(t)}function P(t){var e=C.editor,n=t.clientX-C.x,r=t.clientY-C.y,a=M(e,x(0,0,n,r));R(),e.selection.forEach((function(t){var e=C.matrix.get(t);l(t,e=_().translateSelf(a.width,a.height).multiplySelf(e))})),V(e,_().translateSelf(n,r))}function Z(t){var e=C.editor,n=g(e.helperPoints),r=w(e,n),a=M(e,n),o=Math.atan2(r.y-t.clientY,t.clientX-r.x);(o-=Math.atan2(r.y-C.y,C.x-r.x))<-Math.PI&&(o+=2*Math.PI),R(),e.selection.forEach((function(t){var e=C.matrix.get(t);l(t,e=_().translateSelf(a.x,a.y).rotateSelf(180*-o/Math.PI).translateSelf(-a.x,-a.y).multiplySelf(e))})),V(e,_().translateSelf(n.x,n.y).rotateSelf(180*-o/Math.PI).translateSelf(-n.x,-n.y))}function j(t){var e=C.editor,n=g(e.helperPoints),r=w(e,n),a=M(e,n),o=h(u(t.clientX,t.clientY),r)/h(u(C.x,C.y),r);R(),e.selection.forEach((function(t){var e=C.matrix.get(t);l(t,e=_().translateSelf(a.x,a.y).scaleSelf(o).translateSelf(-a.x,-a.y).multiplySelf(e))})),V(e,_().translateSelf(n.x,n.y).scaleSelf(o).translateSelf(-n.x,-n.y))}function R(){if(!C.matrix){var t=new Map;C.editor.selection.forEach((function(e){t.set(e,b(e))})),C.matrix=t}}function V(t,e){S(t);var n=t.helperPoints.slice();n.forEach((function(t,r){n[r]=d(t,e)})),A(t,n)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var I=document,k=new Map,X={base:"sse",createHelper:null};function Y(t,e,n){var r=new CustomEvent(X.base+e,{bubbles:!0,cancelable:!0,detail:Object.assign(n||{},{editor:t})});return t.root.dispatchEvent(r),r.defaultPrevented}function W(t){var e=t.getBoundingClientRect();t.setAttribute("viewBox","0 0 ".concat(e.width," ").concat(e.height))}function z(){var t=I.addEventListener;t.call(I,"click",q),t.call(I,"mousedown",K),t.call(I,"touchstart",K),t.call(window,"resize",U),function(){var t=T.addEventListener;t.call(T,"mousedown",L),t.call(T,"mousemove",O),t.call(T,"mouseup",B),t.call(T,"touchstart",L),t.call(T,"touchmove",O),t.call(T,"touchend",B)}()}function q(t){var e="."+X.base,n=a(t,e),r=n&&$.getInstance(n);r&&(n=a(t,"".concat(e,"__delete")))&&r.deleteSelectedElements()}function K(t){var e=a(t,"."+X.base),n=e&&$.getInstance(e);if(n){var r=t.target;n.svg.contains(r)&&("tspan"===r.nodeName&&(r=r.closest("text")),r.closest("foreignObject")||n.selectElement(r)),r===e&&n.selectElement(null)}}function U(){k.forEach((function(t){W(t.root),t.refreshHelper()}))}var $=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){var n=X.base;t.svg=e;var r=t.root=i("svg",!0,[n]);e.parentNode.replaceChild(t.root,e),r.appendChild(e),t.helpers=i("g",!0,["".concat(n,"__helpers")]),r.appendChild(t.helpers)}(this,e),k.set(this.root,this),this.helper=null,this.selection=[],z(),W(this.root)}var e,n,r;return e=t,r=[{key:"getInstance",value:function(t){return k.get(t)}}],(n=[{key:"destroy",value:function(){k.delete(this.root),this.root.parentNode.replaceChild(this.svg)}},{key:"triggerEvent",value:function(t,e){return Y(this,t,e)}},{key:"selectElement",value:function(t){var e=t?[t]:[];Y(this,"Select",{cur:this.selection,new:e})||(this.selection=e,this.refreshHelper())}},{key:"refreshHelper",value:function(){Y(this,"RefreshHelper")||(S(this),H(this))}},{key:"deleteSelectedElements",value:function(){S(this),this.selection.forEach((function(t){t.parentNode.removeChild(t)})),this.selection=[]}}])&&D(e.prototype,n),r&&D(e,r),t}();X.createHelper=function(t,e){var n=X.base,r=i("g",!0,["".concat(n,"__helper")]),a=p(e);e=function(t,e,n){var r=Math,a=r.atan2(t[0].y-t[1].y,t[1].x-t[0].x),o=r.max(h(t[1],t[0]),h(t[3],t[0]));o=r.min(r.max(e-o/2,0),n);var c=Math.PI/4,i=function(t,e){return u(t.x+o*r.cos(a+c*e),t.y-o*r.sin(a+c*e))},l=[];return l.push(i(t[0],3)),l.push(i(t[1],1)),l.push(i(t[2],-1)),l.push(i(t[3],-3)),l}(e,24,8);var o=t.selection[0],c='<polygon class="'.concat(n,"__rect ").concat(n,'__move" points="').concat(a.join(" "),'"/><g class="').concat(n,"__act _rotate ").concat(n,'__rotate"><circle cx="').concat(e[0].x,'" cy="').concat(e[0].y,'" r="8"/><g class="').concat(n,'__icon" style="transform:translate(').concat(e[0].x,"px,").concat(e[0].y,'px)"><path d="M4.75-3V-.75a0,0,0,0,1,0,0,.13.13,0,0,1,0,.06.09.09,0,0,1,0,.05s0,0,0,0h0l-.06,0a0,0,0,0,1,0,0H2.25A.25.25,0,0,1,2-.75.25.25,0,0,1,2.25-1H3.87L2.59-2.2A3.13,3.13,0,0,0,.82-3.09a3.08,3.08,0,0,0-1.95.36A3.09,3.09,0,0,0-2.47-1.28a3.11,3.11,0,0,0-.2,2,3.14,3.14,0,0,0,1,1.7A3.15,3.15,0,0,0,.2,3.12,3.11,3.11,0,0,0,2.11,2.6,3.07,3.07,0,0,0,3.32,1,.25.25,0,0,1,3.64.89a.26.26,0,0,1,.16.32A3.63,3.63,0,0,1,2.38,3a3.68,3.68,0,0,1-2,.61H.17A3.74,3.74,0,0,1-2,2.77,3.7,3.7,0,0,1-3.16.8a3.65,3.65,0,0,1,.23-2.28A3.56,3.56,0,0,1-1.37-3.17,3.62,3.62,0,0,1,.89-3.59a3.66,3.66,0,0,1,2.05,1L4.25-1.33V-3a.25.25,0,0,1,.25-.25A.25.25,0,0,1,4.75-3Z"/></g></g><g class="').concat(n,"__act _delete ").concat(n,'__delete"><circle cx="').concat(e[1].x,'" cy="').concat(e[1].y,'" r="8"/><g class="').concat(n,'__icon" style="transform:translate(').concat(e[1].x,"px,").concat(e[1].y,'px)"><path d="M.35,0,2.43-2.07a.27.27,0,0,0,0-.36.27.27,0,0,0-.36,0L0-.35-2.07-2.43a.27.27,0,0,0-.36,0,.27.27,0,0,0,0,.36L-.35,0-2.43,2.07a.27.27,0,0,0,0,.36.26.26,0,0,0,.18.07.26.26,0,0,0,.18-.07L0,.35,2.07,2.43a.27.27,0,0,0,.36,0,.27.27,0,0,0,0-.36Z"/></g></g><g class="').concat(n,"__act _scale ").concat(n,'__scale"><circle cx="').concat(e[2].x,'" cy="').concat(e[2].y,'" r="8"/><g class="').concat(n,'__icon" style="transform:translate(').concat(e[2].x,"px,").concat(e[2].y,'px)"><path d="M3.63,3.38a.29.29,0,0,1,0,.09.32.32,0,0,1-.14.14l-.09,0H1.13a.25.25,0,0,1-.25-.25.25.25,0,0,1,.25-.25H2.77L.57.93a.27.27,0,0,1,0-.36.27.27,0,0,1,.36,0l2.2,2.2V1.13A.25.25,0,0,1,3.38.88a.25.25,0,0,1,.25.25Zm-6.4-6.51h1.64a.25.25,0,0,0,.25-.25.25.25,0,0,0-.25-.25H-3.38l-.09,0a.32.32,0,0,0-.14.14.29.29,0,0,0,0,.09v2.25a.25.25,0,0,0,.25.25.25.25,0,0,0,.25-.25V-2.77l2.2,2.2A.26.26,0,0,0-.75-.5.26.26,0,0,0-.57-.57a.27.27,0,0,0,0-.36Z"/></g></g>');return o&&"text"===o.nodeName&&(c+='<g class="'.concat(n,"__act _text ").concat(n,'__text"><circle cx="').concat(e[3].x,'" cy="').concat(e[3].y,'" r="8"/><g class="').concat(n,'__icon" style="transform:translate(').concat(e[3].x,"px,").concat(e[3].y,'px)"><path d="M-1.5,3.63H-3.38a.26.26,0,0,1-.25-.25V1.5a.25.25,0,0,1,.08-.18L1.32-3.55a.25.25,0,0,1,.36,0L3.55-1.68a.25.25,0,0,1,0,.36L-1.32,3.55A.25.25,0,0,1-1.5,3.63Zm-1.63-.5H-1.6L3-1.5,1.5-3-3.13,1.6Z"/></g></g>')),r.innerHTML=c,r};var F,G,J=document,Q=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1;function tt(t){var e="."+X.base,n=a(t,e),r=n&&$.getInstance(n);r&&(n=a(t,"".concat(e,"__text")))&&function(t){var e=t.selection[0];e&&"text"===e.nodeName&&(!function(t,e){var n=X.base,r=e.getBBox(),a=i("g",!0,["".concat(n,"__foreign")]),o=i("foreignObject",!0);["x","y","width","height"].forEach((function(t){o.setAttribute(t,r[t])}));var c=i("span",!1,["".concat(n,"__textarea")]);(function(t,e){e.innerHTML=t.innerHTML,function t(e){if("TSPAN"===e.nodeName)if("1em"===e.getAttribute("dy"))e.insertAdjacentHTML("afterend","<br/>"+e.innerHTML),e.parentNode.removeChild(e),e.innerHTML="";else{for(var n=document.createElement("span"),r=["x","y","dx","dy","fill"],a=0,o=e.attributes.length;a<o;a++){var c=e.attributes[a];-1===r.indexOf(c.name)&&n.setAttribute(c.name,c.value),"fill"===c.name&&(n.style.color=c.value)}e.style.fill&&(n.style.color=e.style.fill),n.innerHTML=e.innerHTML,e.parentNode.replaceChild(n,e),e=n}for(var i=0;i<e.childNodes.length;i++)t(e.childNodes[i])}(e)})(e,c),c.contentEditable=!0;var u=getComputedStyle(e),f=getComputedStyle(e.parentNode),h=["letter-spacing","opacity"];Object.values(u).forEach((function(t){"font-"!==t.slice(0,5)&&-1===h.indexOf(t)||u[t]!==f[t]&&(c.style[t]=u[t])})),a.appendChild(o),o.appendChild(c),e.insertAdjacentElement("afterend",a),function t(e){if("BR"===e.nodeName){var n=e.nextSibling,r=ct(n);if(r)e.parentNode.removeChild(e),ct(n).y!==r.y&&n.parentNode.insertBefore(e,n)}s(e.childNodes).forEach((function(e){t(e)}))}(c),l(a,u.transform),e.style.display="none",function(t){t.focus();var e=document.createRange();e.selectNodeContents(t);var n=window.getSelection();n.removeAllRanges(),n.addRange(e)}(c),t.foreign=o,t.textarea=c,t.text=e,t.triggerEvent("TextEdit")}(t,e),S(t),it(t))}(r)}function et(t){var e="."+X.base,n=a(t,e),r=n&&$.getInstance(n);r&&(t.target.closest("".concat(e,"__textarea"))&&lt(r))}function nt(t){var e=t.detail.editor;e.foreign&&function(t){var e=t.foreign,n=t.textarea,r=t.text,a=e.parentNode;l(a,""),function t(e){if(e.nodeType===Node.TEXT_NODE){var n=!1,r=null;s(ot(e)).forEach((function(t){null!==r&&t.y>r&&(n=!0),r=t.y})),n&&function(t){for(var e,n,r=t.textContent,a=J.createRange(),o=[],c=0;c<r.length;c++)a.setStart(t,c),a.setEnd(t,c+1),n=a.getBoundingClientRect(),void 0===e&&(e=n.y),n.y!==e&&(o.push(c),e=n.y);o.reverse().forEach((function(e){a.setStart(t,e),a.setEnd(t,e),a.insertNode(i("br"))}))}(e)}s(e.childNodes).forEach((function(e){t(e)}));var a=null;s(e.childNodes).forEach((function(t){var n;t.nodeType===Node.TEXT_NODE&&""!==t.nodeValue.trim()&&(n=ot(t)[0]),t.nodeType===Node.ELEMENT_NODE&&("BR"===t.nodeName?a=null:n=t.getBoundingClientRect()),n&&(null!==a&&n.y>a.y&&n.width>0&&e.insertBefore(i("br"),t),a=n)}))}(n),function t(e){var n=[];s(e.childNodes).forEach((function(t,e){"BR"===t.nodeName?n.push([t]):n.length>0&&n[n.length-1].push(t)})),n.forEach((function(t){var n=i("div"),r=t.shift();e.replaceChild(n,r),t.forEach((function(t){n.appendChild(t)}))})),s(e.childNodes).forEach((function(e){t(e)}))}(n),function(t,e){(function t(e,n,r){if("DIV"===n.nodeName){var a=i("tspan");a.setAttribute("x",e.getAttribute("x")),a.setAttribute("dy","1em"),a.innerHTML=n.innerHTML,n.parentNode.replaceChild(a,n),n=a}if("SPAN"===n.nodeName&&!r){for(var o=i("tspan"),c=0,l=n.attributes.length;c<l;c++){var s=n.attributes[c];o.setAttribute(s.name,s.value)}n.style.color&&(o.style.fill=n.style.color),o.innerHTML=n.innerHTML,n.parentNode.replaceChild(o,n),n=o}for(var u=0;u<n.childNodes.length;u++)t(e,n.childNodes[u])})(t,e,!0),t.innerHTML=e.innerHTML}(r,n),r.style.display="",t.triggerEvent("TextApply"),a.parentNode.removeChild(a),t.foreign=null,t.textarea=null,t.text=null}(e)}function rt(t){var e="."+X.base;a(t.detail.event,"".concat(e,"__text-width"))&&(t.detail.operation=st)}function at(t){var e=t.detail.editor;e.foreign&&(t.preventDefault(),lt(e))}function ot(t){var e=J.createRange();return e.selectNodeContents(t),e.getClientRects()}function ct(t){return t.nodeType===Node.TEXT_NODE?ot(t)[0]:t.nodeType===Node.ELEMENT_NODE?t.getBoundingClientRect():null}function it(t){var e=t.foreign,n=e.parentNode,r=Q?n:e,a=t.helperPoints=N(t,n,r);!function(t,e){if(!X.createTextHelper)throw new Error("createTextHelper is not set");var n=X.createTextHelper(t,e);t.helper=n,t.helpers.appendChild(n)}(t,a)}function lt(t){S(t),t.foreign.setAttribute("height",t.textarea.clientHeight),it(t)}function st(t,e){var n=e.editor,r=f([n.helperPoints[0],n.helperPoints[3]]);r=w(n,r);var a=h(u(t.clientX,t.clientY),r)/h(u(e.x,e.y),r);if(void 0===e.initialWidth){var o=n.foreign.getBBox();e.initialWidth=o.width}n.foreign.setAttribute("width",e.initialWidth*a),lt(n)}F=X.base,(G=J.addEventListener).call(J,"click",tt),G.call(J,"input",et),G.call(J,"".concat(F,"Select"),nt),G.call(J,"".concat(F,"DragStart"),rt),G.call(J,"".concat(F,"RefreshHelper"),at);X.createTextHelper=function(t,e){var n=X.base,r=i("g",!0,["".concat(n,"__helper"),"_text"]),a=p(e),o=Math.atan2(e[0].y-e[1].y,e[1].x-e[0].x),c=24*Math.cos(o),l=-24*Math.sin(o),s=f([e[0],e[1]]),u=f([e[1],e[2]]);return r.innerHTML='<polygon class="sse__rect" points="'.concat(a.join(" "),'"/><g class="').concat(n,"__act _align-left ").concat(n,'__align-left"><circle cx="').concat(s.x-c,'" cy="').concat(s.y-l,'" r="8"/><g class="').concat(n,'__icon" style="transform:translate(').concat(s.x-c,"px,").concat(s.y-l,'px)"><path d="M1.13,1.13H-3.38v.75H1.13Zm0-3H-3.38v.75H1.13ZM-3.38.38H3.38V-.38H-3.38Zm0,3H3.38V2.63H-3.38Zm0-6.76v.75H3.38v-.75Z"/></g></g><g class="').concat(n,"__act _align-center ").concat(n,'__align-center"><circle cx="').concat(s.x,'" cy="').concat(s.y,'" r="8"/><g class="').concat(n,'__icon" style="transform:translate(').concat(s.x,"px,").concat(s.y,'px)"><path d="M-1.88,1.13v.75H1.88V1.13Zm-1.5,2.25H3.38V2.63H-3.38Zm0-3H3.38V-.38H-3.38Zm1.5-2.26v.75H1.88v-.75Zm-1.5-1.5v.75H3.38v-.75Z"/></g></g><g class="').concat(n,"__act _align-right ").concat(n,'__align-right"><circle cx="').concat(s.x+c,'" cy="').concat(s.y+l,'" r="8"/><g class="').concat(n,'__icon" style="transform:translate(').concat(s.x+c,"px,").concat(s.y+l,'px)"><path d="M-3.38,3.38H3.38V2.63H-3.38Zm2.25-1.5H3.38V1.13H-1.13ZM-3.38.38H3.38V-.38H-3.38Zm2.25-1.51H3.38v-.75H-1.13ZM-3.38-3.38v.75H3.38v-.75Z"/></g></g><g class="').concat(n,"__act _text-width ").concat(n,'__text-width"><circle cx="').concat(u.x,'" cy="').concat(u.y,'" r="8"/><g class="').concat(n,'__icon" style="transform:translate(').concat(u.x,"px,").concat(u.y,'px)"><path d="M-.68,0A.21.21,0,0,1-.89.21h-2.6l1,1a.21.21,0,0,1,0,.29.2.2,0,0,1-.15.06.2.2,0,0,1-.14-.06L-4.15.15h0l0-.06a.22.22,0,0,1,0-.16l0-.06h0l1.34-1.33a.21.21,0,0,1,.29,0,.22.22,0,0,1,0,.3l-1,1h2.6A.21.21,0,0,1-.68,0ZM4.19.08a.19.19,0,0,0,0-.08.19.19,0,0,0,0-.08.16.16,0,0,0,0-.07L2.81-1.48a.21.21,0,0,0-.29,0,.22.22,0,0,0,0,.3l1,1H.89A.21.21,0,0,0,.68,0,.21.21,0,0,0,.89.21h2.6l-1,1a.21.21,0,0,0,.15.35.2.2,0,0,0,.14-.06L4.15.15A.16.16,0,0,0,4.19.08Z"/></g></g>'),r};var ut=document,ft={left:"start",center:"middle",right:"end"},ht=Object.keys(ft).reduce((function(t,e){return t[ft[e]]=e,t}),{});function dt(t){var e="."+X.base,n=a(t,e),r=n&&$.getInstance(n);r&&(a(t,"".concat(e,"__align-left"))&&(r.textarea.style.textAlign="left"),a(t,"".concat(e,"__align-center"))&&(r.textarea.style.textAlign="center"),a(t,"".concat(e,"__align-right"))&&(r.textarea.style.textAlign="right"))}function gt(t){var e=t.detail.editor,n=getComputedStyle(e.text).textAnchor;e.textarea.style.textAlign=ht[n]}function pt(t){var e=t.detail.editor,n=e.text,r=getComputedStyle(n).textAnchor,a=e.textarea.style.textAlign||"left",o={start:0,middle:.5,end:1};if(r!==(a=ft[a])){var c=n.getBBox().width,i=o[a]-o[r];n.style.textAnchor=a,l(n,b(n).translateSelf(i*c,0))}}function vt(t){var e=function(){for(var t=[],e=window.getSelection(),n=0;n<e.rangeCount;n++){var r=e.getRangeAt(n),a=r.startContainer;a===r.endContainer&&a.nodeType===Node.TEXT_NODE&&0===r.startOffset&&a.nodeValue.length===r.endOffset?t.push(a.parentNode):function(){var e=r.extractContents();s(e.childNodes).forEach((function(n){var r;n.nodeType===Node.TEXT_NODE&&(r=i("span"),e.replaceChild(r,n),r.appendChild(n)),n.nodeType===Node.ELEMENT_NODE&&(r=n),r&&t.push(r)})),r.insertNode(e)}()}return t}();e.forEach(t),function(t){var e=(t=t.slice())[t.length-1].nextSibling;e&&t.push(e),t.forEach((function(t){var e=t.previousSibling;e.nodeName===t.nodeName&&e.getAttribute("style")===t.getAttribute("style")&&(s(t.childNodes).forEach((function(t){e.appendChild(t)})),t.parentNode.removeChild(t))}))}(e)}!function(){var t=X.base,e=ut.addEventListener;e.call(ut,"click",dt),e.call(ut,"".concat(t,"TextEdit"),gt),e.call(ut,"".concat(t,"TextApply"),pt)}(),$.prototype.textSetStyle=vt,window.SimpleSvgEditor=$}]);