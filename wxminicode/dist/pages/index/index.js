'use strict';

var _index = require('../../components/SlideLineNav/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Page({
  data: {
    $BF: { SlideLineNav: { indexNav: { dataSource: ['x', 'y'] } } }
  },

  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function onLoad() {
    var that = this;

    _index2.default.init('indexNav', {
      dataSource: ['item1', 'item2', 'item3'],
      selectedItem: function selectedItem(index) {
        that.setData(_defineProperty({}, '$BF.SlideLineNav.indexNav.selected', index));
        console.log(index);
      }
    });
  }
});