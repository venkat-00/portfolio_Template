import gsap from "../../../_snowpack/pkg/gsap.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
gsap.registerPlugin(CustomEase);
const Eases = {
  AnchorText: "anchor-text",
};
CustomEase.create(Eases.AnchorText, "0.75,0,0,1");
export default Eases;
