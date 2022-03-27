let burger = document.getElementById('burger');

let menu = document.getElementById('menu');
let topbar = document.getElementById('topbar');
let grid = document.getElementById('grid');

burger.addEventListener('click', () =>{

    burger.classList.toggle('active');
    
    if(burger.classList.contains('active')){
        grid.style.gridTemplateColumns = "80px 1fr";
    }else{
        grid.style.gridTemplateColumns = "250px 1fr";
    }
})