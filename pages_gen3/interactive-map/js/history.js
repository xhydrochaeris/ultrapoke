function goBack() {
  if (map_history.length === 0) return;

  future.push(currentMap);
  const prev = map_history.pop();
  loadMap(prev, false);
}

function goForward() {
  if (future.length === 0) return;

 map_history.push(currentMap);
  const next = future.pop();
  loadMap(next, false);
}

document.getElementById("backBtn").onclick = goBack;
document.getElementById("forwardBtn").onclick = goForward;