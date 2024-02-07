/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t="transitionend",e=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},i=t=>{const i=e(t);return i&&document.querySelector(i)?i:null},n=t=>{const i=e(t);return i?document.querySelector(i):null},s=e=>{e.dispatchEvent(new Event(t))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,g=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},m=t=>{"function"==typeof t&&t()},_=(e,i,n=!0)=>{if(!n)return void m(e);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(i)+5;let r=!1;const a=({target:n})=>{n===i&&(r=!0,i.removeEventListener(t,a),m(e))};i.addEventListener(t,a),setTimeout((()=>{r||s(i)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=N(t);return C.has(o)||(o=t),[n,s,o]}function D(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return j(s,{delegateTarget:r}),n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return j(n,{delegateTarget:t}),i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function S(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function I(t,e,i,n){const s=e[i]||{};for(const o of Object.keys(s))if(o.includes(n)){const n=s[o];S(t,e,i,n.callable,n.delegationSelector)}}function N(t){return t=t.replace(y,""),T[t]||t}const P={on(t,e,i,n){D(t,e,i,n,!1)},one(t,e,i,n){D(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))I(t,l,i,e.slice(1));for(const i of Object.keys(c)){const n=i.replace(w,"");if(!a||e.includes(n)){const e=c[i];S(t,l,r,e.callable,e.delegationSelector)}}}else{if(!Object.keys(c).length)return;S(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==N(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let l=new Event(e,{bubbles:o,cancelable:!0});return l=j(l,i),a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function j(t,e){for(const[i,n]of Object.entries(e||{}))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}const M=new Map,H={set(t,e,i){M.has(t)||M.set(t,new Map);const n=M.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>M.has(t)&&M.get(t).get(e)||null,remove(t,e){if(!M.has(t))return;const i=M.get(t);i.delete(e),0===i.size&&M.delete(t)}};function $(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function W(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${W(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${W(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=$(t.dataset[n])}return e},getDataAttribute:(t,e)=>$(t.getAttribute(`data-bs-${W(e)}`))};class F{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?B.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const s=e[n],r=t[n],a=o(r)?"element":null==(i=r)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)}var i}}class z extends F{constructor(t,e){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(e),H.set(this._element,this.constructor.DATA_KEY,this))}dispose(){H.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return H.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.2.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const q=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;P.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const o=n(this)||this.closest(`.${s}`);t.getOrCreateInstance(o)[e]()}))};class R extends z{static get NAME(){return"alert"}close(){if(P.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),P.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=R.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}q(R,"close"),g(R);const V='[data-bs-toggle="button"]';class K extends z{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=K.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}P.on(document,"click.bs.button.data-api",V,(t=>{t.preventDefault();const e=t.target.closest(V);K.getOrCreateInstance(e).toggle()})),g(K);const Q={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))}},X={endCallback:null,leftCallback:null,rightCallback:null},Y={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class U extends F{constructor(t,e){super(),this._element=t,t&&U.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return X}static get DefaultType(){return Y}static get NAME(){return"swipe"}dispose(){P.off(this._element,".bs.swipe")}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),m(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&m(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(P.on(this._element,"pointerdown.bs.swipe",(t=>this._start(t))),P.on(this._element,"pointerup.bs.swipe",(t=>this._end(t))),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.swipe",(t=>this._start(t))),P.on(this._element,"touchmove.bs.swipe",(t=>this._move(t))),P.on(this._element,"touchend.bs.swipe",(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const G="next",J="prev",Z="left",tt="right",et="slid.bs.carousel",it="carousel",nt="active",st={ArrowLeft:tt,ArrowRight:Z},ot={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class at extends z{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===it&&this.cycle()}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return"carousel"}next(){this._slide(G)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(J)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?P.one(this._element,et,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void P.one(this._element,et,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?G:J;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",(t=>this._keydown(t))),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),P.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&U.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of Q.find(".carousel-item img",this._element))P.on(t,"dragstart.bs.carousel",(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(Z)),rightCallback:()=>this._slide(this._directionToOrder(tt)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new U(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=st[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Q.findOne(".active",this._indicatorsElement);e.classList.remove(nt),e.removeAttribute("aria-current");const i=Q.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(nt),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===G,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>P.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r("slide.bs.carousel").defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(nt),i.classList.remove(nt,c,l),this._isSliding=!1,r(et)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Q.findOne(".active.carousel-item",this._element)}_getItems(){return Q.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===Z?J:G:t===Z?G:J}_orderToDirection(t){return p()?t===J?Z:tt:t===J?tt:Z}static jQueryInterface(t){return this.each((function(){const e=at.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(t){const e=n(this);if(!e||!e.classList.contains(it))return;t.preventDefault();const i=at.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),P.on(window,"load.bs.carousel.data-api",(()=>{const t=Q.find('[data-bs-ride="carousel"]');for(const e of t)at.getOrCreateInstance(e)})),g(at);const lt="show",ct="collapse",ht="collapsing",dt='[data-bs-toggle="collapse"]',ut={parent:null,toggle:!0},ft={parent:"(null|element)",toggle:"boolean"};class pt extends z{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=Q.find(dt);for(const t of n){const e=i(t),n=Q.find(e).filter((t=>t===this._element));null!==e&&n.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ut}static get DefaultType(){return ft}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>pt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(ct),this._element.classList.add(ht),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct,lt),this._element.style[e]="",P.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(ht),this._element.classList.remove(ct,lt);for(const t of this._triggerArray){const e=n(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(ht),this._element.classList.add(ct),P.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(lt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(dt);for(const e of t){const t=n(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=Q.find(":scope .collapse .collapse",this._config.parent);return Q.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=pt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}P.on(document,"click.bs.collapse.data-api",dt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=i(this),n=Q.find(e);for(const t of n)pt.getOrCreateInstance(t,{toggle:!1}).toggle()})),g(pt);var gt="top",mt="bottom",_t="right",bt="left",vt="auto",yt=[gt,mt,_t,bt],wt="start",At="end",Et="clippingParents",Tt="viewport",Ct="popper",Ot="reference",xt=yt.reduce((function(t,e){return t.concat([e+"-"+wt,e+"-"+At])}),[]),kt=[].concat(yt,[vt]).reduce((function(t,e){return t.concat([e,e+"-"+wt,e+"-"+At])}),[]),Lt="beforeRead",Dt="read",St="afterRead",It="beforeMain",Nt="main",Pt="afterMain",jt="beforeWrite",Mt="write",Ht="afterWrite",$t=[Lt,Dt,St,It,Nt,Pt,jt,Mt,Ht];function Wt(t){return t?(t.nodeName||"").toLowerCase():null}function Bt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Ft(t){return t instanceof Bt(t).Element||t instanceof Element}function zt(t){return t instanceof Bt(t).HTMLElement||t instanceof HTMLElement}function qt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Bt(t).ShadowRoot||t instanceof ShadowRoot)}const Rt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];zt(s)&&Wt(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});zt(n)&&Wt(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Vt(t){return t.split("-")[0]}var Kt=Math.max,Qt=Math.min,Xt=Math.round;function Yt(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ut(){return!/^((?!chrome|android).)*safari/i.test(Yt())}function Gt(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&zt(t)&&(s=t.offsetWidth>0&&Xt(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Xt(n.height)/t.offsetHeight||1);var r=(Ft(t)?Bt(t):window).visualViewport,a=!Ut()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function Jt(t){var e=Gt(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Zt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&qt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function te(t){return Bt(t).getComputedStyle(t)}function ee(t){return["table","td","th"].indexOf(Wt(t))>=0}function ie(t){return((Ft(t)?t.ownerDocument:t.document)||window.document).documentElement}function ne(t){return"html"===Wt(t)?t:t.assignedSlot||t.parentNode||(qt(t)?t.host:null)||ie(t)}function se(t){return zt(t)&&"fixed"!==te(t).position?t.offsetParent:null}function oe(t){for(var e=Bt(t),i=se(t);i&&ee(i)&&"static"===te(i).position;)i=se(i);return i&&("html"===Wt(i)||"body"===Wt(i)&&"static"===te(i).position)?e:i||function(t){var e=/firefox/i.test(Yt());if(/Trident/i.test(Yt())&&zt(t)&&"fixed"===te(t).position)return null;var i=ne(t);for(qt(i)&&(i=i.host);zt(i)&&["html","body"].indexOf(Wt(i))<0;){var n=te(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function re(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ae(t,e,i){return Kt(t,Qt(e,i))}function le(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ce(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const he={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=Vt(i.placement),l=re(a),c=[bt,_t].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return le("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ce(t,yt))}(s.padding,i),d=Jt(o),u="y"===l?gt:bt,f="y"===l?mt:_t,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],g=r[l]-i.rects.reference[l],m=oe(o),_=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,b=p/2-g/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=ae(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&Zt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function de(t){return t.split("-")[1]}var ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fe(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,g=void 0===p?0:p,m="function"==typeof h?h({x:f,y:g}):{x:f,y:g};f=m.x,g=m.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=bt,y=gt,w=window;if(c){var A=oe(i),E="clientHeight",T="clientWidth";A===Bt(i)&&"static"!==te(A=ie(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===gt||(s===bt||s===_t)&&o===At)&&(y=mt,g-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,g*=l?1:-1),s!==bt&&(s!==gt&&s!==mt||o!==At)||(v=_t,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&ue),x=!0===h?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:Xt(e*n)/n||0,y:Xt(i*n)/n||0}}({x:f,y:g}):{x:f,y:g};return f=x.x,g=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?g+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const pe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:Vt(e.placement),variation:de(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,fe(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,fe(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var ge={passive:!0};const me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=Bt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,ge)})),a&&l.addEventListener("resize",i.update,ge),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,ge)})),a&&l.removeEventListener("resize",i.update,ge)}},data:{}};var _e={left:"right",right:"left",bottom:"top",top:"bottom"};function be(t){return t.replace(/left|right|bottom|top/g,(function(t){return _e[t]}))}var ve={start:"end",end:"start"};function ye(t){return t.replace(/start|end/g,(function(t){return ve[t]}))}function we(t){var e=Bt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ae(t){return Gt(ie(t)).left+we(t).scrollLeft}function Ee(t){var e=te(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Te(t){return["html","body","#document"].indexOf(Wt(t))>=0?t.ownerDocument.body:zt(t)&&Ee(t)?t:Te(ne(t))}function Ce(t,e){var i;void 0===e&&(e=[]);var n=Te(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=Bt(n),r=s?[o].concat(o.visualViewport||[],Ee(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Ce(ne(r)))}function Oe(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function xe(t,e,i){return e===Tt?Oe(function(t,e){var i=Bt(t),n=ie(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ut();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ae(t),y:l}}(t,i)):Ft(e)?function(t,e){var i=Gt(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):Oe(function(t){var e,i=ie(t),n=we(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=Kt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=Kt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ae(t),l=-n.scrollTop;return"rtl"===te(s||i).direction&&(a+=Kt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(ie(t)))}function ke(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?Vt(s):null,r=s?de(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case gt:e={x:a,y:i.y-n.height};break;case mt:e={x:a,y:i.y+i.height};break;case _t:e={x:i.x+i.width,y:l};break;case bt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?re(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case wt:e[c]=e[c]-(i[h]/2-n[h]/2);break;case At:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function Le(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Et:a,c=i.rootBoundary,h=void 0===c?Tt:c,d=i.elementContext,u=void 0===d?Ct:d,f=i.altBoundary,p=void 0!==f&&f,g=i.padding,m=void 0===g?0:g,_=le("number"!=typeof m?m:ce(m,yt)),b=u===Ct?Ot:Ct,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=Ce(ne(t)),i=["absolute","fixed"].indexOf(te(t).position)>=0&&zt(t)?oe(t):t;return Ft(i)?e.filter((function(t){return Ft(t)&&Zt(t,i)&&"body"!==Wt(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=xe(t,i,n);return e.top=Kt(s.top,e.top),e.right=Qt(s.right,e.right),e.bottom=Qt(s.bottom,e.bottom),e.left=Kt(s.left,e.left),e}),xe(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(Ft(y)?y:y.contextElement||ie(t.elements.popper),l,h,r),A=Gt(t.elements.reference),E=ke({reference:A,element:v,strategy:"absolute",placement:s}),T=Oe(Object.assign({},v,E)),C=u===Ct?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===Ct&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[_t,mt].indexOf(t)>=0?1:-1,i=[gt,mt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function De(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?kt:l,h=de(n),d=h?a?xt:xt.filter((function(t){return de(t)===h})):yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=Le(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[Vt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const Se={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,g=i.allowedAutoPlacements,m=e.options.placement,_=Vt(m),b=l||(_!==m&&p?function(t){if(Vt(t)===vt)return[];var e=be(t);return[ye(t),e,ye(e)]}(m):[be(m)]),v=[m].concat(b).reduce((function(t,i){return t.concat(Vt(i)===vt?De(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:g}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=Vt(O),k=de(O)===wt,L=[gt,mt].indexOf(x)>=0,D=L?"width":"height",S=Le(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=L?k?_t:bt:k?mt:gt;y[D]>w[D]&&(I=be(I));var N=be(I),P=[];if(o&&P.push(S[x]<=0),a&&P.push(S[I]<=0,S[N]<=0),P.every((function(t){return t}))){T=O,E=!1;break}A.set(O,P)}if(E)for(var j=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},M=p?3:1;M>0&&"break"!==j(M);M--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Ie(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function Ne(t){return[gt,_t,mt,bt].some((function(e){return t[e]>=0}))}const Pe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=Le(e,{elementContext:"reference"}),a=Le(e,{altBoundary:!0}),l=Ie(r,n),c=Ie(a,s,o),h=Ne(l),d=Ne(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},je={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=kt.reduce((function(t,i){return t[i]=function(t,e,i){var n=Vt(t),s=[bt,gt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[bt,_t].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},Me={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ke({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},He={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,g=void 0===p?0:p,m=Le(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=Vt(e.placement),b=de(e.placement),v=!b,y=re(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,D="y"===y?gt:bt,S="y"===y?mt:_t,I="y"===y?"height":"width",N=A[y],P=N+m[D],j=N-m[S],M=f?-T[I]/2:0,H=b===wt?E[I]:T[I],$=b===wt?-T[I]:-E[I],W=e.elements.arrow,B=f&&W?Jt(W):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=F[D],q=F[S],R=ae(0,E[I],B[I]),V=v?E[I]/2-M-R-z-O.mainAxis:H-R-z-O.mainAxis,K=v?-E[I]/2+M+R+q+O.mainAxis:$+R+q+O.mainAxis,Q=e.elements.arrow&&oe(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=N+K-Y,G=ae(f?Qt(P,N+V-Y-X):P,N,f?Kt(j,U):j);A[y]=G,k[y]=G-N}if(a){var J,Z="x"===y?gt:bt,tt="x"===y?mt:_t,et=A[w],it="y"===w?"height":"width",nt=et+m[Z],st=et-m[tt],ot=-1!==[gt,bt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=ae(t,e,i);return n>i?i:n}(at,et,lt):ae(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function $e(t,e,i){void 0===i&&(i=!1);var n,s,o=zt(e),r=zt(e)&&function(t){var e=t.getBoundingClientRect(),i=Xt(e.width)/t.offsetWidth||1,n=Xt(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=ie(e),l=Gt(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==Wt(e)||Ee(a))&&(c=(n=e)!==Bt(n)&&zt(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:we(n)),zt(e)?((h=Gt(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ae(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function We(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var Be={placement:"bottom",modifiers:[],strategy:"absolute"};function Fe(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function ze(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?Be:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},Be,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:Ft(t)?Ce(t):t.contextElement?Ce(t.contextElement):[],popper:Ce(e)};var r,c,u=function(t){var e=We(t);return $t.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(Fe(e,i)){a.rects={reference:$e(e,oe(i),"fixed"===a.options.strategy),popper:Jt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!Fe(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var qe=ze(),Re=ze({defaultModifiers:[me,Me,pe,Rt]}),Ve=ze({defaultModifiers:[me,Me,pe,Rt,je,Se,He,he,Pe]});const Ke=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:ze,detectOverflow:Le,createPopperBase:qe,createPopper:Ve,createPopperLite:Re,top:gt,bottom:mt,right:_t,left:bt,auto:vt,basePlacements:yt,start:wt,end:At,clippingParents:Et,viewport:Tt,popper:Ct,reference:Ot,variationPlacements:xt,placements:kt,beforeRead:Lt,read:Dt,afterRead:St,beforeMain:It,main:Nt,afterMain:Pt,beforeWrite:jt,write:Mt,afterWrite:Ht,modifierPhases:$t,applyStyles:Rt,arrow:he,computeStyles:pe,eventListeners:me,flip:Se,hide:Pe,offset:je,popperOffsets:Me,preventOverflow:He},Symbol.toStringTag,{value:"Module"})),Qe="dropdown",Xe="ArrowUp",Ye="ArrowDown",Ue="click.bs.dropdown.data-api",Ge="keydown.bs.dropdown.data-api",Je="show",Ze='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ti=`${Ze}.show`,ei=".dropdown-menu",ii=p()?"top-end":"top-start",ni=p()?"top-start":"top-end",si=p()?"bottom-end":"bottom-start",oi=p()?"bottom-start":"bottom-end",ri=p()?"left-start":"right-start",ai=p()?"right-start":"left-start",li={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ci={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class hi extends z{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,ei)[0]||Q.prev(this._element,ei)[0]||Q.findOne(ei,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return li}static get DefaultType(){return ci}static get NAME(){return Qe}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Je),this._element.classList.add(Je),P.trigger(this._element,"shown.bs.dropdown",t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Je),this._element.classList.remove(Je),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===Ke)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=Ve(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Je)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return ri;if(t.classList.contains("dropstart"))return ai;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ni:ii:e?oi:si}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const i=Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Ye,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=hi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=Q.find(ti);for(const i of e){const e=hi.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Xe,Ye].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Ze)?this:Q.prev(this,Ze)[0]||Q.next(this,Ze)[0]||Q.findOne(Ze,t.delegateTarget.parentNode),o=hi.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}P.on(document,Ge,Ze,hi.dataApiKeydownHandler),P.on(document,Ge,ei,hi.dataApiKeydownHandler),P.on(document,Ue,hi.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",hi.clearMenus),P.on(document,Ue,Ze,(function(t){t.preventDefault(),hi.getOrCreateInstance(this).toggle()})),g(hi);const di=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ui=".sticky-top",fi="padding-right",pi="margin-right";class gi{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,fi,(e=>e+t)),this._setElementAttributes(di,fi,(e=>e+t)),this._setElementAttributes(ui,pi,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,fi),this._resetElementAttributes(di,fi),this._resetElementAttributes(ui,pi)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&B.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=B.getDataAttribute(t,e);null!==i?(B.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of Q.find(t,this._element))e(i)}}const mi="show",_i="mousedown.bs.backdrop",bi={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},vi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class yi extends F{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return bi}static get DefaultType(){return vi}static get NAME(){return"backdrop"}show(t){if(!this._config.isVisible)return void m(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(mi),this._emulateAnimation((()=>{m(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(mi),this._emulateAnimation((()=>{this.dispose(),m(t)}))):m(t)}dispose(){this._isAppended&&(P.off(this._element,_i),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),P.on(t,_i,(()=>{m(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const wi=".bs.focustrap",Ai="backward",Ei={autofocus:!0,trapElement:null},Ti={autofocus:"boolean",trapElement:"element"};class Ci extends F{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ei}static get DefaultType(){return Ti}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),P.off(document,wi),P.on(document,"focusin.bs.focustrap",(t=>this._handleFocusin(t))),P.on(document,"keydown.tab.bs.focustrap",(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,wi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=Q.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===Ai?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?Ai:"forward")}}const Oi="hidden.bs.modal",xi="show.bs.modal",ki="modal-open",Li="show",Di="modal-static",Si={backdrop:!0,focus:!0,keyboard:!0},Ii={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ni extends z{constructor(t,e){super(t,e),this._dialog=Q.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new gi,this._addEventListeners()}static get Default(){return Si}static get DefaultType(){return Ii}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,xi,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ki),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(P.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Li),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){for(const t of[window,this._dialog])P.off(t,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new yi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ci({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Q.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(Li),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.modal",(t=>{if("Escape"===t.key)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),P.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),P.on(this._element,"mousedown.dismiss.bs.modal",(t=>{P.one(this._element,"click.dismiss.bs.modal",(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ki),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,Oi)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Di)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Di),this._queueCallback((()=>{this._element.classList.remove(Di),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=Ni.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=n(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,xi,(t=>{t.defaultPrevented||P.one(e,Oi,(()=>{a(this)&&this.focus()}))}));const i=Q.findOne(".modal.show");i&&Ni.getInstance(i).hide(),Ni.getOrCreateInstance(e).toggle(this)})),q(Ni),g(Ni);const Pi="show",ji="showing",Mi="hiding",Hi=".offcanvas.show",$i="hidePrevented.bs.offcanvas",Wi="hidden.bs.offcanvas",Bi={backdrop:!0,keyboard:!0,scroll:!1},Fi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class zi extends z{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Bi}static get DefaultType(){return Fi}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new gi).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ji),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Pi),this._element.classList.remove(ji),P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Mi),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(Pi,Mi),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new gi).reset(),P.trigger(this._element,Wi)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new yi({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():P.trigger(this._element,$i)}:null})}_initializeFocusTrap(){return new Ci({trapElement:this._element})}_addEventListeners(){P.on(this._element,"keydown.dismiss.bs.offcanvas",(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():P.trigger(this._element,$i))}))}static jQueryInterface(t){return this.each((function(){const e=zi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(t){const e=n(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;P.one(e,Wi,(()=>{a(this)&&this.focus()}));const i=Q.findOne(Hi);i&&i!==e&&zi.getInstance(i).hide(),zi.getOrCreateInstance(e).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",(()=>{for(const t of Q.find(Hi))zi.getOrCreateInstance(t).show()})),P.on(window,"resize.bs.offcanvas",(()=>{for(const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&zi.getOrCreateInstance(t).hide()})),q(zi),g(zi);const qi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ri=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Vi=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Ki=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!qi.has(i)||Boolean(Ri.test(t.nodeValue)||Vi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Qi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Xi={allowList:Qi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Yi={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ui={entry:"(string|element|function|null)",selector:"(string|element)"};class Gi extends F{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Xi}static get DefaultType(){return Yi}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Ui)}_setContent(t,e,i){const n=Q.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Ki(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return"function"==typeof t?t(this):t}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const Ji=new Set(["sanitize","allowList","sanitizeFn"]),Zi="fade",tn="show",en=".modal",nn="hide.bs.modal",sn="hover",on="focus",rn={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},an={allowList:Qi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ln={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class cn extends z{constructor(t,e){if(void 0===Ke)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return an}static get DefaultType(){return ln}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(en),nn,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),P.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(tn),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.on(t,"mouseover",h);this._queueCallback((()=>{P.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!P.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(tn),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))P.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Zi,tn),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Zi),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Gi({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Zi)}_isShown(){return this.tip&&this.tip.classList.contains(tn)}_createPopper(t){const e="function"==typeof this._config.placement?this._config.placement.call(this,t,this._element):this._config.placement,i=rn[e.toUpperCase()];return Ve(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return"function"==typeof t?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)P.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===sn?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===sn?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");P.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?on:sn]=!0,e._enter()})),P.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?on:sn]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(en),nn,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=B.getDataAttributes(this._element);for(const t of Object.keys(e))Ji.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=cn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(cn);const hn={...cn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},dn={...cn.DefaultType,content:"(null|string|element|function)"};class un extends cn{static get Default(){return hn}static get DefaultType(){return dn}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=un.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}g(un);const fn="click.bs.scrollspy",pn="active",gn="[href]",mn={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},_n={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class bn extends z{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return mn}static get DefaultType(){return _n}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(P.off(this._config.target,fn),P.on(this._config.target,fn,gn,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Q.find(gn,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=Q.findOne(e.hash,this._element);a(t)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(pn),this._activateParents(t),P.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))Q.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(pn);else for(const e of Q.parents(t,".nav, .list-group"))for(const t of Q.prev(e,".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(pn)}_clearActiveClass(t){t.classList.remove(pn);const e=Q.find("[href].active",t);for(const t of e)t.classList.remove(pn)}static jQueryInterface(t){return this.each((function(){const e=bn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",(()=>{for(const t of Q.find('[data-bs-spy="scroll"]'))bn.getOrCreateInstance(t)})),g(bn);const vn="ArrowLeft",yn="ArrowRight",wn="ArrowUp",An="ArrowDown",En="active",Tn="fade",Cn="show",On='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',xn=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${On}`;class kn extends z{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),P.on(this._element,"keydown.bs.tab",(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?P.trigger(e,"hide.bs.tab",{relatedTarget:t}):null;P.trigger(t,"show.bs.tab",{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(En),this._activate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),P.trigger(t,"shown.bs.tab",{relatedTarget:e})):t.classList.add(Cn)}),t,t.classList.contains(Tn)))}_deactivate(t,e){t&&(t.classList.remove(En),t.blur(),this._deactivate(n(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),P.trigger(t,"hidden.bs.tab",{relatedTarget:e})):t.classList.remove(Cn)}),t,t.classList.contains(Tn)))}_keydown(t){if(![vn,yn,wn,An].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[yn,An].includes(t.key),i=b(this._getChildren().filter((t=>!l(t))),t.target,e,!0);i&&(i.focus({preventScroll:!0}),kn.getOrCreateInstance(i).show())}_getChildren(){return Q.find(xn,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=n(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=Q.findOne(t,i);s&&s.classList.toggle(n,e)};n(".dropdown-toggle",En),n(".dropdown-menu",Cn),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(En)}_getInnerElement(t){return t.matches(xn)?t:Q.findOne(xn,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=kn.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab",On,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||kn.getOrCreateInstance(this).show()})),P.on(window,"load.bs.tab",(()=>{for(const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))kn.getOrCreateInstance(t)})),g(kn);const Ln="hide",Dn="show",Sn="showing",In={animation:"boolean",autohide:"boolean",delay:"number"},Nn={animation:!0,autohide:!0,delay:5e3};class Pn extends z{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Nn}static get DefaultType(){return In}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Ln),d(this._element),this._element.classList.add(Dn,Sn),this._queueCallback((()=>{this._element.classList.remove(Sn),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Sn),this._queueCallback((()=>{this._element.classList.add(Ln),this._element.classList.remove(Sn,Dn),P.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Dn),super.dispose()}isShown(){return this._element.classList.contains(Dn)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"mouseover.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"mouseout.bs.toast",(t=>this._onInteraction(t,!1))),P.on(this._element,"focusin.bs.toast",(t=>this._onInteraction(t,!0))),P.on(this._element,"focusout.bs.toast",(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=Pn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return q(Pn),g(Pn),{Alert:R,Button:K,Carousel:at,Collapse:pt,Dropdown:hi,Modal:Ni,Offcanvas:zi,Popover:un,ScrollSpy:bn,Tab:kn,Toast:Pn,Tooltip:cn}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.4",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssHas=ce(function(){try{return C.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssHas||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/**
 * Swiper 10.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 17, 2023
 */

var Swiper = (function () {
    'use strict';

    /**
     * SSR Window 4.0.2
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2021, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: December 13, 2021
     */
    /* eslint-disable no-param-reassign */
    function isObject$1(obj) {
        return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }
    function extend$1(target, src) {
        if (target === void 0) {
            target = {};
        }
        if (src === void 0) {
            src = {};
        }
        Object.keys(src).forEach(key => {
            if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
                extend$1(target[key], src[key]);
            }
        });
    }
    const ssrDocument = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ''
        },
        querySelector() {
            return null;
        },
        querySelectorAll() {
            return [];
        },
        getElementById() {
            return null;
        },
        createEvent() {
            return {
                initEvent() {}
            };
        },
        createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName() {
                    return [];
                }
            };
        },
        createElementNS() {
            return {};
        },
        importNode() {
            return null;
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        }
    };
    function getDocument() {
        const doc = typeof document !== 'undefined' ? document : {};
        extend$1(doc, ssrDocument);
        return doc;
    }
    const ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: ''
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
            return {
                getPropertyValue() {
                    return '';
                }
            };
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
            return {};
        },
        requestAnimationFrame(callback) {
            if (typeof setTimeout === 'undefined') {
                callback();
                return null;
            }
            return setTimeout(callback, 0);
        },
        cancelAnimationFrame(id) {
            if (typeof setTimeout === 'undefined') {
                return;
            }
            clearTimeout(id);
        }
    };
    function getWindow() {
        const win = typeof window !== 'undefined' ? window : {};
        extend$1(win, ssrWindow);
        return win;
    }

    function deleteProps(obj) {
        const object = obj;
        Object.keys(object).forEach(key => {
            try {
                object[key] = null;
            } catch (e) {
                // no getter for object
            }
            try {
                delete object[key];
            } catch (e) {
                // something got wrong
            }
        });
    }
    function nextTick(callback, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setTimeout(callback, delay);
    }
    function now() {
        return Date.now();
    }
    function getComputedStyle$1(el) {
        const window = getWindow();
        let style;
        if (window.getComputedStyle) {
            style = window.getComputedStyle(el, null);
        }
        if (!style && el.currentStyle) {
            style = el.currentStyle;
        }
        if (!style) {
            style = el.style;
        }
        return style;
    }
    function getTranslate(el, axis) {
        if (axis === void 0) {
            axis = 'x';
        }
        const window = getWindow();
        let matrix;
        let curTransform;
        let transformMatrix;
        const curStyle = getComputedStyle$1(el);
        if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
            if (curTransform.split(',').length > 6) {
                curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
            }
            // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case
            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
        }
        if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
            // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
            // Normal Browsers
            else curTransform = parseFloat(matrix[4]);
        }
        if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
            // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
            // Normal Browsers
            else curTransform = parseFloat(matrix[5]);
        }
        return curTransform || 0;
    }
    function isObject(o) {
        return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }
    function isNode(node) {
        // eslint-disable-next-line
        if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
            return node instanceof HTMLElement;
        }
        return node && (node.nodeType === 1 || node.nodeType === 11);
    }
    function extend() {
        const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
        const noExtend = ['__proto__', 'constructor', 'prototype'];
        for (let i = 1; i < arguments.length; i += 1) {
            const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
            if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
                const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
                for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                    const nextKey = keysArray[nextIndex];
                    const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                            if (nextSource[nextKey].__swiper__) {
                                to[nextKey] = nextSource[nextKey];
                            } else {
                                extend(to[nextKey], nextSource[nextKey]);
                            }
                        } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) {
                                to[nextKey] = nextSource[nextKey];
                            } else {
                                extend(to[nextKey], nextSource[nextKey]);
                            }
                        } else {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
        }
        return to;
    }
    function setCSSProperty(el, varName, varValue) {
        el.style.setProperty(varName, varValue);
    }
    function animateCSSModeScroll(_ref) {
        let {
            swiper,
            targetPosition,
            side
        } = _ref;
        const window = getWindow();
        const startPosition = -swiper.translate;
        let startTime = null;
        let time;
        const duration = swiper.params.speed;
        swiper.wrapperEl.style.scrollSnapType = 'none';
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        const dir = targetPosition > startPosition ? 'next' : 'prev';
        const isOutOfBound = (current, target) => {
            return dir === 'next' && current >= target || dir === 'prev' && current <= target;
        };
        const animate = () => {
            time = new Date().getTime();
            if (startTime === null) {
                startTime = time;
            }
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
            let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
            if (isOutOfBound(currentPosition, targetPosition)) {
                currentPosition = targetPosition;
            }
            swiper.wrapperEl.scrollTo({
                [side]: currentPosition
            });
            if (isOutOfBound(currentPosition, targetPosition)) {
                swiper.wrapperEl.style.overflow = 'hidden';
                swiper.wrapperEl.style.scrollSnapType = '';
                setTimeout(() => {
                    swiper.wrapperEl.style.overflow = '';
                    swiper.wrapperEl.scrollTo({
                        [side]: currentPosition
                    });
                });
                window.cancelAnimationFrame(swiper.cssModeFrameID);
                return;
            }
            swiper.cssModeFrameID = window.requestAnimationFrame(animate);
        };
        animate();
    }
    function getSlideTransformEl(slideEl) {
        return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
    }
    function elementChildren(element, selector) {
        if (selector === void 0) {
            selector = '';
        }
        return [...element.children].filter(el => el.matches(selector));
    }
    function createElement(tag, classes) {
        if (classes === void 0) {
            classes = [];
        }
        const el = document.createElement(tag);
        el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
        return el;
    }
    function elementOffset(el) {
        const window = getWindow();
        const document = getDocument();
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    }
    function elementPrevAll(el, selector) {
        const prevEls = [];
        while (el.previousElementSibling) {
            const prev = el.previousElementSibling; // eslint-disable-line
            if (selector) {
                if (prev.matches(selector)) prevEls.push(prev);
            } else prevEls.push(prev);
            el = prev;
        }
        return prevEls;
    }
    function elementNextAll(el, selector) {
        const nextEls = [];
        while (el.nextElementSibling) {
            const next = el.nextElementSibling; // eslint-disable-line
            if (selector) {
                if (next.matches(selector)) nextEls.push(next);
            } else nextEls.push(next);
            el = next;
        }
        return nextEls;
    }
    function elementStyle(el, prop) {
        const window = getWindow();
        return window.getComputedStyle(el, null).getPropertyValue(prop);
    }
    function elementIndex(el) {
        let child = el;
        let i;
        if (child) {
            i = 0;
            // eslint-disable-next-line
            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) i += 1;
            }
            return i;
        }
        return undefined;
    }
    function elementParents(el, selector) {
        const parents = []; // eslint-disable-line
        let parent = el.parentElement; // eslint-disable-line
        while (parent) {
            if (selector) {
                if (parent.matches(selector)) parents.push(parent);
            } else {
                parents.push(parent);
            }
            parent = parent.parentElement;
        }
        return parents;
    }
    function elementTransitionEnd(el, callback) {
        function fireCallBack(e) {
            if (e.target !== el) return;
            callback.call(el, e);
            el.removeEventListener('transitionend', fireCallBack);
        }
        if (callback) {
            el.addEventListener('transitionend', fireCallBack);
        }
    }
    function elementOuterSize(el, size, includeMargins) {
        const window = getWindow();
        if (includeMargins) {
            return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
        }
        return el.offsetWidth;
    }

    let support;
    function calcSupport() {
        const window = getWindow();
        const document = getDocument();
        return {
            smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
            touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
        };
    }
    function getSupport() {
        if (!support) {
            support = calcSupport();
        }
        return support;
    }

    let deviceCached;
    function calcDevice(_temp) {
        let {
            userAgent
        } = _temp === void 0 ? {} : _temp;
        const support = getSupport();
        const window = getWindow();
        const platform = window.navigator.platform;
        const ua = userAgent || window.navigator.userAgent;
        const device = {
            ios: false,
            android: false
        };
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        const windows = platform === 'Win32';
        let macos = platform === 'MacIntel';

        // iPadOs 13 fix
        const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
        if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad) ipad = [0, 1, '13_0_0'];
            macos = false;
        }

        // Android
        if (android && !windows) {
            device.os = 'android';
            device.android = true;
        }
        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        }

        // Export object
        return device;
    }
    function getDevice(overrides) {
        if (overrides === void 0) {
            overrides = {};
        }
        if (!deviceCached) {
            deviceCached = calcDevice(overrides);
        }
        return deviceCached;
    }

    let browser;
    function calcBrowser() {
        const window = getWindow();
        let needPerspectiveFix = false;
        function isSafari() {
            const ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
        }
        if (isSafari()) {
            const ua = String(window.navigator.userAgent);
            if (ua.includes('Version/')) {
                const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
                needPerspectiveFix = major < 16 || major === 16 && minor < 2;
            }
        }
        return {
            isSafari: needPerspectiveFix || isSafari(),
            needPerspectiveFix,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
        };
    }
    function getBrowser() {
        if (!browser) {
            browser = calcBrowser();
        }
        return browser;
    }

    function Resize(_ref) {
        let {
            swiper,
            on,
            emit
        } = _ref;
        const window = getWindow();
        let observer = null;
        let animationFrame = null;
        const resizeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit('beforeResize');
            emit('resize');
        };
        const createObserver = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            observer = new ResizeObserver(entries => {
                animationFrame = window.requestAnimationFrame(() => {
                    const {
                        width,
                        height
                    } = swiper;
                    let newWidth = width;
                    let newHeight = height;
                    entries.forEach(_ref2 => {
                        let {
                            contentBoxSize,
                            contentRect,
                            target
                        } = _ref2;
                        if (target && target !== swiper.el) return;
                        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                    });
                    if (newWidth !== width || newHeight !== height) {
                        resizeHandler();
                    }
                });
            });
            observer.observe(swiper.el);
        };
        const removeObserver = () => {
            if (animationFrame) {
                window.cancelAnimationFrame(animationFrame);
            }
            if (observer && observer.unobserve && swiper.el) {
                observer.unobserve(swiper.el);
                observer = null;
            }
        };
        const orientationChangeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit('orientationchange');
        };
        on('init', () => {
            if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
                createObserver();
                return;
            }
            window.addEventListener('resize', resizeHandler);
            window.addEventListener('orientationchange', orientationChangeHandler);
        });
        on('destroy', () => {
            removeObserver();
            window.removeEventListener('resize', resizeHandler);
            window.removeEventListener('orientationchange', orientationChangeHandler);
        });
    }

    function Observer(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const observers = [];
        const window = getWindow();
        const attach = function (target, options) {
            if (options === void 0) {
                options = {};
            }
            const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            const observer = new ObserverFunc(mutations => {
                // The observerUpdate event should only be triggered
                // once despite the number of mutations.  Additional
                // triggers are redundant and are very costly
                if (swiper.__preventObserver__) return;
                if (mutations.length === 1) {
                    emit('observerUpdate', mutations[0]);
                    return;
                }
                const observerUpdate = function observerUpdate() {
                    emit('observerUpdate', mutations[0]);
                };
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(observerUpdate);
                } else {
                    window.setTimeout(observerUpdate, 0);
                }
            });
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
            observers.push(observer);
        };
        const init = () => {
            if (!swiper.params.observer) return;
            if (swiper.params.observeParents) {
                const containerParents = elementParents(swiper.hostEl);
                for (let i = 0; i < containerParents.length; i += 1) {
                    attach(containerParents[i]);
                }
            }
            // Observe container
            attach(swiper.hostEl, {
                childList: swiper.params.observeSlideChildren
            });

            // Observe wrapper
            attach(swiper.wrapperEl, {
                attributes: false
            });
        };
        const destroy = () => {
            observers.forEach(observer => {
                observer.disconnect();
            });
            observers.splice(0, observers.length);
        };
        extendParams({
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        });
        on('init', init);
        on('destroy', destroy);
    }

    /* eslint-disable no-underscore-dangle */

    var eventsEmitter = {
        on(events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== 'function') return self;
            const method = priority ? 'unshift' : 'push';
            events.split(' ').forEach(event => {
                if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                self.eventsListeners[event][method](handler);
            });
            return self;
        },
        once(events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== 'function') return self;
            function onceHandler() {
                self.off(events, onceHandler);
                if (onceHandler.__emitterProxy) {
                    delete onceHandler.__emitterProxy;
                }
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                handler.apply(self, args);
            }
            onceHandler.__emitterProxy = handler;
            return self.on(events, onceHandler, priority);
        },
        onAny(handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== 'function') return self;
            const method = priority ? 'unshift' : 'push';
            if (self.eventsAnyListeners.indexOf(handler) < 0) {
                self.eventsAnyListeners[method](handler);
            }
            return self;
        },
        offAny(handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsAnyListeners) return self;
            const index = self.eventsAnyListeners.indexOf(handler);
            if (index >= 0) {
                self.eventsAnyListeners.splice(index, 1);
            }
            return self;
        },
        off(events, handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            events.split(' ').forEach(event => {
                if (typeof handler === 'undefined') {
                    self.eventsListeners[event] = [];
                } else if (self.eventsListeners[event]) {
                    self.eventsListeners[event].forEach((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                            self.eventsListeners[event].splice(index, 1);
                        }
                    });
                }
            });
            return self;
        },
        emit() {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            let events;
            let data;
            let context;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }
            if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }
            data.unshift(context);
            const eventsArray = Array.isArray(events) ? events : events.split(' ');
            eventsArray.forEach(event => {
                if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                    self.eventsAnyListeners.forEach(eventHandler => {
                        eventHandler.apply(context, [event, ...data]);
                    });
                }
                if (self.eventsListeners && self.eventsListeners[event]) {
                    self.eventsListeners[event].forEach(eventHandler => {
                        eventHandler.apply(context, data);
                    });
                }
            });
            return self;
        }
    };

    function updateSize() {
        const swiper = this;
        let width;
        let height;
        const el = swiper.el;
        if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
            width = swiper.params.width;
        } else {
            width = el.clientWidth;
        }
        if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
            height = swiper.params.height;
        } else {
            height = el.clientHeight;
        }
        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
            return;
        }

        // Subtract paddings
        width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
        height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
        if (Number.isNaN(width)) width = 0;
        if (Number.isNaN(height)) height = 0;
        Object.assign(swiper, {
            width,
            height,
            size: swiper.isHorizontal() ? width : height
        });
    }

    function updateSlides() {
        const swiper = this;
        function getDirectionLabel(property) {
            if (swiper.isHorizontal()) {
                return property;
            }
            // prettier-ignore
            return {
                'width': 'height',
                'margin-top': 'margin-left',
                'margin-bottom ': 'margin-right',
                'margin-left': 'margin-top',
                'margin-right': 'margin-bottom',
                'padding-left': 'padding-top',
                'padding-right': 'padding-bottom',
                'marginRight': 'marginBottom'
            }[property];
        }
        function getDirectionPropertyValue(node, label) {
            return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
        }
        const params = swiper.params;
        const {
            wrapperEl,
            slidesEl,
            size: swiperSize,
            rtlTranslate: rtl,
            wrongRTL
        } = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
        const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        let snapGrid = [];
        const slidesGrid = [];
        const slidesSizesGrid = [];
        let offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }
        let offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }
        const previousSnapGridLength = swiper.snapGrid.length;
        const previousSlidesGridLength = swiper.slidesGrid.length;
        let spaceBetween = params.spaceBetween;
        let slidePosition = -offsetBefore;
        let prevSlideSize = 0;
        let index = 0;
        if (typeof swiperSize === 'undefined') {
            return;
        }
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
        } else if (typeof spaceBetween === 'string') {
            spaceBetween = parseFloat(spaceBetween);
        }
        swiper.virtualSize = -spaceBetween;

        // reset margins
        slides.forEach(slideEl => {
            if (rtl) {
                slideEl.style.marginLeft = '';
            } else {
                slideEl.style.marginRight = '';
            }
            slideEl.style.marginBottom = '';
            slideEl.style.marginTop = '';
        });

        // reset cssMode offsets
        if (params.centeredSlides && params.cssMode) {
            setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
            setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
        }
        const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
        if (gridEnabled) {
            swiper.grid.initSlides(slidesLength);
        }

        // Calc slides
        let slideSize;
        const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
            return typeof params.breakpoints[key].slidesPerView !== 'undefined';
        }).length > 0;
        for (let i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            let slide;
            if (slides[i]) slide = slides[i];
            if (gridEnabled) {
                swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
            }
            if (slides[i] && elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line

            if (params.slidesPerView === 'auto') {
                if (shouldResetSlideSize) {
                    slides[i].style[getDirectionLabel('width')] = ``;
                }
                const slideStyles = getComputedStyle(slide);
                const currentTransform = slide.style.transform;
                const currentWebKitTransform = slide.style.webkitTransform;
                if (currentTransform) {
                    slide.style.transform = 'none';
                }
                if (currentWebKitTransform) {
                    slide.style.webkitTransform = 'none';
                }
                if (params.roundLengths) {
                    slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);
                } else {
                    // eslint-disable-next-line
                    const width = getDirectionPropertyValue(slideStyles, 'width');
                    const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                    const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                    const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                    const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                    const boxSizing = slideStyles.getPropertyValue('box-sizing');
                    if (boxSizing && boxSizing === 'border-box') {
                        slideSize = width + marginLeft + marginRight;
                    } else {
                        const {
                            clientWidth,
                            offsetWidth
                        } = slide;
                        slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                    }
                }
                if (currentTransform) {
                    slide.style.transform = currentTransform;
                }
                if (currentWebKitTransform) {
                    slide.style.webkitTransform = currentWebKitTransform;
                }
                if (params.roundLengths) slideSize = Math.floor(slideSize);
            } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths) slideSize = Math.floor(slideSize);
                if (slides[i]) {
                    slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
                }
            }
            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }
            slidesSizesGrid.push(slideSize);
            if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }
            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
        }
        if (params.setWrapperSize) {
            wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
        }
        if (gridEnabled) {
            swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
        }

        // Remove last grid elements depending on width
        if (!params.centeredSlides) {
            const newSlidesGrid = [];
            for (let i = 0; i < snapGrid.length; i += 1) {
                let slidesGridItem = snapGrid[i];
                if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(slidesGridItem);
                }
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }
        if (isVirtual && params.loop) {
            const size = slidesSizesGrid[0] + spaceBetween;
            if (params.slidesPerGroup > 1) {
                const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                const groupSize = size * params.slidesPerGroup;
                for (let i = 0; i < groups; i += 1) {
                    snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
            }
            for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                if (params.slidesPerGroup === 1) {
                    snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                }
                slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                swiper.virtualSize += size;
            }
        }
        if (snapGrid.length === 0) snapGrid = [0];
        if (spaceBetween !== 0) {
            const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
            slides.filter((_, slideIndex) => {
                if (!params.cssMode || params.loop) return true;
                if (slideIndex === slides.length - 1) {
                    return false;
                }
                return true;
            }).forEach(slideEl => {
                slideEl.style[key] = `${spaceBetween}px`;
            });
        }
        if (params.centeredSlides && params.centeredSlidesBounds) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach(slideSizeValue => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
            });
            allSlidesSize -= spaceBetween;
            const maxSnap = allSlidesSize - swiperSize;
            snapGrid = snapGrid.map(snap => {
                if (snap <= 0) return -offsetBefore;
                if (snap > maxSnap) return maxSnap + offsetAfter;
                return snap;
            });
        }
        if (params.centerInsufficientSlides) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach(slideSizeValue => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
            });
            allSlidesSize -= spaceBetween;
            if (allSlidesSize < swiperSize) {
                const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                snapGrid.forEach((snap, snapIndex) => {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach((snap, snapIndex) => {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
            }
        }
        Object.assign(swiper, {
            slides,
            snapGrid,
            slidesGrid,
            slidesSizesGrid
        });
        if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
            setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
            setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
            const addToSnapGrid = -swiper.snapGrid[0];
            const addToSlidesGrid = -swiper.slidesGrid[0];
            swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
            swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
        }
        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            swiper.emit('snapGridLengthChange');
        }
        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }
        if (params.watchSlidesProgress) {
            swiper.updateSlidesOffset();
        }
        if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
            const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
            const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
            if (slidesLength <= params.maxBackfaceHiddenSlides) {
                if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
            } else if (hasClassBackfaceClassAdded) {
                swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
    }

    function updateAutoHeight(speed) {
        const swiper = this;
        const activeSlides = [];
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let newHeight = 0;
        let i;
        if (typeof speed === 'number') {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        }
        const getSlideByIndex = index => {
            if (isVirtual) {
                return swiper.slides[swiper.getSlideIndexByData(index)];
            }
            return swiper.slides[index];
        };
        // Find slides currently in view
        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            if (swiper.params.centeredSlides) {
                (swiper.visibleSlides || []).forEach(slide => {
                    activeSlides.push(slide);
                });
            } else {
                for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                    const index = swiper.activeIndex + i;
                    if (index > swiper.slides.length && !isVirtual) break;
                    activeSlides.push(getSlideByIndex(index));
                }
            }
        } else {
            activeSlides.push(getSlideByIndex(swiper.activeIndex));
        }

        // Find new height from highest slide in view
        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        }

        // Update Height
        if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
    }

    function updateSlidesOffset() {
        const swiper = this;
        const slides = swiper.slides;
        // eslint-disable-next-line
        const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
        for (let i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
    }

    function updateSlidesProgress(translate) {
        if (translate === void 0) {
            translate = this && this.translate || 0;
        }
        const swiper = this;
        const params = swiper.params;
        const {
            slides,
            rtlTranslate: rtl,
            snapGrid
        } = swiper;
        if (slides.length === 0) return;
        if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
        let offsetCenter = -translate;
        if (rtl) offsetCenter = translate;

        // Visible Slides
        slides.forEach(slideEl => {
            slideEl.classList.remove(params.slideVisibleClass);
        });
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];
        let spaceBetween = params.spaceBetween;
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
        } else if (typeof spaceBetween === 'string') {
            spaceBetween = parseFloat(spaceBetween);
        }
        for (let i = 0; i < slides.length; i += 1) {
            const slide = slides[i];
            let slideOffset = slide.swiperSlideOffset;
            if (params.cssMode && params.centeredSlides) {
                slideOffset -= slides[0].swiperSlideOffset;
            }
            const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
            const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
            const slideBefore = -(offsetCenter - slideOffset);
            const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
            const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
            if (isVisible) {
                swiper.visibleSlides.push(slide);
                swiper.visibleSlidesIndexes.push(i);
                slides[i].classList.add(params.slideVisibleClass);
            }
            slide.progress = rtl ? -slideProgress : slideProgress;
            slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
        }
    }

    function updateProgress(translate) {
        const swiper = this;
        if (typeof translate === 'undefined') {
            const multiplier = swiper.rtlTranslate ? -1 : 1;
            // eslint-disable-next-line
            translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }
        const params = swiper.params;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        let {
            progress,
            isBeginning,
            isEnd,
            progressLoop
        } = swiper;
        const wasBeginning = isBeginning;
        const wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
            const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
            isBeginning = isBeginningRounded || progress <= 0;
            isEnd = isEndRounded || progress >= 1;
            if (isBeginningRounded) progress = 0;
            if (isEndRounded) progress = 1;
        }
        if (params.loop) {
            const firstSlideIndex = swiper.getSlideIndexByData(0);
            const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
            const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
            const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
            const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
            const translateAbs = Math.abs(translate);
            if (translateAbs >= firstSlideTranslate) {
                progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
            } else {
                progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
            }
            if (progressLoop > 1) progressLoop -= 1;
        }
        Object.assign(swiper, {
            progress,
            progressLoop,
            isBeginning,
            isEnd
        });
        if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }
        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }
        if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
            swiper.emit('fromEdge');
        }
        swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
        const swiper = this;
        const {
            slides,
            params,
            slidesEl,
            activeIndex
        } = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const getFilteredSlide = selector => {
            return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
        };
        slides.forEach(slideEl => {
            slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
        });
        let activeSlide;
        if (isVirtual) {
            if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else {
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
            }
        } else {
            activeSlide = slides[activeIndex];
        }
        if (activeSlide) {
            // Active classes
            activeSlide.classList.add(params.slideActiveClass);

            // Next Slide
            let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !nextSlide) {
                nextSlide = slides[0];
            }
            if (nextSlide) {
                nextSlide.classList.add(params.slideNextClass);
            }
            // Prev Slide
            let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
            if (params.loop && !prevSlide === 0) {
                prevSlide = slides[slides.length - 1];
            }
            if (prevSlide) {
                prevSlide.classList.add(params.slidePrevClass);
            }
        }
        swiper.emitSlidesClasses();
    }

    const processLazyPreloader = (swiper, imageEl) => {
        if (!swiper || swiper.destroyed || !swiper.params) return;
        const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
        const slideEl = imageEl.closest(slideSelector());
        if (slideEl) {
            let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (!lazyEl && swiper.isElement) {
                lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            }
            if (lazyEl) lazyEl.remove();
        }
    };
    const unlazy = (swiper, index) => {
        if (!swiper.slides[index]) return;
        const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
        if (imageEl) imageEl.removeAttribute('loading');
    };
    const preload = swiper => {
        if (!swiper || swiper.destroyed || !swiper.params) return;
        let amount = swiper.params.lazyPreloadPrevNext;
        const len = swiper.slides.length;
        if (!len || !amount || amount < 0) return;
        amount = Math.min(amount, len);
        const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
        const activeIndex = swiper.activeIndex;
        if (swiper.params.grid && swiper.params.grid.rows > 1) {
            const activeColumn = activeIndex;
            const preloadColumns = [activeColumn - amount];
            preloadColumns.push(...Array.from({
                length: amount
            }).map((_, i) => {
                return activeColumn + slidesPerView + i;
            }));
            swiper.slides.forEach((slideEl, i) => {
                if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
            });
            return;
        }
        const slideIndexLastInView = activeIndex + slidesPerView - 1;
        if (swiper.params.rewind || swiper.params.loop) {
            for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            }
        } else {
            for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
                if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
                    unlazy(swiper, i);
                }
            }
        }
    };

    function getActiveIndexByTranslate(swiper) {
        const {
            slidesGrid,
            params
        } = swiper;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        let activeIndex;
        for (let i = 0; i < slidesGrid.length; i += 1) {
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                    activeIndex = i;
                } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                    activeIndex = i + 1;
                }
            } else if (translate >= slidesGrid[i]) {
                activeIndex = i;
            }
        }
        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
        return activeIndex;
    }
    function updateActiveIndex(newActiveIndex) {
        const swiper = this;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        const {
            snapGrid,
            params,
            activeIndex: previousIndex,
            realIndex: previousRealIndex,
            snapIndex: previousSnapIndex
        } = swiper;
        let activeIndex = newActiveIndex;
        let snapIndex;
        const getVirtualRealIndex = aIndex => {
            let realIndex = aIndex - swiper.virtual.slidesBefore;
            if (realIndex < 0) {
                realIndex = swiper.virtual.slides.length + realIndex;
            }
            if (realIndex >= swiper.virtual.slides.length) {
                realIndex -= swiper.virtual.slides.length;
            }
            return realIndex;
        };
        if (typeof activeIndex === 'undefined') {
            activeIndex = getActiveIndexByTranslate(swiper);
        }
        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }
            if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
            }
            return;
        }
        // Get real index
        let realIndex;
        if (swiper.virtual && params.virtual.enabled && params.loop) {
            realIndex = getVirtualRealIndex(activeIndex);
        } else if (swiper.slides[activeIndex]) {
            realIndex = parseInt(swiper.slides[activeIndex].getAttribute('data-swiper-slide-index') || activeIndex, 10);
        } else {
            realIndex = activeIndex;
        }
        Object.assign(swiper, {
            previousSnapIndex,
            snapIndex,
            previousRealIndex,
            realIndex,
            previousIndex,
            activeIndex
        });
        if (swiper.initialized) {
            preload(swiper);
        }
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');
        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }
        if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            swiper.emit('slideChange');
        }
    }

    function updateClickedSlide(e) {
        const swiper = this;
        const params = swiper.params;
        const slide = e.closest(`.${params.slideClass}, swiper-slide`);
        let slideFound = false;
        let slideIndex;
        if (slide) {
            for (let i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) {
                    slideFound = true;
                    slideIndex = i;
                    break;
                }
            }
        }
        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = slideIndex;
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }

    var update = {
        updateSize,
        updateSlides,
        updateAutoHeight,
        updateSlidesOffset,
        updateSlidesProgress,
        updateProgress,
        updateSlidesClasses,
        updateActiveIndex,
        updateClickedSlide
    };

    function getSwiperTranslate(axis) {
        if (axis === void 0) {
            axis = this.isHorizontal() ? 'x' : 'y';
        }
        const swiper = this;
        const {
            params,
            rtlTranslate: rtl,
            translate,
            wrapperEl
        } = swiper;
        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }
        if (params.cssMode) {
            return translate;
        }
        let currentTranslate = getTranslate(wrapperEl, axis);
        currentTranslate += swiper.cssOverflowAdjustment();
        if (rtl) currentTranslate = -currentTranslate;
        return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
        const swiper = this;
        const {
            rtlTranslate: rtl,
            params,
            wrapperEl,
            progress
        } = swiper;
        let x = 0;
        let y = 0;
        const z = 0;
        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }
        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y;
        if (params.cssMode) {
            wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
        } else if (!params.virtualTranslate) {
            if (swiper.isHorizontal()) {
                x -= swiper.cssOverflowAdjustment();
            } else {
                y -= swiper.cssOverflowAdjustment();
            }
            wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        }

        // Check if we need to update progress
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / translatesDiff;
        }
        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }
        swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
        return -this.snapGrid[0];
    }

    function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
        if (translate === void 0) {
            translate = 0;
        }
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (translateBounds === void 0) {
            translateBounds = true;
        }
        const swiper = this;
        const {
            params,
            wrapperEl
        } = swiper;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }
        const minTranslate = swiper.minTranslate();
        const maxTranslate = swiper.maxTranslate();
        let newTranslate;
        if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

        // Update progress
        swiper.updateProgress(newTranslate);
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            if (speed === 0) {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: -newTranslate,
                        side: isH ? 'left' : 'top'
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? 'left' : 'top']: -newTranslate,
                    behavior: 'smooth'
                });
            }
            return true;
        }
        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionEnd');
            }
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionStart');
            }
            if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onTranslateToWrapperTransitionEnd) {
                    swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) {
                            swiper.emit('transitionEnd');
                        }
                    };
                }
                swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            }
        }
        return true;
    }

    var translate = {
        getTranslate: getSwiperTranslate,
        setTranslate,
        minTranslate,
        maxTranslate,
        translateTo
    };

    function setTransition(duration, byController) {
        const swiper = this;
        if (!swiper.params.cssMode) {
            swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
        }
        swiper.emit('setTransition', duration, byController);
    }

    function transitionEmit(_ref) {
        let {
            swiper,
            runCallbacks,
            direction,
            step
        } = _ref;
        const {
            activeIndex,
            previousIndex
        } = swiper;
        let dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
        }
        swiper.emit(`transition${step}`);
        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit(`slideResetTransition${step}`);
                return;
            }
            swiper.emit(`slideChangeTransition${step}`);
            if (dir === 'next') {
                swiper.emit(`slideNextTransition${step}`);
            } else {
                swiper.emit(`slidePrevTransition${step}`);
            }
        }
    }

    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params
        } = swiper;
        if (params.cssMode) return;
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: 'Start'
        });
    }

    function transitionEnd(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params
        } = swiper;
        swiper.animating = false;
        if (params.cssMode) return;
        swiper.setTransition(0);
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: 'End'
        });
    }

    var transition = {
        setTransition,
        transitionStart,
        transitionEnd
    };

    function slideTo(index, speed, runCallbacks, internal, initial) {
        if (index === void 0) {
            index = 0;
        }
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (typeof index === 'string') {
            index = parseInt(index, 10);
        }
        const swiper = this;
        let slideIndex = index;
        if (slideIndex < 0) slideIndex = 0;
        const {
            params,
            snapGrid,
            slidesGrid,
            previousIndex,
            activeIndex,
            rtlTranslate: rtl,
            wrapperEl,
            enabled
        } = swiper;
        if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
            return false;
        }
        const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
        let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        const translate = -snapGrid[snapIndex];
        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
                        slideIndex = i;
                    } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
                        slideIndex = i + 1;
                    }
                } else if (normalizedTranslate >= normalizedGrid) {
                    slideIndex = i;
                }
            }
        }
        // Directions locks
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
                return false;
            }
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) {
                    return false;
                }
            }
        }
        if (slideIndex !== (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }

        // Update progress
        swiper.updateProgress(translate);
        let direction;
        if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

        // Update Index
        if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
            swiper.updateActiveIndex(slideIndex);
            // Update Height
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
            swiper.updateSlidesClasses();
            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }
            if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            const t = rtl ? translate : -translate;
            if (speed === 0) {
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                if (isVirtual) {
                    swiper.wrapperEl.style.scrollSnapType = 'none';
                    swiper._immediateVirtual = true;
                }
                if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                    swiper._cssModeVirtualInitialSet = true;
                    requestAnimationFrame(() => {
                        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                    });
                } else {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                }
                if (isVirtual) {
                    requestAnimationFrame(() => {
                        swiper.wrapperEl.style.scrollSnapType = '';
                        swiper._immediateVirtual = false;
                    });
                }
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: t,
                        side: isH ? 'left' : 'top'
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? 'left' : 'top']: t,
                    behavior: 'smooth'
                });
            }
            return true;
        }
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (speed === 0) {
            swiper.transitionEnd(runCallbacks, direction);
        } else if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onSlideToWrapperTransitionEnd) {
                swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
            }
            swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        }
        return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) {
            index = 0;
        }
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (typeof index === 'string') {
            const indexAsNumber = parseInt(index, 10);
            index = indexAsNumber;
        }
        const swiper = this;
        let newIndex = index;
        if (swiper.params.loop) {
            if (swiper.virtual && swiper.params.virtual.enabled) {
                // eslint-disable-next-line
                newIndex = newIndex + swiper.virtual.slidesBefore;
            } else {
                newIndex = swiper.getSlideIndexByData(newIndex);
            }
        }
        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            enabled,
            params,
            animating
        } = swiper;
        if (!enabled) return swiper;
        let perGroup = params.slidesPerGroup;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
        }
        const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding) return false;
            swiper.loopFix({
                direction: 'next'
            });
            // eslint-disable-next-line
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
        }
        if (params.rewind && swiper.isEnd) {
            return swiper.slideTo(0, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params,
            snapGrid,
            slidesGrid,
            rtlTranslate,
            enabled,
            animating
        } = swiper;
        if (!enabled) return swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding) return false;
            swiper.loopFix({
                direction: 'prev'
            });
            // eslint-disable-next-line
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
        }
        const translate = rtlTranslate ? swiper.translate : -swiper.translate;
        function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val));
            return Math.floor(val);
        }
        const normalizedTranslate = normalize(translate);
        const normalizedSnapGrid = snapGrid.map(val => normalize(val));
        let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
        if (typeof prevSnap === 'undefined' && params.cssMode) {
            let prevSnapIndex;
            snapGrid.forEach((snap, snapIndex) => {
                if (normalizedTranslate >= snap) {
                    // prevSnap = snap;
                    prevSnapIndex = snapIndex;
                }
            });
            if (typeof prevSnapIndex !== 'undefined') {
                prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
        }
        let prevIndex = 0;
        if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
            if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
                prevIndex = Math.max(prevIndex, 0);
            }
        }
        if (params.rewind && swiper.isBeginning) {
            const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (threshold === void 0) {
            threshold = 0.5;
        }
        const swiper = this;
        let index = swiper.activeIndex;
        const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
        const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        if (translate >= swiper.snapGrid[snapIndex]) {
            // The current translate is on or after the current snap index, so the choice
            // is between the current index and the one after it.
            const currentSnap = swiper.snapGrid[snapIndex];
            const nextSnap = swiper.snapGrid[snapIndex + 1];
            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
                index += swiper.params.slidesPerGroup;
            }
        } else {
            // The current translate is before the current snap index, so the choice
            // is between the current index and the one before it.
            const prevSnap = swiper.snapGrid[snapIndex - 1];
            const currentSnap = swiper.snapGrid[snapIndex];
            if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
                index -= swiper.params.slidesPerGroup;
            }
        }
        index = Math.max(index, 0);
        index = Math.min(index, swiper.slidesGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        let slideToIndex = swiper.clickedIndex;
        let realIndex;
        const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
        if (params.loop) {
            if (swiper.animating) return;
            realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
            if (params.centeredSlides) {
                if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    nextTick(() => {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                nextTick(() => {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }

    var slide = {
        slideTo,
        slideToLoop,
        slideNext,
        slidePrev,
        slideReset,
        slideToClosest,
        slideToClickedSlide
    };

    function loopCreate(slideRealIndex) {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
        const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        slides.forEach((el, index) => {
            el.setAttribute('data-swiper-slide-index', index);
        });
        swiper.loopFix({
            slideRealIndex,
            direction: params.centeredSlides ? undefined : 'next'
        });
    }

    function loopFix(_temp) {
        let {
            slideRealIndex,
            slideTo = true,
            direction,
            setTranslate,
            activeSlideIndex,
            byController,
            byMousewheel
        } = _temp === void 0 ? {} : _temp;
        const swiper = this;
        if (!swiper.params.loop) return;
        swiper.emit('beforeLoopFix');
        const {
            slides,
            allowSlidePrev,
            allowSlideNext,
            slidesEl,
            params
        } = swiper;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        if (swiper.virtual && params.virtual.enabled) {
            if (slideTo) {
                if (!params.centeredSlides && swiper.snapIndex === 0) {
                    swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
                } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
                    swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
                } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
                    swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                }
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit('loopFix');
            return;
        }
        const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
        let loopedSlides = params.loopedSlides || slidesPerView;
        if (loopedSlides % params.slidesPerGroup !== 0) {
            loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
        }
        swiper.loopedSlides = loopedSlides;
        const prependSlidesIndexes = [];
        const appendSlidesIndexes = [];
        let activeIndex = swiper.activeIndex;
        if (typeof activeSlideIndex === 'undefined') {
            activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
        } else {
            activeIndex = activeSlideIndex;
        }
        const isNext = direction === 'next' || !direction;
        const isPrev = direction === 'prev' || !direction;
        let slidesPrepended = 0;
        let slidesAppended = 0;
        // prepend last slides before start
        if (activeSlideIndex < loopedSlides) {
            slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
            for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                prependSlidesIndexes.push(slides.length - index - 1);
            }
        } else if (activeSlideIndex /* + slidesPerView */ > swiper.slides.length - loopedSlides * 2) {
            slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
            for (let i = 0; i < slidesAppended; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlidesIndexes.push(index);
            }
        }
        if (isPrev) {
            prependSlidesIndexes.forEach(index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            });
        }
        if (isNext) {
            appendSlidesIndexes.forEach(index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            });
        }
        swiper.recalcSlides();
        if (params.slidesPerView === 'auto') {
            swiper.updateSlides();
        }
        if (params.watchSlidesProgress) {
            swiper.updateSlidesOffset();
        }
        if (slideTo) {
            if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === 'undefined') {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) {
                        swiper.setTranslate(swiper.translate - diff);
                    } else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) {
                            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
                            swiper.touchEventsData.currentTranslate = swiper.translate;
                        }
                    }
                } else {
                    if (setTranslate) {
                        swiper.slideToLoop(slideRealIndex, 0, false, true);
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) {
                if (typeof slideRealIndex === 'undefined') {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) {
                        swiper.setTranslate(swiper.translate - diff);
                    } else {
                        swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                        if (setTranslate) {
                            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
                            swiper.touchEventsData.currentTranslate = swiper.translate;
                        }
                    }
                } else {
                    swiper.slideToLoop(slideRealIndex, 0, false, true);
                }
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.controller && swiper.controller.control && !byController) {
            const loopParams = {
                slideRealIndex,
                direction,
                setTranslate,
                activeSlideIndex,
                byController: true
            };
            if (Array.isArray(swiper.controller.control)) {
                swiper.controller.control.forEach(c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                });
            } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
                swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
        }
        swiper.emit('loopFix');
    }

    function loopDestroy() {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
        swiper.recalcSlides();
        const newSlidesOrder = [];
        swiper.slides.forEach(slideEl => {
            const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
            newSlidesOrder[index] = slideEl;
        });
        swiper.slides.forEach(slideEl => {
            slideEl.removeAttribute('data-swiper-slide-index');
        });
        newSlidesOrder.forEach(slideEl => {
            slidesEl.append(slideEl);
        });
        swiper.recalcSlides();
        swiper.slideTo(swiper.realIndex, 0);
    }

    var loop = {
        loopCreate,
        loopFix,
        loopDestroy
    };

    function setGrabCursor(moving) {
        const swiper = this;
        if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
        if (swiper.isElement) {
            swiper.__preventObserver__ = true;
        }
        el.style.cursor = 'move';
        el.style.cursor = moving ? 'grabbing' : 'grab';
        if (swiper.isElement) {
            requestAnimationFrame(() => {
                swiper.__preventObserver__ = false;
            });
        }
    }

    function unsetGrabCursor() {
        const swiper = this;
        if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
            return;
        }
        if (swiper.isElement) {
            swiper.__preventObserver__ = true;
        }
        swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
        if (swiper.isElement) {
            requestAnimationFrame(() => {
                swiper.__preventObserver__ = false;
            });
        }
    }

    var grabCursor = {
        setGrabCursor,
        unsetGrabCursor
    };

    // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
    function closestElement(selector, base) {
        if (base === void 0) {
            base = this;
        }
        function __closestFrom(el) {
            if (!el || el === getDocument() || el === getWindow()) return null;
            if (el.assignedSlot) el = el.assignedSlot;
            const found = el.closest(selector);
            if (!found && !el.getRootNode) {
                return null;
            }
            return found || __closestFrom(el.getRootNode().host);
        }
        return __closestFrom(base);
    }
    function onTouchStart(event) {
        const swiper = this;
        const document = getDocument();
        const window = getWindow();
        const data = swiper.touchEventsData;
        data.evCache.push(event);
        const {
            params,
            touches,
            enabled
        } = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && event.pointerType === 'mouse') return;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return;
        }
        if (!swiper.animating && params.cssMode && params.loop) {
            swiper.loopFix();
        }
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        let targetEl = e.target;
        if (params.touchEventsTarget === 'wrapper') {
            if (!swiper.wrapperEl.contains(targetEl)) return;
        }
        if ('which' in e && e.which === 3) return;
        if ('button' in e && e.button > 0) return;
        if (data.isTouched && data.isMoved) return;

        // change target el for shadow root component
        const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
        // eslint-disable-next-line
        const eventPath = event.composedPath ? event.composedPath() : event.path;
        if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
            targetEl = eventPath[0];
        }
        const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
        const isTargetShadow = !!(e.target && e.target.shadowRoot);

        // use closestElement for shadow root element to get the actual closest for nested shadow root element
        if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) {
            if (!targetEl.closest(params.swipeHandler)) return;
        }
        touches.currentX = e.pageX;
        touches.currentY = e.pageY;
        const startX = touches.currentX;
        const startY = touches.currentY;

        // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

        const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
        const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
            if (edgeSwipeDetection === 'prevent') {
                event.preventDefault();
            } else {
                return;
            }
        }
        Object.assign(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) data.allowThresholdMove = false;
        let preventDefault = true;
        if (targetEl.matches(data.focusableElements)) {
            preventDefault = false;
            if (targetEl.nodeName === 'SELECT') {
                data.isTouched = false;
            }
        }
        if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
            document.activeElement.blur();
        }
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
            e.preventDefault();
        }
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
            swiper.freeMode.onTouchStart();
        }
        swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
        const document = getDocument();
        const swiper = this;
        const data = swiper.touchEventsData;
        const {
            params,
            touches,
            rtlTranslate: rtl,
            enabled
        } = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && event.pointerType === 'mouse') return;
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }
            return;
        }
        const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
        if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
        const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
        const pageX = targetTouch.pageX;
        const pageY = targetTouch.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            if (!e.target.matches(data.focusableElements)) {
                swiper.allowClick = false;
            }
            if (data.isTouched) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    prevX: swiper.touches.currentX,
                    prevY: swiper.touches.currentY,
                    currentX: pageX,
                    currentY: pageY
                });
                data.touchStartTime = now();
            }
            return;
        }
        if (params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                // Vertical
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
                return;
            }
        }
        if (document.activeElement) {
            if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }
        if (e.targetTouches && e.targetTouches.length > 1) return;
        touches.currentX = pageX;
        touches.currentY = pageY;
        const diffX = touches.currentX - touches.startX;
        const diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
        if (typeof data.isScrolling === 'undefined') {
            let touchAngle;
            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
                data.isScrolling = false;
            } else {
                // eslint-disable-next-line
                if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
        }
        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }
        if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) {
            return;
        }
        swiper.allowClick = false;
        if (!params.cssMode && e.cancelable) {
            e.preventDefault();
        }
        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }
        let diff = swiper.isHorizontal() ? diffX : diffY;
        let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
        if (params.oneWayMovement) {
            diff = Math.abs(diff) * (rtl ? 1 : -1);
            touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
        }
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) {
            diff = -diff;
            touchesDiff = -touchesDiff;
        }
        const prevTouchesDirection = swiper.touchesDirection;
        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
        const isLoop = swiper.params.loop && !params.cssMode;
        if (!data.isMoved) {
            if (isLoop) {
                swiper.loopFix({
                    direction: swiper.swipeDirection
                });
            }
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                const evt = new window.CustomEvent('transitionend', {
                    bubbles: true,
                    cancelable: true
                });
                swiper.wrapperEl.dispatchEvent(evt);
            }
            data.allowMomentumBounce = false;
            // Grab Cursor
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }
            swiper.emit('sliderFirstMove', e);
        }
        let loopFixed;
        if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
            // need another loop fix
            swiper.loopFix({
                direction: swiper.swipeDirection,
                setTranslate: true
            });
            loopFixed = true;
        }
        swiper.emit('sliderMove', e);
        data.isMoved = true;
        data.currentTranslate = diff + data.startTranslate;
        let disableParentSwiper = true;
        let resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }
        if (diff > 0) {
            if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
                swiper.loopFix({
                    direction: 'prev',
                    setTranslate: true,
                    activeSlideIndex: 0
                });
            }
            if (data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) {
                    data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            }
        } else if (diff < 0) {
            if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
                swiper.loopFix({
                    direction: 'next',
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
            }
            if (data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) {
                    data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
        }
        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        }

        // Directions locks
        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
            data.currentTranslate = data.startTranslate;
        }

        // Threshold
        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }
        if (!params.followFinger || params.cssMode) return;

        // Update active index in free mode
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
            swiper.freeMode.onTouchMove();
        }
        // Update progress
        swiper.updateProgress(data.currentTranslate);
        // Update translate
        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
        const swiper = this;
        const data = swiper.touchEventsData;
        const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === event.pointerId);
        if (pointerIndex >= 0) {
            data.evCache.splice(pointerIndex, 1);
        }
        if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(event.type)) {
            const proceed = ['pointercancel', 'contextmenu'].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
            if (!proceed) {
                return;
            }
        }
        const {
            params,
            touches,
            rtlTranslate: rtl,
            slidesGrid,
            enabled
        } = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && event.pointerType === 'mouse') return;
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        // Return Grab Cursor
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        }

        // Time diff
        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime;

        // Tap, doubleTap, Click
        if (swiper.allowClick) {
            const pathTree = e.path || e.composedPath && e.composedPath();
            swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
            swiper.emit('tap click', e);
            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
                swiper.emit('doubleTap doubleClick', e);
            }
        }
        data.lastClickTime = now();
        nextTick(() => {
            if (!swiper.destroyed) swiper.allowClick = true;
        });
        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        let currentPos;
        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }
        if (params.cssMode) {
            return;
        }
        if (params.freeMode && params.freeMode.enabled) {
            swiper.freeMode.onTouchEnd({
                currentPos
            });
            return;
        }

        // Find current slide
        let stopIndex = 0;
        let groupSize = swiper.slidesSizesGrid[0];
        for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (typeof slidesGrid[i + increment] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + increment] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }
        let rewindFirstIndex = null;
        let rewindLastIndex = null;
        if (params.rewind) {
            if (swiper.isBeginning) {
                rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            } else if (swiper.isEnd) {
                rewindFirstIndex = 0;
            }
        }
        // Find current slide size
        const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
            }
            if (swiper.swipeDirection === 'prev') {
                if (ratio > 1 - params.longSwipesRatio) {
                    swiper.slideTo(stopIndex + increment);
                } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
                    swiper.slideTo(rewindLastIndex);
                } else {
                    swiper.slideTo(stopIndex);
                }
            }
        } else {
            // Short swipes
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
            if (!isNavButtonTarget) {
                if (swiper.swipeDirection === 'next') {
                    swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                }
                if (swiper.swipeDirection === 'prev') {
                    swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                }
            } else if (e.target === swiper.navigation.nextEl) {
                swiper.slideTo(stopIndex + increment);
            } else {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize() {
        const swiper = this;
        const {
            params,
            el
        } = swiper;
        if (el && el.offsetWidth === 0) return;

        // Breakpoints
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }

        // Save locks
        const {
            allowSlideNext,
            allowSlidePrev,
            snapGrid
        } = swiper;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

        // Disable locks on resize
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();
        const isVirtualLoop = isVirtual && params.loop;
        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
            swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
            if (swiper.params.loop && !isVirtual) {
                swiper.slideToLoop(swiper.realIndex, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
        }
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            clearTimeout(swiper.autoplay.resizeTimeout);
            swiper.autoplay.resizeTimeout = setTimeout(() => {
                if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                    swiper.autoplay.resume();
                }
            }, 500);
        }
        // Return locks after resize
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
    }

    function onClick(e) {
        const swiper = this;
        if (!swiper.enabled) return;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault();
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }

    function onScroll() {
        const swiper = this;
        const {
            wrapperEl,
            rtlTranslate,
            enabled
        } = swiper;
        if (!enabled) return;
        swiper.previousTranslate = swiper.translate;
        if (swiper.isHorizontal()) {
            swiper.translate = -wrapperEl.scrollLeft;
        } else {
            swiper.translate = -wrapperEl.scrollTop;
        }
        // eslint-disable-next-line
        if (swiper.translate === 0) swiper.translate = 0;
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        }
        if (newProgress !== swiper.progress) {
            swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
        }
        swiper.emit('setTranslate', swiper.translate, false);
    }

    function onLoad(e) {
        const swiper = this;
        processLazyPreloader(swiper, e.target);
        if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
            return;
        }
        swiper.update();
    }

    let dummyEventAttached = false;
    function dummyEventListener() {}
    const events = (swiper, method) => {
        const document = getDocument();
        const {
            params,
            el,
            wrapperEl,
            device
        } = swiper;
        const capture = !!params.nested;
        const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        const swiperMethod = method;

        // Touch Events
        el[domMethod]('pointerdown', swiper.onTouchStart, {
            passive: false
        });
        document[domMethod]('pointermove', swiper.onTouchMove, {
            passive: false,
            capture
        });
        document[domMethod]('pointerup', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('pointercancel', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('pointerout', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('pointerleave', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('contextmenu', swiper.onTouchEnd, {
            passive: true
        });

        // Prevent Links Clicks
        if (params.preventClicks || params.preventClicksPropagation) {
            el[domMethod]('click', swiper.onClick, true);
        }
        if (params.cssMode) {
            wrapperEl[domMethod]('scroll', swiper.onScroll);
        }

        // Resize handler
        if (params.updateOnWindowResize) {
            swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
        } else {
            swiper[swiperMethod]('observerUpdate', onResize, true);
        }

        // Images loader
        el[domMethod]('load', swiper.onLoad, {
            capture: true
        });
    };
    function attachEvents() {
        const swiper = this;
        const document = getDocument();
        const {
            params
        } = swiper;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);
        if (params.cssMode) {
            swiper.onScroll = onScroll.bind(swiper);
        }
        swiper.onClick = onClick.bind(swiper);
        swiper.onLoad = onLoad.bind(swiper);
        if (!dummyEventAttached) {
            document.addEventListener('touchstart', dummyEventListener);
            dummyEventAttached = true;
        }
        events(swiper, 'on');
    }
    function detachEvents() {
        const swiper = this;
        events(swiper, 'off');
    }
    var events$1 = {
        attachEvents,
        detachEvents
    };

    const isGridEnabled = (swiper, params) => {
        return swiper.grid && params.grid && params.grid.rows > 1;
    };
    function setBreakpoint() {
        const swiper = this;
        const {
            realIndex,
            initialized,
            params,
            el
        } = swiper;
        const breakpoints = params.breakpoints;
        if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

        // Get breakpoint for window width and update parameters
        const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
        if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
        const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
        const breakpointParams = breakpointOnlyParams || swiper.originalParams;
        const wasMultiRow = isGridEnabled(swiper, params);
        const isMultiRow = isGridEnabled(swiper, breakpointParams);
        const wasEnabled = params.enabled;
        if (wasMultiRow && !isMultiRow) {
            el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        } else if (!wasMultiRow && isMultiRow) {
            el.classList.add(`${params.containerModifierClass}grid`);
            if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
                el.classList.add(`${params.containerModifierClass}grid-column`);
            }
            swiper.emitContainerClasses();
        }

        // Toggle navigation, pagination, scrollbar
        ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
            if (typeof breakpointParams[prop] === 'undefined') return;
            const wasModuleEnabled = params[prop] && params[prop].enabled;
            const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
            if (wasModuleEnabled && !isModuleEnabled) {
                swiper[prop].disable();
            }
            if (!wasModuleEnabled && isModuleEnabled) {
                swiper[prop].enable();
            }
        });
        const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
        if (directionChanged && initialized) {
            swiper.changeDirection();
        }
        extend(swiper.params, breakpointParams);
        const isEnabled = swiper.params.enabled;
        Object.assign(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev
        });
        if (wasEnabled && !isEnabled) {
            swiper.disable();
        } else if (!wasEnabled && isEnabled) {
            swiper.enable();
        }
        swiper.currentBreakpoint = breakpoint;
        swiper.emit('_beforeBreakpoint', breakpointParams);
        if (needsReLoop && initialized) {
            swiper.loopDestroy();
            swiper.loopCreate(realIndex);
            swiper.updateSlides();
        }
        swiper.emit('breakpoint', breakpointParams);
    }

    function getBreakpoint(breakpoints, base, containerEl) {
        if (base === void 0) {
            base = 'window';
        }
        if (!breakpoints || base === 'container' && !containerEl) return undefined;
        let breakpoint = false;
        const window = getWindow();
        const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
        const points = Object.keys(breakpoints).map(point => {
            if (typeof point === 'string' && point.indexOf('@') === 0) {
                const minRatio = parseFloat(point.substr(1));
                const value = currentHeight * minRatio;
                return {
                    value,
                    point
                };
            }
            return {
                value: point,
                point
            };
        });
        points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
        for (let i = 0; i < points.length; i += 1) {
            const {
                point,
                value
            } = points[i];
            if (base === 'window') {
                if (window.matchMedia(`(min-width: ${value}px)`).matches) {
                    breakpoint = point;
                }
            } else if (value <= containerEl.clientWidth) {
                breakpoint = point;
            }
        }
        return breakpoint || 'max';
    }

    var breakpoints = {
        setBreakpoint,
        getBreakpoint
    };

    function prepareClasses(entries, prefix) {
        const resultClasses = [];
        entries.forEach(item => {
            if (typeof item === 'object') {
                Object.keys(item).forEach(classNames => {
                    if (item[classNames]) {
                        resultClasses.push(prefix + classNames);
                    }
                });
            } else if (typeof item === 'string') {
                resultClasses.push(prefix + item);
            }
        });
        return resultClasses;
    }
    function addClasses() {
        const swiper = this;
        const {
            classNames,
            params,
            rtl,
            el,
            device
        } = swiper;
        // prettier-ignore
        const suffixes = prepareClasses(['initialized', params.direction, {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
        }, {
            'autoheight': params.autoHeight
        }, {
            'rtl': rtl
        }, {
            'grid': params.grid && params.grid.rows > 1
        }, {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
        }, {
            'android': device.android
        }, {
            'ios': device.ios
        }, {
            'css-mode': params.cssMode
        }, {
            'centered': params.cssMode && params.centeredSlides
        }, {
            'watch-progress': params.watchSlidesProgress
        }], params.containerModifierClass);
        classNames.push(...suffixes);
        el.classList.add(...classNames);
        swiper.emitContainerClasses();
    }

    function removeClasses() {
        const swiper = this;
        const {
            el,
            classNames
        } = swiper;
        el.classList.remove(...classNames);
        swiper.emitContainerClasses();
    }

    var classes = {
        addClasses,
        removeClasses
    };

    function checkOverflow() {
        const swiper = this;
        const {
            isLocked: wasLocked,
            params
        } = swiper;
        const {
            slidesOffsetBefore
        } = params;
        if (slidesOffsetBefore) {
            const lastSlideIndex = swiper.slides.length - 1;
            const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
            swiper.isLocked = swiper.size > lastSlideRightEdge;
        } else {
            swiper.isLocked = swiper.snapGrid.length === 1;
        }
        if (params.allowSlideNext === true) {
            swiper.allowSlideNext = !swiper.isLocked;
        }
        if (params.allowSlidePrev === true) {
            swiper.allowSlidePrev = !swiper.isLocked;
        }
        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
        }
        if (wasLocked !== swiper.isLocked) {
            swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
        }
    }
    var checkOverflow$1 = {
        checkOverflow
    };

    var defaults = {
        init: true,
        direction: 'horizontal',
        oneWayMovement: false,
        touchEventsTarget: 'wrapper',
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        resizeObserver: true,
        nested: false,
        createElements: false,
        enabled: true,
        focusableElements: 'input, select, option, textarea, button, video, label',
        // Overrides
        width: null,
        height: null,
        //
        preventInteractionOnTransition: false,
        // ssr
        userAgent: null,
        url: null,
        // To support iOS's swipe-to-go-back gesture (when being used in-app).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        // Autoheight
        autoHeight: false,
        // Set wrapper width
        setWrapperSize: false,
        // Virtual Translate
        virtualTranslate: false,
        // Effects
        effect: 'slide',
        // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

        // Breakpoints
        breakpoints: undefined,
        breakpointsBase: 'window',
        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: false,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        // in px
        slidesOffsetAfter: 0,
        // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        // Disable swiper and hide navigation when container not overflow
        watchOverflow: true,
        // Round length
        roundLengths: false,
        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 5,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        // Unique Navigation Elements
        uniqueNavElements: true,
        // Resistance
        resistance: true,
        resistanceRatio: 0.85,
        // Progress
        watchSlidesProgress: false,
        // Cursor
        grabCursor: false,
        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        // loop
        loop: false,
        loopedSlides: null,
        loopPreventsSliding: true,
        // rewind
        rewind: false,
        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        // Passive Listeners
        passiveListeners: true,
        maxBackfaceHiddenSlides: 10,
        // NS
        containerModifierClass: 'swiper-',
        // NEW
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
        wrapperClass: 'swiper-wrapper',
        lazyPreloaderClass: 'swiper-lazy-preloader',
        lazyPreloadPrevNext: 0,
        // Callbacks
        runCallbacksOnInit: true,
        // Internals
        _emitClasses: false
    };

    function moduleExtendParams(params, allModulesParams) {
        return function extendParams(obj) {
            if (obj === void 0) {
                obj = {};
            }
            const moduleParamName = Object.keys(obj)[0];
            const moduleParams = obj[moduleParamName];
            if (typeof moduleParams !== 'object' || moduleParams === null) {
                extend(allModulesParams, obj);
                return;
            }
            if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
                params[moduleParamName] = {
                    auto: true
                };
            }
            if (!(moduleParamName in params && 'enabled' in moduleParams)) {
                extend(allModulesParams, obj);
                return;
            }
            if (params[moduleParamName] === true) {
                params[moduleParamName] = {
                    enabled: true
                };
            }
            if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                params[moduleParamName].enabled = true;
            }
            if (!params[moduleParamName]) params[moduleParamName] = {
                enabled: false
            };
            extend(allModulesParams, obj);
        };
    }

    /* eslint no-param-reassign: "off" */
    const prototypes = {
        eventsEmitter,
        update,
        translate,
        transition,
        slide,
        loop,
        grabCursor,
        events: events$1,
        breakpoints,
        checkOverflow: checkOverflow$1,
        classes
    };
    const extendedDefaults = {};
    class Swiper {
        constructor() {
            let el;
            let params;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
                params = args[0];
            } else {
                [el, params] = args;
            }
            if (!params) params = {};
            params = extend({}, params);
            if (el && !params.el) params.el = el;
            const document = getDocument();
            if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
                const swipers = [];
                document.querySelectorAll(params.el).forEach(containerEl => {
                    const newParams = extend({}, params, {
                        el: containerEl
                    });
                    swipers.push(new Swiper(newParams));
                });
                // eslint-disable-next-line no-constructor-return
                return swipers;
            }

            // Swiper Instance
            const swiper = this;
            swiper.__swiper__ = true;
            swiper.support = getSupport();
            swiper.device = getDevice({
                userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];
            swiper.modules = [...swiper.__modules__];
            if (params.modules && Array.isArray(params.modules)) {
                swiper.modules.push(...params.modules);
            }
            const allModulesParams = {};
            swiper.modules.forEach(mod => {
                mod({
                    params,
                    swiper,
                    extendParams: moduleExtendParams(params, allModulesParams),
                    on: swiper.on.bind(swiper),
                    once: swiper.once.bind(swiper),
                    off: swiper.off.bind(swiper),
                    emit: swiper.emit.bind(swiper)
                });
            });

            // Extend defaults with modules params
            const swiperParams = extend({}, defaults, allModulesParams);

            // Extend defaults with passed params
            swiper.params = extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = extend({}, swiper.params);
            swiper.passedParams = extend({}, params);

            // add event listeners
            if (swiper.params && swiper.params.on) {
                Object.keys(swiper.params.on).forEach(eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                });
            }
            if (swiper.params && swiper.params.onAny) {
                swiper.onAny(swiper.params.onAny);
            }

            // Extend Swiper
            Object.assign(swiper, {
                enabled: swiper.params.enabled,
                el,
                // Classes
                classNames: [],
                // Slides
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                // isDirection
                isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                // Indexes
                activeIndex: 0,
                realIndex: 0,
                //
                isBeginning: true,
                isEnd: false,
                // Props
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                cssOverflowAdjustment() {
                    // Returns 0 unless `translate` is > 2**23
                    // Should be subtracted from css values to prevent overflow
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                // Touch Events
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    // Form elements to match
                    focusableElements: swiper.params.focusableElements,
                    // Last click time
                    lastClickTime: 0,
                    clickTimeout: undefined,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: undefined,
                    startMoving: undefined,
                    evCache: []
                },
                // Clicks
                allowClick: true,
                // Touches
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                // Images
                imagesToLoad: [],
                imagesLoaded: 0
            });
            swiper.emit('_swiper');

            // Init
            if (swiper.params.init) {
                swiper.init();
            }

            // Return app instance
            // eslint-disable-next-line no-constructor-return
            return swiper;
        }
        getSlideIndex(slideEl) {
            const {
                slidesEl,
                params
            } = this;
            const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            const firstSlideIndex = elementIndex(slides[0]);
            return elementIndex(slideEl) - firstSlideIndex;
        }
        getSlideIndexByData(index) {
            return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
        }
        recalcSlides() {
            const swiper = this;
            const {
                slidesEl,
                params
            } = swiper;
            swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        }
        enable() {
            const swiper = this;
            if (swiper.enabled) return;
            swiper.enabled = true;
            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }
            swiper.emit('enable');
        }
        disable() {
            const swiper = this;
            if (!swiper.enabled) return;
            swiper.enabled = false;
            if (swiper.params.grabCursor) {
                swiper.unsetGrabCursor();
            }
            swiper.emit('disable');
        }
        setProgress(progress, speed) {
            const swiper = this;
            progress = Math.min(Math.max(progress, 0), 1);
            const min = swiper.minTranslate();
            const max = swiper.maxTranslate();
            const current = (max - min) * progress + min;
            swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        emitContainerClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const cls = swiper.el.className.split(' ').filter(className => {
                return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
            });
            swiper.emit('_containerClasses', cls.join(' '));
        }
        getSlideClasses(slideEl) {
            const swiper = this;
            if (swiper.destroyed) return '';
            return slideEl.className.split(' ').filter(className => {
                return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
            }).join(' ');
        }
        emitSlidesClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const updates = [];
            swiper.slides.forEach(slideEl => {
                const classNames = swiper.getSlideClasses(slideEl);
                updates.push({
                    slideEl,
                    classNames
                });
                swiper.emit('_slideClass', slideEl, classNames);
            });
            swiper.emit('_slideClasses', updates);
        }
        slidesPerViewDynamic(view, exact) {
            if (view === void 0) {
                view = 'current';
            }
            if (exact === void 0) {
                exact = false;
            }
            const swiper = this;
            const {
                params,
                slides,
                slidesGrid,
                slidesSizesGrid,
                size: swiperSize,
                activeIndex
            } = swiper;
            let spv = 1;
            if (params.centeredSlides) {
                let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                let breakLoop;
                for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }
                for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }
            } else {
                // eslint-disable-next-line
                if (view === 'current') {
                    for (let i = activeIndex + 1; i < slides.length; i += 1) {
                        const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                        if (slideInView) {
                            spv += 1;
                        }
                    }
                } else {
                    // previous
                    for (let i = activeIndex - 1; i >= 0; i -= 1) {
                        const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                        if (slideInView) {
                            spv += 1;
                        }
                    }
                }
            }
            return spv;
        }
        update() {
            const swiper = this;
            if (!swiper || swiper.destroyed) return;
            const {
                snapGrid,
                params
            } = swiper;
            // Breakpoints
            if (params.breakpoints) {
                swiper.setBreakpoint();
            }
            [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
                if (imageEl.complete) {
                    processLazyPreloader(swiper, imageEl);
                }
            });
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            function setTranslate() {
                const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            let translated;
            if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                setTranslate();
                if (params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                    const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                    translated = swiper.slideTo(slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }
                if (!translated) {
                    setTranslate();
                }
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }
            swiper.emit('update');
        }
        changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) {
                needUpdate = true;
            }
            const swiper = this;
            const currentDirection = swiper.params.direction;
            if (!newDirection) {
                // eslint-disable-next-line
                newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
            }
            if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
                return swiper;
            }
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
            swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.forEach(slideEl => {
                if (newDirection === 'vertical') {
                    slideEl.style.width = '';
                } else {
                    slideEl.style.height = '';
                }
            });
            swiper.emit('changeDirection');
            if (needUpdate) swiper.update();
            return swiper;
        }
        changeLanguageDirection(direction) {
            const swiper = this;
            if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
            swiper.rtl = direction === 'rtl';
            swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
            if (swiper.rtl) {
                swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = 'rtl';
            } else {
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = 'ltr';
            }
            swiper.update();
        }
        mount(element) {
            const swiper = this;
            if (swiper.mounted) return true;

            // Find el
            let el = element || swiper.params.el;
            if (typeof el === 'string') {
                el = document.querySelector(el);
            }
            if (!el) {
                return false;
            }
            el.swiper = swiper;
            if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === 'SWIPER-CONTAINER') {
                swiper.isElement = true;
            }
            const getWrapperSelector = () => {
                return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
            };
            const getWrapper = () => {
                if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                    const res = el.shadowRoot.querySelector(getWrapperSelector());
                    // Children needs to return slot items
                    return res;
                }
                return elementChildren(el, getWrapperSelector())[0];
            };
            // Find Wrapper
            let wrapperEl = getWrapper();
            if (!wrapperEl && swiper.params.createElements) {
                wrapperEl = createElement('div', swiper.params.wrapperClass);
                el.append(wrapperEl);
                elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
                    wrapperEl.append(slideEl);
                });
            }
            Object.assign(swiper, {
                el,
                wrapperEl,
                slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                hostEl: swiper.isElement ? el.parentNode.host : el,
                mounted: true,
                // RTL
                rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
                wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
            });
            return true;
        }
        init(el) {
            const swiper = this;
            if (swiper.initialized) return swiper;
            const mounted = swiper.mount(el);
            if (mounted === false) return swiper;
            swiper.emit('beforeInit');

            // Set breakpoint
            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            }

            // Add Classes
            swiper.addClasses();

            // Update size
            swiper.updateSize();

            // Update slides
            swiper.updateSlides();
            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            }

            // Set Grab Cursor
            if (swiper.params.grabCursor && swiper.enabled) {
                swiper.setGrabCursor();
            }

            // Slide To Initial Slide
            if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
            }

            // Create loop
            if (swiper.params.loop) {
                swiper.loopCreate();
            }

            // Attach events
            swiper.attachEvents();
            const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
            if (swiper.isElement) {
                lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
            }
            lazyElements.forEach(imageEl => {
                if (imageEl.complete) {
                    processLazyPreloader(swiper, imageEl);
                } else {
                    imageEl.addEventListener('load', e => {
                        processLazyPreloader(swiper, e.target);
                    });
                }
            });
            preload(swiper);

            // Init Flag
            swiper.initialized = true;
            preload(swiper);

            // Emit
            swiper.emit('init');
            swiper.emit('afterInit');
            return swiper;
        }
        destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) {
                deleteInstance = true;
            }
            if (cleanStyles === void 0) {
                cleanStyles = true;
            }
            const swiper = this;
            const {
                params,
                el,
                wrapperEl,
                slides
            } = swiper;
            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                return null;
            }
            swiper.emit('beforeDestroy');

            // Init Flag
            swiper.initialized = false;

            // Detach events
            swiper.detachEvents();

            // Destroy loop
            if (params.loop) {
                swiper.loopDestroy();
            }

            // Cleanup styles
            if (cleanStyles) {
                swiper.removeClasses();
                el.removeAttribute('style');
                wrapperEl.removeAttribute('style');
                if (slides && slides.length) {
                    slides.forEach(slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute('style');
                        slideEl.removeAttribute('data-swiper-slide-index');
                    });
                }
            }
            swiper.emit('destroy');

            // Detach emitter events
            Object.keys(swiper.eventsListeners).forEach(eventName => {
                swiper.off(eventName);
            });
            if (deleteInstance !== false) {
                swiper.el.swiper = null;
                deleteProps(swiper);
            }
            swiper.destroyed = true;
            return null;
        }
        static extendDefaults(newDefaults) {
            extend(extendedDefaults, newDefaults);
        }
        static get extendedDefaults() {
            return extendedDefaults;
        }
        static get defaults() {
            return defaults;
        }
        static installModule(mod) {
            if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
            const modules = Swiper.prototype.__modules__;
            if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
                modules.push(mod);
            }
        }
        static use(module) {
            if (Array.isArray(module)) {
                module.forEach(m => Swiper.installModule(m));
                return Swiper;
            }
            Swiper.installModule(module);
            return Swiper;
        }
    }
    Object.keys(prototypes).forEach(prototypeGroup => {
        Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        });
    });
    Swiper.use([Resize, Observer]);

    function Virtual(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        extendParams({
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: true,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        let cssModeTimeout;
        const document = getDocument();
        swiper.virtual = {
            cache: {},
            from: undefined,
            to: undefined,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        const tempDOM = document.createElement('div');
        function renderSlide(slide, index) {
            const params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }
            // eslint-disable-next-line
            let slideEl;
            if (params.renderSlide) {
                slideEl = params.renderSlide.call(swiper, slide, index);
                if (typeof slideEl === 'string') {
                    tempDOM.innerHTML = slideEl;
                    slideEl = tempDOM.children[0];
                }
            } else if (swiper.isElement) {
                slideEl = createElement('swiper-slide');
            } else {
                slideEl = createElement('div', swiper.params.slideClass);
            }
            slideEl.setAttribute('data-swiper-slide-index', index);
            if (!params.renderSlide) {
                slideEl.innerHTML = slide;
            }
            if (params.cache) swiper.virtual.cache[index] = slideEl;
            return slideEl;
        }
        function update(force) {
            const {
                slidesPerView,
                slidesPerGroup,
                centeredSlides,
                loop: isLoop
            } = swiper.params;
            const {
                addSlidesBefore,
                addSlidesAfter
            } = swiper.params.virtual;
            const {
                from: previousFrom,
                to: previousTo,
                slides,
                slidesGrid: previousSlidesGrid,
                offset: previousOffset
            } = swiper.virtual;
            if (!swiper.params.cssMode) {
                swiper.updateActiveIndex();
            }
            const activeIndex = swiper.activeIndex || 0;
            let offsetProp;
            if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
            let slidesAfter;
            let slidesBefore;
            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
            }
            let from = activeIndex - slidesBefore;
            let to = activeIndex + slidesAfter;
            if (!isLoop) {
                from = Math.max(from, 0);
                to = Math.min(to, slides.length - 1);
            }
            let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            if (isLoop && activeIndex >= slidesBefore) {
                from -= slidesBefore;
                if (!centeredSlides) offset += swiper.slidesGrid[0];
            } else if (isLoop && activeIndex < slidesBefore) {
                from = -slidesBefore;
                if (centeredSlides) offset += swiper.slidesGrid[0];
            }
            Object.assign(swiper.virtual, {
                from,
                to,
                offset,
                slidesGrid: swiper.slidesGrid,
                slidesBefore,
                slidesAfter
            });
            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                emit('virtualUpdate');
            }
            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.forEach(slideEl => {
                        slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
                    });
                }
                swiper.updateProgress();
                emit('virtualUpdate');
                return;
            }
            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset,
                    from,
                    to,
                    slides: function getSlides() {
                        const slidesToRender = [];
                        for (let i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }
                        return slidesToRender;
                    }()
                });
                if (swiper.params.virtual.renderExternalUpdate) {
                    onRendered();
                } else {
                    emit('virtualUpdate');
                }
                return;
            }
            const prependIndexes = [];
            const appendIndexes = [];
            const getSlideIndex = index => {
                let slideIndex = index;
                if (index < 0) {
                    slideIndex = slides.length + index;
                } else if (slideIndex >= slides.length) {
                    // eslint-disable-next-line
                    slideIndex = slideIndex - slides.length;
                }
                return slideIndex;
            };
            if (force) {
                swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}, swiper-slide`).forEach(slideEl => {
                    slideEl.remove();
                });
            } else {
                for (let i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        const slideIndex = getSlideIndex(i);
                        swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`).forEach(slideEl => {
                            slideEl.remove();
                        });
                    }
                }
            }
            const loopFrom = isLoop ? -slides.length : 0;
            const loopTo = isLoop ? slides.length * 2 : slides.length;
            for (let i = loopFrom; i < loopTo; i += 1) {
                if (i >= from && i <= to) {
                    const slideIndex = getSlideIndex(i);
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(slideIndex);
                    } else {
                        if (i > previousTo) appendIndexes.push(slideIndex);
                        if (i < previousFrom) prependIndexes.push(slideIndex);
                    }
                }
            }
            appendIndexes.forEach(index => {
                swiper.slidesEl.append(renderSlide(slides[index], index));
            });
            if (isLoop) {
                for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
                    const index = prependIndexes[i];
                    swiper.slidesEl.prepend(renderSlide(slides[index], index));
                }
            } else {
                prependIndexes.sort((a, b) => b - a);
                prependIndexes.forEach(index => {
                    swiper.slidesEl.prepend(renderSlide(slides[index], index));
                });
            }
            elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
                slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
            });
            onRendered();
        }
        function appendSlide(slides) {
            if (typeof slides === 'object' && 'length' in slides) {
                for (let i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.push(slides[i]);
                }
            } else {
                swiper.virtual.slides.push(slides);
            }
            update(true);
        }
        function prependSlide(slides) {
            const activeIndex = swiper.activeIndex;
            let newActiveIndex = activeIndex + 1;
            let numberOfNewSlides = 1;
            if (Array.isArray(slides)) {
                for (let i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                }
                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
            } else {
                swiper.virtual.slides.unshift(slides);
            }
            if (swiper.params.virtual.cache) {
                const cache = swiper.virtual.cache;
                const newCache = {};
                Object.keys(cache).forEach(cachedIndex => {
                    const cachedEl = cache[cachedIndex];
                    const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
                    if (cachedElIndex) {
                        cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                    }
                    newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
                });
                swiper.virtual.cache = newCache;
            }
            update(true);
            swiper.slideTo(newActiveIndex, 0);
        }
        function removeSlide(slidesIndexes) {
            if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
            let activeIndex = swiper.activeIndex;
            if (Array.isArray(slidesIndexes)) {
                for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                    swiper.virtual.slides.splice(slidesIndexes[i], 1);
                    if (swiper.params.virtual.cache) {
                        delete swiper.virtual.cache[slidesIndexes[i]];
                    }
                    if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                    activeIndex = Math.max(activeIndex, 0);
                }
            } else {
                swiper.virtual.slides.splice(slidesIndexes, 1);
                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes];
                }
                if (slidesIndexes < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }
            update(true);
            swiper.slideTo(activeIndex, 0);
        }
        function removeAllSlides() {
            swiper.virtual.slides = [];
            if (swiper.params.virtual.cache) {
                swiper.virtual.cache = {};
            }
            update(true);
            swiper.slideTo(0, 0);
        }
        on('beforeInit', () => {
            if (!swiper.params.virtual.enabled) return;
            let domSlidesAssigned;
            if (typeof swiper.passedParams.virtual.slides === 'undefined') {
                const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
                if (slides && slides.length) {
                    swiper.virtual.slides = [...slides];
                    domSlidesAssigned = true;
                    slides.forEach((slideEl, slideIndex) => {
                        slideEl.setAttribute('data-swiper-slide-index', slideIndex);
                        swiper.virtual.cache[slideIndex] = slideEl;
                        slideEl.remove();
                    });
                }
            }
            if (!domSlidesAssigned) {
                swiper.virtual.slides = swiper.params.virtual.slides;
            }
            swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
            if (!swiper.params.initialSlide) {
                update();
            }
        });
        on('setTranslate', () => {
            if (!swiper.params.virtual.enabled) return;
            if (swiper.params.cssMode && !swiper._immediateVirtual) {
                clearTimeout(cssModeTimeout);
                cssModeTimeout = setTimeout(() => {
                    update();
                }, 100);
            } else {
                update();
            }
        });
        on('init update resize', () => {
            if (!swiper.params.virtual.enabled) return;
            if (swiper.params.cssMode) {
                setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
            }
        });
        Object.assign(swiper.virtual, {
            appendSlide,
            prependSlide,
            removeSlide,
            removeAllSlides,
            update
        });
    }

    /* eslint-disable consistent-return */
    function Keyboard(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const document = getDocument();
        const window = getWindow();
        swiper.keyboard = {
            enabled: false
        };
        extendParams({
            keyboard: {
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true
            }
        });
        function handle(event) {
            if (!swiper.enabled) return;
            const {
                rtlTranslate: rtl
            } = swiper;
            let e = event;
            if (e.originalEvent) e = e.originalEvent; // jquery fix
            const kc = e.keyCode || e.charCode;
            const pageUpDown = swiper.params.keyboard.pageUpDown;
            const isPageUp = pageUpDown && kc === 33;
            const isPageDown = pageUpDown && kc === 34;
            const isArrowLeft = kc === 37;
            const isArrowRight = kc === 39;
            const isArrowUp = kc === 38;
            const isArrowDown = kc === 40;
            // Directions locks
            if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
                return false;
            }
            if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
            }
            if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                let inView = false;
                // Check that swiper should be inside of visible area of window
                if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
                    return undefined;
                }
                const el = swiper.el;
                const swiperWidth = el.clientWidth;
                const swiperHeight = el.clientHeight;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                const swiperOffset = elementOffset(el);
                if (rtl) swiperOffset.left -= el.scrollLeft;
                const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
                for (let i = 0; i < swiperCoord.length; i += 1) {
                    const point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                        inView = true;
                    }
                }
                if (!inView) return undefined;
            }
            if (swiper.isHorizontal()) {
                if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                }
                if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
            } else {
                if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
                }
                if (isPageDown || isArrowDown) swiper.slideNext();
                if (isPageUp || isArrowUp) swiper.slidePrev();
            }
            emit('keyPress', kc);
            return undefined;
        }
        function enable() {
            if (swiper.keyboard.enabled) return;
            document.addEventListener('keydown', handle);
            swiper.keyboard.enabled = true;
        }
        function disable() {
            if (!swiper.keyboard.enabled) return;
            document.removeEventListener('keydown', handle);
            swiper.keyboard.enabled = false;
        }
        on('init', () => {
            if (swiper.params.keyboard.enabled) {
                enable();
            }
        });
        on('destroy', () => {
            if (swiper.keyboard.enabled) {
                disable();
            }
        });
        Object.assign(swiper.keyboard, {
            enable,
            disable
        });
    }

    /* eslint-disable consistent-return */
    function Mousewheel(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const window = getWindow();
        extendParams({
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarget: 'container',
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: 'swiper-no-mousewheel'
            }
        });
        swiper.mousewheel = {
            enabled: false
        };
        let timeout;
        let lastScrollTime = now();
        let lastEventBeforeSnap;
        const recentWheelEvents = [];
        function normalize(e) {
            // Reasonable defaults
            const PIXEL_STEP = 10;
            const LINE_HEIGHT = 40;
            const PAGE_HEIGHT = 800;
            let sX = 0;
            let sY = 0; // spinX, spinY
            let pX = 0;
            let pY = 0; // pixelX, pixelY

            // Legacy
            if ('detail' in e) {
                sY = e.detail;
            }
            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }
            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }
            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            }

            // side scrolling on FF with DOMMouseScroll
            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
            if ('deltaY' in e) {
                pY = e.deltaY;
            }
            if ('deltaX' in e) {
                pX = e.deltaX;
            }
            if (e.shiftKey && !pX) {
                // if user scrolls with shift he wants horizontal scroll
                pX = pY;
                pY = 0;
            }
            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) {
                    // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }

            // Fall-back if spin cannot be determined
            if (pX && !sX) {
                sX = pX < 1 ? -1 : 1;
            }
            if (pY && !sY) {
                sY = pY < 1 ? -1 : 1;
            }
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        }
        function handleMouseEnter() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = true;
        }
        function handleMouseLeave() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = false;
        }
        function animateSlider(newEvent) {
            if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
                // Prevent if delta of wheel scroll delta is below configured threshold
                return false;
            }
            if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
                // Prevent if time between scrolls is below configured threshold
                return false;
            }

            // If the movement is NOT big enough and
            // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
            //   Don't go any further (avoid insignificant scroll movement).
            if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
                // Return false as a default
                return true;
            }
            // If user is scrolling towards the end:
            //   If the slider hasn't hit the latest slide or
            //   if the slider is a loop and
            //   if the slider isn't moving right now:
            //     Go to next slide and
            //     emit a scroll event.
            // Else (the user is scrolling towards the beginning) and
            // if the slider hasn't hit the first slide or
            // if the slider is a loop and
            // if the slider isn't moving right now:
            //   Go to prev slide and
            //   emit a scroll event.
            if (newEvent.direction < 0) {
                if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                    swiper.slideNext();
                    emit('scroll', newEvent.raw);
                }
            } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                swiper.slidePrev();
                emit('scroll', newEvent.raw);
            }
            // If you got here is because an animation has been triggered so store the current time
            lastScrollTime = new window.Date().getTime();
            // Return false as a default
            return false;
        }
        function releaseScroll(newEvent) {
            const params = swiper.params.mousewheel;
            if (newEvent.direction < 0) {
                if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                    // Return true to animate scroll on edges
                    return true;
                }
            } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true;
            }
            return false;
        }
        function handle(event) {
            let e = event;
            let disableParentSwiper = true;
            if (!swiper.enabled) return;

            // Ignore event if the target or its parents have the swiper-no-mousewheel class
            if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
            const params = swiper.params.mousewheel;
            if (swiper.params.cssMode) {
                e.preventDefault();
            }
            let targetEl = swiper.el;
            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
            }
            const targetElContainsTarget = targetEl && targetEl.contains(e.target);
            if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
            if (e.originalEvent) e = e.originalEvent; // jquery fix
            let delta = 0;
            const rtlFactor = swiper.rtlTranslate ? -1 : 1;
            const data = normalize(e);
            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }
            if (delta === 0) return true;
            if (params.invert) delta = -delta;

            // Get the scroll positions
            let positions = swiper.getTranslate() + delta * params.sensitivity;
            if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
            if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

            // When loop is true:
            //     the disableParentSwiper will be true.
            // When loop is false:
            //     if the scroll positions is not on edge,
            //     then the disableParentSwiper will be true.
            //     if the scroll on edge positions,
            //     then the disableParentSwiper will be false.
            disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
            if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
            if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                // Register the new event in a variable which stores the relevant data
                const newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta),
                    raw: event
                };

                // Keep the most recent events
                if (recentWheelEvents.length >= 2) {
                    recentWheelEvents.shift(); // only store the last N events
                }

                const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                recentWheelEvents.push(newEvent);

                // If there is at least one previous recorded event:
                //   If direction has changed or
                //   if the scroll is quicker than the previous one:
                //     Animate the slider.
                // Else (this is the first time the wheel is moved):
                //     Animate the slider.
                if (prevEvent) {
                    if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                        animateSlider(newEvent);
                    }
                } else {
                    animateSlider(newEvent);
                }

                // If it's time to release the scroll:
                //   Return now so you don't hit the preventDefault.
                if (releaseScroll(newEvent)) {
                    return true;
                }
            } else {
                // Freemode or scrollContainer:

                // If we recently snapped after a momentum scroll, then ignore wheel events
                // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                // or if it's a new scroll (larger delta or inverse sign as last event before
                // an end-of-momentum snap).
                const newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta)
                };
                const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
                if (!ignoreWheelEvents) {
                    lastEventBeforeSnap = undefined;
                    let position = swiper.getTranslate() + delta * params.sensitivity;
                    const wasBeginning = swiper.isBeginning;
                    const wasEnd = swiper.isEnd;
                    if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                    if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                    swiper.setTransition(0);
                    swiper.setTranslate(position);
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                    if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                        swiper.updateSlidesClasses();
                    }
                    if (swiper.params.loop) {
                        swiper.loopFix({
                            direction: newEvent.direction < 0 ? 'next' : 'prev',
                            byMousewheel: true
                        });
                    }
                    if (swiper.params.freeMode.sticky) {
                        // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                        // the end of a momentum scroll by storing recent (N=15?) wheel events.
                        // 1. do all N events have decreasing or same (absolute value) delta?
                        // 2. did all N events arrive in the last M (M=500?) msecs?
                        // 3. does the earliest event have an (absolute value) delta that's
                        //    at least P (P=1?) larger than the most recent event's delta?
                        // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                        // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                        // Snap immediately and ignore remaining wheel events in this scroll.
                        // See comment above for "remaining wheel events in this scroll" determination.
                        // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                        clearTimeout(timeout);
                        timeout = undefined;
                        if (recentWheelEvents.length >= 15) {
                            recentWheelEvents.shift(); // only store the last N events
                        }

                        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                        const firstEvent = recentWheelEvents[0];
                        recentWheelEvents.push(newEvent);
                        if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                            recentWheelEvents.splice(0);
                        } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                            // We're at the end of the deceleration of a momentum scroll, so there's no need
                            // to wait for more events. Snap ASAP on the next tick.
                            // Also, because there's some remaining momentum we'll bias the snap in the
                            // direction of the ongoing scroll because it's better UX for the scroll to snap
                            // in the same direction as the scroll instead of reversing to snap.  Therefore,
                            // if it's already scrolled more than 20% in the current direction, keep going.
                            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                            lastEventBeforeSnap = newEvent;
                            recentWheelEvents.splice(0);
                            timeout = nextTick(() => {
                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 0); // no delay; move on next tick
                        }

                        if (!timeout) {
                            // if we get here, then we haven't detected the end of a momentum scroll, so
                            // we'll consider a scroll "complete" when there haven't been any wheel events
                            // for 500ms.
                            timeout = nextTick(() => {
                                const snapToThreshold = 0.5;
                                lastEventBeforeSnap = newEvent;
                                recentWheelEvents.splice(0);
                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 500);
                        }
                    }

                    // Emit event
                    if (!ignoreWheelEvents) emit('scroll', e);

                    // Stop autoplay
                    if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
                    // Return page scroll on edge positions
                    if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
                        return true;
                    }
                }
            }
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
            return false;
        }
        function events(method) {
            let targetEl = swiper.el;
            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
            }
            targetEl[method]('mouseenter', handleMouseEnter);
            targetEl[method]('mouseleave', handleMouseLeave);
            targetEl[method]('wheel', handle);
        }
        function enable() {
            if (swiper.params.cssMode) {
                swiper.wrapperEl.removeEventListener('wheel', handle);
                return true;
            }
            if (swiper.mousewheel.enabled) return false;
            events('addEventListener');
            swiper.mousewheel.enabled = true;
            return true;
        }
        function disable() {
            if (swiper.params.cssMode) {
                swiper.wrapperEl.addEventListener(event, handle);
                return true;
            }
            if (!swiper.mousewheel.enabled) return false;
            events('removeEventListener');
            swiper.mousewheel.enabled = false;
            return true;
        }
        on('init', () => {
            if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
                disable();
            }
            if (swiper.params.mousewheel.enabled) enable();
        });
        on('destroy', () => {
            if (swiper.params.cssMode) {
                enable();
            }
            if (swiper.mousewheel.enabled) disable();
        });
        Object.assign(swiper.mousewheel, {
            enable,
            disable
        });
    }

    function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
        if (swiper.params.createElements) {
            Object.keys(checkProps).forEach(key => {
                if (!params[key] && params.auto === true) {
                    let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = createElement('div', checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            });
        }
        return params;
    }

    function Navigation(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        extendParams({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock',
                navigationDisabledClass: 'swiper-navigation-disabled'
            }
        });
        swiper.navigation = {
            nextEl: null,
            prevEl: null
        };
        const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
        function getEl(el) {
            let res;
            if (el && typeof el === 'string' && swiper.isElement) {
                res = swiper.el.querySelector(el);
                if (res) return res;
            }
            if (el) {
                if (typeof el === 'string') res = [...document.querySelectorAll(el)];
                if (swiper.params.uniqueNavElements && typeof el === 'string' && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
                    res = swiper.el.querySelector(el);
                }
            }
            if (el && !res) return el;
            // if (Array.isArray(res) && res.length === 1) res = res[0];
            return res;
        }
        function toggleEl(el, disabled) {
            const params = swiper.params.navigation;
            el = makeElementsArray(el);
            el.forEach(subEl => {
                if (subEl) {
                    subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
                    if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) {
                        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
                    }
                }
            });
        }
        function update() {
            // Update Navigation Buttons
            const {
                nextEl,
                prevEl
            } = swiper.navigation;
            if (swiper.params.loop) {
                toggleEl(prevEl, false);
                toggleEl(nextEl, false);
                return;
            }
            toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
            toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
        }
        function onPrevClick(e) {
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slidePrev();
            emit('navigationPrev');
        }
        function onNextClick(e) {
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slideNext();
            emit('navigationNext');
        }
        function init() {
            const params = swiper.params.navigation;
            swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                nextEl: 'swiper-button-next',
                prevEl: 'swiper-button-prev'
            });
            if (!(params.nextEl || params.prevEl)) return;
            let nextEl = getEl(params.nextEl);
            let prevEl = getEl(params.prevEl);
            Object.assign(swiper.navigation, {
                nextEl,
                prevEl
            });
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const initButton = (el, dir) => {
                if (el) {
                    el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
                }
                if (!swiper.enabled && el) {
                    el.classList.add(...params.lockClass.split(' '));
                }
            };
            nextEl.forEach(el => initButton(el, 'next'));
            prevEl.forEach(el => initButton(el, 'prev'));
        }
        function destroy() {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const destroyButton = (el, dir) => {
                el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
                el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
            };
            nextEl.forEach(el => destroyButton(el, 'next'));
            prevEl.forEach(el => destroyButton(el, 'prev'));
        }
        on('init', () => {
            if (swiper.params.navigation.enabled === false) {
                // eslint-disable-next-line
                disable();
            } else {
                init();
                update();
            }
        });
        on('toEdge fromEdge lock unlock', () => {
            update();
        });
        on('destroy', () => {
            destroy();
        });
        on('enable disable', () => {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.navigation.lockClass));
        });
        on('click', (_s, e) => {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const targetEl = e.target;
            if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                let isHidden;
                if (nextEl.length) {
                    isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                } else if (prevEl.length) {
                    isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                }
                if (isHidden === true) {
                    emit('navigationShow');
                } else {
                    emit('navigationHide');
                }
                [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
            }
        });
        const enable = () => {
            swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
            init();
            update();
        };
        const disable = () => {
            swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
            destroy();
        };
        Object.assign(swiper.navigation, {
            enable,
            disable,
            update,
            init,
            destroy
        });
    }

    function classesToSelector(classes) {
        if (classes === void 0) {
            classes = '';
        }
        return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
            .replace(/ /g, '.')}`;
    }

    function Pagination(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const pfx = 'swiper-pagination';
        extendParams({
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: 'bullets',
                // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: number => number,
                formatFractionTotal: number => number,
                bulletClass: `${pfx}-bullet`,
                bulletActiveClass: `${pfx}-bullet-active`,
                modifierClass: `${pfx}-`,
                currentClass: `${pfx}-current`,
                totalClass: `${pfx}-total`,
                hiddenClass: `${pfx}-hidden`,
                progressbarFillClass: `${pfx}-progressbar-fill`,
                progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                clickableClass: `${pfx}-clickable`,
                lockClass: `${pfx}-lock`,
                horizontalClass: `${pfx}-horizontal`,
                verticalClass: `${pfx}-vertical`,
                paginationDisabledClass: `${pfx}-disabled`
            }
        });
        swiper.pagination = {
            el: null,
            bullets: []
        };
        let bulletSize;
        let dynamicBulletIndex = 0;
        const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
        function isPaginationDisabled() {
            return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
        }
        function setSideBullets(bulletEl, position) {
            const {
                bulletActiveClass
            } = swiper.params.pagination;
            if (!bulletEl) return;
            bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
            if (bulletEl) {
                bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
        }
        function onBulletClick(e) {
            const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
            if (!bulletEl) {
                return;
            }
            e.preventDefault();
            const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
            if (swiper.params.loop) {
                if (swiper.realIndex === index) return;
                const realIndex = swiper.realIndex;
                const newSlideIndex = swiper.getSlideIndexByData(index);
                const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
                if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
                    const indexBeforeLoopFix = swiper.activeIndex;
                    swiper.loopFix({
                        direction: newSlideIndex > currentSlideIndex ? 'next' : 'prev',
                        activeSlideIndex: newSlideIndex,
                        slideTo: false
                    });
                    const indexAfterFix = swiper.activeIndex;
                    if (indexBeforeLoopFix === indexAfterFix) {
                        swiper.slideToLoop(realIndex, 0, false, true);
                    }
                }
                swiper.slideToLoop(index);
            } else {
                swiper.slideTo(index);
            }
        }
        function update() {
            // Render || Update Pagination bullets/items
            const rtl = swiper.rtl;
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            let el = swiper.pagination.el;
            el = makeElementsArray(el);
            // Current/Total
            let current;
            let previousIndex;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                previousIndex = swiper.previousRealIndex || 0;
                current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
                previousIndex = swiper.previousSnapIndex;
            } else {
                previousIndex = swiper.previousIndex || 0;
                current = swiper.activeIndex || 0;
            }
            // Types
            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                const bullets = swiper.pagination.bullets;
                let firstIndex;
                let lastIndex;
                let midIndex;
                if (params.dynamicBullets) {
                    bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
                    el.forEach(subEl => {
                        subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                    });
                    if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
                        dynamicBulletIndex += current - (previousIndex || 0);
                        if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                            dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (dynamicBulletIndex < 0) {
                            dynamicBulletIndex = 0;
                        }
                    }
                    firstIndex = Math.max(current - dynamicBulletIndex, 0);
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.forEach(bulletEl => {
                    const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
                    bulletEl.classList.remove(...classesToRemove);
                });
                if (el.length > 1) {
                    bullets.forEach(bullet => {
                        const bulletIndex = elementIndex(bullet);
                        if (bulletIndex === current) {
                            bullet.classList.add(...params.bulletActiveClass.split(' '));
                        } else if (swiper.isElement) {
                            bullet.setAttribute('part', 'bullet');
                        }
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                            }
                            if (bulletIndex === firstIndex) {
                                setSideBullets(bullet, 'prev');
                            }
                            if (bulletIndex === lastIndex) {
                                setSideBullets(bullet, 'next');
                            }
                        }
                    });
                } else {
                    const bullet = bullets[current];
                    if (bullet) {
                        bullet.classList.add(...params.bulletActiveClass.split(' '));
                    }
                    if (swiper.isElement) {
                        bullets.forEach((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
                        });
                    }
                    if (params.dynamicBullets) {
                        const firstDisplayedBullet = bullets[firstIndex];
                        const lastDisplayedBullet = bullets[lastIndex];
                        for (let i = firstIndex; i <= lastIndex; i += 1) {
                            if (bullets[i]) {
                                bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                            }
                        }
                        setSideBullets(firstDisplayedBullet, 'prev');
                        setSideBullets(lastDisplayedBullet, 'next');
                    }
                }
                if (params.dynamicBullets) {
                    const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                    const offsetProp = rtl ? 'right' : 'left';
                    bullets.forEach(bullet => {
                        bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
                    });
                }
            }
            el.forEach((subEl, subElIndex) => {
                if (params.type === 'fraction') {
                    subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
                        fractionEl.textContent = params.formatFractionCurrent(current + 1);
                    });
                    subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
                        totalEl.textContent = params.formatFractionTotal(total);
                    });
                }
                if (params.type === 'progressbar') {
                    let progressbarDirection;
                    if (params.progressbarOpposite) {
                        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                    } else {
                        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                    }
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if (progressbarDirection === 'horizontal') {
                        scaleX = scale;
                    } else {
                        scaleY = scale;
                    }
                    subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
                        progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                        progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                    });
                }
                if (params.type === 'custom' && params.renderCustom) {
                    subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                    if (subElIndex === 0) emit('paginationRender', subEl);
                } else {
                    if (subElIndex === 0) emit('paginationRender', subEl);
                    emit('paginationUpdate', subEl);
                }
                if (swiper.params.watchOverflow && swiper.enabled) {
                    subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
                }
            });
        }
        function render() {
            // Render Container
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            let el = swiper.pagination.el;
            el = makeElementsArray(el);
            let paginationHTML = '';
            if (params.type === 'bullets') {
                let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
                    numberOfBullets = slidesLength;
                }
                for (let i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        // prettier-ignore
                        paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
                    }
                }
            }
            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
                }
            }
            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                }
            }
            swiper.pagination.bullets = [];
            el.forEach(subEl => {
                if (params.type !== 'custom') {
                    subEl.innerHTML = paginationHTML || '';
                }
                if (params.type === 'bullets') {
                    swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
                }
            });
            if (params.type !== 'custom') {
                emit('paginationRender', el[0]);
            }
        }
        function init() {
            swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                el: 'swiper-pagination'
            });
            const params = swiper.params.pagination;
            if (!params.el) return;
            let el;
            if (typeof params.el === 'string' && swiper.isElement) {
                el = swiper.el.querySelector(params.el);
            }
            if (!el && typeof params.el === 'string') {
                el = [...document.querySelectorAll(params.el)];
            }
            if (!el) {
                el = params.el;
            }
            if (!el || el.length === 0) return;
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
                el = [...swiper.el.querySelectorAll(params.el)];
                // check if it belongs to another nested Swiper
                if (el.length > 1) {
                    el = el.filter(subEl => {
                        if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
                        return true;
                    })[0];
                }
            }
            if (Array.isArray(el) && el.length === 1) el = el[0];
            Object.assign(swiper.pagination, {
                el
            });
            el = makeElementsArray(el);
            el.forEach(subEl => {
                if (params.type === 'bullets' && params.clickable) {
                    subEl.classList.add(...(params.clickableClass || '').split(' '));
                }
                subEl.classList.add(params.modifierClass + params.type);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.type === 'bullets' && params.dynamicBullets) {
                    subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) {
                        params.dynamicMainBullets = 1;
                    }
                }
                if (params.type === 'progressbar' && params.progressbarOpposite) {
                    subEl.classList.add(params.progressbarOppositeClass);
                }
                if (params.clickable) {
                    subEl.addEventListener('click', onBulletClick);
                }
                if (!swiper.enabled) {
                    subEl.classList.add(params.lockClass);
                }
            });
        }
        function destroy() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            let el = swiper.pagination.el;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => {
                    subEl.classList.remove(params.hiddenClass);
                    subEl.classList.remove(params.modifierClass + params.type);
                    subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.clickable) {
                        subEl.classList.remove(...(params.clickableClass || '').split(' '));
                        subEl.removeEventListener('click', onBulletClick);
                    }
                });
            }
            if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
        }
        on('changeDirection', () => {
            if (!swiper.pagination || !swiper.pagination.el) return;
            const params = swiper.params.pagination;
            let {
                el
            } = swiper.pagination;
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.classList.remove(params.horizontalClass, params.verticalClass);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            });
        });
        on('init', () => {
            if (swiper.params.pagination.enabled === false) {
                // eslint-disable-next-line
                disable();
            } else {
                init();
                render();
                update();
            }
        });
        on('activeIndexChange', () => {
            if (typeof swiper.snapIndex === 'undefined') {
                update();
            }
        });
        on('snapIndexChange', () => {
            update();
        });
        on('snapGridLengthChange', () => {
            render();
            update();
        });
        on('destroy', () => {
            destroy();
        });
        on('enable disable', () => {
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
            }
        });
        on('lock unlock', () => {
            update();
        });
        on('click', (_s, e) => {
            const targetEl = e.target;
            const el = makeElementsArray(swiper.pagination.el);
            if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                if (isHidden === true) {
                    emit('paginationShow');
                } else {
                    emit('paginationHide');
                }
                el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
            }
        });
        const enable = () => {
            swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
            }
            init();
            render();
            update();
        };
        const disable = () => {
            swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
            }
            destroy();
        };
        Object.assign(swiper.pagination, {
            enable,
            disable,
            render,
            update,
            init,
            destroy
        });
    }

    function Scrollbar(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const document = getDocument();
        let isTouched = false;
        let timeout = null;
        let dragTimeout = null;
        let dragStartPos;
        let dragSize;
        let trackSize;
        let divider;
        extendParams({
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
                scrollbarDisabledClass: 'swiper-scrollbar-disabled',
                horizontalClass: `swiper-scrollbar-horizontal`,
                verticalClass: `swiper-scrollbar-vertical`
            }
        });
        swiper.scrollbar = {
            el: null,
            dragEl: null
        };
        function setTranslate() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const {
                scrollbar,
                rtlTranslate: rtl
            } = swiper;
            const {
                dragEl,
                el
            } = scrollbar;
            const params = swiper.params.scrollbar;
            const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
            let newSize = dragSize;
            let newPos = (trackSize - dragSize) * progress;
            if (rtl) {
                newPos = -newPos;
                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }
            if (swiper.isHorizontal()) {
                dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
                dragEl.style.width = `${newSize}px`;
            } else {
                dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
                dragEl.style.height = `${newSize}px`;
            }
            if (params.hide) {
                clearTimeout(timeout);
                el.style.opacity = 1;
                timeout = setTimeout(() => {
                    el.style.opacity = 0;
                    el.style.transitionDuration = '400ms';
                }, 1000);
            }
        }
        function setTransition(duration) {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
        }
        function updateSize() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const {
                scrollbar
            } = swiper;
            const {
                dragEl,
                el
            } = scrollbar;
            dragEl.style.width = '';
            dragEl.style.height = '';
            trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
            divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }
            if (swiper.isHorizontal()) {
                dragEl.style.width = `${dragSize}px`;
            } else {
                dragEl.style.height = `${dragSize}px`;
            }
            if (divider >= 1) {
                el.style.display = 'none';
            } else {
                el.style.display = '';
            }
            if (swiper.params.scrollbar.hide) {
                el.style.opacity = 0;
            }
            if (swiper.params.watchOverflow && swiper.enabled) {
                scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
            }
        }
        function getPointerPosition(e) {
            return swiper.isHorizontal() ? e.clientX : e.clientY;
        }
        function setDragPosition(e) {
            const {
                scrollbar,
                rtlTranslate: rtl
            } = swiper;
            const {
                el
            } = scrollbar;
            let positionRatio;
            positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
            if (rtl) {
                positionRatio = 1 - positionRatio;
            }
            const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        function onDragStart(e) {
            const params = swiper.params.scrollbar;
            const {
                scrollbar,
                wrapperEl
            } = swiper;
            const {
                el,
                dragEl
            } = scrollbar;
            isTouched = true;
            dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
            e.preventDefault();
            e.stopPropagation();
            wrapperEl.style.transitionDuration = '100ms';
            dragEl.style.transitionDuration = '100ms';
            setDragPosition(e);
            clearTimeout(dragTimeout);
            el.style.transitionDuration = '0ms';
            if (params.hide) {
                el.style.opacity = 1;
            }
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style['scroll-snap-type'] = 'none';
            }
            emit('scrollbarDragStart', e);
        }
        function onDragMove(e) {
            const {
                scrollbar,
                wrapperEl
            } = swiper;
            const {
                el,
                dragEl
            } = scrollbar;
            if (!isTouched) return;
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
            setDragPosition(e);
            wrapperEl.style.transitionDuration = '0ms';
            el.style.transitionDuration = '0ms';
            dragEl.style.transitionDuration = '0ms';
            emit('scrollbarDragMove', e);
        }
        function onDragEnd(e) {
            const params = swiper.params.scrollbar;
            const {
                scrollbar,
                wrapperEl
            } = swiper;
            const {
                el
            } = scrollbar;
            if (!isTouched) return;
            isTouched = false;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style['scroll-snap-type'] = '';
                wrapperEl.style.transitionDuration = '';
            }
            if (params.hide) {
                clearTimeout(dragTimeout);
                dragTimeout = nextTick(() => {
                    el.style.opacity = 0;
                    el.style.transitionDuration = '400ms';
                }, 1000);
            }
            emit('scrollbarDragEnd', e);
            if (params.snapOnRelease) {
                swiper.slideToClosest();
            }
        }
        function events(method) {
            const {
                scrollbar,
                params
            } = swiper;
            const el = scrollbar.el;
            if (!el) return;
            const target = el;
            const activeListener = params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            const passiveListener = params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (!target) return;
            const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
            target[eventMethod]('pointerdown', onDragStart, activeListener);
            document[eventMethod]('pointermove', onDragMove, activeListener);
            document[eventMethod]('pointerup', onDragEnd, passiveListener);
        }
        function enableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            events('on');
        }
        function disableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            events('off');
        }
        function init() {
            const {
                scrollbar,
                el: swiperEl
            } = swiper;
            swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                el: 'swiper-scrollbar'
            });
            const params = swiper.params.scrollbar;
            if (!params.el) return;
            let el;
            if (typeof params.el === 'string' && swiper.isElement) {
                el = swiper.el.querySelector(params.el);
            }
            if (!el && typeof params.el === 'string') {
                el = document.querySelectorAll(params.el);
            } else if (!el) {
                el = params.el;
            }
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
                el = swiperEl.querySelector(params.el);
            }
            if (el.length > 0) el = el[0];
            el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            let dragEl;
            if (el) {
                dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
                if (!dragEl) {
                    dragEl = createElement('div', swiper.params.scrollbar.dragClass);
                    el.append(dragEl);
                }
            }
            Object.assign(scrollbar, {
                el,
                dragEl
            });
            if (params.draggable) {
                enableDraggable();
            }
            if (el) {
                el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
            }
        }
        function destroy() {
            const params = swiper.params.scrollbar;
            const el = swiper.scrollbar.el;
            if (el) {
                el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            }
            disableDraggable();
        }
        on('init', () => {
            if (swiper.params.scrollbar.enabled === false) {
                // eslint-disable-next-line
                disable();
            } else {
                init();
                updateSize();
                setTranslate();
            }
        });
        on('update resize observerUpdate lock unlock', () => {
            updateSize();
        });
        on('setTranslate', () => {
            setTranslate();
        });
        on('setTransition', (_s, duration) => {
            setTransition(duration);
        });
        on('enable disable', () => {
            const {
                el
            } = swiper.scrollbar;
            if (el) {
                el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
            }
        });
        on('destroy', () => {
            destroy();
        });
        const enable = () => {
            swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
            if (swiper.scrollbar.el) {
                swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
            }
            init();
            updateSize();
            setTranslate();
        };
        const disable = () => {
            swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
            if (swiper.scrollbar.el) {
                swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
            }
            destroy();
        };
        Object.assign(swiper.scrollbar, {
            enable,
            disable,
            updateSize,
            setTranslate,
            init,
            destroy
        });
    }

    function Parallax(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            parallax: {
                enabled: false
            }
        });
        const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
        const setTransform = (el, progress) => {
            const {
                rtl
            } = swiper;
            const rtlFactor = rtl ? -1 : 1;
            const p = el.getAttribute('data-swiper-parallax') || '0';
            let x = el.getAttribute('data-swiper-parallax-x');
            let y = el.getAttribute('data-swiper-parallax-y');
            const scale = el.getAttribute('data-swiper-parallax-scale');
            const opacity = el.getAttribute('data-swiper-parallax-opacity');
            const rotate = el.getAttribute('data-swiper-parallax-rotate');
            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }
            if (x.indexOf('%') >= 0) {
                x = `${parseInt(x, 10) * progress * rtlFactor}%`;
            } else {
                x = `${x * progress * rtlFactor}px`;
            }
            if (y.indexOf('%') >= 0) {
                y = `${parseInt(y, 10) * progress}%`;
            } else {
                y = `${y * progress}px`;
            }
            if (typeof opacity !== 'undefined' && opacity !== null) {
                const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                el.style.opacity = currentOpacity;
            }
            let transform = `translate3d(${x}, ${y}, 0px)`;
            if (typeof scale !== 'undefined' && scale !== null) {
                const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                transform += ` scale(${currentScale})`;
            }
            if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
                const currentRotate = rotate * progress * -1;
                transform += ` rotate(${currentRotate}deg)`;
            }
            el.style.transform = transform;
        };
        const setTranslate = () => {
            const {
                el,
                slides,
                progress,
                snapGrid,
                isElement
            } = swiper;
            const elements = elementChildren(el, elementsSelector);
            if (swiper.isElement) {
                elements.push(...elementChildren(swiper.hostEl, elementsSelector));
            }
            elements.forEach(subEl => {
                setTransform(subEl, progress);
            });
            slides.forEach((slideEl, slideIndex) => {
                let slideProgress = slideEl.progress;
                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                    slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                }
                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
                    setTransform(subEl, slideProgress);
                });
            });
        };
        const setTransition = function (duration) {
            if (duration === void 0) {
                duration = swiper.params.speed;
            }
            const {
                el,
                hostEl
            } = swiper;
            const elements = [...el.querySelectorAll(elementsSelector)];
            if (swiper.isElement) {
                elements.push(...hostEl.querySelectorAll(elementsSelector));
            }
            elements.forEach(parallaxEl => {
                let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
                if (duration === 0) parallaxDuration = 0;
                parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
            });
        };
        on('beforeInit', () => {
            if (!swiper.params.parallax.enabled) return;
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
        });
        on('init', () => {
            if (!swiper.params.parallax.enabled) return;
            setTranslate();
        });
        on('setTranslate', () => {
            if (!swiper.params.parallax.enabled) return;
            setTranslate();
        });
        on('setTransition', (_swiper, duration) => {
            if (!swiper.params.parallax.enabled) return;
            setTransition(duration);
        });
    }

    function Zoom(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const window = getWindow();
        extendParams({
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
            }
        });
        swiper.zoom = {
            enabled: false
        };
        let currentScale = 1;
        let isScaling = false;
        let fakeGestureTouched;
        let fakeGestureMoved;
        const evCache = [];
        const gesture = {
            originX: 0,
            originY: 0,
            slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            imageEl: undefined,
            imageWrapEl: undefined,
            maxRatio: 3
        };
        const image = {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {}
        };
        const velocity = {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined
        };
        let scale = 1;
        Object.defineProperty(swiper.zoom, 'scale', {
            get() {
                return scale;
            },
            set(value) {
                if (scale !== value) {
                    const imageEl = gesture.imageEl;
                    const slideEl = gesture.slideEl;
                    emit('zoomChange', value, imageEl, slideEl);
                }
                scale = value;
            }
        });
        function getDistanceBetweenTouches() {
            if (evCache.length < 2) return 1;
            const x1 = evCache[0].pageX;
            const y1 = evCache[0].pageY;
            const x2 = evCache[1].pageX;
            const y2 = evCache[1].pageY;
            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            return distance;
        }
        function getScaleOrigin() {
            if (evCache.length < 2) return {
                x: null,
                y: null
            };
            const box = gesture.imageEl.getBoundingClientRect();
            return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y) / currentScale];
        }
        function getSlideSelector() {
            return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
        }
        function eventWithinSlide(e) {
            const slideSelector = getSlideSelector();
            if (e.target.matches(slideSelector)) return true;
            if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
            return false;
        }
        function eventWithinZoomContainer(e) {
            const selector = `.${swiper.params.zoom.containerClass}`;
            if (e.target.matches(selector)) return true;
            if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
            return false;
        }

        // Events
        function onGestureStart(e) {
            if (e.pointerType === 'mouse') {
                evCache.splice(0, evCache.length);
            }
            if (!eventWithinSlide(e)) return;
            const params = swiper.params.zoom;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
            evCache.push(e);
            if (evCache.length < 2) {
                return;
            }
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches();
            if (!gesture.slideEl) {
                gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) {
                    imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
                }
                gesture.imageEl = imageEl;
                if (imageEl) {
                    gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
                } else {
                    gesture.imageWrapEl = undefined;
                }
                if (!gesture.imageWrapEl) {
                    gesture.imageEl = undefined;
                    return;
                }
                gesture.maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
            }
            if (gesture.imageEl) {
                const [originX, originY] = getScaleOrigin();
                gesture.originX = originX;
                gesture.originY = originY;
                gesture.imageEl.style.transitionDuration = '0ms';
            }
            isScaling = true;
        }
        function onGestureChange(e) {
            if (!eventWithinSlide(e)) return;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
            const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
            if (pointerIndex >= 0) evCache[pointerIndex] = e;
            if (evCache.length < 2) {
                return;
            }
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches();
            if (!gesture.imageEl) {
                return;
            }
            zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
            }
            if (zoom.scale < params.minRatio) {
                zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
            }
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        }
        function onGestureEnd(e) {
            if (!eventWithinSlide(e)) return;
            if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
            const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
            if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
            if (!fakeGestureTouched || !fakeGestureMoved) {
                return;
            }
            fakeGestureTouched = false;
            fakeGestureMoved = false;
            if (!gesture.imageEl) return;
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
            currentScale = zoom.scale;
            isScaling = false;
            if (zoom.scale > 1 && gesture.slideEl) {
                gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
            } else if (zoom.scale <= 1 && gesture.slideEl) {
                gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
            }
            if (zoom.scale === 1) {
                gesture.originX = 0;
                gesture.originY = 0;
                gesture.slideEl = undefined;
            }
        }
        function onTouchStart(e) {
            const device = swiper.device;
            if (!gesture.imageEl) return;
            if (image.isTouched) return;
            if (device.android && e.cancelable) e.preventDefault();
            image.isTouched = true;
            const event = evCache.length > 0 ? evCache[0] : e;
            image.touchesStart.x = event.pageX;
            image.touchesStart.y = event.pageY;
        }
        function onTouchMove(e) {
            if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
            const zoom = swiper.zoom;
            if (!gesture.imageEl) return;
            if (!image.isTouched || !gesture.slideEl) return;
            if (!image.isMoved) {
                image.width = gesture.imageEl.offsetWidth;
                image.height = gesture.imageEl.offsetHeight;
                image.startX = getTranslate(gesture.imageWrapEl, 'x') || 0;
                image.startY = getTranslate(gesture.imageWrapEl, 'y') || 0;
                gesture.slideWidth = gesture.slideEl.offsetWidth;
                gesture.slideHeight = gesture.slideEl.offsetHeight;
                gesture.imageWrapEl.style.transitionDuration = '0ms';
            }
            // Define if we need image drag
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
            image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
            const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
            if (touchesDiff > 5) {
                swiper.allowClick = false;
            }
            if (!image.isMoved && !isScaling) {
                if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                    image.isTouched = false;
                    return;
                }
                if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                    image.isTouched = false;
                    return;
                }
            }
            if (e.cancelable) {
                e.preventDefault();
            }
            e.stopPropagation();
            image.isMoved = true;
            const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
            const {
                originX,
                originY
            } = gesture;
            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
            if (image.currentX < image.minX) {
                image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
            }
            if (image.currentX > image.maxX) {
                image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
            }
            if (image.currentY < image.minY) {
                image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
            }
            if (image.currentY > image.maxY) {
                image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
            }

            // Velocity
            if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
            if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
            if (!velocity.prevTime) velocity.prevTime = Date.now();
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
        }
        function onTouchEnd() {
            const zoom = swiper.zoom;
            if (!gesture.imageEl) return;
            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }
            image.isTouched = false;
            image.isMoved = false;
            let momentumDurationX = 300;
            let momentumDurationY = 300;
            const momentumDistanceX = velocity.x * momentumDurationX;
            const newPositionX = image.currentX + momentumDistanceX;
            const momentumDistanceY = velocity.y * momentumDurationY;
            const newPositionY = image.currentY + momentumDistanceY;

            // Fix duration
            if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY;
            // Define if we need image drag
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
            gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
        }
        function onTransitionEnd() {
            const zoom = swiper.zoom;
            if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
                if (gesture.imageEl) {
                    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
                }
                if (gesture.imageWrapEl) {
                    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
                }
                gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
                zoom.scale = 1;
                currentScale = 1;
                gesture.slideEl = undefined;
                gesture.imageEl = undefined;
                gesture.imageWrapEl = undefined;
                gesture.originX = 0;
                gesture.originY = 0;
            }
        }
        function zoomIn(e) {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
            if (!gesture.slideEl) {
                if (e && e.target) {
                    gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                }
                if (!gesture.slideEl) {
                    if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                        gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
                    } else {
                        gesture.slideEl = swiper.slides[swiper.activeIndex];
                    }
                }
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) {
                    imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
                }
                gesture.imageEl = imageEl;
                if (imageEl) {
                    gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
                } else {
                    gesture.imageWrapEl = undefined;
                }
            }
            if (!gesture.imageEl || !gesture.imageWrapEl) return;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = 'hidden';
                swiper.wrapperEl.style.touchAction = 'none';
            }
            gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
            let touchX;
            let touchY;
            let offsetX;
            let offsetY;
            let diffX;
            let diffY;
            let translateX;
            let translateY;
            let imageWidth;
            let imageHeight;
            let scaledWidth;
            let scaledHeight;
            let translateMinX;
            let translateMinY;
            let translateMaxX;
            let translateMaxY;
            let slideWidth;
            let slideHeight;
            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.pageX;
                touchY = e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }
            const forceZoomRatio = typeof e === 'number' ? e : null;
            if (currentScale === 1 && forceZoomRatio) {
                touchX = undefined;
                touchY = undefined;
            }
            zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
            currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
            if (e && !(currentScale === 1 && forceZoomRatio)) {
                slideWidth = gesture.slideEl.offsetWidth;
                slideHeight = gesture.slideEl.offsetHeight;
                offsetX = elementOffset(gesture.slideEl).left + window.scrollX;
                offsetY = elementOffset(gesture.slideEl).top + window.scrollY;
                diffX = offsetX + slideWidth / 2 - touchX;
                diffY = offsetY + slideHeight / 2 - touchY;
                imageWidth = gesture.imageEl.offsetWidth;
                imageHeight = gesture.imageEl.offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;
                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }
                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }
                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }
                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }
            if (forceZoomRatio && zoom.scale === 1) {
                gesture.originX = 0;
                gesture.originY = 0;
            }
            gesture.imageWrapEl.style.transitionDuration = '300ms';
            gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
            gesture.imageEl.style.transitionDuration = '300ms';
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        }
        function zoomOut() {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
            if (!gesture.slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
                } else {
                    gesture.slideEl = swiper.slides[swiper.activeIndex];
                }
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) {
                    imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
                }
                gesture.imageEl = imageEl;
                if (imageEl) {
                    gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
                } else {
                    gesture.imageWrapEl = undefined;
                }
            }
            if (!gesture.imageEl || !gesture.imageWrapEl) return;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.style.touchAction = '';
            }
            zoom.scale = 1;
            currentScale = 1;
            gesture.imageWrapEl.style.transitionDuration = '300ms';
            gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
            gesture.imageEl.style.transitionDuration = '300ms';
            gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
            gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
            gesture.slideEl = undefined;
            gesture.originX = 0;
            gesture.originY = 0;
        }

        // Toggle Zoom
        function zoomToggle(e) {
            const zoom = swiper.zoom;
            if (zoom.scale && zoom.scale !== 1) {
                // Zoom Out
                zoomOut();
            } else {
                // Zoom In
                zoomIn(e);
            }
        }
        function getListeners() {
            const passiveListener = swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            const activeListenerWithCapture = swiper.params.passiveListeners ? {
                passive: false,
                capture: true
            } : true;
            return {
                passiveListener,
                activeListenerWithCapture
            };
        }

        // Attach/Detach Events
        function enable() {
            const zoom = swiper.zoom;
            if (zoom.enabled) return;
            zoom.enabled = true;
            const {
                passiveListener,
                activeListenerWithCapture
            } = getListeners();

            // Scale image
            swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
            swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
            ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
                swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
            });

            // Move image
            swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
        }
        function disable() {
            const zoom = swiper.zoom;
            if (!zoom.enabled) return;
            zoom.enabled = false;
            const {
                passiveListener,
                activeListenerWithCapture
            } = getListeners();

            // Scale image
            swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
            swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
            ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
                swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
            });

            // Move image
            swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
        }
        on('init', () => {
            if (swiper.params.zoom.enabled) {
                enable();
            }
        });
        on('destroy', () => {
            disable();
        });
        on('touchStart', (_s, e) => {
            if (!swiper.zoom.enabled) return;
            onTouchStart(e);
        });
        on('touchEnd', (_s, e) => {
            if (!swiper.zoom.enabled) return;
            onTouchEnd();
        });
        on('doubleTap', (_s, e) => {
            if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                zoomToggle(e);
            }
        });
        on('transitionEnd', () => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                onTransitionEnd();
            }
        });
        on('slideChange', () => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
                onTransitionEnd();
            }
        });
        Object.assign(swiper.zoom, {
            enable,
            disable,
            in: zoomIn,
            out: zoomOut,
            toggle: zoomToggle
        });
    }

    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
    function Controller(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide' // or 'container'
            }
        });

        swiper.controller = {
            control: undefined
        };
        function LinearSpline(x, y) {
            const binarySearch = function search() {
                let maxIndex;
                let minIndex;
                let guess;
                return (array, val) => {
                    minIndex = -1;
                    maxIndex = array.length;
                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;
                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }
                    return maxIndex;
                };
            }();
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.
            let i1;
            let i3;
            this.interpolate = function interpolate(x2) {
                if (!x2) return 0;

                // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1;

                // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
            };
            return this;
        }
        function getInterpolateFunction(c) {
            swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
        }
        function setTranslate(_t, byController) {
            const controlled = swiper.controller.control;
            let multiplier;
            let controlledTranslate;
            const Swiper = swiper.constructor;
            function setControlledTranslate(c) {
                if (c.destroyed) return;

                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === 'slide') {
                    getInterpolateFunction(c);
                    // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                    // but it did not work out
                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }
                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
                        multiplier = 1;
                    }
                    controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                }
                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
                for (let i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        }
        function setTransition(duration, byController) {
            const Swiper = swiper.constructor;
            const controlled = swiper.controller.control;
            let i;
            function setControlledTransition(c) {
                if (c.destroyed) return;
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                    c.transitionStart();
                    if (c.params.autoHeight) {
                        nextTick(() => {
                            c.updateAutoHeight();
                        });
                    }
                    elementTransitionEnd(c.wrapperEl, () => {
                        if (!controlled) return;
                        c.transitionEnd();
                    });
                }
            }
            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
            }
        }
        function removeSpline() {
            if (!swiper.controller.control) return;
            if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
            }
        }
        on('beforeInit', () => {
            if (typeof window !== 'undefined' && (
                // eslint-disable-line
                typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
                const controlElement = document.querySelector(swiper.params.controller.control);
                if (controlElement && controlElement.swiper) {
                    swiper.controller.control = controlElement.swiper;
                } else if (controlElement) {
                    const onControllerSwiper = e => {
                        swiper.controller.control = e.detail[0];
                        swiper.update();
                        controlElement.removeEventListener('init', onControllerSwiper);
                    };
                    controlElement.addEventListener('init', onControllerSwiper);
                }
                return;
            }
            swiper.controller.control = swiper.params.controller.control;
        });
        on('update', () => {
            removeSpline();
        });
        on('resize', () => {
            removeSpline();
        });
        on('observerUpdate', () => {
            removeSpline();
        });
        on('setTranslate', (_s, translate, byController) => {
            if (!swiper.controller.control || swiper.controller.control.destroyed) return;
            swiper.controller.setTranslate(translate, byController);
        });
        on('setTransition', (_s, duration, byController) => {
            if (!swiper.controller.control || swiper.controller.control.destroyed) return;
            swiper.controller.setTransition(duration, byController);
        });
        Object.assign(swiper.controller, {
            setTranslate,
            setTransition
        });
    }

    function A11y(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
                slideLabelMessage: '{{index}} / {{slidesLength}}',
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: 'group',
                id: null
            }
        });
        swiper.a11y = {
            clicked: false
        };
        let liveRegion = null;
        function notify(message) {
            const notification = liveRegion;
            if (notification.length === 0) return;
            notification.innerHTML = '';
            notification.innerHTML = message;
        }
        const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
        function getRandomNumber(size) {
            if (size === void 0) {
                size = 16;
            }
            const randomChar = () => Math.round(16 * Math.random()).toString(16);
            return 'x'.repeat(size).replace(/x/g, randomChar);
        }
        function makeElFocusable(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('tabIndex', '0');
            });
        }
        function makeElNotFocusable(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('tabIndex', '-1');
            });
        }
        function addElRole(el, role) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('role', role);
            });
        }
        function addElRoleDescription(el, description) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-roledescription', description);
            });
        }
        function addElControls(el, controls) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-controls', controls);
            });
        }
        function addElLabel(el, label) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-label', label);
            });
        }
        function addElId(el, id) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('id', id);
            });
        }
        function addElLive(el, live) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-live', live);
            });
        }
        function disableEl(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-disabled', true);
            });
        }
        function enableEl(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-disabled', false);
            });
        }
        function onEnterOrSpaceKey(e) {
            if (e.keyCode !== 13 && e.keyCode !== 32) return;
            const params = swiper.params.a11y;
            const targetEl = e.target;
            if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
                if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
            }
            if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }
                if (swiper.isEnd) {
                    notify(params.lastSlideMessage);
                } else {
                    notify(params.nextSlideMessage);
                }
            }
            if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                    notify(params.firstSlideMessage);
                } else {
                    notify(params.prevSlideMessage);
                }
            }
            if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
                targetEl.click();
            }
        }
        function updateNavigation() {
            if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
            const {
                nextEl,
                prevEl
            } = swiper.navigation;
            if (prevEl) {
                if (swiper.isBeginning) {
                    disableEl(prevEl);
                    makeElNotFocusable(prevEl);
                } else {
                    enableEl(prevEl);
                    makeElFocusable(prevEl);
                }
            }
            if (nextEl) {
                if (swiper.isEnd) {
                    disableEl(nextEl);
                    makeElNotFocusable(nextEl);
                } else {
                    enableEl(nextEl);
                    makeElFocusable(nextEl);
                }
            }
        }
        function hasPagination() {
            return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
        }
        function hasClickablePagination() {
            return hasPagination() && swiper.params.pagination.clickable;
        }
        function updatePagination() {
            const params = swiper.params.a11y;
            if (!hasPagination()) return;
            swiper.pagination.bullets.forEach(bulletEl => {
                if (swiper.params.pagination.clickable) {
                    makeElFocusable(bulletEl);
                    if (!swiper.params.pagination.renderBullet) {
                        addElRole(bulletEl, 'button');
                        addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
                    }
                }
                if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
                    bulletEl.setAttribute('aria-current', 'true');
                } else {
                    bulletEl.removeAttribute('aria-current');
                }
            });
        }
        const initNavEl = (el, wrapperId, message) => {
            makeElFocusable(el);
            if (el.tagName !== 'BUTTON') {
                addElRole(el, 'button');
                el.addEventListener('keydown', onEnterOrSpaceKey);
            }
            addElLabel(el, message);
            addElControls(el, wrapperId);
        };
        const handlePointerDown = () => {
            swiper.a11y.clicked = true;
        };
        const handlePointerUp = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (!swiper.destroyed) {
                        swiper.a11y.clicked = false;
                    }
                });
            });
        };
        const handleFocus = e => {
            if (swiper.a11y.clicked) return;
            const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!slideEl || !swiper.slides.includes(slideEl)) return;
            const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
            const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
            if (isActive || isVisible) return;
            if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
            if (swiper.isHorizontal()) {
                swiper.el.scrollLeft = 0;
            } else {
                swiper.el.scrollTop = 0;
            }
            swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
        };
        const initSlides = () => {
            const params = swiper.params.a11y;
            if (params.itemRoleDescriptionMessage) {
                addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
            }
            if (params.slideRole) {
                addElRole(swiper.slides, params.slideRole);
            }
            const slidesLength = swiper.slides.length;
            if (params.slideLabelMessage) {
                swiper.slides.forEach((slideEl, index) => {
                    const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
                    const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                    addElLabel(slideEl, ariaLabelMessage);
                });
            }
        };
        const init = () => {
            const params = swiper.params.a11y;
            swiper.el.append(liveRegion);

            // Container
            const containerEl = swiper.el;
            if (params.containerRoleDescriptionMessage) {
                addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
            }
            if (params.containerMessage) {
                addElLabel(containerEl, params.containerMessage);
            }

            // Wrapper
            const wrapperEl = swiper.wrapperEl;
            const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
            const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
            addElId(wrapperEl, wrapperId);
            addElLive(wrapperEl, live);

            // Slide
            initSlides();

            // Navigation
            let {
                nextEl,
                prevEl
            } = swiper.navigation ? swiper.navigation : {};
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (nextEl) {
                nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
            }
            if (prevEl) {
                prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
            }

            // Pagination
            if (hasClickablePagination()) {
                const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
                paginationEl.forEach(el => {
                    el.addEventListener('keydown', onEnterOrSpaceKey);
                });
            }

            // Tab focus
            swiper.el.addEventListener('focus', handleFocus, true);
            swiper.el.addEventListener('pointerdown', handlePointerDown, true);
            swiper.el.addEventListener('pointerup', handlePointerUp, true);
        };
        function destroy() {
            if (liveRegion) liveRegion.remove();
            let {
                nextEl,
                prevEl
            } = swiper.navigation ? swiper.navigation : {};
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (nextEl) {
                nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
            }
            if (prevEl) {
                prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
            }

            // Pagination
            if (hasClickablePagination()) {
                const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
                paginationEl.forEach(el => {
                    el.removeEventListener('keydown', onEnterOrSpaceKey);
                });
            }

            // Tab focus
            swiper.el.removeEventListener('focus', handleFocus, true);
            swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
            swiper.el.removeEventListener('pointerup', handlePointerUp, true);
        }
        on('beforeInit', () => {
            liveRegion = createElement('span', swiper.params.a11y.notificationClass);
            liveRegion.setAttribute('aria-live', 'assertive');
            liveRegion.setAttribute('aria-atomic', 'true');
        });
        on('afterInit', () => {
            if (!swiper.params.a11y.enabled) return;
            init();
        });
        on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
            if (!swiper.params.a11y.enabled) return;
            initSlides();
        });
        on('fromEdge toEdge afterInit lock unlock', () => {
            if (!swiper.params.a11y.enabled) return;
            updateNavigation();
        });
        on('paginationUpdate', () => {
            if (!swiper.params.a11y.enabled) return;
            updatePagination();
        });
        on('destroy', () => {
            if (!swiper.params.a11y.enabled) return;
            destroy();
        });
    }

    function History(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            history: {
                enabled: false,
                root: '',
                replaceState: false,
                key: 'slides',
                keepQuery: false
            }
        });
        let initialized = false;
        let paths = {};
        const slugify = text => {
            return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
        };
        const getPathValues = urlOverride => {
            const window = getWindow();
            let location;
            if (urlOverride) {
                location = new URL(urlOverride);
            } else {
                location = window.location;
            }
            const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
            const total = pathArray.length;
            const key = pathArray[total - 2];
            const value = pathArray[total - 1];
            return {
                key,
                value
            };
        };
        const setHistory = (key, index) => {
            const window = getWindow();
            if (!initialized || !swiper.params.history.enabled) return;
            let location;
            if (swiper.params.url) {
                location = new URL(swiper.params.url);
            } else {
                location = window.location;
            }
            const slide = swiper.slides[index];
            let value = slugify(slide.getAttribute('data-history'));
            if (swiper.params.history.root.length > 0) {
                let root = swiper.params.history.root;
                if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
                value = `${root}/${key ? `${key}/` : ''}${value}`;
            } else if (!location.pathname.includes(key)) {
                value = `${key ? `${key}/` : ''}${value}`;
            }
            if (swiper.params.history.keepQuery) {
                value += location.search;
            }
            const currentState = window.history.state;
            if (currentState && currentState.value === value) {
                return;
            }
            if (swiper.params.history.replaceState) {
                window.history.replaceState({
                    value
                }, null, value);
            } else {
                window.history.pushState({
                    value
                }, null, value);
            }
        };
        const scrollToSlide = (speed, value, runCallbacks) => {
            if (value) {
                for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                    const slide = swiper.slides[i];
                    const slideHistory = slugify(slide.getAttribute('data-history'));
                    if (slideHistory === value) {
                        const index = swiper.getSlideIndex(slide);
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        };
        const setHistoryPopState = () => {
            paths = getPathValues(swiper.params.url);
            scrollToSlide(swiper.params.speed, paths.value, false);
        };
        const init = () => {
            const window = getWindow();
            if (!swiper.params.history) return;
            if (!window.history || !window.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }
            initialized = true;
            paths = getPathValues(swiper.params.url);
            if (!paths.key && !paths.value) {
                if (!swiper.params.history.replaceState) {
                    window.addEventListener('popstate', setHistoryPopState);
                }
                return;
            }
            scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
            if (!swiper.params.history.replaceState) {
                window.addEventListener('popstate', setHistoryPopState);
            }
        };
        const destroy = () => {
            const window = getWindow();
            if (!swiper.params.history.replaceState) {
                window.removeEventListener('popstate', setHistoryPopState);
            }
        };
        on('init', () => {
            if (swiper.params.history.enabled) {
                init();
            }
        });
        on('destroy', () => {
            if (swiper.params.history.enabled) {
                destroy();
            }
        });
        on('transitionEnd _freeModeNoMomentumRelease', () => {
            if (initialized) {
                setHistory(swiper.params.history.key, swiper.activeIndex);
            }
        });
        on('slideChange', () => {
            if (initialized && swiper.params.cssMode) {
                setHistory(swiper.params.history.key, swiper.activeIndex);
            }
        });
    }

    function HashNavigation(_ref) {
        let {
            swiper,
            extendParams,
            emit,
            on
        } = _ref;
        let initialized = false;
        const document = getDocument();
        const window = getWindow();
        extendParams({
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false,
                getSlideIndex(_s, hash) {
                    if (swiper.virtual && swiper.params.virtual.enabled) {
                        const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
                        if (!slideWithHash) return 0;
                        const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
                        return index;
                    }
                    return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
                }
            }
        });
        const onHashChange = () => {
            emit('hashChange');
            const newHash = document.location.hash.replace('#', '');
            const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
            const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
            if (newHash !== activeSlideHash) {
                const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
                if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
                swiper.slideTo(newIndex);
            }
        };
        const setHash = () => {
            if (!initialized || !swiper.params.hashNavigation.enabled) return;
            const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
            const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
            if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                window.history.replaceState(null, null, `#${activeSlideHash}` || '');
                emit('hashSet');
            } else {
                document.location.hash = activeSlideHash || '';
                emit('hashSet');
            }
        };
        const init = () => {
            if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
            initialized = true;
            const hash = document.location.hash.replace('#', '');
            if (hash) {
                const speed = 0;
                const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
                swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
            }
            if (swiper.params.hashNavigation.watchState) {
                window.addEventListener('hashchange', onHashChange);
            }
        };
        const destroy = () => {
            if (swiper.params.hashNavigation.watchState) {
                window.removeEventListener('hashchange', onHashChange);
            }
        };
        on('init', () => {
            if (swiper.params.hashNavigation.enabled) {
                init();
            }
        });
        on('destroy', () => {
            if (swiper.params.hashNavigation.enabled) {
                destroy();
            }
        });
        on('transitionEnd _freeModeNoMomentumRelease', () => {
            if (initialized) {
                setHash();
            }
        });
        on('slideChange', () => {
            if (initialized && swiper.params.cssMode) {
                setHash();
            }
        });
    }

    /* eslint no-underscore-dangle: "off" */
    /* eslint no-use-before-define: "off" */
    function Autoplay(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit,
            params
        } = _ref;
        swiper.autoplay = {
            running: false,
            paused: false,
            timeLeft: 0
        };
        extendParams({
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false,
                pauseOnMouseEnter: false
            }
        });
        let timeout;
        let raf;
        let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
        let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
        let autoplayTimeLeft;
        let autoplayStartTime = new Date().getTime;
        let wasPaused;
        let isTouched;
        let pausedByTouch;
        let touchStartTimeout;
        let slideChanged;
        let pausedByInteraction;
        function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
            if (e.target !== swiper.wrapperEl) return;
            swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
            resume();
        }
        const calcTimeLeft = () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (swiper.autoplay.paused) {
                wasPaused = true;
            } else if (wasPaused) {
                autoplayDelayCurrent = autoplayTimeLeft;
                wasPaused = false;
            }
            const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
            swiper.autoplay.timeLeft = timeLeft;
            emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
            raf = requestAnimationFrame(() => {
                calcTimeLeft();
            });
        };
        const getSlideDelay = () => {
            let activeSlideEl;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
            } else {
                activeSlideEl = swiper.slides[swiper.activeIndex];
            }
            if (!activeSlideEl) return undefined;
            const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
            return currentSlideDelay;
        };
        const run = delayForce => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            cancelAnimationFrame(raf);
            calcTimeLeft();
            let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
            autoplayDelayTotal = swiper.params.autoplay.delay;
            autoplayDelayCurrent = swiper.params.autoplay.delay;
            const currentSlideDelay = getSlideDelay();
            if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
                delay = currentSlideDelay;
                autoplayDelayTotal = currentSlideDelay;
                autoplayDelayCurrent = currentSlideDelay;
            }
            autoplayTimeLeft = delay;
            const speed = swiper.params.speed;
            const proceed = () => {
                if (!swiper || swiper.destroyed) return;
                if (swiper.params.autoplay.reverseDirection) {
                    if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                        swiper.slidePrev(speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                        emit('autoplay');
                    }
                } else {
                    if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit('autoplay');
                    }
                }
                if (swiper.params.cssMode) {
                    autoplayStartTime = new Date().getTime();
                    requestAnimationFrame(() => {
                        run();
                    });
                }
            };
            if (delay > 0) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    proceed();
                }, delay);
            } else {
                requestAnimationFrame(() => {
                    proceed();
                });
            }

            // eslint-disable-next-line
            return delay;
        };
        const start = () => {
            swiper.autoplay.running = true;
            run();
            emit('autoplayStart');
        };
        const stop = () => {
            swiper.autoplay.running = false;
            clearTimeout(timeout);
            cancelAnimationFrame(raf);
            emit('autoplayStop');
        };
        const pause = (internal, reset) => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            clearTimeout(timeout);
            if (!internal) {
                pausedByInteraction = true;
            }
            const proceed = () => {
                emit('autoplayPause');
                if (swiper.params.autoplay.waitForTransition) {
                    swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
                } else {
                    resume();
                }
            };
            swiper.autoplay.paused = true;
            if (reset) {
                if (slideChanged) {
                    autoplayTimeLeft = swiper.params.autoplay.delay;
                }
                slideChanged = false;
                proceed();
                return;
            }
            const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
            autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
            if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
            proceed();
        };
        const resume = () => {
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
            autoplayStartTime = new Date().getTime();
            if (pausedByInteraction) {
                pausedByInteraction = false;
                run(autoplayTimeLeft);
            } else {
                run();
            }
            swiper.autoplay.paused = false;
            emit('autoplayResume');
        };
        const onVisibilityChange = () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            const document = getDocument();
            if (document.visibilityState === 'hidden') {
                pausedByInteraction = true;
                pause(true);
            }
            if (document.visibilityState === 'visible') {
                resume();
            }
        };
        const onPointerEnter = e => {
            if (e.pointerType !== 'mouse') return;
            pausedByInteraction = true;
            if (swiper.animating || swiper.autoplay.paused) return;
            pause(true);
        };
        const onPointerLeave = e => {
            if (e.pointerType !== 'mouse') return;
            if (swiper.autoplay.paused) {
                resume();
            }
        };
        const attachMouseEvents = () => {
            if (swiper.params.autoplay.pauseOnMouseEnter) {
                swiper.el.addEventListener('pointerenter', onPointerEnter);
                swiper.el.addEventListener('pointerleave', onPointerLeave);
            }
        };
        const detachMouseEvents = () => {
            swiper.el.removeEventListener('pointerenter', onPointerEnter);
            swiper.el.removeEventListener('pointerleave', onPointerLeave);
        };
        const attachDocumentEvents = () => {
            const document = getDocument();
            document.addEventListener('visibilitychange', onVisibilityChange);
        };
        const detachDocumentEvents = () => {
            const document = getDocument();
            document.removeEventListener('visibilitychange', onVisibilityChange);
        };
        on('init', () => {
            if (swiper.params.autoplay.enabled) {
                attachMouseEvents();
                attachDocumentEvents();
                autoplayStartTime = new Date().getTime();
                start();
            }
        });
        on('destroy', () => {
            detachMouseEvents();
            detachDocumentEvents();
            if (swiper.autoplay.running) {
                stop();
            }
        });
        on('beforeTransitionStart', (_s, speed, internal) => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (internal || !swiper.params.autoplay.disableOnInteraction) {
                pause(true, true);
            } else {
                stop();
            }
        });
        on('sliderFirstMove', () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (swiper.params.autoplay.disableOnInteraction) {
                stop();
                return;
            }
            isTouched = true;
            pausedByTouch = false;
            pausedByInteraction = false;
            touchStartTimeout = setTimeout(() => {
                pausedByInteraction = true;
                pausedByTouch = true;
                pause(true);
            }, 200);
        });
        on('touchEnd', () => {
            if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
            clearTimeout(touchStartTimeout);
            clearTimeout(timeout);
            if (swiper.params.autoplay.disableOnInteraction) {
                pausedByTouch = false;
                isTouched = false;
                return;
            }
            if (pausedByTouch && swiper.params.cssMode) resume();
            pausedByTouch = false;
            isTouched = false;
        });
        on('slideChange', () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            slideChanged = true;
        });
        Object.assign(swiper.autoplay, {
            start,
            stop,
            pause,
            resume
        });
    }

    function Thumb(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: true,
                autoScrollOffset: 0,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-thumbs'
            }
        });
        let initialized = false;
        let swiperCreated = false;
        swiper.thumbs = {
            swiper: null
        };
        function onThumbClick() {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            const clickedIndex = thumbsSwiper.clickedIndex;
            const clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
            let slideToIndex;
            if (thumbsSwiper.params.loop) {
                slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
            } else {
                slideToIndex = clickedIndex;
            }
            if (swiper.params.loop) {
                swiper.slideToLoop(slideToIndex);
            } else {
                swiper.slideTo(slideToIndex);
            }
        }
        function init() {
            const {
                thumbs: thumbsParams
            } = swiper.params;
            if (initialized) return false;
            initialized = true;
            const SwiperClass = swiper.constructor;
            if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                Object.assign(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                Object.assign(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                swiper.thumbs.swiper.update();
            } else if (isObject(thumbsParams.swiper)) {
                const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                Object.assign(thumbsSwiperParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                swiperCreated = true;
            }
            swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on('tap', onThumbClick);
            return true;
        }
        function update(initial) {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

            // Activate thumbs
            let thumbsToActivate = 1;
            const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                thumbsToActivate = swiper.params.slidesPerView;
            }
            if (!swiper.params.thumbs.multipleActiveThumbs) {
                thumbsToActivate = 1;
            }
            thumbsToActivate = Math.floor(thumbsToActivate);
            thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
            if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
                for (let i = 0; i < thumbsToActivate; i += 1) {
                    elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
                        slideEl.classList.add(thumbActiveClass);
                    });
                }
            } else {
                for (let i = 0; i < thumbsToActivate; i += 1) {
                    if (thumbsSwiper.slides[swiper.realIndex + i]) {
                        thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
                    }
                }
            }
            const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
            const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
            if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                const currentThumbsIndex = thumbsSwiper.activeIndex;
                let newThumbsIndex;
                let direction;
                if (thumbsSwiper.params.loop) {
                    const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
                    newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                    direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
                } else {
                    newThumbsIndex = swiper.realIndex;
                    direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
                }
                if (useOffset) {
                    newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
                }
                if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) {
                        if (newThumbsIndex > currentThumbsIndex) {
                            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                        } else {
                            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                        }
                    } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
            }
        }
        on('beforeInit', () => {
            const {
                thumbs
            } = swiper.params;
            if (!thumbs || !thumbs.swiper) return;
            if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
                const document = getDocument();
                const getThumbsElementAndInit = () => {
                    const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                    if (thumbsElement && thumbsElement.swiper) {
                        thumbs.swiper = thumbsElement.swiper;
                        init();
                        update(true);
                    } else if (thumbsElement) {
                        const onThumbsSwiper = e => {
                            thumbs.swiper = e.detail[0];
                            thumbsElement.removeEventListener('init', onThumbsSwiper);
                            init();
                            update(true);
                            thumbs.swiper.update();
                            swiper.update();
                        };
                        thumbsElement.addEventListener('init', onThumbsSwiper);
                    }
                    return thumbsElement;
                };
                const watchForThumbsToAppear = () => {
                    if (swiper.destroyed) return;
                    const thumbsElement = getThumbsElementAndInit();
                    if (!thumbsElement) {
                        requestAnimationFrame(watchForThumbsToAppear);
                    }
                };
                requestAnimationFrame(watchForThumbsToAppear);
            } else {
                init();
                update(true);
            }
        });
        on('slideChange update resize observerUpdate', () => {
            update();
        });
        on('setTransition', (_s, duration) => {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            thumbsSwiper.setTransition(duration);
        });
        on('beforeDestroy', () => {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            if (swiperCreated) {
                thumbsSwiper.destroy();
            }
        });
        Object.assign(swiper.thumbs, {
            init,
            update
        });
    }

    function freeMode(_ref) {
        let {
            swiper,
            extendParams,
            emit,
            once
        } = _ref;
        extendParams({
            freeMode: {
                enabled: false,
                momentum: true,
                momentumRatio: 1,
                momentumBounce: true,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: false,
                minimumVelocity: 0.02
            }
        });
        function onTouchStart() {
            if (swiper.params.cssMode) return;
            const translate = swiper.getTranslate();
            swiper.setTranslate(translate);
            swiper.setTransition(0);
            swiper.touchEventsData.velocities.length = 0;
            swiper.freeMode.onTouchEnd({
                currentPos: swiper.rtl ? swiper.translate : -swiper.translate
            });
        }
        function onTouchMove() {
            if (swiper.params.cssMode) return;
            const {
                touchEventsData: data,
                touches
            } = swiper;
            // Velocity
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime
                });
            }
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: now()
            });
        }
        function onTouchEnd(_ref2) {
            let {
                currentPos
            } = _ref2;
            if (swiper.params.cssMode) return;
            const {
                params,
                wrapperEl,
                rtlTranslate: rtl,
                snapGrid,
                touchEventsData: data
            } = swiper;
            // Time diff
            const touchEndTime = now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }
                return;
            }
            if (params.freeMode.momentum) {
                if (data.velocities.length > 1) {
                    const lastMoveEvent = data.velocities.pop();
                    const velocityEvent = data.velocities.pop();
                    const distance = lastMoveEvent.position - velocityEvent.position;
                    const time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;
                    if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
                        swiper.velocity = 0;
                    }
                    // this implies that the user stopped moving a finger then released.
                    // There would be no events with distance zero, so the last event is stale.
                    if (time > 150 || now() - lastMoveEvent.time > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }
                swiper.velocity *= params.freeMode.momentumVelocityRatio;
                data.velocities.length = 0;
                let momentumDuration = 1000 * params.freeMode.momentumRatio;
                const momentumDistance = swiper.velocity * momentumDuration;
                let newPosition = swiper.translate + momentumDistance;
                if (rtl) newPosition = -newPosition;
                let doBounce = false;
                let afterBouncePosition;
                const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
                let needsLoopFix;
                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeMode.momentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }
                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }
                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeMode.momentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }
                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }
                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (params.freeMode.sticky) {
                    let nextSlide;
                    for (let j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }
                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }
                    newPosition = -newPosition;
                }
                if (needsLoopFix) {
                    once('transitionEnd', () => {
                        swiper.loopFix();
                    });
                }
                // Fix duration
                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }
                    if (params.freeMode.sticky) {
                        // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                        // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                        // It's easy to see this when simulating touch with mouse events. To fix this,
                        // limit single-slide swipes to the default slide duration. This also has the
                        // nice side effect of matching slide speed if the user stopped moving before
                        // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                        // For faster swipes, also apply limits (albeit higher ones).
                        const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                        const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                        if (moveDistance < currentSlideSize) {
                            momentumDuration = params.speed;
                        } else if (moveDistance < 2 * currentSlideSize) {
                            momentumDuration = params.speed * 1.5;
                        } else {
                            momentumDuration = params.speed * 2.5;
                        }
                    }
                } else if (params.freeMode.sticky) {
                    swiper.slideToClosest();
                    return;
                }
                if (params.freeMode.momentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    elementTransitionEnd(wrapperEl, () => {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                        emit('momentumBounce');
                        swiper.setTransition(params.speed);
                        setTimeout(() => {
                            swiper.setTranslate(afterBouncePosition);
                            elementTransitionEnd(wrapperEl, () => {
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            });
                        }, 0);
                    });
                } else if (swiper.velocity) {
                    emit('_freeModeNoMomentumRelease');
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    if (!swiper.animating) {
                        swiper.animating = true;
                        elementTransitionEnd(wrapperEl, () => {
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            } else if (params.freeMode) {
                emit('_freeModeNoMomentumRelease');
            }
            if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
        }
        Object.assign(swiper, {
            freeMode: {
                onTouchStart,
                onTouchMove,
                onTouchEnd
            }
        });
    }

    function Grid(_ref) {
        let {
            swiper,
            extendParams
        } = _ref;
        extendParams({
            grid: {
                rows: 1,
                fill: 'column'
            }
        });
        let slidesNumberEvenToRows;
        let slidesPerRow;
        let numFullColumns;
        const getSpaceBetween = () => {
            let spaceBetween = swiper.params.spaceBetween;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
            } else if (typeof spaceBetween === 'string') {
                spaceBetween = parseFloat(spaceBetween);
            }
            return spaceBetween;
        };
        const initSlides = slidesLength => {
            const {
                slidesPerView
            } = swiper.params;
            const {
                rows,
                fill
            } = swiper.params.grid;
            numFullColumns = Math.floor(slidesLength / rows);
            if (Math.floor(slidesLength / rows) === slidesLength / rows) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
            }
            if (slidesPerView !== 'auto' && fill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
            }
            slidesPerRow = slidesNumberEvenToRows / rows;
        };
        const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
            const {
                slidesPerGroup
            } = swiper.params;
            const spaceBetween = getSpaceBetween();
            const {
                rows,
                fill
            } = swiper.params.grid;
            // Set slides order
            let newSlideOrderIndex;
            let column;
            let row;
            if (fill === 'row' && slidesPerGroup > 1) {
                const groupIndex = Math.floor(i / (slidesPerGroup * rows));
                const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
                const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
                row = Math.floor(slideIndexInGroup / columnsInGroup);
                column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
                newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
                slide.style.order = newSlideOrderIndex;
            } else if (fill === 'column') {
                column = Math.floor(i / rows);
                row = i - column * rows;
                if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                    row += 1;
                    if (row >= rows) {
                        row = 0;
                        column += 1;
                    }
                }
            } else {
                row = Math.floor(i / slidesPerRow);
                column = i - row * slidesPerRow;
            }
            slide.row = row;
            slide.column = column;
            slide.style[getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
        };
        const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
            const {
                centeredSlides,
                roundLengths
            } = swiper.params;
            const spaceBetween = getSpaceBetween();
            const {
                rows
            } = swiper.params.grid;
            swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
            swiper.wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
            if (centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid.splice(0, snapGrid.length);
                snapGrid.push(...newSlidesGrid);
            }
        };
        swiper.grid = {
            initSlides,
            updateSlide,
            updateWrapperSize
        };
    }

    function appendSlide(slides) {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (params.loop) {
            swiper.loopDestroy();
        }
        const appendElement = slideEl => {
            if (typeof slideEl === 'string') {
                const tempDOM = document.createElement('div');
                tempDOM.innerHTML = slideEl;
                slidesEl.append(tempDOM.children[0]);
                tempDOM.innerHTML = '';
            } else {
                slidesEl.append(slideEl);
            }
        };
        if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) appendElement(slides[i]);
            }
        } else {
            appendElement(slides);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
    }

    function prependSlide(slides) {
        const swiper = this;
        const {
            params,
            activeIndex,
            slidesEl
        } = swiper;
        if (params.loop) {
            swiper.loopDestroy();
        }
        let newActiveIndex = activeIndex + 1;
        const prependElement = slideEl => {
            if (typeof slideEl === 'string') {
                const tempDOM = document.createElement('div');
                tempDOM.innerHTML = slideEl;
                slidesEl.prepend(tempDOM.children[0]);
                tempDOM.innerHTML = '';
            } else {
                slidesEl.prepend(slideEl);
            }
        };
        if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) prependElement(slides[i]);
            }
            newActiveIndex = activeIndex + slides.length;
        } else {
            prependElement(slides);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
        swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
        const swiper = this;
        const {
            params,
            activeIndex,
            slidesEl
        } = swiper;
        let activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.recalcSlides();
        }
        const baseLength = swiper.slides.length;
        if (index <= 0) {
            swiper.prependSlide(slides);
            return;
        }
        if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
        }
        let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
        const slidesBuffer = [];
        for (let i = baseLength - 1; i >= index; i -= 1) {
            const currentSlide = swiper.slides[i];
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
        }
        if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) slidesEl.append(slides[i]);
            }
            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else {
            slidesEl.append(slides);
        }
        for (let i = 0; i < slidesBuffer.length; i += 1) {
            slidesEl.append(slidesBuffer[i]);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeSlide(slidesIndexes) {
        const swiper = this;
        const {
            params,
            activeIndex
        } = swiper;
        let activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
        }
        let newActiveIndex = activeIndexBuffer;
        let indexToRemove;
        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (let i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            newActiveIndex = Math.max(newActiveIndex, 0);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeAllSlides() {
        const swiper = this;
        const slidesIndexes = [];
        for (let i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }
        swiper.removeSlide(slidesIndexes);
    }

    function Manipulation(_ref) {
        let {
            swiper
        } = _ref;
        Object.assign(swiper, {
            appendSlide: appendSlide.bind(swiper),
            prependSlide: prependSlide.bind(swiper),
            addSlide: addSlide.bind(swiper),
            removeSlide: removeSlide.bind(swiper),
            removeAllSlides: removeAllSlides.bind(swiper)
        });
    }

    function effectInit(params) {
        const {
            effect,
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams,
            perspective,
            recreateShadows,
            getEffectParams
        } = params;
        on('beforeInit', () => {
            if (swiper.params.effect !== effect) return;
            swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
            if (perspective && perspective()) {
                swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
            }
            const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
            Object.assign(swiper.params, overwriteParamsResult);
            Object.assign(swiper.originalParams, overwriteParamsResult);
        });
        on('setTranslate', () => {
            if (swiper.params.effect !== effect) return;
            setTranslate();
        });
        on('setTransition', (_s, duration) => {
            if (swiper.params.effect !== effect) return;
            setTransition(duration);
        });
        on('transitionEnd', () => {
            if (swiper.params.effect !== effect) return;
            if (recreateShadows) {
                if (!getEffectParams || !getEffectParams().slideShadows) return;
                // remove shadows
                swiper.slides.forEach(slideEl => {
                    slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
                });
                // create new one
                recreateShadows();
            }
        });
        let requireUpdateOnVirtual;
        on('virtualUpdate', () => {
            if (swiper.params.effect !== effect) return;
            if (!swiper.slides.length) {
                requireUpdateOnVirtual = true;
            }
            requestAnimationFrame(() => {
                if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                    setTranslate();
                    requireUpdateOnVirtual = false;
                }
            });
        });
    }

    function effectTarget(effectParams, slideEl) {
        const transformEl = getSlideTransformEl(slideEl);
        if (transformEl !== slideEl) {
            transformEl.style.backfaceVisibility = 'hidden';
            transformEl.style['-webkit-backface-visibility'] = 'hidden';
        }
        return transformEl;
    }

    function effectVirtualTransitionEnd(_ref) {
        let {
            swiper,
            duration,
            transformElements,
            allSlides
        } = _ref;
        const {
            activeIndex
        } = swiper;
        const getSlide = el => {
            if (!el.parentElement) {
                // assume shadow root
                const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
                return slide;
            }
            return el.parentElement;
        };
        if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false;
            let transitionEndTarget;
            if (allSlides) {
                transitionEndTarget = transformElements;
            } else {
                transitionEndTarget = transformElements.filter(transformEl => {
                    const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
                    return swiper.getSlideIndex(el) === activeIndex;
                });
            }
            transitionEndTarget.forEach(el => {
                elementTransitionEnd(el, () => {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    const evt = new window.CustomEvent('transitionend', {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                });
            });
        }
    }

    function EffectFade(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            fadeEffect: {
                crossFade: false
            }
        });
        const setTranslate = () => {
            const {
                slides
            } = swiper;
            const params = swiper.params.fadeEffect;
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = swiper.slides[i];
                const offset = slideEl.swiperSlideOffset;
                let tx = -offset;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }
                const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.opacity = slideOpacity;
                targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
            });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements,
                allSlides: true
            });
        };
        effectInit({
            effect: 'fade',
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }

    function EffectCube(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            }
        });
        const createSlideShadows = (slideEl, progress, isHorizontal) => {
            let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
            let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
            if (!shadowBefore) {
                shadowBefore = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
                slideEl.append(shadowBefore);
            }
            if (!shadowAfter) {
                shadowAfter = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
                slideEl.append(shadowAfter);
            }
            if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
            if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
        };
        const recreateShadows = () => {
            // create new ones
            const isHorizontal = swiper.isHorizontal();
            swiper.slides.forEach(slideEl => {
                const progress = Math.max(Math.min(slideEl.progress, 1), -1);
                createSlideShadows(slideEl, progress, isHorizontal);
            });
        };
        const setTranslate = () => {
            const {
                el,
                wrapperEl,
                slides,
                width: swiperWidth,
                height: swiperHeight,
                rtlTranslate: rtl,
                size: swiperSize,
                browser
            } = swiper;
            const params = swiper.params.cubeEffect;
            const isHorizontal = swiper.isHorizontal();
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let wrapperRotate = 0;
            let cubeShadowEl;
            if (params.shadow) {
                if (isHorizontal) {
                    cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
                    if (!cubeShadowEl) {
                        cubeShadowEl = createElement('div', 'swiper-cube-shadow');
                        swiper.wrapperEl.append(cubeShadowEl);
                    }
                    cubeShadowEl.style.height = `${swiperWidth}px`;
                } else {
                    cubeShadowEl = el.querySelector('.swiper-cube-shadow');
                    if (!cubeShadowEl) {
                        cubeShadowEl = createElement('div', 'swiper-cube-shadow');
                        el.append(cubeShadowEl);
                    }
                }
            }
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                let slideIndex = i;
                if (isVirtual) {
                    slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
                }
                let slideAngle = slideIndex * 90;
                let round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                const progress = Math.max(Math.min(slideEl.progress, 1), -1);
                let tx = 0;
                let ty = 0;
                let tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + round * 4 * swiperSize;
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = 3 * swiperSize + swiperSize * 4 * round;
                }
                if (rtl) {
                    tx = -tx;
                }
                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }
                const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = slideIndex * 90 + progress * 90;
                    if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }
                slideEl.style.transform = transform;
                if (params.slideShadows) {
                    createSlideShadows(slideEl, progress, isHorizontal);
                }
            }
            wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
            wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
            if (params.shadow) {
                if (isHorizontal) {
                    cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
                } else {
                    const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                    const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                    const scale1 = params.shadowScale;
                    const scale2 = params.shadowScale / multiplier;
                    const offset = params.shadowOffset;
                    cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
                }
            }
            const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
            wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
            wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
        };
        const setTransition = duration => {
            const {
                el,
                slides
            } = swiper;
            slides.forEach(slideEl => {
                slideEl.style.transitionDuration = `${duration}ms`;
                slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
                    subEl.style.transitionDuration = `${duration}ms`;
                });
            });
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                const shadowEl = el.querySelector('.swiper-cube-shadow');
                if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
            }
        };
        effectInit({
            effect: 'cube',
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: () => swiper.params.cubeEffect,
            perspective: () => true,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
        });
    }

    function createShadow(suffix, slideEl, side) {
        const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
        const shadowContainer = getSlideTransformEl(slideEl);
        let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
        if (!shadowEl) {
            shadowEl = createElement('div', shadowClass.split(' '));
            shadowContainer.append(shadowEl);
        }
        return shadowEl;
    }

    function EffectFlip(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            flipEffect: {
                slideShadows: true,
                limitRotation: true
            }
        });
        const createSlideShadows = (slideEl, progress) => {
            let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
            if (!shadowBefore) {
                shadowBefore = createShadow('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
            }
            if (!shadowAfter) {
                shadowAfter = createShadow('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
            }
            if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
            if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
        };
        const recreateShadows = () => {
            // Set shadows
            swiper.params.flipEffect;
            swiper.slides.forEach(slideEl => {
                let progress = slideEl.progress;
                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min(slideEl.progress, 1), -1);
                }
                createSlideShadows(slideEl, progress);
            });
        };
        const setTranslate = () => {
            const {
                slides,
                rtlTranslate: rtl
            } = swiper;
            const params = swiper.params.flipEffect;
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                let progress = slideEl.progress;
                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min(slideEl.progress, 1), -1);
                }
                const offset = slideEl.swiperSlideOffset;
                const rotate = -180 * progress;
                let rotateY = rotate;
                let rotateX = 0;
                let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) {
                    rotateY = -rotateY;
                }
                slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                if (params.slideShadows) {
                    createSlideShadows(slideEl, progress);
                }
                const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                });
            });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements
            });
        };
        effectInit({
            effect: 'flip',
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: () => swiper.params.flipEffect,
            perspective: () => true,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }

    function EffectCoverflow(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: true
            }
        });
        const setTranslate = () => {
            const {
                width: swiperWidth,
                height: swiperHeight,
                slides,
                slidesSizesGrid
            } = swiper;
            const params = swiper.params.coverflowEffect;
            const isHorizontal = swiper.isHorizontal();
            const transform = swiper.translate;
            const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
            const rotate = isHorizontal ? params.rotate : -params.rotate;
            const translate = params.depth;
            // Each slide offset from center
            for (let i = 0, length = slides.length; i < length; i += 1) {
                const slideEl = slides[i];
                const slideSize = slidesSizesGrid[i];
                const slideOffset = slideEl.swiperSlideOffset;
                const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
                const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
                let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                // var rotateZ = 0
                let translateZ = -translate * Math.abs(offsetMultiplier);
                let stretch = params.stretch;
                // Allow percentage to make a relative stretch for responsive sliders
                if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                    stretch = parseFloat(params.stretch) / 100 * slideSize;
                }
                let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

                // Fix for ultra small values
                if (Math.abs(translateX) < 0.001) translateX = 0;
                if (Math.abs(translateY) < 0.001) translateY = 0;
                if (Math.abs(translateZ) < 0.001) translateZ = 0;
                if (Math.abs(rotateY) < 0.001) rotateY = 0;
                if (Math.abs(rotateX) < 0.001) rotateX = 0;
                if (Math.abs(scale) < 0.001) scale = 0;
                const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = slideTransform;
                slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    // Set shadows
                    let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
                    let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
                    if (!shadowBeforeEl) {
                        shadowBeforeEl = createShadow('coverflow', slideEl, isHorizontal ? 'left' : 'top');
                    }
                    if (!shadowAfterEl) {
                        shadowAfterEl = createShadow('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
                    }
                    if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                });
            });
        };
        effectInit({
            effect: 'coverflow',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
                watchSlidesProgress: true
            })
        });
    }

    function EffectCreative(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: false,
                progressMultiplier: 1,
                perspective: true,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const getTranslateValue = value => {
            if (typeof value === 'string') return value;
            return `${value}px`;
        };
        const setTranslate = () => {
            const {
                slides,
                wrapperEl,
                slidesSizesGrid
            } = swiper;
            const params = swiper.params.creativeEffect;
            const {
                progressMultiplier: multiplier
            } = params;
            const isCenteredSlides = swiper.params.centeredSlides;
            if (isCenteredSlides) {
                const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
            }
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                const slideProgress = slideEl.progress;
                const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
                let originalProgress = progress;
                if (!isCenteredSlides) {
                    originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
                }
                const offset = slideEl.swiperSlideOffset;
                const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
                const r = [0, 0, 0];
                let custom = false;
                if (!swiper.isHorizontal()) {
                    t[1] = t[0];
                    t[0] = 0;
                }
                let data = {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    scale: 1,
                    opacity: 1
                };
                if (progress < 0) {
                    data = params.next;
                    custom = true;
                } else if (progress > 0) {
                    data = params.prev;
                    custom = true;
                }
                // set translate
                t.forEach((value, index) => {
                    t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
                });
                // set rotates
                r.forEach((value, index) => {
                    r[index] = data.rotate[index] * Math.abs(progress * multiplier);
                });
                slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const translateString = t.join(', ');
                const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
                const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
                const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
                const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

                // Set shadows
                if (custom && data.shadow || !custom) {
                    let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                    if (!shadowEl && data.shadow) {
                        shadowEl = createShadow('creative', slideEl);
                    }
                    if (shadowEl) {
                        const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                        shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                    }
                }
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
                targetEl.style.opacity = opacityString;
                if (data.origin) {
                    targetEl.style.transformOrigin = data.origin;
                }
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                });
            });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements,
                allSlides: true
            });
        };
        effectInit({
            effect: 'creative',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => swiper.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }

    function EffectCards(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            cardsEffect: {
                slideShadows: true,
                rotate: true,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        });
        const setTranslate = () => {
            const {
                slides,
                activeIndex,
                rtlTranslate: rtl
            } = swiper;
            const params = swiper.params.cardsEffect;
            const {
                startTranslate,
                isTouched
            } = swiper.touchEventsData;
            const currentTranslate = rtl ? -swiper.translate : swiper.translate;
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                const slideProgress = slideEl.progress;
                const progress = Math.min(Math.max(slideProgress, -4), 4);
                let offset = slideEl.swiperSlideOffset;
                if (swiper.params.centeredSlides && !swiper.params.cssMode) {
                    swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
                }
                if (swiper.params.centeredSlides && swiper.params.cssMode) {
                    offset -= slides[0].swiperSlideOffset;
                }
                let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let tY = 0;
                const tZ = -100 * Math.abs(progress);
                let scale = 1;
                let rotate = -params.perSlideRotate * progress;
                let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
                const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
                const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
                const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
                if (isSwipeToNext || isSwipeToPrev) {
                    const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                    rotate += -28 * progress * subProgress;
                    scale += -0.5 * subProgress;
                    tXAdd += 96 * subProgress;
                    tY = `${-25 * subProgress * Math.abs(progress)}%`;
                }
                if (progress < 0) {
                    // next
                    tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
                } else if (progress > 0) {
                    // prev
                    tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
                } else {
                    tX = `${tX}px`;
                }
                if (!swiper.isHorizontal()) {
                    const prevY = tY;
                    tY = tX;
                    tX = prevY;
                }
                const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

                /* eslint-disable */
                const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
                /* eslint-enable */

                if (params.slideShadows) {
                    // Set shadows
                    let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                    if (!shadowEl) {
                        shadowEl = createShadow('cards', slideEl);
                    }
                    if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
                }
                slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                });
            });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements
            });
        };
        effectInit({
            effect: 'cards',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }

    /**
     * Swiper 10.2.0
     * Most modern mobile touch slider and framework with hardware accelerated transitions
     * https://swiperjs.com
     *
     * Copyright 2014-2023 Vladimir Kharlampidi
     *
     * Released under the MIT License
     *
     * Released on: August 17, 2023
     */


        // Swiper Class
    const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
    Swiper.use(modules);

    return Swiper;

})();

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
const isMobileDevice = window.matchMedia("only screen and (max-width: 768px)").matches;



