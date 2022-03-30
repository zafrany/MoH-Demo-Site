let themeButton = document.querySelector(".theme-button");
let themeColors = document.querySelector(".content-container");
let boxColor = document.querySelectorAll(".light-color-theme__box-color");
let exlamationMark = document.querySelectorAll(".card-h3-container .circle");
let circleArray = document.querySelectorAll(".light-circle-color");
let tooltipArray = document.querySelectorAll(".tooltip");
let searchButton = document.querySelector(".search-button");
let searchBox = document.querySelector(".searchbox");
let buttons = document.querySelectorAll(".searchbox-button");
let trinagleButtons = document.querySelectorAll(".vaccination-header__category-container");

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

    searchButton.classList.toggle("background-light");
    searchButton.classList.toggle("background-dark");
    searchButton.classList.toggle("text-color-light");
    searchButton.classList.toggle("text-color-dark");

    let searchBoxInputLight = document.querySelector(".input-light-theme");
    let searchBoxInputDark = document.querySelector(".input-dark-theme");
    searchBox.classList.toggle("background-light");
    searchBox.classList.toggle("background-dark");
    searchBoxInputLight.classList.toggle("displayNone");
    searchBoxInputDark.classList.toggle("displayNone");


    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.toggle("text-color-light");
        buttons[i].classList.toggle("button-light-color");
        buttons[i].classList.toggle("text-color-dark");
        buttons[i].classList.toggle("button-dark-color");
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

searchButton.addEventListener('click', ()=>{
    let arrowIcon = document.querySelector(".arrow-icon");
    if(arrowIcon.classList.contains("arrow-icon-rotated"))
    {
          arrowIcon.classList.remove("arrow-icon-rotated");
          arrowIcon.classList.add("arrow-icon-unrotated");
    }
    else {
        arrowIcon.classList.remove("arrow-icon-unrotated");
        arrowIcon.classList.add("arrow-icon-rotated");
    }

    searchBox.classList.toggle("displayNone");
})


