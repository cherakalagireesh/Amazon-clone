// side-window
const total_window = document.getElementsByClassName("side-window")[0];
const side_window = document.getElementsByClassName("model-window")[0];
const close = document.getElementsByClassName("close")[0];

function model_window() {
  total_window.style.display = "block";
  side_window.style.transition = "display 2s";
  side_window.style.display = "block";
}
close.addEventListener("click", function () {
  total_window.style.display = "none";
  side_window.style.display = "none";
});
total_window.addEventListener("click", function () {
  total_window.style.display = "none";
  side_window.style.display = "none";
});

// sigin-window
const nav_sign = document.getElementsByClassName("nav-sign")[0];
const sign_in_window = document.getElementsByClassName("sign-in-window")[0];
nav_sign.addEventListener("mouseover", () => {
  close.style.display = "none";
  total_window.style.display = "block";
  total_window.style.background =
    " linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))";
  sign_in_window.style.display = "block";
});

nav_sign.addEventListener("mouseout", function () {
  close.style.display = "none";
  total_window.style.display = "none";
  sign_in_window.style.display = "none";
});

// slide-show
const slide_images = document.getElementsByClassName("slide-show")[0];
let i = 1;
function slide_show() {
  slide_images.style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0),#e3e6e6),url(slide-show/slide" + i + ".jpg)";
  i++;
  if (i == 7) {
    i = 1;
  }
}
setInterval(slide_show, 3000);
