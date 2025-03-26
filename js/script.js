// apply class hidden to the loading-screen on page-load
let loadingScreen = document.querySelector("#loading-screen");

window.addEventListener("load", function () {
  loadingScreen.classList.add("hidden");
});
