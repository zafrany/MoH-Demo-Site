import * as utils from './chartUtils.mjs';
import { arrowRotate } from './docUtils.mjs';

export const deceasedAverageLight = '#ff7d67';
export const deceasedAverageDark = '#fcc537';

export const deceasedCountLight = '#237d7d';
export const deceasedCountDark = '#9be985';

export const deceasedChart =
Highcharts.chart('container-deceased', {
    chart: {
        backgroundColor: 'rgba(222,222,222,0)',
    },
    
    title: {
        text: 'מספר נפטרים',
        align: 'left',
        x: 40,
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
        labelFormatter: function() {
            let resultStr =  
            '<div class="chart-legend">' +
                '<div class="colored-circle-tooltip" style="background:'+ this.color +';"></div>' +
                '<div>' + this.name + '</div>' +
            '</div>';
            return resultStr;
        },
        symbolWidth: 0,
        itemDistance: 10,
        alignColumns: false,
        x: 20,
    },

    xAxis: {
        type: 'datetime',
        tickWidth: 1,
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
        
        tickPositioner: function() {
            let currentTick = this.chart.xAxis[0].min;
            const res = [];
            const maxVal = this.chart.xAxis[0].max;
            const interval = (maxVal - currentTick) / (24 * 36e5) / (this.width / 45);
            for(let i = 0; i < this.width / 45; i++){
                res.push(currentTick);
                currentTick+= interval * 24 * 36e5;
            }   
           return res;
        },
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
                currentTick+= Math.ceil(maxVal / 5);
            } 
            return res;
        },

        labels: {
          align : 'left',
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
                        utils.tooltipXaxisText(weekday[_day], _date.getDate(), _date.getMonth() + 1, _date.getFullYear());
            for(let i = 0; i < deceasedChart.series.length; i++){
                pointIndex = utils.getXvalueIndex(this.x, deceasedChart.series[i].points);
                tooltipString += utils.tooltipFlex([
                            [["colored-circle-tooltip"], ["background:" + deceasedChart.series[i].color],""],
                            [["tooltip-number"], [], deceasedChart.series[i].points[pointIndex].y],
                            [["tooltip-text"],[], deceasedChart.series[i].name]
                            ]
                        )
            } 
            tooltipString+='</div>';
            return tooltipString;
        },
        
        positioner: function(labelWidth, labelHeight, point) {
            let tooltipX,tooltipY;
            if(point.plotX < deceasedChart.plotLeft)
                tooltipX = point.plotX + deceasedChart.plotLeft;

            else if(point.plotX + labelWidth > deceasedChart.plotWidth + 80)
                tooltipX = point.plotX - labelWidth;
            else
                tooltipX = point.plotX;

            tooltipY = point.plotY;
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
                lineWidth : 1,
            },

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
            name: 'נפטרים',
            data: [],
            color: "",
            pointPlacement: 'on',
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
            type: 'column',
            
        },

        {
            name: 'ממוצע נע נפטרים',
            data: [],
            color: "",
            pointPlacement: 'on',
         
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
            type: 'line'
        },

        
    ]
});

const calculateAverage = function(daysInterval, dataSet) {
    let sum = 0;
    let resArray = [];
    
    if(daysInterval < 0){
        for(let i = 0; i < (daysInterval * -1) ; i++) {
            sum+= dataSet[dataSet.length + daysInterval + i ];
            resArray[i] = parseInt(sum / (i + 1));
        }
    }
    else {
        for(let i = 0; i < dataSet.length ; i++) {
            sum+= dataSet[i];
            resArray[i] = parseInt(sum / (i + 1));
        }
    }

    deceasedChart.series[1].setData([]);
    deceasedChart.series[1].setData(resArray);
}

const deceasedData = [[]];

for(let i = 0; i < Math.floor((Date.now() - Date.UTC(2021, 0, 1)) / (24 * 36e5)); i++){
    deceasedData[0][i] = utils.getRandomInt(0, 15);
}


utils.updatePointDataSlice(deceasedChart, deceasedData, -30);
calculateAverage(-30, deceasedData[0]);

deceasedChart.series[0].update({ color: deceasedCountLight });
deceasedChart.series[1].update({ color: deceasedAverageLight });

const deceasedFilter = document.querySelector(".deceased-filter");
deceasedFilter.addEventListener('click', ()=> {
    let filterboxContainer = document.querySelector(".deceased-filterbox");
    arrowRotate(".deceased-arrow");
    filterboxContainer.classList.toggle("displayNone");
})


const abroadMetricsButtons = document.querySelectorAll('.deceased-filterbox button');

abroadMetricsButtons[0].addEventListener('click' , ()=> {
    const buttonText = document.querySelector(".deceased-filter .search-button__text"); 
    const filterboxContainer = document.querySelector(".deceased-filterbox");
    const deceasedRadioCategory = document.querySelectorAll('.deceased-filterbox input[name="deceased-metrics"]');
    const daysIntervalArray = [0, -365, -180, -90, -30];
    const timeText = document.querySelectorAll(".deceased-filterbox .time span");
    let updatedText;
    let dataSet = [];

    for(let i = 0; i < deceasedRadioCategory.length; i++) { 
        if(deceasedRadioCategory[i].checked){
            utils.updateXaxisValues(deceasedChart, daysIntervalArray[i]);
            utils.updatePointDataSlice(deceasedChart, deceasedData , daysIntervalArray[i]);

            for(let j = 0; j < deceasedChart.series[0].points.length; j++)
                dataSet[j] = deceasedChart.series[0].points[j].y;

            calculateAverage(daysIntervalArray[i], dataSet);
            updatedText = timeText[i].innerText;
        }
    }

    arrowRotate(".deceased-arrow");
    filterboxContainer.classList.toggle("displayNone");
    buttonText.innerText = updatedText;
})


abroadMetricsButtons[1].addEventListener('click', ()=> {
    const filterboxContainer = document.querySelector(".deceased-filterbox");
    arrowRotate(".deceased-arrow");
    filterboxContainer.classList.toggle("displayNone");

})

window.addEventListener('resize', function(event) {
    const chartContainer = document.querySelector('.chart-container');
    deceasedChart.update(
        {
        chart: {
            width: 0.9 * chartContainer.offsetWidth
        }
    })
}, true);