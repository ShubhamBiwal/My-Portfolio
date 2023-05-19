let menu = document.querySelector("#menu-bar");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

// typing Animation
var typed = new Typed(".typing", {
  strings: [
    "Web Developer",
    "PHP Developer",
    "Laravel Developer",
    "Front-End Developer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
//  register
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
