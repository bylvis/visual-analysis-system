$(function(){


var chartDom = document.getElementById('lines_chat');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '市值占比堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['BTC', 'ETH', 'ADA', 'BNB', 'USDT']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2021-1', '2021-2', '2021-3', '2021-4', '2021-5', '2021-6', '2021-7']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name:'市值(亿)'
        }
        ,
        {
            type: 'value',
            name:'市值百分比'
        }
    ],
    series: [
        {
            name: 'USDT',
            type: 'line',
            
            label: {
                show: true,
                position: 'top'
            },
            yAxisIndex:1,
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [1, 1.5, 1.7, 1.9, 2.2, 3, 3.53]
        },
        {
            name: 'BNB',
            type: 'line',
           
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'top'
            },
            yAxisIndex:1,
            data: [0.7,1.1, 1.5, 2, 2.2, 3.3, 4.36]
        },
        {
            name: 'ADA',
            type: 'line',
            
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'top'
            },
            yAxisIndex:1,
            data: [1, 1.2, 1.5, 2.1, 2.3, 3.6, 5.05]
        },
        {
            name: 'ETH',
            type: 'line',
           
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            label: {
                show: true,
                position: 'top'
            },
            yAxisIndex:1,
            data: [3, 8, 15, 12, 13, 22, 23]
        },
        {
            name: 'BTC',
            type: 'line',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            label: {
                // show: true,
                position: 'top'
            },
            yAxisIndex:1,
            data: [20, 25, 27, 28, 31, 35, 45]
        },
        {
            name: 'BTC',
            type: 'line',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            label: {
                // show: true,
                position: 'top'
            },
            yAxisIndex:0,
            data: [20000, 25000, 33000, 38000, 40000, 45000, 49480]
        },
        
        
        
        
    ]
};

option && myChart.setOption(option);
})
