import gsap from "../../../_snowpack/pkg/gsap.js";
import { ScrollTrigger } from "../../../_snowpack/pkg/gsap/ScrollTrigger.js";
import Globals from "../globals.js";
gsap.registerPlugin(ScrollTrigger);
export default function ProjectWideParallax(el) {
  let loaded = false;
  const images = el.querySelectorAll("img");
  const horizontal = el.dataset.horizontal === "";
  const def = horizontal ? -50 : -40;
  const val = horizontal ? 5 : 5;
  let anim;
  if (horizontal) {
    anim = gsap.fromTo(
      images,
      {
        xPercent: (index) => (index % 2 === 0 ? def - val : def + val),
      },
      {
        ease: "linear",
        force3D: true,
        xPercent: (index) => (index % 2 === 0 ? def + val : def - val),
      }
    );
  } else {
    anim = gsap.fromTo(
      images,
      {
        yPercent: (index) => (index % 2 === 0 ? def - val : def + val),
      },
      {
        ease: "linear",
        force3D: true,
        yPercent: (index) => (index % 2 === 0 ? def + val : def - val),
      }
    );
  }
  const scroll = ScrollTrigger.create({
    trigger: el.querySelector(".inner"),
    animation: anim,
    scrub: true,
  });
  const panim = gsap.fromTo(
    el.querySelector(".project-parallax-container"),
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
  const scroll2 = ScrollTrigger.create({
    trigger: el,
    scrub: true,
    animation: panim,
  });
  function loadImages() {
    if (loaded) return;
    el.querySelectorAll("img").forEach((image) => {
      gsap.set(image, { alpha: 0 });
      image.onload = () => {
        image.onload = null;
        gsap.to(image, { duration: 0.45, alpha: 1, ease: "imageAlpha" });
        gsap.set([image.parentElement, image], {
          backgroundColor: "transparent",
        });
      };
      image.src = Globals.isPhone
        ? image.dataset.srcSmall ?? ""
        : image.dataset.src ?? "";
    });
    loaded = true;
  }
  const preload = ScrollTrigger.create({
    trigger: el,
    start: "-65% bottom",
    onEnter: loadImages,
    onEnterBack: loadImages,
  });
  function destroy() {
    scroll.kill();
    scroll2.kill();
    anim.kill();
    preload.kill();
  }
  return { destroy };
}
