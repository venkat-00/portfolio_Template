import gsap from "../../../_snowpack/pkg/gsap.js";
import { ScrollTrigger } from "../../../_snowpack/pkg/gsap/ScrollTrigger.js";
import LazyLoader from "../utils/LazyLoader.js";
import { ImageReveal } from "../animations/index.js";
import {
  ProjectWideParallax,
  ProjectWidePicture,
  StaticImage,
} from "../components/index.js";
import Globals from "../globals.js";
import Anchor from "../components/Anchor.js";
import ScrollDrag from "../utils/ScrollDrag.js";
import ProjectNext from "../components/ProjectNext.js";
import ProjectHero from "../components/ProjectHero.js";
import ProjectMobilePictures from "../components/ProjectMobilePictures.js";
gsap.registerPlugin(ScrollTrigger);
const ProjectView = {
  namespace: "project",
  async beforeEnter(data) {
    this.lazyLoader = LazyLoader(data.next.container);
    this.images = [];
    this.parallaxes = [];
    this.widePictures = [];
    this.anchors = [];
    this.mobilePictures = [];
    if (!Globals.isMobile) {
      this.scrollDrag = ScrollDrag();
      data.next.container.querySelectorAll(".anchor").forEach((anchor) => {
        this.anchors?.push(Anchor(anchor));
      });
    }
    this.projectHero = ProjectHero(
      data.next.container.querySelector(".project-hero")
    );
    data.next.container.querySelectorAll("[data-img-reveal]").forEach((img) => {
      this.images?.push(ImageReveal(img));
    });
    data.next.container
      .querySelectorAll("[data-anim-parallax]")
      .forEach((container) => {
        this.parallaxes?.push(ProjectWideParallax(container));
      });
    data.next.container
      .querySelectorAll(".project-wide-picture")
      .forEach((element) => {
        this.widePictures?.push(ProjectWidePicture(element));
      });
    data.next.container
      .querySelectorAll("[data-static-image]")
      .forEach((el) => {
        StaticImage(el);
      });
    data.next.container
      .querySelectorAll(".project-mobile-pictures")
      .forEach((el) => {
        this.mobilePictures?.push(ProjectMobilePictures(el));
      });
  },
  afterEnter(data) {
    this.projectNext = ProjectNext(
      data.next.container.querySelector(".project-next")
    );
  },
  beforeLeave() {
    this.scrollDrag?.destroy();
  },
  afterLeave() {
    this.lazyLoader?.();
    this.images?.forEach((img) => img());
    this.parallaxes?.forEach((parallax) => parallax.destroy());
    this.widePictures?.forEach((picture) => picture.destroy());
    this.anchors?.forEach((anchor) => anchor.destroy());
    this.mobilePictures?.forEach((picture) => picture.destroy());
    this.projectNext?.destroy();
    this.projectHero?.destroy();
  },
};
export default ProjectView;
