//index.js
//获取应用实例
import $BFSlideLineNav from '../../components/SlideLineNav/index.js'
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    $BF: {SlideLineNav: {indexNav: {dataSource: ['x','y']}}},
    // [`$BF.SlideLineNav.indexNav.dataSource`]: ['x','y'],
    // [`$BF.SlideLineNav.indexNav.widthInfo`]: 2,


  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    $BFSlideLineNav.init('indexNav',{dataSource: ['item1','item2']});
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
