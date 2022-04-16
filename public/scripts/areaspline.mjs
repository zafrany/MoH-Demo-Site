import * as utils from './chartUtils.mjs';
import { arrowRotate } from './docUtils.mjs';

export const lightPatientsLight = '#237d7d';
export const mediumPatientsLight = '#b6ca51';
export const severePatientsLight = '#50cbfd';
export const lightPatientsDark = '#9be985';
export const mediumPatientsDark = '#fd8264';
export const severePatientsDark = '#2cd2db';
export const graphBackgroundDark = '#384f5f';

export const areaSplintChart =
Highcharts.chart('container-areaSpline', {
    chart: {
        type: 'areaspline',
        backgroundColor: 'rgba(222,222,222,0)',
    },
    
    title: {
        text: 'מספר מאושפזים',
        align: 'left',
        x: 45,
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
                if(areaSplintChart.series[i].visible) {
                    pointIndex = utils.getXvalueIndex(this.x, areaSplintChart.series[i].points);
                    tooltipString += utils.tooltipFlex([
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
            let tooltipX,tooltipY;
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

const areaSplineData = [[],[],[]];
for(let i = 0; i < Math.floor((Date.now() - Date.UTC(2021, 0, 1)) / (24 * 36e5)); i++){
    areaSplineData[2].push(utils.getRandomInt(100, 800));
    areaSplineData[1].push(utils.getRandomInt(100, 800));
    areaSplineData[0].push(utils.getRandomInt(100, 800));
}
utils.updatePointDataSlice(areaSplintChart, areaSplineData, -30);

const areaSplineFilter = document.querySelector(".areaSpline-filter");
areaSplineFilter.addEventListener('click', ()=> {
    let filterboxContainer = document.querySelector(".main-metrics-areaFilter");
    arrowRotate(".areaSpline-arrow");
    filterboxContainer.classList.toggle("displayNone");
})

const areaSplineButtons = document.querySelectorAll('.main-metrics-areaFilter button');

areaSplineButtons[0].addEventListener('click' , ()=> {
    const buttonText = document.querySelector(".areaSpline-filter .search-button__text");
    let   updatedText = ""; 
    const timeText = document.querySelectorAll(".main-metrics-areaFilter .time span");
    const filterboxContainer = document.querySelector(".main-metrics-areaFilter");
    const areaSplineRadio = document.querySelectorAll('.main-metrics-areaFilter input[name="time"]');
    const areaSplineCheck = document.querySelectorAll('.main-metrics-areaFilter input[name="state"]');
    const daysIntervalArray = [0, -365, -180, -90, -30];

    for(let i = 0; i < areaSplineCheck.length; i++) {
        if(areaSplineCheck[i].checked === false) {
            areaSplintChart.series[areaSplineCheck.length - 1 - i].update({visible: false});
            areaSplintChart.series[areaSplineCheck.length - 1 - i].update({showInLegend: false});
        }

        else {
            areaSplintChart.series[areaSplineCheck.length - 1 - i].update({visible: true});
            areaSplintChart.series[areaSplineCheck.length - 1 - i].update({showInLegend: true});
            updatedText+=  areaSplintChart.series[areaSplineCheck.length - 1 - i].name + ',';
        }
    }
    
    for(let i = 0; i < areaSplineRadio.length; i++) { 
        if(areaSplineRadio[i].checked){
            updateXaxisValues(areaSplintChart, daysIntervalArray[i]);
            updatePointDataSlice(areaSplintChart, areaSplineData, daysIntervalArray[i]);
            updatedText+= " " + timeText[i].innerText;
        }
    }

    arrowRotate(".areaSpline-arrow");
    filterboxContainer.classList.toggle("displayNone");
    buttonText.innerText = updatedText;
})

areaSplineButtons[1].addEventListener('click', ()=> {
    const filterboxContainer = document.querySelector(".filterbox-container");
    arrowRotate(".areaSpline-arrow");
    filterboxContainer.classList.toggle("displayNone");

})

areaSplintChart.series[2].update({ color: severePatientsLight});
areaSplintChart.series[1].update({ color: mediumPatientsLight});
areaSplintChart.series[0].update({ color: lightPatientsLight});

window.addEventListener('resize', function(event) {
    const chartContainer = document.querySelector('.chart-container');
    areaSplintChart.update(
        {
        chart: {
            width: 0.9 * chartContainer.offsetWidth
        }
    })
}, true);