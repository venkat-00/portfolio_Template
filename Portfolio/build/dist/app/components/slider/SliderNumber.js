import Globals from "../../globals.js";
import TextRenderer from "../canvas/TextRenderer.js";
import CanvasDisplay from "../canvas/CanvasDisplay.js";
import gsap from "../../../../_snowpack/pkg/gsap.js";
export class SliderNumber {
  constructor({ element, index, length, sub }) {
    this.draw = (ctx, y, pos) => {
      this.display.render();
      this.display.ctx.drawImage(this.textRenderer.canvas, 0, this.position.y);
      this.display.draw(ctx, this.display.canvas.height * y, {
        x: pos.x - this.display.canvas.width - this.spacing,
        y: pos.y,
      });
    };
    this.render = ({ progress, easedProgress }) => {
      this.position.y = this.getY(this.sub ? easedProgress : progress);
    };
    this.resize = () => {
      this.display.resize();
      this.textRenderer.resize();
      const speedOffset = Globals.isPhone ? 1.65 : 2;
      this.getY = gsap.utils.pipe(
        gsap.utils.mapRange(
          0,
          1,
          -this.display.canvas.height * speedOffset,
          this.display.canvas.height * speedOffset
        )
      );
      this.spacing = (24 / 1440) * Globals.wWidth * Globals.pixelRatio;
    };
    this.destroy = () => {
      this.display.destroy();
      this.textRenderer.destroy();
    };
    this.el = element;
    this.index = index;
    this.length = length;
    this.sub = sub;
    this.position = {
      baseX: 0,
      baseY: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    this.textRenderer = new TextRenderer({
      el: this.el,
      stroke: false,
      font: Globals.clarika,
      offsetY: 0.55,
    });
    this.display = new CanvasDisplay(this.el, 0.6);
    this.getY = gsap.utils.pipe(gsap.utils.mapRange(0, 1, -0, 0));
    this.spacing = 0;
  }
}
