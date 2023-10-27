import Globals from "../globals.js";
export default function StaticImage(el) {
  el.src = Globals.isPhone ? el.dataset.srcSmall ?? "" : el.dataset.src ?? "";
}
