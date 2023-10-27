import gsap from "../../../_snowpack/pkg/gsap.js";
export const ONE_FRAME = 1 / 15;
export function noOp() {}
export async function delay(seconds = ONE_FRAME) {
  return gsap.delayedCall(seconds, noOp);
}
