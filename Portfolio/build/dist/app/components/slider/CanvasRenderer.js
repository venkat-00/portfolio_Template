import SlashDisplay from "../canvas/SlashDisplay.js";
import Globals from "../../globals.js";
import CanvasDisplay from "../canvas/CanvasDisplay.js";
import { round } from "../../utils/MathUtils.js";
export default class CanvasRenderer {
  constructor() {
    this.slash = SlashDisplay(Globals.slashRenderer.h4, false);
    this.yPos = 1;
    this.yPos2 = 1;
    this.render = (medias) => {
      this.renderMask(medias);
      this.titlesDisplay.render();
      this.subtitlesDisplay.render();
      this.slash.render();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.mainTextCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.mainMaskCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      const y = this.yPos * this.pixelRatio * this.slash.height();
      const y2 = this.yPos2 * this.pixelRatio * this.slash.height();
      medias.forEach((media) => {
        media.title.draw(this.titlesDisplay);
        media.subtitle.draw(this.subtitlesDisplay);
        media.number.draw(
          this.mainTextCtx,
          this.yPos,
          media.number.sub ? media.subtitle.pos : media.title.pos
        );
      });
      this.titlesDisplay.draw(this.mainTextCtx, y);
      this.subtitlesDisplay.draw(this.mainTextCtx, y2);
      this.slash.draw(this.mainTextCtx);
      this.ctx.drawImage(
        this.mainTextCanvas,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.mainMaskCtx.save();
      this.mainMaskCtx.drawImage(
        this.mainTextCanvas,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.mainMaskCtx.globalCompositeOperation = "source-in";
      this.mainMaskCtx.drawImage(
        this.maskCanvas,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.mainMaskCtx.restore();
      this.ctx.drawImage(
        this.mainMaskCanvas,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
    };
    this.renderMask = (medias) => {
      this.maskCtx.clearRect(
        0,
        0,
        this.maskCanvas.width,
        this.maskCanvas.height
      );
      this.maskCtx.fillStyle = "white";
      this.maskCtx.beginPath();
      medias.forEach((media) => media.image.draw(this.maskCtx));
      this.maskCtx.fill();
    };
    this.resize = (viewport) => {
      this.mainMaskCanvas.width =
        this.mainTextCanvas.width =
        this.canvas.width =
          round(viewport.width * this.pixelRatio);
      this.mainMaskCanvas.height =
        this.mainTextCanvas.height =
        this.canvas.height =
          round(viewport.height * this.pixelRatio);
      this.maskCanvas.width = viewport.width * this.pixelRatio;
      this.maskCanvas.height = viewport.height * this.pixelRatio;
      this.titleRect = this.titleContainer.getBoundingClientRect();
      this.subtitleRect = this.subtitleContainer.getBoundingClientRect();
      this.slash.resize();
      let x = round(
        (this.subtitleRect.x + this.subtitleRect.width) * this.pixelRatio
      );
      const y = round(
        this.subtitleRect.y * this.pixelRatio -
          this.slash.height() * (Globals.mobile ? 0.08 : 0.1)
      );
      x -= this.slash.width();
      this.slash.setContainerPosition(x, y);
      this.slash.resize();
      this.titlesDisplay.resize();
      this.subtitlesDisplay.resize();
    };
    this.destroy = () => {
      document.querySelector(".home").removeChild(this.canvas);
    };
    this.pixelRatio = Globals.pixelRatio;
    this.canvas = document.createElement("canvas");
    this.canvas.id = "canvasMask";
    document.querySelector(".home").appendChild(this.canvas);
    this.maskCanvas = document.createElement("canvas");
    this.mainTextCanvas = document.createElement("canvas");
    this.mainMaskCanvas = document.createElement("canvas");
    this.titleContainer = document.querySelector(".home .title-container");
    this.subtitleContainer = document.querySelector(
      ".home .subtitle-container"
    );
    this.htmlTitle = document.querySelector(".home .title-container .title h4");
    this.htmlTitleNumber = document.querySelector(
      ".home .title-container .title .number"
    );
    this.ctx = this.canvas.getContext("2d");
    this.maskCtx = this.maskCanvas.getContext("2d");
    this.mainTextCtx = this.mainTextCanvas.getContext("2d");
    this.mainMaskCtx = this.mainMaskCanvas.getContext("2d");
    this.titleRect = this.titleContainer.getBoundingClientRect();
    this.subtitleRect = this.subtitleContainer.getBoundingClientRect();
    this.titlesDisplay = new CanvasDisplay(this.titleContainer);
    this.subtitlesDisplay = new CanvasDisplay(this.subtitleContainer);
  }
}
