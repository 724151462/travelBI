function drawCharts(container, options) {
  var myChart = echarts.init(document.getElementById(container), 'shine');
  myChart.setOption(options);
}