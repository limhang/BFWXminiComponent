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
      animateCss: undefined
    }, opts);

    var component = new _Component2.default({
      scope: '$BF.SlideLineNav.' + id,
      data: options,
      methods: {
        retain: function retain() {
          if (typeof this.backdropHolds !== 'number' || !this.backdropHolds) {
            this.backdropHolds = 0;
          }

          this.backdropHolds++;

          if (this.backdropHolds === 1) {
            this.setVisible();
          }
        },
        release: function release() {
          if (this.backdropHolds === 1) {
            this.setHidden();
          }
          this.backdropHolds = Math.max(0, this.backdropHolds - 1);
        }
      }
    });

    return component;
  }
};