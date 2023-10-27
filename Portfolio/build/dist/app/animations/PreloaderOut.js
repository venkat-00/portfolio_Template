import gsap from "../../../_snowpack/pkg/gsap.js";
export default async function PreloaderOut(
  duration = 0.334,
  stagger = 0.167,
  delay = 0
) {
  return gsap.to(
    ["#preloader .progress-container", "#preloader p", "#preloader h1"],
    {
      opacity: 0,
      duration,
      stagger,
      delay,
      ease: "linear",
      onComplete() {
        gsap.set("#preloader", { autoAlpha: 0 });
      },
    }
  );
}
