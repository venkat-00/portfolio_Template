import Globals from "../globals.js";
import gsap from "../../../_snowpack/pkg/gsap.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
gsap.registerPlugin(CustomEase);
export default function Rotate() {
  const el = document.querySelector(".rotate");
  const phone = el.querySelector(".cellphone");
  const mediaQuery = window.matchMedia("(orientation: landscape)");
  let tl;
  function handleMediaQuery(query) {
    if (query.matches) {
      el.style.display = "block";
      tl?.play(0);
    } else {
      el.style.display = "none";
      tl?.pause();
    }
  }
  function buildAnimation() {
    const dur = 1.333 * 0.5;
    tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, paused: true });
    tl.from(
      phone,
      {
        y: "+=70vh",
        rotate: "-=265deg",
        ease: CustomEase.create("custom", "0.56, 0, 0.01, 0.98"),
        duration: dur,
      },
      0
    );
    tl.to(
      phone,
      {
        y: "-=70vh",
        rotate: "+=275deg",
        ease: CustomEase.create("custom", "0.83, 0, 0.37, 0.99"),
        duration: dur,
      },
      "+=0.667"
    );
  }
  if (Globals.isPhone) {
    buildAnimation();
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
  } else {
    el.parentNode?.removeChild(el);
  }
}
