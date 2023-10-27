import preloader from "../utils/preloader/index.js";
import Globals from "../globals.js";
import gsap from "../../../_snowpack/pkg/gsap.js";
import { CustomEase } from "../../../_snowpack/pkg/gsap/CustomEase.js";
gsap.registerPlugin(CustomEase);
const min = 1998;
const max = new Date().getFullYear();
const difference = max - min;
export default function Preloader(onComplete) {
  CustomEase.create("preloader", ".37, 0, 0, 1");
  let changingDate = false;
  let date = min.toString();
  let prevDate = min.toString();
  let completed = false;
  let finished = false;
  const el = document.querySelector("#preloader");
  const main = document.querySelector("main");
  Globals.preloader = new preloader({ xhrImages: false, throttle: 0 });
  main.style.opacity = "0";
  const charsOne = gsap.utils.toArray(
    document.querySelector("#progress1").querySelectorAll(".char")
  );
  const charsTwo = gsap.utils.toArray(
    document.querySelector("#progress2").querySelectorAll(".char")
  );
  function handleDateChange() {
    const duration = 1;
    const currentDate = date;
    changingDate = true;
    const numbersOld = prevDate.split("");
    const numbersNew = date.split("");
    const changingValues = [];
    for (let i = 0; i < numbersOld.length; i++) {
      if (numbersOld[i] !== numbersNew[i]) {
        changingValues.push({
          change: true,
          from: numbersOld[i],
          to: numbersNew[i],
        });
      } else {
        changingValues.push({ change: false });
      }
    }
    if (completed) finished = true;
    const tl = gsap.timeline({ paused: true });
    for (const [index, value] of changingValues.entries()) {
      if (value.change) {
        charsTwo[index].innerText = value.to ?? "";
        const delay = 0.035 * index;
        tl.to(
          charsOne[index],
          {
            yPercent: -100,
            duration,
            delay,
            ease: "preloader",
          },
          0
        );
        tl.to(
          charsTwo[index],
          {
            yPercent: -100,
            duration,
            delay,
            ease: "preloader",
          },
          0
        );
      }
    }
    tl.play().then(() => handleDateChanged(currentDate));
  }
  function handleComplete() {
    el.style.zIndex = "0";
    main.style.opacity = "1";
    document.body.style.cursor = "auto";
    onComplete();
  }
  function handleDateChanged(date2) {
    prevDate = date2;
    changingDate = false;
    const chars = prevDate.toString().split("");
    for (const [i, char] of chars.entries()) {
      charsOne[i].innerText = char;
    }
    gsap.set([charsOne, charsTwo], { yPercent: 0 });
    if (!finished) {
      handleDateChange();
    } else handleComplete();
  }
  function preload() {
    gsap.to(
      [".preloader h1", ".preloader p", ".preloader .progress-container"],
      {
        opacity: 1,
        duration: 0.334,
        delay: 0.15,
        stagger: 0.1,
        ease: "sine.in",
        onComplete: () => {
          let yearProgress = min;
          const preloadElements = gsap.utils.toArray(
            el.querySelectorAll("[data-main-preload]")
          );
          Globals.numOfProjects = preloadElements.length;
          preloadElements.forEach((el2) => {
            Globals.preloader.add(
              Globals.isMobile
                ? el2.dataset.preloadMobile
                : el2.dataset.preloadUrl
            );
          });
          Globals.preloader.on("progress", (progress) => {
            const val = Math.floor(difference * progress);
            yearProgress = min + val;
            date = yearProgress.toString();
            if (!changingDate) handleDateChange();
          });
          Globals.preloader.on("complete", () => {
            completed = true;
            date = max.toString();
            if (!changingDate) handleDateChange();
          });
          Globals.preloader.load();
        },
      }
    );
  }
  preload();
}
