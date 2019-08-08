var dom = document.getElementById("map-container");
        var myChart = echarts.init(dom);

        function showProvince() {
            var name = '福州';

            // myChart.showLoading();

            $.get('http://148.70.65.61/350105.json', function (geoJson) {

                // myChart.hideLoading();

                echarts.registerMap(name, geoJson);

                myChart.setOption(option = {
                    geo: {
                        map: '福州',
                        zoom: 1.2,
                        label: {
                            emphasis: {
                                show: false
                            }
                        },
                        roam: true, //是否允许缩放
                        itemStyle: {
                            normal: {
                                color: 'rgba(37, 43, 61, .5)', //地图背景色
                                borderColor: '#516a89', //省市边界线00fcff 516a89
                                borderWidth: 1
                            },
                            emphasis: {
                                color: '#000' //悬浮背景
                            }
                        }
                    },
                    backgroundColor: '#00182A',
                    title: {
                        text: '马尾区',
                        left: 'center',
                        textStyle: {
                            fontSize: 40,
                            color: '#fff'
                        }
                    },
                    series
                });
            });
        }
        showProvince();



        var fuzhouCoordMap
        var chinaDatas

        $.ajax({
            type: "get",
            url: `${url}/qxcharts`,
            dataType: "json",
            async:false,
            success: function (response) {
                // console.log(response.data.mapObj, fuzhouCoordMap, '==========', response.data.dataList, chinaDatas)
                fuzhouCoordMap = response.data.mapObj
                chinaDatas = response.data.dataList
            }
        });

        var convertData = function (data) {
            var res = [];
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                console.log(dataItem)
                var fromCoord = fuzhouCoordMap[dataItem[0].name];
                var toCoord = [119.648781, 26.067122];
                console.log(dataItem[0])
                console.log(fuzhouCoordMap)
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                        value: dataItem[0].value
                    }, {
                        coord: toCoord,
                    }]);
                }
            }
            console.log(res)
            return res;
        };
        var series = [];
        [['琅岐旅游度假区', chinaDatas]].forEach(function (item, i) {
            console.log(item[0])
            series.push({
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                },
                lineStyle: {
                    normal: {
                        width: 1, //尾迹线条宽度
                        opacity: 1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: convertData(item[1])
            }, {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right', //显示位置
                            offset: [5, 0], //偏移设置
                            formatter: function (params) {//圆环显示文字
                                return params.data.name;
                            },
                            fontSize: 20
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    symbol: 'circle',
                    symbolSize: function (val) {
                        console.log(val)
                        // return 5 + val[2] * 5; //圆环大小
                        return 5 + val[2] * 0.02; //圆环大小
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                            color: '#f00'
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        console.log(dataItem)
                        return {
                            name: dataItem[0].name,
                            value: fuzhouCoordMap[dataItem[0].name].concat([dataItem[0].value])
                        };
                    }),
                },
                //被攻击点
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        period: 4,
                        brushType: 'stroke',
                        scale: 4
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            //offset:[5, 0],
                            color: '#F9483A',
                            formatter: '{b}',
                            textStyle: {
                                color: "#F9483A",
                                fontSize: 20
                            }
                        },
                        emphasis: {
                            show: true,
                            color: "#F9483A"
                        }
                    },
                    symbol: 'pin',
                    symbolSize: 50,
                    data: [{
                        name: item[0],
                        value: fuzhouCoordMap[item[0]].concat([500]),
                    }],
                }
            );
        });
        option = {
            tooltip: {
                trigger: 'item',
                backgroundColor: '#0E4C5F',
                borderColor: '#FFFFCC',
                showDelay: 0,
                hideDelay: 0,
                enterable: true,
                transitionDuration: 0,
                extraCssText: 'z-index:100',
                formatter: function (params, ticket, callback) {
                    //根据业务自己拓展要显示的内容
                    console.log(params)
                    var name = params.name;
                    var value = params.value;
                    var res = "";
                    if (params.componentSubType === "effectScatter") {
                        // res = "<span style='color:#fff;font-size:20px'>" + name + "</span><br/>";
                        res = "<span style='color: #fff;font-size:20px'>可以找图片替换上去</span><br/><span style='color: #fff;font-size:20px'>或者直接放地点名字</span>"
                        // res = "<img src='../images/tianqi@3x.png' />"
                    }else if(params.componentSubType === "lines"){
                        res = "<span style='color:#fff;font-size:20px'>游览人数：" + value + "</span>";
                    }
                    return res;
                }
            },
            backgroundColor: "#013954",
            visualMap: { //图例值控制
                min: 0,
                max: 500,
                calculable: true,
                show: true,
                color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
                textStyle: {
                    color: '#fff'
                }
            },
            series: series
        };
        myChart.setOption(option, true);