import gsap from "../../../_snowpack/pkg/gsap.js";
import { toVW } from "../utils/MathUtils.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
import Globals from "../globals.js";
export default async function ProjectToProjectEnterMobile(cont) {
  const tl = gsap.timeline({ paused: true });
  tl.from(
    cont.querySelector(".project-hero-info .topic"),
    {
      opacity: 0,
      duration: 0.333,
      ease: "projectToProjectAlpha",
    },
    0
  );
  tl.from(
    cont.querySelector(".project-hero-info .crew"),
    {
      opacity: 0,
      duration: 0.333,
      ease: "projectToProjectAlpha",
    },
    0.073
  );
  tl.from(
    cont.querySelector(".project-hero-info .date"),
    {
      opacity: 0,
      duration: 0.333,
      ease: "projectToProjectAlpha",
    },
    0.166
  );
  tl.from(
    cont.querySelector(".project-hero .image"),
    {
      y: toVW(Globals.mobile ? 43 : 100, Globals.mobile ? 375 : 1440),
      opacity: 0,
      rotation: 0,
      duration: 1.333,
      ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
    },
    0.073
  );
  tl.from(
    cont.querySelectorAll(".project-hero .number p"),
    {
      duration: 1.42,
      yPercent: 100,
      ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
    },
    0.073
  );
  tl.add(() => {
    Globals.heroSlash?.show();
  }, "<");
  tl.set(cont.querySelector(".project-hero canvas"), { opacity: 1 }, "<=0.333");
  tl.from(
    cont.querySelectorAll(".project-hero .title-container h2"),
    {
      duration: 1,
      yPercent: Globals.titleYPercent,
      ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
      stagger: 0.1,
    },
    0.073
  );
  tl.from(
    [cont.querySelectorAll(".project-hero .project-text-block"), "[data-show]"],
    {
      opacity: 0,
      stagger: 0.083,
      duration: 0.333,
      ease: "projectToProjectAlpha",
    },
    0.666
  );
  return tl.play();
}
