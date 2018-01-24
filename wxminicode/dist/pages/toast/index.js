'use strict';

var _index = require('../../components/Toast/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Page({
  data: {},
  onLoad: function onLoad() {},
  showToast: function showToast() {
    _index2.default.show({
      type: 'success',
      timer: 1500,
      color: '#fff',
      text: '已完成',
      success: function success() {
        return console.log('已完成');
      }
    });
  },
  showToastCancel: function showToastCancel() {
    _index2.default.show({
      type: 'cancel',
      timer: 1500,
      color: '#fff',
      text: '取消操作',
      success: function success() {
        return console.log('取消操作');
      }
    });
  },
  showToastErr: function showToastErr() {
    _index2.default.show({
      type: 'forbidden',
      timer: 1500,
      color: '#fff',
      text: '禁止操作',
      success: function success() {
        return console.log('禁止操作');
      }
    });
  },
  showToastText: function showToastText() {
    _index2.default.show({
      type: 'text',
      timer: 1500,
      color: '#fff',
      text: '文本提示',
      success: function success() {
        return console.log('文本提示');
      }
    });
  }
});