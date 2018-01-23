'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
    function Component() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Component);

        Object.assign(this, {
            options: options
        });
        this.__init();
    }

    _createClass(Component, [{
        key: '__init',
        value: function __init() {
            this.page = getCurrentPages()[getCurrentPages().length - 1];
            var setData = this.page.setData.bind(this.page);

            var checkSDKVersion = function checkSDKVersion() {
                var has = false;

                try {
                    var res = wx.getSystemInfoSync();
                    var SDKVersion = res.SDKVersion.split('.');
                    has = Number(SDKVersion[0]) > 1 || Number(SDKVersion[1]) >= 5;
                } catch (e) {}

                return has;
            };

            this.setData = function () {
                var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
                    return {};
                };

                var fn = function fn() {
                    if (typeof cb === 'function') {
                        cb();
                    }
                };

                if (checkSDKVersion()) {
                    setData(obj, fn);
                } else {
                    setData(obj);
                    setTimeout(fn, 0);
                }
            };

            this.__initState();
        }
    }, {
        key: '__initState',
        value: function __initState() {
            this.options.data && this.__initData();
            this.options.methods && this.__initMethods();
        }
    }, {
        key: '__initData',
        value: function __initData() {
            var scope = this.options.scope;
            var data = this.options.data;

            this._data = {};

            if (!this.isEmptyObject(data)) {
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        if (typeof data[key] === 'function') {
                            data[key] = data[key].bind(this);
                        } else {
                            this._data[key] = data[key];
                        }
                    }
                }
            }

            this.page.setData(_defineProperty({}, '' + scope, this._data));
        }
    }, {
        key: '__initMethods',
        value: function __initMethods() {
            var scope = this.options.scope;
            var methods = this.options.methods;

            if (!this.isEmptyObject(methods)) {
                for (var key in methods) {
                    if (methods.hasOwnProperty(key) && typeof methods[key] === 'function') {
                        this[key] = methods[key] = methods[key].bind(this);

                        this.page[scope + '.' + key] = methods[key];

                        this.setData(_defineProperty({}, scope + '.' + key, scope + '.' + key));
                    }
                }
            }
        }
    }, {
        key: 'getComponentData',
        value: function getComponentData() {
            var data = this.page.data;
            var name = this.options.scope && this.options.scope.split('.');

            name.forEach(function (n, i) {
                data = data[n];
            });

            return data;
        }
    }, {
        key: 'isEmptyObject',
        value: function isEmptyObject(e) {
            for (var t in e) {
                return !1;
            }return !0;
        }
    }, {
        key: 'setVisible',
        value: function setVisible() {
            var _setData2;

            var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'wux-animate--fade-in';

            this.setData((_setData2 = {}, _defineProperty(_setData2, this.options.scope + '.animateCss', className), _defineProperty(_setData2, this.options.scope + '.visible', !0), _setData2));
        }
    }, {
        key: 'setHidden',
        value: function setHidden() {
            var _this = this;

            var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'wux-animate--fade-out';
            var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

            this.setData(_defineProperty({}, this.options.scope + '.animateCss', className));
            setTimeout(function () {
                _this.setData(_defineProperty({}, _this.options.scope + '.visible', !1));
            }, timer);
        }
    }]);

    return Component;
}();

exports.default = Component;