(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CCWCSensorTagVisualizer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _tisensortag = require('./devices/tisensortag.es6');

var _tisensortag2 = _interopRequireDefault(_tisensortag);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Sensor tag visualizer component
 */

var _class = function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
        key: 'setProperties',

        /**
         * initialize default class properties
         * @private
         */
        value: function setProperties() {
            /**
             * sensor tag BLE
             * @type {$ES6_ANONYMOUS_CLASS$}
             */
            this.sensorTag = null;

            /**
             * use fake (simlated) data
             * @type {boolean}
             * @private
             */
            this._simulate = false;

            /**
             * device info
             * @type {boolean}
             * @private
             */
            this._deviceInfo = {};

            /**
             * list of props with XYZ characteristics
             * @type {string[]}
             */
            this.sensors = ['buttons', 'accelerometer', 'magnetometer', 'gyroscope'];
        }
    }, {
        key: 'onSensorTagUpdate',

        /**
         * on sensortag update
         * @param data
         */
        value: function onSensorTagUpdate(eventtype, data) {
            for (var c = 0; c < this.sensors.length; c++) {
                if (data.sensors[this.sensors[c]]) {
                    if (data.sensors[this.sensors[c]].active) {
                        this.dom.panels[this.sensors[c]].panel.classList.add('active');
                    }

                    if (data.sensors[this.sensors[c]].enabled) {
                        this.dom.panels[this.sensors[c]].panel.classList.add('enabled');
                    }

                    var multiplier;
                    switch (this.sensors[c]) {
                        case 'accelerometer':
                            multiplier = 10;
                            break;
                        case 'magnetometer':
                            multiplier = 1;
                            break;
                        case 'gyroscope':
                            multiplier = .5;
                            break;
                    }

                    if (this.sensors[c] === 'buttons') {
                        if (data.sensors.buttons.left) {
                            this.dom.panels.buttons.left.classList.add('on');
                        } else {
                            this.dom.panels.buttons.left.classList.remove('on');
                        }

                        if (data.sensors.buttons.right) {
                            this.dom.panels.buttons.right.classList.add('on');
                        } else {
                            this.dom.panels.buttons.right.classList.remove('on');
                        }
                    } else {
                        var axis = ['x', 'y', 'z'];
                        for (var d = 0; d < axis.length; d++) {
                            var val = parseFloat(data.sensors[this.sensors[c]][axis[d]]);
                            this.dom.panels[this.sensors[c]][axis[d]].bar.style.width = Math.abs(val * multiplier) + 'px';
                            if (val < 0) {
                                this.dom.panels[this.sensors[c]][axis[d]].bar.style.WebkitTransform = 'translateX(' + [axis[d]] * multiplier + 'px)';
                            } else {
                                this.dom.panels[this.sensors[c]][axis[d]].bar.style.WebkitTransform = 'none';
                            }
                            this.dom.panels[this.sensors[c]][axis[d]].label.innerText = val.toFixed(4);
                        }
                    }
                }
            }
        }

        /**
         * connect to sensortag
         */

    }, {
        key: 'connect',
        value: function connect(tag) {
            var _this2 = this;

            if (!tag) {
                this.sensorTag = new _tisensortag2.default();
            }
            this.sensorTag.connect(function (eventtype, data) {
                return _this2.onSensorTagUpdate(eventtype, data);
            }, this._simulate);
        }

        /**
         * parse attributes on element
         * @private
         */

    }, {
        key: 'parseAttributes',
        value: function parseAttributes() {
            if (this.hasAttribute('simulate')) {
                this._simulate = true;
            } else {
                this._simulate = false;
            }
        }
    }, {
        key: 'createdCallback',

        /**
         * element created callback
         * @private
         */
        value: function createdCallback() {
            this.setProperties();
            this.parseAttributes();
        }
    }, {
        key: 'attachedCallback',

        /**
         * element attached callback
         * @private
         */
        value: function attachedCallback() {
            var template = this.owner.querySelector('template#style');
            var clone = template.content.cloneNode(true);
            this.root = this.createShadowRoot();
            this.root.appendChild(clone);

            this.dom = { panels: {} };
            for (var c = 0; c < this.sensors.length; c++) {
                var paneltemplate;
                var panelclone;
                switch (this.sensors[c]) {
                    case 'buttons':
                        paneltemplate = this.owner.querySelector('template#buttons');
                        panelclone = paneltemplate.content.cloneNode(true);
                        this.dom.panels[this.sensors[c]] = {};
                        this.dom.panels[this.sensors[c]].left = panelclone.querySelector('.left.button');
                        this.dom.panels[this.sensors[c]].right = panelclone.querySelector('.right.button');
                        break;

                    default:
                        paneltemplate = this.owner.querySelector('template#sensor');
                        panelclone = paneltemplate.content.cloneNode(true);
                        this.dom.panels[this.sensors[c]] = {};
                        this.dom.panels[this.sensors[c]].x = {};
                        this.dom.panels[this.sensors[c]].x.label = panelclone.querySelector('.x.label .value');
                        this.dom.panels[this.sensors[c]].x.bar = panelclone.querySelector('.x.bar');
                        this.dom.panels[this.sensors[c]].y = {};
                        this.dom.panels[this.sensors[c]].y.label = panelclone.querySelector('.y.label .value');
                        this.dom.panels[this.sensors[c]].y.bar = panelclone.querySelector('.y.bar');
                        this.dom.panels[this.sensors[c]].z = {};
                        this.dom.panels[this.sensors[c]].z.label = panelclone.querySelector('.z.label .value');
                        this.dom.panels[this.sensors[c]].z.bar = panelclone.querySelector('.z.bar');
                }

                panelclone.querySelector('.header').innerText = this.sensors[c];
                this.dom.panels[this.sensors[c]].panel = panelclone.querySelector('.group');
                this.root.appendChild(panelclone);
            }
        }

        /**
         * element detached callback
         * @private
         */

    }, {
        key: 'detachedCallback',
        value: function detachedCallback() {}
    }, {
        key: 'attributeChangedCallback',

        /**
         * attributeChangedCallback
         * @private
         * @param {String} attr attribute changed
         * @param {*} oldVal old value
         * @param {*} newVal new value
         */
        value: function attributeChangedCallback(attr, oldVal, newVal) {}
    }]);

    return _class;
}(HTMLElement);

