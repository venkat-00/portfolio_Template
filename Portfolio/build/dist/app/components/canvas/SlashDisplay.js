import gsap from "../../../../_snowpack/pkg/gsap.js";
import { CustomEase } from "../../../../_snowpack/pkg/gsap/CustomEase.js";
import { round } from "../../utils/MathUtils.js";
gsap.registerPlugin(CustomEase);
const xScale = 0.65;
const yScale = 1;
const SlashDisplay = (slash, shown = false) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const containerPos = { x: 0, y: 0 };
  const pos = { x: -xScale, y: yScale };
  const setContainerPosition = (x, y) => {
    containerPos.x = round(x);
    containerPos.y = round(y);
  };
  const show = () => {
    gsap.to(pos, {
      x: 0,
      y: 0,
      ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
      duration: 0.8,
    });
  };
  const hide = (top) => {
    gsap.to(pos, {
      x: top ? xScale : -xScale,
      y: top ? -yScale : yScale,
      ease: top
        ? CustomEase.create("custom", "0.47, 0, 0.05, 1")
        : CustomEase.create("custom", "0.75, 0, 0, 1"),
      duration: 0.7,
    });
  };
  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      slash.canvas,
      round(pos.x * canvas.width),
      round(pos.y * canvas.height)
    );
  };
  const draw = (ctx2) => {
    ctx2.drawImage(
      canvas,
      containerPos.x,
      round(containerPos.y - slash.height * 0.05)
    );
  };
  const resize = () => {
    canvas.width = slash.canvas.width;
    canvas.height = slash.canvas.height;
  };
  if (shown) {
    pos.x = 0;
    pos.y = 0;
  }
  return {
    setContainerPosition,
    render,
    draw,
    resize,
    show,
    hide,
    height() {
      return canvas.height;
    },
    width() {
      return canvas.width;
    },
  };
};
export default SlashDisplay;
