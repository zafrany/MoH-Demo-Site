import * as utils from './chartUtils.mjs';
import { arrowRotate } from './docUtils.mjs';

export const menLight = '#50cbfd';
export const womenLight = '#b6ca51';

export const menDark = '#2cd2db';
export const womenDark = '#fd8264';

const categories = ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90+'];
let absoluteNumbersData = 230359;

const verifiedCases = [4005240, 3174270, 2693834, 1925958, 230359];
const categoryPercentage = [100, 2, 5, 8];
let percentageDistributionMale = generate(50, 10);
let percentageDistributionFemale = generate(50, 10).map(x => x * -1);

function generate(max, thecount) {
    var r = [];
    var currsum = 0;
    for(var i=0; i<thecount; i++) {
        r.push(Math.random() + 1);
        currsum += r[i];
    }
    for(var i=0; i<r.length; i++) {
        r[i] = r[i] / currsum * max;
    }
    return r;
}

export const ageAndsexMetricsChart =     
Highcharts.chart('container-age-sex-metrics', {
    chart: {
        backgroundColor: 'rgba(222,222,222,0)',
        type: 'bar',
    },
    title: {
        text: 'קבוצת גיל',
        align: 'left',
        x: 33,  
    },

    credits: {
        enabled: false
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
        alignColumns: false,
    },

    xAxis: [{
        gridLineWidth: 1,
        tickWidth: 0,
        crosshair: {
            width: 1,
            color: 'rgba(204, 204, 204, 1)',
        },
        categories: categories,
        reversed: false,
        labels: {
            step: 1,
            x: -5,
            useHTML: true,
            style:{
                width:'40px',
            },
            step: 1,
            formatter: function () {
                return '<div style="text-align: right;">' + this.value + '</div>';
            }
        },
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        //linkedTo: 0,
        labels: {
            step: 1
        },
    }],

    yAxis: {
        gridLineWidth: 1,
        tickWidth: 1,
        title: {
            text: '% סה"כ',
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            },
        },
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        shared: 'true',
        borderRadius: 10,
        shape: "rect",
        useHTML: true,
        align: 'center',
        formatter: function () {
            let tooltipString = 
                '<div class="highcharts-tooltip">' + 
                    '<b>' + this.x + '</b>';
            
            for(let i = 0; i < ageAndsexMetricsChart.series.length ; i++){
                tooltipString += utils.tooltipFlex([
                            [["colored-circle-tooltip"], ["background:" + ageAndsexMetricsChart.series[i].color],""],
                            [["tooltip-number"],[], Math.abs(this.points[i].y).toFixed(1) + "%"],
                            [[],[], ageAndsexMetricsChart.series[i].name],
                            [["tooltip-text"],[], "(" +  Math.abs(Math.round(this.points[i].y * absoluteNumbersData / 100)) + ")"],
                            ]
                )
            } 
            tooltipString+='</div>';
            return tooltipString;
        },
        positioner: function(labelWidth, labelHeight, point) {
            return {
            x: 150,
            y: point.plotY
            };
        },
    },

    series: [{
        name: 'גברים',
        color: "",
        data: [], //positive numbers
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
        dataLabels: {
            enabled: true,
            useHTML: true,
            align: 'right',
            x: 33,
            formatter: function() {
                return '<div class="datalabel-style datalabel-light">' + Math.abs(this.y).toFixed(1) + "%" + '</div>';
            },
        }
    }, 
    {
        name: 'נשים',
        color: "",
        data: [], //negative numbers
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
        dataLabels: {
            enabled: true,
            useHTML: true,
            color: '#222b45',
            align: 'left',
            x: -33,
            formatter: function() {
                return '<div class="datalabel-style datalabel-light">' + Math.abs(this.y).toFixed(1) + "%" + '</div>';
            },
        }
    },
]
});

ageAndsexMetricsChart.series[1].update({ color: womenLight});
ageAndsexMetricsChart.series[0].update({ color: menLight});

utils.updatePointData(ageAndsexMetricsChart, [percentageDistributionMale, percentageDistributionFemale]);

const deceasedFilter = document.querySelector(".age-sex-filter");
deceasedFilter.addEventListener('click', ()=> {
    let filterboxContainer = document.querySelector(".age-sex-metrics-filterbox");
    arrowRotate(".age-sex-arrow");
    filterboxContainer.classList.toggle("displayNone");
})

const ageAndSexButtons = document.querySelectorAll('.age-sex-metrics-filterbox button');

ageAndSexButtons[0].addEventListener('click' , ()=> {
    const buttonText = document.querySelector(".age-sex-filter .search-button__text"); 
    const filterboxContainer = document.querySelector(".age-sex-metrics-filterbox");
    const verifiedPatientsState = document.querySelectorAll('input[name="state-age-sex"]');
    const verifiedPatientsNumber = document.querySelectorAll('input[name="age-sex-metrics"]');
    
    const verifiedText = document.querySelectorAll(".age-sex-state span");
    const numberText = document.querySelectorAll(".age-sex-metrics-filterbox .time span");
    let updatedText = "";
    let selectedState, selectedNumber;

    percentageDistributionMale = generate(50, 10);
    percentageDistributionFemale = generate(50, 10).map(x => x * -1);
    const dataSet = [percentageDistributionMale, percentageDistributionFemale];
    utils.updatePointData(ageAndsexMetricsChart, dataSet);

    for(let i = 0; i < verifiedPatientsState.length; i++){
        if(verifiedPatientsState[i].checked)
        {
            selectedState = categoryPercentage[i];
            updatedText = updatedText + verifiedText[i].innerText + ", ";
        }
    }

    for(let i = 0; i < verifiedPatientsNumber.length; i++){
        if(verifiedPatientsNumber[i].checked)
        {
            selectedNumber = verifiedCases[i];
            updatedText = updatedText + numberText[i].innerText;
        }
    }
    absoluteNumbersData = Math.round(selectedNumber * selectedState / 100);    
    
    arrowRotate(".age-sex-arrow");
    filterboxContainer.classList.toggle("displayNone");
    buttonText.innerText = updatedText;
})

ageAndSexButtons[1].addEventListener('click', ()=> {
    const filterboxContainer = document.querySelector(".age-sex-metrics-filterbox");
    arrowRotate(".age-sex-arrow");
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