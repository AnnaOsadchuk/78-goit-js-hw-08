!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var o,i,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function j(e){return l=e,f=setTimeout(h,t),d?y(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?b(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?y(e):(o=i=void 0,u)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(h,t),y(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,g(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function g(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||f.test(e)?c(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),O=document.querySelector("input"),h=document.querySelector("textarea"),w=document.querySelector("button"),T=localStorage.getItem("feedback-form-state");if(T){var x=JSON.parse(T);O.value=x.email,h.value=x.message}j.addEventListener("input",n((function(){var e=O.value,t=h.value,n={email:"".concat(e),message:"".concat(t)};localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500)),w.addEventListener("click",(function(e){e.preventDefault(),""!==O.value&&""!==h.value&&(console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),j.reset())}))}();
//# sourceMappingURL=03-feedback.002c4ad6.js.map