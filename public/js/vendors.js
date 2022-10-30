!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, function () {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(i, n) {
        void 0 === i && (i = {}), void 0 === n && (n = {}), Object.keys(n).forEach(s => {
            void 0 === i[s] ? i[s] = n[s] : e(n[s]) && e(i[s]) && Object.keys(n[s]).length > 0 && t(i[s], n[s])
        })
    }

    const i = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function n() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, i), e
    }

    const s = {
        document: i,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, s), e
    }

    class a extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t, set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }

    function o(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach(e => {
            Array.isArray(e) ? t.push(...o(e)) : t.push(e)
        }), t
    }

    function l(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function c(e, t) {
        const i = r(), s = n();
        let o = [];
        if (!t && e instanceof a) return e;
        if (!e) return new a(o);
        if ("string" == typeof e) {
            const i = e.trim();
            if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
                let e = "div";
                0 === i.indexOf("<li") && (e = "ul"), 0 === i.indexOf("<tr") && (e = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (e = "tr"), 0 === i.indexOf("<tbody") && (e = "table"), 0 === i.indexOf("<option") && (e = "select");
                const t = s.createElement(e);
                t.innerHTML = i;
                for (let e = 0; e < t.childNodes.length; e += 1) o.push(t.childNodes[e])
            } else o = function (e, t) {
                if ("string" != typeof e) return [e];
                const i = [], n = t.querySelectorAll(e);
                for (let e = 0; e < n.length; e += 1) i.push(n[e]);
                return i
            }(e.trim(), t || s)
        } else if (e.nodeType || e === i || e === s) o.push(e); else if (Array.isArray(e)) {
            if (e instanceof a) return e;
            o = e
        }
        return new a(function (e) {
            const t = [];
            for (let i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }(o))
    }

    c.fn = a.prototype;
    const d = {
        addClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            const n = o(t.map(e => e.split(" ")));
            return this.forEach(e => {
                e.classList.add(...n)
            }), this
        }, removeClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            const n = o(t.map(e => e.split(" ")));
            return this.forEach(e => {
                e.classList.remove(...n)
            }), this
        }, hasClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            const n = o(t.map(e => e.split(" ")));
            return l(this, e => n.filter(t => e.classList.contains(t)).length > 0).length > 0
        }, toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            const n = o(t.map(e => e.split(" ")));
            this.forEach(e => {
                n.forEach(t => {
                    e.classList.toggle(t)
                })
            })
        }, attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(e, t); else for (const t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
            return this
        }, removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, transform: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        }, transition: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        }, on: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            let [n, s, r, a] = t;

            function o(e) {
                const t = e.target;
                if (!t) return;
                const i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e), c(t).is(s)) r.apply(t, i); else {
                    const e = c(t).parents();
                    for (let t = 0; t < e.length; t += 1) c(e[t]).is(s) && r.apply(e[t], i)
                }
            }

            function l(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }

            "function" == typeof t[1] && ([n, r, a] = t, s = void 0), a || (a = !1);
            const d = n.split(" ");
            let u;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (s) for (u = 0; u < d.length; u += 1) {
                    const e = d[u];
                    t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                        listener: r,
                        proxyListener: o
                    }), t.addEventListener(e, o, a)
                } else for (u = 0; u < d.length; u += 1) {
                    const e = d[u];
                    t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                        listener: r,
                        proxyListener: l
                    }), t.addEventListener(e, l, a)
                }
            }
            return this
        }, off: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            let [n, s, r, a] = t;
            "function" == typeof t[1] && ([n, r, a] = t, s = void 0), a || (a = !1);
            const o = n.split(" ");
            for (let e = 0; e < o.length; e += 1) {
                const t = o[e];
                for (let e = 0; e < this.length; e += 1) {
                    const i = this[e];
                    let n;
                    if (!s && i.dom7Listeners ? n = i.dom7Listeners[t] : s && i.dom7LiveListeners && (n = i.dom7LiveListeners[t]), n && n.length) for (let e = n.length - 1; e >= 0; e -= 1) {
                        const s = n[e];
                        r && s.listener === r || r && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === r ? (i.removeEventListener(t, s.proxyListener, a), n.splice(e, 1)) : r || (i.removeEventListener(t, s.proxyListener, a), n.splice(e, 1))
                    }
                }
            }
            return this
        }, trigger: function () {
            const e = r();
            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
            const s = i[0].split(" "), a = i[1];
            for (let t = 0; t < s.length; t += 1) {
                const n = s[t];
                for (let t = 0; t < this.length; t += 1) {
                    const s = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(n, {detail: a, bubbles: !0, cancelable: !0});
                        s.dom7EventData = i.filter((e, t) => t > 0), s.dispatchEvent(t), s.dom7EventData = [], delete s.dom7EventData
                    }
                }
            }
            return this
        }, transitionEnd: function (e) {
            const t = this;
            return e && t.on("transitionend", function i(n) {
                n.target === this && (e.call(this, n), t.off("transitionend", i))
            }), this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, styles: function () {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        }, offset: function () {
            if (this.length > 0) {
                const e = r(), t = n(), i = this[0], s = i.getBoundingClientRect(), a = t.body,
                    o = i.clientTop || a.clientTop || 0, l = i.clientLeft || a.clientLeft || 0,
                    c = i === e ? e.scrollY : i.scrollTop, d = i === e ? e.scrollX : i.scrollLeft;
                return {top: s.top + c - o, left: s.left + d - l}
            }
            return null
        }, css: function (e, t) {
            const i = r();
            let n;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1) for (const t in e) this[n].style[t] = e[t];
                    return this
                }
                if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            return e ? (this.forEach((t, i) => {
                e.apply(t, [t, i])
            }), this) : this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            const t = r(), i = n(), s = this[0];
            let o, l;
            if (!s || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (s.matches) return s.matches(e);
                if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                if (s.msMatchesSelector) return s.msMatchesSelector(e);
                for (o = c(e), l = 0; l < o.length; l += 1) if (o[l] === s) return !0;
                return !1
            }
            if (e === i) return s === i;
            if (e === t) return s === t;
            if (e.nodeType || e instanceof a) {
                for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1) if (o[l] === s) return !0;
                return !1
            }
            return !1
        }, index: function () {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return c([]);
            if (e < 0) {
                const i = t + e;
                return c(i < 0 ? [] : [this[i]])
            }
            return c([this[e]])
        }, append: function () {
            let e;
            const t = n();
            for (let i = 0; i < arguments.length; i += 1) {
                e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                for (let i = 0; i < this.length; i += 1) if ("string" == typeof e) {
                    const n = t.createElement("div");
                    for (n.innerHTML = e; n.firstChild;) this[i].appendChild(n.firstChild)
                } else if (e instanceof a) for (let t = 0; t < e.length; t += 1) this[i].appendChild(e[t]); else this[i].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            const t = n();
            let i, s;
            for (i = 0; i < this.length; i += 1) if ("string" == typeof e) {
                const n = t.createElement("div");
                for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1) this[i].insertBefore(n.childNodes[s], this[i].childNodes[0])
            } else if (e instanceof a) for (s = 0; s < e.length; s += 1) this[i].insertBefore(e[s], this[i].childNodes[0]); else this[i].insertBefore(e, this[i].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(e) ? c([this[0].nextElementSibling]) : c([]) : this[0].nextElementSibling ? c([this[0].nextElementSibling]) : c([]) : c([])
        }, nextAll: function (e) {
            const t = [];
            let i = this[0];
            if (!i) return c([]);
            for (; i.nextElementSibling;) {
                const n = i.nextElementSibling;
                e ? c(n).is(e) && t.push(n) : t.push(n), i = n
            }
            return c(t)
        }, prev: function (e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && c(t.previousElementSibling).is(e) ? c([t.previousElementSibling]) : c([]) : t.previousElementSibling ? c([t.previousElementSibling]) : c([])
            }
            return c([])
        }, prevAll: function (e) {
            const t = [];
            let i = this[0];
            if (!i) return c([]);
            for (; i.previousElementSibling;) {
                const n = i.previousElementSibling;
                e ? c(n).is(e) && t.push(n) : t.push(n), i = n
            }
            return c(t)
        }, parent: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? c(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return c(t)
        }, parents: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                let n = this[i].parentNode;
                for (; n;) e ? c(n).is(e) && t.push(n) : t.push(n), n = n.parentNode
            }
            return c(t)
        }, closest: function (e) {
            let t = this;
            return void 0 === e ? c([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const n = this[i].querySelectorAll(e);
                for (let e = 0; e < n.length; e += 1) t.push(n[e])
            }
            return c(t)
        }, children: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const n = this[i].children;
                for (let i = 0; i < n.length; i += 1) e && !c(n[i]).is(e) || t.push(n[i])
            }
            return c(t)
        }, filter: function (e) {
            return c(l(this, e))
        }, remove: function () {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function u(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function p() {
        return Date.now()
    }

    function h(e, t) {
        void 0 === t && (t = "x");
        const i = r();
        let n, s, a;
        const o = function (e) {
            const t = r();
            let i;
            return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
        }(e);
        return i.WebKitCSSMatrix ? ((s = o.transform || o.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new i.WebKitCSSMatrix("none" === s ? "" : s)) : n = (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = i.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (s = i.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), s || 0
    }

    function f(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function m(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }

    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
            const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
            if (null != n && !m(n)) {
                const i = Object.keys(Object(n)).filter(e => t.indexOf(e) < 0);
                for (let t = 0, s = i.length; t < s; t += 1) {
                    const s = i[t], r = Object.getOwnPropertyDescriptor(n, s);
                    void 0 !== r && r.enumerable && (f(e[s]) && f(n[s]) ? n[s].__swiper__ ? e[s] = n[s] : g(e[s], n[s]) : !f(e[s]) && f(n[s]) ? (e[s] = {}, n[s].__swiper__ ? e[s] = n[s] : g(e[s], n[s])) : e[s] = n[s])
                }
            }
        }
        return e
    }

    function v(e, t, i) {
        e.style.setProperty(t, i)
    }

    function y(e) {
        let {swiper: t, targetPosition: i, side: n} = e;
        const s = r(), a = -t.translate;
        let o, l = null;
        const c = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
        const d = i > a ? "next" : "prev", u = (e, t) => "next" === d && e >= t || "prev" === d && e <= t, p = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / c, 1), 0), r = .5 - Math.cos(e * Math.PI) / 2;
            let d = a + r * (i - a);
            if (u(d, i) && (d = i), t.wrapperEl.scrollTo({[n]: d}), u(d, i)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[n]: d})
            }), void s.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = s.requestAnimationFrame(p)
        };
        p()
    }

    let b, w, x;

    function S() {
        return b || (b = function () {
            const e = r(), t = n();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function () {
                    let t = !1;
                    try {
                        const i = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, i)
                    } catch (e) {
                    }
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), b
    }

    function E(e) {
        return void 0 === e && (e = {}), w || (w = function (e) {
            let {userAgent: t} = void 0 === e ? {} : e;
            const i = S(), n = r(), s = n.navigator.platform, a = t || n.navigator.userAgent,
                o = {ios: !1, android: !1}, l = n.screen.width, c = n.screen.height,
                d = a.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = a.match(/(iPad).*OS\s([\d_]+)/);
            const p = a.match(/(iPod)(.*OS\s([\d_]+))?/), h = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === s;
            let m = "MacIntel" === s;
            return !u && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && ((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), m = !1), d && !f && (o.os = "android", o.android = !0), (u || h || p) && (o.os = "ios", o.ios = !0), o
        }(e)), w
    }

    function T() {
        return x || (x = function () {
            const e = r();
            return {
                isSafari: function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), x
    }

    function _(e) {
        let {swiper: t, runCallbacks: i, direction: n, step: s} = e;
        const {activeIndex: r, previousIndex: a} = t;
        let o = n;
        if (o || (o = r > a ? "next" : r < a ? "prev" : "reset"), t.emit(`transition${s}`), i && r !== a) {
            if ("reset" === o) return void t.emit(`slideResetTransition${s}`);
            t.emit(`slideChangeTransition${s}`), "next" === o ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`)
        }
    }

    function C() {
        const e = this, {params: t, el: i} = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: n, allowSlidePrev: s, snapGrid: r} = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = n, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    Object.keys(d).forEach(e => {
        Object.defineProperty(c.fn, e, {value: d[e], writable: !0})
    });
    let M = !1;

    function k() {
    }

    const $ = (e, t) => {
        const i = n(), {params: s, touchEvents: r, el: a, wrapperEl: o, device: l, support: c} = e, d = !!s.nested,
            u = "on" === t ? "addEventListener" : "removeEventListener", p = t;
        if (c.touch) {
            const t = !("touchstart" !== r.start || !c.passiveListener || !s.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            a[u](r.start, e.onTouchStart, t), a[u](r.move, e.onTouchMove, c.passiveListener ? {
                passive: !1,
                capture: d
            } : d), a[u](r.end, e.onTouchEnd, t), r.cancel && a[u](r.cancel, e.onTouchEnd, t)
        } else a[u](r.start, e.onTouchStart, !1), i[u](r.move, e.onTouchMove, d), i[u](r.end, e.onTouchEnd, !1);
        (s.preventClicks || s.preventClicksPropagation) && a[u]("click", e.onClick, !0), s.cssMode && o[u]("scroll", e.onScroll), s.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C, !0) : e[p]("observerUpdate", C, !0)
    };
    const P = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var A = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function O(e, t) {
        return function (i) {
            void 0 === i && (i = {});
            const n = Object.keys(i)[0], s = i[n];
            "object" == typeof s && null !== s ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {auto: !0}), n in e && "enabled" in s ? (!0 === e[n] && (e[n] = {enabled: !0}), "object" != typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {enabled: !1}), g(t, i)) : g(t, i)) : g(t, i)
        }
    }

    const z = {
        eventsEmitter: {
            on(e, t, i) {
                const n = this;
                if (!n.eventsListeners || n.destroyed) return n;
                if ("function" != typeof t) return n;
                const s = i ? "unshift" : "push";
                return e.split(" ").forEach(e => {
                    n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t)
                }), n
            }, once(e, t, i) {
                const n = this;
                if (!n.eventsListeners || n.destroyed) return n;
                if ("function" != typeof t) return n;

                function s() {
                    n.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                    for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                    t.apply(n, r)
                }

                return s.__emitterProxy = t, n.on(e, s, i)
            }, onAny(e, t) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof e) return i;
                const n = t ? "unshift" : "push";
                return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[n](e), i
            }, offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const i = t.eventsAnyListeners.indexOf(e);
                return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
            }, off(e, t) {
                const i = this;
                return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (e.split(" ").forEach(e => {
                    void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((n, s) => {
                        (n === t || n.__emitterProxy && n.__emitterProxy === t) && i.eventsListeners[e].splice(s, 1)
                    })
                }), i) : i
            }, emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, i, n;
                for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
                return "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], i = r.slice(1, r.length), n = e) : (t = r[0].events, i = r[0].data, n = r[0].context || e), i.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
                        e.apply(n, [t, ...i])
                    }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
                        e.apply(n, i)
                    })
                }), e
            }
        }, update: {
            updateSize: function () {
                const e = this;
                let t, i;
                const n = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n[0].clientWidth, i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), i = i - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
                    width: t,
                    height: i,
                    size: e.isHorizontal() ? t : i
                }))
            }, updateSlides: function () {
                const e = this;

                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }

                function i(e, i) {
                    return parseFloat(e.getPropertyValue(t(i)) || 0)
                }

                const n = e.params, {$wrapperEl: s, size: r, rtlTranslate: a, wrongRTL: o} = e,
                    l = e.virtual && n.virtual.enabled, c = l ? e.virtual.slides.length : e.slides.length,
                    d = s.children(`.${e.params.slideClass}`), u = l ? e.virtual.slides.length : d.length;
                let p = [];
                const h = [], f = [];
                let m = n.slidesOffsetBefore;
                "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
                let g = n.slidesOffsetAfter;
                "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
                const y = e.snapGrid.length, b = e.slidesGrid.length;
                let w = n.spaceBetween, x = -m, S = 0, E = 0;
                if (void 0 === r) return;
                "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, a ? d.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : d.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }), n.centeredSlides && n.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
                const T = n.grid && n.grid.rows > 1 && e.grid;
                let _;
                T && e.grid.initSlides(u);
                const C = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter(e => void 0 !== n.breakpoints[e].slidesPerView).length > 0;
                for (let s = 0; s < u; s += 1) {
                    _ = 0;
                    const a = d.eq(s);
                    if (T && e.grid.updateSlide(s, a, u, t), "none" !== a.css("display")) {
                        if ("auto" === n.slidesPerView) {
                            C && (d[s].style[t("width")] = "");
                            const r = getComputedStyle(a[0]), o = a[0].style.transform, l = a[0].style.webkitTransform;
                            if (o && (a[0].style.transform = "none"), l && (a[0].style.webkitTransform = "none"), n.roundLengths) _ = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0); else {
                                const e = i(r, "width"), t = i(r, "padding-left"), n = i(r, "padding-right"),
                                    s = i(r, "margin-left"), o = i(r, "margin-right"),
                                    l = r.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) _ = e + s + o; else {
                                    const {clientWidth: i, offsetWidth: r} = a[0];
                                    _ = e + t + n + s + o + (r - i)
                                }
                            }
                            o && (a[0].style.transform = o), l && (a[0].style.webkitTransform = l), n.roundLengths && (_ = Math.floor(_))
                        } else _ = (r - (n.slidesPerView - 1) * w) / n.slidesPerView, n.roundLengths && (_ = Math.floor(_)), d[s] && (d[s].style[t("width")] = `${_}px`);
                        d[s] && (d[s].swiperSlideSize = _), f.push(_), n.centeredSlides ? (x = x + _ / 2 + S / 2 + w, 0 === S && 0 !== s && (x = x - r / 2 - w), 0 === s && (x = x - r / 2 - w), Math.abs(x) < .001 && (x = 0), n.roundLengths && (x = Math.floor(x)), E % n.slidesPerGroup == 0 && p.push(x), h.push(x)) : (n.roundLengths && (x = Math.floor(x)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup == 0 && p.push(x), h.push(x), x = x + _ + w), e.virtualSize += _ + w, S = _, E += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, r) + g, a && o && ("slide" === n.effect || "coverflow" === n.effect) && s.css({width: `${e.virtualSize + n.spaceBetween}px`}), n.setWrapperSize && s.css({[t("width")]: `${e.virtualSize + n.spaceBetween}px`}), T && e.grid.updateWrapperSize(_, p, t), !n.centeredSlides) {
                    const t = [];
                    for (let i = 0; i < p.length; i += 1) {
                        let s = p[i];
                        n.roundLengths && (s = Math.floor(s)), p[i] <= e.virtualSize - r && t.push(s)
                    }
                    p = t, Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - r)
                }
                if (0 === p.length && (p = [0]), 0 !== n.spaceBetween) {
                    const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                    d.filter((e, t) => !n.cssMode || t !== d.length - 1).css({[i]: `${w}px`})
                }
                if (n.centeredSlides && n.centeredSlidesBounds) {
                    let e = 0;
                    f.forEach(t => {
                        e += t + (n.spaceBetween ? n.spaceBetween : 0)
                    });
                    const t = (e -= n.spaceBetween) - r;
                    p = p.map(e => e < 0 ? -m : e > t ? t + g : e)
                }
                if (n.centerInsufficientSlides) {
                    let e = 0;
                    if (f.forEach(t => {
                        e += t + (n.spaceBetween ? n.spaceBetween : 0)
                    }), (e -= n.spaceBetween) < r) {
                        const t = (r - e) / 2;
                        p.forEach((e, i) => {
                            p[i] = e - t
                        }), h.forEach((e, i) => {
                            h[i] = e + t
                        })
                    }
                }
                if (Object.assign(e, {
                    slides: d,
                    snapGrid: p,
                    slidesGrid: h,
                    slidesSizesGrid: f
                }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                    v(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0], i = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + i)
                }
                if (u !== c && e.emit("slidesLengthChange"), p.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !(l || n.cssMode || "slide" !== n.effect && "fade" !== n.effect)) {
                    const t = `${n.containerModifierClass}backface-hidden`, i = e.$el.hasClass(t);
                    u <= n.maxBackfaceHiddenSlides ? i || e.$el.addClass(t) : i && e.$el.removeClass(t)
                }
            }, updateAutoHeight: function (e) {
                const t = this, i = [], n = t.virtual && t.params.virtual.enabled;
                let s, r = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const a = e => n ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) t.visibleSlides.each(e => {
                    i.push(e)
                }); else for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                    const e = t.activeIndex + s;
                    if (e > t.slides.length && !n) break;
                    i.push(a(e))
                } else i.push(a(t.activeIndex));
                for (s = 0; s < i.length; s += 1) if (void 0 !== i[s]) {
                    const e = i[s].offsetHeight;
                    r = e > r ? e : r
                }
                (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
            }, updateSlidesOffset: function () {
                const e = this, t = e.slides;
                for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
            }, updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this, i = t.params, {slides: n, rtlTranslate: s, snapGrid: r} = t;
                if (0 === n.length) return;
                void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
                let a = -e;
                s && (a = e), n.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (let e = 0; e < n.length; e += 1) {
                    const o = n[e];
                    let l = o.swiperSlideOffset;
                    i.cssMode && i.centeredSlides && (l -= n[0].swiperSlideOffset);
                    const c = (a + (i.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + i.spaceBetween),
                        d = (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + i.spaceBetween),
                        u = -(a - l), p = u + t.slidesSizesGrid[e];
                    (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), n.eq(e).addClass(i.slideVisibleClass)), o.progress = s ? -c : c, o.originalProgress = s ? -d : d
                }
                t.visibleSlides = c(t.visibleSlides)
            }, updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const i = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * i || 0
                }
                const i = t.params, n = t.maxTranslate() - t.minTranslate();
                let {progress: s, isBeginning: r, isEnd: a} = t;
                const o = r, l = a;
                0 === n ? (s = 0, r = !0, a = !0) : (r = (s = (e - t.minTranslate()) / n) <= 0, a = s >= 1), Object.assign(t, {
                    progress: s,
                    isBeginning: r,
                    isEnd: a
                }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !r || l && !a) && t.emit("fromEdge"), t.emit("progress", s)
            }, updateSlidesClasses: function () {
                const e = this, {slides: t, params: i, $wrapperEl: n, activeIndex: s, realIndex: r} = e,
                    a = e.virtual && i.virtual.enabled;
                let o;
                t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), (o = a ? e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${s}"]`) : t.eq(s)).addClass(i.slideActiveClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass));
                let l = o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
                let c = o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === c.length && (c = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), c.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), e.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                const t = this, i = t.rtlTranslate ? t.translate : -t.translate, {
                    slidesGrid: n,
                    snapGrid: s,
                    params: r,
                    activeIndex: a,
                    realIndex: o,
                    snapIndex: l
                } = t;
                let c, d = e;
                if (void 0 === d) {
                    for (let e = 0; e < n.length; e += 1) void 0 !== n[e + 1] ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2 ? d = e : i >= n[e] && i < n[e + 1] && (d = e + 1) : i >= n[e] && (d = e);
                    r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if (s.indexOf(i) >= 0) c = s.indexOf(i); else {
                    const e = Math.min(r.slidesPerGroupSkip, d);
                    c = e + Math.floor((d - e) / r.slidesPerGroup)
                }
                if (c >= s.length && (c = s.length - 1), d === a) return void (c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                Object.assign(t, {
                    snapIndex: c,
                    realIndex: u,
                    previousIndex: a,
                    activeIndex: d
                }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            }, updateClickedSlide: function (e) {
                const t = this, i = t.params, n = c(e).closest(`.${i.slideClass}`)[0];
                let s, r = !1;
                if (n) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === n) {
                    r = !0, s = e;
                    break
                }
                if (!n || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(c(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s, i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        }, translate: {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                const {params: t, rtlTranslate: i, translate: n, $wrapperEl: s} = this;
                if (t.virtualTranslate) return i ? -n : n;
                if (t.cssMode) return n;
                let r = h(s[0], e);
                return i && (r = -r), r || 0
            }, setTranslate: function (e, t) {
                const i = this, {rtlTranslate: n, params: s, $wrapperEl: r, wrapperEl: a, progress: o} = i;
                let l, c = 0, d = 0;
                i.isHorizontal() ? c = n ? -e : e : d = e, s.roundLengths && (c = Math.floor(c), d = Math.floor(d)), s.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -c : -d : s.virtualTranslate || r.transform(`translate3d(${c}px, ${d}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? c : d;
                const u = i.maxTranslate() - i.minTranslate();
                (l = 0 === u ? 0 : (e - i.minTranslate()) / u) !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }, translateTo: function (e, t, i, n, s) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
                const r = this, {params: a, wrapperEl: o} = r;
                if (r.animating && a.preventInteractionOnTransition) return !1;
                const l = r.minTranslate(), c = r.maxTranslate();
                let d;
                if (d = n && e > l ? l : n && e < c ? c : e, r.updateProgress(d), a.cssMode) {
                    const e = r.isHorizontal();
                    if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d; else {
                        if (!r.support.smoothScroll) return y({
                            swiper: r,
                            targetPosition: -d,
                            side: e ? "left" : "top"
                        }), !0;
                        o.scrollTo({[e ? "left" : "top"]: -d, behavior: "smooth"})
                    }
                    return !0
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(d), i && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(d), i && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
            }
        }, transition: {
            setTransition: function (e, t) {
                const i = this;
                i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t)
            }, transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                const i = this, {params: n} = i;
                n.cssMode || (n.autoHeight && i.updateAutoHeight(), _({
                    swiper: i,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            }, transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                const i = this, {params: n} = i;
                i.animating = !1, n.cssMode || (i.setTransition(0), _({
                    swiper: i,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        }, slide: {
            slideTo: function (e, t, i, n, s) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const r = this;
                let a = e;
                a < 0 && (a = 0);
                const {
                    params: o,
                    snapGrid: l,
                    slidesGrid: c,
                    previousIndex: d,
                    activeIndex: u,
                    rtlTranslate: p,
                    wrapperEl: h,
                    enabled: f
                } = r;
                if (r.animating && o.preventInteractionOnTransition || !f && !n && !s) return !1;
                const m = Math.min(r.params.slidesPerGroupSkip, a);
                let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
                g >= l.length && (g = l.length - 1), (u || o.initialSlide || 0) === (d || 0) && i && r.emit("beforeSlideChangeStart");
                const v = -l[g];
                if (r.updateProgress(v), o.normalizeSlideIndex) for (let e = 0; e < c.length; e += 1) {
                    const t = -Math.floor(100 * v), i = Math.floor(100 * c[e]), n = Math.floor(100 * c[e + 1]);
                    void 0 !== c[e + 1] ? t >= i && t < n - (n - i) / 2 ? a = e : t >= i && t < n && (a = e + 1) : t >= i && (a = e)
                }
                if (r.initialized && a !== u) {
                    if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (u || 0) !== a) return !1
                }
                let b;
                if (b = a > u ? "next" : a < u ? "prev" : "reset", p && -v === r.translate || !p && v === r.translate) return r.updateActiveIndex(a), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(i, b), r.transitionEnd(i, b)), !1;
                if (o.cssMode) {
                    const e = r.isHorizontal(), i = p ? v : -v;
                    if (0 === t) {
                        const t = r.virtual && r.params.virtual.enabled;
                        t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                        })
                    } else {
                        if (!r.support.smoothScroll) return y({
                            swiper: r,
                            targetPosition: i,
                            side: e ? "left" : "top"
                        }), !0;
                        h.scrollTo({[e ? "left" : "top"]: i, behavior: "smooth"})
                    }
                    return !0
                }
                return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, b), 0 === t ? r.transitionEnd(i, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, b))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (e, t, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                const s = this;
                let r = e;
                return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, i, n)
            }, slideNext: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const n = this, {animating: s, enabled: r, params: a} = n;
                if (!r) return n;
                let o = a.slidesPerGroup;
                "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
                if (a.loop) {
                    if (s && a.loopPreventsSlide) return !1;
                    n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                }
                return a.rewind && n.isEnd ? n.slideTo(0, e, t, i) : n.slideTo(n.activeIndex + l, e, t, i)
            }, slidePrev: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const n = this, {params: s, animating: r, snapGrid: a, slidesGrid: o, rtlTranslate: l, enabled: c} = n;
                if (!c) return n;
                if (s.loop) {
                    if (r && s.loopPreventsSlide) return !1;
                    n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                }

                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                const u = d(l ? n.translate : -n.translate), p = a.map(e => d(e));
                let h = a[p.indexOf(u) - 1];
                if (void 0 === h && s.cssMode) {
                    let e;
                    a.forEach((t, i) => {
                        u >= t && (e = i)
                    }), void 0 !== e && (h = a[e > 0 ? e - 1 : e])
                }
                let f = 0;
                if (void 0 !== h && ((f = o.indexOf(h)) < 0 && (f = n.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (f = f - n.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), s.rewind && n.isBeginning) {
                    const s = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                    return n.slideTo(s, e, t, i)
                }
                return n.slideTo(f, e, t, i)
            }, slideReset: function (e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            }, slideToClosest: function (e, t, i, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
                const s = this;
                let r = s.activeIndex;
                const a = Math.min(s.params.slidesPerGroupSkip, r),
                    o = a + Math.floor((r - a) / s.params.slidesPerGroup),
                    l = s.rtlTranslate ? s.translate : -s.translate;
                if (l >= s.snapGrid[o]) {
                    const e = s.snapGrid[o];
                    l - e > (s.snapGrid[o + 1] - e) * n && (r += s.params.slidesPerGroup)
                } else {
                    const e = s.snapGrid[o - 1];
                    l - e <= (s.snapGrid[o] - e) * n && (r -= s.params.slidesPerGroup)
                }
                return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, i)
            }, slideToClickedSlide: function () {
                const e = this, {params: t, $wrapperEl: i} = e,
                    n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let s, r = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    s = parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - n / 2 || r > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), u(() => {
                        e.slideTo(r)
                    })) : e.slideTo(r) : r > e.slides.length - n ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), u(() => {
                        e.slideTo(r)
                    })) : e.slideTo(r)
                } else e.slideTo(r)
            }
        }, loop: {
            loopCreate: function () {
                const e = this, t = n(), {params: i, $wrapperEl: s} = e,
                    r = s.children().length > 0 ? c(s.children()[0].parentNode) : s;
                r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                let a = r.children(`.${i.slideClass}`);
                if (i.loopFillGroupWithBlank) {
                    const e = i.slidesPerGroup - a.length % i.slidesPerGroup;
                    if (e !== i.slidesPerGroup) {
                        for (let n = 0; n < e; n += 1) {
                            const e = c(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                            r.append(e)
                        }
                        a = r.children(`.${i.slideClass}`)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
                const o = [], l = [];
                a.each((t, i) => {
                    const n = c(t);
                    i < e.loopedSlides && l.push(t), i < a.length && i >= a.length - e.loopedSlides && o.push(t), n.attr("data-swiper-slide-index", i)
                });
                for (let e = 0; e < l.length; e += 1) r.append(c(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (let e = o.length - 1; e >= 0; e -= 1) r.prepend(c(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass))
            }, loopFix: function () {
                const e = this;
                e.emit("beforeLoopFix");
                const {
                    activeIndex: t,
                    slides: i,
                    loopedSlides: n,
                    allowSlidePrev: s,
                    allowSlideNext: r,
                    snapGrid: a,
                    rtlTranslate: o
                } = e;
                let l;
                e.allowSlidePrev = !0, e.allowSlideNext = !0;
                const c = -a[t] - e.getTranslate();
                t < n ? (l = i.length - 3 * n + t, l += n, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)) : t >= i.length - n && (l = -i.length + t + n, l += n, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)), e.allowSlidePrev = s, e.allowSlideNext = r, e.emit("loopFix")
            }, loopDestroy: function () {
                const {$wrapperEl: e, params: t, slides: i} = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
            }
        }, grabCursor: {
            setGrabCursor: function (e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab"
            }, unsetGrabCursor: function () {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        }, events: {
            attachEvents: function () {
                const e = this, t = n(), {params: i, support: s} = e;
                e.onTouchStart = function (e) {
                    const t = this, i = n(), s = r(), a = t.touchEventsData, {params: o, touches: l, enabled: d} = t;
                    if (!d) return;
                    if (t.animating && o.preventInteractionOnTransition) return;
                    !t.animating && o.cssMode && o.loop && t.loopFix();
                    let u = e;
                    u.originalEvent && (u = u.originalEvent);
                    let h = c(u.target);
                    if ("wrapper" === o.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
                    if (a.isTouchEvent = "touchstart" === u.type, !a.isTouchEvent && "which" in u && 3 === u.which) return;
                    if (!a.isTouchEvent && "button" in u && u.button > 0) return;
                    if (a.isTouched && a.isMoved) return;
                    o.noSwipingClass && "" !== o.noSwipingClass && u.target && u.target.shadowRoot && e.path && e.path[0] && (h = c(e.path[0]));
                    const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
                        m = !(!u.target || !u.target.shadowRoot);
                    if (o.noSwiping && (m ? function (e, t) {
                        return void 0 === t && (t = this), function t(i) {
                            return i && i !== n() && i !== r() ? (i.assignedSlot && (i = i.assignedSlot), i.closest(e) || t(i.getRootNode().host)) : null
                        }(t)
                    }(f, u.target) : h.closest(f)[0])) return void (t.allowClick = !0);
                    if (o.swipeHandler && !h.closest(o.swipeHandler)[0]) return;
                    l.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX, l.currentY = "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY;
                    const g = l.currentX, v = l.currentY, y = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                        b = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                    if (y && (g <= b || g >= s.innerWidth - b)) {
                        if ("prevent" !== y) return;
                        e.preventDefault()
                    }
                    if (Object.assign(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = g, l.startY = v, a.touchStartTime = p(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== u.type) {
                        let e = !0;
                        h.is(a.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (a.isTouched = !1)), i.activeElement && c(i.activeElement).is(a.focusableElements) && i.activeElement !== h[0] && i.activeElement.blur();
                        const n = e && t.allowTouchMove && o.touchStartPreventDefault;
                        !o.touchStartForcePreventDefault && !n || h[0].isContentEditable || u.preventDefault()
                    }
                    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", u)
                }.bind(e), e.onTouchMove = function (e) {
                    const t = n(), i = this, s = i.touchEventsData, {
                        params: r,
                        touches: a,
                        rtlTranslate: o,
                        enabled: l
                    } = i;
                    if (!l) return;
                    let d = e;
                    if (d.originalEvent && (d = d.originalEvent), !s.isTouched) return void (s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", d));
                    if (s.isTouchEvent && "touchmove" !== d.type) return;
                    const u = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                        h = "touchmove" === d.type ? u.pageX : d.pageX, f = "touchmove" === d.type ? u.pageY : d.pageY;
                    if (d.preventedByNestedSwiper) return a.startX = h, void (a.startY = f);
                    if (!i.allowTouchMove) return c(d.target).is(s.focusableElements) || (i.allowClick = !1), void (s.isTouched && (Object.assign(a, {
                        startX: h,
                        startY: f,
                        currentX: h,
                        currentY: f
                    }), s.touchStartTime = p()));
                    if (s.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (i.isVertical()) {
                        if (f < a.startY && i.translate <= i.maxTranslate() || f > a.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void (s.isMoved = !1)
                    } else if (h < a.startX && i.translate <= i.maxTranslate() || h > a.startX && i.translate >= i.minTranslate()) return;
                    if (s.isTouchEvent && t.activeElement && d.target === t.activeElement && c(d.target).is(s.focusableElements)) return s.isMoved = !0, void (i.allowClick = !1);
                    if (s.allowTouchCallbacks && i.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                    a.currentX = h, a.currentY = f;
                    const m = a.currentX - a.startX, g = a.currentY - a.startY;
                    if (i.params.threshold && Math.sqrt(m ** 2 + g ** 2) < i.params.threshold) return;
                    if (void 0 === s.isScrolling) {
                        let e;
                        i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : m * m + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(m)) / Math.PI, s.isScrolling = i.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
                    }
                    if (s.isScrolling && i.emit("touchMoveOpposite", d), void 0 === s.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (s.startMoving = !0)), s.isScrolling) return void (s.isTouched = !1);
                    if (!s.startMoving) return;
                    i.allowClick = !1, !r.cssMode && d.cancelable && d.preventDefault(), r.touchMoveStopPropagation && !r.nested && d.stopPropagation(), s.isMoved || (r.loop && !r.cssMode && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", d)), i.emit("sliderMove", d), s.isMoved = !0;
                    let v = i.isHorizontal() ? m : g;
                    a.diff = v, v *= r.touchRatio, o && (v = -v), i.swipeDirection = v > 0 ? "prev" : "next", s.currentTranslate = v + s.startTranslate;
                    let y = !0, b = r.resistanceRatio;
                    if (r.touchReleaseOnEdges && (b = 0), v > 0 && s.currentTranslate > i.minTranslate() ? (y = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + v) ** b)) : v < 0 && s.currentTranslate < i.maxTranslate() && (y = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - v) ** b)), y && (d.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), r.threshold > 0) {
                        if (!(Math.abs(v) > r.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
                        if (!s.allowThresholdMove) return s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, void (a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                    }
                    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
                }.bind(e), e.onTouchEnd = function (e) {
                    const t = this, i = t.touchEventsData, {
                        params: n,
                        touches: s,
                        rtlTranslate: r,
                        slidesGrid: a,
                        enabled: o
                    } = t;
                    if (!o) return;
                    let l = e;
                    if (l.originalEvent && (l = l.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", l), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
                    n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    const c = p(), d = c - i.touchStartTime;
                    if (t.allowClick) {
                        const e = l.path || l.composedPath && l.composedPath();
                        t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), d < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
                    }
                    if (i.lastClickTime = p(), u(() => {
                        t.destroyed || (t.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
                    let h;
                    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = n.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, n.cssMode) return;
                    if (t.params.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: h});
                    let f = 0, m = t.slidesSizesGrid[0];
                    for (let e = 0; e < a.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                        void 0 !== a[e + t] ? h >= a[e] && h < a[e + t] && (f = e, m = a[e + t] - a[e]) : h >= a[e] && (f = e, m = a[a.length - 1] - a[a.length - 2])
                    }
                    let g = null, v = null;
                    n.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
                    const y = (h - a[f]) / m, b = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    if (d > n.longSwipesMs) {
                        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (y >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? g : f + b) : t.slideTo(f)), "prev" === t.swipeDirection && (y > 1 - n.longSwipesRatio ? t.slideTo(f + b) : null !== v && y < 0 && Math.abs(y) > n.longSwipesRatio ? t.slideTo(v) : t.slideTo(f))
                    } else {
                        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                        !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : f + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : f)) : l.target === t.navigation.nextEl ? t.slideTo(f + b) : t.slideTo(f)
                    }
                }.bind(e), i.cssMode && (e.onScroll = function () {
                    const e = this, {wrapperEl: t, rtlTranslate: i, enabled: n} = e;
                    if (!n) return;
                    let s;
                    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                    const r = e.maxTranslate() - e.minTranslate();
                    (s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
                }.bind(e)), e.onClick = function (e) {
                    const t = this;
                    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
                }.bind(e), s.touch && !M && (t.addEventListener("touchstart", k), M = !0), $(e, "on")
            }, detachEvents: function () {
                $(this, "off")
            }
        }, breakpoints: {
            setBreakpoint: function () {
                const e = this, {activeIndex: t, initialized: i, loopedSlides: n = 0, params: s, $el: r} = e,
                    a = s.breakpoints;
                if (!a || a && 0 === Object.keys(a).length) return;
                const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                if (!o || e.currentBreakpoint === o) return;
                const l = (o in a ? a[o] : void 0) || e.originalParams, c = P(e, s), d = P(e, l), u = s.enabled;
                c && !d ? (r.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (r.addClass(`${s.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && r.addClass(`${s.containerModifierClass}grid-column`), e.emitContainerClasses());
                const p = l.direction && l.direction !== s.direction,
                    h = s.loop && (l.slidesPerView !== s.slidesPerView || p);
                p && i && e.changeDirection(), g(e.params, l);
                const f = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), h && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
            }, getBreakpoint: function (e, t, i) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                let n = !1;
                const s = r(), a = "window" === t ? s.innerHeight : i.clientHeight, o = Object.keys(e).map(e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {value: a * t, point: e}
                    }
                    return {value: e, point: e}
                });
                o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < o.length; e += 1) {
                    const {point: r, value: a} = o[e];
                    "window" === t ? s.matchMedia(`(min-width: ${a}px)`).matches && (n = r) : a <= i.clientWidth && (n = r)
                }
                return n || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const e = this, {isLocked: t, params: i} = e, {slidesOffsetBefore: n} = i;
                if (n) {
                    const t = e.slides.length - 1, i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                    e.isLocked = e.size > i
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        }, classes: {
            addClasses: function () {
                const e = this, {classNames: t, params: i, rtl: n, $el: s, device: r, support: a} = e,
                    o = function (e, t) {
                        const i = [];
                        return e.forEach(e => {
                            "object" == typeof e ? Object.keys(e).forEach(n => {
                                e[n] && i.push(t + n)
                            }) : "string" == typeof e && i.push(t + e)
                        }), i
                    }(["initialized", i.direction, {"pointer-events": !a.touch}, {"free-mode": e.params.freeMode && i.freeMode.enabled}, {autoheight: i.autoHeight}, {rtl: n}, {grid: i.grid && i.grid.rows > 1}, {"grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill}, {android: r.android}, {ios: r.ios}, {"css-mode": i.cssMode}, {centered: i.cssMode && i.centeredSlides}, {"watch-progress": i.watchSlidesProgress}], i.containerModifierClass);
                t.push(...o), s.addClass([...t].join(" ")), e.emitContainerClasses()
            }, removeClasses: function () {
                const {$el: e, classNames: t} = this;
                e.removeClass(t.join(" ")), this.emitContainerClasses()
            }
        }, images: {
            loadImage: function (e, t, i, n, s, a) {
                const o = r();
                let l;

                function d() {
                    a && a()
                }

                c(e).parent("picture")[0] || e.complete && s ? d() : t ? ((l = new o.Image).onload = d, l.onerror = d, n && (l.sizes = n), i && (l.srcset = i), t && (l.src = t)) : d()
            }, preloadImages: function () {
                const e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                    const n = e.imagesToLoad[i];
                    e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, L = {};

    class I {
        constructor() {
            let e, t;
            for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
            if (1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && c(t.el).length > 1) {
                const e = [];
                return c(t.el).each(i => {
                    const n = g({}, t, {el: i});
                    e.push(new I(n))
                }), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = S(), r.device = E({userAgent: t.userAgent}), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const a = {};
            r.modules.forEach(e => {
                e({
                    swiper: r,
                    extendParams: O(t, a),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            });
            const o = g({}, A, a);
            return r.params = g({}, o, L, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach(e => {
                r.on(e, r.params.on[e])
            }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = c, Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: c(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function () {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: p(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }

        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }

        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }

        setProgress(e, t) {
            const i = this;
            e = Math.min(Math.max(e, 0), 1);
            const n = i.minTranslate(), s = (i.maxTranslate() - n) * e + n;
            i.translateTo(s, void 0 === t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
        }

        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", t.join(" "))
        }

        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }

        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each(i => {
                const n = e.getSlideClasses(i);
                t.push({slideEl: i, classNames: n}), e.emit("_slideClass", i, n)
            }), e.emit("_slideClasses", t)
        }

        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {params: i, slides: n, slidesGrid: s, slidesSizesGrid: r, size: a, activeIndex: o} = this;
            let l = 1;
            if (i.centeredSlides) {
                let e, t = n[o].swiperSlideSize;
                for (let i = o + 1; i < n.length; i += 1) n[i] && !e && (l += 1, (t += n[i].swiperSlideSize) > a && (e = !0));
                for (let i = o - 1; i >= 0; i -= 1) n[i] && !e && (l += 1, (t += n[i].swiperSlideSize) > a && (e = !0))
            } else if ("current" === e) for (let e = o + 1; e < n.length; e += 1) (t ? s[e] + r[e] - s[o] < a : s[e] - s[o] < a) && (l += 1); else for (let e = o - 1; e >= 0; e -= 1) s[o] - s[e] < a && (l += 1);
            return l
        }

        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {snapGrid: t, params: i} = e;

            function n() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            let s;
            i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }

        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const i = this, n = i.params.direction;
            return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.each(t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }), i.emit("changeDirection"), t && i.update()), i
        }

        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const i = c(e || t.params.el);
            if (!(e = i[0])) return !1;
            e.swiper = t;
            const s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = c(e.shadowRoot.querySelector(s()));
                    return t.children = (e => i.children(e)), t
                }
                return i.children(s())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = n().createElement("div");
                r = c(e), e.className = t.params.wrapperClass, i.append(e), i.children(`.${t.params.slideClass}`).each(e => {
                    r.append(e)
                })
            }
            return Object.assign(t, {
                $el: i,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }

        init(e) {
            const t = this;
            return t.initialized ? t : (!1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t)
        }

        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const i = this, {params: n, $el: s, $wrapperEl: r, slides: a} = i;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                i.off(e)
            }), !1 !== e && (i.$el[0].swiper = null, function (e) {
                const t = i;
                Object.keys(t).forEach(e => {
                    try {
                        t[e] = null
                    } catch (e) {
                    }
                    try {
                        delete t[e]
                    } catch (e) {
                    }
                })
            }()), i.destroyed = !0), null
        }

        static extendDefaults(e) {
            g(L, e)
        }

        static get extendedDefaults() {
            return L
        }

        static get defaults() {
            return A
        }

        static installModule(e) {
            I.prototype.__modules__ || (I.prototype.__modules__ = []);
            const t = I.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }

        static use(e) {
            return Array.isArray(e) ? (e.forEach(e => I.installModule(e)), I) : (I.installModule(e), I)
        }
    }

    function D(e, t, i, s) {
        const r = n();
        return e.params.createElements && Object.keys(s).forEach(n => {
            if (!i[n] && !0 === i.auto) {
                let a = e.$el.children(`.${s[n]}`)[0];
                a || ((a = r.createElement("div")).className = s[n], e.$el.append(a)), i[n] = a, t[n] = a
            }
        }), i
    }

    function N(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }

    function B(e) {
        const t = this, {$wrapperEl: i, params: n} = t;
        if (n.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]); else i.append(e);
        n.loop && t.loopCreate(), n.observer || t.update()
    }

    function V(e) {
        const t = this, {params: i, $wrapperEl: n, activeIndex: s} = t;
        i.loop && t.loopDestroy();
        let r = s + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && n.prepend(e[t]);
            r = s + e.length
        } else n.prepend(e);
        i.loop && t.loopCreate(), i.observer || t.update(), t.slideTo(r, 0, !1)
    }

    function j(e, t) {
        const i = this, {$wrapperEl: n, params: s, activeIndex: r} = i;
        let a = r;
        s.loop && (a -= i.loopedSlides, i.loopDestroy(), i.slides = n.children(`.${s.slideClass}`));
        const o = i.slides.length;
        if (e <= 0) return void i.prependSlide(t);
        if (e >= o) return void i.appendSlide(t);
        let l = a > e ? a + 1 : a;
        const c = [];
        for (let t = o - 1; t >= e; t -= 1) {
            const e = i.slides.eq(t);
            e.remove(), c.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
            l = a > e ? a + t.length : a
        } else n.append(t);
        for (let e = 0; e < c.length; e += 1) n.append(c[e]);
        s.loop && i.loopCreate(), s.observer || i.update(), s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
    }

    function R(e) {
        const t = this, {params: i, $wrapperEl: n, activeIndex: s} = t;
        let r = s;
        i.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = n.children(`.${i.slideClass}`));
        let a, o = r;
        if ("object" == typeof e && "length" in e) {
            for (let i = 0; i < e.length; i += 1) a = e[i], t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
            o = Math.max(o, 0)
        } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), o = Math.max(o, 0);
        i.loop && t.loopCreate(), i.observer || t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
    }

    function F() {
        const e = this, t = [];
        for (let i = 0; i < e.slides.length; i += 1) t.push(i);
        e.removeSlide(t)
    }

    function X(e) {
        const {
            effect: t,
            swiper: i,
            on: n,
            setTranslate: s,
            setTransition: r,
            overwriteParams: a,
            perspective: o,
            recreateShadows: l,
            getEffectParams: c
        } = e;
        let d;
        n("beforeInit", () => {
            if (i.params.effect !== t) return;
            i.classNames.push(`${i.params.containerModifierClass}${t}`), o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
            const e = a ? a() : {};
            Object.assign(i.params, e), Object.assign(i.originalParams, e)
        }), n("setTranslate", () => {
            i.params.effect === t && s()
        }), n("setTransition", (e, n) => {
            i.params.effect === t && r(n)
        }), n("transitionEnd", () => {
            if (i.params.effect === t && l) {
                if (!c || !c().slideShadows) return;
                i.slides.each(e => {
                    i.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                }), l()
            }
        }), n("virtualUpdate", () => {
            i.params.effect === t && (i.slides.length || (d = !0), requestAnimationFrame(() => {
                d && i.slides && i.slides.length && (s(), d = !1)
            }))
        })
    }

    function Y(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function H(e) {
        let {swiper: t, duration: i, transformEl: n, allSlides: s} = e;
        const {slides: r, activeIndex: a, $wrapperEl: o} = t;
        if (t.params.virtualTranslate && 0 !== i) {
            let e, i = !1;
            (e = s ? n ? r.find(n) : r : n ? r.eq(a).find(n) : r.eq(a)).transitionEnd(() => {
                if (i) return;
                if (!t || t.destroyed) return;
                i = !0, t.animating = !1;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) o.trigger(e[t])
            })
        }
    }

    function q(e, t, i) {
        const n = "swiper-slide-shadow" + (i ? `-${i}` : ""), s = e.transformEl ? t.find(e.transformEl) : t;
        let r = s.children(`.${n}`);
        return r.length || (r = c(`<div class="swiper-slide-shadow${i ? `-${i}` : ""}"></div>`), s.append(r)), r
    }

    Object.keys(z).forEach(e => {
        Object.keys(z[e]).forEach(t => {
            I.prototype[t] = z[e][t]
        })
    }), I.use([function (e) {
        let {swiper: t, on: i, emit: n} = e;
        const s = r();
        let a = null, o = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
        }, c = () => {
            t && !t.destroyed && t.initialized && n("orientationchange")
        };
        i("init", () => {
            t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
                o = s.requestAnimationFrame(() => {
                    const {width: i, height: n} = t;
                    let s = i, r = n;
                    e.forEach(e => {
                        let {contentBoxSize: i, contentRect: n, target: a} = e;
                        a && a !== t.el || (s = n ? n.width : (i[0] || i).inlineSize, r = n ? n.height : (i[0] || i).blockSize)
                    }), s === i && r === n || l()
                })
            })).observe(t.el) : (s.addEventListener("resize", l), s.addEventListener("orientationchange", c))
        }), i("destroy", () => {
            o && s.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", c)
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: n, emit: s} = e;
        const a = [], o = r(), l = function (e, t) {
            void 0 === t && (t = {});
            const i = new (o.MutationObserver || o.WebkitMutationObserver)(e => {
                if (1 === e.length) return void s("observerUpdate", e[0]);
                const t = function () {
                    s("observerUpdate", e[0])
                };
                o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0)
            });
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), a.push(i)
        };
        i({observer: !1, observeParents: !1, observeSlideChildren: !1}), n("init", () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) l(e[t])
                }
                l(t.$el[0], {childList: t.params.observeSlideChildren}), l(t.$wrapperEl[0], {attributes: !1})
            }
        }), n("destroy", () => {
            a.forEach(e => {
                e.disconnect()
            }), a.splice(0, a.length)
        })
    }]);
    const G = [function (e) {
        let t, {swiper: i, extendParams: n, on: s, emit: r} = e;

        function a(e, t) {
            const n = i.params.virtual;
            if (n.cache && i.virtual.cache[t]) return i.virtual.cache[t];
            const s = n.renderSlide ? c(n.renderSlide.call(i, e, t)) : c(`<div class="${i.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), n.cache && (i.virtual.cache[t] = s), s
        }

        function o(e) {
            const {slidesPerView: t, slidesPerGroup: n, centeredSlides: s} = i.params, {
                addSlidesBefore: o,
                addSlidesAfter: l
            } = i.params.virtual, {from: c, to: d, slides: u, slidesGrid: p, offset: h} = i.virtual;
            i.params.cssMode || i.updateActiveIndex();
            const f = i.activeIndex || 0;
            let m, g, v;
            m = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", s ? (g = Math.floor(t / 2) + n + l, v = Math.floor(t / 2) + n + o) : (g = t + (n - 1) + l, v = n + o);
            const y = Math.max((f || 0) - v, 0), b = Math.min((f || 0) + g, u.length - 1),
                w = (i.slidesGrid[y] || 0) - (i.slidesGrid[0] || 0);

            function x() {
                i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load(), r("virtualUpdate")
            }

            if (Object.assign(i.virtual, {
                from: y,
                to: b,
                offset: w,
                slidesGrid: i.slidesGrid
            }), c === y && d === b && !e) return i.slidesGrid !== p && w !== h && i.slides.css(m, `${w}px`), i.updateProgress(), void r("virtualUpdate");
            if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
                offset: w,
                from: y,
                to: b,
                slides: function () {
                    const e = [];
                    for (let t = y; t <= b; t += 1) e.push(u[t]);
                    return e
                }()
            }), void (i.params.virtual.renderExternalUpdate ? x() : r("virtualUpdate"));
            const S = [], E = [];
            if (e) i.$wrapperEl.find(`.${i.params.slideClass}`).remove(); else for (let e = c; e <= d; e += 1) (e < y || e > b) && i.$wrapperEl.find(`.${i.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < u.length; t += 1) t >= y && t <= b && (void 0 === d || e ? E.push(t) : (t > d && E.push(t), t < c && S.push(t)));
            E.forEach(e => {
                i.$wrapperEl.append(a(u[e], e))
            }), S.sort((e, t) => t - e).forEach(e => {
                i.$wrapperEl.prepend(a(u[e], e))
            }), i.$wrapperEl.children(".swiper-slide").css(m, `${w}px`), x()
        }

        n({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), i.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, s("beforeInit", () => {
            i.params.virtual.enabled && (i.virtual.slides = i.params.virtual.slides, i.classNames.push(`${i.params.containerModifierClass}virtual`), i.params.watchSlidesProgress = !0, i.originalParams.watchSlidesProgress = !0, i.params.initialSlide || o())
        }), s("setTranslate", () => {
            i.params.virtual.enabled && (i.params.cssMode && !i._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
                o()
            }, 100)) : o())
        }), s("init update resize", () => {
            i.params.virtual.enabled && i.params.cssMode && v(i.wrapperEl, "--swiper-virtual-size", `${i.virtualSize}px`)
        }), Object.assign(i.virtual, {
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && i.virtual.slides.push(e[t]); else i.virtual.slides.push(e);
                o(!0)
            }, prependSlide: function (e) {
                const t = i.activeIndex;
                let n = t + 1, s = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && i.virtual.slides.unshift(e[t]);
                    n = t + e.length, s = e.length
                } else i.virtual.slides.unshift(e);
                if (i.params.virtual.cache) {
                    const e = i.virtual.cache, t = {};
                    Object.keys(e).forEach(i => {
                        const n = e[i], r = n.attr("data-swiper-slide-index");
                        r && n.attr("data-swiper-slide-index", parseInt(r, 10) + s), t[parseInt(i, 10) + s] = n
                    }), i.virtual.cache = t
                }
                o(!0), i.slideTo(n, 0)
            }, removeSlide: function (e) {
                if (null == e) return;
                let t = i.activeIndex;
                if (Array.isArray(e)) for (let n = e.length - 1; n >= 0; n -= 1) i.virtual.slides.splice(e[n], 1), i.params.virtual.cache && delete i.virtual.cache[e[n]], e[n] < t && (t -= 1), t = Math.max(t, 0); else i.virtual.slides.splice(e, 1), i.params.virtual.cache && delete i.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                o(!0), i.slideTo(t, 0)
            }, removeAllSlides: function () {
                i.virtual.slides = [], i.params.virtual.cache && (i.virtual.cache = {}), o(!0), i.slideTo(0, 0)
            }, update: o
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: s, emit: a} = e;
        const o = n(), l = r();

        function d(e) {
            if (!t.enabled) return;
            const {rtlTranslate: i} = t;
            let n = e;
            n.originalEvent && (n = n.originalEvent);
            const s = n.keyCode || n.charCode, r = t.params.keyboard.pageUpDown, c = r && 33 === s, d = r && 34 === s,
                u = 37 === s, p = 39 === s, h = 38 === s, f = 40 === s;
            if (!t.allowSlideNext && (t.isHorizontal() && p || t.isVertical() && f || d)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
            if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (c || d || u || p || h || f)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                    const n = t.$el, s = n[0].clientWidth, r = n[0].clientHeight, a = l.innerWidth, o = l.innerHeight,
                        c = t.$el.offset();
                    i && (c.left -= t.$el[0].scrollLeft);
                    const d = [[c.left, c.top], [c.left + s, c.top], [c.left, c.top + r], [c.left + s, c.top + r]];
                    for (let t = 0; t < d.length; t += 1) {
                        const i = d[t];
                        if (i[0] >= 0 && i[0] <= a && i[1] >= 0 && i[1] <= o) {
                            if (0 === i[0] && 0 === i[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((c || d || u || p) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((d || p) && !i || (c || u) && i) && t.slideNext(), ((c || u) && !i || (d || p) && i) && t.slidePrev()) : ((c || d || h || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (d || f) && t.slideNext(), (c || h) && t.slidePrev()), a("keyPress", s)
            }
        }

        function u() {
            t.keyboard.enabled || (c(o).on("keydown", d), t.keyboard.enabled = !0)
        }

        function p() {
            t.keyboard.enabled && (c(o).off("keydown", d), t.keyboard.enabled = !1)
        }

        t.keyboard = {enabled: !1}, i({keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}}), s("init", () => {
            t.params.keyboard.enabled && u()
        }), s("destroy", () => {
            t.keyboard.enabled && p()
        }), Object.assign(t.keyboard, {enable: u, disable: p})
    }, function (e) {
        let {swiper: t, extendParams: i, on: n, emit: s} = e;
        const a = r();
        let o;
        i({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), t.mousewheel = {enabled: !1};
        let l, d = p();
        const h = [];

        function f() {
            t.enabled && (t.mouseEntered = !0)
        }

        function m() {
            t.enabled && (t.mouseEntered = !1)
        }

        function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta || t.params.mousewheel.thresholdTime && p() - d < t.params.mousewheel.thresholdTime || !(e.delta >= 6 && p() - d < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), s("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), s("scroll", e.raw)), d = (new a.Date).getTime(), 1))
        }

        function v(e) {
            let i = e, n = !0;
            if (!t.enabled) return;
            const r = t.params.mousewheel;
            t.params.cssMode && i.preventDefault();
            let a = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (a = c(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !a[0].contains(i.target) && !r.releaseOnEdges) return !0;
            i.originalEvent && (i = i.originalEvent);
            let d = 0;
            const f = t.rtlTranslate ? -1 : 1, m = function (e) {
                let t = 0, i = 0, n = 0, s = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), e.shiftKey && !n && (n = s, s = 0), (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !t && (t = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: n,
                    pixelY: s
                }
            }(i);
            if (r.forceToAxis) if (t.isHorizontal()) {
                if (!(Math.abs(m.pixelX) > Math.abs(m.pixelY))) return !0;
                d = -m.pixelX * f
            } else {
                if (!(Math.abs(m.pixelY) > Math.abs(m.pixelX))) return !0;
                d = -m.pixelY
            } else d = Math.abs(m.pixelX) > Math.abs(m.pixelY) ? -m.pixelX * f : -m.pixelY;
            if (0 === d) return !0;
            r.invert && (d = -d);
            let v = t.getTranslate() + d * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), (n = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate())) && t.params.nested && i.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {time: p(), delta: Math.abs(d), direction: Math.sign(d)},
                    n = l && e.time < l.time + 500 && e.delta <= l.delta && e.direction === l.direction;
                if (!n) {
                    l = void 0, t.params.loop && t.loopFix();
                    let a = t.getTranslate() + d * r.sensitivity;
                    const c = t.isBeginning, p = t.isEnd;
                    if (a >= t.minTranslate() && (a = t.minTranslate()), a <= t.maxTranslate() && (a = t.maxTranslate()), t.setTransition(0), t.setTranslate(a), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!c && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                        clearTimeout(o), o = void 0, h.length >= 15 && h.shift();
                        const i = h.length ? h[h.length - 1] : void 0, n = h[0];
                        if (h.push(e), i && (e.delta > i.delta || e.direction !== i.direction)) h.splice(0); else if (h.length >= 15 && e.time - n.time < 500 && n.delta - e.delta >= 1 && e.delta <= 6) {
                            const i = d > 0 ? .8 : .2;
                            l = e, h.splice(0), o = u(() => {
                                t.slideToClosest(t.params.speed, !0, void 0, i)
                            }, 0)
                        }
                        o || (o = u(() => {
                            l = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }, 500))
                    }
                    if (n || s("scroll", i), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), a === t.minTranslate() || a === t.maxTranslate()) return !0
                }
            } else {
                const i = {time: p(), delta: Math.abs(d), direction: Math.sign(d), raw: e};
                h.length >= 2 && h.shift();
                const n = h.length ? h[h.length - 1] : void 0;
                if (h.push(i), n ? (i.direction !== n.direction || i.delta > n.delta || i.time > n.time + 150) && g(i) : g(i), function (e) {
                    const i = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0
                    } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges) return !0;
                    return !1
                }(i)) return !0
            }
            return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
        }

        function y(e) {
            let i = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (i = c(t.params.mousewheel.eventsTarget)), i[e]("mouseenter", f), i[e]("mouseleave", m), i[e]("wheel", v)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (y("on"), t.mousewheel.enabled = !0, !0)
        }

        function w() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (y("off"), t.mousewheel.enabled = !1, !0)
        }

        n("init", () => {
            !t.params.mousewheel.enabled && t.params.cssMode && w(), t.params.mousewheel.enabled && b()
        }), n("destroy", () => {
            t.params.cssMode && b(), t.mousewheel.enabled && w()
        }), Object.assign(t.mousewheel, {enable: b, disable: w})
    }, function (e) {
        let {swiper: t, extendParams: i, on: n, emit: s} = e;

        function r(e) {
            let i;
            return e && (i = c(e), t.params.uniqueNavElements && "string" == typeof e && i.length > 1 && 1 === t.$el.find(e).length && (i = t.$el.find(e))), i
        }

        function a(e, i) {
            const n = t.params.navigation;
            e && e.length > 0 && (e[i ? "addClass" : "removeClass"](n.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](n.lockClass))
        }

        function o() {
            if (t.params.loop) return;
            const {$nextEl: e, $prevEl: i} = t.navigation;
            a(i, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind)
        }

        function l(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev()
        }

        function d(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext()
        }

        function u() {
            const e = t.params.navigation;
            if (t.params.navigation = D(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
            const i = r(e.nextEl), n = r(e.prevEl);
            i && i.length > 0 && i.on("click", d), n && n.length > 0 && n.on("click", l), Object.assign(t.navigation, {
                $nextEl: i,
                nextEl: i && i[0],
                $prevEl: n,
                prevEl: n && n[0]
            }), t.enabled || (i && i.addClass(e.lockClass), n && n.addClass(e.lockClass))
        }

        function p() {
            const {$nextEl: e, $prevEl: i} = t.navigation;
            e && e.length && (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)), i && i.length && (i.off("click", l), i.removeClass(t.params.navigation.disabledClass))
        }

        i({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }), t.navigation = {nextEl: null, $nextEl: null, prevEl: null, $prevEl: null}, n("init", () => {
            u(), o()
        }), n("toEdge fromEdge lock unlock", () => {
            o()
        }), n("destroy", () => {
            p()
        }), n("enable disable", () => {
            const {$nextEl: e, $prevEl: i} = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), i && i[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        }), n("click", (e, i) => {
            const {$nextEl: n, $prevEl: r} = t.navigation, a = i.target;
            if (t.params.navigation.hideOnClick && !c(a).is(r) && !c(a).is(n)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;
                let e;
                n ? e = n.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), s(!0 === e ? "navigationShow" : "navigationHide"), n && n.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
            }
        }), Object.assign(t.navigation, {update: o, init: u, destroy: p})
    }, function (e) {
        let {swiper: t, extendParams: i, on: n, emit: s} = e;
        const r = "swiper-pagination";
        let a;
        i({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`
            }
        }), t.pagination = {el: null, $el: null, bullets: []};
        let o = 0;

        function l() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }

        function d(e, i) {
            const {bulletActiveClass: n} = t.params.pagination;
            e[i]().addClass(`${n}-${i}`)[i]().addClass(`${n}-${i}-${i}`)
        }

        function u() {
            const e = t.rtl, i = t.params.pagination;
            if (l()) return;
            const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                r = t.pagination.$el;
            let u;
            const p = t.params.loop ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? ((u = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > n - 1 - 2 * t.loopedSlides && (u -= n - 2 * t.loopedSlides), u > p - 1 && (u -= p), u < 0 && "bullets" !== t.params.paginationType && (u = p + u)) : u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const n = t.pagination.bullets;
                let s, l, p;
                if (i.dynamicBullets && (a = n.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", a * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== t.previousIndex && ((o += u - (t.previousIndex - t.loopedSlides || 0)) > i.dynamicMainBullets - 1 ? o = i.dynamicMainBullets - 1 : o < 0 && (o = 0)), s = Math.max(u - o, 0), p = ((l = s + (Math.min(n.length, i.dynamicMainBullets) - 1)) + s) / 2), n.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${i.bulletActiveClass}${e}`).join(" ")), r.length > 1) n.each(e => {
                    const t = c(e), n = t.index();
                    n === u && t.addClass(i.bulletActiveClass), i.dynamicBullets && (n >= s && n <= l && t.addClass(`${i.bulletActiveClass}-main`), n === s && d(t, "prev"), n === l && d(t, "next"))
                }); else {
                    const e = n.eq(u), r = e.index();
                    if (e.addClass(i.bulletActiveClass), i.dynamicBullets) {
                        const e = n.eq(s), a = n.eq(l);
                        for (let e = s; e <= l; e += 1) n.eq(e).addClass(`${i.bulletActiveClass}-main`);
                        if (t.params.loop) if (r >= n.length) {
                            for (let e = i.dynamicMainBullets; e >= 0; e -= 1) n.eq(n.length - e).addClass(`${i.bulletActiveClass}-main`);
                            n.eq(n.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`)
                        } else d(e, "prev"), d(a, "next"); else d(e, "prev"), d(a, "next")
                    }
                }
                if (i.dynamicBullets) {
                    const s = Math.min(n.length, i.dynamicMainBullets + 4), r = (a * s - a) / 2 - p * a,
                        o = e ? "right" : "left";
                    n.css(t.isHorizontal() ? o : "top", `${r}px`)
                }
            }
            if ("fraction" === i.type && (r.find(N(i.currentClass)).text(i.formatFractionCurrent(u + 1)), r.find(N(i.totalClass)).text(i.formatFractionTotal(p))), "progressbar" === i.type) {
                let e;
                e = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const n = (u + 1) / p;
                let s = 1, a = 1;
                "horizontal" === e ? s = n : a = n, r.find(N(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${a})`).transition(t.params.speed)
            }
            "custom" === i.type && i.renderCustom ? (r.html(i.renderCustom(t, u + 1, p)), s("paginationRender", r[0])) : s("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](i.lockClass)
        }

        function p() {
            const e = t.params.pagination;
            if (l()) return;
            const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                n = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let s = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && s > i && (s = i);
                for (let i = 0; i < s; i += 1) e.renderBullet ? r += e.renderBullet.call(t, i, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                n.html(r), t.pagination.bullets = n.find(N(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, n.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, n.html(r)), "custom" !== e.type && s("paginationRender", t.pagination.$el[0])
        }

        function h() {
            t.params.pagination = D(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
            const e = t.params.pagination;
            if (!e.el) return;
            let i = c(e.el);
            0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && ((i = t.$el.find(e.el)).length > 1 && (i = i.filter(e => c(e).parents(".swiper")[0] === t.el))), "bullets" === e.type && e.clickable && i.addClass(e.clickableClass), i.addClass(e.modifierClass + e.type), i.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (i.addClass(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass), e.clickable && i.on("click", N(e.bulletClass), function (e) {
                e.preventDefault();
                let i = c(this).index() * t.params.slidesPerGroup;
                t.params.loop && (i += t.loopedSlides), t.slideTo(i)
            }), Object.assign(t.pagination, {$el: i, el: i[0]}), t.enabled || i.addClass(e.lockClass))
        }

        function f() {
            const e = t.params.pagination;
            if (l()) return;
            const i = t.pagination.$el;
            i.removeClass(e.hiddenClass), i.removeClass(e.modifierClass + e.type), i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && i.off("click", N(e.bulletClass))
        }

        n("init", () => {
            h(), p(), u()
        }), n("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && u()
        }), n("snapIndexChange", () => {
            t.params.loop || u()
        }), n("slidesLengthChange", () => {
            t.params.loop && (p(), u())
        }), n("snapGridLengthChange", () => {
            t.params.loop || (p(), u())
        }), n("destroy", () => {
            f()
        }), n("enable disable", () => {
            const {$el: e} = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        }), n("lock unlock", () => {
            u()
        }), n("click", (e, i) => {
            const n = i.target, {$el: r} = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r.length > 0 && !c(n).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && n === t.navigation.nextEl || t.navigation.prevEl && n === t.navigation.prevEl)) return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                s(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
            }
        }), Object.assign(t.pagination, {render: p, update: u, init: h, destroy: f})
    }, function (e) {
        let {swiper: t, extendParams: i, on: s, emit: r} = e;
        const a = n();
        let o, l, d, p, h = !1, f = null, m = null;

        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {scrollbar: e, rtlTranslate: i, progress: n} = t, {$dragEl: s, $el: r} = e, a = t.params.scrollbar;
            let o = l, c = (d - l) * n;
            i ? (c = -c) > 0 ? (o = l - c, c = 0) : -c + l > d && (o = d + c) : c < 0 ? (o = l + c, c = 0) : c + l > d && (o = d - c), t.isHorizontal() ? (s.transform(`translate3d(${c}px, 0, 0)`), s[0].style.width = `${o}px`) : (s.transform(`translate3d(0px, ${c}px, 0)`), s[0].style.height = `${o}px`), a.hide && (clearTimeout(f), r[0].style.opacity = 1, f = setTimeout(() => {
                r[0].style.opacity = 0, r.transition(400)
            }, 1e3))
        }

        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {scrollbar: e} = t, {$dragEl: i, $el: n} = e;
            i[0].style.width = "", i[0].style.height = "", d = t.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, p = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), l = "auto" === t.params.scrollbar.dragSize ? d * p : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? i[0].style.width = `${l}px` : i[0].style.height = `${l}px`, n[0].style.display = p >= 1 ? "none" : "", t.params.scrollbar.hide && (n[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }

        function y(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }

        function b(e) {
            const {scrollbar: i, rtlTranslate: n} = t, {$el: s} = i;
            let r;
            r = (y(e) - s.offset()[t.isHorizontal() ? "left" : "top"] - (null !== o ? o : l / 2)) / (d - l), r = Math.max(Math.min(r, 1), 0), n && (r = 1 - r);
            const a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(a), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function w(e) {
            const i = t.params.scrollbar, {scrollbar: n, $wrapperEl: s} = t, {$el: a, $dragEl: l} = n;
            h = !0, o = e.target === l[0] || e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), l.transition(100), b(e), clearTimeout(m), a.transition(0), i.hide && a.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e)
        }

        function x(e) {
            const {scrollbar: i, $wrapperEl: n} = t, {$el: s, $dragEl: a} = i;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), n.transition(0), s.transition(0), a.transition(0), r("scrollbarDragMove", e))
        }

        function S(e) {
            const i = t.params.scrollbar, {scrollbar: n, $wrapperEl: s} = t, {$el: a} = n;
            h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), i.hide && (clearTimeout(m), m = u(() => {
                a.css("opacity", 0), a.transition(400)
            }, 1e3)), r("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
        }

        function E(e) {
            const {scrollbar: i, touchEventsTouch: n, touchEventsDesktop: s, params: r, support: o} = t, l = i.$el[0],
                c = !(!o.passiveListener || !r.passiveListeners) && {passive: !1, capture: !1},
                d = !(!o.passiveListener || !r.passiveListeners) && {passive: !0, capture: !1};
            if (!l) return;
            const u = "on" === e ? "addEventListener" : "removeEventListener";
            o.touch ? (l[u](n.start, w, c), l[u](n.move, x, c), l[u](n.end, S, d)) : (l[u](s.start, w, c), a[u](s.move, x, c), a[u](s.end, S, d))
        }

        function T() {
            const {scrollbar: e, $el: i} = t;
            t.params.scrollbar = D(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
            const n = t.params.scrollbar;
            if (!n.el) return;
            let s = c(n.el);
            t.params.uniqueNavElements && "string" == typeof n.el && s.length > 1 && 1 === i.find(n.el).length && (s = i.find(n.el));
            let r = s.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = c(`<div class="${t.params.scrollbar.dragClass}"></div>`), s.append(r)), Object.assign(e, {
                $el: s,
                el: s[0],
                $dragEl: r,
                dragEl: r[0]
            }), n.draggable && t.params.scrollbar.el && E("on"), s && s[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }

        function _() {
            t.params.scrollbar.el && E("off")
        }

        i({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }), t.scrollbar = {el: null, dragEl: null, $el: null, $dragEl: null}, s("init", () => {
            T(), v(), g()
        }), s("update resize observerUpdate lock unlock", () => {
            v()
        }), s("setTranslate", () => {
            g()
        }), s("setTransition", (e, i) => {
            !function (e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(i)
        }), s("enable disable", () => {
            const {$el: e} = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }), s("destroy", () => {
            _()
        }), Object.assign(t.scrollbar, {updateSize: v, setTranslate: g, init: T, destroy: _})
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;
        i({parallax: {enabled: !1}});
        const s = (e, i) => {
            const {rtl: n} = t, s = c(e), r = n ? -1 : 1, a = s.attr("data-swiper-parallax") || "0";
            let o = s.attr("data-swiper-parallax-x"), l = s.attr("data-swiper-parallax-y");
            const d = s.attr("data-swiper-parallax-scale"), u = s.attr("data-swiper-parallax-opacity");
            if (o || l ? (o = o || "0", l = l || "0") : t.isHorizontal() ? (o = a, l = "0") : (l = a, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i * r + "%" : o * i * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px", null != u) {
                const e = u - (u - 1) * (1 - Math.abs(i));
                s[0].style.opacity = e
            }
            if (null == d) s.transform(`translate3d(${o}, ${l}, 0px)`); else {
                const e = d - (d - 1) * (1 - Math.abs(i));
                s.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`)
            }
        }, r = () => {
            const {$el: e, slides: i, progress: n, snapGrid: r} = t;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                s(e, n)
            }), i.each((e, i) => {
                let a = e.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (a += Math.ceil(i / 2) - n * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), c(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                    s(e, a)
                })
            })
        };
        n("beforeInit", () => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        }), n("init", () => {
            t.params.parallax.enabled && r()
        }), n("setTranslate", () => {
            t.params.parallax.enabled && r()
        }), n("setTransition", (e, i) => {
            t.params.parallax.enabled && function (e) {
                void 0 === e && (e = t.params.speed);
                const {$el: i} = t;
                i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t => {
                    const i = c(t);
                    let n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (n = 0), i.transition(n)
                })
            }(i)
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: n, emit: s} = e;
        const a = r();
        i({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {enabled: !1};
        let o, l, d, u = 1, p = !1;
        const f = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }, m = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }, g = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
        let v = 1;

        function y(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, n = e.targetTouches[1].pageX,
                s = e.targetTouches[1].pageY;
            return Math.sqrt((n - t) ** 2 + (s - i) ** 2)
        }

        function b(e) {
            const i = t.support, n = t.params.zoom;
            if (l = !1, d = !1, !i.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                l = !0, f.scaleStart = y(e)
            }
            f.$slideEl && f.$slideEl.length || (f.$slideEl = c(e.target).closest(`.${t.params.slideClass}`), 0 === f.$slideEl.length && (f.$slideEl = t.slides.eq(t.activeIndex)), f.$imageEl = f.$slideEl.find(`.${n.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${n.containerClass}`), f.maxRatio = f.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== f.$imageWrapEl.length) ? (f.$imageEl && f.$imageEl.transition(0), p = !0) : f.$imageEl = void 0
        }

        function w(e) {
            const i = t.support, n = t.params.zoom, s = t.zoom;
            if (!i.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                d = !0, f.scaleMove = y(e)
            }
            f.$imageEl && 0 !== f.$imageEl.length ? (i.gestures ? s.scale = e.scale * u : s.scale = f.scaleMove / f.scaleStart * u, s.scale > f.maxRatio && (s.scale = f.maxRatio - 1 + (s.scale - f.maxRatio + 1) ** .5), s.scale < n.minRatio && (s.scale = n.minRatio + 1 - (n.minRatio - s.scale + 1) ** .5), f.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)) : "gesturechange" === e.type && b(e)
        }

        function x(e) {
            const i = t.device, n = t.support, s = t.params.zoom, r = t.zoom;
            if (!n.gestures) {
                if (!l || !d) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !i.android) return;
                l = !1, d = !1
            }
            f.$imageEl && 0 !== f.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, f.maxRatio), s.minRatio), f.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), u = r.scale, p = !1, 1 === r.scale && (f.$slideEl = void 0))
        }

        function S(e) {
            const i = t.zoom;
            if (!f.$imageEl || 0 === f.$imageEl.length) return;
            if (t.allowClick = !1, !m.isTouched || !f.$slideEl) return;
            m.isMoved || (m.width = f.$imageEl[0].offsetWidth, m.height = f.$imageEl[0].offsetHeight, m.startX = h(f.$imageWrapEl[0], "x") || 0, m.startY = h(f.$imageWrapEl[0], "y") || 0, f.slideWidth = f.$slideEl[0].offsetWidth, f.slideHeight = f.$slideEl[0].offsetHeight, f.$imageWrapEl.transition(0));
            const n = m.width * i.scale, s = m.height * i.scale;
            if (!(n < f.slideWidth && s < f.slideHeight)) {
                if (m.minX = Math.min(f.slideWidth / 2 - n / 2, 0), m.maxX = -m.minX, m.minY = Math.min(f.slideHeight / 2 - s / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, m.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !m.isMoved && !p) {
                    if (t.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void (m.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void (m.isTouched = !1)
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8), m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = m.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = m.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (m.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (m.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(m.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(m.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = m.touchesCurrent.x, g.prevPositionY = m.touchesCurrent.y, g.prevTime = Date.now(), f.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }
        }

        function E() {
            const e = t.zoom;
            f.$slideEl && t.previousIndex !== t.activeIndex && (f.$imageEl && f.$imageEl.transform("translate3d(0,0,0) scale(1)"), f.$imageWrapEl && f.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, u = 1, f.$slideEl = void 0, f.$imageEl = void 0, f.$imageWrapEl = void 0)
        }

        function T(e) {
            const i = t.zoom, n = t.params.zoom;
            if (f.$slideEl || (e && e.target && (f.$slideEl = c(e.target).closest(`.${t.params.slideClass}`)), f.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? f.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : f.$slideEl = t.slides.eq(t.activeIndex)), f.$imageEl = f.$slideEl.find(`.${n.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${n.containerClass}`)), !f.$imageEl || 0 === f.$imageEl.length || !f.$imageWrapEl || 0 === f.$imageWrapEl.length) return;
            let s, r, o, l, d, p, h, g, v, y, b, w, x, S, E, T, _, C;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), f.$slideEl.addClass(`${n.zoomedSlideClass}`), void 0 === m.touchesStart.x && e ? (s = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (s = m.touchesStart.x, r = m.touchesStart.y), i.scale = f.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, u = f.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, e ? (_ = f.$slideEl[0].offsetWidth, C = f.$slideEl[0].offsetHeight, d = (o = f.$slideEl.offset().left + a.scrollX) + _ / 2 - s, p = (l = f.$slideEl.offset().top + a.scrollY) + C / 2 - r, v = f.$imageEl[0].offsetWidth, y = f.$imageEl[0].offsetHeight, b = v * i.scale, w = y * i.scale, E = -(x = Math.min(_ / 2 - b / 2, 0)), T = -(S = Math.min(C / 2 - w / 2, 0)), (h = d * i.scale) < x && (h = x), h > E && (h = E), (g = p * i.scale) < S && (g = S), g > T && (g = T)) : (h = 0, g = 0), f.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), f.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${i.scale})`)
        }

        function _() {
            const e = t.zoom, i = t.params.zoom;
            f.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? f.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : f.$slideEl = t.slides.eq(t.activeIndex), f.$imageEl = f.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${i.containerClass}`)), f.$imageEl && 0 !== f.$imageEl.length && f.$imageWrapEl && 0 !== f.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, u = 1, f.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), f.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), f.$slideEl.removeClass(`${i.zoomedSlideClass}`), f.$slideEl = void 0)
        }

        function C(e) {
            const i = t.zoom;
            i.scale && 1 !== i.scale ? _() : T(e)
        }

        function M() {
            const e = t.support;
            return {
                passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, activeListenerWithCapture: !e.passiveListener || {passive: !1, capture: !0}
            }
        }

        function k() {
            return `.${t.params.slideClass}`
        }

        function $(e) {
            const {passiveListener: i} = M(), n = k();
            t.$wrapperEl[e]("gesturestart", n, b, i), t.$wrapperEl[e]("gesturechange", n, w, i), t.$wrapperEl[e]("gestureend", n, x, i)
        }

        function P() {
            o || (o = !0, $("on"))
        }

        function A() {
            o && (o = !1, $("off"))
        }

        function O() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const i = t.support, {passiveListener: n, activeListenerWithCapture: s} = M(), r = k();
            i.gestures ? (t.$wrapperEl.on(t.touchEvents.start, P, n), t.$wrapperEl.on(t.touchEvents.end, A, n)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, n), t.$wrapperEl.on(t.touchEvents.move, r, w, s), t.$wrapperEl.on(t.touchEvents.end, r, x, n), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, x, n)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, S, s)
        }

        function z() {
            const e = t.zoom;
            if (!e.enabled) return;
            const i = t.support;
            e.enabled = !1;
            const {passiveListener: n, activeListenerWithCapture: s} = M(), r = k();
            i.gestures ? (t.$wrapperEl.off(t.touchEvents.start, P, n), t.$wrapperEl.off(t.touchEvents.end, A, n)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, n), t.$wrapperEl.off(t.touchEvents.move, r, w, s), t.$wrapperEl.off(t.touchEvents.end, r, x, n), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, x, n)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, S, s)
        }

        Object.defineProperty(t.zoom, "scale", {
            get: () => v, set(e) {
                if (v !== e) {
                    const t = f.$imageEl ? f.$imageEl[0] : void 0, i = f.$slideEl ? f.$slideEl[0] : void 0;
                    s("zoomChange", e, t, i)
                }
                v = e
            }
        }), n("init", () => {
            t.params.zoom.enabled && O()
        }), n("destroy", () => {
            z()
        }), n("touchStart", (e, i) => {
            t.zoom.enabled && function (e) {
                const i = t.device;
                f.$imageEl && 0 !== f.$imageEl.length && (m.isTouched || (i.android && e.cancelable && e.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, m.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(i)
        }), n("touchEnd", (e, i) => {
            t.zoom.enabled && function () {
                const e = t.zoom;
                if (!f.$imageEl || 0 === f.$imageEl.length) return;
                if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void (m.isMoved = !1);
                m.isTouched = !1, m.isMoved = !1;
                let i = 300, n = 300;
                const s = g.x * i, r = m.currentX + s, a = g.y * n, o = m.currentY + a;
                0 !== g.x && (i = Math.abs((r - m.currentX) / g.x)), 0 !== g.y && (n = Math.abs((o - m.currentY) / g.y));
                const l = Math.max(i, n);
                m.currentX = r, m.currentY = o;
                const c = m.width * e.scale, d = m.height * e.scale;
                m.minX = Math.min(f.slideWidth / 2 - c / 2, 0), m.maxX = -m.minX, m.minY = Math.min(f.slideHeight / 2 - d / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), f.$imageWrapEl.transition(l).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }()
        }), n("doubleTap", (e, i) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && C(i)
        }), n("transitionEnd", () => {
            t.zoom.enabled && t.params.zoom.enabled && E()
        }), n("slideChange", () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && E()
        }), Object.assign(t.zoom, {enable: O, disable: z, in: T, out: _, toggle: C})
    }, function (e) {
        let {swiper: t, extendParams: i, on: n, emit: s} = e;
        i({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), t.lazy = {};
        let a = !1, o = !1;

        function l(e, i) {
            void 0 === i && (i = !0);
            const n = t.params.lazy;
            if (void 0 === e) return;
            if (0 === t.slides.length) return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                a = r.find(`.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`);
            !r.hasClass(n.elementClass) || r.hasClass(n.loadedClass) || r.hasClass(n.loadingClass) || a.push(r[0]), 0 !== a.length && a.each(e => {
                const a = c(e);
                a.addClass(n.loadingClass);
                const o = a.attr("data-background"), d = a.attr("data-src"), u = a.attr("data-srcset"),
                    p = a.attr("data-sizes"), h = a.parent("picture");
                t.loadImage(a[0], d || o, u, p, !1, () => {
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (o ? (a.css("background-image", `url("${o}")`), a.removeAttr("data-background")) : (u && (a.attr("srcset", u), a.removeAttr("data-srcset")), p && (a.attr("sizes", p), a.removeAttr("data-sizes")), h.length && h.children("source").each(e => {
                            const t = c(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                        }), d && (a.attr("src", d), a.removeAttr("data-src"))), a.addClass(n.loadedClass).removeClass(n.loadingClass), r.find(`.${n.preloaderClass}`).remove(), t.params.loop && i) {
                            const e = r.attr("data-swiper-slide-index");
                            r.hasClass(t.params.slideDuplicateClass) ? l(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1) : l(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                        }
                        s("lazyImageReady", r[0], a[0]), t.params.autoHeight && t.updateAutoHeight()
                    }
                }), s("lazyImageLoad", r[0], a[0])
            })
        }

        function d() {
            const {$wrapperEl: e, params: i, slides: n, activeIndex: s} = t, r = t.virtual && i.virtual.enabled,
                a = i.lazy;
            let d = i.slidesPerView;

            function u(t) {
                if (r) {
                    if (e.children(`.${i.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                } else if (n[t]) return !0;
                return !1
            }

            function p(e) {
                return r ? c(e).attr("data-swiper-slide-index") : c(e).index()
            }

            if ("auto" === d && (d = 0), o || (o = !0), t.params.watchSlidesProgress) e.children(`.${i.slideVisibleClass}`).each(e => {
                l(r ? c(e).attr("data-swiper-slide-index") : c(e).index())
            }); else if (d > 1) for (let e = s; e < s + d; e += 1) u(e) && l(e); else l(s);
            if (a.loadPrevNext) if (d > 1 || a.loadPrevNextAmount && a.loadPrevNextAmount > 1) {
                const e = a.loadPrevNextAmount, t = d, i = Math.min(s + t + Math.max(e, t), n.length),
                    r = Math.max(s - Math.max(t, e), 0);
                for (let e = s + d; e < i; e += 1) u(e) && l(e);
                for (let e = r; e < s; e += 1) u(e) && l(e)
            } else {
                const t = e.children(`.${i.slideNextClass}`);
                t.length > 0 && l(p(t));
                const n = e.children(`.${i.slidePrevClass}`);
                n.length > 0 && l(p(n))
            }
        }

        function u() {
            const e = r();
            if (!t || t.destroyed) return;
            const i = t.params.lazy.scrollingElement ? c(t.params.lazy.scrollingElement) : c(e), n = i[0] === e,
                s = n ? e.innerWidth : i[0].offsetWidth, o = n ? e.innerHeight : i[0].offsetHeight,
                l = t.$el.offset(), {rtlTranslate: p} = t;
            let h = !1;
            p && (l.left -= t.$el[0].scrollLeft);
            const f = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]];
            for (let e = 0; e < f.length; e += 1) {
                const t = f[e];
                if (t[0] >= 0 && t[0] <= s && t[1] >= 0 && t[1] <= o) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const m = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (d(), i.off("scroll", u, m)) : a || (a = !0, i.on("scroll", u, m))
        }

        n("beforeInit", () => {
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        }), n("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? u() : d())
        }), n("scroll", () => {
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && d()
        }), n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? u() : d())
        }), n("transitionStart", () => {
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !o) && (t.params.lazy.checkInView ? u() : d())
        }), n("transitionEnd", () => {
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? u() : d())
        }), n("slideChange", () => {
            const {lazy: e, cssMode: i, watchSlidesProgress: n, touchReleaseOnEdges: s, resistanceRatio: r} = t.params;
            e.enabled && (i || n && (s || 0 === r)) && d()
        }), Object.assign(t.lazy, {load: d, loadInSlide: l})
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;

        function s(e, t) {
            const i = function () {
                let e, t, i;
                return (n, s) => {
                    for (t = -1, e = n.length; e - t > 1;) n[i = e + t >> 1] <= s ? t = i : e = i;
                    return e
                }
            }();
            let n, s;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (s = i(this.x, e), n = s - 1, (e - this.x[n]) * (this.y[s] - this.y[n]) / (this.x[s] - this.x[n]) + this.y[n]) : 0
            }, this
        }

        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }

        i({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {control: void 0}, n("beforeInit", () => {
            t.controller.control = t.params.controller.control
        }), n("update", () => {
            r()
        }), n("resize", () => {
            r()
        }), n("observerUpdate", () => {
            r()
        }), n("setTranslate", (e, i, n) => {
            t.controller.control && t.controller.setTranslate(i, n)
        }), n("setTransition", (e, i, n) => {
            t.controller.control && t.controller.setTransition(i, n)
        }), Object.assign(t.controller, {
            setTranslate: function (e, i) {
                const n = t.controller.control;
                let r, a;
                const o = t.constructor;

                function l(e) {
                    const i = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (function (e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new s(t.slidesGrid, e.slidesGrid) : new s(t.snapGrid, e.snapGrid))
                    }(e), a = -t.controller.spline.interpolate(-i)), a && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), a = (i - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                if (Array.isArray(n)) for (let e = 0; e < n.length; e += 1) n[e] !== i && n[e] instanceof o && l(n[e]); else n instanceof o && i !== n && l(n)
            }, setTransition: function (e, i) {
                const n = t.constructor, s = t.controller.control;
                let r;

                function a(i) {
                    i.setTransition(e, t), 0 !== e && (i.transitionStart(), i.params.autoHeight && u(() => {
                        i.updateAutoHeight()
                    }), i.$wrapperEl.transitionEnd(() => {
                        s && (i.params.loop && "slide" === t.params.controller.by && i.loopFix(), i.transitionEnd())
                    }))
                }

                if (Array.isArray(s)) for (r = 0; r < s.length; r += 1) s[r] !== i && s[r] instanceof n && a(s[r]); else s instanceof n && i !== s && a(s)
            }
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;
        i({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        });
        let s = null;

        function r(e) {
            const t = s;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function a(e) {
            e.attr("tabIndex", "0")
        }

        function o(e) {
            e.attr("tabIndex", "-1")
        }

        function l(e, t) {
            e.attr("role", t)
        }

        function d(e, t) {
            e.attr("aria-roledescription", t)
        }

        function u(e, t) {
            e.attr("aria-label", t)
        }

        function p(e) {
            e.attr("aria-disabled", !0)
        }

        function h(e) {
            e.attr("aria-disabled", !1)
        }

        function f(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const i = t.params.a11y, n = c(e.target);
            t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(i.lastSlideMessage) : r(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(i.firstSlideMessage) : r(i.prevSlideMessage)), t.pagination && n.is(N(t.params.pagination.bulletClass)) && n[0].click()
        }

        function m() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function g() {
            return m() && t.params.pagination.clickable
        }

        const v = (e, t, i) => {
            a(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", f)), u(e, i), function (e, t) {
                e.attr("aria-controls", t)
            }(e, t)
        }, y = e => {
            const i = e.target.closest(`.${t.params.slideClass}`);
            if (!i || !t.slides.includes(i)) return;
            const n = t.slides.indexOf(i) === t.activeIndex,
                s = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(i);
            n || s || t.slideTo(t.slides.indexOf(i), 0)
        };
        n("beforeInit", () => {
            s = c(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        }), n("afterInit", () => {
            t.params.a11y.enabled && function () {
                const e = t.params.a11y;
                t.$el.append(s);
                const i = t.$el;
                e.containerRoleDescriptionMessage && d(i, e.containerRoleDescriptionMessage), e.containerMessage && u(i, e.containerMessage);
                const n = t.$wrapperEl,
                    r = e.id || n.attr("id") || `swiper-wrapper-${a = 16, void 0 === a && (a = 16), "x".repeat(a).replace(/x/g, () => Math.round(16 * Math.random()).toString(16))}`;
                var a;
                const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var p;
                p = r, n.attr("id", p), function (e, t) {
                    n.attr("aria-live", t)
                }(0, o), e.itemRoleDescriptionMessage && d(c(t.slides), e.itemRoleDescriptionMessage), l(c(t.slides), e.slideRole);
                const h = t.params.loop ? t.slides.filter(e => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
                let m, b;
                t.slides.each((i, n) => {
                    const s = c(i), r = t.params.loop ? parseInt(s.attr("data-swiper-slide-index"), 10) : n;
                    u(s, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, h))
                }), t.navigation && t.navigation.$nextEl && (m = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (b = t.navigation.$prevEl), m && m.length && v(m, r, e.nextSlideMessage), b && b.length && v(b, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", N(t.params.pagination.bulletClass), f), t.$el.on("focus", y, !0)
            }()
        }), n("fromEdge toEdge afterInit lock unlock", () => {
            t.params.a11y.enabled && function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {$nextEl: e, $prevEl: i} = t.navigation;
                i && i.length > 0 && (t.isBeginning ? (p(i), o(i)) : (h(i), a(i))), e && e.length > 0 && (t.isEnd ? (p(e), o(e)) : (h(e), a(e)))
            }()
        }), n("paginationUpdate", () => {
            t.params.a11y.enabled && function () {
                const e = t.params.a11y;
                m() && t.pagination.bullets.each(i => {
                    const n = c(i);
                    t.params.pagination.clickable && (a(n), t.params.pagination.renderBullet || (l(n, "button"), u(n, e.paginationBulletMessage.replace(/\{\{index\}\}/, n.index() + 1)))), n.is(`.${t.params.pagination.bulletActiveClass}`) ? n.attr("aria-current", "true") : n.removeAttr("aria-current")
                })
            }()
        }), n("destroy", () => {
            t.params.a11y.enabled && function () {
                let e, i;
                s && s.length > 0 && s.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl), e && e.off("keydown", f), i && i.off("keydown", f), g() && t.pagination.$el.off("keydown", N(t.params.pagination.bulletClass), f), t.$el.off("focus", y, !0)
            }()
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;
        i({history: {enabled: !1, root: "", replaceState: !1, key: "slides"}});
        let s = !1, a = {};
        const o = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            l = e => {
                const t = r();
                let i;
                const n = (i = e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(e => "" !== e),
                    s = n.length;
                return {key: n[s - 2], value: n[s - 1]}
            }, c = (e, i) => {
                const n = r();
                if (!s || !t.params.history.enabled) return;
                let a;
                a = t.params.url ? new URL(t.params.url) : n.location;
                const l = t.slides.eq(i);
                let c = o(l.attr("data-history"));
                if (t.params.history.root.length > 0) {
                    let i = t.params.history.root;
                    "/" === i[i.length - 1] && (i = i.slice(0, i.length - 1)), c = `${i}/${e}/${c}`
                } else a.pathname.includes(e) || (c = `${e}/${c}`);
                const d = n.history.state;
                d && d.value === c || (t.params.history.replaceState ? n.history.replaceState({value: c}, null, c) : n.history.pushState({value: c}, null, c))
            }, d = (e, i, n) => {
                if (i) for (let s = 0, r = t.slides.length; s < r; s += 1) {
                    const r = t.slides.eq(s);
                    if (o(r.attr("data-history")) === i && !r.hasClass(t.params.slideDuplicateClass)) {
                        const i = r.index();
                        t.slideTo(i, e, n)
                    }
                } else t.slideTo(0, e, n)
            }, u = () => {
                a = l(t.params.url), d(t.params.speed, t.paths.value, !1)
            };
        n("init", () => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                    s = !0, ((a = l(t.params.url)).key || a.value) && (d(0, a.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", u))
                }
            })()
        }), n("destroy", () => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", u)
            })()
        }), n("transitionEnd _freeModeNoMomentumRelease", () => {
            s && c(t.params.history.key, t.activeIndex)
        }), n("slideChange", () => {
            s && t.params.cssMode && c(t.params.history.key, t.activeIndex)
        })
    }, function (e) {
        let {swiper: t, extendParams: i, emit: s, on: a} = e, o = !1;
        const l = n(), d = r();
        i({hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}});
        const u = () => {
            s("hashChange");
            const e = l.location.hash.replace("#", "");
            if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                const i = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                if (void 0 === i) return;
                t.slideTo(i)
            }
        }, p = () => {
            if (o && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && d.history && d.history.replaceState) d.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), s("hashSet"); else {
                const e = t.slides.eq(t.activeIndex), i = e.attr("data-hash") || e.attr("data-history");
                l.location.hash = i || "", s("hashSet")
            }
        };
        a("init", () => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                o = !0;
                const e = l.location.hash.replace("#", "");
                if (e) {
                    const i = 0;
                    for (let n = 0, s = t.slides.length; n < s; n += 1) {
                        const s = t.slides.eq(n);
                        if ((s.attr("data-hash") || s.attr("data-history")) === e && !s.hasClass(t.params.slideDuplicateClass)) {
                            const e = s.index();
                            t.slideTo(e, i, t.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                t.params.hashNavigation.watchState && c(d).on("hashchange", u)
            })()
        }), a("destroy", () => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && c(d).off("hashchange", u)
        }), a("transitionEnd _freeModeNoMomentumRelease", () => {
            o && p()
        }), a("slideChange", () => {
            o && t.params.cssMode && p()
        })
    }, function (e) {
        let t, {swiper: i, extendParams: s, on: r, emit: a} = e;

        function o() {
            const e = i.slides.eq(i.activeIndex);
            let n = i.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (n = e.attr("data-swiper-autoplay") || i.params.autoplay.delay), clearTimeout(t), t = u(() => {
                let e;
                i.params.autoplay.reverseDirection ? i.params.loop ? (i.loopFix(), e = i.slidePrev(i.params.speed, !0, !0), a("autoplay")) : i.isBeginning ? i.params.autoplay.stopOnLastSlide ? c() : (e = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0), a("autoplay")) : (e = i.slidePrev(i.params.speed, !0, !0), a("autoplay")) : i.params.loop ? (i.loopFix(), e = i.slideNext(i.params.speed, !0, !0), a("autoplay")) : i.isEnd ? i.params.autoplay.stopOnLastSlide ? c() : (e = i.slideTo(0, i.params.speed, !0, !0), a("autoplay")) : (e = i.slideNext(i.params.speed, !0, !0), a("autoplay")), (i.params.cssMode && i.autoplay.running || !1 === e) && o()
            }, n)
        }

        function l() {
            return void 0 === t && !i.autoplay.running && (i.autoplay.running = !0, a("autoplayStart"), o(), !0)
        }

        function c() {
            return !!i.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), i.autoplay.running = !1, a("autoplayStop"), !0)
        }

        function d(e) {
            i.autoplay.running && (i.autoplay.paused || (t && clearTimeout(t), i.autoplay.paused = !0, 0 !== e && i.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
                i.$wrapperEl[0].addEventListener(e, h)
            }) : (i.autoplay.paused = !1, o())))
        }

        function p() {
            const e = n();
            "hidden" === e.visibilityState && i.autoplay.running && d(), "visible" === e.visibilityState && i.autoplay.paused && (o(), i.autoplay.paused = !1)
        }

        function h(e) {
            i && !i.destroyed && i.$wrapperEl && e.target === i.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
                i.$wrapperEl[0].removeEventListener(e, h)
            }), i.autoplay.paused = !1, i.autoplay.running ? o() : c())
        }

        function f() {
            i.params.autoplay.disableOnInteraction ? c() : (a("autoplayPause"), d()), ["transitionend", "webkitTransitionEnd"].forEach(e => {
                i.$wrapperEl[0].removeEventListener(e, h)
            })
        }

        function m() {
            i.params.autoplay.disableOnInteraction || (i.autoplay.paused = !1, a("autoplayResume"), o())
        }

        i.autoplay = {running: !1, paused: !1}, s({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), r("init", () => {
            i.params.autoplay.enabled && (l(), n().addEventListener("visibilitychange", p), i.params.autoplay.pauseOnMouseEnter && (i.$el.on("mouseenter", f), i.$el.on("mouseleave", m)))
        }), r("beforeTransitionStart", (e, t, n) => {
            i.autoplay.running && (n || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(t) : c())
        }), r("sliderFirstMove", () => {
            i.autoplay.running && (i.params.autoplay.disableOnInteraction ? c() : d())
        }), r("touchEnd", () => {
            i.params.cssMode && i.autoplay.paused && !i.params.autoplay.disableOnInteraction && o()
        }), r("destroy", () => {
            i.$el.off("mouseenter", f), i.$el.off("mouseleave", m), i.autoplay.running && c(), n().removeEventListener("visibilitychange", p)
        }), Object.assign(i.autoplay, {pause: d, run: o, start: l, stop: c})
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;
        i({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let s = !1, r = !1;

        function a() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const i = e.clickedIndex, n = e.clickedSlide;
            if (n && c(n).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == i) return;
            let s;
            if (s = e.params.loop ? parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"), 10) : i, t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                const i = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index(),
                    n = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
                s = void 0 === i ? n : void 0 === n ? i : n - e < e - i ? n : i
            }
            t.slideTo(s)
        }

        function o() {
            const {thumbs: e} = t.params;
            if (s) return !1;
            s = !0;
            const i = t.constructor;
            if (e.swiper instanceof i) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }); else if (f(e.swiper)) {
                const n = Object.assign({}, e.swiper);
                Object.assign(n, {watchSlidesProgress: !0, slideToClickedSlide: !1}), t.thumbs.swiper = new i(n), r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", a), !0
        }

        function l(e) {
            const i = t.thumbs.swiper;
            if (!i || i.destroyed) return;
            const n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView,
                s = t.params.thumbs.autoScrollOffset, r = s && !i.params.loop;
            if (t.realIndex !== i.realIndex || r) {
                let a, o, l = i.activeIndex;
                if (i.params.loop) {
                    i.slides.eq(l).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, l = i.activeIndex);
                    const e = i.slides.eq(l).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                        n = i.slides.eq(l).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    a = void 0 === e ? n : void 0 === n ? e : n - l == l - e ? i.params.slidesPerGroup > 1 ? n : l : n - l < l - e ? n : e, o = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else o = (a = t.realIndex) > t.previousIndex ? "next" : "prev";
                r && (a += "next" === o ? s : -1 * s), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(a) < 0 && (i.params.centeredSlides ? a = a > l ? a - Math.floor(n / 2) + 1 : a + Math.floor(n / 2) - 1 : a > l && i.params.slidesPerGroup, i.slideTo(a, e ? 0 : void 0))
            }
            let a = 1;
            const o = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (a = 1), a = Math.floor(a), i.slides.removeClass(o), i.params.loop || i.params.virtual && i.params.virtual.enabled) for (let e = 0; e < a; e += 1) i.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(o); else for (let e = 0; e < a; e += 1) i.slides.eq(t.realIndex + e).addClass(o)
        }

        t.thumbs = {swiper: null}, n("beforeInit", () => {
            const {thumbs: e} = t.params;
            e && e.swiper && (o(), l(!0))
        }), n("slideChange update resize observerUpdate", () => {
            l()
        }), n("setTransition", (e, i) => {
            const n = t.thumbs.swiper;
            n && !n.destroyed && n.setTransition(i)
        }), n("beforeDestroy", () => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        }), Object.assign(t.thumbs, {init: o, update: l})
    }, function (e) {
        let {swiper: t, extendParams: i, emit: n, once: s} = e;
        i({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function () {
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({currentPos: t.rtl ? t.translate : -t.translate})
                }, onTouchMove: function () {
                    const {touchEventsData: e, touches: i} = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: i[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({position: i[t.isHorizontal() ? "currentX" : "currentY"], time: p()})
                }, onTouchEnd: function (e) {
                    let {currentPos: i} = e;
                    const {params: r, $wrapperEl: a, rtlTranslate: o, snapGrid: l, touchEventsData: c} = t,
                        d = p() - c.touchStartTime;
                    if (i < -t.minTranslate()) t.slideTo(t.activeIndex); else if (i > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1); else {
                        if (r.freeMode.momentum) {
                            if (c.velocities.length > 1) {
                                const e = c.velocities.pop(), i = c.velocities.pop(), n = e.position - i.position,
                                    s = e.time - i.time;
                                t.velocity = n / s, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (s > 150 || p() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const i = t.velocity * e;
                            let d = t.translate + i;
                            o && (d = -d);
                            let u, h = !1;
                            const f = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let m;
                            if (d < t.maxTranslate()) r.freeMode.momentumBounce ? (d + t.maxTranslate() < -f && (d = t.maxTranslate() - f), u = t.maxTranslate(), h = !0, c.allowMomentumBounce = !0) : d = t.maxTranslate(), r.loop && r.centeredSlides && (m = !0); else if (d > t.minTranslate()) r.freeMode.momentumBounce ? (d - t.minTranslate() > f && (d = t.minTranslate() + f), u = t.minTranslate(), h = !0, c.allowMomentumBounce = !0) : d = t.minTranslate(), r.loop && r.centeredSlides && (m = !0); else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < l.length; t += 1) if (l[t] > -d) {
                                    e = t;
                                    break
                                }
                                d = -(d = Math.abs(l[e] - d) < Math.abs(l[e - 1] - d) || "next" === t.swipeDirection ? l[e] : l[e - 1])
                            }
                            if (m && s("transitionEnd", () => {
                                t.loopFix()
                            }), 0 !== t.velocity) {
                                if (e = o ? Math.abs((-d - t.translate) / t.velocity) : Math.abs((d - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const i = Math.abs((o ? -d : d) - t.translate),
                                        n = t.slidesSizesGrid[t.activeIndex];
                                    e = i < n ? r.speed : i < 2 * n ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && h ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(() => {
                                t && !t.destroyed && c.allowMomentumBounce && (n("momentumBounce"), t.setTransition(r.speed), setTimeout(() => {
                                    t.setTranslate(u), a.transitionEnd(() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    })
                                }, 0))
                            })) : t.velocity ? (n("_freeModeNoMomentumRelease"), t.updateProgress(d), t.setTransition(e), t.setTranslate(d), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(() => {
                                t && !t.destroyed && t.transitionEnd()
                            }))) : t.updateProgress(d), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && n("_freeModeNoMomentumRelease")
                        }
                        (!r.freeMode.momentum || d >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function (e) {
        let t, i, n, {swiper: s, extendParams: r} = e;
        r({grid: {rows: 1, fill: "column"}}), s.grid = {
            initSlides: e => {
                const {slidesPerView: r} = s.params, {rows: a, fill: o} = s.params.grid;
                i = t / a, n = Math.floor(e / a), t = Math.floor(e / a) === e / a ? e : Math.ceil(e / a) * a, "auto" !== r && "row" === o && (t = Math.max(t, r * a))
            }, updateSlide: (e, r, a, o) => {
                const {slidesPerGroup: l, spaceBetween: c} = s.params, {rows: d, fill: u} = s.params.grid;
                let p, h, f;
                if ("row" === u && l > 1) {
                    const i = Math.floor(e / (l * d)), n = e - d * l * i,
                        s = 0 === i ? l : Math.min(Math.ceil((a - i * d * l) / d), l);
                    p = (h = n - (f = Math.floor(n / s)) * s + i * l) + f * t / d, r.css({"-webkit-order": p, order: p})
                } else "column" === u ? (f = e - (h = Math.floor(e / d)) * d, (h > n || h === n && f === d - 1) && ((f += 1) >= d && (f = 0, h += 1))) : h = e - (f = Math.floor(e / i)) * i;
                r.css(o("margin-top"), 0 !== f ? c && `${c}px` : "")
            }, updateWrapperSize: (e, i, n) => {
                const {spaceBetween: r, centeredSlides: a, roundLengths: o} = s.params, {rows: l} = s.params.grid;
                if (s.virtualSize = (e + r) * t, s.virtualSize = Math.ceil(s.virtualSize / l) - r, s.$wrapperEl.css({[n("width")]: `${s.virtualSize + r}px`}), a) {
                    i.splice(0, i.length);
                    const e = [];
                    for (let t = 0; t < i.length; t += 1) {
                        let n = i[t];
                        o && (n = Math.floor(n)), i[t] < s.virtualSize + i[0] && e.push(n)
                    }
                    i.push(...e)
                }
            }
        }
    }, function (e) {
        let {swiper: t} = e;
        Object.assign(t, {
            appendSlide: B.bind(t),
            prependSlide: V.bind(t),
            addSlide: j.bind(t),
            removeSlide: R.bind(t),
            removeAllSlides: F.bind(t)
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;
        i({fadeEffect: {crossFade: !1, transformEl: null}}), X({
            effect: "fade",
            swiper: t,
            on: n,
            setTranslate: () => {
                const {slides: e} = t, i = t.params.fadeEffect;
                for (let n = 0; n < e.length; n += 1) {
                    const e = t.slides.eq(n);
                    let s = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (s -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = s, s = 0);
                    const a = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    Y(i, e).css({opacity: a}).transform(`translate3d(${s}px, ${r}px, 0px)`)
                }
            },
            setTransition: e => {
                const {transformEl: i} = t.params.fadeEffect;
                (i ? t.slides.find(i) : t.slides).transition(e), H({
                    swiper: t,
                    duration: e,
                    transformEl: i,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;
        i({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
        const s = (e, t, i) => {
            let n = i ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                s = i ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === n.length && (n = c(`<div class="swiper-slide-shadow-${i ? "left" : "top"}"></div>`), e.append(n)), 0 === s.length && (s = c(`<div class="swiper-slide-shadow-${i ? "right" : "bottom"}"></div>`), e.append(s)), n.length && (n[0].style.opacity = Math.max(-t, 0)), s.length && (s[0].style.opacity = Math.max(t, 0))
        };
        X({
            effect: "cube",
            swiper: t,
            on: n,
            setTranslate: () => {
                const {$el: e, $wrapperEl: i, slides: n, width: r, height: a, rtlTranslate: o, size: l, browser: d} = t,
                    u = t.params.cubeEffect, p = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled;
                let f, m = 0;
                u.shadow && (p ? (0 === (f = i.find(".swiper-cube-shadow")).length && (f = c('<div class="swiper-cube-shadow"></div>'), i.append(f)), f.css({height: `${r}px`})) : 0 === (f = e.find(".swiper-cube-shadow")).length && (f = c('<div class="swiper-cube-shadow"></div>'), e.append(f)));
                for (let e = 0; e < n.length; e += 1) {
                    const t = n.eq(e);
                    let i = e;
                    h && (i = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * i, a = Math.floor(r / 360);
                    o && (r = -r, a = Math.floor(-r / 360));
                    const c = Math.max(Math.min(t[0].progress, 1), -1);
                    let d = 0, f = 0, g = 0;
                    i % 4 == 0 ? (d = 4 * -a * l, g = 0) : (i - 1) % 4 == 0 ? (d = 0, g = 4 * -a * l) : (i - 2) % 4 == 0 ? (d = l + 4 * a * l, g = l) : (i - 3) % 4 == 0 && (d = -l, g = 3 * l + 4 * l * a), o && (d = -d), p || (f = d, d = 0);
                    const v = `rotateX(${p ? 0 : -r}deg) rotateY(${p ? r : 0}deg) translate3d(${d}px, ${f}px, ${g}px)`;
                    c <= 1 && c > -1 && (m = 90 * i + 90 * c, o && (m = 90 * -i - 90 * c)), t.transform(v), u.slideShadows && s(t, c, p)
                }
                if (i.css({
                    "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                    "transform-origin": `50% 50% -${l / 2}px`
                }), u.shadow) if (p) f.transform(`translate3d(0px, ${r / 2 + u.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${u.shadowScale})`); else {
                    const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                        t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                        i = u.shadowScale, n = u.shadowScale / t, s = u.shadowOffset;
                    f.transform(`scale3d(${i}, 1, ${n}) translate3d(0px, ${a / 2 + s}px, ${-a / 2 / n}px) rotateX(-90deg)`)
                }
                const g = d.isSafari || d.isWebView ? -l / 2 : 0;
                i.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : m}deg) rotateY(${t.isHorizontal() ? -m : 0}deg)`), i[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {$el: i, slides: n} = t;
                n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && i.find(".swiper-cube-shadow").transition(e)
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.each(t => {
                    const i = Math.max(Math.min(t.progress, 1), -1);
                    s(c(t), i, e)
                })
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;
        i({flipEffect: {slideShadows: !0, limitRotation: !0, transformEl: null}});
        const s = (e, i, n) => {
            let s = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === s.length && (s = q(n, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = q(n, e, t.isHorizontal() ? "right" : "bottom")), s.length && (s[0].style.opacity = Math.max(-i, 0)), r.length && (r[0].style.opacity = Math.max(i, 0))
        };
        X({
            effect: "flip",
            swiper: t,
            on: n,
            setTranslate: () => {
                const {slides: e, rtlTranslate: i} = t, n = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const a = e.eq(r);
                    let o = a[0].progress;
                    t.params.flipEffect.limitRotation && (o = Math.max(Math.min(a[0].progress, 1), -1));
                    const l = a[0].swiperSlideOffset;
                    let c = -180 * o, d = 0, u = t.params.cssMode ? -l - t.translate : -l, p = 0;
                    t.isHorizontal() ? i && (c = -c) : (p = u, u = 0, d = -c, c = 0), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length, n.slideShadows && s(a, o, n);
                    const h = `translate3d(${u}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${c}deg)`;
                    Y(n, a).transform(h)
                }
            },
            setTransition: e => {
                const {transformEl: i} = t.params.flipEffect;
                (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), H({
                    swiper: t,
                    duration: e,
                    transformEl: i
                })
            },
            recreateShadows: () => {
                const e = t.params.flipEffect;
                t.slides.each(i => {
                    const n = c(i);
                    let r = n[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(i.progress, 1), -1)), s(n, r, e)
                })
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;
        i({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), X({
            effect: "coverflow", swiper: t, on: n, setTranslate: () => {
                const {width: e, height: i, slides: n, slidesSizesGrid: s} = t, r = t.params.coverflowEffect,
                    a = t.isHorizontal(), o = t.translate, l = a ? e / 2 - o : i / 2 - o, c = a ? r.rotate : -r.rotate,
                    d = r.depth;
                for (let e = 0, t = n.length; e < t; e += 1) {
                    const t = n.eq(e), i = s[e], o = (l - t[0].swiperSlideOffset - i / 2) / i,
                        u = "function" == typeof r.modifier ? r.modifier(o) : o * r.modifier;
                    let p = a ? c * u : 0, h = a ? 0 : c * u, f = -d * Math.abs(u), m = r.stretch;
                    "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(r.stretch) / 100 * i);
                    let g = a ? 0 : m * u, v = a ? m * u : 0, y = 1 - (1 - r.scale) * Math.abs(u);
                    Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(h) < .001 && (h = 0), Math.abs(y) < .001 && (y = 0);
                    const b = `translate3d(${v}px,${g}px,${f}px)  rotateX(${h}deg) rotateY(${p}deg) scale(${y})`;
                    if (Y(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(u)), r.slideShadows) {
                        let e = a ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            i = a ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = q(r, t, a ? "left" : "top")), 0 === i.length && (i = q(r, t, a ? "right" : "bottom")), e.length && (e[0].style.opacity = u > 0 ? u : 0), i.length && (i[0].style.opacity = -u > 0 ? -u : 0)
                    }
                }
            }, setTransition: e => {
                const {transformEl: i} = t.params.coverflowEffect;
                (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;
        i({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
                next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
            }
        });
        const s = e => "string" == typeof e ? e : `${e}px`;
        X({
            effect: "creative",
            swiper: t,
            on: n,
            setTranslate: () => {
                const {slides: e, $wrapperEl: i, slidesSizesGrid: n} = t,
                    r = t.params.creativeEffect, {progressMultiplier: a} = r, o = t.params.centeredSlides;
                if (o) {
                    const e = n[0] / 2 - t.params.slidesOffsetBefore || 0;
                    i.transform(`translateX(calc(50% - ${e}px))`)
                }
                for (let i = 0; i < e.length; i += 1) {
                    const n = e.eq(i), l = n[0].progress,
                        c = Math.min(Math.max(n[0].progress, -r.limitProgress), r.limitProgress);
                    let d = c;
                    o || (d = Math.min(Math.max(n[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const u = n[0].swiperSlideOffset, p = [t.params.cssMode ? -u - t.translate : -u, 0, 0],
                        h = [0, 0, 0];
                    let f = !1;
                    t.isHorizontal() || (p[1] = p[0], p[0] = 0);
                    let m = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
                    c < 0 ? (m = r.next, f = !0) : c > 0 && (m = r.prev, f = !0), p.forEach((e, t) => {
                        p[t] = `calc(${e}px + (${s(m.translate[t])} * ${Math.abs(c * a)}))`
                    }), h.forEach((e, t) => {
                        h[t] = m.rotate[t] * Math.abs(c * a)
                    }), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length;
                    const g = p.join(", "), v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        y = d < 0 ? `scale(${1 + (1 - m.scale) * d * a})` : `scale(${1 - (1 - m.scale) * d * a})`,
                        b = d < 0 ? 1 + (1 - m.opacity) * d * a : 1 - (1 - m.opacity) * d * a,
                        w = `translate3d(${g}) ${v} ${y}`;
                    if (f && m.shadow || !f) {
                        let e = n.children(".swiper-slide-shadow");
                        if (0 === e.length && m.shadow && (e = q(r, n)), e.length) {
                            const t = r.shadowPerProgress ? c * (1 / r.limitProgress) : c;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const x = Y(r, n);
                    x.transform(w).css({opacity: b}), m.origin && x.css("transform-origin", m.origin)
                }
            },
            setTransition: e => {
                const {transformEl: i} = t.params.creativeEffect;
                (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), H({
                    swiper: t,
                    duration: e,
                    transformEl: i,
                    allSlides: !0
                })
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
        })
    }, function (e) {
        let {swiper: t, extendParams: i, on: n} = e;
        i({cardsEffect: {slideShadows: !0, transformEl: null, rotate: !0}}), X({
            effect: "cards",
            swiper: t,
            on: n,
            setTranslate: () => {
                const {slides: e, activeIndex: i} = t, n = t.params.cardsEffect, {
                    startTranslate: s,
                    isTouched: r
                } = t.touchEventsData, a = t.translate;
                for (let o = 0; o < e.length; o += 1) {
                    const l = e.eq(o), c = l[0].progress, d = Math.min(Math.max(c, -4), 4);
                    let u = l[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                    let p = t.params.cssMode ? -u - t.translate : -u, h = 0;
                    const f = -100 * Math.abs(d);
                    let m = 1, g = -2 * d, v = 8 - .75 * Math.abs(d);
                    const y = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
                        b = (y === i || y === i - 1) && d > 0 && d < 1 && (r || t.params.cssMode) && a < s,
                        w = (y === i || y === i + 1) && d < 0 && d > -1 && (r || t.params.cssMode) && a > s;
                    if (b || w) {
                        const e = (1 - Math.abs((Math.abs(d) - .5) / .5)) ** .5;
                        g += -28 * d * e, m += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(d) + "%"
                    }
                    if (p = d < 0 ? `calc(${p}px + (${v * Math.abs(d)}%))` : d > 0 ? `calc(${p}px + (-${v * Math.abs(d)}%))` : `${p}px`, !t.isHorizontal()) {
                        const e = h;
                        h = p, p = e
                    }
                    const x = d < 0 ? "" + (1 + (1 - m) * d) : "" + (1 - (1 - m) * d),
                        S = `\n        translate3d(${p}, ${h}, ${f}px)\n        rotateZ(${n.rotate ? g : 0}deg)\n        scale(${x})\n      `;
                    if (n.slideShadows) {
                        let e = l.find(".swiper-slide-shadow");
                        0 === e.length && (e = q(n, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(d) - .5) / .5, 0), 1))
                    }
                    l[0].style.zIndex = -Math.abs(Math.round(c)) + e.length, Y(n, l).transform(S)
                }
            },
            setTransition: e => {
                const {transformEl: i} = t.params.cardsEffect;
                (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), H({
                    swiper: t,
                    duration: e,
                    transformEl: i
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
        })
    }];
    return I.use(G), I
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).LazyLoad = t()
}(this, function () {
    "use strict";

    function e() {
        return (e = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }

    var t = "undefined" != typeof window,
        i = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        n = t && "IntersectionObserver" in window, s = t && "classList" in document.createElement("p"),
        r = t && window.devicePixelRatio > 1, a = {
            elements_selector: ".lazy",
            container: i || t ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_bg_hidpi: "bg-hidpi",
            data_bg_multi: "bg-multi",
            data_bg_multi_hidpi: "bg-multi-hidpi",
            data_poster: "poster",
            class_applied: "applied",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            unobserve_completed: !0,
            unobserve_entered: !1,
            cancel_on_exit: !0,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            callback_cancel: null,
            use_native: !1
        }, o = function (t) {
            return e({}, a, t)
        }, l = function (e, t) {
            var i, n = new e(t);
            try {
                i = new CustomEvent("LazyLoad::Initialized", {detail: {instance: n}})
            } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {instance: n})
            }
            window.dispatchEvent(i)
        }, c = function (e, t) {
            return e.getAttribute("data-" + t)
        }, d = function (e, t, i) {
            var n = "data-" + t;
            null !== i ? e.setAttribute(n, i) : e.removeAttribute(n)
        }, u = function (e) {
            return c(e, "ll-status")
        }, p = function (e, t) {
            return d(e, "ll-status", t)
        }, h = function (e) {
            return p(e, null)
        }, f = function (e) {
            return null === u(e)
        }, m = function (e) {
            return "native" === u(e)
        }, g = ["loading", "loaded", "applied", "error"], v = function (e, t, i, n) {
            e && (void 0 === n ? void 0 === i ? e(t) : e(t, i) : e(t, i, n))
        }, y = function (e, t) {
            s ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
        }, b = function (e, t) {
            s ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        }, w = function (e) {
            return e.llTempImage
        }, x = function (e, t) {
            if (t) {
                var i = t._observer;
                i && i.unobserve(e)
            }
        }, S = function (e, t) {
            e && (e.loadingCount += t)
        }, E = function (e, t) {
            e && (e.toLoadCount = t)
        }, T = function (e) {
            for (var t, i = [], n = 0; t = e.children[n]; n += 1) "SOURCE" === t.tagName && i.push(t);
            return i
        }, _ = function (e, t, i) {
            i && e.setAttribute(t, i)
        }, C = function (e, t) {
            e.removeAttribute(t)
        }, M = function (e) {
            return !!e.llOriginalAttrs
        }, k = function (e) {
            if (!M(e)) {
                var t = {};
                t.src = e.getAttribute("src"), t.srcset = e.getAttribute("srcset"), t.sizes = e.getAttribute("sizes"), e.llOriginalAttrs = t
            }
        }, $ = function (e) {
            if (M(e)) {
                var t = e.llOriginalAttrs;
                _(e, "src", t.src), _(e, "srcset", t.srcset), _(e, "sizes", t.sizes)
            }
        }, P = function (e, t) {
            _(e, "sizes", c(e, t.data_sizes)), _(e, "srcset", c(e, t.data_srcset)), _(e, "src", c(e, t.data_src))
        }, A = function (e) {
            C(e, "src"), C(e, "srcset"), C(e, "sizes")
        }, O = function (e, t) {
            var i = e.parentNode;
            i && "PICTURE" === i.tagName && T(i).forEach(t)
        }, z = function (e, t) {
            T(e).forEach(t)
        }, L = {
            IMG: function (e, t) {
                O(e, function (e) {
                    k(e), P(e, t)
                }), k(e), P(e, t)
            }, IFRAME: function (e, t) {
                _(e, "src", c(e, t.data_src))
            }, VIDEO: function (e, t) {
                z(e, function (e) {
                    _(e, "src", c(e, t.data_src))
                }), _(e, "poster", c(e, t.data_poster)), _(e, "src", c(e, t.data_src)), e.load()
            }
        }, I = function (e, t) {
            var i = L[e.tagName];
            i && i(e, t)
        }, D = function (e, t, i) {
            S(i, 1), y(e, t.class_loading), p(e, "loading"), v(t.callback_loading, e, i)
        }, N = {
            IMG: function (e, t) {
                d(e, t.data_src, null), d(e, t.data_srcset, null), d(e, t.data_sizes, null), O(e, function (e) {
                    d(e, t.data_srcset, null), d(e, t.data_sizes, null)
                })
            }, IFRAME: function (e, t) {
                d(e, t.data_src, null)
            }, VIDEO: function (e, t) {
                d(e, t.data_src, null), d(e, t.data_poster, null), z(e, function (e) {
                    d(e, t.data_src, null)
                })
            }
        }, B = function (e, t) {
            var i = N[e.tagName];
            i ? i(e, t) : function (e, t) {
                d(e, t.data_bg, null), d(e, t.data_bg_hidpi, null)
            }(e, t)
        }, V = ["IMG", "IFRAME", "VIDEO"], j = function (e, t) {
            !t || t.loadingCount > 0 || t.toLoadCount > 0 || v(e.callback_finish, t)
        }, R = function (e, t, i) {
            e.addEventListener(t, i), e.llEvLisnrs[t] = i
        }, F = function (e, t, i) {
            e.removeEventListener(t, i)
        }, X = function (e) {
            return !!e.llEvLisnrs
        }, Y = function (e) {
            if (X(e)) {
                var t = e.llEvLisnrs;
                for (var i in t) {
                    var n = t[i];
                    F(e, i, n)
                }
                delete e.llEvLisnrs
            }
        }, H = function (e, t, i) {
            !function (e) {
                delete e.llTempImage
            }(e), S(i, -1), i && (i.toLoadCount -= 1), b(e, t.class_loading), t.unobserve_completed && x(e, i)
        }, q = function (e, t, i) {
            var n = w(e) || e;
            X(n) || function (e, t, i) {
                X(e) || (e.llEvLisnrs = {});
                var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                R(e, n, t), R(e, "error", i)
            }(n, function (s) {
                !function (e, t, i, n) {
                    var s = m(t);
                    H(t, i, n), y(t, i.class_loaded), p(t, "loaded"), B(t, i), v(i.callback_loaded, t, n), s || j(i, n)
                }(0, e, t, i), Y(n)
            }, function (s) {
                !function (e, t, i, n) {
                    var s = m(t);
                    H(t, i, n), y(t, i.class_error), p(t, "error"), v(i.callback_error, t, n), s || j(i, n)
                }(0, e, t, i), Y(n)
            })
        }, G = function (e, t, i) {
            !function (e) {
                e.llTempImage = document.createElement("IMG")
            }(e), q(e, t, i), function (e, t, i) {
                var n = c(e, t.data_bg), s = c(e, t.data_bg_hidpi), a = r && s ? s : n;
                a && (e.style.backgroundImage = 'url("'.concat(a, '")'), w(e).setAttribute("src", a), D(e, t, i))
            }(e, t, i), function (e, t, i) {
                var n = c(e, t.data_bg_multi), s = c(e, t.data_bg_multi_hidpi), a = r && s ? s : n;
                a && (e.style.backgroundImage = a, function (e, t, i) {
                    y(e, t.class_applied), p(e, "applied"), function (e, t) {
                        d(e, t.data_bg_multi, null), d(e, t.data_bg_multi_hidpi, null)
                    }(e, t), t.unobserve_completed && x(e, t), v(t.callback_applied, e, i)
                }(e, t, i))
            }(e, t, i)
        }, W = function (e, t, i) {
            !function (e) {
                return V.indexOf(e.tagName) > -1
            }(e) ? G(e, t, i) : function (e, t, i) {
                q(e, t, i), I(e, t), D(e, t, i)
            }(e, t, i)
        }, U = ["IMG", "IFRAME"], Z = function (e) {
            return e.use_native && "loading" in HTMLImageElement.prototype
        }, Q = function (e) {
            return Array.prototype.slice.call(e)
        }, K = function (e) {
            return e.container.querySelectorAll(e.elements_selector)
        }, J = function (e) {
            return function (e) {
                return "error" === u(e)
            }(e)
        }, ee = function (e, t) {
            return function (e) {
                return Q(e).filter(f)
            }(e || K(t))
        }, te = function (e, i) {
            var s = o(e);
            this._settings = s, this.loadingCount = 0, function (e, t) {
                n && !Z(e) && (t._observer = new IntersectionObserver(function (i) {
                    !function (e, t, i) {
                        e.forEach(function (e) {
                            return function (e) {
                                return e.isIntersecting || e.intersectionRatio > 0
                            }(e) ? function (e, t, i, n) {
                                p(e, "entered"), function (e, t, i) {
                                    t.unobserve_entered && x(e, i)
                                }(e, i, n), v(i.callback_enter, e, t, n), function (e) {
                                    return g.indexOf(u(e)) >= 0
                                }(e) || W(e, i, n)
                            }(e.target, e, t, i) : function (e, t, i, n) {
                                f(e) || (function (e, t, i, n) {
                                    i.cancel_on_exit && function (e) {
                                        return "loading" === u(e)
                                    }(e) && "IMG" === e.tagName && (Y(e), function (e) {
                                        O(e, function (e) {
                                            A(e)
                                        }), A(e)
                                    }(e), function (e) {
                                        O(e, function (e) {
                                            $(e)
                                        }), $(e)
                                    }(e), b(e, i.class_loading), S(n, -1), h(e), v(i.callback_cancel, e, t, n))
                                }(e, t, i, n), v(i.callback_exit, e, t, n))
                            }(e.target, e, t, i)
                        })
                    }(i, e, t)
                }, function (e) {
                    return {
                        root: e.container === document ? null : e.container,
                        rootMargin: e.thresholds || e.threshold + "px"
                    }
                }(e)))
            }(s, this), function (e, i) {
                t && window.addEventListener("online", function () {
                    !function (e, t) {
                        var i;
                        (i = K(e), Q(i).filter(J)).forEach(function (t) {
                            b(t, e.class_error), h(t)
                        }), t.update()
                    }(e, i)
                })
            }(s, this), this.update(i)
        };
    return te.prototype = {
        update: function (e) {
            var t, s, r = this._settings, a = ee(e, r);
            E(this, a.length), !i && n ? Z(r) ? function (e, t, i) {
                a.forEach(function (e) {
                    -1 !== U.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), function (e, t, i) {
                        q(e, t, i), I(e, t), B(e, t), p(e, "native")
                    }(e, t, i))
                }), E(i, 0)
            }(0, r, this) : (s = a, function (e) {
                e.disconnect()
            }(t = this._observer), function (e, t) {
                s.forEach(function (t) {
                    e.observe(t)
                })
            }(t)) : this.loadAll(a)
        }, destroy: function () {
            this._observer && this._observer.disconnect(), K(this._settings).forEach(function (e) {
                delete e.llOriginalAttrs
            }), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount
        }, loadAll: function (e) {
            var t = this, i = this._settings;
            ee(e, i).forEach(function (e) {
                x(e, t), W(e, i, t)
            })
        }
    }, te.load = function (e, t) {
        var i = o(t);
        W(e, i)
    }, te.resetStatus = function (e) {
        h(e)
    }, t && function (e, t) {
        if (t) if (t.length) for (var i, n = 0; i = t[n]; n += 1) l(e, i); else l(e, t)
    }(te, window.lazyLoadOptions), te
}), function (e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var s = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }

    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var s in e) i.d(n, s, function (t) {
            return e[t]
        }.bind(null, s));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 10)
}([, , function (e, t) {
    e.exports = function (e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, function (e, t, i) {
    (function (t) {
        var i = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
        e.exports = i
    }).call(this, i(4))
}, function (e, t) {
    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    var n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window)
    }
    e.exports = n
}, , , , , , function (e, t, i) {
    e.exports = i(11)
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(2), s = i.n(n), r = i(3), a = i(12);

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    var l, c, d = r.window.jarallax;
    r.window.jarallax = a.default, r.window.jarallax.noConflict = function () {
        return r.window.jarallax = d, this
    }, void 0 !== r.jQuery && ((l = function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        Array.prototype.unshift.call(t, this);
        var n = a.default.apply(r.window, t);
        return "object" !== o(n) ? n : this
    }).constructor = a.default.constructor, c = r.jQuery.fn.jarallax, r.jQuery.fn.jarallax = l, r.jQuery.fn.jarallax.noConflict = function () {
        return r.jQuery.fn.jarallax = c, this
    }), s()(function () {
        Object(a.default)(document.querySelectorAll("[data-jarallax]"))
    })
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(2), s = i.n(n), r = i(3);

    function a(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var i = [], n = !0, s = !1, r = void 0;
                try {
                    for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done) && (i.push(a.value), !t || i.length !== t); n = !0) ;
                } catch (e) {
                    s = !0, r = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (s) throw r
                    }
                }
                return i
            }
        }(e, t) || function (e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? o(e, t) : void 0
            }
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
    }

    function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    var d, u, p = r.window.navigator,
        h = -1 < p.userAgent.indexOf("MSIE ") || -1 < p.userAgent.indexOf("Trident/") || -1 < p.userAgent.indexOf("Edge/"),
        f = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent), m = function () {
            for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), i = 0; i < e.length; i += 1) if (t && void 0 !== t.style[e[i]]) return e[i];
            return !1
        }();

    function g() {
        u = f ? (!d && document.body && ((d = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(d)), (d ? d.clientHeight : 0) || r.window.innerHeight || document.documentElement.clientHeight) : r.window.innerHeight || document.documentElement.clientHeight
    }

    g(), r.window.addEventListener("resize", g), r.window.addEventListener("orientationchange", g), r.window.addEventListener("load", g), s()(function () {
        g()
    });
    var v = [];

    function y() {
        v.length && (v.forEach(function (e, t) {
            var i = e.instance, n = e.oldData, s = i.$item.getBoundingClientRect(), a = {
                    width: s.width,
                    height: s.height,
                    top: s.top,
                    bottom: s.bottom,
                    wndW: r.window.innerWidth,
                    wndH: u
                }, o = !n || n.wndW !== a.wndW || n.wndH !== a.wndH || n.width !== a.width || n.height !== a.height,
                l = o || !n || n.top !== a.top || n.bottom !== a.bottom;
            v[t].oldData = a, o && i.onResize(), l && i.onScroll()
        }), r.window.requestAnimationFrame(y))
    }

    function b(e, t) {
        ("object" === ("undefined" == typeof HTMLElement ? "undefined" : l(HTMLElement)) ? e instanceof HTMLElement : e && "object" === l(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        for (var i, n = e.length, s = 0, r = arguments.length, a = new Array(2 < r ? r - 2 : 0), o = 2; o < r; o++) a[o - 2] = arguments[o];
        for (; s < n; s += 1) if ("object" === l(t) || void 0 === t ? e[s].jarallax || (e[s].jarallax = new x(e[s], t)) : e[s].jarallax && (i = e[s].jarallax[t].apply(e[s].jarallax, a)), void 0 !== i) return i;
        return e
    }

    var w = 0, x = function () {
        function e(t, i) {
            !function (t, i) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this);
            var n = this;
            n.instanceID = w, w += 1, n.$item = t, n.defaults = {
                type: "scroll",
                speed: .5,
                imgSrc: null,
                imgElement: ".jarallax-img",
                imgSize: "cover",
                imgPosition: "50% 50%",
                imgRepeat: "no-repeat",
                keepImg: !1,
                elementInViewport: null,
                zIndex: -100,
                disableParallax: !1,
                disableVideo: !1,
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoLoop: !0,
                videoPlayOnlyVisible: !0,
                videoLazyLoading: !0,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null
            };
            var s, r, o = n.$item.dataset || {}, c = {};
            Object.keys(o).forEach(function (e) {
                var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                t && void 0 !== n.defaults[t] && (c[t] = o[e])
            }), n.options = n.extend({}, n.defaults, c, i), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function (e) {
                "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
            }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp && (s = n.options.disableParallax, n.options.disableParallax = function () {
                return s.test(p.userAgent)
            }), "function" != typeof n.options.disableParallax && (n.options.disableParallax = function () {
                return !1
            }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp && (r = n.options.disableVideo, n.options.disableVideo = function () {
                return r.test(p.userAgent)
            }), "function" != typeof n.options.disableVideo && (n.options.disableVideo = function () {
                return !1
            });
            var d = n.options.elementInViewport;
            d && "object" === l(d) && void 0 !== d.length && (d = a(d, 1)[0]), d instanceof Element || (d = null), n.options.elementInViewport = d, n.image = {
                src: n.options.imgSrc || null,
                $container: null,
                useImgTag: !1,
                position: /iPad|iPhone|iPod|Android/.test(p.userAgent) ? "absolute" : "fixed"
            }, n.initImg() && n.canInitParallax() && n.init()
        }

        var t, i;
        return t = e, (i = [{
            key: "css", value: function (e, t) {
                return "string" == typeof t ? r.window.getComputedStyle(e).getPropertyValue(t) : (t.transform && m && (t[m] = t.transform), Object.keys(t).forEach(function (i) {
                    e.style[i] = t[i]
                }), e)
            }
        }, {
            key: "extend", value: function (e) {
                for (var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                return e = e || {}, Object.keys(i).forEach(function (t) {
                    i[t] && Object.keys(i[t]).forEach(function (n) {
                        e[n] = i[t][n]
                    })
                }), e
            }
        }, {
            key: "getWindowData", value: function () {
                return {
                    width: r.window.innerWidth || document.documentElement.clientWidth,
                    height: u,
                    y: document.documentElement.scrollTop
                }
            }
        }, {
            key: "initImg", value: function () {
                var e = this, t = e.options.imgElement;
                return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !(!e.image.$item && (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !e.image.bgImage || "none" === e.image.bgImage))
            }
        }, {
            key: "canInitParallax", value: function () {
                return m && !this.options.disableParallax()
            }
        }, {
            key: "init", value: function () {
                var e, t, i, n = this,
                    s = {position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden"},
                    a = {
                        pointerEvents: "none",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        willChange: "transform,opacity"
                    };
                n.options.keepImg || ((e = n.$item.getAttribute("style")) && n.$item.setAttribute("data-jarallax-original-styles", e), !n.image.useImgTag || (t = n.image.$item.getAttribute("style")) && n.image.$item.setAttribute("data-jarallax-original-styles", t)), "static" === n.css(n.$item, "position") && n.css(n.$item, {position: "relative"}), "auto" === n.css(n.$item, "z-index") && n.css(n.$item, {zIndex: 0}), n.image.$container = document.createElement("div"), n.css(n.image.$container, s), n.css(n.image.$container, {"z-index": n.options.zIndex}), h && n.css(n.image.$container, {opacity: .9999}), n.image.$container.setAttribute("id", "jarallax-container-".concat(n.instanceID)), n.$item.appendChild(n.image.$container), n.image.useImgTag ? a = n.extend({
                    "object-fit": n.options.imgSize,
                    "object-position": n.options.imgPosition,
                    "font-family": "object-fit: ".concat(n.options.imgSize, "; object-position: ").concat(n.options.imgPosition, ";"),
                    "max-width": "none"
                }, s, a) : (n.image.$item = document.createElement("div"), n.image.src && (a = n.extend({
                    "background-position": n.options.imgPosition,
                    "background-size": n.options.imgSize,
                    "background-repeat": n.options.imgRepeat,
                    "background-image": n.image.bgImage || 'url("'.concat(n.image.src, '")')
                }, s, a))), "opacity" !== n.options.type && "scale" !== n.options.type && "scale-opacity" !== n.options.type && 1 !== n.options.speed || (n.image.position = "absolute"), "fixed" === n.image.position && (i = function (e) {
                    for (var t = []; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
                    return t
                }(n.$item).filter(function (e) {
                    var t = r.window.getComputedStyle(e),
                        i = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                    return i && "none" !== i || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                }), n.image.position = i.length ? "absolute" : "fixed"), a.position = n.image.position, n.css(n.image.$item, a), n.image.$container.appendChild(n.image.$item), n.onResize(), n.onScroll(!0), n.options.onInit && n.options.onInit.call(n), "none" !== n.css(n.$item, "background-image") && n.css(n.$item, {"background-image": "none"}), n.addToParallaxList()
            }
        }, {
            key: "addToParallaxList", value: function () {
                v.push({instance: this}), 1 === v.length && r.window.requestAnimationFrame(y)
            }
        }, {
            key: "removeFromParallaxList", value: function () {
                var e = this;
                v.forEach(function (t, i) {
                    t.instance.instanceID === e.instanceID && v.splice(i, 1)
                })
            }
        }, {
            key: "destroy", value: function () {
                var e = this;
                e.removeFromParallaxList();
                var t, i = e.$item.getAttribute("data-jarallax-original-styles");
                e.$item.removeAttribute("data-jarallax-original-styles"), i ? e.$item.setAttribute("style", i) : e.$item.removeAttribute("style"), e.image.useImgTag && (t = e.image.$item.getAttribute("data-jarallax-original-styles"), e.image.$item.removeAttribute("data-jarallax-original-styles"), t ? e.image.$item.setAttribute("style", i) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
            }
        }, {
            key: "clipContainer", value: function () {
                var e, t, i, n, s;
                "fixed" === this.image.position && (i = (t = (e = this).image.$container.getBoundingClientRect()).width, n = t.height, e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)), s = "#jarallax-container-".concat(e.instanceID, " {\n           clip: rect(0 ").concat(i, "px ").concat(n, "px 0);\n           clip: rect(0, ").concat(i, "px, ").concat(n, "px, 0);\n        }"), e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = s : e.$clipStyles.innerHTML = s)
            }
        }, {
            key: "coverImage", value: function () {
                var e, t = this, i = t.image.$container.getBoundingClientRect(), n = i.height, s = t.options.speed,
                    r = "scroll" === t.options.type || "scroll-opacity" === t.options.type, a = 0, o = n;
                return r && (s < 0 ? (a = s * Math.max(n, u), u < n && (a -= s * (n - u))) : a = s * (n + u), 1 < s ? o = Math.abs(a - u) : s < 0 ? o = a / s + Math.abs(a) : o += (u - n) * (1 - s), a /= 2), t.parallaxScrollDistance = a, e = r ? (u - o) / 2 : (n - o) / 2, t.css(t.image.$item, {
                    height: "".concat(o, "px"),
                    marginTop: "".concat(e, "px"),
                    left: "fixed" === t.image.position ? "".concat(i.left, "px") : "0",
                    width: "".concat(i.width, "px")
                }), t.options.onCoverImage && t.options.onCoverImage.call(t), {
                    image: {height: o, marginTop: e},
                    container: i
                }
            }
        }, {
            key: "isVisible", value: function () {
                return this.isElementInViewport || !1
            }
        }, {
            key: "onScroll", value: function (e) {
                var t, i, n, s, a, o, l, c, d, p, h = this, f = h.$item.getBoundingClientRect(), m = f.top,
                    g = f.height, v = {}, y = f;
                h.options.elementInViewport && (y = h.options.elementInViewport.getBoundingClientRect()), h.isElementInViewport = 0 <= y.bottom && 0 <= y.right && y.top <= u && y.left <= r.window.innerWidth, (e || h.isElementInViewport) && (t = Math.max(0, m), i = Math.max(0, g + m), n = Math.max(0, -m), s = Math.max(0, m + g - u), a = Math.max(0, g - (m + g - u)), o = Math.max(0, -m + u - g), l = 1 - (u - m) / (u + g) * 2, c = 1, g < u ? c = 1 - (n || s) / g : i <= u ? c = i / u : a <= u && (c = a / u), "opacity" !== h.options.type && "scale-opacity" !== h.options.type && "scroll-opacity" !== h.options.type || (v.transform = "translate3d(0,0,0)", v.opacity = c), "scale" !== h.options.type && "scale-opacity" !== h.options.type || (d = 1, h.options.speed < 0 ? d -= h.options.speed * c : d += h.options.speed * (1 - c), v.transform = "scale(".concat(d, ") translate3d(0,0,0)")), "scroll" !== h.options.type && "scroll-opacity" !== h.options.type || (p = h.parallaxScrollDistance * l, "absolute" === h.image.position && (p -= m), v.transform = "translate3d(0,".concat(p, "px,0)")), h.css(h.image.$item, v), h.options.onScroll && h.options.onScroll.call(h, {
                    section: f,
                    beforeTop: t,
                    beforeTopEnd: i,
                    afterTop: n,
                    beforeBottom: s,
                    beforeBottomEnd: a,
                    afterBottom: o,
                    visiblePercent: c,
                    fromViewportCenter: l
                }))
            }
        }, {
            key: "onResize", value: function () {
                this.coverImage(), this.clipContainer()
            }
        }]) && c(t.prototype, i), e
    }();
    b.constructor = x, t.default = b
}]), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function (e) {
    "use strict";

    function t(e, t) {
        e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
    }

    function i(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function n(e) {
        return "string" == typeof e
    }

    function s(e) {
        return "function" == typeof e
    }

    function r(e) {
        return "number" == typeof e
    }

    function a(e) {
        return void 0 === e
    }

    function o(e) {
        return "object" == typeof e
    }

    function l(e) {
        return !1 !== e
    }

    function c() {
        return "undefined" != typeof window
    }

    function d(e) {
        return s(e) || n(e)
    }

    function u(e) {
        return (ve = ct(e, et)) && oi
    }

    function p(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }

    function h(e, t) {
        return !t && console.warn(e)
    }

    function f(e, t) {
        return e && (et[e] = t) && ve && (ve[e] = t) || et
    }

    function m() {
        return 0
    }

    function g(e) {
        var t, i, n = e[0];
        if (o(n) || s(n) || (e = [e]), !(t = (n._gsap || {}).harness)) {
            for (i = ot.length; i-- && !ot[i].targetTest(n);) ;
            t = ot[i]
        }
        for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new At(e[i], t))) || e.splice(i, 1);
        return e
    }

    function v(e) {
        return e._gsap || g(ft(e))[0]._gsap
    }

    function y(e, t) {
        var i = e[t];
        return s(i) ? e[t]() : a(i) && e.getAttribute(t) || i
    }

    function b(e, t) {
        return (e = e.split(",")).forEach(t) || e
    }

    function w(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function x(e, t) {
        for (var i = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < i;) ;
        return n < i
    }

    function S(e, t, i) {
        var n, s = r(e[1]), a = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = e[a];
        if (s && (o.duration = e[1]), o.parent = i, t) {
            for (n = o; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = l(i.vars.inherit) && i.parent;
            o.immediateRender = l(n.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
        }
        return o
    }

    function E() {
        var e, t, i = it.length, n = it.slice(0);
        for (nt = {}, e = it.length = 0; e < i; e++) (t = n[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
    }

    function T(e, t, i, n) {
        it.length && E(), e.render(t, i, n), it.length && E()
    }

    function _(e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(Je).length < 2 ? t : e
    }

    function C(e) {
        return e
    }

    function M(e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e
    }

    function k(e, t) {
        for (var i in t) i in e || "duration" === i || "ease" === i || (e[i] = t[i])
    }

    function $(e, t) {
        for (var i in t) e[i] = o(t[i]) ? $(e[i] || (e[i] = {}), t[i]) : t[i];
        return e
    }

    function P(e, t) {
        var i, n = {};
        for (i in e) i in t || (n[i] = e[i]);
        return n
    }

    function A(e) {
        var t = e.parent || he, i = e.keyframes ? k : M;
        if (l(e.inherit)) for (; t;) i(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    }

    function O(e, t, i, n) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var s = t._prev, r = t._next;
        s ? s._next = r : e[i] === t && (e[i] = r), r ? r._prev = s : e[n] === t && (e[n] = s), t._next = t._prev = t.parent = null
    }

    function z(e, t) {
        !e.parent || t && !e.parent.autoRemoveChildren || e.parent.remove(e), e._act = 0
    }

    function L(e) {
        for (var t = e; t;) t._dirty = 1, t = t.parent;
        return e
    }

    function I(e) {
        return e._repeat ? dt(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }

    function D(e, t) {
        return (e - t._start) * t._ts + (0 <= t._ts ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }

    function N(e) {
        return e._end = w(e._start + (e._tDur / Math.abs(e._ts || e._rts || Ve) || 0))
    }

    function B(e, t) {
        var i;
        if ((t._time || t._initted && !t._dur) && (i = D(e.rawTime(), t), (!t._dur || pt(0, t.totalDuration(), i) - t._tTime > Ve) && t.render(i, !0)), L(e)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration()) for (i = e; i._dp;) 0 <= i.rawTime() && i.totalTime(i._tTime), i = i._dp;
            e._zTime = -Ve
        }
    }

    function V(e, t, i, n) {
        return t.parent && z(t), t._start = w(i + t._delay), t._end = w(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), function (e, t, i, n, s) {
            void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
            var r, a = e[n];
            if (s) for (r = t[s]; a && a[s] > r;) a = a._prev;
            a ? (t._next = a._next, a._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[n] = t, t._prev = a, t.parent = t._dp = e
        }(e, t, "_first", "_last", e._sort ? "_start" : 0), e._recent = t, n || B(e, t), e
    }

    function j(e, t) {
        return (et.ScrollTrigger || p("scrollTrigger", t)) && et.ScrollTrigger.create(t, e)
    }

    function R(e, t, i, n) {
        return Bt(e, t), e._initted ? !i && e._pt && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && be !== xt.frame ? (it.push(e), e._lazy = [t, n], 1) : void 0 : 1
    }

    function F(e, t, i) {
        var n = e._repeat, s = w(t) || 0;
        return e._dur = s, e._tDur = n ? n < 0 ? 1e10 : w(s * (n + 1) + e._rDelay * n) : s, e._time > s && (e._time = s, e._tTime = Math.min(e._tTime, e._tDur)), i || L(e.parent), e.parent && N(e), e
    }

    function X(e) {
        return e instanceof Lt ? L(e) : F(e, e._dur)
    }

    function Y(e, t) {
        var i, s, r = e.labels, a = e._recent || ut, o = e.duration() >= Be ? a.endTime(!1) : e._dur;
        return n(t) && (isNaN(t) || t in r) ? "<" === (i = t.charAt(0)) || ">" === i ? ("<" === i ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(t.substr(1)) || 0) : (i = t.indexOf("=")) < 0 ? (t in r || (r[t] = o), r[t]) : (s = +(t.charAt(i - 1) + t.substr(i + 1)), 1 < i ? Y(e, t.substr(0, i - 1)) + s : o + s) : null == t ? o : +t
    }

    function H(e, t) {
        return e || 0 === e ? t(e) : t
    }

    function q(e) {
        return (e + "").substr((parseFloat(e) + "").length)
    }

    function G(e, t) {
        return e && o(e) && "length" in e && (!t && !e.length || e.length - 1 in e && o(e[0])) && !e.nodeType && e !== fe
    }

    function W(e) {
        return e.sort(function () {
            return .5 - Math.random()
        })
    }

    function U(e) {
        if (s(e)) return e;
        var t = o(e) ? e : {each: e}, i = Mt(t.ease), r = t.from || 0, a = parseFloat(t.base) || 0, l = {},
            c = 0 < r && r < 1, d = isNaN(r) || c, u = t.axis, p = r, h = r;
        return n(r) ? p = h = {
            center: .5,
            edges: .5,
            end: 1
        }[r] || 0 : !c && d && (p = r[0], h = r[1]), function (e, n, s) {
            var o, c, f, m, g, v, y, b, x, S = (s || t).length, E = l[S];
            if (!E) {
                if (!(x = "auto" === t.grid ? 0 : (t.grid || [1, Be])[1])) {
                    for (y = -Be; y < (y = s[x++].getBoundingClientRect().left) && x < S;) ;
                    x--
                }
                for (E = l[S] = [], o = d ? Math.min(x, S) * p - .5 : r % x, c = d ? S * h / x - .5 : r / x | 0, b = Be, v = y = 0; v < S; v++) f = v % x - o, m = c - (v / x | 0), E[v] = g = u ? Math.abs("y" === u ? m : f) : Xe(f * f + m * m), y < g && (y = g), g < b && (b = g);
                "random" === r && W(E), E.max = y - b, E.min = b, E.v = S = (parseFloat(t.amount) || parseFloat(t.each) * (S < x ? S - 1 : u ? "y" === u ? S / x : x : Math.max(x, S / x)) || 0) * ("edges" === r ? -1 : 1), E.b = S < 0 ? a - S : a, E.u = q(t.amount || t.each) || 0, i = i && S < 0 ? Ct(i) : i
            }
            return S = (E[e] - E.min) / E.max || 0, w(E.b + (i ? i(S) : S) * E.v) + E.u
        }
    }

    function Z(e) {
        var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function (i) {
            return Math.floor(Math.round(parseFloat(i) / e) * e * t) / t + (r(i) ? 0 : q(i))
        }
    }

    function Q(e, t) {
        var i, n, a = qe(e);
        return !a && o(e) && (i = a = e.radius || Be, e.values ? (e = ft(e.values), (n = !r(e[0])) && (i *= i)) : e = Z(e.increment)), H(t, a ? s(e) ? function (t) {
            return n = e(t), Math.abs(n - t) <= i ? n : t
        } : function (t) {
            for (var s, a, o = parseFloat(n ? t.x : t), l = parseFloat(n ? t.y : 0), c = Be, d = 0, u = e.length; u--;) (s = n ? (s = e[u].x - o) * s + (a = e[u].y - l) * a : Math.abs(e[u] - o)) < c && (c = s, d = u);
            return d = !i || c <= i ? e[d] : t, n || d === t || r(t) ? d : d + q(t)
        } : Z(e))
    }

    function K(e, t, i, n) {
        return H(qe(e) ? !t : !0 === i ? !!(i = 0) : !n, function () {
            return qe(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e + Math.random() * (t - e)) / i) * i * n) / n
        })
    }

    function J(e, t, i) {
        return H(i, function (i) {
            return e[~~t(i)]
        })
    }

    function ee(e) {
        for (var t, i, n, s, r = 0, a = ""; ~(t = e.indexOf("random(", r));) n = e.indexOf(")", t), s = "[" === e.charAt(t + 7), i = e.substr(t + 7, n - t - 7).match(s ? Je : Ge), a += e.substr(r, t - r) + K(s ? i : +i[0], +i[1], +i[2] || 1e-5), r = n + 1;
        return a + e.substr(r, e.length - r)
    }

    function te(e, t, i) {
        var n, s, r, a = e.labels, o = Be;
        for (n in a) (s = a[n] - t) < 0 == !!i && s && o > (s = Math.abs(s)) && (r = n, o = s);
        return r
    }

    function ie(e) {
        return z(e), e.progress() < 1 && gt(e, "onInterrupt"), e
    }

    function ne(e, t, i) {
        return (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * vt + .5 | 0
    }

    function se(e, t, i) {
        var n, s, a, o, l, c, d, u, p, h, f = e ? r(e) ? [e >> 16, e >> 8 & vt, e & vt] : 0 : yt.black;
        if (!f) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), yt[e]) f = yt[e]; else if ("#" === e.charAt(0)) 4 === e.length && (e = "#" + (n = e.charAt(1)) + n + (s = e.charAt(2)) + s + (a = e.charAt(3)) + a), f = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & vt, e & vt]; else if ("hsl" === e.substr(0, 3)) if (f = h = e.match(Ge), t) {
                if (~e.indexOf("=")) return f = e.match(We), i && f.length < 4 && (f[3] = 1), f
            } else o = +f[0] % 360 / 360, l = f[1] / 100, n = 2 * (c = f[2] / 100) - (s = c <= .5 ? c * (l + 1) : c + l - c * l), 3 < f.length && (f[3] *= 1), f[0] = ne(o + 1 / 3, n, s), f[1] = ne(o, n, s), f[2] = ne(o - 1 / 3, n, s); else f = e.match(Ge) || yt.transparent;
            f = f.map(Number)
        }
        return t && !h && (n = f[0] / vt, s = f[1] / vt, a = f[2] / vt, c = ((d = Math.max(n, s, a)) + (u = Math.min(n, s, a))) / 2, d === u ? o = l = 0 : (p = d - u, l = .5 < c ? p / (2 - d - u) : p / (d + u), o = d === n ? (s - a) / p + (s < a ? 6 : 0) : d === s ? (a - n) / p + 2 : (n - s) / p + 4, o *= 60), f[0] = ~~(o + .5), f[1] = ~~(100 * l + .5), f[2] = ~~(100 * c + .5)), i && f.length < 4 && (f[3] = 1), f
    }

    function re(e) {
        var t = [], i = [], n = -1;
        return e.split(bt).forEach(function (e) {
            var s = e.match(Ue) || [];
            t.push.apply(t, s), i.push(n += s.length + 1)
        }), t.c = i, t
    }

    function ae(e, t, i) {
        var n, s, r, a, o = "", l = (e + o).match(bt), c = t ? "hsla(" : "rgba(", d = 0;
        if (!l) return e;
        if (l = l.map(function (e) {
            return (e = se(e, t, 1)) && c + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
        }), i && (r = re(e), (n = i.c).join(o) !== r.c.join(o))) for (a = (s = e.replace(bt, "1").split(Ue)).length - 1; d < a; d++) o += s[d] + (~n.indexOf(d) ? l.shift() || c + "0,0,0,0)" : (r.length ? r : l.length ? l : i).shift());
        if (!s) for (a = (s = e.split(bt)).length - 1; d < a; d++) o += s[d] + l[d];
        return o + s[a]
    }

    function oe(e) {
        var t, i = e.join(" ");
        if (bt.lastIndex = 0, bt.test(i)) return t = wt.test(i), e[1] = ae(e[1], t), e[0] = ae(e[0], t, re(e[1])), !0
    }

    function le(e, t) {
        for (var i, n = e._first; n;) n instanceof Lt ? le(n, t) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === t || (n.timeline ? le(n.timeline, t) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = t)), n = n._next
    }

    function ce(e, t, i, n) {
        void 0 === i && (i = function (e) {
            return 1 - t(1 - e)
        }), void 0 === n && (n = function (e) {
            return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
        });
        var s, r = {easeIn: t, easeOut: i, easeInOut: n};
        return b(e, function (e) {
            for (var t in Et[e] = et[e] = r, Et[s = e.toLowerCase()] = i, r) Et[s + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Et[e + "." + t] = r[t]
        }), r
    }

    function de(e) {
        return function (t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function ue(e, t, i) {
        function n(e) {
            return 1 === e ? 1 : s * Math.pow(2, -10 * e) * He((e - a) * r) + 1
        }

        var s = 1 <= t ? t : 1, r = (i || (e ? .3 : .45)) / (t < 1 ? t : 1), a = r / je * (Math.asin(1 / s) || 0),
            o = "out" === e ? n : "in" === e ? function (e) {
                return 1 - n(1 - e)
            } : de(n);
        return r = je / r, o.config = function (t, i) {
            return ue(e, t, i)
        }, o
    }

    function pe(e, t) {
        function i(e) {
            return e ? --e * e * ((t + 1) * e + t) + 1 : 0
        }

        void 0 === t && (t = 1.70158);
        var n = "out" === e ? i : "in" === e ? function (e) {
            return 1 - i(1 - e)
        } : de(i);
        return n.config = function (t) {
            return pe(e, t)
        }, n
    }

    var he, fe, me, ge, ve, ye, be, we, xe, Se, Ee, Te, _e, Ce, Me, ke, $e, Pe, Ae, Oe, ze, Le, Ie,
        De = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
        Ne = {duration: .5, overwrite: !1, delay: 0}, Be = 1e8, Ve = 1 / Be, je = 2 * Math.PI, Re = je / 4, Fe = 0,
        Xe = Math.sqrt, Ye = Math.cos, He = Math.sin, qe = Array.isArray, Ge = /(?:-?\.?\d|\.)+/gi,
        We = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, Ue = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Ze = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, Qe = /\(([^()]+)\)/i, Ke = /[+-]=-?[\.\d]+/,
        Je = /[#\-+.]*\b[a-z\d-=+%.]+/gi, et = {}, tt = {}, it = [], nt = {}, st = {}, rt = {}, at = 30, ot = [],
        lt = "", ct = function (e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }, dt = function (e, t) {
            return (e /= t) && ~~e === e ? ~~e - 1 : ~~e
        }, ut = {_start: 0, endTime: m}, pt = function (e, t, i) {
            return i < e ? e : t < i ? t : i
        }, ht = [].slice, ft = function (e, t) {
            return !n(e) || t || !me && St() ? qe(e) ? function (e, t, i) {
                return void 0 === i && (i = []), e.forEach(function (e) {
                    return n(e) && !t || G(e, 1) ? i.push.apply(i, ft(e)) : i.push(e)
                }) || i
            }(e, t) : G(e) ? ht.call(e, 0) : e ? [e] : [] : ht.call(ge.querySelectorAll(e), 0)
        }, mt = function (e, t, i, n, s) {
            var r = t - e, a = n - i;
            return H(s, function (t) {
                return i + ((t - e) / r * a || 0)
            })
        }, gt = function (e, t, i) {
            var n, s, r = e.vars, a = r[t];
            if (a) return n = r[t + "Params"], s = r.callbackScope || e, i && it.length && E(), n ? a.apply(s, n) : a.call(s)
        }, vt = 255, yt = {
            aqua: [0, vt, vt],
            lime: [0, vt, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, vt],
            navy: [0, 0, 128],
            white: [vt, vt, vt],
            olive: [128, 128, 0],
            yellow: [vt, vt, 0],
            orange: [vt, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [vt, 0, 0],
            pink: [vt, 192, 203],
            cyan: [0, vt, vt],
            transparent: [vt, vt, vt, 0]
        }, bt = function () {
            var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (e in yt) t += "|" + e + "\\b";
            return new RegExp(t + ")", "gi")
        }(), wt = /hsl[a]?\(/, xt = (Ce = Date.now, Me = 500, ke = 33, $e = Ce(), Pe = $e, Oe = Ae = 1 / 240, _e = {
            time: 0,
            frame: 0,
            tick: function () {
                kt(!0)
            },
            wake: function () {
                ye && (!me && c() && (fe = me = window, ge = fe.document || {}, et.gsap = oi, (fe.gsapVersions || (fe.gsapVersions = [])).push(oi.version), u(ve || fe.GreenSockGlobals || !fe.gsap && fe || {}), Te = fe.requestAnimationFrame), Se && _e.sleep(), Ee = Te || function (e) {
                    return setTimeout(e, 1e3 * (Oe - _e.time) + 1 | 0)
                }, xe = 1, kt(2))
            },
            sleep: function () {
                (Te ? fe.cancelAnimationFrame : clearTimeout)(Se), xe = 0, Ee = m
            },
            lagSmoothing: function (e, t) {
                Me = e || 1e8, ke = Math.min(t, Me, 0)
            },
            fps: function (e) {
                Ae = 1 / (e || 240), Oe = _e.time + Ae
            },
            add: function (e) {
                ze.indexOf(e) < 0 && ze.push(e), St()
            },
            remove: function (e) {
                var t;
                ~(t = ze.indexOf(e)) && ze.splice(t, 1)
            },
            _listeners: ze = []
        }), St = function () {
            return !xe && xt.wake()
        }, Et = {}, Tt = /^[\d.\-M][\d.\-,\s]/, _t = /["']/g, Ct = function (e) {
            return function (t) {
                return 1 - e(1 - t)
            }
        }, Mt = function (e, t) {
            return e && (s(e) ? e : Et[e] || function (e) {
                var t = (e + "").split("("), i = Et[t[0]];
                return i && 1 < t.length && i.config ? i.config.apply(null, ~e.indexOf("{") ? [function (e) {
                    for (var t, i, n, s = {}, r = e.substr(1, e.length - 3).split(":"), a = r[0], o = 1, l = r.length; o < l; o++) i = r[o], t = o !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, t), s[a] = isNaN(n) ? n.replace(_t, "").trim() : +n, a = i.substr(t + 1).trim();
                    return s
                }(t[1])] : Qe.exec(e)[1].split(",").map(_)) : Et._CE && Tt.test(e) ? Et._CE("", e) : i
            }(e)) || t
        };

    function kt(e) {
        var t, i, n = Ce() - Pe, s = !0 === e;
        Me < n && ($e += n - ke), Pe += n, _e.time = (Pe - $e) / 1e3, (0 < (t = _e.time - Oe) || s) && (_e.frame++, Oe += t + (Ae <= t ? .004 : Ae - t), i = 1), s || (Se = Ee(kt)), i && ze.forEach(function (t) {
            return t(_e.time, n, _e.frame, e)
        })
    }

    function $t(e) {
        return e < Ie ? Le * e * e : e < .7272727272727273 ? Le * Math.pow(e - 1.5 / 2.75, 2) + .75 : e < .9090909090909092 ? Le * (e -= 2.25 / 2.75) * e + .9375 : Le * Math.pow(e - 2.625 / 2.75, 2) + .984375
    }

    b("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
        var i = t < 5 ? t + 1 : t;
        ce(e + ",Power" + (i - 1), t ? function (e) {
            return Math.pow(e, i)
        } : function (e) {
            return e
        }, function (e) {
            return 1 - Math.pow(1 - e, i)
        }, function (e) {
            return e < .5 ? Math.pow(2 * e, i) / 2 : 1 - Math.pow(2 * (1 - e), i) / 2
        })
    }), Et.Linear.easeNone = Et.none = Et.Linear.easeIn, ce("Elastic", ue("in"), ue("out"), ue()), Le = 7.5625, Ie = 1 / 2.75, ce("Bounce", function (e) {
        return 1 - $t(1 - e)
    }, $t), ce("Expo", function (e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
    }), ce("Circ", function (e) {
        return -(Xe(1 - e * e) - 1)
    }), ce("Sine", function (e) {
        return 1 === e ? 1 : 1 - Ye(e * Re)
    }), ce("Back", pe("in"), pe("out"), pe()), Et.SteppedEase = Et.steps = et.SteppedEase = {
        config: function (e, t) {
            void 0 === e && (e = 1);
            var i = 1 / e, n = e + (t ? 0 : 1), s = t ? 1 : 0;
            return function (e) {
                return ((n * pt(0, .99999999, e) | 0) + s) * i
            }
        }
    }, Ne.ease = Et["quad.out"], b("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (e) {
        return lt += e + "," + e + "Params,"
    });
    var Pt, At = function (e, t) {
        this.id = Fe++, (e._gsap = this).target = e, this.harness = t, this.get = t ? t.get : y, this.set = t ? t.getSetter : Wt
    }, Ot = ((Pt = zt.prototype).delay = function (e) {
        return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
    }, Pt.duration = function (e) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
    }, Pt.totalDuration = function (e) {
        return arguments.length ? (this._dirty = 0, F(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, Pt.totalTime = function (e, t) {
        if (St(), !arguments.length) return this._tTime;
        var i = this.parent || this._dp;
        if (i && i.smoothChildTiming && this._ts) {
            for (this._start = w(i._time - (0 < this._ts ? e / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - e) / -this._ts)), N(this), i._dirty || L(i); i.parent;) i.parent._time !== i._start + (0 <= i._ts ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && e < this._tDur || this._ts < 0 && 0 < e || !this._tDur && !e) && V(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === Ve || !e && !this._initted) && (this._ts || (this._pTime = e), T(this, e, t)), this
    }, Pt.time = function (e, t) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + I(this)) % this._dur || (e ? this._dur : 0), t) : this._time
    }, Pt.totalProgress = function (e, t) {
        return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }, Pt.progress = function (e, t) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + I(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }, Pt.iteration = function (e, t) {
        var i = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (e - 1) * i, t) : this._repeat ? dt(this._tTime, i) + 1 : 1
    }, Pt.timeScale = function (e) {
        if (!arguments.length) return this._rts === -Ve ? 0 : this._rts;
        if (this._rts === e) return this;
        var t = this.parent && this._ts ? D(this.parent._time, this) : this._tTime;
        return this._rts = +e || 0, this._ts = this._ps || e === -Ve ? 0 : this._rts, function (e) {
            for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
            return e
        }(this.totalTime(pt(0, this._tDur, t), !0))
    }, Pt.paused = function (e) {
        return arguments.length ? (this._ps !== e && ((this._ps = e) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (St(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= Ve) && Math.abs(this._zTime) !== Ve))), this) : this._ps
    }, Pt.startTime = function (e) {
        if (arguments.length) {
            this._start = e;
            var t = this.parent || this._dp;
            return !t || !t._sort && this.parent || V(t, this, e - this._delay), this
        }
        return this._start
    }, Pt.endTime = function (e) {
        return this._start + (l(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
    }, Pt.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? D(t.rawTime(e), this) : this._tTime : this._tTime
    }, Pt.repeat = function (e) {
        return arguments.length ? (this._repeat = e, X(this)) : this._repeat
    }, Pt.repeatDelay = function (e) {
        return arguments.length ? (this._rDelay = e, X(this)) : this._rDelay
    }, Pt.yoyo = function (e) {
        return arguments.length ? (this._yoyo = e, this) : this._yoyo
    }, Pt.seek = function (e, t) {
        return this.totalTime(Y(this, e), l(t))
    }, Pt.restart = function (e, t) {
        return this.play().totalTime(e ? -this._delay : 0, l(t))
    }, Pt.play = function (e, t) {
        return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
    }, Pt.reverse = function (e, t) {
        return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
    }, Pt.pause = function (e, t) {
        return null != e && this.seek(e, t), this.paused(!0)
    }, Pt.resume = function () {
        return this.paused(!1)
    }, Pt.reversed = function (e) {
        return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -Ve : 0)), this) : this._rts < 0
    }, Pt.invalidate = function () {
        return this._initted = 0, this._zTime = -Ve, this
    }, Pt.isActive = function (e) {
        var t, i = this.parent || this._dp, n = this._start;
        return !(i && !(this._ts && (this._initted || !e) && i.isActive(e) && (t = i.rawTime(!0)) >= n && t < this.endTime(!0) - Ve))
    }, Pt.eventCallback = function (e, t, i) {
        var n = this.vars;
        return 1 < arguments.length ? (t ? (n[e] = t, i && (n[e + "Params"] = i), "onUpdate" === e && (this._onUpdate = t)) : delete n[e], this) : n[e]
    }, Pt.then = function (e) {
        var t = this;
        return new Promise(function (i) {
            function n() {
                var e = t.then;
                t.then = null, s(r) && (r = r(t)) && (r.then || r === t) && (t.then = e), i(r), t.then = e
            }

            var r = s(e) ? e : C;
            t._initted && 1 === t.totalProgress() && 0 <= t._ts || !t._tTime && t._ts < 0 ? n() : t._prom = n
        })
    }, Pt.kill = function () {
        ie(this)
    }, zt);

    function zt(e, t) {
        var i = e.parent || he;
        this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, F(this, +e.duration, 1), this.data = e.data, xe || xt.wake(), i && V(i, this, t || 0 === t ? t : i._time, 1), e.reversed && this.reverse(), e.paused && this.paused(!0)
    }

    M(Ot.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Ve,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Lt = function (e) {
        function a(t, n) {
            var s;
            return void 0 === t && (t = {}), (s = e.call(this, t, n) || this).labels = {}, s.smoothChildTiming = !!t.smoothChildTiming, s.autoRemoveChildren = !!t.autoRemoveChildren, s._sort = l(t.sortChildren), s.parent && B(s.parent, i(s)), t.scrollTrigger && j(i(s), t.scrollTrigger), s
        }

        t(a, e);
        var o = a.prototype;
        return o.to = function (e, t, i, n) {
            return new Ft(e, S(arguments, 0, this), Y(this, r(t) ? n : i)), this
        }, o.from = function (e, t, i, n) {
            return new Ft(e, S(arguments, 1, this), Y(this, r(t) ? n : i)), this
        }, o.fromTo = function (e, t, i, n, s) {
            return new Ft(e, S(arguments, 2, this), Y(this, r(t) ? s : n)), this
        }, o.set = function (e, t, i) {
            return t.duration = 0, t.parent = this, A(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Ft(e, t, Y(this, i), 1), this
        }, o.call = function (e, t, i) {
            return V(this, Ft.delayedCall(0, e, t), Y(this, i))
        }, o.staggerTo = function (e, t, i, n, s, r, a) {
            return i.duration = t, i.stagger = i.stagger || n, i.onComplete = r, i.onCompleteParams = a, i.parent = this, new Ft(e, i, Y(this, s)), this
        }, o.staggerFrom = function (e, t, i, n, s, r, a) {
            return i.runBackwards = 1, A(i).immediateRender = l(i.immediateRender), this.staggerTo(e, t, i, n, s, r, a)
        }, o.staggerFromTo = function (e, t, i, n, s, r, a, o) {
            return n.startAt = i, A(n).immediateRender = l(n.immediateRender), this.staggerTo(e, t, n, s, r, a, o)
        }, o.render = function (e, t, i) {
            var n, s, r, a, o, l, c, d, u, p, h, f, m = this._time, g = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur, y = this !== he && g - Ve < e && 0 <= e ? g : e < Ve ? 0 : e,
                b = this._zTime < 0 != e < 0 && (this._initted || !v);
            if (y !== this._tTime || i || b) {
                if (m !== this._time && v && (y += this._time - m, e += this._time - m), n = y, u = this._start, l = !(d = this._ts), b && (v || (m = this._zTime), !e && t || (this._zTime = e)), this._repeat && (h = this._yoyo, (v < (n = w(y % (o = v + this._rDelay))) || g === y) && (n = v), (a = ~~(y / o)) && a === y / o && (n = v, a--), p = dt(this._tTime, o), !m && this._tTime && p !== a && (p = a), h && 1 & a && (n = v - n, f = 1), a !== p && !this._lock)) {
                    var x = h && 1 & p, S = x === (h && 1 & a);
                    if (a < p && (x = !x), m = x ? 0 : v, this._lock = 1, this.render(m || (f ? 0 : w(a * o)), t, !v)._lock = 0, !t && this.parent && gt(this, "onRepeat"), this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1), m !== this._time || l != !this._ts) return this;
                    if (S && (this._lock = 2, m = x ? v + 1e-4 : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !f && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                    le(this, f)
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function (e, t, i) {
                    var n;
                    if (t < i) for (n = e._first; n && n._start <= i;) {
                        if (!n._dur && "isPause" === n.data && n._start > t) return n;
                        n = n._next
                    } else for (n = e._last; n && n._start >= i;) {
                        if (!n._dur && "isPause" === n.data && n._start < t) return n;
                        n = n._prev
                    }
                }(this, w(m), w(n))) && (y -= n - (n = c._start)), this._tTime = y, this._time = n, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e), m || !n || t || gt(this, "onStart"), m <= n && 0 <= e) for (s = this._first; s;) {
                    if (r = s._next, (s._act || n >= s._start) && s._ts && c !== s) {
                        if (s.parent !== this) return this.render(e, t, i);
                        if (s.render(0 < s._ts ? (n - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts, t, i), n !== this._time || !this._ts && !l) {
                            c = 0, r && (y += this._zTime = -Ve);
                            break
                        }
                    }
                    s = r
                } else {
                    s = this._last;
                    for (var E = e < 0 ? e : n; s;) {
                        if (r = s._prev, (s._act || E <= s._end) && s._ts && c !== s) {
                            if (s.parent !== this) return this.render(e, t, i);
                            if (s.render(0 < s._ts ? (E - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (E - s._start) * s._ts, t, i), n !== this._time || !this._ts && !l) {
                                c = 0, r && (y += this._zTime = E ? -Ve : Ve);
                                break
                            }
                        }
                        s = r
                    }
                }
                if (c && !t && (this.pause(), c.render(m <= n ? 0 : -Ve)._zTime = m <= n ? 1 : -1, this._ts)) return this._start = u, N(this), this.render(e, t, i);
                this._onUpdate && !t && gt(this, "onUpdate", !0), (y === g && g >= this.totalDuration() || !y && m) && (u !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || (!e && v || !(y === g && 0 < this._ts || !y && this._ts < 0) || z(this, 1), t || e < 0 && !m || !y && !m || (gt(this, y === g ? "onComplete" : "onReverseComplete", !0), !this._prom || y < g && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, o.add = function (e, t) {
            var i = this;
            if (r(t) || (t = Y(this, t)), !(e instanceof Ot)) {
                if (qe(e)) return e.forEach(function (e) {
                    return i.add(e, t)
                }), L(this);
                if (n(e)) return this.addLabel(e, t);
                if (!s(e)) return this;
                e = Ft.delayedCall(0, e)
            }
            return this !== e ? V(this, e, t) : this
        }, o.getChildren = function (e, t, i, n) {
            void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === i && (i = !0), void 0 === n && (n = -Be);
            for (var s = [], r = this._first; r;) r._start >= n && (r instanceof Ft ? t && s.push(r) : (i && s.push(r), e && s.push.apply(s, r.getChildren(!0, t, i)))), r = r._next;
            return s
        }, o.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), i = t.length; i--;) if (t[i].vars.id === e) return t[i]
        }, o.remove = function (e) {
            return n(e) ? this.removeLabel(e) : s(e) ? this.killTweensOf(e) : (O(this, e), e === this._recent && (this._recent = this._last), L(this))
        }, o.totalTime = function (t, i) {
            return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = w(xt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, i), this._forcing = 0, this) : this._tTime
        }, o.addLabel = function (e, t) {
            return this.labels[e] = Y(this, t), this
        }, o.removeLabel = function (e) {
            return delete this.labels[e], this
        }, o.addPause = function (e, t, i) {
            var n = Ft.delayedCall(0, t || m, i);
            return n.data = "isPause", this._hasPause = 1, V(this, n, Y(this, e))
        }, o.removePause = function (e) {
            var t = this._first;
            for (e = Y(this, e); t;) t._start === e && "isPause" === t.data && z(t), t = t._next
        }, o.killTweensOf = function (e, t, i) {
            for (var n = this.getTweensOf(e, i), s = n.length; s--;) Dt !== n[s] && n[s].kill(e, t);
            return this
        }, o.getTweensOf = function (e, t) {
            for (var i, n = [], s = ft(e), r = this._first; r;) r instanceof Ft ? !x(r._targets, s) || t && !r.isActive("started" === t) || n.push(r) : (i = r.getTweensOf(s, t)).length && n.push.apply(n, i), r = r._next;
            return n
        }, o.tweenTo = function (e, t) {
            t = t || {};
            var i = this, n = Y(i, e), s = t.startAt, r = t.onStart, a = t.onStartParams, o = Ft.to(i, M(t, {
                ease: "none",
                lazy: !1,
                time: n,
                duration: t.duration || Math.abs((n - (s && "time" in s ? s.time : i._time)) / i.timeScale()) || Ve,
                onStart: function () {
                    i.pause();
                    var e = t.duration || Math.abs((n - i._time) / i.timeScale());
                    o._dur !== e && F(o, e).render(o._time, !0, !0), r && r.apply(o, a || [])
                }
            }));
            return o
        }, o.tweenFromTo = function (e, t, i) {
            return this.tweenTo(t, M({startAt: {time: Y(this, e)}}, i))
        }, o.recent = function () {
            return this._recent
        }, o.nextLabel = function (e) {
            return void 0 === e && (e = this._time), te(this, Y(this, e))
        }, o.previousLabel = function (e) {
            return void 0 === e && (e = this._time), te(this, Y(this, e), 1)
        }, o.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + Ve)
        }, o.shiftChildren = function (e, t, i) {
            void 0 === i && (i = 0);
            for (var n, s = this._first, r = this.labels; s;) s._start >= i && (s._start += e), s = s._next;
            if (t) for (n in r) r[n] >= i && (r[n] += e);
            return L(this)
        }, o.invalidate = function () {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return e.prototype.invalidate.call(this)
        }, o.clear = function (e) {
            void 0 === e && (e = !0);
            for (var t, i = this._first; i;) t = i._next, this.remove(i), i = t;
            return this._time = this._tTime = this._pTime = 0, e && (this.labels = {}), L(this)
        }, o.totalDuration = function (e) {
            var t, i, n, s, r = 0, a = this, o = a._last, l = Be;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -e : e));
            if (a._dirty) {
                for (s = a.parent; o;) t = o._prev, o._dirty && o.totalDuration(), l < (n = o._start) && a._sort && o._ts && !a._lock ? (a._lock = 1, V(a, o, n - o._delay, 1)._lock = 0) : l = n, n < 0 && o._ts && (r -= n, (!s && !a._dp || s && s.smoothChildTiming) && (a._start += n / a._ts, a._time -= n, a._tTime -= n), a.shiftChildren(-n, !1, -1 / 0), l = 0), r < (i = N(o)) && o._ts && (r = i), o = t;
                F(a, a === he && a._time > r ? a._time : r, 1), a._dirty = 0
            }
            return a._tDur
        }, a.updateRoot = function (e) {
            if (he._ts && (T(he, D(e, he)), be = xt.frame), xt.frame >= at) {
                at += De.autoSleep || 120;
                var t = he._first;
                if ((!t || !t._ts) && De.autoSleep && xt._listeners.length < 2) {
                    for (; t && !t._ts;) t = t._next;
                    t || xt.sleep()
                }
            }
        }, a
    }(Ot);

    function It(e, t, i, r, a, l) {
        var c, d, u, p;
        if (st[e] && !1 !== (c = new st[e]).init(a, c.rawVars ? t[e] : function (e, t, i, r, a) {
            if (s(e) && (e = Vt(e, a, t, i, r)), !o(e) || e.style && e.nodeType || qe(e)) return n(e) ? Vt(e, a, t, i, r) : e;
            var l, c = {};
            for (l in e) c[l] = Vt(e[l], a, t, i, r);
            return c
        }(t[e], r, a, l, i), i, r, l) && (i._pt = d = new ii(i._pt, a, e, 0, 1, c.render, c, 0, c.priority), i !== we)) for (u = i._ptLookup[i._targets.indexOf(a)], p = c._props.length; p--;) u[c._props[p]] = d;
        return c
    }

    M(Lt.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
    var Dt, Nt = function (e, t, i, r, a, o, l, c, d) {
            s(r) && (r = r(a || 0, e, o));
            var u, h = e[t],
                f = "get" !== i ? i : s(h) ? d ? e[t.indexOf("set") || !s(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](d) : e[t]() : h,
                m = s(h) ? d ? Gt : qt : Ht;
            if (n(r) && (~r.indexOf("random(") && (r = ee(r)), "=" === r.charAt(1) && (r = parseFloat(f) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (q(f) || 0))), f !== r) return isNaN(f + r) ? (h || t in e || p(t, r), function (e, t, i, n, s, r, a) {
                var o, l, c, d, u, p, h, f, m = new ii(this._pt, e, t, 0, 1, Qt, null, s), g = 0, v = 0;
                for (m.b = i, m.e = n, i += "", (h = ~(n += "").indexOf("random(")) && (n = ee(n)), r && (r(f = [i, n], e, t), i = f[0], n = f[1]), l = i.match(Ze) || []; o = Ze.exec(n);) d = o[0], u = n.substring(g, o.index), c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1), d !== l[v++] && (p = parseFloat(l[v - 1]) || 0, m._pt = {
                    _next: m._pt,
                    p: u || 1 === v ? u : ",",
                    s: p,
                    c: "=" === d.charAt(1) ? parseFloat(d.substr(2)) * ("-" === d.charAt(0) ? -1 : 1) : parseFloat(d) - p,
                    m: c && c < 4 ? Math.round : 0
                }, g = Ze.lastIndex);
                return m.c = g < n.length ? n.substring(g, n.length) : "", m.fp = a, (Ke.test(n) || h) && (m.e = 0), this._pt = m
            }.call(this, e, t, f, r, m, c || De.stringFilter, d)) : (u = new ii(this._pt, e, t, +f || 0, r - (f || 0), "boolean" == typeof h ? Zt : Ut, 0, m), d && (u.fp = d), l && u.modifier(l, this, e), this._pt = u)
        }, Bt = function e(t, i) {
            var n, s, r, a, o, c, d, u, p, h, f, m, y = t.vars, b = y.ease, w = y.startAt, x = y.immediateRender,
                S = y.lazy, T = y.onUpdate, _ = y.onUpdateParams, C = y.callbackScope, k = y.runBackwards, $ = y.yoyoEase,
                A = y.keyframes, O = y.autoRevert, L = t._dur, I = t._startAt, D = t._targets, N = t.parent,
                B = N && "nested" === N.data ? N.parent._targets : D, V = "auto" === t._overwrite, j = t.timeline;
            if (!j || A && b || (b = "none"), t._ease = Mt(b, Ne.ease), t._yEase = $ ? Ct(Mt(!0 === $ ? b : $, Ne.ease)) : 0, $ && t._yoyo && !t._repeat && ($ = t._yEase, t._yEase = t._ease, t._ease = $), !j) {
                if (m = (u = D[0] ? v(D[0]).harness : 0) && y[u.prop], n = P(y, tt), I && I.render(-1, !0).kill(), w) {
                    if (z(t._startAt = Ft.set(D, M({
                        data: "isStart",
                        overwrite: !1,
                        parent: N,
                        immediateRender: !0,
                        lazy: l(S),
                        startAt: null,
                        delay: 0,
                        onUpdate: T,
                        onUpdateParams: _,
                        callbackScope: C,
                        stagger: 0
                    }, w))), x) if (0 < i) O || (t._startAt = 0); else if (L) return
                } else if (k && L) if (I) O || (t._startAt = 0); else if (i && (x = !1), r = M({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: x && l(S),
                    immediateRender: x,
                    stagger: 0,
                    parent: N
                }, n), m && (r[u.prop] = m), z(t._startAt = Ft.set(D, r)), x) {
                    if (!i) return
                } else e(t._startAt, Ve);
                for (t._pt = 0, S = L && l(S) || S && !L, s = 0; s < D.length; s++) {
                    if (d = (o = D[s])._gsap || g(D)[s]._gsap, t._ptLookup[s] = h = {}, nt[d.id] && E(), f = B === D ? s : B.indexOf(o), u && !1 !== (p = new u).init(o, m || n, t, f, B) && (t._pt = a = new ii(t._pt, o, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach(function (e) {
                        h[e] = a
                    }), p.priority && (c = 1)), !u || m) for (r in n) st[r] && (p = It(r, n, t, f, o, B)) ? p.priority && (c = 1) : h[r] = a = Nt.call(t, o, r, "get", n[r], f, B, 0, y.stringFilter);
                    t._op && t._op[s] && t.kill(o, t._op[s]), V && t._pt && (Dt = t, he.killTweensOf(o, h, "started"), Dt = 0), t._pt && S && (nt[d.id] = 1)
                }
                c && ti(t), t._onInit && t._onInit(t)
            }
            t._from = !j && !!y.runBackwards, t._onUpdate = T, t._initted = !!t.parent
        }, Vt = function (e, t, i, r, a) {
            return s(e) ? e.call(t, i, r, a) : n(e) && ~e.indexOf("random(") ? ee(e) : e
        }, jt = lt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Rt = (jt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Ft = function (e) {
            function s(t, n, s, a) {
                var c;
                "number" == typeof n && (s.duration = n, n = s, s = null);
                var u, p, f, v, y, b, x, S, E = (c = e.call(this, a ? n : A(n), s) || this).vars, T = E.duration,
                    _ = E.delay, C = E.immediateRender, k = E.stagger, $ = E.overwrite, P = E.keyframes, O = E.defaults,
                    z = E.scrollTrigger, L = E.yoyoEase, I = c.parent, D = (qe(t) ? r(t[0]) : "length" in n) ? [t] : ft(t);
                if (c._targets = D.length ? g(D) : h("GSAP target " + t + " not found. https://greensock.com", !De.nullTargetWarn) || [], c._ptLookup = [], c._overwrite = $, P || k || d(T) || d(_)) {
                    if (n = c.vars, (u = c.timeline = new Lt({
                        data: "nested",
                        defaults: O || {}
                    })).kill(), u.parent = i(c), P) M(u.vars.defaults, {ease: "none"}), P.forEach(function (e) {
                        return u.to(D, e, ">")
                    }); else {
                        if (v = D.length, x = k ? U(k) : m, o(k)) for (y in k) ~jt.indexOf(y) && ((S = S || {})[y] = k[y]);
                        for (p = 0; p < v; p++) {
                            for (y in f = {}, n) Rt.indexOf(y) < 0 && (f[y] = n[y]);
                            f.stagger = 0, L && (f.yoyoEase = L), S && ct(f, S), b = D[p], f.duration = +Vt(T, i(c), p, b, D), f.delay = (+Vt(_, i(c), p, b, D) || 0) - c._delay, !k && 1 === v && f.delay && (c._delay = _ = f.delay, c._start += _, f.delay = 0), u.to(b, f, x(p, b, D))
                        }
                        u.duration() ? T = _ = 0 : c.timeline = 0
                    }
                    T || c.duration(T = u.duration())
                } else c.timeline = 0;
                return !0 === $ && (Dt = i(c), he.killTweensOf(D), Dt = 0), I && B(I, i(c)), (C || !T && !P && c._start === w(I._time) && l(C) && function e(t) {
                    return !t || t._ts && e(t.parent)
                }(i(c)) && "nested" !== I.data) && (c._tTime = -Ve, c.render(Math.max(0, -_))), z && j(i(c), z), c
            }

            t(s, e);
            var a = s.prototype;
            return a.render = function (e, t, i) {
                var n, s, r, a, o, l, c, d, u, p = this._time, h = this._tDur, f = this._dur,
                    m = h - Ve < e && 0 <= e ? h : e < Ve ? 0 : e;
                if (f) {
                    if (m !== this._tTime || !e || i || this._startAt && this._zTime < 0 != e < 0) {
                        if (n = m, d = this.timeline, this._repeat) {
                            if ((f < (n = w(m % (a = f + this._rDelay))) || h === m) && (n = f), (r = ~~(m / a)) && r === m / a && (n = f, r--), (l = this._yoyo && 1 & r) && (u = this._yEase, n = f - n), o = dt(this._tTime, a), n === p && !i && this._initted) return this;
                            r !== o && (d && this._yEase && le(d, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1, this.render(w(a * r), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (R(this, n, i, t)) return this._tTime = 0, this;
                            if (f !== this._dur) return this.render(e, t, i)
                        }
                        for (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (u || this._ease)(n / f), this._from && (this.ratio = c = 1 - c), !n || p || t || gt(this, "onStart"), s = this._pt; s;) s.r(c, s.d), s = s._next;
                        d && d.render(e < 0 ? e : !n && l ? -Ve : d._dur * c, t, i) || this._startAt && (this._zTime = e), this._onUpdate && !t && (e < 0 && this._startAt && this._startAt.render(e, !0, i), gt(this, "onUpdate")), this._repeat && r !== o && this.vars.onRepeat && !t && this.parent && gt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (e < 0 && this._startAt && !this._onUpdate && this._startAt.render(e, !0, !0), !e && f || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || z(this, 1), t || e < 0 && !p || !m && !p || (gt(this, m === h ? "onComplete" : "onReverseComplete", !0), !this._prom || m < h && 0 < this.timeScale() || this._prom()))
                    }
                } else !function (e, t, i, n) {
                    var s, r, a = e.ratio,
                        o = t < 0 || !t && a && !e._start && e._zTime > Ve && !e._dp._lock || e._ts < 0 || e._dp._ts < 0 ? 0 : 1,
                        l = e._rDelay, c = 0;
                    if (l && e._repeat && (c = pt(0, e._tDur, t), dt(c, l) !== (r = dt(e._tTime, l)) && (a = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), e._initted || !R(e, t, n, i)) if (o !== a || n || e._zTime === Ve || !t && e._zTime) {
                        for (r = e._zTime, e._zTime = t || (i ? Ve : 0), i = i || t && !r, e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = c, i || gt(e, "onStart"), s = e._pt; s;) s.r(o, s.d), s = s._next;
                        e._startAt && t < 0 && e._startAt.render(t, !0, !0), e._onUpdate && !i && gt(e, "onUpdate"), c && e._repeat && !i && e.parent && gt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && z(e, 1), i || (gt(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                    } else e._zTime || (e._zTime = t)
                }(this, e, t, i);
                return this
            }, a.targets = function () {
                return this._targets
            }, a.invalidate = function () {
                return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), e.prototype.invalidate.call(this)
            }, a.kill = function (e, t) {
                if (void 0 === t && (t = "all"), !(e || t && "all" !== t) && (this._lazy = 0, this.parent)) return ie(this);
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(e, t, Dt && !0 !== Dt.vars.overwrite)._first || ie(this), this.parent && i !== this.timeline.totalDuration() && F(this, this._dur * this.timeline._tDur / i), this
                }
                var s, r, a, o, l, c, d, u = this._targets, p = e ? ft(e) : u, h = this._ptLookup, f = this._pt;
                if ((!t || "all" === t) && function (e, t) {
                    for (var i = e.length, n = i === t.length; n && i-- && e[i] === t[i];) ;
                    return i < 0
                }(u, p)) return ie(this);
                for (s = this._op = this._op || [], "all" !== t && (n(t) && (l = {}, b(t, function (e) {
                    return l[e] = 1
                }), t = l), t = function (e, t) {
                    var i, n, s, r, a = e[0] ? v(e[0]).harness : 0, o = a && a.aliases;
                    if (!o) return t;
                    for (n in i = ct({}, t), o) if (n in i) for (s = (r = o[n].split(",")).length; s--;) i[r[s]] = i[n];
                    return i
                }(u, t)), d = u.length; d--;) if (~p.indexOf(u[d])) for (l in r = h[d], "all" === t ? (s[d] = t, o = r, a = {}) : (a = s[d] = s[d] || {}, o = t), o) (c = r && r[l]) && ("kill" in c.d && !0 !== c.d.kill(l) || O(this, c, "_pt"), delete r[l]), "all" !== a && (a[l] = 1);
                return this._initted && !this._pt && f && ie(this), this
            }, s.to = function (e, t, i) {
                return new s(e, t, i)
            }, s.from = function (e, t) {
                return new s(e, S(arguments, 1))
            }, s.delayedCall = function (e, t, i, n) {
                return new s(t, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: e,
                    onComplete: t,
                    onReverseComplete: t,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: n
                })
            }, s.fromTo = function (e, t, i) {
                return new s(e, S(arguments, 2))
            }, s.set = function (e, t) {
                return t.duration = 0, t.repeatDelay || (t.repeat = 0), new s(e, t)
            }, s.killTweensOf = function (e, t, i) {
                return he.killTweensOf(e, t, i)
            }, s
        }(Ot);

    function Xt(e, t, i) {
        return e.setAttribute(t, i)
    }

    function Yt(e, t, i, n) {
        n.mSet(e, t, n.m.call(n.tween, i, n.mt), n)
    }

    M(Ft.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), b("staggerTo,staggerFrom,staggerFromTo", function (e) {
        Ft[e] = function () {
            var t = new Lt, i = ht.call(arguments, 0);
            return i.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, i)
        }
    });
    var Ht = function (e, t, i) {
        return e[t] = i
    }, qt = function (e, t, i) {
        return e[t](i)
    }, Gt = function (e, t, i, n) {
        return e[t](n.fp, i)
    }, Wt = function (e, t) {
        return s(e[t]) ? qt : a(e[t]) && e.setAttribute ? Xt : Ht
    }, Ut = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4, t)
    }, Zt = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    }, Qt = function (e, t) {
        var i = t._pt, n = "";
        if (!e && t.b) n = t.b; else if (1 === e && t.e) n = t.e; else {
            for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round(1e4 * (i.s + i.c * e)) / 1e4) + n, i = i._next;
            n += t.c
        }
        t.set(t.t, t.p, n, t)
    }, Kt = function (e, t) {
        for (var i = t._pt; i;) i.r(e, i.d), i = i._next
    }, Jt = function (e, t, i, n) {
        for (var s, r = this._pt; r;) s = r._next, r.p === n && r.modifier(e, t, i), r = s
    }, ei = function (e) {
        for (var t, i, n = this._pt; n;) i = n._next, n.p === e && !n.op || n.op === e ? O(this, n, "_pt") : n.dep || (t = 1), n = i;
        return !t
    }, ti = function (e) {
        for (var t, i, n, s, r = e._pt; r;) {
            for (t = r._next, i = n; i && i.pr > r.pr;) i = i._next;
            (r._prev = i ? i._prev : s) ? r._prev._next = r : n = r, (r._next = i) ? i._prev = r : s = r, r = t
        }
        e._pt = n
    }, ii = (ni.prototype.modifier = function (e, t, i) {
        this.mSet = this.mSet || this.set, this.set = Yt, this.m = e, this.mt = i, this.tween = t
    }, ni);

    function ni(e, t, i, n, s, r, a, o, l) {
        this.t = t, this.s = n, this.c = s, this.p = i, this.r = r || Ut, this.d = a || this, this.set = o || Ht, this.pr = l || 0, (this._next = e) && (e._prev = this)
    }

    b(lt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (e) {
        return tt[e] = 1
    }), et.TweenMax = et.TweenLite = Ft, et.TimelineLite = et.TimelineMax = Lt, he = new Lt({
        sortChildren: !1,
        defaults: Ne,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), De.stringFilter = oe;
    var si = {
        registerPlugin: function () {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            t.forEach(function (e) {
                return function (e) {
                    var t = (e = !e.name && e.default || e).name, i = s(e), n = t && !i && e.init ? function () {
                            this._props = []
                        } : e, r = {init: m, render: Kt, add: Nt, kill: ei, modifier: Jt, rawVars: 0},
                        a = {targetTest: 0, get: 0, getSetter: Wt, aliases: {}, register: 0};
                    if (St(), e !== n) {
                        if (st[t]) return;
                        M(n, M(P(e, r), a)), ct(n.prototype, ct(r, P(e, a))), st[n.prop = t] = n, e.targetTest && (ot.push(n), tt[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                    }
                    f(t, n), e.register && e.register(oi, n, ii)
                }(e)
            })
        },
        timeline: function (e) {
            return new Lt(e)
        },
        getTweensOf: function (e, t) {
            return he.getTweensOf(e, t)
        },
        getProperty: function (e, t, i, s) {
            n(e) && (e = ft(e)[0]);
            var r = v(e || {}).get, a = i ? C : _;
            return "native" === i && (i = ""), e ? t ? a((st[t] && st[t].get || r)(e, t, i, s)) : function (t, i, n) {
                return a((st[t] && st[t].get || r)(e, t, i, n))
            } : e
        },
        quickSetter: function (e, t, i) {
            if (1 < (e = ft(e)).length) {
                var n = e.map(function (e) {
                    return oi.quickSetter(e, t, i)
                }), s = n.length;
                return function (e) {
                    for (var t = s; t--;) n[t](e)
                }
            }
            e = e[0] || {};
            var r = st[t], a = v(e), o = a.harness && (a.harness.aliases || {})[t] || t, l = r ? function (t) {
                var n = new r;
                we._pt = 0, n.init(e, i ? t + i : t, we, 0, [e]), n.render(1, n), we._pt && Kt(1, we)
            } : a.set(e, o);
            return r ? l : function (t) {
                return l(e, o, i ? t + i : t, a, 1)
            }
        },
        isTweening: function (e) {
            return 0 < he.getTweensOf(e, !0).length
        },
        defaults: function (e) {
            return e && e.ease && (e.ease = Mt(e.ease, Ne.ease)), $(Ne, e || {})
        },
        config: function (e) {
            return $(De, e || {})
        },
        registerEffect: function (e) {
            var t = e.name, i = e.effect, n = e.plugins, s = e.defaults, r = e.extendTimeline;
            (n || "").split(",").forEach(function (e) {
                return e && !st[e] && !et[e] && h(t + " effect requires " + e + " plugin.")
            }), rt[t] = function (e, t, n) {
                return i(ft(e), M(t || {}, s), n)
            }, r && (Lt.prototype[t] = function (e, i, n) {
                return this.add(rt[t](e, o(i) ? i : (n = i) && {}, this), n)
            })
        },
        registerEase: function (e, t) {
            Et[e] = Mt(t)
        },
        parseEase: function (e, t) {
            return arguments.length ? Mt(e, t) : Et
        },
        getById: function (e) {
            return he.getById(e)
        },
        exportRoot: function (e, t) {
            void 0 === e && (e = {});
            var i, n, s = new Lt(e);
            for (s.smoothChildTiming = l(e.smoothChildTiming), he.remove(s), s._dp = 0, s._time = s._tTime = he._time, i = he._first; i;) n = i._next, !t && !i._dur && i instanceof Ft && i.vars.onComplete === i._targets[0] || V(s, i, i._start - i._delay), i = n;
            return V(he, s, 0), s
        },
        utils: {
            wrap: function e(t, i, n) {
                var s = i - t;
                return qe(t) ? J(t, e(0, t.length), i) : H(n, function (e) {
                    return (s + (e - t) % s) % s + t
                })
            }, wrapYoyo: function e(t, i, n) {
                var s = i - t, r = 2 * s;
                return qe(t) ? J(t, e(0, t.length - 1), i) : H(n, function (e) {
                    return t + (s < (e = (r + (e - t) % r) % r || 0) ? r - e : e)
                })
            }, distribute: U, random: K, snap: Q, normalize: function (e, t, i) {
                return mt(e, t, 0, 1, i)
            }, getUnit: q, clamp: function (e, t, i) {
                return H(i, function (i) {
                    return pt(e, t, i)
                })
            }, splitColor: se, toArray: ft, mapRange: mt, pipe: function () {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return function (e) {
                    return t.reduce(function (e, t) {
                        return t(e)
                    }, e)
                }
            }, unitize: function (e, t) {
                return function (i) {
                    return e(parseFloat(i)) + (t || q(i))
                }
            }, interpolate: function e(t, i, s, r) {
                var a = isNaN(t + i) ? 0 : function (e) {
                    return (1 - e) * t + e * i
                };
                if (!a) {
                    var o, l, c, d, u, p = n(t), h = {};
                    if (!0 === s && (r = 1) && (s = null), p) t = {p: t}, i = {p: i}; else if (qe(t) && !qe(i)) {
                        for (c = [], d = t.length, u = d - 2, l = 1; l < d; l++) c.push(e(t[l - 1], t[l]));
                        d--, a = function (e) {
                            e *= d;
                            var t = Math.min(u, ~~e);
                            return c[t](e - t)
                        }, s = i
                    } else r || (t = ct(qe(t) ? [] : {}, t));
                    if (!c) {
                        for (o in i) Nt.call(h, t, o, "get", i[o]);
                        a = function (e) {
                            return Kt(e, h) || (p ? t.p : t)
                        }
                    }
                }
                return H(s, a)
            }, shuffle: W
        },
        install: u,
        effects: rt,
        ticker: xt,
        updateRoot: Lt.updateRoot,
        plugins: st,
        globalTimeline: he,
        core: {PropTween: ii, globals: f, Tween: Ft, Timeline: Lt, Animation: Ot, getCache: v, _removeLinkedListItem: O}
    };

    function ri(e, t) {
        for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t;) i = i._next;
        return i
    }

    function ai(e, t) {
        return {
            name: e, rawVars: 1, init: function (e, i, s) {
                s._onInit = function (e) {
                    var s, r;
                    if (n(i) && (s = {}, b(i, function (e) {
                        return s[e] = 1
                    }), i = s), t) {
                        for (r in s = {}, i) s[r] = t(i[r]);
                        i = s
                    }
                    !function (e, t) {
                        var i, n, s, r = e._targets;
                        for (i in t) for (n = r.length; n--;) (s = (s = e._ptLookup[n][i]) && s.d) && (s._pt && (s = ri(s, i)), s && s.modifier && s.modifier(t[i], e, r[n], i))
                    }(e, i)
                }
            }
        }
    }

    b("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
        return si[e] = Ft[e]
    }), xt.add(Lt.updateRoot), we = si.to({}, {duration: 0});
    var oi = si.registerPlugin({
        name: "attr", init: function (e, t, i, n, s) {
            var r, a;
            for (r in t) (a = this.add(e, "setAttribute", (e.getAttribute(r) || 0) + "", t[r], n, s, 0, 0, r)) && (a.op = r), this._props.push(r)
        }
    }, {
        name: "endArray", init: function (e, t) {
            for (var i = t.length; i--;) this.add(e, i, e[i] || 0, t[i])
        }
    }, ai("roundProps", Z), ai("modifiers"), ai("snap", Q)) || si;

    function li(e, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    }

    function ci(e, t) {
        return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    }

    function di(e, t) {
        return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
    }

    function ui(e, t) {
        var i = t.s + t.c * e;
        t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
    }

    function pi(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    }

    function hi(e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
    }

    function fi(e, t, i) {
        return e.style[t] = i
    }

    function mi(e, t, i) {
        return e.style.setProperty(t, i)
    }

    function gi(e, t, i) {
        return e._gsap[t] = i
    }

    function vi(e, t, i) {
        return e._gsap.scaleX = e._gsap.scaleY = i
    }

    function yi(e, t, i, n, s) {
        var r = e._gsap;
        r.scaleX = r.scaleY = i, r.renderTransform(s, r)
    }

    function bi(e, t, i, n, s) {
        var r = e._gsap;
        r[t] = i, r.renderTransform(s, r)
    }

    function wi(e, t) {
        var i = Fi.createElementNS ? Fi.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Fi.createElement(e);
        return i.style ? i : Fi.createElement(e)
    }

    function xi(e, t, i) {
        var n = getComputedStyle(e);
        return n[t] || n.getPropertyValue(t.replace(yn, "-$1").toLowerCase()) || n.getPropertyValue(t) || !i && xi(e, _n(t) || t, 1) || ""
    }

    function Si() {
        "undefined" != typeof window && window.document && (Ri = window, Fi = Ri.document, Xi = Fi.documentElement, Hi = wi("div") || {style: {}}, qi = wi("div"), Sn = _n(Sn), En = _n(En), Hi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Wi = !!_n("perspective"), Yi = 1)
    }

    function Ei(e) {
        var t,
            i = wi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode, s = this.nextSibling, r = this.style.cssText;
        if (Xi.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
            t = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Ei
        } catch (e) {
        } else this._gsapBBox && (t = this._gsapBBox());
        return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), Xi.removeChild(i), this.style.cssText = r, t
    }

    function Ti(e, t) {
        for (var i = t.length; i--;) if (e.hasAttribute(t[i])) return e.getAttribute(t[i])
    }

    function _i(e) {
        var t;
        try {
            t = e.getBBox()
        } catch (i) {
            t = Ei.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === Ei || (t = Ei.call(e, !0)), !t || t.width || t.x || t.y ? t : {
            x: +Ti(e, ["x", "cx", "x1"]) || 0,
            y: +Ti(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Ci(e) {
        return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !_i(e))
    }

    function Mi(e, t) {
        if (t) {
            var i = e.style;
            t in fn && (t = Sn), i.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), i.removeProperty(t.replace(yn, "-$1").toLowerCase())) : i.removeAttribute(t)
        }
    }

    function ki(e, t, i, n, s, r) {
        var a = new ii(e._pt, t, i, 0, 1, r ? hi : pi);
        return (e._pt = a).b = n, a.e = s, e._props.push(i), a
    }

    function $i(e, t, i, n) {
        var s, r, a, o, l = parseFloat(i) || 0, c = (i + "").trim().substr((l + "").length) || "px", d = Hi.style,
            u = bn.test(t), p = "svg" === e.tagName.toLowerCase(),
            h = (p ? "client" : "offset") + (u ? "Width" : "Height"), f = "px" === n, m = "%" === n;
        return n === c || !l || Cn[n] || Cn[c] ? l : ("px" === c || f || (l = $i(e, t, i, "px")), o = e.getCTM && Ci(e), m && (fn[t] || ~t.indexOf("adius")) ? w(l / (o ? e.getBBox()[u ? "width" : "height"] : e[h]) * 100) : (d[u ? "width" : "height"] = 100 + (f ? c : n), r = ~t.indexOf("adius") || "em" === n && e.appendChild && !p ? e : e.parentNode, o && (r = (e.ownerSVGElement || {}).parentNode), r && r !== Fi && r.appendChild || (r = Fi.body), (a = r._gsap) && m && a.width && u && a.time === xt.time ? w(l / a.width * 100) : (!m && "%" !== c || (d.position = xi(e, "position")), r === e && (d.position = "static"), r.appendChild(Hi), s = Hi[h], r.removeChild(Hi), d.position = "absolute", u && m && ((a = v(r)).time = xt.time, a.width = r[h]), w(f ? s * l / 100 : s && l ? 100 / s * l : 0))))
    }

    function Pi(e, t, i, n) {
        var s;
        return Yi || Si(), t in xn && "transform" !== t && ~(t = xn[t]).indexOf(",") && (t = t.split(",")[0]), fn[t] && "transform" !== t ? (s = An(e, n), s = "transformOrigin" !== t ? s[t] : On(xi(e, En)) + " " + s.zOrigin + "px") : (s = e.style[t]) && "auto" !== s && !n && !~(s + "").indexOf("calc(") || (s = kn[t] && kn[t](e, t, i) || xi(e, t) || y(e, t) || ("opacity" === t ? 1 : 0)), i && !~(s + "").indexOf(" ") ? $i(e, t, s, i) + i : s
    }

    function Ai(e, t, i, n) {
        if (!i || "none" === i) {
            var s = _n(t, e, 1), r = s && xi(e, s, 1);
            r && r !== i && (t = s, i = r)
        }
        var a, o, l, c, d, u, p, h, f, m, g, v, y = new ii(this._pt, e.style, t, 0, 1, Qt), b = 0, w = 0;
        if (y.b = i, y.e = n, i += "", "auto" == (n += "") && (e.style[t] = n, n = xi(e, t) || n, e.style[t] = i), oe(a = [i, n]), n = a[1], l = (i = a[0]).match(Ue) || [], (n.match(Ue) || []).length) {
            for (; o = Ue.exec(n);) p = o[0], f = n.substring(b, o.index), d ? d = (d + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (d = 1), p !== (u = l[w++] || "") && (c = parseFloat(u) || 0, g = u.substr((c + "").length), (v = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), h = parseFloat(p), m = p.substr((h + "").length), b = Ue.lastIndex - m.length, m || (m = m || De.units[t] || g, b === n.length && (n += m, y.e += m)), g !== m && (c = $i(e, t, u, m) || 0), y._pt = {
                _next: y._pt,
                p: f || 1 === w ? f : ",",
                s: c,
                c: v ? v * h : h - c,
                m: d && d < 4 ? Math.round : 0
            });
            y.c = b < n.length ? n.substring(b, n.length) : ""
        } else y.r = "display" === t && "none" === n ? hi : pi;
        return Ke.test(n) && (y.e = 0), this._pt = y
    }

    function Oi(e) {
        var t = e.split(" "), i = t[0], n = t[1] || "50%";
        return "top" !== i && "bottom" !== i && "left" !== n && "right" !== n || (e = i, i = n, n = e), t[0] = Mn[i] || i, t[1] = Mn[n] || n, t.join(" ")
    }

    function zi(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var i, n, s, r = t.t, a = r.style, o = t.u, l = r._gsap;
            if ("all" === o || !0 === o) a.cssText = "", n = 1; else for (s = (o = o.split(",")).length; -1 < --s;) i = o[s], fn[i] && (n = 1, i = "transformOrigin" === i ? En : Sn), Mi(r, i);
            n && (Mi(r, Sn), l && (l.svg && r.removeAttribute("transform"), An(r, 1), l.uncache = 1))
        }
    }

    function Li(e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
    }

    function Ii(e) {
        var t = xi(e, Sn);
        return Li(t) ? $n : t.substr(7).match(We).map(w)
    }

    function Di(e, t) {
        var i, n, s, r, a = e._gsap || v(e), o = e.style, l = Ii(e);
        return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(s = e.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",") ? $n : l : (l !== $n || e.offsetParent || e === Xi || a.svg || (s = o.display, o.display = "block", (i = e.parentNode) && e.offsetParent || (r = 1, n = e.nextSibling, Xi.appendChild(e)), l = Ii(e), s ? o.display = s : Mi(e, "display"), r && (n ? i.insertBefore(e, n) : i ? i.appendChild(e) : Xi.removeChild(e))), t && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }

    function Ni(e, t, i, n, s, r) {
        var a, o, l, c = e._gsap, d = s || Di(e, !0), u = c.xOrigin || 0, p = c.yOrigin || 0, h = c.xOffset || 0,
            f = c.yOffset || 0, m = d[0], g = d[1], v = d[2], y = d[3], b = d[4], w = d[5], x = t.split(" "),
            S = parseFloat(x[0]) || 0, E = parseFloat(x[1]) || 0;
        i ? d !== $n && (o = m * y - g * v) && (l = S * (-g / o) + E * (m / o) - (m * w - g * b) / o, S = S * (y / o) + E * (-v / o) + (v * w - y * b) / o, E = l) : (S = (a = _i(e)).x + (~x[0].indexOf("%") ? S / 100 * a.width : S), E = a.y + (~(x[1] || x[0]).indexOf("%") ? E / 100 * a.height : E)), n || !1 !== n && c.smooth ? (b = S - u, w = E - p, c.xOffset = h + (b * m + w * v) - b, c.yOffset = f + (b * g + w * y) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = S, c.yOrigin = E, c.smooth = !!n, c.origin = t, c.originIsAbsolute = !!i, e.style[En] = "0px 0px", r && (ki(r, c, "xOrigin", u, S), ki(r, c, "yOrigin", p, E), ki(r, c, "xOffset", h, c.xOffset), ki(r, c, "yOffset", f, c.yOffset)), e.setAttribute("data-svg-origin", S + " " + E)
    }

    function Bi(e, t, i) {
        var n = q(t);
        return w(parseFloat(t) + parseFloat($i(e, "x", i + "px", n))) + n
    }

    function Vi(e, t, i, s, r, a) {
        var o, l, c = 360, d = n(r), u = parseFloat(r) * (d && ~r.indexOf("rad") ? mn : 1), p = a ? u * a : u - s,
            h = s + p + "deg";
        return d && ("short" === (o = r.split("_")[1]) && (p %= c) != p % 180 && (p += p < 0 ? c : -c), "cw" === o && p < 0 ? p = (p + 36e9) % c - ~~(p / c) * c : "ccw" === o && 0 < p && (p = (p - 36e9) % c - ~~(p / c) * c)), e._pt = l = new ii(e._pt, t, i, s, p, ci), l.e = h, l.u = "deg", e._props.push(i), l
    }

    function ji(e, t, i) {
        var n, s, r, a, o, l, c, d = qi.style, u = i._gsap;
        for (s in d.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;", d[Sn] = t, Fi.body.appendChild(qi), n = An(qi, 1), fn) (r = u[s]) !== (a = n[s]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 && (o = q(r) !== (c = q(a)) ? $i(i, s, r, c) : parseFloat(r), l = parseFloat(a), e._pt = new ii(e._pt, u, s, o, l - o, li), e._pt.u = c || 0, e._props.push(s));
        Fi.body.removeChild(qi)
    }

    Ft.version = Lt.version = oi.version = "3.3.4", ye = 1, c() && St();
    var Ri, Fi, Xi, Yi, Hi, qi, Gi, Wi, Ui = Et.Power0, Zi = Et.Power1, Qi = Et.Power2, Ki = Et.Power3, Ji = Et.Power4,
        en = Et.Linear, tn = Et.Quad, nn = Et.Cubic, sn = Et.Quart, rn = Et.Quint, an = Et.Strong, on = Et.Elastic,
        ln = Et.Back, cn = Et.SteppedEase, dn = Et.Bounce, un = Et.Sine, pn = Et.Expo, hn = Et.Circ, fn = {},
        mn = 180 / Math.PI, gn = Math.PI / 180, vn = Math.atan2, yn = /([A-Z])/g,
        bn = /(?:left|right|width|margin|padding|x)/i, wn = /[\s,\(]\S/,
        xn = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, Sn = "transform",
        En = Sn + "Origin", Tn = "O,Moz,ms,Ms,Webkit".split(","), _n = function (e, t, i) {
            var n = (t || Hi).style, s = 5;
            if (e in n && !i) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Tn[s] + e in n);) ;
            return s < 0 ? null : (3 === s ? "ms" : 0 <= s ? Tn[s] : "") + e
        }, Cn = {deg: 1, rad: 1, turn: 1}, Mn = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"},
        kn = {
            clearProps: function (e, t, i, n, s) {
                if ("isFromStart" !== s.data) {
                    var r = e._pt = new ii(e._pt, t, i, 0, 0, zi);
                    return r.u = n, r.pr = -10, r.tween = s, e._props.push(i), 1
                }
            }
        }, $n = [1, 0, 0, 1, 0, 0], Pn = {}, An = function (e, t) {
            var i = e._gsap || new At(e);
            if ("x" in i && !t && !i.uncache) return i;
            var n, s, r, a, o, l, c, d, u, p, h, f, m, g, v, y, b, x, S, E, T, _, C, M, k, $, P, A, O, z, L, I, D = e.style,
                N = i.scaleX < 0, B = "deg", V = xi(e, En) || "0";
            return n = s = r = l = c = d = u = p = h = 0, a = o = 1, i.svg = !(!e.getCTM || !Ci(e)), g = Di(e, i.svg), i.svg && (M = !i.uncache && e.getAttribute("data-svg-origin"), Ni(e, M || V, !!M || i.originIsAbsolute, !1 !== i.smooth, g)), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== $n && (x = g[0], S = g[1], E = g[2], T = g[3], n = _ = g[4], s = C = g[5], 6 === g.length ? (a = Math.sqrt(x * x + S * S), o = Math.sqrt(T * T + E * E), l = x || S ? vn(S, x) * mn : 0, (u = E || T ? vn(E, T) * mn + l : 0) && (o *= Math.cos(u * gn)), i.svg && (n -= f - (f * x + m * E), s -= m - (f * S + m * T))) : (I = g[6], z = g[7], P = g[8], A = g[9], O = g[10], L = g[11], n = g[12], s = g[13], r = g[14], c = (v = vn(I, O)) * mn, v && (M = _ * (y = Math.cos(-v)) + P * (b = Math.sin(-v)), k = C * y + A * b, $ = I * y + O * b, P = _ * -b + P * y, A = C * -b + A * y, O = I * -b + O * y, L = z * -b + L * y, _ = M, C = k, I = $), d = (v = vn(-E, O)) * mn, v && (y = Math.cos(-v), L = T * (b = Math.sin(-v)) + L * y, x = M = x * y - P * b, S = k = S * y - A * b, E = $ = E * y - O * b), l = (v = vn(S, x)) * mn, v && (M = x * (y = Math.cos(v)) + S * (b = Math.sin(v)), k = _ * y + C * b, S = S * y - x * b, C = C * y - _ * b, x = M, _ = k), c && 359.9 < Math.abs(c) + Math.abs(l) && (c = l = 0, d = 180 - d), a = w(Math.sqrt(x * x + S * S + E * E)), o = w(Math.sqrt(C * C + I * I)), v = vn(_, C), u = 2e-4 < Math.abs(v) ? v * mn : 0, h = L ? 1 / (L < 0 ? -L : L) : 0), i.svg && (M = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !Li(xi(e, Sn)), M && e.setAttribute("transform", M))), 90 < Math.abs(u) && Math.abs(u) < 270 && (N ? (a *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, u += u <= 0 ? 180 : -180)), i.x = ((i.xPercent = n && Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", i.y = ((i.yPercent = s && Math.round(e.offsetHeight / 2) === Math.round(-s) ? -50 : 0) ? 0 : s) + "px", i.z = r + "px", i.scaleX = w(a), i.scaleY = w(o), i.rotation = w(l) + B, i.rotationX = w(c) + B, i.rotationY = w(d) + B, i.skewX = u + B, i.skewY = p + B, i.transformPerspective = h + "px", (i.zOrigin = parseFloat(V.split(" ")[2]) || 0) && (D[En] = On(V)), i.xOffset = i.yOffset = 0, i.force3D = De.force3D, i.renderTransform = i.svg ? Bn : Wi ? Nn : zn, i.uncache = 0, i
        }, On = function (e) {
            return (e = e.split(" "))[0] + " " + e[1]
        }, zn = function (e, t) {
            t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Nn(e, t)
        }, Ln = "0deg", In = "0px", Dn = ") ", Nn = function (e, t) {
            var i = t || this, n = i.xPercent, s = i.yPercent, r = i.x, a = i.y, o = i.z, l = i.rotation, c = i.rotationY,
                d = i.rotationX, u = i.skewX, p = i.skewY, h = i.scaleX, f = i.scaleY, m = i.transformPerspective,
                g = i.force3D, v = i.target, y = i.zOrigin, b = "", w = "auto" === g && e && 1 !== e || !0 === g;
            if (y && (d !== Ln || c !== Ln)) {
                var x, S = parseFloat(c) * gn, E = Math.sin(S), T = Math.cos(S);
                S = parseFloat(d) * gn, r = Bi(v, r, E * (x = Math.cos(S)) * -y), a = Bi(v, a, -Math.sin(S) * -y), o = Bi(v, o, T * x * -y + y)
            }
            m !== In && (b += "perspective(" + m + Dn), (n || s) && (b += "translate(" + n + "%, " + s + "%) "), !w && r === In && a === In && o === In || (b += o !== In || w ? "translate3d(" + r + ", " + a + ", " + o + ") " : "translate(" + r + ", " + a + Dn), l !== Ln && (b += "rotate(" + l + Dn), c !== Ln && (b += "rotateY(" + c + Dn), d !== Ln && (b += "rotateX(" + d + Dn), u === Ln && p === Ln || (b += "skew(" + u + ", " + p + Dn), 1 === h && 1 === f || (b += "scale(" + h + ", " + f + Dn), v.style[Sn] = b || "translate(0, 0)"
        }, Bn = function (e, t) {
            var i, n, s, r, a, o = t || this, l = o.xPercent, c = o.yPercent, d = o.x, u = o.y, p = o.rotation, h = o.skewX,
                f = o.skewY, m = o.scaleX, g = o.scaleY, v = o.target, y = o.xOrigin, b = o.yOrigin, x = o.xOffset,
                S = o.yOffset, E = o.forceCSS, T = parseFloat(d), _ = parseFloat(u);
            p = parseFloat(p), h = parseFloat(h), (f = parseFloat(f)) && (h += f = parseFloat(f), p += f), p || h ? (p *= gn, h *= gn, i = Math.cos(p) * m, n = Math.sin(p) * m, s = Math.sin(p - h) * -g, r = Math.cos(p - h) * g, h && (f *= gn, a = Math.tan(h - f), s *= a = Math.sqrt(1 + a * a), r *= a, f && (a = Math.tan(f), i *= a = Math.sqrt(1 + a * a), n *= a)), i = w(i), n = w(n), s = w(s), r = w(r)) : (i = m, r = g, n = s = 0), (T && !~(d + "").indexOf("px") || _ && !~(u + "").indexOf("px")) && (T = $i(v, "x", d, "px"), _ = $i(v, "y", u, "px")), (y || b || x || S) && (T = w(T + y - (y * i + b * s) + x), _ = w(_ + b - (y * n + b * r) + S)), (l || c) && (T = w(T + l / 100 * (a = v.getBBox()).width), _ = w(_ + c / 100 * a.height)), a = "matrix(" + i + "," + n + "," + s + "," + r + "," + T + "," + _ + ")", v.setAttribute("transform", a), E && (v.style[Sn] = a)
        };
    b("padding,margin,Width,Radius", function (e, t) {
        var i = "Right", n = "Bottom", s = "Left",
            r = (t < 3 ? ["Top", i, n, s] : ["Top" + s, "Top" + i, n + i, n + s]).map(function (i) {
                return t < 2 ? e + i : "border" + i + e
            });
        kn[1 < t ? "border" + e : e] = function (e, t, i, n, s) {
            var a, o;
            if (arguments.length < 4) return a = r.map(function (t) {
                return Pi(e, t, i)
            }), 5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o;
            a = (n + "").split(" "), o = {}, r.forEach(function (e, t) {
                return o[e] = a[t] = a[t] || a[(t - 1) / 2 | 0]
            }), e.init(t, o, s)
        }
    });
    var Vn, jn, Rn = {
        name: "css", register: Si, targetTest: function (e) {
            return e.style && e.nodeType
        }, init: function (e, t, i, n, s) {
            var r, a, o, l, c, d, u, h, f, m, g, v, y, b, w, x = this._props, S = e.style;
            for (u in Yi || Si(), t) if ("autoRound" !== u && (a = t[u], !st[u] || !It(u, t, i, n, e, s))) if (c = typeof a, d = kn[u], "function" === c && (c = typeof (a = a.call(i, n, e, s))), "string" === c && ~a.indexOf("random(") && (a = ee(a)), d) d(this, e, u, a, i) && (w = 1); else if ("--" === u.substr(0, 2)) this.add(S, "setProperty", getComputedStyle(e).getPropertyValue(u) + "", a + "", n, s, 0, 0, u); else {
                if (r = Pi(e, u), l = parseFloat(r), (m = "string" === c && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), o = parseFloat(a), u in xn && ("autoAlpha" === u && (1 === l && "hidden" === Pi(e, "visibility") && o && (l = 0), ki(this, S, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== u && "transform" !== u && ~(u = xn[u]).indexOf(",") && (u = u.split(",")[0])), g = u in fn) if (v || ((y = e._gsap).renderTransform || An(e), b = !1 !== t.smoothOrigin && y.smooth, (v = this._pt = new ii(this._pt, S, Sn, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === u) this._pt = new ii(this._pt, y, "scaleY", y.scaleY, m ? m * o : o - y.scaleY), x.push("scaleY", u), u += "X"; else {
                    if ("transformOrigin" === u) {
                        a = Oi(a), y.svg ? Ni(e, a, 0, b, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== y.zOrigin && ki(this, y, "zOrigin", y.zOrigin, f), ki(this, S, u, On(r), On(a)));
                        continue
                    }
                    if ("svgOrigin" === u) {
                        Ni(e, a, 1, b, 0, this);
                        continue
                    }
                    if (u in Pn) {
                        Vi(this, y, u, l, a, m);
                        continue
                    }
                    if ("smoothOrigin" === u) {
                        ki(this, y, "smooth", y.smooth, a);
                        continue
                    }
                    if ("force3D" === u) {
                        y[u] = a;
                        continue
                    }
                    if ("transform" === u) {
                        ji(this, a, e);
                        continue
                    }
                } else u in S || (u = _n(u) || u);
                if (g || (o || 0 === o) && (l || 0 === l) && !wn.test(a) && u in S) (h = (r + "").substr((l + "").length)) !== (f = (a + "").substr(((o = o || 0) + "").length) || (u in De.units ? De.units[u] : h)) && (l = $i(e, u, r, f)), this._pt = new ii(this._pt, g ? y : S, u, l, m ? m * o : o - l, "px" !== f || !1 === t.autoRound || g ? li : ui), this._pt.u = f || 0, h !== f && (this._pt.b = r, this._pt.r = di); else if (u in S) Ai.call(this, e, u, r, a); else {
                    if (!(u in e)) {
                        p(u, a);
                        continue
                    }
                    this.add(e, u, e[u], a, n, s)
                }
                x.push(u)
            }
            w && ti(this)
        }, get: Pi, aliases: xn, getSetter: function (e, t, i) {
            var n = xn[t];
            return n && n.indexOf(",") < 0 && (t = n), t in fn && t !== En && (e._gsap.x || Pi(e, "x")) ? i && Gi === i ? "scale" === t ? vi : gi : (Gi = i || {}) && ("scale" === t ? yi : bi) : e.style && !a(e.style[t]) ? fi : ~t.indexOf("-") ? mi : Wt(e, t)
        }, core: {_removeProperty: Mi, _getMatrix: Di}
    };
    oi.utils.checkPrefix = _n, jn = b("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Vn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (e) {
        fn[e] = 1
    }), b(Vn, function (e) {
        De.units[e] = "deg", Pn[e] = 1
    }), xn[jn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Vn, b("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (e) {
        var t = e.split(":");
        xn[t[1]] = jn[t[0]]
    }), b("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (e) {
        De.units[e] = "px"
    }), oi.registerPlugin(Rn);
    var Fn = oi.registerPlugin(Rn) || oi, Xn = Fn.core.Tween;
    e.Back = ln, e.Bounce = dn, e.CSSPlugin = Rn, e.Circ = hn, e.Cubic = nn, e.Elastic = on, e.Expo = pn, e.Linear = en, e.Power0 = Ui, e.Power1 = Zi, e.Power2 = Qi, e.Power3 = Ki, e.Power4 = Ji, e.Quad = tn, e.Quart = sn, e.Quint = rn, e.Sine = un, e.SteppedEase = cn, e.Strong = an, e.TimelineLite = Lt, e.TimelineMax = Lt, e.TweenLite = Ft, e.TweenMax = Xn, e.default = Fn, e.gsap = Fn, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {value: !0}) : delete e.default
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, function () {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function n(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function s(e) {
        return function (e) {
            if (Array.isArray(e)) return r(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? r(e, t) : void 0
            }
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
    }

    var a = Date.now();

    function o() {
        var e = {}, t = !0, i = 0, n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
        for (var s = function (i) {
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = o(!0, e[n], i[n]) : e[n] = i[n])
        }; i < n; i++) {
            s(arguments[i])
        }
        return e
    }

    function l(e, t) {
        if ((C(e) || e === window || e === document) && (e = [e]), k(e) || $(e) || (e = [e]), 0 != O(e)) if (k(e) && !$(e)) for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++) ; else if ($(e)) for (var s in e) if (A(e, s) && !1 === t.call(e[s], e[s], s, e)) break
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e[a] = e[a] || [],
            s = {all: n, evt: null, found: null};
        return t && i && O(n) > 0 && l(n, function (e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return s.found = !0, s.evt = n, !1
        }), s
    }

    function d(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = t.onElement,
            n = t.withCallback, s = t.avoidDuplicate, r = void 0 === s || s, a = t.once, o = void 0 !== a && a,
            d = t.useCapture, u = void 0 !== d && d, p = arguments.length > 2 ? arguments[2] : void 0, h = i || [];

        function f(e) {
            T(n) && n.call(p, e, this), o && f.destroy()
        }

        return _(h) && (h = document.querySelectorAll(h)), f.destroy = function () {
            l(h, function (t) {
                var i = c(t, e, f);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, f, u)
            })
        }, l(h, function (t) {
            var i = c(t, e, f);
            (t.addEventListener && r && !i.found || !r) && (t.addEventListener(e, f, u), i.all.push({
                eventName: e,
                fn: f
            }))
        }), f
    }

    function u(e, t) {
        l(t.split(" "), function (t) {
            return e.classList.add(t)
        })
    }

    function p(e, t) {
        l(t.split(" "), function (t) {
            return e.classList.remove(t)
        })
    }

    function h(e, t) {
        return e.classList.contains(t)
    }

    function f(e, t) {
        for (; e !== document.body;) {
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e
        }
    }

    function m(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" == t) return T(i) && i(), !1;
        var n = function () {
            var e, t = document.createElement("fakeelement"), i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for (e in i) if (void 0 !== t.style[e]) return i[e]
        }(), s = t.split(" ");
        l(s, function (t) {
            u(e, "g" + t)
        }), d(n, {
            onElement: e, avoidDuplicate: !1, once: !0, withCallback: function (e, t) {
                l(s, function (e) {
                    p(t, "g" + e)
                }), T(i) && i()
            }
        })
    }

    function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" == t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
    }

    function v(e) {
        e.style.display = "block"
    }

    function y(e) {
        e.style.display = "none"
    }

    function b(e) {
        var t = document.createDocumentFragment(), i = document.createElement("div");
        for (i.innerHTML = e; i.firstChild;) t.appendChild(i.firstChild);
        return t
    }

    function w() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }

    function x(e, t, i, n) {
        if (e()) t(); else {
            var s;
            i || (i = 100);
            var r = setInterval(function () {
                e() && (clearInterval(r), s && clearTimeout(s), t())
            }, i);
            n && (s = setTimeout(function () {
                clearInterval(r)
            }, n))
        }
    }

    function S(e, t, i) {
        if (P(e)) console.error("Inject assets error"); else if (T(t) && (i = t, t = !1), _(t) && t in window) T(i) && i(); else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (T(i) && i());
                var s = document.getElementsByTagName("head")[0], r = s.querySelectorAll('link[rel="stylesheet"]'),
                    a = document.createElement("link");
                return a.rel = "stylesheet", a.type = "text/css", a.href = e, a.media = "all", r ? s.insertBefore(a, r[0]) : s.appendChild(a), void (T(i) && i())
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (T(i)) {
                    if (_(t)) return x(function () {
                        return void 0 !== window[t]
                    }, function () {
                        i()
                    }), !1;
                    i()
                }
            } else {
                var o = document.createElement("script");
                o.type = "text/javascript", o.src = e, o.onload = function () {
                    if (T(i)) {
                        if (_(t)) return x(function () {
                            return void 0 !== window[t]
                        }, function () {
                            i()
                        }), !1;
                        i()
                    }
                }, document.body.appendChild(o)
            }
        }
    }

    function E() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
    }

    function T(e) {
        return "function" == typeof e
    }

    function _(e) {
        return "string" == typeof e
    }

    function C(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType)
    }

    function M(e) {
        return Array.isArray(e)
    }

    function k(e) {
        return e && e.length && isFinite(e.length)
    }

    function $(t) {
        return "object" === e(t) && null != t && !T(t) && !M(t)
    }

    function P(e) {
        return null == e
    }

    function A(e, t) {
        return null !== e && hasOwnProperty.call(e, t)
    }

    function O(e) {
        if ($(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for (var i in e) A(e, i) && t++;
            return t
        }
        return e.length
    }

    function z(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }

    function L(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = d("keydown", {
            onElement: window, withCallback: function (t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var r = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                    if ("input" == r || "textarea" == r || "button" == r) return;
                    t.preventDefault();
                    var a = document.querySelectorAll(".gbtn");
                    if (!a || a.length <= 0) return;
                    var o = s(a).filter(function (e) {
                        return h(e, "focused")
                    });
                    if (!o.length) {
                        var l = document.querySelector('.gbtn[tabindex="0"]');
                        return void (l && (l.focus(), u(l, "focused")))
                    }
                    a.forEach(function (e) {
                        return p(e, "focused")
                    });
                    var c = o[0].getAttribute("tabindex");
                    c = c || "0";
                    var d = parseInt(c) + 1;
                    d > a.length - 1 && (d = "0");
                    var f = document.querySelector('.gbtn[tabindex="'.concat(d, '"]'));
                    f && (f.focus(), u(f, "focused"))
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close()
            }
        })
    }

    function I(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y)
    }

    var D = function () {
        function e(i) {
            t(this, e), this.handlers = [], this.el = i
        }

        return n(e, [{
            key: "add", value: function (e) {
                this.handlers.push(e)
            }
        }, {
            key: "del", value: function (e) {
                e || (this.handlers = []);
                for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
            }
        }, {
            key: "dispatch", value: function () {
                for (var e = 0, t = this.handlers.length; e < t; e++) {
                    var i = this.handlers[e];
                    "function" == typeof i && i.apply(this.el, arguments)
                }
            }
        }]), e
    }();

    function N(e, t) {
        var i = new D(e);
        return i.add(t), i
    }

    var B = function () {
        function e(i, n) {
            t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var s = function () {
            };
            this.rotate = N(this.element, n.rotate || s), this.touchStart = N(this.element, n.touchStart || s), this.multipointStart = N(this.element, n.multipointStart || s), this.multipointEnd = N(this.element, n.multipointEnd || s), this.pinch = N(this.element, n.pinch || s), this.swipe = N(this.element, n.swipe || s), this.tap = N(this.element, n.tap || s), this.doubleTap = N(this.element, n.doubleTap || s), this.longTap = N(this.element, n.longTap || s), this.singleTap = N(this.element, n.singleTap || s), this.pressMove = N(this.element, n.pressMove || s), this.twoFingerPressMove = N(this.element, n.twoFingerPressMove || s), this.touchMove = N(this.element, n.touchMove || s), this.touchEnd = N(this.element, n.touchEnd || s), this.touchCancel = N(this.element, n.touchCancel || s), this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            }
        }

        return n(e, [{
            key: "start", value: function (e) {
                if (e.touches) {
                    this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                    var t = this.preV;
                    if (e.touches.length > 1) {
                        this._cancelLongTap(), this._cancelSingleTap();
                        var i = {x: e.touches[1].pageX - this.x1, y: e.touches[1].pageY - this.y1};
                        t.x = i.x, t.y = i.y, this.pinchStartLen = I(t), this.multipointStart.dispatch(e, this.element)
                    }
                    this._preventTap = !1, this.longTapTimeout = setTimeout(function () {
                        this.longTap.dispatch(e, this.element), this._preventTap = !0
                    }.bind(this), 750)
                }
            }
        }, {
            key: "move", value: function (e) {
                if (e.touches) {
                    var t = this.preV, i = e.touches.length, n = e.touches[0].pageX, s = e.touches[0].pageY;
                    if (this.isDoubleTap = !1, i > 1) {
                        var r = e.touches[1].pageX, a = e.touches[1].pageY,
                            o = {x: e.touches[1].pageX - n, y: e.touches[1].pageY - s};
                        null !== t.x && (this.pinchStartLen > 0 && (e.zoom = I(o) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = function (e, t) {
                            var i = function (e, t) {
                                var i = I(e) * I(t);
                                if (0 === i) return 0;
                                var n = function (e, t) {
                                    return e.x * t.x + e.y * t.y
                                }(e, t) / i;
                                return n > 1 && (n = 1), Math.acos(n)
                            }(e, t);
                            return function (e, t) {
                                return e.x * t.y - t.x * e.y
                            }(e, t) > 0 && (i *= -1), 180 * i / Math.PI
                        }(o, t), this.rotate.dispatch(e, this.element)), t.x = o.x, t.y = o.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + r - this.sx2) / 2, e.deltaY = (s - this.y2 + a - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = r, this.sy2 = a
                    } else {
                        if (null !== this.x2) {
                            e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                            var l = Math.abs(this.x1 - this.x2), c = Math.abs(this.y1 - this.y2);
                            (l > 10 || c > 10) && (this._preventTap = !0)
                        } else e.deltaX = 0, e.deltaY = 0;
                        this.pressMove.dispatch(e, this.element)
                    }
                    this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault()
                }
            }
        }, {
            key: "end", value: function (e) {
                if (e.changedTouches) {
                    this._cancelLongTap();
                    var t = this;
                    e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function () {
                        t.swipe.dispatch(e, t.element)
                    }, 0)) : (this.tapTimeout = setTimeout(function () {
                        t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1)
                    }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function () {
                        t.singleTap.dispatch(e, t.element)
                    }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
                }
            }
        }, {
            key: "cancelAll", value: function () {
                this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
            }
        }, {
            key: "cancel", value: function (e) {
                this.cancelAll(), this.touchCancel.dispatch(e, this.element)
            }
        }, {
            key: "_cancelLongTap", value: function () {
                clearTimeout(this.longTapTimeout)
            }
        }, {
            key: "_cancelSingleTap", value: function () {
                clearTimeout(this.singleTapTimeout)
            }
        }, {
            key: "_swipeDirection", value: function (e, t, i, n) {
                return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
            }
        }, {
            key: "on", value: function (e, t) {
                this[e] && this[e].add(t)
            }
        }, {
            key: "off", value: function (e, t) {
                this[e] && this[e].del(t)
            }
        }, {
            key: "destroy", value: function () {
                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
            }
        }]), e
    }();

    function V(e) {
        var t = function () {
                var e, t = document.createElement("fakeelement"), i = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
                for (e in i) if (void 0 !== t.style[e]) return i[e]
            }(), i = h(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
            n = e.querySelector(".gslide-description");
        u(i, "greset"), g(i, "translate3d(0, 0, 0)"), d(t, {
            onElement: i, once: !0, withCallback: function (e, t) {
                p(i, "greset")
            }
        }), i.style.opacity = "", n && (n.style.opacity = "")
    }

    var j = function () {
        function e(i, n) {
            var s = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (t(this, e), this.img = i, this.slide = n, this.onclose = r, this.img.setZoomEvents) return !1;
            this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function (e) {
                return s.dragStart(e)
            }, !1), this.img.addEventListener("mouseup", function (e) {
                return s.dragEnd(e)
            }, !1), this.img.addEventListener("mousemove", function (e) {
                return s.drag(e)
            }, !1), this.img.addEventListener("click", function (e) {
                return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn()
            }, !1), this.img.setZoomEvents = !0
        }

        return n(e, [{
            key: "zoomIn", value: function () {
                var e = this.widowWidth();
                if (!(this.zoomedIn || e <= 768)) {
                    var t = this.img;
                    if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                        var i = e / 2 - t.naturalWidth / 2;
                        this.setTranslate(this.img.parentNode, i, 0)
                    }
                    this.slide.classList.add("zoomed"), this.zoomedIn = !0
                }
            }
        }, {
            key: "zoomOut", value: function () {
                this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
            }
        }, {
            key: "dragStart", value: function (e) {
                e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
            }
        }, {
            key: "dragEnd", value: function (e) {
                var t = this;
                e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function () {
                    t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging")
                }, 100)
            }
        }, {
            key: "drag", value: function (e) {
                this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
            }
        }, {
            key: "onMove", value: function (e) {
                if (this.zoomedIn) {
                    var t = e.clientX - this.img.naturalWidth / 2, i = e.clientY - this.img.naturalHeight / 2;
                    this.setTranslate(this.img, t, i)
                }
            }
        }, {
            key: "setTranslate", value: function (e, t, i) {
                e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
            }
        }, {
            key: "widowWidth", value: function () {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            }
        }]), e
    }(), R = function () {
        function e() {
            var i = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e);
            var s = n.dragEl, r = n.toleranceX, a = void 0 === r ? 40 : r, o = n.toleranceY, l = void 0 === o ? 65 : o,
                c = n.slide, d = void 0 === c ? null : c, u = n.instance, p = void 0 === u ? null : u;
            this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = a, this.toleranceY = l, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = p, this.el.addEventListener("mousedown", function (e) {
                return i.dragStart(e)
            }, !1), this.el.addEventListener("mouseup", function (e) {
                return i.dragEnd(e)
            }, !1), this.el.addEventListener("mousemove", function (e) {
                return i.drag(e)
            }, !1)
        }

        return n(e, [{
            key: "dragStart", value: function (e) {
                if (this.slide.classList.contains("zoomed")) this.active = !1; else {
                    "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                    var t = e.target.nodeName.toLowerCase();
                    e.target.classList.contains("nodrag") || f(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && f(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = f(e.target, ".ginner-container")))
                }
            }
        }, {
            key: "dragEnd", value: function (e) {
                var t = this;
                e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function () {
                    t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = ""
                }, 100)
            }
        }, {
            key: "drag", value: function (e) {
                if (this.active) {
                    e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                    var t = Math.abs(this.currentX), i = Math.abs(this.currentY);
                    if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                        this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                        var n = this.shouldChange();
                        if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide())
                    }
                    if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                        this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                        var s = this.shouldClose();
                        return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close())
                    }
                }
            }
        }, {
            key: "shouldChange", value: function () {
                var e = !1;
                if (Math.abs(this.currentX) >= this.toleranceX) {
                    var t = this.currentX > 0 ? "right" : "left";
                    ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t)
                }
                return e
            }
        }, {
            key: "shouldClose", value: function () {
                var e = !1;
                return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e
            }
        }, {
            key: "setTranslate", value: function (e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
            }
        }]), e
    }();

    function F(e) {
        var t = f(e.target, ".gslide-media");
        "enterfullscreen" == e.type && u(t, "fullscreen"), "exitfullscreen" == e.type && p(t, "fullscreen")
    }

    function X(e, t, i, n) {
        var s, r = this, a = e.querySelector(".gslide-media"),
            o = !(!A(t, "href") || !t.href) && t.href.split("#").pop().trim(),
            l = !(!A(t, "content") || !t.content) && t.content;
        if (l && (_(l) && (s = b('<div class="ginlined-content">'.concat(l, "</div>"))), C(l))) {
            "none" == l.style.display && (l.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(l), s = c
        }
        if (o) {
            var p = document.getElementById(o);
            if (!p) return !1;
            var h = p.cloneNode(!0);
            h.style.height = t.height, h.style.maxWidth = t.width, u(h, "ginlined-content"), s = h
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        a.style.height = t.height, a.style.width = t.width, a.appendChild(s), this.events["inlineclose" + o] = d("click", {
            onElement: a.querySelectorAll(".gtrigger-close"),
            withCallback: function (e) {
                e.preventDefault(), r.close()
            }
        }), T(n) && n()
    }

    var Y = function () {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), this.defaults = {
                    href: "",
                    title: "",
                    type: "",
                    description: "",
                    descPosition: "bottom",
                    effect: "",
                    width: "",
                    height: "",
                    content: !1,
                    zoomable: !0,
                    draggable: !0
                }, $(i) && (this.defaults = o(this.defaults, i))
            }

            return n(e, [{
                key: "sourceType", value: function (e) {
                    var t = e;
                    return null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/) ? "image" : e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) ? "video" : e.match(/vimeo\.com\/([0-9]*)/) ? "video" : null !== e.match(/\.(mp4|ogg|webm|mov)$/) ? "video" : null !== e.match(/\.(mp3|wav|wma|aac|ogg)$/) ? "audio" : e.indexOf("#") > -1 && "" !== t.split("#").pop().trim() ? "inline" : e.indexOf("goajax=true") > -1 ? "ajax" : "external"
                }
            }, {
                key: "parseConfig", value: function (e, t) {
                    var i = this, n = o({descPosition: t.descPosition}, this.defaults);
                    if ($(e) && !C(e)) {
                        A(e, "type") || (A(e, "content") && e.content ? e.type = "inline" : A(e, "href") && (e.type = this.sourceType(e.href)));
                        var s = o(n, e);
                        return this.setSize(s, t), s
                    }
                    var r = "", a = e.getAttribute("data-glightbox"), c = e.nodeName.toLowerCase();
                    if ("a" === c && (r = e.href), "img" === c && (r = e.src), n.href = r, l(n, function (s, r) {
                        A(t, r) && "width" !== r && (n[r] = t[r]);
                        var a = e.dataset[r];
                        P(a) || (n[r] = i.sanitizeValue(a))
                    }), n.content && (n.type = "inline"), !n.type && r && (n.type = this.sourceType(r)), P(a)) {
                        if (!n.title && "a" == c) {
                            var d = e.title;
                            P(d) || "" === d || (n.title = d)
                        }
                        if (!n.title && "img" == c) {
                            var u = e.alt;
                            P(u) || "" === u || (n.title = u)
                        }
                    } else {
                        var p = [];
                        l(n, function (e, t) {
                            p.push(";\\s?" + t)
                        }), p = p.join("\\s?:|"), "" !== a.trim() && l(n, function (e, t) {
                            var s = a, r = new RegExp("s?" + t + "s?:s?(.*?)(" + p + "s?:|$)"), o = s.match(r);
                            if (o && o.length && o[1]) {
                                var l = o[1].trim().replace(/;\s*$/, "");
                                n[t] = i.sanitizeValue(l)
                            }
                        })
                    }
                    if (n.description && "." == n.description.substring(0, 1) && document.querySelector(n.description)) n.description = document.querySelector(n.description).innerHTML; else {
                        var h = e.querySelector(".glightbox-desc");
                        h && (n.description = h.innerHTML)
                    }
                    return this.setSize(n, t), this.slideConfig = n, n
                }
            }, {
                key: "setSize", value: function (e, t) {
                    var i = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
                        n = this.checkSize(t.height);
                    return e.width = A(e, "width") && "" !== e.width ? this.checkSize(e.width) : i, e.height = A(e, "height") && "" !== e.height ? this.checkSize(e.height) : n, e
                }
            }, {
                key: "checkSize", value: function (e) {
                    return z(e) ? "".concat(e, "px") : e
                }
            }, {
                key: "sanitizeValue", value: function (e) {
                    return "true" !== e && "false" !== e ? e : "true" === e
                }
            }]), e
        }(), H = function () {
            function e(i, n, s) {
                t(this, e), this.element = i, this.instance = n, this.index = s
            }

            return n(e, [{
                key: "setContent", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (h(t, "loaded")) return !1;
                    var n = this.instance.settings, s = this.slideConfig, r = E();
                    T(n.beforeSlideLoad) && n.beforeSlideLoad({index: this.index, slide: t, player: !1});
                    var a = s.type, o = s.descPosition, l = t.querySelector(".gslide-media"),
                        c = t.querySelector(".gslide-title"), d = t.querySelector(".gslide-desc"),
                        p = t.querySelector(".gdesc-inner"), f = i, m = "gSlideTitle_" + this.index,
                        g = "gSlideDesc_" + this.index;
                    if (T(n.afterSlideLoad) && (f = function () {
                        T(i) && i(), n.afterSlideLoad({
                            index: e.index,
                            slide: t,
                            player: e.instance.getSlidePlayerInstance(e.index)
                        })
                    }), "" == s.title && "" == s.description ? p && p.parentNode.parentNode.removeChild(p.parentNode) : (c && "" !== s.title ? (c.id = m, c.innerHTML = s.title) : c.parentNode.removeChild(c), d && "" !== s.description ? (d.id = g, r && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), d.innerHTML = s.smallDescription, this.descriptionEvents(d, s)) : d.innerHTML = s.description) : d.parentNode.removeChild(d), u(l.parentNode, "desc-".concat(o)), u(p.parentNode, "description-".concat(o))), u(l, "gslide-".concat(a)), u(t, "loaded"), "video" !== a) {
                        if ("external" !== a) return "inline" === a ? (X.apply(this.instance, [t, s, this.index, f]), void (n.draggable && new R({
                            dragEl: t.querySelector(".gslide-inline"),
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: this.instance
                        }))) : void ("image" !== a ? T(f) && f() : function (e, t, i, n) {
                            var s = e.querySelector(".gslide-media"), r = new Image, a = "gSlideTitle_" + i,
                                o = "gSlideDesc_" + i;
                            r.addEventListener("load", function () {
                                T(n) && n()
                            }, !1), r.src = t.href, r.alt = "", "" !== t.title && r.setAttribute("aria-labelledby", a), "" !== t.description && r.setAttribute("aria-describedby", o), s.insertBefore(r, s.firstChild)
                        }(t, s, this.index, function () {
                            var i = t.querySelector("img");
                            n.draggable && new R({
                                dragEl: i,
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: t,
                                instance: e.instance
                            }), s.zoomable && i.naturalWidth > i.offsetWidth && (u(i, "zoomable"), new j(i, t, function () {
                                e.instance.resize()
                            })), T(f) && f()
                        }));
                        (function (e, t, i, n) {
                            var s = e.querySelector(".gslide-media"), r = function (e) {
                                var t = e.url, i = e.allow, n = e.callback, s = e.appendTo,
                                    r = document.createElement("iframe");
                                return r.className = "vimeo-video gvideo", r.src = t, r.style.width = "100%", r.style.height = "100%", i && r.setAttribute("allow", i), r.onload = function () {
                                    u(r, "node-ready"), T(n) && n()
                                }, s && s.appendChild(r), r
                            }({url: t.href, callback: n});
                            s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(r)
                        }).apply(this, [t, s, this.index, f])
                    } else (function (e, t, i, n) {
                        var s = this, r = e.querySelector(".ginner-container"), a = "gvideo" + i,
                            o = e.querySelector(".gslide-media"), l = this.getAllPlayers();
                        u(r, "gvideo-container"), o.insertBefore(b('<div class="gvideo-wrapper"></div>'), o.firstChild);
                        var c = e.querySelector(".gvideo-wrapper");
                        S(this.settings.plyr.css, "Plyr");
                        var d = t.href, p = location.protocol.replace(":", ""), h = "", f = "", m = !1;
                        "file" == p && (p = "http"), o.style.maxWidth = t.width, S(this.settings.plyr.js, "Plyr", function () {
                            if (d.match(/vimeo\.com\/([0-9]*)/)) {
                                var e = /vimeo.*\/(\d+)/i.exec(d);
                                h = "vimeo", f = e[1]
                            }
                            if (d.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || d.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || d.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
                                var r = function (e) {
                                    return void 0 !== (e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? e[2].split(/[^0-9a-z_\-]/i)[0] : e
                                }(d);
                                h = "youtube", f = r
                            }
                            if (null !== d.match(/\.(mp4|ogg|webm|mov)$/)) {
                                h = "local";
                                var o = '<video id="' + a + '" ';
                                o += 'style="background:#000; max-width: '.concat(t.width, ';" '), o += 'preload="metadata" ', o += 'x-webkit-airplay="allow" ', o += 'webkit-playsinline="" ', o += "controls ", o += 'class="gvideo-local">';
                                var p = d.toLowerCase().split(".").pop(), g = {mp4: "", ogg: "", webm: ""};
                                for (var v in g[p = "mov" == p ? "mp4" : p] = d, g) if (g.hasOwnProperty(v)) {
                                    var y = g[v];
                                    t.hasOwnProperty(v) && (y = t[v]), "" !== y && (o += '<source src="'.concat(y, '" type="video/').concat(v, '">'))
                                }
                                m = b(o += "</video>")
                            }
                            var w = m || b('<div id="'.concat(a, '" data-plyr-provider="').concat(h, '" data-plyr-embed-id="').concat(f, '"></div>'));
                            u(c, "".concat(h, "-video gvideo")), c.appendChild(w), c.setAttribute("data-id", a), c.setAttribute("data-index", i);
                            var x = A(s.settings.plyr, "config") ? s.settings.plyr.config : {}, S = new Plyr("#" + a, x);
                            S.on("ready", function (e) {
                                var t = e.detail.plyr;
                                l[a] = t, T(n) && n()
                            }), S.on("enterfullscreen", F), S.on("exitfullscreen", F)
                        })
                    }).apply(this.instance, [t, s, this.index, f])
                }
            }, {
                key: "slideShortDesc", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = document.createElement("div");
                    n.innerHTML = e;
                    var s = i;
                    if ((e = n.innerText.trim()).length <= t) return e;
                    var r = e.substr(0, t - 1);
                    return s ? (n = null, r + '... <a href="#" class="desc-more">' + i + "</a>") : r
                }
            }, {
                key: "descriptionEvents", value: function (e, t) {
                    var i = this, n = e.querySelector(".desc-more");
                    if (!n) return !1;
                    d("click", {
                        onElement: n, withCallback: function (e, n) {
                            e.preventDefault();
                            var s = document.body, r = f(n, ".gslide-desc");
                            if (!r) return !1;
                            r.innerHTML = t.description, u(s, "gdesc-open");
                            var a = d("click", {
                                onElement: [s, f(r, ".gslide-description")], withCallback: function (e, n) {
                                    "a" !== e.target.nodeName.toLowerCase() && (p(s, "gdesc-open"), u(s, "gdesc-closed"), r.innerHTML = t.smallDescription, i.descriptionEvents(r, t), setTimeout(function () {
                                        p(s, "gdesc-closed")
                                    }, 400), a.destroy())
                                }
                            })
                        }
                    })
                }
            }, {
                key: "create", value: function () {
                    return b(this.instance.settings.slideHTML)
                }
            }, {
                key: "getConfig", value: function () {
                    var e = new Y(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
                }
            }]), e
        }(), q = E(),
        G = null !== E() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
        W = document.getElementsByTagName("html")[0], U = {
            selector: ".glightbox",
            elements: null,
            skin: "clean",
            theme: "clean",
            closeButton: !0,
            startAt: null,
            autoplayVideos: !0,
            autofocusVideos: !0,
            descPosition: "bottom",
            width: "900px",
            height: "506px",
            videosWidth: "960px",
            beforeSlideChange: null,
            afterSlideChange: null,
            beforeSlideLoad: null,
            afterSlideLoad: null,
            slideInserted: null,
            slideRemoved: null,
            slideExtraAttributes: null,
            onOpen: null,
            onClose: null,
            loop: !1,
            zoomable: !0,
            draggable: !0,
            dragAutoSnap: !1,
            dragToleranceX: 40,
            dragToleranceY: 65,
            preload: !0,
            oneSlidePerOpen: !1,
            touchNavigation: !0,
            touchFollowAxis: !0,
            keyboardNavigation: !0,
            closeOnOutsideClick: !0,
            plugins: !1,
            plyr: {
                css: "https://cdn.plyr.io/3.6.3/plyr.css",
                js: "https://cdn.plyr.io/3.6.3/plyr.js",
                config: {
                    ratio: "16:9",
                    fullscreen: {enabled: !0, iosNative: !0},
                    youtube: {noCookie: !0, rel: 0, showinfo: 0, iv_load_policy: 3},
                    vimeo: {byline: !1, portrait: !1, title: !1, transparent: !1}
                }
            },
            openEffect: "zoom",
            closeEffect: "zoom",
            slideEffect: "slide",
            moreText: "See more",
            moreLength: 60,
            cssEfects: {
                fade: {in: "fadeIn", out: "fadeOut"},
                zoom: {in: "zoomIn", out: "zoomOut"},
                slide: {in: "slideInRight", out: "slideOutLeft"},
                slideBack: {in: "slideInLeft", out: "slideOutRight"},
                none: {in: "none", out: "none"}
            },
            svg: {
                close: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
            },
            slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
            lightboxHTML: '<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n</div>\n</div>'
        }, Z = function () {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), this.settings = o(U, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
            }

            return n(e, [{
                key: "init", value: function () {
                    var e = this, t = this.getSelector();
                    t && (this.baseEvents = d("click", {
                        onElement: t, withCallback: function (t, i) {
                            t.preventDefault(), e.open(i)
                        }
                    })), this.elements = this.getElements()
                }
            }, {
                key: "open", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (0 == this.elements.length) return !1;
                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                    var i = z(t) ? t : this.settings.startAt;
                    if (C(e)) {
                        var n = e.getAttribute("data-gallery");
                        n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), P(i) && (i = this.getElementIndex(e)) < 0 && (i = 0)
                    }
                    z(i) || (i = 0), this.build(), m(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                    var s = document.body, r = window.innerWidth - document.documentElement.clientWidth;
                    if (r > 0) {
                        var a = document.createElement("style");
                        a.type = "text/css", a.className = "gcss-styles", a.innerText = ".gscrollbar-fixer {margin-right: ".concat(r, "px}"), document.head.appendChild(a), u(s, "gscrollbar-fixer")
                    }
                    u(s, "glightbox-open"), u(W, "glightbox-open"), q && (u(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 == this.elements.length ? (u(this.prevButton, "glightbox-button-hidden"), u(this.nextButton, "glightbox-button-hidden")) : (p(this.prevButton, "glightbox-button-hidden"), p(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), T(this.settings.onOpen) && this.settings.onOpen(), G && this.settings.touchNavigation && function (e) {
                        if (e.events.hasOwnProperty("touch")) return !1;
                        var t, i, n, s = w(), r = s.width, a = s.height, o = !1, l = null, c = null, d = null, m = !1,
                            v = 1, y = 1, b = !1, x = !1, S = null, E = null, T = null, _ = null, C = 0, M = 0, k = !1,
                            $ = !1, P = {}, A = {}, O = 0, z = 0, L = document.getElementById("glightbox-slider"),
                            I = document.querySelector(".goverlay"), D = new B(L, {
                                touchStart: function (t) {
                                    if (o = !0, (h(t.targetTouches[0].target, "ginner-container") || f(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (o = !1), f(t.targetTouches[0].target, ".gslide-inline") && !h(t.targetTouches[0].target.parentNode, "gslide-inline") && (o = !1), o) {
                                        if (A = t.targetTouches[0], P.pageX = t.targetTouches[0].pageX, P.pageY = t.targetTouches[0].pageY, O = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, l = e.activeSlide, c = l.querySelector(".gslide-media"), n = l.querySelector(".gslide-inline"), d = null, h(c, "gslide-image") && (d = c.querySelector("img")), p(I, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                                        t.preventDefault()
                                    }
                                }, touchMove: function (s) {
                                    if (o && (A = s.targetTouches[0], !b && !x)) {
                                        if (n && n.offsetHeight > a) {
                                            var l = P.pageX - A.pageX;
                                            if (Math.abs(l) <= 13) return !1
                                        }
                                        m = !0;
                                        var u, p = s.targetTouches[0].clientX, h = s.targetTouches[0].clientY, f = O - p,
                                            v = z - h;
                                        if (Math.abs(f) > Math.abs(v) ? (k = !1, $ = !0) : ($ = !1, k = !0), t = A.pageX - P.pageX, C = 100 * t / r, i = A.pageY - P.pageY, M = 100 * i / a, k && d && (u = 1 - Math.abs(i) / a, I.style.opacity = u, e.settings.touchFollowAxis && (C = 0)), $ && (u = 1 - Math.abs(t) / r, c.style.opacity = u, e.settings.touchFollowAxis && (M = 0)), !d) return g(c, "translate3d(".concat(C, "%, 0, 0)"));
                                        g(c, "translate3d(".concat(C, "%, ").concat(M, "%, 0)"))
                                    }
                                }, touchEnd: function () {
                                    if (o) {
                                        if (m = !1, x || b) return T = S, void (_ = E);
                                        var t = Math.abs(parseInt(M)), i = Math.abs(parseInt(C));
                                        if (!(t > 29 && d)) return t < 29 && i < 25 ? (u(I, "greset"), I.style.opacity = 1, V(c)) : void 0;
                                        e.close()
                                    }
                                }, multipointEnd: function () {
                                    setTimeout(function () {
                                        b = !1
                                    }, 50)
                                }, multipointStart: function () {
                                    b = !0, v = y || 1
                                }, pinch: function (e) {
                                    if (!d || m) return !1;
                                    b = !0, d.scaleX = d.scaleY = v * e.zoom;
                                    var t = v * e.zoom;
                                    if (x = !0, t <= 1) return x = !1, t = 1, _ = null, T = null, S = null, E = null, void d.setAttribute("style", "");
                                    t > 4.5 && (t = 4.5), d.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), y = t
                                }, pressMove: function (e) {
                                    if (x && !b) {
                                        var t = A.pageX - P.pageX, i = A.pageY - P.pageY;
                                        T && (t += T), _ && (i += _), S = t, E = i;
                                        var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                                        y && (n += " scale3d(".concat(y, ", ").concat(y, ", 1)")), g(d, n)
                                    }
                                }, swipe: function (t) {
                                    if (!x) if (b) b = !1; else {
                                        if ("Left" == t.direction) {
                                            if (e.index == e.elements.length - 1) return V(c);
                                            e.nextSlide()
                                        }
                                        if ("Right" == t.direction) {
                                            if (0 == e.index) return V(c);
                                            e.prevSlide()
                                        }
                                    }
                                }
                            });
                        e.events.touch = D
                    }(this), this.settings.keyboardNavigation && L(this)
                }
            }, {
                key: "openAt", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.open(null, e)
                }
            }, {
                key: "showSlide", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    v(this.loader), this.index = parseInt(t);
                    var n = this.slidesContainer.querySelector(".current");
                    n && p(n, "current"), this.slideAnimateOut();
                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                    if (h(s, "loaded")) this.slideAnimateIn(s, i), y(this.loader); else {
                        v(this.loader);
                        var r = this.elements[t], a = {
                            index: this.index,
                            slide: s,
                            slideNode: s,
                            slideConfig: r.slideConfig,
                            slideIndex: this.index,
                            trigger: r.node,
                            player: null
                        };
                        this.trigger("slide_before_load", a), r.instance.setContent(s, function () {
                            y(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", a)
                        })
                    }
                    this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && h(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s
                }
            }, {
                key: "preloadSlide", value: function (e) {
                    var t = this;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    if (P(this.elements[e])) return !1;
                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                    if (h(i, "loaded")) return !1;
                    var n = this.elements[e], s = n.type, r = {
                        index: e,
                        slide: i,
                        slideNode: i,
                        slideConfig: n.slideConfig,
                        slideIndex: e,
                        trigger: n.node,
                        player: null
                    };
                    this.trigger("slide_before_load", r), "video" == s || "external" == s ? setTimeout(function () {
                        n.instance.setContent(i, function () {
                            t.trigger("slide_after_load", r)
                        })
                    }, 200) : n.instance.setContent(i, function () {
                        t.trigger("slide_after_load", r)
                    })
                }
            }, {
                key: "prevSlide", value: function () {
                    this.goToSlide(this.index - 1)
                }
            }, {
                key: "nextSlide", value: function () {
                    this.goToSlide(this.index + 1)
                }
            }, {
                key: "goToSlide", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                    e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
                }
            }, {
                key: "insertSlide", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    t < 0 && (t = this.elements.length);
                    var i = new H(e, this, t), n = i.getConfig(), s = o({}, n), r = i.create(),
                        a = this.elements.length - 1;
                    s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                    var l = null, c = null;
                    if (this.slidesContainer) {
                        if (t > a) this.slidesContainer.appendChild(r); else {
                            var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                            this.slidesContainer.insertBefore(r, d)
                        }
                        (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 == this.index && 0 == t && (this.index = 1), this.updateNavigationClasses(), l = this.slidesContainer.querySelectorAll(".gslide")[t], c = this.getSlidePlayerInstance(t), s.slideNode = l
                    }
                    this.trigger("slide_inserted", {
                        index: t,
                        slide: l,
                        slideNode: l,
                        slideConfig: n,
                        slideIndex: t,
                        trigger: null,
                        player: c
                    }), T(this.settings.slideInserted) && this.settings.slideInserted({index: t, slide: l, player: c})
                }
            }, {
                key: "removeSlide", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                    t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), T(this.settings.slideRemoved) && this.settings.slideRemoved(e)
                }
            }, {
                key: "slideAnimateIn", value: function (e, t) {
                    var i = this, n = e.querySelector(".gslide-media"), s = e.querySelector(".gslide-description"), r = {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlide,
                        slideConfig: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, a = {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideConfig: this.elements[this.index].slideConfig,
                        slideIndex: this.index,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    };
                    if (n.offsetWidth > 0 && s && (y(s), s.style.display = ""), p(e, this.effectsClasses), t) m(e, this.settings.cssEfects[this.settings.openEffect].in, function () {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: r,
                            current: a
                        }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [r, a])
                    }); else {
                        var o = this.settings.slideEffect, l = "none" !== o ? this.settings.cssEfects[o].in : o;
                        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (l = this.settings.cssEfects.slideBack.in), m(e, l, function () {
                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                prev: r,
                                current: a
                            }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [r, a])
                        })
                    }
                    setTimeout(function () {
                        i.resize(e)
                    }, 100), u(e, "current")
                }
            }, {
                key: "slideAnimateOut", value: function () {
                    if (!this.prevActiveSlide) return !1;
                    var e = this.prevActiveSlide;
                    p(e, this.effectsClasses), u(e, "prev");
                    var t = this.settings.slideEffect, i = "none" !== t ? this.settings.cssEfects[t].out : t;
                    this.slidePlayerPause(e), this.trigger("slide_before_change", {
                        prev: {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlideIndex,
                            slideConfig: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: P(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        current: {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideIndex: this.index,
                            slideConfig: this.elements[this.index].slideConfig,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    }), T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, {
                        index: this.index,
                        slide: this.activeSlide,
                        player: this.getSlidePlayerInstance(this.index)
                    }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), m(e, i, function () {
                        var t = e.querySelector(".gslide-media"), i = e.querySelector(".gslide-description");
                        t.style.transform = "", p(t, "greset"), t.style.opacity = "", i && (i.style.opacity = ""), p(e, "prev")
                    })
                }
            }, {
                key: "getAllPlayers", value: function () {
                    return this.videoPlayers
                }
            }, {
                key: "getSlidePlayerInstance", value: function (e) {
                    var t = "gvideo" + e, i = this.getAllPlayers();
                    return !(!A(i, t) || !i[t]) && i[t]
                }
            }, {
                key: "stopSlideVideo", value: function (e) {
                    if (C(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause()
                }
            }, {
                key: "slidePlayerPause", value: function (e) {
                    if (C(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause()
                }
            }, {
                key: "playSlideVideo", value: function (e) {
                    if (C(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && i.play()
                }
            }, {
                key: "slidePlayerPlay", value: function (e) {
                    if (C(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    var i = this.getSlidePlayerInstance(e);
                    console.log("Player is"), console.log(i), i && !i.playing && (i.play(), this.settings.autofocusVideos && i.elements.container.focus())
                }
            }, {
                key: "setElements", value: function (e) {
                    var t = this;
                    this.settings.elements = !1;
                    var i = [];
                    e && e.length && l(e, function (e, n) {
                        var s = new H(e, t, n), r = s.getConfig(), a = o({}, r);
                        a.slideConfig = r, a.instance = s, a.index = n, i.push(a)
                    }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (l(this.elements, function () {
                        var e = b(t.settings.slideHTML);
                        t.slidesContainer.appendChild(e)
                    }), this.showSlide(0, !0)))
                }
            }, {
                key: "getElementIndex", value: function (e) {
                    var t = !1;
                    return l(this.elements, function (i, n) {
                        if (A(i, "node") && i.node == e) return t = n, !0
                    }), t
                }
            }, {
                key: "getElements", value: function () {
                    var e = this, t = [];
                    this.elements = this.elements ? this.elements : [], !P(this.settings.elements) && M(this.settings.elements) && this.settings.elements.length && l(this.settings.elements, function (i, n) {
                        var s = new H(i, e, n), r = s.getConfig(), a = o({}, r);
                        a.node = !1, a.index = n, a.instance = s, a.slideConfig = r, t.push(a)
                    });
                    var i = !1;
                    return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (l(i, function (i, n) {
                        var s = new H(i, e, n), r = s.getConfig(), a = o({}, r);
                        a.node = i, a.index = n, a.instance = s, a.slideConfig = r, a.gallery = i.getAttribute("data-gallery"), t.push(a)
                    }), t) : t
                }
            }, {
                key: "getGalleryElements", value: function (e, t) {
                    return e.filter(function (e) {
                        return e.gallery == t
                    })
                }
            }, {
                key: "getSelector", value: function () {
                    return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
                }
            }, {
                key: "getActiveSlide", value: function () {
                    return this.slidesContainer.querySelectorAll(".gslide")[this.index]
                }
            }, {
                key: "getActiveSlideIndex", value: function () {
                    return this.index
                }
            }, {
                key: "getAnimationClasses", value: function () {
                    var e = [];
                    for (var t in this.settings.cssEfects) if (this.settings.cssEfects.hasOwnProperty(t)) {
                        var i = this.settings.cssEfects[t];
                        e.push("g".concat(i.in)), e.push("g".concat(i.out))
                    }
                    return e.join(" ")
                }
            }, {
                key: "build", value: function () {
                    var e = this;
                    if (this.built) return !1;
                    var t = A(this.settings.svg, "next") ? this.settings.svg.next : "",
                        i = A(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                        n = A(this.settings.svg, "close") ? this.settings.svg.close : "", s = this.settings.lightboxHTML;
                    s = b(s = (s = (s = s.replace(/{nextSVG}/g, t)).replace(/{prevSVG}/g, i)).replace(/{closeSVG}/g, n)), document.body.appendChild(s);
                    var r = document.getElementById("glightbox-body");
                    this.modal = r;
                    var a = r.querySelector(".gclose");
                    this.prevButton = r.querySelector(".gprev"), this.nextButton = r.querySelector(".gnext"), this.overlay = r.querySelector(".goverlay"), this.loader = r.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.events = {}, u(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && a && (this.events.close = d("click", {
                        onElement: a,
                        withCallback: function (t, i) {
                            t.preventDefault(), e.close()
                        }
                    })), a && !this.settings.closeButton && a.parentNode.removeChild(a), this.nextButton && (this.events.next = d("click", {
                        onElement: this.nextButton,
                        withCallback: function (t, i) {
                            t.preventDefault(), e.nextSlide()
                        }
                    })), this.prevButton && (this.events.prev = d("click", {
                        onElement: this.prevButton,
                        withCallback: function (t, i) {
                            t.preventDefault(), e.prevSlide()
                        }
                    })), this.settings.closeOnOutsideClick && (this.events.outClose = d("click", {
                        onElement: r,
                        withCallback: function (t, i) {
                            e.preventOutsideClick || h(document.body, "glightbox-mobile") || f(t.target, ".ginner-container") || f(t.target, ".gbtn") || h(t.target, "gnext") || h(t.target, "gprev") || e.close()
                        }
                    })), l(this.elements, function (t, i) {
                        e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]
                    }), G && u(document.body, "glightbox-touch"), this.events.resize = d("resize", {
                        onElement: window,
                        withCallback: function () {
                            e.resize()
                        }
                    }), this.built = !0
                }
            }, {
                key: "resize", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((e = e || this.activeSlide) && !h(e, "zoomed")) {
                        var t = w(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"),
                            s = this.slideDescription, r = t.width, a = t.height;
                        if (r <= 768 ? u(document.body, "glightbox-mobile") : p(document.body, "glightbox-mobile"), i || n) {
                            var o = !1;
                            if (s && (h(s, "description-bottom") || h(s, "description-top")) && !h(s, "gabsolute") && (o = !0), n) if (r <= 768) {
                                n.querySelector("img").setAttribute("style", "")
                            } else if (o) {
                                var l = s.offsetHeight, c = n.querySelector("img");
                                c.setAttribute("style", "max-height: calc(100vh - ".concat(l, "px)")), s.setAttribute("style", "max-width: ".concat(c.offsetWidth, "px;"))
                            }
                            if (i) {
                                var d = (A(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "16:9").split(":"),
                                    f = 900, m = f / (parseInt(d[0]) / parseInt(d[1]));
                                if (m = Math.floor(m), o && (a -= s.offsetHeight), a < m && r > f) {
                                    var g = i.offsetWidth, v = i.offsetHeight, y = a / v, b = {width: g * y, height: v * y};
                                    i.parentNode.setAttribute("style", "max-width: ".concat(b.width, "px")), o && s.setAttribute("style", "max-width: ".concat(b.width, "px;"))
                                } else i.parentNode.style.maxWidth = "".concat(f, "px"), o && s.setAttribute("style", "max-width: ".concat(f, "px;"))
                            }
                        }
                    }
                }
            }, {
                key: "reload", value: function () {
                    this.init()
                }
            }, {
                key: "updateNavigationClasses", value: function () {
                    var e = this.loop();
                    p(this.nextButton, "disabled"), p(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (u(this.prevButton, "disabled"), u(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || u(this.nextButton, "disabled") : u(this.prevButton, "disabled")
                }
            }, {
                key: "loop", value: function () {
                    var e = A(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                    return e = A(this.settings, "loop") ? this.settings.loop : e
                }
            }, {
                key: "close", value: function () {
                    var e = this;
                    if (!this.lightboxOpen) {
                        if (this.events) {
                            for (var t in this.events) this.events.hasOwnProperty(t) && this.events[t].destroy();
                            this.events = null
                        }
                        return !1
                    }
                    if (this.closing) return !1;
                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), u(this.modal, "glightbox-closing"), m(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), m(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function () {
                        if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                            for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();
                            e.events = null
                        }
                        var i = document.body;
                        p(W, "glightbox-open"), p(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), T(e.settings.onClose) && e.settings.onClose();
                        var n = document.querySelector(".gcss-styles");
                        n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null
                    })
                }
            }, {
                key: "destroy", value: function () {
                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
                }
            }, {
                key: "on", value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e || !T(t)) throw new TypeError("Event name and callback must be defined");
                    this.apiEvents.push({evt: e, once: i, callback: t})
                }
            }, {
                key: "once", value: function (e, t) {
                    this.on(e, t, !0)
                }
            }, {
                key: "trigger", value: function (e) {
                    var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [];
                    l(this.apiEvents, function (t, s) {
                        var r = t.evt, a = t.once, o = t.callback;
                        r == e && (o(i), a && n.push(s))
                    }), n.length && l(n, function (e) {
                        return t.apiEvents.splice(e, 1)
                    })
                }
            }, {
                key: "clearAllEvents", value: function () {
                    this.apiEvents.splice(0, this.apiEvents.length)
                }
            }, {
                key: "version", value: function () {
                    return "3.0.7"
                }
            }]), e
        }();
    return function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = new Z(e);
        return t.init(), t
    }
}), function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function () {
    "use strict";
    var e = function () {
    };
    e.version = "2.0.7", window.addEventListener("mousewheel", function () {
    });
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function (n) {
        var r, a, o = "REVERSE", l = "PAUSED", c = i.defaults, d = this, u = s.extend({}, c, n), p = [], h = !1, f = 0,
            m = l, g = !0, v = 0, y = !0, b = function () {
                0 < u.refreshInterval && (a = window.setTimeout(C, u.refreshInterval))
            }, w = function () {
                return u.vertical ? s.get.scrollTop(u.container) : s.get.scrollLeft(u.container)
            }, x = function () {
                return u.vertical ? s.get.height(u.container) : s.get.width(u.container)
            }, S = this._setScrollPos = function (e) {
                u.vertical ? g ? window.scrollTo(s.get.scrollLeft(), e) : u.container.scrollTop = e : g ? window.scrollTo(e, s.get.scrollTop()) : u.container.scrollLeft = e
            }, E = function () {
                if (y && h) {
                    var e = s.type.Array(h) ? h : p.slice(0);
                    h = !1;
                    var t = f, i = (f = d.scrollPos()) - t;
                    0 !== i && (m = 0 < i ? "FORWARD" : o), m === o && e.reverse(), e.forEach(function (e, t) {
                        e.update(!0)
                    })
                }
            }, T = function () {
                r = s.rAF(E)
            }, _ = function (e) {
                "resize" == e.type && (v = x(), m = l), !0 !== h && (h = !0, T())
            }, C = function () {
                if (!g && v != x()) {
                    var e;
                    try {
                        e = new Event("resize", {bubbles: !1, cancelable: !1})
                    } catch (t) {
                        (e = document.createEvent("Event")).initEvent("resize", !1, !1)
                    }
                    u.container.dispatchEvent(e)
                }
                p.forEach(function (e, t) {
                    e.refresh()
                }), b()
            };
        this._options = u;
        var M = function (e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function (e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        };
        return this.addScene = function (t) {
            if (s.type.Array(t)) t.forEach(function (e, t) {
                d.addScene(e)
            }); else if (t instanceof e.Scene) if (t.controller() !== d) t.addTo(d); else if (p.indexOf(t) < 0) for (var i in p.push(t), p = M(p), t.on("shift.controller_sort", function () {
                p = M(p)
            }), u.globalSceneOptions) t[i] && t[i].call(t, u.globalSceneOptions[i]);
            return d
        }, this.removeScene = function (e) {
            if (s.type.Array(e)) e.forEach(function (e, t) {
                d.removeScene(e)
            }); else {
                var t = p.indexOf(e);
                -1 < t && (e.off("shift.controller_sort"), p.splice(t, 1), e.remove())
            }
            return d
        }, this.updateScene = function (t, i) {
            return s.type.Array(t) ? t.forEach(function (e, t) {
                d.updateScene(e, i)
            }) : i ? t.update(!0) : !0 !== h && t instanceof e.Scene && (-1 == (h = h || []).indexOf(t) && h.push(t), h = M(h), T()), d
        }, this.update = function (e) {
            return _({type: "resize"}), e && E(), d
        }, this.scrollTo = function (i, n) {
            if (s.type.Number(i)) S.call(u.container, i, n); else if (i instanceof e.Scene) i.controller() === d && d.scrollTo(i.scrollOffset(), n); else if (s.type.Function(i)) S = i; else {
                var r = s.get.elements(i)[0];
                if (r) {
                    for (; r.parentNode.hasAttribute(t);) r = r.parentNode;
                    var a = u.vertical ? "top" : "left", o = s.get.offset(u.container), l = s.get.offset(r);
                    g || (o[a] -= d.scrollPos()), d.scrollTo(l[a] - o[a], n)
                }
            }
            return d
        }, this.scrollPos = function (e) {
            return arguments.length ? (s.type.Function(e) && (w = e), d) : w.call(d)
        }, this.info = function (e) {
            var t = {
                size: v,
                vertical: u.vertical,
                scrollPos: f,
                scrollDirection: m,
                container: u.container,
                isDocument: g
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
        }, this.loglevel = function (e) {
            return d
        }, this.enabled = function (e) {
            return arguments.length ? (y != e && (y = !!e, d.updateScene(p, !0)), d) : y
        }, this.destroy = function (e) {
            window.clearTimeout(a);
            for (var t = p.length; t--;) p[t].destroy(e);
            return u.container.removeEventListener("resize", _), u.container.removeEventListener("scroll", _), s.cAF(r), null
        }, function () {
            for (var e in u) c.hasOwnProperty(e) || delete u[e];
            if (u.container = s.get.elements(u.container)[0], !u.container) throw"ScrollMagic.Controller init failed.";
            (g = u.container === window || u.container === document.body || !document.body.contains(u.container)) && (u.container = window), v = x(), u.container.addEventListener("resize", _), u.container.addEventListener("scroll", _);
            var t = parseInt(u.refreshInterval, 10);
            u.refreshInterval = s.type.Number(t) ? t : c.refreshInterval, b()
        }(), d
    };
    var i = {defaults: {container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100}};
    e.Controller.addOption = function (e, t) {
        i.defaults[e] = t
    }, e.Controller.extend = function (t) {
        var i = this;
        e.Controller = function () {
            return i.apply(this, arguments), this.$super = s.extend({}, this), t.apply(this, arguments) || this
        }, s.extend(e.Controller, i), e.Controller.prototype = i.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function (i) {
        var r, a, o = "BEFORE", l = "DURING", c = "AFTER", d = n.defaults, u = this, p = s.extend({}, d, i), h = o,
            f = 0, m = {start: 0, end: 0}, g = 0, v = !0, y = {};
        this.on = function (e, t) {
            return s.type.Function(t) && (e = e.trim().split(" ")).forEach(function (e) {
                var i = e.split("."), n = i[0], s = i[1];
                "*" != n && (y[n] || (y[n] = []), y[n].push({namespace: s || "", callback: t}))
            }), u
        }, this.off = function (e, t) {
            return e && (e = e.trim().split(" ")).forEach(function (e, i) {
                var n = e.split("."), s = n[0], r = n[1] || "";
                ("*" === s ? Object.keys(y) : [s]).forEach(function (e) {
                    for (var i = y[e] || [], n = i.length; n--;) {
                        var s = i[n];
                        !s || r !== s.namespace && "*" !== r || t && t != s.callback || i.splice(n, 1)
                    }
                    i.length || delete y[e]
                })
            }), u
        }, this.trigger = function (t, i) {
            if (t) {
                var n = t.trim().split("."), s = n[0], r = n[1], a = y[s];
                a && a.forEach(function (t, n) {
                    r && r !== t.namespace || t.callback.call(u, new e.Event(s, t.namespace, u, i))
                })
            }
            return u
        }, u.on("change.internal", function (e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? E() : "reverse" === e.what && u.update())
        }).on("shift.internal", function (e) {
            x(), u.update()
        }), this.addTo = function (t) {
            return t instanceof e.Controller && a != t && (a && a.removeScene(u), a = t, C(), S(!0), E(!0), x(), a.info("container").addEventListener("resize", T), t.addScene(u), u.trigger("add", {controller: a}), u.update()), u
        }, this.enabled = function (e) {
            return arguments.length ? (v != e && (v = !!e, u.update(!0)), u) : v
        }, this.remove = function () {
            if (a) {
                a.info("container").removeEventListener("resize", T);
                var e = a;
                a = void 0, e.removeScene(u), u.trigger("remove")
            }
            return u
        }, this.destroy = function (e) {
            return u.trigger("destroy", {reset: e}), u.remove(), u.off("*.*"), null
        }, this.update = function (e) {
            if (a) if (e) if (a.enabled() && v) {
                var t, i = a.info("scrollPos");
                t = 0 < p.duration ? (i - m.start) / (m.end - m.start) : i >= m.start ? 1 : 0, u.trigger("update", {
                    startPos: m.start,
                    endPos: m.end,
                    scrollPos: i
                }), u.progress(t)
            } else b && h === l && $(!0); else a.updateScene(u, !1);
            return u
        }, this.refresh = function () {
            return S(), E(), u
        }, this.progress = function (e) {
            if (arguments.length) {
                var t = !1, i = h, n = a ? a.info("scrollDirection") : "PAUSED", s = p.reverse || f <= e;
                if (0 === p.duration ? (t = f != e, h = 0 == (f = e < 1 && s ? 0 : 1) ? o : l) : e < 0 && h !== o && s ? (h = o, t = !(f = 0)) : 0 <= e && e < 1 && s ? (f = e, h = l, t = !0) : 1 <= e && h !== c ? (f = 1, h = c, t = !0) : h !== l || s || $(), t) {
                    var r = {progress: f, state: h, scrollDirection: n}, d = h != i, m = function (e) {
                        u.trigger(e, r)
                    };
                    d && i !== l && (m("enter"), m(i === o ? "start" : "end")), m("progress"), d && h !== l && (m(h === o ? "start" : "end"), m("leave"))
                }
                return u
            }
            return f
        };
        var b, w, x = function () {
            m = {start: g + p.offset}, a && p.triggerElement && (m.start -= a.info("size") * p.triggerHook), m.end = m.start + p.duration
        }, S = function (e) {
            if (r) {
                var t = "duration";
                M(t, r.call(u)) && !e && (u.trigger("change", {what: t, newval: p[t]}), u.trigger("shift", {reason: t}))
            }
        }, E = function (e) {
            var i = 0, n = p.triggerElement;
            if (a && (n || 0 < g)) {
                if (n) if (n.parentNode) {
                    for (var r = a.info(), o = s.get.offset(r.container), l = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(t);) n = n.parentNode;
                    var c = s.get.offset(n);
                    r.isDocument || (o[l] -= a.scrollPos()), i = c[l] - o[l]
                } else u.triggerElement(void 0);
                var d = i != g;
                g = i, d && !e && u.trigger("shift", {reason: "triggerElementPosition"})
            }
        }, T = function (e) {
            0 < p.triggerHook && u.trigger("shift", {reason: "containerResize"})
        }, _ = s.extend(n.validate, {
            duration: function (e) {
                if (s.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                    var t = parseFloat(e) / 100;
                    e = function () {
                        return a ? a.info("size") * t : 0
                    }
                }
                if (s.type.Function(e)) {
                    r = e;
                    try {
                        e = parseFloat(r.call(u))
                    } catch (t) {
                        e = -1
                    }
                }
                if (e = parseFloat(e), !s.type.Number(e) || e < 0) throw r && (r = void 0), 0;
                return e
            }
        }), C = function (e) {
            (e = arguments.length ? [e] : Object.keys(_)).forEach(function (e, t) {
                var i;
                if (_[e]) try {
                    i = _[e](p[e])
                } catch (t) {
                    i = d[e]
                } finally {
                    p[e] = i
                }
            })
        }, M = function (e, t) {
            var i = !1, n = p[e];
            return p[e] != t && (p[e] = t, C(e), i = n != p[e]), i
        }, k = function (e) {
            u[e] || (u[e] = function (t) {
                return arguments.length ? ("duration" === e && (r = void 0), M(e, t) && (u.trigger("change", {
                    what: e,
                    newval: p[e]
                }), -1 < n.shifts.indexOf(e) && u.trigger("shift", {reason: e})), u) : p[e]
            })
        };
        this.controller = function () {
            return a
        }, this.state = function () {
            return h
        }, this.scrollOffset = function () {
            return m.start
        }, this.triggerPosition = function () {
            var e = p.offset;
            return a && (p.triggerElement ? e += g : e += a.info("size") * u.triggerHook()), e
        }, u.on("shift.internal", function (e) {
            var t = "duration" === e.reason;
            (h === c && t || h === l && 0 === p.duration) && $(), t && P()
        }).on("progress.internal", function (e) {
            $()
        }).on("add.internal", function (e) {
            P()
        }).on("destroy.internal", function (e) {
            u.removePin(e.reset)
        });
        var $ = function (e) {
            if (b && a) {
                var t = a.info(), i = w.spacer.firstChild;
                if (e || h !== l) {
                    var n = {position: w.inFlow ? "relative" : "absolute", top: 0, left: 0},
                        r = s.css(i, "position") != n.position;
                    w.pushFollowers ? 0 < p.duration && (h === c && 0 === parseFloat(s.css(w.spacer, "padding-top")) ? r = !0 : h === o && 0 === parseFloat(s.css(w.spacer, "padding-bottom")) && (r = !0)) : n[t.vertical ? "top" : "left"] = p.duration * f, s.css(i, n), r && P()
                } else {
                    "fixed" != s.css(i, "position") && (s.css(i, {position: "fixed"}), P());
                    var d = s.get.offset(w.spacer, !0),
                        u = p.reverse || 0 === p.duration ? t.scrollPos - m.start : Math.round(f * p.duration * 10) / 10;
                    d[t.vertical ? "top" : "left"] += u, s.css(w.spacer.firstChild, {top: d.top, left: d.left})
                }
            }
        }, P = function () {
            if (b && a && w.inFlow) {
                var e = h === l, t = a.info("vertical"), i = w.spacer.firstChild,
                    n = s.isMarginCollapseType(s.css(w.spacer, "display")), r = {};
                w.relSize.width || w.relSize.autoFullWidth ? e ? s.css(b, {width: s.get.width(w.spacer)}) : s.css(b, {width: "100%"}) : (r["min-width"] = s.get.width(t ? b : i, !0, !0), r.width = e ? r["min-width"] : "auto"), w.relSize.height ? e ? s.css(b, {height: s.get.height(w.spacer) - (w.pushFollowers ? p.duration : 0)}) : s.css(b, {height: "100%"}) : (r["min-height"] = s.get.height(t ? i : b, !0, !n), r.height = e ? r["min-height"] : "auto"), w.pushFollowers && (r["padding" + (t ? "Top" : "Left")] = p.duration * f, r["padding" + (t ? "Bottom" : "Right")] = p.duration * (1 - f)), s.css(w.spacer, r)
            }
        }, A = function () {
            a && b && h === l && !a.info("isDocument") && $()
        }, O = function () {
            a && b && h === l && ((w.relSize.width || w.relSize.autoFullWidth) && s.get.width(window) != s.get.width(w.spacer.parentNode) || w.relSize.height && s.get.height(window) != s.get.height(w.spacer.parentNode)) && P()
        }, z = function (e) {
            a && b && h === l && !a.info("isDocument") && (e.preventDefault(), a._setScrollPos(a.info("scrollPos") - ((e.wheelDelta || e[a.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
        };
        this.setPin = function (e, i) {
            if (i = s.extend({}, {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            }, i), !(e = s.get.elements(e)[0])) return u;
            if ("fixed" === s.css(e, "position")) return u;
            if (b) {
                if (b === e) return u;
                u.removePin()
            }
            var n = (b = e).parentNode.style.display,
                r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            b.parentNode.style.display = "none";
            var a = "absolute" != s.css(b, "position"), o = s.css(b, r.concat(["display"])),
                l = s.css(b, ["width", "height"]);
            b.parentNode.style.display = n, !a && i.pushFollowers && (i.pushFollowers = !1);
            var c = b.parentNode.insertBefore(document.createElement("div"), b), d = s.extend(o, {
                position: a ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (a || s.extend(d, s.css(b, ["width", "height"])), s.css(c, d), c.setAttribute(t, ""), s.addClass(c, i.spacerClass), w = {
                spacer: c,
                relSize: {
                    width: "%" === l.width.slice(-1),
                    height: "%" === l.height.slice(-1),
                    autoFullWidth: "auto" === l.width && a && s.isMarginCollapseType(o.display)
                },
                pushFollowers: i.pushFollowers,
                inFlow: a
            }, !b.___origStyle) {
                b.___origStyle = {};
                var p = b.style;
                r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function (e) {
                    b.___origStyle[e] = p[e] || ""
                })
            }
            return w.relSize.width && s.css(c, {width: l.width}), w.relSize.height && s.css(c, {height: l.height}), c.appendChild(b), s.css(b, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (w.relSize.width || w.relSize.autoFullWidth) && s.css(b, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", A), window.addEventListener("resize", A), window.addEventListener("resize", O), b.addEventListener("mousewheel", z), b.addEventListener("DOMMouseScroll", z), $(), u
        }, this.removePin = function (e) {
            if (b) {
                if (h === l && $(!0), e || !a) {
                    var i = w.spacer.firstChild;
                    if (i.hasAttribute(t)) {
                        var n = w.spacer.style, r = {};
                        ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function (e) {
                            r[e] = n[e] || ""
                        }), s.css(i, r)
                    }
                    w.spacer.parentNode.insertBefore(i, w.spacer), w.spacer.parentNode.removeChild(w.spacer), b.parentNode.hasAttribute(t) || (s.css(b, b.___origStyle), delete b.___origStyle)
                }
                window.removeEventListener("scroll", A), window.removeEventListener("resize", A), window.removeEventListener("resize", O), b.removeEventListener("mousewheel", z), b.removeEventListener("DOMMouseScroll", z), b = void 0
            }
            return u
        };
        var L, I = [];
        return u.on("destroy.internal", function (e) {
            u.removeClassToggle(e.reset)
        }), this.setClassToggle = function (e, t) {
            var i = s.get.elements(e);
            return 0 !== i.length && s.type.String(t) && (0 < I.length && u.removeClassToggle(), L = t, I = i, u.on("enter.internal_class leave.internal_class", function (e) {
                var t = "enter" === e.type ? s.addClass : s.removeClass;
                I.forEach(function (e, i) {
                    t(e, L)
                })
            })), u
        }, this.removeClassToggle = function (e) {
            return e && I.forEach(function (e, t) {
                s.removeClass(e, L)
            }), u.off("start.internal_class end.internal_class"), L = void 0, I = [], u
        }, function () {
            for (var e in p) d.hasOwnProperty(e) || delete p[e];
            for (var t in d) k(t);
            C()
        }(), u
    };
    var n = {
        defaults: {duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2},
        validate: {
            offset: function (e) {
                if (e = parseFloat(e), !s.type.Number(e)) throw 0;
                return e
            }, triggerElement: function (e) {
                if (e = e || void 0) {
                    var t = s.get.elements(e)[0];
                    if (!t || !t.parentNode) throw 0;
                    e = t
                }
                return e
            }, triggerHook: function (e) {
                var t = {onCenter: .5, onEnter: 1, onLeave: 0};
                if (s.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1)); else {
                    if (!(e in t)) throw 0;
                    e = t[e]
                }
                return e
            }, reverse: function (e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function (e, t, i, s) {
        e in n.defaults || (n.defaults[e] = t, n.validate[e] = i, s && n.shifts.push(e))
    }, e.Scene.extend = function (t) {
        var i = this;
        e.Scene = function () {
            return i.apply(this, arguments), this.$super = s.extend({}, this), t.apply(this, arguments) || this
        }, s.extend(e.Scene, i), e.Scene.prototype = i.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function (e, t, i, n) {
        for (var s in n = n || {}) this[s] = n[s];
        return this.type = e, this.target = this.currentTarget = i, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var s = e._util = function (e) {
        var t, i = {}, n = function (e) {
            return parseFloat(e) || 0
        }, s = function (t) {
            return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
        }, r = function (t, i, r, a) {
            if ((i = i === document ? e : i) === e) a = !1; else if (!u.DomElement(i)) return 0;
            t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
            var o = (r ? i["offset" + t] || i["outer" + t] : i["client" + t] || i["inner" + t]) || 0;
            if (r && a) {
                var l = s(i);
                o += "Height" === t ? n(l.marginTop) + n(l.marginBottom) : n(l.marginLeft) + n(l.marginRight)
            }
            return o
        }, a = function (e) {
            return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
                return e[1].toUpperCase()
            })
        };
        i.extend = function (e) {
            for (e = e || {}, t = 1; t < arguments.length; t++) if (arguments[t]) for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
            return e
        }, i.isMarginCollapseType = function (e) {
            return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
        };
        var o = 0, l = ["ms", "moz", "webkit", "o"], c = e.requestAnimationFrame, d = e.cancelAnimationFrame;
        for (t = 0; !c && t < 4; ++t) c = e[l[t] + "RequestAnimationFrame"], d = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function (t) {
            var i = (new Date).getTime(), n = Math.max(0, 16 - (i - o)), s = e.setTimeout(function () {
                t(i + n)
            }, n);
            return o = i + n, s
        }), d || (d = function (t) {
            e.clearTimeout(t)
        }), i.rAF = c.bind(e), i.cAF = d.bind(e);
        var u = i.type = function (e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        u.String = function (e) {
            return "string" === u(e)
        }, u.Function = function (e) {
            return "function" === u(e)
        }, u.Array = function (e) {
            return Array.isArray(e)
        }, u.Number = function (e) {
            return !u.Array(e) && 0 <= e - parseFloat(e) + 1
        }, u.DomElement = function (e) {
            return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var p = i.get = {};
        return p.elements = function (t) {
            var i = [];
            if (u.String(t)) try {
                t = document.querySelectorAll(t)
            } catch (t) {
                return i
            }
            if ("nodelist" === u(t) || u.Array(t) || t instanceof NodeList) for (var n = 0, s = i.length = t.length; n < s; n++) {
                var r = t[n];
                i[n] = u.DomElement(r) ? r : p.elements(r)
            } else (u.DomElement(t) || t === document || t === e) && (i = [t]);
            return i
        }, p.scrollTop = function (t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }, p.scrollLeft = function (t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }, p.width = function (e, t, i) {
            return r("width", e, t, i)
        }, p.height = function (e, t, i) {
            return r("height", e, t, i)
        }, p.offset = function (e, t) {
            var i = {top: 0, left: 0};
            if (e && e.getBoundingClientRect) {
                var n = e.getBoundingClientRect();
                i.top = n.top, i.left = n.left, t || (i.top += p.scrollTop(), i.left += p.scrollLeft())
            }
            return i
        }, i.addClass = function (e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, i.removeClass = function (e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, i.css = function (e, t) {
            if (u.String(t)) return s(e)[a(t)];
            if (u.Array(t)) {
                var i = {}, n = s(e);
                return t.forEach(function (e, t) {
                    i[e] = n[a(e)]
                }), i
            }
            for (var r in t) {
                var o = t[r];
                o == parseFloat(o) && (o += "px"), e.style[a(r)] = o
            }
        }, i
    }(window || {});
    return e
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).noUiSlider = {})
}(this, function (e) {
    "use strict";

    function t(e) {
        return "object" == typeof e && "function" == typeof e.to
    }

    function i(e) {
        e.parentElement.removeChild(e)
    }

    function n(e) {
        return null != e
    }

    function s(e) {
        e.preventDefault()
    }

    function r(e) {
        return "number" == typeof e && !isNaN(e) && isFinite(e)
    }

    function a(e, t, i) {
        0 < i && (d(e, t), setTimeout(function () {
            u(e, t)
        }, i))
    }

    function o(e) {
        return Math.max(Math.min(e, 100), 0)
    }

    function l(e) {
        return Array.isArray(e) ? e : [e]
    }

    function c(e) {
        return 1 < (e = (e = String(e)).split(".")).length ? e[1].length : 0
    }

    function d(e, t) {
        e.classList && !/\s/.test(t) ? e.classList.add(t) : e.className += " " + t
    }

    function u(e, t) {
        e.classList && !/\s/.test(t) ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function p(e) {
        var t = void 0 !== window.pageXOffset, i = "CSS1Compat" === (e.compatMode || "");
        return {
            x: t ? window.pageXOffset : (i ? e.documentElement : e.body).scrollLeft,
            y: t ? window.pageYOffset : (i ? e.documentElement : e.body).scrollTop
        }
    }

    function h(e, t) {
        return 100 / (t - e)
    }

    function f(e, t, i) {
        return 100 * t / (e[i + 1] - e[i])
    }

    function m(e, t) {
        for (var i = 1; e >= t[i];) i += 1;
        return i
    }

    e.PipsMode = void 0, (W = e.PipsMode || (e.PipsMode = {})).Range = "range", W.Steps = "steps", W.Positions = "positions", W.Count = "count", W.Values = "values", e.PipsType = void 0, (W = e.PipsType || (e.PipsType = {}))[W.None = -1] = "None", W[W.NoValue = 0] = "NoValue", W[W.LargeValue = 1] = "LargeValue", W[W.SmallValue = 2] = "SmallValue";
    var g = (v.prototype.getDistance = function (e) {
        for (var t = [], i = 0; i < this.xNumSteps.length - 1; i++) t[i] = f(this.xVal, e, i);
        return t
    }, v.prototype.getAbsoluteDistance = function (e, t, i) {
        var n = 0;
        if (e < this.xPct[this.xPct.length - 1]) for (; e > this.xPct[n + 1];) n++; else e === this.xPct[this.xPct.length - 1] && (n = this.xPct.length - 2);
        i || e !== this.xPct[n + 1] || n++;
        for (var s, r = 1, a = (t = null === t ? [] : t)[n], o = 0, l = 0, c = 0, d = i ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n]) : (this.xPct[n + 1] - e) / (this.xPct[n + 1] - this.xPct[n]); 0 < a;) s = this.xPct[n + 1 + c] - this.xPct[n + c], 100 < t[n + c] * r + 100 - 100 * d ? (o = s * d, r = (a - 100 * d) / t[n + c], d = 1) : (o = t[n + c] * s / 100 * r, r = 0), i ? (l -= o, 1 <= this.xPct.length + c && c--) : (l += o, 1 <= this.xPct.length - c && c++), a = t[n + c] * r;
        return e + l
    }, v.prototype.toStepping = function (e) {
        return function (e, t, i) {
            if (i >= e.slice(-1)[0]) return 100;
            var n = e[(r = m(i, e)) - 1], s = e[r], r = (e = t[r - 1], t[r]);
            return e + (i = i, f(s = [n, s], s[0] < 0 ? i + Math.abs(s[0]) : i - s[0], 0) / h(e, r))
        }(this.xVal, this.xPct, e)
    }, v.prototype.fromStepping = function (e) {
        return function (e, t, i) {
            if (100 <= i) return e.slice(-1)[0];
            var n, s = e[(n = m(i, t)) - 1], r = e[n];
            return (i - (e = t[n - 1])) * h(e, n = t[n]) * ((r = [s, r])[1] - r[0]) / 100 + r[0]
        }(this.xVal, this.xPct, e)
    }, v.prototype.getStep = function (e) {
        return function (e, t, i, n) {
            if (100 === n) return n;
            var s = m(n, e), r = e[s - 1], a = e[s];
            return i ? (a - r) / 2 < n - r ? a : r : t[s - 1] ? e[s - 1] + (e = n - e[s - 1], s = t[s - 1], Math.round(e / s) * s) : n
        }(this.xPct, this.xSteps, this.snap, e)
    }, v.prototype.getDefaultStep = function (e, t, i) {
        var n = m(e, this.xPct);
        return (100 === e || t && e === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / i
    }, v.prototype.getNearbySteps = function (e) {
        return e = m(e, this.xPct), {
            stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2]
            },
            thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1]
            },
            stepAfter: {startValue: this.xVal[e], step: this.xNumSteps[e], highestStep: this.xHighestCompleteStep[e]}
        }
    }, v.prototype.countStepDecimals = function () {
        var e = this.xNumSteps.map(c);
        return Math.max.apply(null, e)
    }, v.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1]
    }, v.prototype.convert = function (e) {
        return this.getStep(this.toStepping(e))
    }, v.prototype.handleEntryPoint = function (e, t) {
        if (!r(e = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e)) || !r(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
        this.xPct.push(e), this.xVal.push(t[0]), t = Number(t[1]), e ? this.xSteps.push(!isNaN(t) && t) : isNaN(t) || (this.xSteps[0] = t), this.xHighestCompleteStep.push(0)
    }, v.prototype.handleStepPoint = function (e, t) {
        t && (this.xVal[e] !== this.xVal[e + 1] ? (this.xSteps[e] = f([this.xVal[e], this.xVal[e + 1]], t, 0) / h(this.xPct[e], this.xPct[e + 1]), t = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e], t = Math.ceil(Number(t.toFixed(3)) - 1), t = this.xVal[e] + this.xNumSteps[e] * t, this.xHighestCompleteStep[e] = t) : this.xSteps[e] = this.xHighestCompleteStep[e] = this.xVal[e])
    }, v);

    function v(e, t, i) {
        var n;
        this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [i || !1], this.xNumSteps = [!1], this.snap = t;
        var s = [];
        for (Object.keys(e).forEach(function (t) {
            s.push([l(e[t]), t])
        }), s.sort(function (e, t) {
            return e[0][0] - t[0][0]
        }), n = 0; n < s.length; n++) this.handleEntryPoint(s[n][1], s[n][0]);
        for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) this.handleStepPoint(n, this.xNumSteps[n])
    }

    var y = {
        to: function (e) {
            return void 0 === e ? "" : e.toFixed(2)
        }, from: Number
    }, b = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    }, w = {tooltips: ".__tooltips", aria: ".__aria"};

    function x(e, t) {
        if (!r(t)) throw new Error("noUiSlider: 'step' is not numeric.");
        e.singleStep = t
    }

    function S(e, t) {
        if (!r(t)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        e.keyboardPageMultiplier = t
    }

    function E(e, t) {
        if (!r(t)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        e.keyboardMultiplier = t
    }

    function T(e, t) {
        if (!r(t)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        e.keyboardDefaultStep = t
    }

    function _(e, t) {
        if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        e.spectrum = new g(t, e.snap || !1, e.singleStep)
    }

    function C(e, t) {
        if (t = l(t), !Array.isArray(t) || !t.length) throw new Error("noUiSlider: 'start' option is incorrect.");
        e.handles = t.length, e.start = t
    }

    function M(e, t) {
        if ("boolean" != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.");
        e.snap = t
    }

    function k(e, t) {
        if ("boolean" != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.");
        e.animate = t
    }

    function $(e, t) {
        if ("number" != typeof t) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        e.animationDuration = t
    }

    function P(e, t) {
        var i, n = [!1];
        if ("lower" === t ? t = [!0, !1] : "upper" === t && (t = [!1, !0]), !0 === t || !1 === t) {
            for (i = 1; i < e.handles; i++) n.push(t);
            n.push(!1)
        } else {
            if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            n = t
        }
        e.connect = n
    }

    function A(e, t) {
        switch (t) {
            case"horizontal":
                e.ort = 0;
                break;
            case"vertical":
                e.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }

    function O(e, t) {
        if (!r(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
        0 !== t && (e.margin = e.spectrum.getDistance(t))
    }

    function z(e, t) {
        if (!r(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (e.limit = e.spectrum.getDistance(t), !e.limit || e.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")
    }

    function L(e, t) {
        var i;
        if (!r(t) && !Array.isArray(t)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(t) && 2 !== t.length && !r(t[0]) && !r(t[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== t) {
            for (Array.isArray(t) || (t = [t, t]), e.padding = [e.spectrum.getDistance(t[0]), e.spectrum.getDistance(t[1])], i = 0; i < e.spectrum.xNumSteps.length - 1; i++) if (e.padding[0][i] < 0 || e.padding[1][i] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            var n = t[0] + t[1];
            t = e.spectrum.xVal[0];
            if (1 < n / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - t)) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")
        }
    }

    function I(e, t) {
        switch (t) {
            case"ltr":
                e.dir = 0;
                break;
            case"rtl":
                e.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }

    function D(e, t) {
        if ("string" != typeof t) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var i = 0 <= t.indexOf("tap"), n = 0 <= t.indexOf("drag"), s = 0 <= t.indexOf("fixed"),
            r = 0 <= t.indexOf("snap"), a = 0 <= t.indexOf("hover"), o = 0 <= t.indexOf("unconstrained"),
            l = 0 <= t.indexOf("drag-all");
        t = 0 <= t.indexOf("smooth-steps");
        if (s) {
            if (2 !== e.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            O(e, e.start[1] - e.start[0])
        }
        if (o && (e.margin || e.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        e.events = {tap: i || r, drag: n, dragAll: l, smoothSteps: t, fixed: s, snap: r, hover: a, unconstrained: o}
    }

    function N(e, i) {
        if (!1 !== i) if (!0 === i || t(i)) {
            e.tooltips = [];
            for (var n = 0; n < e.handles; n++) e.tooltips.push(i)
        } else {
            if ((i = l(i)).length !== e.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
            i.forEach(function (e) {
                if ("boolean" != typeof e && !t(e)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
            }), e.tooltips = i
        }
    }

    function B(e, t) {
        if (t.length !== e.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
        e.handleAttributes = t
    }

    function V(e, i) {
        if (!t(i)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        e.ariaFormat = i
    }

    function j(e, i) {
        if (!t(n = i) || "function" != typeof n.from) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        var n;
        e.format = i
    }

    function R(e, t) {
        if ("boolean" != typeof t) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        e.keyboardSupport = t
    }

    function F(e, t) {
        e.documentElement = t
    }

    function X(e, t) {
        if ("string" != typeof t && !1 !== t) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        e.cssPrefix = t
    }

    function Y(e, t) {
        if ("object" != typeof t) throw new Error("noUiSlider: 'cssClasses' must be an object.");
        "string" == typeof e.cssPrefix ? (e.cssClasses = {}, Object.keys(t).forEach(function (i) {
            e.cssClasses[i] = e.cssPrefix + t[i]
        })) : e.cssClasses = t
    }

    function H(e) {
        var t = {
            margin: null,
            limit: null,
            padding: null,
            animate: !0,
            animationDuration: 300,
            ariaFormat: y,
            format: y
        }, i = {
            step: {r: !1, t: x},
            keyboardPageMultiplier: {r: !1, t: S},
            keyboardMultiplier: {r: !1, t: E},
            keyboardDefaultStep: {r: !1, t: T},
            start: {r: !0, t: C},
            connect: {r: !0, t: P},
            direction: {r: !0, t: I},
            snap: {r: !1, t: M},
            animate: {r: !1, t: k},
            animationDuration: {r: !1, t: $},
            range: {r: !0, t: _},
            orientation: {r: !1, t: A},
            margin: {r: !1, t: O},
            limit: {r: !1, t: z},
            padding: {r: !1, t: L},
            behaviour: {r: !0, t: D},
            ariaFormat: {r: !1, t: V},
            format: {r: !1, t: j},
            tooltips: {r: !1, t: N},
            keyboardSupport: {r: !0, t: R},
            documentElement: {r: !1, t: F},
            cssPrefix: {r: !0, t: X},
            cssClasses: {r: !0, t: Y},
            handleAttributes: {r: !1, t: B}
        }, s = {
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: !0,
            cssPrefix: "noUi-",
            cssClasses: b,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10
        };
        e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(i).forEach(function (r) {
            if (n(e[r]) || void 0 !== s[r]) i[r].t(t, (n(e[r]) ? e : s)[r]); else if (i[r].r) throw new Error("noUiSlider: '" + r + "' is required.")
        }), t.pips = e.pips;
        var r = void 0 !== (a = document.createElement("div")).style.msTransform, a = void 0 !== a.style.transform;
        return t.transformRule = a ? "transform" : r ? "msTransform" : "webkitTransform", t.style = [["left", "top"], ["right", "bottom"]][t.dir][t.ort], t
    }

    function q(t, r, c) {
        var h, f, m, g, v, y, b = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend"},
            x = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (e) {
                }
                return e
            }(), S = t, E = r.spectrum, T = [], _ = [], C = [], M = 0, k = {}, $ = t.ownerDocument,
            P = r.documentElement || $.documentElement, A = $.body, O = "rtl" === $.dir || 1 === r.ort ? 0 : 100;

        function z(e, t) {
            var i = $.createElement("div");
            return t && d(i, t), e.appendChild(i), i
        }

        function L(e, t) {
            e = z(e, r.cssClasses.origin);
            var i, n = z(e, r.cssClasses.handle);
            return z(n, r.cssClasses.touchArea), n.setAttribute("data-handle", String(t)), r.keyboardSupport && (n.setAttribute("tabindex", "0"), n.addEventListener("keydown", function (e) {
                return function (e, t) {
                    if (N() || B(t)) return !1;
                    var i = ["Left", "Right"], n = ["Down", "Up"], s = ["PageDown", "PageUp"], a = ["Home", "End"];
                    r.dir && !r.ort ? i.reverse() : r.ort && !r.dir && (n.reverse(), s.reverse());
                    var o = e.key.replace("Arrow", ""), l = o === s[0], c = o === s[1];
                    s = o === n[0] || o === i[0] || l, n = o === n[1] || o === i[1] || c, i = o === a[0], a = o === a[1];
                    if (!(s || n || i || a)) return !0;
                    if (e.preventDefault(), n || s) {
                        var d = s ? 0 : 1;
                        if (null === (d = ue(t)[d])) return !1;
                        !1 === d && (d = E.getDefaultStep(_[t], s, r.keyboardDefaultStep)), d *= c || l ? r.keyboardPageMultiplier : r.keyboardMultiplier, d = Math.max(d, 1e-7), d *= s ? -1 : 1, d = T[t] + d
                    } else d = a ? r.spectrum.xVal[r.spectrum.xVal.length - 1] : r.spectrum.xVal[0];
                    return ae(t, E.toStepping(d), !0, !0), ee("slide", t), ee("update", t), ee("change", t), ee("set", t), !1
                }(e, t)
            })), void 0 !== r.handleAttributes && (i = r.handleAttributes[t], Object.keys(i).forEach(function (e) {
                n.setAttribute(e, i[e])
            })), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", r.ort ? "vertical" : "horizontal"), 0 === t ? d(n, r.cssClasses.handleLower) : t === r.handles - 1 && d(n, r.cssClasses.handleUpper), e
        }

        function I(e, t) {
            return !!t && z(e, r.cssClasses.connect)
        }

        function D(e, t) {
            return !(!r.tooltips || !r.tooltips[t]) && z(e.firstChild, r.cssClasses.tooltip)
        }

        function N() {
            return S.hasAttribute("disabled")
        }

        function B(e) {
            return f[e].hasAttribute("disabled")
        }

        function V() {
            v && (J("update" + w.tooltips), v.forEach(function (e) {
                e && i(e)
            }), v = null)
        }

        function j() {
            V(), v = f.map(D), K("update" + w.tooltips, function (e, t, i) {
                v && r.tooltips && !1 !== v[t] && (e = e[t], !0 !== r.tooltips[t] && (e = r.tooltips[t].to(i[t])), v[t].innerHTML = e)
            })
        }

        function R(e, t) {
            return e.map(function (e) {
                return E.fromStepping(t ? E.getStep(e) : e)
            })
        }

        function F() {
            g && (i(g), g = null)
        }

        function X(t) {
            F();
            var i = function (t) {
                var i = function (t) {
                    if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps) return E.xVal;
                    if (t.mode !== e.PipsMode.Count) return t.mode === e.PipsMode.Positions ? R(t.values, t.stepped) : t.mode === e.PipsMode.Values ? t.stepped ? t.values.map(function (e) {
                        return E.fromStepping(E.getStep(E.toStepping(e)))
                    }) : t.values : [];
                    if (t.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                    for (var i = t.values - 1, n = 100 / i, s = []; i--;) s[i] = i * n;
                    return s.push(100), R(s, t.stepped)
                }(t), n = {}, s = E.xVal[0], r = E.xVal[E.xVal.length - 1], a = !1, o = !1, l = 0;
                return (i = i.slice().sort(function (e, t) {
                    return e - t
                }).filter(function (e) {
                    return !this[e] && (this[e] = !0)
                }, {}))[0] !== s && (i.unshift(s), a = !0), i[i.length - 1] !== r && (i.push(r), o = !0), i.forEach(function (s, r) {
                    s = s;
                    var c, d, u, p, h, f, m, g, v = i[r + 1], y = t.mode === e.PipsMode.Steps,
                        b = (b = y ? E.xNumSteps[r] : b) || v - s;
                    for (void 0 === v && (v = s), b = Math.max(b, 1e-7), c = s; c <= v; c = Number((c + b).toFixed(7))) {
                        for (f = (p = (u = E.toStepping(c)) - l) / (t.density || 1), g = p / (m = Math.round(f)), d = 1; d <= m; d += 1) n[(h = l + d * g).toFixed(5)] = [E.fromStepping(h), 0];
                        f = -1 < i.indexOf(c) ? e.PipsType.LargeValue : y ? e.PipsType.SmallValue : e.PipsType.NoValue, !r && a && c !== v && (f = 0), c === v && o || (n[u.toFixed(5)] = [c, f]), l = u
                    }
                }), n
            }(t), n = t.filter;
            t = t.format || {
                to: function (e) {
                    return String(Math.round(e))
                }
            };
            return g = S.appendChild(function (t, i, n) {
                var s, a = $.createElement("div"),
                    o = ((s = {})[e.PipsType.None] = "", s[e.PipsType.NoValue] = r.cssClasses.valueNormal, s[e.PipsType.LargeValue] = r.cssClasses.valueLarge, s[e.PipsType.SmallValue] = r.cssClasses.valueSub, s),
                    l = ((s = {})[e.PipsType.None] = "", s[e.PipsType.NoValue] = r.cssClasses.markerNormal, s[e.PipsType.LargeValue] = r.cssClasses.markerLarge, s[e.PipsType.SmallValue] = r.cssClasses.markerSub, s),
                    c = [r.cssClasses.valueHorizontal, r.cssClasses.valueVertical],
                    u = [r.cssClasses.markerHorizontal, r.cssClasses.markerVertical];

                function p(e, t) {
                    var i = t === r.cssClasses.value;
                    return t + " " + (i ? c : u)[r.ort] + " " + (i ? o : l)[e]
                }

                return d(a, r.cssClasses.pips), d(a, 0 === r.ort ? r.cssClasses.pipsHorizontal : r.cssClasses.pipsVertical), Object.keys(t).forEach(function (s) {
                    var o, l, c;
                    l = t[o = s][0], c = t[s][1], (c = i ? i(l, c) : c) !== e.PipsType.None && ((s = z(a, !1)).className = p(c, r.cssClasses.marker), s.style[r.style] = o + "%", c > e.PipsType.NoValue && ((s = z(a, !1)).className = p(c, r.cssClasses.value), s.setAttribute("data-value", String(l)), s.style[r.style] = o + "%", s.innerHTML = String(n.to(l))))
                }), a
            }(i, n, t))
        }

        function Y() {
            var e = h.getBoundingClientRect(), t = "offset" + ["Width", "Height"][r.ort];
            return 0 === r.ort ? e.width || h[t] : e.height || h[t]
        }

        function q(e, t, i, n) {
            function s(s) {
                var a, o = function (e, t, i) {
                    var n = 0 === e.type.indexOf("touch"), s = 0 === e.type.indexOf("mouse"),
                        r = 0 === e.type.indexOf("pointer"), a = 0, o = 0;
                    if (0 === e.type.indexOf("MSPointer") && (r = !0), "mousedown" === e.type && !e.buttons && !e.touches) return !1;
                    if (n) {
                        var l = function (t) {
                            return (t = t.target) === i || i.contains(t) || e.composed && e.composedPath().shift() === i
                        };
                        if ("touchstart" === e.type) {
                            if (1 < (n = Array.prototype.filter.call(e.touches, l)).length) return !1;
                            a = n[0].pageX, o = n[0].pageY
                        } else {
                            if (!(l = Array.prototype.find.call(e.changedTouches, l))) return !1;
                            a = l.pageX, o = l.pageY
                        }
                    }
                    return t = t || p($), (s || r) && (a = e.clientX + t.x, o = e.clientY + t.y), e.pageOffset = t, e.points = [a, o], e.cursor = s || r, e
                }(s, n.pageOffset, n.target || t);
                return !!o && !(N() && !n.doNotReject) && (a = S, s = r.cssClasses.tap, !((a.classList ? a.classList.contains(s) : new RegExp("\\b" + s + "\\b").test(a.className)) && !n.doNotReject) && !(e === b.start && void 0 !== o.buttons && 1 < o.buttons) && (!n.hover || !o.buttons) && (x || o.preventDefault(), o.calcPoint = o.points[r.ort], void i(o, n)))
            }

            var a = [];
            return e.split(" ").forEach(function (e) {
                t.addEventListener(e, s, !!x && {passive: !0}), a.push([e, s])
            }), a
        }

        function G(e) {
            var t, i,
                n = o(n = 100 * (e - (n = h, t = r.ort, i = n.getBoundingClientRect(), n = (e = n.ownerDocument).documentElement, e = p(e), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (e.x = 0), t ? i.top + e.y - n.clientTop : i.left + e.x - n.clientLeft)) / Y());
            return r.dir ? 100 - n : n
        }

        function W(e, t) {
            "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && Z(e, t)
        }

        function U(e, t) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return Z(e, t);
            ne(0 < (e = (r.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint)), 100 * e / t.baseSize, t.locations, t.handleNumbers, t.connect)
        }

        function Z(e, t) {
            t.handle && (u(t.handle, r.cssClasses.active), --M), t.listeners.forEach(function (e) {
                P.removeEventListener(e[0], e[1])
            }), 0 === M && (u(S, r.cssClasses.drag), re(), e.cursor && (A.style.cursor = "", A.removeEventListener("selectstart", s))), r.events.smoothSteps && (t.handleNumbers.forEach(function (e) {
                ae(e, _[e], !0, !0, !1, !1)
            }), t.handleNumbers.forEach(function (e) {
                ee("update", e)
            })), t.handleNumbers.forEach(function (e) {
                ee("change", e), ee("set", e), ee("end", e)
            })
        }

        function Q(e, t) {
            var i, n, a, o;
            t.handleNumbers.some(B) || (1 === t.handleNumbers.length && (o = f[t.handleNumbers[0]].children[0], M += 1, d(o, r.cssClasses.active)), e.stopPropagation(), n = q(b.move, P, U, {
                target: e.target,
                handle: o,
                connect: t.connect,
                listeners: i = [],
                startCalcPoint: e.calcPoint,
                baseSize: Y(),
                pageOffset: e.pageOffset,
                handleNumbers: t.handleNumbers,
                buttonsProperty: e.buttons,
                locations: _.slice()
            }), a = q(b.end, P, Z, {
                target: e.target,
                handle: o,
                listeners: i,
                doNotReject: !0,
                handleNumbers: t.handleNumbers
            }), o = q("mouseout", P, W, {
                target: e.target,
                handle: o,
                listeners: i,
                doNotReject: !0,
                handleNumbers: t.handleNumbers
            }), i.push.apply(i, n.concat(a, o)), e.cursor && (A.style.cursor = getComputedStyle(e.target).cursor, 1 < f.length && d(S, r.cssClasses.drag), A.addEventListener("selectstart", s, !1)), t.handleNumbers.forEach(function (e) {
                ee("start", e)
            }))
        }

        function K(e, t) {
            k[e] = k[e] || [], k[e].push(t), "update" === e.split(".")[0] && f.forEach(function (e, t) {
                ee("update", t)
            })
        }

        function J(e) {
            var t = e && e.split(".")[0], i = t ? e.substring(t.length) : e;
            Object.keys(k).forEach(function (e) {
                var n = e.split(".")[0], s = e.substring(n.length);
                t && t !== n || i && i !== s || ((n = s) !== w.aria && n !== w.tooltips || i === s) && delete k[e]
            })
        }

        function ee(e, t, i) {
            Object.keys(k).forEach(function (n) {
                var s = n.split(".")[0];
                e === s && k[n].forEach(function (e) {
                    e.call(pe, T.map(r.format.to), t, T.slice(), i || !1, _.slice(), pe)
                })
            })
        }

        function te(e, t, i, n, s, a, l) {
            var c;
            return 1 < f.length && !r.events.unconstrained && (n && 0 < t && (c = E.getAbsoluteDistance(e[t - 1], r.margin, !1), i = Math.max(i, c)), s && t < f.length - 1 && (c = E.getAbsoluteDistance(e[t + 1], r.margin, !0), i = Math.min(i, c))), 1 < f.length && r.limit && (n && 0 < t && (c = E.getAbsoluteDistance(e[t - 1], r.limit, !1), i = Math.min(i, c)), s && t < f.length - 1 && (c = E.getAbsoluteDistance(e[t + 1], r.limit, !0), i = Math.max(i, c))), r.padding && (0 === t && (c = E.getAbsoluteDistance(0, r.padding[0], !1), i = Math.max(i, c)), t === f.length - 1 && (c = E.getAbsoluteDistance(100, r.padding[1], !0), i = Math.min(i, c))), !((i = o(i = l ? i : E.getStep(i))) === e[t] && !a) && i
        }

        function ie(e, t) {
            var i = r.ort;
            return (i ? t : e) + ", " + (i ? e : t)
        }

        function ne(e, t, i, n, s) {
            var a = i.slice(), o = n[0], l = r.events.smoothSteps, c = [!e, e], d = [e, !e];
            n = n.slice(), e && n.reverse(), 1 < n.length ? n.forEach(function (e, i) {
                !1 === (i = te(a, e, a[e] + t, c[i], d[i], !1, l)) ? t = 0 : (t = i - a[e], a[e] = i)
            }) : c = d = [!0];
            var u = !1;
            n.forEach(function (e, n) {
                u = ae(e, i[e] + t, c[n], d[n], !1, l) || u
            }), u && (n.forEach(function (e) {
                ee("update", e), ee("slide", e)
            }), null != s && ee("drag", o))
        }

        function se(e, t) {
            return r.dir ? 100 - e - t : e
        }

        function re() {
            C.forEach(function (e) {
                var t = 50 < _[e] ? -1 : 1;
                t = 3 + (f.length + t * e);
                f[e].style.zIndex = String(t)
            })
        }

        function ae(e, t, i, n, s, a) {
            return !1 !== (t = s ? t : te(_, e, t, i, n, !1, a)) && (t = t, _[e = e] = t, T[e] = E.fromStepping(t), t = "translate(" + ie(se(t, 0) - O + "%", "0") + ")", f[e].style[r.transformRule] = t, oe(e), oe(e + 1), !0)
        }

        function oe(e) {
            var t, i;
            m[e] && (i = 100, t = "translate(" + ie(se(t = (t = 0) !== e ? _[e - 1] : t, i = (i = e !== m.length - 1 ? _[e] : i) - t) + "%", "0") + ")", i = "scale(" + ie(i / 100, "1") + ")", m[e].style[r.transformRule] = t + " " + i)
        }

        function le(e, t) {
            return null === e || !1 === e || void 0 === e ? _[t] : ("number" == typeof e && (e = String(e)), !1 === (e = !1 !== (e = r.format.from(e)) ? E.toStepping(e) : e) || isNaN(e) ? _[t] : e)
        }

        function ce(e, t, i) {
            var n = l(e);
            e = void 0 === _[0];
            t = void 0 === t || t, r.animate && !e && a(S, r.cssClasses.tap, r.animationDuration), C.forEach(function (e) {
                ae(e, le(n[e], e), !0, !1, i)
            });
            var s, o = 1 === C.length ? 0 : 1;
            for (e && E.hasNoSize() && (i = !0, _[0] = 0, 1 < C.length && (s = 100 / (C.length - 1), C.forEach(function (e) {
                _[e] = e * s
            }))); o < C.length; ++o) C.forEach(function (e) {
                ae(e, _[e], !0, !0, i)
            });
            re(), C.forEach(function (e) {
                ee("update", e), null !== n[e] && t && ee("set", e)
            })
        }

        function de(e) {
            return (e = void 0 !== e && e) ? 1 === T.length ? T[0] : T.slice(0) : 1 === (e = T.map(r.format.to)).length ? e[0] : e
        }

        function ue(e) {
            var t = _[e], i = E.getNearbySteps(t), n = T[e], s = i.thisStep.step;
            e = null;
            return r.snap ? [n - i.stepBefore.startValue || null, i.stepAfter.startValue - n || null] : (!1 !== s && n + s > i.stepAfter.startValue && (s = i.stepAfter.startValue - n), e = n > i.thisStep.startValue ? i.thisStep.step : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep, 100 === t ? s = null : 0 === t && (e = null), t = E.countStepDecimals(), null !== s && !1 !== s && (s = Number(s.toFixed(t))), [e = null !== e && !1 !== e ? Number(e.toFixed(t)) : e, s])
        }

        d(t = S, r.cssClasses.target), 0 === r.dir ? d(t, r.cssClasses.ltr) : d(t, r.cssClasses.rtl), 0 === r.ort ? d(t, r.cssClasses.horizontal) : d(t, r.cssClasses.vertical), d(t, "rtl" === getComputedStyle(t).direction ? r.cssClasses.textDirectionRtl : r.cssClasses.textDirectionLtr), h = z(t, r.cssClasses.base), function (e, t) {
            var i = z(t, r.cssClasses.connects);
            f = [], (m = []).push(I(i, e[0]));
            for (var n = 0; n < r.handles; n++) f.push(L(t, n)), C[n] = n, m.push(I(i, e[n + 1]))
        }(r.connect, h), (y = r.events).fixed || f.forEach(function (e, t) {
            q(b.start, e.children[0], Q, {handleNumbers: [t]})
        }), y.tap && q(b.start, h, function (e) {
            e.stopPropagation();
            var t, i, n, s = G(e.calcPoint), o = (t = s, n = !(i = 100), f.forEach(function (e, s) {
                var r, a;
                B(s) || (r = _[s], ((a = Math.abs(r - t)) < i || a <= i && r < t || 100 === a && 100 === i) && (n = s, i = a))
            }), n);
            !1 !== o && (r.events.snap || a(S, r.cssClasses.tap, r.animationDuration), ae(o, s, !0, !0), re(), ee("slide", o, !0), ee("update", o, !0), r.events.snap ? Q(e, {handleNumbers: [o]}) : (ee("change", o, !0), ee("set", o, !0)))
        }, {}), y.hover && q(b.move, h, function (e) {
            e = G(e.calcPoint), e = E.getStep(e);
            var t = E.fromStepping(e);
            Object.keys(k).forEach(function (e) {
                "hover" === e.split(".")[0] && k[e].forEach(function (e) {
                    e.call(pe, t)
                })
            })
        }, {hover: !0}), y.drag && m.forEach(function (e, t) {
            var i, n, s, a, o;
            !1 !== e && 0 !== t && t !== m.length - 1 && (i = f[t - 1], n = f[t], s = [e], a = [i, n], o = [t - 1, t], d(e, r.cssClasses.draggable), y.fixed && (s.push(i.children[0]), s.push(n.children[0])), y.dragAll && (a = f, o = C), s.forEach(function (t) {
                q(b.start, t, Q, {handles: a, handleNumbers: o, connect: e})
            }))
        }), ce(r.start), r.pips && X(r.pips), r.tooltips && j(), J("update" + w.aria), K("update" + w.aria, function (e, t, i, n, s) {
            C.forEach(function (e) {
                var t = f[e], n = te(_, e, 0, !0, !0, !0), a = te(_, e, 100, !0, !0, !0), o = s[e];
                e = String(r.ariaFormat.to(i[e])), n = E.fromStepping(n).toFixed(1), a = E.fromStepping(a).toFixed(1), o = E.fromStepping(o).toFixed(1);
                t.children[0].setAttribute("aria-valuemin", n), t.children[0].setAttribute("aria-valuemax", a), t.children[0].setAttribute("aria-valuenow", o), t.children[0].setAttribute("aria-valuetext", e)
            })
        });
        var pe = {
            destroy: function () {
                for (J(w.aria), J(w.tooltips), Object.keys(r.cssClasses).forEach(function (e) {
                    u(S, r.cssClasses[e])
                }); S.firstChild;) S.removeChild(S.firstChild);
                delete S.noUiSlider
            }, steps: function () {
                return C.map(ue)
            }, on: K, off: J, get: de, set: ce, setHandle: function (e, t, i, n) {
                if (!(0 <= (e = Number(e)) && e < C.length)) throw new Error("noUiSlider: invalid handle number, got: " + e);
                ae(e, le(t, e), !0, !0, n), ee("update", e), i && ee("set", e)
            }, reset: function (e) {
                ce(r.start, e)
            }, __moveHandles: function (e, t, i) {
                ne(e, t, _, i)
            }, options: c, updateOptions: function (e, t) {
                var i = de(),
                    s = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                s.forEach(function (t) {
                    void 0 !== e[t] && (c[t] = e[t])
                });
                var a = H(c);
                s.forEach(function (t) {
                    void 0 !== e[t] && (r[t] = a[t])
                }), E = a.spectrum, r.margin = a.margin, r.limit = a.limit, r.padding = a.padding, r.pips ? X(r.pips) : F(), (r.tooltips ? j : V)(), _ = [], ce(n(e.start) ? e.start : i, t)
            }, target: S, removePips: F, removeTooltips: V, getPositions: function () {
                return _.slice()
            }, getTooltips: function () {
                return v
            }, getOrigins: function () {
                return f
            }, pips: X
        };
        return pe
    }

    function G(e, t) {
        if (!e || !e.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + e);
        if (e.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
        return t = q(e, H(t), t), e.noUiSlider = t
    }

    var W = {__spectrum: g, cssClasses: b, create: G};
    e.create = G, e.cssClasses = b, e.default = W, Object.defineProperty(e, "__esModule", {value: !0})
});