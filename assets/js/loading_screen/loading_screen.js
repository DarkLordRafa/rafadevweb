
const deviceScreen = document.body;
const loadScreen = document.querySelector(".load-screen");

deviceScreen.style.overflowY = "hidden";

window.addEventListener("load", function(){
  loadScreen.style.display = "none";
  deviceScreen.style.overflowY = "visible";
});