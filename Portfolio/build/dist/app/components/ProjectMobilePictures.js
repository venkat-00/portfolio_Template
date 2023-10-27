import gsap from "../../../_snowpack/pkg/gsap.js";
import { ScrollTrigger } from "../../../_snowpack/pkg/gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
export default function ProjectMobilePictures(el) {
  const anim = gsap.timeline();
  anim.add(
    gsap.fromTo(
      el.children[0],
      { y: "15%", rotation: -0.5 },
      {
        y: "-15%",
        rotation: 2,
        ease: "linear",
        force3D: true,
      }
    ),
    0
  );
  const scroll = ScrollTrigger.create({
    trigger: el,
    animation: anim,
    scrub: true,
    start: "top bottom",
    end: "bottom top",
  });
  function destroy() {
    scroll.kill();
  }
  return { destroy };
}
