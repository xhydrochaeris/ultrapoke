const tooltip = document.getElementById("tooltip");
let lockedLabel = null;

document.addEventListener("mouseover", e => {
  const el = e.target.closest(".object, .region");
  if (!el) return;

  tooltip.textContent = el.dataset.name +
    (el.dataset.destination ? " → " + el.dataset.destination : "");

  tooltip.style.display = "block";
});

document.addEventListener("mousemove", e => {
  tooltip.style.left = e.pageX + 10 + "px";
  tooltip.style.top = e.pageY + 10 + "px";
});

document.addEventListener("mouseout", e => {
  if (!lockedLabel)
    tooltip.style.display = "none";
});

document.addEventListener("dblclick", e => {
  if (!e.target.classList.contains("door")) return;

  loadMap(e.target.dataset.destination);
});