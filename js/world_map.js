$(function () {
    var myChart = echarts.init(document.getElementById('world'));  
        option = {  
            title: {  
                
                
                sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',  
                left: 'center',  
                top: 'top'  
            },  
           tooltip: {  
        
                trigger: 'item',  
                formatter: function (params) {  
                    var value = (params.value + '').split('.');  
                    value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')  
                            + '.' + value[1];  
                    return params.seriesName + '<br/>' + params.name + ' : ' + value;  
                }  
            },      
            visualMap: {  
                min: 0,  
                max: 100,  
                text:['High','Low'],  
                realtime: false,  
                calculable: true,  
                color: ['red','blue']  
            },  
            series: [  
                {  
                    name: 'World Population (2010)',  
                    type: 'map',  
                    mapType: 'world',  
                    roam: true,  
                    itemStyle:{  
                        emphasis:{label:{show:true}}  
                    },  
                    data: [
                        {
                            name: "Bahamas",
                            value: "100"
                        },
                        {
                            name: "Slovenia",
                            value: "60"
                        },
                        {
                            name: "Nigeria",
                            value: "52"
                        },
                        {
                            name: "Namibia",
                            value: "50"
                        },
                        {
                            name: "Cuba",
                            value: "30"
                        },
                        {
                            name: "Turkey",
                            value: "27"
                        },
                        {
                            name: "Ghana",
                            value: "25"
                        },
                        {
                            name: "Pakistan",
                            value: "23"
                        },
                        {
                            name: "St. Helena",
                            value: "20"
                        },
                        {
                            name: "Cyprus",
                            value: "20"
                        },
                        {
                            name: "Venezuela",
                            value: "18"
                        },
                        {
                            name: "Singapore",
                            value: "18"
                        },
                        {
                            name: "China",
                            value: "16"
                        },
                        {
                            name: "Czechia",
                            value: "13"
                        },
                        {
                            name: "Georgia",
                            value: "13"
                        },
                        {
                            name: "Australia",
                            value: "13"
                        },
                        {
                            name: "Philippines",
                            value: "13"
                        },
                        {
                            name: "Canada",
                            value: "13"
                        },
                        {
                            name: "South Africa",
                            value: "11"
                        },
                        {
                            name: "United Arab Emirates",
                            value: "11"
                        },
                        {
                            name: "Netherlands",
                            value: "11"
                        },
                        {
                            name: "Switzerland",
                            value: "10"
                        },
                        {
                            name: "Bangladesh",
                            value: "10"
                        },
                        {
                            name: "Lithuania",
                            value: "9"
                        },
                        {
                            name: "Lebanon",
                            value: "9"
                        },
                        {
                            name: "New Zealand",
                            value: "9"
                        },
                        {
                            name: "Sri Lanka",
                            value: "9"
                        },
                        {
                            name: "Hong Kong",
                            value: "9"
                        },
                        {
                            name: "Kenya",
                            value: "9"
                        },
                        {
                            name: "Israel",
                            value: "9"
                        },
                        {
                            name: "Austria",
                            value: "8"
                        },
                        {
                            name: "Bulgaria",
                            value: "8"
                        },
                        {
                            name: "Slovakia",
                            value: "8"
                        },
                        {
                            name: "Croatia",
                            value: "8"
                        },
                        {
                            name: "Norway",
                            value: "8"
                        },
                        {
                            name: "Serbia",
                            value: "7"
                        },
                        {
                            name: "Belgium",
                            value: "7"
                        },
                        {
                            name: "Poland",
                            value: "7"
                        },
                        {
                            name: "Colombia",
                            value: "7"
                        },
                        {
                            name: "Argentina",
                            value: "7"
                        },
                        {
                            name: "Malaysia",
                            value: "7"
                        },
                        {
                            name: "United Kingdom",
                            value: "7"
                        },
                        {
                            name: "Costa Rica",
                            value: "7"
                        },
                        {
                            name: "Ireland",
                            value: "6"
                        },
                        {
                            name: "Hungary",
                            value: "6"
                        },
                        {
                            name: "United States",
                            value: "6"
                        },
                        {
                            name: "Morocco",
                            value: "6"
                        },
                        {
                            name: "Romania",
                            value: "6"
                        },
                        {
                            name: "India",
                            value: "6"
                        },
                        {
                            name: "Sweden",
                            value: "6"
                        },
                        {
                            name: "Portugal",
                            value: "6"
                        },
                        {
                            name: "Germany",
                            value: "6"
                        },
                        {
                            name: "Thailand",
                            value: "6"
                        },
                        {
                            name: "Spain",
                            value: "5"
                        },
                        {
                            name: "Indonesia",
                            value: "5"
                        },
                        {
                            name: "Finland",
                            value: "5"
                        },
                        {
                            name: "Dominican Republic",
                            value: "5"
                        },
                        {
                            name: "Ukraine",
                            value: "4"
                        },
                        {
                            name: "Russia",
                            value: "4"
                        },
                        {
                            name: "Brazil",
                            value: "4"
                        },
                        {
                            name: "Vietnam",
                            value: "4"
                        },
                        {
                            name: "France",
                            value: "4"
                        },
                        {
                            name: "Denmark",
                            value: "3"
                        },
                        {
                            name: "Algeria",
                            value: "3"
                        },
                        {
                            name: "Chile",
                            value: "3"
                        },
                        {
                            name: "Peru",
                            value: "3"
                        },
                        {
                            name: "Greece",
                            value: "3"
                        },
                        {
                            name: "Iran",
                            value: "3"
                        },
                        {
                            name: "South Korea",
                            value: "3"
                        },
                        {
                            name: "Ecuador",
                            value: "3"
                        },
                        {
                            name: "Italy",
                            value: "3"
                        },
                        {
                            name: "Egypt",
                            value: "3"
                    },
                        {
                            name: "Saudi Arabia",
                            value: "3"
                        },
                        {
                            name: "Taiwan",
                            value: "3"
                        },
                        {
                            name: "Mexico",
                            value: "2"
                        },
                        {
                            name: "Japan",
                            value: "1"
                        }
                    ]
                }  
            ]  
        };  
        myChart.setOption(option); 
})