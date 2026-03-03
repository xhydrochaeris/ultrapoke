let currentMap = null;
let map_history = [];
let future = [];

function renderWarps(mapName) {
  const map = MAPS[mapName];
  if (!map.warps) return;

  const camera = document.getElementById("camera");

  const mapWidthPx  = map.width  * TILE;
  const mapHeightPx = map.height * TILE;

  const OUTER_GAP = TILE * 4.7;
  const SIDE_GAP  = TILE * 2;

  Object.entries(map.warps).forEach(([direction, destination]) => {

    const warp = document.createElement("div");
    warp.className = "warp";
    warp.dataset.destination = destination;

    // ---------- NORTH ----------
    if (direction === "north") {
      warp.classList.add("vertical");

      warp.innerHTML = `
        ↑<br>
        ${destination}
      `;

      warp.style.left = (mapWidthPx / 2 - 80) + "px"; // 80 = half of 160
      warp.style.top  = (-OUTER_GAP) + "px";
    }

    // ---------- SOUTH ----------
    if (direction === "south") {
      warp.classList.add("vertical");

      warp.innerHTML = `
        ${destination}<br>
        ↓
      `;

      warp.style.left = (mapWidthPx / 2 - 80) + "px";
      warp.style.top  = (mapHeightPx + OUTER_GAP - 50) + "px";
    }

    // ---------- EAST ----------
    if (direction === "east") {
      warp.classList.add("horizontal");

      warp.innerHTML = `
        →<br>
        ${destination}
      `;

      warp.style.left = (mapWidthPx + SIDE_GAP) + "px";
      warp.style.top  = (mapHeightPx / 2 - 16) + "px";
      warp.style.textAlign = "left";
    }

    // ---------- WEST ----------
    if (direction === "west") {
      warp.classList.add("horizontal");

      warp.innerHTML = `
        ←<br>
        ${destination}
      `;

      warp.style.left = (-SIDE_GAP - 120) + "px";
      warp.style.top  = (mapHeightPx / 2 - 16) + "px";
      warp.style.textAlign = "right";
    }

    warp.addEventListener("click", () => loadMap(destination));
    camera.appendChild(warp);
  });
}

function loadMap(id, addToHistory = true) {
  if (addToHistory && currentMap) {
    map_history.push(currentMap);
    future = [];
  }

  currentMap = id;

  const mapData = MAPS[id];
  const camera = document.getElementById("camera");
  camera.innerHTML = "";

  const img = document.createElement("img");
  img.src = "assets/maps/" + mapData.image;
  img.className = "map";
  camera.appendChild(img);

  loadRegions(mapData.regions);
  loadObjects(mapData.objects);
  renderWarps(currentMap);

  document.getElementById("sidebar").innerHTML =
    mapData.sidebarHTML;

  const mapWidth = mapData.width * TILE;
  const mapHeight = mapData.height * TILE;

  centerCamera(mapWidth, mapHeight);

  const params = new URLSearchParams(window.location.search);
  params.set("mapid", currentMap);
  history.replaceState(null, "", "?" + params.toString());
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const mapFromUrl = params.get("mapid");

  if (mapFromUrl && MAPS[mapFromUrl]) {
    loadMap(mapFromUrl);
  } else {
    loadMap("PalletTown"); // default map
  }
});

