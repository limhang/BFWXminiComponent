'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = require('../component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  setDefaults: function setDefaults() {
    return {
      title: undefined,
      content: undefined,
      buttons: [],
      verticalButtons: !1
    };
  },
  data: function data() {
    return {
      onCancel: function onCancel() {},

      cancelText: '\u53D6\u6D88',
      cancelType: 'bf-dialog__btn--default',
      onConfirm: function onConfirm() {},

      confirmText: '\u786E\u5B9A',
      confirmType: 'bf-dialog__btn--primary'
    };
  },
  open: function open() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var options = Object.assign({
      animateCss: undefined,
      visible: !1
    }, this.setDefaults(), opts);

    var component = new _component2.default({
      scope: '$BF.Dialog',
      data: options,
      methods: {
        hide: function hide(cb) {
          if (this.removed) return !1;
          this.removed = !0;
          this.setHidden();
          setTimeout(function () {
            return typeof cb === 'function' && cb();
          }, 300);
        },
        show: function show() {
          if (this.removed) return !1;
          this.setVisible();
        },
        buttonTapped: function buttonTapped(e) {
          var index = e.currentTarget.dataset.index;
          var button = options.buttons[index];
          this.hide(function () {
            return typeof button.onTap === 'function' && button.onTap(e);
          });
        },
        bindinput: function bindinput(e) {
          this.setData(_defineProperty({}, '$wux.dialog.prompt.response', e.detail.value));
        }
      }
    });

    component.show();

    return component.hide;
  },
  alert: function alert() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this.open(Object.assign({
      buttons: [{
        text: opts.confirmText || this.data().confirmText,
        type: opts.confirmType || this.data().confirmType,
        onTap: function onTap(e) {
          typeof opts.onConfirm === 'function' && opts.onConfirm(e);
        }
      }]
    }, opts));
  },
  confirm: function confirm() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this.open(Object.assign({
      buttons: [{
        text: opts.cancelText || this.data().cancelText,
        type: opts.cancelType || this.data().cancelType,
        onTap: function onTap(e) {
          typeof opts.onCancel === 'function' && opts.onCancel(e);
        }
      }, {
        text: opts.confirmText || this.data().confirmText,
        type: opts.confirmType || this.data().confirmType,
        onTap: function onTap(e) {
          typeof opts.onConfirm === 'function' && opts.onConfirm(e);
        }
      }]
    }, opts));
  },
  prompt: function prompt() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var prompt = {
      fieldtype: opts.fieldtype ? opts.fieldtype : 'text',
      password: !!opts.password,
      response: opts.defaultText ? opts.defaultText : '',
      placeholder: opts.placeholder ? opts.placeholder : '',
      maxlength: opts.maxlength ? parseInt(opts.maxlength) : ''
    };

    return this.open(Object.assign({
      prompt: prompt,
      buttons: [{
        text: opts.cancelText || this.data().cancelText,
        type: opts.cancelType || this.data().cancelType,
        onTap: function onTap(e) {
          typeof opts.onCancel === 'function' && opts.onCancel(e);
        }
      }, {
        text: opts.confirmText || this.data().confirmText,
        type: opts.confirmType || this.data().confirmType,
        onTap: function onTap(e) {
          typeof opts.onConfirm === 'function' && opts.onConfirm(e);
        }
      }]
    }, opts));
  }
};