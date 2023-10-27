import gsap from "../../../_snowpack/pkg/gsap.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
import Globals from "../globals.js";
import ProjectSimpleLeave from "../animations/ProjectSimpleLeave.js";
gsap.registerPlugin(CustomEase);
const ProjectToHomeTransition = {
  from: {
    namespace: ["project"],
  },
  to: {
    namespace: ["home"],
  },
  async leave(data) {
    document.body.style.overflowY = "hidden";
    await ProjectSimpleLeave(data.current.container);
  },
  async enter(data) {
    await Globals.homeController?.transitionIn();
    document.body.style.overflowY = "auto";
  },
};
export default ProjectToHomeTransition;
