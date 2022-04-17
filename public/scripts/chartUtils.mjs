export const highchartsSettings =
Highcharts.setOptions({
    lang: {
        numericSymbols: null
    },

    chart: {
        style: {
            font: '12px Sans-serif'
        },
        marginLeft : 40,
    },

    title: {
        style:{
            font: '14px Sans-serif',
            color: '#777b88',
        },
        
        x : 55,
        widthAdjust: -600,
    },

    legend: {
        itemStyle: {
            font: '12px Sans-serif'
         },
         itemMarginTop: -40,
    },

    tooltip: {
        style: {
            fontFamily: 'Sans-serif',
            fontSize: '14px', 
        }
    },
});

export const getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

export const updatePointData = function(chart, data){
    for(let i = 0; i < data.length; i++){
        chart.series[i].setData([]);
    }
    for(let i = 0; i < data.length; i++){
        chart.series[i].setData(data[i]);
    }
}

export const updatePointDataSlice =  function(chart, data, offset) {
    let slicedData = [];
    for(let i = 0; i < data.length; i++){
        slicedData.push(data[i].slice(offset));
    }
    updatePointData(chart,  slicedData);
}

export const tooltipXaxisText = function(weekday, day, month,year){
    return '<b>' + weekday + " " + day + "."  + month + "." + year + '</b>'
}

export const getXvalueIndex = function(xValue, pointArray) {
    let index = 0;
    while(true) {
        if(pointArray[index].x === xValue){
            return index;
        }
        index++;
    }
}

export const getCategoryIndex = function(category, pointArray) {
    let index = 0;
    while(true) {
        if(pointArray[index].category === category){
            return index;
        }
        index++;
    }
}

const tooltipFlexItem = function(classes, styles , data) {
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

export let tooltipFlex = function(divs) {
    let retvalue = '<div class="tooltip-flex">'; 
    for(let i = 0; i < divs.length; i++){
        retvalue+=tooltipFlexItem(divs[i][0], divs[i][1], divs[i][2]);
    }
    return retvalue + "</div>";
}

export const updateXaxisValues = function(currentChart, offset) {
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

export const updateChartTextColors = function(chart, colorVar){
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

export const updateChartSeriesColors = function (chart, colorArray) {
    for(let i = 0; i < colorArray.length; i++) {
        chart.series[i].update({color : colorArray[i]})
    }
}