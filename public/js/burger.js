const burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".navBurger");
let menu = document.querySelector(".nav");

burger.addEventListener('click', e => {
  burger.classList.toggle('active');

    burgerMenu.style.display = "flex";
    menu.style.zIndex = "4";
    menu.style.position = "absolute";
    menu.style.width = "100%";

    if(burger.classList.contains("active") == false)
    {
      burgerMenu.style.display = "none";
      menu.style.zIndex = "1";
      menu.style.position = "relative";
      menu.style.width = "100%";
    }
});