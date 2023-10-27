import gsap from "../../../../_snowpack/pkg/gsap.js";
import { round } from "../../utils/MathUtils.js";
export default class SliderInfo {
  constructor({ element }) {
    this.active = false;
    this.enabled = false;
    this.render = (progress) => {
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
        this.animateActive(this.active);
      }
    };
    this.animateActive = (active, duration = 0.334) => {
      if (active) {
        gsap.to([this.topic, this.role], {
          opacity: 1,
          duration,
          stagger: 0.1,
          delay: 0.25,
          overwrite: true,
          ease: "sine.in",
        });
      } else {
        gsap.to([this.topic, this.role], {
          opacity: 0,
          duration,
          overwrite: true,
          stagger: 0,
          ease: "sine.in",
        });
      }
    };
    this.el = element;
    this.topic = this.el.querySelector(".h1");
    this.role = this.el.querySelector(".spaced");
    this.animateActive(false, 0);
  }
}
