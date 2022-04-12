const themeButton = document.querySelector(".theme-button");
const themeColors = document.querySelector(".content-container");
const boxColor = document.querySelectorAll(".light-color-theme__box-color");
const exlamationMark = document.querySelectorAll(".card-h3-container .circle");
const circleArray = document.querySelectorAll(".light-circle-color");
const tooltipArray = document.querySelectorAll(".tooltip");
const searchButton = document.querySelector(".search-button");
const searchBoxContainer = document.querySelector(".searchbox-container");
const searchResults = document.querySelector(".search-results");
const buttons = document.querySelectorAll(".searchbox-button");
const searchboxTop = document.querySelector(".searchbox-top");
const trinagleButtons = document.querySelectorAll(".vaccination-header__category-container");
const vaccinationHeader = document.querySelector(".vaccination-header");

const ramzorSearchBox = document.querySelector(".search-container input");
const ramzorSearchResults = document.querySelector(".ramzor-search-results");

themeButton.addEventListener('click', ()=>{
    themeButton.children[0].classList.toggle("displayNone");
    themeButton.children[1].classList.toggle("displayNone");
    themeButton.classList.toggle("theme-button__dark-color");
    themeButton.classList.toggle("theme-button__light-color");
    themeColors.classList.toggle("background-light");
    themeColors.classList.toggle("background-dark");
    themeColors.classList.toggle("text-color-light");
    themeColors.classList.toggle("text-color-dark");
    
    //////////////////////////////////////////////////////////
    if(themeColors.classList.contains("background-dark")){
        percentageFirstDose = document.querySelectorAll(".percentage-bar-first-dose-light");
        percentageSecondDose = document.querySelectorAll(".percentage-bar-second-dose-light");
        percentageThirdDose = document.querySelectorAll(".percentage-bar-third-dose-light");
        percentageBarBackground = document.querySelectorAll(".percentage-bar-background-light");
    }
    else {
        percentageFirstDose = document.querySelectorAll(".percentage-bar-first-dose-dark");
        percentageSecondDose = document.querySelectorAll(".percentage-bar-second-dose-dark");
        percentageThirdDose = document.querySelectorAll(".percentage-bar-third-dose-dark");
        percentageBarBackground = document.querySelectorAll(".percentage-bar-background-dark");
    }

    for(let i = 0; i < percentageBarBackground.length; i++) {
        percentageBarBackground[i].classList.toggle("percentage-bar-background-light");
        percentageBarBackground[i].classList.toggle("percentage-bar-background-dark");
    }

    for(let i = 0; i < percentageFirstDose.length; i++){
         percentageFirstDose[i].classList.toggle("percentage-bar-first-dose-light");
         percentageSecondDose[i].classList.toggle("percentage-bar-second-dose-light");
         percentageThirdDose[i].classList.toggle("percentage-bar-third-dose-light"); 

         percentageFirstDose[i].classList.toggle("percentage-bar-first-dose-dark");
         percentageSecondDose[i].classList.toggle("percentage-bar-second-dose-dark"); 
         percentageThirdDose[i].classList.toggle("percentage-bar-third-dose-dark"); 
    }
    ///////////////////////////////////////////////////////

    for(let i = 0; i < boxColor.length; i++){
        boxColor[i].classList.toggle("light-color-theme__box-color");
        boxColor[i].classList.toggle("dark-color-theme__box-color");
    }

    for(let i = 0; i < exlamationMark.length; i++){
        exlamationMark[i].classList.toggle("light-circle-color");
        exlamationMark[i].classList.toggle("dark-circle-color");
    }

    searchButton.classList.toggle("background-light");
    searchButton.classList.toggle("background-dark");
    searchButton.classList.toggle("text-color-dark");

    let searchBoxInputLight = document.querySelector(".input-light-theme");
    searchBoxInputLight.classList.toggle("input-dark-theme");
    searchBoxContainer.classList.toggle("background-light");
    searchBoxContainer.classList.toggle("background-dark");
    searchboxTop.classList.toggle("dark-color-theme__box-color");
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.toggle("text-color-light");
        buttons[i].classList.toggle("button-light-color");
        buttons[i].classList.toggle("text-color-dark");
        buttons[i].classList.toggle("button-dark-color");
    }

    vaccinationHeader.classList.toggle("button-light-color");
    vaccinationHeader.classList.toggle("button-dark-color");

    let vaccinationButton = document.querySelectorAll(".vaccination-header button");
    for(let i = 0; i < vaccinationButton.length; i++){
        vaccinationButton[i].classList.toggle("text-color-dark");
    }
    
    let vaccinationRow = document.querySelectorAll(".vaccination-row");
    for(let i = 0; i < vaccinationRow.length; i++){
        vaccinationRow[i].classList.toggle("border-bottom-light");
        vaccinationRow[i].classList.toggle("border-bottom-dark");
    }

    
    searchResults.classList.toggle("search-result-hover-dark");
    
    ramzorSearchResults.classList.toggle("text-color-dark");
    ramzorSearchResults.classList.toggle("search-result-hover-dark");

    let italicText = document.querySelectorAll(".ramzor-italic-text-light");
    for(let i = 0; i < italicText.length; i++){
        italicText[i].classList.toggle("ramzor-italic-text-dark")
    }

    let ramzorSearchBox = document.querySelector(".search-container input");
    ramzorSearchBox.classList.toggle("dark-color-theme__box-color");
    ramzorSearchBox.classList.toggle("text-color-dark");
    
    let ramzorButtons = document.querySelectorAll(".ramzor .button-light-color");
    for(let i = 0; i < ramzorButtons.length; i++) {
        ramzorButtons[i].classList.toggle("button-dark-color");
    }

    let ramzorButtonText = document.querySelectorAll(".ramzor button");
    for(let i = 0; i < ramzorButtonText.length; i++){
        ramzorButtonText[i].classList.toggle("text-color-dark");
    }

    let ramzorHighlight = document.querySelectorAll(".ramzor-header .ramzor-highlighted-light");
    for(let i = 0; i < ramzorHighlight.length; i++) {        
        ramzorHighlight[i].classList.toggle("ramzor-highlighted-dark");
    }

    let ramzorTableHighlight = document.querySelectorAll(".ramzor-table-highlighed-light");
    for(let i = 0; i < ramzorTableHighlight.length; i++) {
        ramzorTableHighlight[i].classList.toggle("ramzor-table-highlighed-dark");
        
    }

    if(areaSplintChart.series[0].color ===  lightPatientsLight){
        updateChartSeriesColors(areaSplintChart, [lightPatientsDark, mediumPatientsDark, severePatientsDark]);
        updateChartTextColors(areaSplintChart, 'white');
    }

    else {
        updateChartSeriesColors(areaSplintChart, [lightPatientsLight, mediumPatientsLight,severePatientsLight]);
        updateChartTextColors(areaSplintChart, '#222b45');
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
   arrowRotate(".vaccination-arrow");
   searchBoxContainer.classList.toggle("displayNone");
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
    ["רעננה","49.7%","76.28%","70.69%","153.1","10"],
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

let createSnameDiv = function(dataTable ,index) {
    const sName = document.createElement("div");
    sName.innerText = dataTable[index][0];
    sName.classList.add("sname-row");
    return sName;
}

let createPercentageBar = function(dataTable, index,col) {
    const backgroundBar = document.createElement("div");
    backgroundBar.classList.add("percentage-bar");
    if(themeColors.classList.contains("background-light"))
        backgroundBar.classList.add("percentage-bar-background-light");
    else
        backgroundBar.classList.add("percentage-bar-background-dark");
    if(dataTable[index][col] === "מעל 90%")
        backgroundBar.classList.add("displayNone");
    backgroundBar.appendChild(createWidthBar(dataTable, index, col));
    return backgroundBar;
}

let createWidthBar = function(dataTable, index, col) {
    let colClass;
    if(themeColors.classList.contains("background-light")){
         colClass  = ["percentage-bar-first-dose-light", "percentage-bar-second-dose-light", "percentage-bar-third-dose-light"];
    }
    else {
        colClass  = ["percentage-bar-first-dose-dark", "percentage-bar-second-dose-dark", "percentage-bar-third-dose-dark"];
    }
    const widthBar = document.createElement("div");
    if(dataTable[index][col] === "מעל 90%")
        widthBar.style.width = "0%";
    else
        widthBar.style.width = dataTable[index][col];
    widthBar.classList.add("percentage-bar-filled");
    widthBar.classList.add(colClass[col - 1]);
    return widthBar;
}

let createRowData = function(dataTable, index, col) {
    const rowData = document.createElement("div");
    rowData.appendChild(createPercentageBar(dataTable, index, col));
    let innerText = document.createElement("span");
    innerText.innerText = dataTable[index][col];
    rowData.appendChild(innerText);
    rowData.classList.add("row-data");
    return rowData;
}

let createActivePatients = function(dataTable, index) {
    const activePatients = document.createElement("div");
    activePatients.innerText = dataTable[index][4];
    activePatients.classList.add("row-data");   
    return activePatients;
}

let createScore = function(dataTable, index, scoreIndex) {
    let parsedScore = parseFloat(dataTable[index][scoreIndex]);
    const scoreClass  = ["vaccination-table-first-score", "vaccination-table-second-score", "vaccination-table-third-score", "vaccination-table-fourth-score"];
    const score = document.createElement("div");
    score.innerText = dataTable[index][scoreIndex];
    if(parsedScore >= 7.5)
        score.classList.add(scoreClass[0]);   
    else if(parsedScore >= 6)
        score.classList.add(scoreClass[1]);   
    else if(parsedScore >= 4.5)
        score.classList.add(scoreClass[2]);   
    else 
        score.classList.add(scoreClass[3]);   
    score.classList.add("colored-sq");   
    score.classList.add("score");
    const scoreDiv = document.createElement("div");
    scoreDiv.classList.add("row-data");
    scoreDiv.appendChild(score);
    return scoreDiv;
}

let createTable = function(dataTable, scoreIndex) {
    let table = document.querySelector(".vaccination-table-rows");
    for(let i = 0; i < dataTable.length; i++){
        let tableRow = document.createElement("div");
        tableRow.appendChild(createSnameDiv(dataTable, i));
        for(let col = 1; col < 4; col++){
            tableRow.appendChild(createRowData(dataTable, i,col));
        }
        tableRow.appendChild(createActivePatients(dataTable, i));
        tableRow.appendChild(createScore(dataTable, i, scoreIndex));
        tableRow.classList.add("vaccination-row");
        tableRow.classList.add("border-bottom-light");
        table.appendChild(tableRow);
    }
}


let deleteTable = function() {
    let table = document.querySelector(".vaccination-table-rows");
    while(table.firstChild)
        table.removeChild(table.firstChild);
}

createTable(settelmentsMockData, 5);

let sortByCity = function(asc){
    return function(a, b){
        if (asc)
            return a[0].localeCompare(b[0]);
        else
            return b[0].localeCompare(a[0]);
    }
}

let sortByNumber = function(index, asc) {
    return function(a, b) {
        let aNum = a[index];
        let bNum = b[index];
        if(aNum === "מעל 90%")
            aNum = "90";
        if(bNum === "מעל 90%")
            bNum = "90";

        if(aNum.indexOf('%') > 0)
           aNum = parseFloat(aNum.slice(0, aNum.indexOf('%'))); 
        else anum = parseFloat(aNum);

        if(bNum.indexOf('%') > 0)
           bNum = parseFloat(bNum.slice(0, bNum.indexOf('%'))); 
        else anum = parseFloat(bNum);

        if (asc)
            return aNum - bNum;
        else
            return bNum - aNum;
    }
}


let vaccinationButtons = document.querySelectorAll(".vaccination-header button");
vaccinationButtons[0].addEventListener('click', ()=>{
    let table = document.querySelector(".vaccination-table-rows");
    let asc = vaccinationButtons[0].querySelector('span').classList.contains("flip-triangle");
    if(table.children.length > 1) {
        settelmentsMockData = settelmentsMockData.sort(sortByCity(asc));
        deleteTable();
        createTable(settelmentsMockData, 5);
    }
})

for(let i = 1; i < vaccinationButtons.length; i++){
    vaccinationButtons[i].addEventListener('click', ()=>{
        let table = document.querySelector(".vaccination-table-rows");
        let asc = vaccinationButtons[i].querySelector('span').classList.contains("flip-triangle");
        if(table.children.length > 1) {
            settelmentsMockData = settelmentsMockData.sort(sortByNumber(i, asc));
            deleteTable();
            createTable(settelmentsMockData, 5);
        }
    })
}

let searchBox = document.querySelector(".searchbox");
let VaccinationInput = document.querySelector(".searchbox-top input");
VaccinationInput.addEventListener('input', ()=>{
    let searchResultArr = [];        
    for(let j = 0; j < settelmentsMockData.length; j++){
        if(settelmentsMockData[j][0].includes(VaccinationInput.value) && VaccinationInput.value.length > 0)
            searchResultArr.push(settelmentsMockData[j][0]);
    }
    clearList();
    if(searchResultArr.length !== 0)
        searchBox.style.position = "absolute";
    else
        searchBox.style.position = "static";
    createList(searchResultArr);
})


let createList = function(arr) {
    searchResults.classList.toggle("search-result-hover-light");
    for(let i = 0; i < arr.length; i++) {
        let listMember = document.createElement("li");
        listMember.addEventListener('click', ()=> {
            let searchButtonText = document.querySelector(".search-button__text");
            VaccinationInput.value = arr[i];
            searchBox.style.position = "static";
            searchButtonText.innerText = arr[i];
            clearList();
        })
        listMember.textContent = arr[i];
        searchResults.appendChild(listMember);
    }
}

let clearList = function() {
    while(searchResults.firstChild)
        searchResults.removeChild(searchResults.firstChild);
}

buttons[0].addEventListener('click', ()=> {
    let table = document.querySelector(".vaccination-table-rows");
    let requiredRow;
    
    for(let i = 0; i < table.children.length; i++){
        if(table.children[i].children[0].innerText === VaccinationInput.value)
            requiredRow = table.children[i];
    }
    deleteTable();
    
    if(requiredRow !== undefined)    
        table.appendChild(requiredRow);
    else 
        createTable(settelmentsMockData, 5)

    arrowRotate(".vaccination-arrow");
    searchTextClear();
    searchBoxContainer.classList.toggle("displayNone");
})

buttons[1].addEventListener('click', ()=> {
    arrowRotate(".vaccination-arrow");
    searchTextClear();
    searchBoxContainer.classList.toggle("displayNone");
})

const arrowRotate = function(arrowSelector){
    let arrowIcon = document.querySelector(arrowSelector);
    if(arrowIcon.classList.contains("arrow-icon-rotated"))
    {
          arrowIcon.classList.remove("arrow-icon-rotated");
          arrowIcon.classList.add("arrow-icon-unrotated");
    }
    else {
        arrowIcon.classList.remove("arrow-icon-unrotated");
        arrowIcon.classList.add("arrow-icon-rotated");
    }
}

const searchTextClear = function() {
    let searchButtonText = document.querySelector(".search-button__text");
     
    if(VaccinationInput.value.length !== 0) {
        searchButtonText.innerText = VaccinationInput.value;
    }
    else {
        searchButtonText.innerText = "כלל הישובים";
        VaccinationInput.value ="";
    }
}



let ramzorMockData = [
    ["רעננה", "9.4", "161.3", "17%", "-18%", "994"],
    ["יבנה", "9.8", "126.2", "24%", "-10%", "466"],
    ["טירה","5.6","20.4","4%","6%","49"],
    ["אשדוד","9.3","81.4","20%","5%","1429"],
    ["בני ברק","5","6.4","5%","-25%","151"],
    ["חורה","6.3","10.0","11%","65%","21"],
    ["קיסריה","7.7","98.1","11%","-59%","43"]
];


let createRamzorTable = function(dataTable, scoreIndex) {
    let table = document.querySelector(".ramzor-table-rows");
    for(let i = 0; i < dataTable.length; i++){
        let tableRow = document.createElement("div");
        tableRow.appendChild(createSnameDiv(dataTable, i));
        tableRow.appendChild(createScore(dataTable, i, scoreIndex));
        for(let col = 2; col < 6; col++){
            tableRow.appendChild(createRamzorRowData(dataTable, i,col));
        }
        tableRow.classList.add("vaccination-row");
        tableRow.classList.add("border-bottom-light");
        table.appendChild(tableRow);
    }
}

let createRamzorRowData = function(dataTable, index, col) {
    const rowData = document.createElement("div");
    let innerText = document.createElement("span");
    
    if(col > 1 && col < 5){
        if(themeColors.classList.contains("background-dark"))
            rowData.classList.add("ramzor-table-highlighed-dark");
        rowData.classList.add("ramzor-table-highlighed-light");
    }   
    
    
    innerText.innerText = dataTable[index][col];
    rowData.appendChild(innerText);
    rowData.classList.add("row-data");
    return rowData;
}

let deleteRamzorTable = function() {
    let table = document.querySelector(".ramzor-table-rows");
    while(table.firstChild)
        table.removeChild(table.firstChild);
}

createRamzorTable(ramzorMockData, 1);

let ramzorButtons = document.querySelectorAll(".ramzor-header button");

ramzorButtons[0].addEventListener('click', ()=>{
    let table = document.querySelector(".ramzor-table-rows");
    let asc = ramzorButtons[0].querySelector('span').classList.contains("flip-triangle");
    if(table.children.length > 1) {
        ramzorMockData = ramzorMockData.sort(sortByCity(asc));
        deleteRamzorTable();
        createRamzorTable(ramzorMockData, 1);
    }   
})

for(let i = 1; i < ramzorButtons.length; i++){
    ramzorButtons[i].addEventListener('click', ()=>{
        let table = document.querySelector(".ramzor-table-rows");
        let asc = ramzorButtons[i].querySelector('span').classList.contains("flip-triangle");
        if(table.children.length > 1) {
            ramzorMockData = ramzorMockData.sort(sortByNumber(i, asc));
            deleteRamzorTable();
            createRamzorTable(ramzorMockData, 1);
        }
    })
}

ramzorSearchBox.addEventListener('input', ()=>{
    let searchResultArr = [];
    let filterdMockData = [];

    for(let j = 0; j < ramzorMockData.length; j++){
        if(ramzorMockData[j][0].includes(ramzorSearchBox.value) && ramzorSearchBox.value.length > 0)
        searchResultArr.push(ramzorMockData[j][0]);
    }

    if(searchResultArr.length > 0)
        ramzorSearchResults.classList.remove("displayNone");
    else {
        ramzorSearchResults.classList.add("displayNone");
    }

    ramzorClearList();
    ramzorCreateList(searchResultArr);
    filterdMockData = applyMockFilter(searchResultArr, ramzorMockData);
    deleteRamzorTable();
    if(filterdMockData.length > 0)
        createRamzorTable(filterdMockData, 1);
    else
        createRamzorTable(ramzorMockData, 1);

    //can it be done better?
    let ramzorTableRows = document.querySelector(".ramzor-table-rows");
    if(ramzorTableRows.offsetHeight < 200) {
        ramzorTableRows.style.paddingRight = "10px";
    }
    else {
        ramzorTableRows.style.paddingRight = "0px";
    }
    ///////////////////////
})

let applyMockFilter = function(filterArray, mockArray) {
    let filteredMockData = [];
    for(let i = 0; i < filterArray.length; i++) {
        for(let j = 0; j < mockArray.length; j++){
            if(filterArray[i] === mockArray[j][0])
                filteredMockData.push(mockArray[j]);
        }
    }
    return filteredMockData;
}


let ramzorClearList = function() {
    while(ramzorSearchResults.firstChild)
        ramzorSearchResults.removeChild(ramzorSearchResults.firstChild);
}

let ramzorCreateList = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        let listMember = document.createElement("li");
        listMember.addEventListener('click', ()=> {
            ramzorSearchBox.value = listMember.innerText;
            ramzorSearchResults.classList.add("displayNone");
            let filterdMockData = applyMockFilter([ramzorSearchBox.value], ramzorMockData);
            deleteRamzorTable();
            createRamzorTable(filterdMockData,1);
        })
        listMember.textContent = arr[i];
        ramzorSearchResults.appendChild(listMember);
    }
}

