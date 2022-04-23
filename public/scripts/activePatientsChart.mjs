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
        gridLineWidth: 1,
        tickWidth: 1,
        title: {
            text: 'קבוצת גיל',
            style:{
                font: '14px Sans-serif',
                color: '#777b88'
            },
        },
        crosshair: {
            color: 'rgba(204, 204, 204, 0.5)',
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
        gridLineWidth: 1,
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

const activePatientsData = [[[],[],[]] , [[],[],[]]];
for(let i = 0; i < activePatientsChart.xAxis[0].categories.length; i++){
    activePatientsData[0][2].push(utils.getRandomInt(0, 3500)); //absolute
    activePatientsData[0][1].push(utils.getRandomInt(0, 3500));
    activePatientsData[0][0].push(utils.getRandomInt(0, 3500));

    activePatientsData[1][2].push(utils.getRandomInt(0, 500)); //per 100k
    activePatientsData[1][1].push(utils.getRandomInt(0, 500));
    activePatientsData[1][0].push(utils.getRandomInt(0, 500));
}

const severePatientsData = [[[],[],[]] , [[],[],[]]];
for(let i = 0; i < activePatientsChart.xAxis[0].categories.length; i++){
    severePatientsData[0][2].push(utils.getRandomInt(0, 300)); //absolute 
    severePatientsData[0][1].push(utils.getRandomInt(0, 300));
    severePatientsData[0][0].push(utils.getRandomInt(0, 300));

    severePatientsData[1][2].push(utils.getRandomInt(0, 100)); //per 100k
    severePatientsData[1][1].push(utils.getRandomInt(0, 100));
    severePatientsData[1][0].push(utils.getRandomInt(0, 100));
}

utils.updatePointData(activePatientsChart, activePatientsData[1]);

activePatientsChart.series[2].update({ color: severePatientsLight});
activePatientsChart.series[1].update({ color: mediumPatientsLight});
activePatientsChart.series[0].update({ color: lightPatientsLight});

const activePatientsFilter = document.querySelector(".active-patients-filter");
activePatientsFilter.addEventListener('click', ()=> {
    let filterboxContainer = document.querySelector(".active-patients-filterbox");
    arrowRotate(".active-patients-arrow");
    filterboxContainer.classList.toggle("displayNone");
})


const activePatientsButtons = document.querySelectorAll('.active-patients-filterbox button');

activePatientsButtons[0].addEventListener('click' , ()=> {
    const buttonText = document.querySelector(".active-patients-filter .search-button__text"); 
    const filterboxContainer = document.querySelector(".active-patients-filterbox");
    const verifiedPatientsState = document.querySelectorAll('input[name="state-verified-patients"]');
    const verifiedPatientsNumber = document.querySelectorAll('input[name="number-verified-patients"]');
    
    const verifiedText = document.querySelectorAll(".verified-patients-state span");
    const numberText = document.querySelectorAll(".number-of-verified span");
    let updatedText = "";
    
    let dataSet = verifiedPatientsState[0].checked? activePatientsData: severePatientsData;
    dataSet = verifiedPatientsNumber[0].checked? dataSet[0] : dataSet[1];

    updatedText = updatedText + (verifiedPatientsState[0].checked? verifiedText[0].innerText : verifiedText[1].innerText) + ",";
    
    
    for(let i = 0; i < dataSet.length; i++) 
        utils.updatePointData(activePatientsChart, dataSet);

    
    updatedText = updatedText + " " + (verifiedPatientsNumber[0].checked? numberText[0].innerText : numberText[1].innerText);
    
    
    arrowRotate(".active-patients-arrow");
    filterboxContainer.classList.toggle("displayNone");
    buttonText.innerText = updatedText;
})

activePatientsButtons[1].addEventListener('click', ()=> {
    const filterboxContainer = document.querySelector(".active-patients-filterbox");
    arrowRotate(".line-arrow");
    filterboxContainer.classList.toggle("displayNone");

})


window.addEventListener('resize', function(event) {
    const chartContainer = document.querySelector('.chart-container');
    activePatientsChart.update(
        {
        chart: {
            width: 0.9 * chartContainer.offsetWidth
        }
    })
}, true);
