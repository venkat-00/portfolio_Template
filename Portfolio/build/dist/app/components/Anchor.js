import gsap from "../../../_snowpack/pkg/gsap.js";
import Eases from "../data/eases.js";
export default function Anchor(el) {
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(
    el.querySelector(".front"),
    { yPercent: 0 },
    {
      duration: 0.584,
      yPercent: -100,
      overwrite: true,
      ease: Eases.AnchorText,
    },
    0
  );
  tl.fromTo(
    el.querySelector(".back"),
    { yPercent: 0 },
    {
      duration: 0.584,
      yPercent: -100,
      overwrite: true,
      ease: Eases.AnchorText,
    },
    0
  );
  const onMouseEnter = () => {
    tl.play();
  };
  const onMouseLeave = () => {
    tl.reverse();
  };
  el.addEventListener("mouseenter", onMouseEnter);
  el.addEventListener("mouseleave", onMouseLeave);
  const destroy = () => {
    el.removeEventListener("mouseenter", onMouseEnter);
    el.removeEventListener("mouseleave", onMouseLeave);
    tl.kill();
  };
  return { destroy };
}
