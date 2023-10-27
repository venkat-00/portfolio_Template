import Globals from "../../globals.js";
import { round, toVW } from "../../utils/MathUtils.js";
import gsap from "../../../../_snowpack/pkg/gsap.js";
export default class TextRenderer {
  constructor({ el, font, stroke, offsetY = 0.98 }) {
    this.render = () => {
      if (!this.ctx || !this.canvas) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillText(this.text, 0, this.offsettedY);
      if (this.stroke) {
        this.ctx.strokeText(this.text, 0, this.offsettedY);
      }
    };
    this.resize = (rect) => {
      this.rect = this.el.getBoundingClientRect();
      this.size.height = round(
        gsap.getProperty(this.el, "height") * Globals.pixelRatio
      );
      this.size.width = round(
        gsap.getProperty(this.el, "width") * Globals.pixelRatio
      );
      this.fontSize = round(
        Number(
          window.getComputedStyle(this.el, null).fontSize.replace("px", "")
        ) * Globals.pixelRatio
      );
      this.canvas.width = this.size.width;
      this.canvas.height = this.size.height;
      this.ctx.font = `${this.fontSize}px ${this.font}`;
      this.ctx.fillStyle = Globals.black;
      this.ctx.strokeStyle = Globals.white;
      this.ctx.lineWidth =
        (Globals.mobile ? toVW(0.6) : toVW(0.8)) * Globals.pixelRatio;
      this.textWidth = round(this.ctx.measureText(this.text).width);
      if (rect) {
        this.yOffset = round(rect.height * 0.97 * Globals.pixelRatio);
      }
      this.offsettedY = round(
        this.yOffset > 0 ? this.yOffset : this.size.height * this.heightOffset
      );
      this.render();
    };
    this.destroy = () => {
      this.ctx = void 0;
      this.canvas = void 0;
    };
    this.el = el;
    this.font = font;
    this.stroke = stroke;
    this.text = this.el.textContent.toUpperCase();
    this.size = { height: 0, width: 0 };
    this.fontSize = 0;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.textWidth = 0;
    this.yOffset = 0;
    this.heightOffset = offsetY;
    this.offsettedY = 0;
  }
}
