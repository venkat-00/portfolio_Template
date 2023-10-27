import gsap from "../../../_snowpack/pkg/gsap.js";
import SliderImage from "./slider/SliderImage.js";
import SliderTitle from "./slider/SliderTitle.js";
import SliderInfo from "./slider/SliderInfo.js";
import SliderYear from "./slider/SliderYear.js";
import Globals from "../globals.js";
import { SliderNumber } from "./slider/SliderNumber.js";
export default class Media {
  constructor({ image, title, subtitle, info, year, index, length }) {
    this.selected = false;
    this.isAbove = false;
    this.isBelow = false;
    this.topEdge = 0;
    this.botomEdge = 0;
    this.render = ({ scroll, direction, image }) => {
      const y = this.display.y - scroll.current - this.display.extra;
      const yEased = this.display.y - scroll.currentEased - this.display.extra;
      const progress = this.normalizeProgress(y);
      const easedProgress = this.normalizeProgress(yEased);
      this.isAbove = y + this.display.height < this.topEdge;
      this.isBelow = y > this.botomEdge;
      if (direction === "up" && this.isAbove) {
        this.display.loop -= 1;
        this.display.extra -= this.display.heightTotal;
        this.isAbove = false;
        this.isBelow = false;
      }
      if (direction === "down" && this.isBelow) {
        this.display.loop += 1;
        this.display.extra += this.display.heightTotal;
        this.isBelow = false;
        this.isAbove = false;
      }
      const data = {
        image,
        progress,
        easedProgress,
      };
      this.image.render(data);
      this.title.render(data);
      this.subtitle.render(data);
      this.info.render(progress);
      this.year.render(data);
      this.number.render(data);
    };
    this.resize = (
      viewport,
      canvasData,
      image,
      slashWidth = 0,
      titleRenderer,
      subtitleRenderer
    ) => {
      this.display.width = Globals.wWidth;
      this.display.height = Globals.wHeight;
      this.display.y = this.display.height * this.index;
      this.display.heightTotal = this.display.height * this.length;
      this.display.extra = this.display.loop * this.display.heightTotal;
      this.normalizeProgress = gsap.utils.normalize(
        -this.display.height,
        this.display.height
      );
      this.topEdge = -Globals.wHeight - this.display.height / 2;
      this.botomEdge = Globals.wHeight + this.display.height / 2;
      this.image.resize(viewport, image);
      this.title.resize(viewport, canvasData, slashWidth, titleRenderer);
      this.subtitle.resize(viewport, canvasData, slashWidth, subtitleRenderer);
      this.number.resize();
      this.year.resize();
    };
    this.destroy = () => {
      this.image.destroy();
      this.title.destroy();
      this.subtitle.destroy();
      this.number.destroy();
    };
    this.index = index;
    this.length = length;
    this.display = {
      width: Globals.wWidth,
      height: Globals.wHeight,
      y: 0,
      extra: 0,
      loop: 0,
      heightTotal: 0,
    };
    this.image = new SliderImage({ element: image, index, length });
    this.title = new SliderTitle({ element: title, index, length });
    this.subtitle = new SliderTitle({
      element: subtitle,
      index,
      length,
      sub: true,
    });
    const firstLine = !!title.querySelector(".number");
    this.number = new SliderNumber({
      element:
        title.querySelector(".number") ?? subtitle.querySelector(".number"),
      length,
      index,
      sub: !firstLine,
    });
    this.info = new SliderInfo({ element: info });
    this.year = new SliderYear({ element: year });
    this.normalizeProgress = gsap.utils.normalize(
      -this.display.height,
      this.display.height
    );
  }
}
