import LoaderBase from "./LoaderBase.js";

export default class LoaderText extends LoaderBase {
  constructor(options) {
    super(LoaderBase.typeText, options);
  }
}
