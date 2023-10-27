import LoaderBase from "./LoaderBase.js";

export default class LoaderJSON extends LoaderBase {
  constructor(options) {
    super(LoaderBase.typeJSON, options);
  }
}
