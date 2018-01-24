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

      classNameNormal: 'bf-slide-line-nav-' + id + '__normal',

      itemClassNameSelected: 'bf-slide-line-nav-item-' + id + '__selected',

      itemClassNameNormal: 'bf-slide-line-nav-item-' + id + '__normal',

      selected: 0,

      id: id
    }, opts);

    var component = new _Component2.default({
      scope: '$BF.SlideLineNav.' + id,
      data: options,
      methods: {
        selectedItem: function selectedItem(e) {
          var index = e.currentTarget.dataset.info;

          options.selectedItem(index);
        }
      }
    });

    return component;
  }
};