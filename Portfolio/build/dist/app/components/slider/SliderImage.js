import gsap from "../../../../_snowpack/pkg/gsap.js";
import { round, toRadians } from "../../utils/MathUtils.js";
import Globals from "../../globals.js";
export default class SliderImage {
  constructor({ element, index, length }) {
    this.height = 0;
    this.width = 0;
    this.yOffset = 0;
    this.heightTotal = 0;
    this.baseX = 0;
    this.centerY = 0;
    this.rotation = 0;
    this.halfWidth = 0;
    this.halfHeight = 0;
    this.centered = false;
    this.topBound = 0;
    this.bottomBound = 0;
    this.render = ({ progress, image }) => {
      this.centerY = image.rotationCenter;
      this.rotation = image.rotation;
      const normalizedClamped = this.normalizer(progress);
      this.position.x = this.getX(normalizedClamped);
      this.position.y = this.getY(normalizedClamped);
      this.position.rotation = this.getRotation(normalizedClamped);
      this.xSetter(this.position.x);
      this.ySetter(this.position.y);
      const y = this.position.y + this.height / 2;
      const centered = y > this.topBound && y < this.bottomBound;
      if (this.centered !== centered) this.setCentered(centered);
      this.rotationSetter(this.position.rotation);
    };
    this.draw = (ctx) => {
      const x = (this.baseX + this.position.x) * Globals.pixelRatio;
      const y = this.position.y * Globals.pixelRatio;
      ctx.save();
      const cx = round(Globals.wWidth * 0.5) * Globals.pixelRatio;
      const cy = round(Globals.wHeight * this.centerY) * Globals.pixelRatio;
      ctx.translate(cx, cy);
      ctx.rotate(toRadians(this.rotation));
      ctx.translate(-cx, -cy);
      ctx.translate(
        x + this.halfWidth * Globals.pixelRatio,
        y + this.halfHeight * Globals.pixelRatio
      );
      ctx.rotate(toRadians(this.position.rotation));
      ctx.translate(
        -this.halfWidth * Globals.pixelRatio,
        -this.halfHeight * Globals.pixelRatio
      );
      ctx.rect(
        0,
        0,
        this.width * Globals.pixelRatio,
        this.height * Globals.pixelRatio
      );
      ctx.restore();
    };
    this.setCentered = (value) => {
      this.centered = value;
      this.anchor.dataset["centered"] = `${value}`;
    };
    this.resize = (viewport, image) => {
      const xOffset = Globals.wWidth * 0.044 * 2;
      this.height = gsap.getProperty(this.el, "height");
      this.width = gsap.getProperty(this.el, "width");
      this.halfWidth = this.width / 2;
      this.halfHeight = this.height / 2;
      this.yOffset = Globals.wHeight / 2 - this.height / 2;
      this.y = this.yOffset + this.height * this.index;
      this.heightTotal = this.height * this.length;
      this.getRotation = gsap.utils.interpolate([-3, 10]);
      this.getX = gsap.utils.pipe(gsap.utils.interpolate([xOffset, -xOffset]));
      const center = Globals.wHeight / 2 - this.height / 2;
      const top = -this.height + this.height * viewport.peek;
      const bottom = Globals.wHeight - this.height * viewport.peek;
      const distance = bottom - center;
      this.getY = gsap.utils.pipe(
        gsap.utils.interpolate([
          top - distance,
          top,
          center,
          bottom,
          bottom + distance,
        ])
      );
      this.topBound = Globals.wHeight * 0.3;
      this.bottomBound = Globals.wHeight * 0.7;
      this.updateImageData(image);
      this.baseX = document.querySelector(".image-markers").offsetLeft;
    };
    this.updateImageData = (image) => {
      const xOffsetStart = Globals.wWidth * (image.travelXStart / 100) * 2;
      const xOffsetCenter = Globals.wWidth * (image.travelXMiddle / 100) * 2;
      const xOffsetEnd = Globals.wWidth * (image.travelXEnd / 100) * 2;
      this.getX = gsap.utils.interpolate([
        xOffsetEnd,
        xOffsetCenter,
        xOffsetStart,
      ]);
      this.getRotation = gsap.utils.interpolate([
        image.endAngle,
        image.middleAngle,
        image.startAngle,
      ]);
    };
    this.destroy = () => {};
    this.el = element;
    this.index = index;
    this.length = length;
    this.extra = 0;
    this.y = 0;
    this.position = {
      x: 0,
      y: 0,
      rotation: 0,
    };
    this.img = this.el.querySelector("img");
    this.anchor = this.el.querySelector("a");
    const imgSrc = Globals.isMobile
      ? this.img.dataset.srcSmall ?? ""
      : this.img.dataset.src ?? "";
    this.img.src = Globals.preloader.get(imgSrc).src;
    this.ySetter = gsap.quickSetter(this.el, "y", "px");
    this.xSetter = gsap.quickSetter(
      this.el.querySelector(".home-image"),
      "x",
      "px"
    );
    this.rotationSetter = gsap.quickSetter(this.img, "rotation", "deg");
    gsap.set(this.img, { transformOrigin: "center center" });
    this.normalizer = gsap.utils.pipe(
      gsap.utils.mapRange(-0.5, 1.5, 0, 1),
      gsap.utils.clamp(0, 1)
    );
    this.getRotation = gsap.utils.interpolate([-3, 10]);
    this.getX = gsap.utils.pipe(gsap.utils.interpolate([0, 0]));
    this.getY = gsap.utils.pipe(gsap.utils.interpolate([0, 0]));
  }
}
