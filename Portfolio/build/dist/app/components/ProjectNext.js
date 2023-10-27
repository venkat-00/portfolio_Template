import Globals from "../globals.js";
import barba from "../../../_snowpack/pkg/@barba/core.js";
import gsap from "../../../_snowpack/pkg/gsap.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
import { lerp, toRadians, toVW } from "../utils/MathUtils.js";
import { ScrollTrigger } from "../../../_snowpack/pkg/gsap/ScrollTrigger.js";
import ProjectHeroTextLine from "./ProjectHeroTextLine.js";
import SlashDisplay from "./canvas/SlashDisplay.js";
gsap.registerPlugin(CustomEase);
export default function ProjectNext(el) {
  const url = el.dataset["url"] ?? "";
  const viewport = { width: 0, height: 0 };
  const twoLines = el.dataset["twoLines"] !== "";
  const anchor = el.querySelector(".title a");
  let contRect = el.getBoundingClientRect();
  let p = 0;
  let targetP = 0;
  const nextText = el.querySelector(".next p");
  const titleContainer = el.querySelector(".title");
  let titleY = titleContainer.offsetTop;
  let angle = 0;
  let radians = 0;
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
    footer: true,
  });
  const line2 = twoLines
    ? ProjectHeroTextLine({
        el: el.querySelector(".second"),
        pixelRatio: Globals.pixelRatio,
        trailing: twoLines,
        secondLine: true,
        footer: true,
      })
    : void 0;
  const slash = SlashDisplay(Globals.slashRenderer.h2, true);
  Globals.footerSlash = slash;
  let anim;
  buildAnim();
  function buildAnim() {
    if (anim) anim.kill();
    gsap.set([image, img], { clearProps: "all" });
    anim = gsap.timeline({ paused: true });
    anim.to(
      image,
      {
        y: -toVW(twoLines ? 25 : 25),
        ease: "linear",
        duration: 1,
      },
      0
    );
    anim.to(
      img,
      {
        rotation: 0,
        ease: "linear",
        duration: 1,
      },
      0
    );
  }
  function onMouseMove(e) {
    if (!trigger.isActive) return;
    contRect = el.getBoundingClientRect();
    const y = e.clientY - (contRect.top - toVW(100));
    targetP = gsap.utils.clamp(0, 1, y / (contRect.height / 2));
  }
  function onRender() {
    if (
      Globals.wWidth !== viewport.width ||
      Globals.wHeight !== viewport.height
    ) {
      resize();
    }
    const newAngle = gsap.getProperty(img, "rotation");
    if (angle !== newAngle) {
      angle = newAngle;
      radians = toRadians(angle);
    }
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
    ctx.fillStyle = "#fbfbfb";
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
    if (!Globals.isMobile) animateHover();
  }
  function resize() {
    viewport.width = Globals.wWidth;
    viewport.height = Globals.wHeight;
    contRect = el.getBoundingClientRect();
    const _w = contRect.width * Globals.pixelRatio;
    const _h = contRect.height * Globals.pixelRatio;
    textCanvas.width = canvas.width = _w;
    textCanvas.height = canvas.height = _h * 0.75;
    imageProps.x = image.offsetLeft;
    imageProps.y = image.offsetTop;
    imageProps.width = gsap.getProperty(img, "width");
    imageProps.height = gsap.getProperty(img, "height");
    titleY = titleContainer.offsetTop;
    slash.resize();
    line1.resize(line2 ? 0 : slash.width());
    line2?.resize(line2 ? slash.width() : 0);
    let slashX = line2 ? line2.getXPos() : line1.getXPos();
    const offsetTop = line2 ? line2.offsetTop : line1.offsetTop;
    if (Globals.mobile) slashX = line1.getXPos();
    slash.setContainerPosition(
      slashX - slash.width(),
      (offsetTop + titleY) * Globals.pixelRatio
    );
    buildAnim();
    if (Globals.mobile) {
      gsap.set(nextText, { clearProps: "all" });
    } else {
      const x = twoLines
        ? line1.geTopOffsetX()
        : line1.geTopOffsetX() - slash.width();
      gsap.set(nextText, { x: x / Globals.pixelRatio });
    }
  }
  function animateHover() {
    p = lerp(p, targetP, 0.1);
    anim.progress(p);
  }
  function onClickNext(e) {
    window.addEventListener("mousemove", onMouseMove);
    Globals.nextProjectTransition = true;
    barba.go(url, anchor, e);
  }
  el.addEventListener("click", onClickNext);
  const trigger = ScrollTrigger.create({
    trigger: el,
    start: "-75% bottom",
    onToggle(self) {
      if (self.isActive) {
        gsap.ticker.add(onRender);
      } else {
        gsap.ticker.remove(onRender);
      }
    },
  });
  if (!Globals.isMobile) window.addEventListener("mousemove", onMouseMove);
  resize();
  function destroy() {
    anim.kill();
    trigger.kill();
    Globals.footerSlash = void 0;
    el.removeEventListener("click", onClickNext);
    window.addEventListener("mousemove", onMouseMove);
    gsap.ticker.remove(onRender);
  }
  return {
    destroy,
  };
}