function calculate() {
    const tax = 15;
    const selectedCurrencyOption = document.querySelector('#currency option:checked');
    const rawRate = selectedCurrencyOption.getAttribute('data-faiz');

    const rate = rawRate == null ? 0 : parseFloat(rawRate);

    const brutFaizElement = document.getElementById('brut-faiz');
    brutFaizElement.textContent = `${rate} %`;
    


    const money = parseInt(document.querySelector('.amount').value.split('.').join(''));
    
    if ( isNaN(money) || money == undefined )
    {
        $("#amount-error").text('Lütfen geçerli bir değer giriniz.');
        return;
    }
    else
        $("#amount-error").text('');
        
    const due = parseInt(document.querySelector('.day').value);
    const currency_rate = parseFloat(document.querySelector('#currency').value);
    const currency_lbl = document.querySelector('#currency').selectedOptions[0].text;

    let brut_getiri = Math.round(((money * Math.pow((1 + (rate / 100) / 366), due)) - money) * 100) / 100;
    let vergi = Math.round((brut_getiri * currency_rate) * 100) / 100;
    let net_getiri = brut_getiri - vergi;
    let donem_sonu_deger = (money + brut_getiri) - vergi;
    
    
    let fix_amount_text = formatNumber(parseFloat(donem_sonu_deger.toFixed(2)));
    let amount_last_digits = fix_amount_text.substring(fix_amount_text.length - 2); 
    fix_amount_text = fix_amount_text.substring(0, fix_amount_text.length - 2);
    
    document.querySelector(".gross_return").textContent = formatNumber(parseFloat(brut_getiri.toFixed(2))) + ` ${currency_lbl}`;
    document.querySelector(".net_income").textContent = formatNumber(parseFloat(net_getiri.toFixed(2))) + ` ${currency_lbl}`;
    document.querySelector(".tax").textContent = formatNumber(parseFloat(vergi.toFixed(2))) + ` ${currency_lbl}`;
    document.querySelector(".fix-amount").innerHTML = `${fix_amount_text}<!----><span class="digit-small">${amount_last_digits}</span>  ${currency_lbl}`;

    $('.calc-content, .fix-amount-box').removeClass('d-none');
}
function formatter(number) {
    number += '';
    var x = number.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }

    return x1 + x2;
}
function parseLocalizedFloat(numberString) {
    return parseFloat(numberString.replace(',', '.'));
}
function formatNumber(number) {
    const parts = number.toFixed(2).toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
}

