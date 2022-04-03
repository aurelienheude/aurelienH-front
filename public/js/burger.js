const burger = document.querySelector(".burger");
const burgerSpan = document.querySelector(".span");
let burgerMenu = document.querySelector(".navBurger");
let menu = document.querySelector(".nav");

burger.addEventListener('click', e => {
  burger.classList.toggle('active');

    burgerMenu.style.display = "flex";
    menu.style.zIndex = "4";
    menu.style.position = "absolute";

    if(burger.classList.contains("active") == false)
    {
      burgerMenu.style.display = "none";
      menu.style.zIndex = "0";
      menu.style.position = "absolute";
    }
});