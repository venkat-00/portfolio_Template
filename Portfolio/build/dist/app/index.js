import barba from "../../_snowpack/pkg/@barba/core.js";
import barbaPrefetch from "../../_snowpack/pkg/@barba/prefetch.js";
import "./data/eases.js";
import { HomeView, ProjectView } from "./views/index.js";
import {
  HomeInTransition,
  HomeToProjectTransition,
  ProjectInTransition,
  ProjectToHomeTransition,
  ProjectToProjectTransition,
} from "./transitions/index.js";
import { About, Header, Preloader, Rotate } from "./components/index.js";
import SmoothScroll from "./utils/SmoothScroll.js";
import Globals from "./globals.js";
import gsap from "../../_snowpack/pkg/gsap.js";
function onMediaQueryHandler(target) {
  Globals.mobile = !target.matches;
}
function onOrientationChange(target) {
  Globals.orientation = target.matches ? "portrait" : "landscape";
}
function onMainRender() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (w !== Globals.wWidth || h !== Globals.wHeight) {
    Globals.wWidth = w;
    Globals.wHeight = h;
  }
}
gsap.ticker.add(onMainRender);
export default function app() {
  if (!Globals.isMobile) {
    Globals.scroll = SmoothScroll(".scroll-wrapper", "main", 1);
  }
  const mediaQuery = matchMedia("(min-width: 768px)");
  const orientationMediaQuery = matchMedia("(orientation: portrait)");
  mediaQuery.addEventListener("change", onMediaQueryHandler);
  orientationMediaQuery.addEventListener("change", onOrientationChange);
  onMediaQueryHandler(mediaQuery);
  onOrientationChange(orientationMediaQuery);
  Rotate();
  About();
  Header();
  Preloader(() => {
    document.body.style.overflowY = "auto";
    barba.use(barbaPrefetch);
    barba.hooks.beforeLeave(() => {
      gsap.set("#preloader-display", { display: "block" });
    });
    barba.hooks.afterLeave(() => {
      if (!Globals.scroll) window.scrollTo(0, 0);
    });
    barba.hooks.beforeEnter(() => {
      if (Globals.scroll) Globals.scroll.resetPosition();
    });
    barba.hooks.afterEnter(() => {
      Globals.scroll?.resize();
      gsap.set("#preloader-display", { display: "none" });
    });
    barba.init({
      preventRunning: true,
      debug: false,
      transitions: [
        HomeInTransition,
        HomeToProjectTransition,
        ProjectInTransition,
        ProjectToProjectTransition,
        ProjectToHomeTransition,
      ],
      views: [HomeView, ProjectView],
    });
  });
}
