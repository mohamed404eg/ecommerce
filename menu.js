let menu = document.querySelector(".menu");
let listMenu = document.querySelector(".listMenu");
menu.addEventListener("click", () => {
    
    listMenu.classList.toggle("listMenuToggle")
    console.log("d")
})

let menuclose = document.querySelector(".menuclose");
menuclose.addEventListener("click", () => {
    listMenu.classList.toggle("listMenuToggle")
})

