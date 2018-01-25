//index.js
//获取应用实例
import $BFSlideLineNav from '../../components/SlideLineNav/index.js'
Page({
  data: {
    $BF: {SlideLineNav: {indexNav: {dataSource: ['x','y']}}},
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function () {
    var that = this;
    // 初始化导航栏组件
    $BFSlideLineNav.init(
      'indexNav',
      {
        dataSource: ['item1','item2','item3'],
        selectedItem(index) {
          //修改data中selected指向
          that.setData({[`$BF.SlideLineNav.indexNav.selected`]: index,});
          console.log(index);
        }
      }
      );
  }
})
