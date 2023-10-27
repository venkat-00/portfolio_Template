import gsap from "../../../_snowpack/pkg/gsap.js";
import { Flip } from "../../../_snowpack/pkg/gsap/Flip.js";
import Globals from "../globals.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
import { delay } from "../utils/Func.js";
import ProjectToProjectEnterMobile from "../animations/ProjectToProjectEnterMobile.js";
gsap.registerPlugin(Flip);
let fakeImageContainer;
CustomEase.create("nextProjectsOut", "0.94, 0, 0.73, 1");
const HomeToProjectTransition = {
  from: {
    namespace: ["home"],
  },
  to: {
    namespace: ["project"],
  },
  async leave(data) {
    const currentProject = Globals.selectedProjectIndex;
    const centeredProject =
      (Globals.currentProjectIndex % Globals.numOfProjects) + 1;
    const nextProject =
      currentProject < Globals.numOfProjects ? currentProject + 1 : 1;
    const prevProject =
      currentProject > 1 ? currentProject - 1 : Globals.numOfProjects;
    if (!Globals.isMobile) {
      Globals.homeController?.transitionOut();
      Globals.homeController?.stopScroll();
      fakeImageContainer = document.body.querySelector(
        `[data-image-index="${currentProject}"]`
      );
      const image = fakeImageContainer.querySelector("img");
      const imageX = fakeImageContainer.querySelector(".home-image");
      const state = Flip.getState([fakeImageContainer, image, imageX]);
      Flip.fit(fakeImageContainer, "#fake-img");
      gsap.to(`[data-image-index="${nextProject}"]`, {
        y: "+=400",
        duration: 0.32,
        ease: "nextProjectsOut",
        delay: 0.3,
      });
      gsap.to(`[data-image-index="${prevProject}"]`, {
        y: "-=400",
        duration: 0.32,
        ease: "nextProjectsOut",
        delay: 0.3,
      });
      gsap.set(fakeImageContainer, { transformOrigin: "center center" });
      gsap.set(image, { rotation: 0 });
      gsap.set(imageX, { x: 0 });
      await Flip.from(state, {
        duration: 1.2,
        ease: CustomEase.create("custom", "0.54, 0, 0, 1"),
        delay: 0.3,
        onComplete: () => {
          Globals.homeController?.stop();
          gsap.set(data.current.container.querySelector(".infos-container"), {
            opacity: 0,
          });
        },
      });
    } else {
      Globals.homeController?.transitionOut();
      Globals.homeController?.stopScroll();
      const tl = gsap.timeline({
        paused: true,
        delay: 0.1,
        onComplete: () => {
          Globals.homeController?.stop();
        },
      });
      tl.to(
        `[data-image-index="${nextProject}"]`,
        {
          y: "+=400",
          duration: 0.32,
          ease: "nextProjectsOut",
        },
        0
      );
      tl.to(
        `[data-image-index="${prevProject}"]`,
        {
          y: "-=400",
          duration: 0.32,
          ease: "nextProjectsOut",
        },
        0
      );
      tl.to(
        `[data-image-index="${currentProject}"]`,
        {
          opacity: 0,
          duration: 0.32,
          ease: "nextProjectsOut",
        },
        0
      );
      tl.to(
        [".infos-container"],
        {
          opacity: 0,
          duration: 0.32,
          ease: "nextProjectsOut",
        },
        "<-0.1"
      );
      await tl.play();
    }
  },
  async enter(data) {
    if (!Globals.isMobile) {
      const twoLines =
        data.next.container.querySelector("[data-two-lines]").dataset.twoLines
          .length > 0;
      const inDelay = twoLines ? 0.175 : 0.275;
      gsap.set(data.next.container, { autoAlpha: 0 });
      const imageContainer = data.next.container.querySelector(
        ".project-hero .image .inner"
      );
      const state = Flip.getState(imageContainer);
      Flip.fit(imageContainer, "#fake-img");
      await delay();
      gsap.set(data.next.container.querySelector(".project-hero canvas"), {
        opacity: 1,
      });
      gsap.from(
        data.next.container.querySelectorAll(".project-hero .number p"),
        {
          duration: 1.42,
          yPercent: 100,
          ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
          delay: inDelay,
        }
      );
      gsap.from(
        data.next.container.querySelectorAll(
          ".project-hero .title-container h2"
        ),
        {
          duration: 1,
          yPercent: Globals.titleYPercent,
          ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
          stagger: 0.1,
          delay: inDelay,
        }
      );
      gsap.delayedCall(inDelay, () => {
        Globals.heroSlash?.show();
      });
      await Flip.to(state, {
        duration: 1.2,
        ease: CustomEase.create("custom", "0.54, 0, 0, 1"),
        onStart() {
          gsap.set(fakeImageContainer, { autoAlpha: 0 });
          gsap.set(data.next.container, { autoAlpha: 1 });
        },
        onComplete() {
          gsap.set(imageContainer, { clearProps: "all" });
        },
      });
    } else {
      await ProjectToProjectEnterMobile(data.next.container);
    }
  },
};
export default HomeToProjectTransition;
