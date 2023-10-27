import gsap from "../../../_snowpack/pkg/gsap.js";
import { PreloaderOut } from "../animations/index.js";
import ProjectToProjectEnterMobile from "../animations/ProjectToProjectEnterMobile.js";
import { showHeader } from "../animations/HeaderTransition.js";
const ProjectInTransition = {
  to: {
    namespace: "project",
  },
  async once(data) {
    gsap.set(data.next.container, { opacity: 0 });
    await PreloaderOut();
    gsap.set(data.next.container, { opacity: 1 });
    showHeader();
    await ProjectToProjectEnterMobile(data.next.container);
  },
};
export default ProjectInTransition;
