import gsap from "../../../_snowpack/pkg/gsap.js";
export function showHeader() {
  gsap.to(document.querySelector("header"), {
    opacity: 1,
    duration: 0.4,
    ease: "none",
  });
}
