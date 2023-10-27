import gsap from "../../../_snowpack/pkg/gsap.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
import { SplitText } from "../../../_snowpack/pkg/gsap/SplitText.js";
import Globals from "../globals.js";
import Anchor from "./Anchor.js";
gsap.registerPlugin(CustomEase, SplitText);
export default function About() {
  CustomEase.create("about-1", "0.33, 0.39, 0.66, 1.09");
  CustomEase.create("about-2", "0.33, 0.01, 0.66, 1");
  CustomEase.create("about-3", "0.75, 0, 0, 1");
  let opened = false;
  const el = document.querySelector(".about");
  const barrier = el.querySelector(".barrier");
  const content = el.querySelector(".content");
  const title = el.querySelectorAll("h4");
  const lines = new SplitText(title);
  gsap.set(lines.lines, { yPercent: 105 });
  if (!Globals.isMobile) {
    el.querySelectorAll(".anchor").forEach((anchor) => {
      Anchor(anchor);
    });
  }
  function show() {
    gsap.set(el, { pointerEvents: "all" });
    gsap.set(el, { display: "block" });
    gsap.to(barrier ?? "", {
      duration: 0.584,
      alpha: 1,
      ease: "about-1",
      overwrite: true,
    });
    gsap.to(content ?? "", {
      duration: 0.584 * 1.75,
      "--bl": "92%",
      "--br": "100%",
      ease: CustomEase.create("custom", ".54,.02,0,1"),
      overwrite: true,
    });
    gsap.to(lines.lines, {
      duration: 0.834,
      stagger: 0.117,
      yPercent: 1,
      ease: "about-3",
      overwrite: true,
    });
  }
  function hide() {
    gsap.set(el, { pointerEvents: "none" });
    gsap.to(barrier ?? "", {
      duration: 0.584 * 1.5,
      alpha: 0,
      ease: "about-1",
      overwrite: true,
      onComplete: () => {
        gsap.set(el, { display: "none" });
      },
    });
    gsap.to(content ?? "", {
      duration: 0.584 * 1.5,
      overwrite: true,
      "--bl": "0",
      "--br": "0",
      ease: CustomEase.create("custom", ".54,.02,0,1"),
      onComplete: () => {
        gsap.set(lines.lines, { yPercent: 105 });
      },
    });
  }
  function onChangeHandler() {
    opened = !opened;
    document.dispatchEvent(
      new CustomEvent("aboutstatuschange", { detail: opened })
    );
    opened ? show() : hide();
  }
  document.addEventListener("about", onChangeHandler);
  barrier.addEventListener("click", onChangeHandler);
}
