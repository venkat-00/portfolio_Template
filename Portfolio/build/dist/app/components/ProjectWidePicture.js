import gsap from "../../../_snowpack/pkg/gsap.js";
import { ScrollTrigger } from "../../../_snowpack/pkg/gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
export default function ProjectWidePicture(el) {
  const anim = gsap.fromTo(
    el.querySelector("[data-parallax-target]"),
    {
      y: "-10%",
      transformOrigin: "center center",
    },
    {
      y: "10%",
      transformOrigin: "center center",
      force3D: true,
    }
  );
  const scroll = ScrollTrigger.create({
    trigger: el.querySelector(".inner"),
    scrub: true,
    animation: anim,
  });
  return {
    destroy: () => {
      scroll.kill();
      anim.kill();
    },
  };
}
