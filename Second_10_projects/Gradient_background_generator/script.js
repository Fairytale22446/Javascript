const $ = (q) => document.querySelector(q);
const $$ = (q) => Array.from(document.querySelectorAll(q));

const state = {
  type: "linear",
  angle: 135,
  stops: 3,
  colors: [],
};

const gradientCanvas = $("#gradientCanvas");
const chipInfo = $("#chipInfo");
const typeSel = $("#type");
const angleField = $("#angleField");
const angleInput = $("#angle");
const angleValue = $("#angleValue");
const stopsSel = $("#stops");
const colorStopsWrap = $("#colorStops");
const btnRandom = $("#btnRandom");
const btnApply = $("#btnApply");
const btnCopy = $("#btnCopy");
const cssOut = $("#cssOut");

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function toHex(n) {
  return n.toString(16).padStart(2, "0");
}

// pastel color generator
function randomHex() {
  const hue = randInt(0, 360);
  const saturation = randInt(55, 75); // medium saturation
  const lightness = randInt(70, 90); // high lightness = pastel
  return hslToHex(hue, saturation, lightness);
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    Math.round(
      255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1))))
    );
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

function buildGradient() {
  const { type, angle, colors } = state;
  const stops = colors
    .map((c, i) => `${c} ${Math.round((i / (colors.length - 1)) * 100)}%`)
    .join(", ");
  if (type === "linear") {
    return `linear-gradient(${angle}deg, ${stops})`;
  }
  return `radial-gradient(circle at center, ${stops})`;
}

function applyGradient() {
  const css = buildGradient();
  gradientCanvas.style.backgroundImage = css;
  cssOut.value = `/* Drop this on any element */\nbackground: ${css};`;
  chipInfo.textContent = `${state.type} • ${
    state.type === "linear" ? state.angle + "°" : "center"
  } • ${state.colors.length} colors`;
}

function renderColorInputs() {
  colorStopsWrap.innerHTML = "";
  state.colors.forEach((hex, idx) => {
    const div = document.createElement("div");
    div.className = "swatch";
    div.innerHTML = `
          <input type="color" value="${hex}" data-idx="${idx}" />
          <code>${hex.toUpperCase()}</code>
        `;
    colorStopsWrap.appendChild(div);
  });
}

function seedColors() {
  state.colors = Array.from({ length: state.stops }, () => randomHex());
}

function handleInputEvents() {
  typeSel.addEventListener("change", () => {
    state.type = typeSel.value;
    angleField.style.display = state.type === "linear" ? "block" : "none";
    applyGradient();
  });
  angleInput.addEventListener("input", () => {
    state.angle = Number(angleInput.value);
    angleValue.textContent = `${state.angle}°`;
    applyGradient();
  });
  stopsSel.addEventListener("change", () => {
    state.stops = Number(stopsSel.value);
    seedColors();
    renderColorInputs();
    applyGradient();
  });
  colorStopsWrap.addEventListener("input", (e) => {
    const t = e.target;
    if (t.matches('input[type="color"]')) {
      const i = Number(t.dataset.idx);
      state.colors[i] = t.value;
      t.nextElementSibling.textContent = t.value.toUpperCase();
      applyGradient();
    }
  });
  btnRandom.addEventListener("click", () => {
    seedColors();
    renderColorInputs();
    applyGradient();
  });
  btnApply.addEventListener("click", applyGradient);
  btnCopy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(cssOut.value);
      const original = btnCopy.textContent;
      btnCopy.textContent = "Copied!";
      setTimeout(() => (btnCopy.textContent = original), 1100);
    } catch (err) {
      alert("Copy failed. Select the text and copy manually.");
    }
  });
}

function init() {
  seedColors();
  renderColorInputs();
  handleInputEvents();
  applyGradient();
}

init();
