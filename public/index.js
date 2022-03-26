let themeButton = document.querySelector(".theme-button");
let background = document.querySelector(".content-container");
let flexColor = document.querySelector(".top-cards-flex");
let boxColor = document.querySelectorAll(".top-card-container");
let exlamationMark = document.querySelectorAll(".card-h3-container .circle");
let secondRowflex = document.querySelector(".top-cards-flex-container");

themeButton.addEventListener('click', ()=>{
    themeButton.children[0].classList.toggle("displayNone");
    themeButton.children[1].classList.toggle("displayNone");
    themeButton.classList.toggle("theme-button__dark-color");
    themeButton.classList.toggle("theme-button__light-color");
    background.classList.toggle("light-color-theme");
    background.classList.toggle("dark-color-theme");
    flexColor.classList.toggle("dark-color-theme");
    flexColor.classList.toggle("light-color-theme");
    secondRowflex.classList.toggle("dark-color-theme__box-color");
    secondRowflex.classList.toggle("light-color-theme__box-color");

    for(let i = 0; i < exlamationMark.length; i++){
        boxColor[i].classList.toggle("light-color-theme");
        boxColor[i].classList.toggle("dark-color-theme__box-color");
        exlamationMark[i].classList.toggle("light-circle-color");
        exlamationMark[i].classList.toggle("dark-circle-color");
    }
})

let topMockData1 = [
    ["13,603", "1232", "3,818,065", "66,821", "7743-", "786"],
    ["301", "149", "21", "130", "76", "405"],
    ["6,701,764", "6,126,746", "4,472,407", "744,402"],
    ["10,455"],
    ["19.08%", "71,291", "106,486"],
    ["17,025", "16,513"]
               ];

let topMockData2 = [
    ["76,439", "88.5%+"],
    ["134", "14.5%+"],
    ["27", "42.6%-"],
    ["399,532", "19%+", "19.1%"]
                      ];

let dataFields = document.querySelectorAll(".top-cards-flex .top-card-container");
for(let i = 0; i < dataFields.length; i++) {
    let dataField =  dataFields[i].querySelectorAll('.data');
    for(let j = 0; j < dataField.length; j++){
        if(i < 6)
            dataField[j].textContent = topMockData1[i][j];
        else 
            dataField[j].textContent = topMockData2[i - 6][j];
    }
}