$(function () {
    var chartDom = document.getElementById('circle_pie');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '5%',
            left: 'center'
        },
        series: [
            {
                name: '板块占比',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '超级算力' },
                    { value: 735, name: 'Solana 生态' },
                    { value: 580, name: '波卡' },
                    { value: 484, name: '公链' },
                    { value: 300, name: '体育竞技' }
                ]
            }
        ]
    };
    option && myChart.setOption(option);
})
