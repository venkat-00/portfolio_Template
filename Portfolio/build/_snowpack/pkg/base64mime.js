import {
  c as createCommonjsModule,
  a as commonjsGlobal,
} from "./common/_commonjsHelpers-eb5a497e.js";

var base64Mime = createCommonjsModule(function (module, exports) {
  (function () {
    function base64MimeType(encoded) {
      var result = null;

      if (typeof encoded !== "string") {
        return result;
      }

      var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

      if (mime && mime.length) {
        result = mime[1];
      }

      return result;
    }

    {
      if (module.exports) {
        exports = module.exports = base64MimeType;
      }
      exports.base64MimeType = base64MimeType;
    }
  }.call(commonjsGlobal));
});

export default base64Mime;
