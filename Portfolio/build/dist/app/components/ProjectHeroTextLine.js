import gsap from "../../../_snowpack/pkg/gsap.js";
import { toVW } from "../utils/MathUtils.js";
import Globals from "../globals.js";
const HEIGHT_OFFSET = 0.8;
export default function ProjectHeroTextLine({
  el,
  pixelRatio,
  trailing = false,
  secondLine,
  footer = false,
}) {
  const text = el.dataset["text"].toUpperCase();
  const textCanvas = document.createElement("canvas");
  const textCtx = textCanvas.getContext("2d");
  const targetCanvas = document.createElement("canvas");
  const targetCtx = targetCanvas.getContext("2d");
  let offsetTop = el.offsetTop;
  let textTopOffset = 0;
  const pos = { y: 0 };
  let rect = el.getBoundingClientRect();
  let fontSize =
    Number(window.getComputedStyle(el, null).fontSize.replace("px", "")) *
    pixelRatio;
  let lineHeight =
    Number(window.getComputedStyle(el, null).lineHeight.replace("px", "")) *
    pixelRatio *
    HEIGHT_OFFSET;
  let textWidth = 100;
  function renderText(padding = 0) {
    const w = textCtx.measureText(text).width;
    textWidth = w;
    let x;
    if (!footer) {
      x = Globals.mobile || !secondLine ? 0 : textCanvas.width - w;
    } else {
      x = textCanvas.width - w;
      textTopOffset = x;
    }
    x -= padding;
    textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
    textCtx.fillText(text, x, lineHeight);
    if (!Globals.mobile) textCtx.strokeText(text, x, lineHeight);
  }
  function calculateY() {
    pos.y =
      Number(gsap.getProperty(el, "yPercent", "px").replace("px", "")) *
      pixelRatio;
    renderToCtx();
  }
  function renderToCtx() {
    targetCtx.clearRect(0, 0, targetCanvas.width, targetCanvas.height);
    targetCtx.drawImage(textCanvas, 0, pos.y);
  }
  function render({ ctx, containerY }) {
    ctx.drawImage(
      targetCanvas,
      rect.x * pixelRatio,
      (containerY + offsetTop) * pixelRatio
    );
  }
  function resize(padding = 0) {
    offsetTop = el.offsetTop;
    rect = el.getBoundingClientRect();
    fontSize =
      Number(window.getComputedStyle(el, null).fontSize.replace("px", "")) *
      pixelRatio;
    lineHeight =
      Number(window.getComputedStyle(el, null).lineHeight.replace("px", "")) *
      pixelRatio *
      HEIGHT_OFFSET;
    targetCanvas.width = textCanvas.width = rect.width * pixelRatio;
    targetCanvas.height = textCanvas.height = rect.height * pixelRatio;
    textCtx.fillStyle = "black";
    textCtx.strokeStyle = "#fbfbfb";
    textCtx.miterLimit = 10;
    textCtx.lineJoin = "miter";
    textCtx.lineWidth = Globals.mobile ? 0 : toVW(0.85) * pixelRatio;
    textCtx.font = `${fontSize}px AntoniaH1-Light`;
    renderText(padding);
  }
  function show() {
    return gsap.from(pos, {
      y: fontSize,
      ease: "expo.inOut",
      duration: 2,
      delay: 1,
    });
  }
  function hide() {
    return gsap.to(pos, { y: -fontSize, ease: "expo.inOut", duration: 1 });
  }
  resize();
  return {
    render,
    calculateY,
    resize,
    hide,
    show,
    geTopOffsetX() {
      return textTopOffset;
    },
    getXPos() {
      if (secondLine) {
        if (Globals.mobile) {
          return rect.x * pixelRatio + textWidth;
        }
        return (rect.x + rect.width) * pixelRatio;
      }
      if (footer) {
        return (rect.x + rect.width) * pixelRatio;
      }
      return rect.x * pixelRatio + textWidth;
    },
    getYPos() {
      return pos.y;
    },
    fontSize,
    lineHeight,
    height: rect.height,
    offsetTop,
  };
}
