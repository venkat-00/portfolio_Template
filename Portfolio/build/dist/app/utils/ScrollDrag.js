export default function ScrollDrag() {
  const dragRatio = 1.5;
  let isDown = false;
  let start = 0;
  let position = 0;
  const onTouchDown = (event) => {
    isDown = true;
    position = document.documentElement.scrollTop || document.body.scrollTop;
    start = event.clientY;
  };
  const onTouchMove = (event) => {
    if (!isDown) return;
    const y = event.clientY;
    const distance = (start - y) * dragRatio;
    window.scrollTo({ top: position + distance });
  };
  const onTouchUp = () => {
    isDown = false;
  };
  window.addEventListener("mousedown", onTouchDown);
  window.addEventListener("mousemove", onTouchMove);
  window.addEventListener("mouseup", onTouchUp);
  function destroy() {
    window.removeEventListener("mousedown", onTouchDown);
    window.removeEventListener("mousemove", onTouchMove);
    window.removeEventListener("mouseup", onTouchUp);
  }
  return { destroy };
}
