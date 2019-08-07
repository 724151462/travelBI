let time = new Date().toLocaleString('chinese', { hour12: false }); // 修改数据date
  document.getElementById('time').innerHTML = time
  setInterval(() => {
    let time = new Date().toLocaleString('chinese', { hour12: false }); // 修改数据date
    document.getElementById('time').innerHTML = time
  }, 1000)

  var a = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  var week = new Date().getDay();
  document.getElementById('week').innerHTML = a[week];

  var city = 350100, key = "13b8f05dce690a443d2d85ca191c45f9"
  $.ajax({
    type: "get",
    url: `https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${city}`,
    dataType: "json",
    success: function (response) {
      let data = response.lives[0]
      $('#weather').text(data.weather)
      $('#temp').text(data.temperature)
      $('#air').text(data.humidity)
      $('#wind').text(data.winddirection)
    }
  });
  $('.tabcont').eq(0).show();  //默认显示第一个内容
  $('.tabcontent li').eq(0).css('background', '#1E90FF');  //默认第一个标题显示颜色不同
  $('.tabcontent li').click(function () {   //鼠标移上去
    $(this).css('background', '#1E90FF').siblings().css('background', '#315E7F');  //标题的颜色变成选中色,其他颜色还原
    $('.tabcont').hide().eq($(this).index()).show();   //当前选中内容显示
    if($(this).index() !== 0) {
      document.getElementById("vdo").pause()
    }
  });