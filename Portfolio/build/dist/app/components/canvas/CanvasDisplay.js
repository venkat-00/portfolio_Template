import Globals from "../../globals.js";
import { round } from "../../utils/MathUtils.js";
export default class CanvasDisplay {
  constructor(el, offsetY = 1) {
    this.render = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.offCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    this.draw = (ctx, y, pos) => {
      this.offCtx.drawImage(this.canvas, 0, round(y));
      if (!pos) {
        ctx.drawImage(this.offCanvas, this.position.x, this.position.y);
      } else {
        ctx.drawImage(this.offCanvas, pos.x, pos.y);
      }
    };
    this.resize = () => {
      this.rect = this.el.getBoundingClientRect();
      this.offCanvas.width = this.canvas.width = round(
        this.rect.width * Globals.pixelRatio
      );
      this.offCanvas.height = this.canvas.height = round(
        this.rect.height * this.offsetY * Globals.pixelRatio
      );
      this.position.x = round(this.rect.x * Globals.pixelRatio);
      this.position.y = round(this.rect.y * Globals.pixelRatio);
      this.render();
    };
    this.destroy = () => {};
    this.offsetY = offsetY;
    this.canvas = document.createElement("canvas");
    this.offCanvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.offCtx = this.offCanvas.getContext("2d");
    this.el = el;
    this.rect = this.el.getBoundingClientRect();
    this.position = { x: 0, y: 0 };
  }
}
