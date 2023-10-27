/* eslint-disable no-useless-escape */
function isBase64(v) {
  const regex =
    /^(data:\w+\/[a-zA-Z\+\-\.]+;base64,)?([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/gi;
  return regex.test(v);
}

export default isBase64;
