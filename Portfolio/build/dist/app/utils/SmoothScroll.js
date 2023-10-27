import gsap from "../../../_snowpack/pkg/gsap.js";
import { ScrollTrigger } from "../../../_snowpack/pkg/gsap/ScrollTrigger.js";
import Globals from "../globals.js";
gsap.registerPlugin(ScrollTrigger);
export default function SmoothScroll(
  contentSelector,
  viewport,
  smoothness = 1
) {
  const content = gsap.utils.toArray(contentSelector)[0];
  gsap.set(viewport || content.parentNode, {
    overflow: "hidden",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });
  gsap.set(content, { overflow: "visible", width: "100%" });
  const getProp = gsap.getProperty(content);
  const setProp = gsap.quickSetter(content, "y", "px");
  const setScroll = ScrollTrigger.getScrollFunc(window);
  const removeScroll = () => (content.style.overflow = "visible");
  const killScrub = (trigger) => {
    const scrub = trigger.getTween
      ? trigger.getTween()
      : gsap.getTweensOf(trigger.animation)[0];
    scrub && scrub.kill();
    trigger.animation.progress(trigger.progress);
  };
  let height = 0;
  let isProxyScrolling = false;
  function onResize() {
    height = content.clientHeight;
    content.style.overflow = "visible";
    document.body.style.height = height + "px";
  }
  onResize();
  ScrollTrigger.addEventListener("refreshInit", onResize);
  ScrollTrigger.addEventListener("refresh", () => {
    removeScroll();
    requestAnimationFrame(removeScroll);
  });
  ScrollTrigger.defaults({ scroller: content });
  ScrollTrigger.scrollerProxy(content, {
    scrollTop(value) {
      if (arguments.length) {
        isProxyScrolling = true;
        if (value) {
          setProp(-value);
          setScroll(value);
        }
        return;
      }
      return -getProp("y");
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: Globals.wWidth,
        height: Globals.wHeight,
      };
    },
  });
  const scrollTrigger = ScrollTrigger.create({
    animation: gsap.fromTo(
      content,
      { y: 0 },
      {
        y: () => document.documentElement.clientHeight - height,
        ease: "none",
        onUpdate: ScrollTrigger.update,
      }
    ),
    scroller: window,
    invalidateOnRefresh: true,
    start: 0,
    end: () => height - document.documentElement.clientHeight,
    scrub: smoothness,
    onUpdate: (self) => {
      if (isProxyScrolling) {
        killScrub(self);
        isProxyScrolling = false;
      }
    },
    onRefresh: killScrub,
  });
  function resetPosition() {
    setScroll(0);
    ScrollTrigger.refresh();
  }
  return {
    resize: onResize,
    resetPosition,
    scrollTrigger,
    getProgress: () => scrollTrigger.animation?.progress() ?? 0,
  };
}
