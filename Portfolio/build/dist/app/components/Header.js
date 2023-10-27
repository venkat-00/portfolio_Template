import ContactButton from "./ContactButton.js";
import Globals from "../globals.js";
import Anchor from "./Anchor.js";
export default function Header() {
  let contactOpened = false;
  const el = document.querySelector("header");
  const homeBtn = el.querySelector("a");
  ContactButton();
  if (!Globals.isMobile) {
    Anchor(homeBtn);
  }
  function onClickHome(e) {
    if (contactOpened) {
      document.dispatchEvent(new CustomEvent("about"));
      e.preventDefault();
      return;
    }
    if (window.location.pathname === "/") {
      e.preventDefault();
    }
  }
  function statusChange(e) {
    contactOpened = e.detail;
  }
  homeBtn.addEventListener("click", onClickHome);
  document.addEventListener("aboutstatuschange", statusChange);
}
