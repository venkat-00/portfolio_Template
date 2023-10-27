import gsap from "../../../_snowpack/pkg/gsap.js";
import { ScrollTrigger } from "../../../_snowpack/pkg/gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
const ImageReveal = (el) => {
  const target = el.querySelector("[data-reveal-target]");
  const anim = gsap.fromTo(
    target,
    { rotation: el.dataset.animStart },
    {
      rotation: el.dataset.animEnd,
      ease: "none",
    }
  );
  const scrollTrigger = ScrollTrigger.create({
    trigger: el,
    animation: anim,
    scrub: true,
  });
  return () => {
    scrollTrigger.kill();
    anim.kill();
  };
};
export default ImageReveal;
