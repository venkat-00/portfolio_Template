import base64Mime from "../../../../../_snowpack/pkg/base64mime.js";
import getExtension from "./getExtension.js";
import isBase64 from "./isBase64.js";

const FILE_MIME = {
  // images
  gif: "image/gif",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml",
  // text
  html: "text/html",
  css: "text/css",
  csv: "text/csv",
  xml: "text/xml",
  // video
  mp4: "video/mp4",
  ogg: "video/ogg",
  ogv: "video/ogg",
  webm: "video/webm",
  // audio
  wav: "audio/wav",
  mp3: "audio/mpeg",
};

/**
 * This function will return a mime type based on a file extension or a url. For instance the file 'jpg' would return
 * 'image/jpeg'.
 *
 * @method getMimeFromURL
 * @param  {String} type File extension
 * @return {String} Mime type
 */
function getMimeFromURL(url) {
  let mime;

  if (isBase64(url)) {
    mime = base64Mime(url);
  } else {
    const ext = getExtension(url);
    mime = FILE_MIME[ext.toLowerCase()];
  }

  return mime || "application/octet-stream";
}

export default getMimeFromURL;
