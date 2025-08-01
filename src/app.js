function generateRandom() {
  const number = Math.floor(Math.random() * 6) + 1;
  document.getElementById("output").textContent = `You got: ${number}`;
}

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}