exports.default = _class;

},{"./devices/tisensortag.es6":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        /**
         * socket connection
         * @type {null}
         */
        this.socket = null;

        /**
         * if already connected
         * @type {Boolean}
         */
        this._connected = false;

        /**
         * event listeners
         * @type {Array}
         * @private
         */
        this._eventListeners = [];

        /**
         * base UUID
         */
        this._baseUUID = ['f000', '-0451-4000-b000-000000000000'];

        /**
         * service UUIDS
         * @type {{}}
         * @private
         */
        this._uuid = {};
        this._uuid.temperature = this._baseUUID[0] + 'aa00' + this._baseUUID[1];
        this._uuid.temperatureData = this._baseUUID[0] + 'aa01' + this._baseUUID[1];
        this._uuid.temperatureConfiguration = this._baseUUID[0] + 'aa02' + this._baseUUID[1];
        this._uuid.temperaturePeriod = this._baseUUID[0] + 'aa03' + this._baseUUID[1];

        this._uuid.accelerometer = this._baseUUID[0] + 'aa10' + this._baseUUID[1];
        this._uuid.accelerometerData = this._baseUUID[0] + 'aa11' + this._baseUUID[1];
        this._uuid.accelerometerConfiguration = this._baseUUID[0] + 'aa12' + this._baseUUID[1];
        this._uuid.accelerometerPeriod = this._baseUUID[0] + 'aa13' + this._baseUUID[1];

        this._uuid.humidity = this._baseUUID[0] + 'aa20' + this._baseUUID[1];
        this._uuid.humidityData = this._baseUUID[0] + 'aa21' + this._baseUUID[1];
        this._uuid.humidityConfiguration = this._baseUUID[0] + 'aa22' + this._baseUUID[1];
        this._uuid.humidityPeriod = this._baseUUID[0] + 'aa23' + this._baseUUID[1];
    }

    /**
     * connect to sensortag
     * @param cb callback
     * @param {Boolean} simluate data
     */

    _createClass(_class, [{
        key: 'connect',
        value: function connect(cb, simulate) {
            var _this = this;

            this._eventListeners.push(cb);
            if (this._connected) {
                return;
            }
            this.connected = true;
            if (simulate) {
                setInterval(function () {
                    cb('update', _this.getSimulatedSensors());
                }, 200);

                setInterval(function () {
                    cb('update', _this.getSimulatedButtons());
                }, Math.random() * 10000 + 2000);
            } else if (!navigator.bluetooth) {
                console.log('no bluetooth support in your browser, trying websockets from a local node server');
                this.socket = new WebSocket('ws://localhost:8080');
                this.socket.onerror = function (error) {
                    console.log('WebSocket Error ' + error);
                };

                this.socket.onmessage = function (e) {
                    var msg = JSON.parse(e.data);
                    for (var c = 0; c < _this._eventListeners.length; c++) {
                        _this._eventListeners[c]('update', msg);
                    }
                };

                this.socket.onopen = function (e) {
                    _this.socket.send('connect');
                };
            } else {
                navigator.bluetooth.requestDevice({ filters: [{ name: 'SensorTag' }, { services: [this._uuid.temperature, this._uuid.accelerometer, this._uuid.humidity] }],
                    optionalServices: [this._uuid.temperature, this._uuid.accelerometer, this._uuid.humidity] }).then(function (device) {
                    console.log('Got device:', device);
                    console.log('id:', device.id);
                    var connected = Promise.resolve();
                    if (!device.connected) {
                        connected = device.gatt.connect();
                    }
                    _this.device = device;
                    return connected;
                }).then(function (server) {
                    console.log('Getting Service…', server);
                    //return server.getPrimaryService('f000aa10-0451-4000-b000-000000000000');
                }).catch(function (error) {
                    return _this.onDeviceError(error);
                });
            }
        }

        /**
         * get simulated sensor data object
         */

    }, {
        key: 'getSimulatedSensors',
        value: function getSimulatedSensors() {
            return {
                connected: true,
                device: {
                    systemid: 'xxxxx',
                    firmware: 'xxxxx',
                    manufacturer: 'xxxxx'
                },
                sensors: {
                    accelerometer: {
                        active: true,
                        enabled: true,
                        x: String(3 - Math.random() * 6),
                        y: String(3 - Math.random() * 6),
                        z: String(3 - Math.random() * 6)
                    },
                    magnetometer: {
                        active: true,
                        enabled: true,
                        x: String(3 - Math.random() * 6),
                        y: String(3 - Math.random() * 6),
                        z: String(3 - Math.random() * 6)
                    },
                    gyroscope: {
                        active: true,
                        enabled: true,
                        x: String(3 - Math.random() * 6),
                        y: String(3 - Math.random() * 6),
                        z: String(3 - Math.random() * 6)
                    }
                }
            };
        }

        /**
         * get simulated button data object
         */

    }, {
        key: 'getSimulatedButtons',
        value: function getSimulatedButtons() {
            var data = this.getSimulatedSensors();
            data.sensors.buttons = { active: true, enabled: true };
            data.sensors.buttons.left = Math.random() > .5;
            data.sensors.buttons.right = Math.random() > .5;
            return data;
        }

        /**
         * on device requested success
         * @param device
         */

    }, {
        key: 'onDeviceRequestedSuccess',
        value: function onDeviceRequestedSuccess(device) {
            this.connected = device.gatt.connect();
        }

        /**
         * on device requested error
         * @param device
         */

    }, {
        key: 'onDeviceError',
        value: function onDeviceError(err) {
            console.log(err);
        }
    }]);

    return _class;
}();

exports.default = _class;

},{}]},{},[1])(1)
});


//# sourceMappingURL=ccwc-sensortag-visualizer.js.map
