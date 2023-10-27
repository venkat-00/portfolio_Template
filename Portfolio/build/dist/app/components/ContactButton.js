import gsap from "../../../_snowpack/pkg/gsap.js";
import Eases from "../data/eases.js";
import Globals from "../globals.js";
export default function ContactButton() {
  let contactOpened = false;
  const el = document.querySelector("#contact-btn");
  const active = el.querySelector(".active");
  const inactive = el.querySelector(".inactive");
  const activeFront = active.querySelector(".front");
  const activeBack = active.querySelector(".back");
  const inactiveFront = inactive.querySelector(".front");
  const inactiveBack = inactive.querySelector(".back");
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(
    [inactiveFront, activeFront],
    {
      yPercent: 0,
    },
    {
      duration: 0.584,
      yPercent: -100,
      overwrite: true,
      ease: Eases.AnchorText,
    },
    0
  );
  tl.fromTo(
    [inactiveBack, activeBack],
    {
      yPercent: 0,
    },
    {
      duration: 0.584,
      yPercent: -100,
      overwrite: true,
      ease: Eases.AnchorText,
    },
    0
  );
  function onMouseEnter() {
    if (!Globals.isMobile) tl.play();
  }
  function onMouseLeave() {
    if (!Globals.isMobile) tl.reverse();
  }
  function onClickContact() {
    document.dispatchEvent(new CustomEvent("about"));
  }
  function statusChange(e) {
    contactOpened = e.detail;
    const dur = 0.334;
    const del = 0.417;
    if (contactOpened) {
      gsap.to(inactive, {
        alpha: 0,
        duration: dur,
        ease: "linear",
        overwrite: true,
      });
      gsap.to(active, {
        alpha: 1,
        duration: dur,
        ease: "linear",
        overwrite: true,
        delay: del,
      });
    } else {
      gsap.to(inactive, {
        alpha: 1,
        duration: dur,
        ease: "linear",
        overwrite: true,
        delay: del,
      });
      gsap.to(active, {
        alpha: 0,
        duration: dur,
        ease: "linear",
        overwrite: true,
      });
    }
  }
  el.addEventListener("click", onClickContact);
  el.addEventListener("mouseenter", onMouseEnter);
  el.addEventListener("mouseleave", onMouseLeave);
  document.addEventListener("aboutstatuschange", statusChange);
}