/*charts code start here */
Highcharts.setOptions({
    chart: {
        style: {
            font: '12px Sans-serif'
        },
    },

    title: {
        style:{
            font: '14px Sans-serif',
            color: '#777b88'
        },
        margin: -20,
        x : 55,
        widthAdjust: -600,
    },

    legend: {
        itemStyle: {
            font: '12px Sans-serif'
         }
    },

    xAxis: {  
        labels: {
            style:{

            }
        },
    }
});

const areaSplintChart =
Highcharts.chart('container-areaSpline', {
    chart: {
        type: 'areaspline',
        backgroundColor: 'rgba(222,222,222,0)',
    },
    
    title: {
        text: 'מספר מאושפזים',
        align: 'left',
    },

    legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top',
        useHTML: true,
        borderWidth: 0,
        rtl: true,
        itemStyle: {
            'cursor': 'default'
        },
        backgroundColor: 'rgba(222,222,222,0)',
        reversed : true,
    },

    xAxis: {
        type: 'datetime',
        tickWidth: 1,
        tickPixelInterval : 50,
        tickmarkPlacement: 'on',
        title: {
            text: 'תאריך',
            style:{
                font: '14px Sans-serif',
                color: '#777b88'
            },
        },
        crosshair: {
            width: 1,
            color: 'grey',
        },
         
        labels: {
            format: '{value: %d.%m}',
            style:{
                
            }
        },
        useHTML: true,
    },

    yAxis: {
        tickWidth: 1,   
        gridLineColor: '#cccccc',

        title: {
            text: '',
        },
        
        tickPositioner: function() {
            let currentTick = 0;
            let res = [];
            let maxVal = this.chart.yAxis[0].max;

            for(let i = 0; i < 6; i++){
                res.push(currentTick);
                currentTick+= Math.floor((maxVal / 5));
            }   
            
           return res;
        },
        labels: {
          x: -40,
          style:{
                
          }
        },
    },

    tooltip: {
        shared: true,
        borderRadius: 10,
        shape: "rect",
        useHTML: true,
        align: 'center',
        
        formatter: function () {
            const weekday = ["יום א'","יום ב'","יום ג'","יום ד'","יום ה'","יום ו'","יום ש'"];
            let _date = new Date(this.x);
            let _day = _date.getDay();
            let tooltipString = "";
            let pointIndex;

            tooltipString = '<div class="highcharts-tooltip">' + 
                        tooltipXaxisText(weekday[_day], _date.getDate(), _date.getMonth() + 1, _date.getFullYear());
            for(let i = 2; i >= 0; i--){
                if(areaSplintChart.series[i].visible) {
                    pointIndex = getXvalueIndex(this.x, areaSplintChart.series[i].points);
                    tooltipString += tooltipFlex([
                                [["colored-circle-tooltip"], ["background:" + areaSplintChart.series[i].color],""],
                                [["tooltip-number"], [], areaSplintChart.series[i].points[pointIndex].y],
                                [["tooltip-text"],[], areaSplintChart.series[i].name]
                                ]
                            )
                }
            } 
            tooltipString+='</div>';
            return tooltipString;
        },
        
        positioner: function(labelWidth, labelHeight, point) {
        
            if(point.plotX < areaSplintChart.plotLeft)
                tooltipX = point.plotX + areaSplintChart.plotLeft;

            else if(point.plotX + labelWidth > areaSplintChart.plotWidth + 80)
                tooltipX = point.plotX - labelWidth;
            else
                tooltipX = point.plotX;

            tooltipY = point.plotY + 80;
            return {
            x: tooltipX,
            y: tooltipY
            };
        },
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        areaspline: {
            fillOpacity: 0.7,
        },
        series: {
            pointStart: Date.now() - 24 * 36e5 * 30,
            pointInterval: 24 * 36e5,
            marker : {
                lineWidth : 1
            },
            stacking: 'normal',

            states: {
                hover: {
                    halo: {
                        size: 0,
                    }
                }
            }
        },  
    },

    series: [
        {
            name: 'קל',
            symbol: 'circle',
            data: [],
            color: "",
            pointPlacement: 'on',
            marker: {
                symbol: 'circle'
            },
            events: {
                legendItemClick: function(e) {
                    e.preventDefault()
                },
            },
            states: {
                inactive: {
                    opacity: 1
                }
            },
        },

        {
            name: 'בינוני',
            symbol: 'circle',
            data: [],
            color: "",
            pointPlacement: 'on',
            marker: {
                symbol: 'circle'
            },
            events: {
                legendItemClick: function(e) {
                    e.preventDefault()
                },
            },
            states: {
                inactive: {
                    opacity: 1
                }
            },
        },

        {
            name: 'קשה',
            data: [],
            color: '',
            pointPlacement: 'on',
            marker: {
                symbol: 'circle',
            },
            events: {
                legendItemClick: function(e) {
                    e.preventDefault()
                },
            },
            states: {
                inactive: {
                    opacity: 1
                }
            }
        }, 
    ]
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let tooltipXaxisText = function(weekday, day, month,year){
    return '<b>' + weekday + " " + day + "."  + month + "." + year + '</b>'
}

let tooltipFlex = function(divs) {
    let retvalue = '<div class="tooltip-flex">'; 
    for(let i = 0; i < divs.length; i++){
        retvalue+=tooltipFlexItem(divs[i][0], divs[i][1], divs[i][2]);
    }
    return retvalue + "</div>";
}

let tooltipFlexItem = function(classes, styles , data) {
    let retValue = "<div class=\"";
    for(let i = 0; i < classes.length; i++) {
        retValue = retValue + " " + classes[i];
    }
    
    retValue+="\" style=\"";

    for(let i = 0; i < styles.length; i++) {
        retValue = retValue + " " + styles[i];
    }
    retValue += "\""
    return retValue + ">" + data + "</div>";
}

let getXvalueIndex = function(xValue, pointArray) {
    let index = 0;
    while(true) {
        if(pointArray[index].x === xValue){
            return index;
        }
        index++;
    }
}

const areaSplineData = [[],[],[]];
for(let i = 0; i < Math.floor((Date.now() - Date.UTC(2021, 0, 1)) / (24 * 36e5)); i++){
    areaSplineData[2].push(getRandomInt(100, 800));
    areaSplineData[1].push(getRandomInt(100, 800));
    areaSplineData[0].push(getRandomInt(100, 800));
}

const updatePointData = function(chart, data){
    for(let i = 0; i < data.length; i++){
        chart.series[i].setData(data[i]);
    }
}

const updatePointDataSlice = function(chart, data, offset) {
    let slicedData = [];
    for(let i = 0; i < data.length; i++){
        slicedData.push(data[i].slice(offset));
    }
    updatePointData(chart,  slicedData);
}

const updateXaxisValues = function(currentChart, offset) {
    if (offset === 0) {
        currentChart.update({ 
            plotOptions: {
                series: {
                    pointStart: Date.UTC(2021, 0, 1),
                }
            }
        })
    }
    else {
        currentChart.update({ 
            plotOptions: {
                series: {
                    pointStart: Date.now() + 24 * 36e5 * offset,
                }
            }
        })
    }
}

updatePointDataSlice(areaSplintChart, areaSplineData, -30);

const lightPatientsLight = '#237d7d';
const mediumPatientsLight = '#b6ca51';
const severePatientsLight = '#50cbfd';
const lightPatientsDark = '#9be985';
const mediumPatientsDark = '#fd8264';
const severePatientsDark = '#2cd2db';
const graphBackgroundDark = '#384f5f';
const areaSplineFilter = document.querySelector(".areaSpline-filter");

areaSplineFilter.addEventListener('click', ()=> {
    let filterboxContainer = document.querySelector(".filterbox-container");
    arrowRotate(".areaSpline-arrow");
    filterboxContainer.classList.toggle("displayNone");
})

const areaSplineButtons = document.querySelectorAll('.filterbox-container button');

areaSplineButtons[0].addEventListener('click' , ()=> {
    const filterboxContainer = document.querySelector(".filterbox-container");
    const areaSplineRadio = document.querySelectorAll('input[name="time"]');
    const areaSplineCheck = document.querySelectorAll('input[name="state"]');
    const daysIntervalArray = [0, -365, -180, -90, -30];

    for(let i = 0; i < areaSplineCheck.length; i++) {
        if(areaSplineCheck[i].checked === false) {
            areaSplintChart.series[areaSplineCheck.length - 1 - i].update({visible: false});
            areaSplintChart.series[areaSplineCheck.length - 1 - i].update({showInLegend: false});
        }

        else {
            areaSplintChart.series[areaSplineCheck.length - 1 - i].update({visible: true});
            areaSplintChart.series[areaSplineCheck.length - 1 - i].update({showInLegend: true});
        }
    }
    
    for(let i = 0; i < areaSplineRadio.length; i++) {        
        if(areaSplineRadio[i].checked){
            updateXaxisValues(areaSplintChart, daysIntervalArray[i]);
            updatePointDataSlice(areaSplintChart, areaSplineData, daysIntervalArray[i]);
        }
    }

    arrowRotate(".areaSpline-arrow");
    filterboxContainer.classList.toggle("displayNone");
})

areaSplineButtons[1].addEventListener('click', ()=> {
    const filterboxContainer = document.querySelector(".filterbox-container");
    arrowRotate(".areaSpline-arrow");
    filterboxContainer.classList.toggle("displayNone");

})

areaSplintChart.series[2].update({ color: severePatientsLight});
areaSplintChart.series[1].update({ color: mediumPatientsLight});
areaSplintChart.series[0].update({ color: lightPatientsLight});


const updateChartTextColors = function(chart, colorVar){
    chart.update({
        title: {
            style: {
                color: colorVar
            }
        },
        legend: {
            itemStyle: {
                color: colorVar
             }
        },
        xAxis: {
            labels: {
                style:{
                    color: colorVar
                }
            },
            title: {
                style: {
                    color: colorVar
                }
            },
        },
        yAxis: {
            labels: {
                style:{
                    color: colorVar
                }
            },
        },
    })
}

const updateChartSeriesColors = function (chart, colorArray) {
    for(let i = 0; i < colorArray.length; i++) {
        chart.series[i].update({color : colorArray[i]})
    }
}

