$(function () {
    var chartDom = document.getElementById('tree_chat');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        color: [
            'rgb(33,165,89)',
            'rgb(229,102,81)',
          ],
        series: [{
            type: 'treemap',
            data: [{
                name: 'nodeA',            // First tree
                value: 10,
                children: [{
                    name: '超级算力\n-5.32%',       // First leaf of first tree
                    value: 4
                }, {
                    name: '侧链&跨链\n-5.32%',     // Second leaf of first tree
                    value: 9
                }
                , {
                    name: '波卡\n-5.32%',       // Second leaf of first tree
                    value: 4
                }, {
                    name: '波卡\n-5.32%',       // Second leaf of first tree
                    value: 3
                }, {
                    name: '波卡\n-5.32%',       // Second leaf of first tree
                    value: 1
                }, {
                    name: '波卡\n-5.32%',       // Second leaf of first tree
                    value: 1
                }]
            }, {
                name: 'nodeB',            // Second tree
                value: 20,
                children: [{
                    name: 'nodeBa',       // Son of first tree
                    value: 20,
                    children: [{
                        name: '超级算力\n+5.32%',  // Granson of first tree
                        value: 5.32
                    },
                    {
                        name: 'NFT\n+10.32%',  // Granson of first tree
                        value: 10
                    }
                    ],

                }]
            }]
        }]
    };

    option && myChart.setOption(option);
})

