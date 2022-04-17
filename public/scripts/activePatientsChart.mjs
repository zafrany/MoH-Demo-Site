import * as utils from './chartUtils.mjs';
import { arrowRotate } from './docUtils.mjs';

export const lightPatientsLight = '#237d7d';
export const mediumPatientsLight = '#b6ca51';
export const severePatientsLight = '#50cbfd';
export const lightPatientsDark = '#9be985';
export const mediumPatientsDark = '#fd8264';
export const severePatientsDark = '#2cd2db';

export const activePatientsChart =
Highcharts.chart('container-active-patients', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(222,222,222,0)',
    },
    
    title: {
        text: 'שיעור חולים פעילים',
        align: 'left',
        x: 33,
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
        alignColumns: false,
    },

    xAxis: {
        type: '',
        tickWidth: 1,
        tickmarkPlacement: 'on',
        title: {
            text: 'קבוצת גיל',
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
        },
        useHTML: true,
        categories: [
            '5-11',
            '12-15',
            '16-19',
            '20-29',
            '30-39',
            '40-49',
            '50-59',
            '60-69',
            '70-79',
            '80-89',
            '90+',
        ],
    },

    yAxis: {
        tickWidth: 1,   
        gridLineColor: '#cccccc',

        title: {
            text: '',
        },
        
        labels: {
          align : 'left',
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
    },

    tooltip: {
        shared: true,
        borderRadius: 10,
        shape: "rect",
        useHTML: true,
        align: 'center',

        formatter: function () {
            let tooltipString = "";
            let pointIndex;
            tooltipString = '<div class="highcharts-tooltip">' + 
                '<b>' + this.x + '</b>';
            for(let i = 2; i >= 0; i--){
                if(activePatientsChart.series[i].visible) {
                    pointIndex = utils.getCategoryIndex(this.x, activePatientsChart.series[i].points);
                    tooltipString += utils.tooltipFlex([
                                [["colored-circle-tooltip"], ["background:" + activePatientsChart.series[i].color],""],
                                [["tooltip-number"], [], activePatientsChart.series[i].points[pointIndex].y],
                                [["tooltip-text"],[], activePatientsChart.series[i].name]
                                ]
                            )
                }
            } 
            tooltipString+='</div>';
            return tooltipString;
        },
        
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            marker : {
                lineWidth : 1,
            },
        },  
    },

    series: [
        {
            name: 'לא מחוסנים',
            symbol: 'circle',
            data: [],
            color: "",
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

const activePatientsData = [[],[],[]];
for(let i = 0; i < activePatientsChart.xAxis[0].categories.length; i++){
    activePatientsData[2].push(utils.getRandomInt(0, 3500));
    activePatientsData[1].push(utils.getRandomInt(0, 3500));
    activePatientsData[0].push(utils.getRandomInt(0, 3500));
}

utils.updatePointData(activePatientsChart, activePatientsData);

activePatientsChart.series[2].update({ color: severePatientsLight});
activePatientsChart.series[1].update({ color: mediumPatientsLight});
activePatientsChart.series[0].update({ color: lightPatientsLight});

const activePatientsFilter = document.querySelector(".active-patients-filter");
activePatientsFilter.addEventListener('click', ()=> {
    let filterboxContainer = document.querySelector(".active-patients-filterbox");
    arrowRotate(".active-patients-arrow");
    filterboxContainer.classList.toggle("displayNone");
})

//console.log(activePatientsChart.series[0].points.length);

/*
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
*/
window.addEventListener('resize', function(event) {
    const chartContainer = document.querySelector('.chart-container');
    activePatientsChart.update(
        {
        chart: {
            width: 0.9 * chartContainer.offsetWidth
        }
    })
}, true);
