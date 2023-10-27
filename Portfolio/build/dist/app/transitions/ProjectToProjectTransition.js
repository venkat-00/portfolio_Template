import gsap from "../../../_snowpack/pkg/gsap.js";
import Globals from "../globals.js";
import { Flip } from "../../../_snowpack/pkg/gsap/Flip.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
import { delay, ONE_FRAME } from "../utils/Func.js";
import ProjectToProjectEnterMobile from "../animations/ProjectToProjectEnterMobile.js";
import ProjectSimpleLeave from "../animations/ProjectSimpleLeave.js";
gsap.registerPlugin(Flip, CustomEase);
let fake;
CustomEase.create("projectToProjectAlpha", "0.33, 0, 0.67, 1");
const ProjectToProjectTransition = {
  from: {
    namespace: ["project"],
  },
  to: {
    namespace: ["project"],
  },
  async leave(data) {
    if (Globals.nextProjectTransition && !Globals.isMobile) {
      gsap.set(data.current.container, { position: "fixed" });
      const projectNext = data.current.container.querySelector(".project-next");
      const image = data.current.container.querySelector(
        ".project-next .image"
      );
      gsap.to(projectNext.querySelectorAll("h2"), {
        yPercent: -Globals.titleYPercent,
        ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
        duration: 1,
        stagger: -0.1,
      });
      await delay(0.15);
      Globals.footerSlash?.hide(true);
      await delay(0.1);
      fake = document.createElement("div");
      fake.id = "faker-image";
      const fakeImage = document.createElement("img");
      fakeImage.src = image.querySelector("img").src;
      fake.appendChild(fakeImage);
      document.body.appendChild(fake);
      Flip.fit(fake, "#fake-img");
      const state = Flip.getState([fake, fakeImage]);
      gsap.set(fake, { autoAlpha: 0 });
      await delay();
      gsap.set(fake, { autoAlpha: 1 });
      Flip.fit(fake, image);
      const newAngle = gsap.getProperty(image.querySelector("img"), "rotation");
      gsap.set(fakeImage, { rotation: newAngle });
      Flip.to(state, {
        duration: 1,
        force3D: true,
        ease: CustomEase.create("custom", "0.54, 0.01, 0, 1"),
      });
      gsap.set(image, { autoAlpha: 0 });
      await gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.167,
        ease: "linear",
        delay: 0.35,
      });
      await delay(0.35);
    } else {
      await ProjectSimpleLeave(data.current.container);
      await delay(0.25);
    }
  },
  afterLeave(data) {
    if (Globals.isPhone) data.current.container.remove();
    else gsap.set(data.current.container, { position: "absolute" });
  },
  async enter(data) {
    if (Globals.nextProjectTransition && !Globals.isMobile) {
      const imageContainer = data.next.container.querySelector(
        ".project-hero .image .inner"
      );
      const state = Flip.getState(imageContainer);
      Flip.fit(imageContainer, fake);
      const tl = gsap.timeline({ paused: true });
      tl.set(
        data.next.container.querySelectorAll(".project-hero canvas"),
        { opacity: 1 },
        0.4
      );
      tl.from(
        data.next.container.querySelectorAll(".project-hero .number p"),
        {
          duration: 1.42,
          yPercent: 100,
          ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
        },
        0.2
      );
      tl.from(
        data.next.container.querySelectorAll(
          ".project-hero .title-container h2"
        ),
        {
          duration: 1,
          yPercent: Globals.titleYPercent,
          ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
          stagger: 0.1,
        },
        0.4
      );
      tl.add(() => {
        Globals.heroSlash?.show();
      }, "<");
      tl.add(
        Flip.to(state, {
          duration: 1.2,
          force3D: true,
          ease: CustomEase.create("custom", "0.54, 0.01, 0, 1"),
          onStart() {
            gsap.set(fake, { autoAlpha: 0, delay: ONE_FRAME });
          },
          onComplete() {
            gsap.set(imageContainer, { clearProps: "all" });
          },
        }),
        0
      );
      await tl.play();
    } else {
      await ProjectToProjectEnterMobile(data.next.container);
    }
  },
  afterEnter() {
    if (fake) fake.parentElement?.removeChild(fake);
    Globals.nextProjectTransition = false;
  },
};
export default ProjectToProjectTransition;
