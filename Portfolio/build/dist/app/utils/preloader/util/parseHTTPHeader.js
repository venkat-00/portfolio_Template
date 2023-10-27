/**
 * This function will take an HTTP header and turn it into an object for easier use.
 *
 * @method parseHTTPHeader
 * @param  {String} headerString This is an HTTP header
 * @return {Object} The return value will be an object representation of the HTTP Header
 */
function parseHTTPHeader(headerString) {
  const headerSplit = headerString.split("\n");
  const rVal = {};
  const regex = /([a-zA-Z0-9\-_]+): *(.+)/;
  let keyValue = null;

  for (let i = 0, len = headerSplit.length; i < len; i++) {
    // the end has an extra newline
    if (headerSplit[i] !== "") {
      keyValue = regex.exec(headerSplit[i]);

      if (keyValue) {
        rVal[keyValue[1]] = keyValue[2];
      }
    }
  }

  return rVal;
}

export default parseHTTPHeader;
