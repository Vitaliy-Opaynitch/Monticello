/* Skroll v2.0.1, akzhy.com/shelf/skroll | github.com/akzhy/skroll */
Skroll = function (t) { this.settings = t || {}, this.settings.mobile = void 0 !== this.settings.mobile && this.settings.mobile, this.referenceElement = void 0 === this.settings.reference ? window : this.get(this.settings.reference)[0], this.elements = [], this.data = {}, this.animations = { zoomIn: { start: function (t) { t.style.transform = "scale(.1,.1)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "scale(1,1)", t.style.opacity = 1 } }, fadeInLeft: { start: function (t) { t.style.transform = "translate(-50%,0)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0%,0)", t.style.opacity = 1 } }, fadeInRight: { start: function (t) { t.style.transform = "translate(50%,0)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0%,0)", t.style.opacity = 1 } }, fadeInLeftBig: { start: function (t) { t.style.transform = "translate(-100%,0)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0%,0)", t.style.opacity = 1 } }, fadeInRightBig: { start: function (t) { t.style.transform = "translate(100%,0)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0%,0)", t.style.opacity = 1 } }, fadeInUp: { start: function (t) { t.style.transform = "translate(0,50%)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0,0%)", t.style.opacity = 1 } }, fadeInDown: { start: function (t) { t.style.transform = "translate(0,-50%)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0,0%)", t.style.opacity = 1 } }, slideInLeft: { start: function (t) { t.style.transform = "translate(-50%,0) scale(.8,.8)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1 } }, slideInLeftBig: { start: function (t) { t.style.transform = "translate(-100%,0) scale(.8,.8)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1 } }, slideInRight: { start: function (t) { t.style.transform = "translate(50%,0) scale(.8,.8)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1 } }, slideInRightBig: { start: function (t) { t.style.transform = "translate(-100%,0) scale(.8,.8)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1 } }, flipInX: { start: function (t) { t.style.transform = "rotateX(90deg)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "rotateX(0deg)", t.style.opacity = 1 } }, flipInY: { start: function (t) { t.style.transform = "rotateY(90deg)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "rotateY(0deg)", t.style.opacity = 1 } }, rotateRightIn: { start: function (t) { t.style.transform = "rotate(45deg)", t.style["transform-origin"] = "0 100%", t.style.opacity = 0 }, end: function (t) { t.style.transform = "rotate(0deg)", t.style.opacity = 1 } }, rotateLeftIn: { start: function (t) { t.style.transform = "rotate(-45deg)", t.style["transform-origin"] = "0 100%", t.style.opacity = 0 }, end: function (t) { t.style.transform = "rotate(0deg)", t.style.opacity = 1 } }, growInLeft: { start: function (t) { t.style.transform = "translate(-100%,0) scale(.1,.1)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1 } }, growInRight: { start: function (t) { t.style.transform = "translate(100%,0) scale(.1,.1)", t.style.opacity = 0 }, end: function (t) { t.style.transform = "translate(0%,0) scale(1,1)", t.style.opacity = 1 } } } }, Skroll.prototype.get = function (t) { return document.querySelectorAll(t) }, Skroll.prototype.inViewport = function (t, e) { var n, a, s, i, o; if (this.referenceElement == window) n = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0), s = (a = this.data[t.getAttribute("data-skroll-id")].top) + t.offsetHeight, i = n + screen.availHeight * e.triggerTop, o = n + screen.availHeight * e.triggerBottom; else { var r = this.referenceElement; n = r.scrollTop, s = (a = this.data[t.getAttribute("data-skroll-id")].top) + t.offsetHeight, i = n + r.offsetHeight * e.triggerTop, o = n + r.offsetHeight * e.triggerBottom } return s > i && a < o }, Skroll.prototype.getScrollStatus = function (t, e) { return this.inViewport(t, e) ? (this.data[t.getAttribute("data-skroll-id")].inView = !0, { action: "enter", data: { shown: this.data[t.getAttribute("data-skroll-id")].shown } }) : this.data[t.getAttribute("data-skroll-id")].inView ? (this.data[t.getAttribute("data-skroll-id")].inView = !1, { action: "leave", data: { shown: this.data[t.getAttribute("data-skroll-id")].shown } }) : { action: "idle", data: { shown: this.data[t.getAttribute("data-skroll-id")].shown } } }, Skroll.prototype.add = function (t, e = {}) { var n = { triggerTop: e.triggerTop || .2, triggerBottom: e.triggerBottom || .8, delay: e.delay || 0, duration: e.duration || 500, animation: e.animation || "zoomIn", easing: e.easing || "ease", wait: e.delay || 0, repeat: e.repeat || !1, onEnter: e.onEnter || !1, onLeave: e.onLeave || !1 }; return this.elements.push({ element: t, settings: n }), this }, Skroll.prototype.recalcPosition = function () { var t = this; this.elements.forEach(function (e, n) { t.get(e.element).forEach(function (e, n) { var a = e.style.transform; e.style.transform = "none", setTimeout(function () { var n = e.getBoundingClientRect(), s = t.referenceElement == window ? n.top + t.referenceElement.scrollY : n.top + t.referenceElement.scrollTop; t.data[e.getAttribute("data-skroll-id")].top = s, e.style.transform = a }, 50) }) }) }, Skroll.prototype.throttle = function (t, e, n) { var a, s; return e || (e = 250), function () { var i = n || this, o = +new Date, r = arguments; a && o < a + e ? (clearTimeout(s), s = setTimeout(function () { a = o, t.apply(i, r) }, e)) : (a = o, t.apply(i, r)) } }, Skroll.prototype.addAnimation = function (t, e) { return this.animations[t] = e, this }, Skroll.prototype.init = function () { var t = this; if (!this.settings.mobile && screen.width < 600) return this; var e = 0; return this.elements.forEach(function (n, a) { t.get(n.element).forEach(function (a, s) { a.setAttribute("data-skroll-id", e); var i = a.getBoundingClientRect(), o = t.referenceElement == window ? i.top + t.referenceElement.scrollY : i.top + t.referenceElement.scrollTop; t.data[a.getAttribute("data-skroll-id")] = {}, t.data[a.getAttribute("data-skroll-id")].inView = !1, t.data[a.getAttribute("data-skroll-id")].shown = !1, t.data[a.getAttribute("data-skroll-id")].top = o, t.data[a.getAttribute("data-skroll-id")].oef = !1, t.data[a.getAttribute("data-skroll-id")].olf = !1, "string" == typeof n.settings.animation && "none" != n.settings.animation ? (t.animations[n.settings.animation] || (console.warn("The requested animation '%s' was not found switching to default zoomIn", n.settings.animation), console.trace(), n.settings.animation = "zoomIn"), t.animations[n.settings.animation].start(a)) : "object" == typeof n.settings.animation && null != n.settings.animation.start && n.settings.animation.start(a), e++ }) }), ["scroll", "resize"].forEach(function (e) { t.referenceElement.addEventListener(e, t.throttle(function () { t.elements.forEach(function (e, n) { var a = e.settings.wait; t.get(e.element).forEach(function (n, s) { var i = t.getScrollStatus(n, e.settings); "idle" != i.action && ("enter" != i.action || i.data.shown ? "leave" == i.action && i.data.shown && e.settings.repeat && ("string" == typeof e.settings.animation && "none" != e.settings.animation ? t.animations[e.settings.animation] && (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () { t.animations[e.settings.animation].end(n), t.data[n.getAttribute("data-skroll-id")].shown = !1, a += e.settings.delay * s }, a)) : "object" == typeof e.settings.animation && null != e.settings.animation.end && (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () { e.settings.animation.end(n), t.data[n.getAttribute("data-skroll-id")].shown = !1, a += e.settings.delay * s }, a)), a += e.settings.delay) : ("string" == typeof e.settings.animation && "none" != e.settings.animation ? (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () { t.animations[e.settings.animation].end(n), t.data[n.getAttribute("data-skroll-id")].shown = !0, a += e.settings.delay * s }, a)) : "object" == typeof e.settings.animation && null != e.settings.animation.end && (n.style.transition = "all " + e.settings.duration + "ms " + e.settings.easing, setTimeout(function () { e.settings.animation.end(n), t.data[n.getAttribute("data-skroll-id")].shown = !0, a += e.settings.delay * s }, a)), a += e.settings.delay), "enter" == i.action ? t.data[n.getAttribute("data-skroll-id")].oef || e.settings.onEnter && (e.settings.onEnter(s, n), t.data[n.getAttribute("data-skroll-id")].oef = !0) : "leave" == i.action && (t.data[n.getAttribute("data-skroll-id")].olf || e.settings.onLeave && (e.settings.onLeave(s, n), t.data[n.getAttribute("data-skroll-id")].olf = !0))) }) }), "resize" == e && t.recalcPosition() }, 150)) }), window.dispatchEvent ? t.referenceElement.dispatchEvent(new Event("scroll")) : t.referenceElement.fireEvent("scroll"), t };