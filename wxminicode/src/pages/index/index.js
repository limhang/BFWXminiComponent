var util = require('../../utils/util.js');
Page({
  data: {
    dataSource: ['toast','slideLineNav'],
  },
  onLoad: function () {

  },

  selectedItem(e) {
    let index = e.target.dataset.info;
    this.push2Nav(this.data.dataSource[index])
  },

  push2Nav(path) {
    wx.navigateTo({
      url: `../${path}/index`
    })
  },
});
