function t(t2, n2) {
  for (var r2 = 0; r2 < n2.length; r2++) {
    var i2 = n2[r2];
    (i2.enumerable = i2.enumerable || false),
      (i2.configurable = true),
      "value" in i2 && (i2.writable = true),
      Object.defineProperty(t2, i2.key, i2);
  }
}
function n(n2, r2, i2) {
  return r2 && t(n2.prototype, r2), i2 && t(n2, i2), n2;
}
function r() {
  return (r =
    Object.assign ||
    function (t2) {
      for (var n2 = 1; n2 < arguments.length; n2++) {
        var r2 = arguments[n2];
        for (var i2 in r2)
          Object.prototype.hasOwnProperty.call(r2, i2) && (t2[i2] = r2[i2]);
      }
      return t2;
    }).apply(this, arguments);
}
function i(t2, n2) {
  (t2.prototype = Object.create(n2.prototype)),
    (t2.prototype.constructor = t2),
    (t2.__proto__ = n2);
}
function e(t2) {
  return (e = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (t3) {
        return t3.__proto__ || Object.getPrototypeOf(t3);
      })(t2);
}
function o(t2, n2) {
  return (o =
    Object.setPrototypeOf ||
    function (t3, n3) {
      return (t3.__proto__ = n3), t3;
    })(t2, n2);
}
function u(t2, n2, r2) {
  return (u = (function () {
    if (typeof Reflect == "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        true
      );
    } catch (t3) {
      return false;
    }
  })()
    ? Reflect.construct
    : function (t3, n3, r3) {
        var i2 = [null];
        i2.push.apply(i2, n3);
        var e2 = new (Function.bind.apply(t3, i2))();
        return r3 && o(e2, r3.prototype), e2;
      }).apply(null, arguments);
}
function s(t2) {
  var n2 = typeof Map == "function" ? new Map() : void 0;
  return (s = function (t3) {
    if (
      t3 === null ||
      Function.toString.call(t3).indexOf("[native code]") === -1
    )
      return t3;
    if (typeof t3 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (n2 !== void 0) {
      if (n2.has(t3)) return n2.get(t3);
      n2.set(t3, r2);
    }
    function r2() {
      return u(t3, arguments, e(this).constructor);
    }
    return (
      (r2.prototype = Object.create(t3.prototype, {
        constructor: {
          value: r2,
          enumerable: false,
          writable: true,
          configurable: true,
        },
      })),
      o(r2, t3)
    );
  })(t2);
}
function f(t2, n2) {
  try {
    var r2 = t2();
  } catch (t3) {
    return n2(t3);
  }
  return r2 && r2.then ? r2.then(void 0, n2) : r2;
}
typeof Symbol != "undefined" &&
  (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
  typeof Symbol != "undefined" &&
    (Symbol.asyncIterator ||
      (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var c,
  a = "2.9.7",
  h = function () {};
!(function (t2) {
  (t2[(t2.off = 0)] = "off"),
    (t2[(t2.error = 1)] = "error"),
    (t2[(t2.warning = 2)] = "warning"),
    (t2[(t2.info = 3)] = "info"),
    (t2[(t2.debug = 4)] = "debug");
})(c || (c = {}));
var v = c.off,
  l = (function () {
    function t2(t3) {
      this.t = t3;
    }
    (t2.getLevel = function () {
      return v;
    }),
      (t2.setLevel = function (t3) {
        return (v = c[t3]);
      });
    var n2 = t2.prototype;
    return (
      (n2.error = function () {
        for (
          var t3 = arguments.length, n3 = new Array(t3), r2 = 0;
          r2 < t3;
          r2++
        )
          n3[r2] = arguments[r2];
        this.i(console.error, c.error, n3);
      }),
      (n2.warn = function () {
        for (
          var t3 = arguments.length, n3 = new Array(t3), r2 = 0;
          r2 < t3;
          r2++
        )
          n3[r2] = arguments[r2];
        this.i(console.warn, c.warning, n3);
      }),
      (n2.info = function () {
        for (
          var t3 = arguments.length, n3 = new Array(t3), r2 = 0;
          r2 < t3;
          r2++
        )
          n3[r2] = arguments[r2];
        this.i(console.info, c.info, n3);
      }),
      (n2.debug = function () {
        for (
          var t3 = arguments.length, n3 = new Array(t3), r2 = 0;
          r2 < t3;
          r2++
        )
          n3[r2] = arguments[r2];
        this.i(console.log, c.debug, n3);
      }),
      (n2.i = function (n3, r2, i2) {
        r2 <= t2.getLevel() &&
          n3.apply(console, ["[" + this.t + "] "].concat(i2));
      }),
      t2
    );
  })(),
  d = O,
  m = E,
  w = g,
  p = x,
  b = T,
  y = "/",
  P = new RegExp(
    [
      "(\\\\.)",
      "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
    ].join("|"),
    "g"
  );
function g(t2, n2) {
  for (
    var r2,
      i2 = [],
      e2 = 0,
      o2 = 0,
      u2 = "",
      s2 = (n2 && n2.delimiter) || y,
      f2 = (n2 && n2.whitelist) || void 0,
      c2 = false;
    (r2 = P.exec(t2)) !== null;

  ) {
    var a2 = r2[0],
      h2 = r2[1],
      v2 = r2.index;
    if (((u2 += t2.slice(o2, v2)), (o2 = v2 + a2.length), h2))
      (u2 += h2[1]), (c2 = true);
    else {
      var l2 = "",
        d2 = r2[2],
        m2 = r2[3],
        w2 = r2[4],
        p2 = r2[5];
      if (!c2 && u2.length) {
        var b2 = u2.length - 1,
          g2 = u2[b2];
        (!f2 || f2.indexOf(g2) > -1) && ((l2 = g2), (u2 = u2.slice(0, b2)));
      }
      u2 && (i2.push(u2), (u2 = ""), (c2 = false));
      var E2 = m2 || w2,
        x2 = l2 || s2;
      i2.push({
        name: d2 || e2++,
        prefix: l2,
        delimiter: x2,
        optional: p2 === "?" || p2 === "*",
        repeat: p2 === "+" || p2 === "*",
        pattern: E2 ? A(E2) : "[^" + k(x2 === s2 ? x2 : x2 + s2) + "]+?",
      });
    }
  }
  return (u2 || o2 < t2.length) && i2.push(u2 + t2.substr(o2)), i2;
}
function E(t2, n2) {
  return function (r2, i2) {
    var e2 = t2.exec(r2);
    if (!e2) return false;
    for (
      var o2 = e2[0],
        u2 = e2.index,
        s2 = {},
        f2 = (i2 && i2.decode) || decodeURIComponent,
        c2 = 1;
      c2 < e2.length;
      c2++
    )
      if (e2[c2] !== void 0) {
        var a2 = n2[c2 - 1];
        s2[a2.name] = a2.repeat
          ? e2[c2].split(a2.delimiter).map(function (t3) {
              return f2(t3, a2);
            })
          : f2(e2[c2], a2);
      }
    return { path: o2, index: u2, params: s2 };
  };
}
function x(t2, n2) {
  for (var r2 = new Array(t2.length), i2 = 0; i2 < t2.length; i2++)
    typeof t2[i2] == "object" &&
      (r2[i2] = new RegExp("^(?:" + t2[i2].pattern + ")$", R(n2)));
  return function (n3, i3) {
    for (
      var e2 = "",
        o2 = (i3 && i3.encode) || encodeURIComponent,
        u2 = !i3 || i3.validate !== false,
        s2 = 0;
      s2 < t2.length;
      s2++
    ) {
      var f2 = t2[s2];
      if (typeof f2 != "string") {
        var c2,
          a2 = n3 ? n3[f2.name] : void 0;
        if (Array.isArray(a2)) {
          if (!f2.repeat)
            throw new TypeError(
              'Expected "' + f2.name + '" to not repeat, but got array'
            );
          if (a2.length === 0) {
            if (f2.optional) continue;
            throw new TypeError('Expected "' + f2.name + '" to not be empty');
          }
          for (var h2 = 0; h2 < a2.length; h2++) {
            if (((c2 = o2(a2[h2], f2)), u2 && !r2[s2].test(c2)))
              throw new TypeError(
                'Expected all "' + f2.name + '" to match "' + f2.pattern + '"'
              );
            e2 += (h2 === 0 ? f2.prefix : f2.delimiter) + c2;
          }
        } else if (
          typeof a2 != "string" &&
          typeof a2 != "number" &&
          typeof a2 != "boolean"
        ) {
          if (!f2.optional)
            throw new TypeError(
              'Expected "' +
                f2.name +
                '" to be ' +
                (f2.repeat ? "an array" : "a string")
            );
        } else {
          if (((c2 = o2(String(a2), f2)), u2 && !r2[s2].test(c2)))
            throw new TypeError(
              'Expected "' +
                f2.name +
                '" to match "' +
                f2.pattern +
                '", but got "' +
                c2 +
                '"'
            );
          e2 += f2.prefix + c2;
        }
      } else e2 += f2;
    }
    return e2;
  };
}
function k(t2) {
  return t2.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function A(t2) {
  return t2.replace(/([=!:$/()])/g, "\\$1");
}
function R(t2) {
  return t2 && t2.sensitive ? "" : "i";
}
function T(t2, n2, r2) {
  for (
    var i2 = (r2 = r2 || {}).strict,
      e2 = r2.start !== false,
      o2 = r2.end !== false,
      u2 = r2.delimiter || y,
      s2 = []
        .concat(r2.endsWith || [])
        .map(k)
        .concat("$")
        .join("|"),
      f2 = e2 ? "^" : "",
      c2 = 0;
    c2 < t2.length;
    c2++
  ) {
    var a2 = t2[c2];
    if (typeof a2 == "string") f2 += k(a2);
    else {
      var h2 = a2.repeat
        ? "(?:" +
          a2.pattern +
          ")(?:" +
          k(a2.delimiter) +
          "(?:" +
          a2.pattern +
          "))*"
        : a2.pattern;
      n2 && n2.push(a2),
        (f2 += a2.optional
          ? a2.prefix
            ? "(?:" + k(a2.prefix) + "(" + h2 + "))?"
            : "(" + h2 + ")?"
          : k(a2.prefix) + "(" + h2 + ")");
    }
  }
  if (o2)
    i2 || (f2 += "(?:" + k(u2) + ")?"),
      (f2 += s2 === "$" ? "$" : "(?=" + s2 + ")");
  else {
    var v2 = t2[t2.length - 1],
      l2 = typeof v2 == "string" ? v2[v2.length - 1] === u2 : v2 === void 0;
    i2 || (f2 += "(?:" + k(u2) + "(?=" + s2 + "))?"),
      l2 || (f2 += "(?=" + k(u2) + "|" + s2 + ")");
  }
  return new RegExp(f2, R(r2));
}
function O(t2, n2, r2) {
  return t2 instanceof RegExp
    ? (function (t3, n3) {
        if (!n3) return t3;
        var r3 = t3.source.match(/\((?!\?)/g);
        if (r3)
          for (var i2 = 0; i2 < r3.length; i2++)
            n3.push({
              name: i2,
              prefix: null,
              delimiter: null,
              optional: false,
              repeat: false,
              pattern: null,
            });
        return t3;
      })(t2, n2)
    : Array.isArray(t2)
    ? (function (t3, n3, r3) {
        for (var i2 = [], e2 = 0; e2 < t3.length; e2++)
          i2.push(O(t3[e2], n3, r3).source);
        return new RegExp("(?:" + i2.join("|") + ")", R(r3));
      })(t2, n2, r2)
    : (function (t3, n3, r3) {
        return T(g(t3, r3), n3, r3);
      })(t2, n2, r2);
}
(d.match = function (t2, n2) {
  var r2 = [];
  return E(O(t2, r2, n2), r2);
}),
  (d.regexpToFunction = m),
  (d.parse = w),
  (d.compile = function (t2, n2) {
    return x(g(t2, n2), n2);
  }),
  (d.tokensToFunction = p),
  (d.tokensToRegExp = b);
var S = {
    container: "container",
    history: "history",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper",
  },
  j = new ((function () {
    function t2() {
      (this.o = S), (this.u = new DOMParser());
    }
    var n2 = t2.prototype;
    return (
      (n2.toString = function (t3) {
        return t3.outerHTML;
      }),
      (n2.toDocument = function (t3) {
        return this.u.parseFromString(t3, "text/html");
      }),
      (n2.toElement = function (t3) {
        var n3 = document.createElement("div");
        return (n3.innerHTML = t3), n3;
      }),
      (n2.getHtml = function (t3) {
        return (
          t3 === void 0 && (t3 = document), this.toString(t3.documentElement)
        );
      }),
      (n2.getWrapper = function (t3) {
        return (
          t3 === void 0 && (t3 = document),
          t3.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
        );
      }),
      (n2.getContainer = function (t3) {
        return (
          t3 === void 0 && (t3 = document),
          t3.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
        );
      }),
      (n2.removeContainer = function (t3) {
        document.body.contains(t3) && t3.parentNode.removeChild(t3);
      }),
      (n2.addContainer = function (t3, n3) {
        var r2 = this.getContainer();
        r2 ? this.s(t3, r2) : n3.appendChild(t3);
      }),
      (n2.getNamespace = function (t3) {
        t3 === void 0 && (t3 = document);
        var n3 = t3.querySelector(
          "[" + this.o.prefix + "-" + this.o.namespace + "]"
        );
        return n3
          ? n3.getAttribute(this.o.prefix + "-" + this.o.namespace)
          : null;
      }),
      (n2.getHref = function (t3) {
        if (t3.tagName && t3.tagName.toLowerCase() === "a") {
          if (typeof t3.href == "string") return t3.href;
          var n3 = t3.getAttribute("href") || t3.getAttribute("xlink:href");
          if (n3) return this.resolveUrl(n3.baseVal || n3);
        }
        return null;
      }),
      (n2.resolveUrl = function () {
        for (
          var t3 = arguments.length, n3 = new Array(t3), r2 = 0;
          r2 < t3;
          r2++
        )
          n3[r2] = arguments[r2];
        var i2 = n3.length;
        if (i2 === 0)
          throw new Error(
            "resolveUrl requires at least one argument; got none."
          );
        var e2 = document.createElement("base");
        if (((e2.href = arguments[0]), i2 === 1)) return e2.href;
        var o2 = document.getElementsByTagName("head")[0];
        o2.insertBefore(e2, o2.firstChild);
        for (var u2, s2 = document.createElement("a"), f2 = 1; f2 < i2; f2++)
          (s2.href = arguments[f2]), (e2.href = u2 = s2.href);
        return o2.removeChild(e2), u2;
      }),
      (n2.s = function (t3, n3) {
        n3.parentNode.insertBefore(t3, n3.nextSibling);
      }),
      t2
    );
  })())(),
  M = new ((function () {
    function t2() {
      (this.h = []), (this.v = -1);
    }
    var i2 = t2.prototype;
    return (
      (i2.init = function (t3, n2) {
        this.l = "barba";
        var r2 = {
          ns: n2,
          scroll: { x: window.scrollX, y: window.scrollY },
          url: t3,
        };
        this.h.push(r2), (this.v = 0);
        var i3 = { from: this.l, index: 0, states: [].concat(this.h) };
        window.history && window.history.replaceState(i3, "", t3);
      }),
      (i2.change = function (t3, n2, r2) {
        if (r2 && r2.state) {
          var i3 = r2.state,
            e2 = i3.index;
          (n2 = this.m(this.v - e2)), this.replace(i3.states), (this.v = e2);
        } else this.add(t3, n2);
        return n2;
      }),
      (i2.add = function (t3, n2) {
        var r2 = this.size,
          i3 = this.p(n2),
          e2 = {
            ns: "tmp",
            scroll: { x: window.scrollX, y: window.scrollY },
            url: t3,
          };
        this.h.push(e2), (this.v = r2);
        var o2 = { from: this.l, index: r2, states: [].concat(this.h) };
        switch (i3) {
          case "push":
            window.history && window.history.pushState(o2, "", t3);
            break;
          case "replace":
            window.history && window.history.replaceState(o2, "", t3);
        }
      }),
      (i2.update = function (t3, n2) {
        var i3 = n2 || this.v,
          e2 = r({}, this.get(i3), {}, t3);
        this.set(i3, e2);
      }),
      (i2.remove = function (t3) {
        t3 ? this.h.splice(t3, 1) : this.h.pop(), this.v--;
      }),
      (i2.clear = function () {
        (this.h = []), (this.v = -1);
      }),
      (i2.replace = function (t3) {
        this.h = t3;
      }),
      (i2.get = function (t3) {
        return this.h[t3];
      }),
      (i2.set = function (t3, n2) {
        return (this.h[t3] = n2);
      }),
      (i2.p = function (t3) {
        var n2 = "push",
          r2 = t3,
          i3 = S.prefix + "-" + S.history;
        return (
          r2.hasAttribute && r2.hasAttribute(i3) && (n2 = r2.getAttribute(i3)),
          n2
        );
      }),
      (i2.m = function (t3) {
        return Math.abs(t3) > 1
          ? t3 > 0
            ? "forward"
            : "back"
          : t3 === 0
          ? "popstate"
          : t3 > 0
          ? "back"
          : "forward";
      }),
      n(t2, [
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
      t2
    );
  })())(),
  L = function (t2, n2) {
    try {
      var r2 = (function () {
        if (!n2.next.html)
          return Promise.resolve(t2).then(function (t3) {
            var r3 = n2.next;
            if (t3) {
              var i2 = j.toElement(t3);
              (r3.namespace = j.getNamespace(i2)),
                (r3.container = j.getContainer(i2)),
                (r3.html = t3),
                M.update({ ns: r3.namespace });
              var e2 = j.toDocument(t3);
              document.title = e2.title;
            }
          });
      })();
      return Promise.resolve(r2 && r2.then ? r2.then(function () {}) : void 0);
    } catch (t3) {
      return Promise.reject(t3);
    }
  },
  $ = d,
  _ = {
    __proto__: null,
    update: L,
    nextTick: function () {
      return new Promise(function (t2) {
        window.requestAnimationFrame(t2);
      });
    },
    pathToRegexp: $,
  },
  q = function () {
    return window.location.origin;
  },
  B = function (t2) {
    return t2 === void 0 && (t2 = window.location.href), U(t2).port;
  },
  U = function (t2) {
    var n2,
      r2 = t2.match(/:\d+/);
    if (r2 === null)
      /^http/.test(t2) && (n2 = 80), /^https/.test(t2) && (n2 = 443);
    else {
      var i2 = r2[0].substring(1);
      n2 = parseInt(i2, 10);
    }
    var e2,
      o2 = t2.replace(q(), ""),
      u2 = {},
      s2 = o2.indexOf("#");
    s2 >= 0 && ((e2 = o2.slice(s2 + 1)), (o2 = o2.slice(0, s2)));
    var f2 = o2.indexOf("?");
    return (
      f2 >= 0 && ((u2 = D(o2.slice(f2 + 1))), (o2 = o2.slice(0, f2))),
      { hash: e2, path: o2, port: n2, query: u2 }
    );
  },
  D = function (t2) {
    return t2.split("&").reduce(function (t3, n2) {
      var r2 = n2.split("=");
      return (t3[r2[0]] = r2[1]), t3;
    }, {});
  },
  F = function (t2) {
    return (
      t2 === void 0 && (t2 = window.location.href),
      t2.replace(/(\/#.*|\/|#.*)$/, "")
    );
  },
  H = {
    __proto__: null,
    getHref: function () {
      return window.location.href;
    },
    getOrigin: q,
    getPort: B,
    getPath: function (t2) {
      return t2 === void 0 && (t2 = window.location.href), U(t2).path;
    },
    parse: U,
    parseQuery: D,
    clean: F,
  };
function I(t2, n2, r2) {
  return (
    n2 === void 0 && (n2 = 2e3),
    new Promise(function (i2, e2) {
      var o2 = new XMLHttpRequest();
      (o2.onreadystatechange = function () {
        if (o2.readyState === XMLHttpRequest.DONE) {
          if (o2.status === 200) i2(o2.responseText);
          else if (o2.status) {
            var n3 = { status: o2.status, statusText: o2.statusText };
            r2(t2, n3), e2(n3);
          }
        }
      }),
        (o2.ontimeout = function () {
          var i3 = new Error("Timeout error [" + n2 + "]");
          r2(t2, i3), e2(i3);
        }),
        (o2.onerror = function () {
          var n3 = new Error("Fetch error");
          r2(t2, n3), e2(n3);
        }),
        o2.open("GET", t2),
        (o2.timeout = n2),
        o2.setRequestHeader(
          "Accept",
          "text/html,application/xhtml+xml,application/xml"
        ),
        o2.setRequestHeader("x-barba", "yes"),
        o2.send();
    })
  );
}
var C = function (t2) {
  return (
    !!t2 &&
    (typeof t2 == "object" || typeof t2 == "function") &&
    typeof t2.then == "function"
  );
};
function N(t2, n2) {
  return (
    n2 === void 0 && (n2 = {}),
    function () {
      for (var r2 = arguments.length, i2 = new Array(r2), e2 = 0; e2 < r2; e2++)
        i2[e2] = arguments[e2];
      var o2 = false,
        u2 = new Promise(function (r3, e3) {
          n2.async = function () {
            return (
              (o2 = true),
              function (t3, n3) {
                t3 ? e3(t3) : r3(n3);
              }
            );
          };
          var u3 = t2.apply(n2, i2);
          o2 || (C(u3) ? u3.then(r3, e3) : r3(u3));
        });
      return u2;
    }
  );
}
var X = new ((function (t2) {
    function n2() {
      var n3;
      return (
        ((n3 = t2.call(this) || this).logger = new l("@barba/core")),
        (n3.all = [
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
        (n3.registered = new Map()),
        n3.init(),
        n3
      );
    }
    i(n2, t2);
    var r2 = n2.prototype;
    return (
      (r2.init = function () {
        var t3 = this;
        this.registered.clear(),
          this.all.forEach(function (n3) {
            t3[n3] ||
              (t3[n3] = function (r3, i2) {
                t3.registered.has(n3) || t3.registered.set(n3, new Set()),
                  t3.registered.get(n3).add({ ctx: i2 || {}, fn: r3 });
              });
          });
      }),
      (r2.do = function (t3) {
        for (
          var n3 = this,
            r3 = arguments.length,
            i2 = new Array(r3 > 1 ? r3 - 1 : 0),
            e2 = 1;
          e2 < r3;
          e2++
        )
          i2[e2 - 1] = arguments[e2];
        if (this.registered.has(t3)) {
          var o2 = Promise.resolve();
          return (
            this.registered.get(t3).forEach(function (t4) {
              o2 = o2.then(function () {
                return N(t4.fn, t4.ctx).apply(void 0, i2);
              });
            }),
            o2.catch(function (r4) {
              n3.logger.debug("Hook error [" + t3 + "]"), n3.logger.error(r4);
            })
          );
        }
        return Promise.resolve();
      }),
      (r2.clear = function () {
        var t3 = this;
        this.all.forEach(function (n3) {
          delete t3[n3];
        }),
          this.init();
      }),
      (r2.help = function () {
        this.logger.info("Available hooks: " + this.all.join(","));
        var t3 = [];
        this.registered.forEach(function (n3, r3) {
          return t3.push(r3);
        }),
          this.logger.info("Registered hooks: " + t3.join(","));
      }),
      n2
    );
  })(h))(),
  z = (function () {
    function t2(t3) {
      if (((this.P = []), typeof t3 == "boolean")) this.g = t3;
      else {
        var n2 = Array.isArray(t3) ? t3 : [t3];
        this.P = n2.map(function (t4) {
          return $(t4);
        });
      }
    }
    return (
      (t2.prototype.checkHref = function (t3) {
        if (typeof this.g == "boolean") return this.g;
        var n2 = U(t3).path;
        return this.P.some(function (t4) {
          return t4.exec(n2) !== null;
        });
      }),
      t2
    );
  })(),
  G = (function (t2) {
    function n2(n3) {
      var r2;
      return ((r2 = t2.call(this, n3) || this).k = new Map()), r2;
    }
    i(n2, t2);
    var e2 = n2.prototype;
    return (
      (e2.set = function (t3, n3, r2) {
        return (
          this.k.set(t3, { action: r2, request: n3 }),
          { action: r2, request: n3 }
        );
      }),
      (e2.get = function (t3) {
        return this.k.get(t3);
      }),
      (e2.getRequest = function (t3) {
        return this.k.get(t3).request;
      }),
      (e2.getAction = function (t3) {
        return this.k.get(t3).action;
      }),
      (e2.has = function (t3) {
        return !this.checkHref(t3) && this.k.has(t3);
      }),
      (e2.delete = function (t3) {
        return this.k.delete(t3);
      }),
      (e2.update = function (t3, n3) {
        var i2 = r({}, this.k.get(t3), {}, n3);
        return this.k.set(t3, i2), i2;
      }),
      n2
    );
  })(z),
  Q = function () {
    return !window.history.pushState;
  },
  W = function (t2) {
    return !t2.el || !t2.href;
  },
  J = function (t2) {
    var n2 = t2.event;
    return n2.which > 1 || n2.metaKey || n2.ctrlKey || n2.shiftKey || n2.altKey;
  },
  K = function (t2) {
    var n2 = t2.el;
    return n2.hasAttribute("target") && n2.target === "_blank";
  },
  V = function (t2) {
    var n2 = t2.el;
    return (
      (n2.protocol !== void 0 && window.location.protocol !== n2.protocol) ||
      (n2.hostname !== void 0 && window.location.hostname !== n2.hostname)
    );
  },
  Y = function (t2) {
    var n2 = t2.el;
    return n2.port !== void 0 && B() !== B(n2.href);
  },
  Z = function (t2) {
    var n2 = t2.el;
    return n2.getAttribute && typeof n2.getAttribute("download") == "string";
  },
  tt = function (t2) {
    return t2.el.hasAttribute(S.prefix + "-" + S.prevent);
  },
  nt = function (t2) {
    return Boolean(t2.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'));
  },
  rt = function (t2) {
    var n2 = t2.href;
    return F(n2) === F() && B(n2) === B();
  },
  it = (function (t2) {
    function n2(n3) {
      var r3;
      return (
        ((r3 = t2.call(this, n3) || this).suite = []),
        (r3.tests = new Map()),
        r3.init(),
        r3
      );
    }
    i(n2, t2);
    var r2 = n2.prototype;
    return (
      (r2.init = function () {
        this.add("pushState", Q),
          this.add("exists", W),
          this.add("newTab", J),
          this.add("blank", K),
          this.add("corsDomain", V),
          this.add("corsPort", Y),
          this.add("download", Z),
          this.add("preventSelf", tt),
          this.add("preventAll", nt),
          this.add("sameUrl", rt, false);
      }),
      (r2.add = function (t3, n3, r3) {
        r3 === void 0 && (r3 = true),
          this.tests.set(t3, n3),
          r3 && this.suite.push(t3);
      }),
      (r2.run = function (t3, n3, r3, i2) {
        return this.tests.get(t3)({ el: n3, event: r3, href: i2 });
      }),
      (r2.checkLink = function (t3, n3, r3) {
        var i2 = this;
        return this.suite.some(function (e2) {
          return i2.run(e2, t3, n3, r3);
        });
      }),
      n2
    );
  })(z),
  et = (function (t2) {
    function n2(r2, i2) {
      var e2;
      i2 === void 0 && (i2 = "Barba error");
      for (
        var o2 = arguments.length, u2 = new Array(o2 > 2 ? o2 - 2 : 0), s2 = 2;
        s2 < o2;
        s2++
      )
        u2[s2 - 2] = arguments[s2];
      return (
        ((e2 = t2.call.apply(t2, [this].concat(u2)) || this).error = r2),
        (e2.label = i2),
        Error.captureStackTrace &&
          Error.captureStackTrace(
            (function (t3) {
              if (t3 === void 0)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t3;
            })(e2),
            n2
          ),
        (e2.name = "BarbaError"),
        e2
      );
    }
    return i(n2, t2), n2;
  })(s(Error)),
  ot = (function () {
    function t2(t3) {
      t3 === void 0 && (t3 = []),
        (this.logger = new l("@barba/core")),
        (this.all = []),
        (this.page = []),
        (this.once = []),
        (this.A = [
          { name: "namespace", type: "strings" },
          { name: "custom", type: "function" },
        ]),
        t3 && (this.all = this.all.concat(t3)),
        this.update();
    }
    var n2 = t2.prototype;
    return (
      (n2.add = function (t3, n3) {
        switch (t3) {
          case "rule":
            this.A.splice(n3.position || 0, 0, n3.value);
            break;
          case "transition":
          default:
            this.all.push(n3);
        }
        this.update();
      }),
      (n2.resolve = function (t3, n3) {
        var r2 = this;
        n3 === void 0 && (n3 = {});
        var i2 = n3.once ? this.once : this.page;
        i2 = i2.filter(
          n3.self
            ? function (t4) {
                return t4.name && t4.name === "self";
              }
            : function (t4) {
                return !t4.name || t4.name !== "self";
              }
        );
        var e2 = new Map(),
          o2 = i2.find(function (i3) {
            var o3 = true,
              u3 = {};
            return (
              !(!n3.self || i3.name !== "self") ||
              (r2.A.reverse().forEach(function (n4) {
                o3 &&
                  ((o3 = r2.R(i3, n4, t3, u3)),
                  i3.from &&
                    i3.to &&
                    (o3 =
                      r2.R(i3, n4, t3, u3, "from") &&
                      r2.R(i3, n4, t3, u3, "to")),
                  i3.from && !i3.to && (o3 = r2.R(i3, n4, t3, u3, "from")),
                  !i3.from && i3.to && (o3 = r2.R(i3, n4, t3, u3, "to")));
              }),
              e2.set(i3, u3),
              o3)
            );
          }),
          u2 = e2.get(o2),
          s2 = [];
        if (
          (s2.push(n3.once ? "once" : "page"), n3.self && s2.push("self"), u2)
        ) {
          var f2,
            c2 = [o2];
          Object.keys(u2).length > 0 && c2.push(u2),
            (f2 = this.logger).info.apply(
              f2,
              ["Transition found [" + s2.join(",") + "]"].concat(c2)
            );
        } else this.logger.info("No transition found [" + s2.join(",") + "]");
        return o2;
      }),
      (n2.update = function () {
        var t3 = this;
        (this.all = this.all
          .map(function (n3) {
            return t3.T(n3);
          })
          .sort(function (t4, n3) {
            return t4.priority - n3.priority;
          })
          .reverse()
          .map(function (t4) {
            return delete t4.priority, t4;
          })),
          (this.page = this.all.filter(function (t4) {
            return t4.leave !== void 0 || t4.enter !== void 0;
          })),
          (this.once = this.all.filter(function (t4) {
            return t4.once !== void 0;
          }));
      }),
      (n2.R = function (t3, n3, r2, i2, e2) {
        var o2 = true,
          u2 = false,
          s2 = t3,
          f2 = n3.name,
          c2 = f2,
          a2 = f2,
          h2 = f2,
          v2 = e2 ? s2[e2] : s2,
          l2 = e2 === "to" ? r2.next : r2.current;
        if (e2 ? v2 && v2[f2] : v2[f2]) {
          switch (n3.type) {
            case "strings":
            default:
              var d2 = Array.isArray(v2[c2]) ? v2[c2] : [v2[c2]];
              l2[c2] && d2.indexOf(l2[c2]) !== -1 && (u2 = true),
                d2.indexOf(l2[c2]) === -1 && (o2 = false);
              break;
            case "object":
              var m2 = Array.isArray(v2[a2]) ? v2[a2] : [v2[a2]];
              l2[a2]
                ? (l2[a2].name && m2.indexOf(l2[a2].name) !== -1 && (u2 = true),
                  m2.indexOf(l2[a2].name) === -1 && (o2 = false))
                : (o2 = false);
              break;
            case "function":
              v2[h2](r2) ? (u2 = true) : (o2 = false);
          }
          u2 &&
            (e2
              ? ((i2[e2] = i2[e2] || {}), (i2[e2][f2] = s2[e2][f2]))
              : (i2[f2] = s2[f2]));
        }
        return o2;
      }),
      (n2.O = function (t3, n3, r2) {
        var i2 = 0;
        return (
          (t3[n3] || (t3.from && t3.from[n3]) || (t3.to && t3.to[n3])) &&
            ((i2 += Math.pow(10, r2)),
            t3.from && t3.from[n3] && (i2 += 1),
            t3.to && t3.to[n3] && (i2 += 2)),
          i2
        );
      }),
      (n2.T = function (t3) {
        var n3 = this;
        t3.priority = 0;
        var r2 = 0;
        return (
          this.A.forEach(function (i2, e2) {
            r2 += n3.O(t3, i2.name, e2 + 1);
          }),
          (t3.priority = r2),
          t3
        );
      }),
      t2
    );
  })(),
  ut = (function () {
    function t2(t3) {
      t3 === void 0 && (t3 = []),
        (this.logger = new l("@barba/core")),
        (this.S = false),
        (this.store = new ot(t3));
    }
    var r2 = t2.prototype;
    return (
      (r2.get = function (t3, n2) {
        return this.store.resolve(t3, n2);
      }),
      (r2.doOnce = function (t3) {
        var n2 = t3.data,
          r3 = t3.transition;
        try {
          var i2 = function () {
              e2.S = false;
            },
            e2 = this,
            o2 = r3 || {};
          e2.S = true;
          var u2 = f(
            function () {
              return Promise.resolve(e2.j("beforeOnce", n2, o2)).then(
                function () {
                  return Promise.resolve(e2.once(n2, o2)).then(function () {
                    return Promise.resolve(e2.j("afterOnce", n2, o2)).then(
                      function () {}
                    );
                  });
                }
              );
            },
            function (t4) {
              (e2.S = false),
                e2.logger.debug("Transition error [before/after/once]"),
                e2.logger.error(t4);
            }
          );
          return Promise.resolve(u2 && u2.then ? u2.then(i2) : i2());
        } catch (t4) {
          return Promise.reject(t4);
        }
      }),
      (r2.doPage = function (t3) {
        var n2 = t3.data,
          r3 = t3.transition,
          i2 = t3.page,
          e2 = t3.wrapper;
        try {
          var o2 = function (t4) {
              if (u2) return t4;
              s2.S = false;
            },
            u2 = false,
            s2 = this,
            c2 = r3 || {},
            a2 = c2.sync === true || false;
          s2.S = true;
          var h2 = f(
            function () {
              function t4() {
                return Promise.resolve(s2.j("before", n2, c2)).then(
                  function () {
                    var t5 = false;
                    function r5(r6) {
                      return t5
                        ? r6
                        : Promise.resolve(s2.remove(n2)).then(function () {
                            return Promise.resolve(s2.j("after", n2, c2)).then(
                              function () {}
                            );
                          });
                    }
                    var o3 = (function () {
                      if (a2)
                        return f(
                          function () {
                            return Promise.resolve(s2.add(n2, e2)).then(
                              function () {
                                return Promise.resolve(
                                  s2.j("beforeLeave", n2, c2)
                                ).then(function () {
                                  return Promise.resolve(
                                    s2.j("beforeEnter", n2, c2)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        s2.leave(n2, c2),
                                        s2.enter(n2, c2),
                                      ])
                                    ).then(function () {
                                      return Promise.resolve(
                                        s2.j("afterLeave", n2, c2)
                                      ).then(function () {
                                        return Promise.resolve(
                                          s2.j("afterEnter", n2, c2)
                                        ).then(function () {});
                                      });
                                    });
                                  });
                                });
                              }
                            );
                          },
                          function (t6) {
                            if (s2.M(t6))
                              throw new et(t6, "Transition error [sync]");
                          }
                        );
                      var r6 = function (r7) {
                          return t5
                            ? r7
                            : f(
                                function () {
                                  var t6 = (function () {
                                    if (o4 !== false)
                                      return Promise.resolve(
                                        s2.add(n2, e2)
                                      ).then(function () {
                                        return Promise.resolve(
                                          s2.j("beforeEnter", n2, c2)
                                        ).then(function () {
                                          return Promise.resolve(
                                            s2.enter(n2, c2, o4)
                                          ).then(function () {
                                            return Promise.resolve(
                                              s2.j("afterEnter", n2, c2)
                                            ).then(function () {});
                                          });
                                        });
                                      });
                                  })();
                                  if (t6 && t6.then)
                                    return t6.then(function () {});
                                },
                                function (t6) {
                                  if (s2.M(t6))
                                    throw new et(
                                      t6,
                                      "Transition error [before/after/enter]"
                                    );
                                }
                              );
                        },
                        o4 = false,
                        u3 = f(
                          function () {
                            return Promise.resolve(
                              s2.j("beforeLeave", n2, c2)
                            ).then(function () {
                              return Promise.resolve(
                                Promise.all([s2.leave(n2, c2), L(i2, n2)]).then(
                                  function (t6) {
                                    return t6[0];
                                  }
                                )
                              ).then(function (t6) {
                                return (
                                  (o4 = t6),
                                  Promise.resolve(
                                    s2.j("afterLeave", n2, c2)
                                  ).then(function () {})
                                );
                              });
                            });
                          },
                          function (t6) {
                            if (s2.M(t6))
                              throw new et(
                                t6,
                                "Transition error [before/after/leave]"
                              );
                          }
                        );
                      return u3 && u3.then ? u3.then(r6) : r6(u3);
                    })();
                    return o3 && o3.then ? o3.then(r5) : r5(o3);
                  }
                );
              }
              var r4 = (function () {
                if (a2) return Promise.resolve(L(i2, n2)).then(function () {});
              })();
              return r4 && r4.then ? r4.then(t4) : t4();
            },
            function (t4) {
              if (((s2.S = false), t4.name && t4.name === "BarbaError"))
                throw (
                  (s2.logger.debug(t4.label), s2.logger.error(t4.error), t4)
                );
              throw (
                (s2.logger.debug("Transition error [page]"),
                s2.logger.error(t4),
                t4)
              );
            }
          );
          return Promise.resolve(h2 && h2.then ? h2.then(o2) : o2(h2));
        } catch (t4) {
          return Promise.reject(t4);
        }
      }),
      (r2.once = function (t3, n2) {
        try {
          return Promise.resolve(X.do("once", t3, n2)).then(function () {
            return n2.once ? N(n2.once, n2)(t3) : Promise.resolve();
          });
        } catch (t4) {
          return Promise.reject(t4);
        }
      }),
      (r2.leave = function (t3, n2) {
        try {
          return Promise.resolve(X.do("leave", t3, n2)).then(function () {
            return n2.leave ? N(n2.leave, n2)(t3) : Promise.resolve();
          });
        } catch (t4) {
          return Promise.reject(t4);
        }
      }),
      (r2.enter = function (t3, n2, r3) {
        try {
          return Promise.resolve(X.do("enter", t3, n2)).then(function () {
            return n2.enter ? N(n2.enter, n2)(t3, r3) : Promise.resolve();
          });
        } catch (t4) {
          return Promise.reject(t4);
        }
      }),
      (r2.add = function (t3, n2) {
        try {
          return (
            j.addContainer(t3.next.container, n2),
            X.do("nextAdded", t3),
            Promise.resolve()
          );
        } catch (t4) {
          return Promise.reject(t4);
        }
      }),
      (r2.remove = function (t3) {
        try {
          return (
            j.removeContainer(t3.current.container),
            X.do("currentRemoved", t3),
            Promise.resolve()
          );
        } catch (t4) {
          return Promise.reject(t4);
        }
      }),
      (r2.M = function (t3) {
        return t3.message
          ? !/Timeout error|Fetch error/.test(t3.message)
          : !t3.status;
      }),
      (r2.j = function (t3, n2, r3) {
        try {
          return Promise.resolve(X.do(t3, n2, r3)).then(function () {
            return r3[t3] ? N(r3[t3], r3)(n2) : Promise.resolve();
          });
        } catch (t4) {
          return Promise.reject(t4);
        }
      }),
      n(t2, [
        {
          key: "isRunning",
          get: function () {
            return this.S;
          },
          set: function (t3) {
            this.S = t3;
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
            return this.store.all.some(function (t3) {
              return t3.name === "self";
            });
          },
        },
        {
          key: "shouldWait",
          get: function () {
            return this.store.all.some(function (t3) {
              return (t3.to && !t3.to.route) || t3.sync;
            });
          },
        },
      ]),
      t2
    );
  })(),
  st = (function () {
    function t2(t3) {
      var n2 = this;
      (this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"]),
        (this.byNamespace = new Map()),
        t3.length !== 0 &&
          (t3.forEach(function (t4) {
            n2.byNamespace.set(t4.namespace, t4);
          }),
          this.names.forEach(function (t4) {
            X[t4](n2.L(t4));
          }));
    }
    return (
      (t2.prototype.L = function (t3) {
        var n2 = this;
        return function (r2) {
          var i2 = t3.match(/enter/i) ? r2.next : r2.current,
            e2 = n2.byNamespace.get(i2.namespace);
          return e2 && e2[t3] ? N(e2[t3], e2)(r2) : Promise.resolve();
        };
      }),
      t2
    );
  })();
Element.prototype.matches ||
  (Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector),
  Element.prototype.closest ||
    (Element.prototype.closest = function (t2) {
      var n2 = this;
      do {
        if (n2.matches(t2)) return n2;
        n2 = n2.parentElement || n2.parentNode;
      } while (n2 !== null && n2.nodeType === 1);
      return null;
    });
var ft = {
    container: null,
    html: "",
    namespace: "",
    url: { hash: "", href: "", path: "", port: null, query: {} },
  },
  ct = new ((function () {
    function t2() {
      (this.version = a),
        (this.schemaPage = ft),
        (this.Logger = l),
        (this.logger = new l("@barba/core")),
        (this.plugins = []),
        (this.hooks = X),
        (this.dom = j),
        (this.helpers = _),
        (this.history = M),
        (this.request = I),
        (this.url = H);
    }
    var i2 = t2.prototype;
    return (
      (i2.use = function (t3, n2) {
        var r2 = this.plugins;
        r2.indexOf(t3) > -1
          ? this.logger.warn("Plugin [" + t3.name + "] already installed.")
          : typeof t3.install == "function"
          ? (t3.install(this, n2), r2.push(t3))
          : this.logger.warn(
              "Plugin [" + t3.name + '] has no "install" method.'
            );
      }),
      (i2.init = function (t3) {
        var n2 = t3 === void 0 ? {} : t3,
          i3 = n2.transitions,
          e2 = i3 === void 0 ? [] : i3,
          o2 = n2.views,
          u2 = o2 === void 0 ? [] : o2,
          s2 = n2.schema,
          f2 = s2 === void 0 ? S : s2,
          c2 = n2.requestError,
          a2 = n2.timeout,
          h2 = a2 === void 0 ? 2e3 : a2,
          v2 = n2.cacheIgnore,
          d2 = v2 !== void 0 && v2,
          m2 = n2.prefetchIgnore,
          w2 = m2 !== void 0 && m2,
          p2 = n2.preventRunning,
          b2 = p2 !== void 0 && p2,
          y2 = n2.prevent,
          P2 = y2 === void 0 ? null : y2,
          g2 = n2.debug,
          E2 = n2.logLevel;
        if (
          (l.setLevel(
            (g2 !== void 0 && g2) === true
              ? "debug"
              : E2 === void 0
              ? "off"
              : E2
          ),
          this.logger.info(this.version),
          Object.keys(f2).forEach(function (t4) {
            S[t4] && (S[t4] = f2[t4]);
          }),
          (this.$ = c2),
          (this.timeout = h2),
          (this.cacheIgnore = d2),
          (this.prefetchIgnore = w2),
          (this.preventRunning = b2),
          (this._ = this.dom.getWrapper()),
          !this._)
        )
          throw new Error("[@barba/core] No Barba wrapper found");
        this._.setAttribute("aria-live", "polite"), this.q();
        var x2 = this.data.current;
        if (!x2.container)
          throw new Error("[@barba/core] No Barba container found");
        if (
          ((this.cache = new G(d2)),
          (this.prevent = new it(w2)),
          (this.transitions = new ut(e2)),
          (this.views = new st(u2)),
          P2 !== null)
        ) {
          if (typeof P2 != "function")
            throw new Error("[@barba/core] Prevent should be a function");
          this.prevent.add("preventCustom", P2);
        }
        this.history.init(x2.url.href, x2.namespace),
          (this.B = this.B.bind(this)),
          (this.U = this.U.bind(this)),
          (this.D = this.D.bind(this)),
          this.F(),
          this.plugins.forEach(function (t4) {
            return t4.init();
          });
        var k2 = this.data;
        (k2.trigger = "barba"),
          (k2.next = k2.current),
          (k2.current = r({}, this.schemaPage)),
          this.hooks.do("ready", k2),
          this.once(k2),
          this.q();
      }),
      (i2.destroy = function () {
        this.q(),
          this.H(),
          this.history.clear(),
          this.hooks.clear(),
          (this.plugins = []);
      }),
      (i2.force = function (t3) {
        window.location.assign(t3);
      }),
      (i2.go = function (t3, n2, r2) {
        var i3;
        if ((n2 === void 0 && (n2 = "barba"), this.transitions.isRunning))
          this.force(t3);
        else if (
          !(i3 =
            n2 === "popstate"
              ? this.history.current &&
                this.url.getPath(this.history.current.url) ===
                  this.url.getPath(t3)
              : this.prevent.run("sameUrl", null, null, t3)) ||
          this.transitions.hasSelf
        )
          return (
            (n2 = this.history.change(t3, n2, r2)),
            r2 && (r2.stopPropagation(), r2.preventDefault()),
            this.page(t3, n2, i3)
          );
      }),
      (i2.once = function (t3) {
        try {
          var n2 = this;
          return Promise.resolve(n2.hooks.do("beforeEnter", t3)).then(
            function () {
              function r2() {
                return Promise.resolve(n2.hooks.do("afterEnter", t3)).then(
                  function () {}
                );
              }
              var i3 = (function () {
                if (n2.transitions.hasOnce) {
                  var r3 = n2.transitions.get(t3, { once: true });
                  return Promise.resolve(
                    n2.transitions.doOnce({ transition: r3, data: t3 })
                  ).then(function () {});
                }
              })();
              return i3 && i3.then ? i3.then(r2) : r2();
            }
          );
        } catch (t4) {
          return Promise.reject(t4);
        }
      }),
      (i2.page = function (t3, n2, i3) {
        try {
          var e2 = function () {
              var t4 = o2.data;
              return Promise.resolve(o2.hooks.do("page", t4)).then(function () {
                var n3 = f(
                  function () {
                    var n4 = o2.transitions.get(t4, { once: false, self: i3 });
                    return Promise.resolve(
                      o2.transitions.doPage({
                        data: t4,
                        page: u2,
                        transition: n4,
                        wrapper: o2._,
                      })
                    ).then(function () {
                      o2.q();
                    });
                  },
                  function () {
                    l.getLevel() === 0 && o2.force(t4.current.url.href);
                  }
                );
                if (n3 && n3.then) return n3.then(function () {});
              });
            },
            o2 = this;
          (o2.data.next.url = r({ href: t3 }, o2.url.parse(t3))),
            (o2.data.trigger = n2);
          var u2 = o2.cache.has(t3)
              ? o2.cache.update(t3, { action: "click" }).request
              : o2.cache.set(
                  t3,
                  o2.request(t3, o2.timeout, o2.onRequestError.bind(o2, n2)),
                  "click"
                ).request,
            s2 = (function () {
              if (o2.transitions.shouldWait)
                return Promise.resolve(L(u2, o2.data)).then(function () {});
            })();
          return Promise.resolve(s2 && s2.then ? s2.then(e2) : e2());
        } catch (t4) {
          return Promise.reject(t4);
        }
      }),
      (i2.onRequestError = function (t3) {
        this.transitions.isRunning = false;
        for (
          var n2 = arguments.length,
            r2 = new Array(n2 > 1 ? n2 - 1 : 0),
            i3 = 1;
          i3 < n2;
          i3++
        )
          r2[i3 - 1] = arguments[i3];
        var e2 = r2[0],
          o2 = r2[1],
          u2 = this.cache.getAction(e2);
        return (
          this.cache.delete(e2),
          !(
            (this.$ && this.$(t3, u2, e2, o2) === false) ||
            (u2 === "click" && this.force(e2), 1)
          )
        );
      }),
      (i2.prefetch = function (t3) {
        var n2 = this;
        this.cache.has(t3) ||
          this.cache.set(
            t3,
            this.request(
              t3,
              this.timeout,
              this.onRequestError.bind(this, "barba")
            ).catch(function (t4) {
              n2.logger.error(t4);
            }),
            "prefetch"
          );
      }),
      (i2.F = function () {
        this.prefetchIgnore !== true &&
          (document.addEventListener("mouseover", this.B),
          document.addEventListener("touchstart", this.B)),
          document.addEventListener("click", this.U),
          window.addEventListener("popstate", this.D);
      }),
      (i2.H = function () {
        this.prefetchIgnore !== true &&
          (document.removeEventListener("mouseover", this.B),
          document.removeEventListener("touchstart", this.B)),
          document.removeEventListener("click", this.U),
          window.removeEventListener("popstate", this.D);
      }),
      (i2.B = function (t3) {
        var n2 = this,
          r2 = this.I(t3);
        if (r2) {
          var i3 = this.dom.getHref(r2);
          this.prevent.checkHref(i3) ||
            this.cache.has(i3) ||
            this.cache.set(
              i3,
              this.request(
                i3,
                this.timeout,
                this.onRequestError.bind(this, r2)
              ).catch(function (t4) {
                n2.logger.error(t4);
              }),
              "enter"
            );
        }
      }),
      (i2.U = function (t3) {
        var n2 = this.I(t3);
        if (n2)
          return this.transitions.isRunning && this.preventRunning
            ? (t3.preventDefault(), void t3.stopPropagation())
            : void this.go(this.dom.getHref(n2), n2, t3);
      }),
      (i2.D = function (t3) {
        this.go(this.url.getHref(), "popstate", t3);
      }),
      (i2.I = function (t3) {
        for (var n2 = t3.target; n2 && !this.dom.getHref(n2); )
          n2 = n2.parentNode;
        if (n2 && !this.prevent.checkLink(n2, t3, this.dom.getHref(n2)))
          return n2;
      }),
      (i2.q = function () {
        var t3 = this.url.getHref(),
          n2 = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: r({ href: t3 }, this.url.parse(t3)),
          };
        (this.C = {
          current: n2,
          next: r({}, this.schemaPage),
          trigger: void 0,
        }),
          this.hooks.do("reset", this.data);
      }),
      n(t2, [
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
      t2
    );
  })())();

export default ct;
