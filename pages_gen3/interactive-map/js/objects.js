const TILE = 16;

function loadObjects(objects) {
  const camera = document.getElementById("camera");

  objects.forEach(obj => {
    const el = document.createElement("div");
    el.className = "object";
    el.style.left = obj.tileX * TILE + "px";
    el.style.top = obj.tileY * TILE + "px";
    el.style.width  = TILE + "px";
    el.style.height = TILE + "px";

    el.dataset.name = obj.name;

    if (obj.type === "door") {
      el.dataset.destination = obj.destination;
      el.classList.add("door");
    }
    if (obj.type === "hm") {
      el.classList.add("hm");
    }
    if (obj.type === "trainer") {
      el.classList.add("trainer");
    }

    if (obj.sprite) {
      const img = document.createElement("img");
      img.src = "assets/sprites/" + obj.sprite;
      img.style.imageRendering = "pixelated";
      img.draggable = false; // prevents drag ghosting

      el.appendChild(img);
    }

    camera.appendChild(el);
  });
}

function loadRegions(regions) {
    const camera = document.getElementById("camera");

    regions.forEach(region => {
    const el = document.createElement("div");

    el.className = "map-object region";

    el.style.left   = region.x * TILE + "px";
    el.style.top    = region.y * TILE + "px";
    el.style.width  = region.w * TILE + "px";
    el.style.height = region.h * TILE + "px";

    el.dataset.name = region.name;

    camera.appendChild(el);
  });
}