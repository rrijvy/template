(() => {
  var t = {
      363: () => {
        (function () {
          "use strict";
          var t = window.Document.prototype.createElement,
            e = window.Document.prototype.createElementNS,
            n = window.Document.prototype.importNode,
            o = window.Document.prototype.prepend,
            r = window.Document.prototype.append,
            i = window.DocumentFragment.prototype.prepend,
            a = window.DocumentFragment.prototype.append,
            l = window.Node.prototype.cloneNode,
            c = window.Node.prototype.appendChild,
            s = window.Node.prototype.insertBefore,
            u = window.Node.prototype.removeChild,
            d = window.Node.prototype.replaceChild,
            h = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
            p = window.Element.prototype.attachShadow,
            f = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
            m = window.Element.prototype.getAttribute,
            E = window.Element.prototype.setAttribute,
            w = window.Element.prototype.removeAttribute,
            v = window.Element.prototype.getAttributeNS,
            y = window.Element.prototype.setAttributeNS,
            g = window.Element.prototype.removeAttributeNS,
            b = window.Element.prototype.insertAdjacentElement,
            _ = window.Element.prototype.insertAdjacentHTML,
            C = window.Element.prototype.prepend,
            N = window.Element.prototype.append,
            T = window.Element.prototype.before,
            D = window.Element.prototype.after,
            k = window.Element.prototype.replaceWith,
            S = window.Element.prototype.remove,
            x = window.HTMLElement,
            A = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
            F = window.HTMLElement.prototype.insertAdjacentElement,
            L = window.HTMLElement.prototype.insertAdjacentHTML,
            M = new Set();
          function O(t) {
            var e = M.has(t);
            return (t = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t)), !e && t;
          }
          "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph"
            .split(" ")
            .forEach(function (t) {
              return M.add(t);
            });
          var j = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
          function H(t) {
            var e = t.isConnected;
            if (void 0 !== e) return e;
            if (j(t)) return !0;
            for (; t && !(t.__CE_isImportDocument || t instanceof Document); )
              t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
            return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
          }
          function P(t) {
            var e = t.children;
            if (e) return Array.prototype.slice.call(e);
            for (e = [], t = t.firstChild; t; t = t.nextSibling) t.nodeType === Node.ELEMENT_NODE && e.push(t);
            return e;
          }
          function R(t, e) {
            for (; e && e !== t && !e.nextSibling; ) e = e.parentNode;
            return e && e !== t ? e.nextSibling : null;
          }
          function I(t, e, n) {
            for (var o = t; o; ) {
              if (o.nodeType === Node.ELEMENT_NODE) {
                var r = o;
                e(r);
                var i = r.localName;
                if ("link" === i && "import" === r.getAttribute("rel")) {
                  if (((o = r.import), void 0 === n && (n = new Set()), o instanceof Node && !n.has(o)))
                    for (n.add(o), o = o.firstChild; o; o = o.nextSibling) I(o, e, n);
                  o = R(t, r);
                  continue;
                }
                if ("template" === i) {
                  o = R(t, r);
                  continue;
                }
                if ((r = r.__CE_shadowRoot)) for (r = r.firstChild; r; r = r.nextSibling) I(r, e, n);
              }
              o = o.firstChild ? o.firstChild : R(t, o);
            }
          }
          function W() {
            var t = !(null == at || !at.noDocumentConstructionObserver),
              e = !(null == at || !at.shadyDomFastWalk);
            (this.m = []), (this.g = []), (this.j = !1), (this.shadyDomFastWalk = e), (this.I = !t);
          }
          function B(t, e, n, o) {
            var r = window.ShadyDOM;
            if (t.shadyDomFastWalk && r && r.inUse) {
              if ((e.nodeType === Node.ELEMENT_NODE && n(e), e.querySelectorAll))
                for (t = r.nativeMethods.querySelectorAll.call(e, "*"), e = 0; e < t.length; e++) n(t[e]);
            } else I(e, n, o);
          }
          function U(t, e) {
            t.j &&
              B(t, e, function (e) {
                return z(t, e);
              });
          }
          function z(t, e) {
            if (t.j && !e.__CE_patched) {
              e.__CE_patched = !0;
              for (var n = 0; n < t.m.length; n++) t.m[n](e);
              for (n = 0; n < t.g.length; n++) t.g[n](e);
            }
          }
          function q(t, e) {
            var n = [];
            for (
              B(t, e, function (t) {
                return n.push(t);
              }),
                e = 0;
              e < n.length;
              e++
            ) {
              var o = n[e];
              1 === o.__CE_state ? t.connectedCallback(o) : V(t, o);
            }
          }
          function G(t, e) {
            var n = [];
            for (
              B(t, e, function (t) {
                return n.push(t);
              }),
                e = 0;
              e < n.length;
              e++
            ) {
              var o = n[e];
              1 === o.__CE_state && t.disconnectedCallback(o);
            }
          }
          function J(t, e, n) {
            var o = (n = void 0 === n ? {} : n).J,
              r =
                n.upgrade ||
                function (e) {
                  return V(t, e);
                },
              i = [];
            for (
              B(
                t,
                e,
                function (e) {
                  if ((t.j && z(t, e), "link" === e.localName && "import" === e.getAttribute("rel"))) {
                    var n = e.import;
                    n instanceof Node && ((n.__CE_isImportDocument = !0), (n.__CE_registry = document.__CE_registry)),
                      n && "complete" === n.readyState
                        ? (n.__CE_documentLoadHandled = !0)
                        : e.addEventListener("load", function () {
                            var n = e.import;
                            if (!n.__CE_documentLoadHandled) {
                              n.__CE_documentLoadHandled = !0;
                              var i = new Set();
                              o &&
                                (o.forEach(function (t) {
                                  return i.add(t);
                                }),
                                i.delete(n)),
                                J(t, n, { J: i, upgrade: r });
                            }
                          });
                  } else i.push(e);
                },
                o
              ),
                e = 0;
              e < i.length;
              e++
            )
              r(i[e]);
          }
          function V(t, e) {
            try {
              var n = e.ownerDocument,
                o = n.__CE_registry,
                r = o && (n.defaultView || n.__CE_isImportDocument) ? ot(o, e.localName) : void 0;
              if (r && void 0 === e.__CE_state) {
                r.constructionStack.push(e);
                try {
                  try {
                    if (new r.constructorFunction() !== e)
                      throw Error("The custom element constructor did not produce the element being upgraded.");
                  } finally {
                    r.constructionStack.pop();
                  }
                } catch (t) {
                  throw ((e.__CE_state = 2), t);
                }
                if (((e.__CE_state = 1), (e.__CE_definition = r), r.attributeChangedCallback && e.hasAttributes())) {
                  var i = r.observedAttributes;
                  for (r = 0; r < i.length; r++) {
                    var a = i[r],
                      l = e.getAttribute(a);
                    null !== l && t.attributeChangedCallback(e, a, null, l, null);
                  }
                }
                H(e) && t.connectedCallback(e);
              }
            } catch (t) {
              $(t);
            }
          }
          function X(n, o, r, i) {
            var a = o.__CE_registry;
            if (a && (null === i || "http://www.w3.org/1999/xhtml" === i) && (a = ot(a, r)))
              try {
                var l = new a.constructorFunction();
                if (void 0 === l.__CE_state || void 0 === l.__CE_definition)
                  throw Error("Failed to construct '" + r + "': The returned value was not constructed with the HTMLElement constructor.");
                if ("http://www.w3.org/1999/xhtml" !== l.namespaceURI)
                  throw Error("Failed to construct '" + r + "': The constructed element's namespace must be the HTML namespace.");
                if (l.hasAttributes())
                  throw Error("Failed to construct '" + r + "': The constructed element must not have any attributes.");
                if (null !== l.firstChild)
                  throw Error("Failed to construct '" + r + "': The constructed element must not have any children.");
                if (null !== l.parentNode)
                  throw Error("Failed to construct '" + r + "': The constructed element must not have a parent node.");
                if (l.ownerDocument !== o)
                  throw Error("Failed to construct '" + r + "': The constructed element's owner document is incorrect.");
                if (l.localName !== r) throw Error("Failed to construct '" + r + "': The constructed element's local name is incorrect.");
                return l;
              } catch (a) {
                return (
                  $(a),
                  (o = null === i ? t.call(o, r) : e.call(o, i, r)),
                  Object.setPrototypeOf(o, HTMLUnknownElement.prototype),
                  (o.__CE_state = 2),
                  (o.__CE_definition = void 0),
                  z(n, o),
                  o
                );
              }
            return z(n, (o = null === i ? t.call(o, r) : e.call(o, i, r))), o;
          }
          function $(t) {
            var e = "",
              n = "",
              o = 0,
              r = 0;
            t instanceof Error
              ? ((e = t.message),
                (n = t.sourceURL || t.fileName || ""),
                (o = t.line || t.lineNumber || 0),
                (r = t.column || t.columnNumber || 0))
              : (e = "Uncaught " + String(t));
            var i = void 0;
            void 0 === ErrorEvent.prototype.initErrorEvent
              ? (i = new ErrorEvent("error", { cancelable: !0, message: e, filename: n, lineno: o, colno: r, error: t }))
              : ((i = document.createEvent("ErrorEvent")).initErrorEvent("error", !1, !0, e, n, o),
                (i.preventDefault = function () {
                  Object.defineProperty(this, "defaultPrevented", {
                    configurable: !0,
                    get: function () {
                      return !0;
                    },
                  });
                })),
              void 0 === i.error &&
                Object.defineProperty(i, "error", {
                  configurable: !0,
                  enumerable: !0,
                  get: function () {
                    return t;
                  },
                }),
              window.dispatchEvent(i),
              i.defaultPrevented || console.error(t);
          }
          function K() {
            var t = this;
            (this.g = void 0),
              (this.F = new Promise(function (e) {
                t.l = e;
              }));
          }
          function Q(t) {
            var e = document;
            (this.l = void 0),
              (this.h = t),
              (this.g = e),
              J(this.h, this.g),
              "loading" === this.g.readyState &&
                ((this.l = new MutationObserver(this.G.bind(this))), this.l.observe(this.g, { childList: !0, subtree: !0 }));
          }
          function Y(t) {
            t.l && t.l.disconnect();
          }
          function Z(t) {
            (this.s = new Map()),
              (this.u = new Map()),
              (this.C = new Map()),
              (this.A = !1),
              (this.B = new Map()),
              (this.o = function (t) {
                return t();
              }),
              (this.i = !1),
              (this.v = []),
              (this.h = t),
              (this.D = t.I ? new Q(t) : void 0);
          }
          function tt(t, e) {
            if (!O(e)) throw new SyntaxError("The element name '" + e + "' is not valid.");
            if (ot(t, e)) throw Error("A custom element with name '" + e + "' has already been defined.");
            if (t.A) throw Error("A custom element is already being defined.");
          }
          function et(t, e, n) {
            var o;
            t.A = !0;
            try {
              var r = n.prototype;
              if (!(r instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
              var i = function (t) {
                  var e = r[t];
                  if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
                  return e;
                },
                a = i("connectedCallback"),
                l = i("disconnectedCallback"),
                c = i("adoptedCallback"),
                s = ((o = i("attributeChangedCallback")) && n.observedAttributes) || [];
            } catch (t) {
              throw t;
            } finally {
              t.A = !1;
            }
            return (
              (n = {
                localName: e,
                constructorFunction: n,
                connectedCallback: a,
                disconnectedCallback: l,
                adoptedCallback: c,
                attributeChangedCallback: o,
                observedAttributes: s,
                constructionStack: [],
              }),
              t.u.set(e, n),
              t.C.set(n.constructorFunction, n),
              n
            );
          }
          function nt(t) {
            if (!1 !== t.i) {
              t.i = !1;
              for (var e = [], n = t.v, o = new Map(), r = 0; r < n.length; r++) o.set(n[r], []);
              for (
                J(t.h, document, {
                  upgrade: function (n) {
                    if (void 0 === n.__CE_state) {
                      var r = n.localName,
                        i = o.get(r);
                      i ? i.push(n) : t.u.has(r) && e.push(n);
                    }
                  },
                }),
                  r = 0;
                r < e.length;
                r++
              )
                V(t.h, e[r]);
              for (r = 0; r < n.length; r++) {
                for (var i = n[r], a = o.get(i), l = 0; l < a.length; l++) V(t.h, a[l]);
                (i = t.B.get(i)) && i.resolve(void 0);
              }
              n.length = 0;
            }
          }
          function ot(t, e) {
            var n = t.u.get(e);
            if (n) return n;
            if ((n = t.s.get(e))) {
              t.s.delete(e);
              try {
                return et(t, e, n());
              } catch (t) {
                $(t);
              }
            }
          }
          function rt(t, e, n) {
            function o(e) {
              return function (n) {
                for (var o = [], r = 0; r < arguments.length; ++r) o[r] = arguments[r];
                r = [];
                for (var i = [], a = 0; a < o.length; a++) {
                  var l = o[a];
                  if ((l instanceof Element && H(l) && i.push(l), l instanceof DocumentFragment))
                    for (l = l.firstChild; l; l = l.nextSibling) r.push(l);
                  else r.push(l);
                }
                for (e.apply(this, o), o = 0; o < i.length; o++) G(t, i[o]);
                if (H(this)) for (o = 0; o < r.length; o++) (i = r[o]) instanceof Element && q(t, i);
              };
            }
            void 0 !== n.prepend && (e.prepend = o(n.prepend)), void 0 !== n.append && (e.append = o(n.append));
          }
          (W.prototype.connectedCallback = function (t) {
            var e = t.__CE_definition;
            if (e.connectedCallback)
              try {
                e.connectedCallback.call(t);
              } catch (t) {
                $(t);
              }
          }),
            (W.prototype.disconnectedCallback = function (t) {
              var e = t.__CE_definition;
              if (e.disconnectedCallback)
                try {
                  e.disconnectedCallback.call(t);
                } catch (t) {
                  $(t);
                }
            }),
            (W.prototype.attributeChangedCallback = function (t, e, n, o, r) {
              var i = t.__CE_definition;
              if (i.attributeChangedCallback && -1 < i.observedAttributes.indexOf(e))
                try {
                  i.attributeChangedCallback.call(t, e, n, o, r);
                } catch (t) {
                  $(t);
                }
            }),
            (K.prototype.resolve = function (t) {
              if (this.g) throw Error("Already resolved.");
              (this.g = t), this.l(t);
            }),
            (Q.prototype.G = function (t) {
              var e = this.g.readyState;
              for (("interactive" !== e && "complete" !== e) || Y(this), e = 0; e < t.length; e++)
                for (var n = t[e].addedNodes, o = 0; o < n.length; o++) J(this.h, n[o]);
            }),
            (Z.prototype.H = function (t, e) {
              var n = this;
              if (!(e instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
              tt(this, t),
                this.s.set(t, e),
                this.v.push(t),
                this.i ||
                  ((this.i = !0),
                  this.o(function () {
                    return nt(n);
                  }));
            }),
            (Z.prototype.define = function (t, e) {
              var n = this;
              if (!(e instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
              tt(this, t),
                et(this, t, e),
                this.v.push(t),
                this.i ||
                  ((this.i = !0),
                  this.o(function () {
                    return nt(n);
                  }));
            }),
            (Z.prototype.upgrade = function (t) {
              J(this.h, t);
            }),
            (Z.prototype.get = function (t) {
              if ((t = ot(this, t))) return t.constructorFunction;
            }),
            (Z.prototype.whenDefined = function (t) {
              if (!O(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
              var e = this.B.get(t);
              if (e) return e.F;
              (e = new K()), this.B.set(t, e);
              var n = this.u.has(t) || this.s.has(t);
              return (t = -1 === this.v.indexOf(t)), n && t && e.resolve(void 0), e.F;
            }),
            (Z.prototype.polyfillWrapFlushCallback = function (t) {
              this.D && Y(this.D);
              var e = this.o;
              this.o = function (n) {
                return t(function () {
                  return e(n);
                });
              };
            }),
            (Z.prototype.define = Z.prototype.define),
            (Z.prototype.upgrade = Z.prototype.upgrade),
            (Z.prototype.get = Z.prototype.get),
            (Z.prototype.whenDefined = Z.prototype.whenDefined),
            (Z.prototype.polyfillDefineLazy = Z.prototype.H),
            (Z.prototype.polyfillWrapFlushCallback = Z.prototype.polyfillWrapFlushCallback);
          var it = {},
            at = window.customElements;
          function lt() {
            var M = new W();
            !(function (e) {
              function n() {
                var n = this.constructor,
                  o = document.__CE_registry.C.get(n);
                if (!o) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
                var r = o.constructionStack;
                if (0 === r.length)
                  return (
                    (r = t.call(document, o.localName)),
                    Object.setPrototypeOf(r, n.prototype),
                    (r.__CE_state = 1),
                    (r.__CE_definition = o),
                    z(e, r),
                    r
                  );
                var i = r.length - 1,
                  a = r[i];
                if (a === it) throw Error("Failed to construct '" + o.localName + "': This element was already constructed.");
                return (r[i] = it), Object.setPrototypeOf(a, n.prototype), z(e, a), a;
              }
              (n.prototype = x.prototype),
                Object.defineProperty(HTMLElement.prototype, "constructor", { writable: !0, configurable: !0, enumerable: !1, value: n }),
                (window.HTMLElement = n);
            })(M),
              (function (t) {
                (Document.prototype.createElement = function (e) {
                  return X(t, this, e, null);
                }),
                  (Document.prototype.importNode = function (e, o) {
                    return (e = n.call(this, e, !!o)), this.__CE_registry ? J(t, e) : U(t, e), e;
                  }),
                  (Document.prototype.createElementNS = function (e, n) {
                    return X(t, this, n, e);
                  }),
                  rt(t, Document.prototype, { prepend: o, append: r });
              })(M),
              rt(M, DocumentFragment.prototype, { prepend: i, append: a }),
              (function (t) {
                function e(e, n) {
                  Object.defineProperty(e, "textContent", {
                    enumerable: n.enumerable,
                    configurable: !0,
                    get: n.get,
                    set: function (e) {
                      if (this.nodeType === Node.TEXT_NODE) n.set.call(this, e);
                      else {
                        var o = void 0;
                        if (this.firstChild) {
                          var r = this.childNodes,
                            i = r.length;
                          if (0 < i && H(this)) {
                            o = Array(i);
                            for (var a = 0; a < i; a++) o[a] = r[a];
                          }
                        }
                        if ((n.set.call(this, e), o)) for (e = 0; e < o.length; e++) G(t, o[e]);
                      }
                    },
                  });
                }
                (Node.prototype.insertBefore = function (e, n) {
                  if (e instanceof DocumentFragment) {
                    var o = P(e);
                    if (((e = s.call(this, e, n)), H(this))) for (n = 0; n < o.length; n++) q(t, o[n]);
                    return e;
                  }
                  return (o = e instanceof Element && H(e)), (n = s.call(this, e, n)), o && G(t, e), H(this) && q(t, e), n;
                }),
                  (Node.prototype.appendChild = function (e) {
                    if (e instanceof DocumentFragment) {
                      var n = P(e);
                      if (((e = c.call(this, e)), H(this))) for (var o = 0; o < n.length; o++) q(t, n[o]);
                      return e;
                    }
                    return (n = e instanceof Element && H(e)), (o = c.call(this, e)), n && G(t, e), H(this) && q(t, e), o;
                  }),
                  (Node.prototype.cloneNode = function (e) {
                    return (e = l.call(this, !!e)), this.ownerDocument.__CE_registry ? J(t, e) : U(t, e), e;
                  }),
                  (Node.prototype.removeChild = function (e) {
                    var n = e instanceof Element && H(e),
                      o = u.call(this, e);
                    return n && G(t, e), o;
                  }),
                  (Node.prototype.replaceChild = function (e, n) {
                    if (e instanceof DocumentFragment) {
                      var o = P(e);
                      if (((e = d.call(this, e, n)), H(this))) for (G(t, n), n = 0; n < o.length; n++) q(t, o[n]);
                      return e;
                    }
                    o = e instanceof Element && H(e);
                    var r = d.call(this, e, n),
                      i = H(this);
                    return i && G(t, n), o && G(t, e), i && q(t, e), r;
                  }),
                  h && h.get
                    ? e(Node.prototype, h)
                    : (function (t, e) {
                        (t.j = !0), t.m.push(e);
                      })(t, function (t) {
                        e(t, {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                            for (var t = [], e = this.firstChild; e; e = e.nextSibling)
                              e.nodeType !== Node.COMMENT_NODE && t.push(e.textContent);
                            return t.join("");
                          },
                          set: function (t) {
                            for (; this.firstChild; ) u.call(this, this.firstChild);
                            null != t && "" !== t && c.call(this, document.createTextNode(t));
                          },
                        });
                      });
              })(M),
              (function (t) {
                function n(e, n) {
                  Object.defineProperty(e, "innerHTML", {
                    enumerable: n.enumerable,
                    configurable: !0,
                    get: n.get,
                    set: function (e) {
                      var o = this,
                        r = void 0;
                      if (
                        (H(this) &&
                          ((r = []),
                          B(t, this, function (t) {
                            t !== o && r.push(t);
                          })),
                        n.set.call(this, e),
                        r)
                      )
                        for (var i = 0; i < r.length; i++) {
                          var a = r[i];
                          1 === a.__CE_state && t.disconnectedCallback(a);
                        }
                      return this.ownerDocument.__CE_registry ? J(t, this) : U(t, this), e;
                    },
                  });
                }
                function o(e, n) {
                  e.insertAdjacentElement = function (e, o) {
                    var r = H(o);
                    return (e = n.call(this, e, o)), r && G(t, o), H(e) && q(t, o), e;
                  };
                }
                function r(e, n) {
                  function o(e, n) {
                    for (var o = []; e !== n; e = e.nextSibling) o.push(e);
                    for (n = 0; n < o.length; n++) J(t, o[n]);
                  }
                  e.insertAdjacentHTML = function (t, e) {
                    if ("beforebegin" === (t = t.toLowerCase())) {
                      var r = this.previousSibling;
                      n.call(this, t, e), o(r || this.parentNode.firstChild, this);
                    } else if ("afterbegin" === t) (r = this.firstChild), n.call(this, t, e), o(this.firstChild, r);
                    else if ("beforeend" === t) (r = this.lastChild), n.call(this, t, e), o(r || this.firstChild, null);
                    else {
                      if ("afterend" !== t)
                        throw new SyntaxError(
                          "The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."
                        );
                      (r = this.nextSibling), n.call(this, t, e), o(this.nextSibling, r);
                    }
                  };
                }
                p &&
                  (Element.prototype.attachShadow = function (e) {
                    if (((e = p.call(this, e)), t.j && !e.__CE_patched)) {
                      e.__CE_patched = !0;
                      for (var n = 0; n < t.m.length; n++) t.m[n](e);
                    }
                    return (this.__CE_shadowRoot = e);
                  }),
                  f && f.get
                    ? n(Element.prototype, f)
                    : A && A.get
                    ? n(HTMLElement.prototype, A)
                    : (function (t, e) {
                        (t.j = !0), t.g.push(e);
                      })(t, function (t) {
                        n(t, {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                            return l.call(this, !0).innerHTML;
                          },
                          set: function (t) {
                            var n = "template" === this.localName,
                              o = n ? this.content : this,
                              r = e.call(document, this.namespaceURI, this.localName);
                            for (r.innerHTML = t; 0 < o.childNodes.length; ) u.call(o, o.childNodes[0]);
                            for (t = n ? r.content : r; 0 < t.childNodes.length; ) c.call(o, t.childNodes[0]);
                          },
                        });
                      }),
                  (Element.prototype.setAttribute = function (e, n) {
                    if (1 !== this.__CE_state) return E.call(this, e, n);
                    var o = m.call(this, e);
                    E.call(this, e, n), (n = m.call(this, e)), t.attributeChangedCallback(this, e, o, n, null);
                  }),
                  (Element.prototype.setAttributeNS = function (e, n, o) {
                    if (1 !== this.__CE_state) return y.call(this, e, n, o);
                    var r = v.call(this, e, n);
                    y.call(this, e, n, o), (o = v.call(this, e, n)), t.attributeChangedCallback(this, n, r, o, e);
                  }),
                  (Element.prototype.removeAttribute = function (e) {
                    if (1 !== this.__CE_state) return w.call(this, e);
                    var n = m.call(this, e);
                    w.call(this, e), null !== n && t.attributeChangedCallback(this, e, n, null, null);
                  }),
                  (Element.prototype.removeAttributeNS = function (e, n) {
                    if (1 !== this.__CE_state) return g.call(this, e, n);
                    var o = v.call(this, e, n);
                    g.call(this, e, n);
                    var r = v.call(this, e, n);
                    o !== r && t.attributeChangedCallback(this, n, o, r, e);
                  }),
                  F ? o(HTMLElement.prototype, F) : b && o(Element.prototype, b),
                  L ? r(HTMLElement.prototype, L) : _ && r(Element.prototype, _),
                  rt(t, Element.prototype, { prepend: C, append: N }),
                  (function (t) {
                    function e(e) {
                      return function (n) {
                        for (var o = [], r = 0; r < arguments.length; ++r) o[r] = arguments[r];
                        r = [];
                        for (var i = [], a = 0; a < o.length; a++) {
                          var l = o[a];
                          if ((l instanceof Element && H(l) && i.push(l), l instanceof DocumentFragment))
                            for (l = l.firstChild; l; l = l.nextSibling) r.push(l);
                          else r.push(l);
                        }
                        for (e.apply(this, o), o = 0; o < i.length; o++) G(t, i[o]);
                        if (H(this)) for (o = 0; o < r.length; o++) (i = r[o]) instanceof Element && q(t, i);
                      };
                    }
                    var n = Element.prototype;
                    void 0 !== T && (n.before = e(T)),
                      void 0 !== D && (n.after = e(D)),
                      void 0 !== k &&
                        (n.replaceWith = function (e) {
                          for (var n = [], o = 0; o < arguments.length; ++o) n[o] = arguments[o];
                          o = [];
                          for (var r = [], i = 0; i < n.length; i++) {
                            var a = n[i];
                            if ((a instanceof Element && H(a) && r.push(a), a instanceof DocumentFragment))
                              for (a = a.firstChild; a; a = a.nextSibling) o.push(a);
                            else o.push(a);
                          }
                          for (i = H(this), k.apply(this, n), n = 0; n < r.length; n++) G(t, r[n]);
                          if (i) for (G(t, this), n = 0; n < o.length; n++) (r = o[n]) instanceof Element && q(t, r);
                        }),
                      void 0 !== S &&
                        (n.remove = function () {
                          var e = H(this);
                          S.call(this), e && G(t, this);
                        });
                  })(t);
              })(M),
              (window.CustomElementRegistry = Z),
              (M = new Z(M)),
              (document.__CE_registry = M),
              Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: M });
          }
          (at && !at.forcePolyfill && "function" == typeof at.define && "function" == typeof at.get) || lt(),
            (window.__CE_installPolyfill = lt);
        }.call(self));
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { exports: {} });
    return t[o](i, i.exports, n), i.exports;
  }
  (() => {
    "use strict";
    let t;
    n(363),
      (function (t) {
        t.clipboards = "clipboards";
      })(t || (t = {}));
    class e extends HTMLElement {
      constructor() {
        super();
        const e = this.attachShadow({ mode: "open" }),
          n = document.createElement("table"),
          o = document.createElement("thead"),
          r = document.createElement("tbody"),
          i = document.createElement("tr"),
          a = document.createElement("th"),
          l = document.createElement("th");
        n.appendChild(o),
          n.appendChild(r),
          o.appendChild(i),
          i.appendChild(a),
          i.appendChild(l),
          (a.textContent = "Text"),
          (l.textContent = "Actions"),
          chrome.storage.local.get(t.clipboards, (t) => {
            t &&
              t.clipboards &&
              t.clipboards.forEach((t) => {
                r.appendChild(this.getTableRowElement(t));
              });
          }),
          e.appendChild(n);
      }
      getTableRowElement(e) {
        const n = document.createElement("tr"),
          o = document.createElement("td"),
          r = document.createElement("td");
        r.classList.add("flex-row");
        const i = document.createElement("button"),
          a = document.createElement("button");
        return (
          (i.innerText = "copy"),
          (a.innerText = "delete"),
          i.classList.add("m-5"),
          a.classList.add("m-5"),
          (i.onclick = (t) => {
            navigator.clipboard.writeText(e);
          }),
          (a.onclick = (n) => {
            chrome.storage.local.get(t.clipboards, (n) => {
              if (n && n.clipboards) {
                const o = n.clipboards.filter((t) => t !== e);
                chrome.storage.local.set({ [t.clipboards]: [...o] });
              }
            });
          }),
          (o.innerText = e),
          r.appendChild(i),
          r.appendChild(a),
          n.appendChild(o),
          n.appendChild(r),
          n
        );
      }
    }
    customElements.define("custom-table", e);
  })();
})();
