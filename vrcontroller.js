(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ccwc = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var _fusionPoseSensor = require('../sensorfusion/fusion-pose-sensor.es6');

var _fusionPoseSensor2 = _interopRequireDefault(_fusionPoseSensor);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        /**
         * sensor fusion
         */
        this._sensorfusion = new _fusionPoseSensor2.default();

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
    }

    /**
     * connect to sensortag
     * @param cb callback
     */

    _createClass(_class, [{
        key: 'connect',
        value: function connect(cb) {
            if (cb) {
                this._eventListeners.push(cb);
            }
            if (this._connected) {
                return;
            }
        }

        /**
         * disconnect
         * @param cb
         */

    }, {
        key: 'disconnect',
        value: function disconnect(cb) {
            for (var c = 0; c < this._eventListeners.length; c++) {
                if (this._eventListeners[c] === cb) {
                    this._eventListeners.splice(c, 1);
                }
            }
        }

        /**
         * update listeners with data
         * @param data
         */

    }, {
        key: 'update',
        value: function update(data) {
            if (data.sensors && data.sensors.accelerometer && data.sensors.gyroscope) {
                this._sensorfusion.updateSensorData(data);
                data.sensors.orientation = this._sensorfusion.getOrientation();
                for (var c = 0; c < this._eventListeners.length; c++) {
                    this._eventListeners[c]('motionupdate', data);
                }
            }
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"../sensorfusion/fusion-pose-sensor.es6":8}],2:[function(require,module,exports){
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

var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;if (getter === undefined) {
            return undefined;
        }return getter.call(receiver);
    }
};

var _device = require('./device.es6');

var _device2 = _interopRequireDefault(_device);

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

var _class = function (_Device) {
    _inherits(_class, _Device);

    function _class() {
        _classCallCheck(this, _class);

        /**
         * socket connection
         * @type {null}
         */

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));

        _this.socket = null;

        /**
         * if already connected
         * @type {Boolean}
         */
        _this._connected = false;

        /**
         * base UUID
         */
        _this._baseUUID = ['f000', '-0451-4000-b000-000000000000'];

        /**
         * service UUIDS
         * @type {{}}
         * @private
         */
        _this._uuid = {};
        _this._uuid.temperature = _this._baseUUID[0] + 'aa00' + _this._baseUUID[1];
        _this._uuid.temperatureData = _this._baseUUID[0] + 'aa01' + _this._baseUUID[1];
        _this._uuid.temperatureConfiguration = _this._baseUUID[0] + 'aa02' + _this._baseUUID[1];
        _this._uuid.temperaturePeriod = _this._baseUUID[0] + 'aa03' + _this._baseUUID[1];

        _this._uuid.accelerometer = _this._baseUUID[0] + 'aa10' + _this._baseUUID[1];
        _this._uuid.accelerometerData = _this._baseUUID[0] + 'aa11' + _this._baseUUID[1];
        _this._uuid.accelerometerConfiguration = _this._baseUUID[0] + 'aa12' + _this._baseUUID[1];
        _this._uuid.accelerometerPeriod = _this._baseUUID[0] + 'aa13' + _this._baseUUID[1];

        _this._uuid.humidity = _this._baseUUID[0] + 'aa20' + _this._baseUUID[1];
        _this._uuid.humidityData = _this._baseUUID[0] + 'aa21' + _this._baseUUID[1];
        _this._uuid.humidityConfiguration = _this._baseUUID[0] + 'aa22' + _this._baseUUID[1];
        _this._uuid.humidityPeriod = _this._baseUUID[0] + 'aa23' + _this._baseUUID[1];
        return _this;
    }

    /**
     * connect to sensortag
     * @param cb callback
     */

    _createClass(_class, [{
        key: 'connect',
        value: function connect(cb) {
            var _this2 = this;

            _get(Object.getPrototypeOf(_class.prototype), 'connect', this).call(this, cb);
            if (this._connected) {
                return;
            }
            this._connected = true;

            if (!navigator.bluetooth) {
                console.log('no bluetooth support in your browser, trying websockets from a local node server');
                this.socket = new WebSocket('ws://localhost:8080');
                this.socket.onerror = function (error) {
                    console.log('WebSocket Error ' + error);
                };

                this.socket.onmessage = function (e) {
                    var data = JSON.parse(e.data);
                    if (data.sensors.accelerometer.active && data.sensors.gyroscope.active) {
                        data.sensors = _this2.normalizeSensors(data.sensors);
                        _this2.update(data);
                    }
                };

                this.socket.onopen = function (e) {
                    _this2.socket.send('connect');
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
                    _this2.device = device;
                    return connected;
                }).then(function (server) {
                    console.log('Getting Service…', server);
                    //return server.getPrimaryService('f000aa10-0451-4000-b000-000000000000');
                }).catch(function (error) {
                    return _this2.onDeviceError(error);
                });
            }
        }

        /**
         * tweak sensor data to align with other sensors better (like from a laptop)
         * @param sensordata
         */

    }, {
        key: 'normalizeSensors',
        value: function normalizeSensors(sensordata) {
            if (sensordata.gyroscope) {
                // x and z readings are swapped
                sensordata.gyroscope.alpha = -sensordata.gyroscope.gamma / (65536 / 500) + 1.45; // no motion produces ~ -1.45 reading...cancel it
                sensordata.gyroscope.beta = -sensordata.gyroscope.beta / (65536 / 500) + 2.0; // no motion produces ~ -2.0 reading...cancel it
                sensordata.gyroscope.gamma = -sensordata.gyroscope.alpha / (65536 / 500);
            }

            if (sensordata.accelerometer) {
                // YES we are flipping Y and z. Seeing values flipped in practice for
                // natural feel holding of sensortag - I think they intend it to sit on its base vertically
                // but when holding it, you'd lay it down in your hand allowing your thumb to hit the buttons
                var z = sensordata.accelerometer.z / 16 * 9.81;
                var y = sensordata.accelerometer.y / 16 * 9.81;
                var x = sensordata.accelerometer.x / 16 * 9.81;
                sensordata.accelerometer.x = x;
                sensordata.accelerometer.y = y;
                sensordata.accelerometer.z = z;
            }
            return sensordata;
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
}(_device2.default);

exports.default = _class;

},{"./device.es6":1}],3:[function(require,module,exports){
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
}(); /**
      * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
      * but refactored to use different data source provided over BLE by the TI Sensor Tag
      *
      * This piece in particular was also pulled by Boris from ThreeJS math
      *
      * original license from WebVR-Polyfill is as follows:
      * Copyright 2015 Google Inc. All Rights Reserved.
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

var _vector = require('./vector3.es6');

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var _class = function () {
    function _class(x, y, z, w) {
        _classCallCheck(this, _class);

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = w !== undefined ? w : 1;
    }

    _createClass(_class, [{
        key: 'set',
        value: function set(x, y, z, w) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;

            return this;
        }
    }, {
        key: 'copy',
        value: function copy(quaternion) {
            this.x = quaternion.x;
            this.y = quaternion.y;
            this.z = quaternion.z;
            this.w = quaternion.w;

            return this;
        }
    }, {
        key: 'setFromEulerXYZ',
        value: function setFromEulerXYZ(x, y, z) {
            var c1 = Math.cos(x / 2);
            var c2 = Math.cos(y / 2);
            var c3 = Math.cos(z / 2);
            var s1 = Math.sin(x / 2);
            var s2 = Math.sin(y / 2);
            var s3 = Math.sin(z / 2);

            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;

            return this;
        }
    }, {
        key: 'setFromEulerYXZ',
        value: function setFromEulerYXZ(x, y, z) {
            var c1 = Math.cos(x / 2);
            var c2 = Math.cos(y / 2);
            var c3 = Math.cos(z / 2);
            var s1 = Math.sin(x / 2);
            var s2 = Math.sin(y / 2);
            var s3 = Math.sin(z / 2);

            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;

            return this;
        }
    }, {
        key: 'setFromAxisAngle',
        value: function setFromAxisAngle(axis, angle) {
            // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
            // assumes axis is normalized

            var halfAngle = angle / 2,
                s = Math.sin(halfAngle);

            this.x = axis.x * s;
            this.y = axis.y * s;
            this.z = axis.z * s;
            this.w = Math.cos(halfAngle);

            return this;
        }
    }, {
        key: 'multiply',
        value: function multiply(q) {
            return this.multiplyQuaternions(this, q);
        }
    }, {
        key: 'multiplyQuaternions',
        value: function multiplyQuaternions(a, b) {
            // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

            var qax = a.x,
                qay = a.y,
                qaz = a.z,
                qaw = a.w;
            var qbx = b.x,
                qby = b.y,
                qbz = b.z,
                qbw = b.w;

            this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
            this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
            this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
            this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

            return this;
        }
    }, {
        key: 'inverse',
        value: function inverse() {
            this.x *= -1;
            this.y *= -1;
            this.z *= -1;

            this.normalize();

            return this;
        }
    }, {
        key: 'normalize',
        value: function normalize() {
            var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);

            if (l === 0) {
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.w = 1;
            } else {
                l = 1 / l;

                this.x = this.x * l;
                this.y = this.y * l;
                this.z = this.z * l;
                this.w = this.w * l;
            }

            return this;
        }
    }, {
        key: 'slerp',
        value: function slerp(qb, t) {
            if (t === 0) return this;
            if (t === 1) return this.copy(qb);

            var x = this.x,
                y = this.y,
                z = this.z,
                w = this.w;

            // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

            var cosHalfTheta = w * qb.w + x * qb.x + y * qb.y + z * qb.z;

            if (cosHalfTheta < 0) {
                this.w = -qb.w;
                this.x = -qb.x;
                this.y = -qb.y;
                this.z = -qb.z;

                cosHalfTheta = -cosHalfTheta;
            } else {
                this.copy(qb);
            }

            if (cosHalfTheta >= 1.0) {
                this.w = w;
                this.x = x;
                this.y = y;
                this.z = z;

                return this;
            }

            var halfTheta = Math.acos(cosHalfTheta);
            var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

            if (Math.abs(sinHalfTheta) < 0.001) {
                this.w = 0.5 * (w + this.w);
                this.x = 0.5 * (x + this.x);
                this.y = 0.5 * (y + this.y);
                this.z = 0.5 * (z + this.z);

                return this;
            }

            var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
                ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

            this.w = w * ratioA + this.w * ratioB;
            this.x = x * ratioA + this.x * ratioB;
            this.y = y * ratioA + this.y * ratioB;
            this.z = z * ratioA + this.z * ratioB;

            return this;
        }
    }, {
        key: 'setFromUnitVectors',
        value: function setFromUnitVectors(vFrom, vTo) {
            // http://lolengine.net/blog/2014/02/24/quaternion-from-two-vectors-final
            // assumes direction vectors vFrom and vTo are normalized
            var v1, r;
            var EPS = 0.000001;

            if (v1 === undefined) v1 = new _vector2.default();

            r = vFrom.dot(vTo) + 1;

            if (r < EPS) {
                r = 0;

                if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
                    v1.set(-vFrom.y, vFrom.x, 0);
                } else {
                    v1.set(0, -vFrom.z, vFrom.y);
                }
            } else {
                v1.crossVectors(vFrom, vTo);
            }

            this.x = v1.x;
            this.y = v1.y;
            this.z = v1.z;
            this.w = r;

            this.normalize();
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"./vector3.es6":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
 * but refactored to use different data source provided over BLE by the TI Sensor Tag
 *
 * This piece in particular was also pulled by Boris from ThreeJS math
 *
 * original license from WebVR-Polyfill is as follows:
 * Copyright 2015 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.default = {
    degToRad: Math.PI / 180,
    radToDeg: 180 / Math.PI,
    MIN_TIMESTEP: 0.001,
    MAX_TIMESTEP: 1,

    // Helper method to validate the time steps of sensor timestamps.
    isTimestampDeltaValid: function isTimestampDeltaValid(timestampDeltaS) {
        if (isNaN(timestampDeltaS)) {
            return false;
        }
        if (timestampDeltaS <= this.MIN_TIMESTEP) {
            return false;
        }
        if (timestampDeltaS > this.MAX_TIMESTEP) {
            return false;
        }
        return true;
    }
};

},{}],5:[function(require,module,exports){
"use strict";

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

/**
 * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
 * but refactored to use different data source provided over BLE by the TI Sensor Tag
 *
 * This piece in particular was also pulled by Boris from ThreeJS math
 *
 * original license from WebVR-Polyfill is as follows:
 * Copyright 2015 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _class = function () {
    function _class(x, y, z) {
        _classCallCheck(this, _class);

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }

    _createClass(_class, [{
        key: "set",
        value: function set(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;

            return this;
        }
    }, {
        key: "copy",
        value: function copy(v) {
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;

            return this;
        }
    }, {
        key: "length",
        value: function length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
    }, {
        key: "normalize",
        value: function normalize() {
            var scalar = this.length();

            if (scalar !== 0) {
                var invScalar = 1 / scalar;

                this.multiplyScalar(invScalar);
            } else {
                this.x = 0;
                this.y = 0;
                this.z = 0;
            }

            return this;
        }
    }, {
        key: "multiplyScalar",
        value: function multiplyScalar(scalar) {
            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;
        }
    }, {
        key: "applyQuaternion",
        value: function applyQuaternion(q) {
            var x = this.x;
            var y = this.y;
            var z = this.z;

            var qx = q.x;
            var qy = q.y;
            var qz = q.z;
            var qw = q.w;

            // calculate quat * vector
            var ix = qw * x + qy * z - qz * y;
            var iy = qw * y + qz * x - qx * z;
            var iz = qw * z + qx * y - qy * x;
            var iw = -qx * x - qy * y - qz * z;

            // calculate result * inverse quat
            this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
            this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
            this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

            return this;
        }
    }, {
        key: "dot",
        value: function dot(v) {
            return this.x * v.x + this.y * v.y + this.z * v.z;
        }
    }, {
        key: "crossVectors",
        value: function crossVectors(a, b) {
            var ax = a.x,
                ay = a.y,
                az = a.z;
            var bx = b.x,
                by = b.y,
                bz = b.z;

            this.x = ay * bz - az * by;
            this.y = az * bx - ax * bz;
            this.z = ax * by - ay * bx;

            return this;
        }
    }]);

    return _class;
}();

exports.default = _class;
;

},{}],6:[function(require,module,exports){
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
}(); /**
      * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
      * but refactored to use different data source provided over BLE by the TI Sensor Tag
      *
      * original license from WebVR-Polyfill is as follows:
      * Copyright 2015 Google Inc. All Rights Reserved.
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

/**
 * TODO: Fix up all "new THREE" instantiations to improve performance.
 */

var _sensorSample = require('./sensor-sample.es6');

var _sensorSample2 = _interopRequireDefault(_sensorSample);

var _quaternion = require('../math/quaternion.es6');

var _quaternion2 = _interopRequireDefault(_quaternion);

var _vector = require('../math/vector3.es6');

var _vector2 = _interopRequireDefault(_vector);

var _util = require('../math/util.es6');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * An implementation of a simple complementary filter, which fuses gyroscope and
 * accelerometer data from the 'devicemotion' event.
 *
 * Accelerometer data is very noisy, but stable over the long term.
 * Gyroscope data is smooth, but tends to drift over the long term.
 *
 * This fusion is relatively simple:
 * 1. Get orientation estimates from accelerometer by applying a low-pass filter
 *    on that data.
 * 2. Get orientation estimates from gyroscope by integrating over time.
 * 3. Combine the two estimates, weighing (1) in the long term, but (2) for the
 *    short term.
 */

var _class = function () {
    function _class(kFilter) {
        _classCallCheck(this, _class);

        this.kFilter = kFilter;

        // Raw sensor measurements.
        this.currentAccelMeasurement = new _sensorSample2.default();
        this.currentGyroMeasurement = new _sensorSample2.default();
        this.previousGyroMeasurement = new _sensorSample2.default();

        // Current filter orientation
        this.filterQ = new _quaternion2.default();
        this.previousFilterQ = new _quaternion2.default();

        // Orientation based on the accelerometer.
        this.accelQ = new _quaternion2.default();
        // Whether or not the orientation has been initialized.
        this.isOrientationInitialized = false;
        // Running estimate of gravity based on the current orientation.
        this.estimatedGravity = new _vector2.default();
        // Measured gravity based on accelerometer.
        this.measuredGravity = new _vector2.default();

        // Debug only quaternion of gyro-based orientation.
        this.gyroIntegralQ = new _quaternion2.default();
    }

    _createClass(_class, [{
        key: 'addAccelMeasurement',
        value: function addAccelMeasurement(vector, timestampS) {
            this.currentAccelMeasurement.set(vector, timestampS);
        }
    }, {
        key: 'addGyroMeasurement',
        value: function addGyroMeasurement(vector, timestampS) {
            this.currentGyroMeasurement.set(vector, timestampS);

            var deltaT = timestampS - this.previousGyroMeasurement.timestampS;
            if (_util2.default.isTimestampDeltaValid(deltaT)) {
                this.run_();
            }

            this.previousGyroMeasurement.copy(this.currentGyroMeasurement);
        }
    }, {
        key: 'run_',
        value: function run_() {
            if (!this.isOrientationInitialized) {
                this.accelQ = this.accelToQuaternion_(this.currentAccelMeasurement.sample);
                this.previousFilterQ.copy(this.accelQ);
                this.isOrientationInitialized = true;
                return;
            }

            var deltaT = this.currentGyroMeasurement.timestampS - this.previousGyroMeasurement.timestampS;

            // Convert gyro rotation vector to a quaternion delta.
            var gyroDeltaQ = this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample, deltaT);
            this.gyroIntegralQ.multiply(gyroDeltaQ);

            // filter_1 = K * (filter_0 + gyro * dT) + (1 - K) * accel.
            this.filterQ.copy(this.previousFilterQ);
            this.filterQ.multiply(gyroDeltaQ);

            // Calculate the delta between the current estimated gravity and the real
            // gravity vector from accelerometer.
            var invFilterQ = new _quaternion2.default();
            invFilterQ.copy(this.filterQ);
            invFilterQ.inverse();

            this.estimatedGravity.set(0, 0, -1);
            this.estimatedGravity.applyQuaternion(invFilterQ);
            this.estimatedGravity.normalize();

            this.measuredGravity.copy(this.currentAccelMeasurement.sample);
            this.measuredGravity.normalize();

            // Compare estimated gravity with measured gravity, get the delta quaternion
            // between the two.
            var deltaQ = new _quaternion2.default();
            deltaQ.setFromUnitVectors(this.estimatedGravity, this.measuredGravity);
            deltaQ.inverse();

            /*if (DEBUG) {
                console.log('Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)',
                    MathUtil.radToDeg * Util.getQuaternionAngle(deltaQ),
                    (this.estimatedGravity.x).toFixed(1),
                    (this.estimatedGravity.y).toFixed(1),
                    (this.estimatedGravity.z).toFixed(1),
                    (this.measuredGravity.x).toFixed(1),
                    (this.measuredGravity.y).toFixed(1),
                    (this.measuredGravity.z).toFixed(1));
            }*/

            // Calculate the SLERP target: current orientation plus the measured-estimated
            // quaternion delta.
            var targetQ = new _quaternion2.default();
            targetQ.copy(this.filterQ);
            targetQ.multiply(deltaQ);

            // SLERP factor: 0 is pure gyro, 1 is pure accel.
            this.filterQ.slerp(targetQ, 1 - this.kFilter);

            this.previousFilterQ.copy(this.filterQ);
        }
    }, {
        key: 'getOrientation',
        value: function getOrientation() {
            return this.filterQ;
        }
    }, {
        key: 'accelToQuaternion_',
        value: function accelToQuaternion_(accel) {
            var normAccel = new _vector2.default();
            normAccel.copy(accel);
            normAccel.normalize();
            var quat = new _quaternion2.default();
            quat.setFromUnitVectors(new _vector2.default(0, 0, -1), normAccel);
            quat.inverse();
            return quat;
        }
    }, {
        key: 'gyroToQuaternionDelta_',
        value: function gyroToQuaternionDelta_(gyro, dt) {
            // Extract axis and angle from the gyroscope data.
            var quat = new _quaternion2.default();
            var axis = new _vector2.default();
            axis.copy(gyro);
            axis.normalize();
            quat.setFromAxisAngle(axis, gyro.length() * dt);
            return quat;
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"../math/quaternion.es6":3,"../math/util.es6":4,"../math/vector3.es6":5,"./sensor-sample.es6":10}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    K_FILTER: 0.98, // Default: 0.98.

    // How far into the future to predict during fast motion (in seconds).
    PREDICTION_TIME_S: 0.040, // Default: 0.040.

    YAW_ONLY: true
};

},{}],8:[function(require,module,exports){
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
}(); /**
      * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
      * but refactored to use different data source provided over BLE by the TI Sensor Tag
      *
      * original license from WebVR-Polyfill is as follows:
      * Copyright 2015 Google Inc. All Rights Reserved.
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

//import TouchPanner from '../touch-panner.es6';

var _complementaryFilter = require('./complementary-filter.es6');

var _complementaryFilter2 = _interopRequireDefault(_complementaryFilter);

var _posePredictor = require('./pose-predictor.es6');

var _posePredictor2 = _interopRequireDefault(_posePredictor);

var _util = require('../math/util.es6');

var _util2 = _interopRequireDefault(_util);

var _vector = require('../math/vector3.es6');

var _vector2 = _interopRequireDefault(_vector);

var _quaternion = require('../math/quaternion.es6');

var _quaternion2 = _interopRequireDefault(_quaternion);

var _config = require('./config.es6');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * The pose sensor, implemented using DeviceMotion APIs.
 */

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.accelerometer = new _vector2.default();
        this.gyroscope = new _vector2.default();

        this.filter = new _complementaryFilter2.default(_config2.default.K_FILTER);
        this.posePredictor = new _posePredictor2.default(_config2.default.PREDICTION_TIME_S);

        this.filterToWorldQ = new _quaternion2.default();
        this.filterToWorldQ.setFromAxisAngle(new _vector2.default(1, 0, 0), -Math.PI / 2);

        this.inverseWorldToScreenQ = new _quaternion2.default();
        this.worldToScreenQ = new _quaternion2.default();
        this.originalPoseAdjustQ = new _quaternion2.default();
        this.originalPoseAdjustQ.setFromAxisAngle(new _vector2.default(0, 0, 1), -window.orientation * Math.PI / 180);

        // Keep track of a reset transform for resetSensor.
        this.resetQ = new _quaternion2.default();

        this.orientationOut_ = new Float32Array(4);
    }

    _createClass(_class, [{
        key: 'getPosition',
        value: function getPosition() {
            // This PoseSensor doesn't support position
            return null;
        }
    }, {
        key: 'getOrientation',
        value: function getOrientation() {
            // Convert from filter space to the the same system used by the
            // deviceorientation event.
            var orientation = this.filter.getOrientation();

            // Predict orientation.
            this.predictedQ = this.posePredictor.getPrediction(orientation, this.gyroscope, this.previousTimestampS);

            // Convert to THREE coordinate system: -Z forward, Y up, X right.
            var out = new _quaternion2.default();
            out.copy(this.filterToWorldQ);
            out.multiply(this.resetQ);
            out.multiply(this.predictedQ);
            out.multiply(this.worldToScreenQ);

            this.orientationOut_[0] = out.x;
            this.orientationOut_[1] = out.y;
            this.orientationOut_[2] = out.z;
            this.orientationOut_[3] = out.w;
            return this.orientationOut_;
        }
    }, {
        key: 'resetPose',
        value: function resetPose() {
            // Reduce to inverted yaw-only.
            this.resetQ.copy(this.filter.getOrientation());
            this.resetQ.x = 0;
            this.resetQ.y = 0;
            this.resetQ.z *= -1;
            this.resetQ.normalize();

            // Take into account original pose.
            this.resetQ.multiply(this.originalPoseAdjustQ);
        }
    }, {
        key: 'updateSensorData',
        value: function updateSensorData(data) {
            var accGravity = data.sensors.accelerometer; //todo: gravity!
            var rotRate = data.sensors.gyroscope;
            var timestampS = data.sensors.timestamp / 1000;

            var deltaS = timestampS - this.previousTimestampS;
            if (deltaS <= _util2.default.MIN_TIMESTEP || deltaS > _util2.default.MAX_TIMESTEP) {
                console.warn('Invalid timestamps detected. Time step between successive ' + 'gyroscope sensor samples is very small or not monotonic', deltaS);
                this.previousTimestampS = timestampS;
                return;
            }

            this.accelerometer.set(-accGravity.x, -accGravity.y, -accGravity.z);
            this.gyroscope.set(rotRate.alpha, rotRate.beta, rotRate.gamma);
            this.gyroscope.multiplyScalar(Math.PI / 180);

            this.filter.addAccelMeasurement(this.accelerometer, timestampS);
            this.filter.addGyroMeasurement(this.gyroscope, timestampS);

            this.previousTimestampS = timestampS;
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"../math/quaternion.es6":3,"../math/util.es6":4,"../math/vector3.es6":5,"./complementary-filter.es6":6,"./config.es6":7,"./pose-predictor.es6":9}],9:[function(require,module,exports){
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
}(); /**
      * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
      * but refactored to use different data source provided over BLE by the TI Sensor Tag
      *
      * original license from WebVR-Polyfill is as follows:
      * Copyright 2015 Google Inc. All Rights Reserved.
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

var _quaternion = require('../math/quaternion.es6');

var _quaternion2 = _interopRequireDefault(_quaternion);

var _vector = require('../math/vector3.es6');

var _vector2 = _interopRequireDefault(_vector);

var _util = require('../math/util.es6');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Given an orientation and the gyroscope data, predicts the future orientation
 * of the head. This makes rendering appear faster.
 *
 * Also see: http://msl.cs.uiuc.edu/~lavalle/papers/LavYerKatAnt14.pdf
 *
 * @param {Number} predictionTimeS time from head movement to the appearance of
 * the corresponding image.
 */

var _class = function () {
    function _class(predictionTimeS) {
        _classCallCheck(this, _class);

        this.predictionTimeS = predictionTimeS;

        // The quaternion corresponding to the previous state.
        this.previousQ = new _quaternion2.default();
        // Previous time a prediction occurred.
        this.previousTimestampS = null;

        // The delta quaternion that adjusts the current pose.
        this.deltaQ = new _quaternion2.default();
        // The output quaternion.
        this.outQ = new _quaternion2.default();
    }

    _createClass(_class, [{
        key: 'getPrediction',
        value: function getPrediction(currentQ, gyro, timestampS) {
            if (!this.previousTimestampS) {
                this.previousQ.copy(currentQ);
                this.previousTimestampS = timestampS;
                return currentQ;
            }

            // Calculate axis and angle based on gyroscope rotation rate data.
            var axis = new _vector2.default();
            axis.copy(gyro);
            axis.normalize();

            var angularSpeed = gyro.length();

            // If we're rotating slowly, don't do prediction.
            if (angularSpeed < _util2.default.degToRad * 20) {
                //if (DEBUG) {
                // console.log('Moving slowly, at %s deg/s: no prediction',
                //  (MathUtil.radToDeg * angularSpeed).toFixed(1));
                //}
                this.outQ.copy(currentQ);
                this.previousQ.copy(currentQ);
                return this.outQ;
            }

            // Get the predicted angle based on the time delta and latency.
            var deltaT = timestampS - this.previousTimestampS;
            var predictAngle = angularSpeed * this.predictionTimeS;

            this.deltaQ.setFromAxisAngle(axis, predictAngle);
            this.outQ.copy(this.previousQ);
            this.outQ.multiply(this.deltaQ);

            this.previousQ.copy(currentQ);

            return this.outQ;
        }
    }]);

    return _class;
}();

exports.default = _class;
;

},{"../math/quaternion.es6":3,"../math/util.es6":4,"../math/vector3.es6":5}],10:[function(require,module,exports){
"use strict";

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

/**
 * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
 * but refactored to use different data source provided over BLE by the TI Sensor Tag
 *
 * original license from WebVR-Polyfill is as follows:
 * Copyright 2015 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _class = function () {
    function _class(sample, timestampS) {
        _classCallCheck(this, _class);

        this.set(sample, timestampS);
    }

    _createClass(_class, [{
        key: "set",
        value: function set(sample, timestampS) {
            this.sample = sample;
            this.timestampS = timestampS;
        }
    }, {
        key: "copy",
        value: function copy(sensorSample) {
            this.set(sensorSample.sample, sensorSample.timestampS);
        }
    }]);

    return _class;
}();

exports.default = _class;

},{}],11:[function(require,module,exports){
'use strict';

var _tisensortag = require('./devices/tisensortag.es6');

var _tisensortag2 = _interopRequireDefault(_tisensortag);

var _complementaryFilter = require('./sensorfusion/complementary-filter.es6');

var _complementaryFilter2 = _interopRequireDefault(_complementaryFilter);

var _fusionPoseSensor = require('./sensorfusion/fusion-pose-sensor.es6');

var _fusionPoseSensor2 = _interopRequireDefault(_fusionPoseSensor);

var _posePredictor = require('./sensorfusion/pose-predictor.es6');

var _posePredictor2 = _interopRequireDefault(_posePredictor);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.tisensortag = _tisensortag2.default;
exports.sensorfusion = {
    complementaryfilter: _complementaryFilter2.default,
    fusionposesensor: _fusionPoseSensor2.default,
    posepredictor: _posePredictor2.default
};

},{"./devices/tisensortag.es6":2,"./sensorfusion/complementary-filter.es6":6,"./sensorfusion/fusion-pose-sensor.es6":8,"./sensorfusion/pose-predictor.es6":9}]},{},[11])(11)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGV2aWNlcy9kZXZpY2UuZXM2Iiwic3JjL2RldmljZXMvdGlzZW5zb3J0YWcuZXM2Iiwic3JjL21hdGgvcXVhdGVybmlvbi5lczYiLCJzcmMvbWF0aC91dGlsLmVzNiIsInNyYy9tYXRoL3ZlY3RvcjMuZXM2Iiwic3JjL3NlbnNvcmZ1c2lvbi9jb21wbGVtZW50YXJ5LWZpbHRlci5lczYiLCJzcmMvc2Vuc29yZnVzaW9uL2NvbmZpZy5lczYiLCJzcmMvc2Vuc29yZnVzaW9uL2Z1c2lvbi1wb3NlLXNlbnNvci5lczYiLCJzcmMvc2Vuc29yZnVzaW9uL3Bvc2UtcHJlZGljdG9yLmVzNiIsInNyYy9zZW5zb3JmdXNpb24vc2Vuc29yLXNhbXBsZS5lczYiLCJzcmMvdnJjb250cm9sbGVyLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7eUJBR0k7c0JBQWM7OEJBSVY7Ozs7O2FBQUEsQUFBSyxnQkFBZ0IsdUJBQXJCLEFBTUE7Ozs7OzthQUFBLEFBQUssYUFBTCxBQUFrQixBQU9sQjs7Ozs7OzthQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDMUI7Ozs7Ozs7Ozs7Z0MsQUFNTyxJQUFJLEFBQ1I7Z0JBQUEsQUFBSSxJQUFJLEFBQ0o7cUJBQUEsQUFBSyxnQkFBTCxBQUFxQixLQUFyQixBQUEwQixBQUM3QjtBQUNEO2dCQUFJLEtBQUosQUFBUyxZQUFZLEFBQUU7QUFBUztBQUNuQzs7Ozs7Ozs7OzttQyxBQU1VLElBQUksQUFDWDtpQkFBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksS0FBQSxBQUFLLGdCQUF6QixBQUF5QyxRQUF6QyxBQUFpRCxLQUFLLEFBQ2xEO29CQUFJLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixPQUF6QixBQUFnQyxJQUFJLEFBQ2hDO3lCQUFBLEFB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QjttQ0FISixBQUF1QjtBQUFBLEFBQ25CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBTZW5zb3JGdXNpb24gZnJvbSAnLi4vc2Vuc29yZnVzaW9uL2Z1c2lvbi1wb3NlLXNlbnNvci5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZW5zb3IgZnVzaW9uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9zZW5zb3JmdXNpb24gPSBuZXcgU2Vuc29yRnVzaW9uKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIGFscmVhZHkgY29ubmVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNvbm5lY3QgdG8gc2Vuc29ydGFnXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrXG4gICAgICovXG4gICAgY29ubmVjdChjYikge1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHsgcmV0dXJuOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGlzY29ubmVjdFxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoY2IpIHtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLl9ldmVudExpc3RlbmVycy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50TGlzdGVuZXJzW2NdID09PSBjYikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzLnNwbGljZShjLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHVwZGF0ZSBsaXN0ZW5lcnMgd2l0aCBkYXRhXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGUoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5zZW5zb3JzICYmIGRhdGEuc2Vuc29ycy5hY2NlbGVyb21ldGVyICYmIGRhdGEuc2Vuc29ycy5neXJvc2NvcGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbnNvcmZ1c2lvbi51cGRhdGVTZW5zb3JEYXRhKGRhdGEpO1xuICAgICAgICAgICAgZGF0YS5zZW5zb3JzLm9yaWVudGF0aW9uID0gdGhpcy5fc2Vuc29yZnVzaW9uLmdldE9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMuX2V2ZW50TGlzdGVuZXJzLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbY10oJ21vdGlvbnVwZGF0ZScsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBEZXZpY2UgZnJvbSAnLi9kZXZpY2UuZXM2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBEZXZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogc29ja2V0IGNvbm5lY3Rpb25cbiAgICAgICAgICogQHR5cGUge251bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNvY2tldCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIGFscmVhZHkgY29ubmVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJhc2UgVVVJRFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmFzZVVVSUQgPSBbJ2YwMDAnLCAnLTA0NTEtNDAwMC1iMDAwLTAwMDAwMDAwMDAwMCddO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZXJ2aWNlIFVVSURTXG4gICAgICAgICAqIEB0eXBlIHt7fX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3V1aWQgPSB7fTtcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMDAnICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQudGVtcGVyYXR1cmVEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTAyJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLnRlbXBlcmF0dXJlUGVyaW9kID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMycgKyB0aGlzLl9iYXNlVVVJRFsxXTtcblxuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXIgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTEwJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXJEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyQ29uZmlndXJhdGlvbiA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMTInICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQuYWNjZWxlcm9tZXRlclBlcmlvZCA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMTMnICsgdGhpcy5fYmFzZVVVSURbMV07XG5cbiAgICAgICAgdGhpcy5fdXVpZC5odW1pZGl0eSA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMjAnICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQuaHVtaWRpdHlEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEyMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC5odW1pZGl0eUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTIyJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLmh1bWlkaXR5UGVyaW9kID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEyMycgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb25uZWN0IHRvIHNlbnNvcnRhZ1xuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFja1xuICAgICAqL1xuICAgIGNvbm5lY3QoY2IpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdChjYik7XG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0b3IuYmx1ZXRvb3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gYmx1ZXRvb3RoIHN1cHBvcnQgaW4geW91ciBicm93c2VyLCB0cnlpbmcgd2Vic29ja2V0cyBmcm9tIGEgbG9jYWwgbm9kZSBzZXJ2ZXInKTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikgeyBjb25zb2xlLmxvZygnV2ViU29ja2V0IEVycm9yICcgKyBlcnJvcik7IH07XG5cbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc2Vuc29ycy5hY2NlbGVyb21ldGVyLmFjdGl2ZSAmJiBkYXRhLnNlbnNvcnMuZ3lyb3Njb3BlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnNlbnNvcnMgPSB0aGlzLm5vcm1hbGl6ZVNlbnNvcnMoZGF0YS5zZW5zb3JzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5zZW5kKCdjb25uZWN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5ibHVldG9vdGgucmVxdWVzdERldmljZShcbiAgICAgICAgICAgICAgICB7ICAgZmlsdGVyczogWyB7bmFtZTogJ1NlbnNvclRhZyd9LCB7IHNlcnZpY2VzOiBbIHRoaXMuX3V1aWQudGVtcGVyYXR1cmUsIHRoaXMuX3V1aWQuYWNjZWxlcm9tZXRlciwgdGhpcy5fdXVpZC5odW1pZGl0eSBdIH1dLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbFNlcnZpY2VzOiBbIHRoaXMuX3V1aWQudGVtcGVyYXR1cmUsIHRoaXMuX3V1aWQuYWNjZWxlcm9tZXRlciwgdGhpcy5fdXVpZC5odW1pZGl0eSBdIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZGV2aWNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBkZXZpY2U6JywgZGV2aWNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkOicsIGRldmljZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25uZWN0ZWQgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXZpY2UuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWQgPSBkZXZpY2UuZ2F0dC5jb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0ZWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0dGluZyBTZXJ2aWNl4oCmJywgc2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gc2VydmVyLmdldFByaW1hcnlTZXJ2aWNlKCdmMDAwYWExMC0wNDUxLTQwMDAtYjAwMC0wMDAwMDAwMDAwMDAnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLm9uRGV2aWNlRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHR3ZWFrIHNlbnNvciBkYXRhIHRvIGFsaWduIHdpdGggb3RoZXIgc2Vuc29ycyBiZXR0ZXIgKGxpa2UgZnJvbSBhIGxhcHRvcClcbiAgICAgKiBAcGFyYW0gc2Vuc29yZGF0YVxuICAgICAqL1xuICAgIG5vcm1hbGl6ZVNlbnNvcnMoc2Vuc29yZGF0YSkge1xuICAgICAgICBpZiAoc2Vuc29yZGF0YS5neXJvc2NvcGUpIHtcbiAgICAgICAgICAgIC8vIHggYW5kIHogcmVhZGluZ3MgYXJlIHN3YXBwZWRcbiAgICAgICAgICAgIHNlbnNvcmRhdGEuZ3lyb3Njb3BlLmFscGhhID0gLXNlbnNvcmRhdGEuZ3lyb3Njb3BlLmdhbW1hIC8gKDY1NTM2IC8gNTAwKSArIDEuNDU7IC8vIG5vIG1vdGlvbiBwcm9kdWNlcyB+IC0xLjQ1IHJlYWRpbmcuLi5jYW5jZWwgaXRcbiAgICAgICAgICAgIHNlbnNvcmRhdGEuZ3lyb3Njb3BlLmJldGEgPSAtc2Vuc29yZGF0YS5neXJvc2NvcGUuYmV0YSAvICg2NTUzNiAvIDUwMCkgKyAyLjA7IC8vIG5vIG1vdGlvbiBwcm9kdWNlcyB+IC0yLjAgcmVhZGluZy4uLmNhbmNlbCBpdFxuICAgICAgICAgICAgc2Vuc29yZGF0YS5neXJvc2NvcGUuZ2FtbWEgPSAtc2Vuc29yZGF0YS5neXJvc2NvcGUuYWxwaGEgLyAoNjU1MzYgLyA1MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbnNvcmRhdGEuYWNjZWxlcm9tZXRlcikge1xuICAgICAgICAgICAgLy8gWUVTIHdlIGFyZSBmbGlwcGluZyBZIGFuZCB6LiBTZWVpbmcgdmFsdWVzIGZsaXBwZWQgaW4gcHJhY3RpY2UgZm9yXG4gICAgICAgICAgICAvLyBuYXR1cmFsIGZlZWwgaG9sZGluZyBvZiBzZW5zb3J0YWcgLSBJIHRoaW5rIHRoZXkgaW50ZW5kIGl0IHRvIHNpdCBvbiBpdHMgYmFzZSB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICAvLyBidXQgd2hlbiBob2xkaW5nIGl0LCB5b3UnZCBsYXkgaXQgZG93biBpbiB5b3VyIGhhbmQgYWxsb3dpbmcgeW91ciB0aHVtYiB0byBoaXQgdGhlIGJ1dHRvbnNcbiAgICAgICAgICAgIHZhciB6ID0gc2Vuc29yZGF0YS5hY2NlbGVyb21ldGVyLnogLyAxNiAqIDkuODE7XG4gICAgICAgICAgICB2YXIgeSA9IHNlbnNvcmRhdGEuYWNjZWxlcm9tZXRlci55IC8gMTYgKiA5LjgxO1xuICAgICAgICAgICAgdmFyIHggPSBzZW5zb3JkYXRhLmFjY2VsZXJvbWV0ZXIueCAvIDE2ICogOS44MTtcbiAgICAgICAgICAgIHNlbnNvcmRhdGEuYWNjZWxlcm9tZXRlci54ID0geDtcbiAgICAgICAgICAgIHNlbnNvcmRhdGEuYWNjZWxlcm9tZXRlci55ID0geTtcbiAgICAgICAgICAgIHNlbnNvcmRhdGEuYWNjZWxlcm9tZXRlci56ID0gejtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2Vuc29yZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvbiBkZXZpY2UgcmVxdWVzdGVkIHN1Y2Nlc3NcbiAgICAgKiBAcGFyYW0gZGV2aWNlXG4gICAgICovXG4gICAgb25EZXZpY2VSZXF1ZXN0ZWRTdWNjZXNzKGRldmljZSkge1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGRldmljZS5nYXR0LmNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvbiBkZXZpY2UgcmVxdWVzdGVkIGVycm9yXG4gICAgICogQHBhcmFtIGRldmljZVxuICAgICAqL1xuICAgIG9uRGV2aWNlRXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufSIsIi8qKlxuICogSGVhdmlseSBsaWZ0ZWQgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBwcm9qZWN0IGJ5IEJvcmlzIFNtdXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1wb2x5ZmlsbFxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xuICpcbiAqIFRoaXMgcGllY2UgaW4gcGFydGljdWxhciB3YXMgYWxzbyBwdWxsZWQgYnkgQm9yaXMgZnJvbSBUaHJlZUpTIG1hdGhcbiAqXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBWZWN0b3IzIGZyb20gJy4vdmVjdG9yMy5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoIHgsIHksIHosIHcgKSB7XG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xuICAgICAgICB0aGlzLnogPSB6IHx8IDA7XG4gICAgICAgIHRoaXMudyA9ICggdyAhPT0gdW5kZWZpbmVkICkgPyB3IDogMTtcbiAgICB9XG5cbiAgICBzZXQoIHgsIHksIHosIHcgKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMueiA9IHo7XG4gICAgICAgIHRoaXMudyA9IHc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weSggcXVhdGVybmlvbiApIHtcbiAgICAgICAgdGhpcy54ID0gcXVhdGVybmlvbi54O1xuICAgICAgICB0aGlzLnkgPSBxdWF0ZXJuaW9uLnk7XG4gICAgICAgIHRoaXMueiA9IHF1YXRlcm5pb24uejtcbiAgICAgICAgdGhpcy53ID0gcXVhdGVybmlvbi53O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEZyb21FdWxlclhZWiggeCwgeSwgeiApIHtcbiAgICAgICAgdmFyIGMxID0gTWF0aC5jb3MoIHggLyAyICk7XG4gICAgICAgIHZhciBjMiA9IE1hdGguY29zKCB5IC8gMiApO1xuICAgICAgICB2YXIgYzMgPSBNYXRoLmNvcyggeiAvIDIgKTtcbiAgICAgICAgdmFyIHMxID0gTWF0aC5zaW4oIHggLyAyICk7XG4gICAgICAgIHZhciBzMiA9IE1hdGguc2luKCB5IC8gMiApO1xuICAgICAgICB2YXIgczMgPSBNYXRoLnNpbiggeiAvIDIgKTtcblxuICAgICAgICB0aGlzLnggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7XG4gICAgICAgIHRoaXMueSA9IGMxICogczIgKiBjMyAtIHMxICogYzIgKiBzMztcbiAgICAgICAgdGhpcy56ID0gYzEgKiBjMiAqIHMzICsgczEgKiBzMiAqIGMzO1xuICAgICAgICB0aGlzLncgPSBjMSAqIGMyICogYzMgLSBzMSAqIHMyICogczM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0RnJvbUV1bGVyWVhaKCB4LCB5LCB6ICkge1xuICAgICAgICB2YXIgYzEgPSBNYXRoLmNvcyggeCAvIDIgKTtcbiAgICAgICAgdmFyIGMyID0gTWF0aC5jb3MoIHkgLyAyICk7XG4gICAgICAgIHZhciBjMyA9IE1hdGguY29zKCB6IC8gMiApO1xuICAgICAgICB2YXIgczEgPSBNYXRoLnNpbiggeCAvIDIgKTtcbiAgICAgICAgdmFyIHMyID0gTWF0aC5zaW4oIHkgLyAyICk7XG4gICAgICAgIHZhciBzMyA9IE1hdGguc2luKCB6IC8gMiApO1xuXG4gICAgICAgIHRoaXMueCA9IHMxICogYzIgKiBjMyArIGMxICogczIgKiBzMztcbiAgICAgICAgdGhpcy55ID0gYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzO1xuICAgICAgICB0aGlzLnogPSBjMSAqIGMyICogczMgLSBzMSAqIHMyICogYzM7XG4gICAgICAgIHRoaXMudyA9IGMxICogYzIgKiBjMyArIHMxICogczIgKiBzMztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRGcm9tQXhpc0FuZ2xlKCBheGlzLCBhbmdsZSApIHtcbiAgICAgICAgLy8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL2FuZ2xlVG9RdWF0ZXJuaW9uL2luZGV4Lmh0bVxuICAgICAgICAvLyBhc3N1bWVzIGF4aXMgaXMgbm9ybWFsaXplZFxuXG4gICAgICAgIHZhciBoYWxmQW5nbGUgPSBhbmdsZSAvIDIsIHMgPSBNYXRoLnNpbiggaGFsZkFuZ2xlICk7XG5cbiAgICAgICAgdGhpcy54ID0gYXhpcy54ICogcztcbiAgICAgICAgdGhpcy55ID0gYXhpcy55ICogcztcbiAgICAgICAgdGhpcy56ID0gYXhpcy56ICogcztcbiAgICAgICAgdGhpcy53ID0gTWF0aC5jb3MoIGhhbGZBbmdsZSApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KCBxICkge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseVF1YXRlcm5pb25zKCB0aGlzLCBxICk7XG4gICAgfVxuXG4gICAgbXVsdGlwbHlRdWF0ZXJuaW9ucyggYSwgYiApIHtcbiAgICAgICAgLy8gZnJvbSBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL3JlYWxOb3JtZWRBbGdlYnJhL3F1YXRlcm5pb25zL2NvZGUvaW5kZXguaHRtXG5cbiAgICAgICAgdmFyIHFheCA9IGEueCwgcWF5ID0gYS55LCBxYXogPSBhLnosIHFhdyA9IGEudztcbiAgICAgICAgdmFyIHFieCA9IGIueCwgcWJ5ID0gYi55LCBxYnogPSBiLnosIHFidyA9IGIudztcblxuICAgICAgICB0aGlzLnggPSBxYXggKiBxYncgKyBxYXcgKiBxYnggKyBxYXkgKiBxYnogLSBxYXogKiBxYnk7XG4gICAgICAgIHRoaXMueSA9IHFheSAqIHFidyArIHFhdyAqIHFieSArIHFheiAqIHFieCAtIHFheCAqIHFiejtcbiAgICAgICAgdGhpcy56ID0gcWF6ICogcWJ3ICsgcWF3ICogcWJ6ICsgcWF4ICogcWJ5IC0gcWF5ICogcWJ4O1xuICAgICAgICB0aGlzLncgPSBxYXcgKiBxYncgLSBxYXggKiBxYnggLSBxYXkgKiBxYnkgLSBxYXogKiBxYno7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW52ZXJzZSgpIHtcbiAgICAgICAgdGhpcy54ICo9IC0xO1xuICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIHRoaXMueiAqPSAtMTtcblxuICAgICAgICB0aGlzLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgdmFyIGwgPSBNYXRoLnNxcnQoIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueiArIHRoaXMudyAqIHRoaXMudyApO1xuXG4gICAgICAgIGlmICggbCA9PT0gMCApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgdGhpcy56ID0gMDtcbiAgICAgICAgICAgIHRoaXMudyA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsID0gMSAvIGw7XG5cbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueCAqIGw7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKiBsO1xuICAgICAgICAgICAgdGhpcy56ID0gdGhpcy56ICogbDtcbiAgICAgICAgICAgIHRoaXMudyA9IHRoaXMudyAqIGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbGVycCggcWIsIHQgKSB7XG4gICAgICAgIGlmICggdCA9PT0gMCApIHJldHVybiB0aGlzO1xuICAgICAgICBpZiAoIHQgPT09IDEgKSByZXR1cm4gdGhpcy5jb3B5KCBxYiApO1xuXG4gICAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55LCB6ID0gdGhpcy56LCB3ID0gdGhpcy53O1xuXG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2FsZ2VicmEvcmVhbE5vcm1lZEFsZ2VicmEvcXVhdGVybmlvbnMvc2xlcnAvXG5cbiAgICAgICAgdmFyIGNvc0hhbGZUaGV0YSA9IHcgKiBxYi53ICsgeCAqIHFiLnggKyB5ICogcWIueSArIHogKiBxYi56O1xuXG4gICAgICAgIGlmICggY29zSGFsZlRoZXRhIDwgMCApIHtcbiAgICAgICAgICAgIHRoaXMudyA9IC0gcWIudztcbiAgICAgICAgICAgIHRoaXMueCA9IC0gcWIueDtcbiAgICAgICAgICAgIHRoaXMueSA9IC0gcWIueTtcbiAgICAgICAgICAgIHRoaXMueiA9IC0gcWIuejtcblxuICAgICAgICAgICAgY29zSGFsZlRoZXRhID0gLSBjb3NIYWxmVGhldGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvcHkoIHFiICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGNvc0hhbGZUaGV0YSA+PSAxLjAgKSB7XG4gICAgICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgICAgICB0aGlzLnogPSB6O1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYWxmVGhldGEgPSBNYXRoLmFjb3MoIGNvc0hhbGZUaGV0YSApO1xuICAgICAgICB2YXIgc2luSGFsZlRoZXRhID0gTWF0aC5zcXJ0KCAxLjAgLSBjb3NIYWxmVGhldGEgKiBjb3NIYWxmVGhldGEgKTtcblxuICAgICAgICBpZiAoIE1hdGguYWJzKCBzaW5IYWxmVGhldGEgKSA8IDAuMDAxICkge1xuICAgICAgICAgICAgdGhpcy53ID0gMC41ICogKCB3ICsgdGhpcy53ICk7XG4gICAgICAgICAgICB0aGlzLnggPSAwLjUgKiAoIHggKyB0aGlzLnggKTtcbiAgICAgICAgICAgIHRoaXMueSA9IDAuNSAqICggeSArIHRoaXMueSApO1xuICAgICAgICAgICAgdGhpcy56ID0gMC41ICogKCB6ICsgdGhpcy56ICk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJhdGlvQSA9IE1hdGguc2luKCAoIDEgLSB0ICkgKiBoYWxmVGhldGEgKSAvIHNpbkhhbGZUaGV0YSxcbiAgICAgICAgICAgIHJhdGlvQiA9IE1hdGguc2luKCB0ICogaGFsZlRoZXRhICkgLyBzaW5IYWxmVGhldGE7XG5cbiAgICAgICAgdGhpcy53ID0gKCB3ICogcmF0aW9BICsgdGhpcy53ICogcmF0aW9CICk7XG4gICAgICAgIHRoaXMueCA9ICggeCAqIHJhdGlvQSArIHRoaXMueCAqIHJhdGlvQiApO1xuICAgICAgICB0aGlzLnkgPSAoIHkgKiByYXRpb0EgKyB0aGlzLnkgKiByYXRpb0IgKTtcbiAgICAgICAgdGhpcy56ID0gKCB6ICogcmF0aW9BICsgdGhpcy56ICogcmF0aW9CICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0RnJvbVVuaXRWZWN0b3JzKHZGcm9tLCB2VG8pIHtcbiAgICAgICAgLy8gaHR0cDovL2xvbGVuZ2luZS5uZXQvYmxvZy8yMDE0LzAyLzI0L3F1YXRlcm5pb24tZnJvbS10d28tdmVjdG9ycy1maW5hbFxuICAgICAgICAvLyBhc3N1bWVzIGRpcmVjdGlvbiB2ZWN0b3JzIHZGcm9tIGFuZCB2VG8gYXJlIG5vcm1hbGl6ZWRcbiAgICAgICAgdmFyIHYxLCByO1xuICAgICAgICB2YXIgRVBTID0gMC4wMDAwMDE7XG5cbiAgICAgICAgaWYgKHYxID09PSB1bmRlZmluZWQpIHYxID0gbmV3IFZlY3RvcjMoKTtcblxuICAgICAgICByID0gdkZyb20uZG90KHZUbykgKyAxO1xuXG4gICAgICAgIGlmIChyIDwgRVBTKSB7XG4gICAgICAgICAgICByID0gMDtcblxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZGcm9tLngpID4gTWF0aC5hYnModkZyb20ueikpIHtcbiAgICAgICAgICAgICAgICB2MS5zZXQoLXZGcm9tLnksIHZGcm9tLngsIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2MS5zZXQoMCwgLXZGcm9tLnosIHZGcm9tLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdjEuY3Jvc3NWZWN0b3JzKHZGcm9tLCB2VG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gdjEueDtcbiAgICAgICAgdGhpcy55ID0gdjEueTtcbiAgICAgICAgdGhpcy56ID0gdjEuejtcbiAgICAgICAgdGhpcy53ID0gcjtcblxuICAgICAgICB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgIH1cbn0iLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBUaGlzIHBpZWNlIGluIHBhcnRpY3VsYXIgd2FzIGFsc28gcHVsbGVkIGJ5IEJvcmlzIGZyb20gVGhyZWVKUyBtYXRoXG4gKlxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVnVG9SYWQ6IE1hdGguUEkgLyAxODAsXG4gICAgcmFkVG9EZWc6IDE4MCAvIE1hdGguUEksXG4gICAgTUlOX1RJTUVTVEVQOiAwLjAwMSxcbiAgICBNQVhfVElNRVNURVA6IDEsXG5cbiAgICAvLyBIZWxwZXIgbWV0aG9kIHRvIHZhbGlkYXRlIHRoZSB0aW1lIHN0ZXBzIG9mIHNlbnNvciB0aW1lc3RhbXBzLlxuICAgIGlzVGltZXN0YW1wRGVsdGFWYWxpZDogZnVuY3Rpb24odGltZXN0YW1wRGVsdGFTKSB7XG4gICAgICAgIGlmIChpc05hTih0aW1lc3RhbXBEZWx0YVMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVzdGFtcERlbHRhUyA8PSB0aGlzLk1JTl9USU1FU1RFUCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lc3RhbXBEZWx0YVMgPiB0aGlzLk1BWF9USU1FU1RFUCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0iLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBUaGlzIHBpZWNlIGluIHBhcnRpY3VsYXIgd2FzIGFsc28gcHVsbGVkIGJ5IEJvcmlzIGZyb20gVGhyZWVKUyBtYXRoXG4gKlxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xuICAgICAgICB0aGlzLnogPSB6IHx8IDA7XG4gICAgfVxuXG4gICAgc2V0KCB4LCB5LCB6ICkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnogPSB6O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkoIHYgKSB7XG4gICAgICAgIHRoaXMueCA9IHYueDtcbiAgICAgICAgdGhpcy55ID0gdi55O1xuICAgICAgICB0aGlzLnogPSB2Lno7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKTtcbiAgICB9XG5cbiAgICBub3JtYWxpemUoKSB7XG4gICAgICAgIHZhciBzY2FsYXIgPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAgIGlmICggc2NhbGFyICE9PSAwICkge1xuICAgICAgICAgICAgdmFyIGludlNjYWxhciA9IDEgLyBzY2FsYXI7XG5cbiAgICAgICAgICAgIHRoaXMubXVsdGlwbHlTY2FsYXIoaW52U2NhbGFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgdGhpcy56ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5U2NhbGFyKCBzY2FsYXIgKSB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueiAqPSBzY2FsYXI7XG4gICAgfVxuXG4gICAgYXBwbHlRdWF0ZXJuaW9uKCBxICkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHZhciB6ID0gdGhpcy56O1xuXG4gICAgICAgIHZhciBxeCA9IHEueDtcbiAgICAgICAgdmFyIHF5ID0gcS55O1xuICAgICAgICB2YXIgcXogPSBxLno7XG4gICAgICAgIHZhciBxdyA9IHEudztcblxuICAgICAgICAvLyBjYWxjdWxhdGUgcXVhdCAqIHZlY3RvclxuICAgICAgICB2YXIgaXggPSAgcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5O1xuICAgICAgICB2YXIgaXkgPSAgcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6O1xuICAgICAgICB2YXIgaXogPSAgcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4O1xuICAgICAgICB2YXIgaXcgPSAtIHF4ICogeCAtIHF5ICogeSAtIHF6ICogejtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gICAgICAgIHRoaXMueCA9IGl4ICogcXcgKyBpdyAqIC0gcXggKyBpeSAqIC0gcXogLSBpeiAqIC0gcXk7XG4gICAgICAgIHRoaXMueSA9IGl5ICogcXcgKyBpdyAqIC0gcXkgKyBpeiAqIC0gcXggLSBpeCAqIC0gcXo7XG4gICAgICAgIHRoaXMueiA9IGl6ICogcXcgKyBpdyAqIC0gcXogKyBpeCAqIC0gcXkgLSBpeSAqIC0gcXg7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZG90KCB2ICkge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55ICsgdGhpcy56ICogdi56O1xuICAgIH1cblxuICAgIGNyb3NzVmVjdG9ycyggYSwgYiApIHtcbiAgICAgICAgdmFyIGF4ID0gYS54LCBheSA9IGEueSwgYXogPSBhLno7XG4gICAgICAgIHZhciBieCA9IGIueCwgYnkgPSBiLnksIGJ6ID0gYi56O1xuXG4gICAgICAgIHRoaXMueCA9IGF5ICogYnogLSBheiAqIGJ5O1xuICAgICAgICB0aGlzLnkgPSBheiAqIGJ4IC0gYXggKiBiejtcbiAgICAgICAgdGhpcy56ID0gYXggKiBieSAtIGF5ICogYng7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTsiLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXG4vKipcbiAqIFRPRE86IEZpeCB1cCBhbGwgXCJuZXcgVEhSRUVcIiBpbnN0YW50aWF0aW9ucyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLlxuICovXG5pbXBvcnQgU2Vuc29yU2FtcGxlIGZyb20gJy4vc2Vuc29yLXNhbXBsZS5lczYnO1xuaW1wb3J0IFF1YXRlcm5pb24gZnJvbSAgJy4uL21hdGgvcXVhdGVybmlvbi5lczYnO1xuaW1wb3J0IFZlY3RvcjMgZnJvbSAgJy4uL21hdGgvdmVjdG9yMy5lczYnO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gJy4uL21hdGgvdXRpbC5lczYnO1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGEgc2ltcGxlIGNvbXBsZW1lbnRhcnkgZmlsdGVyLCB3aGljaCBmdXNlcyBneXJvc2NvcGUgYW5kXG4gKiBhY2NlbGVyb21ldGVyIGRhdGEgZnJvbSB0aGUgJ2RldmljZW1vdGlvbicgZXZlbnQuXG4gKlxuICogQWNjZWxlcm9tZXRlciBkYXRhIGlzIHZlcnkgbm9pc3ksIGJ1dCBzdGFibGUgb3ZlciB0aGUgbG9uZyB0ZXJtLlxuICogR3lyb3Njb3BlIGRhdGEgaXMgc21vb3RoLCBidXQgdGVuZHMgdG8gZHJpZnQgb3ZlciB0aGUgbG9uZyB0ZXJtLlxuICpcbiAqIFRoaXMgZnVzaW9uIGlzIHJlbGF0aXZlbHkgc2ltcGxlOlxuICogMS4gR2V0IG9yaWVudGF0aW9uIGVzdGltYXRlcyBmcm9tIGFjY2VsZXJvbWV0ZXIgYnkgYXBwbHlpbmcgYSBsb3ctcGFzcyBmaWx0ZXJcbiAqICAgIG9uIHRoYXQgZGF0YS5cbiAqIDIuIEdldCBvcmllbnRhdGlvbiBlc3RpbWF0ZXMgZnJvbSBneXJvc2NvcGUgYnkgaW50ZWdyYXRpbmcgb3ZlciB0aW1lLlxuICogMy4gQ29tYmluZSB0aGUgdHdvIGVzdGltYXRlcywgd2VpZ2hpbmcgKDEpIGluIHRoZSBsb25nIHRlcm0sIGJ1dCAoMikgZm9yIHRoZVxuICogICAgc2hvcnQgdGVybS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Ioa0ZpbHRlcikge1xuICAgICAgICB0aGlzLmtGaWx0ZXIgPSBrRmlsdGVyO1xuXG4gICAgICAgIC8vIFJhdyBzZW5zb3IgbWVhc3VyZW1lbnRzLlxuICAgICAgICB0aGlzLmN1cnJlbnRBY2NlbE1lYXN1cmVtZW50ID0gbmV3IFNlbnNvclNhbXBsZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRHeXJvTWVhc3VyZW1lbnQgPSBuZXcgU2Vuc29yU2FtcGxlKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNHeXJvTWVhc3VyZW1lbnQgPSBuZXcgU2Vuc29yU2FtcGxlKCk7XG5cbiAgICAgICAgLy8gQ3VycmVudCBmaWx0ZXIgb3JpZW50YXRpb25cbiAgICAgICAgdGhpcy5maWx0ZXJRID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0ZpbHRlclEgPSBuZXcgUXVhdGVybmlvbigpO1xuXG4gICAgICAgIC8vIE9yaWVudGF0aW9uIGJhc2VkIG9uIHRoZSBhY2NlbGVyb21ldGVyLlxuICAgICAgICB0aGlzLmFjY2VsUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBvcmllbnRhdGlvbiBoYXMgYmVlbiBpbml0aWFsaXplZC5cbiAgICAgICAgdGhpcy5pc09yaWVudGF0aW9uSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gUnVubmluZyBlc3RpbWF0ZSBvZiBncmF2aXR5IGJhc2VkIG9uIHRoZSBjdXJyZW50IG9yaWVudGF0aW9uLlxuICAgICAgICB0aGlzLmVzdGltYXRlZEdyYXZpdHkgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICAvLyBNZWFzdXJlZCBncmF2aXR5IGJhc2VkIG9uIGFjY2VsZXJvbWV0ZXIuXG4gICAgICAgIHRoaXMubWVhc3VyZWRHcmF2aXR5ID0gbmV3IFZlY3RvcjMoKTtcblxuICAgICAgICAvLyBEZWJ1ZyBvbmx5IHF1YXRlcm5pb24gb2YgZ3lyby1iYXNlZCBvcmllbnRhdGlvbi5cbiAgICAgICAgdGhpcy5neXJvSW50ZWdyYWxRID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICB9XG5cblxuICAgIGFkZEFjY2VsTWVhc3VyZW1lbnQodmVjdG9yLCB0aW1lc3RhbXBTKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEFjY2VsTWVhc3VyZW1lbnQuc2V0KHZlY3RvciwgdGltZXN0YW1wUyk7XG4gICAgfVxuXG4gICAgYWRkR3lyb01lYXN1cmVtZW50KHZlY3RvciwgdGltZXN0YW1wUykge1xuICAgICAgICB0aGlzLmN1cnJlbnRHeXJvTWVhc3VyZW1lbnQuc2V0KHZlY3RvciwgdGltZXN0YW1wUyk7XG5cbiAgICAgICAgdmFyIGRlbHRhVCA9IHRpbWVzdGFtcFMgLSB0aGlzLnByZXZpb3VzR3lyb01lYXN1cmVtZW50LnRpbWVzdGFtcFM7XG4gICAgICAgIGlmIChNYXRoVXRpbC5pc1RpbWVzdGFtcERlbHRhVmFsaWQoZGVsdGFUKSkge1xuICAgICAgICAgICAgdGhpcy5ydW5fKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZpb3VzR3lyb01lYXN1cmVtZW50LmNvcHkodGhpcy5jdXJyZW50R3lyb01lYXN1cmVtZW50KTtcbiAgICB9XG5cbiAgICBydW5fKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcmllbnRhdGlvbkluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB0aGlzLmFjY2VsUSA9IHRoaXMuYWNjZWxUb1F1YXRlcm5pb25fKHRoaXMuY3VycmVudEFjY2VsTWVhc3VyZW1lbnQuc2FtcGxlKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNGaWx0ZXJRLmNvcHkodGhpcy5hY2NlbFEpO1xuICAgICAgICAgICAgdGhpcy5pc09yaWVudGF0aW9uSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlbHRhVCA9IHRoaXMuY3VycmVudEd5cm9NZWFzdXJlbWVudC50aW1lc3RhbXBTIC1cbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNHeXJvTWVhc3VyZW1lbnQudGltZXN0YW1wUztcblxuICAgICAgICAvLyBDb252ZXJ0IGd5cm8gcm90YXRpb24gdmVjdG9yIHRvIGEgcXVhdGVybmlvbiBkZWx0YS5cbiAgICAgICAgdmFyIGd5cm9EZWx0YVEgPSB0aGlzLmd5cm9Ub1F1YXRlcm5pb25EZWx0YV8odGhpcy5jdXJyZW50R3lyb01lYXN1cmVtZW50LnNhbXBsZSwgZGVsdGFUKTtcbiAgICAgICAgdGhpcy5neXJvSW50ZWdyYWxRLm11bHRpcGx5KGd5cm9EZWx0YVEpO1xuXG4gICAgICAgIC8vIGZpbHRlcl8xID0gSyAqIChmaWx0ZXJfMCArIGd5cm8gKiBkVCkgKyAoMSAtIEspICogYWNjZWwuXG4gICAgICAgIHRoaXMuZmlsdGVyUS5jb3B5KHRoaXMucHJldmlvdXNGaWx0ZXJRKTtcbiAgICAgICAgdGhpcy5maWx0ZXJRLm11bHRpcGx5KGd5cm9EZWx0YVEpO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGVsdGEgYmV0d2VlbiB0aGUgY3VycmVudCBlc3RpbWF0ZWQgZ3Jhdml0eSBhbmQgdGhlIHJlYWxcbiAgICAgICAgLy8gZ3Jhdml0eSB2ZWN0b3IgZnJvbSBhY2NlbGVyb21ldGVyLlxuICAgICAgICB2YXIgaW52RmlsdGVyUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIGludkZpbHRlclEuY29weSh0aGlzLmZpbHRlclEpO1xuICAgICAgICBpbnZGaWx0ZXJRLmludmVyc2UoKTtcblxuICAgICAgICB0aGlzLmVzdGltYXRlZEdyYXZpdHkuc2V0KDAsIDAsIC0xKTtcbiAgICAgICAgdGhpcy5lc3RpbWF0ZWRHcmF2aXR5LmFwcGx5UXVhdGVybmlvbihpbnZGaWx0ZXJRKTtcbiAgICAgICAgdGhpcy5lc3RpbWF0ZWRHcmF2aXR5Lm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIHRoaXMubWVhc3VyZWRHcmF2aXR5LmNvcHkodGhpcy5jdXJyZW50QWNjZWxNZWFzdXJlbWVudC5zYW1wbGUpO1xuICAgICAgICB0aGlzLm1lYXN1cmVkR3Jhdml0eS5ub3JtYWxpemUoKTtcblxuICAgICAgICAvLyBDb21wYXJlIGVzdGltYXRlZCBncmF2aXR5IHdpdGggbWVhc3VyZWQgZ3Jhdml0eSwgZ2V0IHRoZSBkZWx0YSBxdWF0ZXJuaW9uXG4gICAgICAgIC8vIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgdmFyIGRlbHRhUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIGRlbHRhUS5zZXRGcm9tVW5pdFZlY3RvcnModGhpcy5lc3RpbWF0ZWRHcmF2aXR5LCB0aGlzLm1lYXN1cmVkR3Jhdml0eSk7XG4gICAgICAgIGRlbHRhUS5pbnZlcnNlKCk7XG5cbiAgICAgICAgLyppZiAoREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWx0YTogJWQgZGVnLCBHX2VzdDogKCVzLCAlcywgJXMpLCBHX21lYXM6ICglcywgJXMsICVzKScsXG4gICAgICAgICAgICAgICAgTWF0aFV0aWwucmFkVG9EZWcgKiBVdGlsLmdldFF1YXRlcm5pb25BbmdsZShkZWx0YVEpLFxuICAgICAgICAgICAgICAgICh0aGlzLmVzdGltYXRlZEdyYXZpdHkueCkudG9GaXhlZCgxKSxcbiAgICAgICAgICAgICAgICAodGhpcy5lc3RpbWF0ZWRHcmF2aXR5LnkpLnRvRml4ZWQoMSksXG4gICAgICAgICAgICAgICAgKHRoaXMuZXN0aW1hdGVkR3Jhdml0eS56KS50b0ZpeGVkKDEpLFxuICAgICAgICAgICAgICAgICh0aGlzLm1lYXN1cmVkR3Jhdml0eS54KS50b0ZpeGVkKDEpLFxuICAgICAgICAgICAgICAgICh0aGlzLm1lYXN1cmVkR3Jhdml0eS55KS50b0ZpeGVkKDEpLFxuICAgICAgICAgICAgICAgICh0aGlzLm1lYXN1cmVkR3Jhdml0eS56KS50b0ZpeGVkKDEpKTtcbiAgICAgICAgfSovXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBTTEVSUCB0YXJnZXQ6IGN1cnJlbnQgb3JpZW50YXRpb24gcGx1cyB0aGUgbWVhc3VyZWQtZXN0aW1hdGVkXG4gICAgICAgIC8vIHF1YXRlcm5pb24gZGVsdGEuXG4gICAgICAgIHZhciB0YXJnZXRRID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgdGFyZ2V0US5jb3B5KHRoaXMuZmlsdGVyUSk7XG4gICAgICAgIHRhcmdldFEubXVsdGlwbHkoZGVsdGFRKTtcblxuICAgICAgICAvLyBTTEVSUCBmYWN0b3I6IDAgaXMgcHVyZSBneXJvLCAxIGlzIHB1cmUgYWNjZWwuXG4gICAgICAgIHRoaXMuZmlsdGVyUS5zbGVycCh0YXJnZXRRLCAxIC0gdGhpcy5rRmlsdGVyKTtcblxuICAgICAgICB0aGlzLnByZXZpb3VzRmlsdGVyUS5jb3B5KHRoaXMuZmlsdGVyUSk7XG4gICAgfVxuXG4gICAgZ2V0T3JpZW50YXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlclE7XG4gICAgfVxuXG4gICAgYWNjZWxUb1F1YXRlcm5pb25fKGFjY2VsKSB7XG4gICAgICAgIHZhciBub3JtQWNjZWwgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBub3JtQWNjZWwuY29weShhY2NlbCk7XG4gICAgICAgIG5vcm1BY2NlbC5ub3JtYWxpemUoKTtcbiAgICAgICAgdmFyIHF1YXQgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgICAgICBxdWF0LnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVmVjdG9yMygwLCAwLCAtMSksIG5vcm1BY2NlbCk7XG4gICAgICAgIHF1YXQuaW52ZXJzZSgpO1xuICAgICAgICByZXR1cm4gcXVhdDtcbiAgICB9XG5cbiAgICBneXJvVG9RdWF0ZXJuaW9uRGVsdGFfKGd5cm8sIGR0KSB7XG4gICAgICAgIC8vIEV4dHJhY3QgYXhpcyBhbmQgYW5nbGUgZnJvbSB0aGUgZ3lyb3Njb3BlIGRhdGEuXG4gICAgICAgIHZhciBxdWF0ID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgdmFyIGF4aXMgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBheGlzLmNvcHkoZ3lybyk7XG4gICAgICAgIGF4aXMubm9ybWFsaXplKCk7XG4gICAgICAgIHF1YXQuc2V0RnJvbUF4aXNBbmdsZShheGlzLCBneXJvLmxlbmd0aCgpICogZHQpO1xuICAgICAgICByZXR1cm4gcXVhdDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIEtfRklMVEVSOiAwLjk4LCAvLyBEZWZhdWx0OiAwLjk4LlxuXG4gICAgLy8gSG93IGZhciBpbnRvIHRoZSBmdXR1cmUgdG8gcHJlZGljdCBkdXJpbmcgZmFzdCBtb3Rpb24gKGluIHNlY29uZHMpLlxuICAgIFBSRURJQ1RJT05fVElNRV9TOiAwLjA0MCwgLy8gRGVmYXVsdDogMC4wNDAuXG5cbiAgICBZQVdfT05MWTogdHJ1ZVxufSIsIi8qKlxuICogSGVhdmlseSBsaWZ0ZWQgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBwcm9qZWN0IGJ5IEJvcmlzIFNtdXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1wb2x5ZmlsbFxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xuICpcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IENvbXBsZW1lbnRhcnlGaWx0ZXIgZnJvbSAnLi9jb21wbGVtZW50YXJ5LWZpbHRlci5lczYnO1xuaW1wb3J0IFBvc2VQcmVkaWN0b3IgZnJvbSAnLi9wb3NlLXByZWRpY3Rvci5lczYnO1xuLy9pbXBvcnQgVG91Y2hQYW5uZXIgZnJvbSAnLi4vdG91Y2gtcGFubmVyLmVzNic7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSAnLi4vbWF0aC91dGlsLmVzNic7XG5pbXBvcnQgVmVjdG9yMyBmcm9tICcuLi9tYXRoL3ZlY3RvcjMuZXM2JztcbmltcG9ydCBRdWF0ZXJuaW9uIGZyb20gJy4uL21hdGgvcXVhdGVybmlvbi5lczYnO1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5lczYnO1xuXG4vKipcbiAqIFRoZSBwb3NlIHNlbnNvciwgaW1wbGVtZW50ZWQgdXNpbmcgRGV2aWNlTW90aW9uIEFQSXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY2NlbGVyb21ldGVyID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgdGhpcy5neXJvc2NvcGUgPSBuZXcgVmVjdG9yMygpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyID0gbmV3IENvbXBsZW1lbnRhcnlGaWx0ZXIoQ29uZmlnLktfRklMVEVSKTtcbiAgICAgICAgdGhpcy5wb3NlUHJlZGljdG9yID0gbmV3IFBvc2VQcmVkaWN0b3IoQ29uZmlnLlBSRURJQ1RJT05fVElNRV9TKTtcblxuICAgICAgICB0aGlzLmZpbHRlclRvV29ybGRRID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgdGhpcy5maWx0ZXJUb1dvcmxkUS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBWZWN0b3IzKDEsIDAsIDApLCAtTWF0aC5QSSAvIDIpO1xuXG4gICAgICAgIHRoaXMuaW52ZXJzZVdvcmxkVG9TY3JlZW5RID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgdGhpcy53b3JsZFRvU2NyZWVuUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQb3NlQWRqdXN0USA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQb3NlQWRqdXN0US5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBWZWN0b3IzKDAsIDAsIDEpLFxuICAgICAgICAgICAgLXdpbmRvdy5vcmllbnRhdGlvbiAqIE1hdGguUEkgLyAxODApO1xuXG4gICAgICAgIC8vIEtlZXAgdHJhY2sgb2YgYSByZXNldCB0cmFuc2Zvcm0gZm9yIHJlc2V0U2Vuc29yLlxuICAgICAgICB0aGlzLnJlc2V0USA9IG5ldyBRdWF0ZXJuaW9uKCk7XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF8gPSBuZXcgRmxvYXQzMkFycmF5KDQpO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICAvLyBUaGlzIFBvc2VTZW5zb3IgZG9lc24ndCBzdXBwb3J0IHBvc2l0aW9uXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldE9yaWVudGF0aW9uKCkge1xuICAgICAgICAvLyBDb252ZXJ0IGZyb20gZmlsdGVyIHNwYWNlIHRvIHRoZSB0aGUgc2FtZSBzeXN0ZW0gdXNlZCBieSB0aGVcbiAgICAgICAgLy8gZGV2aWNlb3JpZW50YXRpb24gZXZlbnQuXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHRoaXMuZmlsdGVyLmdldE9yaWVudGF0aW9uKCk7XG5cbiAgICAgICAgLy8gUHJlZGljdCBvcmllbnRhdGlvbi5cbiAgICAgICAgdGhpcy5wcmVkaWN0ZWRRID0gdGhpcy5wb3NlUHJlZGljdG9yLmdldFByZWRpY3Rpb24ob3JpZW50YXRpb24sIHRoaXMuZ3lyb3Njb3BlLCB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyk7XG5cbiAgICAgICAgLy8gQ29udmVydCB0byBUSFJFRSBjb29yZGluYXRlIHN5c3RlbTogLVogZm9yd2FyZCwgWSB1cCwgWCByaWdodC5cbiAgICAgICAgdmFyIG91dCA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIG91dC5jb3B5KHRoaXMuZmlsdGVyVG9Xb3JsZFEpO1xuICAgICAgICBvdXQubXVsdGlwbHkodGhpcy5yZXNldFEpO1xuICAgICAgICBvdXQubXVsdGlwbHkodGhpcy5wcmVkaWN0ZWRRKTtcbiAgICAgICAgb3V0Lm11bHRpcGx5KHRoaXMud29ybGRUb1NjcmVlblEpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bMF0gPSBvdXQueDtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bMV0gPSBvdXQueTtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bMl0gPSBvdXQuejtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bM10gPSBvdXQudztcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb25PdXRfO1xuICAgIH1cblxuICAgIHJlc2V0UG9zZSgpIHtcbiAgICAgICAgLy8gUmVkdWNlIHRvIGludmVydGVkIHlhdy1vbmx5LlxuICAgICAgICB0aGlzLnJlc2V0US5jb3B5KHRoaXMuZmlsdGVyLmdldE9yaWVudGF0aW9uKCkpO1xuICAgICAgICB0aGlzLnJlc2V0US54ID0gMDtcbiAgICAgICAgdGhpcy5yZXNldFEueSA9IDA7XG4gICAgICAgIHRoaXMucmVzZXRRLnogKj0gLTE7XG4gICAgICAgIHRoaXMucmVzZXRRLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIC8vIFRha2UgaW50byBhY2NvdW50IG9yaWdpbmFsIHBvc2UuXG4gICAgICAgIHRoaXMucmVzZXRRLm11bHRpcGx5KHRoaXMub3JpZ2luYWxQb3NlQWRqdXN0USk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2Vuc29yRGF0YShkYXRhKSB7XG4gICAgICAgIHZhciBhY2NHcmF2aXR5ID0gZGF0YS5zZW5zb3JzLmFjY2VsZXJvbWV0ZXI7IC8vdG9kbzogZ3Jhdml0eSFcbiAgICAgICAgdmFyIHJvdFJhdGUgPSBkYXRhLnNlbnNvcnMuZ3lyb3Njb3BlO1xuICAgICAgICB2YXIgdGltZXN0YW1wUyA9IGRhdGEuc2Vuc29ycy50aW1lc3RhbXAgLyAxMDAwO1xuXG4gICAgICAgIHZhciBkZWx0YVMgPSB0aW1lc3RhbXBTIC0gdGhpcy5wcmV2aW91c1RpbWVzdGFtcFM7XG4gICAgICAgIGlmIChkZWx0YVMgPD0gTWF0aFV0aWwuTUlOX1RJTUVTVEVQIHx8IGRlbHRhUyA+IE1hdGhVdGlsLk1BWF9USU1FU1RFUCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHRpbWVzdGFtcHMgZGV0ZWN0ZWQuIFRpbWUgc3RlcCBiZXR3ZWVuIHN1Y2Nlc3NpdmUgJyArXG4gICAgICAgICAgICAgICAgJ2d5cm9zY29wZSBzZW5zb3Igc2FtcGxlcyBpcyB2ZXJ5IHNtYWxsIG9yIG5vdCBtb25vdG9uaWMnLCBkZWx0YVMpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1RpbWVzdGFtcFMgPSB0aW1lc3RhbXBTO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY2NlbGVyb21ldGVyLnNldCgtYWNjR3Jhdml0eS54LCAtYWNjR3Jhdml0eS55LCAtYWNjR3Jhdml0eS56KTtcbiAgICAgICAgdGhpcy5neXJvc2NvcGUuc2V0KHJvdFJhdGUuYWxwaGEsIHJvdFJhdGUuYmV0YSwgcm90UmF0ZS5nYW1tYSk7XG4gICAgICAgIHRoaXMuZ3lyb3Njb3BlLm11bHRpcGx5U2NhbGFyKE1hdGguUEkgLyAxODApO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyLmFkZEFjY2VsTWVhc3VyZW1lbnQodGhpcy5hY2NlbGVyb21ldGVyLCB0aW1lc3RhbXBTKTtcbiAgICAgICAgdGhpcy5maWx0ZXIuYWRkR3lyb01lYXN1cmVtZW50KHRoaXMuZ3lyb3Njb3BlLCB0aW1lc3RhbXBTKTtcblxuICAgICAgICB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBIZWF2aWx5IGxpZnRlZCBmcm9tIFdlYlZSLVBvbHlmaWxsIHByb2plY3QgYnkgQm9yaXMgU211czogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLXBvbHlmaWxsXG4gKiBidXQgcmVmYWN0b3JlZCB0byB1c2UgZGlmZmVyZW50IGRhdGEgc291cmNlIHByb3ZpZGVkIG92ZXIgQkxFIGJ5IHRoZSBUSSBTZW5zb3IgVGFnXG4gKlxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBRdWF0ZXJuaW9uIGZyb20gJy4uL21hdGgvcXVhdGVybmlvbi5lczYnO1xuaW1wb3J0IFZlY3RvcjMgZnJvbSAnLi4vbWF0aC92ZWN0b3IzLmVzNic7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSAnLi4vbWF0aC91dGlsLmVzNic7XG5cbi8qKlxuICogR2l2ZW4gYW4gb3JpZW50YXRpb24gYW5kIHRoZSBneXJvc2NvcGUgZGF0YSwgcHJlZGljdHMgdGhlIGZ1dHVyZSBvcmllbnRhdGlvblxuICogb2YgdGhlIGhlYWQuIFRoaXMgbWFrZXMgcmVuZGVyaW5nIGFwcGVhciBmYXN0ZXIuXG4gKlxuICogQWxzbyBzZWU6IGh0dHA6Ly9tc2wuY3MudWl1Yy5lZHUvfmxhdmFsbGUvcGFwZXJzL0xhdlllckthdEFudDE0LnBkZlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBwcmVkaWN0aW9uVGltZVMgdGltZSBmcm9tIGhlYWQgbW92ZW1lbnQgdG8gdGhlIGFwcGVhcmFuY2Ugb2ZcbiAqIHRoZSBjb3JyZXNwb25kaW5nIGltYWdlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihwcmVkaWN0aW9uVGltZVMpIHtcbiAgICAgICAgdGhpcy5wcmVkaWN0aW9uVGltZVMgPSBwcmVkaWN0aW9uVGltZVM7XG5cbiAgICAgICAgLy8gVGhlIHF1YXRlcm5pb24gY29ycmVzcG9uZGluZyB0byB0aGUgcHJldmlvdXMgc3RhdGUuXG4gICAgICAgIHRoaXMucHJldmlvdXNRID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgLy8gUHJldmlvdXMgdGltZSBhIHByZWRpY3Rpb24gb2NjdXJyZWQuXG4gICAgICAgIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTID0gbnVsbDtcblxuICAgICAgICAvLyBUaGUgZGVsdGEgcXVhdGVybmlvbiB0aGF0IGFkanVzdHMgdGhlIGN1cnJlbnQgcG9zZS5cbiAgICAgICAgdGhpcy5kZWx0YVEgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgICAgICAvLyBUaGUgb3V0cHV0IHF1YXRlcm5pb24uXG4gICAgICAgIHRoaXMub3V0USA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJlZGljdGlvbihjdXJyZW50USwgZ3lybywgdGltZXN0YW1wUykge1xuICAgICAgICBpZiAoIXRoaXMucHJldmlvdXNUaW1lc3RhbXBTKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUS5jb3B5KGN1cnJlbnRRKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTID0gdGltZXN0YW1wUztcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBheGlzIGFuZCBhbmdsZSBiYXNlZCBvbiBneXJvc2NvcGUgcm90YXRpb24gcmF0ZSBkYXRhLlxuICAgICAgICB2YXIgYXhpcyA9IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgIGF4aXMuY29weShneXJvKTtcbiAgICAgICAgYXhpcy5ub3JtYWxpemUoKTtcblxuICAgICAgICB2YXIgYW5ndWxhclNwZWVkID0gZ3lyby5sZW5ndGgoKTtcblxuICAgICAgICAvLyBJZiB3ZSdyZSByb3RhdGluZyBzbG93bHksIGRvbid0IGRvIHByZWRpY3Rpb24uXG4gICAgICAgIGlmIChhbmd1bGFyU3BlZWQgPCBNYXRoVXRpbC5kZWdUb1JhZCAqIDIwKSB7XG4gICAgICAgICAgICAvL2lmIChERUJVRykge1xuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ01vdmluZyBzbG93bHksIGF0ICVzIGRlZy9zOiBubyBwcmVkaWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgIC8vICAoTWF0aFV0aWwucmFkVG9EZWcgKiBhbmd1bGFyU3BlZWQpLnRvRml4ZWQoMSkpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICB0aGlzLm91dFEuY29weShjdXJyZW50USk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUS5jb3B5KGN1cnJlbnRRKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dFE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgdGhlIHByZWRpY3RlZCBhbmdsZSBiYXNlZCBvbiB0aGUgdGltZSBkZWx0YSBhbmQgbGF0ZW5jeS5cbiAgICAgICAgdmFyIGRlbHRhVCA9IHRpbWVzdGFtcFMgLSB0aGlzLnByZXZpb3VzVGltZXN0YW1wUztcbiAgICAgICAgdmFyIHByZWRpY3RBbmdsZSA9IGFuZ3VsYXJTcGVlZCAqIHRoaXMucHJlZGljdGlvblRpbWVTO1xuXG4gICAgICAgIHRoaXMuZGVsdGFRLnNldEZyb21BeGlzQW5nbGUoYXhpcywgcHJlZGljdEFuZ2xlKTtcbiAgICAgICAgdGhpcy5vdXRRLmNvcHkodGhpcy5wcmV2aW91c1EpO1xuICAgICAgICB0aGlzLm91dFEubXVsdGlwbHkodGhpcy5kZWx0YVEpO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNRLmNvcHkoY3VycmVudFEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm91dFE7XG4gICAgfVxufTsiLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHNhbXBsZSwgdGltZXN0YW1wUykge1xuICAgICAgICB0aGlzLnNldChzYW1wbGUsIHRpbWVzdGFtcFMpO1xuICAgIH1cblxuICAgIHNldChzYW1wbGUsIHRpbWVzdGFtcFMpIHtcbiAgICAgICAgdGhpcy5zYW1wbGUgPSBzYW1wbGU7XG4gICAgICAgIHRoaXMudGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XG4gICAgfVxuXG4gICAgY29weShzZW5zb3JTYW1wbGUpIHtcbiAgICAgICAgdGhpcy5zZXQoc2Vuc29yU2FtcGxlLnNhbXBsZSwgc2Vuc29yU2FtcGxlLnRpbWVzdGFtcFMpO1xuICAgIH07XG59IiwiaW1wb3J0IFRJU2Vuc29yVGFnIGZyb20gJy4vZGV2aWNlcy90aXNlbnNvcnRhZy5lczYnO1xuaW1wb3J0IENvbXBsZW1lbnRhcnlGaWx0ZXIgZnJvbSAnLi9zZW5zb3JmdXNpb24vY29tcGxlbWVudGFyeS1maWx0ZXIuZXM2JztcbmltcG9ydCBGdXNpb25Qb3NlU2Vuc29yIGZyb20gJy4vc2Vuc29yZnVzaW9uL2Z1c2lvbi1wb3NlLXNlbnNvci5lczYnO1xuaW1wb3J0IFBvc2VQcmVkaWN0b3IgZnJvbSAnLi9zZW5zb3JmdXNpb24vcG9zZS1wcmVkaWN0b3IuZXM2JztcblxuZXhwb3J0cy50aXNlbnNvcnRhZyA9IFRJU2Vuc29yVGFnO1xuZXhwb3J0cy5zZW5zb3JmdXNpb24gPSB7XG4gICAgY29tcGxlbWVudGFyeWZpbHRlcjogQ29tcGxlbWVudGFyeUZpbHRlcixcbiAgICBmdXNpb25wb3Nlc2Vuc29yOiBGdXNpb25Qb3NlU2Vuc29yLFxuICAgIHBvc2VwcmVkaWN0b3I6IFBvc2VQcmVkaWN0b3Jcbn07Il19
