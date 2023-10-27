import Globals from "../globals.js";
const PI_RADIANS = Math.PI / 180;
export function round(value) {
  return ~~(0.5 + value);
}
export function map(num, min1, max1, min2, max2, rounded = false) {
  const num1 = (num - min1) / (max1 - min1);
  const num2 = num1 * (max2 - min2) + min2;
  if (rounded) return round(num2);
  return num2;
}
export function lerp(min, max, t) {
  return min * (1 - t) + max * t;
}
export function toRadians(angle) {
  return angle * PI_RADIANS;
}
export const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
export const invlerp = (x, y, a) => clamp((a - x) / (y - x));
export const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));
export function random(min, max) {
  return Math.random() * (max - min) + min;
}
export function toVW(value, ratio = 1440) {
  return (value / ratio) * Globals.wWidth;
}
