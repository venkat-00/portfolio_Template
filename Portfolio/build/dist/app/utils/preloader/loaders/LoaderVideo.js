import LoaderBase from "./LoaderBase.js";

export default class LoaderVideo extends LoaderBase {
  constructor(options) {
    super(LoaderBase.typeVideo, options);
  }

  _parseContent() {
    super._parseContent();

    if (window.URL && window.URL.createObjectURL) {
      const blobURL = window.URL.createObjectURL(this.content);
      this.content = document.createElement(this.loadType);
      this.content.src = blobURL;
    } else {
      throw new Error("This browser does not support URL.createObjectURL()");
    }
  }
}