for(let i = 0; i < trinagleButtons.length; i++) {
    let trinagleButtonsTriangles = document.querySelectorAll(".vaccination-header__category-container span");
    trinagleButtons[i].addEventListener('click', ()=> {
        if(trinagleButtons[i] === document.activeElement && trinagleButtonsTriangles[i].classList.contains("displayNone"))
            trinagleButtonsTriangles[i].classList.toggle("displayNone");
        trinagleButtonsTriangles[i].classList.toggle("flip-triangle");
        
        for(let j = 0; j < trinagleButtons.length; j++)
            if(i !== j)
                trinagleButtonsTriangles[j].classList.add("displayNone");
        
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
    ["חורה","25.12%","21.08%","8.92%","7.8","4.3"],
    ["קיסריה","מעל 90%","87.76%","72.34%","167.7","10"]
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

/*
let resultTable = "";
let displayNone = "";
for(let i = 0; i < settelmentsMockData.length; i++){
    let rowDiv =
    "<div class=\"vaccination-row\">" +
        "<div class=\"sname-row\">" + settelmentsMockData[i][0] + "</div>" + 
        "<div class=\"row-data\">" +
            "<div class=\"percentage-bar percentage-bar-background-light " + (settelmentsMockData[i][1] === "מעל 90%" ? "displayNone" : "") + "\">" +
            "<div style=\"width:"  + (settelmentsMockData[i][1] === "מעל 90%" ? "0%" : settelmentsMockData[i][1]) + "\"" + "class=\"percentage-bar-filled percentage-bar-first-dose-light\"></div>" +
        "</div>" +
        settelmentsMockData[i][1] +
        "</div>" +
        "<div class=\"row-data\">" +
            "<div class=\"percentage-bar percentage-bar-background-light " + (settelmentsMockData[i][2] === "מעל 90%" ? "displayNone" : "") + "\">" +
            "<div style=\"width:"  + (settelmentsMockData[i][2] === "מעל 90%" ? "0%" : settelmentsMockData[i][2]) + "\"" + "class=\"percentage-bar-filled percentage-bar-second-dose-light\"></div>" +
        "</div>" +
        settelmentsMockData[i][2] +
        "</div>" +
        "<div class=\"row-data\">" +
            "<div class=\"percentage-bar percentage-bar-background-light " + (settelmentsMockData[i][3] === "מעל 90%" ? "displayNone" : "") + "\">" +
            "<div style=\"width:"  + (settelmentsMockData[i][3] === "מעל 90%" ? "0%" : settelmentsMockData[i][3]) + "\"" + "class=\"percentage-bar-filled percentage-bar-third-dose-light\"></div>" +
        "</div>" +
        settelmentsMockData[i][3] +
        "</div>" +
        "<div class=\"row-data\">" + settelmentsMockData[i][4] + "</div>" +
        "<div class=\"row-data\">" +
            "<div class=\"colored-sq vaccination-table-first-score\">" +
            settelmentsMockData[i][5] +
            "</div>" +
        "</div>" +
    "</div>";
    resultTable += rowDiv;
}
let vaccinationTableRows = document.querySelector(".vaccination-table-rows");
*/


let createSnameDiv = function(index) {
    const sName = document.createElement("div");
    sName.innerText = settelmentsMockData[index][0];
    sName.classList.add("sname-row");
    return sName;
}

let createPercentageBar = function(index,col) {
    const backgroundBar = document.createElement("div");
    backgroundBar.classList.add("percentage-bar");
    backgroundBar.classList.add("percentage-bar-background-light");
    if(settelmentsMockData[index][col] === "מעל 90%")
        backgroundBar.classList.add("displayNone");
    backgroundBar.appendChild(createWidthBar(index, col));
    return backgroundBar;
}

let createWidthBar = function(index, col) {
    const colClass  = ["percentage-bar-first-dose-light", "percentage-bar-second-dose-light", "percentage-bar-third-dose-light"];
    const widthBar = document.createElement("div");
    if(settelmentsMockData[index][col] === "מעל 90%")
        widthBar.style.width = "0%";
    else
        widthBar.style.width = settelmentsMockData[index][col];
    widthBar.classList.add("percentage-bar-filled");
    widthBar.classList.add(colClass[col - 1]);
    return widthBar;
}

let createRowData = function(index, col) {
    const rowData = document.createElement("div");
    rowData.appendChild(createPercentageBar(index, col));
    let innerText = document.createElement("span");
    innerText.innerText = settelmentsMockData[index][col];
    rowData.appendChild(innerText);
    rowData.classList.add("row-data");
    return rowData;
}

let createActivePatients = function(index) {
    const activePatients = document.createElement("div");
    activePatients.innerText = settelmentsMockData[index][4];
    activePatients.classList.add("row-data");   
    return activePatients;
}

let createScore = function(index) {
    let parsedScore = parseFloat(settelmentsMockData[index][5]);
    const scoreClass  = ["vaccination-table-first-score", "vaccination-table-second-score", "vaccination-table-third-score", "vaccination-table-fourth-score"];
    const score = document.createElement("div");
    score.innerText = settelmentsMockData[index][5];
    if(parsedScore >= 7.5)
        score.classList.add(scoreClass[0]);   
    else if(parsedScore >= 6)
        score.classList.add(scoreClass[1]);   
    else if(parsedScore >= 4.5)
        score.classList.add(scoreClass[2]);   
    else 
        score.classList.add(scoreClass[3]);   
    score.classList.add("colored-sq");   
    const scoreDiv = document.createElement("div");
    scoreDiv.classList.add("row-data");
    scoreDiv.appendChild(score);
    return scoreDiv;
}

let createTable = function() {
    let table = document.querySelector(".vaccination-table-rows");
    for(let i = 0; i < settelmentsMockData.length; i++){
        let tableRow = document.createElement("div");
        tableRow.appendChild(createSnameDiv(i));
        for(let col = 1; col < 4; col++){
            tableRow.appendChild(createRowData(i,col));
        }
        tableRow.appendChild(createActivePatients(i));
        tableRow.appendChild(createScore(i));
        tableRow.classList.add("vaccination-row");    
        table.appendChild(tableRow);
    }
}

createTable();