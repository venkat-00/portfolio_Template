import { round, toVW } from "../../utils/MathUtils.js";
import gsap from "../../../../_snowpack/pkg/gsap.js";
import Globals from "../../globals.js";
const HEIGHT_OFFSET = 0.8;
const SlashRenderer = (mobile) => {
  const text = "/";
  const h2El = document.querySelector("#c-elements h2");
  const h2Canvas = document.createElement("canvas");
  const h2Ctx = h2Canvas.getContext("2d");
  let h2Width = 0;
  let h2Height = 0;
  const h4El = document.querySelector("#c-elements h4");
  const h4Canvas = document.createElement("canvas");
  const h4Ctx = h4Canvas.getContext("2d");
  let h4Width = 0;
  let h4Height = 0;
  let vWidth = 0;
  let vHeight = 0;
  const resizeCanvas = (canvas, el) => {
    const rect = el.getBoundingClientRect();
    canvas.width = round(rect.width * Globals.pixelRatio);
    canvas.height = round(rect.height * Globals.pixelRatio);
  };
  const renderText = (ctx, el, canvas) => {
    const rect = el.getBoundingClientRect();
    const fontSize = round(
      Number(window.getComputedStyle(el, null).fontSize.replace("px", "")) *
        Globals.pixelRatio
    );
    const lineHeight = round(
      Number(window.getComputedStyle(el, null).lineHeight.replace("px", "")) *
        Globals.pixelRatio *
        HEIGHT_OFFSET
    );
    ctx.fillStyle = Globals.black;
    ctx.strokeStyle = Globals.white;
    ctx.lineWidth = Globals.mobile
      ? toVW(0.2) * Globals.pixelRatio
      : toVW(0.4) * Globals.pixelRatio;
    ctx.font = `${fontSize}px ${Globals.antonia}`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(text, 0, lineHeight);
    ctx.strokeText(text, 0, lineHeight);
    return { width: rect.width, height: rect.height };
  };
  const onResize = () => {
    if (vWidth !== Globals.wWidth || vWidth !== Globals.wHeight) {
      vWidth = Globals.wWidth;
      vHeight = Globals.wHeight;
      resizeCanvas(h2Canvas, h2El);
      resizeCanvas(h4Canvas, h4El);
      const h2 = renderText(h2Ctx, h2El, h2Canvas);
      const h4 = renderText(h4Ctx, h4El, h4Canvas);
      h2Width = h2.width * Globals.pixelRatio;
      h2Height = h2.height * Globals.pixelRatio;
      h4Width = h4.width * Globals.pixelRatio;
      h4Height = h4.height * Globals.pixelRatio;
    }
  };
  gsap.ticker.add(onResize);
  return {
    h2: {
      canvas: h2Canvas,
      width: h2Width,
      height: h2Height,
    },
    h4: {
      canvas: h4Canvas,
      width: h4Width,
      height: h4Height,
    },
  };
};
export default SlashRenderer;
