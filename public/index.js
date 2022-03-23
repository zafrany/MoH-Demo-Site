let themeButton = document.querySelector(".theme-button");
let background = document.querySelector(".content-container");
let flexColor = document.querySelector(".top-cards-flex");
let boxColor = document.querySelectorAll(".top-card-container");
let exlamationMark = document.querySelectorAll(".card-h3-container .circle");

themeButton.addEventListener('click', ()=>{
    themeButton.children[0].classList.toggle("displayNone");
    themeButton.children[1].classList.toggle("displayNone");
    themeButton.classList.toggle("theme-button__dark-color");
    themeButton.classList.toggle("theme-button__light-color");
    background.classList.toggle("light-color-theme");
    background.classList.toggle("dark-color-theme");
    flexColor.classList.toggle("dark-color-theme");
    flexColor.classList.toggle("light-color-theme");

    for(let i = 0; i < exlamationMark.length; i++){
        boxColor[i].classList.toggle("light-color-theme");
        boxColor[i].classList.toggle("dark-color-theme__box-color");
        exlamationMark[i].classList.toggle("light-circle-color");
        exlamationMark[i].classList.toggle("dark-circle-color");
    }
})