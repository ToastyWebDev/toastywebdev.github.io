// header functions
const header = document.querySelector("nav");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

// let menu = document.querySelector('#menu-icon');
// let navlist = document.querySelector('.links');
// window.onscroll = () => {
//     menu.classList.remove('tog');
//     navlist.classList.remove('open');
// };

document.addEventListener("DOMContentLoaded", function() {
  var navToggle = document.getElementById("nav-toggle");
  var navMenu = document.querySelector("nav ul.links");
  
  function hideNavMenu() {
      navToggle.checked = false;
  }
  function onScroll() {
      hideNavMenu();
  }
  function onClick() {
      hideNavMenu();
  }
  window.addEventListener("scroll", onScroll);
  navMenu.addEventListener("click", onClick);
});

function showPop(){
  alert("Click Menu to view your cart !!")
}


