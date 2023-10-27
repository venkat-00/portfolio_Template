import isMobile from "../../_snowpack/pkg/ismobilejs.js";
import SlashRenderer from "./components/canvas/SlashRenderer.js";
const is_mobile = isMobile();
const Globals = {
  scroll: void 0,
  isMobile: is_mobile.any,
  isPhone: is_mobile.phone,
  isTablet: is_mobile.tablet,
  isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
  preloader: null,
  homeController: void 0,
  selectedProjectIndex: 0,
  currentProjectIndex: 0,
  numOfProjects: 0,
  nextProjectTransition: false,
  mobile: false,
  orientation: "landscape",
  titleYPercent: 260,
  slashRenderer: SlashRenderer(is_mobile.phone),
  wWidth: window.innerWidth,
  wHeight: window.innerHeight,
  pixelRatio: Math.min(3, window.devicePixelRatio),
  black: "#0f0f0f",
  white: "#fbfbfb",
  clarika: "clarikageo-regular",
  antonia: "AntoniaH1-Light",
};
export default Globals;