$(document).ready(function () {
    
    if ( $('table').length )
    {
        $('table').wrap('<div class="table-responsive"></div>');
    }
    
    // browser scroll event
    // $(window).scroll(function () {
    //
    //     if ( $(this).scrollTop() > 50 ) {
    //         $('.menu-wrapper').addClass('fixed-menu');
    //         if ( isMobileDevice )
    //             $('.fixed-menu').css({
    //                 "background-color": "#fff",
    //                 "height": "122px"
    //             });
    //         // $('.home-banner').addClass('pt-120');
    //         // $('.mobile-secondary').addClass('pb-3');
    //     } else {
    //         if ( isMobileDevice )
    //             $('.fixed-menu').css({ "background-color": "", "height": "" });
    //         $('.menu-wrapper').removeClass('fixed-menu');
    //         $('.home-banner').removeClass('pt-120');
    //         $('.mobile-secondary').removeClass('pb-3');
    //     }
    // });

    // Sayfa yolu alınır
    const currentPageUrl = location.href;
    const pathName = location.pathname;
    let isSubMenuOpen = false;
    let isMegaMenuOpen = false;
    
    if ( pathName === "/" )
    {
        $('.top-menu a:first').parent().addClass('active');
    }

    $( ".menu-middle-wrapper" ).on("mouseover", function() {
        if ( isMegaMenuOpen )
        {
            $(".menu-sub-wrapper").addClass('d-none');
            $(".mega-menu-wrapper").addClass('d-none');
            $(".mega-menu-boxes-area div.col-4[menu-id]").addClass('d-none');
        }
    });

    $( ".top-menu li" ).on( "mouseover", function() {
        $('.top-menu li').removeClass('hover-active');
        const $this = $(this);
        const key = $this.find('a').data("key");

        $(".menu-sub li").addClass('d-none');
        $(`.menu-sub li[data-parent="${key}"]`).removeClass('d-none');

        $('.menu-sub-wrapper').removeClass('d-none');
        isSubMenuOpen = true;
        isMegaMenuOpen = false;
        $(".mega-menu-wrapper").addClass('d-none');
        $(".mega-menu-boxes-area div.col-4[menu-id]").addClass('d-none');

        $('.overlay').removeClass('d-none');

    } );

    $( ".menu-head" ).on( "mouseleave", function () {
        if ( isSubMenuOpen && !isMegaMenuOpen )
        {
            isSubMenuOpen = false;
            $('.hover-active').removeClass('hover-active');
            $(".menu-sub-wrapper").addClass('d-none');
            $('.overlay').addClass('d-none');
        }
    });

    $(".menu-sub-link a").on( "mouseover", function () {
        
        $('.menu-sub-link').removeClass('hover-active');
        $(this).parent().addClass('hover-active');
        const parent = $(this).parent().data('parent');
        const key = $(this).parent().data("key");
        const items = $(`.mega-menu-boxes-area div.col-4[menu-id="${key}"]`);
        const cta_items = $(`.cta-img[menu-cta-id="${key}"]`);
        $('.mega-menu-show-more-btn').addClass('d-none');
        
        $(`.cta-img[menu-cta-id]`).addClass('d-none');

        $(`.mega-menu-boxes-area div.col-3[menu-id]`).removeClass('col-3').addClass('col-4');
        $('.mega-menu-end').find('div.col-3').removeClass('col-3').addClass('col-4');
        $('.mega-menu-items-wrapper').removeClass('col-12').addClass('col-4');

        setTimeout(() => {
            const topActive = $('.top-menu li.hover-active a').data('key');
            if ( topActive != undefined )
            {
                $('.mega-menu-end').addClass('d-none');
                $('.mega-menu-end[data-menu="'+ topActive +'"]').removeClass('d-none');
            }
        }, 10);

        if ( items.length > 0 )
        {
            console.log(items.length);
            if ( items.length > 5 )
            {
                $('.top-menu li').removeClass('hover-active');
                $(`.top-menu a[data-key="${parent}"]`).parent().addClass('hover-active');
                $(".mega-menu-boxes-area div.col-4[menu-id]").addClass('d-none');
                
                let _items = items.slice(0,6);
                _items.removeClass('d-none');
                
                $('.mega-menu-show-more-btn').removeClass('d-none');
                // $(`.mega-menu-boxes-area div.col-4[menu-id="${key}"]`).removeClass('d-none');
                
                if ( cta_items.length )
                    cta_items.removeClass('d-none');
                
            }
            else
            {
                $('.top-menu li').removeClass('hover-active');
                $(`.top-menu a[data-key="${parent}"]`).parent().addClass('hover-active');
                $(".mega-menu-boxes-area div.col-4[menu-id]").addClass('d-none');
                $(`.mega-menu-boxes-area div.col-4[menu-id="${key}"]`).removeClass('d-none');
                isMegaMenuOpen = true;
                $(".mega-menu-wrapper").removeClass('d-none');

                if ( cta_items.length )
                {
                    cta_items.removeClass('d-none');
                }
                else
                {
                    items.removeClass('col-4').addClass('col-3');
                    $('.mega-menu-end:not(.d-none)').find('div.col-4').removeClass('col-4').addClass('col-3');
                    $('.mega-menu-items-wrapper').removeClass('col-4').addClass('col-12');
                }   
            }
        }
        else
        {
            isMegaMenuOpen = false;
            $(".mega-menu-wrapper").addClass('d-none');
            $(".mega-menu-boxes-area div.col-4[menu-id]").addClass('d-none');
        }
    });

    $(".mega-menu-show-more-btn").on('click', function() {
        return;
        const $this = $(this);
        const activeMenuId = $('.mega-menu-items-wrapper div.col-4:not(".d-none")').eq(0).attr('menu-id');
        const unopenedItems = $(`div.col-4[menu-id='${activeMenuId}'].d-none`);
        if ( unopenedItems.length >= 1 ) {
            unopenedItems.eq(0).removeClass('d-none');
            if ( $(`div.col-4[menu-id='${activeMenuId}'].d-none`).length == 0 )
                $this.addClass('d-none');
        }
        else
            $this.addClass('d-none');
    });
    
    $('.menu-sub-wrapper').on( "mouseleave", function() {
        setTimeout(() => {
            if ( $('.menu-sub-wrapper').hasClass('d-none') )
            {
                $('.overlay').addClass('d-none');
                $('.hover-active').removeClass('hover-active');
            }
        }, 1);
    });

    $(".mega-menu-wrapper").on( "mouseleave", function () {
        isMegaMenuOpen = false;
        $(".mega-menu-wrapper").addClass('d-none');
        $(".mega-menu-boxes-area div.col-4[menu-id]").addClass('d-none');

        if ( !document.querySelector('.menu-sub-wrapper').matches(":hover") )
        {
            $('.top-menu li').removeClass('hover-active');
            isSubMenuOpen = false;
            $('.hover-active').removeClass('hover-active');
            $(".menu-sub-wrapper").addClass('d-none');
            $('.overlay').addClass('d-none');
        }

    });

    $('.mega-menu-box').hover(
        function () {
            const key = $(this).parent().parent().attr('menu-id');
            $('.menu-sub-link').removeClass('active');
            $(`.menu-sub-link[data-key="${key}"]`).addClass('hover-active');
        },
        function () {}
    );

    $(".hamburger-icon").on('click', function () {
        const $this = $(this);
        $('.overlay').toggleClass('d-none');
        $(".mobile-menu-wrapper").toggleClass('d-none');
        $this.toggleClass('mbl-menu-is-active');

        if ( $this.hasClass('mbl-menu-is-active') )
            $this.find('img').attr('src', '/images/menu.svg');
        else
        {
            const activeBackBtn = $('.back-to-child-menu:not(.d-none)'), $parent = activeBackBtn.parent();
            $parent.removeClass('flex-column');
            $parent.children('ul').addClass('d-none');
            activeBackBtn.addClass('d-none');

            $('.mobile-menu-wrapper ul.second-menu').css('margin-top', '');
            $('li.second-level').removeClass('d-none');
            $('.open-third-menu').removeClass('d-none');
            $this.find('img').attr('src', '/images/hamburger-menu-icon.svg');
        }
            
    });

    $('.open-third-menu').on('click', function () {
        const $this = $(this), $parent = $this.parent();

        $this.addClass('d-none');
        $('li.second-level').addClass('d-none');


        $parent.removeClass('d-none');
        $parent.children('span.back-to-child-menu').removeClass('d-none');
        $parent.addClass('flex-column');
        $parent.children('ul').removeClass('d-none');
        $('.mobile-menu-wrapper ul.second-menu').css('margin-top', '0');
    });

    $('.back-to-child-menu').on('click', function () {
        const $this = $(this), $parent = $this.parent();

        $parent.removeClass('flex-column');
        $parent.children('ul').addClass('d-none');
        $this.addClass('d-none');

        $('.mobile-menu-wrapper ul.second-menu').css('margin-top', '');
        $('li.second-level').removeClass('d-none');
        $('.open-third-menu').removeClass('d-none');
    });

    const mblSearchCollapse = document.getElementById('mblCollapseSearch')
    mblSearchCollapse.addEventListener('show.bs.collapse', function () {
        $('.btn-menu-mobile').addClass('d-none');
    });
    mblSearchCollapse.addEventListener('hidden.bs.collapse', function () {
        $('.btn-menu-mobile').removeClass('d-none');
    });

    $('.first-level').on('click', function () {
        // Kullanıcının tıkladığı menü öğesinin indeksini alın
        var clickedIndex = $(this).index();

        // 1. w-50 first-level öğesine active class'ini ekle ve diğerlerinden kaldır
        $('.first-level').removeClass('active');
        $(this).addClass('active');

        // 1. w-50 first-level altındaki .second-menu'ye d-none ekleyin
        $('.first-level:eq(0) .second-menu').addClass('d-none');

        // 2. w-50 first-level altındaki .second-menu'dan d-none kaldırın
        $('.first-level:eq(1) .second-menu').removeClass('d-none');

        // Diğer .second-menu öğelerine d-none ekleyin
        $('.second-menu').not(':eq(' + clickedIndex + ')').addClass('d-none');
    });

    $('.first-level').on('click', function () {
        // Kullanıcının tıkladığı menü öğesinin indeksini alın
        var clickedIndex = $(this).index();

        // Tüm .first-level öğelerinden active class'ini kaldırın
        $('.first-level').removeClass('active');

        // Tıklanan .first-level öğesine active class'ini ekleyin
        $(this).addClass('active');

        // Tüm .second-menu öğelerine d-none ekleyin
        $('.second-menu').addClass('d-none');

        // Tıklanan .first-level öğesinin altındaki .second-menu öğesine d-none kaldırın
        $(this).find('.second-menu').removeClass('d-none');
    });
    
    // ==============================


    
    function showAllContent() {
        // var allContentTab = document.getElementById("tab-href-1745");
        //
        // if (allContentTab) {
        //     var sustainabilityTabContent = document.getElementById("tab-href-1746").innerHTML;
        //     var financeTabContent = document.getElementById("tab-href-1747").innerHTML;
        //     var dailyLifeTabContent = document.getElementById("tab-href-1748").innerHTML;
        //
        //     allContentTab.innerHTML = "";
        //     allContentTab.innerHTML = sustainabilityTabContent + financeTabContent + dailyLifeTabContent;
        //
        //     var rowElements = allContentTab.querySelectorAll(".row");
        //     rowElements.forEach(function(row) {
        //         row.style.paddingBottom = "50px";
        //     });
        // }
    }
    
    function shortenText(element) {
        var content = element.innerText;
        if (content.length > 94) {
            var substring = content.substring(0, 94);
            element.innerText = substring + "...";
        }
    }


    $(document).ready(function () {
        let currencyRate = 0.15; // currencyRate değişkenini tanımlıyorum

        const currencySelect = document.querySelector("#currency");
        const amount = document.querySelector("#amount");
        const inputSlider = document.querySelector(".due__range");
        const slideValue = document.querySelector(".range_tooltip");
        // const calcBtn = document.querySelector(".calc-btn");
        const dayInput = document.getElementById("day");

        if (currencySelect !== null) {
            currencySelect.addEventListener("change", function () {
                const selectedValue = currencySelect.value;
                currencyRate = parseFloat(selectedValue);
                calculate();
            });

            amount.addEventListener("input", function () {
                const $t = $(this);
                let unformatted = $t.val().trim().split(".").join("");
                $t.val($.number(unformatted, 0, ',', '.'));
                calculate();
            });

            inputSlider.addEventListener("input", function () {
                let value = inputSlider.value;
                document.querySelector('.day').value = value;
                slideValue.textContent = value;
                slideValue.style.left = (value - 20) + "px";
                slideValue.classList.add("show");
                calculate();
            });

            inputSlider.addEventListener("blur", function () {
                slideValue.classList.remove("show");
            });

            // calcBtn.addEventListener("click", function () {
            //     calculate();
            // });


            dayInput.addEventListener("input", function () {
                calculate();
            });
        }
    });

    showAllContent();

    const showMoreButton = document.querySelector(".js-show-more");
    if (showMoreButton != null) {
        const itemsToShowPerClick = 5;
        let visibleItemCount = itemsToShowPerClick;

        const shouldRunAccordion = showMoreButton && document.querySelectorAll(".accordion-item").length > itemsToShowPerClick;

        if (shouldRunAccordion) {
            const accordionItems = document.querySelectorAll(".accordion-item");
            const filteredAccordionItems = Array.from(accordionItems).filter(item => item !== null);

            function showNextItems() {
                const hiddenItems = filteredAccordionItems.slice(visibleItemCount);
                let itemsToShow = hiddenItems.splice(0, itemsToShowPerClick);
                if (itemsToShow.length === 0) {
                    showMoreButton.style.display = "none";
                    return;
                }
                itemsToShow.forEach(function (item) {
                    item.style.display = "block";
                });
                visibleItemCount += itemsToShow.length;
            }

            filteredAccordionItems.forEach(function (item, index) {
                if (index >= visibleItemCount) {
                    item.style.display = "none";
                }
            });

            showMoreButton.style.display = "block";
            showMoreButton.addEventListener("click", function (event) {
                event.preventDefault();
                showNextItems();
            });
        } else if (showMoreButton) {
            showMoreButton.style.display = "none";
        }
    }

    $('.collapse').on('shown.bs.collapse', function(e) {
        var $accordionItem = $(this).closest('.accordion-item');

        if ($accordionItem.hasClass('not')) {
            return;
        }

        var $openAccordions = $accordionItem.find('.collapse.show');

        if ($accordionItem.parents('.accordion-item').length > 0) {
            e.stopPropagation();
        }

        $('html,body').animate({
            scrollTop: $accordionItem.offset().top - 130
        }, 0);
    });

    if ($('.mySwiper.home-banner').length) {
        let swiper_home = new Swiper(".mySwiper.home-banner", {
            pagination: {
                el: ".swiper-pagination.homebanner",
                clickable: true
            },
            autoplay: {
                delay: 5000,
            },
            pauseOnMouseEnter: true,
            loop: true
        });
        $(".mySwiper.home-banner").hover(function() {
            swiper_home.autoplay.stop();
        }, function() {
            swiper_home.autoplay.start();
        });
    }

    if ($('.swiper-container-free-mode').length) {
        swiper_kur = new Swiper(".swiper-container-free-mode", {
            loop: true,
            autoplay: {
                delay: 0,
                enabled: true,
            },
            slidesPerView: 6, 
            spaceBetween: 16,
            speed: 1000, 
            grabCursor: true,
            mousewheelControl: true,
            keyboardControl: true,
            // breakpoints: {
            //     320: {
            //         slidesPerView: 2,
            //         spaceBetween: 14,
            //     },
            //     640: {
            //         slidesPerView: 3,
            //         spaceBetween: 14,
            //     },
            //     768: {
            //         slidesPerView: 4,
            //         spaceBetween: 16,
            //     },
            //     1024: {
            //         slidesPerView: 6,
            //         spaceBetween: 16,
            //     },
            //     1600: {
            //         slidesPerView: 6,
            //         spaceBetween: 20,
            //     }
            // }
        });
    }
    
    

    if ($('.mySwiper.firsatlar-slider').length) {
        let swiper_firsatlar = new Swiper(".mySwiper.firsatlar-slider", {
            loop: false,
            slidesPerView: 1.2,
            spaceBetween: 10,
            breakpoints: {
                640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            },
        });

    }

    if ($('.mySwiper.sigorta-icerikleri-banner').length) {
        let swiper_icerik = new Swiper(".mySwiper.sigorta-icerikleri-banner", {
            slidesPerView: 1.2,
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        });

    }

    if ($('.mySwiper.extra').length) {
        let swiper_extra = new Swiper(".mySwiper.extra", {
            slidesPerView: 1.5,
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        });
    }

    let buttons = document.querySelectorAll('.nav-link[data-href]');
    if ( buttons.length )
    {
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                var targetId = this.getAttribute('data-href');
                var targetDiv = document.querySelector(targetId);

                if (targetDiv) {
                    window.scrollTo({
                        top: targetDiv.offsetTop-300,
                        behavior: 'smooth'
                    });

                    var activeButtons = document.querySelectorAll('.nav-link.active');
                    activeButtons.forEach(function (activeButton) {
                        activeButton.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
    }

    let cardTextElements = document.querySelectorAll(".card-tab-text");
    if ( cardTextElements.length )
    {
        cardTextElements.forEach(function (element) {
            shortenText(element);
        });
    }

    let overlay = $('.overlay');
    let mobileMenuWrapper = $('.mobile-menu-wrapper');

// Hover olayıyla overlay'i kontrol etmek
    $('.nav-level-1, .nav-level-2, .menu-children').hover(
        function () {
            overlay.removeClass('d-none');
        },
        function () {
            overlay.addClass('d-none');
        }
    );

    let isInit = false;

    function currency() {
        const r = $('input[name="__RequestVerificationToken"]').val();
        $.post("/umbraco/surface/api/foreks/", { __RequestVerificationToken: r }, function (res) {
            const veriler = res;
            const orderedVeriler = orderData(veriler); // Verileri sırala
            $('.currency').html('');
            orderedVeriler.forEach(function (veri) {
                
                const iconPath = veri.DailyChange > 0 ? "/images/borsa-up.svg" : "/images/borsa-down.svg";
                const mappedTicker = currencyMaps[veri.Code] || veri.Code;
                const formattedLast = veri.Last.toLocaleString('tr-TR', { minimumFractionDigits: 3 });
                const formattedDailyChange = veri.DailyChange.toFixed(3);

                const html = `
                <div class="borsa-box d-flex flex-column justify-content-around align-items-start">
                    <p class="kuradi">${mappedTicker}</p>
                    <div class="d-flex anlik-kur align-items-center pb-3">
                        <p class="kur-fiyat mb-0">${formattedLast}</p>
                        <img src="${iconPath}" alt="">
                        <p class="kur-degisim mb-0">${formattedDailyChange}</p>
                    </div>
                </div>
            `;

                $('.currency').append(html);
            });
            if (!isInit) {
                Marquee3k.init();
                isInit = true;
            }
        }, "json");
    }

    function orderData(data) {
        const desiredOrder = [
            "USDTRY",
            "EURTRY",
            "GBPTRY",
            "EURUSD",
            "GBPUSD",
            "USDJPY",
            "XAUUSD",
            "GAUTRY",
            "XU100",
            "DOW30:CFD",
            "US500:CFD",
            "N100:CFD",
            "TAHVIL"
        ];

        return data.sort((a, b) => {
            const indexA = desiredOrder.indexOf(a.Code);
            const indexB = desiredOrder.indexOf(b.Code);

            if (indexA === -1 || indexB === -1) {
                return a.Code.localeCompare(b.Code);
            }

            return indexA - indexB;
        });
    }

    var currencyMaps = {
        USDCHF: "USD/CHF",
        "US500:CFD": "S&P 500",
        "DOW30:CFD": "DOW JONES",
        "N100:CFD": "NASDAQ 100",
        EURTRY: "EUR/TRY",
        USDTRY: "USD/TRY",
        XAUUSD: "ONS ALTIN",
        EURUSD: "EUR/USD",
        GAUTRY: "GRAM ALTIN",
        USDJPY: "USD/JPY",
        GBPUSD: "GBP/USD",
        TAHVIL: "Gösterge Bono",
        GBPTRY: "GBP/TRY"
    };

    if ($('.currency').length) {
        currency();
        setInterval(function () {
            currency();
        }, 2000);
    }
    
    $(".item-box-text-desc, .content-wrapper .sigorta-icerikleri-banner .card-text").each(function (index) {
        var element = $(this);
        var content = element.text();
        var substring = content.substring(0, 140);
        element.text(substring + "...");
    });
    
    $(".card-loans-text").each(function (index) {
        var element = $(this);
        var content = element.text();
        var substring = content.substring(0, 170);
        element.text(substring + "...");
    });


    $('.contact-btn').on('click', function () {
        const fullName = $('.fullName').val().trim();
        const surname = $('.surname').val().trim();
        const email = $('.Email').val().trim();
        const message = $('.message').val().trim();
        const csrfToken = $('input[name="__RequestVerificationToken"]').val();

        // Form alanlarının geçerli olup olmadığını kontrol et
        if (fullName === '' || surname === '' || email === '' || message === '') {
            Swal.fire({
                icon: 'error',
                title: 'Hata!',
                text: 'Lütfen tüm alanları doldurun.',
                confirmButtonText: 'Tamam'
            });
            return;
        }

        $.post('/umbraco/surface/contact/sendcontactrequest/', {
            FullName: fullName,
            Surname: surname,
            Email: email,
            message: message,
            __RequestVerificationToken: csrfToken
        }, function (data) {
            Swal.fire({
                icon: 'success',
                title: 'Başarılı!',
                text: 'İletişim talebiniz gönderildi.',
                confirmButtonText: 'Tamam'
            }).then(function () {
                $('#contactForm')[0].reset();
            });
        }, 'json');
    });
});

$(document).ready(function() {
    $('.video').click(function() {
        var popupYoutubeLink = $(this).find('.popup-youtube');
        if (popupYoutubeLink.length > 0) {
            popupYoutubeLink[0].click();
        }
    });

    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });
});
// var isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function () {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };
/**
 * MARQUEE 3000 MARQUEE 3000 MARQUEE 3000 MARQUEE 3000 MARQUEE 3000
 * http://github.com/ezekielaquino/marquee3000
 * Marquees for the new millennium v1.0
 * MIT License
 */

;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Marquee3k = factory();
  }
}(this, function() {
  'use strict';

  let animationId = 0;

  class Marquee3k {
    constructor(element, options) {

      if (element.children.length === 0) {
        throw new Error("Encountered a marquee element without children, please supply a wrapper for your content");
      }

      this.element = element;
      this.selector = options.selector;
      this.speed = element.dataset.speed || 0.25;
      this.pausable = element.dataset.pausable === 'true' ? true : false;
      this.reverse = element.dataset.reverse === 'true' ? true : false;
      this.paused = false;
      this.parent = element.parentElement;
      this.parentProps = this.parent.getBoundingClientRect();
      this.content = element.children[0];
      this.innerContent = this.content.innerHTML;
      this.wrapStyles = '';
      this.offset = 0;

      this._setupWrapper();
      this._setupContent();
      this._setupEvents();

      this.wrapper.appendChild(this.content);
      this.element.appendChild(this.wrapper);
    }

    _setupWrapper() {
      this.wrapper = document.createElement('div');
      this.wrapper.classList.add('marquee3k__wrapper');
      this.wrapper.style.whiteSpace = 'nowrap';
    }

    _setupContent() {
      this.content.classList.add(`${this.selector}__copy`);
      this.content.style.display = 'inline-block';
      this.contentWidth = this.content.offsetWidth;

      this.requiredReps = this.contentWidth > this.parentProps.width ? 2 : Math.ceil((this.parentProps.width - this.contentWidth) / this.contentWidth) + 1;

      for (let i = 0; i < this.requiredReps; i++) {
        this._createClone();
      }

      if (this.reverse) {
        this.offset = this.contentWidth * -1;
      }

      this.element.classList.add('is-init');
    }

    _setupEvents() {
      this.element.addEventListener('mouseenter', () => {
        if (this.pausable) this.paused = true;
      });

      this.element.addEventListener('mouseleave', () => {
        if (this.pausable) this.paused = false;
      });
    }

    _createClone() {
      const clone = this.content.cloneNode(true);
      clone.style.display = 'inline-block';
      clone.classList.add(`${this.selector}__copy`);
      this.wrapper.appendChild(clone);
    }

    animate() {
      if (!this.paused) {
        const isScrolled = this.reverse ? this.offset < 0 : this.offset > this.contentWidth * -1;
        const direction = this.reverse ? -1 : 1;
        const reset = this.reverse ? this.contentWidth * -1 : 0;

        if (isScrolled) this.offset -= this.speed * direction;
        else this.offset = reset;

        this.wrapper.style.whiteSpace = 'nowrap';
        this.wrapper.style.transform = `translate(${this.offset}px, 0) translateZ(0)`;
      }
    }

    _refresh() {
      this.contentWidth = this.content.offsetWidth;
    }

    repopulate(difference, isLarger) {
      this.contentWidth = this.content.offsetWidth;

      if (isLarger) {
        const amount = Math.ceil(difference / this.contentWidth) + 1;

        for (let i = 0; i < amount; i++) {
          this._createClone();
        }
      }
    }

    static refresh(index) {
      MARQUEES[index]._refresh();
    }

    static pause(index) {
      MARQUEES[index].paused = true;
    }

    static play(index) {
      MARQUEES[index].paused = false;
    }

    static toggle(index) {
      MARQUEES[index].paused = !MARQUEES[index].paused;
    }

    static refreshAll() {
      for (let i = 0; i < MARQUEES.length; i++) {
        MARQUEES[i]._refresh();
      }
    }

    static pauseAll() {
      for (let i = 0; i < MARQUEES.length; i++) {
        MARQUEES[i].paused = true;
      }
    }

    static playAll() {
      for (let i = 0; i < MARQUEES.length; i++) {
        MARQUEES[i].paused = false;
      }
    }

    static toggleAll() {
      for (let i = 0; i < MARQUEES.length; i++) {
        MARQUEES[i].paused = !MARQUEES[i].paused;
      }
    }

    static init(options = { selector: 'marquee3k' }) {
      if (animationId) window.cancelAnimationFrame(animationId);

      window.MARQUEES = [];
      const marquees = Array.from(document.querySelectorAll(`.${options.selector}`));
      let previousWidth = window.innerWidth;
      let timer;

      for (let i = 0; i < marquees.length; i++) {
        const marquee = marquees[i];
        const instance = new Marquee3k(marquee, options);
        MARQUEES.push(instance);
      }

      animate();

      function animate() {
        for (let i = 0; i < MARQUEES.length; i++) {
          MARQUEES[i].animate();
        }
        animationId = window.requestAnimationFrame(animate);
      }

      window.addEventListener('resize', () => {
        clearTimeout(timer);

        timer = setTimeout(() => {
          const isLarger = previousWidth < window.innerWidth;
          const difference = window.innerWidth - previousWidth;

          for (let i = 0; i < MARQUEES.length; i++) {
            MARQUEES[i].repopulate(difference, isLarger);
          }

          previousWidth = this.innerWidth;
        }, 250);
      });
    }
  }

  return Marquee3k;

}));
