(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},i=t(1063),s=t(4651),l=t(7426);var c={};function u(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,a=s.useRouter(),d=o.default.useMemo((function(){var n=i.resolveHref(a,e.href,!0),t=r(n,2),o=t[0],s=t[1];return{href:o,as:e.as?i.resolveHref(a,e.as):s||o}}),[a,e.href,e.as]),f=d.href,m=d.as,p=e.children,h=e.replace,v=e.shallow,g=e.scroll,x=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=(n=o.default.Children.only(p))&&"object"===typeof n&&n.ref,w=l.useIntersection({rootMargin:"200px"}),y=r(w,2),j=y[0],k=y[1],E=o.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);o.default.useEffect((function(){var e=k&&t&&i.isLocalURL(f),n="undefined"!==typeof x?x:a&&a.locale,r=c[f+"%"+m+(n?"%"+n:"")];e&&!r&&u(a,f,m,{locale:n})}),[m,f,k,x,t,a]);var N={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:l,scroll:s}))}(e,a,f,m,h,v,g,x)},onMouseEnter:function(e){i.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,f,m,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof x?x:a&&a.locale,O=a&&a.isLocaleDomain&&i.getDomainLocale(m,C,a&&a.locales,a&&a.domainLocales);N.href=O||i.addBasePath(i.addLocale(m,C,a&&a.defaultLocale))}return o.default.cloneElement(n,N)};n.default=d},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=a.useRef(),c=a.useState(!1),u=r(c,2),d=u[0],f=u[1],m=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||d||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return a.useEffect((function(){if(!i&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[m,d]};var a=t(7294),o=t(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},1203:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var r=t(2809),a=(t(3146),t(5745),t(1664));function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}var c,u,d,f=t(7294);function m(e,n){if(e in n){for(var t=n[e],r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return"function"===typeof t?t.apply(void 0,a):t}var i=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(i,m),i}function p(e){var n=e.props,t=e.slot,r=e.defaultTag,a=e.features,s=e.visible,l=void 0===s||s,d=e.name;if(l)return h(n,t,r,d);var f=null!=a?a:c.None;if(f&c.Static){var p=n.static,v=void 0!==p&&p,g=i(n,["static"]);if(v)return h(g,t,r,d)}if(f&c.RenderStrategy){var x,b=n.unmount,w=void 0===b||b,y=i(n,["unmount"]);return m(w?u.Unmount:u.Hidden,((x={})[u.Unmount]=function(){return null},x[u.Hidden]=function(){return h(o({},y,{hidden:!0,style:{display:"none"}}),t,r,d)},x))}return h(n,t,r,d)}function h(e,n,t,r){var a;void 0===n&&(n={});var o=g(e,["unmount","static"]),s=o.as,c=void 0===s?t:s,u=o.children,d=o.refName,m=void 0===d?"ref":d,p=i(o,["as","children","refName"]),h=void 0!==e.ref?((a={})[m]=e.ref,a):{},v="function"===typeof u?u(n):u;if(p.className&&"function"===typeof p.className&&(p.className=p.className(n)),c===f.Fragment&&Object.keys(p).length>0){if(!(0,f.isValidElement)(v)||Array.isArray(v)&&v.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(p).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,f.cloneElement)(v,Object.assign({},function(e,n,t){for(var r,a=Object.assign({},e),o=function(){var t,o=r.value;void 0!==e[o]&&void 0!==n[o]&&Object.assign(a,((t={})[o]=function(t){t.defaultPrevented||e[o](t),t.defaultPrevented||n[o](t)},t))},i=l(t);!(r=i()).done;)o();return a}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(g(p,["ref"])),v.props,["onClick"]),h))}return(0,f.createElement)(c,Object.assign({},g(p,["ref"]),c!==f.Fragment&&h),v)}function v(e){var n;return Object.assign((0,f.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function g(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),a=l(n);!(t=a()).done;){var o=t.value;o in r&&delete r[o]}return r}function x(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,f.useRef)(n);return(0,f.useEffect)((function(){r.current=n}),[n]),(0,f.useCallback)((function(e){for(var n,t=l(r.current);!(n=t()).done;){var a=n.value;null!=a&&("function"===typeof a?a(e):a.current=e)}}),[r])}function b(e){for(var n,t,r=e.parentElement,a=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(a=r),r=r.parentElement;var o=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!o||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(a))&&o}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(c||(c={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(u||(u={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(d||(d={}));var w="undefined"!==typeof window?f.useLayoutEffect:f.useEffect,y={serverHandoffComplete:!1};var j=0;function k(){return++j}function E(){var e=function(){var e=(0,f.useState)(y.serverHandoffComplete),n=e[0],t=e[1];return(0,f.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,f.useEffect)((function(){!1===y.serverHandoffComplete&&(y.serverHandoffComplete=!0)}),[]),n}(),n=(0,f.useState)(e?k:null),t=n[0],r=n[1];return w((function(){null===t&&r(k())}),[t]),null!=t?""+t:void 0}var N,C,O,S,P=(0,f.createContext)(null);function L(e){var n=e.value,t=e.children;return f.createElement(P.Provider,{value:n},t)}function M(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}P.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(N||(N={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(O||(O={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(S||(S={}));var I=((C={})[S.ToggleDisclosure]=function(e){var n;return o({},e,{disclosureState:m(e.disclosureState,(n={},n[O.Open]=O.Closed,n[O.Closed]=O.Open,n))})},C[S.CloseDisclosure]=function(e){return e.disclosureState===O.Closed?e:o({},e,{disclosureState:O.Closed})},C[S.LinkPanel]=function(e){return!0===e.linkedPanel?e:o({},e,{linkedPanel:!0})},C[S.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:o({},e,{linkedPanel:!1})},C[S.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:o({},e,{buttonId:n.buttonId})},C[S.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:o({},e,{panelId:n.panelId})},C),D=(0,f.createContext)(null);function A(e){var n=(0,f.useContext)(D);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+U.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return n}D.displayName="DisclosureContext";var T=(0,f.createContext)(null);function B(e){var n=(0,f.useContext)(T);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+U.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return n}T.displayName="DisclosureAPIContext";var R=(0,f.createContext)(null);function H(e,n){return m(n.type,I,e,n)}R.displayName="DisclosurePanelContext";var z=f.Fragment;function U(e){var n,t=e.defaultOpen,r=void 0!==t&&t,a=i(e,["defaultOpen"]),o="headlessui-disclosure-button-"+E(),s="headlessui-disclosure-panel-"+E(),l=(0,f.useReducer)(H,{disclosureState:r?O.Open:O.Closed,linkedPanel:!1,buttonId:o,panelId:s}),c=l[0].disclosureState,u=l[1];(0,f.useEffect)((function(){return u({type:S.SetButtonId,buttonId:o})}),[o,u]),(0,f.useEffect)((function(){return u({type:S.SetPanelId,panelId:s})}),[s,u]);var d=(0,f.useCallback)((function(e){u({type:S.CloseDisclosure});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(o):document.getElementById(o);null==n||n.focus()}),[u,o]),h=(0,f.useMemo)((function(){return{close:d}}),[d]),v=(0,f.useMemo)((function(){return{open:c===O.Open,close:d}}),[c,d]);return f.createElement(D.Provider,{value:l},f.createElement(T.Provider,{value:h},f.createElement(L,{value:m(c,(n={},n[O.Open]=N.Open,n[O.Closed]=N.Closed,n))},p({props:a,slot:v,defaultTag:z,name:"Disclosure"}))))}var _=v((function e(n,t){var r=A([U.name,e.name].join(".")),a=r[0],i=r[1],s=(0,f.useRef)(null),l=x(s,t),c=(0,f.useContext)(R),u=null!==c&&c===a.panelId,m=(0,f.useCallback)((function(e){var n;if(u){if(a.disclosureState===O.Closed)return;switch(e.key){case d.Space:case d.Enter:e.preventDefault(),e.stopPropagation(),i({type:S.ToggleDisclosure}),null==(n=document.getElementById(a.buttonId))||n.focus()}}else switch(e.key){case d.Space:case d.Enter:e.preventDefault(),e.stopPropagation(),i({type:S.ToggleDisclosure})}}),[i,u,a.disclosureState]),h=(0,f.useCallback)((function(e){switch(e.key){case d.Space:e.preventDefault()}}),[]),v=(0,f.useCallback)((function(e){var t;b(e.currentTarget)||(n.disabled||(u?(i({type:S.ToggleDisclosure}),null==(t=document.getElementById(a.buttonId))||t.focus()):i({type:S.ToggleDisclosure})))}),[i,n.disabled,a.buttonId,u]),g=(0,f.useMemo)((function(){return{open:a.disclosureState===O.Open}}),[a]),y=function(e,n){var t=(0,f.useState)((function(){return M(e)})),r=t[0],a=t[1];return w((function(){a(M(e))}),[e.type,e.as]),w((function(){r||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&a("button")}),[r,n]),r}(n,s);return p({props:o({},n,u?{ref:l,type:y,onKeyDown:m,onClick:v}:{ref:l,id:a.buttonId,type:y,"aria-expanded":n.disabled?void 0:a.disclosureState===O.Open,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:m,onKeyUp:h,onClick:v}),slot:g,defaultTag:"button",name:"Disclosure.Button"})})),F=c.RenderStrategy|c.Static,W=v((function e(n,t){var r=A([U.name,e.name].join(".")),a=r[0],i=r[1],s=B([U.name,e.name].join(".")).close,l=x(t,(function(){a.linkedPanel||i({type:S.LinkPanel})})),c=(0,f.useContext)(P),u=null!==c?c===N.Open:a.disclosureState===O.Open;(0,f.useEffect)((function(){return function(){return i({type:S.UnlinkPanel})}}),[i]),(0,f.useEffect)((function(){var e;a.disclosureState!==O.Closed||null!=(e=n.unmount)&&!e||i({type:S.UnlinkPanel})}),[a.disclosureState,n.unmount,i]);var d=(0,f.useMemo)((function(){return{open:a.disclosureState===O.Open,close:s}}),[a,s]),m={ref:l,id:a.panelId},h=n;return f.createElement(R.Provider,{value:a.panelId},p({props:o({},h,m),slot:d,defaultTag:"div",features:F,visible:u,name:"Disclosure.Panel"}))}));U.Button=_,U.Panel=W;var K=t(9120),V=t(2942),q=t(5893);function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function X(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z=function(e){var n,t=e.Component,r=e.pageProps,o=[{name:"Main Marketplace ",href:"/",current:!1},{name:"Mint Tokens",href:"/mint-item",current:!1},{name:"My NFTS",href:"/my-nfts",current:!1},{name:"Account Dashboard",href:"/account-dashboard",current:!1}],i={support:[{name:"All NFTs",href:"#"},{name:"How It Works",href:"#"},{name:"Create",href:"#"},{name:" Privacy & Terms",href:"#"}],company:[{name:"Help Center",href:"#"},{name:"Partners",href:"#"},{name:"Suggestions",href:"#"},{name:"Blog",href:"#"},{name:"Newsletter",href:"#"}],social:[{name:"Facebook",href:"#",icon:function(e){return(0,q.jsx)("svg",X(X({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,q.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})}))}},{name:"Instagram",href:"#",icon:function(e){return(0,q.jsx)("svg",X(X({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,q.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})}))}},{name:"Twitter",href:"#",icon:function(e){return(0,q.jsx)("svg",X(X({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,q.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})}))}},{name:"GitHub",href:"#",icon:function(e){return(0,q.jsx)("svg",X(X({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,q.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}))}},{name:"Dribbble",href:"#",icon:function(e){return(0,q.jsx)("svg",X(X({fill:"currentColor",viewBox:"0 0 24 24"},e),{},{children:(0,q.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",clipRule:"evenodd"})}))}}]};function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}return(0,q.jsxs)("div",{children:[(0,q.jsx)(U,{as:"nav",className:"bg-gray-900  w-full ",children:function(e){var n=e.open;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,q.jsxs)("div",{className:"flex justify-between h-16",children:[(0,q.jsxs)("div",{className:"flex",children:[(0,q.jsx)("div",{className:"-ml-2 mr-2 flex items-center md:hidden",children:(0,q.jsxs)(U.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[(0,q.jsx)("span",{className:"sr-only",children:"Open main menu"}),n?(0,q.jsx)(K.b0D,{className:"block h-6 w-6","aria-hidden":"true"}):(0,q.jsx)(K.Oqj,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,q.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[(0,q.jsx)("img",{className:"block lg:hidden h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"}),(0,q.jsx)("img",{className:"hidden lg:block h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",alt:"Workflow"})]})]}),(0,q.jsxs)("div",{className:"flex items-center",children:[(0,q.jsx)("div",{className:"hidden md:ml-6 md:flex md:items-center md:space-x-4",children:o.map((function(e){return(0,q.jsx)(a.default,{href:e.href,"aria-current":e.current?"page":void 0,children:(0,q.jsxs)("p",{className:s(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium text-white cursor-pointer "),children:[" ",e.name]})},e.name)}))}),(0,q.jsx)("div",{className:"pl-5 flex-shrink-0 ",children:(0,q.jsx)(a.default,{href:"/account-dashboard",children:(0,q.jsx)("button",{type:"button",className:"relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500",children:(0,q.jsx)("span",{children:"Wallet connect"})})})})]})]})}),(0,q.jsx)(U.Panel,{className:"md:hidden",children:(0,q.jsx)("div",{className:" px-2 pt-2 pb-3 space-y-1 sm:px-3 ",children:o.map((function(e){return(0,q.jsx)(a.default,{href:e.href,as:"a","aria-current":e.current?"page":void 0,children:(0,q.jsxs)("p",{className:s(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"," text-white  px-3 py-2 rounded-md text-base font-medium  cursor-pointer"),children:[" ",e.name]})},e.name)}))})})]})}}),(0,q.jsx)(t,X({},r)),(0,q.jsxs)("footer",{className:"bg-white border-t","aria-labelledby":"footer-heading",children:[(0,q.jsx)("h2",{id:"footer-heading",className:"sr-only",children:"Footer"}),(0,q.jsxs)("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8",children:[(0,q.jsx)("div",{className:"pb-8 xl:grid xl:grid-cols-4 xl:gap-8",children:(0,q.jsxs)("div",{className:"grid grid-cols-2 gap-8 xl:col-span-4",children:[(0,q.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[(0,q.jsxs)("div",{children:[(0,q.jsx)("h3",{className:"text-sm font-semibold text-gray-400 tracking-wider uppercase",children:(0,q.jsx)("img",{className:"block  h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"})}),(0,q.jsx)("ul",{role:"list",className:"mt-4 space-y-2 ",children:(0,q.jsx)("li",{className:"text-base text-gray-600 hover:text-gray-900",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae."})})]}),(0,q.jsxs)("div",{className:"mt-12 md:mt-0",children:[(0,q.jsx)("h3",{className:"text-sm font-semibold text-indigo-600 tracking-wider uppercase",children:"Useful Links"}),(0,q.jsx)("ul",{role:"list",className:"mt-4 space-y-2",children:o.map((function(e){return(0,q.jsx)(a.default,{href:e.href,children:(0,q.jsx)("li",{children:(0,q.jsx)("div",{className:"text-base text-gray-700 hover:text-gray-900 cursor-pointer",children:e.name})},e.name)},e.name)}))})]})]}),(0,q.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[(0,q.jsxs)("div",{children:[(0,q.jsx)("h3",{className:"text-sm font-semibold text-indigo-600 tracking-wider uppercase",children:"Community"}),(0,q.jsx)("ul",{role:"list",className:"mt-4 space-y-2",children:i.company.map((function(e){return(0,q.jsx)("li",{children:(0,q.jsx)("a",{href:e.href,className:"text-base text-gray-700 hover:text-gray-900",children:e.name})},e.name)}))})]}),(0,q.jsx)("div",{className:"mt-12 md:mt-0",children:(0,q.jsxs)("div",{className:"mt-12 xl:mt-0",children:[(0,q.jsx)("h3",{className:"text-sm font-semibold text-indigo-500 tracking-wider uppercase",children:"Language & Currency"}),(0,q.jsxs)("form",{className:"mt-4 sm:max-w-xs",children:[(0,q.jsxs)("fieldset",{className:"w-full",children:[(0,q.jsx)("label",{htmlFor:"language",className:"sr-only",children:"Language"}),(0,q.jsxs)("div",{className:"relative",children:[(0,q.jsxs)("select",{id:"language",name:"language",className:"appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",defaultValue:"English",children:[(0,q.jsx)("option",{children:"English"}),(0,q.jsx)("option",{children:"French"}),(0,q.jsx)("option",{children:"German"}),(0,q.jsx)("option",{children:"Japanese"}),(0,q.jsx)("option",{children:"Spanish"})]}),(0,q.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center",children:(0,q.jsx)(V.v4q,{className:"h-4 w-4 text-gray-400","aria-hidden":"true"})})]})]}),(0,q.jsxs)("fieldset",{className:"mt-4 w-full",children:[(0,q.jsx)("label",{htmlFor:"currency",className:"sr-only",children:"Currency"}),(0,q.jsxs)("div",{className:"relative",children:[(0,q.jsxs)("select",{id:"currency",name:"currency",className:"appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",defaultValue:"AUD",children:[(0,q.jsx)("option",{children:"ARS"}),(0,q.jsx)("option",{children:"AUD"}),(0,q.jsx)("option",{children:"CAD"}),(0,q.jsx)("option",{children:"CHF"}),(0,q.jsx)("option",{children:"EUR"}),(0,q.jsx)("option",{children:"GBP"}),(0,q.jsx)("option",{children:"JPY"}),(0,q.jsx)("option",{children:"USD"})]}),(0,q.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center",children:(0,q.jsx)(V.v4q,{className:"h-4 w-4 text-gray-400","aria-hidden":"true"})})]})]})]})]})})]})]})}),(0,q.jsxs)("div",{className:"mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between",children:[(0,q.jsx)("div",{className:"flex space-x-6 md:order-2",children:null===(n=i.social)||void 0===n?void 0:n.map((function(e){return(0,q.jsxs)("a",{href:e.href,className:"text-gray-400 hover:text-gray-500",children:[(0,q.jsx)("span",{className:"sr-only",children:e.name}),(0,q.jsx)(e.icon,{className:"h-6 w-6","aria-hidden":"true"})]},e.name)}))}),(0,q.jsx)("p",{className:"mt-8 text-base text-indigo-500 md:mt-0 md:order-1",children:"\xa9 2020 Workflow, Inc. All rights reserved."})]})]})]})]})}},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1203)}])},5745:function(){},3146:function(){},1664:function(e,n,t){e.exports=t(2167)},9120:function(e,n,t){"use strict";t.d(n,{BZ6:function(){return a},js$:function(){return o},NbN:function(){return i},T39:function(){return s},Oqj:function(){return l},FjK:function(){return c},oyc:function(){return u},b0D:function(){return d}});var r=t(7294);var a=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"}))};var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}))};var i=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"}))};var s=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}))};var l=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var c=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}))};var u=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"}))};var d=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}},2942:function(e,n,t){"use strict";t.d(n,{v4q:function(){return a},XCv:function(){return o}});var r=t(7294);var a=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),r.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))};var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e),r.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}},2809:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(4651)}));var t=e.O();_N_E=t}]);