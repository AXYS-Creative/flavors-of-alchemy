import { maxXxl, maxSm } from "../utility.js";

const root = document.documentElement;

let colorWhite = "#fafafa";
let colorPrimary = getComputedStyle(root).getPropertyValue(
  "--primary-accent-color"
);
let colorSecondary = getComputedStyle(root).getPropertyValue(
  "--secondary-accent-color"
);
window.onload = function () {
  Particles.init({
    selector: ".particles",
    maxParticles: maxXxl ? 24 : 48, // 100
    sizeVariations: 3, // 3
    speed: maxXxl ? 0.25 : 0.5, // 0.5
    color: colorSecondary,
    minDistance: maxSm ? 64 : 120, // 120, for connected lines
    connectParticles: true,
  });
};
