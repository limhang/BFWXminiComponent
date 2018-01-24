'use strict';

var _index = require('../../components/SlideLineNav/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    $BF: { SlideLineNav: { indexNav: { dataSource: ['x', 'y'] } } }
  },

  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function onLoad() {
    console.log('onLoad');
    var that = this;
    _index2.default.init('indexNav', { dataSource: ['item1', 'item2'] });

    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      });
    });
  }
});