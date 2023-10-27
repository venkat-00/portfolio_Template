import * as __SNOWPACK_ENV__ from "../_snowpack/env.js";
import.meta.env = __SNOWPACK_ENV__;

import "../_snowpack/pkg/default-passive-events.js";
import "./app/styles.js";
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
let vh = 0;
window.onload = async function () {
  const app = (await import("./app/index.js")).default;
  app();
  requestAnimationFrame(raf);
};
function raf() {
  if (vh !== window.innerHeight * 0.01) {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vho", `${vh}px`);
  }
  requestAnimationFrame(raf);
}
if (__SNOWPACK_ENV__.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").then(
        () => {},
        () => {}
      );
    });
  }
}
if (__SNOWPACK_ENV__.NODE_ENV === "development") {
  if (undefined /* [snowpack] import.meta.hot */) {
    undefined /* [snowpack] import.meta.hot */
      .accept(() => {
        console.log("hot");
        undefined /* [snowpack] import.meta.hot */
          .invalidate();
      });
  }
}
