var v = Object.defineProperty;
var _ = (t, o) => {
  for (var e in o) v(t, e, { get: o[e], enumerable: !0 });
};
var n = {};
_(n, {
  MODE: () => w,
  NODE_ENV: () => u,
  SNOWPACK_PUBLIC_API: () => E,
  SNOWPACK_PUBLIC_ENABLE_STATS: () => f,
  SNOWPACK_PUBLIC_WEBSITE_SITE_URL: () => h,
  SSR: () => y,
});
var f = "false",
  E = "https://fmoura-cms.herokuapp.com/",
  h = "https://franciscamoura.com",
  w = "production",
  u = "production",
  y = !1;
var i,
  g = [
    "scroll",
    "wheel",
    "touchstart",
    "touchmove",
    "touchenter",
    "touchend",
    "touchleave",
    "mouseout",
    "mouseleave",
    "mouseup",
    "mousedown",
    "mousemove",
    "mouseenter",
    "mousewheel",
    "mouseover",
  ];
(function () {
  var t = !1;
  try {
    var o = Object.defineProperty({}, "passive", {
      get: function () {
        t = !0;
      },
    });
    window.addEventListener("test", null, o),
      window.removeEventListener("test", null, o);
  } catch (e) {}
  return t;
})() &&
  ((d = EventTarget.prototype.addEventListener),
  (i = d),
  (EventTarget.prototype.addEventListener = function (t, o, e) {
    var p,
      c = typeof e == "object" && e !== null,
      l = c ? e.capture : e;
    ((e = c
      ? (function (s) {
          var r = Object.getOwnPropertyDescriptor(s, "passive");
          return r && r.writable !== !0 && r.set === void 0
            ? Object.assign({}, s)
            : s;
        })(e)
      : {}).passive =
      (p = e.passive) !== void 0 ? p : g.indexOf(t) !== -1 && !0),
      (e.capture = l !== void 0 && l),
      i.call(this, t, o, e);
  }),
  (EventTarget.prototype.addEventListener._original = i));
var d;
var N = {};
N.env = n;
history.scrollRestoration && (history.scrollRestoration = "manual");
var a = 0;
window.onload = async function () {
  (await import("./app/index.js")).default(), requestAnimationFrame(m);
};
function m() {
  a !== window.innerHeight * 0.01 &&
    ((a = window.innerHeight * 0.01),
    document.documentElement.style.setProperty("--vho", `${a}px`)),
    requestAnimationFrame(m);
}
u === "production" &&
  "serviceWorker" in navigator &&
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      () => {},
      () => {}
    );
  });
//# sourceMappingURL=index.js.map
