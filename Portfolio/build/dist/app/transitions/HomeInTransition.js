import gsap from "../../../_snowpack/pkg/gsap.js";
import { PreloaderOut } from "../animations/index.js";
import Globals from "../globals.js";
import { showHeader } from "../animations/HeaderTransition.js";
const HomeInTransition = {
  to: {
    namespace: ["home"],
  },
  async once(data) {
    gsap.set(data.next.container, { opacity: 0 });
    PreloaderOut(0.1, 0, 0.35);
    gsap.set(data.next.container, {
      opacity: 1,
    });
    showHeader();
    await Globals.homeController?.transitionIn();
  },
};
export default HomeInTransition;
