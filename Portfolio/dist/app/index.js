function nu(s, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(s, i.key, i);
  }
}
function Rs(s, e, t) {
  return e && nu(s.prototype, e), t && nu(s, t), s;
}
function li() {
  return (li =
    Object.assign ||
    function (s) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (s[i] = t[i]);
      }
      return s;
    }).apply(this, arguments);
}
function un(s, e) {
  (s.prototype = Object.create(e.prototype)),
    (s.prototype.constructor = s),
    (s.__proto__ = e);
}
function su(s) {
  return (su = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(s);
}
function Ms(s, e) {
  return (Ms =
    Object.setPrototypeOf ||
    function (t, i) {
      return (t.__proto__ = i), t;
    })(s, e);
}
function ou(s, e, t) {
  return (ou = (function () {
    if (
      typeof Reflect == "undefined" ||
      !Reflect.construct ||
      Reflect.construct.sham
    )
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (i) {
      return !1;
    }
  })()
    ? Reflect.construct
    : function (i, r, n) {
        var o = [null];
        o.push.apply(o, r);
        var a = new (Function.bind.apply(i, o))();
        return n && Ms(a, n.prototype), a;
      }).apply(null, arguments);
}
function au(s) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (au = function (t) {
    if (t === null || Function.toString.call(t).indexOf("[native code]") === -1)
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (e !== void 0) {
      if (e.has(t)) return e.get(t);
      e.set(t, i);
    }
    function i() {
      return ou(t, arguments, su(this).constructor);
    }
    return (
      (i.prototype = Object.create(t.prototype, {
        constructor: {
          value: i,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
      Ms(i, t)
    );
  })(s);
}
function Ii(s, e) {
  try {
    var t = s();
  } catch (i) {
    return e(i);
  }
  return t && t.then ? t.then(void 0, e) : t;
}
typeof Symbol != "undefined" &&
  (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
  typeof Symbol != "undefined" &&
    (Symbol.asyncIterator ||
      (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var Ht,
  Sh = "2.9.7",
  kh = function () {};
(function (s) {
  (s[(s.off = 0)] = "off"),
    (s[(s.error = 1)] = "error"),
    (s[(s.warning = 2)] = "warning"),
    (s[(s.info = 3)] = "info"),
    (s[(s.debug = 4)] = "debug");
})(Ht || (Ht = {}));
var uu = Ht.off,
  ci = (function () {
    function s(t) {
      this.t = t;
    }
    (s.getLevel = function () {
      return uu;
    }),
      (s.setLevel = function (t) {
        return (uu = Ht[t]);
      });
    var e = s.prototype;
    return (
      (e.error = function () {
        for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
          i[r] = arguments[r];
        this.i(console.error, Ht.error, i);
      }),
      (e.warn = function () {
        for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
          i[r] = arguments[r];
        this.i(console.warn, Ht.warning, i);
      }),
      (e.info = function () {
        for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
          i[r] = arguments[r];
        this.i(console.info, Ht.info, i);
      }),
      (e.debug = function () {
        for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
          i[r] = arguments[r];
        this.i(console.log, Ht.debug, i);
      }),
      (e.i = function (t, i, r) {
        i <= s.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(r));
      }),
      s
    );
  })(),
  hi = Os,
  Fh = lu,
  Ah = Ls,
  jh = cu,
  Rh = hu,
  fu = "/",
  Mh = new RegExp(
    [
      "(\\\\.)",
      "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
    ].join("|"),
    "g"
  );
function Ls(s, e) {
  for (
    var t,
      i = [],
      r = 0,
      n = 0,
      o = "",
      a = (e && e.delimiter) || fu,
      u = (e && e.whitelist) || void 0,
      l = !1;
    (t = Mh.exec(s)) !== null;

  ) {
    var c = t[0],
      p = t[1],
      f = t.index;
    if (((o += s.slice(n, f)), (n = f + c.length), p)) (o += p[1]), (l = !0);
    else {
      var h = "",
        g = t[2],
        d = t[3],
        _ = t[4],
        m = t[5];
      if (!l && o.length) {
        var b = o.length - 1,
          w = o[b];
        (!u || u.indexOf(w) > -1) && ((h = w), (o = o.slice(0, b)));
      }
      o && (i.push(o), (o = ""), (l = !1));
      var C = d || _,
        x = h || a;
      i.push({
        name: g || r++,
        prefix: h,
        delimiter: x,
        optional: m === "?" || m === "*",
        repeat: m === "+" || m === "*",
        pattern: C ? Oh(C) : "[^" + Ft(x === a ? x : x + a) + "]+?",
      });
    }
  }
  return (o || n < s.length) && i.push(o + s.substr(n)), i;
}
function lu(s, e) {
  return function (t, i) {
    var r = s.exec(t);
    if (!r) return !1;
    for (
      var n = r[0],
        o = r.index,
        a = {},
        u = (i && i.decode) || decodeURIComponent,
        l = 1;
      l < r.length;
      l++
    )
      if (r[l] !== void 0) {
        var c = e[l - 1];
        a[c.name] = c.repeat
          ? r[l].split(c.delimiter).map(function (p) {
              return u(p, c);
            })
          : u(r[l], c);
      }
    return { path: n, index: o, params: a };
  };
}
function cu(s, e) {
  for (var t = new Array(s.length), i = 0; i < s.length; i++)
    typeof s[i] == "object" &&
      (t[i] = new RegExp("^(?:" + s[i].pattern + ")$", Bs(e)));
  return function (r, n) {
    for (
      var o = "",
        a = (n && n.encode) || encodeURIComponent,
        u = !n || n.validate !== !1,
        l = 0;
      l < s.length;
      l++
    ) {
      var c = s[l];
      if (typeof c != "string") {
        var p,
          f = r ? r[c.name] : void 0;
        if (Array.isArray(f)) {
          if (!c.repeat)
            throw new TypeError(
              'Expected "' + c.name + '" to not repeat, but got array'
            );
          if (f.length === 0) {
            if (c.optional) continue;
            throw new TypeError('Expected "' + c.name + '" to not be empty');
          }
          for (var h = 0; h < f.length; h++) {
            if (((p = a(f[h], c)), u && !t[l].test(p)))
              throw new TypeError(
                'Expected all "' + c.name + '" to match "' + c.pattern + '"'
              );
            o += (h === 0 ? c.prefix : c.delimiter) + p;
          }
        } else if (
          typeof f != "string" &&
          typeof f != "number" &&
          typeof f != "boolean"
        ) {
          if (!c.optional)
            throw new TypeError(
              'Expected "' +
                c.name +
                '" to be ' +
                (c.repeat ? "an array" : "a string")
            );
        } else {
          if (((p = a(String(f), c)), u && !t[l].test(p)))
            throw new TypeError(
              'Expected "' +
                c.name +
                '" to match "' +
                c.pattern +
                '", but got "' +
                p +
                '"'
            );
          o += c.prefix + p;
        }
      } else o += c;
    }
    return o;
  };
}
function Ft(s) {
  return s.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function Oh(s) {
  return s.replace(/([=!:$/()])/g, "\\$1");
}
function Bs(s) {
  return s && s.sensitive ? "" : "i";
}
function hu(s, e, t) {
  for (
    var i = (t = t || {}).strict,
      r = t.start !== !1,
      n = t.end !== !1,
      o = t.delimiter || fu,
      a = []
        .concat(t.endsWith || [])
        .map(Ft)
        .concat("$")
        .join("|"),
      u = r ? "^" : "",
      l = 0;
    l < s.length;
    l++
  ) {
    var c = s[l];
    if (typeof c == "string") u += Ft(c);
    else {
      var p = c.repeat
        ? "(?:" +
          c.pattern +
          ")(?:" +
          Ft(c.delimiter) +
          "(?:" +
          c.pattern +
          "))*"
        : c.pattern;
      e && e.push(c),
        (u += c.optional
          ? c.prefix
            ? "(?:" + Ft(c.prefix) + "(" + p + "))?"
            : "(" + p + ")?"
          : Ft(c.prefix) + "(" + p + ")");
    }
  }
  if (n)
    i || (u += "(?:" + Ft(o) + ")?"), (u += a === "$" ? "$" : "(?=" + a + ")");
  else {
    var f = s[s.length - 1],
      h = typeof f == "string" ? f[f.length - 1] === o : f === void 0;
    i || (u += "(?:" + Ft(o) + "(?=" + a + "))?"),
      h || (u += "(?=" + Ft(o) + "|" + a + ")");
  }
  return new RegExp(u, Bs(t));
}
function Os(s, e, t) {
  return s instanceof RegExp
    ? (function (i, r) {
        if (!r) return i;
        var n = i.source.match(/\((?!\?)/g);
        if (n)
          for (var o = 0; o < n.length; o++)
            r.push({
              name: o,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              pattern: null,
            });
        return i;
      })(s, e)
    : Array.isArray(s)
    ? (function (i, r, n) {
        for (var o = [], a = 0; a < i.length; a++)
          o.push(Os(i[a], r, n).source);
        return new RegExp("(?:" + o.join("|") + ")", Bs(n));
      })(s, e, t)
    : (function (i, r, n) {
        return hu(Ls(i, n), r, n);
      })(s, e, t);
}
(hi.match = function (s, e) {
  var t = [];
  return lu(Os(s, t, e), t);
}),
  (hi.regexpToFunction = Fh),
  (hi.parse = Ah),
  (hi.compile = function (s, e) {
    return cu(Ls(s, e), e);
  }),
  (hi.tokensToFunction = jh),
  (hi.tokensToRegExp = Rh);
var mt = {
    container: "container",
    history: "history",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper",
  },
  fi = new ((function () {
    function s() {
      (this.o = mt), (this.u = new DOMParser());
    }
    var e = s.prototype;
    return (
      (e.toString = function (t) {
        return t.outerHTML;
      }),
      (e.toDocument = function (t) {
        return this.u.parseFromString(t, "text/html");
      }),
      (e.toElement = function (t) {
        var i = document.createElement("div");
        return (i.innerHTML = t), i;
      }),
      (e.getHtml = function (t) {
        return t === void 0 && (t = document), this.toString(t.documentElement);
      }),
      (e.getWrapper = function (t) {
        return (
          t === void 0 && (t = document),
          t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
        );
      }),
      (e.getContainer = function (t) {
        return (
          t === void 0 && (t = document),
          t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
        );
      }),
      (e.removeContainer = function (t) {
        document.body.contains(t) && t.parentNode.removeChild(t);
      }),
      (e.addContainer = function (t, i) {
        var r = this.getContainer();
        r ? this.s(t, r) : i.appendChild(t);
      }),
      (e.getNamespace = function (t) {
        t === void 0 && (t = document);
        var i = t.querySelector(
          "[" + this.o.prefix + "-" + this.o.namespace + "]"
        );
        return i
          ? i.getAttribute(this.o.prefix + "-" + this.o.namespace)
          : null;
      }),
      (e.getHref = function (t) {
        if (t.tagName && t.tagName.toLowerCase() === "a") {
          if (typeof t.href == "string") return t.href;
          var i = t.getAttribute("href") || t.getAttribute("xlink:href");
          if (i) return this.resolveUrl(i.baseVal || i);
        }
        return null;
      }),
      (e.resolveUrl = function () {
        for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
          i[r] = arguments[r];
        var n = i.length;
        if (n === 0)
          throw new Error(
            "resolveUrl requires at least one argument; got none."
          );
        var o = document.createElement("base");
        if (((o.href = arguments[0]), n === 1)) return o.href;
        var a = document.getElementsByTagName("head")[0];
        a.insertBefore(o, a.firstChild);
        for (var u, l = document.createElement("a"), c = 1; c < n; c++)
          (l.href = arguments[c]), (o.href = u = l.href);
        return a.removeChild(o), u;
      }),
      (e.s = function (t, i) {
        i.parentNode.insertBefore(t, i.nextSibling);
      }),
      s
    );
  })())(),
  pu = new ((function () {
    function s() {
      (this.h = []), (this.v = -1);
    }
    var e = s.prototype;
    return (
      (e.init = function (t, i) {
        this.l = "barba";
        var r = {
          ns: i,
          scroll: { x: window.scrollX, y: window.scrollY },
          url: t,
        };
        this.h.push(r), (this.v = 0);
        var n = { from: this.l, index: 0, states: [].concat(this.h) };
        window.history && window.history.replaceState(n, "", t);
      }),
      (e.change = function (t, i, r) {
        if (r && r.state) {
          var n = r.state,
            o = n.index;
          (i = this.m(this.v - o)), this.replace(n.states), (this.v = o);
        } else this.add(t, i);
        return i;
      }),
      (e.add = function (t, i) {
        var r = this.size,
          n = this.p(i),
          o = {
            ns: "tmp",
            scroll: { x: window.scrollX, y: window.scrollY },
            url: t,
          };
        this.h.push(o), (this.v = r);
        var a = { from: this.l, index: r, states: [].concat(this.h) };
        switch (n) {
          case "push":
            window.history && window.history.pushState(a, "", t);
            break;
          case "replace":
            window.history && window.history.replaceState(a, "", t);
        }
      }),
      (e.update = function (t, i) {
        var r = i || this.v,
          n = li({}, this.get(r), {}, t);
        this.set(r, n);
      }),
      (e.remove = function (t) {
        t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
      }),
      (e.clear = function () {
        (this.h = []), (this.v = -1);
      }),
      (e.replace = function (t) {
        this.h = t;
      }),
      (e.get = function (t) {
        return this.h[t];
      }),
      (e.set = function (t, i) {
        return (this.h[t] = i);
      }),
      (e.p = function (t) {
        var i = "push",
          r = t,
          n = mt.prefix + "-" + mt.history;
        return (
          r.hasAttribute && r.hasAttribute(n) && (i = r.getAttribute(n)), i
        );
      }),
      (e.m = function (t) {
        return Math.abs(t) > 1
          ? t > 0
            ? "forward"
            : "back"
          : t === 0
          ? "popstate"
          : t > 0
          ? "back"
          : "forward";
      }),
      Rs(s, [
        {
          key: "current",
          get: function () {
            return this.h[this.v];
          },
        },
        {
          key: "state",
          get: function () {
            return this.h[this.h.length - 1];
          },
        },
        {
          key: "previous",
          get: function () {
            return this.v < 1 ? null : this.h[this.v - 1];
          },
        },
        {
          key: "size",
          get: function () {
            return this.h.length;
          },
        },
      ]),
      s
    );
  })())(),
  ln = function (s, e) {
    try {
      var t = (function () {
        if (!e.next.html)
          return Promise.resolve(s).then(function (i) {
            var r = e.next;
            if (i) {
              var n = fi.toElement(i);
              (r.namespace = fi.getNamespace(n)),
                (r.container = fi.getContainer(n)),
                (r.html = i),
                pu.update({ ns: r.namespace });
              var o = fi.toDocument(i);
              document.title = o.title;
            }
          });
      })();
      return Promise.resolve(t && t.then ? t.then(function () {}) : void 0);
    } catch (i) {
      return Promise.reject(i);
    }
  },
  du = hi,
  Lh = {
    __proto__: null,
    update: ln,
    nextTick: function () {
      return new Promise(function (s) {
        window.requestAnimationFrame(s);
      });
    },
    pathToRegexp: du,
  },
  gu = function () {
    return window.location.origin;
  },
  Er = function (s) {
    return s === void 0 && (s = window.location.href), cn(s).port;
  },
  cn = function (s) {
    var e,
      t = s.match(/:\d+/);
    if (t === null) /^http/.test(s) && (e = 80), /^https/.test(s) && (e = 443);
    else {
      var i = t[0].substring(1);
      e = parseInt(i, 10);
    }
    var r,
      n = s.replace(gu(), ""),
      o = {},
      a = n.indexOf("#");
    a >= 0 && ((r = n.slice(a + 1)), (n = n.slice(0, a)));
    var u = n.indexOf("?");
    return (
      u >= 0 && ((o = mu(n.slice(u + 1))), (n = n.slice(0, u))),
      { hash: r, path: n, port: e, query: o }
    );
  },
  mu = function (s) {
    return s.split("&").reduce(function (e, t) {
      var i = t.split("=");
      return (e[i[0]] = i[1]), e;
    }, {});
  },
  Is = function (s) {
    return (
      s === void 0 && (s = window.location.href),
      s.replace(/(\/#.*|\/|#.*)$/, "")
    );
  },
  Bh = {
    __proto__: null,
    getHref: function () {
      return window.location.href;
    },
    getOrigin: gu,
    getPort: Er,
    getPath: function (s) {
      return s === void 0 && (s = window.location.href), cn(s).path;
    },
    parse: cn,
    parseQuery: mu,
    clean: Is,
  };
function Ih(s, e, t) {
  return (
    e === void 0 && (e = 2e3),
    new Promise(function (i, r) {
      var n = new XMLHttpRequest();
      (n.onreadystatechange = function () {
        if (n.readyState === XMLHttpRequest.DONE) {
          if (n.status === 200) i(n.responseText);
          else if (n.status) {
            var o = { status: n.status, statusText: n.statusText };
            t(s, o), r(o);
          }
        }
      }),
        (n.ontimeout = function () {
          var o = new Error("Timeout error [" + e + "]");
          t(s, o), r(o);
        }),
        (n.onerror = function () {
          var o = new Error("Fetch error");
          t(s, o), r(o);
        }),
        n.open("GET", s),
        (n.timeout = e),
        n.setRequestHeader(
          "Accept",
          "text/html,application/xhtml+xml,application/xml"
        ),
        n.setRequestHeader("x-barba", "yes"),
        n.send();
    })
  );
}
var zh = function (s) {
  return (
    !!s &&
    (typeof s == "object" || typeof s == "function") &&
    typeof s.then == "function"
  );
};
function zi(s, e) {
  return (
    e === void 0 && (e = {}),
    function () {
      for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
        i[r] = arguments[r];
      var n = !1,
        o = new Promise(function (a, u) {
          e.async = function () {
            return (
              (n = !0),
              function (c, p) {
                c ? u(c) : a(p);
              }
            );
          };
          var l = s.apply(e, i);
          n || (zh(l) ? l.then(a, u) : a(l));
        });
      return o;
    }
  );
}
var Xt = new ((function (s) {
    function e() {
      var i;
      return (
        ((i = s.call(this) || this).logger = new ci("@barba/core")),
        (i.all = [
          "ready",
          "page",
          "reset",
          "currentAdded",
          "currentRemoved",
          "nextAdded",
          "nextRemoved",
          "beforeOnce",
          "once",
          "afterOnce",
          "before",
          "beforeLeave",
          "leave",
          "afterLeave",
          "beforeEnter",
          "enter",
          "afterEnter",
          "after",
        ]),
        (i.registered = new Map()),
        i.init(),
        i
      );
    }
    un(e, s);
    var t = e.prototype;
    return (
      (t.init = function () {
        var i = this;
        this.registered.clear(),
          this.all.forEach(function (r) {
            i[r] ||
              (i[r] = function (n, o) {
                i.registered.has(r) || i.registered.set(r, new Set()),
                  i.registered.get(r).add({ ctx: o || {}, fn: n });
              });
          });
      }),
      (t.do = function (i) {
        for (
          var r = this,
            n = arguments.length,
            o = new Array(n > 1 ? n - 1 : 0),
            a = 1;
          a < n;
          a++
        )
          o[a - 1] = arguments[a];
        if (this.registered.has(i)) {
          var u = Promise.resolve();
          return (
            this.registered.get(i).forEach(function (l) {
              u = u.then(function () {
                return zi(l.fn, l.ctx).apply(void 0, o);
              });
            }),
            u.catch(function (l) {
              r.logger.debug("Hook error [" + i + "]"), r.logger.error(l);
            })
          );
        }
        return Promise.resolve();
      }),
      (t.clear = function () {
        var i = this;
        this.all.forEach(function (r) {
          delete i[r];
        }),
          this.init();
      }),
      (t.help = function () {
        this.logger.info("Available hooks: " + this.all.join(","));
        var i = [];
        this.registered.forEach(function (r, n) {
          return i.push(n);
        }),
          this.logger.info("Registered hooks: " + i.join(","));
      }),
      e
    );
  })(kh))(),
  _u = (function () {
    function s(e) {
      if (((this.P = []), typeof e == "boolean")) this.g = e;
      else {
        var t = Array.isArray(e) ? e : [e];
        this.P = t.map(function (i) {
          return du(i);
        });
      }
    }
    return (
      (s.prototype.checkHref = function (e) {
        if (typeof this.g == "boolean") return this.g;
        var t = cn(e).path;
        return this.P.some(function (i) {
          return i.exec(t) !== null;
        });
      }),
      s
    );
  })(),
  Nh = (function (s) {
    function e(i) {
      var r;
      return ((r = s.call(this, i) || this).k = new Map()), r;
    }
    un(e, s);
    var t = e.prototype;
    return (
      (t.set = function (i, r, n) {
        return (
          this.k.set(i, { action: n, request: r }), { action: n, request: r }
        );
      }),
      (t.get = function (i) {
        return this.k.get(i);
      }),
      (t.getRequest = function (i) {
        return this.k.get(i).request;
      }),
      (t.getAction = function (i) {
        return this.k.get(i).action;
      }),
      (t.has = function (i) {
        return !this.checkHref(i) && this.k.has(i);
      }),
      (t.delete = function (i) {
        return this.k.delete(i);
      }),
      (t.update = function (i, r) {
        var n = li({}, this.k.get(i), {}, r);
        return this.k.set(i, n), n;
      }),
      e
    );
  })(_u),
  qh = function () {
    return !window.history.pushState;
  },
  Hh = function (s) {
    return !s.el || !s.href;
  },
  Xh = function (s) {
    var e = s.event;
    return e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
  },
  Uh = function (s) {
    var e = s.el;
    return e.hasAttribute("target") && e.target === "_blank";
  },
  Wh = function (s) {
    var e = s.el;
    return (
      (e.protocol !== void 0 && window.location.protocol !== e.protocol) ||
      (e.hostname !== void 0 && window.location.hostname !== e.hostname)
    );
  },
  Vh = function (s) {
    var e = s.el;
    return e.port !== void 0 && Er() !== Er(e.href);
  },
  Yh = function (s) {
    var e = s.el;
    return e.getAttribute && typeof e.getAttribute("download") == "string";
  },
  Gh = function (s) {
    return s.el.hasAttribute(mt.prefix + "-" + mt.prevent);
  },
  $h = function (s) {
    return Boolean(
      s.el.closest("[" + mt.prefix + "-" + mt.prevent + '="all"]')
    );
  },
  Qh = function (s) {
    var e = s.href;
    return Is(e) === Is() && Er(e) === Er();
  },
  Zh = (function (s) {
    function e(i) {
      var r;
      return (
        ((r = s.call(this, i) || this).suite = []),
        (r.tests = new Map()),
        r.init(),
        r
      );
    }
    un(e, s);
    var t = e.prototype;
    return (
      (t.init = function () {
        this.add("pushState", qh),
          this.add("exists", Hh),
          this.add("newTab", Xh),
          this.add("blank", Uh),
          this.add("corsDomain", Wh),
          this.add("corsPort", Vh),
          this.add("download", Yh),
          this.add("preventSelf", Gh),
          this.add("preventAll", $h),
          this.add("sameUrl", Qh, !1);
      }),
      (t.add = function (i, r, n) {
        n === void 0 && (n = !0), this.tests.set(i, r), n && this.suite.push(i);
      }),
      (t.run = function (i, r, n, o) {
        return this.tests.get(i)({ el: r, event: n, href: o });
      }),
      (t.checkLink = function (i, r, n) {
        var o = this;
        return this.suite.some(function (a) {
          return o.run(a, i, r, n);
        });
      }),
      e
    );
  })(_u),
  zs = (function (s) {
    function e(t, i) {
      var r;
      i === void 0 && (i = "Barba error");
      for (
        var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2;
        a < n;
        a++
      )
        o[a - 2] = arguments[a];
      return (
        ((r = s.call.apply(s, [this].concat(o)) || this).error = t),
        (r.label = i),
        Error.captureStackTrace &&
          Error.captureStackTrace(
            (function (u) {
              if (u === void 0)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return u;
            })(r),
            e
          ),
        (r.name = "BarbaError"),
        r
      );
    }
    return un(e, s), e;
  })(au(Error)),
  Kh = (function () {
    function s(t) {
      t === void 0 && (t = []),
        (this.logger = new ci("@barba/core")),
        (this.all = []),
        (this.page = []),
        (this.once = []),
        (this.A = [
          { name: "namespace", type: "strings" },
          { name: "custom", type: "function" },
        ]),
        t && (this.all = this.all.concat(t)),
        this.update();
    }
    var e = s.prototype;
    return (
      (e.add = function (t, i) {
        switch (t) {
          case "rule":
            this.A.splice(i.position || 0, 0, i.value);
            break;
          case "transition":
          default:
            this.all.push(i);
        }
        this.update();
      }),
      (e.resolve = function (t, i) {
        var r = this;
        i === void 0 && (i = {});
        var n = i.once ? this.once : this.page;
        n = n.filter(
          i.self
            ? function (f) {
                return f.name && f.name === "self";
              }
            : function (f) {
                return !f.name || f.name !== "self";
              }
        );
        var o = new Map(),
          a = n.find(function (f) {
            var h = !0,
              g = {};
            return (
              !(!i.self || f.name !== "self") ||
              (r.A.reverse().forEach(function (d) {
                h &&
                  ((h = r.R(f, d, t, g)),
                  f.from &&
                    f.to &&
                    (h = r.R(f, d, t, g, "from") && r.R(f, d, t, g, "to")),
                  f.from && !f.to && (h = r.R(f, d, t, g, "from")),
                  !f.from && f.to && (h = r.R(f, d, t, g, "to")));
              }),
              o.set(f, g),
              h)
            );
          }),
          u = o.get(a),
          l = [];
        if ((l.push(i.once ? "once" : "page"), i.self && l.push("self"), u)) {
          var c,
            p = [a];
          Object.keys(u).length > 0 && p.push(u),
            (c = this.logger).info.apply(
              c,
              ["Transition found [" + l.join(",") + "]"].concat(p)
            );
        } else this.logger.info("No transition found [" + l.join(",") + "]");
        return a;
      }),
      (e.update = function () {
        var t = this;
        (this.all = this.all
          .map(function (i) {
            return t.T(i);
          })
          .sort(function (i, r) {
            return i.priority - r.priority;
          })
          .reverse()
          .map(function (i) {
            return delete i.priority, i;
          })),
          (this.page = this.all.filter(function (i) {
            return i.leave !== void 0 || i.enter !== void 0;
          })),
          (this.once = this.all.filter(function (i) {
            return i.once !== void 0;
          }));
      }),
      (e.R = function (t, i, r, n, o) {
        var a = !0,
          u = !1,
          l = t,
          c = i.name,
          p = c,
          f = c,
          h = c,
          g = o ? l[o] : l,
          d = o === "to" ? r.next : r.current;
        if (o ? g && g[c] : g[c]) {
          switch (i.type) {
            case "strings":
            default:
              var _ = Array.isArray(g[p]) ? g[p] : [g[p]];
              d[p] && _.indexOf(d[p]) !== -1 && (u = !0),
                _.indexOf(d[p]) === -1 && (a = !1);
              break;
            case "object":
              var m = Array.isArray(g[f]) ? g[f] : [g[f]];
              d[f]
                ? (d[f].name && m.indexOf(d[f].name) !== -1 && (u = !0),
                  m.indexOf(d[f].name) === -1 && (a = !1))
                : (a = !1);
              break;
            case "function":
              g[h](r) ? (u = !0) : (a = !1);
          }
          u && (o ? ((n[o] = n[o] || {}), (n[o][c] = l[o][c])) : (n[c] = l[c]));
        }
        return a;
      }),
      (e.O = function (t, i, r) {
        var n = 0;
        return (
          (t[i] || (t.from && t.from[i]) || (t.to && t.to[i])) &&
            ((n += Math.pow(10, r)),
            t.from && t.from[i] && (n += 1),
            t.to && t.to[i] && (n += 2)),
          n
        );
      }),
      (e.T = function (t) {
        var i = this;
        t.priority = 0;
        var r = 0;
        return (
          this.A.forEach(function (n, o) {
            r += i.O(t, n.name, o + 1);
          }),
          (t.priority = r),
          t
        );
      }),
      s
    );
  })(),
  Jh = (function () {
    function s(t) {
      t === void 0 && (t = []),
        (this.logger = new ci("@barba/core")),
        (this.S = !1),
        (this.store = new Kh(t));
    }
    var e = s.prototype;
    return (
      (e.get = function (t, i) {
        return this.store.resolve(t, i);
      }),
      (e.doOnce = function (t) {
        var i = t.data,
          r = t.transition;
        try {
          var n = function () {
              o.S = !1;
            },
            o = this,
            a = r || {};
          o.S = !0;
          var u = Ii(
            function () {
              return Promise.resolve(o.j("beforeOnce", i, a)).then(function () {
                return Promise.resolve(o.once(i, a)).then(function () {
                  return Promise.resolve(o.j("afterOnce", i, a)).then(
                    function () {}
                  );
                });
              });
            },
            function (l) {
              (o.S = !1),
                o.logger.debug("Transition error [before/after/once]"),
                o.logger.error(l);
            }
          );
          return Promise.resolve(u && u.then ? u.then(n) : n());
        } catch (l) {
          return Promise.reject(l);
        }
      }),
      (e.doPage = function (t) {
        var i = t.data,
          r = t.transition,
          n = t.page,
          o = t.wrapper;
        try {
          var a = function (h) {
              if (u) return h;
              l.S = !1;
            },
            u = !1,
            l = this,
            c = r || {},
            p = c.sync === !0 || !1;
          l.S = !0;
          var f = Ii(
            function () {
              function h() {
                return Promise.resolve(l.j("before", i, c)).then(function () {
                  var d = !1;
                  function _(b) {
                    return d
                      ? b
                      : Promise.resolve(l.remove(i)).then(function () {
                          return Promise.resolve(l.j("after", i, c)).then(
                            function () {}
                          );
                        });
                  }
                  var m = (function () {
                    if (p)
                      return Ii(
                        function () {
                          return Promise.resolve(l.add(i, o)).then(function () {
                            return Promise.resolve(
                              l.j("beforeLeave", i, c)
                            ).then(function () {
                              return Promise.resolve(
                                l.j("beforeEnter", i, c)
                              ).then(function () {
                                return Promise.resolve(
                                  Promise.all([l.leave(i, c), l.enter(i, c)])
                                ).then(function () {
                                  return Promise.resolve(
                                    l.j("afterLeave", i, c)
                                  ).then(function () {
                                    return Promise.resolve(
                                      l.j("afterEnter", i, c)
                                    ).then(function () {});
                                  });
                                });
                              });
                            });
                          });
                        },
                        function (x) {
                          if (l.M(x))
                            throw new zs(x, "Transition error [sync]");
                        }
                      );
                    var b = function (x) {
                        return d
                          ? x
                          : Ii(
                              function () {
                                var v = (function () {
                                  if (w !== !1)
                                    return Promise.resolve(l.add(i, o)).then(
                                      function () {
                                        return Promise.resolve(
                                          l.j("beforeEnter", i, c)
                                        ).then(function () {
                                          return Promise.resolve(
                                            l.enter(i, c, w)
                                          ).then(function () {
                                            return Promise.resolve(
                                              l.j("afterEnter", i, c)
                                            ).then(function () {});
                                          });
                                        });
                                      }
                                    );
                                })();
                                if (v && v.then) return v.then(function () {});
                              },
                              function (v) {
                                if (l.M(v))
                                  throw new zs(
                                    v,
                                    "Transition error [before/after/enter]"
                                  );
                              }
                            );
                      },
                      w = !1,
                      C = Ii(
                        function () {
                          return Promise.resolve(l.j("beforeLeave", i, c)).then(
                            function () {
                              return Promise.resolve(
                                Promise.all([l.leave(i, c), ln(n, i)]).then(
                                  function (x) {
                                    return x[0];
                                  }
                                )
                              ).then(function (x) {
                                return (
                                  (w = x),
                                  Promise.resolve(l.j("afterLeave", i, c)).then(
                                    function () {}
                                  )
                                );
                              });
                            }
                          );
                        },
                        function (x) {
                          if (l.M(x))
                            throw new zs(
                              x,
                              "Transition error [before/after/leave]"
                            );
                        }
                      );
                    return C && C.then ? C.then(b) : b(C);
                  })();
                  return m && m.then ? m.then(_) : _(m);
                });
              }
              var g = (function () {
                if (p) return Promise.resolve(ln(n, i)).then(function () {});
              })();
              return g && g.then ? g.then(h) : h();
            },
            function (h) {
              throw (
                ((l.S = !1),
                h.name && h.name === "BarbaError"
                  ? (l.logger.debug(h.label), l.logger.error(h.error), h)
                  : (l.logger.debug("Transition error [page]"),
                    l.logger.error(h),
                    h))
              );
            }
          );
          return Promise.resolve(f && f.then ? f.then(a) : a(f));
        } catch (h) {
          return Promise.reject(h);
        }
      }),
      (e.once = function (t, i) {
        try {
          return Promise.resolve(Xt.do("once", t, i)).then(function () {
            return i.once ? zi(i.once, i)(t) : Promise.resolve();
          });
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      (e.leave = function (t, i) {
        try {
          return Promise.resolve(Xt.do("leave", t, i)).then(function () {
            return i.leave ? zi(i.leave, i)(t) : Promise.resolve();
          });
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      (e.enter = function (t, i, r) {
        try {
          return Promise.resolve(Xt.do("enter", t, i)).then(function () {
            return i.enter ? zi(i.enter, i)(t, r) : Promise.resolve();
          });
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      (e.add = function (t, i) {
        try {
          return (
            fi.addContainer(t.next.container, i),
            Xt.do("nextAdded", t),
            Promise.resolve()
          );
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      (e.remove = function (t) {
        try {
          return (
            fi.removeContainer(t.current.container),
            Xt.do("currentRemoved", t),
            Promise.resolve()
          );
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      (e.M = function (t) {
        return t.message
          ? !/Timeout error|Fetch error/.test(t.message)
          : !t.status;
      }),
      (e.j = function (t, i, r) {
        try {
          return Promise.resolve(Xt.do(t, i, r)).then(function () {
            return r[t] ? zi(r[t], r)(i) : Promise.resolve();
          });
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      Rs(s, [
        {
          key: "isRunning",
          get: function () {
            return this.S;
          },
          set: function (t) {
            this.S = t;
          },
        },
        {
          key: "hasOnce",
          get: function () {
            return this.store.once.length > 0;
          },
        },
        {
          key: "hasSelf",
          get: function () {
            return this.store.all.some(function (t) {
              return t.name === "self";
            });
          },
        },
        {
          key: "shouldWait",
          get: function () {
            return this.store.all.some(function (t) {
              return (t.to && !t.to.route) || t.sync;
            });
          },
        },
      ]),
      s
    );
  })(),
  ef = (function () {
    function s(e) {
      var t = this;
      (this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"]),
        (this.byNamespace = new Map()),
        e.length !== 0 &&
          (e.forEach(function (i) {
            t.byNamespace.set(i.namespace, i);
          }),
          this.names.forEach(function (i) {
            Xt[i](t.L(i));
          }));
    }
    return (
      (s.prototype.L = function (e) {
        var t = this;
        return function (i) {
          var r = e.match(/enter/i) ? i.next : i.current,
            n = t.byNamespace.get(r.namespace);
          return n && n[e] ? zi(n[e], n)(i) : Promise.resolve();
        };
      }),
      s
    );
  })();
Element.prototype.matches ||
  (Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector),
  Element.prototype.closest ||
    (Element.prototype.closest = function (s) {
      var e = this;
      do {
        if (e.matches(s)) return e;
        e = e.parentElement || e.parentNode;
      } while (e !== null && e.nodeType === 1);
      return null;
    });
var tf = {
    container: null,
    html: "",
    namespace: "",
    url: { hash: "", href: "", path: "", port: null, query: {} },
  },
  rf = new ((function () {
    function s() {
      (this.version = Sh),
        (this.schemaPage = tf),
        (this.Logger = ci),
        (this.logger = new ci("@barba/core")),
        (this.plugins = []),
        (this.hooks = Xt),
        (this.dom = fi),
        (this.helpers = Lh),
        (this.history = pu),
        (this.request = Ih),
        (this.url = Bh);
    }
    var e = s.prototype;
    return (
      (e.use = function (t, i) {
        var r = this.plugins;
        r.indexOf(t) > -1
          ? this.logger.warn("Plugin [" + t.name + "] already installed.")
          : typeof t.install == "function"
          ? (t.install(this, i), r.push(t))
          : this.logger.warn(
              "Plugin [" + t.name + '] has no "install" method.'
            );
      }),
      (e.init = function (t) {
        var i = t === void 0 ? {} : t,
          r = i.transitions,
          n = r === void 0 ? [] : r,
          o = i.views,
          a = o === void 0 ? [] : o,
          u = i.schema,
          l = u === void 0 ? mt : u,
          c = i.requestError,
          p = i.timeout,
          f = p === void 0 ? 2e3 : p,
          h = i.cacheIgnore,
          g = h !== void 0 && h,
          d = i.prefetchIgnore,
          _ = d !== void 0 && d,
          m = i.preventRunning,
          b = m !== void 0 && m,
          w = i.prevent,
          C = w === void 0 ? null : w,
          x = i.debug,
          v = i.logLevel;
        if (
          (ci.setLevel(
            (x !== void 0 && x) === !0 ? "debug" : v === void 0 ? "off" : v
          ),
          this.logger.info(this.version),
          Object.keys(l).forEach(function (P) {
            mt[P] && (mt[P] = l[P]);
          }),
          (this.$ = c),
          (this.timeout = f),
          (this.cacheIgnore = g),
          (this.prefetchIgnore = _),
          (this.preventRunning = b),
          (this._ = this.dom.getWrapper()),
          !this._)
        )
          throw new Error("[@barba/core] No Barba wrapper found");
        this._.setAttribute("aria-live", "polite"), this.q();
        var E = this.data.current;
        if (!E.container)
          throw new Error("[@barba/core] No Barba container found");
        if (
          ((this.cache = new Nh(g)),
          (this.prevent = new Zh(_)),
          (this.transitions = new Jh(n)),
          (this.views = new ef(a)),
          C !== null)
        ) {
          if (typeof C != "function")
            throw new Error("[@barba/core] Prevent should be a function");
          this.prevent.add("preventCustom", C);
        }
        this.history.init(E.url.href, E.namespace),
          (this.B = this.B.bind(this)),
          (this.U = this.U.bind(this)),
          (this.D = this.D.bind(this)),
          this.F(),
          this.plugins.forEach(function (P) {
            return P.init();
          });
        var T = this.data;
        (T.trigger = "barba"),
          (T.next = T.current),
          (T.current = li({}, this.schemaPage)),
          this.hooks.do("ready", T),
          this.once(T),
          this.q();
      }),
      (e.destroy = function () {
        this.q(),
          this.H(),
          this.history.clear(),
          this.hooks.clear(),
          (this.plugins = []);
      }),
      (e.force = function (t) {
        window.location.assign(t);
      }),
      (e.go = function (t, i, r) {
        var n;
        if ((i === void 0 && (i = "barba"), this.transitions.isRunning))
          this.force(t);
        else if (
          !(n =
            i === "popstate"
              ? this.history.current &&
                this.url.getPath(this.history.current.url) ===
                  this.url.getPath(t)
              : this.prevent.run("sameUrl", null, null, t)) ||
          this.transitions.hasSelf
        )
          return (
            (i = this.history.change(t, i, r)),
            r && (r.stopPropagation(), r.preventDefault()),
            this.page(t, i, n)
          );
      }),
      (e.once = function (t) {
        try {
          var i = this;
          return Promise.resolve(i.hooks.do("beforeEnter", t)).then(
            function () {
              function r() {
                return Promise.resolve(i.hooks.do("afterEnter", t)).then(
                  function () {}
                );
              }
              var n = (function () {
                if (i.transitions.hasOnce) {
                  var o = i.transitions.get(t, { once: !0 });
                  return Promise.resolve(
                    i.transitions.doOnce({ transition: o, data: t })
                  ).then(function () {});
                }
              })();
              return n && n.then ? n.then(r) : r();
            }
          );
        } catch (r) {
          return Promise.reject(r);
        }
      }),
      (e.page = function (t, i, r) {
        try {
          var n = function () {
              var l = o.data;
              return Promise.resolve(o.hooks.do("page", l)).then(function () {
                var c = Ii(
                  function () {
                    var p = o.transitions.get(l, { once: !1, self: r });
                    return Promise.resolve(
                      o.transitions.doPage({
                        data: l,
                        page: a,
                        transition: p,
                        wrapper: o._,
                      })
                    ).then(function () {
                      o.q();
                    });
                  },
                  function () {
                    ci.getLevel() === 0 && o.force(l.current.url.href);
                  }
                );
                if (c && c.then) return c.then(function () {});
              });
            },
            o = this;
          (o.data.next.url = li({ href: t }, o.url.parse(t))),
            (o.data.trigger = i);
          var a = o.cache.has(t)
              ? o.cache.update(t, { action: "click" }).request
              : o.cache.set(
                  t,
                  o.request(t, o.timeout, o.onRequestError.bind(o, i)),
                  "click"
                ).request,
            u = (function () {
              if (o.transitions.shouldWait)
                return Promise.resolve(ln(a, o.data)).then(function () {});
            })();
          return Promise.resolve(u && u.then ? u.then(n) : n());
        } catch (l) {
          return Promise.reject(l);
        }
      }),
      (e.onRequestError = function (t) {
        this.transitions.isRunning = !1;
        for (
          var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1;
          n < i;
          n++
        )
          r[n - 1] = arguments[n];
        var o = r[0],
          a = r[1],
          u = this.cache.getAction(o);
        return (
          this.cache.delete(o),
          this.$ && this.$(t, u, o, a) === !1,
          u === "click" && this.force(o),
          !1
        );
      }),
      (e.prefetch = function (t) {
        var i = this;
        this.cache.has(t) ||
          this.cache.set(
            t,
            this.request(
              t,
              this.timeout,
              this.onRequestError.bind(this, "barba")
            ).catch(function (r) {
              i.logger.error(r);
            }),
            "prefetch"
          );
      }),
      (e.F = function () {
        this.prefetchIgnore !== !0 &&
          (document.addEventListener("mouseover", this.B),
          document.addEventListener("touchstart", this.B)),
          document.addEventListener("click", this.U),
          window.addEventListener("popstate", this.D);
      }),
      (e.H = function () {
        this.prefetchIgnore !== !0 &&
          (document.removeEventListener("mouseover", this.B),
          document.removeEventListener("touchstart", this.B)),
          document.removeEventListener("click", this.U),
          window.removeEventListener("popstate", this.D);
      }),
      (e.B = function (t) {
        var i = this,
          r = this.I(t);
        if (r) {
          var n = this.dom.getHref(r);
          this.prevent.checkHref(n) ||
            this.cache.has(n) ||
            this.cache.set(
              n,
              this.request(
                n,
                this.timeout,
                this.onRequestError.bind(this, r)
              ).catch(function (o) {
                i.logger.error(o);
              }),
              "enter"
            );
        }
      }),
      (e.U = function (t) {
        var i = this.I(t);
        if (i)
          return this.transitions.isRunning && this.preventRunning
            ? (t.preventDefault(), void t.stopPropagation())
            : void this.go(this.dom.getHref(i), i, t);
      }),
      (e.D = function (t) {
        this.go(this.url.getHref(), "popstate", t);
      }),
      (e.I = function (t) {
        for (var i = t.target; i && !this.dom.getHref(i); ) i = i.parentNode;
        if (i && !this.prevent.checkLink(i, t, this.dom.getHref(i))) return i;
      }),
      (e.q = function () {
        var t = this.url.getHref(),
          i = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: li({ href: t }, this.url.parse(t)),
          };
        (this.C = {
          current: i,
          next: li({}, this.schemaPage),
          trigger: void 0,
        }),
          this.hooks.do("reset", this.data);
      }),
      Rs(s, [
        {
          key: "data",
          get: function () {
            return this.C;
          },
        },
        {
          key: "wrapper",
          get: function () {
            return this._;
          },
        },
      ]),
      s
    );
  })())(),
  pt = rf;
var nf = "2.1.10",
  sf =
    window.requestIdleCallback ||
    function (s) {
      var e = Date.now();
      return setTimeout(function () {
        s({
          didTimeout: !1,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - e));
          },
        });
      }, 1);
    },
  of = new ((function () {
    function s() {
      (this.name = "@barba/prefetch"),
        (this.version = nf),
        (this.toPrefetch = new Set());
    }
    var e = s.prototype;
    return (
      (e.install = function (t, i) {
        var r = i === void 0 ? {} : i,
          n = r.root,
          o = n === void 0 ? document.body : n,
          a = r.timeout,
          u = a === void 0 ? 2e3 : a;
        (this.logger = new t.Logger(this.name)),
          this.logger.info(this.version),
          (this.barba = t),
          (this.root = o),
          (this.timeout = u);
      }),
      (e.init = function () {
        var t = this;
        this.barba.prefetchIgnore
          ? this.logger.warn("barba.prefetchIgnore is enabled")
          : this.barba.cacheIgnore
          ? this.logger.warn("barba.cacheIgnore is enabled")
          : ((this.observer = new IntersectionObserver(function (i) {
              i.forEach(function (r) {
                if (r.isIntersecting) {
                  var n = r.target,
                    o = t.barba.dom.getHref(n);
                  t.toPrefetch.has(o) &&
                    (t.observer.unobserve(n),
                    t.barba.cache.has(o)
                      ? t.barba.cache.update(o, { action: "prefetch" })
                      : t.barba.cache.set(
                          o,
                          t.barba
                            .request(
                              o,
                              t.barba.timeout,
                              t.barba.onRequestError.bind(t.barba, "barba")
                            )
                            .catch(function (a) {
                              t.logger.error(a);
                            }),
                          "prefetch"
                        ));
                }
              });
            })),
            this.observe(),
            this.barba.hooks.after(this.observe, this));
      }),
      (e.observe = function () {
        var t = this;
        sf(
          function () {
            t.root.querySelectorAll("a").forEach(function (i) {
              var r = i,
                n = t.barba.dom.getHref(r);
              t.barba.cache.has(n) ||
                t.barba.prevent.checkHref(n) ||
                t.barba.prevent.checkLink(r, {}, n) ||
                (t.observer.observe(i), t.toPrefetch.add(n));
            });
          },
          { timeout: this.timeout }
        );
      }),
      s
    );
  })())(),
  Du = of;
function At(s) {
  if (s === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return s;
}
function yu(s, e) {
  (s.prototype = Object.create(e.prototype)),
    (s.prototype.constructor = s),
    (s.__proto__ = e);
}
var ze = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Ni = { duration: 0.5, overwrite: !1, delay: 0 },
  Ns,
  _t = 1e8,
  re = 1 / _t,
  qs = Math.PI * 2,
  af = qs / 4,
  uf = 0,
  xu = Math.sqrt,
  lf = Math.cos,
  cf = Math.sin,
  Ee = function (e) {
    return typeof e == "string";
  },
  xe = function (e) {
    return typeof e == "function";
  },
  jt = function (e) {
    return typeof e == "number";
  },
  Hs = function (e) {
    return typeof e == "undefined";
  },
  Rt = function (e) {
    return typeof e == "object";
  },
  Ne = function (e) {
    return e !== !1;
  },
  wu = function () {
    return typeof window != "undefined";
  },
  vu = function (e) {
    return xe(e) || Ee(e);
  },
  bu =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Ge = Array.isArray,
  Xs = /(?:-?\.?\d|\.)+/gi,
  Cu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  qi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Us = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Eu = /[+-]=-?[.\d]+/,
  Tu = /[^,'"\[\]\s]+/gi,
  hf = /[\d.+\-=]+(?:e[-+]\d*)*/i,
  le,
  Dt,
  Ws,
  Vs,
  $e = {},
  hn = {},
  Pu,
  Su = function (e) {
    return (hn = Hi(e, $e)) && yt;
  },
  Ys = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  fn = function (e, t) {
    return !t && console.warn(e);
  },
  ku = function (e, t) {
    return (e && ($e[e] = t) && hn && (hn[e] = t)) || $e;
  },
  Xi = function () {
    return 0;
  },
  Gs = {},
  Ut = [],
  $s = {},
  Fu,
  Qe = {},
  Qs = {},
  Au = 30,
  pn = [],
  Zs = "",
  Ks = function (e) {
    var t = e[0],
      i,
      r;
    if ((Rt(t) || xe(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (r = pn.length; r-- && !pn[r].targetTest(t); );
      i = pn[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new ju(e[r], i)))) ||
        e.splice(r, 1);
    return e;
  },
  pi = function (e) {
    return e._gsap || Ks(rt(e))[0]._gsap;
  },
  Ru = function (e, t, i) {
    return (i = e[t]) && xe(i)
      ? e[t]()
      : (Hs(i) && e.getAttribute && e.getAttribute(t)) || i;
  },
  Ze = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  de = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Pe = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  ff = function (e, t) {
    for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
    return r < i;
  },
  dn = function () {
    var e = Ut.length,
      t = Ut.slice(0),
      i,
      r;
    for ($s = {}, Ut.length = 0, i = 0; i < e; i++)
      (r = t[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  Mu = function (e, t, i, r) {
    Ut.length && dn(), e.render(t, i, r), Ut.length && dn();
  },
  Ou = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Tu).length < 2
      ? t
      : Ee(e)
      ? e.trim()
      : e;
  },
  Lu = function (e) {
    return e;
  },
  nt = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  pf = function (e, t) {
    for (var i in t)
      i in e || i === "duration" || i === "ease" || (e[i] = t[i]);
  },
  Hi = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  Bu = function s(e, t) {
    for (var i in t)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = Rt(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  },
  Js = function (e, t) {
    var i = {},
      r;
    for (r in e) r in t || (i[r] = e[r]);
    return i;
  },
  Tr = function (e) {
    var t = e.parent || le,
      i = e.keyframes ? pf : nt;
    if (Ne(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  df = function (e, t) {
    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
    return i < 0;
  },
  gf = function (e, t, i, r, n) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var o = e[r],
      a;
    if (n) for (a = t[n]; o && o[n] > a; ) o = o._prev;
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[i]), (e[i] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    );
  },
  gn = function (e, t, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var n = t._prev,
      o = t._next;
    n ? (n._next = o) : e[i] === t && (e[i] = o),
      o ? (o._prev = n) : e[r] === t && (e[r] = n),
      (t._next = t._prev = t.parent = null);
  },
  Wt = function (e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
      (e._act = 0);
  },
  di = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  },
  mf = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  _f = function s(e) {
    return !e || (e._ts && s(e.parent));
  },
  Iu = function (e) {
    return e._repeat ? Ui(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Ui = function (e, t) {
    var i = Math.floor((e /= t));
    return e && i === e ? i - 1 : i;
  },
  mn = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  _n = function (e) {
    return (e._end = Pe(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || re) || 0)
    ));
  },
  zu = function (e, t) {
    var i = e._dp;
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = Pe(
          i._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        _n(e),
        i._dirty || di(i, e)),
      e
    );
  },
  Nu = function (e, t) {
    var i;
    if (
      ((t._time || (t._initted && !t._dur)) &&
        ((i = mn(e.rawTime(), t)),
        (!t._dur || Pr(0, t.totalDuration(), i) - t._tTime > re) &&
          t.render(i, !0)),
      di(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -re;
    }
  },
  xt = function (e, t, i, r) {
    return (
      t.parent && Wt(t),
      (t._start = Pe(
        (jt(i) ? i : i || e !== le ? st(e, i, t) : e._time) + t._delay
      )),
      (t._end = Pe(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      gf(e, t, "_first", "_last", e._sort ? "_start" : 0),
      eo(t) || (e._recent = t),
      r || Nu(e, t),
      e
    );
  },
  qu = function (e, t) {
    return (
      ($e.ScrollTrigger || Ys("scrollTrigger", t)) &&
      $e.ScrollTrigger.create(t, e)
    );
  },
  Hu = function (e, t, i, r) {
    if ((Df(e, t), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Fu !== ot.frame
    )
      return Ut.push(e), (e._lazy = [t, r]), 1;
  },
  yf = function s(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
  },
  eo = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  xf = function (e, t, i, r) {
    var n = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && yf(e) && !(!e._initted && eo(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !eo(e))))
          ? 0
          : 1,
      a = e._rDelay,
      u = 0,
      l,
      c,
      p;
    if (
      (a &&
        e._repeat &&
        ((u = Pr(0, e._tDur, t)),
        (c = Ui(u, a)),
        (p = Ui(e._tTime, a)),
        e._yoyo && c & 1 && (o = 1 - o),
        c !== p &&
          ((n = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== n || r || e._zTime === re || (!t && e._zTime))
    ) {
      if (!e._initted && Hu(e, t, r, i)) return;
      for (
        p = e._zTime,
          e._zTime = t || (i ? re : 0),
          i || (i = t && !p),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = u,
          l = e._pt;
        l;

      )
        l.r(o, l.d), (l = l._next);
      e._startAt && t < 0 && e._startAt.render(t, !0, !0),
        e._onUpdate && !i && at(e, "onUpdate"),
        u && e._repeat && !i && e.parent && at(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && Wt(e, 1),
          i ||
            (at(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  wf = function (e, t, i) {
    var r;
    if (i > t)
      for (r = e._first; r && r._start <= i; ) {
        if (!r._dur && r.data === "isPause" && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= i; ) {
        if (!r._dur && r.data === "isPause" && r._start < t) return r;
        r = r._prev;
      }
  },
  Wi = function (e, t, i, r) {
    var n = e._repeat,
      o = Pe(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !r && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = n ? (n < 0 ? 1e10 : Pe(o * (n + 1) + e._rDelay * n)) : o),
      a && !r ? zu(e, (e._tTime = e._tDur * a)) : e.parent && _n(e),
      i || di(e.parent, e),
      e
    );
  },
  Xu = function (e) {
    return e instanceof qe ? di(e) : Wi(e, e._dur);
  },
  vf = { _start: 0, endTime: Xi, totalDuration: Xi },
  st = function s(e, t, i) {
    var r = e.labels,
      n = e._recent || vf,
      o = e.duration() >= _t ? n.endTime(!1) : e._dur,
      a,
      u,
      l;
    return Ee(t) && (isNaN(t) || t in r)
      ? ((u = t.charAt(0)),
        (l = t.substr(-1) === "%"),
        (a = t.indexOf("=")),
        u === "<" || u === ">"
          ? (a >= 0 && (t = t.replace(/=/, "")),
            (u === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (l ? (a < 0 ? n : i).totalDuration() / 100 : 1))
          : a < 0
          ? (t in r || (r[t] = o), r[t])
          : ((u = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
            l && i && (u = (u / 100) * (Ge(i) ? i[0] : i).totalDuration()),
            a > 1 ? s(e, t.substr(0, a - 1), i) + u : o + u))
      : t == null
      ? o
      : +t;
  },
  Sr = function (e, t, i) {
    var r = jt(t[1]),
      n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[n],
      a,
      u;
    if ((r && (o.duration = t[1]), (o.parent = i), e)) {
      for (a = o, u = i; u && !("immediateRender" in a); )
        (a = u.vars.defaults || {}), (u = Ne(u.vars.inherit) && u.parent);
      (o.immediateRender = Ne(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[n - 1]);
    }
    return new we(t[0], o, t[n + 1]);
  },
  Vt = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Pr = function (e, t, i) {
    return i < e ? e : i > t ? t : i;
  },
  Ke = function (e) {
    if (typeof e != "string") return "";
    var t = hf.exec(e);
    return t ? e.substr(t.index + t[0].length) : "";
  },
  bf = function (e, t, i) {
    return Vt(i, function (r) {
      return Pr(e, t, r);
    });
  },
  to = [].slice,
  Uu = function (e, t) {
    return (
      e &&
      Rt(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && Rt(e[0]))) &&
      !e.nodeType &&
      e !== Dt
    );
  },
  Cf = function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (r) {
        var n;
        return (Ee(r) && !t) || Uu(r, 1)
          ? (n = i).push.apply(n, rt(r))
          : i.push(r);
      }) || i
    );
  },
  rt = function (e, t, i) {
    return Ee(e) && !i && (Ws || !Vi())
      ? to.call((t || Vs).querySelectorAll(e), 0)
      : Ge(e)
      ? Cf(e, i)
      : Uu(e)
      ? to.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Ef = function (e) {
    return (
      (e = rt(e)[0] || fn("Invalid scope") || {}),
      function (t) {
        var i = e.current || e.nativeElement || e;
        return rt(
          t,
          i.querySelectorAll
            ? i
            : i === e
            ? fn("Invalid scope") || Vs.createElement("div")
            : e
        );
      }
    );
  },
  Wu = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Yu = function (e) {
    if (xe(e)) return e;
    var t = Rt(e) ? e : { each: e },
      i = Yi(t.ease),
      r = t.from || 0,
      n = parseFloat(t.base) || 0,
      o = {},
      a = r > 0 && r < 1,
      u = isNaN(r) || a,
      l = t.axis,
      c = r,
      p = r;
    return (
      Ee(r)
        ? (c = p = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && u && ((c = r[0]), (p = r[1])),
      function (f, h, g) {
        var d = (g || t).length,
          _ = o[d],
          m,
          b,
          w,
          C,
          x,
          v,
          E,
          T,
          P;
        if (!_) {
          if (((P = t.grid === "auto" ? 0 : (t.grid || [1, _t])[1]), !P)) {
            for (
              E = -_t;
              E < (E = g[P++].getBoundingClientRect().left) && P < d;

            );
            P--;
          }
          for (
            _ = o[d] = [],
              m = u ? Math.min(P, d) * c - 0.5 : r % P,
              b = u ? (d * p) / P - 0.5 : (r / P) | 0,
              E = 0,
              T = _t,
              v = 0;
            v < d;
            v++
          )
            (w = (v % P) - m),
              (C = b - ((v / P) | 0)),
              (_[v] = x = l ? Math.abs(l === "y" ? C : w) : xu(w * w + C * C)),
              x > E && (E = x),
              x < T && (T = x);
          r === "random" && Wu(_),
            (_.max = E - T),
            (_.min = T),
            (_.v = d =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (P > d
                    ? d - 1
                    : l
                    ? l === "y"
                      ? d / P
                      : P
                    : Math.max(P, d / P)) ||
                0) * (r === "edges" ? -1 : 1)),
            (_.b = d < 0 ? n - d : n),
            (_.u = Ke(t.amount || t.each) || 0),
            (i = i && d < 0 ? Vu(i) : i);
        }
        return (
          (d = (_[f] - _.min) / _.max || 0),
          Pe(_.b + (i ? i(d) : d) * _.v) + _.u
        );
      }
    );
  },
  io = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var r = Math.round(parseFloat(i) / e) * e * t;
      return (r - (r % 1)) / t + (jt(i) ? 0 : Ke(i));
    };
  },
  Gu = function (e, t) {
    var i = Ge(e),
      r,
      n;
    return (
      !i &&
        Rt(e) &&
        ((r = i = e.radius || _t),
        e.values
          ? ((e = rt(e.values)), (n = !jt(e[0])) && (r *= r))
          : (e = io(e.increment))),
      Vt(
        t,
        i
          ? xe(e)
            ? function (o) {
                return (n = e(o)), Math.abs(n - o) <= r ? n : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(n ? o.x : o),
                    u = parseFloat(n ? o.y : 0),
                    l = _t,
                    c = 0,
                    p = e.length,
                    f,
                    h;
                  p--;

                )
                  n
                    ? ((f = e[p].x - a), (h = e[p].y - u), (f = f * f + h * h))
                    : (f = Math.abs(e[p] - a)),
                    f < l && ((l = f), (c = p));
                return (
                  (c = !r || l <= r ? e[c] : o),
                  n || c === o || jt(o) ? c : c + Ke(o)
                );
              }
          : io(e)
      )
    );
  },
  $u = function (e, t, i, r) {
    return Vt(Ge(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
      return Ge(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  Tf = function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return function (r) {
      return t.reduce(function (n, o) {
        return o(n);
      }, r);
    };
  },
  Pf = function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || Ke(i));
    };
  },
  Sf = function (e, t, i) {
    return Qu(e, t, 0, 1, i);
  },
  Zu = function (e, t, i) {
    return Vt(i, function (r) {
      return e[~~t(r)];
    });
  },
  kf = function s(e, t, i) {
    var r = t - e;
    return Ge(e)
      ? Zu(e, s(0, e.length), t)
      : Vt(i, function (n) {
          return ((r + ((n - e) % r)) % r) + e;
        });
  },
  Ff = function s(e, t, i) {
    var r = t - e,
      n = r * 2;
    return Ge(e)
      ? Zu(e, s(0, e.length - 1), t)
      : Vt(i, function (o) {
          return (o = (n + ((o - e) % n)) % n || 0), e + (o > r ? n - o : o);
        });
  },
  kr = function (e) {
    for (var t = 0, i = "", r, n, o, a; ~(r = e.indexOf("random(", t)); )
      (o = e.indexOf(")", r)),
        (a = e.charAt(r + 7) === "["),
        (n = e.substr(r + 7, o - r - 7).match(a ? Tu : Xs)),
        (i +=
          e.substr(t, r - t) + $u(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
        (t = o + 1);
    return i + e.substr(t, e.length - t);
  },
  Qu = function (e, t, i, r, n) {
    var o = t - e,
      a = r - i;
    return Vt(n, function (u) {
      return i + (((u - e) / o) * a || 0);
    });
  },
  Af = function s(e, t, i, r) {
    var n = isNaN(e + t)
      ? 0
      : function (h) {
          return (1 - h) * e + h * t;
        };
    if (!n) {
      var o = Ee(e),
        a = {},
        u,
        l,
        c,
        p,
        f;
      if ((i === !0 && (r = 1) && (i = null), o))
        (e = { p: e }), (t = { p: t });
      else if (Ge(e) && !Ge(t)) {
        for (c = [], p = e.length, f = p - 2, l = 1; l < p; l++)
          c.push(s(e[l - 1], e[l]));
        p--,
          (n = function (g) {
            g *= p;
            var d = Math.min(f, ~~g);
            return c[d](g - d);
          }),
          (i = t);
      } else r || (e = Hi(Ge(e) ? [] : {}, e));
      if (!c) {
        for (u in t) ro.call(a, e, u, "get", t[u]);
        n = function (g) {
          return no(g, a) || (o ? e.p : e);
        };
      }
    }
    return Vt(i, n);
  },
  Ku = function (e, t, i) {
    var r = e.labels,
      n = _t,
      o,
      a,
      u;
    for (o in r)
      (a = r[o] - t),
        a < 0 == !!i && a && n > (a = Math.abs(a)) && ((u = o), (n = a));
    return u;
  },
  at = function (e, t, i) {
    var r = e.vars,
      n = r[t],
      o,
      a;
    if (!!n)
      return (
        (o = r[t + "Params"]),
        (a = r.callbackScope || e),
        i && Ut.length && dn(),
        o ? n.apply(a, o) : n.call(a)
      );
  },
  Fr = function (e) {
    return (
      Wt(e),
      e.scrollTrigger && e.scrollTrigger.kill(!1),
      e.progress() < 1 && at(e, "onInterrupt"),
      e
    );
  },
  Gi,
  Mf = function (e) {
    e = (!e.name && e.default) || e;
    var t = e.name,
      i = xe(e),
      r =
        t && !i && e.init
          ? function () {
              this._props = [];
            }
          : e,
      n = { init: Xi, render: no, add: ro, kill: Rf, modifier: jf, rawVars: 0 },
      o = { targetTest: 0, get: 0, getSetter: so, aliases: {}, register: 0 };
    if ((Vi(), e !== r)) {
      if (Qe[t]) return;
      nt(r, nt(Js(e, n), o)),
        Hi(r.prototype, Hi(n, Js(e, o))),
        (Qe[(r.prop = t)] = r),
        e.targetTest && (pn.push(r), (Gs[t] = 1)),
        (t =
          (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
          "Plugin");
    }
    ku(t, r), e.register && e.register(yt, r, He);
  },
  ne = 255,
  Ar = {
    aqua: [0, ne, ne],
    lime: [0, ne, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ne],
    navy: [0, 0, 128],
    white: [ne, ne, ne],
    olive: [128, 128, 0],
    yellow: [ne, ne, 0],
    orange: [ne, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ne, 0, 0],
    pink: [ne, 192, 203],
    cyan: [0, ne, ne],
    transparent: [ne, ne, ne, 0],
  },
  oo = function (e, t, i) {
    return (
      (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e),
      ((e * 6 < 1
        ? t + (i - t) * e * 6
        : e < 0.5
        ? i
        : e * 3 < 2
        ? t + (i - t) * (2 / 3 - e) * 6
        : t) *
        ne +
        0.5) |
        0
    );
  },
  Ju = function (e, t, i) {
    var r = e ? (jt(e) ? [e >> 16, (e >> 8) & ne, e & ne] : 0) : Ar.black,
      n,
      o,
      a,
      u,
      l,
      c,
      p,
      f,
      h,
      g;
    if (!r) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ar[e]))
        r = Ar[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((n = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              "#" +
              n +
              n +
              o +
              o +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & ne, r & ne, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & ne, e & ne]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((r = g = e.match(Xs)), !t))
          (u = (+r[0] % 360) / 360),
            (l = +r[1] / 100),
            (c = +r[2] / 100),
            (o = c <= 0.5 ? c * (l + 1) : c + l - c * l),
            (n = c * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = oo(u + 1 / 3, n, o)),
            (r[1] = oo(u, n, o)),
            (r[2] = oo(u - 1 / 3, n, o));
        else if (~e.indexOf("="))
          return (r = e.match(Cu)), i && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(Xs) || Ar.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !g &&
        ((n = r[0] / ne),
        (o = r[1] / ne),
        (a = r[2] / ne),
        (p = Math.max(n, o, a)),
        (f = Math.min(n, o, a)),
        (c = (p + f) / 2),
        p === f
          ? (u = l = 0)
          : ((h = p - f),
            (l = c > 0.5 ? h / (2 - p - f) : h / (p + f)),
            (u =
              p === n
                ? (o - a) / h + (o < a ? 6 : 0)
                : p === o
                ? (a - n) / h + 2
                : (n - o) / h + 4),
            (u *= 60)),
        (r[0] = ~~(u + 0.5)),
        (r[1] = ~~(l * 100 + 0.5)),
        (r[2] = ~~(c * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  el = function (e) {
    var t = [],
      i = [],
      r = -1;
    return (
      e.split(Yt).forEach(function (n) {
        var o = n.match(qi) || [];
        t.push.apply(t, o), i.push((r += o.length + 1));
      }),
      (t.c = i),
      t
    );
  },
  tl = function (e, t, i) {
    var r = "",
      n = (e + r).match(Yt),
      o = t ? "hsla(" : "rgba(",
      a = 0,
      u,
      l,
      c,
      p;
    if (!n) return e;
    if (
      ((n = n.map(function (f) {
        return (
          (f = Ju(f, t, 1)) &&
          o +
            (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) +
            ")"
        );
      })),
      i && ((c = el(e)), (u = i.c), u.join(r) !== c.c.join(r)))
    )
      for (l = e.replace(Yt, "1").split(qi), p = l.length - 1; a < p; a++)
        r +=
          l[a] +
          (~u.indexOf(a)
            ? n.shift() || o + "0,0,0,0)"
            : (c.length ? c : n.length ? n : i).shift());
    if (!l)
      for (l = e.split(Yt), p = l.length - 1; a < p; a++) r += l[a] + n[a];
    return r + l[p];
  },
  Yt = (function () {
    var s =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Ar) s += "|" + e + "\\b";
    return new RegExp(s + ")", "gi");
  })(),
  Of = /hsl[a]?\(/,
  il = function (e) {
    var t = e.join(" "),
      i;
    if (((Yt.lastIndex = 0), Yt.test(t)))
      return (
        (i = Of.test(t)),
        (e[1] = tl(e[1], i)),
        (e[0] = tl(e[0], i, el(e[1]))),
        !0
      );
  },
  Dn,
  ot = (function () {
    var s = Date.now,
      e = 500,
      t = 33,
      i = s(),
      r = i,
      n = 1e3 / 240,
      o = n,
      a = [],
      u,
      l,
      c,
      p,
      f,
      h,
      g = function d(_) {
        var m = s() - r,
          b = _ === !0,
          w,
          C,
          x,
          v;
        if (
          (m > e && (i += m - t),
          (r += m),
          (x = r - i),
          (w = x - o),
          (w > 0 || b) &&
            ((v = ++p.frame),
            (f = x - p.time * 1e3),
            (p.time = x = x / 1e3),
            (o += w + (w >= n ? 4 : n - w)),
            (C = 1)),
          b || (u = l(d)),
          C)
        )
          for (h = 0; h < a.length; h++) a[h](x, f, v, _);
      };
    return (
      (p = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0);
        },
        deltaRatio: function (_) {
          return f / (1e3 / (_ || 60));
        },
        wake: function () {
          Pu &&
            (!Ws &&
              wu() &&
              ((Dt = Ws = window),
              (Vs = Dt.document || {}),
              ($e.gsap = yt),
              (Dt.gsapVersions || (Dt.gsapVersions = [])).push(yt.version),
              Su(hn || Dt.GreenSockGlobals || (!Dt.gsap && Dt) || {}),
              (c = Dt.requestAnimationFrame)),
            u && p.sleep(),
            (l =
              c ||
              function (_) {
                return setTimeout(_, (o - p.time * 1e3 + 1) | 0);
              }),
            (Dn = 1),
            g(2));
        },
        sleep: function () {
          (c ? Dt.cancelAnimationFrame : clearTimeout)(u), (Dn = 0), (l = Xi);
        },
        lagSmoothing: function (_, m) {
          (e = _ || 1 / re), (t = Math.min(m, e, 0));
        },
        fps: function (_) {
          (n = 1e3 / (_ || 240)), (o = p.time * 1e3 + n);
        },
        add: function (_) {
          a.indexOf(_) < 0 && a.push(_), Vi();
        },
        remove: function (_) {
          var m;
          ~(m = a.indexOf(_)) && a.splice(m, 1) && h >= m && h--;
        },
        _listeners: a,
      }),
      p
    );
  })(),
  Vi = function () {
    return !Dn && ot.wake();
  },
  Se = {},
  Lf = /^[\d.\-M][\d.\-,\s]/,
  Bf = /["']/g,
  If = function (e) {
    for (
      var t = {},
        i = e.substr(1, e.length - 3).split(":"),
        r = i[0],
        n = 1,
        o = i.length,
        a,
        u,
        l;
      n < o;
      n++
    )
      (u = i[n]),
        (a = n !== o - 1 ? u.lastIndexOf(",") : u.length),
        (l = u.substr(0, a)),
        (t[r] = isNaN(l) ? l.replace(Bf, "").trim() : +l),
        (r = u.substr(a + 1).trim());
    return t;
  },
  zf = function (e) {
    var t = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      r = e.indexOf("(", t);
    return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
  },
  Nf = function (e) {
    var t = (e + "").split("("),
      i = Se[t[0]];
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [If(t[1])] : zf(e).split(",").map(Ou)
        )
      : Se._CE && Lf.test(e)
      ? Se._CE("", e)
      : i;
  },
  Vu = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  rl = function s(e, t) {
    for (var i = e._first, r; i; )
      i instanceof qe
        ? s(i, t)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== t &&
          (i.timeline
            ? s(i.timeline, t)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = t))),
        (i = i._next);
  },
  Yi = function (e, t) {
    return (e && (xe(e) ? e : Se[e] || Nf(e))) || t;
  },
  gi = function (e, t, i, r) {
    i === void 0 &&
      (i = function (u) {
        return 1 - t(1 - u);
      }),
      r === void 0 &&
        (r = function (u) {
          return u < 0.5 ? t(u * 2) / 2 : 1 - t((1 - u) * 2) / 2;
        });
    var n = { easeIn: t, easeOut: i, easeInOut: r },
      o;
    return (
      Ze(e, function (a) {
        (Se[a] = $e[a] = n), (Se[(o = a.toLowerCase())] = i);
        for (var u in n)
          Se[
            o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
          ] = Se[a + "." + u] = n[u];
      }),
      n
    );
  },
  nl = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  ao = function s(e, t, i) {
    var r = t >= 1 ? t : 1,
      n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (n / qs) * (Math.asin(1 / r) || 0),
      a = function (c) {
        return c === 1 ? 1 : r * Math.pow(2, -10 * c) * cf((c - o) * n) + 1;
      },
      u =
        e === "out"
          ? a
          : e === "in"
          ? function (l) {
              return 1 - a(1 - l);
            }
          : nl(a);
    return (
      (n = qs / n),
      (u.config = function (l, c) {
        return s(e, l, c);
      }),
      u
    );
  },
  uo = function s(e, t) {
    t === void 0 && (t = 1.70158);
    var i = function (o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
      },
      r =
        e === "out"
          ? i
          : e === "in"
          ? function (n) {
              return 1 - i(1 - n);
            }
          : nl(i);
    return (
      (r.config = function (n) {
        return s(e, n);
      }),
      r
    );
  };
Ze("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
  var t = e < 5 ? e + 1 : e;
  gi(
    s + ",Power" + (t - 1),
    e
      ? function (i) {
          return Math.pow(i, t);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, t);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, t) / 2
        : 1 - Math.pow((1 - i) * 2, t) / 2;
    }
  );
});
Se.Linear.easeNone = Se.none = Se.Linear.easeIn;
gi("Elastic", ao("in"), ao("out"), ao());
(function (s, e) {
  var t = 1 / e,
    i = 2 * t,
    r = 2.5 * t,
    n = function (a) {
      return a < t
        ? s * a * a
        : a < i
        ? s * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < r
        ? s * (a -= 2.25 / e) * a + 0.9375
        : s * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  gi(
    "Bounce",
    function (o) {
      return 1 - n(1 - o);
    },
    n
  );
})(7.5625, 2.75);
gi("Expo", function (s) {
  return s ? Math.pow(2, 10 * (s - 1)) : 0;
});
gi("Circ", function (s) {
  return -(xu(1 - s * s) - 1);
});
gi("Sine", function (s) {
  return s === 1 ? 1 : -lf(s * af) + 1;
});
gi("Back", uo("in"), uo("out"), uo());
Se.SteppedEase =
  Se.steps =
  $e.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          r = e + (t ? 0 : 1),
          n = t ? 1 : 0,
          o = 1 - re;
        return function (a) {
          return (((r * Pr(0, o, a)) | 0) + n) * i;
        };
      },
    };
Ni.ease = Se["quad.out"];
Ze(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (s) {
    return (Zs += s + "," + s + "Params,");
  }
);
var ju = function (e, t) {
    (this.id = uf++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Ru),
      (this.set = t ? t.getSetter : so);
  },
  jr = (function () {
    function s(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === Infinity ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        Wi(this, +t.duration, 1, 1),
        (this.data = t.data),
        Dn || ot.wake();
    }
    var e = s.prototype;
    return (
      (e.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (e.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Wi(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (i, r) {
        if ((Vi(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (zu(this, i), !n._dp || n.parent || Nu(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            xt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === re) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Mu(this, i, r)),
          this
        );
      }),
      (e.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Iu(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (e.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                Iu(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * n, r)
          : this._repeat
          ? Ui(this._tTime, n) + 1
          : 1;
      }),
      (e.timeScale = function (i) {
        if (!arguments.length) return this._rts === -re ? 0 : this._rts;
        if (this._rts === i) return this;
        var r =
          this.parent && this._ts ? mn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -re ? 0 : this._rts),
          mf(this.totalTime(Pr(-this._delay, this._tDur, r), !0)),
          _n(this),
          this
        );
      }),
      (e.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Vi(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== re &&
                      (this._tTime -= re)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && xt(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (i) {
        return (
          this._start +
          (Ne(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? mn(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (e.globalTime = function (i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
          (n = r._start + n / (r._ts || 1)), (r = r._dp);
        return n;
      }),
      (e.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === Infinity ? -2 : i), Xu(this))
          : this._repeat === -2
          ? Infinity
          : this._repeat;
      }),
      (e.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), Xu(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (e.seek = function (i, r) {
        return this.totalTime(st(this, i), Ne(r));
      }),
      (e.restart = function (i, r) {
        return this.play().totalTime(i ? -this._delay : 0, Ne(r));
      }),
      (e.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -re : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -re), this;
      }),
      (e.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (n = i.rawTime(!0)) >= r &&
            n < this.endTime(!0) - re)
        );
      }),
      (e.eventCallback = function (i, r, n) {
        var o = this.vars;
        return arguments.length > 1
          ? (r
              ? ((o[i] = r),
                n && (o[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r))
              : delete o[i],
            this)
          : o[i];
      }),
      (e.then = function (i) {
        var r = this;
        return new Promise(function (n) {
          var o = xe(i) ? i : Lu,
            a = function () {
              var l = r.then;
              (r.then = null),
                xe(o) && (o = o(r)) && (o.then || o === r) && (r.then = l),
                n(o),
                (r.then = l);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? a()
            : (r._prom = a);
        });
      }),
      (e.kill = function () {
        Fr(this);
      }),
      s
    );
  })();
nt(jr.prototype, {
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
  _zTime: -re,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var qe = (function (s) {
  yu(e, s);
  function e(i, r) {
    var n;
    return (
      i === void 0 && (i = {}),
      (n = s.call(this, i) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!i.smoothChildTiming),
      (n.autoRemoveChildren = !!i.autoRemoveChildren),
      (n._sort = Ne(i.sortChildren)),
      le && xt(i.parent || le, At(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && qu(At(n), i.scrollTrigger),
      n
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (r, n, o) {
      return Sr(0, arguments, this), this;
    }),
    (t.from = function (r, n, o) {
      return Sr(1, arguments, this), this;
    }),
    (t.fromTo = function (r, n, o, a) {
      return Sr(2, arguments, this), this;
    }),
    (t.set = function (r, n, o) {
      return (
        (n.duration = 0),
        (n.parent = this),
        Tr(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new we(r, n, st(this, o), 1),
        this
      );
    }),
    (t.call = function (r, n, o) {
      return xt(this, we.delayedCall(0, r, n), o);
    }),
    (t.staggerTo = function (r, n, o, a, u, l, c) {
      return (
        (o.duration = n),
        (o.stagger = o.stagger || a),
        (o.onComplete = l),
        (o.onCompleteParams = c),
        (o.parent = this),
        new we(r, o, st(this, u)),
        this
      );
    }),
    (t.staggerFrom = function (r, n, o, a, u, l, c) {
      return (
        (o.runBackwards = 1),
        (Tr(o).immediateRender = Ne(o.immediateRender)),
        this.staggerTo(r, n, o, a, u, l, c)
      );
    }),
    (t.staggerFromTo = function (r, n, o, a, u, l, c, p) {
      return (
        (a.startAt = o),
        (Tr(a).immediateRender = Ne(a.immediateRender)),
        this.staggerTo(r, n, a, u, l, c, p)
      );
    }),
    (t.render = function (r, n, o) {
      var a = this._time,
        u = this._dirty ? this.totalDuration() : this._tDur,
        l = this._dur,
        c = r <= 0 ? 0 : Pe(r),
        p = this._zTime < 0 != r < 0 && (this._initted || !l),
        f,
        h,
        g,
        d,
        _,
        m,
        b,
        w,
        C,
        x,
        v,
        E;
      if (
        (this !== le && c > u && r >= 0 && (c = u), c !== this._tTime || o || p)
      ) {
        if (
          (a !== this._time &&
            l &&
            ((c += this._time - a), (r += this._time - a)),
          (f = c),
          (C = this._start),
          (w = this._ts),
          (m = !w),
          p && (l || (a = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((v = this._yoyo),
            (_ = l + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(_ * 100 + r, n, o);
          if (
            ((f = Pe(c % _)),
            c === u
              ? ((d = this._repeat), (f = l))
              : ((d = ~~(c / _)),
                d && d === c / _ && ((f = l), d--),
                f > l && (f = l)),
            (x = Ui(this._tTime, _)),
            !a && this._tTime && x !== d && (x = d),
            v && d & 1 && ((f = l - f), (E = 1)),
            d !== x && !this._lock)
          ) {
            var T = v && x & 1,
              P = T === (v && d & 1);
            if (
              (d < x && (T = !T),
              (a = T ? 0 : l),
              (this._lock = 1),
              (this.render(a || (E ? 0 : Pe(d * _)), n, !l)._lock = 0),
              (this._tTime = c),
              !n && this.parent && at(this, "onRepeat"),
              this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                m !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((l = this._dur),
              (u = this._tDur),
              P &&
                ((this._lock = 2),
                (a = T ? l : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !E && this.invalidate()),
              (this._lock = 0),
              !this._ts && !m)
            )
              return this;
            rl(this, E);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((b = wf(this, Pe(a), Pe(f))), b && (c -= f - (f = b._start))),
          (this._tTime = c),
          (this._time = f),
          (this._act = !w),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && f && !n && (at(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (f >= a && r >= 0)
          for (h = this._first; h; ) {
            if (
              ((g = h._next), (h._act || f >= h._start) && h._ts && b !== h)
            ) {
              if (h.parent !== this) return this.render(r, n, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (f - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (f - h._start) * h._ts,
                  n,
                  o
                ),
                f !== this._time || (!this._ts && !m))
              ) {
                (b = 0), g && (c += this._zTime = -re);
                break;
              }
            }
            h = g;
          }
        else {
          h = this._last;
          for (var k = r < 0 ? r : f; h; ) {
            if (((g = h._prev), (h._act || k <= h._end) && h._ts && b !== h)) {
              if (h.parent !== this) return this.render(r, n, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (k - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (k - h._start) * h._ts,
                  n,
                  o
                ),
                f !== this._time || (!this._ts && !m))
              ) {
                (b = 0), g && (c += this._zTime = k ? -re : re);
                break;
              }
            }
            h = g;
          }
        }
        if (
          b &&
          !n &&
          (this.pause(),
          (b.render(f >= a ? 0 : -re)._zTime = f >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = C), _n(this), this.render(r, n, o);
        this._onUpdate && !n && at(this, "onUpdate", !0),
          ((c === u && u >= this.totalDuration()) || (!c && a)) &&
            (C === this._start || Math.abs(w) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !l) &&
                ((c === u && this._ts > 0) || (!c && this._ts < 0)) &&
                Wt(this, 1),
              !n &&
                !(r < 0 && !a) &&
                (c || a || !u) &&
                (at(
                  this,
                  c === u && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < u && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (r, n) {
      var o = this;
      if ((jt(n) || (n = st(this, n, r)), !(r instanceof jr))) {
        if (Ge(r))
          return (
            r.forEach(function (a) {
              return o.add(a, n);
            }),
            this
          );
        if (Ee(r)) return this.addLabel(r, n);
        if (xe(r)) r = we.delayedCall(0, r);
        else return this;
      }
      return this !== r ? xt(this, r, n) : this;
    }),
    (t.getChildren = function (r, n, o, a) {
      r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -_t);
      for (var u = [], l = this._first; l; )
        l._start >= a &&
          (l instanceof we
            ? n && u.push(l)
            : (o && u.push(l), r && u.push.apply(u, l.getChildren(!0, n, o)))),
          (l = l._next);
      return u;
    }),
    (t.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
        if (n[o].vars.id === r) return n[o];
    }),
    (t.remove = function (r) {
      return Ee(r)
        ? this.removeLabel(r)
        : xe(r)
        ? this.killTweensOf(r)
        : (gn(this, r),
          r === this._recent && (this._recent = this._last),
          di(this));
    }),
    (t.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Pe(
              ot.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          s.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (r, n) {
      return (this.labels[r] = st(this, n)), this;
    }),
    (t.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (t.addPause = function (r, n, o) {
      var a = we.delayedCall(0, n || Xi, o);
      return (
        (a.data = "isPause"), (this._hasPause = 1), xt(this, a, st(this, r))
      );
    }),
    (t.removePause = function (r) {
      var n = this._first;
      for (r = st(this, r); n; )
        n._start === r && n.data === "isPause" && Wt(n), (n = n._next);
    }),
    (t.killTweensOf = function (r, n, o) {
      for (var a = this.getTweensOf(r, o), u = a.length; u--; )
        Gt !== a[u] && a[u].kill(r, n);
      return this;
    }),
    (t.getTweensOf = function (r, n) {
      for (var o = [], a = rt(r), u = this._first, l = jt(n), c; u; )
        u instanceof we
          ? ff(u._targets, a) &&
            (l
              ? (!Gt || (u._initted && u._ts)) &&
                u.globalTime(0) <= n &&
                u.globalTime(u.totalDuration()) > n
              : !n || u.isActive()) &&
            o.push(u)
          : (c = u.getTweensOf(a, n)).length && o.push.apply(o, c),
          (u = u._next);
      return o;
    }),
    (t.tweenTo = function (r, n) {
      n = n || {};
      var o = this,
        a = st(o, r),
        u = n,
        l = u.startAt,
        c = u.onStart,
        p = u.onStartParams,
        f = u.immediateRender,
        h,
        g = we.to(
          o,
          nt(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (a - (l && "time" in l ? l.time : o._time)) / o.timeScale()
                ) ||
                re,
              onStart: function () {
                if ((o.pause(), !h)) {
                  var _ =
                    n.duration ||
                    Math.abs(
                      (a - (l && "time" in l ? l.time : o._time)) /
                        o.timeScale()
                    );
                  g._dur !== _ && Wi(g, _, 0, 1).render(g._time, !0, !0),
                    (h = 1);
                }
                c && c.apply(g, p || []);
              },
            },
            n
          )
        );
      return f ? g.render(0) : g;
    }),
    (t.tweenFromTo = function (r, n, o) {
      return this.tweenTo(n, nt({ startAt: { time: st(this, r) } }, o));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Ku(this, st(this, r));
    }),
    (t.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Ku(this, st(this, r), 1);
    }),
    (t.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + re);
    }),
    (t.shiftChildren = function (r, n, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, u = this.labels, l; a; )
        a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
      if (n) for (l in u) u[l] >= o && (u[l] += r);
      return di(this);
    }),
    (t.invalidate = function () {
      var r = this._first;
      for (this._lock = 0; r; ) r.invalidate(), (r = r._next);
      return s.prototype.invalidate.call(this);
    }),
    (t.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, o; n; ) (o = n._next), this.remove(n), (n = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        di(this)
      );
    }),
    (t.totalDuration = function (r) {
      var n = 0,
        o = this,
        a = o._last,
        u = _t,
        l,
        c,
        p;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r)
        );
      if (o._dirty) {
        for (p = o.parent; a; )
          (l = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > u && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (xt(o, a, c - a._delay, 1)._lock = 0))
              : (u = c),
            c < 0 &&
              a._ts &&
              ((n -= c),
              ((!p && !o._dp) || (p && p.smoothChildTiming)) &&
                ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
              o.shiftChildren(-c, !1, -Infinity),
              (u = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = l);
        Wi(o, o === le && o._time > n ? o._time : n, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (r) {
      if ((le._ts && (Mu(le, mn(r, le)), (Fu = ot.frame)), ot.frame >= Au)) {
        Au += ze.autoSleep || 120;
        var n = le._first;
        if ((!n || !n._ts) && ze.autoSleep && ot._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || ot.sleep();
        }
      }
    }),
    e
  );
})(jr);
nt(qe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var qf = function (e, t, i, r, n, o, a) {
    var u = new He(this._pt, e, t, 0, 1, sl, null, n),
      l = 0,
      c = 0,
      p,
      f,
      h,
      g,
      d,
      _,
      m,
      b;
    for (
      u.b = i,
        u.e = r,
        i += "",
        r += "",
        (m = ~r.indexOf("random(")) && (r = kr(r)),
        o && ((b = [i, r]), o(b, e, t), (i = b[0]), (r = b[1])),
        f = i.match(Us) || [];
      (p = Us.exec(r));

    )
      (g = p[0]),
        (d = r.substring(l, p.index)),
        h ? (h = (h + 1) % 5) : d.substr(-5) === "rgba(" && (h = 1),
        g !== f[c++] &&
          ((_ = parseFloat(f[c - 1]) || 0),
          (u._pt = {
            _next: u._pt,
            p: d || c === 1 ? d : ",",
            s: _,
            c:
              g.charAt(1) === "="
                ? parseFloat(g.substr(2)) * (g.charAt(0) === "-" ? -1 : 1)
                : parseFloat(g) - _,
            m: h && h < 4 ? Math.round : 0,
          }),
          (l = Us.lastIndex));
    return (
      (u.c = l < r.length ? r.substring(l, r.length) : ""),
      (u.fp = a),
      (Eu.test(r) || m) && (u.e = 0),
      (this._pt = u),
      u
    );
  },
  ro = function (e, t, i, r, n, o, a, u, l) {
    xe(r) && (r = r(n || 0, e, o));
    var c = e[t],
      p =
        i !== "get"
          ? i
          : xe(c)
          ? l
            ? e[
                t.indexOf("set") || !xe(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](l)
            : e[t]()
          : c,
      f = xe(c) ? (l ? Hf : ol) : lo,
      h;
    if (
      (Ee(r) &&
        (~r.indexOf("random(") && (r = kr(r)),
        r.charAt(1) === "=" &&
          ((h =
            parseFloat(p) +
            parseFloat(r.substr(2)) * (r.charAt(0) === "-" ? -1 : 1) +
            (Ke(p) || 0)),
          (h || h === 0) && (r = h))),
      p !== r)
    )
      return !isNaN(p * r) && r !== ""
        ? ((h = new He(
            this._pt,
            e,
            t,
            +p || 0,
            r - (p || 0),
            typeof c == "boolean" ? Xf : al,
            0,
            f
          )),
          l && (h.fp = l),
          a && h.modifier(a, this, e),
          (this._pt = h))
        : (!c && !(t in e) && Ys(t, r),
          qf.call(this, e, t, p, r, f, u || ze.stringFilter, l));
  },
  Uf = function (e, t, i, r, n) {
    if (
      (xe(e) && (e = Rr(e, n, t, i, r)),
      !Rt(e) || (e.style && e.nodeType) || Ge(e) || bu(e))
    )
      return Ee(e) ? Rr(e, n, t, i, r) : e;
    var o = {},
      a;
    for (a in e) o[a] = Rr(e[a], n, t, i, r);
    return o;
  },
  ul = function (e, t, i, r, n, o) {
    var a, u, l, c;
    if (
      Qe[e] &&
      (a = new Qe[e]()).init(
        n,
        a.rawVars ? t[e] : Uf(t[e], r, n, o, i),
        i,
        r,
        o
      ) !== !1 &&
      ((i._pt = u = new He(i._pt, n, e, 0, 1, a.render, a, 0, a.priority)),
      i !== Gi)
    )
      for (l = i._ptLookup[i._targets.indexOf(n)], c = a._props.length; c--; )
        l[a._props[c]] = u;
    return a;
  },
  Gt,
  Df = function s(e, t) {
    var i = e.vars,
      r = i.ease,
      n = i.startAt,
      o = i.immediateRender,
      a = i.lazy,
      u = i.onUpdate,
      l = i.onUpdateParams,
      c = i.callbackScope,
      p = i.runBackwards,
      f = i.yoyoEase,
      h = i.keyframes,
      g = i.autoRevert,
      d = e._dur,
      _ = e._startAt,
      m = e._targets,
      b = e.parent,
      w = b && b.data === "nested" ? b.parent._targets : m,
      C = e._overwrite === "auto" && !Ns,
      x = e.timeline,
      v,
      E,
      T,
      P,
      k,
      R,
      A,
      j,
      z,
      H,
      O,
      N,
      G;
    if (
      (x && (!h || !r) && (r = "none"),
      (e._ease = Yi(r, Ni.ease)),
      (e._yEase = f ? Vu(Yi(f === !0 ? r : f, Ni.ease)) : 0),
      f &&
        e._yoyo &&
        !e._repeat &&
        ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
      (e._from = !x && !!i.runBackwards),
      !x)
    ) {
      if (
        ((j = m[0] ? pi(m[0]).harness : 0),
        (N = j && i[j.prop]),
        (v = Js(i, Gs)),
        _ && _.render(-1, !0).kill(),
        n)
      )
        if (
          (Wt(
            (e._startAt = we.set(
              m,
              nt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: b,
                  immediateRender: !0,
                  lazy: Ne(a),
                  startAt: null,
                  delay: 0,
                  onUpdate: u,
                  onUpdateParams: l,
                  callbackScope: c,
                  stagger: 0,
                },
                n
              )
            ))
          ),
          t < 0 && !o && !g && e._startAt.render(-1, !0),
          o)
        ) {
          if ((t > 0 && !g && (e._startAt = 0), d && t <= 0)) {
            t && (e._zTime = t);
            return;
          }
        } else g === !1 && (e._startAt = 0);
      else if (p && d) {
        if (_) !g && (e._startAt = 0);
        else if (
          (t && (o = !1),
          (T = nt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && Ne(a),
              immediateRender: o,
              stagger: 0,
              parent: b,
            },
            v
          )),
          N && (T[j.prop] = N),
          Wt((e._startAt = we.set(m, T))),
          t < 0 && e._startAt.render(-1, !0),
          !o)
        )
          s(e._startAt, re);
        else if (!t) return;
      }
      for (e._pt = 0, a = (d && Ne(a)) || (a && !d), E = 0; E < m.length; E++) {
        if (
          ((k = m[E]),
          (A = k._gsap || Ks(m)[E]._gsap),
          (e._ptLookup[E] = H = {}),
          $s[A.id] && Ut.length && dn(),
          (O = w === m ? E : w.indexOf(k)),
          j &&
            (z = new j()).init(k, N || v, e, O, w) !== !1 &&
            ((e._pt = P =
              new He(e._pt, k, z.name, 0, 1, z.render, z, 0, z.priority)),
            z._props.forEach(function (F) {
              H[F] = P;
            }),
            z.priority && (R = 1)),
          !j || N)
        )
          for (T in v)
            Qe[T] && (z = ul(T, v, e, O, k, w))
              ? z.priority && (R = 1)
              : (H[T] = P =
                  ro.call(e, k, T, "get", v[T], O, w, 0, i.stringFilter));
        e._op && e._op[E] && e.kill(k, e._op[E]),
          C &&
            e._pt &&
            ((Gt = e),
            le.killTweensOf(k, H, e.globalTime(t)),
            (G = !e.parent),
            (Gt = 0)),
          e._pt && a && ($s[A.id] = 1);
      }
      R && ll(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u), (e._initted = (!e._op || e._pt) && !G);
  },
  Wf = function (e, t) {
    var i = e[0] ? pi(e[0]).harness : 0,
      r = i && i.aliases,
      n,
      o,
      a,
      u;
    if (!r) return t;
    n = Hi({}, t);
    for (o in r)
      if (o in n) for (u = r[o].split(","), a = u.length; a--; ) n[u[a]] = n[o];
    return n;
  },
  Rr = function (e, t, i, r, n) {
    return xe(e)
      ? e.call(t, i, r, n)
      : Ee(e) && ~e.indexOf("random(")
      ? kr(e)
      : e;
  },
  cl = Zs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
  Vf = (cl + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
  we = (function (s) {
    yu(e, s);
    function e(i, r, n, o) {
      var a;
      typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
        (a = s.call(this, o ? r : Tr(r)) || this);
      var u = a.vars,
        l = u.duration,
        c = u.delay,
        p = u.immediateRender,
        f = u.stagger,
        h = u.overwrite,
        g = u.keyframes,
        d = u.defaults,
        _ = u.scrollTrigger,
        m = u.yoyoEase,
        b = r.parent || le,
        w = (Ge(i) || bu(i) ? jt(i[0]) : "length" in r) ? [i] : rt(i),
        C,
        x,
        v,
        E,
        T,
        P,
        k,
        R;
      if (
        ((a._targets = w.length
          ? Ks(w)
          : fn(
              "GSAP target " + i + " not found. https://greensock.com",
              !ze.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = h),
        g || f || vu(l) || vu(c))
      ) {
        if (
          ((r = a.vars),
          (C = a.timeline = new qe({ data: "nested", defaults: d || {} })),
          C.kill(),
          (C.parent = C._dp = At(a)),
          (C._start = 0),
          g)
        )
          Tr(nt(C.vars.defaults, { ease: "none" })),
            f
              ? w.forEach(function (A, j) {
                  return g.forEach(function (z, H) {
                    return C.to(A, z, H ? ">" : j * f);
                  });
                })
              : g.forEach(function (A) {
                  return C.to(w, A, ">");
                });
        else {
          if (((E = w.length), (k = f ? Yu(f) : Xi), Rt(f)))
            for (T in f) ~cl.indexOf(T) && (R || (R = {}), (R[T] = f[T]));
          for (x = 0; x < E; x++) {
            v = {};
            for (T in r) Vf.indexOf(T) < 0 && (v[T] = r[T]);
            (v.stagger = 0),
              m && (v.yoyoEase = m),
              R && Hi(v, R),
              (P = w[x]),
              (v.duration = +Rr(l, At(a), x, P, w)),
              (v.delay = (+Rr(c, At(a), x, P, w) || 0) - a._delay),
              !f &&
                E === 1 &&
                v.delay &&
                ((a._delay = c = v.delay), (a._start += c), (v.delay = 0)),
              C.to(P, v, k(x, P, w));
          }
          C.duration() ? (l = c = 0) : (a.timeline = 0);
        }
        l || a.duration((l = C.duration()));
      } else a.timeline = 0;
      return (
        h === !0 && !Ns && ((Gt = At(a)), le.killTweensOf(w), (Gt = 0)),
        xt(b, At(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (p ||
          (!l &&
            !g &&
            a._start === Pe(b._time) &&
            Ne(p) &&
            _f(At(a)) &&
            b.data !== "nested")) &&
          ((a._tTime = -re), a.render(Math.max(0, -c))),
        _ && qu(At(a), _),
        a
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, n, o) {
        var a = this._time,
          u = this._tDur,
          l = this._dur,
          c = r > u - re && r >= 0 ? u : r < re ? 0 : r,
          p,
          f,
          h,
          g,
          d,
          _,
          m,
          b,
          w;
        if (!l) xf(this, r, n, o);
        else if (
          c !== this._tTime ||
          !r ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 != r < 0)
        ) {
          if (((p = c), (b = this.timeline), this._repeat)) {
            if (((g = l + this._rDelay), this._repeat < -1 && r < 0))
              return this.totalTime(g * 100 + r, n, o);
            if (
              ((p = Pe(c % g)),
              c === u
                ? ((h = this._repeat), (p = l))
                : ((h = ~~(c / g)),
                  h && h === c / g && ((p = l), h--),
                  p > l && (p = l)),
              (_ = this._yoyo && h & 1),
              _ && ((w = this._yEase), (p = l - p)),
              (d = Ui(this._tTime, g)),
              p === a && !o && this._initted)
            )
              return this;
            h !== d &&
              (b && this._yEase && rl(b, _),
              this.vars.repeatRefresh &&
                !_ &&
                !this._lock &&
                ((this._lock = o = 1),
                (this.render(Pe(g * h), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Hu(this, r < 0 ? r : p, o, n)) return (this._tTime = 0), this;
            if (l !== this._dur) return this.render(r, n, o);
          }
          if (
            ((this._tTime = c),
            (this._time = p),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = m = (w || this._ease)(p / l)),
            this._from && (this.ratio = m = 1 - m),
            p && !a && !n && (at(this, "onStart"), this._tTime !== c))
          )
            return this;
          for (f = this._pt; f; ) f.r(m, f.d), (f = f._next);
          (b && b.render(r < 0 ? r : !p && _ ? -re : b._dur * m, n, o)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !n &&
              (r < 0 && this._startAt && this._startAt.render(r, !0, o),
              at(this, "onUpdate")),
            this._repeat &&
              h !== d &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              at(this, "onRepeat"),
            (c === this._tDur || !c) &&
              this._tTime === c &&
              (r < 0 &&
                this._startAt &&
                !this._onUpdate &&
                this._startAt.render(r, !0, !0),
              (r || !l) &&
                ((c === this._tDur && this._ts > 0) || (!c && this._ts < 0)) &&
                Wt(this, 1),
              !n &&
                !(r < 0 && !a) &&
                (c || a) &&
                (at(this, c === u ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(c < u && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function () {
        return (
          (this._pt =
            this._op =
            this._startAt =
            this._onUpdate =
            this._lazy =
            this.ratio =
              0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(),
          s.prototype.invalidate.call(this)
        );
      }),
      (t.kill = function (r, n) {
        if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
          return (this._lazy = this._pt = 0), this.parent ? Fr(this) : this;
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, n, Gt && Gt.vars.overwrite !== !0)
              ._first || Fr(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              Wi(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          u = r ? rt(r) : a,
          l = this._ptLookup,
          c = this._pt,
          p,
          f,
          h,
          g,
          d,
          _,
          m;
        if ((!n || n === "all") && df(a, u))
          return n === "all" && (this._pt = 0), Fr(this);
        for (
          p = this._op = this._op || [],
            n !== "all" &&
              (Ee(n) &&
                ((d = {}),
                Ze(n, function (b) {
                  return (d[b] = 1);
                }),
                (n = d)),
              (n = Wf(a, n))),
            m = a.length;
          m--;

        )
          if (~u.indexOf(a[m])) {
            (f = l[m]),
              n === "all"
                ? ((p[m] = n), (g = f), (h = {}))
                : ((h = p[m] = p[m] || {}), (g = n));
            for (d in g)
              (_ = f && f[d]),
                _ &&
                  ((!("kill" in _.d) || _.d.kill(d) === !0) &&
                    gn(this, _, "_pt"),
                  delete f[d]),
                h !== "all" && (h[d] = 1);
          }
        return this._initted && !this._pt && c && Fr(this), this;
      }),
      (e.to = function (r, n) {
        return new e(r, n, arguments[2]);
      }),
      (e.from = function (r, n) {
        return Sr(1, arguments);
      }),
      (e.delayedCall = function (r, n, o, a) {
        return new e(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (e.fromTo = function (r, n, o) {
        return Sr(2, arguments);
      }),
      (e.set = function (r, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
      }),
      (e.killTweensOf = function (r, n, o) {
        return le.killTweensOf(r, n, o);
      }),
      e
    );
  })(jr);
nt(we.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Ze("staggerTo,staggerFrom,staggerFromTo", function (s) {
  we[s] = function () {
    var e = new qe(),
      t = to.call(arguments, 0);
    return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
  };
});
var lo = function (e, t, i) {
    return (e[t] = i);
  },
  ol = function (e, t, i) {
    return e[t](i);
  },
  Hf = function (e, t, i, r) {
    return e[t](r.fp, i);
  },
  Yf = function (e, t, i) {
    return e.setAttribute(t, i);
  },
  so = function (e, t) {
    return xe(e[t]) ? ol : Hs(e[t]) && e.setAttribute ? Yf : lo;
  },
  al = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  Xf = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  sl = function (e, t) {
    var i = t._pt,
      r = "";
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  no = function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
  },
  jf = function (e, t, i, r) {
    for (var n = this._pt, o; n; )
      (o = n._next), n.p === r && n.modifier(e, t, i), (n = o);
  },
  Rf = function (e) {
    for (var t = this._pt, i, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? gn(this, t, "_pt")
          : t.dep || (i = 1),
        (t = r);
    return !i;
  },
  Gf = function (e, t, i, r) {
    r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
  },
  ll = function (e) {
    for (var t = e._pt, i, r, n, o; t; ) {
      for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (n = t),
        (t._next = r) ? (r._prev = t) : (o = t),
        (t = i);
    }
    e._pt = n;
  },
  He = (function () {
    function s(t, i, r, n, o, a, u, l, c) {
      (this.t = i),
        (this.s = n),
        (this.c = o),
        (this.p = r),
        (this.r = a || al),
        (this.d = u || this),
        (this.set = l || lo),
        (this.pr = c || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = s.prototype;
    return (
      (e.modifier = function (i, r, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = Gf),
          (this.m = i),
          (this.mt = n),
          (this.tween = r);
      }),
      s
    );
  })();
Ze(
  Zs +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (s) {
    return (Gs[s] = 1);
  }
);
$e.TweenMax = $e.TweenLite = we;
$e.TimelineLite = $e.TimelineMax = qe;
le = new qe({
  sortChildren: !1,
  defaults: Ni,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
ze.stringFilter = il;
var yn = {
  registerPlugin: function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    t.forEach(function (r) {
      return Mf(r);
    });
  },
  timeline: function (e) {
    return new qe(e);
  },
  getTweensOf: function (e, t) {
    return le.getTweensOf(e, t);
  },
  getProperty: function (e, t, i, r) {
    Ee(e) && (e = rt(e)[0]);
    var n = pi(e || {}).get,
      o = i ? Lu : Ou;
    return (
      i === "native" && (i = ""),
      e &&
        (t
          ? o(((Qe[t] && Qe[t].get) || n)(e, t, i, r))
          : function (a, u, l) {
              return o(((Qe[a] && Qe[a].get) || n)(e, a, u, l));
            })
    );
  },
  quickSetter: function (e, t, i) {
    if (((e = rt(e)), e.length > 1)) {
      var r = e.map(function (c) {
          return yt.quickSetter(c, t, i);
        }),
        n = r.length;
      return function (c) {
        for (var p = n; p--; ) r[p](c);
      };
    }
    e = e[0] || {};
    var o = Qe[t],
      a = pi(e),
      u = (a.harness && (a.harness.aliases || {})[t]) || t,
      l = o
        ? function (c) {
            var p = new o();
            (Gi._pt = 0),
              p.init(e, i ? c + i : c, Gi, 0, [e]),
              p.render(1, p),
              Gi._pt && no(1, Gi);
          }
        : a.set(e, u);
    return o
      ? l
      : function (c) {
          return l(e, u, i ? c + i : c, a, 1);
        };
  },
  isTweening: function (e) {
    return le.getTweensOf(e, !0).length > 0;
  },
  defaults: function (e) {
    return e && e.ease && (e.ease = Yi(e.ease, Ni.ease)), Bu(Ni, e || {});
  },
  config: function (e) {
    return Bu(ze, e || {});
  },
  registerEffect: function (e) {
    var t = e.name,
      i = e.effect,
      r = e.plugins,
      n = e.defaults,
      o = e.extendTimeline;
    (r || "").split(",").forEach(function (a) {
      return (
        a && !Qe[a] && !$e[a] && fn(t + " effect requires " + a + " plugin.")
      );
    }),
      (Qs[t] = function (a, u, l) {
        return i(rt(a), nt(u || {}, n), l);
      }),
      o &&
        (qe.prototype[t] = function (a, u, l) {
          return this.add(Qs[t](a, Rt(u) ? u : (l = u) && {}, this), l);
        });
  },
  registerEase: function (e, t) {
    Se[e] = Yi(t);
  },
  parseEase: function (e, t) {
    return arguments.length ? Yi(e, t) : Se;
  },
  getById: function (e) {
    return le.getById(e);
  },
  exportRoot: function (e, t) {
    e === void 0 && (e = {});
    var i = new qe(e),
      r,
      n;
    for (
      i.smoothChildTiming = Ne(e.smoothChildTiming),
        le.remove(i),
        i._dp = 0,
        i._time = i._tTime = le._time,
        r = le._first;
      r;

    )
      (n = r._next),
        (t ||
          !(
            !r._dur &&
            r instanceof we &&
            r.vars.onComplete === r._targets[0]
          )) &&
          xt(i, r, r._start - r._delay),
        (r = n);
    return xt(le, i, 0), i;
  },
  utils: {
    wrap: kf,
    wrapYoyo: Ff,
    distribute: Yu,
    random: $u,
    snap: Gu,
    normalize: Sf,
    getUnit: Ke,
    clamp: bf,
    splitColor: Ju,
    toArray: rt,
    selector: Ef,
    mapRange: Qu,
    pipe: Tf,
    unitize: Pf,
    interpolate: Af,
    shuffle: Wu,
  },
  install: Su,
  effects: Qs,
  ticker: ot,
  updateRoot: qe.updateRoot,
  plugins: Qe,
  globalTimeline: le,
  core: {
    PropTween: He,
    globals: ku,
    Tween: we,
    Timeline: qe,
    Animation: jr,
    getCache: pi,
    _removeLinkedListItem: gn,
    suppressOverwrites: function (e) {
      return (Ns = e);
    },
  },
};
Ze("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
  return (yn[s] = we[s]);
});
ot.add(qe.updateRoot);
Gi = yn.to({}, { duration: 0 });
var $f = function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next;
    return i;
  },
  Qf = function (e, t) {
    var i = e._targets,
      r,
      n,
      o;
    for (r in t)
      for (n = i.length; n--; )
        (o = e._ptLookup[n][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = $f(o, r)),
            o && o.modifier && o.modifier(t[r], e, i[n], r));
  },
  co = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (r, n, o) {
        o._onInit = function (a) {
          var u, l;
          if (
            (Ee(n) &&
              ((u = {}),
              Ze(n, function (c) {
                return (u[c] = 1);
              }),
              (n = u)),
            t)
          ) {
            u = {};
            for (l in n) u[l] = t(n[l]);
            n = u;
          }
          Qf(a, n);
        };
      },
    };
  },
  yt =
    yn.registerPlugin(
      {
        name: "attr",
        init: function (e, t, i, r, n) {
          var o, a;
          for (o in t)
            (a = this.add(
              e,
              "setAttribute",
              (e.getAttribute(o) || 0) + "",
              t[o],
              r,
              n,
              0,
              0,
              o
            )),
              a && (a.op = o),
              this._props.push(o);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var i = t.length; i--; ) this.add(e, i, e[i] || 0, t[i]);
        },
      },
      co("roundProps", io),
      co("modifiers"),
      co("snap", Gu)
    ) || yn;
we.version = qe.version = yt.version = "3.8.0";
Pu = 1;
wu() && Vi();
var hl,
  $t,
  $i,
  ho,
  mi,
  fl,
  Zf = function () {
    return typeof window != "undefined";
  },
  Qt = {},
  _i = 180 / Math.PI,
  Qi = Math.PI / 180,
  Zi = Math.atan2,
  pl = 1e8,
  dl = /([A-Z])/g,
  Kf = /(?:left|right|width|margin|padding|x)/i,
  Jf = /[\s,\(]\S/,
  Zt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  gl = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  ep = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  tp = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  ip = function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  ml = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  _l = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  rp = function (e, t, i) {
    return (e.style[t] = i);
  },
  np = function (e, t, i) {
    return e.style.setProperty(t, i);
  },
  sp = function (e, t, i) {
    return (e._gsap[t] = i);
  },
  op = function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  },
  ap = function (e, t, i, r, n) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = i), o.renderTransform(n, o);
  },
  up = function (e, t, i, r, n) {
    var o = e._gsap;
    (o[t] = i), o.renderTransform(n, o);
  },
  Te = "transform",
  Kt = Te + "Origin",
  Dl,
  fo = function (e, t) {
    var i = $t.createElementNS
      ? $t.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : $t.createElement(e);
    return i.style ? i : $t.createElement(e);
  },
  Mt = function s(e, t, i) {
    var r = getComputedStyle(e);
    return (
      r[t] ||
      r.getPropertyValue(t.replace(dl, "-$1").toLowerCase()) ||
      r.getPropertyValue(t) ||
      (!i && s(e, Ki(t) || t, 1)) ||
      ""
    );
  },
  yl = "O,Moz,ms,Ms,Webkit".split(","),
  Ki = function (e, t, i) {
    var r = t || mi,
      n = r.style,
      o = 5;
    if (e in n && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(yl[o] + e in n);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? yl[o] : "") + e;
  },
  po = function () {
    Zf() &&
      window.document &&
      ((hl = window),
      ($t = hl.document),
      ($i = $t.documentElement),
      (mi = fo("div") || { style: {} }),
      fo("div"),
      (Te = Ki(Te)),
      (Kt = Te + "Origin"),
      (mi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Dl = !!Ki("perspective")),
      (ho = 1));
  },
  go = function s(e) {
    var t = fo(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      r = this.nextSibling,
      n = this.style.cssText,
      o;
    if (
      ($i.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (o = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = s);
      } catch (a) {}
    else this._gsapBBox && (o = this._gsapBBox());
    return (
      i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
      $i.removeChild(t),
      (this.style.cssText = n),
      o
    );
  },
  xl = function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  },
  wl = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch (i) {
      t = go.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === go || (t = go.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +xl(e, ["x", "cx", "x1"]) || 0,
            y: +xl(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  vl = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && wl(e));
  },
  Mr = function (e, t) {
    if (t) {
      var i = e.style;
      t in Qt && t !== Kt && (t = Te),
        i.removeProperty
          ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") &&
              (t = "-" + t),
            i.removeProperty(t.replace(dl, "-$1").toLowerCase()))
          : i.removeAttribute(t);
    }
  },
  Jt = function (e, t, i, r, n, o) {
    var a = new He(e._pt, t, i, 0, 1, o ? _l : ml);
    return (e._pt = a), (a.b = r), (a.e = n), e._props.push(i), a;
  },
  bl = { deg: 1, rad: 1, turn: 1 },
  ei = function s(e, t, i, r) {
    var n = parseFloat(i) || 0,
      o = (i + "").trim().substr((n + "").length) || "px",
      a = mi.style,
      u = Kf.test(t),
      l = e.tagName.toLowerCase() === "svg",
      c = (l ? "client" : "offset") + (u ? "Width" : "Height"),
      p = 100,
      f = r === "px",
      h = r === "%",
      g,
      d,
      _,
      m;
    return r === o || !n || bl[r] || bl[o]
      ? n
      : (o !== "px" && !f && (n = s(e, t, i, "px")),
        (m = e.getCTM && vl(e)),
        (h || o === "%") && (Qt[t] || ~t.indexOf("adius"))
          ? ((g = m ? e.getBBox()[u ? "width" : "height"] : e[c]),
            de(h ? (n / g) * p : (n / 100) * g))
          : ((a[u ? "width" : "height"] = p + (f ? o : r)),
            (d =
              ~t.indexOf("adius") || (r === "em" && e.appendChild && !l)
                ? e
                : e.parentNode),
            m && (d = (e.ownerSVGElement || {}).parentNode),
            (!d || d === $t || !d.appendChild) && (d = $t.body),
            (_ = d._gsap),
            _ && h && _.width && u && _.time === ot.time
              ? de((n / _.width) * p)
              : ((h || o === "%") && (a.position = Mt(e, "position")),
                d === e && (a.position = "static"),
                d.appendChild(mi),
                (g = mi[c]),
                d.removeChild(mi),
                (a.position = "absolute"),
                u && h && ((_ = pi(d)), (_.time = ot.time), (_.width = d[c])),
                de(f ? (g * n) / p : g && n ? (p / g) * n : 0))));
  },
  Ji = function (e, t, i, r) {
    var n;
    return (
      ho || po(),
      t in Zt &&
        t !== "transform" &&
        ((t = Zt[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Qt[t] && t !== "transform"
        ? ((n = Or(e, r)),
          (n =
            t !== "transformOrigin"
              ? n[t]
              : n.svg
              ? n.origin
              : wn(Mt(e, Kt)) + " " + n.zOrigin + "px"))
        : ((n = e.style[t]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (xn[t] && xn[t](e, t, i)) ||
              Mt(e, t) ||
              Ru(e, t) ||
              (t === "opacity" ? 1 : 0))),
      i && !~(n + "").trim().indexOf(" ") ? ei(e, t, n, i) + i : n
    );
  },
  lp = function (e, t, i, r) {
    if (!i || i === "none") {
      var n = Ki(t, e, 1),
        o = n && Mt(e, n, 1);
      o && o !== i
        ? ((t = n), (i = o))
        : t === "borderColor" && (i = Mt(e, "borderTopColor"));
    }
    var a = new He(this._pt, e.style, t, 0, 1, sl),
      u = 0,
      l = 0,
      c,
      p,
      f,
      h,
      g,
      d,
      _,
      m,
      b,
      w,
      C,
      x,
      v;
    if (
      ((a.b = i),
      (a.e = r),
      (i += ""),
      (r += ""),
      r === "auto" && ((e.style[t] = r), (r = Mt(e, t) || r), (e.style[t] = i)),
      (c = [i, r]),
      il(c),
      (i = c[0]),
      (r = c[1]),
      (f = i.match(qi) || []),
      (v = r.match(qi) || []),
      v.length)
    ) {
      for (; (p = qi.exec(r)); )
        (_ = p[0]),
          (b = r.substring(u, p.index)),
          g
            ? (g = (g + 1) % 5)
            : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (g = 1),
          _ !== (d = f[l++] || "") &&
            ((h = parseFloat(d) || 0),
            (C = d.substr((h + "").length)),
            (x = _.charAt(1) === "=" ? +(_.charAt(0) + "1") : 0),
            x && (_ = _.substr(2)),
            (m = parseFloat(_)),
            (w = _.substr((m + "").length)),
            (u = qi.lastIndex - w.length),
            w ||
              ((w = w || ze.units[t] || C),
              u === r.length && ((r += w), (a.e += w))),
            C !== w && (h = ei(e, t, d, w) || 0),
            (a._pt = {
              _next: a._pt,
              p: b || l === 1 ? b : ",",
              s: h,
              c: x ? x * m : m - h,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      a.c = u < r.length ? r.substring(u, r.length) : "";
    } else a.r = t === "display" && r === "none" ? _l : ml;
    return Eu.test(r) && (a.e = 0), (this._pt = a), a;
  },
  Cl = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  cp = function (e) {
    var t = e.split(" "),
      i = t[0],
      r = t[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((e = i), (i = r), (r = e)),
      (t[0] = Cl[i] || i),
      (t[1] = Cl[r] || r),
      t.join(" ")
    );
  },
  hp = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var i = t.t,
        r = i.style,
        n = t.u,
        o = i._gsap,
        a,
        u,
        l;
      if (n === "all" || n === !0) (r.cssText = ""), (u = 1);
      else
        for (n = n.split(","), l = n.length; --l > -1; )
          (a = n[l]),
            Qt[a] && ((u = 1), (a = a === "transformOrigin" ? Kt : Te)),
            Mr(i, a);
      u &&
        (Mr(i, Te),
        o &&
          (o.svg && i.removeAttribute("transform"), Or(i, 1), (o.uncache = 1)));
    }
  },
  xn = {
    clearProps: function (e, t, i, r, n) {
      if (n.data !== "isFromStart") {
        var o = (e._pt = new He(e._pt, t, i, 0, 0, hp));
        return (o.u = r), (o.pr = -10), (o.tween = n), e._props.push(i), 1;
      }
    },
  },
  Lr = [1, 0, 0, 1, 0, 0],
  El = {},
  Tl = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Pl = function (e) {
    var t = Mt(e, Te);
    return Tl(t) ? Lr : t.substr(7).match(Cu).map(de);
  },
  mo = function (e, t) {
    var i = e._gsap || pi(e),
      r = e.style,
      n = Pl(e),
      o,
      a,
      u,
      l;
    return i.svg && e.getAttribute("transform")
      ? ((u = e.transform.baseVal.consolidate().matrix),
        (n = [u.a, u.b, u.c, u.d, u.e, u.f]),
        n.join(",") === "1,0,0,1,0,0" ? Lr : n)
      : (n === Lr &&
          !e.offsetParent &&
          e !== $i &&
          !i.svg &&
          ((u = r.display),
          (r.display = "block"),
          (o = e.parentNode),
          (!o || !e.offsetParent) &&
            ((l = 1), (a = e.nextSibling), $i.appendChild(e)),
          (n = Pl(e)),
          u ? (r.display = u) : Mr(e, "display"),
          l &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : $i.removeChild(e))),
        t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  _o = function (e, t, i, r, n, o) {
    var a = e._gsap,
      u = n || mo(e, !0),
      l = a.xOrigin || 0,
      c = a.yOrigin || 0,
      p = a.xOffset || 0,
      f = a.yOffset || 0,
      h = u[0],
      g = u[1],
      d = u[2],
      _ = u[3],
      m = u[4],
      b = u[5],
      w = t.split(" "),
      C = parseFloat(w[0]) || 0,
      x = parseFloat(w[1]) || 0,
      v,
      E,
      T,
      P;
    i
      ? u !== Lr &&
        (E = h * _ - g * d) &&
        ((T = C * (_ / E) + x * (-d / E) + (d * b - _ * m) / E),
        (P = C * (-g / E) + x * (h / E) - (h * b - g * m) / E),
        (C = T),
        (x = P))
      : ((v = wl(e)),
        (C = v.x + (~w[0].indexOf("%") ? (C / 100) * v.width : C)),
        (x = v.y + (~(w[1] || w[0]).indexOf("%") ? (x / 100) * v.height : x))),
      r || (r !== !1 && a.smooth)
        ? ((m = C - l),
          (b = x - c),
          (a.xOffset = p + (m * h + b * d) - m),
          (a.yOffset = f + (m * g + b * _) - b))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = C),
      (a.yOrigin = x),
      (a.smooth = !!r),
      (a.origin = t),
      (a.originIsAbsolute = !!i),
      (e.style[Kt] = "0px 0px"),
      o &&
        (Jt(o, a, "xOrigin", l, C),
        Jt(o, a, "yOrigin", c, x),
        Jt(o, a, "xOffset", p, a.xOffset),
        Jt(o, a, "yOffset", f, a.yOffset)),
      e.setAttribute("data-svg-origin", C + " " + x);
  },
  Or = function (e, t) {
    var i = e._gsap || new ju(e);
    if ("x" in i && !t && !i.uncache) return i;
    var r = e.style,
      n = i.scaleX < 0,
      o = "px",
      a = "deg",
      u = Mt(e, Kt) || "0",
      l,
      c,
      p,
      f,
      h,
      g,
      d,
      _,
      m,
      b,
      w,
      C,
      x,
      v,
      E,
      T,
      P,
      k,
      R,
      A,
      j,
      z,
      H,
      O,
      N,
      G,
      F,
      S,
      X,
      se,
      V,
      M;
    return (
      (l = c = p = g = d = _ = m = b = w = 0),
      (f = h = 1),
      (i.svg = !!(e.getCTM && vl(e))),
      (v = mo(e, i.svg)),
      i.svg &&
        ((O =
          (!i.uncache || u === "0px 0px") &&
          !t &&
          e.getAttribute("data-svg-origin")),
        _o(e, O || u, !!O || i.originIsAbsolute, i.smooth !== !1, v)),
      (C = i.xOrigin || 0),
      (x = i.yOrigin || 0),
      v !== Lr &&
        ((k = v[0]),
        (R = v[1]),
        (A = v[2]),
        (j = v[3]),
        (l = z = v[4]),
        (c = H = v[5]),
        v.length === 6
          ? ((f = Math.sqrt(k * k + R * R)),
            (h = Math.sqrt(j * j + A * A)),
            (g = k || R ? Zi(R, k) * _i : 0),
            (m = A || j ? Zi(A, j) * _i + g : 0),
            m && (h *= Math.abs(Math.cos(m * Qi))),
            i.svg && ((l -= C - (C * k + x * A)), (c -= x - (C * R + x * j))))
          : ((M = v[6]),
            (se = v[7]),
            (F = v[8]),
            (S = v[9]),
            (X = v[10]),
            (V = v[11]),
            (l = v[12]),
            (c = v[13]),
            (p = v[14]),
            (E = Zi(M, X)),
            (d = E * _i),
            E &&
              ((T = Math.cos(-E)),
              (P = Math.sin(-E)),
              (O = z * T + F * P),
              (N = H * T + S * P),
              (G = M * T + X * P),
              (F = z * -P + F * T),
              (S = H * -P + S * T),
              (X = M * -P + X * T),
              (V = se * -P + V * T),
              (z = O),
              (H = N),
              (M = G)),
            (E = Zi(-A, X)),
            (_ = E * _i),
            E &&
              ((T = Math.cos(-E)),
              (P = Math.sin(-E)),
              (O = k * T - F * P),
              (N = R * T - S * P),
              (G = A * T - X * P),
              (V = j * P + V * T),
              (k = O),
              (R = N),
              (A = G)),
            (E = Zi(R, k)),
            (g = E * _i),
            E &&
              ((T = Math.cos(E)),
              (P = Math.sin(E)),
              (O = k * T + R * P),
              (N = z * T + H * P),
              (R = R * T - k * P),
              (H = H * T - z * P),
              (k = O),
              (z = N)),
            d &&
              Math.abs(d) + Math.abs(g) > 359.9 &&
              ((d = g = 0), (_ = 180 - _)),
            (f = de(Math.sqrt(k * k + R * R + A * A))),
            (h = de(Math.sqrt(H * H + M * M))),
            (E = Zi(z, H)),
            (m = Math.abs(E) > 2e-4 ? E * _i : 0),
            (w = V ? 1 / (V < 0 ? -V : V) : 0)),
        i.svg &&
          ((O = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !Tl(Mt(e, Te))),
          O && e.setAttribute("transform", O))),
      Math.abs(m) > 90 &&
        Math.abs(m) < 270 &&
        (n
          ? ((f *= -1), (m += g <= 0 ? 180 : -180), (g += g <= 0 ? 180 : -180))
          : ((h *= -1), (m += m <= 0 ? 180 : -180))),
      (i.x =
        l -
        ((i.xPercent =
          l &&
          (i.xPercent ||
            (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0)))
          ? (e.offsetWidth * i.xPercent) / 100
          : 0) +
        o),
      (i.y =
        c -
        ((i.yPercent =
          c &&
          (i.yPercent ||
            (Math.round(e.offsetHeight / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetHeight * i.yPercent) / 100
          : 0) +
        o),
      (i.z = p + o),
      (i.scaleX = de(f)),
      (i.scaleY = de(h)),
      (i.rotation = de(g) + a),
      (i.rotationX = de(d) + a),
      (i.rotationY = de(_) + a),
      (i.skewX = m + a),
      (i.skewY = b + a),
      (i.transformPerspective = w + o),
      (i.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (r[Kt] = wn(u)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = ze.force3D),
      (i.renderTransform = i.svg ? pp : Dl ? Sl : fp),
      (i.uncache = 0),
      i
    );
  },
  wn = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Do = function (e, t, i) {
    var r = Ke(t);
    return de(parseFloat(t) + parseFloat(ei(e, "x", i + "px", r))) + r;
  },
  fp = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      Sl(e, t);
  },
  Di = "0deg",
  Br = "0px",
  yi = ") ",
  Sl = function (e, t) {
    var i = t || this,
      r = i.xPercent,
      n = i.yPercent,
      o = i.x,
      a = i.y,
      u = i.z,
      l = i.rotation,
      c = i.rotationY,
      p = i.rotationX,
      f = i.skewX,
      h = i.skewY,
      g = i.scaleX,
      d = i.scaleY,
      _ = i.transformPerspective,
      m = i.force3D,
      b = i.target,
      w = i.zOrigin,
      C = "",
      x = (m === "auto" && e && e !== 1) || m === !0;
    if (w && (p !== Di || c !== Di)) {
      var v = parseFloat(c) * Qi,
        E = Math.sin(v),
        T = Math.cos(v),
        P;
      (v = parseFloat(p) * Qi),
        (P = Math.cos(v)),
        (o = Do(b, o, E * P * -w)),
        (a = Do(b, a, -Math.sin(v) * -w)),
        (u = Do(b, u, T * P * -w + w));
    }
    _ !== Br && (C += "perspective(" + _ + yi),
      (r || n) && (C += "translate(" + r + "%, " + n + "%) "),
      (x || o !== Br || a !== Br || u !== Br) &&
        (C +=
          u !== Br || x
            ? "translate3d(" + o + ", " + a + ", " + u + ") "
            : "translate(" + o + ", " + a + yi),
      l !== Di && (C += "rotate(" + l + yi),
      c !== Di && (C += "rotateY(" + c + yi),
      p !== Di && (C += "rotateX(" + p + yi),
      (f !== Di || h !== Di) && (C += "skew(" + f + ", " + h + yi),
      (g !== 1 || d !== 1) && (C += "scale(" + g + ", " + d + yi),
      (b.style[Te] = C || "translate(0, 0)");
  },
  pp = function (e, t) {
    var i = t || this,
      r = i.xPercent,
      n = i.yPercent,
      o = i.x,
      a = i.y,
      u = i.rotation,
      l = i.skewX,
      c = i.skewY,
      p = i.scaleX,
      f = i.scaleY,
      h = i.target,
      g = i.xOrigin,
      d = i.yOrigin,
      _ = i.xOffset,
      m = i.yOffset,
      b = i.forceCSS,
      w = parseFloat(o),
      C = parseFloat(a),
      x,
      v,
      E,
      T,
      P;
    (u = parseFloat(u)),
      (l = parseFloat(l)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (l += c), (u += c)),
      u || l
        ? ((u *= Qi),
          (l *= Qi),
          (x = Math.cos(u) * p),
          (v = Math.sin(u) * p),
          (E = Math.sin(u - l) * -f),
          (T = Math.cos(u - l) * f),
          l &&
            ((c *= Qi),
            (P = Math.tan(l - c)),
            (P = Math.sqrt(1 + P * P)),
            (E *= P),
            (T *= P),
            c &&
              ((P = Math.tan(c)),
              (P = Math.sqrt(1 + P * P)),
              (x *= P),
              (v *= P))),
          (x = de(x)),
          (v = de(v)),
          (E = de(E)),
          (T = de(T)))
        : ((x = p), (T = f), (v = E = 0)),
      ((w && !~(o + "").indexOf("px")) || (C && !~(a + "").indexOf("px"))) &&
        ((w = ei(h, "x", o, "px")), (C = ei(h, "y", a, "px"))),
      (g || d || _ || m) &&
        ((w = de(w + g - (g * x + d * E) + _)),
        (C = de(C + d - (g * v + d * T) + m))),
      (r || n) &&
        ((P = h.getBBox()),
        (w = de(w + (r / 100) * P.width)),
        (C = de(C + (n / 100) * P.height))),
      (P =
        "matrix(" + x + "," + v + "," + E + "," + T + "," + w + "," + C + ")"),
      h.setAttribute("transform", P),
      b && (h.style[Te] = P);
  },
  dp = function (e, t, i, r, n, o) {
    var a = 360,
      u = Ee(n),
      l = parseFloat(n) * (u && ~n.indexOf("rad") ? _i : 1),
      c = o ? l * o : l - r,
      p = r + c + "deg",
      f,
      h;
    return (
      u &&
        ((f = n.split("_")[1]),
        f === "short" && ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -a)),
        f === "cw" && c < 0
          ? (c = ((c + a * pl) % a) - ~~(c / a) * a)
          : f === "ccw" && c > 0 && (c = ((c - a * pl) % a) - ~~(c / a) * a)),
      (e._pt = h = new He(e._pt, t, i, r, c, ep)),
      (h.e = p),
      (h.u = "deg"),
      e._props.push(i),
      h
    );
  },
  kl = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  gp = function (e, t, i) {
    var r = kl({}, i._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      a,
      u,
      l,
      c,
      p,
      f,
      h,
      g;
    r.svg
      ? ((l = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[Te] = t),
        (a = Or(i, 1)),
        Mr(i, Te),
        i.setAttribute("transform", l))
      : ((l = getComputedStyle(i)[Te]),
        (o[Te] = t),
        (a = Or(i, 1)),
        (o[Te] = l));
    for (u in Qt)
      (l = r[u]),
        (c = a[u]),
        l !== c &&
          n.indexOf(u) < 0 &&
          ((h = Ke(l)),
          (g = Ke(c)),
          (p = h !== g ? ei(i, u, l, g) : parseFloat(l)),
          (f = parseFloat(c)),
          (e._pt = new He(e._pt, a, u, p, f - p, gl)),
          (e._pt.u = g || 0),
          e._props.push(u));
    kl(a, r);
  };
Ze("padding,margin,Width,Radius", function (s, e) {
  var t = "Top",
    i = "Right",
    r = "Bottom",
    n = "Left",
    o = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (a) {
      return e < 2 ? s + a : "border" + a + s;
    });
  xn[e > 1 ? "border" + s : s] = function (a, u, l, c, p) {
    var f, h;
    if (arguments.length < 4)
      return (
        (f = o.map(function (g) {
          return Ji(a, g, l);
        })),
        (h = f.join(" ")),
        h.split(f[0]).length === 5 ? f[0] : h
      );
    (f = (c + "").split(" ")),
      (h = {}),
      o.forEach(function (g, d) {
        return (h[g] = f[d] = f[d] || f[((d - 1) / 2) | 0]);
      }),
      a.init(u, h, p);
  };
});
var Fl = {
  name: "css",
  register: po,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, i, r, n) {
    var o = this._props,
      a = e.style,
      u = i.vars.startAt,
      l,
      c,
      p,
      f,
      h,
      g,
      d,
      _,
      m,
      b,
      w,
      C,
      x,
      v,
      E;
    ho || po();
    for (d in t)
      if (d !== "autoRound" && ((c = t[d]), !(Qe[d] && ul(d, t, i, r, e, n)))) {
        if (
          ((h = typeof c),
          (g = xn[d]),
          h === "function" && ((c = c.call(i, r, e, n)), (h = typeof c)),
          h === "string" && ~c.indexOf("random(") && (c = kr(c)),
          g)
        )
          g(this, e, d, c, i) && (E = 1);
        else if (d.substr(0, 2) === "--")
          (l = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
            (c += ""),
            (Yt.lastIndex = 0),
            Yt.test(l) || ((_ = Ke(l)), (m = Ke(c))),
            m ? _ !== m && (l = ei(e, d, l, m) + m) : _ && (c += _),
            this.add(a, "setProperty", l, c, r, n, 0, 0, d),
            o.push(d);
        else if (h !== "undefined") {
          if (
            (u && d in u
              ? ((l = typeof u[d] == "function" ? u[d].call(i, r, e, n) : u[d]),
                d in ze.units && !Ke(l) && (l += ze.units[d]),
                Ee(l) && ~l.indexOf("random(") && (l = kr(l)),
                (l + "").charAt(1) === "=" && (l = Ji(e, d)))
              : (l = Ji(e, d)),
            (f = parseFloat(l)),
            (b =
              h === "string" && c.charAt(1) === "=" ? +(c.charAt(0) + "1") : 0),
            b && (c = c.substr(2)),
            (p = parseFloat(c)),
            d in Zt &&
              (d === "autoAlpha" &&
                (f === 1 && Ji(e, "visibility") === "hidden" && p && (f = 0),
                Jt(
                  this,
                  a,
                  "visibility",
                  f ? "inherit" : "hidden",
                  p ? "inherit" : "hidden",
                  !p
                )),
              d !== "scale" &&
                d !== "transform" &&
                ((d = Zt[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
            (w = d in Qt),
            w)
          ) {
            if (
              (C ||
                ((x = e._gsap),
                (x.renderTransform && !t.parseTransform) ||
                  Or(e, t.parseTransform),
                (v = t.smoothOrigin !== !1 && x.smooth),
                (C = this._pt =
                  new He(this._pt, a, Te, 0, 1, x.renderTransform, x, 0, -1)),
                (C.dep = 1)),
              d === "scale")
            )
              (this._pt = new He(
                this._pt,
                x,
                "scaleY",
                x.scaleY,
                (b ? b * p : p - x.scaleY) || 0
              )),
                o.push("scaleY", d),
                (d += "X");
            else if (d === "transformOrigin") {
              (c = cp(c)),
                x.svg
                  ? _o(e, c, 0, v, 0, this)
                  : ((m = parseFloat(c.split(" ")[2]) || 0),
                    m !== x.zOrigin && Jt(this, x, "zOrigin", x.zOrigin, m),
                    Jt(this, a, d, wn(l), wn(c)));
              continue;
            } else if (d === "svgOrigin") {
              _o(e, c, 1, v, 0, this);
              continue;
            } else if (d in El) {
              dp(this, x, d, f, c, b);
              continue;
            } else if (d === "smoothOrigin") {
              Jt(this, x, "smooth", x.smooth, c);
              continue;
            } else if (d === "force3D") {
              x[d] = c;
              continue;
            } else if (d === "transform") {
              gp(this, c, e);
              continue;
            }
          } else d in a || (d = Ki(d) || d);
          if (w || ((p || p === 0) && (f || f === 0) && !Jf.test(c) && d in a))
            (_ = (l + "").substr((f + "").length)),
              p || (p = 0),
              (m = Ke(c) || (d in ze.units ? ze.units[d] : _)),
              _ !== m && (f = ei(e, d, l, m)),
              (this._pt = new He(
                this._pt,
                w ? x : a,
                d,
                f,
                b ? b * p : p - f,
                !w && (m === "px" || d === "zIndex") && t.autoRound !== !1
                  ? ip
                  : gl
              )),
              (this._pt.u = m || 0),
              _ !== m && m !== "%" && ((this._pt.b = l), (this._pt.r = tp));
          else if (d in a) lp.call(this, e, d, l, c);
          else if (d in e) this.add(e, d, l || e[d], c, r, n);
          else {
            Ys(d, c);
            continue;
          }
          o.push(d);
        }
      }
    E && ll(this);
  },
  get: Ji,
  aliases: Zt,
  getSetter: function (e, t, i) {
    var r = Zt[t];
    return (
      r && r.indexOf(",") < 0 && (t = r),
      t in Qt && t !== Kt && (e._gsap.x || Ji(e, "x"))
        ? i && fl === i
          ? t === "scale"
            ? op
            : sp
          : (fl = i || {}) && (t === "scale" ? ap : up)
        : e.style && !Hs(e.style[t])
        ? rp
        : ~t.indexOf("-")
        ? np
        : so(e, t)
    );
  },
  core: { _removeProperty: Mr, _getMatrix: mo },
};
yt.utils.checkPrefix = Ki;
(function (s, e, t, i) {
  var r = Ze(s + "," + e + "," + t, function (n) {
    Qt[n] = 1;
  });
  Ze(e, function (n) {
    (ze.units[n] = "deg"), (El[n] = 1);
  }),
    (Zt[r[13]] = s + "," + e),
    Ze(i, function (n) {
      var o = n.split(":");
      Zt[o[1]] = r[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Ze(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (s) {
    ze.units[s] = "px";
  }
);
yt.registerPlugin(Fl);
var Al = yt.registerPlugin(Fl) || yt,
  _g = Al.core.Tween,
  D = Al;
var mp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  _p = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  Dp = Math.PI / 180,
  vn = Math.sin,
  bn = Math.cos,
  Ir = Math.abs,
  zr = Math.sqrt,
  yp = function (e) {
    return typeof e == "number";
  },
  jl = 1e5,
  ti = function (e) {
    return Math.round(e * jl) / jl || 0;
  };
function xp(s, e, t, i, r, n, o) {
  for (var a = s.length, u, l, c, p, f; --a > -1; )
    for (u = s[a], l = u.length, c = 0; c < l; c += 2)
      (p = u[c]),
        (f = u[c + 1]),
        (u[c] = p * e + f * i + n),
        (u[c + 1] = p * t + f * r + o);
  return (s._dirty = 1), s;
}
function wp(s, e, t, i, r, n, o, a, u) {
  if (!(s === a && e === u)) {
    (t = Ir(t)), (i = Ir(i));
    var l = (r % 360) * Dp,
      c = bn(l),
      p = vn(l),
      f = Math.PI,
      h = f * 2,
      g = (s - a) / 2,
      d = (e - u) / 2,
      _ = c * g + p * d,
      m = -p * g + c * d,
      b = _ * _,
      w = m * m,
      C = b / (t * t) + w / (i * i);
    C > 1 && ((t = zr(C) * t), (i = zr(C) * i));
    var x = t * t,
      v = i * i,
      E = (x * v - x * w - v * b) / (x * w + v * b);
    E < 0 && (E = 0);
    var T = (n === o ? -1 : 1) * zr(E),
      P = T * ((t * m) / i),
      k = T * -((i * _) / t),
      R = (s + a) / 2,
      A = (e + u) / 2,
      j = R + (c * P - p * k),
      z = A + (p * P + c * k),
      H = (_ - P) / t,
      O = (m - k) / i,
      N = (-_ - P) / t,
      G = (-m - k) / i,
      F = H * H + O * O,
      S = (O < 0 ? -1 : 1) * Math.acos(H / zr(F)),
      X =
        (H * G - O * N < 0 ? -1 : 1) *
        Math.acos((H * N + O * G) / zr(F * (N * N + G * G)));
    isNaN(X) && (X = f),
      !o && X > 0 ? (X -= h) : o && X < 0 && (X += h),
      (S %= h),
      (X %= h);
    var se = Math.ceil(Ir(X) / (h / 4)),
      V = [],
      M = X / se,
      q = ((4 / 3) * vn(M / 2)) / (1 + bn(M / 2)),
      Z = c * t,
      K = p * t,
      Be = p * -i,
      ve = c * i,
      he;
    for (he = 0; he < se; he++)
      (r = S + he * M),
        (_ = bn(r)),
        (m = vn(r)),
        (H = bn((r += M))),
        (O = vn(r)),
        V.push(_ - q * m, m + q * _, H + q * O, O - q * H, H, O);
    for (he = 0; he < V.length; he += 2)
      (_ = V[he]),
        (m = V[he + 1]),
        (V[he] = _ * Z + m * Be + j),
        (V[he + 1] = _ * K + m * ve + z);
    return (V[he - 2] = a), (V[he - 1] = u), V;
  }
}
function vp(s) {
  var e =
      (s + "")
        .replace(_p, function (P) {
          var k = +P;
          return k < 1e-4 && k > -1e-4 ? 0 : k;
        })
        .match(mp) || [],
    t = [],
    i = 0,
    r = 0,
    n = 2 / 3,
    o = e.length,
    a = 0,
    u = "ERROR: malformed path: " + s,
    l,
    c,
    p,
    f,
    h,
    g,
    d,
    _,
    m,
    b,
    w,
    C,
    x,
    v,
    E,
    T = function (k, R, A, j) {
      (b = (A - k) / 3),
        (w = (j - R) / 3),
        d.push(k + b, R + w, A - b, j - w, A, j);
    };
  if (!s || !isNaN(e[0]) || isNaN(e[1])) return console.log(u), t;
  for (l = 0; l < o; l++)
    if (
      ((x = h),
      isNaN(e[l]) ? ((h = e[l].toUpperCase()), (g = h !== e[l])) : l--,
      (p = +e[l + 1]),
      (f = +e[l + 2]),
      g && ((p += i), (f += r)),
      l || ((_ = p), (m = f)),
      h === "M")
    )
      d && (d.length < 8 ? (t.length -= 1) : (a += d.length)),
        (i = _ = p),
        (r = m = f),
        (d = [p, f]),
        t.push(d),
        (l += 2),
        (h = "L");
    else if (h === "C")
      d || (d = [0, 0]),
        g || (i = r = 0),
        d.push(
          p,
          f,
          i + e[l + 3] * 1,
          r + e[l + 4] * 1,
          (i += e[l + 5] * 1),
          (r += e[l + 6] * 1)
        ),
        (l += 6);
    else if (h === "S")
      (b = i),
        (w = r),
        (x === "C" || x === "S") &&
          ((b += i - d[d.length - 4]), (w += r - d[d.length - 3])),
        g || (i = r = 0),
        d.push(b, w, p, f, (i += e[l + 3] * 1), (r += e[l + 4] * 1)),
        (l += 4);
    else if (h === "Q")
      (b = i + (p - i) * n),
        (w = r + (f - r) * n),
        g || (i = r = 0),
        (i += e[l + 3] * 1),
        (r += e[l + 4] * 1),
        d.push(b, w, i + (p - i) * n, r + (f - r) * n, i, r),
        (l += 4);
    else if (h === "T")
      (b = i - d[d.length - 4]),
        (w = r - d[d.length - 3]),
        d.push(
          i + b,
          r + w,
          p + (i + b * 1.5 - p) * n,
          f + (r + w * 1.5 - f) * n,
          (i = p),
          (r = f)
        ),
        (l += 2);
    else if (h === "H") T(i, r, (i = p), r), (l += 1);
    else if (h === "V") T(i, r, i, (r = p + (g ? r - i : 0))), (l += 1);
    else if (h === "L" || h === "Z")
      h === "Z" && ((p = _), (f = m), (d.closed = !0)),
        (h === "L" || Ir(i - p) > 0.5 || Ir(r - f) > 0.5) &&
          (T(i, r, p, f), h === "L" && (l += 2)),
        (i = p),
        (r = f);
    else if (h === "A") {
      if (
        ((v = e[l + 4]),
        (E = e[l + 5]),
        (b = e[l + 6]),
        (w = e[l + 7]),
        (c = 7),
        v.length > 1 &&
          (v.length < 3
            ? ((w = b), (b = E), c--)
            : ((w = E), (b = v.substr(2)), (c -= 2)),
          (E = v.charAt(1)),
          (v = v.charAt(0))),
        (C = wp(
          i,
          r,
          +e[l + 1],
          +e[l + 2],
          +e[l + 3],
          +v,
          +E,
          (g ? i : 0) + b * 1,
          (g ? r : 0) + w * 1
        )),
        (l += c),
        C)
      )
        for (c = 0; c < C.length; c++) d.push(C[c]);
      (i = d[d.length - 2]), (r = d[d.length - 1]);
    } else console.log(u);
  return (
    (l = d.length),
    l < 6
      ? (t.pop(), (l = 0))
      : d[0] === d[l - 2] && d[1] === d[l - 1] && (d.closed = !0),
    (t.totalPoints = a + l),
    t
  );
}
function bp(s) {
  yp(s[0]) && (s = [s]);
  var e = "",
    t = s.length,
    i,
    r,
    n,
    o;
  for (r = 0; r < t; r++) {
    for (
      o = s[r],
        e += "M" + ti(o[0]) + "," + ti(o[1]) + " C",
        i = o.length,
        n = 2;
      n < i;
      n++
    )
      e +=
        ti(o[n++]) +
        "," +
        ti(o[n++]) +
        " " +
        ti(o[n++]) +
        "," +
        ti(o[n++]) +
        " " +
        ti(o[n++]) +
        "," +
        ti(o[n]) +
        " ";
    o.closed && (e += "z");
  }
  return e;
}
var Xe,
  Rl,
  Ml = function () {
    return (
      Xe ||
      (typeof window != "undefined" &&
        (Xe = window.gsap) &&
        Xe.registerPlugin &&
        Xe)
    );
  },
  Ol = function () {
    (Xe = Ml()),
      Xe
        ? (Xe.registerEase("_CE", B.create), (Rl = 1))
        : console.warn("Please gsap.registerPlugin(CustomEase)");
  },
  Cp = 1e20,
  Cn = function (e) {
    return ~~(e * 1e3 + (e < 0 ? -0.5 : 0.5)) / 1e3;
  },
  Ep = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  Tp = /[cLlsSaAhHvVtTqQ]/g,
  Pp = function (e) {
    var t = e.length,
      i = Cp,
      r;
    for (r = 1; r < t; r += 6) +e[r] < i && (i = +e[r]);
    return i;
  },
  Sp = function (e, t, i) {
    !i && i !== 0 && (i = Math.max(+e[e.length - 1], +e[1]));
    var r = +e[0] * -1,
      n = -i,
      o = e.length,
      a = 1 / (+e[o - 2] + r),
      u =
        -t ||
        (Math.abs(+e[o - 1] - +e[1]) < 0.01 * (+e[o - 2] - +e[0])
          ? Pp(e) + n
          : +e[o - 1] + n),
      l;
    for (u ? (u = 1 / u) : (u = -a), l = 0; l < o; l += 2)
      (e[l] = (+e[l] + r) * a), (e[l + 1] = (+e[l + 1] + n) * u);
  },
  kp = function s(e, t, i, r, n, o, a, u, l, c, p) {
    var f = (e + i) / 2,
      h = (t + r) / 2,
      g = (i + n) / 2,
      d = (r + o) / 2,
      _ = (n + a) / 2,
      m = (o + u) / 2,
      b = (f + g) / 2,
      w = (h + d) / 2,
      C = (g + _) / 2,
      x = (d + m) / 2,
      v = (b + C) / 2,
      E = (w + x) / 2,
      T = a - e,
      P = u - t,
      k = Math.abs((i - a) * P - (r - u) * T),
      R = Math.abs((n - a) * P - (o - u) * T),
      A;
    return (
      c ||
        ((c = [
          { x: e, y: t },
          { x: a, y: u },
        ]),
        (p = 1)),
      c.splice(p || c.length - 1, 0, { x: v, y: E }),
      (k + R) * (k + R) > l * (T * T + P * P) &&
        ((A = c.length),
        s(e, t, f, h, b, w, v, E, l, c, p),
        s(v, E, C, x, _, m, a, u, l, c, p + 1 + (c.length - A))),
      c
    );
  },
  B = (function () {
    function s(t, i, r) {
      Rl || Ol(), (this.id = t), this.setData(i, r);
    }
    var e = s.prototype;
    return (
      (e.setData = function (i, r) {
        (r = r || {}), (i = i || "0,0,1,1");
        var n = i.match(Ep),
          o = 1,
          a = [],
          u = [],
          l = r.precision || 1,
          c = l <= 1,
          p,
          f,
          h,
          g,
          d,
          _,
          m,
          b,
          w;
        if (
          ((this.data = i),
          (Tp.test(i) || (~i.indexOf("M") && i.indexOf("C") < 0)) &&
            (n = vp(i)[0]),
          (p = n.length),
          p === 4)
        )
          n.unshift(0, 0), n.push(1, 1), (p = 8);
        else if ((p - 2) % 6) throw "Invalid CustomEase";
        for (
          (+n[0] != 0 || +n[p - 2] != 1) && Sp(n, r.height, r.originY),
            this.segment = n,
            g = 2;
          g < p;
          g += 6
        )
          (f = { x: +n[g - 2], y: +n[g - 1] }),
            (h = { x: +n[g + 4], y: +n[g + 5] }),
            a.push(f, h),
            kp(
              f.x,
              f.y,
              +n[g],
              +n[g + 1],
              +n[g + 2],
              +n[g + 3],
              h.x,
              h.y,
              1 / (l * 2e5),
              a,
              a.length - 1
            );
        for (p = a.length, g = 0; g < p; g++)
          (m = a[g]),
            (b = a[g - 1] || m),
            (m.x > b.x || (b.y !== m.y && b.x === m.x) || m === b) && m.x <= 1
              ? ((b.cx = m.x - b.x),
                (b.cy = m.y - b.y),
                (b.n = m),
                (b.nx = m.x),
                c &&
                  g > 1 &&
                  Math.abs(b.cy / b.cx - a[g - 2].cy / a[g - 2].cx) > 2 &&
                  (c = 0),
                b.cx < o &&
                  (b.cx
                    ? (o = b.cx)
                    : ((b.cx = 0.001),
                      g === p - 1 &&
                        ((b.x -= 0.001), (o = Math.min(o, 0.001)), (c = 0)))))
              : (a.splice(g--, 1), p--);
        if (((p = (1 / o + 1) | 0), (d = 1 / p), (_ = 0), (m = a[0]), c)) {
          for (g = 0; g < p; g++)
            (w = g * d),
              m.nx < w && (m = a[++_]),
              (f = m.y + ((w - m.x) / m.cx) * m.cy),
              (u[g] = { x: w, cx: d, y: f, cy: 0, nx: 9 }),
              g && (u[g - 1].cy = f - u[g - 1].y);
          u[p - 1].cy = a[a.length - 1].y - f;
        } else {
          for (g = 0; g < p; g++) m.nx < g * d && (m = a[++_]), (u[g] = m);
          _ < a.length - 1 && (u[g - 1] = a[a.length - 2]);
        }
        return (
          (this.ease = function (C) {
            var x = u[(C * p) | 0] || u[p - 1];
            return x.nx < C && (x = x.n), x.y + ((C - x.x) / x.cx) * x.cy;
          }),
          (this.ease.custom = this),
          this.id && Xe && Xe.registerEase(this.id, this.ease),
          this
        );
      }),
      (e.getSVGData = function (i) {
        return s.getSVGData(this, i);
      }),
      (s.create = function (i, r, n) {
        return new s(i, r, n).ease;
      }),
      (s.register = function (i) {
        (Xe = i), Ol();
      }),
      (s.get = function (i) {
        return Xe.parseEase(i);
      }),
      (s.getSVGData = function (i, r) {
        r = r || {};
        var n = r.width || 100,
          o = r.height || 100,
          a = r.x || 0,
          u = (r.y || 0) + o,
          l = Xe.utils.toArray(r.path)[0],
          c,
          p,
          f,
          h,
          g,
          d,
          _,
          m,
          b,
          w;
        if (
          (r.invert && ((o = -o), (u = 0)),
          typeof i == "string" && (i = Xe.parseEase(i)),
          i.custom && (i = i.custom),
          i instanceof s)
        )
          c = bp(xp([i.segment], n, 0, 0, -o, a, u));
        else {
          for (
            c = [a, u],
              _ = Math.max(5, (r.precision || 1) * 200),
              h = 1 / _,
              _ += 2,
              m = 5 / _,
              b = Cn(a + h * n),
              w = Cn(u + i(h) * -o),
              p = (w - u) / (b - a),
              f = 2;
            f < _;
            f++
          )
            (g = Cn(a + f * h * n)),
              (d = Cn(u + i(f * h) * -o)),
              (Math.abs((d - w) / (g - b) - p) > m || f === _ - 1) &&
                (c.push(b, w), (p = (d - w) / (g - b))),
              (b = g),
              (w = d);
          c = "M" + c.join(",");
        }
        return l && l.setAttribute("d", c), c;
      }),
      s
    );
  })();
Ml() && Xe.registerPlugin(B);
B.version = "3.8.0";
D.registerPlugin(B);
var Ll = { AnchorText: "anchor-text" };
B.create(Ll.AnchorText, "0.75,0,0,1");
var er = Ll;
var Bl = !1,
  xi,
  yo,
  xo,
  En,
  Tn,
  Il,
  Pn,
  wo,
  vo,
  bo,
  zl,
  Co,
  Eo,
  Nl,
  ql;
function Ue() {
  if (!Bl) {
    Bl = !0;
    var s = navigator.userAgent,
      e =
        /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
          s
        ),
      t = /(Mac OS X)|(Windows)|(Linux)/.exec(s);
    if (
      ((Co = /\b(iPhone|iP[ao]d)/.exec(s)),
      (Eo = /\b(iP[ao]d)/.exec(s)),
      (bo = /Android/i.exec(s)),
      (Nl = /FBAN\/\w+;/i.exec(s)),
      (ql = /Mobile/i.exec(s)),
      (zl = !!/Win64/.exec(s)),
      e)
    ) {
      (xi = e[1] ? parseFloat(e[1]) : e[5] ? parseFloat(e[5]) : NaN),
        xi && document && document.documentMode && (xi = document.documentMode);
      var i = /(?:Trident\/(\d+.\d+))/.exec(s);
      (Il = i ? parseFloat(i[1]) + 4 : xi),
        (yo = e[2] ? parseFloat(e[2]) : NaN),
        (xo = e[3] ? parseFloat(e[3]) : NaN),
        (En = e[4] ? parseFloat(e[4]) : NaN),
        En
          ? ((e = /(?:Chrome\/(\d+\.\d+))/.exec(s)),
            (Tn = e && e[1] ? parseFloat(e[1]) : NaN))
          : (Tn = NaN);
    } else xi = yo = xo = Tn = En = NaN;
    if (t) {
      if (t[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(s);
        Pn = r ? parseFloat(r[1].replace("_", ".")) : !0;
      } else Pn = !1;
      (wo = !!t[2]), (vo = !!t[3]);
    } else Pn = wo = vo = !1;
  }
}
var To = {
    ie: function () {
      return Ue() || xi;
    },
    ieCompatibilityMode: function () {
      return Ue() || Il > xi;
    },
    ie64: function () {
      return To.ie() && zl;
    },
    firefox: function () {
      return Ue() || yo;
    },
    opera: function () {
      return Ue() || xo;
    },
    webkit: function () {
      return Ue() || En;
    },
    safari: function () {
      return To.webkit();
    },
    chrome: function () {
      return Ue() || Tn;
    },
    windows: function () {
      return Ue() || wo;
    },
    osx: function () {
      return Ue() || Pn;
    },
    linux: function () {
      return Ue() || vo;
    },
    iphone: function () {
      return Ue() || Co;
    },
    mobile: function () {
      return Ue() || Co || Eo || bo || ql;
    },
    nativeApp: function () {
      return Ue() || Nl;
    },
    android: function () {
      return Ue() || bo;
    },
    ipad: function () {
      return Ue() || Eo;
    },
  },
  Fp = To,
  Sn = !!(
    typeof window != "undefined" &&
    window.document &&
    window.document.createElement
  ),
  Ap = {
    canUseDOM: Sn,
    canUseWorkers: typeof Worker != "undefined",
    canUseEventListeners:
      Sn && !!(window.addEventListener || window.attachEvent),
    canUseViewport: Sn && !!window.screen,
    isInWorker: !Sn,
  },
  Hl = Ap,
  Xl;
Hl.canUseDOM &&
  (Xl =
    document.implementation &&
    document.implementation.hasFeature &&
    document.implementation.hasFeature("", "") !== !0);
function jp(s, e) {
  if (!Hl.canUseDOM || (e && !("addEventListener" in document))) return !1;
  var t = "on" + s,
    i = t in document;
  if (!i) {
    var r = document.createElement("div");
    r.setAttribute(t, "return;"), (i = typeof r[t] == "function");
  }
  return (
    !i &&
      Xl &&
      s === "wheel" &&
      (i = document.implementation.hasFeature("Events.wheel", "3.0")),
    i
  );
}
var Rp = jp,
  Ul = 10,
  Wl = 40,
  Vl = 800;
function Yl(s) {
  var e = 0,
    t = 0,
    i = 0,
    r = 0;
  return (
    "detail" in s && (t = s.detail),
    "wheelDelta" in s && (t = -s.wheelDelta / 120),
    "wheelDeltaY" in s && (t = -s.wheelDeltaY / 120),
    "wheelDeltaX" in s && (e = -s.wheelDeltaX / 120),
    "axis" in s && s.axis === s.HORIZONTAL_AXIS && ((e = t), (t = 0)),
    (i = e * Ul),
    (r = t * Ul),
    "deltaY" in s && (r = s.deltaY),
    "deltaX" in s && (i = s.deltaX),
    (i || r) &&
      s.deltaMode &&
      (s.deltaMode == 1 ? ((i *= Wl), (r *= Wl)) : ((i *= Vl), (r *= Vl))),
    i && !e && (e = i < 1 ? -1 : 1),
    r && !t && (t = r < 1 ? -1 : 1),
    { spinX: e, spinY: t, pixelX: i, pixelY: r }
  );
}
Yl.getEventType = function () {
  return Fp.firefox() ? "DOMMouseScroll" : Rp("wheel") ? "wheel" : "mousewheel";
};
var Mp = Yl,
  Op = Mp,
  Gl = Op;
var wi =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function $l(s, e, t) {
  return (
    (t = {
      path: e,
      exports: {},
      require: function (i, r) {
        return Lp(i, r == null ? t.path : r);
      },
    }),
    s(t, t.exports),
    t.exports
  );
}
function Lp() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}
var Bp = "Expected a function",
  Ql = 0 / 0,
  Ip = "[object Symbol]",
  zp = /^\s+|\s+$/g,
  Np = /^[-+]0x[0-9a-f]+$/i,
  qp = /^0b[01]+$/i,
  Hp = /^0o[0-7]+$/i,
  Xp = parseInt,
  Up = typeof wi == "object" && wi && wi.Object === Object && wi,
  Wp = typeof self == "object" && self && self.Object === Object && self,
  Vp = Up || Wp || Function("return this")(),
  Yp = Object.prototype,
  Gp = Yp.toString,
  $p = Math.max,
  Qp = Math.min,
  Po = function () {
    return Vp.Date.now();
  };
function Zp(s, e, t) {
  var i,
    r,
    n,
    o,
    a,
    u,
    l = 0,
    c = !1,
    p = !1,
    f = !0;
  if (typeof s != "function") throw new TypeError(Bp);
  (e = Zl(e) || 0),
    So(t) &&
      ((c = !!t.leading),
      (p = "maxWait" in t),
      (n = p ? $p(Zl(t.maxWait) || 0, e) : n),
      (f = "trailing" in t ? !!t.trailing : f));
  function h(v) {
    var E = i,
      T = r;
    return (i = r = void 0), (l = v), (o = s.apply(T, E)), o;
  }
  function g(v) {
    return (l = v), (a = setTimeout(m, e)), c ? h(v) : o;
  }
  function d(v) {
    var E = v - u,
      T = v - l,
      P = e - E;
    return p ? Qp(P, n - T) : P;
  }
  function _(v) {
    var E = v - u,
      T = v - l;
    return u === void 0 || E >= e || E < 0 || (p && T >= n);
  }
  function m() {
    var v = Po();
    if (_(v)) return b(v);
    a = setTimeout(m, d(v));
  }
  function b(v) {
    return (a = void 0), f && i ? h(v) : ((i = r = void 0), o);
  }
  function w() {
    a !== void 0 && clearTimeout(a), (l = 0), (i = u = r = a = void 0);
  }
  function C() {
    return a === void 0 ? o : b(Po());
  }
  function x() {
    var v = Po(),
      E = _(v);
    if (((i = arguments), (r = this), (u = v), E)) {
      if (a === void 0) return g(u);
      if (p) return (a = setTimeout(m, e)), h(u);
    }
    return a === void 0 && (a = setTimeout(m, e)), o;
  }
  return (x.cancel = w), (x.flush = C), x;
}
function So(s) {
  var e = typeof s;
  return !!s && (e == "object" || e == "function");
}
function Kp(s) {
  return !!s && typeof s == "object";
}
function Jp(s) {
  return typeof s == "symbol" || (Kp(s) && Gp.call(s) == Ip);
}
function Zl(s) {
  if (typeof s == "number") return s;
  if (Jp(s)) return Ql;
  if (So(s)) {
    var e = typeof s.valueOf == "function" ? s.valueOf() : s;
    s = So(e) ? e + "" : e;
  }
  if (typeof s != "string") return s === 0 ? s : +s;
  s = s.replace(zp, "");
  var t = qp.test(s);
  return t || Hp.test(s) ? Xp(s.slice(2), t ? 2 : 8) : Np.test(s) ? Ql : +s;
}
var ed = Zp,
  ko = ed;
var Fo = /iPhone/i,
  Kl = /iPod/i,
  Jl = /iPad/i,
  ec = /\biOS-universal(?:.+)Mac\b/i,
  Ao = /\bAndroid(?:.+)Mobile\b/i,
  tc = /Android/i,
  tr = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
  kn = /Silk/i,
  Ot = /Windows Phone/i,
  ic = /\bWindows(?:.+)ARM\b/i,
  rc = /BlackBerry/i,
  nc = /BB10/i,
  sc = /Opera Mini/i,
  oc = /\b(CriOS|Chrome)(?:.+)Mobile/i,
  ac = /Mobile(?:.+)Firefox\b/i,
  uc = function (s) {
    return (
      typeof s != "undefined" &&
      s.platform === "MacIntel" &&
      typeof s.maxTouchPoints == "number" &&
      s.maxTouchPoints > 1 &&
      typeof MSStream == "undefined"
    );
  };
function td(s) {
  return function (e) {
    return e.test(s);
  };
}
function id(s) {
  var e = { userAgent: "", platform: "", maxTouchPoints: 0 };
  !s && typeof navigator != "undefined"
    ? (e = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0,
      })
    : typeof s == "string"
    ? (e.userAgent = s)
    : s &&
      s.userAgent &&
      (e = {
        userAgent: s.userAgent,
        platform: s.platform,
        maxTouchPoints: s.maxTouchPoints || 0,
      });
  var t = e.userAgent,
    i = t.split("[FBAN");
  typeof i[1] != "undefined" && (t = i[0]),
    (i = t.split("Twitter")),
    typeof i[1] != "undefined" && (t = i[0]);
  var r = td(t),
    n = {
      apple: {
        phone: r(Fo) && !r(Ot),
        ipod: r(Kl),
        tablet: !r(Fo) && (r(Jl) || uc(e)) && !r(Ot),
        universal: r(ec),
        device: (r(Fo) || r(Kl) || r(Jl) || r(ec) || uc(e)) && !r(Ot),
      },
      amazon: { phone: r(tr), tablet: !r(tr) && r(kn), device: r(tr) || r(kn) },
      android: {
        phone: (!r(Ot) && r(tr)) || (!r(Ot) && r(Ao)),
        tablet: !r(Ot) && !r(tr) && !r(Ao) && (r(kn) || r(tc)),
        device:
          (!r(Ot) && (r(tr) || r(kn) || r(Ao) || r(tc))) || r(/\bokhttp\b/i),
      },
      windows: { phone: r(Ot), tablet: r(ic), device: r(Ot) || r(ic) },
      other: {
        blackberry: r(rc),
        blackberry10: r(nc),
        opera: r(sc),
        firefox: r(ac),
        chrome: r(oc),
        device: r(rc) || r(nc) || r(sc) || r(ac) || r(oc),
      },
      any: !1,
      phone: !1,
      tablet: !1,
    };
  return (
    (n.any =
      n.apple.device || n.android.device || n.windows.device || n.other.device),
    (n.phone = n.apple.phone || n.android.phone || n.windows.phone),
    (n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet),
    n
  );
}
var lc = id;
var rd = 0.8,
  nd = (s) => {
    let e = "/",
      t = document.querySelector("#c-elements h2"),
      i = document.createElement("canvas"),
      r = i.getContext("2d"),
      n = 0,
      o = 0,
      a = document.querySelector("#c-elements h4"),
      u = document.createElement("canvas"),
      l = u.getContext("2d"),
      c = 0,
      p = 0,
      f = 0,
      h = 0,
      g = (m, b) => {
        let w = b.getBoundingClientRect();
        (m.width = Y(w.width * y.pixelRatio)),
          (m.height = Y(w.height * y.pixelRatio));
      },
      d = (m, b, w) => {
        let C = b.getBoundingClientRect(),
          x = Y(
            Number(
              window.getComputedStyle(b, null).fontSize.replace("px", "")
            ) * y.pixelRatio
          ),
          v = Y(
            Number(
              window.getComputedStyle(b, null).lineHeight.replace("px", "")
            ) *
              y.pixelRatio *
              rd
          );
        return (
          (m.fillStyle = y.black),
          (m.strokeStyle = y.white),
          (m.lineWidth = y.mobile
            ? Je(0.2) * y.pixelRatio
            : Je(0.4) * y.pixelRatio),
          (m.font = `${x}px ${y.antonia}`),
          m.clearRect(0, 0, w.width, w.height),
          m.fillText(e, 0, v),
          m.strokeText(e, 0, v),
          { width: C.width, height: C.height }
        );
      },
      _ = () => {
        if (f !== y.wWidth || f !== y.wHeight) {
          (f = y.wWidth), (h = y.wHeight), g(i, t), g(u, a);
          let m = d(r, t, i),
            b = d(l, a, u);
          (n = m.width * y.pixelRatio),
            (o = m.height * y.pixelRatio),
            (c = b.width * y.pixelRatio),
            (p = b.height * y.pixelRatio);
        }
      };
    return (
      D.ticker.add(_),
      {
        h2: { canvas: i, width: n, height: o },
        h4: { canvas: u, width: c, height: p },
      }
    );
  },
  cc = nd;
var Fn = lc(),
  sd = {
    scroll: void 0,
    isMobile: Fn.any,
    isPhone: Fn.phone,
    isTablet: Fn.tablet,
    isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    preloader: null,
    homeController: void 0,
    selectedProjectIndex: 0,
    currentProjectIndex: 0,
    numOfProjects: 0,
    nextProjectTransition: !1,
    mobile: !1,
    orientation: "landscape",
    titleYPercent: 260,
    slashRenderer: cc(Fn.phone),
    wWidth: window.innerWidth,
    wHeight: window.innerHeight,
    pixelRatio: Math.min(3, window.devicePixelRatio),
    black: "#0f0f0f",
    white: "#fbfbfb",
    clarika: "clarikageo-regular",
    antonia: "AntoniaH1-Light",
  },
  y = sd;
var od = Math.PI / 180;
function Y(s) {
  return ~~(0.5 + s);
}
function Nr(s, e, t) {
  return s * (1 - t) + e * t;
}
function vi(s) {
  return s * od;
}
function Je(s, e = 1440) {
  return (s / e) * y.wWidth;
}
var jo = class {
    constructor({ element: e, index: t, length: i }) {
      var n, o;
      (this.height = 0),
        (this.width = 0),
        (this.yOffset = 0),
        (this.heightTotal = 0),
        (this.baseX = 0),
        (this.centerY = 0),
        (this.rotation = 0),
        (this.halfWidth = 0),
        (this.halfHeight = 0),
        (this.centered = !1),
        (this.topBound = 0),
        (this.bottomBound = 0),
        (this.render = ({ progress: a, image: u }) => {
          (this.centerY = u.rotationCenter), (this.rotation = u.rotation);
          let l = this.normalizer(a);
          (this.position.x = this.getX(l)),
            (this.position.y = this.getY(l)),
            (this.position.rotation = this.getRotation(l)),
            this.xSetter(this.position.x),
            this.ySetter(this.position.y);
          let c = this.position.y + this.height / 2,
            p = c > this.topBound && c < this.bottomBound;
          this.centered !== p && this.setCentered(p),
            this.rotationSetter(this.position.rotation);
        }),
        (this.draw = (a) => {
          let u = (this.baseX + this.position.x) * y.pixelRatio,
            l = this.position.y * y.pixelRatio;
          a.save();
          let c = Y(y.wWidth * 0.5) * y.pixelRatio,
            p = Y(y.wHeight * this.centerY) * y.pixelRatio;
          a.translate(c, p),
            a.rotate(vi(this.rotation)),
            a.translate(-c, -p),
            a.translate(
              u + this.halfWidth * y.pixelRatio,
              l + this.halfHeight * y.pixelRatio
            ),
            a.rotate(vi(this.position.rotation)),
            a.translate(
              -this.halfWidth * y.pixelRatio,
              -this.halfHeight * y.pixelRatio
            ),
            a.rect(0, 0, this.width * y.pixelRatio, this.height * y.pixelRatio),
            a.restore();
        }),
        (this.setCentered = (a) => {
          (this.centered = a), (this.anchor.dataset.centered = `${a}`);
        }),
        (this.resize = (a, u) => {
          let l = y.wWidth * 0.044 * 2;
          (this.height = D.getProperty(this.el, "height")),
            (this.width = D.getProperty(this.el, "width")),
            (this.halfWidth = this.width / 2),
            (this.halfHeight = this.height / 2),
            (this.yOffset = y.wHeight / 2 - this.height / 2),
            (this.y = this.yOffset + this.height * this.index),
            (this.heightTotal = this.height * this.length),
            (this.getRotation = D.utils.interpolate([-3, 10])),
            (this.getX = D.utils.pipe(D.utils.interpolate([l, -l])));
          let c = y.wHeight / 2 - this.height / 2,
            p = -this.height + this.height * a.peek,
            f = y.wHeight - this.height * a.peek,
            h = f - c;
          (this.getY = D.utils.pipe(
            D.utils.interpolate([p - h, p, c, f, f + h])
          )),
            (this.topBound = y.wHeight * 0.3),
            (this.bottomBound = y.wHeight * 0.7),
            this.updateImageData(u),
            (this.baseX = document.querySelector(".image-markers").offsetLeft);
        }),
        (this.updateImageData = (a) => {
          let u = y.wWidth * (a.travelXStart / 100) * 2,
            l = y.wWidth * (a.travelXMiddle / 100) * 2,
            c = y.wWidth * (a.travelXEnd / 100) * 2;
          (this.getX = D.utils.interpolate([c, l, u])),
            (this.getRotation = D.utils.interpolate([
              a.endAngle,
              a.middleAngle,
              a.startAngle,
            ]));
        }),
        (this.destroy = () => {}),
        (this.el = e),
        (this.index = t),
        (this.length = i),
        (this.extra = 0),
        (this.y = 0),
        (this.position = { x: 0, y: 0, rotation: 0 }),
        (this.img = this.el.querySelector("img")),
        (this.anchor = this.el.querySelector("a"));
      let r = y.isMobile
        ? (n = this.img.dataset.srcSmall) != null
          ? n
          : ""
        : (o = this.img.dataset.src) != null
        ? o
        : "";
      (this.img.src = y.preloader.get(r).src),
        (this.ySetter = D.quickSetter(this.el, "y", "px")),
        (this.xSetter = D.quickSetter(
          this.el.querySelector(".home-image"),
          "x",
          "px"
        )),
        (this.rotationSetter = D.quickSetter(this.img, "rotation", "deg")),
        D.set(this.img, { transformOrigin: "center center" }),
        (this.normalizer = D.utils.pipe(
          D.utils.mapRange(-0.5, 1.5, 0, 1),
          D.utils.clamp(0, 1)
        )),
        (this.getRotation = D.utils.interpolate([-3, 10])),
        (this.getX = D.utils.pipe(D.utils.interpolate([0, 0]))),
        (this.getY = D.utils.pipe(D.utils.interpolate([0, 0])));
    }
  },
  hc = jo;
var Ro = class {
    constructor({ el: e, font: t, stroke: i, offsetY: r = 0.98 }) {
      (this.render = () => {
        !this.ctx ||
          !this.canvas ||
          (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
          this.ctx.fillText(this.text, 0, this.offsettedY),
          this.stroke && this.ctx.strokeText(this.text, 0, this.offsettedY));
      }),
        (this.resize = (n) => {
          (this.rect = this.el.getBoundingClientRect()),
            (this.size.height = Y(
              D.getProperty(this.el, "height") * y.pixelRatio
            )),
            (this.size.width = Y(
              D.getProperty(this.el, "width") * y.pixelRatio
            )),
            (this.fontSize = Y(
              Number(
                window
                  .getComputedStyle(this.el, null)
                  .fontSize.replace("px", "")
              ) * y.pixelRatio
            )),
            (this.canvas.width = this.size.width),
            (this.canvas.height = this.size.height),
            (this.ctx.font = `${this.fontSize}px ${this.font}`),
            (this.ctx.fillStyle = y.black),
            (this.ctx.strokeStyle = y.white),
            (this.ctx.lineWidth =
              (y.mobile ? Je(0.6) : Je(0.8)) * y.pixelRatio),
            (this.textWidth = Y(this.ctx.measureText(this.text).width)),
            n && (this.yOffset = Y(n.height * 0.97 * y.pixelRatio)),
            (this.offsettedY = Y(
              this.yOffset > 0
                ? this.yOffset
                : this.size.height * this.heightOffset
            )),
            this.render();
        }),
        (this.destroy = () => {
          (this.ctx = void 0), (this.canvas = void 0);
        }),
        (this.el = e),
        (this.font = t),
        (this.stroke = i),
        (this.text = this.el.textContent.toUpperCase()),
        (this.size = { height: 0, width: 0 }),
        (this.fontSize = 0),
        (this.canvas = document.createElement("canvas")),
        (this.ctx = this.canvas.getContext("2d")),
        (this.textWidth = 0),
        (this.yOffset = 0),
        (this.heightOffset = r),
        (this.offsettedY = 0);
    }
  },
  An = Ro;
var Mo = class {
    constructor({ element: e, index: t, length: i, sub: r = !1 }) {
      (this.height = 0),
        (this.render = ({ progress: o, easedProgress: a }) => {
          (this.position.y = this.getY(this.sub ? a : o)),
            this.ySetter(this.position.y);
        }),
        (this.draw = (o) => {
          if (this.textRenderer && this.viewport) {
            let a = this.position.y * y.pixelRatio;
            (this.pos.y = o.position.y),
              o.ctx.drawImage(
                this.textRenderer.canvas,
                this.position.x + this.position.baseX,
                a
              );
          }
        }),
        (this.resize = (o, a, u = 0, l) => {
          if (
            ((this.height = D.getProperty(this.el, "height")),
            (this.viewport = o),
            (this.getY = D.utils.mapRange(
              0,
              1,
              -this.height * 1.1,
              this.height * 1.1
            )),
            this.sub && (this.position.baseX = -u),
            this.textRenderer)
          ) {
            this.textRenderer.resize(this.sub ? a.subtitleRect : a.titleRect);
            let c = l.canvas.width - this.textRenderer.textWidth;
            this.viewport.mobile ||
              (c = this.sub
                ? l.canvas.width - this.textRenderer.textWidth
                : l.canvas.width / 2 - this.textRenderer.textWidth / 2),
              (this.position.x = c),
              (this.pos.x =
                l.position.x + this.position.x + this.position.baseX);
          }
        }),
        (this.destroy = () => {}),
        (this.el = e),
        (this.sub = r),
        (this.text = this.el.dataset.title.toUpperCase()),
        (this.number = this.el.dataset.number),
        (this.index = t),
        (this.length = i),
        (this.ySetter = D.quickSetter(this.el, "y", "px")),
        (this.position = {
          baseX: 0,
          baseY: 0,
          x: 0,
          y: 0,
          width: 0,
          height: 0,
        }),
        (this.numberPos = { x: 0, y: 0, width: 0, height: 0, spacing: 0 }),
        (this.pos = { x: 0, y: 0 }),
        (this.getY = D.utils.pipe(
          D.utils.mapRange(0, 1, -this.height, this.height)
        ));
      let n = this.el.querySelector("h4");
      n && (this.textRenderer = new An({ el: n, font: y.antonia, stroke: !0 }));
    }
  },
  Oo = Mo;
var Lo = class {
    constructor({ element: e }) {
      (this.active = !1),
        (this.enabled = !1),
        (this.render = (t) => {
          if (!this.enabled) return;
          let i = Y(t * 100) / 100;
          i >= 0.485 && i <= 0.515 ? this.setActive(!0) : this.setActive(!1);
        }),
        (this.setActive = (t) => {
          t !== this.active &&
            ((this.active = t), this.animateActive(this.active));
        }),
        (this.animateActive = (t, i = 0.334) => {
          t
            ? D.to([this.topic, this.role], {
                opacity: 1,
                duration: i,
                stagger: 0.1,
                delay: 0.25,
                overwrite: !0,
                ease: "sine.in",
              })
            : D.to([this.topic, this.role], {
                opacity: 0,
                duration: i,
                overwrite: !0,
                stagger: 0,
                ease: "sine.in",
              });
        }),
        (this.el = e),
        (this.topic = this.el.querySelector(".h1")),
        (this.role = this.el.querySelector(".spaced")),
        this.animateActive(!1, 0);
    }
  },
  fc = Lo;
var Bo = class {
    constructor({ element: e }) {
      (this.active = !1),
        (this.height = 0),
        (this.enabled = !1),
        (this.render = ({ progress: t }) => {
          if (!this.enabled) return;
          let i = Y(t * 100) / 100;
          i >= 0.485 && i <= 0.515 ? this.setActive(!0) : this.setActive(!1);
        }),
        (this.setActive = (t) => {
          t !== this.active &&
            ((this.active = t),
            this.active
              ? D.to(this.el, {
                  opacity: 1,
                  duration: 0.334,
                  delay: 0.55,
                  overwrite: !0,
                  ease: "sine.in",
                })
              : D.to(this.el, {
                  opacity: 0,
                  duration: 0.334,
                  delay: 0,
                  overwrite: !0,
                  ease: "sine.in",
                }));
        }),
        (this.resize = () => {}),
        (this.el = e),
        D.set(this.el, { opacity: 0 });
    }
  },
  pc = Bo;
var Io = class {
    constructor(e, t = 1) {
      (this.render = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
          this.offCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }),
        (this.draw = (i, r, n) => {
          this.offCtx.drawImage(this.canvas, 0, Y(r)),
            n
              ? i.drawImage(this.offCanvas, n.x, n.y)
              : i.drawImage(this.offCanvas, this.position.x, this.position.y);
        }),
        (this.resize = () => {
          (this.rect = this.el.getBoundingClientRect()),
            (this.offCanvas.width = this.canvas.width =
              Y(this.rect.width * y.pixelRatio)),
            (this.offCanvas.height = this.canvas.height =
              Y(this.rect.height * this.offsetY * y.pixelRatio)),
            (this.position.x = Y(this.rect.x * y.pixelRatio)),
            (this.position.y = Y(this.rect.y * y.pixelRatio)),
            this.render();
        }),
        (this.destroy = () => {}),
        (this.offsetY = t),
        (this.canvas = document.createElement("canvas")),
        (this.offCanvas = document.createElement("canvas")),
        (this.ctx = this.canvas.getContext("2d")),
        (this.offCtx = this.offCanvas.getContext("2d")),
        (this.el = e),
        (this.rect = this.el.getBoundingClientRect()),
        (this.position = { x: 0, y: 0 });
    }
  },
  qr = Io;
var zo = class {
  constructor({ element: e, index: t, length: i, sub: r }) {
    (this.draw = (n, o, a) => {
      this.display.render(),
        this.display.ctx.drawImage(
          this.textRenderer.canvas,
          0,
          this.position.y
        ),
        this.display.draw(n, this.display.canvas.height * o, {
          x: a.x - this.display.canvas.width - this.spacing,
          y: a.y,
        });
    }),
      (this.render = ({ progress: n, easedProgress: o }) => {
        this.position.y = this.getY(this.sub ? o : n);
      }),
      (this.resize = () => {
        this.display.resize(), this.textRenderer.resize();
        let n = y.isPhone ? 1.65 : 2;
        (this.getY = D.utils.pipe(
          D.utils.mapRange(
            0,
            1,
            -this.display.canvas.height * n,
            this.display.canvas.height * n
          )
        )),
          (this.spacing = (24 / 1440) * y.wWidth * y.pixelRatio);
      }),
      (this.destroy = () => {
        this.display.destroy(), this.textRenderer.destroy();
      }),
      (this.el = e),
      (this.index = t),
      (this.length = i),
      (this.sub = r),
      (this.position = { baseX: 0, baseY: 0, x: 0, y: 0, width: 0, height: 0 }),
      (this.textRenderer = new An({
        el: this.el,
        stroke: !1,
        font: y.clarika,
        offsetY: 0.55,
      })),
      (this.display = new qr(this.el, 0.6)),
      (this.getY = D.utils.pipe(D.utils.mapRange(0, 1, -0, 0))),
      (this.spacing = 0);
  }
};
var No = class {
    constructor({
      image: e,
      title: t,
      subtitle: i,
      info: r,
      year: n,
      index: o,
      length: a,
    }) {
      var l;
      (this.selected = !1),
        (this.isAbove = !1),
        (this.isBelow = !1),
        (this.topEdge = 0),
        (this.botomEdge = 0),
        (this.render = ({ scroll: c, direction: p, image: f }) => {
          let h = this.display.y - c.current - this.display.extra,
            g = this.display.y - c.currentEased - this.display.extra,
            d = this.normalizeProgress(h),
            _ = this.normalizeProgress(g);
          (this.isAbove = h + this.display.height < this.topEdge),
            (this.isBelow = h > this.botomEdge),
            p === "up" &&
              this.isAbove &&
              ((this.display.loop -= 1),
              (this.display.extra -= this.display.heightTotal),
              (this.isAbove = !1),
              (this.isBelow = !1)),
            p === "down" &&
              this.isBelow &&
              ((this.display.loop += 1),
              (this.display.extra += this.display.heightTotal),
              (this.isBelow = !1),
              (this.isAbove = !1));
          let m = { image: f, progress: d, easedProgress: _ };
          this.image.render(m),
            this.title.render(m),
            this.subtitle.render(m),
            this.info.render(d),
            this.year.render(m),
            this.number.render(m);
        }),
        (this.resize = (c, p, f, h = 0, g, d) => {
          (this.display.width = y.wWidth),
            (this.display.height = y.wHeight),
            (this.display.y = this.display.height * this.index),
            (this.display.heightTotal = this.display.height * this.length),
            (this.display.extra = this.display.loop * this.display.heightTotal),
            (this.normalizeProgress = D.utils.normalize(
              -this.display.height,
              this.display.height
            )),
            (this.topEdge = -y.wHeight - this.display.height / 2),
            (this.botomEdge = y.wHeight + this.display.height / 2),
            this.image.resize(c, f),
            this.title.resize(c, p, h, g),
            this.subtitle.resize(c, p, h, d),
            this.number.resize(),
            this.year.resize();
        }),
        (this.destroy = () => {
          this.image.destroy(),
            this.title.destroy(),
            this.subtitle.destroy(),
            this.number.destroy();
        }),
        (this.index = o),
        (this.length = a),
        (this.display = {
          width: y.wWidth,
          height: y.wHeight,
          y: 0,
          extra: 0,
          loop: 0,
          heightTotal: 0,
        }),
        (this.image = new hc({ element: e, index: o, length: a })),
        (this.title = new Oo({ element: t, index: o, length: a })),
        (this.subtitle = new Oo({ element: i, index: o, length: a, sub: !0 }));
      let u = !!t.querySelector(".number");
      (this.number = new zo({
        element:
          (l = t.querySelector(".number")) != null
            ? l
            : i.querySelector(".number"),
        length: a,
        index: o,
        sub: !u,
      })),
        (this.info = new fc({ element: r })),
        (this.year = new pc({ element: n })),
        (this.normalizeProgress = D.utils.normalize(
          -this.display.height,
          this.display.height
        ));
    }
  },
  dc = No;
D.registerPlugin(B);
var qo = 0.65,
  Ho = 1,
  ad = (s, e = !1) => {
    let t = document.createElement("canvas"),
      i = t.getContext("2d"),
      r = { x: 0, y: 0 },
      n = { x: -qo, y: Ho },
      o = (f, h) => {
        (r.x = Y(f)), (r.y = Y(h));
      },
      a = () => {
        D.to(n, {
          x: 0,
          y: 0,
          ease: B.create("custom", "0.75, 0, 0, 1"),
          duration: 0.8,
        });
      },
      u = (f) => {
        D.to(n, {
          x: f ? qo : -qo,
          y: f ? -Ho : Ho,
          ease: f
            ? B.create("custom", "0.47, 0, 0.05, 1")
            : B.create("custom", "0.75, 0, 0, 1"),
          duration: 0.7,
        });
      },
      l = () => {
        i.clearRect(0, 0, t.width, t.height),
          i.drawImage(s.canvas, Y(n.x * t.width), Y(n.y * t.height));
      },
      c = (f) => {
        f.drawImage(t, r.x, Y(r.y - s.height * 0.05));
      },
      p = () => {
        (t.width = s.canvas.width), (t.height = s.canvas.height);
      };
    return (
      e && ((n.x = 0), (n.y = 0)),
      {
        setContainerPosition: o,
        render: l,
        draw: c,
        resize: p,
        show: a,
        hide: u,
        height() {
          return t.height;
        },
        width() {
          return t.width;
        },
      }
    );
  },
  ir = ad;
var Xo = class {
    constructor() {
      (this.slash = ir(y.slashRenderer.h4, !1)),
        (this.yPos = 1),
        (this.yPos2 = 1),
        (this.render = (e) => {
          this.renderMask(e),
            this.titlesDisplay.render(),
            this.subtitlesDisplay.render(),
            this.slash.render(),
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
            this.mainTextCtx.clearRect(
              0,
              0,
              this.canvas.width,
              this.canvas.height
            ),
            this.mainMaskCtx.clearRect(
              0,
              0,
              this.canvas.width,
              this.canvas.height
            );
          let t = this.yPos * this.pixelRatio * this.slash.height(),
            i = this.yPos2 * this.pixelRatio * this.slash.height();
          e.forEach((r) => {
            r.title.draw(this.titlesDisplay),
              r.subtitle.draw(this.subtitlesDisplay),
              r.number.draw(
                this.mainTextCtx,
                this.yPos,
                r.number.sub ? r.subtitle.pos : r.title.pos
              );
          }),
            this.titlesDisplay.draw(this.mainTextCtx, t),
            this.subtitlesDisplay.draw(this.mainTextCtx, i),
            this.slash.draw(this.mainTextCtx),
            this.ctx.drawImage(
              this.mainTextCanvas,
              0,
              0,
              this.canvas.width,
              this.canvas.height
            ),
            this.mainMaskCtx.save(),
            this.mainMaskCtx.drawImage(
              this.mainTextCanvas,
              0,
              0,
              this.canvas.width,
              this.canvas.height
            ),
            (this.mainMaskCtx.globalCompositeOperation = "source-in"),
            this.mainMaskCtx.drawImage(
              this.maskCanvas,
              0,
              0,
              this.canvas.width,
              this.canvas.height
            ),
            this.mainMaskCtx.restore(),
            this.ctx.drawImage(
              this.mainMaskCanvas,
              0,
              0,
              this.canvas.width,
              this.canvas.height
            );
        }),
        (this.renderMask = (e) => {
          this.maskCtx.clearRect(
            0,
            0,
            this.maskCanvas.width,
            this.maskCanvas.height
          ),
            (this.maskCtx.fillStyle = "white"),
            this.maskCtx.beginPath(),
            e.forEach((t) => t.image.draw(this.maskCtx)),
            this.maskCtx.fill();
        }),
        (this.resize = (e) => {
          (this.mainMaskCanvas.width =
            this.mainTextCanvas.width =
            this.canvas.width =
              Y(e.width * this.pixelRatio)),
            (this.mainMaskCanvas.height =
              this.mainTextCanvas.height =
              this.canvas.height =
                Y(e.height * this.pixelRatio)),
            (this.maskCanvas.width = e.width * this.pixelRatio),
            (this.maskCanvas.height = e.height * this.pixelRatio),
            (this.titleRect = this.titleContainer.getBoundingClientRect()),
            (this.subtitleRect =
              this.subtitleContainer.getBoundingClientRect()),
            this.slash.resize();
          let t = Y(
              (this.subtitleRect.x + this.subtitleRect.width) * this.pixelRatio
            ),
            i = Y(
              this.subtitleRect.y * this.pixelRatio -
                this.slash.height() * (y.mobile ? 0.08 : 0.1)
            );
          (t -= this.slash.width()),
            this.slash.setContainerPosition(t, i),
            this.slash.resize(),
            this.titlesDisplay.resize(),
            this.subtitlesDisplay.resize();
        }),
        (this.destroy = () => {
          document.querySelector(".home").removeChild(this.canvas);
        }),
        (this.pixelRatio = y.pixelRatio),
        (this.canvas = document.createElement("canvas")),
        (this.canvas.id = "canvasMask"),
        document.querySelector(".home").appendChild(this.canvas),
        (this.maskCanvas = document.createElement("canvas")),
        (this.mainTextCanvas = document.createElement("canvas")),
        (this.mainMaskCanvas = document.createElement("canvas")),
        (this.titleContainer = document.querySelector(
          ".home .title-container"
        )),
        (this.subtitleContainer = document.querySelector(
          ".home .subtitle-container"
        )),
        (this.htmlTitle = document.querySelector(
          ".home .title-container .title h4"
        )),
        (this.htmlTitleNumber = document.querySelector(
          ".home .title-container .title .number"
        )),
        (this.ctx = this.canvas.getContext("2d")),
        (this.maskCtx = this.maskCanvas.getContext("2d")),
        (this.mainTextCtx = this.mainTextCanvas.getContext("2d")),
        (this.mainMaskCtx = this.mainMaskCanvas.getContext("2d")),
        (this.titleRect = this.titleContainer.getBoundingClientRect()),
        (this.subtitleRect = this.subtitleContainer.getBoundingClientRect()),
        (this.titlesDisplay = new qr(this.titleContainer)),
        (this.subtitlesDisplay = new qr(this.subtitleContainer));
    }
  },
  gc = Xo;
D.registerPlugin(B);
var mc = {
    portrait: {
      endAngle: -11,
      middleAngle: 5,
      startAngle: 20,
      travelXStart: -20,
      travelXMiddle: 0,
      travelXEnd: 20,
      containerRotation: 6,
      rotationCenter: 0.5,
    },
    landscape: {
      endAngle: -8,
      middleAngle: 9.5,
      startAngle: 28,
      travelXStart: 0,
      travelXMiddle: 4,
      travelXEnd: 8,
      containerRotation: 2,
      rotationCenter: 1.5,
    },
  },
  Uo = class {
    constructor() {
      (this.isDown = !1),
        (this.start = 0),
        (this.hasEntered = !1),
        (this.clickable = !0),
        (this.itemIndex = 0),
        (this.scrollEnabled = !0),
        (this.createMedias = () => {
          let e = D.utils.toArray(".home .image-markers .image"),
            t = D.utils.toArray(".home .title-container .title"),
            i = D.utils.toArray(".home .subtitle-container .title"),
            r = D.utils.toArray(".home .infos-container .infos .info"),
            n = D.utils.toArray(".home .infos-container .year");
          this.medias = e.map(
            (o, a) =>
              new dc({
                image: o,
                index: a,
                length: e.length,
                title: t[a],
                subtitle: i[a],
                info: r[a],
                year: n[a],
              })
          );
        }),
        (this.initListeners = () => {
          this.container.addEventListener("wheel", this.onWheel),
            window.addEventListener("keydown", this.onKeyDown),
            this.container.addEventListener("mousedown", this.onTouchDown),
            this.container.addEventListener("mousemove", this.onTouchMove),
            window.addEventListener("mouseup", this.onTouchUp),
            this.container.addEventListener("touchstart", this.onTouchDown),
            this.container.addEventListener("touchmove", this.onTouchMove),
            window.addEventListener("touchend", this.onTouchUp),
            this.mediaQuery.addEventListener(
              "change",
              this.onMediaQueryHandler
            ),
            this.orientationMediaQuery.addEventListener(
              "change",
              this.onOrientationChange
            ),
            this.onMediaQueryHandler(this.mediaQuery),
            this.onOrientationChange(this.orientationMediaQuery),
            D.ticker.add(this.onRender),
            document
              .querySelectorAll(".home-image")
              .forEach((e) => e.addEventListener("click", this.onClickImage));
        }),
        (this.onClickImage = (e) => {
          var t;
          if (!this.clickable) e.preventDefault();
          else {
            let i = e.currentTarget;
            y.selectedProjectIndex = parseInt(
              (t = i.dataset.index) != null ? t : "1"
            );
            let r = i.dataset.centered === "true",
              n = !1;
            if (r) {
              pt.go(i.href, i, e);
              return;
            }
            (n = Math.sign(i.getBoundingClientRect().y) === 1),
              this.onNavigateTo(n),
              e.preventDefault();
          }
        }),
        (this.onTouchDown = (e) => {
          (this.isDown = !0),
            D.set(".home-container", { cursor: "grabbing" }),
            (this.scroll.position = this.scroll.current),
            (this.start = e.touches ? e.touches[0].clientY : e.clientY);
        }),
        (this.onTouchMove = (e) => {
          if (!this.isDown) return;
          let t = e.touches ? e.touches[0].clientY : e.clientY,
            i = (this.start - t) * this.scroll.speedDrag;
          i >= 15 && (this.clickable = !1),
            (this.scroll.target = this.scroll.position + i);
        }),
        (this.onTouchUp = (e) => {
          (this.isDown = !1),
            setTimeout(() => (this.clickable = !0), 100),
            D.set(".home-container", { cursor: "grab" }),
            this.onCheckScroll();
        }),
        (this.onWheel = (e) => {
          let i = Gl(e).pixelY;
          (this.scroll.target += i * this.scroll.speedWheel),
            D.killTweensOf(this.scroll),
            this.onCheckDebounce();
        }),
        (this.onCheckScroll = (e = this.scroll.snapDuration) => {
          let { height: t } = this.medias[0].display,
            i = Y(Math.abs(this.scroll.target) / t);
          y.currentProjectIndex = i;
          let r = t * i;
          this.itemIndex = i;
          let n = this.scroll.target < 0 ? -r : r;
          e === 0
            ? D.set(this.scroll, { target: n, current: n, currentEased: n })
            : (D.to(this.scroll, { superEase: 0.025, duration: e * 0.25 }),
              D.to(this.scroll, {
                superEase: 0.05,
                duration: e * 0.5,
                delay: e * 0.25,
                ease: this.scroll.snapEase,
              }),
              D.to(this.scroll, {
                target: n,
                duration: e,
                ease: this.scroll.snapEase,
              }));
        }),
        (this.onKeyDown = (e) => {
          e.code === "ArrowRight" || e.code === "ArrowUp"
            ? this.onNavigateTo(!0)
            : (e.code === "ArrowLeft" || e.code === "ArrowDown") &&
              this.onNavigateTo(!1);
        }),
        (this.onNavigateTo = (e) => {
          let { height: t } = this.medias[0].display,
            r = t * (e ? 1 : -1);
          D.to(this.scroll, {
            target: this.scroll.target + r,
            duration: this.scroll.snapDuration * 0.75,
            ease: this.scroll.snapEase,
            onComplete: () => this.onCheckScroll(),
          });
        }),
        (this.onRender = () => {
          (this.viewport.width !== y.wWidth ||
            this.viewport.height !== y.wHeight) &&
            (this.onResize(), this.onResizeDebounce()),
            this.scrollEnabled &&
              ((this.scroll.current = Nr(
                this.scroll.current,
                this.scroll.target,
                this.scroll.ease
              )),
              (this.scroll.currentEased = Nr(
                this.scroll.currentEased,
                this.scroll.target,
                this.scroll.superEase
              )),
              this.scroll.current > this.scroll.last
                ? this.setDirection("up")
                : this.setDirection("down"),
              this.medias.forEach((e) =>
                e.render({
                  scroll: this.scroll,
                  direction: this.direction,
                  viewport: this.viewport,
                  image: this.imageData,
                })
              )),
            this.canvas.render(this.medias),
            (this.scroll.last = this.scroll.current);
        }),
        (this.setDirection = (e) => {
          this.direction !== e && (this.direction = e);
        }),
        (this.onMediaQueryHandler = (e) => {
          this.viewport.mobile = !e.matches;
        }),
        (this.onOrientationChange = (e) => {
          this.viewport.orientation = e.matches ? "portrait" : "landscape";
          let t = mc[this.viewport.orientation];
          (this.imageData.rotationCenter = t.rotationCenter),
            this.hasEntered &&
              ((this.imageData.startAngle = t.startAngle),
              (this.imageData.middleAngle = t.middleAngle),
              (this.imageData.endAngle = t.endAngle),
              (this.imageData.travelXStart = t.travelXStart),
              (this.imageData.travelXMiddle = t.travelXMiddle),
              (this.imageData.travelXEnd = t.travelXEnd),
              (this.imageData.rotation = t.containerRotation),
              D.set(".home .images-container", {
                rotation: t.containerRotation,
              }));
        }),
        (this.onResize = () => {
          (this.viewport.width = y.wWidth),
            (this.viewport.height = y.wHeight),
            (this.viewport.aspectRatio =
              this.viewport.width / this.viewport.height);
          let e = 0;
          this.viewport.orientation === "portrait"
            ? ((e = D.utils.mapRange(
                0.5633802817,
                0.7496339678,
                this.imageSizeData.portrait.sizeMin,
                this.imageSizeData.portrait.sizeMax,
                this.viewport.aspectRatio
              )),
              (this.viewport.peek = D.utils.mapRange(
                0.5633802817,
                0.7496339678,
                this.imageSizeData.portrait.peekMin,
                this.imageSizeData.portrait.peekMax,
                this.viewport.aspectRatio
              )))
            : ((e = D.utils.mapRange(
                1.3333333333,
                1.7777777778,
                this.imageSizeData.landscape.sizeMin,
                this.imageSizeData.landscape.sizeMax,
                this.viewport.aspectRatio
              )),
              (this.viewport.peek = D.utils.mapRange(
                1.3333333333,
                1.7777777778,
                this.imageSizeData.landscape.peekMin,
                this.imageSizeData.landscape.peekMax,
                this.viewport.aspectRatio
              ))),
            D.set(this.imageMarkers, { width: e * this.viewport.width }),
            this.canvas.resize(this.viewport),
            this.medias.forEach((t) =>
              t.resize(
                this.viewport,
                {
                  titleRect: this.canvas.titleRect,
                  subtitleRect: this.canvas.subtitleRect,
                },
                this.imageData,
                this.canvas.slash.width(),
                this.canvas.titlesDisplay,
                this.canvas.subtitlesDisplay
              )
            ),
            this.onCheckScroll(0);
        }),
        (this.transitionIn = async () => {
          let e = mc[this.viewport.orientation],
            t = D.timeline({
              paused: !0,
              id: "home in timeline",
              onComplete: () => {
                this.hasEntered = !0;
              },
            });
          return (
            t.from(
              ".home .images-container",
              {
                yPercent: 240,
                duration: 2.169,
                ease: B.create("custom", "0.36, 0, 0, 1"),
              },
              0
            ),
            t.to(
              this.imageData,
              {
                startAngle: e.startAngle * 0.5,
                middleAngle: e.middleAngle * 0.5,
                endAngle: e.endAngle * 0.5,
                duration: 2.169,
                ease: B.create("custom", "0.36, 0, 0, 1"),
                onUpdate: () => {
                  this.medias.forEach((i) =>
                    i.image.updateImageData(this.imageData)
                  );
                },
              },
              "<"
            ),
            t.to(".home .images-container", {
              rotation: e.containerRotation,
              duration: 1.084,
              ease: B.create("custom", "0.64, 0, 0, 1"),
            }),
            t.to(
              this.imageData,
              {
                rotation: e.containerRotation,
                endAngle: e.endAngle,
                middleAngle: e.middleAngle,
                startAngle: e.startAngle,
                travelXStart: e.travelXStart,
                travelXMiddle: e.travelXMiddle,
                travelXEnd: e.travelXEnd,
                duration: 1.084,
                ease: B.create("custom", "0.64, 0, 0, 1"),
                onUpdate: () => {
                  this.medias.forEach((i) =>
                    i.image.updateImageData(this.imageData)
                  );
                },
              },
              "<"
            ),
            t.to(
              this.canvas,
              {
                yPos: 0,
                ease: B.create("custom", "0.75, 0, 0, 1"),
                duration: 1,
              },
              "<-0.1"
            ),
            t.to(
              this.canvas,
              {
                yPos2: 0,
                ease: B.create("custom", "0.75, 0, 0, 1"),
                duration: 1,
              },
              "<+0.05"
            ),
            t.add(() => {
              this.medias[0].info.setActive(!0),
                this.medias[0].year.setActive(!0);
            }, "<+0.2"),
            t.add(() => {
              this.canvas.slash.show();
            }, "<-0.3"),
            t.add(() => {
              this.medias.forEach((i) => {
                (i.info.enabled = !0), (i.year.enabled = !0);
              });
            }, ">"),
            t.play()
          );
        }),
        (this.transitionOut = async () => {
          let e = D.timeline({ paused: !0 });
          return (
            e.to(
              this.canvas,
              {
                yPos: -1,
                ease: B.create("custom", "0.75, 0, 0, 1"),
                duration: 1,
              },
              0
            ),
            e.to(
              this.canvas,
              {
                yPos2: -1,
                ease: B.create("custom", "0.75, 0, 0, 1"),
                duration: 1,
              },
              0.05
            ),
            e.add(() => {
              this.canvas.slash.hide(!0);
            }, "<+0.2"),
            e.play()
          );
        }),
        (this.removeListeners = () => {
          this.container.removeEventListener("wheel", this.onWheel),
            window.removeEventListener("keydown", this.onKeyDown),
            this.container.removeEventListener("mousedown", this.onTouchDown),
            this.container.removeEventListener("mousemove", this.onTouchMove),
            window.removeEventListener("mouseup", this.onTouchUp),
            this.container.removeEventListener("touchstart", this.onTouchDown),
            this.container.removeEventListener("touchmove", this.onTouchMove),
            window.removeEventListener("touchend", this.onTouchUp),
            document
              .querySelectorAll(".home-image")
              .forEach((e) =>
                e.removeEventListener("click", this.onClickImage)
              ),
            D.ticker.remove(this.onRender);
        }),
        (this.destroy = () => {
          this.removeListeners(),
            this.medias.forEach((e) => e.destroy()),
            this.canvas.destroy();
        }),
        (this.imageMarkers = document.querySelector(".image-markers")),
        (this.scroll = {
          position: 0,
          target: 0,
          current: 0,
          currentEased: 0,
          last: 0,
          ease: 0.05,
          superEase: 0.05,
          speedWheel: 1.1,
          speedDrag: y.isMobile ? 2 : 1.5,
          snapEase: "power2.inOut",
          snapDuration: 0.35,
        }),
        (this.imageData = {
          endAngle: 0,
          middleAngle: 0,
          startAngle: 0,
          travelXStart: 0,
          travelXMiddle: 0,
          travelXEnd: 0,
          rotation: 0,
          rotationCenter: 0,
        }),
        (this.imageSizeData = {
          portrait: {
            peekMin: 0.1794019934,
            peekMax: 0.1487455197,
            sizeMin: 0.696875,
            sizeMax: 0.547851625,
            rotationCenter: 0.5,
          },
          landscape: {
            peekMin: 0.1756198347,
            peekMax: 0.1286394918,
            sizeMin: 0.353515625,
            sizeMax: 0.281640625,
            rotationCenter: 1.5,
          },
        }),
        (this.viewport = {
          width: y.wWidth,
          height: y.wHeight,
          mobile: !1,
          aspectRatio: 1.6,
          orientation: "landscape",
          peek: 0.11,
        }),
        (this.container = document.querySelector(".home-container")),
        (this.onCheckDebounce = ko(this.onCheckScroll, 200)),
        (this.onResizeDebounce = ko(this.onResize, 50)),
        (this.direction = "up"),
        (this.medias = []),
        (this.canvas = new gc()),
        (this.mediaQuery = matchMedia("(min-width: 768px)")),
        (this.orientationMediaQuery = matchMedia("(orientation: portrait)")),
        this.createMedias(),
        this.initListeners(),
        this.onResize();
    }
    stop() {
      D.ticker.remove(this.onRender);
    }
    stopScroll() {
      this.scrollEnabled = !1;
    }
  },
  Wo = Uo;
function _c(s) {
  var t;
  let e = s.currentTarget;
  y.selectedProjectIndex = parseInt((t = e.dataset.index) != null ? t : "1");
}
var ud = {
    namespace: "home",
    beforeEnter(s) {
      (y.homeController = new Wo()),
        D.utils.toArray(s.next.container.querySelectorAll("a")).forEach((e) => {
          e.addEventListener("click", _c);
        });
    },
    afterEnter() {
      D.set(document.body, { position: "fixed", overflow: "hidden" });
    },
    beforeLeave(s) {
      D.utils.toArray(s.next.container.querySelectorAll("a")).forEach((e) => {
        e.removeEventListener("click", _c);
      });
    },
    afterLeave() {
      var s;
      D.set(document.body, { position: "relative", overflow: "auto" }),
        (s = y.homeController) == null || s.destroy(),
        (y.homeController = void 0);
    },
  },
  Vo = ud;
var U,
  rr,
  oe,
  ke,
  Lt,
  pe,
  Dc,
  Yo,
  yc,
  Go,
  Hr,
  jn,
  Rn,
  $o,
  je,
  Mn,
  Qo,
  Re,
  xc,
  wc,
  nr,
  vc,
  Zo,
  bc,
  Ko,
  Xr = 1,
  bi = [],
  Ci = [],
  ii = Date.now,
  Jo = ii(),
  ut = 0,
  Cc = 1,
  On = function (e) {
    return e;
  },
  wt = function (e) {
    return Hr(e)[0] || (dt(e) ? console.warn("Element not found:", e) : null);
  },
  Ec = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Tc = function () {
    return typeof window != "undefined";
  },
  Pc = function () {
    return U || (Tc() && (U = window.gsap) && U.registerPlugin && U);
  },
  sr = function (e) {
    return !!~Dc.indexOf(e);
  },
  Ei = function (e, t) {
    return ~bi.indexOf(e) && bi[bi.indexOf(e) + 1][t];
  },
  Ln = function (e, t) {
    var i = t.s,
      r = t.sc,
      n = Ci.indexOf(e),
      o = r === Me.sc ? 1 : 2;
    return (
      !~n && (n = Ci.push(e) - 1),
      Ci[n + o] ||
        (Ci[n + o] =
          Ei(e, i) ||
          (sr(e)
            ? r
            : function (a) {
                return arguments.length ? (e[i] = a) : e[i];
              }))
    );
  },
  Sc = function (e) {
    return (
      Ei(e, "getBoundingClientRect") ||
      (sr(e)
        ? function () {
            return (Bn.width = oe.innerWidth), (Bn.height = oe.innerHeight), Bn;
          }
        : function () {
            return Bt(e);
          })
    );
  },
  ld = function (e, t, i) {
    var r = i.d,
      n = i.d2,
      o = i.a;
    return (o = Ei(e, "getBoundingClientRect"))
      ? function () {
          return o()[r];
        }
      : function () {
          return (t ? oe["inner" + n] : e["client" + n]) || 0;
        };
  },
  cd = function (e, t) {
    return !t || ~bi.indexOf(e)
      ? Sc(e)
      : function () {
          return Bn;
        };
  },
  ea = function (e, t) {
    var i = t.s,
      r = t.d2,
      n = t.d,
      o = t.a;
    return (i = "scroll" + r) && (o = Ei(e, i))
      ? o() - Sc(e)()[n]
      : sr(e)
      ? (pe[i] || Lt[i]) -
        (oe["inner" + r] || Lt["client" + r] || pe["client" + r])
      : e[i] - e["offset" + r];
  },
  ta = function (e, t) {
    for (var i = 0; i < nr.length; i += 3)
      (!t || ~t.indexOf(nr[i + 1])) && e(nr[i], nr[i + 1], nr[i + 2]);
  },
  dt = function (e) {
    return typeof e == "string";
  },
  vt = function (e) {
    return typeof e == "function";
  },
  Ur = function (e) {
    return typeof e == "number";
  },
  ia = function (e) {
    return typeof e == "object";
  },
  In = function (e) {
    return vt(e) && e();
  },
  kc = function (e, t) {
    return function () {
      var i = In(e),
        r = In(t);
      return function () {
        In(i), In(r);
      };
    };
  },
  Wr = function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  },
  ra = function (e, t) {
    var i = t(e);
    i && i.totalTime && (e.callbackAnimation = i);
  },
  or = Math.abs,
  zn = "scrollLeft",
  Nn = "scrollTop",
  na = "left",
  sa = "top",
  qn = "right",
  Hn = "bottom",
  ri = "width",
  ni = "height",
  ar = "Right",
  ur = "Left",
  lr = "Top",
  cr = "Bottom",
  ge = "padding",
  lt = "margin",
  Ti = "Width",
  Xn = "Height",
  Oe = "px",
  gt = {
    s: zn,
    p: na,
    p2: ur,
    os: qn,
    os2: ar,
    d: ri,
    d2: Ti,
    a: "x",
    sc: function (e) {
      return arguments.length
        ? oe.scrollTo(e, Me.sc())
        : oe.pageXOffset || ke[zn] || Lt[zn] || pe[zn] || 0;
    },
  },
  Me = {
    s: Nn,
    p: sa,
    p2: lr,
    os: Hn,
    os2: cr,
    d: ni,
    d2: Xn,
    a: "y",
    op: gt,
    sc: function (e) {
      return arguments.length
        ? oe.scrollTo(gt.sc(), e)
        : oe.pageYOffset || ke[Nn] || Lt[Nn] || pe[Nn] || 0;
    },
  },
  It = function (e) {
    return oe.getComputedStyle(e);
  },
  hd = function (e) {
    var t = It(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  Fc = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  Bt = function (e, t) {
    var i =
        t &&
        It(e)[Qo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        U.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      r = e.getBoundingClientRect();
    return i && i.progress(0).kill(), r;
  },
  oa = function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  },
  Ac = function (e) {
    var t = [],
      i = e.labels,
      r = e.duration(),
      n;
    for (n in i) t.push(i[n] / r);
    return t;
  },
  fd = function (e) {
    return function (t) {
      return U.utils.snap(Ac(e), t);
    };
  },
  aa = function (e) {
    var t = U.utils.snap(e),
      i =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, n) {
          return r - n;
        });
    return i
      ? function (r, n) {
          var o;
          if (!n) return t(r);
          if (n > 0) {
            for (r -= 1e-4, o = 0; o < i.length; o++)
              if (i[o] >= r) return i[o];
            return i[o - 1];
          } else
            for (o = i.length, r += 1e-4; o--; ) if (i[o] <= r) return i[o];
          return i[0];
        }
      : function (r, n) {
          var o = t(r);
          return !n || Math.abs(o - r) < 0.001 || o - r < 0 == n < 0
            ? o
            : t(n < 0 ? r - e : r + e);
        };
  },
  pd = function (e) {
    return function (t, i) {
      return aa(Ac(e))(t, i.direction);
    };
  },
  jc = function (e, t, i, r) {
    return i.split(",").forEach(function (n) {
      return e(t, n, r);
    });
  },
  We = function (e, t, i) {
    return e.addEventListener(t, i, { passive: !0 });
  },
  Vr = function (e, t, i) {
    return e.removeEventListener(t, i);
  },
  Rc = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  ua = { toggleActions: "play", anticipatePin: 0 },
  Un = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Wn = function (e, t) {
    if (dt(e)) {
      var i = e.indexOf("="),
        r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          r +
          (e in Un
            ? Un[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  Yn = function (e, t, i, r, n, o, a, u) {
    var l = n.startColor,
      c = n.endColor,
      p = n.fontSize,
      f = n.indent,
      h = n.fontWeight,
      g = ke.createElement("div"),
      d = sr(i) || Ei(i, "pinType") === "fixed",
      _ = e.indexOf("scroller") !== -1,
      m = d ? pe : i,
      b = e.indexOf("start") !== -1,
      w = b ? l : c,
      C =
        "border-color:" +
        w +
        ";font-size:" +
        p +
        ";color:" +
        w +
        ";font-weight:" +
        h +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (C += "position:" + ((_ || u) && d ? "fixed;" : "absolute;")),
      (_ || u || !d) &&
        (C += (r === Me ? qn : Hn) + ":" + (o + parseFloat(f)) + "px;"),
      a &&
        (C +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (g._isStart = b),
      g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (g.style.cssText = C),
      (g.innerText = t || t === 0 ? e + "-" + t : e),
      m.children[0] ? m.insertBefore(g, m.children[0]) : m.appendChild(g),
      (g._offset = g["offset" + r.op.d2]),
      Vn(g, 0, r, b),
      g
    );
  },
  Vn = function (e, t, i, r) {
    var n = { display: "block" },
      o = i[r ? "os2" : "p2"],
      a = i[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (n[i.a + "Percent"] = r ? -100 : 0),
      (n[i.a] = r ? "1px" : 0),
      (n["border" + o + Ti] = 1),
      (n["border" + a + Ti] = 0),
      (n[i.p] = t + "px"),
      U.set(e, n);
  },
  Q = [],
  la = {},
  Mc = function () {
    return ii() - ut > 20 && Gn();
  },
  $n = function () {
    var e = ii();
    ut !== e ? (Gn(), ut || hr("scrollStart"), (ut = e)) : Go || (Go = yc(Gn));
  },
  Yr = function () {
    return !je && !bc && !ke.fullscreenElement && Yo.restart(!0);
  },
  Gr = {},
  dd = [],
  ce = [],
  fr,
  Oc,
  Bc = function (e) {
    var t = U.ticker.frame,
      i = [],
      r = 0,
      n;
    if (Oc !== t || Xr) {
      for (Qn(); r < ce.length; r += 4)
        (n = oe.matchMedia(ce[r]).matches),
          n !== ce[r + 3] &&
            ((ce[r + 3] = n),
            n ? i.push(r) : Qn(1, ce[r]) || (vt(ce[r + 2]) && ce[r + 2]()));
      for (Lc(), r = 0; r < i.length; r++)
        (n = i[r]), (fr = ce[n]), (ce[n + 2] = ce[n + 1](e));
      (fr = 0), rr && pr(0, 1), (Oc = t), hr("matchMedia");
    }
  },
  Ic = function s() {
    return Vr(I, "scrollEnd", s) || pr(!0);
  },
  hr = function (e) {
    return (
      (Gr[e] &&
        Gr[e].map(function (t) {
          return t();
        })) ||
      dd
    );
  },
  ct = [],
  Lc = function (e) {
    for (var t = 0; t < ct.length; t += 5)
      (!e || ct[t + 4] === e) &&
        ((ct[t].style.cssText = ct[t + 1]),
        ct[t].getBBox && ct[t].setAttribute("transform", ct[t + 2] || ""),
        (ct[t + 3].uncache = 1));
  },
  Qn = function (e, t) {
    var i;
    for (Re = 0; Re < Q.length; Re++)
      (i = Q[Re]), (!t || i.media === t) && (e ? i.kill(1) : i.revert());
    t && Lc(t), t || hr("revert");
  },
  zc = function () {
    return Ci.forEach(function (e) {
      return typeof e == "function" && (e.rec = 0);
    });
  },
  ca,
  pr = function (e, t) {
    if (ut && !e) {
      We(I, "scrollEnd", Ic);
      return;
    }
    ca = !0;
    var i = hr("refreshInit");
    vc && I.sort(),
      t || Qn(),
      Q.forEach(function (r) {
        return r.refresh();
      }),
      i.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      zc(),
      Yo.pause(),
      (ca = !1),
      hr("refresh");
  },
  Nc = 0,
  Zn = 1,
  Gn = function () {
    if (!ca) {
      var e = Q.length,
        t = ii(),
        i = t - Jo >= 50,
        r = e && Q[0].scroll();
      if (
        ((Zn = Nc > r ? -1 : 1),
        (Nc = r),
        i &&
          (ut && !Mn && t - ut > 200 && ((ut = 0), hr("scrollEnd")),
          (Rn = Jo),
          (Jo = t)),
        Zn < 0)
      ) {
        for (Re = e; Re-- > 0; ) Q[Re] && Q[Re].update(0, i);
        Zn = 1;
      } else for (Re = 0; Re < e; Re++) Q[Re] && Q[Re].update(0, i);
      Go = 0;
    }
  },
  ha = [
    na,
    sa,
    Hn,
    qn,
    lt + cr,
    lt + ar,
    lt + lr,
    lt + ur,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "grid-column-start",
    "grid-column-end",
    "grid-row-start",
    "grid-row-end",
    "grid-area",
    "justify-self",
    "align-self",
    "place-self",
  ],
  Kn = ha.concat([
    ri,
    ni,
    "boxSizing",
    "max" + Ti,
    "max" + Xn,
    "position",
    lt,
    ge,
    ge + lr,
    ge + ar,
    ge + cr,
    ge + ur,
  ]),
  gd = function (e, t, i) {
    $r(i);
    var r = e._gsap;
    if (r.spacerIsNative) $r(r.spacerState);
    else if (e.parentNode === t) {
      var n = t.parentNode;
      n && (n.insertBefore(e, t), n.removeChild(t));
    }
  },
  fa = function (e, t, i, r) {
    if (e.parentNode !== t) {
      for (var n = ha.length, o = t.style, a = e.style, u; n--; )
        (u = ha[n]), (o[u] = i[u]);
      (o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (a[Hn] = a[qn] = "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[ri] = oa(e, gt) + Oe),
        (o[ni] = oa(e, Me) + Oe),
        (o[ge] = a[lt] = a[sa] = a[na] = "0"),
        $r(r),
        (a[ri] = a["max" + Ti] = i[ri]),
        (a[ni] = a["max" + Xn] = i[ni]),
        (a[ge] = i[ge]),
        e.parentNode.insertBefore(t, e),
        t.appendChild(e);
    }
  },
  md = /([A-Z])/g,
  $r = function (e) {
    if (e) {
      var t = e.t.style,
        i = e.length,
        r = 0,
        n,
        o;
      for ((e.t._gsap || U.core.getCache(e.t)).uncache = 1; r < i; r += 2)
        (o = e[r + 1]),
          (n = e[r]),
          o
            ? (t[n] = o)
            : t[n] && t.removeProperty(n.replace(md, "-$1").toLowerCase());
    }
  },
  Jn = function (e) {
    for (var t = Kn.length, i = e.style, r = [], n = 0; n < t; n++)
      r.push(Kn[n], i[Kn[n]]);
    return (r.t = e), r;
  },
  _d = function (e, t, i) {
    for (var r = [], n = e.length, o = i ? 8 : 0, a; o < n; o += 2)
      (a = e[o]), r.push(a, a in t ? t[a] : e[o + 1]);
    return (r.t = e.t), r;
  },
  Bn = { left: 0, top: 0 },
  qc = function (e, t, i, r, n, o, a, u, l, c, p, f, h) {
    vt(e) && (e = e(u)),
      dt(e) &&
        e.substr(0, 3) === "max" &&
        (e = f + (e.charAt(4) === "=" ? Wn("0" + e.substr(3), i) : 0));
    var g = h ? h.time() : 0,
      d,
      _,
      m;
    if ((h && h.seek(0), Ur(e))) a && Vn(a, i, r, !0);
    else {
      vt(t) && (t = t(u));
      var b = e.split(" "),
        w,
        C,
        x,
        v;
      (m = wt(t) || pe),
        (w = Bt(m) || {}),
        (!w || (!w.left && !w.top)) &&
          It(m).display === "none" &&
          ((v = m.style.display),
          (m.style.display = "block"),
          (w = Bt(m)),
          v ? (m.style.display = v) : m.style.removeProperty("display")),
        (C = Wn(b[0], w[r.d])),
        (x = Wn(b[1] || "0", i)),
        (e = w[r.p] - l[r.p] - c + C + n - x),
        a && Vn(a, x, r, i - x < 20 || (a._isStart && x > 20)),
        (i -= i - x);
    }
    if (o) {
      var E = e + i,
        T = o._isStart;
      (d = "scroll" + r.d2),
        Vn(
          o,
          E,
          r,
          (T && E > 20) ||
            (!T && (p ? Math.max(pe[d], Lt[d]) : o.parentNode[d]) <= E + 1)
        ),
        p &&
          ((l = Bt(a)),
          p && (o.style[r.op.p] = l[r.op.p] - r.op.m - o._offset + Oe));
    }
    return (
      h &&
        m &&
        ((d = Bt(m)),
        h.seek(f),
        (_ = Bt(m)),
        (h._caScrollDist = d[r.p] - _[r.p]),
        (e = (e / h._caScrollDist) * f)),
      h && h.seek(g),
      h ? e : Math.round(e)
    );
  },
  Dd = /(?:webkit|moz|length|cssText|inset)/i,
  Hc = function (e, t, i, r) {
    if (e.parentNode !== t) {
      var n = e.style,
        o,
        a;
      if (t === pe) {
        (e._stOrig = n.cssText), (a = It(e));
        for (o in a)
          !+o &&
            !Dd.test(o) &&
            a[o] &&
            typeof n[o] == "string" &&
            o !== "0" &&
            (n[o] = a[o]);
        (n.top = i), (n.left = r);
      } else n.cssText = e._stOrig;
      (U.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  Xc = function (e, t) {
    var i = Ln(e, t),
      r = "_scroll" + t.p2,
      n,
      o,
      a = function u(l, c, p, f, h) {
        var g = u.tween,
          d = c.onComplete,
          _ = {};
        return (
          g && g.kill(),
          (n = Math.round(p)),
          (c[r] = l),
          (c.modifiers = _),
          (_[r] = function (m) {
            return (
              (m = Ec(i())),
              m !== n && m !== o && Math.abs(m - n) > 2
                ? (g.kill(), (u.tween = 0))
                : (m = p + f * g.ratio + h * g.ratio * g.ratio),
              (o = n),
              (n = Ec(m))
            );
          }),
          (c.onComplete = function () {
            (u.tween = 0), d && d.call(g);
          }),
          (g = u.tween = U.to(e, c)),
          g
        );
      };
    return (
      (e[r] = i),
      e.addEventListener(
        "wheel",
        function () {
          return a.tween && a.tween.kill() && (a.tween = 0);
        },
        { passive: !0 }
      ),
      a
    );
  };
gt.op = Me;
var I = (function () {
  function s(t, i) {
    rr ||
      s.register(U) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(t, i);
  }
  var e = s.prototype;
  return (
    (e.init = function (i, r) {
      if (((this.progress = this.start = 0), this.vars && this.kill(1), !Cc)) {
        this.update = this.refresh = this.kill = On;
        return;
      }
      i = Fc(dt(i) || Ur(i) || i.nodeType ? { trigger: i } : i, ua);
      var n = i,
        o = n.onUpdate,
        a = n.toggleClass,
        u = n.id,
        l = n.onToggle,
        c = n.onRefresh,
        p = n.scrub,
        f = n.trigger,
        h = n.pin,
        g = n.pinSpacing,
        d = n.invalidateOnRefresh,
        _ = n.anticipatePin,
        m = n.onScrubComplete,
        b = n.onSnapComplete,
        w = n.once,
        C = n.snap,
        x = n.pinReparent,
        v = n.pinSpacer,
        E = n.containerAnimation,
        T = n.fastScrollEnd,
        P = n.preventOverlaps,
        k =
          i.horizontal || (i.containerAnimation && i.horizontal !== !1)
            ? gt
            : Me,
        R = !p && p !== 0,
        A = wt(i.scroller || oe),
        j = U.core.getCache(A),
        z = sr(A),
        H =
          ("pinType" in i ? i.pinType : Ei(A, "pinType") || (z && "fixed")) ===
          "fixed",
        O = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
        N = R && i.toggleActions.split(" "),
        G = "markers" in i ? i.markers : ua.markers,
        F = z ? 0 : parseFloat(It(A)["border" + k.p2 + Ti]) || 0,
        S = this,
        X =
          i.onRefreshInit &&
          function () {
            return i.onRefreshInit(S);
          },
        se = ld(A, z, k),
        V = cd(A, z),
        M = 0,
        q = Ln(A, k),
        Z,
        K,
        Be,
        ve,
        he,
        L,
        Fe,
        Tt,
        Mi,
        Pt,
        Oi,
        xr,
        Ye,
        rn,
        nn,
        bs,
        tt,
        Cs,
        Es,
        Ts,
        sn,
        ai,
        eu,
        wr,
        tu,
        Ps,
        Ss,
        on,
        ks,
        Ae,
        an,
        qt,
        Li,
        vr,
        br,
        Fs,
        As;
      if (
        ((S.media = fr),
        (_ *= 45),
        (S.scroller = A),
        (S.scroll = E ? E.time.bind(E) : q),
        (ve = q()),
        (S.vars = i),
        (r = r || i.animation),
        "refreshPriority" in i && (vc = 1),
        (j.tweenScroll = j.tweenScroll || { top: Xc(A, Me), left: Xc(A, gt) }),
        (S.tweenTo = Z = j.tweenScroll[k.p]),
        r &&
          ((r.vars.lazy = !1),
          r._initted ||
            (r.vars.immediateRender !== !1 &&
              i.immediateRender !== !1 &&
              r.render(0, !0, !0)),
          (S.animation = r.pause()),
          (r.scrollTrigger = S),
          (an = Ur(p) && p),
          an &&
            (Ae = U.to(r, {
              ease: "power3",
              duration: an,
              onComplete: function () {
                return m && m(S);
              },
            })),
          (on = 0),
          u || (u = r.vars.id)),
        Q.push(S),
        C &&
          ((!ia(C) || C.push) && (C = { snapTo: C }),
          "scrollBehavior" in pe.style &&
            U.set(z ? [pe, Lt] : A, { scrollBehavior: "auto" }),
          (Be = vt(C.snapTo)
            ? C.snapTo
            : C.snapTo === "labels"
            ? fd(r)
            : C.snapTo === "labelsDirectional"
            ? pd(r)
            : C.directional !== !1
            ? function (J, ie) {
                return aa(C.snapTo)(J, ie.direction);
              }
            : U.utils.snap(C.snapTo)),
          (qt = C.duration || { min: 0.1, max: 2 }),
          (qt = ia(qt) ? jn(qt.min, qt.max) : jn(qt, qt)),
          (Li = U.delayedCall(C.delay || an / 2 || 0.1, function () {
            if (Math.abs(S.getVelocity()) < 10 && !Mn && M !== q()) {
              var J = r && !R ? r.totalProgress() : S.progress,
                ie = ((J - ks) / (ii() - Rn)) * 1e3 || 0,
                ee = U.utils.clamp(
                  -S.progress,
                  1 - S.progress,
                  (or(ie / 2) * ie) / 0.185
                ),
                te = S.progress + (C.inertia === !1 ? 0 : ee),
                it = jn(0, 1, Be(te, S)),
                W = q(),
                fe = Math.round(L + it * Ye),
                ae = C,
                St = ae.onStart,
                ue = ae.onInterrupt,
                Ie = ae.onComplete,
                ft = Z.tween;
              if (W <= Fe && W >= L && fe !== W) {
                if (ft && !ft._initted && ft.data <= or(fe - W)) return;
                C.inertia === !1 && (ee = it - S.progress),
                  Z(
                    fe,
                    {
                      duration: qt(
                        or(
                          (Math.max(or(te - J), or(it - J)) * 0.185) /
                            ie /
                            0.05 || 0
                        )
                      ),
                      ease: C.ease || "power3",
                      data: or(fe - W),
                      onInterrupt: function () {
                        return Li.restart(!0) && ue && ue(S);
                      },
                      onComplete: function () {
                        (M = q()),
                          (on = ks = r && !R ? r.totalProgress() : S.progress),
                          b && b(S),
                          Ie && Ie(S);
                      },
                    },
                    W,
                    ee * Ye,
                    fe - W - ee * Ye
                  ),
                  St && St(S, Z.tween);
              }
            } else S.isActive && Li.restart(!0);
          }).pause())),
        u && (la[u] = S),
        (f = S.trigger = wt(f || h)),
        (h = h === !0 ? f : wt(h)),
        dt(a) && (a = { targets: f, className: a }),
        h &&
          (g === !1 ||
            g === lt ||
            (g = !g && It(h.parentNode).display === "flex" ? !1 : ge),
          (S.pin = h),
          i.force3D !== !1 && U.set(h, { force3D: !0 }),
          (K = U.core.getCache(h)),
          K.spacer
            ? (rn = K.pinState)
            : (v &&
                ((v = wt(v)),
                v && !v.nodeType && (v = v.current || v.nativeElement),
                (K.spacerIsNative = !!v),
                v && (K.spacerState = Jn(v))),
              (K.spacer = tt = v || ke.createElement("div")),
              tt.classList.add("pin-spacer"),
              u && tt.classList.add("pin-spacer-" + u),
              (K.pinState = rn = Jn(h))),
          (S.spacer = tt = K.spacer),
          (Ss = It(h)),
          (eu = Ss[g + k.os2]),
          (Es = U.getProperty(h)),
          (Ts = U.quickSetter(h, k.a, Oe)),
          fa(h, tt, Ss),
          (bs = Jn(h))),
        G &&
          ((xr = ia(G) ? Fc(G, Rc) : Rc),
          (Pt = Yn("scroller-start", u, A, k, xr, 0)),
          (Oi = Yn("scroller-end", u, A, k, xr, 0, Pt)),
          (Cs = Pt["offset" + k.op.d2]),
          (Tt = Yn("start", u, A, k, xr, Cs, 0, E)),
          (Mi = Yn("end", u, A, k, xr, Cs, 0, E)),
          E && (As = U.quickSetter([Tt, Mi], k.a, Oe)),
          !H &&
            !(bi.length && Ei(A, "fixedMarkers") === !0) &&
            (hd(z ? pe : A),
            U.set([Pt, Oi], { force3D: !0 }),
            (tu = U.quickSetter(Pt, k.a, Oe)),
            (Ps = U.quickSetter(Oi, k.a, Oe)))),
        E)
      ) {
        var iu = E.vars.onUpdate,
          Th = E.vars.onUpdateParams;
        E.eventCallback("onUpdate", function () {
          S.update(0, 0, 1), iu && iu.apply(Th || []);
        });
      }
      (S.previous = function () {
        return Q[Q.indexOf(S) - 1];
      }),
        (S.next = function () {
          return Q[Q.indexOf(S) + 1];
        }),
        (S.revert = function (J) {
          var ie = J !== !1 || !S.enabled,
            ee = je;
          ie !== S.isReverted &&
            (ie &&
              (S.scroll.rec || (S.scroll.rec = q()),
              (br = Math.max(q(), S.scroll.rec || 0)),
              (vr = S.progress),
              (Fs = r && r.progress())),
            Tt &&
              [Tt, Mi, Pt, Oi].forEach(function (te) {
                return (te.style.display = ie ? "none" : "block");
              }),
            ie && (je = 1),
            S.update(ie),
            (je = ee),
            h &&
              (ie
                ? gd(h, tt, rn)
                : (!x || !S.isActive) && fa(h, tt, It(h), wr)),
            (S.isReverted = ie));
        }),
        (S.refresh = function (J, ie) {
          if (!((je || !S.enabled) && !ie)) {
            if (h && J && ut) {
              We(s, "scrollEnd", Ic);
              return;
            }
            (je = 1),
              Ae && Ae.pause(),
              d && r && r.progress(0).invalidate(),
              S.isReverted || S.revert();
            for (
              var ee = se(),
                te = V(),
                it = E ? E.duration() : ea(A, k),
                W = 0,
                fe = 0,
                ae = i.end,
                St = i.endTrigger || f,
                ue =
                  i.start || (i.start === 0 || !f ? 0 : h ? "0 0" : "0 100%"),
                Ie = i.pinnedContainer && wt(i.pinnedContainer),
                ft = (f && Math.max(0, Q.indexOf(S))) || 0,
                me = ft,
                _e,
                be,
                Bi,
                ui,
                De,
                Ce,
                kt,
                js,
                ru,
                Cr;
              me--;

            )
              (Ce = Q[me]),
                Ce.end || Ce.refresh(0, 1) || (je = 1),
                (kt = Ce.pin),
                kt &&
                  (kt === f || kt === h) &&
                  !Ce.isReverted &&
                  (Cr || (Cr = []), Cr.unshift(Ce), Ce.revert());
            for (
              vt(ue) && (ue = ue(S)),
                L =
                  qc(ue, f, ee, k, q(), Tt, Pt, S, te, F, H, it, E) ||
                  (h ? -0.001 : 0),
                vt(ae) && (ae = ae(S)),
                dt(ae) &&
                  !ae.indexOf("+=") &&
                  (~ae.indexOf(" ")
                    ? (ae = (dt(ue) ? ue.split(" ")[0] : "") + ae)
                    : ((W = Wn(ae.substr(2), ee)),
                      (ae = dt(ue) ? ue : L + W),
                      (St = f))),
                Fe =
                  Math.max(
                    L,
                    qc(
                      ae || (St ? "100% 0" : it),
                      St,
                      ee,
                      k,
                      q() + W,
                      Mi,
                      Oi,
                      S,
                      te,
                      F,
                      H,
                      it,
                      E
                    )
                  ) || -0.001,
                Ye = Fe - L || ((L -= 0.01) && 0.001),
                W = 0,
                me = ft;
              me--;

            )
              (Ce = Q[me]),
                (kt = Ce.pin),
                kt &&
                  Ce.start - Ce._pinPush < L &&
                  !E &&
                  ((_e = Ce.end - Ce.start),
                  (kt === f || kt === Ie) && !Ur(ue) && (W += _e),
                  kt === h && (fe += _e));
            if (
              ((L += W),
              (Fe += W),
              (S._pinPush = fe),
              Tt &&
                W &&
                ((_e = {}),
                (_e[k.a] = "+=" + W),
                Ie && (_e[k.p] = "-=" + q()),
                U.set([Tt, Mi], _e)),
              h)
            )
              (_e = It(h)),
                (ui = k === Me),
                (Bi = q()),
                (sn = parseFloat(Es(k.a)) + fe),
                !it &&
                  Fe > 1 &&
                  ((z ? pe : A).style["overflow-" + k.a] = "scroll"),
                fa(h, tt, _e),
                (bs = Jn(h)),
                (be = Bt(h, !0)),
                (js = H && Ln(A, ui ? gt : Me)()),
                g &&
                  ((wr = [g + k.os2, Ye + fe + Oe]),
                  (wr.t = tt),
                  (me = g === ge ? oa(h, k) + Ye + fe : 0),
                  me && wr.push(k.d, me + Oe),
                  $r(wr),
                  H && q(br)),
                H &&
                  ((De = {
                    top: be.top + (ui ? Bi - L : js) + Oe,
                    left: be.left + (ui ? js : Bi - L) + Oe,
                    boxSizing: "border-box",
                    position: "fixed",
                  }),
                  (De[ri] = De["max" + Ti] = Math.ceil(be.width) + Oe),
                  (De[ni] = De["max" + Xn] = Math.ceil(be.height) + Oe),
                  (De[lt] =
                    De[lt + lr] =
                    De[lt + ar] =
                    De[lt + cr] =
                    De[lt + ur] =
                      "0"),
                  (De[ge] = _e[ge]),
                  (De[ge + lr] = _e[ge + lr]),
                  (De[ge + ar] = _e[ge + ar]),
                  (De[ge + cr] = _e[ge + cr]),
                  (De[ge + ur] = _e[ge + ur]),
                  (nn = _d(rn, De, x))),
                r
                  ? ((ru = r._initted),
                    Zo(1),
                    r.render(r.duration(), !0, !0),
                    (ai = Es(k.a) - sn + Ye + fe),
                    Ye !== ai && nn.splice(nn.length - 2, 2),
                    r.render(0, !0, !0),
                    ru || r.invalidate(),
                    Zo(0))
                  : (ai = Ye);
            else if (f && q() && !E)
              for (be = f.parentNode; be && be !== pe; )
                be._pinOffset && ((L -= be._pinOffset), (Fe -= be._pinOffset)),
                  (be = be.parentNode);
            Cr &&
              Cr.forEach(function (Ph) {
                return Ph.revert(!1);
              }),
              (S.start = L),
              (S.end = Fe),
              (ve = he = q()),
              E || (ve < br && q(br), (S.scroll.rec = 0)),
              S.revert(!1),
              (je = 0),
              r &&
                R &&
                r._initted &&
                r.progress() !== Fs &&
                r.progress(Fs, !0).render(r.time(), !0, !0),
              vr !== S.progress &&
                (r && !R && r.totalProgress(vr, !0),
                (S.progress = vr),
                S.update(0, 0, 1)),
              h && g && (tt._pinOffset = Math.round(S.progress * ai)),
              c && c(S);
          }
        }),
        (S.getVelocity = function () {
          return ((q() - he) / (ii() - Rn)) * 1e3 || 0;
        }),
        (S.endAnimation = function () {
          Wr(S.callbackAnimation),
            r &&
              (Ae
                ? Ae.progress(1)
                : r.paused()
                ? R || Wr(r, S.direction < 0, 1)
                : Wr(r, r.reversed()));
        }),
        (S.getTrailing = function (J) {
          var ie = Q.indexOf(S),
            ee = S.direction > 0 ? Q.slice(0, ie).reverse() : Q.slice(ie + 1);
          return dt(J)
            ? ee.filter(function (te) {
                return te.vars.preventOverlaps === J;
              })
            : ee;
        }),
        (S.update = function (J, ie, ee) {
          if (!(E && !ee && !J)) {
            var te = S.scroll(),
              it = J ? 0 : (te - L) / Ye,
              W = it < 0 ? 0 : it > 1 ? 1 : it || 0,
              fe = S.progress,
              ae,
              St,
              ue,
              Ie,
              ft,
              me,
              _e,
              be;
            if (
              (ie &&
                ((he = ve),
                (ve = E ? q() : te),
                C && ((ks = on), (on = r && !R ? r.totalProgress() : W))),
              _ &&
                !W &&
                h &&
                !je &&
                !Xr &&
                ut &&
                L < te + ((te - he) / (ii() - Rn)) * _ &&
                (W = 1e-4),
              W !== fe && S.enabled)
            ) {
              if (
                ((ae = S.isActive = !!W && W < 1),
                (St = !!fe && fe < 1),
                (me = ae !== St),
                (ft = me || !!W != !!fe),
                (S.direction = W > fe ? 1 : -1),
                (S.progress = W),
                ft &&
                  !je &&
                  ((ue = W && !fe ? 0 : W === 1 ? 1 : fe === 1 ? 2 : 3),
                  R &&
                    ((Ie = (!me && N[ue + 1] !== "none" && N[ue + 1]) || N[ue]),
                    (be =
                      r && (Ie === "complete" || Ie === "reset" || Ie in r)))),
                P &&
                  me &&
                  (be || p || !r) &&
                  (vt(P)
                    ? P(S)
                    : S.getTrailing(P).forEach(function (Ce) {
                        return Ce.endAnimation();
                      })),
                R ||
                  (Ae && !je && !Xr
                    ? ((Ae.vars.totalProgress = W), Ae.invalidate().restart())
                    : r && r.totalProgress(W, !!je)),
                h)
              ) {
                if ((J && g && (tt.style[g + k.os2] = eu), !H)) Ts(sn + ai * W);
                else if (ft) {
                  if (
                    ((_e = !J && W > fe && Fe + 1 > te && te + 1 >= ea(A, k)),
                    x)
                  )
                    if (!J && (ae || _e)) {
                      var Bi = Bt(h, !0),
                        ui = te - L;
                      Hc(
                        h,
                        pe,
                        Bi.top + (k === Me ? ui : 0) + Oe,
                        Bi.left + (k === Me ? 0 : ui) + Oe
                      );
                    } else Hc(h, tt);
                  $r(ae || _e ? nn : bs),
                    (ai !== Ye && W < 1 && ae) ||
                      Ts(sn + (W === 1 && !_e ? ai : 0));
                }
              }
              C && !Z.tween && !je && !Xr && Li.restart(!0),
                a &&
                  (me || (w && W && (W < 1 || !Ko))) &&
                  Hr(a.targets).forEach(function (Ce) {
                    return Ce.classList[ae || w ? "add" : "remove"](
                      a.className
                    );
                  }),
                o && !R && !J && o(S),
                ft && !je
                  ? (R &&
                      (be &&
                        (Ie === "complete"
                          ? r.pause().totalProgress(1)
                          : Ie === "reset"
                          ? r.restart(!0).pause()
                          : Ie === "restart"
                          ? r.restart(!0)
                          : r[Ie]()),
                      o && o(S)),
                    (me || !Ko) &&
                      (l && me && ra(S, l),
                      O[ue] && ra(S, O[ue]),
                      w && (W === 1 ? S.kill(!1, 1) : (O[ue] = 0)),
                      me || ((ue = W === 1 ? 1 : 3), O[ue] && ra(S, O[ue]))),
                    T &&
                      !ae &&
                      Math.abs(S.getVelocity()) > (Ur(T) ? T : 2500) &&
                      (Wr(S.callbackAnimation),
                      Ae ? Ae.progress(1) : Wr(r, !W, 1)))
                  : R && o && !je && o(S);
            }
            if (Ps) {
              var De = E ? (te / E.duration()) * (E._caScrollDist || 0) : te;
              tu(De + (Pt._isFlipped ? 1 : 0)), Ps(De);
            }
            As && As((-te / E.duration()) * (E._caScrollDist || 0));
          }
        }),
        (S.enable = function (J, ie) {
          S.enabled ||
            ((S.enabled = !0),
            We(A, "resize", Yr),
            We(A, "scroll", $n),
            X && We(s, "refreshInit", X),
            J !== !1 && ((S.progress = vr = 0), (ve = he = M = q())),
            ie !== !1 && S.refresh());
        }),
        (S.getTween = function (J) {
          return J && Z ? Z.tween : Ae;
        }),
        (S.disable = function (J, ie) {
          if (
            S.enabled &&
            (J !== !1 && S.revert(),
            (S.enabled = S.isActive = !1),
            ie || (Ae && Ae.pause()),
            (br = 0),
            K && (K.uncache = 1),
            X && Vr(s, "refreshInit", X),
            Li && (Li.pause(), Z.tween && Z.tween.kill() && (Z.tween = 0)),
            !z)
          ) {
            for (var ee = Q.length; ee--; )
              if (Q[ee].scroller === A && Q[ee] !== S) return;
            Vr(A, "resize", Yr), Vr(A, "scroll", $n);
          }
        }),
        (S.kill = function (J, ie) {
          S.disable(J, ie), Ae && Ae.kill(), u && delete la[u];
          var ee = Q.indexOf(S);
          Q.splice(ee, 1),
            ee === Re && Zn > 0 && Re--,
            (ee = 0),
            Q.forEach(function (te) {
              return te.scroller === S.scroller && (ee = 1);
            }),
            ee || (S.scroll.rec = 0),
            r && ((r.scrollTrigger = null), J && r.render(-1), ie || r.kill()),
            Tt &&
              [Tt, Mi, Pt, Oi].forEach(function (te) {
                return te.parentNode && te.parentNode.removeChild(te);
              }),
            h &&
              (K && (K.uncache = 1),
              (ee = 0),
              Q.forEach(function (te) {
                return te.pin === h && ee++;
              }),
              ee || (K.spacer = 0));
        }),
        S.enable(!1, !1),
        !r || !r.add || Ye
          ? S.refresh()
          : U.delayedCall(0.01, function () {
              return L || Fe || S.refresh();
            }) &&
            (Ye = 0.01) &&
            (L = Fe = 0);
    }),
    (s.register = function (i) {
      if (
        !rr &&
        ((U = i || Pc()),
        Tc() &&
          window.document &&
          ((oe = window),
          (ke = document),
          (Lt = ke.documentElement),
          (pe = ke.body)),
        U &&
          ((Hr = U.utils.toArray),
          (jn = U.utils.clamp),
          (Zo = U.core.suppressOverwrites || On),
          U.core.globals("ScrollTrigger", s),
          pe))
      ) {
        (yc =
          oe.requestAnimationFrame ||
          function (a) {
            return setTimeout(a, 16);
          }),
          We(oe, "wheel", $n),
          (Dc = [oe, ke, Lt, pe]),
          We(ke, "scroll", $n);
        var r = pe.style,
          n = r.borderTopStyle,
          o;
        (r.borderTopStyle = "solid"),
          (o = Bt(pe)),
          (Me.m = Math.round(o.top + Me.sc()) || 0),
          (gt.m = Math.round(o.left + gt.sc()) || 0),
          n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
          ($o = setInterval(Mc, 200)),
          U.delayedCall(0.5, function () {
            return (Xr = 0);
          }),
          We(ke, "touchcancel", On),
          We(pe, "touchstart", On),
          jc(We, ke, "pointerdown,touchstart,mousedown", function () {
            return (Mn = 1);
          }),
          jc(We, ke, "pointerup,touchend,mouseup", function () {
            return (Mn = 0);
          }),
          (Qo = U.utils.checkPrefix("transform")),
          Kn.push(Qo),
          (rr = ii()),
          (Yo = U.delayedCall(0.2, pr).pause()),
          (nr = [
            ke,
            "visibilitychange",
            function () {
              var a = oe.innerWidth,
                u = oe.innerHeight;
              ke.hidden ? ((xc = a), (wc = u)) : (xc !== a || wc !== u) && Yr();
            },
            ke,
            "DOMContentLoaded",
            pr,
            oe,
            "load",
            function () {
              return ut || pr();
            },
            oe,
            "resize",
            Yr,
          ]),
          ta(We);
      }
      return rr;
    }),
    (s.defaults = function (i) {
      for (var r in i) ua[r] = i[r];
    }),
    (s.kill = function () {
      (Cc = 0),
        Q.slice(0).forEach(function (i) {
          return i.kill(1);
        });
    }),
    (s.config = function (i) {
      "limitCallbacks" in i && (Ko = !!i.limitCallbacks);
      var r = i.syncInterval;
      (r && clearInterval($o)) || (($o = r) && setInterval(Mc, r)),
        "autoRefreshEvents" in i &&
          (ta(Vr) || ta(We, i.autoRefreshEvents || "none"),
          (bc = (i.autoRefreshEvents + "").indexOf("resize") === -1));
    }),
    (s.scrollerProxy = function (i, r) {
      var n = wt(i),
        o = Ci.indexOf(n),
        a = sr(n);
      ~o && Ci.splice(o, a ? 6 : 2),
        a ? bi.unshift(oe, r, pe, r, Lt, r) : bi.unshift(n, r);
    }),
    (s.matchMedia = function (i) {
      var r, n, o, a, u;
      for (n in i)
        (o = ce.indexOf(n)),
          (a = i[n]),
          (fr = n),
          n === "all"
            ? a()
            : ((r = oe.matchMedia(n)),
              r &&
                (r.matches && (u = a()),
                ~o
                  ? ((ce[o + 1] = kc(ce[o + 1], a)),
                    (ce[o + 2] = kc(ce[o + 2], u)))
                  : ((o = ce.length),
                    ce.push(n, a, u),
                    r.addListener
                      ? r.addListener(Bc)
                      : r.addEventListener("change", Bc)),
                (ce[o + 3] = r.matches))),
          (fr = 0);
      return ce;
    }),
    (s.clearMatchMedia = function (i) {
      i || (ce.length = 0), (i = ce.indexOf(i)), i >= 0 && ce.splice(i, 4);
    }),
    (s.isInViewport = function (i, r, n) {
      var o = (dt(i) ? wt(i) : i).getBoundingClientRect(),
        a = o[n ? ri : ni] * r || 0;
      return n
        ? o.right - a > 0 && o.left + a < oe.innerWidth
        : o.bottom - a > 0 && o.top + a < oe.innerHeight;
    }),
    (s.positionInViewport = function (i, r, n) {
      dt(i) && (i = wt(i));
      var o = i.getBoundingClientRect(),
        a = o[n ? ri : ni],
        u =
          r == null
            ? a / 2
            : r in Un
            ? Un[r] * a
            : ~r.indexOf("%")
            ? (parseFloat(r) * a) / 100
            : parseFloat(r) || 0;
      return n ? (o.left + u) / oe.innerWidth : (o.top + u) / oe.innerHeight;
    }),
    s
  );
})();
I.version = "3.8.0";
I.saveStyles = function (s) {
  return s
    ? Hr(s).forEach(function (e) {
        if (e && e.style) {
          var t = ct.indexOf(e);
          t >= 0 && ct.splice(t, 5),
            ct.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              U.core.getCache(e),
              fr
            );
        }
      })
    : ct;
};
I.revert = function (s, e) {
  return Qn(!s, e);
};
I.create = function (s, e) {
  return new I(s, e);
};
I.refresh = function (s) {
  return s ? Yr() : (rr || I.register()) && pr(!0);
};
I.update = Gn;
I.clearScrollMemory = zc;
I.maxScroll = function (s, e) {
  return ea(s, e ? gt : Me);
};
I.getScrollFunc = function (s, e) {
  return Ln(wt(s), e ? gt : Me);
};
I.getById = function (s) {
  return la[s];
};
I.getAll = function () {
  return Q.slice(0);
};
I.isScrolling = function () {
  return !!ut;
};
I.snapDirectional = aa;
I.addEventListener = function (s, e) {
  var t = Gr[s] || (Gr[s] = []);
  ~t.indexOf(e) || t.push(e);
};
I.removeEventListener = function (s, e) {
  var t = Gr[s],
    i = t && t.indexOf(e);
  i >= 0 && t.splice(i, 1);
};
I.batch = function (s, e) {
  var t = [],
    i = {},
    r = e.interval || 0.016,
    n = e.batchMax || 1e9,
    o = function (l, c) {
      var p = [],
        f = [],
        h = U.delayedCall(r, function () {
          c(p, f), (p = []), (f = []);
        }).pause();
      return function (g) {
        p.length || h.restart(!0),
          p.push(g.trigger),
          f.push(g),
          n <= p.length && h.progress(1);
      };
    },
    a;
  for (a in e)
    i[a] =
      a.substr(0, 2) === "on" && vt(e[a]) && a !== "onRefreshInit"
        ? o(a, e[a])
        : e[a];
  return (
    vt(n) &&
      ((n = n()),
      We(I, "refresh", function () {
        return (n = e.batchMax());
      })),
    Hr(s).forEach(function (u) {
      var l = {};
      for (a in i) l[a] = i[a];
      (l.trigger = u), t.push(I.create(l));
    }),
    t
  );
};
I.sort = function (s) {
  return Q.sort(
    s ||
      function (e, t) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (t.start + (t.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
Pc() && U.registerPlugin(I);
D.registerPlugin(B, I);
B.create("imageAlpha", "0.33, 0, 0.67, 1");
var yd = (s) => {
    let e = [];
    return (
      s.querySelectorAll("[data-lazy-load-video]").forEach(function (t) {
        D.set(t, { alpha: 0 });
        let i = !1;
        function r() {
          var o;
          if (i) return;
          let n = t.querySelector("source");
          (n.src = (o = n.dataset.src) != null ? o : ""),
            t.load(),
            D.to(t, { duration: 0.45, alpha: 1, ease: "imageAlpha" }),
            (i = !0);
        }
        e.push(
          I.create({
            trigger: t,
            start: "-65% bottom",
            onEnter: r,
            onEnterBack: r,
          })
        );
      }),
      s.querySelectorAll("[data-lazy-load]").forEach(function (t) {
        D.set(t, { alpha: 0 });
        let i = !1;
        t.onload = () => {
          (t.onload = null),
            D.to(t, { duration: 0.45, alpha: 1, ease: "imageAlpha" });
        };
        function r() {
          var n, o;
          i ||
            ((t.src = y.isPhone
              ? (n = t.dataset.srcSmall) != null
                ? n
                : ""
              : (o = t.dataset.src) != null
              ? o
              : ""),
            (i = !0));
        }
        e.push(
          I.create({
            trigger: t,
            start: "-65% bottom",
            onEnter: r,
            onEnterBack: r,
          })
        );
      }),
      () => {
        e.forEach(function (t) {
          t.kill();
        });
      }
    );
  },
  Uc = yd;
D.registerPlugin(I);
var xd = (s) => {
    let e = s.querySelector("[data-reveal-target]"),
      t = D.fromTo(
        e,
        { rotation: s.dataset.animStart },
        { rotation: s.dataset.animEnd, ease: "none" }
      ),
      i = I.create({ trigger: s, animation: t, scrub: !0 });
    return () => {
      i.kill(), t.kill();
    };
  },
  pa = xd;
async function dr(s = 0.334, e = 0.167, t = 0) {
  return D.to(
    ["#preloader .progress-container", "#preloader p", "#preloader h1"],
    {
      opacity: 0,
      duration: s,
      stagger: e,
      delay: t,
      ease: "linear",
      onComplete() {
        D.set("#preloader", { autoAlpha: 0 });
      },
    }
  );
}
function es() {
  let s = !1,
    e = document.querySelector("#contact-btn"),
    t = e.querySelector(".active"),
    i = e.querySelector(".inactive"),
    r = t.querySelector(".front"),
    n = t.querySelector(".back"),
    o = i.querySelector(".front"),
    a = i.querySelector(".back"),
    u = D.timeline({ paused: !0 });
  u.fromTo(
    [o, r],
    { yPercent: 0 },
    { duration: 0.584, yPercent: -100, overwrite: !0, ease: er.AnchorText },
    0
  ),
    u.fromTo(
      [a, n],
      { yPercent: 0 },
      { duration: 0.584, yPercent: -100, overwrite: !0, ease: er.AnchorText },
      0
    );
  function l() {
    y.isMobile || u.play();
  }
  function c() {
    y.isMobile || u.reverse();
  }
  function p() {
    document.dispatchEvent(new CustomEvent("about"));
  }
  function f(h) {
    s = h.detail;
    let g = 0.334,
      d = 0.417;
    s
      ? (D.to(i, { alpha: 0, duration: g, ease: "linear", overwrite: !0 }),
        D.to(t, {
          alpha: 1,
          duration: g,
          ease: "linear",
          overwrite: !0,
          delay: d,
        }))
      : (D.to(i, {
          alpha: 1,
          duration: g,
          ease: "linear",
          overwrite: !0,
          delay: d,
        }),
        D.to(t, { alpha: 0, duration: g, ease: "linear", overwrite: !0 }));
  }
  e.addEventListener("click", p),
    e.addEventListener("mouseenter", l),
    e.addEventListener("mouseleave", c),
    document.addEventListener("aboutstatuschange", f);
}
function si(s) {
  let e = D.timeline({ paused: !0 });
  e.fromTo(
    s.querySelector(".front"),
    { yPercent: 0 },
    { duration: 0.584, yPercent: -100, overwrite: !0, ease: er.AnchorText },
    0
  ),
    e.fromTo(
      s.querySelector(".back"),
      { yPercent: 0 },
      { duration: 0.584, yPercent: -100, overwrite: !0, ease: er.AnchorText },
      0
    );
  let t = () => {
      e.play();
    },
    i = () => {
      e.reverse();
    };
  return (
    s.addEventListener("mouseenter", t),
    s.addEventListener("mouseleave", i),
    {
      destroy: () => {
        s.removeEventListener("mouseenter", t),
          s.removeEventListener("mouseleave", i),
          e.kill();
      },
    }
  );
}
function ts() {
  let s = !1,
    t = document.querySelector("header").querySelector("a");
  es(), y.isMobile || si(t);
  function i(n) {
    if (s) {
      document.dispatchEvent(new CustomEvent("about")), n.preventDefault();
      return;
    }
    window.location.pathname === "/" && n.preventDefault();
  }
  function r(n) {
    s = n.detail;
  }
  t.addEventListener("click", i),
    document.addEventListener("aboutstatuschange", r);
}
D.registerPlugin(I);
function is(s) {
  let e = !1,
    t = s.querySelectorAll("img"),
    i = s.dataset.horizontal === "",
    r = i ? -50 : -40,
    n = 5,
    o;
  i
    ? (o = D.fromTo(
        t,
        { xPercent: (h) => (h % 2 == 0 ? r - n : r + n) },
        {
          ease: "linear",
          force3D: !0,
          xPercent: (h) => (h % 2 == 0 ? r + n : r - n),
        }
      ))
    : (o = D.fromTo(
        t,
        { yPercent: (h) => (h % 2 == 0 ? r - n : r + n) },
        {
          ease: "linear",
          force3D: !0,
          yPercent: (h) => (h % 2 == 0 ? r + n : r - n),
        }
      ));
  let a = I.create({
      trigger: s.querySelector(".inner"),
      animation: o,
      scrub: !0,
    }),
    u = D.fromTo(
      s.querySelector(".project-parallax-container"),
      { y: "-10%", transformOrigin: "center center" },
      { y: "10%", transformOrigin: "center center", force3D: !0 }
    ),
    l = I.create({ trigger: s, scrub: !0, animation: u });
  function c() {
    e ||
      (s.querySelectorAll("img").forEach((h) => {
        var g, d;
        D.set(h, { alpha: 0 }),
          (h.onload = () => {
            (h.onload = null),
              D.to(h, { duration: 0.45, alpha: 1, ease: "imageAlpha" }),
              D.set([h.parentElement, h], { backgroundColor: "transparent" });
          }),
          (h.src = y.isPhone
            ? (g = h.dataset.srcSmall) != null
              ? g
              : ""
            : (d = h.dataset.src) != null
            ? d
            : "");
      }),
      (e = !0));
  }
  let p = I.create({
    trigger: s,
    start: "-65% bottom",
    onEnter: c,
    onEnterBack: c,
  });
  function f() {
    a.kill(), l.kill(), o.kill(), p.kill();
  }
  return { destroy: f };
}
var wd =
  /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function Wc(s) {
  var e = s.nodeType,
    t = "";
  if (e === 1 || e === 9 || e === 11) {
    if (typeof s.textContent == "string") return s.textContent;
    for (s = s.firstChild; s; s = s.nextSibling) t += Wc(s);
  } else if (e === 3 || e === 4) return s.nodeValue;
  return t;
}
var Pi,
  Vc,
  Yc,
  vd = /(?:\r|\n|\t\t)/g,
  bd = /(?:\s\s+)/g,
  Cd = function () {
    (Pi = document), (Vc = window), (Yc = 1);
  },
  Gc = function (e) {
    return Vc.getComputedStyle(e);
  },
  Ed = Array.isArray,
  $c = [].slice,
  da = function (e, t) {
    var i;
    return Ed(e)
      ? e
      : (i = typeof e) === "string" && !t && e
      ? $c.call(Pi.querySelectorAll(e), 0)
      : e && i === "object" && "length" in e
      ? $c.call(e, 0)
      : e
      ? [e]
      : [];
  },
  ga = function (e) {
    return e.position === "absolute" || e.absolute === !0;
  },
  Td = function (e, t) {
    for (var i = t.length, r; --i > -1; )
      if (((r = t[i]), e.substr(0, r.length) === r)) return r.length;
  },
  Pd = " style='position:relative;display:inline-block;'",
  Qc = function (e, t) {
    e === void 0 && (e = "");
    var i = ~e.indexOf("++"),
      r = 1;
    return (
      i && (e = e.split("++").join("")),
      function () {
        return (
          "<" + t + Pd + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
        );
      }
    );
  },
  Zc = function s(e, t, i) {
    var r = e.nodeType;
    if (r === 1 || r === 9 || r === 11)
      for (e = e.firstChild; e; e = e.nextSibling) s(e, t, i);
    else (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(t).join(i));
  },
  ma = function (e, t) {
    for (var i = t.length; --i > -1; ) e.push(t[i]);
  },
  Kc = function (e, t, i) {
    for (var r; e && e !== t; ) {
      if (((r = e._next || e.nextSibling), r))
        return r.textContent.charAt(0) === i;
      e = e.parentNode || e._parent;
    }
  },
  Sd = function s(e) {
    var t = da(e.childNodes),
      i = t.length,
      r,
      n;
    for (r = 0; r < i; r++)
      (n = t[r]),
        n._isSplit
          ? s(n)
          : r && n.previousSibling && n.previousSibling.nodeType === 3
          ? ((n.previousSibling.nodeValue +=
              n.nodeType === 3 ? n.nodeValue : n.firstChild.nodeValue),
            e.removeChild(n))
          : n.nodeType !== 3 &&
            (e.insertBefore(n.firstChild, n), e.removeChild(n));
  },
  bt = function (e, t) {
    return parseFloat(t[e]) || 0;
  },
  kd = function (e, t, i, r, n, o, a) {
    var u = Gc(e),
      l = bt("paddingLeft", u),
      c = -999,
      p = bt("borderBottomWidth", u) + bt("borderTopWidth", u),
      f = bt("borderLeftWidth", u) + bt("borderRightWidth", u),
      h = bt("paddingTop", u) + bt("paddingBottom", u),
      g = bt("paddingLeft", u) + bt("paddingRight", u),
      d = bt("fontSize", u) * (t.lineThreshold || 0.2),
      _ = u.textAlign,
      m = [],
      b = [],
      w = [],
      C = t.wordDelimiter || " ",
      x = t.tag ? t.tag : t.span ? "span" : "div",
      v = t.type || t.split || "chars,words,lines",
      E = n && ~v.indexOf("lines") ? [] : null,
      T = ~v.indexOf("words"),
      P = ~v.indexOf("chars"),
      k = ga(t),
      R = t.linesClass,
      A = ~(R || "").indexOf("++"),
      j = [],
      z = u.display === "flex",
      H = e.style.display,
      O,
      N,
      G,
      F,
      S,
      X,
      se,
      V,
      M,
      q,
      Z,
      K;
    for (
      A && (R = R.split("++").join("")),
        z && (e.style.display = "block"),
        N = e.getElementsByTagName("*"),
        G = N.length,
        S = [],
        O = 0;
      O < G;
      O++
    )
      S[O] = N[O];
    if (E || k)
      for (O = 0; O < G; O++)
        (F = S[O]),
          (X = F.parentNode === e),
          (X || k || (P && !T)) &&
            ((K = F.offsetTop),
            E &&
              X &&
              Math.abs(K - c) > d &&
              (F.nodeName !== "BR" || O === 0) &&
              ((se = []), E.push(se), (c = K)),
            k &&
              ((F._x = F.offsetLeft),
              (F._y = K),
              (F._w = F.offsetWidth),
              (F._h = F.offsetHeight)),
            E &&
              (((F._isSplit && X) ||
                (!P && X) ||
                (T && X) ||
                (!T &&
                  F.parentNode.parentNode === e &&
                  !F.parentNode._isSplit)) &&
                (se.push(F), (F._x -= l), Kc(F, e, C) && (F._wordEnd = !0)),
              F.nodeName === "BR" &&
                ((F.nextSibling && F.nextSibling.nodeName === "BR") ||
                  O === 0) &&
                E.push([])));
    for (O = 0; O < G; O++) {
      if (((F = S[O]), (X = F.parentNode === e), F.nodeName === "BR")) {
        E || k
          ? (F.parentNode && F.parentNode.removeChild(F), S.splice(O--, 1), G--)
          : T || e.appendChild(F);
        continue;
      }
      if (
        (k &&
          ((M = F.style),
          !T && !X && ((F._x += F.parentNode._x), (F._y += F.parentNode._y)),
          (M.left = F._x + "px"),
          (M.top = F._y + "px"),
          (M.position = "absolute"),
          (M.display = "block"),
          (M.width = F._w + 1 + "px"),
          (M.height = F._h + "px")),
        !T && P)
      )
        if (F._isSplit)
          for (
            F._next = N = F.nextSibling, F.parentNode.appendChild(F);
            N && N.nodeType === 3 && N.textContent === " ";

          )
            (F._next = N.nextSibling),
              F.parentNode.appendChild(N),
              (N = N.nextSibling);
        else
          F.parentNode._isSplit
            ? ((F._parent = F.parentNode),
              !F.previousSibling &&
                F.firstChild &&
                (F.firstChild._isFirst = !0),
              F.nextSibling &&
                F.nextSibling.textContent === " " &&
                !F.nextSibling.nextSibling &&
                j.push(F.nextSibling),
              (F._next =
                F.nextSibling && F.nextSibling._isFirst ? null : F.nextSibling),
              F.parentNode.removeChild(F),
              S.splice(O--, 1),
              G--)
            : X ||
              ((K = !F.nextSibling && Kc(F.parentNode, e, C)),
              F.parentNode._parent && F.parentNode._parent.appendChild(F),
              K && F.parentNode.appendChild(Pi.createTextNode(" ")),
              x === "span" && (F.style.display = "inline"),
              m.push(F));
      else
        F.parentNode._isSplit && !F._isSplit && F.innerHTML !== ""
          ? b.push(F)
          : P &&
            !F._isSplit &&
            (x === "span" && (F.style.display = "inline"), m.push(F));
    }
    for (O = j.length; --O > -1; ) j[O].parentNode.removeChild(j[O]);
    if (E) {
      for (
        k &&
          ((q = Pi.createElement(x)),
          e.appendChild(q),
          (Z = q.offsetWidth + "px"),
          (K = q.offsetParent === e ? 0 : e.offsetLeft),
          e.removeChild(q)),
          M = e.style.cssText,
          e.style.cssText = "display:none;";
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (V = C === " " && (!k || (!T && !P)), O = 0; O < E.length; O++) {
        for (
          se = E[O],
            q = Pi.createElement(x),
            q.style.cssText =
              "display:block;text-align:" +
              _ +
              ";position:" +
              (k ? "absolute;" : "relative;"),
            R && (q.className = R + (A ? O + 1 : "")),
            w.push(q),
            G = se.length,
            N = 0;
          N < G;
          N++
        )
          se[N].nodeName !== "BR" &&
            ((F = se[N]),
            q.appendChild(F),
            V && F._wordEnd && q.appendChild(Pi.createTextNode(" ")),
            k &&
              (N === 0 &&
                ((q.style.top = F._y + "px"), (q.style.left = l + K + "px")),
              (F.style.top = "0px"),
              K && (F.style.left = F._x - K + "px")));
        G === 0
          ? (q.innerHTML = "&nbsp;")
          : !T && !P && (Sd(q), Zc(q, String.fromCharCode(160), " ")),
          k && ((q.style.width = Z), (q.style.height = F._h + "px")),
          e.appendChild(q);
      }
      e.style.cssText = M;
    }
    k &&
      (a > e.clientHeight &&
        ((e.style.height = a - h + "px"),
        e.clientHeight < a && (e.style.height = a + p + "px")),
      o > e.clientWidth &&
        ((e.style.width = o - g + "px"),
        e.clientWidth < o && (e.style.width = o + f + "px"))),
      z && (H ? (e.style.display = H) : e.style.removeProperty("display")),
      ma(i, m),
      T && ma(r, b),
      ma(n, w);
  },
  Fd = function (e, t, i, r) {
    var n = t.tag ? t.tag : t.span ? "span" : "div",
      o = t.type || t.split || "chars,words,lines",
      a = ~o.indexOf("chars"),
      u = ga(t),
      l = t.wordDelimiter || " ",
      c = l !== " " ? "" : u ? "&#173; " : " ",
      p = "</" + n + ">",
      f = 1,
      h = t.specialChars
        ? typeof t.specialChars == "function"
          ? t.specialChars
          : Td
        : null,
      g,
      d,
      _,
      m,
      b,
      w,
      C,
      x,
      v = Pi.createElement("div"),
      E = e.parentNode;
    for (
      E.insertBefore(v, e),
        v.textContent = e.nodeValue,
        E.removeChild(e),
        e = v,
        g = Wc(e),
        C = g.indexOf("<") !== -1,
        t.reduceWhiteSpace !== !1 && (g = g.replace(bd, " ").replace(vd, "")),
        C && (g = g.split("<").join("{{LT}}")),
        b = g.length,
        d = (g.charAt(0) === " " ? c : "") + i(),
        _ = 0;
      _ < b;
      _++
    )
      if (((w = g.charAt(_)), h && (x = h(g.substr(_), t.specialChars))))
        (w = g.substr(_, x || 1)),
          (d += a && w !== " " ? r() + w + "</" + n + ">" : w),
          (_ += x - 1);
      else if (w === l && g.charAt(_ - 1) !== l && _) {
        for (d += f ? p : "", f = 0; g.charAt(_ + 1) === l; ) (d += c), _++;
        _ === b - 1
          ? (d += c)
          : g.charAt(_ + 1) !== ")" && ((d += c + i()), (f = 1));
      } else
        w === "{" && g.substr(_, 6) === "{{LT}}"
          ? ((d += a ? r() + "{{LT}}</" + n + ">" : "{{LT}}"), (_ += 5))
          : (w.charCodeAt(0) >= 55296 && w.charCodeAt(0) <= 56319) ||
            (g.charCodeAt(_ + 1) >= 65024 && g.charCodeAt(_ + 1) <= 65039)
          ? ((m = ((g.substr(_, 12).split(wd) || [])[1] || "").length || 2),
            (d +=
              a && w !== " "
                ? r() + g.substr(_, m) + "</" + n + ">"
                : g.substr(_, m)),
            (_ += m - 1))
          : (d += a && w !== " " ? r() + w + "</" + n + ">" : w);
    (e.outerHTML = d + (f ? p : "")), C && Zc(E, "{{LT}}", "<");
  },
  Ad = function s(e, t, i, r) {
    var n = da(e.childNodes),
      o = n.length,
      a = ga(t),
      u,
      l;
    if (e.nodeType !== 3 || o > 1) {
      for (t.absolute = !1, u = 0; u < o; u++)
        (l = n[u]),
          (l._next = l._isFirst = l._parent = l._wordEnd = null),
          (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) &&
            (a &&
              l.nodeType !== 3 &&
              Gc(l).display === "inline" &&
              ((l.style.display = "inline-block"),
              (l.style.position = "relative")),
            (l._isSplit = !0),
            s(l, t, i, r));
      (t.absolute = a), (e._isSplit = !0);
      return;
    }
    Fd(e, t, i, r);
  },
  rs = (function () {
    function s(t, i) {
      Yc || Cd(),
        (this.elements = da(t)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this._originals = []),
        (this.vars = i || {}),
        this.split(i);
    }
    var e = s.prototype;
    return (
      (e.split = function (i) {
        this.isSplit && this.revert(),
          (this.vars = i = i || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var r = this.elements.length,
            n = i.tag ? i.tag : i.span ? "span" : "div",
            o = Qc(i.wordsClass, n),
            a = Qc(i.charsClass, n),
            u,
            l,
            c;
          --r > -1;

        )
          (c = this.elements[r]),
            (this._originals[r] = c.innerHTML),
            (u = c.clientHeight),
            (l = c.clientWidth),
            Ad(c, i, o, a),
            kd(c, i, this.chars, this.words, this.lines, l, u);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (e.revert = function () {
        var i = this._originals;
        if (!i) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (r, n) {
            return (r.innerHTML = i[n]);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (s.create = function (i, r) {
        return new s(i, r);
      }),
      s
    );
  })();
rs.version = "3.8.0";
D.registerPlugin(B, rs);
function ns() {
  B.create("about-1", "0.33, 0.39, 0.66, 1.09"),
    B.create("about-2", "0.33, 0.01, 0.66, 1"),
    B.create("about-3", "0.75, 0, 0, 1");
  let s = !1,
    e = document.querySelector(".about"),
    t = e.querySelector(".barrier"),
    i = e.querySelector(".content"),
    r = e.querySelectorAll("h4"),
    n = new rs(r);
  D.set(n.lines, { yPercent: 105 }),
    y.isMobile ||
      e.querySelectorAll(".anchor").forEach((l) => {
        si(l);
      });
  function o() {
    D.set(e, { pointerEvents: "all" }),
      D.set(e, { display: "block" }),
      D.to(t != null ? t : "", {
        duration: 0.584,
        alpha: 1,
        ease: "about-1",
        overwrite: !0,
      }),
      D.to(i != null ? i : "", {
        duration: 0.584 * 1.75,
        "--bl": "92%",
        "--br": "100%",
        ease: B.create("custom", ".54,.02,0,1"),
        overwrite: !0,
      }),
      D.to(n.lines, {
        duration: 0.834,
        stagger: 0.117,
        yPercent: 1,
        ease: "about-3",
        overwrite: !0,
      });
  }
  function a() {
    D.set(e, { pointerEvents: "none" }),
      D.to(t != null ? t : "", {
        duration: 0.584 * 1.5,
        alpha: 0,
        ease: "about-1",
        overwrite: !0,
        onComplete: () => {
          D.set(e, { display: "none" });
        },
      }),
      D.to(i != null ? i : "", {
        duration: 0.584 * 1.5,
        overwrite: !0,
        "--bl": "0",
        "--br": "0",
        ease: B.create("custom", ".54,.02,0,1"),
        onComplete: () => {
          D.set(n.lines, { yPercent: 105 });
        },
      });
  }
  function u() {
    (s = !s),
      document.dispatchEvent(
        new CustomEvent("aboutstatuschange", { detail: s })
      ),
      s ? o() : a();
  }
  document.addEventListener("about", u), t.addEventListener("click", u);
}
var Jc = 0.8;
function Si({
  el: s,
  pixelRatio: e,
  trailing: t = !1,
  secondLine: i,
  footer: r = !1,
}) {
  let n = s.dataset.text.toUpperCase(),
    o = document.createElement("canvas"),
    a = o.getContext("2d"),
    u = document.createElement("canvas"),
    l = u.getContext("2d"),
    c = s.offsetTop,
    p = 0,
    f = { y: 0 },
    h = s.getBoundingClientRect(),
    g = Number(window.getComputedStyle(s, null).fontSize.replace("px", "")) * e,
    d =
      Number(window.getComputedStyle(s, null).lineHeight.replace("px", "")) *
      e *
      Jc,
    _ = 100;
  function m(T = 0) {
    let P = a.measureText(n).width;
    _ = P;
    let k;
    r ? ((k = o.width - P), (p = k)) : (k = y.mobile || !i ? 0 : o.width - P),
      (k -= T),
      a.clearRect(0, 0, o.width, o.height),
      a.fillText(n, k, d),
      y.mobile || a.strokeText(n, k, d);
  }
  function b() {
    (f.y = Number(D.getProperty(s, "yPercent", "px").replace("px", "")) * e),
      w();
  }
  function w() {
    l.clearRect(0, 0, u.width, u.height), l.drawImage(o, 0, f.y);
  }
  function C({ ctx: T, containerY: P }) {
    T.drawImage(u, h.x * e, (P + c) * e);
  }
  function x(T = 0) {
    (c = s.offsetTop),
      (h = s.getBoundingClientRect()),
      (g =
        Number(window.getComputedStyle(s, null).fontSize.replace("px", "")) *
        e),
      (d =
        Number(window.getComputedStyle(s, null).lineHeight.replace("px", "")) *
        e *
        Jc),
      (u.width = o.width = h.width * e),
      (u.height = o.height = h.height * e),
      (a.fillStyle = "black"),
      (a.strokeStyle = "#fbfbfb"),
      (a.miterLimit = 10),
      (a.lineJoin = "miter"),
      (a.lineWidth = y.mobile ? 0 : Je(0.85) * e),
      (a.font = `${g}px AntoniaH1-Light`),
      m(T);
  }
  function v() {
    return D.from(f, { y: g, ease: "expo.inOut", duration: 2, delay: 1 });
  }
  function E() {
    return D.to(f, { y: -g, ease: "expo.inOut", duration: 1 });
  }
  return (
    x(),
    {
      render: C,
      calculateY: b,
      resize: x,
      hide: E,
      show: v,
      geTopOffsetX() {
        return p;
      },
      getXPos() {
        return i
          ? y.mobile
            ? h.x * e + _
            : (h.x + h.width) * e
          : r
          ? (h.x + h.width) * e
          : h.x * e + _;
      },
      getYPos() {
        return f.y;
      },
      fontSize: g,
      lineHeight: d,
      height: h.height,
      offsetTop: c,
    }
  );
}
D.registerPlugin(B);
function ss(s) {
  var O;
  let e = (O = s.dataset.url) != null ? O : "",
    t = { width: 0, height: 0 },
    i = s.dataset.twoLines !== "",
    r = s.querySelector(".title a"),
    n = s.getBoundingClientRect(),
    o = 0,
    a = 0,
    u = s.querySelector(".next p"),
    l = s.querySelector(".title"),
    c = l.offsetTop,
    p = 0,
    f = 0,
    h = s.querySelector(".image"),
    g = h.querySelector("img"),
    d = { x: 0, y: 0, width: 0, height: 0 },
    _ = document.createElement("canvas"),
    m = _.getContext("2d"),
    b = document.createElement("canvas"),
    w = b.getContext("2d");
  s.appendChild(_);
  let C = Si({
      el: s.querySelector(".first"),
      pixelRatio: y.pixelRatio,
      trailing: !i,
      secondLine: !1,
      footer: !0,
    }),
    x = i
      ? Si({
          el: s.querySelector(".second"),
          pixelRatio: y.pixelRatio,
          trailing: i,
          secondLine: !0,
          footer: !0,
        })
      : void 0,
    v = ir(y.slashRenderer.h2, !0);
  y.footerSlash = v;
  let E;
  T();
  function T() {
    E && E.kill(),
      D.set([h, g], { clearProps: "all" }),
      (E = D.timeline({ paused: !0 })),
      E.to(h, { y: -Je(25), ease: "linear", duration: 1 }, 0),
      E.to(g, { rotation: 0, ease: "linear", duration: 1 }, 0);
  }
  function P(N) {
    if (!z.isActive) return;
    n = s.getBoundingClientRect();
    let G = N.clientY - (n.top - Je(100));
    a = D.utils.clamp(0, 1, G / (n.height / 2));
  }
  function k() {
    (y.wWidth !== t.width || y.wHeight !== t.height) && R();
    let N = D.getProperty(g, "rotation");
    p !== N && ((p = N), (f = vi(p))),
      m.clearRect(0, 0, _.width, _.height),
      w.clearRect(0, 0, _.width, _.height),
      C.calculateY(),
      x == null || x.calculateY(),
      C.render({ ctx: w, containerY: c }),
      x == null || x.render({ ctx: w, containerY: c }),
      v.render(),
      v.draw(w),
      m.drawImage(b, 0, 0);
    let G = d.x * y.pixelRatio,
      S = (D.getProperty(h, "y") + d.y) * y.pixelRatio,
      X = d.width * y.pixelRatio,
      se = d.height * y.pixelRatio;
    m.save(),
      m.save(),
      (m.fillStyle = "#fbfbfb"),
      m.beginPath(),
      m.translate(G, S),
      m.translate(X * 0.5, se * 0.5),
      m.rotate(f),
      m.translate(-X * 0.5, -se * 0.5),
      m.rect(0, 0, X, se),
      m.fill(),
      m.restore(),
      (m.globalCompositeOperation = "destination-in"),
      m.drawImage(b, 0, 0),
      m.restore(),
      y.isMobile || A();
  }
  function R() {
    (t.width = y.wWidth),
      (t.height = y.wHeight),
      (n = s.getBoundingClientRect());
    let N = n.width * y.pixelRatio,
      G = n.height * y.pixelRatio;
    (b.width = _.width = N),
      (b.height = _.height = G * 0.75),
      (d.x = h.offsetLeft),
      (d.y = h.offsetTop),
      (d.width = D.getProperty(g, "width")),
      (d.height = D.getProperty(g, "height")),
      (c = l.offsetTop),
      v.resize(),
      C.resize(x ? 0 : v.width()),
      x == null || x.resize(x ? v.width() : 0);
    let F = x ? x.getXPos() : C.getXPos(),
      S = x ? x.offsetTop : C.offsetTop;
    if (
      (y.mobile && (F = C.getXPos()),
      v.setContainerPosition(F - v.width(), (S + c) * y.pixelRatio),
      T(),
      y.mobile)
    )
      D.set(u, { clearProps: "all" });
    else {
      let X = i ? C.geTopOffsetX() : C.geTopOffsetX() - v.width();
      D.set(u, { x: X / y.pixelRatio });
    }
  }
  function A() {
    (o = Nr(o, a, 0.1)), E.progress(o);
  }
  function j(N) {
    window.addEventListener("mousemove", P),
      (y.nextProjectTransition = !0),
      pt.go(e, r, N);
  }
  s.addEventListener("click", j);
  let z = I.create({
    trigger: s,
    start: "-75% bottom",
    onToggle(N) {
      N.isActive ? D.ticker.add(k) : D.ticker.remove(k);
    },
  });
  y.isMobile || window.addEventListener("mousemove", P), R();
  function H() {
    E.kill(),
      z.kill(),
      (y.footerSlash = void 0),
      s.removeEventListener("click", j),
      window.addEventListener("mousemove", P),
      D.ticker.remove(k);
  }
  return { destroy: H };
}
D.registerPlugin(I);
function os(s) {
  let e = D.fromTo(
      s.querySelector("[data-parallax-target]"),
      { y: "-10%", transformOrigin: "center center" },
      { y: "10%", transformOrigin: "center center", force3D: !0 }
    ),
    t = I.create({
      trigger: s.querySelector(".inner"),
      scrub: !0,
      animation: e,
    });
  return {
    destroy: () => {
      t.kill(), e.kill();
    },
  };
}
D.registerPlugin(I);
function as(s) {
  let e = { width: 0, height: 0 },
    t = s.dataset.twoLines !== "",
    i = s.querySelector(".title-container"),
    r = i.offsetTop,
    n = 0,
    o = 0,
    a = s.getBoundingClientRect(),
    u = s.querySelector(".image"),
    l = u.querySelector("img"),
    c = { x: 0, y: 0, width: 0, height: 0 },
    p = document.createElement("canvas"),
    f = p.getContext("2d"),
    h = document.createElement("canvas"),
    g = h.getContext("2d");
  s.appendChild(p);
  let d = Si({
      el: s.querySelector(".first"),
      pixelRatio: y.pixelRatio,
      trailing: !t,
      secondLine: !1,
    }),
    _ = t
      ? Si({
          el: s.querySelector(".second"),
          pixelRatio: y.pixelRatio,
          trailing: t,
          secondLine: !0,
        })
      : void 0,
    m = ir(y.slashRenderer.h2);
  y.heroSlash = m;
  function b(T, P) {
    (e.width = T), (e.height = P), (a = s.getBoundingClientRect());
    let k = a.width * y.pixelRatio,
      R = a.height * y.pixelRatio;
    if (
      ((h.width = p.width = k),
      (h.height = p.height = R / 2),
      (c.x = u.offsetLeft),
      (c.y = u.offsetTop),
      (c.width = D.getProperty(l, "width")),
      (c.height = D.getProperty(l, "height")),
      (r = i.offsetTop),
      m.resize(),
      y.mobile)
    ) {
      d.resize(), _ == null || _.resize();
      let A = _ ? _.getXPos() : d.getXPos(),
        j = _ ? _.offsetTop : d.offsetTop;
      m.setContainerPosition(A, (j + r) * y.pixelRatio);
    } else {
      d.resize(0), _ == null || _.resize(_ ? m.width() : 0);
      let A = _ ? _.getXPos() : d.getXPos(),
        j = _ ? _.offsetTop : d.offsetTop;
      _
        ? m.setContainerPosition(A - m.width(), (j + r) * y.pixelRatio)
        : m.setContainerPosition(A, (j + r) * y.pixelRatio);
    }
  }
  function w() {
    f.clearRect(0, 0, p.width, p.height),
      g.clearRect(0, 0, p.width, p.height),
      d.calculateY(),
      _ == null || _.calculateY(),
      d.render({ ctx: g, containerY: r }),
      _ == null || _.render({ ctx: g, containerY: r }),
      m.render(),
      m.draw(g),
      f.drawImage(h, 0, 0);
    let T = c.x * y.pixelRatio,
      k = (D.getProperty(u, "y") + c.y) * y.pixelRatio,
      R = c.width * y.pixelRatio,
      A = c.height * y.pixelRatio;
    f.save(),
      f.save(),
      (f.fillStyle = y.white),
      f.beginPath(),
      f.translate(T, k),
      f.translate(R * 0.5, A * 0.5),
      f.rotate(o),
      f.translate(-R * 0.5, -A * 0.5),
      f.rect(0, 0, R, A),
      f.fill(),
      f.restore(),
      (f.globalCompositeOperation = "destination-in"),
      f.drawImage(h, 0, 0),
      f.restore();
  }
  function C() {
    let T = y.wWidth,
      P = y.wHeight;
    (e.width !== T || e.height !== P) && b(T, P);
    let k = D.getProperty(u.querySelector(".inner"), "rotation");
    n !== k && ((n = k), (o = vi(n))), w();
  }
  let x = I.create({
      trigger: s.querySelector(".project-title"),
      onToggle(T) {
        T.isActive ? D.ticker.add(C) : D.ticker.remove(C);
      },
    }),
    v = I.create({
      animation: D.to(u.querySelector(".inner"), { rotation: -2 }),
      trigger: u,
      invalidateOnRefresh: !0,
      start() {
        return `top top+=${s.offsetTop + u.offsetTop}`;
      },
      scrub: !0,
    });
  function E() {
    (y.heroSlash = void 0), D.ticker.remove(C), x.kill(), v.kill();
  }
  return b(y.wWidth, y.wHeight), { destroy: E };
}
function _a() {}
_a.prototype = {
  on: function (s, e, t) {
    var i = this.e || (this.e = {});
    return (i[s] || (i[s] = [])).push({ fn: e, ctx: t }), this;
  },
  once: function (s, e, t) {
    var i = this;
    function r() {
      i.off(s, r), e.apply(t, arguments);
    }
    return (r._ = e), this.on(s, r, t);
  },
  emit: function (s) {
    var e = [].slice.call(arguments, 1),
      t = ((this.e || (this.e = {}))[s] || []).slice(),
      i = 0,
      r = t.length;
    for (i; i < r; i++) t[i].fn.apply(t[i].ctx, e);
    return this;
  },
  off: function (s, e) {
    var t = this.e || (this.e = {}),
      i = t[s],
      r = [];
    if (i && e)
      for (var n = 0, o = i.length; n < o; n++)
        i[n].fn !== e && i[n].fn._ !== e && r.push(i[n]);
    return r.length ? (t[s] = r) : delete t[s], this;
  },
};
var eh = _a,
  jd = _a;
eh.TinyEmitter = jd;
var us = eh;
function Rd(s) {
  let e = s.split(`
`),
    t = {},
    i = /([a-zA-Z0-9\-_]+): *(.+)/,
    r = null;
  for (let n = 0, o = e.length; n < o; n++)
    e[n] !== "" && ((r = i.exec(e[n])), r && (t[r[1]] = r[2]));
  return t;
}
var th = Rd;
var ih = function (s) {
  (this.mime = null),
    (this.size = null),
    (this.lastModified = null),
    (this.httpHeader = null),
    s && this.setFromHTTPHeader(s);
};
ih.prototype = {
  setFromHTTPHeader: function (s) {
    (this.httpHeader = th(s)),
      this.httpHeader["content-length"] &&
        (this.size = this.httpHeader["content-length"]),
      this.httpHeader["content-type"] &&
        (this.mime = this.httpHeader["content-type"]),
      this.httpHeader["last-modified"] &&
        (this.lastModified = new Date(this.httpHeader["last-modified"]));
  },
};
var Qr = ih;
var Md = $l(function (s, e) {
    (function () {
      function t(i) {
        var r = null;
        if (typeof i != "string") return r;
        var n = i.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
        return n && n.length && (r = n[1]), r;
      }
      s.exports && (e = s.exports = t), (e.base64MimeType = t);
    }.call(wi));
  }),
  ls = Md;
function Od(s) {
  return /^(data:\w+\/[a-zA-Z\+\-\.]+;base64,)?([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/gi.test(
    s
  );
}
var cs = Od;
function Ld(s) {
  let e;
  return (
    cs(s) ? (e = ls(s).split("/")[1]) : (e = s.split(".").pop()), e || null
  );
}
var hs = Ld;
var Bd = {
  gif: "image/gif",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  html: "text/html",
  css: "text/css",
  csv: "text/csv",
  xml: "text/xml",
  mp4: "video/mp4",
  ogg: "video/ogg",
  ogv: "video/ogg",
  webm: "video/webm",
  wav: "audio/wav",
  mp3: "audio/mpeg",
};
function Id(s) {
  let e;
  if (cs(s)) e = ls(s);
  else {
    let t = hs(s);
    e = Bd[t.toLowerCase()];
  }
  return e || "application/octet-stream";
}
var fs = Id;
function zd(s) {
  let e = new ArrayBuffer(s.length * 2),
    t = new Uint16Array(e);
  for (let i = 0, r = s.length; i < r; i++) t[i] = s.charCodeAt(i);
  return e;
}
var Da = zd;
var $ = class extends us {
    constructor(e, t) {
      super();
      (this.options = t),
        this.options.onComplete && this.on("complete", this.options.onComplete),
        this.options.onProgress && this.on("progress", this.options.onProgress),
        (this.xhr = null),
        (this.content = null),
        (this.url = null),
        (this.loadType = e || $.typeText),
        (this.loadTypeSet = !1),
        (this.fileMeta = null),
        (this._onStateChange = this._onStateChange.bind(this)),
        (this._onProgress = this._onProgress.bind(this)),
        (this._dispatchProgress = this._dispatchProgress.bind(this)),
        (this._dispatchComplete = this._dispatchComplete.bind(this));
    }
    canLoadUsingXHR() {
      return typeof XMLHttpRequest != "undefined";
    }
    canLoadType(e) {
      let t = new XMLHttpRequest();
      return t.open("GET", "someFakeURL", !0), rh(t, e);
    }
    load(e) {
      if (((this.url = e), this.canLoadUsingXHR())) {
        if (
          ((this.xhr = new XMLHttpRequest()),
          this.xhr.open("GET", e, !0),
          (this.xhr.onreadystatechange = this._onStateChange),
          this.xhr.onprogress !== void 0 &&
            (this.xhr.onprogress = this._onProgress),
          this.loadType !== $.typeText)
        ) {
          Nd.call(this) ||
            (console.warn(
              "Attempting to use incompatible load type " +
                this.loadType +
                ". Switching it to " +
                $.typeText
            ),
            (this.loadType = $.typeText));
          try {
            this.loadTypeSet = qd.call(this) && rh(this.xhr, this.loadType);
          } catch (t) {
            this.loadTypeSet = !1;
          }
          !this.loadTypeSet &&
            (this.loadType === $.typeBlob ||
              this.loadType === $.typeArraybuffer) &&
            this.xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
        this.xhr.send();
      }
    }
    stopLoad() {
      this.xhr.abort();
    }
    _dispatchStart() {
      this.emit("start");
    }
    _dispatchProgress(e) {
      this.emit("progress", e);
    }
    _dispatchComplete() {
      this.emit("complete", this.content);
    }
    _dispatchError(e) {
      this.emit("error", e);
    }
    _onProgress(e) {
      let t = e.loaded || e.position,
        i = e.total || e.totalSize;
      i ? this._dispatchProgress(t / i) : this._dispatchProgress(0);
    }
    _onStateChange() {
      if (this.xhr.readyState > 1) {
        let e,
          t = !1;
        try {
          e = this.xhr.status;
        } catch (i) {
          t = !0;
        }
        if (e === 200)
          switch (this.xhr.readyState) {
            case 2:
              (this.fileMeta = new Qr(this.xhr.getAllResponseHeaders())),
                this._dispatchStart();
              break;
            case 3:
              break;
            case 4:
              this._parseContent(), this._dispatchComplete();
              break;
          }
        else
          t ||
            ((this.xhr.onreadystatechange = void 0),
            this._dispatchError(this.xhr.status));
      }
    }
    _parseContent() {
      if (this.loadTypeSet || this.loadType === $.typeText)
        this.content = this.xhr.response || this.xhr.responseText;
      else
        switch (this.loadType) {
          case $.typeArraybuffer:
            if (ArrayBuffer) this.content = Da(this.xhr.response);
            else throw new Error("This browser does not support ArrayBuffer");
            break;
          case $.typeBlob:
          case $.typeVideo:
          case $.typeAudio:
            if (Blob)
              this.fileMeta || (this.fileMeta = new Qr()),
                this.fileMeta.mime === null &&
                  (this.fileMeta.mime = fs(this.url)),
                (this.content = new Blob([Da(this.xhr.response)], {
                  type: this.fileMeta.mime,
                }));
            else throw new Error("This browser does not support Blob");
            break;
          case $.typeJSON:
            this.content = JSON.parse(this.xhr.response);
            break;
          case $.typeDocument:
            this.content = this.xhr.response;
            break;
        }
    }
  },
  Le = $;
function Nd() {
  return (
    this.loadType === $.typeText ||
    this.loadType === $.typeArraybuffer ||
    this.loadType === $.typeBlob ||
    this.loadType === $.typeJSON ||
    this.loadType === $.typeDocument ||
    this.loadType === $.typeVideo ||
    this.loadType === $.typeAudio
  );
}
function qd() {
  return this.xhr.responseType !== void 0;
}
function rh(s, e) {
  return (
    (e === $.typeVideo || e === $.typeAudio) && (e = $.typeBlob),
    (s.responseType = e),
    s.responseType === e
  );
}
$.typeText = "text";
$.typeArraybuffer = "arraybuffer";
$.typeBlob = "blob";
$.typeJSON = "json";
$.typeDocument = "document";
$.typeVideo = "video";
$.typeAudio = "audio";
var ya = class extends Le {
    constructor(e) {
      super(Le.typeText, e);
    }
  },
  xa = ya;
var wa = class extends Le {
    constructor(e) {
      super(Le.typeArraybuffer, e);
      this._imageLoaded = !1;
    }
    load(e) {
      this.options.xhrImages &&
      this.canLoadUsingXHR() &&
      this.canLoadType(this.loadType) &&
      ArrayBuffer &&
      (window.URL || window.webkitURL || FileReader)
        ? super.load(e)
        : this._createAndLoadImage(e);
    }
    _dispatchProgress(e) {
      super._dispatchProgress(this._imageLoaded ? e : e * 0.9999);
    }
    _dispatchComplete() {
      this._imageLoaded && super._dispatchComplete();
    }
    _onImageLoadComplete() {
      (this._imageLoaded = !0),
        this._dispatchProgress(1),
        this._dispatchComplete();
    }
    _onImageLoadFail() {
      this._dispatchError("Image failed to load");
    }
    _parseContent() {
      let e = null,
        t = null;
      if (
        (this.fileMeta || (this.fileMeta = new Qr()),
        (!this.loadTypeSet || this.fileMeta.mime === null) &&
          (this.fileMeta.mime = fs(this.url)),
        this.xhr.response instanceof ArrayBuffer)
      )
        e = this.xhr.response;
      else if (this.xhr.mozResponseArrayBuffer)
        e = this.xhr.mozResponseArrayBuffer;
      else throw new Error("Return type for image load unsupported");
      if (
        ((t = new Blob([e], { type: this.fileMeta.mime })),
        window.URL || window.webkitURL)
      )
        this._createAndLoadImage(
          (window.URL || window.webkitURL).createObjectURL(t)
        );
      else if (FileReader) {
        let i = new FileReader();
        (i.onloadend = function () {
          (window.URL || window.webkitURL) &&
            (window.URL || window.webkitURL).revokeObjectURL(t),
            this._createAndLoadImage(i.result);
        }.bind(this)),
          i.readAsDataURL(t);
      }
    }
    _createAndLoadImage(e) {
      (this.content = new Image()),
        (this.content.onload = this._onImageLoadComplete.bind(this)),
        (this.content.onerror = this._onImageLoadFail.bind(this)),
        (this.content.src = e);
    }
  },
  ki = wa;
var va = class extends Le {
    constructor(e) {
      super(Le.typeJSON, e);
    }
  },
  ba = va;
var Ca = class extends Le {
    constructor(e) {
      super(Le.typeVideo, e);
    }
    _parseContent() {
      if ((super._parseContent(), window.URL && window.URL.createObjectURL)) {
        let e = window.URL.createObjectURL(this.content);
        (this.content = document.createElement(this.loadType)),
          (this.content.src = e);
      } else
        throw new Error("This browser does not support URL.createObjectURL()");
    }
  },
  gr = Ca;
var Ea = class extends Le {
    constructor(e) {
      super(Le.typeAudio, e);
    }
  },
  ps = Ea;
var nh = {
    png: ki,
    jpg: ki,
    jpeg: ki,
    webp: ki,
    gif: ki,
    json: ba,
    mp4: gr,
    ogg: gr,
    ogv: gr,
    webm: gr,
    mp3: ps,
    wav: ps,
  },
  Hd = xa,
  Ta = class extends us {
    constructor(e) {
      super();
      (this.options = this.parseOptions(e)),
        this.options.onComplete && this.on("complete", this.options.onComplete),
        this.options.onProgress && this.on("progress", this.options.onProgress),
        this.reset(),
        (this.loaders = {}),
        (this._continueLoadQueue = this._continueLoadQueue.bind(this));
    }
    parseOptions(e) {
      return {
        xhrImages: e.xhrImages || !1,
        onComplete: typeof e.onComplete == "function" ? e.onComplete : void 0,
        onProgress: typeof e.onProgress == "function" ? e.onProgress : void 0,
        throttle: e.throttle || 0,
      };
    }
    mergeOptions(e) {
      return {
        xhrImages: e.xhrImages || this.options.xhrImages,
        onComplete:
          typeof e.onComplete == "function"
            ? e.onComplete
            : this.options.onComplete,
        onProgress:
          typeof e.onProgress == "function"
            ? e.onProgress
            : this.options.onProgress,
        throttle: e.throttle || this.options.throttle,
      };
    }
    add(e, t) {
      e && this.addFromLoaderType(e, this._getLoader(e), t);
    }
    addImage(e, t) {
      this.addFromLoaderType(e, ki, t);
    }
    addJSON(e, t) {
      this.addFromLoaderType(e, ba, t);
    }
    addText(e, t) {
      this.addFromLoaderType(e, xa, t);
    }
    addVideo(e, t) {
      this.addFromLoaderType(e, gr, t);
    }
    addAudio(e, t) {
      this.addFromLoaderType(e, ps, t);
    }
    addFromLoaderType(e, t, i) {
      if (!this.loaders[e])
        return (
          (this.loaders[e] = new t(this.mergeOptions(i || {}))),
          this.urls.push(e),
          this.loaders[e]
        );
    }
    setPercentage(e, t) {
      this.percentageOfLoad[e] = t;
    }
    load() {
      if (!this.loading) {
        this._setupPercentages();
        let e = this.options.throttle || this.urls.length;
        for (let t = 0; t < e; t++) this._continueLoadQueue();
      }
    }
    reset() {
      (this.percTotal = 0),
        (this.loadIdx = 0),
        (this.urls = []),
        (this.progress = 0),
        (this.percentageOfLoad = {}),
        (this.loading = !1),
        (this.status = {});
    }
    stopLoad() {
      if (this.loading)
        for (var e = 0, t = this.urls.length; e < t; e++)
          this.loaders[this.urls[e]].stopLoad();
    }
    get(e) {
      return this.loaders[e] && this.loaders[e].content;
    }
    _setupPercentages() {
      let e = 0,
        t = 1,
        i = 0,
        r = 1 / this.urls.length;
      for (let n = 0, o = this.urls.length; n < o; n++)
        this.percentageOfLoad[this.urls[n]]
          ? (e += this.percentageOfLoad[this.urls[n]])
          : i++;
      if (i > 0) {
        e > 1 && ((t = 1 / e), (e *= t)), (r = (1 - e) / i);
        for (let n = 0, o = this.urls.length; n < o; n++)
          this.percentageOfLoad[this.urls[n]]
            ? (this.percentageOfLoad[this.urls[n]] *= t)
            : (this.percentageOfLoad[this.urls[n]] = r);
      }
    }
    _continueLoadQueue() {
      if (this.loadIdx < this.urls.length) {
        let e = this.urls[this.loadIdx],
          t = this.loaders[e];
        (this.status[e] = !1),
          this.loadIdx++,
          t.on("progress", this._onLoadProgress.bind(this, e)),
          t.once("error", this._onLoadError.bind(this, e)),
          t.once("complete", this._onLoadComplete.bind(this, e)),
          t.load(e);
      } else this._checkComplete() && this.emit("complete");
    }
    _onLoadError(e, t) {
      console.warn("Couldn't load " + e + " received the error: " + t);
      let i = this.percentageOfLoad[e];
      this.emit("progress", this.percTotal + i, e),
        (this.status[e] = !0),
        this._continueLoadQueue();
    }
    _onLoadProgress(e, t) {
      let i = this.percentageOfLoad[e] * t;
      this.emit("progress", this.percTotal + i, e);
    }
    _onLoadComplete(e) {
      (this.percTotal += this.percentageOfLoad[e]),
        (this.status[e] = !0),
        this._continueLoadQueue();
    }
    _checkComplete() {
      let e = !0;
      for (let t = 0, i = this.urls.length; t < i; t++)
        this.status[this.urls[t]] || (e = !1);
      return e;
    }
    _getLoader(e) {
      let t = hs(e),
        i = Hd;
      return t && nh[t.toLowerCase()] && (i = nh[t.toLowerCase()]), i;
    }
  },
  sh = Ta;
D.registerPlugin(B);
var Zr = 1998,
  oh = new Date().getFullYear(),
  Xd = oh - Zr;
function ds(s) {
  B.create("preloader", ".37, 0, 0, 1");
  let e = !1,
    t = Zr.toString(),
    i = Zr.toString(),
    r = !1,
    n = !1,
    o = document.querySelector("#preloader"),
    a = document.querySelector("main");
  (y.preloader = new sh({ xhrImages: !1, throttle: 0 })),
    (a.style.opacity = "0");
  let u = D.utils.toArray(
      document.querySelector("#progress1").querySelectorAll(".char")
    ),
    l = D.utils.toArray(
      document.querySelector("#progress2").querySelectorAll(".char")
    );
  function c() {
    var C;
    let g = 1,
      d = t;
    e = !0;
    let _ = i.split(""),
      m = t.split(""),
      b = [];
    for (let x = 0; x < _.length; x++)
      _[x] !== m[x]
        ? b.push({ change: !0, from: _[x], to: m[x] })
        : b.push({ change: !1 });
    r && (n = !0);
    let w = D.timeline({ paused: !0 });
    for (let [x, v] of b.entries())
      if (v.change) {
        l[x].innerText = (C = v.to) != null ? C : "";
        let E = 0.035 * x;
        w.to(
          u[x],
          { yPercent: -100, duration: g, delay: E, ease: "preloader" },
          0
        ),
          w.to(
            l[x],
            { yPercent: -100, duration: g, delay: E, ease: "preloader" },
            0
          );
      }
    w.play().then(() => f(d));
  }
  function p() {
    (o.style.zIndex = "0"),
      (a.style.opacity = "1"),
      (document.body.style.cursor = "auto"),
      s();
  }
  function f(g) {
    (i = g), (e = !1);
    let d = i.toString().split("");
    for (let [_, m] of d.entries()) u[_].innerText = m;
    D.set([u, l], { yPercent: 0 }), n ? p() : c();
  }
  function h() {
    D.to([".preloader h1", ".preloader p", ".preloader .progress-container"], {
      opacity: 1,
      duration: 0.334,
      delay: 0.15,
      stagger: 0.1,
      ease: "sine.in",
      onComplete: () => {
        let g = Zr,
          d = D.utils.toArray(o.querySelectorAll("[data-main-preload]"));
        (y.numOfProjects = d.length),
          d.forEach((_) => {
            y.preloader.add(
              y.isMobile ? _.dataset.preloadMobile : _.dataset.preloadUrl
            );
          }),
          y.preloader.on("progress", (_) => {
            let m = Math.floor(Xd * _);
            (g = Zr + m), (t = g.toString()), e || c();
          }),
          y.preloader.on("complete", () => {
            (r = !0), (t = oh.toString()), e || c();
          }),
          y.preloader.load();
      },
    });
  }
  h();
}
function gs(s) {
  var e, t;
  s.src = y.isPhone
    ? (e = s.dataset.srcSmall) != null
      ? e
      : ""
    : (t = s.dataset.src) != null
    ? t
    : "";
}
D.registerPlugin(B);
function ms() {
  var o;
  let s = document.querySelector(".rotate"),
    e = s.querySelector(".cellphone"),
    t = window.matchMedia("(orientation: landscape)"),
    i;
  function r(a) {
    a.matches
      ? ((s.style.display = "block"), i == null || i.play(0))
      : ((s.style.display = "none"), i == null || i.pause());
  }
  function n() {
    let a = 1.333 * 0.5;
    (i = D.timeline({ repeat: -1, repeatDelay: 0.5, paused: !0 })),
      i.from(
        e,
        {
          y: "+=70vh",
          rotate: "-=265deg",
          ease: B.create("custom", "0.56, 0, 0.01, 0.98"),
          duration: a,
        },
        0
      ),
      i.to(
        e,
        {
          y: "-=70vh",
          rotate: "+=275deg",
          ease: B.create("custom", "0.83, 0, 0.37, 0.99"),
          duration: a,
        },
        "+=0.667"
      );
  }
  y.isPhone
    ? (n(), t.addEventListener("change", r), r(t))
    : (o = s.parentNode) == null || o.removeChild(s);
}
function Pa() {
  let s = 1.5,
    e = !1,
    t = 0,
    i = 0,
    r = (u) => {
      (e = !0),
        (i = document.documentElement.scrollTop || document.body.scrollTop),
        (t = u.clientY);
    },
    n = (u) => {
      if (!e) return;
      let l = u.clientY,
        c = (t - l) * s;
      window.scrollTo({ top: i + c });
    },
    o = () => {
      e = !1;
    };
  window.addEventListener("mousedown", r),
    window.addEventListener("mousemove", n),
    window.addEventListener("mouseup", o);
  function a() {
    window.removeEventListener("mousedown", r),
      window.removeEventListener("mousemove", n),
      window.removeEventListener("mouseup", o);
  }
  return { destroy: a };
}
D.registerPlugin(I);
function Sa(s) {
  let e = D.timeline();
  e.add(
    D.fromTo(
      s.children[0],
      { y: "15%", rotation: -0.5 },
      { y: "-15%", rotation: 2, ease: "linear", force3D: !0 }
    ),
    0
  );
  let t = I.create({
    trigger: s,
    animation: e,
    scrub: !0,
    start: "top bottom",
    end: "bottom top",
  });
  function i() {
    t.kill();
  }
  return { destroy: i };
}
D.registerPlugin(I);
var Ud = {
    namespace: "project",
    async beforeEnter(s) {
      (this.lazyLoader = Uc(s.next.container)),
        (this.images = []),
        (this.parallaxes = []),
        (this.widePictures = []),
        (this.anchors = []),
        (this.mobilePictures = []),
        y.isMobile ||
          ((this.scrollDrag = Pa()),
          s.next.container.querySelectorAll(".anchor").forEach((e) => {
            var t;
            (t = this.anchors) == null || t.push(si(e));
          })),
        (this.projectHero = as(
          s.next.container.querySelector(".project-hero")
        )),
        s.next.container.querySelectorAll("[data-img-reveal]").forEach((e) => {
          var t;
          (t = this.images) == null || t.push(pa(e));
        }),
        s.next.container
          .querySelectorAll("[data-anim-parallax]")
          .forEach((e) => {
            var t;
            (t = this.parallaxes) == null || t.push(is(e));
          }),
        s.next.container
          .querySelectorAll(".project-wide-picture")
          .forEach((e) => {
            var t;
            (t = this.widePictures) == null || t.push(os(e));
          }),
        s.next.container
          .querySelectorAll("[data-static-image]")
          .forEach((e) => {
            gs(e);
          }),
        s.next.container
          .querySelectorAll(".project-mobile-pictures")
          .forEach((e) => {
            var t;
            (t = this.mobilePictures) == null || t.push(Sa(e));
          });
    },
    afterEnter(s) {
      this.projectNext = ss(s.next.container.querySelector(".project-next"));
    },
    beforeLeave() {
      var s;
      (s = this.scrollDrag) == null || s.destroy();
    },
    afterLeave() {
      var s, e, t, i, r, n, o, a;
      (s = this.lazyLoader) == null || s.call(this),
        (e = this.images) == null || e.forEach((u) => u()),
        (t = this.parallaxes) == null || t.forEach((u) => u.destroy()),
        (i = this.widePictures) == null || i.forEach((u) => u.destroy()),
        (r = this.anchors) == null || r.forEach((u) => u.destroy()),
        (n = this.mobilePictures) == null || n.forEach((u) => u.destroy()),
        (o = this.projectNext) == null || o.destroy(),
        (a = this.projectHero) == null || a.destroy();
    },
  },
  ka = Ud;
function _s() {
  D.to(document.querySelector("header"), {
    opacity: 1,
    duration: 0.4,
    ease: "none",
  });
}
var Wd = {
    to: { namespace: ["home"] },
    async once(s) {
      var e;
      D.set(s.next.container, { opacity: 0 }),
        dr(0.1, 0, 0.35),
        D.set(s.next.container, { opacity: 1 }),
        _s(),
        await ((e = y.homeController) == null ? void 0 : e.transitionIn());
    },
  },
  Fa = Wd;
var zt,
  Fi,
  Aa,
  mr,
  Kr,
  Ds,
  ys,
  Jr,
  ht = "transform",
  ja = ht + "Origin",
  ah,
  Ra = function (e) {
    var t = e.ownerDocument || e;
    for (
      !(ht in e.style) &&
      ("msTransform" in e.style) &&
      ((ht = "msTransform"), (ja = ht + "Origin"));
      t.parentNode && (t = t.parentNode);

    );
    if (((Fi = window), (ys = new _r()), t)) {
      (zt = t),
        (Aa = t.documentElement),
        (mr = t.body),
        (Jr = zt.createElementNS("http://www.w3.org/2000/svg", "g")),
        (Jr.style.transform = "none");
      var i = t.createElement("div"),
        r = t.createElement("div");
      mr.appendChild(i),
        i.appendChild(r),
        (i.style.position = "static"),
        (i.style[ht] = "translate3d(0,0,1px)"),
        (ah = r.offsetParent !== i),
        mr.removeChild(i);
    }
    return t;
  },
  Vd = function (e) {
    for (var t, i; e && e !== mr; )
      (i = e._gsap),
        i && i.uncache && i.get(e, "x"),
        i &&
          !i.scaleX &&
          !i.scaleY &&
          i.renderTransform &&
          ((i.scaleX = i.scaleY = 1e-4),
          i.renderTransform(1, i),
          t ? t.push(i) : (t = [i])),
        (e = e.parentNode);
    return t;
  },
  uh = [],
  lh = [],
  Ma = function () {
    return Fi.pageYOffset || zt.scrollTop || Aa.scrollTop || mr.scrollTop || 0;
  },
  Oa = function () {
    return (
      Fi.pageXOffset || zt.scrollLeft || Aa.scrollLeft || mr.scrollLeft || 0
    );
  },
  La = function (e) {
    return (
      e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    );
  },
  ch = function s(e) {
    if (Fi.getComputedStyle(e).position === "fixed") return !0;
    if (((e = e.parentNode), e && e.nodeType === 1)) return s(e);
  },
  Ba = function s(e, t) {
    if (e.parentNode && (zt || Ra(e))) {
      var i = La(e),
        r = i
          ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        n = i ? (t ? "rect" : "g") : "div",
        o = t !== 2 ? 0 : 100,
        a = t === 3 ? 100 : 0,
        u =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        l = zt.createElementNS
          ? zt.createElementNS(r.replace(/^https/, "http"), n)
          : zt.createElement(n);
      return (
        t &&
          (i
            ? (Ds || (Ds = s(e)),
              l.setAttribute("width", 0.01),
              l.setAttribute("height", 0.01),
              l.setAttribute("transform", "translate(" + o + "," + a + ")"),
              Ds.appendChild(l))
            : (Kr || ((Kr = s(e)), (Kr.style.cssText = u)),
              (l.style.cssText =
                u +
                "width:0.1px;height:0.1px;top:" +
                a +
                "px;left:" +
                o +
                "px"),
              Kr.appendChild(l))),
        l
      );
    }
    throw "Need document and parent.";
  },
  Yd = function (e) {
    for (var t = new _r(), i = 0; i < e.numberOfItems; i++)
      t.multiply(e.getItem(i).matrix);
    return t;
  },
  hh = function (e) {
    var t = e.getCTM(),
      i;
    return (
      t ||
        ((i = e.style[ht]),
        (e.style[ht] = "none"),
        e.appendChild(Jr),
        (t = Jr.getCTM()),
        e.removeChild(Jr),
        i
          ? (e.style[ht] = i)
          : e.style.removeProperty(
              ht.replace(/([A-Z])/g, "-$1").toLowerCase()
            )),
      t || ys.clone()
    );
  },
  Gd = function (e, t) {
    var i = La(e),
      r = e === i,
      n = i ? uh : lh,
      o = e.parentNode,
      a,
      u,
      l,
      c,
      p,
      f;
    if (e === Fi) return e;
    if (
      (n.length || n.push(Ba(e, 1), Ba(e, 2), Ba(e, 3)), (a = i ? Ds : Kr), i)
    )
      r
        ? ((l = hh(e)), (c = -l.e / l.a), (p = -l.f / l.d), (u = ys))
        : ((l = e.getBBox()),
          (u = e.transform ? e.transform.baseVal : {}),
          (u = u.numberOfItems
            ? u.numberOfItems > 1
              ? Yd(u)
              : u.getItem(0).matrix
            : ys),
          (c = u.a * l.x + u.c * l.y),
          (p = u.b * l.x + u.d * l.y)),
        t && e.tagName.toLowerCase() === "g" && (c = p = 0),
        (r ? i : o).appendChild(a),
        a.setAttribute(
          "transform",
          "matrix(" +
            u.a +
            "," +
            u.b +
            "," +
            u.c +
            "," +
            u.d +
            "," +
            (u.e + c) +
            "," +
            (u.f + p) +
            ")"
        );
    else {
      if (((c = p = 0), ah))
        for (
          u = e.offsetParent, l = e;
          l && (l = l.parentNode) && l !== u && l.parentNode;

        )
          (Fi.getComputedStyle(l)[ht] + "").length > 4 &&
            ((c = l.offsetLeft), (p = l.offsetTop), (l = 0));
      if (
        ((f = Fi.getComputedStyle(e)),
        f.position !== "absolute" && f.position !== "fixed")
      )
        for (u = e.offsetParent; o && o !== u; )
          (c += o.scrollLeft || 0), (p += o.scrollTop || 0), (o = o.parentNode);
      (l = a.style),
        (l.top = e.offsetTop - p + "px"),
        (l.left = e.offsetLeft - c + "px"),
        (l[ht] = f[ht]),
        (l[ja] = f[ja]),
        (l.position = f.position === "fixed" ? "fixed" : "absolute"),
        e.parentNode.appendChild(a);
    }
    return a;
  },
  Ia = function (e, t, i, r, n, o, a) {
    return (e.a = t), (e.b = i), (e.c = r), (e.d = n), (e.e = o), (e.f = a), e;
  },
  _r = (function () {
    function s(t, i, r, n, o, a) {
      t === void 0 && (t = 1),
        i === void 0 && (i = 0),
        r === void 0 && (r = 0),
        n === void 0 && (n = 1),
        o === void 0 && (o = 0),
        a === void 0 && (a = 0),
        Ia(this, t, i, r, n, o, a);
    }
    var e = s.prototype;
    return (
      (e.inverse = function () {
        var i = this.a,
          r = this.b,
          n = this.c,
          o = this.d,
          a = this.e,
          u = this.f,
          l = i * o - r * n || 1e-10;
        return Ia(
          this,
          o / l,
          -r / l,
          -n / l,
          i / l,
          (n * u - o * a) / l,
          -(i * u - r * a) / l
        );
      }),
      (e.multiply = function (i) {
        var r = this.a,
          n = this.b,
          o = this.c,
          a = this.d,
          u = this.e,
          l = this.f,
          c = i.a,
          p = i.c,
          f = i.b,
          h = i.d,
          g = i.e,
          d = i.f;
        return Ia(
          this,
          c * r + f * o,
          c * n + f * a,
          p * r + h * o,
          p * n + h * a,
          u + g * r + d * o,
          l + g * n + d * a
        );
      }),
      (e.clone = function () {
        return new s(this.a, this.b, this.c, this.d, this.e, this.f);
      }),
      (e.equals = function (i) {
        var r = this.a,
          n = this.b,
          o = this.c,
          a = this.d,
          u = this.e,
          l = this.f;
        return (
          r === i.a &&
          n === i.b &&
          o === i.c &&
          a === i.d &&
          u === i.e &&
          l === i.f
        );
      }),
      (e.apply = function (i, r) {
        r === void 0 && (r = {});
        var n = i.x,
          o = i.y,
          a = this.a,
          u = this.b,
          l = this.c,
          c = this.d,
          p = this.e,
          f = this.f;
        return (
          (r.x = n * a + o * l + p || 0), (r.y = n * u + o * c + f || 0), r
        );
      }),
      s
    );
  })();
function Ct(s, e, t, i) {
  if (!s || !s.parentNode || (zt || Ra(s)).documentElement === s)
    return new _r();
  var r = Vd(s),
    n = La(s),
    o = n ? uh : lh,
    a = Gd(s, t),
    u = o[0].getBoundingClientRect(),
    l = o[1].getBoundingClientRect(),
    c = o[2].getBoundingClientRect(),
    p = a.parentNode,
    f = !i && ch(s),
    h = new _r(
      (l.left - u.left) / 100,
      (l.top - u.top) / 100,
      (c.left - u.left) / 100,
      (c.top - u.top) / 100,
      u.left + (f ? 0 : Oa()),
      u.top + (f ? 0 : Ma())
    );
  if ((p.removeChild(a), r))
    for (u = r.length; u--; )
      (l = r[u]), (l.scaleX = l.scaleY = 0), l.renderTransform(1, l);
  return e ? h.inverse() : h;
}
var $d = 1,
  xs,
  et,
  fh = 180 / Math.PI,
  Qd = Math.PI / 180,
  ws = {},
  ph = {},
  za = {},
  Zd = "onStart,onUpdate,onComplete,onReverseComplete,onInterrupt".split(","),
  Na =
    "transform,transformOrigin,width,height,position,top,left,opacity,zIndex".split(
      ","
    ),
  en = function (e) {
    return xs(e)[0] || console.warn("Element not found:", e);
  },
  Et = function (e) {
    return Math.round(e * 1e4) / 1e4 || 0;
  },
  qa = function (e, t, i) {
    return e.forEach(function (r) {
      return r.classList[i](t);
    });
  },
  dh = {
    zIndex: 1,
    clear: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
  },
  gh = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1,
  },
  Kd = function (e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase();
  },
  Jd = function (e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e;
  },
  mh,
  Dr = function (e, t) {
    var i = {},
      r;
    for (r in e) t[r] || (i[r] = e[r]);
    return i;
  },
  Ha = {},
  _h = function (e) {
    var t = (Ha[e] = Jd(e));
    return (za[e] = t.concat(Na)), t;
  },
  eg = function (e) {
    var t = e._gsap || et.core.getCache(e);
    return t.gmCache === et.ticker.frame
      ? t.gMatrix
      : ((t.gmCache = et.ticker.frame), (t.gMatrix = Ct(e, !0, !1, !0)));
  },
  tg = function s(e, t, i) {
    i === void 0 && (i = 0);
    for (
      var r = e.parentNode,
        n = 1e3 * Math.pow(10, i) * (t ? -1 : 1),
        o = t ? -n * 900 : 0;
      e;

    )
      (o += n), (e = e.previousSibling);
    return r ? o + s(r, t, i + 1) : o;
  },
  vs = function (e, t, i) {
    return (
      e.forEach(function (r) {
        return (r.d = tg(i ? r.element : r.t, t));
      }),
      e.sort(function (r, n) {
        return r.d - n.d;
      }),
      e
    );
  },
  Xa = function (e, t) {
    for (
      var i = e.element.style, r = (e.css = e.css || []), n = t.length, o, a;
      n--;

    )
      (o = t[n]),
        (a = i[o] || i.getPropertyValue(o)),
        r.push(a ? o : ph[o] || (ph[o] = Kd(o)), a);
    return i;
  },
  Dh = function (e) {
    var t = e.css,
      i = e.element.style,
      r = 0;
    for (e.cache.uncache = 1; r < t.length; r += 2)
      t[r + 1] ? (i[t[r]] = t[r + 1]) : i.removeProperty(t[r]);
  },
  ig = function (e, t) {
    for (var i = e.length, r; i--; ) (r = e[i]), (r.a.cache.uncache = 1);
    t || e.finalStates.forEach(Dh);
  },
  Ua = function (e, t) {
    var i = e.element,
      r = e.width,
      n = e.height,
      o = e.uncache,
      a = e.getProp,
      u = i.style,
      l,
      c;
    if ((typeof t != "object" && (t = e), a("position") !== "absolute")) {
      if (
        ((c = a("display") === "none"),
        (!e.isVisible || c) &&
          (c && (Xa(e, ["display"]).display = t.display),
          (e.matrix = t.matrix),
          (e.width = r = e.width || t.width),
          (e.height = n = e.height || t.height)),
        (u.position = "absolute"),
        (u.width = r + "px"),
        (u.height = n + "px"),
        u.top || (u.top = "0px"),
        u.left || (u.left = "0px"),
        o)
      )
        l = new Ai(i);
      else if (((l = Dr(e, ws)), (l.position = "absolute"), e.simple)) {
        var p = i.getBoundingClientRect();
        l.matrix = new _r(1, 0, 0, 1, p.left + Oa(), p.top + Ma());
      } else l.matrix = Ct(i, !1, !1, !0);
      (l = yr(l, e, !0)), (e.x = parseFloat(l.x)), (e.y = parseFloat(l.y));
    }
    return i;
  },
  rg = function (e, t) {
    return (t && e.idLookup[Wa(t).id]) || e.elementStates[0];
  },
  Wa = function (e, t, i, r) {
    return e instanceof Ai
      ? e
      : e instanceof Nt
      ? rg(e, r)
      : new Ai(
          typeof e == "string" ? en(e) || console.warn(e + " not found") : e,
          t,
          i
        );
  },
  ng = function (e, t) {
    for (
      var i = et.getProperty(e.element, null, "native"),
        r = (e.props = {}),
        n = t.length;
      n--;

    )
      r[t[n]] = (i(t[n]) + "").trim();
    return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
  },
  yh = function (e, t) {
    var i = e.style || e,
      r;
    for (r in t) i[r] = t[r];
  },
  sg = function (e) {
    var t = e.getAttribute("data-flip-id");
    return t || e.setAttribute("data-flip-id", (t = "auto-" + $d++)), t;
  },
  og = function (e) {
    return e.getCTM && e.nodeName.toLowerCase() === "svg" && hh(e).inverse();
  },
  xh = function (e) {
    return e.map(function (t) {
      return t.element;
    });
  },
  wh = function (e, t, i) {
    return e && t.length && i.add(e(xh(t), i, new Nt(t, 0, !0)), 0);
  },
  yr = function (e, t, i, r, n, o) {
    var a = e.element,
      u = e.cache,
      l = e.parent,
      c = e.x,
      p = e.y,
      f = t.width,
      h = t.height,
      g = t.scaleX,
      d = t.scaleY,
      _ = t.rotation,
      m = o && a.style.cssText,
      b = o && a.getBBox && a.getAttribute("transform"),
      w = e,
      C = t.matrix,
      x = C.e,
      v = C.f,
      E =
        e.width !== f ||
        e.height !== h ||
        e.scaleX !== g ||
        e.scaleY !== d ||
        e.rotation !== _,
      T = !E && e.simple && t.simple && !n,
      P,
      k,
      R,
      A,
      j,
      z,
      H;
    return (
      T
        ? ((g = d = 1), (_ = P = 0))
        : ((j = eg(l)),
          (z = j
            .clone()
            .multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix)),
          (_ = Et(Math.atan2(z.b, z.a) * fh)),
          (P = Et(Math.atan2(z.c, z.d) * fh + _) % 360),
          (g = Math.sqrt(Math.pow(z.a, 2) + Math.pow(z.b, 2))),
          (d =
            Math.sqrt(Math.pow(z.c, 2) + Math.pow(z.d, 2)) * Math.cos(P * Qd)),
          n &&
            ((n = xs(n)[0]),
            (A = et.getProperty(n)),
            (H = n.getBBox && typeof n.getBBox == "function" && n.getBBox()),
            (w = {
              scaleX: A("scaleX"),
              scaleY: A("scaleY"),
              width: H ? H.width : Math.ceil(parseFloat(A("width", "px"))),
              height: H ? H.height : parseFloat(A("height", "px")),
            })),
          (u.rotation = _ + "deg"),
          (u.skewX = P + "deg")),
      i
        ? ((g *= f / (w.width || 1e-9)),
          (d *= h / (w.height || 1e-9)),
          (u.scaleX = g),
          (u.scaleY = d))
        : ((f *= g / w.scaleX),
          (h *= d / w.scaleY),
          (a.style.width = f + "px"),
          (a.style.height = h + "px")),
      r && yh(a, t.props),
      T
        ? ((c += x - e.matrix.e), (p += v - e.matrix.f))
        : E || l !== t.parent
        ? (u.renderTransform(1, u),
          (z = Ct(n || a, !1, !1, !0)),
          (k = j.apply({ x: z.e, y: z.f })),
          (R = j.apply({ x, y: v })),
          (c += Et(R.x - k.x)),
          (p += Et(R.y - k.y)))
        : ((j.e = j.f = 0),
          (R = j.apply({ x: x - e.matrix.e, y: v - e.matrix.f })),
          (c += Et(R.x)),
          (p += Et(R.y))),
      o && !(o instanceof Ai)
        ? ((a.style.cssText = m),
          a.getBBox && a.setAttribute("transform", b || ""),
          (u.uncache = 1))
        : ((u.x = c + "px"), (u.y = p + "px"), u.renderTransform(1, u)),
      o &&
        ((o.x = c),
        (o.y = p),
        (o.rotation = _),
        (o.skewX = P),
        i ? ((o.scaleX = g), (o.scaleY = d)) : ((o.width = f), (o.height = h))),
      o || u
    );
  },
  Va = function (e, t) {
    return e instanceof Nt ? e : new Nt(e, t);
  },
  ag = function (e, t, i) {
    var r = e.idLookup[i],
      n = e.alt[i];
    return n.isVisible &&
      (!(t.getElementState(n.element) || n).isVisible || !r.isVisible)
      ? n
      : r;
  },
  Ya = function (e, t, i, r) {
    (e instanceof Nt && t instanceof Nt) ||
      console.warn("Not a valid state object."),
      (i = i || {});
    var n = i,
      o = n.clearProps,
      a = n.onEnter,
      u = n.onLeave,
      l = n.absolute,
      c = n.custom,
      p = n.delay,
      f = n.paused,
      h = n.repeat,
      g = n.repeatDelay,
      d = n.yoyo,
      _ = n.toggleClass,
      m = n.nested,
      b = n.zIndex,
      w = n.scale,
      C = n.fade,
      x = n.stagger,
      v = n.spin,
      E = ("props" in i ? i : e).props,
      T = Dr(i, dh),
      P = et.timeline({
        delay: p,
        paused: f,
        repeat: h,
        repeatDelay: g,
        yoyo: d,
      }),
      k = T,
      R = [],
      A = [],
      j = [],
      z = [],
      H = v === !0 ? 1 : v || 0,
      O =
        typeof v == "function"
          ? v
          : function () {
              return H;
            },
      N = e.interrupted || t.interrupted,
      G = P[r !== 1 ? "to" : "from"],
      F,
      S,
      X,
      se,
      V,
      M,
      q,
      Z,
      K,
      Be,
      ve;
    r || (t = new Nt(t.targets, E).fit(t, w));
    for (S in t.idLookup)
      (ve = t.alt[S] ? ag(t, e, S) : t.idLookup[S]),
        (V = ve.element),
        (Be = e.idLookup[S]),
        e.alt[S] && V === Be.element && (Be = e.alt[S]),
        Be
          ? ((M = {
              t: V,
              b: Be,
              a: ve,
              sd: Be.element === V ? 0 : ve.isVisible ? 1 : -1,
            }),
            j.push(M),
            M.sd &&
              (M.sd < 0 && ((M.b = ve), (M.a = Be)),
              C &&
                j.push(
                  (M.swap = {
                    t: Be.element,
                    b: M.b,
                    a: M.a,
                    sd: M.sd * -1,
                    swap: M,
                  })
                )),
            (V._flip = Be.element._flip = P))
          : ve.isVisible &&
            (j.push({ t: V, b: Dr(ve, { isVisible: 1 }), a: ve, sd: 0 }),
            (V._flip = P));
    for (
      E &&
        (Ha[E] || _h(E)).forEach(function (L) {
          return (T[L] = function (Fe) {
            return j[Fe].a.props[L];
          });
        }),
        j.finalStates = K = [],
        l &&
          vs(j, !0).forEach(function (L) {
            return (
              (L.a.isVisible || L.b.isVisible) && Ua(L.sd < 0 ? L.b : L.a, L.b)
            );
          }),
        vs(j),
        se = 0;
      se < j.length;
      se++
    )
      (M = j[se]),
        (V = M.t),
        m && !(M.sd < 0) && (M.a.matrix = Ct(V, !1, !1, !0)),
        M.sd || (M.b.isVisible && M.a.isVisible)
          ? (M.sd < 0
              ? ((q = new Ai(V, E, e.simple)),
                yr(q, M.a, w, 0, 0, q),
                (q.matrix = Ct(V, !1, !1, !0)),
                (q.css = M.b.css),
                (M.a = q),
                C && (V.style.opacity = N ? M.b.opacity : M.a.opacity),
                x && z.push(V))
              : M.sd > 0 &&
                C &&
                (V.style.opacity = N ? M.a.opacity - M.b.opacity : "0"),
            yr(M.a, M.b, w, E))
          : M.b.isVisible
          ? M.a.isVisible ||
            ((M.b.css = M.a.css),
            A.push(M.b),
            j.splice(se--, 1),
            l && m && yr(M.a, M.b, w, E))
          : (M.a.isVisible && R.push(M.a), j.splice(se--, 1)),
        K.push(M.a);
    if (
      (w
        ? ((T.scaleX = function (L) {
            return j[L].a.scaleX;
          }),
          (T.scaleY = function (L) {
            return j[L].a.scaleY;
          }))
        : ((T.width = function (L) {
            return j[L].a.width + "px";
          }),
          (T.height = function (L) {
            return j[L].a.height + "px";
          }),
          (T.autoRound = i.autoRound || !1)),
      (T.x = function (L) {
        return j[L].a.x + "px";
      }),
      (T.y = function (L) {
        return j[L].a.y + "px";
      }),
      (T.rotation = function (L) {
        return j[L].a.rotation + (v ? O(L, Z[L], Z) * 360 : 0);
      }),
      (T.skewX = function (L) {
        return j[L].a.skewX;
      }),
      (Z = j.map(function (L) {
        return L.t;
      })),
      (b || b === 0) &&
        ((T.modifiers = {
          zIndex: function () {
            return b;
          },
        }),
        (T.zIndex = b),
        (T.immediateRender = i.immediateRender !== !1)),
      C &&
        (T.opacity = function (L) {
          return j[L].sd < 0 ? 0 : j[L].sd > 0 ? j[L].a.opacity : "+=0";
        }),
      z.length)
    ) {
      x = et.utils.distribute(x);
      var he = Z.slice(z.length);
      T.stagger = function (L, Fe) {
        return x(~z.indexOf(Fe) ? Z.indexOf(j[L].swap.t) : L, Fe, he);
      };
    }
    if (
      (Zd.forEach(function (L) {
        return i[L] && P.eventCallback(L, i[L], i[L + "Params"]);
      }),
      c && Z.length)
    ) {
      (k = Dr(T, dh)),
        "scale" in c && ((c.scaleX = c.scaleY = c.scale), delete c.scale);
      for (S in c)
        (F = Dr(c[S], gh)),
          (F[S] = T[S]),
          !("duration" in F) && "duration" in T && (F.duration = T.duration),
          (F.stagger = T.stagger),
          G.call(P, Z, F, 0),
          delete k[S];
    }
    return (
      (Z.length || A.length || R.length) &&
        (_ &&
          P.add(function () {
            return qa(Z, _, P._zTime < 0 ? "remove" : "add");
          }, 0) &&
          !f &&
          qa(Z, _, "add"),
        Z.length && G.call(P, Z, k, 0)),
      wh(a, R, P),
      wh(u, A, P),
      (X = P.duration()),
      P.call(function () {
        var L = P.time() >= X;
        L && ig(j, !o), _ && qa(Z, _, L ? "remove" : "add");
      }),
      P
    );
  },
  vh = function (e) {
    for (
      var t = (e.idLookup = {}),
        i = (e.alt = {}),
        r = e.elementStates,
        n = r.length,
        o;
      n--;

    )
      (o = r[n]), t[o.id] ? (i[o.id] = o) : (t[o.id] = o);
  },
  Nt = (function () {
    function s(t, i, r) {
      (this.props = i && i.props),
        (this.simple = !!(i && i.simple)),
        r
          ? ((this.targets = xh(t)), (this.elementStates = t), vh(this))
          : ((this.targets = xs(t)), this.update(!i || i.clear !== !1));
    }
    var e = s.prototype;
    return (
      (e.update = function (i) {
        var r = this;
        return (
          (this.elementStates = this.targets.map(function (n) {
            return new Ai(n, r.props, r.simple);
          })),
          vh(this),
          this.killFlips(i),
          this.recordInlineStyles(),
          this
        );
      }),
      (e.fit = function (i, r, n) {
        for (
          var o = vs(this.elementStates.slice(0), !1, !0),
            a = (i || this).idLookup,
            u = 0,
            l,
            c;
          u < o.length;
          u++
        )
          (l = o[u]),
            n && (l.matrix = Ct(l.element, !1, !1, !0)),
            (c = a[l.id]),
            c && yr(l, c, r, !0, 0, l),
            (l.matrix = Ct(l.element, !1, !1, !0));
        return this;
      }),
      (e.getProperty = function (i, r) {
        var n = this.getElementState(i) || ws;
        return r in n ? n[r] : (n.props || ws)[r];
      }),
      (e.recordInlineStyles = function () {
        for (var i = za[this.props] || Na, r = this.elementStates.length; r--; )
          Xa(this.elementStates[r], i);
      }),
      (e.killFlips = function (i) {
        var r;
        this.targets.forEach(function (n) {
          (n = n._flip),
            n &&
              n.progress() < 1 &&
              !n.paused() &&
              ((r = 1),
              n.vars.onInterrupt &&
                n.vars.onInterrupt.apply(n, n.vars.onInterruptParams || []),
              i && n.progress(1),
              n.kill());
        }),
          r &&
            i &&
            this.elementStates.forEach(function (n) {
              var o = n.element.getBoundingClientRect();
              (n.isVisible = o.width || o.height || o.top || o.left),
                (n.uncache = 1);
            }),
          (this.interrupted = !!r);
      }),
      (e.getElementState = function (i) {
        return this.elementStates[this.targets.indexOf(en(i))];
      }),
      (e.makeAbsolute = function () {
        return vs(this.elementStates.slice(0), !0, !0).map(Ua);
      }),
      s
    );
  })(),
  Ai = (function () {
    function s(t, i, r) {
      (this.element = t), this.update(i, r);
    }
    var e = s.prototype;
    return (
      (e.update = function (i, r) {
        var n = this.element,
          o = et.getProperty(n),
          a = et.core.getCache(n),
          u = n.getBoundingClientRect(),
          l =
            n.getBBox &&
            typeof n.getBBox == "function" &&
            n.nodeName.toLowerCase() !== "svg" &&
            n.getBBox(),
          c = r
            ? new _r(1, 0, 0, 1, u.left + Oa(), u.top + Ma())
            : Ct(n, !1, !1, !0);
        (this.getProp = o),
          (this.element = n),
          (this.id = sg(n)),
          (this.matrix = c),
          (this.cache = a),
          (this.bounds = u),
          (this.isVisible = !!(u.width || u.height || u.left || u.top)),
          (this.display = o("display")),
          (this.position = o("position")),
          (this.isFixed = ch(n)),
          (this.parent = n.parentNode),
          (this.x = o("x")),
          (this.y = o("y")),
          (this.scaleX = a.scaleX),
          (this.scaleY = a.scaleY),
          (this.rotation = o("rotation")),
          (this.skewX = o("skewX")),
          (this.opacity = o("opacity")),
          (this.width = l ? l.width : mh(parseFloat(o("width", "px")) + 0.04)),
          (this.height = l ? l.height : parseFloat(o("height", "px"))),
          i && ng(this, Ha[i] || _h(i)),
          (this.ctm = og(n)),
          (this.simple =
            r || (Et(c.a) === 1 && !Et(c.b) && !Et(c.c) && Et(c.d) === 1)),
          (this.uncache = 0);
      }),
      s
    );
  })(),
  ye = (function () {
    function s() {}
    return (
      (s.getState = function (t, i) {
        return Va(t, typeof i == "string" ? { props: i } : i);
      }),
      (s.from = function (t, i) {
        return (
          (i = i || {}),
          "clearProps" in i || (i.clearProps = !0),
          Ya(
            t,
            Va(i.targets || t.targets, {
              props: i.props || t.props,
              simple: i.simple,
              clear: !!i.clear,
            }),
            i,
            -1
          )
        );
      }),
      (s.to = function (t, i) {
        return Ya(
          t,
          Va(i.targets || t.targets, {
            props: i.props || t.props,
            simple: i.simple,
            clear: !!i.clear,
          }),
          i,
          1
        );
      }),
      (s.fromTo = function (t, i, r) {
        return Ya(t, i, r);
      }),
      (s.fit = function (t, i, r) {
        var n = r ? Dr(r, gh) : {},
          o = r || n,
          a = o.absolute,
          u = o.scale,
          l = o.getVars,
          c = o.props,
          p = o.runBackwards,
          f = o.onComplete,
          h = o.simple,
          g = r && r.fitChild && en(r.fitChild),
          d = Wa(i, c, h, t),
          _ = Wa(t, 0, h, d),
          m = c ? za[c] : Na;
        return (
          c && yh(n, d.props),
          p &&
            (Xa(_, m),
            "immediateRender" in n || (n.immediateRender = !0),
            (n.onComplete = function () {
              Dh(_), f && f.apply(this, arguments);
            })),
          a && Ua(_, d),
          (n = yr(_, d, u || g, c, g, n.duration || l ? n : 0)),
          l ? n : n.duration ? et.to(_.element, n) : null
        );
      }),
      (s.makeAbsolute = function (t, i) {
        return (t instanceof Nt ? t : new Nt(t, i)).makeAbsolute();
      }),
      (s.isFlipping = function (t) {
        var i = s.getByTarget(t);
        return !!i && i.isActive();
      }),
      (s.getByTarget = function (t) {
        return (en(t) || ws)._flip;
      }),
      (s.getElementState = function (t, i) {
        return new Ai(en(t), i);
      }),
      (s.convertCoordinates = function (t, i, r) {
        var n = Ct(i, !0, !0).multiply(Ct(t));
        return r ? n.apply(r) : n;
      }),
      (s.register = function (t) {
        (et = t),
          Ra(document.body || document.documentElement),
          (xs = et.utils.toArray),
          (mh = et.utils.snap(0.1));
      }),
      s
    );
  })();
ye.version = "3.8.0";
typeof window != "undefined" && window.gsap && window.gsap.registerPlugin(ye);
var Ga = 1 / 15;
function ug() {}
async function oi(s = Ga) {
  return D.delayedCall(s, ug);
}
async function ji(s) {
  let e = D.timeline({ paused: !0 });
  return (
    e.from(
      s.querySelector(".project-hero-info .topic"),
      { opacity: 0, duration: 0.333, ease: "projectToProjectAlpha" },
      0
    ),
    e.from(
      s.querySelector(".project-hero-info .crew"),
      { opacity: 0, duration: 0.333, ease: "projectToProjectAlpha" },
      0.073
    ),
    e.from(
      s.querySelector(".project-hero-info .date"),
      { opacity: 0, duration: 0.333, ease: "projectToProjectAlpha" },
      0.166
    ),
    e.from(
      s.querySelector(".project-hero .image"),
      {
        y: Je(y.mobile ? 43 : 100, y.mobile ? 375 : 1440),
        opacity: 0,
        rotation: 0,
        duration: 1.333,
        ease: B.create("custom", "0.75, 0, 0, 1"),
      },
      0.073
    ),
    e.from(
      s.querySelectorAll(".project-hero .number p"),
      {
        duration: 1.42,
        yPercent: 100,
        ease: B.create("custom", "0.75, 0, 0, 1"),
      },
      0.073
    ),
    e.add(() => {
      var t;
      (t = y.heroSlash) == null || t.show();
    }, "<"),
    e.set(s.querySelector(".project-hero canvas"), { opacity: 1 }, "<=0.333"),
    e.from(
      s.querySelectorAll(".project-hero .title-container h2"),
      {
        duration: 1,
        yPercent: y.titleYPercent,
        ease: B.create("custom", "0.75, 0, 0, 1"),
        stagger: 0.1,
      },
      0.073
    ),
    e.from(
      [s.querySelectorAll(".project-hero .project-text-block"), "[data-show]"],
      {
        opacity: 0,
        stagger: 0.083,
        duration: 0.333,
        ease: "projectToProjectAlpha",
      },
      0.666
    ),
    e.play()
  );
}
D.registerPlugin(ye);
var Ri;
B.create("nextProjectsOut", "0.94, 0, 0.73, 1");
var lg = {
    from: { namespace: ["home"] },
    to: { namespace: ["project"] },
    async leave(s) {
      var n, o, a, u;
      let e = y.selectedProjectIndex,
        t = (y.currentProjectIndex % y.numOfProjects) + 1,
        i = e < y.numOfProjects ? e + 1 : 1,
        r = e > 1 ? e - 1 : y.numOfProjects;
      if (y.isMobile) {
        (a = y.homeController) == null || a.transitionOut(),
          (u = y.homeController) == null || u.stopScroll();
        let l = D.timeline({
          paused: !0,
          delay: 0.1,
          onComplete: () => {
            var c;
            (c = y.homeController) == null || c.stop();
          },
        });
        l.to(
          `[data-image-index="${i}"]`,
          { y: "+=400", duration: 0.32, ease: "nextProjectsOut" },
          0
        ),
          l.to(
            `[data-image-index="${r}"]`,
            { y: "-=400", duration: 0.32, ease: "nextProjectsOut" },
            0
          ),
          l.to(
            `[data-image-index="${e}"]`,
            { opacity: 0, duration: 0.32, ease: "nextProjectsOut" },
            0
          ),
          l.to(
            [".infos-container"],
            { opacity: 0, duration: 0.32, ease: "nextProjectsOut" },
            "<-0.1"
          ),
          await l.play();
      } else {
        (n = y.homeController) == null || n.transitionOut(),
          (o = y.homeController) == null || o.stopScroll(),
          (Ri = document.body.querySelector(`[data-image-index="${e}"]`));
        let l = Ri.querySelector("img"),
          c = Ri.querySelector(".home-image"),
          p = ye.getState([Ri, l, c]);
        ye.fit(Ri, "#fake-img"),
          D.to(`[data-image-index="${i}"]`, {
            y: "+=400",
            duration: 0.32,
            ease: "nextProjectsOut",
            delay: 0.3,
          }),
          D.to(`[data-image-index="${r}"]`, {
            y: "-=400",
            duration: 0.32,
            ease: "nextProjectsOut",
            delay: 0.3,
          }),
          D.set(Ri, { transformOrigin: "center center" }),
          D.set(l, { rotation: 0 }),
          D.set(c, { x: 0 }),
          await ye.from(p, {
            duration: 1.2,
            ease: B.create("custom", "0.54, 0, 0, 1"),
            delay: 0.3,
            onComplete: () => {
              var f;
              (f = y.homeController) == null || f.stop(),
                D.set(s.current.container.querySelector(".infos-container"), {
                  opacity: 0,
                });
            },
          });
      }
    },
    async enter(s) {
      if (y.isMobile) await ji(s.next.container);
      else {
        let t =
          s.next.container.querySelector("[data-two-lines]").dataset.twoLines
            .length > 0
            ? 0.175
            : 0.275;
        D.set(s.next.container, { autoAlpha: 0 });
        let i = s.next.container.querySelector(".project-hero .image .inner"),
          r = ye.getState(i);
        ye.fit(i, "#fake-img"),
          await oi(),
          D.set(s.next.container.querySelector(".project-hero canvas"), {
            opacity: 1,
          }),
          D.from(s.next.container.querySelectorAll(".project-hero .number p"), {
            duration: 1.42,
            yPercent: 100,
            ease: B.create("custom", "0.75, 0, 0, 1"),
            delay: t,
          }),
          D.from(
            s.next.container.querySelectorAll(
              ".project-hero .title-container h2"
            ),
            {
              duration: 1,
              yPercent: y.titleYPercent,
              ease: B.create("custom", "0.75, 0, 0, 1"),
              stagger: 0.1,
              delay: t,
            }
          ),
          D.delayedCall(t, () => {
            var n;
            (n = y.heroSlash) == null || n.show();
          }),
          await ye.to(r, {
            duration: 1.2,
            ease: B.create("custom", "0.54, 0, 0, 1"),
            onStart() {
              D.set(Ri, { autoAlpha: 0 }),
                D.set(s.next.container, { autoAlpha: 1 });
            },
            onComplete() {
              D.set(i, { clearProps: "all" });
            },
          });
      }
    },
  },
  $a = lg;
var cg = {
    to: { namespace: "project" },
    async once(s) {
      D.set(s.next.container, { opacity: 0 }),
        await dr(),
        D.set(s.next.container, { opacity: 1 }),
        _s(),
        await ji(s.next.container);
    },
  },
  Qa = cg;
async function tn(s) {
  await D.to(s, {
    opacity: 0,
    duration: 0.317,
    ease: B.create("custom", "0.33, 0, 0.67, 1"),
  });
}
D.registerPlugin(ye, B);
var Ve;
B.create("projectToProjectAlpha", "0.33, 0, 0.67, 1");
var hg = {
    from: { namespace: ["project"] },
    to: { namespace: ["project"] },
    async leave(s) {
      var e;
      if (y.nextProjectTransition && !y.isMobile) {
        D.set(s.current.container, { position: "fixed" });
        let t = s.current.container.querySelector(".project-next"),
          i = s.current.container.querySelector(".project-next .image");
        D.to(t.querySelectorAll("h2"), {
          yPercent: -y.titleYPercent,
          ease: B.create("custom", "0.75, 0, 0, 1"),
          duration: 1,
          stagger: -0.1,
        }),
          await oi(0.15),
          (e = y.footerSlash) == null || e.hide(!0),
          await oi(0.1),
          (Ve = document.createElement("div")),
          (Ve.id = "faker-image");
        let r = document.createElement("img");
        (r.src = i.querySelector("img").src),
          Ve.appendChild(r),
          document.body.appendChild(Ve),
          ye.fit(Ve, "#fake-img");
        let n = ye.getState([Ve, r]);
        D.set(Ve, { autoAlpha: 0 }),
          await oi(),
          D.set(Ve, { autoAlpha: 1 }),
          ye.fit(Ve, i);
        let o = D.getProperty(i.querySelector("img"), "rotation");
        D.set(r, { rotation: o }),
          ye.to(n, {
            duration: 1,
            force3D: !0,
            ease: B.create("custom", "0.54, 0.01, 0, 1"),
          }),
          D.set(i, { autoAlpha: 0 }),
          await D.to(s.current.container, {
            opacity: 0,
            duration: 0.167,
            ease: "linear",
            delay: 0.35,
          }),
          await oi(0.35);
      } else await tn(s.current.container), await oi(0.25);
    },
    afterLeave(s) {
      y.isPhone
        ? s.current.container.remove()
        : D.set(s.current.container, { position: "absolute" });
    },
    async enter(s) {
      if (y.nextProjectTransition && !y.isMobile) {
        let e = s.next.container.querySelector(".project-hero .image .inner"),
          t = ye.getState(e);
        ye.fit(e, Ve);
        let i = D.timeline({ paused: !0 });
        i.set(
          s.next.container.querySelectorAll(".project-hero canvas"),
          { opacity: 1 },
          0.4
        ),
          i.from(
            s.next.container.querySelectorAll(".project-hero .number p"),
            {
              duration: 1.42,
              yPercent: 100,
              ease: B.create("custom", "0.75, 0, 0, 1"),
            },
            0.2
          ),
          i.from(
            s.next.container.querySelectorAll(
              ".project-hero .title-container h2"
            ),
            {
              duration: 1,
              yPercent: y.titleYPercent,
              ease: B.create("custom", "0.75, 0, 0, 1"),
              stagger: 0.1,
            },
            0.4
          ),
          i.add(() => {
            var r;
            (r = y.heroSlash) == null || r.show();
          }, "<"),
          i.add(
            ye.to(t, {
              duration: 1.2,
              force3D: !0,
              ease: B.create("custom", "0.54, 0.01, 0, 1"),
              onStart() {
                D.set(Ve, { autoAlpha: 0, delay: Ga });
              },
              onComplete() {
                D.set(e, { clearProps: "all" });
              },
            }),
            0
          ),
          await i.play();
      } else await ji(s.next.container);
    },
    afterEnter() {
      var s;
      Ve && ((s = Ve.parentElement) == null || s.removeChild(Ve)),
        (y.nextProjectTransition = !1);
    },
  },
  Za = hg;
D.registerPlugin(B);
var fg = {
    from: { namespace: ["project"] },
    to: { namespace: ["home"] },
    async leave(s) {
      (document.body.style.overflowY = "hidden"), await tn(s.current.container);
    },
    async enter(s) {
      var e;
      await ((e = y.homeController) == null ? void 0 : e.transitionIn()),
        (document.body.style.overflowY = "auto");
    },
  },
  Ka = fg;
D.registerPlugin(I);
function Ja(s, e, t = 1) {
  let i = D.utils.toArray(s)[0];
  D.set(e || i.parentNode, {
    overflow: "hidden",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
    D.set(i, { overflow: "visible", width: "100%" });
  let r = D.getProperty(i),
    n = D.quickSetter(i, "y", "px"),
    o = I.getScrollFunc(window),
    a = () => (i.style.overflow = "visible"),
    u = (g) => {
      let d = g.getTween ? g.getTween() : D.getTweensOf(g.animation)[0];
      d && d.kill(), g.animation.progress(g.progress);
    },
    l = 0,
    c = !1;
  function p() {
    (l = i.clientHeight),
      (i.style.overflow = "visible"),
      (document.body.style.height = l + "px");
  }
  p(),
    I.addEventListener("refreshInit", p),
    I.addEventListener("refresh", () => {
      a(), requestAnimationFrame(a);
    }),
    I.defaults({ scroller: i }),
    I.scrollerProxy(i, {
      scrollTop(g) {
        if (arguments.length) {
          (c = !0), g && (n(-g), o(g));
          return;
        }
        return -r("y");
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: y.wWidth, height: y.wHeight };
      },
    });
  let f = I.create({
    animation: D.fromTo(
      i,
      { y: 0 },
      {
        y: () => document.documentElement.clientHeight - l,
        ease: "none",
        onUpdate: I.update,
      }
    ),
    scroller: window,
    invalidateOnRefresh: !0,
    start: 0,
    end: () => l - document.documentElement.clientHeight,
    scrub: t,
    onUpdate: (g) => {
      c && (u(g), (c = !1));
    },
    onRefresh: u,
  });
  function h() {
    o(0), I.refresh();
  }
  return {
    resize: p,
    resetPosition: h,
    scrollTrigger: f,
    getProgress: () => {
      var g, d;
      return (d = (g = f.animation) == null ? void 0 : g.progress()) != null
        ? d
        : 0;
    },
  };
}
function bh(s) {
  y.mobile = !s.matches;
}
function Ch(s) {
  y.orientation = s.matches ? "portrait" : "landscape";
}
function pg() {
  let s = window.innerWidth,
    e = window.innerHeight;
  (s !== y.wWidth || e !== y.wHeight) && ((y.wWidth = s), (y.wHeight = e));
}
D.ticker.add(pg);
function Eh() {
  y.isMobile || (y.scroll = Ja(".scroll-wrapper", "main", 1));
  let s = matchMedia("(min-width: 768px)"),
    e = matchMedia("(orientation: portrait)");
  s.addEventListener("change", bh),
    e.addEventListener("change", Ch),
    bh(s),
    Ch(e),
    // ms(),
    ns(),
    ts(),
    ds(() => {
      (document.body.style.overflowY = "auto"),
        pt.use(Du),
        pt.hooks.beforeLeave(() => {
          D.set("#preloader-display", { display: "block" });
        }),
        pt.hooks.afterLeave(() => {
          y.scroll || window.scrollTo(0, 0);
        }),
        pt.hooks.beforeEnter(() => {
          y.scroll && y.scroll.resetPosition();
        }),
        pt.hooks.afterEnter(() => {
          var t;
          (t = y.scroll) == null || t.resize(),
            D.set("#preloader-display", { display: "none" });
        }),
        pt.init({
          preventRunning: !0,
          debug: !1,
          transitions: [Fa, $a, Qa, Za, Ka],
          views: [Vo, ka],
        });
    });
}
export { Eh as default };
/*!
 * CSSPlugin 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * CustomEase 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * Flip 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * GSAP 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * ScrollTrigger 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * SplitText: 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * matrix 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * paths 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * strings: 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
//# sourceMappingURL=index.js.map
