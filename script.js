let menu = document.querySelector('#menu-bar');
let header = document.querySelector('header');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}

// typing Animation
 var typed = new Typed(".typing",{
  strings: ["front-end developer", ""],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
 });
