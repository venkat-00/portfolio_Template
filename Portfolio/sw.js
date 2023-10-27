if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        i[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const i = document.createElement("script");
              (i.src = e), document.head.appendChild(i), (i.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
          return i[e];
        })
      );
    },
    s = (s, i) => {
      Promise.all(s.map(e)).then((e) => i(1 === e.length ? e[0] : e));
    },
    i = { require: Promise.resolve(s) };
  self.define = (s, c, r) => {
    i[s] ||
      (i[s] = Promise.resolve().then(() => {
        let i = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          c.map((s) => {
            switch (s) {
              case "exports":
                return i;
              case "module":
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = r(...e);
          return i.default || (i.default = s), i;
        });
      }));
  };
}
define("./sw.js", ["./workbox-2fdebd44"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "dist/app/index.js",
          revision: "d186bf60845d58e41854a8da24292ee0",
        },
        {
          url: "dist/app/utils/Debug.js",
          revision: "14adc8f919ea08c2427716867d141c13",
        },
        {
          url: "dist/app/utils/DetectWebp.js",
          revision: "c61673e11b133dc7fe95fb120f73ab85",
        },
        {
          url: "dist/app/utils/Grid.js",
          revision: "980ce0dc01511e7e4c0d2e75e68e6763",
        },
        {
          url: "dist/app/utils/preloader/loaders/LoaderArrayBuffer.js",
          revision: "1fc37dbb39bcac5040bac4a940555d10",
        },
        {
          url: "dist/app/utils/preloader/loaders/LoaderBlob.js",
          revision: "52e7c95ac4e3f51da1d509a68d45a276",
        },
        {
          url: "dist/app/utils/preloader/util/arrayBufferToString.js",
          revision: "2ed8b3348ee69bf11e05b3f1a6daaec4",
        },
        {
          url: "dist/app/utils/Stats.js",
          revision: "ef6e449e8f8e06ce9de5f80fafaab44a",
        },
        {
          url: "dist/data/projects.js",
          revision: "815c8f0e3403f5aa2cb0b26c7547010a",
        },
        {
          url: "dist/data/site.js",
          revision: "2190671ea201340e4e71e10f23432121",
        },
        { url: "dist/index.css", revision: "2a2e5ecf2ff1a9cd2c471ba7a01acc88" },
        { url: "dist/index.js", revision: "f4ff163942225e41822173cc870f6718" },
        {
          url: "dist/styles/base/grid-system.css",
          revision: "8602fe5d3bd003ec14233b88c796a98a",
        },
        {
          url: "dist/styles/components/About.css",
          revision: "017f018681575affa642f8a99cc56951",
        },
        {
          url: "dist/styles/components/Anchor.css",
          revision: "e3e0ad7b5e328a9a2c35fa8c63116229",
        },
        {
          url: "dist/styles/components/preloader.css",
          revision: "a2b698ed83854a96783eafe3b70441bb",
        },
        {
          url: "dist/styles/components/ProjectDoublePicture.css",
          revision: "4dbfda5ae9fbda5f62fcd6eedf2cfdf7",
        },
        {
          url: "dist/styles/components/ProjectHero.css",
          revision: "e96d975327f9d4edc590af54fb0bc139",
        },
        {
          url: "dist/styles/components/ProjectHeroInfo.css",
          revision: "54a71c79fbc2971daffc2d84f82f158d",
        },
        {
          url: "dist/styles/components/ProjectMobilePictures.css",
          revision: "f6be447e71ed451ad01fa93c933a7e63",
        },
        {
          url: "dist/styles/components/ProjectNext.css",
          revision: "79a40764f580dae931934047e86cf3f1",
        },
        {
          url: "dist/styles/components/ProjectTextBlock.css",
          revision: "70a5f1eb1eee37f5320a1d5002845f31",
        },
        {
          url: "dist/styles/components/ProjectWideParallax.css",
          revision: "6710d2b8701da5c6eeae17d8f30f4aae",
        },
        {
          url: "dist/styles/components/ProjectWidePicture.css",
          revision: "8e2c638c92133664fff50a9c7ca96040",
        },
        {
          url: "dist/styles/components/Rotate.css",
          revision: "d911c68501eebe5b5fe652b32cd8cb60",
        },
        {
          url: "dist/styles/components/ScrollProgress.css",
          revision: "62fb181b347695f60cfc6bc2593be923",
        },
        {
          url: "dist/styles/debug/grid.css",
          revision: "64d2a41980f88eb937e62a4b20fcf726",
        },
        {
          url: "dist/styles/export-vars.module.css",
          revision: "07e8c791bda293777909ae34b4b3dcb8",
        },
        {
          url: "dist/styles/pages/not-found.css",
          revision: "94438e40147154088e1d8c6d38d2b58b",
        },
        {
          url: "dist/styles/shared.css",
          revision: "8602fe5d3bd003ec14233b88c796a98a",
        },
        {
          url: "static/favicon.svg",
          revision: "fdbfbfaf0884753b2c96b5875a522749",
        },
        {
          url: "static/fonts/AntoniaH1-Light.woff",
          revision: "977cc24b7eec4768aa900fe633604e49",
        },
        {
          url: "static/fonts/AntoniaH1-Light.woff2",
          revision: "ed7d5939405d5b5ac493bf8e25dd8778",
        },
        {
          url: "static/fonts/clarikageo-regular-webfont.woff",
          revision: "fccfe208aaf8ecf18f2dedd1aa826692",
        },
        {
          url: "static/fonts/clarikageo-regular-webfont.woff2",
          revision: "79ff5145b20f6f817dd576bd05dc8023",
        },
        {
          url: "static/icon-x128.png",
          revision: "94cc6eeebffd935137686ecd27fc84d8",
        },
        {
          url: "static/icon-x144.png",
          revision: "6b4e4351b404bbaab150b841d83684a9",
        },
        {
          url: "static/icon-x152.png",
          revision: "6cf09242e0ad3b33713415f61a24d8e9",
        },
        {
          url: "static/icon-x180.png",
          revision: "8d2ec06190647bec89253de7f05fb283",
        },
        {
          url: "static/icon-x192.png",
          revision: "f14f78ac12b71ddfd512aa30e6333e38",
        },
        {
          url: "static/icon-x384.png",
          revision: "5851763b40cc9d15a9802b0e032031cc",
        },
        {
          url: "static/icon-x512.png",
          revision: "dea5e88a93ce08e50931a47a768d5501",
        },
        {
          url: "static/icon-x72.png",
          revision: "256cfcb623797328e9c5212fd84c473a",
        },
        {
          url: "static/icon-x96.png",
          revision: "1c32a06b82503f215fcc0416ca8fed6b",
        },
        {
          url: "static/img/humana/parallax-1 1.png",
          revision: "de0efb29fc754882872d67ff6152e538",
        },
        {
          url: "static/img/humana/parallax-2 1.png",
          revision: "7431be5ff9f7181bf174e53e440d7c2f",
        },
        {
          url: "static/img/mask_test.png",
          revision: "df73aca5c04c49cd7a2aae3d76114842",
        },
      ],
      {}
    );
});
