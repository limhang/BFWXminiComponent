'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = require('../Component');

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  setDefaults: function setDefaults() {
    return {
      type: 'success',
      timer: 1500,
      color: '#fff',
      text: '\u5DF2\u5B8C\u6210',
      success: function success() {}
    };
  },
  data: function data() {
    return [{
      type: 'success',
      icon: 'success_no_circle',
      className: 'bf-toast-success'
    }, {
      type: 'cancel',
      icon: 'cancel',
      className: 'bf-toast-cancel'
    }, {
      type: 'forbidden',
      icon: 'warn',
      className: 'bf-toast-forbidden'
    }, {
      type: 'text',
      icon: '',
      className: 'bf-toast-text'
    }];
  },
  show: function show() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var options = Object.assign({}, this.setDefaults(), opts);
    var TOAST_TYPES = this.data();

    TOAST_TYPES.forEach(function (value, key) {
      if (value.type === opts.type) {
        options.type = value.icon;
        options.className = value.className;
      }
    });

    var component = new _Component2.default({
      scope: '$BF.Toast',
      data: options,
      methods: {
        hide: function hide(cb) {
          var _this = this;

          setTimeout(function () {
            _this.setHidden();
            typeof cb === 'function' && cb();
          }, options.timer);
        },
        show: function show() {
          this.setVisible();
        }
      }
    });

    component.show();
    component.hide(opts.success);
  }
};