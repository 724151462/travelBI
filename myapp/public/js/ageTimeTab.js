$('.agetabcont').eq(0).show();  //默认显示第一个内容
$('.age-time').eq(0).css('background', '#018AF4');  //默认第一个标题显示颜色不同
$('.age-time').click(function () {   //鼠标移上去
  $(this).css('background', '#018AF4').siblings().css('background', 'none');  //标题的颜色变成选中色,其他颜色还原
  $('.agetabcont').hide().eq($(this).index()).show();   //当前选中内容显示
  console.log($(this).index())
  switch ($(this).index()) {
    case 0:
      getTouristage('week')
      break;
    case 1:
      getTouristage('mouth')
      break;
    case 2:
      getTouristage('year')
      break;
  
    default:
      break;
  }
});

function getTouristage(time) {
  $.ajax({
    type: "get",
    url: `${url}/touristage?time=${time}`,
    dataType: "json",
    success: function (response) {
      var legend = []
      var data = []
      response.data.forEach(element => {
        let num = []
        let time = []
        element.detail.forEach(ele => {
          time.push(ele.time)
          num.push(ele.num)
        })
        legend = time
        data.push({
          name: element.item,
          type: 'bar',
          data: num,
        })
      });
      console.log(legend)
      var ageOption = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legend,
          textStyle: {
            color: '#fff'
          },
          y: 'bottom'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: legend,
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },

        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ],
        series: data
      }
      drawCharts(`tourist-age-${time}`, ageOption)
    }
  })
}