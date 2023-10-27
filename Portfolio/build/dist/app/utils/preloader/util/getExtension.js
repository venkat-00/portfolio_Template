import base64Mime from "../../../../../_snowpack/pkg/base64mime.js";
import isBase64 from "./isBase64.js";

/**
 * Return the file extension based on the path passed in. If the file does not have an extension null will be passed back
 *
 * @method getExtension
 * @param {String} url URL we'd like a filextension from. This can be relative or absolute.
 * @return {String}
 */
function getExtension(url) {
  let ext;

  if (isBase64(url)) {
    const mime = base64Mime(url);
    ext = mime.split("/")[1];
  } else {
    ext = url.split(".").pop();
  }

  return ext || null;
}

export default getExtension;
