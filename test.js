let arr = [
    ["רעננה","89.7%","86.28%","70.69%","153.1","10"],
    ["יבנה","74.76%","69.92%","52.18%","113.5","10"],
    ["טירה","64.95%","56.31%","33.66%","19.3","6"],
    ["אשדוד","70.95%","64.18%","47.31%","60.6","9.2"],
    ["בני ברק","45.33%","33.38%","19.79%","7.5","5.1"],
    ["חורה","25.12%","21.08%","8.92%","7.8","4.3"],
    ["קיסריה","מעל 90%","87.76%","72.34%","167.7","10"]
];

let sortByCityAsc = function(a, b){
    return a[0].localeCompare(b[0])
}

let sortByCityDes = function(a, b){
    return b[0].localeCompare(a[0])
}

let sortByPercentAsc = function(a, b) {
    let aPercent = a[1];
    let bPercent = b[1];
    if(aPercent === "מעל 90%")
         aPercent = "90%";
    if(bPercent === "מעל 90%")
        bPercent = "90%";
    return aPercent.localeCompare(bPercent);
}

let sortByPercentDes = function(a, b) {
    let aPercent = a[1];
    let bPercent = b[1];
    if(aPercent === "מעל 90%")
         aPercent = "90%";
    if(bPercent === "מעל 90%")
        bPercent = "90%";
    return bPercent.localeCompare(aPercent);
}

