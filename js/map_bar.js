
$(function(){


var chartDom = document.getElementById('map_bar');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '谷歌搜索指数排行',
        subtext: '数据来自google trend'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2021年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        inverse: true,
        type: 'category',
        data:['Bahamas', 'Slovenia', 'Nigeria', 'Namibia', 'Cuba', 'Turkey', 'Ghana', 'Pakistan', 'St. Helena', 'Cyprus', 'Venezuela', 'Singapore', 'China', 'Czechia', 'Georgia', 'Australia', 'Philippines', 'Canada', 'South Africa', 'United Arab Emirates', 'Netherlands', 'Switzerland', 'Bangladesh', 'Lithuania', 'Lebanon', 'New Zealand', 'Sri Lanka', 'Hong Kong', 'Kenya', 'Israel', 'Austria', 'Bulgaria', 'Slovakia', 'Croatia', 'Norway', 'Serbia', 'Belgium', 'Poland', 'Colombia', 'Argentina', 'Malaysia', 'United Kingdom', 'Costa Rica', 'Ireland', 'Hungary', 'United States', 'Morocco', 'Romania', 'India', 'Sweden', 'Portugal', 'Germany', 'Thailand', 'Spain', 'Indonesia', 'Finland', 'Dominican Republic', 'Ukraine', 'Russia', 'Brazil', 'Vietnam', 'France', 'Denmark', 'Algeria', 'Chile', 'Peru', 'Greece', 'Iran', 'South Korea', 'Ecuador', 'Italy', 'Egypt', 'Saudi Arabia', 'Taiwan', 'Mexico', 'Japan']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: ['100', '60', '52', '50', '30', '27', '25', '23', '20', '20', '18', '18', '16', '13', '13', '13', '13', '13', '11', '11', '11', '10', '10', '9', '9', '9', '9', '9', '9', '9', '8', '8', '8', '8', '8', '7', '7', '7', '7', '7', '7', '7', '7', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '5', '5', '5', '5', '4', '4', '4', '4', '4', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '2', '1']
        }
    ]
    
};

option && myChart.setOption(option);
})

