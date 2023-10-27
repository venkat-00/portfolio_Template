import gsap from "../../../_snowpack/pkg/gsap.js";
import { HomeController } from "../controllers/index.js";
import Globals from "../globals.js";
function onClickAnchor(e) {
  const item = e.currentTarget;
  Globals.selectedProjectIndex = parseInt(item.dataset["index"] ?? "1");
}
const HomeView = {
  namespace: "home",
  beforeEnter(data) {
    Globals.homeController = new HomeController();
    gsap.utils
      .toArray(data.next.container.querySelectorAll("a"))
      .forEach((item) => {
        item.addEventListener("click", onClickAnchor);
      });
  },
  afterEnter() {
    gsap.set(document.body, { position: "fixed", overflow: "hidden" });
  },
  beforeLeave(data) {
    gsap.utils
      .toArray(data.next.container.querySelectorAll("a"))
      .forEach((item) => {
        item.removeEventListener("click", onClickAnchor);
      });
  },
  afterLeave() {
    gsap.set(document.body, { position: "relative", overflow: "auto" });
    Globals.homeController?.destroy();
    Globals.homeController = void 0;
  },
};
export default HomeView;
