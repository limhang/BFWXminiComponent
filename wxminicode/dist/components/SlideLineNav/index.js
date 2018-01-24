'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = require('../Component');

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  init: function init(id) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var options = Object.assign({
      animateCss: undefined,

      itemClassNameNormal: 'bf-slide-line-nav-item-' + id + '__selected',
      widthInfo: 50,
      selected: 0,
      id: id
    }, opts);

    var component = new _Component2.default({
      scope: '$BF.SlideLineNav.' + id,
      data: options,
      methods: {
        selectedItem: function selectedItem(e) {
          console.log(e);
        }
      }
    });

    return component;
  }
};