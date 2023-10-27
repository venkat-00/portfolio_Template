import gsap from "../../../_snowpack/pkg/gsap.js";
import { ScrollTrigger } from "../../../_snowpack/pkg/gsap/ScrollTrigger.js";
import { toRadians } from "../utils/MathUtils.js";
import ProjectHeroTextLine from "./ProjectHeroTextLine.js";
import Globals from "../globals.js";
import SlashDisplay from "./canvas/SlashDisplay.js";
gsap.registerPlugin(ScrollTrigger);
export default function ProjectHero(el) {
  const viewport = { width: 0, height: 0 };
  const twoLines = el.dataset["twoLines"] !== "";
  const titleContainer = el.querySelector(".title-container");
  let titleY = titleContainer.offsetTop;
  let angle = 0;
  let radians = 0;
  let contRect = el.getBoundingClientRect();
  const image = el.querySelector(".image");
  const img = image.querySelector("img");
  const imageProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  };
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const textCanvas = document.createElement("canvas");
  const textCtx = textCanvas.getContext("2d");
  el.appendChild(canvas);
  const line1 = ProjectHeroTextLine({
    el: el.querySelector(".first"),
    pixelRatio: Globals.pixelRatio,
    trailing: !twoLines,
    secondLine: false,
  });
  const line2 = twoLines
    ? ProjectHeroTextLine({
        el: el.querySelector(".second"),
        pixelRatio: Globals.pixelRatio,
        trailing: twoLines,
        secondLine: true,
      })
    : void 0;
  const slash = SlashDisplay(Globals.slashRenderer.h2);
  Globals.heroSlash = slash;
  function resize(w, h) {
    viewport.width = w;
    viewport.height = h;
    contRect = el.getBoundingClientRect();
    const _w = contRect.width * Globals.pixelRatio;
    const _h = contRect.height * Globals.pixelRatio;
    textCanvas.width = canvas.width = _w;
    textCanvas.height = canvas.height = _h / 2;
    imageProps.x = image.offsetLeft;
    imageProps.y = image.offsetTop;
    imageProps.width = gsap.getProperty(img, "width");
    imageProps.height = gsap.getProperty(img, "height");
    titleY = titleContainer.offsetTop;
    slash.resize();
    if (Globals.mobile) {
      line1.resize();
      line2?.resize();
      const slashX = line2 ? line2.getXPos() : line1.getXPos();
      const offsetTop = line2 ? line2.offsetTop : line1.offsetTop;
      slash.setContainerPosition(
        slashX,
        (offsetTop + titleY) * Globals.pixelRatio
      );
    } else {
      line1.resize(0);
      line2?.resize(line2 ? slash.width() : 0);
      const slashX = line2 ? line2.getXPos() : line1.getXPos();
      const offsetTop = line2 ? line2.offsetTop : line1.offsetTop;
      if (line2) {
        slash.setContainerPosition(
          slashX - slash.width(),
          (offsetTop + titleY) * Globals.pixelRatio
        );
      } else {
        slash.setContainerPosition(
          slashX,
          (offsetTop + titleY) * Globals.pixelRatio
        );
      }
    }
  }
  function doRender() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    textCtx.clearRect(0, 0, canvas.width, canvas.height);
    line1.calculateY();
    line2?.calculateY();
    line1.render({
      ctx: textCtx,
      containerY: titleY,
    });
    line2?.render({
      ctx: textCtx,
      containerY: titleY,
    });
    slash.render();
    slash.draw(textCtx);
    ctx.drawImage(textCanvas, 0, 0);
    const imgX = imageProps.x * Globals.pixelRatio;
    const yOffset = gsap.getProperty(image, "y");
    const imgY = (yOffset + imageProps.y) * Globals.pixelRatio;
    const imgW = imageProps.width * Globals.pixelRatio;
    const imgH = imageProps.height * Globals.pixelRatio;
    ctx.save();
    ctx.save();
    ctx.fillStyle = Globals.white;
    ctx.beginPath();
    ctx.translate(imgX, imgY);
    ctx.translate(imgW * 0.5, imgH * 0.5);
    ctx.rotate(radians);
    ctx.translate(-imgW * 0.5, -imgH * 0.5);
    ctx.rect(0, 0, imgW, imgH);
    ctx.fill();
    ctx.restore();
    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(textCanvas, 0, 0);
    ctx.restore();
  }
  function onRender() {
    const w = Globals.wWidth;
    const h = Globals.wHeight;
    if (viewport.width !== w || viewport.height !== h) {
      resize(w, h);
    }
    const newAngle = gsap.getProperty(
      image.querySelector(".inner"),
      "rotation"
    );
    if (angle !== newAngle) {
      angle = newAngle;
      radians = toRadians(angle);
    }
    doRender();
  }
  const trigger = ScrollTrigger.create({
    trigger: el.querySelector(".project-title"),
    onToggle(self) {
      if (self.isActive) {
        gsap.ticker.add(onRender);
      } else {
        gsap.ticker.remove(onRender);
      }
    },
  });
  const scrollAnim = ScrollTrigger.create({
    animation: gsap.to(image.querySelector(".inner"), { rotation: -2 }),
    trigger: image,
    invalidateOnRefresh: true,
    start() {
      const y = el.offsetTop + image.offsetTop;
      return `top top+=${y}`;
    },
    scrub: true,
  });
  function destroy() {
    Globals.heroSlash = void 0;
    gsap.ticker.remove(onRender);
    trigger.kill();
    scrollAnim.kill();
  }
  resize(Globals.wWidth, Globals.wHeight);
  return {
    destroy,
  };
}
