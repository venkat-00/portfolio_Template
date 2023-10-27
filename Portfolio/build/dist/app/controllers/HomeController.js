import gsap from "../../../_snowpack/pkg/gsap.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
import NormalizedWheel from "../../../_snowpack/pkg/normalize-wheel.js";
import debounce from "../../../_snowpack/pkg/lodash.debounce.js";
import { lerp, round } from "../utils/MathUtils.js";
import Media from "../components/Media.js";
import CanvasRenderer from "../components/slider/CanvasRenderer.js";
import barba from "../../../_snowpack/pkg/@barba/core.js";
import Globals from "../globals.js";
gsap.registerPlugin(CustomEase);
const SLIDER_VALUES = {
  portrait: {
    endAngle: -11,
    middleAngle: 5,
    startAngle: 20,
    travelXStart: -20,
    travelXMiddle: 0,
    travelXEnd: 20,
    containerRotation: 6,
    rotationCenter: 0.5,
  },
  landscape: {
    endAngle: -8,
    middleAngle: 9.5,
    startAngle: 28,
    travelXStart: 0,
    travelXMiddle: 4,
    travelXEnd: 8,
    containerRotation: 2,
    rotationCenter: 1.5,
  },
};
export default class HomeController {
  constructor() {
    this.isDown = false;
    this.start = 0;
    this.hasEntered = false;
    this.clickable = true;
    this.itemIndex = 0;
    this.scrollEnabled = true;
    this.createMedias = () => {
      const images = gsap.utils.toArray(".home .image-markers .image");
      const titles = gsap.utils.toArray(".home .title-container .title");
      const subtitles = gsap.utils.toArray(".home .subtitle-container .title");
      const infos = gsap.utils.toArray(".home .infos-container .infos .info");
      const years = gsap.utils.toArray(".home .infos-container .year");
      this.medias = images.map((image, index) => {
        return new Media({
          image,
          index,
          length: images.length,
          title: titles[index],
          subtitle: subtitles[index],
          info: infos[index],
          year: years[index],
        });
      });
    };
    this.initListeners = () => {
      this.container.addEventListener("wheel", this.onWheel);
      window.addEventListener("keydown", this.onKeyDown);
      this.container.addEventListener("mousedown", this.onTouchDown);
      this.container.addEventListener("mousemove", this.onTouchMove);
      window.addEventListener("mouseup", this.onTouchUp);
      this.container.addEventListener("touchstart", this.onTouchDown);
      this.container.addEventListener("touchmove", this.onTouchMove);
      window.addEventListener("touchend", this.onTouchUp);
      this.mediaQuery.addEventListener("change", this.onMediaQueryHandler);
      this.orientationMediaQuery.addEventListener(
        "change",
        this.onOrientationChange
      );
      this.onMediaQueryHandler(this.mediaQuery);
      this.onOrientationChange(this.orientationMediaQuery);
      gsap.ticker.add(this.onRender);
      document
        .querySelectorAll(".home-image")
        .forEach((image) => image.addEventListener("click", this.onClickImage));
    };
    this.onClickImage = (e) => {
      if (!this.clickable) e.preventDefault();
      else {
        const el = e.currentTarget;
        Globals.selectedProjectIndex = parseInt(el.dataset["index"] ?? "1");
        const isCentered = el.dataset["centered"] === "true";
        let next = false;
        if (isCentered) {
          barba.go(el.href, el, e);
          return;
        }
        next = Math.sign(el.getBoundingClientRect().y) === 1;
        this.onNavigateTo(next);
        e.preventDefault();
      }
    };
    this.onTouchDown = (event) => {
      this.isDown = true;
      gsap.set(".home-container", { cursor: "grabbing" });
      this.scroll.position = this.scroll.current;
      this.start = event.touches ? event.touches[0].clientY : event.clientY;
    };
    this.onTouchMove = (event) => {
      if (!this.isDown) return;
      const y = event.touches ? event.touches[0].clientY : event.clientY;
      const distance = (this.start - y) * this.scroll.speedDrag;
      if (distance >= 15) this.clickable = false;
      this.scroll.target = this.scroll.position + distance;
    };
    this.onTouchUp = (event) => {
      this.isDown = false;
      setTimeout(() => (this.clickable = true), 100);
      gsap.set(".home-container", { cursor: "grab" });
      this.onCheckScroll();
    };
    this.onWheel = (event) => {
      const normalized = NormalizedWheel(event);
      const speed = normalized.pixelY;
      this.scroll.target += speed * this.scroll.speedWheel;
      gsap.killTweensOf(this.scroll);
      this.onCheckDebounce();
    };
    this.onCheckScroll = (duration = this.scroll.snapDuration) => {
      const { height } = this.medias[0].display;
      const itemIndex = round(Math.abs(this.scroll.target) / height);
      Globals.currentProjectIndex = itemIndex;
      const item = height * itemIndex;
      this.itemIndex = itemIndex;
      const target = this.scroll.target < 0 ? -item : item;
      if (duration === 0) {
        gsap.set(this.scroll, {
          target,
          current: target,
          currentEased: target,
        });
      } else {
        gsap.to(this.scroll, {
          superEase: 0.025,
          duration: duration * 0.25,
        });
        gsap.to(this.scroll, {
          superEase: 0.05,
          duration: duration * 0.5,
          delay: duration * 0.25,
          ease: this.scroll.snapEase,
        });
        gsap.to(this.scroll, { target, duration, ease: this.scroll.snapEase });
      }
    };
    this.onKeyDown = (e) => {
      if (e.code === "ArrowRight" || e.code === "ArrowUp") {
        this.onNavigateTo(true);
      } else if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
        this.onNavigateTo(false);
      }
    };
    this.onNavigateTo = (next) => {
      const { height } = this.medias[0].display;
      const direction = next ? 1 : -1;
      const target = height * direction;
      gsap.to(this.scroll, {
        target: this.scroll.target + target,
        duration: this.scroll.snapDuration * 0.75,
        ease: this.scroll.snapEase,
        onComplete: () => this.onCheckScroll(),
      });
    };
    this.onRender = () => {
      if (
        this.viewport.width !== Globals.wWidth ||
        this.viewport.height !== Globals.wHeight
      ) {
        this.onResize();
        this.onResizeDebounce();
      }
      if (this.scrollEnabled) {
        this.scroll.current = lerp(
          this.scroll.current,
          this.scroll.target,
          this.scroll.ease
        );
        this.scroll.currentEased = lerp(
          this.scroll.currentEased,
          this.scroll.target,
          this.scroll.superEase
        );
        if (this.scroll.current > this.scroll.last) {
          this.setDirection("up");
        } else {
          this.setDirection("down");
        }
        this.medias.forEach((media) =>
          media.render({
            scroll: this.scroll,
            direction: this.direction,
            viewport: this.viewport,
            image: this.imageData,
          })
        );
      }
      this.canvas.render(this.medias);
      this.scroll.last = this.scroll.current;
    };
    this.setDirection = (direction) => {
      if (this.direction !== direction) this.direction = direction;
    };
    this.onMediaQueryHandler = (target) => {
      this.viewport.mobile = !target.matches;
    };
    this.onOrientationChange = (target) => {
      this.viewport.orientation = target.matches ? "portrait" : "landscape";
      const values = SLIDER_VALUES[this.viewport.orientation];
      this.imageData.rotationCenter = values.rotationCenter;
      if (this.hasEntered) {
        this.imageData.startAngle = values.startAngle;
        this.imageData.middleAngle = values.middleAngle;
        this.imageData.endAngle = values.endAngle;
        this.imageData.travelXStart = values.travelXStart;
        this.imageData.travelXMiddle = values.travelXMiddle;
        this.imageData.travelXEnd = values.travelXEnd;
        this.imageData.rotation = values.containerRotation;
        gsap.set(".home .images-container", {
          rotation: values.containerRotation,
        });
      }
    };
    this.onResize = () => {
      this.viewport.width = Globals.wWidth;
      this.viewport.height = Globals.wHeight;
      this.viewport.aspectRatio = this.viewport.width / this.viewport.height;
      let imgMarkersWidth = 0;
      if (this.viewport.orientation === "portrait") {
        imgMarkersWidth = gsap.utils.mapRange(
          0.5633802817,
          0.7496339678,
          this.imageSizeData.portrait.sizeMin,
          this.imageSizeData.portrait.sizeMax,
          this.viewport.aspectRatio
        );
        this.viewport.peek = gsap.utils.mapRange(
          0.5633802817,
          0.7496339678,
          this.imageSizeData.portrait.peekMin,
          this.imageSizeData.portrait.peekMax,
          this.viewport.aspectRatio
        );
      } else {
        imgMarkersWidth = gsap.utils.mapRange(
          1.3333333333,
          1.7777777778,
          this.imageSizeData.landscape.sizeMin,
          this.imageSizeData.landscape.sizeMax,
          this.viewport.aspectRatio
        );
        this.viewport.peek = gsap.utils.mapRange(
          1.3333333333,
          1.7777777778,
          this.imageSizeData.landscape.peekMin,
          this.imageSizeData.landscape.peekMax,
          this.viewport.aspectRatio
        );
      }
      gsap.set(this.imageMarkers, {
        width: imgMarkersWidth * this.viewport.width,
      });
      this.canvas.resize(this.viewport);
      this.medias.forEach((media) =>
        media.resize(
          this.viewport,
          {
            titleRect: this.canvas.titleRect,
            subtitleRect: this.canvas.subtitleRect,
          },
          this.imageData,
          this.canvas.slash.width(),
          this.canvas.titlesDisplay,
          this.canvas.subtitlesDisplay
        )
      );
      this.onCheckScroll(0);
    };
    this.transitionIn = async () => {
      const values = SLIDER_VALUES[this.viewport.orientation];
      const tl = gsap.timeline({
        paused: true,
        id: "home in timeline",
        onComplete: () => {
          this.hasEntered = true;
        },
      });
      tl.from(
        ".home .images-container",
        {
          yPercent: 240,
          duration: 2.169,
          ease: CustomEase.create("custom", "0.36, 0, 0, 1"),
        },
        0
      );
      tl.to(
        this.imageData,
        {
          startAngle: values.startAngle * 0.5,
          middleAngle: values.middleAngle * 0.5,
          endAngle: values.endAngle * 0.5,
          duration: 2.169,
          ease: CustomEase.create("custom", "0.36, 0, 0, 1"),
          onUpdate: () => {
            this.medias.forEach((media) =>
              media.image.updateImageData(this.imageData)
            );
          },
        },
        "<"
      );
      tl.to(".home .images-container", {
        rotation: values.containerRotation,
        duration: 1.084,
        ease: CustomEase.create("custom", "0.64, 0, 0, 1"),
      });
      tl.to(
        this.imageData,
        {
          rotation: values.containerRotation,
          endAngle: values.endAngle,
          middleAngle: values.middleAngle,
          startAngle: values.startAngle,
          travelXStart: values.travelXStart,
          travelXMiddle: values.travelXMiddle,
          travelXEnd: values.travelXEnd,
          duration: 1.084,
          ease: CustomEase.create("custom", "0.64, 0, 0, 1"),
          onUpdate: () => {
            this.medias.forEach((media) =>
              media.image.updateImageData(this.imageData)
            );
          },
        },
        "<"
      );
      tl.to(
        this.canvas,
        {
          yPos: 0,
          ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
          duration: 1,
        },
        "<-0.1"
      );
      tl.to(
        this.canvas,
        {
          yPos2: 0,
          ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
          duration: 1,
        },
        "<+0.05"
      );
      tl.add(() => {
        this.medias[0].info.setActive(true);
        this.medias[0].year.setActive(true);
      }, "<+0.2");
      tl.add(() => {
        this.canvas.slash.show();
      }, "<-0.3");
      tl.add(() => {
        this.medias.forEach((media) => {
          media.info.enabled = true;
          media.year.enabled = true;
        });
      }, ">");
      return tl.play();
    };
    this.transitionOut = async () => {
      const tl = gsap.timeline({ paused: true });
      tl.to(
        this.canvas,
        {
          yPos: -1,
          ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
          duration: 1,
        },
        0
      );
      tl.to(
        this.canvas,
        {
          yPos2: -1,
          ease: CustomEase.create("custom", "0.75, 0, 0, 1"),
          duration: 1,
        },
        0.05
      );
      tl.add(() => {
        this.canvas.slash.hide(true);
      }, "<+0.2");
      return tl.play();
    };
    this.removeListeners = () => {
      this.container.removeEventListener("wheel", this.onWheel);
      window.removeEventListener("keydown", this.onKeyDown);
      this.container.removeEventListener("mousedown", this.onTouchDown);
      this.container.removeEventListener("mousemove", this.onTouchMove);
      window.removeEventListener("mouseup", this.onTouchUp);
      this.container.removeEventListener("touchstart", this.onTouchDown);
      this.container.removeEventListener("touchmove", this.onTouchMove);
      window.removeEventListener("touchend", this.onTouchUp);
      document
        .querySelectorAll(".home-image")
        .forEach((image) =>
          image.removeEventListener("click", this.onClickImage)
        );
      gsap.ticker.remove(this.onRender);
    };
    this.destroy = () => {
      this.removeListeners();
      this.medias.forEach((media) => media.destroy());
      this.canvas.destroy();
    };
    this.imageMarkers = document.querySelector(".image-markers");
    this.scroll = {
      position: 0,
      target: 0,
      current: 0,
      currentEased: 0,
      last: 0,
      ease: 0.05,
      superEase: 0.05,
      speedWheel: 1.1,
      speedDrag: Globals.isMobile ? 2 : 1.5,
      snapEase: "power2.inOut",
      snapDuration: 0.35,
    };
    this.imageData = {
      endAngle: 0,
      middleAngle: 0,
      startAngle: 0,
      travelXStart: 0,
      travelXMiddle: 0,
      travelXEnd: 0,
      rotation: 0,
      rotationCenter: 0,
    };
    this.imageSizeData = {
      portrait: {
        peekMin: 0.1794019934,
        peekMax: 0.1487455197,
        sizeMin: 0.696875,
        sizeMax: 0.547851625,
        rotationCenter: 0.5,
      },
      landscape: {
        peekMin: 0.1756198347,
        peekMax: 0.1286394918,
        sizeMin: 0.353515625,
        sizeMax: 0.281640625,
        rotationCenter: 1.5,
      },
    };
    this.viewport = {
      width: Globals.wWidth,
      height: Globals.wHeight,
      mobile: false,
      aspectRatio: 1.6,
      orientation: "landscape",
      peek: 0.11,
    };
    this.container = document.querySelector(".home-container");
    this.onCheckDebounce = debounce(this.onCheckScroll, 200);
    this.onResizeDebounce = debounce(this.onResize, 50);
    this.direction = "up";
    this.medias = [];
    this.canvas = new CanvasRenderer();
    this.mediaQuery = matchMedia("(min-width: 768px)");
    this.orientationMediaQuery = matchMedia("(orientation: portrait)");
    this.createMedias();
    this.initListeners();
    this.onResize();
  }
  stop() {
    gsap.ticker.remove(this.onRender);
  }
  stopScroll() {
    this.scrollEnabled = false;
  }
}
