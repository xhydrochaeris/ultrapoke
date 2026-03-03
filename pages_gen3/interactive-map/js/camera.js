const camera = document.getElementById("camera");
const viewport = document.querySelector(".viewport");

let scale = 1;
let x = 0;
let y = 0;

function updateCamera() {
  camera.style.transform =
    `translate(${x}px, ${y}px) scale(${scale})`;
}

function centerCamera(mapWidth, mapHeight) {
  const viewportWidth = viewport.clientWidth;
  const viewportHeight = viewport.clientHeight;

  scale = 1;

  x = (viewportWidth - mapWidth) / 2;
  y = (viewportHeight - mapHeight) / 2;

  updateCamera();
  console.log(viewportWidth, viewportHeight, mapWidth, mapHeight);
}

viewport.addEventListener("wheel", e => {
  e.preventDefault();

  const rect = viewport.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const worldX = (mouseX - x) / scale;
  const worldY = (mouseY - y) / scale;

  const zoomFactor = 1 - e.deltaY * 0.001;
  const newScale = Math.min(Math.max(scale * zoomFactor, 0.5), 4);

  x = mouseX - worldX * newScale;
  y = mouseY - worldY * newScale;
  scale = newScale;

  updateCamera();
});

let dragging = false;
let lastX, lastY;

window.addEventListener("mousedown", e => {
  dragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

window.addEventListener("mouseup", () => dragging = false);

window.addEventListener("mousemove", e => {
  if (!dragging) return;
  x += e.clientX - lastX;
  y += e.clientY - lastY;
  lastX = e.clientX;
  lastY = e.clientY;
  updateCamera();
});