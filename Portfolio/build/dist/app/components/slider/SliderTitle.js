import gsap from "../../../../_snowpack/pkg/gsap.js";
import Globals from "../../globals.js";
import TextRenderer from "../canvas/TextRenderer.js";
export default class SliderTitle {
  constructor({ element, index, length, sub = false }) {
    this.height = 0;
    this.render = ({ progress, easedProgress }) => {
      this.position.y = this.getY(this.sub ? easedProgress : progress);
      this.ySetter(this.position.y);
    };
    this.draw = (renderer) => {
      if (this.textRenderer && this.viewport) {
        const y = this.position.y * Globals.pixelRatio;
        this.pos.y = renderer.position.y;
        renderer.ctx.drawImage(
          this.textRenderer.canvas,
          this.position.x + this.position.baseX,
          y
        );
      }
    };
    this.resize = (viewport, canvasData, slashWidth = 0, renderer) => {
      this.height = gsap.getProperty(this.el, "height");
      this.viewport = viewport;
      this.getY = gsap.utils.mapRange(
        0,
        1,
        -this.height * 1.1,
        this.height * 1.1
      );
      if (this.sub) this.position.baseX = -slashWidth;
      if (this.textRenderer) {
        this.textRenderer.resize(
          this.sub ? canvasData.subtitleRect : canvasData.titleRect
        );
        let x = renderer.canvas.width - this.textRenderer.textWidth;
        if (!this.viewport.mobile) {
          x = this.sub
            ? renderer.canvas.width - this.textRenderer.textWidth
            : renderer.canvas.width / 2 - this.textRenderer.textWidth / 2;
        }
        this.position.x = x;
        this.pos.x =
          renderer.position.x + this.position.x + this.position.baseX;
      }
    };
    this.destroy = () => {};
    this.el = element;
    this.sub = sub;
    this.text = this.el.dataset.title.toUpperCase();
    this.number = this.el.dataset["number"];
    this.index = index;
    this.length = length;
    this.ySetter = gsap.quickSetter(this.el, "y", "px");
    this.position = {
      baseX: 0,
      baseY: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.numberPos = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      spacing: 0,
    };
    this.pos = { x: 0, y: 0 };
    this.getY = gsap.utils.pipe(
      gsap.utils.mapRange(0, 1, -this.height, this.height)
    );
    const h4 = this.el.querySelector("h4");
    if (h4) {
      this.textRenderer = new TextRenderer({
        el: h4,
        font: Globals.antonia,
        stroke: true,
      });
    }
  }
}
