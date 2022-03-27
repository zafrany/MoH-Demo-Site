let themeButton = document.querySelector(".theme-button");
let themeColors = document.querySelector(".content-container");
let boxColor = document.querySelectorAll(".light-color-theme__box-color");
let exlamationMark = document.querySelectorAll(".card-h3-container .circle");
let circleArray = document.querySelectorAll(".light-circle-color");
let tooltipArray = document.querySelectorAll(".tooltip");

themeButton.addEventListener('click', ()=>{
    themeButton.children[0].classList.toggle("displayNone");
    themeButton.children[1].classList.toggle("displayNone");
    themeButton.classList.toggle("theme-button__dark-color");
    themeButton.classList.toggle("theme-button__light-color");
    themeColors.classList.toggle("background-light");
    themeColors.classList.toggle("background-dark");
    themeColors.classList.toggle("text-color-light");
    themeColors.classList.toggle("text-color-dark");

    for(let i = 0; i < boxColor.length; i++){
        boxColor[i].classList.toggle("light-color-theme__box-color");
        boxColor[i].classList.toggle("dark-color-theme__box-color");
    }

    for(let i = 0; i < exlamationMark.length; i++){
        exlamationMark[i].classList.toggle("light-circle-color");
        exlamationMark[i].classList.toggle("dark-circle-color");
        tooltipArray[i].classList.toggle("dark-color-theme__box-color");
        tooltipArray[i].classList.toggle("light-color-theme__box-color");
    }
})


for(let i = 0; i < circleArray.length; i++){
    let tooltipArray = document.querySelectorAll('.tooltip');
    circleArray[i].addEventListener('mouseover', ()=>{
        tooltipArray[i].classList.toggle("displayNone");
    })
    circleArray[i].addEventListener('mouseleave', ()=>{
        tooltipArray[i].classList.toggle("displayNone");
    })
}


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

let settelmentsMockData = [
    ["רעננה","89.7%","86.28%","70.69%","153.1","10"],
    ["יבנה","74.76%","69.92%","52.18%","113.5","10"],
    ["טירה","64.95%","56.31%","33.66%","19.3","6"],
    ["אשדוד","70.95%","64.18%","47.31%","60.6","9.2"],
    ["בני ברק","45.33%","33.38%","19.79%","7.5","5.1"],
    ["חורה","25.12%","21.08%","8.92%","7.8","4.3"]
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