import * as utils from './chartUtils.mjs';
import { arrowRotate } from './docUtils.mjs';

export const lightPatientsLight = '#237d7d';
export const mediumPatientsLight = '#b6ca51';
export const severePatientsLight = '#50cbfd';
export const lightPatientsDark = '#9be985';
export const mediumPatientsDark = '#fd8264';
export const severePatientsDark = '#2cd2db';

export const lineChart =
Highcharts.chart('container-line', {
    chart: {
        type: 'line',
        backgroundColor: 'rgba(222,222,222,0)',
    },
    
    title: {
        text: 'תושבים נכנסים',
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
        reversed : true,
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
                currentTick+= Math.floor((maxVal / 5));
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
            for(let i = 2; i >= 0; i--){
                if(lineChart.series[i].visible) {
                    pointIndex = utils.getXvalueIndex(this.x, lineChart.series[i].points);
                    tooltipString += utils.tooltipFlex([
                                [["colored-circle-tooltip"], ["background:" + lineChart.series[i].color],""],
                                [["tooltip-number"], [], lineChart.series[i].points[pointIndex].y],
                                [["tooltip-text"],[], lineChart.series[i].name]
                                ]
                            )
                }
            } 
            tooltipString+='</div>';
            return tooltipString;
        },
        
        positioner: function(labelWidth, labelHeight, point) {
            let tooltipX,tooltipY;
            if(point.plotX < lineChart.plotLeft)
                tooltipX = point.plotX + lineChart.plotLeft;

            else if(point.plotX + labelWidth > lineChart.plotWidth + 80)
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
            name: 'לא מחוסנים',
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
            name: 'מחוסנים ללא תוקף',
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
            name: 'מחוסנים',
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

const lineData = [[],[],[]];
const lineDataVerified = [[],[],[]];
for(let i = 0; i < Math.floor((Date.now() - Date.UTC(2021, 0, 1)) / (24 * 36e5)); i++){
    lineData[2].push(utils.getRandomInt(100, 800));
    lineData[1].push(utils.getRandomInt(100, 800));
    lineData[0].push(utils.getRandomInt(100, 800));

    lineDataVerified[2].push(utils.getRandomInt(100, 300));
    lineDataVerified[1].push(utils.getRandomInt(100, 300));
    lineDataVerified[0].push(utils.getRandomInt(100, 300));
}

utils.updatePointDataSlice(lineChart, lineData, -30);
lineChart.series[2].update({ color: severePatientsLight});
lineChart.series[1].update({ color: mediumPatientsLight});
lineChart.series[0].update({ color: lightPatientsLight});

const lineFilter = document.querySelector(".line-filter");
lineFilter.addEventListener('click', ()=> {
    let filterboxContainer = document.querySelector(".abroad-metrics-filter");
    arrowRotate(".line-arrow");
    filterboxContainer.classList.toggle("displayNone");
})

const abroadMetricsButtons = document.querySelectorAll('.abroad-metrics-filter button');

abroadMetricsButtons[0].addEventListener('click' , ()=> {
    const buttonText = document.querySelector(".line-filter .search-button__text"); 
    const filterboxContainer = document.querySelector(".abroad-metrics-filter");
    const lineRadioCategory = document.querySelectorAll('.abroad-metrics-filter input[name="state"]');
    const lineRadioTime = document.querySelectorAll('.abroad-metrics-filter input[name="time"]');
    const daysIntervalArray = [0, -365, -180, -90, -30];
    const timeText = document.querySelectorAll(".abroad-metrics-filter .time span");
    const verifiedText = document.querySelectorAll(".verified-aboard span");
    let updatedText = "כלל המדינות, ";

    let dataSet = lineRadioCategory[0].checked? lineData: lineDataVerified;
    updatedText = updatedText+ " " + (lineRadioCategory[0].checked? verifiedText[0].innerText : verifiedText[1].innerText) + ",";
    
    for(let i = 0; i < lineRadioTime.length; i++) { 
        if(lineRadioTime[i].checked){
            utils.updateXaxisValues(lineChart, daysIntervalArray[i]);
            utils.updatePointDataSlice(lineChart, dataSet, daysIntervalArray[i]);
            updatedText+= " " + timeText[i].innerText;
        }
    }

    arrowRotate(".line-arrow");
    filterboxContainer.classList.toggle("displayNone");
    buttonText.innerText = updatedText;
})

abroadMetricsButtons[1].addEventListener('click', ()=> {
    const filterboxContainer = document.querySelector(".abroad-metrics-filter");
    arrowRotate(".line-arrow");
    filterboxContainer.classList.toggle("displayNone");

})

window.addEventListener('resize', function(event) {
    const chartContainer = document.querySelector('.chart-container');
    lineChart.update(
        {
        chart: {
            width: 0.9 * chartContainer.offsetWidth
        }
    })
}, true);