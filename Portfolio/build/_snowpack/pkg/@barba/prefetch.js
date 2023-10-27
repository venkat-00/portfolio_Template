var t = "2.1.10",
  i =
    window.requestIdleCallback ||
    function (t2) {
      var i2 = Date.now();
      return setTimeout(function () {
        t2({
          didTimeout: false,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - i2));
          },
        });
      }, 1);
    },
  n = new ((function () {
    function n2() {
      (this.name = "@barba/prefetch"),
        (this.version = t),
        (this.toPrefetch = new Set());
    }
    var e = n2.prototype;
    return (
      (e.install = function (t2, i2) {
        var n3 = i2 === void 0 ? {} : i2,
          e2 = n3.root,
          h = e2 === void 0 ? document.body : e2,
          r = n3.timeout,
          s = r === void 0 ? 2e3 : r;
        (this.logger = new t2.Logger(this.name)),
          this.logger.info(this.version),
          (this.barba = t2),
          (this.root = h),
          (this.timeout = s);
      }),
      (e.init = function () {
        var t2 = this;
        this.barba.prefetchIgnore
          ? this.logger.warn("barba.prefetchIgnore is enabled")
          : this.barba.cacheIgnore
          ? this.logger.warn("barba.cacheIgnore is enabled")
          : ((this.observer = new IntersectionObserver(function (i2) {
              i2.forEach(function (i3) {
                if (i3.isIntersecting) {
                  var n3 = i3.target,
                    e2 = t2.barba.dom.getHref(n3);
                  t2.toPrefetch.has(e2) &&
                    (t2.observer.unobserve(n3),
                    t2.barba.cache.has(e2)
                      ? t2.barba.cache.update(e2, { action: "prefetch" })
                      : t2.barba.cache.set(
                          e2,
                          t2.barba
                            .request(
                              e2,
                              t2.barba.timeout,
                              t2.barba.onRequestError.bind(t2.barba, "barba")
                            )
                            .catch(function (i4) {
                              t2.logger.error(i4);
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
        var t2 = this;
        i(
          function () {
            t2.root.querySelectorAll("a").forEach(function (i2) {
              var n3 = i2,
                e2 = t2.barba.dom.getHref(n3);
              t2.barba.cache.has(e2) ||
                t2.barba.prevent.checkHref(e2) ||
                t2.barba.prevent.checkLink(n3, {}, e2) ||
                (t2.observer.observe(i2), t2.toPrefetch.add(e2));
            });
          },
          { timeout: this.timeout }
        );
      }),
      n2
    );
  })())();

export default n;
