
$(function () {

    var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
    var chartDom = document.getElementById('pie_chat');
    var myChart = echarts.init(chartDom);
    var option;

    var weatherIcons = {

        'Sunny': ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
        'Cloudy': ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
        'Showers': ROOT_PATH + '/data/asset/img/weather/showers_128.png'
    };

    option = {
        title: {
            text: '当前市值占比统计',
            subtext: '截至2021-9-1日前数据',
            left: 'center'
        },
        tooltip: {
            formatter: '{b} : {c} ({d}%)'
        },
        legend: {
            bottom: 10,
            left: 'center',
            data: ['BTC', 'ETH', 'ADA', 'BNB', 'USDT','XRP','DOGE','SOL','DOT','UNI','LUNA','LINK','BCH']
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                    { value: 1015.63,name: 'UNI'},
                    { value: 2483.85,name: 'DOGE'},
                    { value: 1981.85, name: 'SOL' },
                    { value: 1929.79, name: 'DOT' },
                    { value: 908.63, name: 'LUNA' },
                    { value: 800.75, name: 'LINK' },
                    { value: 4280.18, name: 'BCH' },
                    { value: 3673.01,name: 'XRP'},
                    { value: 6122.55, name: 'ADA' },
                    { value: 5286.59, name: 'BNB' },
                    { value: 28500, name: 'ETH' },
                    { value: 60000, name: 'BTC' },
                    { value: 4280.18, name: 'USDT' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    option && myChart.setOption(option);
})
