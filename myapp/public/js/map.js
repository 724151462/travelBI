var map = new AMap.Map('map-container', {
  resizeEnable: true, //是否监控地图容器尺寸变化
  zoom:11, //初始化地图层级
  center: [119.606184,26.101766] //初始化地图中心点
});
toolBar = new AMap.ToolBar({
  visible: true
})
map.addControl(toolBar);
toolBar.show();
toolBar.showRuler();
toolBar.showDirection();
