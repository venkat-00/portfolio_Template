import gsap from "../../../_snowpack/pkg/gsap.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
export default async function ProjectSimpleLeave(cont) {
  await gsap.to(cont, {
    opacity: 0,
    duration: 0.317,
    ease: CustomEase.create("custom", "0.33, 0, 0.67, 1"),
  });
}
