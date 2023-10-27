import gsap from "../../../_snowpack/pkg/gsap.js";
import { ScrollTrigger } from "../../../_snowpack/pkg/gsap/ScrollTrigger.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
import Globals from "../globals.js";
gsap.registerPlugin(CustomEase, ScrollTrigger);
CustomEase.create("imageAlpha", "0.33, 0, 0.67, 1");
const LazyLoader = (container) => {
  const triggers = [];
  container
    .querySelectorAll("[data-lazy-load-video]")
    .forEach(function (video) {
      gsap.set(video, { alpha: 0 });
      let loaded = false;
      function loadVideo() {
        if (loaded) return;
        const source = video.querySelector("source");
        source.src = source.dataset["src"] ?? "";
        video.load();
        gsap.to(video, { duration: 0.45, alpha: 1, ease: "imageAlpha" });
        loaded = true;
      }
      triggers.push(
        ScrollTrigger.create({
          trigger: video,
          start: "-65% bottom",
          onEnter: loadVideo,
          onEnterBack: loadVideo,
        })
      );
    });
  container.querySelectorAll("[data-lazy-load]").forEach(function (image) {
    gsap.set(image, { alpha: 0 });
    let loaded = false;
    image.onload = () => {
      image.onload = null;
      gsap.to(image, { duration: 0.45, alpha: 1, ease: "imageAlpha" });
    };
    function loadImage() {
      if (loaded) return;
      image.src = Globals.isPhone
        ? image.dataset.srcSmall ?? ""
        : image.dataset.src ?? "";
      loaded = true;
    }
    triggers.push(
      ScrollTrigger.create({
        trigger: image,
        start: "-65% bottom",
        onEnter: loadImage,
        onEnterBack: loadImage,
      })
    );
  });
  return () => {
    triggers.forEach(function (trigger) {
      trigger.kill();
    });
  };
};
export default LazyLoader;
