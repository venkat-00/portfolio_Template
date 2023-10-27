import gsap from "../../../../_snowpack/pkg/gsap.js";
import { round } from "../../utils/MathUtils.js";
export default class SliderYear {
  constructor({ element }) {
    this.active = false;
    this.height = 0;
    this.enabled = false;
    this.render = ({ progress }) => {
      if (!this.enabled) return;
      const rounded = round(progress * 100) / 100;
      if (rounded >= 0.485 && rounded <= 0.515) {
        this.setActive(true);
      } else {
        this.setActive(false);
      }
    };
    this.setActive = (value) => {
      if (value !== this.active) {
        this.active = value;
        if (this.active) {
          gsap.to(this.el, {
            opacity: 1,
            duration: 0.334,
            delay: 0.55,
            overwrite: true,
            ease: "sine.in",
          });
        } else {
          gsap.to(this.el, {
            opacity: 0,
            duration: 0.334,
            delay: 0,
            overwrite: true,
            ease: "sine.in",
          });
        }
      }
    };
    this.resize = () => {};
    this.el = element;
    gsap.set(this.el, { opacity: 0 });
  }
}
