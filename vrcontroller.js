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
            this._eventListeners.push(cb);
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
            this._sensorfusion.updateSensorData(data);
            data.sensors.orientation = this._sensorfusion.getOrientation();
            for (var c = 0; c < this._eventListeners.length; c++) {
                this._eventListeners[c]('motionupdate', data);
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

            this._eventListeners.push(cb);
            if (this._connected) {
                return;
            }
            this.connected = true;

            if (!navigator.bluetooth) {
                console.log('no bluetooth support in your browser, trying websockets from a local node server');
                this.socket = new WebSocket('ws://localhost:8080');
                this.socket.onerror = function (error) {
                    console.log('WebSocket Error ' + error);
                };

                this.socket.onmessage = function (e) {
                    var msg = JSON.parse(e.data);
                    for (var c = 0; c < _this2._eventListeners.length; c++) {
                        _this2._eventListeners[c]('update', msg);
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

        this.deviceId = 'webvr-polyfill:fused';
        this.deviceName = 'VR Position Device (webvr-polyfill:fused)';

        this.accelerometer = new _vector2.default();
        this.gyroscope = new _vector2.default();

        //window.addEventListener('devicemotion', this.onDeviceMotionChange_.bind(this));
        //window.addEventListener('orientationchange', this.onScreenOrientationChange_.bind(this));

        this.filter = new _complementaryFilter2.default(_config2.default.K_FILTER);
        this.posePredictor = new _posePredictor2.default(_config2.default.PREDICTION_TIME_S);
        //   this.touchPanner = new TouchPanner();

        this.filterToWorldQ = new _quaternion2.default();

        // Set the filter to world transform, depending on OS.
        //if (Util.isIOS()) {
        // this.filterToWorldQ.setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2);
        //} else {
        this.filterToWorldQ.setFromAxisAngle(new _vector2.default(1, 0, 0), -Math.PI / 2);
        //}

        this.inverseWorldToScreenQ = new _quaternion2.default();
        this.worldToScreenQ = new _quaternion2.default();
        this.originalPoseAdjustQ = new _quaternion2.default();
        this.originalPoseAdjustQ.setFromAxisAngle(new _vector2.default(0, 0, 1), -window.orientation * Math.PI / 180);

        //this.setScreenTransform_();
        // Adjust this filter for being in landscape mode.
        //if (Util.isLandscapeMode()) {
        //  this.filterToWorldQ.multiply(this.inverseWorldToScreenQ);
        //}

        // Keep track of a reset transform for resetSensor.
        this.resetQ = new _quaternion2.default();

        //this.isFirefoxAndroid = Util.isFirefoxAndroid();
        //this.isIOS = Util.isIOS();

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
            if (data.sensors && data.sensors.accelerometer && data.sensors.gyroscope) {
                var accGravity = data.sensors.accelerometer; //todo: gravity!
                var rotRate = data.sensors.gyroscope;

                //var accGravity = data.accelerationIncludingGravity; //todo: gravity!
                //var rotRate = data.rotationRate;
                var timestampS = data.sensors.timestamp / 1000;

                var deltaS = timestampS - this.previousTimestampS;
                if (deltaS <= _util2.default.MIN_TIMESTEP || deltaS > _util2.default.MAX_TIMESTEP) {
                    console.warn('Invalid timestamps detected. Time step between successive ' + 'gyroscope sensor samples is very small or not monotonic');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGRldmljZXNcXGRldmljZS5lczYiLCJzcmNcXGRldmljZXNcXHRpc2Vuc29ydGFnLmVzNiIsInNyY1xcbWF0aFxccXVhdGVybmlvbi5lczYiLCJzcmNcXG1hdGhcXHV0aWwuZXM2Iiwic3JjXFxtYXRoXFx2ZWN0b3IzLmVzNiIsInNyY1xcc2Vuc29yZnVzaW9uXFxjb21wbGVtZW50YXJ5LWZpbHRlci5lczYiLCJzcmNcXHNlbnNvcmZ1c2lvblxcY29uZmlnLmVzNiIsInNyY1xcc2Vuc29yZnVzaW9uXFxmdXNpb24tcG9zZS1zZW5zb3IuZXM2Iiwic3JjXFxzZW5zb3JmdXNpb25cXHBvc2UtcHJlZGljdG9yLmVzNiIsInNyY1xcc2Vuc29yZnVzaW9uXFxzZW5zb3Itc2FtcGxlLmVzNiIsInNyY1xcdnJjb250cm9sbGVyLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7eUJBR0k7c0JBQWM7OEJBSVY7Ozs7O2FBQUEsQUFBSyxnQkFBZ0IsdUJBQXJCLEFBTUE7Ozs7OzthQUFBLEFBQUssYUFBTCxBQUFrQixBQU9sQjs7Ozs7OzthQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDMUI7Ozs7Ozs7Ozs7Z0MsQUFNTyxJQUFJLEFBQ1I7aUJBQUEsQUFBSyxnQkFBTCxBQUFxQixLQUFyQixBQUEwQixBQUMxQjtnQkFBSSxLQUFKLEFBQVMsWUFBWSxBQUFFO0FBQVM7QUFDbkM7Ozs7Ozs7Ozs7bUMsQUFNVSxJQUFJLEFBQ1g7aUJBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFJLEtBQUEsQUFBSyxnQkFBekIsQUFBeUMsUUFBekMsQUFBaUQsS0FBSyxBQUNsRDtvQkFBSSxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsT0FBekIsQUFBZ0MsSUFBSSxBQUNoQzt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLE9BQXJCLEFBQTRCLEdB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Q3BCO2lCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7aUJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ3JCOzs7OzZCLEFBRUksY0FBYyxBQUNmO2lCQUFBLEFBQUssSUFBSSxhQUFULEFBQXNCLFFBQVEsYUFBOUIsQUFBMkMsQUFDOUM7Ozs7Ozs7Ozs7OztBQy9CTDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxRQUFBLEFBQVE7QUFDUixRQUFBLEFBQVE7K0NBQWUsQUFFbkI7eUNBRm1CLEFBR25CO21DQUhKLEFBQXVCO0FBQUEsQUFDbkIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFNlbnNvckZ1c2lvbiBmcm9tICcuLi9zZW5zb3JmdXNpb24vZnVzaW9uLXBvc2Utc2Vuc29yLmVzNic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBzZW5zb3IgZnVzaW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fc2Vuc29yZnVzaW9uID0gbmV3IFNlbnNvckZ1c2lvbigpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpZiBhbHJlYWR5IGNvbm5lY3RlZFxyXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29ubmVjdCB0byBzZW5zb3J0YWdcclxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBjb25uZWN0KGNiKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMucHVzaChjYik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkgeyByZXR1cm47IH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRpc2Nvbm5lY3RcclxuICAgICAqIEBwYXJhbSBjYlxyXG4gICAgICovXHJcbiAgICBkaXNjb25uZWN0KGNiKSB7XHJcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLl9ldmVudExpc3RlbmVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZXZlbnRMaXN0ZW5lcnNbY10gPT09IGNiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycy5zcGxpY2UoYywgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1cGRhdGUgbGlzdGVuZXJzIHdpdGggZGF0YVxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgdXBkYXRlKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9zZW5zb3JmdXNpb24udXBkYXRlU2Vuc29yRGF0YShkYXRhKTtcclxuICAgICAgICBkYXRhLnNlbnNvcnMub3JpZW50YXRpb24gPSB0aGlzLl9zZW5zb3JmdXNpb24uZ2V0T3JpZW50YXRpb24oKTtcclxuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMuX2V2ZW50TGlzdGVuZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2NdKCdtb3Rpb251cGRhdGUnLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRGV2aWNlIGZyb20gJy4vZGV2aWNlLmVzNic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIERldmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHNvY2tldCBjb25uZWN0aW9uXHJcbiAgICAgICAgICogQHR5cGUge251bGx9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpZiBhbHJlYWR5IGNvbm5lY3RlZFxyXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBiYXNlIFVVSURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9iYXNlVVVJRCA9IFsnZjAwMCcsICctMDQ1MS00MDAwLWIwMDAtMDAwMDAwMDAwMDAwJ107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHNlcnZpY2UgVVVJRFNcclxuICAgICAgICAgKiBAdHlwZSB7e319XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl91dWlkID0ge307XHJcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMDAnICsgdGhpcy5fYmFzZVVVSURbMV07XHJcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZURhdGEgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTAxJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xyXG4gICAgICAgIHRoaXMuX3V1aWQudGVtcGVyYXR1cmVDb25maWd1cmF0aW9uID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMicgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuICAgICAgICB0aGlzLl91dWlkLnRlbXBlcmF0dXJlUGVyaW9kID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMycgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMCcgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXJEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXJDb25maWd1cmF0aW9uID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMicgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXJQZXJpb2QgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTEzJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xyXG5cclxuICAgICAgICB0aGlzLl91dWlkLmh1bWlkaXR5ID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEyMCcgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuICAgICAgICB0aGlzLl91dWlkLmh1bWlkaXR5RGF0YSA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMjEnICsgdGhpcy5fYmFzZVVVSURbMV07XHJcbiAgICAgICAgdGhpcy5fdXVpZC5odW1pZGl0eUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTIyJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xyXG4gICAgICAgIHRoaXMuX3V1aWQuaHVtaWRpdHlQZXJpb2QgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTIzJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29ubmVjdCB0byBzZW5zb3J0YWdcclxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBjb25uZWN0KGNiKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMucHVzaChjYik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICghbmF2aWdhdG9yLmJsdWV0b290aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gYmx1ZXRvb3RoIHN1cHBvcnQgaW4geW91ciBicm93c2VyLCB0cnlpbmcgd2Vic29ja2V0cyBmcm9tIGEgbG9jYWwgbm9kZSBzZXJ2ZXInKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo4MDgwJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHsgY29uc29sZS5sb2coJ1dlYlNvY2tldCBFcnJvciAnICsgZXJyb3IpOyB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBtc2cgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMuX2V2ZW50TGlzdGVuZXJzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbY10oJ3VwZGF0ZScsIG1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuc2VuZCgnY29ubmVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5ibHVldG9vdGgucmVxdWVzdERldmljZShcclxuICAgICAgICAgICAgICAgIHsgICBmaWx0ZXJzOiBbIHtuYW1lOiAnU2Vuc29yVGFnJ30sIHsgc2VydmljZXM6IFsgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSwgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyLCB0aGlzLl91dWlkLmh1bWlkaXR5IF0gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxTZXJ2aWNlczogWyB0aGlzLl91dWlkLnRlbXBlcmF0dXJlLCB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXIsIHRoaXMuX3V1aWQuaHVtaWRpdHkgXSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGV2aWNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR290IGRldmljZTonLCBkZXZpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZDonLCBkZXZpY2UuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25uZWN0ZWQgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRldmljZS5jb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkID0gZGV2aWNlLmdhdHQuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZSA9IGRldmljZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29ubmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dldHRpbmcgU2VydmljZeKApicsIHNlcnZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gc2VydmVyLmdldFByaW1hcnlTZXJ2aWNlKCdmMDAwYWExMC0wNDUxLTQwMDAtYjAwMC0wMDAwMDAwMDAwMDAnKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5vbkRldmljZUVycm9yKGVycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb24gZGV2aWNlIHJlcXVlc3RlZCBzdWNjZXNzXHJcbiAgICAgKiBAcGFyYW0gZGV2aWNlXHJcbiAgICAgKi9cclxuICAgIG9uRGV2aWNlUmVxdWVzdGVkU3VjY2VzcyhkZXZpY2UpIHtcclxuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGRldmljZS5nYXR0LmNvbm5lY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uIGRldmljZSByZXF1ZXN0ZWQgZXJyb3JcclxuICAgICAqIEBwYXJhbSBkZXZpY2VcclxuICAgICAqL1xyXG4gICAgb25EZXZpY2VFcnJvcihlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcclxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xyXG4gKlxyXG4gKiBUaGlzIHBpZWNlIGluIHBhcnRpY3VsYXIgd2FzIGFsc28gcHVsbGVkIGJ5IEJvcmlzIGZyb20gVGhyZWVKUyBtYXRoXHJcbiAqXHJcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxyXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCBWZWN0b3IzIGZyb20gJy4vdmVjdG9yMy5lczYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoIHgsIHksIHosIHcgKSB7XHJcbiAgICAgICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICAgICAgICB0aGlzLnogPSB6IHx8IDA7XHJcbiAgICAgICAgdGhpcy53ID0gKCB3ICE9PSB1bmRlZmluZWQgKSA/IHcgOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCggeCwgeSwgeiwgdyApIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KCBxdWF0ZXJuaW9uICkge1xyXG4gICAgICAgIHRoaXMueCA9IHF1YXRlcm5pb24ueDtcclxuICAgICAgICB0aGlzLnkgPSBxdWF0ZXJuaW9uLnk7XHJcbiAgICAgICAgdGhpcy56ID0gcXVhdGVybmlvbi56O1xyXG4gICAgICAgIHRoaXMudyA9IHF1YXRlcm5pb24udztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnJvbUV1bGVyWFlaKCB4LCB5LCB6ICkge1xyXG4gICAgICAgIHZhciBjMSA9IE1hdGguY29zKCB4IC8gMiApO1xyXG4gICAgICAgIHZhciBjMiA9IE1hdGguY29zKCB5IC8gMiApO1xyXG4gICAgICAgIHZhciBjMyA9IE1hdGguY29zKCB6IC8gMiApO1xyXG4gICAgICAgIHZhciBzMSA9IE1hdGguc2luKCB4IC8gMiApO1xyXG4gICAgICAgIHZhciBzMiA9IE1hdGguc2luKCB5IC8gMiApO1xyXG4gICAgICAgIHZhciBzMyA9IE1hdGguc2luKCB6IC8gMiApO1xyXG5cclxuICAgICAgICB0aGlzLnggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7XHJcbiAgICAgICAgdGhpcy55ID0gYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzO1xyXG4gICAgICAgIHRoaXMueiA9IGMxICogYzIgKiBzMyArIHMxICogczIgKiBjMztcclxuICAgICAgICB0aGlzLncgPSBjMSAqIGMyICogYzMgLSBzMSAqIHMyICogczM7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZyb21FdWxlcllYWiggeCwgeSwgeiApIHtcclxuICAgICAgICB2YXIgYzEgPSBNYXRoLmNvcyggeCAvIDIgKTtcclxuICAgICAgICB2YXIgYzIgPSBNYXRoLmNvcyggeSAvIDIgKTtcclxuICAgICAgICB2YXIgYzMgPSBNYXRoLmNvcyggeiAvIDIgKTtcclxuICAgICAgICB2YXIgczEgPSBNYXRoLnNpbiggeCAvIDIgKTtcclxuICAgICAgICB2YXIgczIgPSBNYXRoLnNpbiggeSAvIDIgKTtcclxuICAgICAgICB2YXIgczMgPSBNYXRoLnNpbiggeiAvIDIgKTtcclxuXHJcbiAgICAgICAgdGhpcy54ID0gczEgKiBjMiAqIGMzICsgYzEgKiBzMiAqIHMzO1xyXG4gICAgICAgIHRoaXMueSA9IGMxICogczIgKiBjMyAtIHMxICogYzIgKiBzMztcclxuICAgICAgICB0aGlzLnogPSBjMSAqIGMyICogczMgLSBzMSAqIHMyICogYzM7XHJcbiAgICAgICAgdGhpcy53ID0gYzEgKiBjMiAqIGMzICsgczEgKiBzMiAqIHMzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRGcm9tQXhpc0FuZ2xlKCBheGlzLCBhbmdsZSApIHtcclxuICAgICAgICAvLyBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9nZW9tZXRyeS9yb3RhdGlvbnMvY29udmVyc2lvbnMvYW5nbGVUb1F1YXRlcm5pb24vaW5kZXguaHRtXHJcbiAgICAgICAgLy8gYXNzdW1lcyBheGlzIGlzIG5vcm1hbGl6ZWRcclxuXHJcbiAgICAgICAgdmFyIGhhbGZBbmdsZSA9IGFuZ2xlIC8gMiwgcyA9IE1hdGguc2luKCBoYWxmQW5nbGUgKTtcclxuXHJcbiAgICAgICAgdGhpcy54ID0gYXhpcy54ICogcztcclxuICAgICAgICB0aGlzLnkgPSBheGlzLnkgKiBzO1xyXG4gICAgICAgIHRoaXMueiA9IGF4aXMueiAqIHM7XHJcbiAgICAgICAgdGhpcy53ID0gTWF0aC5jb3MoIGhhbGZBbmdsZSApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBseSggcSApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseVF1YXRlcm5pb25zKCB0aGlzLCBxICk7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwbHlRdWF0ZXJuaW9ucyggYSwgYiApIHtcclxuICAgICAgICAvLyBmcm9tIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2FsZ2VicmEvcmVhbE5vcm1lZEFsZ2VicmEvcXVhdGVybmlvbnMvY29kZS9pbmRleC5odG1cclxuXHJcbiAgICAgICAgdmFyIHFheCA9IGEueCwgcWF5ID0gYS55LCBxYXogPSBhLnosIHFhdyA9IGEudztcclxuICAgICAgICB2YXIgcWJ4ID0gYi54LCBxYnkgPSBiLnksIHFieiA9IGIueiwgcWJ3ID0gYi53O1xyXG5cclxuICAgICAgICB0aGlzLnggPSBxYXggKiBxYncgKyBxYXcgKiBxYnggKyBxYXkgKiBxYnogLSBxYXogKiBxYnk7XHJcbiAgICAgICAgdGhpcy55ID0gcWF5ICogcWJ3ICsgcWF3ICogcWJ5ICsgcWF6ICogcWJ4IC0gcWF4ICogcWJ6O1xyXG4gICAgICAgIHRoaXMueiA9IHFheiAqIHFidyArIHFhdyAqIHFieiArIHFheCAqIHFieSAtIHFheSAqIHFieDtcclxuICAgICAgICB0aGlzLncgPSBxYXcgKiBxYncgLSBxYXggKiBxYnggLSBxYXkgKiBxYnkgLSBxYXogKiBxYno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGludmVyc2UoKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IC0xO1xyXG4gICAgICAgIHRoaXMueSAqPSAtMTtcclxuICAgICAgICB0aGlzLnogKj0gLTE7XHJcblxyXG4gICAgICAgIHRoaXMubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG5vcm1hbGl6ZSgpIHtcclxuICAgICAgICB2YXIgbCA9IE1hdGguc3FydCggdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56ICsgdGhpcy53ICogdGhpcy53ICk7XHJcblxyXG4gICAgICAgIGlmICggbCA9PT0gMCApIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICAgICAgdGhpcy56ID0gMDtcclxuICAgICAgICAgICAgdGhpcy53ID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsID0gMSAvIGw7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggKiBsO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKiBsO1xyXG4gICAgICAgICAgICB0aGlzLnogPSB0aGlzLnogKiBsO1xyXG4gICAgICAgICAgICB0aGlzLncgPSB0aGlzLncgKiBsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2xlcnAoIHFiLCB0ICkge1xyXG4gICAgICAgIGlmICggdCA9PT0gMCApIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmICggdCA9PT0gMSApIHJldHVybiB0aGlzLmNvcHkoIHFiICk7XHJcblxyXG4gICAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55LCB6ID0gdGhpcy56LCB3ID0gdGhpcy53O1xyXG5cclxuICAgICAgICAvLyBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL3JlYWxOb3JtZWRBbGdlYnJhL3F1YXRlcm5pb25zL3NsZXJwL1xyXG5cclxuICAgICAgICB2YXIgY29zSGFsZlRoZXRhID0gdyAqIHFiLncgKyB4ICogcWIueCArIHkgKiBxYi55ICsgeiAqIHFiLno7XHJcblxyXG4gICAgICAgIGlmICggY29zSGFsZlRoZXRhIDwgMCApIHtcclxuICAgICAgICAgICAgdGhpcy53ID0gLSBxYi53O1xyXG4gICAgICAgICAgICB0aGlzLnggPSAtIHFiLng7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IC0gcWIueTtcclxuICAgICAgICAgICAgdGhpcy56ID0gLSBxYi56O1xyXG5cclxuICAgICAgICAgICAgY29zSGFsZlRoZXRhID0gLSBjb3NIYWxmVGhldGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb3B5KCBxYiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBjb3NIYWxmVGhldGEgPj0gMS4wICkge1xyXG4gICAgICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLnogPSB6O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaGFsZlRoZXRhID0gTWF0aC5hY29zKCBjb3NIYWxmVGhldGEgKTtcclxuICAgICAgICB2YXIgc2luSGFsZlRoZXRhID0gTWF0aC5zcXJ0KCAxLjAgLSBjb3NIYWxmVGhldGEgKiBjb3NIYWxmVGhldGEgKTtcclxuXHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggc2luSGFsZlRoZXRhICkgPCAwLjAwMSApIHtcclxuICAgICAgICAgICAgdGhpcy53ID0gMC41ICogKCB3ICsgdGhpcy53ICk7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDAuNSAqICggeCArIHRoaXMueCApO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSAwLjUgKiAoIHkgKyB0aGlzLnkgKTtcclxuICAgICAgICAgICAgdGhpcy56ID0gMC41ICogKCB6ICsgdGhpcy56ICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByYXRpb0EgPSBNYXRoLnNpbiggKCAxIC0gdCApICogaGFsZlRoZXRhICkgLyBzaW5IYWxmVGhldGEsXHJcbiAgICAgICAgICAgIHJhdGlvQiA9IE1hdGguc2luKCB0ICogaGFsZlRoZXRhICkgLyBzaW5IYWxmVGhldGE7XHJcblxyXG4gICAgICAgIHRoaXMudyA9ICggdyAqIHJhdGlvQSArIHRoaXMudyAqIHJhdGlvQiApO1xyXG4gICAgICAgIHRoaXMueCA9ICggeCAqIHJhdGlvQSArIHRoaXMueCAqIHJhdGlvQiApO1xyXG4gICAgICAgIHRoaXMueSA9ICggeSAqIHJhdGlvQSArIHRoaXMueSAqIHJhdGlvQiApO1xyXG4gICAgICAgIHRoaXMueiA9ICggeiAqIHJhdGlvQSArIHRoaXMueiAqIHJhdGlvQiApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRGcm9tVW5pdFZlY3RvcnModkZyb20sIHZUbykge1xyXG4gICAgICAgIC8vIGh0dHA6Ly9sb2xlbmdpbmUubmV0L2Jsb2cvMjAxNC8wMi8yNC9xdWF0ZXJuaW9uLWZyb20tdHdvLXZlY3RvcnMtZmluYWxcclxuICAgICAgICAvLyBhc3N1bWVzIGRpcmVjdGlvbiB2ZWN0b3JzIHZGcm9tIGFuZCB2VG8gYXJlIG5vcm1hbGl6ZWRcclxuICAgICAgICB2YXIgdjEsIHI7XHJcbiAgICAgICAgdmFyIEVQUyA9IDAuMDAwMDAxO1xyXG5cclxuICAgICAgICBpZiAodjEgPT09IHVuZGVmaW5lZCkgdjEgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuICAgICAgICByID0gdkZyb20uZG90KHZUbykgKyAxO1xyXG5cclxuICAgICAgICBpZiAociA8IEVQUykge1xyXG4gICAgICAgICAgICByID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh2RnJvbS54KSA+IE1hdGguYWJzKHZGcm9tLnopKSB7XHJcbiAgICAgICAgICAgICAgICB2MS5zZXQoLXZGcm9tLnksIHZGcm9tLngsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdjEuc2V0KDAsIC12RnJvbS56LCB2RnJvbS55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHYxLmNyb3NzVmVjdG9ycyh2RnJvbSwgdlRvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMueCA9IHYxLng7XHJcbiAgICAgICAgdGhpcy55ID0gdjEueTtcclxuICAgICAgICB0aGlzLnogPSB2MS56O1xyXG4gICAgICAgIHRoaXMudyA9IHI7XHJcblxyXG4gICAgICAgIHRoaXMubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogSGVhdmlseSBsaWZ0ZWQgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBwcm9qZWN0IGJ5IEJvcmlzIFNtdXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1wb2x5ZmlsbFxyXG4gKiBidXQgcmVmYWN0b3JlZCB0byB1c2UgZGlmZmVyZW50IGRhdGEgc291cmNlIHByb3ZpZGVkIG92ZXIgQkxFIGJ5IHRoZSBUSSBTZW5zb3IgVGFnXHJcbiAqXHJcbiAqIFRoaXMgcGllY2UgaW4gcGFydGljdWxhciB3YXMgYWxzbyBwdWxsZWQgYnkgQm9yaXMgZnJvbSBUaHJlZUpTIG1hdGhcclxuICpcclxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XHJcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGVnVG9SYWQ6IE1hdGguUEkgLyAxODAsXHJcbiAgICByYWRUb0RlZzogMTgwIC8gTWF0aC5QSSxcclxuICAgIE1JTl9USU1FU1RFUDogMC4wMDEsXHJcbiAgICBNQVhfVElNRVNURVA6IDEsXHJcblxyXG4gICAgLy8gSGVscGVyIG1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgdGltZSBzdGVwcyBvZiBzZW5zb3IgdGltZXN0YW1wcy5cclxuICAgIGlzVGltZXN0YW1wRGVsdGFWYWxpZDogZnVuY3Rpb24odGltZXN0YW1wRGVsdGFTKSB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHRpbWVzdGFtcERlbHRhUykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZXN0YW1wRGVsdGFTIDw9IHRoaXMuTUlOX1RJTUVTVEVQKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWVzdGFtcERlbHRhUyA+IHRoaXMuTUFYX1RJTUVTVEVQKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogSGVhdmlseSBsaWZ0ZWQgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBwcm9qZWN0IGJ5IEJvcmlzIFNtdXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1wb2x5ZmlsbFxyXG4gKiBidXQgcmVmYWN0b3JlZCB0byB1c2UgZGlmZmVyZW50IGRhdGEgc291cmNlIHByb3ZpZGVkIG92ZXIgQkxFIGJ5IHRoZSBUSSBTZW5zb3IgVGFnXHJcbiAqXHJcbiAqIFRoaXMgcGllY2UgaW4gcGFydGljdWxhciB3YXMgYWxzbyBwdWxsZWQgYnkgQm9yaXMgZnJvbSBUaHJlZUpTIG1hdGhcclxuICpcclxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XHJcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHopIHtcclxuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgICAgIHRoaXMueiA9IHogfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoIHgsIHksIHogKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHkoIHYgKSB7XHJcbiAgICAgICAgdGhpcy54ID0gdi54O1xyXG4gICAgICAgIHRoaXMueSA9IHYueTtcclxuICAgICAgICB0aGlzLnogPSB2Lno7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKTtcclxuICAgIH1cclxuXHJcbiAgICBub3JtYWxpemUoKSB7XHJcbiAgICAgICAgdmFyIHNjYWxhciA9IHRoaXMubGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIGlmICggc2NhbGFyICE9PSAwICkge1xyXG4gICAgICAgICAgICB2YXIgaW52U2NhbGFyID0gMSAvIHNjYWxhcjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbHlTY2FsYXIoaW52U2NhbGFyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnogPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwbHlTY2FsYXIoIHNjYWxhciApIHtcclxuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xyXG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XHJcbiAgICAgICAgdGhpcy56ICo9IHNjYWxhcjtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseVF1YXRlcm5pb24oIHEgKSB7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLng7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XHJcbiAgICAgICAgdmFyIHogPSB0aGlzLno7XHJcblxyXG4gICAgICAgIHZhciBxeCA9IHEueDtcclxuICAgICAgICB2YXIgcXkgPSBxLnk7XHJcbiAgICAgICAgdmFyIHF6ID0gcS56O1xyXG4gICAgICAgIHZhciBxdyA9IHEudztcclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWN0b3JcclxuICAgICAgICB2YXIgaXggPSAgcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5O1xyXG4gICAgICAgIHZhciBpeSA9ICBxdyAqIHkgKyBxeiAqIHggLSBxeCAqIHo7XHJcbiAgICAgICAgdmFyIGl6ID0gIHF3ICogeiArIHF4ICogeSAtIHF5ICogeDtcclxuICAgICAgICB2YXIgaXcgPSAtIHF4ICogeCAtIHF5ICogeSAtIHF6ICogejtcclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxyXG4gICAgICAgIHRoaXMueCA9IGl4ICogcXcgKyBpdyAqIC0gcXggKyBpeSAqIC0gcXogLSBpeiAqIC0gcXk7XHJcbiAgICAgICAgdGhpcy55ID0gaXkgKiBxdyArIGl3ICogLSBxeSArIGl6ICogLSBxeCAtIGl4ICogLSBxejtcclxuICAgICAgICB0aGlzLnogPSBpeiAqIHF3ICsgaXcgKiAtIHF6ICsgaXggKiAtIHF5IC0gaXkgKiAtIHF4O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkb3QoIHYgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueSArIHRoaXMueiAqIHYuejtcclxuICAgIH1cclxuXHJcbiAgICBjcm9zc1ZlY3RvcnMoIGEsIGIgKSB7XHJcbiAgICAgICAgdmFyIGF4ID0gYS54LCBheSA9IGEueSwgYXogPSBhLno7XHJcbiAgICAgICAgdmFyIGJ4ID0gYi54LCBieSA9IGIueSwgYnogPSBiLno7XHJcblxyXG4gICAgICAgIHRoaXMueCA9IGF5ICogYnogLSBheiAqIGJ5O1xyXG4gICAgICAgIHRoaXMueSA9IGF6ICogYnggLSBheCAqIGJ6O1xyXG4gICAgICAgIHRoaXMueiA9IGF4ICogYnkgLSBheSAqIGJ4O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufTsiLCIvKipcclxuICogSGVhdmlseSBsaWZ0ZWQgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBwcm9qZWN0IGJ5IEJvcmlzIFNtdXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1wb2x5ZmlsbFxyXG4gKiBidXQgcmVmYWN0b3JlZCB0byB1c2UgZGlmZmVyZW50IGRhdGEgc291cmNlIHByb3ZpZGVkIG92ZXIgQkxFIGJ5IHRoZSBUSSBTZW5zb3IgVGFnXHJcbiAqXHJcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxyXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5cclxuLyoqXHJcbiAqIFRPRE86IEZpeCB1cCBhbGwgXCJuZXcgVEhSRUVcIiBpbnN0YW50aWF0aW9ucyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLlxyXG4gKi9cclxuaW1wb3J0IFNlbnNvclNhbXBsZSBmcm9tICcuL3NlbnNvci1zYW1wbGUuZXM2JztcclxuaW1wb3J0IFF1YXRlcm5pb24gZnJvbSAgJy4uL21hdGgvcXVhdGVybmlvbi5lczYnO1xyXG5pbXBvcnQgVmVjdG9yMyBmcm9tICAnLi4vbWF0aC92ZWN0b3IzLmVzNic7XHJcbmltcG9ydCBNYXRoVXRpbCBmcm9tICcuLi9tYXRoL3V0aWwuZXM2JztcclxuXHJcbi8qKlxyXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhIHNpbXBsZSBjb21wbGVtZW50YXJ5IGZpbHRlciwgd2hpY2ggZnVzZXMgZ3lyb3Njb3BlIGFuZFxyXG4gKiBhY2NlbGVyb21ldGVyIGRhdGEgZnJvbSB0aGUgJ2RldmljZW1vdGlvbicgZXZlbnQuXHJcbiAqXHJcbiAqIEFjY2VsZXJvbWV0ZXIgZGF0YSBpcyB2ZXJ5IG5vaXN5LCBidXQgc3RhYmxlIG92ZXIgdGhlIGxvbmcgdGVybS5cclxuICogR3lyb3Njb3BlIGRhdGEgaXMgc21vb3RoLCBidXQgdGVuZHMgdG8gZHJpZnQgb3ZlciB0aGUgbG9uZyB0ZXJtLlxyXG4gKlxyXG4gKiBUaGlzIGZ1c2lvbiBpcyByZWxhdGl2ZWx5IHNpbXBsZTpcclxuICogMS4gR2V0IG9yaWVudGF0aW9uIGVzdGltYXRlcyBmcm9tIGFjY2VsZXJvbWV0ZXIgYnkgYXBwbHlpbmcgYSBsb3ctcGFzcyBmaWx0ZXJcclxuICogICAgb24gdGhhdCBkYXRhLlxyXG4gKiAyLiBHZXQgb3JpZW50YXRpb24gZXN0aW1hdGVzIGZyb20gZ3lyb3Njb3BlIGJ5IGludGVncmF0aW5nIG92ZXIgdGltZS5cclxuICogMy4gQ29tYmluZSB0aGUgdHdvIGVzdGltYXRlcywgd2VpZ2hpbmcgKDEpIGluIHRoZSBsb25nIHRlcm0sIGJ1dCAoMikgZm9yIHRoZVxyXG4gKiAgICBzaG9ydCB0ZXJtLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKGtGaWx0ZXIpIHtcclxuICAgICAgICB0aGlzLmtGaWx0ZXIgPSBrRmlsdGVyO1xyXG5cclxuICAgICAgICAvLyBSYXcgc2Vuc29yIG1lYXN1cmVtZW50cy5cclxuICAgICAgICB0aGlzLmN1cnJlbnRBY2NlbE1lYXN1cmVtZW50ID0gbmV3IFNlbnNvclNhbXBsZSgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEd5cm9NZWFzdXJlbWVudCA9IG5ldyBTZW5zb3JTYW1wbGUoKTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzR3lyb01lYXN1cmVtZW50ID0gbmV3IFNlbnNvclNhbXBsZSgpO1xyXG5cclxuICAgICAgICAvLyBDdXJyZW50IGZpbHRlciBvcmllbnRhdGlvblxyXG4gICAgICAgIHRoaXMuZmlsdGVyUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0ZpbHRlclEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG5cclxuICAgICAgICAvLyBPcmllbnRhdGlvbiBiYXNlZCBvbiB0aGUgYWNjZWxlcm9tZXRlci5cclxuICAgICAgICB0aGlzLmFjY2VsUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgLy8gV2hldGhlciBvciBub3QgdGhlIG9yaWVudGF0aW9uIGhhcyBiZWVuIGluaXRpYWxpemVkLlxyXG4gICAgICAgIHRoaXMuaXNPcmllbnRhdGlvbkluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gUnVubmluZyBlc3RpbWF0ZSBvZiBncmF2aXR5IGJhc2VkIG9uIHRoZSBjdXJyZW50IG9yaWVudGF0aW9uLlxyXG4gICAgICAgIHRoaXMuZXN0aW1hdGVkR3Jhdml0eSA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgLy8gTWVhc3VyZWQgZ3Jhdml0eSBiYXNlZCBvbiBhY2NlbGVyb21ldGVyLlxyXG4gICAgICAgIHRoaXMubWVhc3VyZWRHcmF2aXR5ID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcbiAgICAgICAgLy8gRGVidWcgb25seSBxdWF0ZXJuaW9uIG9mIGd5cm8tYmFzZWQgb3JpZW50YXRpb24uXHJcbiAgICAgICAgdGhpcy5neXJvSW50ZWdyYWxRID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkQWNjZWxNZWFzdXJlbWVudCh2ZWN0b3IsIHRpbWVzdGFtcFMpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRBY2NlbE1lYXN1cmVtZW50LnNldCh2ZWN0b3IsIHRpbWVzdGFtcFMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEd5cm9NZWFzdXJlbWVudCh2ZWN0b3IsIHRpbWVzdGFtcFMpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRHeXJvTWVhc3VyZW1lbnQuc2V0KHZlY3RvciwgdGltZXN0YW1wUyk7XHJcblxyXG4gICAgICAgIHZhciBkZWx0YVQgPSB0aW1lc3RhbXBTIC0gdGhpcy5wcmV2aW91c0d5cm9NZWFzdXJlbWVudC50aW1lc3RhbXBTO1xyXG4gICAgICAgIGlmIChNYXRoVXRpbC5pc1RpbWVzdGFtcERlbHRhVmFsaWQoZGVsdGFUKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bl8oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJldmlvdXNHeXJvTWVhc3VyZW1lbnQuY29weSh0aGlzLmN1cnJlbnRHeXJvTWVhc3VyZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bl8oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3JpZW50YXRpb25Jbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjY2VsUSA9IHRoaXMuYWNjZWxUb1F1YXRlcm5pb25fKHRoaXMuY3VycmVudEFjY2VsTWVhc3VyZW1lbnQuc2FtcGxlKTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0ZpbHRlclEuY29weSh0aGlzLmFjY2VsUSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPcmllbnRhdGlvbkluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRlbHRhVCA9IHRoaXMuY3VycmVudEd5cm9NZWFzdXJlbWVudC50aW1lc3RhbXBTIC1cclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0d5cm9NZWFzdXJlbWVudC50aW1lc3RhbXBTO1xyXG5cclxuICAgICAgICAvLyBDb252ZXJ0IGd5cm8gcm90YXRpb24gdmVjdG9yIHRvIGEgcXVhdGVybmlvbiBkZWx0YS5cclxuICAgICAgICB2YXIgZ3lyb0RlbHRhUSA9IHRoaXMuZ3lyb1RvUXVhdGVybmlvbkRlbHRhXyh0aGlzLmN1cnJlbnRHeXJvTWVhc3VyZW1lbnQuc2FtcGxlLCBkZWx0YVQpO1xyXG4gICAgICAgIHRoaXMuZ3lyb0ludGVncmFsUS5tdWx0aXBseShneXJvRGVsdGFRKTtcclxuXHJcbiAgICAgICAgLy8gZmlsdGVyXzEgPSBLICogKGZpbHRlcl8wICsgZ3lybyAqIGRUKSArICgxIC0gSykgKiBhY2NlbC5cclxuICAgICAgICB0aGlzLmZpbHRlclEuY29weSh0aGlzLnByZXZpb3VzRmlsdGVyUSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJRLm11bHRpcGx5KGd5cm9EZWx0YVEpO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRlbHRhIGJldHdlZW4gdGhlIGN1cnJlbnQgZXN0aW1hdGVkIGdyYXZpdHkgYW5kIHRoZSByZWFsXHJcbiAgICAgICAgLy8gZ3Jhdml0eSB2ZWN0b3IgZnJvbSBhY2NlbGVyb21ldGVyLlxyXG4gICAgICAgIHZhciBpbnZGaWx0ZXJRID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICBpbnZGaWx0ZXJRLmNvcHkodGhpcy5maWx0ZXJRKTtcclxuICAgICAgICBpbnZGaWx0ZXJRLmludmVyc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lc3RpbWF0ZWRHcmF2aXR5LnNldCgwLCAwLCAtMSk7XHJcbiAgICAgICAgdGhpcy5lc3RpbWF0ZWRHcmF2aXR5LmFwcGx5UXVhdGVybmlvbihpbnZGaWx0ZXJRKTtcclxuICAgICAgICB0aGlzLmVzdGltYXRlZEdyYXZpdHkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWVhc3VyZWRHcmF2aXR5LmNvcHkodGhpcy5jdXJyZW50QWNjZWxNZWFzdXJlbWVudC5zYW1wbGUpO1xyXG4gICAgICAgIHRoaXMubWVhc3VyZWRHcmF2aXR5Lm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAvLyBDb21wYXJlIGVzdGltYXRlZCBncmF2aXR5IHdpdGggbWVhc3VyZWQgZ3Jhdml0eSwgZ2V0IHRoZSBkZWx0YSBxdWF0ZXJuaW9uXHJcbiAgICAgICAgLy8gYmV0d2VlbiB0aGUgdHdvLlxyXG4gICAgICAgIHZhciBkZWx0YVEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIGRlbHRhUS5zZXRGcm9tVW5pdFZlY3RvcnModGhpcy5lc3RpbWF0ZWRHcmF2aXR5LCB0aGlzLm1lYXN1cmVkR3Jhdml0eSk7XHJcbiAgICAgICAgZGVsdGFRLmludmVyc2UoKTtcclxuXHJcbiAgICAgICAgLyppZiAoREVCVUcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbHRhOiAlZCBkZWcsIEdfZXN0OiAoJXMsICVzLCAlcyksIEdfbWVhczogKCVzLCAlcywgJXMpJyxcclxuICAgICAgICAgICAgICAgIE1hdGhVdGlsLnJhZFRvRGVnICogVXRpbC5nZXRRdWF0ZXJuaW9uQW5nbGUoZGVsdGFRKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLmVzdGltYXRlZEdyYXZpdHkueCkudG9GaXhlZCgxKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLmVzdGltYXRlZEdyYXZpdHkueSkudG9GaXhlZCgxKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLmVzdGltYXRlZEdyYXZpdHkueikudG9GaXhlZCgxKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLm1lYXN1cmVkR3Jhdml0eS54KS50b0ZpeGVkKDEpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMubWVhc3VyZWRHcmF2aXR5LnkpLnRvRml4ZWQoMSksXHJcbiAgICAgICAgICAgICAgICAodGhpcy5tZWFzdXJlZEdyYXZpdHkueikudG9GaXhlZCgxKSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgU0xFUlAgdGFyZ2V0OiBjdXJyZW50IG9yaWVudGF0aW9uIHBsdXMgdGhlIG1lYXN1cmVkLWVzdGltYXRlZFxyXG4gICAgICAgIC8vIHF1YXRlcm5pb24gZGVsdGEuXHJcbiAgICAgICAgdmFyIHRhcmdldFEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHRhcmdldFEuY29weSh0aGlzLmZpbHRlclEpO1xyXG4gICAgICAgIHRhcmdldFEubXVsdGlwbHkoZGVsdGFRKTtcclxuXHJcbiAgICAgICAgLy8gU0xFUlAgZmFjdG9yOiAwIGlzIHB1cmUgZ3lybywgMSBpcyBwdXJlIGFjY2VsLlxyXG4gICAgICAgIHRoaXMuZmlsdGVyUS5zbGVycCh0YXJnZXRRLCAxIC0gdGhpcy5rRmlsdGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0ZpbHRlclEuY29weSh0aGlzLmZpbHRlclEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9yaWVudGF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlclE7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjZWxUb1F1YXRlcm5pb25fKGFjY2VsKSB7XHJcbiAgICAgICAgdmFyIG5vcm1BY2NlbCA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgbm9ybUFjY2VsLmNvcHkoYWNjZWwpO1xyXG4gICAgICAgIG5vcm1BY2NlbC5ub3JtYWxpemUoKTtcclxuICAgICAgICB2YXIgcXVhdCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgcXVhdC5zZXRGcm9tVW5pdFZlY3RvcnMobmV3IFZlY3RvcjMoMCwgMCwgLTEpLCBub3JtQWNjZWwpO1xyXG4gICAgICAgIHF1YXQuaW52ZXJzZSgpO1xyXG4gICAgICAgIHJldHVybiBxdWF0O1xyXG4gICAgfVxyXG5cclxuICAgIGd5cm9Ub1F1YXRlcm5pb25EZWx0YV8oZ3lybywgZHQpIHtcclxuICAgICAgICAvLyBFeHRyYWN0IGF4aXMgYW5kIGFuZ2xlIGZyb20gdGhlIGd5cm9zY29wZSBkYXRhLlxyXG4gICAgICAgIHZhciBxdWF0ID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICB2YXIgYXhpcyA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgYXhpcy5jb3B5KGd5cm8pO1xyXG4gICAgICAgIGF4aXMubm9ybWFsaXplKCk7XHJcbiAgICAgICAgcXVhdC5zZXRGcm9tQXhpc0FuZ2xlKGF4aXMsIGd5cm8ubGVuZ3RoKCkgKiBkdCk7XHJcbiAgICAgICAgcmV0dXJuIHF1YXQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBLX0ZJTFRFUjogMC45OCwgLy8gRGVmYXVsdDogMC45OC5cclxuXHJcbiAgICAvLyBIb3cgZmFyIGludG8gdGhlIGZ1dHVyZSB0byBwcmVkaWN0IGR1cmluZyBmYXN0IG1vdGlvbiAoaW4gc2Vjb25kcykuXHJcbiAgICBQUkVESUNUSU9OX1RJTUVfUzogMC4wNDAsIC8vIERlZmF1bHQ6IDAuMDQwLlxyXG5cclxuICAgIFlBV19PTkxZOiB0cnVlXHJcbn0iLCIvKipcclxuICogSGVhdmlseSBsaWZ0ZWQgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBwcm9qZWN0IGJ5IEJvcmlzIFNtdXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1wb2x5ZmlsbFxyXG4gKiBidXQgcmVmYWN0b3JlZCB0byB1c2UgZGlmZmVyZW50IGRhdGEgc291cmNlIHByb3ZpZGVkIG92ZXIgQkxFIGJ5IHRoZSBUSSBTZW5zb3IgVGFnXHJcbiAqXHJcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxyXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmltcG9ydCBDb21wbGVtZW50YXJ5RmlsdGVyIGZyb20gJy4vY29tcGxlbWVudGFyeS1maWx0ZXIuZXM2JztcclxuaW1wb3J0IFBvc2VQcmVkaWN0b3IgZnJvbSAnLi9wb3NlLXByZWRpY3Rvci5lczYnO1xyXG4vL2ltcG9ydCBUb3VjaFBhbm5lciBmcm9tICcuLi90b3VjaC1wYW5uZXIuZXM2JztcclxuaW1wb3J0IE1hdGhVdGlsIGZyb20gJy4uL21hdGgvdXRpbC5lczYnO1xyXG5pbXBvcnQgVmVjdG9yMyBmcm9tICcuLi9tYXRoL3ZlY3RvcjMuZXM2JztcclxuaW1wb3J0IFF1YXRlcm5pb24gZnJvbSAnLi4vbWF0aC9xdWF0ZXJuaW9uLmVzNic7XHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuZXM2JztcclxuXHJcbi8qKlxyXG4gKiBUaGUgcG9zZSBzZW5zb3IsIGltcGxlbWVudGVkIHVzaW5nIERldmljZU1vdGlvbiBBUElzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VJZCA9ICd3ZWJ2ci1wb2x5ZmlsbDpmdXNlZCc7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VOYW1lID0gJ1ZSIFBvc2l0aW9uIERldmljZSAod2VidnItcG9seWZpbGw6ZnVzZWQpJztcclxuXHJcbiAgICAgICAgdGhpcy5hY2NlbGVyb21ldGVyID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICB0aGlzLmd5cm9zY29wZSA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG4gICAgICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIHRoaXMub25EZXZpY2VNb3Rpb25DaGFuZ2VfLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5vblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlXy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBuZXcgQ29tcGxlbWVudGFyeUZpbHRlcihDb25maWcuS19GSUxURVIpO1xyXG4gICAgICAgIHRoaXMucG9zZVByZWRpY3RvciA9IG5ldyBQb3NlUHJlZGljdG9yKENvbmZpZy5QUkVESUNUSU9OX1RJTUVfUyk7XHJcbiAgICAgLy8gICB0aGlzLnRvdWNoUGFubmVyID0gbmV3IFRvdWNoUGFubmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVyVG9Xb3JsZFEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIGZpbHRlciB0byB3b3JsZCB0cmFuc2Zvcm0sIGRlcGVuZGluZyBvbiBPUy5cclxuICAgICAgICAvL2lmIChVdGlsLmlzSU9TKCkpIHtcclxuICAgICAgIC8vIHRoaXMuZmlsdGVyVG9Xb3JsZFEuc2V0RnJvbUF4aXNBbmdsZShuZXcgVmVjdG9yMygxLCAwLCAwKSwgTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgIC8vfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyVG9Xb3JsZFEuc2V0RnJvbUF4aXNBbmdsZShuZXcgVmVjdG9yMygxLCAwLCAwKSwgLU1hdGguUEkgLyAyKTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgdGhpcy5pbnZlcnNlV29ybGRUb1NjcmVlblEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHRoaXMud29ybGRUb1NjcmVlblEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxQb3NlQWRqdXN0USA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbFBvc2VBZGp1c3RRLnNldEZyb21BeGlzQW5nbGUobmV3IFZlY3RvcjMoMCwgMCwgMSksXHJcbiAgICAgICAgICAgIC13aW5kb3cub3JpZW50YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuXHJcbiAgICAgICAgLy90aGlzLnNldFNjcmVlblRyYW5zZm9ybV8oKTtcclxuICAgICAgICAvLyBBZGp1c3QgdGhpcyBmaWx0ZXIgZm9yIGJlaW5nIGluIGxhbmRzY2FwZSBtb2RlLlxyXG4gICAgICAgIC8vaWYgKFV0aWwuaXNMYW5kc2NhcGVNb2RlKCkpIHtcclxuICAgICAgICAvLyAgdGhpcy5maWx0ZXJUb1dvcmxkUS5tdWx0aXBseSh0aGlzLmludmVyc2VXb3JsZFRvU2NyZWVuUSk7XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIC8vIEtlZXAgdHJhY2sgb2YgYSByZXNldCB0cmFuc2Zvcm0gZm9yIHJlc2V0U2Vuc29yLlxyXG4gICAgICAgIHRoaXMucmVzZXRRID0gbmV3IFF1YXRlcm5pb24oKTtcclxuXHJcbiAgICAgICAgLy90aGlzLmlzRmlyZWZveEFuZHJvaWQgPSBVdGlsLmlzRmlyZWZveEFuZHJvaWQoKTtcclxuICAgICAgICAvL3RoaXMuaXNJT1MgPSBVdGlsLmlzSU9TKCk7XHJcblxyXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25PdXRfID0gbmV3IEZsb2F0MzJBcnJheSg0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgICAvLyBUaGlzIFBvc2VTZW5zb3IgZG9lc24ndCBzdXBwb3J0IHBvc2l0aW9uXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JpZW50YXRpb24oKSB7XHJcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIGZpbHRlciBzcGFjZSB0byB0aGUgdGhlIHNhbWUgc3lzdGVtIHVzZWQgYnkgdGhlXHJcbiAgICAgICAgLy8gZGV2aWNlb3JpZW50YXRpb24gZXZlbnQuXHJcbiAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gdGhpcy5maWx0ZXIuZ2V0T3JpZW50YXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gUHJlZGljdCBvcmllbnRhdGlvbi5cclxuICAgICAgICB0aGlzLnByZWRpY3RlZFEgPSB0aGlzLnBvc2VQcmVkaWN0b3IuZ2V0UHJlZGljdGlvbihvcmllbnRhdGlvbiwgdGhpcy5neXJvc2NvcGUsIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTKTtcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCB0byBUSFJFRSBjb29yZGluYXRlIHN5c3RlbTogLVogZm9yd2FyZCwgWSB1cCwgWCByaWdodC5cclxuICAgICAgICB2YXIgb3V0ID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICBvdXQuY29weSh0aGlzLmZpbHRlclRvV29ybGRRKTtcclxuICAgICAgICBvdXQubXVsdGlwbHkodGhpcy5yZXNldFEpO1xyXG4gICAgICAgIG91dC5tdWx0aXBseSh0aGlzLnByZWRpY3RlZFEpO1xyXG4gICAgICAgIG91dC5tdWx0aXBseSh0aGlzLndvcmxkVG9TY3JlZW5RKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uT3V0X1swXSA9IG91dC54O1xyXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25PdXRfWzFdID0gb3V0Lnk7XHJcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bMl0gPSBvdXQuejtcclxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uT3V0X1szXSA9IG91dC53O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uT3V0XztcclxuICAgIH1cclxuXHJcbiAgICByZXNldFBvc2UoKSB7XHJcbiAgICAgICAgLy8gUmVkdWNlIHRvIGludmVydGVkIHlhdy1vbmx5LlxyXG4gICAgICAgIHRoaXMucmVzZXRRLmNvcHkodGhpcy5maWx0ZXIuZ2V0T3JpZW50YXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5yZXNldFEueCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNldFEueSA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXNldFEueiAqPSAtMTtcclxuICAgICAgICB0aGlzLnJlc2V0US5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgLy8gVGFrZSBpbnRvIGFjY291bnQgb3JpZ2luYWwgcG9zZS5cclxuICAgICAgICB0aGlzLnJlc2V0US5tdWx0aXBseSh0aGlzLm9yaWdpbmFsUG9zZUFkanVzdFEpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNlbnNvckRhdGEoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLnNlbnNvcnMgJiYgZGF0YS5zZW5zb3JzLmFjY2VsZXJvbWV0ZXIgJiYgZGF0YS5zZW5zb3JzLmd5cm9zY29wZSkge1xyXG4gICAgICAgICAgICB2YXIgYWNjR3Jhdml0eSA9IGRhdGEuc2Vuc29ycy5hY2NlbGVyb21ldGVyOyAvL3RvZG86IGdyYXZpdHkhXHJcbiAgICAgICAgICAgIHZhciByb3RSYXRlID0gZGF0YS5zZW5zb3JzLmd5cm9zY29wZTtcclxuXHJcbiAgICAgICAgICAgIC8vdmFyIGFjY0dyYXZpdHkgPSBkYXRhLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHk7IC8vdG9kbzogZ3Jhdml0eSFcclxuICAgICAgICAgICAgLy92YXIgcm90UmF0ZSA9IGRhdGEucm90YXRpb25SYXRlO1xyXG4gICAgICAgICAgICB2YXIgdGltZXN0YW1wUyA9IGRhdGEuc2Vuc29ycy50aW1lc3RhbXAgLyAxMDAwO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlbHRhUyA9IHRpbWVzdGFtcFMgLSB0aGlzLnByZXZpb3VzVGltZXN0YW1wUztcclxuICAgICAgICAgICAgaWYgKGRlbHRhUyA8PSBNYXRoVXRpbC5NSU5fVElNRVNURVAgfHwgZGVsdGFTID4gTWF0aFV0aWwuTUFYX1RJTUVTVEVQKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgdGltZXN0YW1wcyBkZXRlY3RlZC4gVGltZSBzdGVwIGJldHdlZW4gc3VjY2Vzc2l2ZSAnICtcclxuICAgICAgICAgICAgICAgICAgICAnZ3lyb3Njb3BlIHNlbnNvciBzYW1wbGVzIGlzIHZlcnkgc21hbGwgb3Igbm90IG1vbm90b25pYycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1RpbWVzdGFtcFMgPSB0aW1lc3RhbXBTO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYWNjZWxlcm9tZXRlci5zZXQoLWFjY0dyYXZpdHkueCwgLWFjY0dyYXZpdHkueSwgLWFjY0dyYXZpdHkueik7XHJcbiAgICAgICAgICAgIHRoaXMuZ3lyb3Njb3BlLnNldChyb3RSYXRlLmFscGhhLCByb3RSYXRlLmJldGEsIHJvdFJhdGUuZ2FtbWEpO1xyXG4gICAgICAgICAgICB0aGlzLmd5cm9zY29wZS5tdWx0aXBseVNjYWxhcihNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyLmFkZEFjY2VsTWVhc3VyZW1lbnQodGhpcy5hY2NlbGVyb21ldGVyLCB0aW1lc3RhbXBTKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXIuYWRkR3lyb01lYXN1cmVtZW50KHRoaXMuZ3lyb3Njb3BlLCB0aW1lc3RhbXBTKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTID0gdGltZXN0YW1wUztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcclxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xyXG4gKlxyXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcclxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFF1YXRlcm5pb24gZnJvbSAnLi4vbWF0aC9xdWF0ZXJuaW9uLmVzNic7XHJcbmltcG9ydCBWZWN0b3IzIGZyb20gJy4uL21hdGgvdmVjdG9yMy5lczYnO1xyXG5pbXBvcnQgTWF0aFV0aWwgZnJvbSAnLi4vbWF0aC91dGlsLmVzNic7XHJcblxyXG4vKipcclxuICogR2l2ZW4gYW4gb3JpZW50YXRpb24gYW5kIHRoZSBneXJvc2NvcGUgZGF0YSwgcHJlZGljdHMgdGhlIGZ1dHVyZSBvcmllbnRhdGlvblxyXG4gKiBvZiB0aGUgaGVhZC4gVGhpcyBtYWtlcyByZW5kZXJpbmcgYXBwZWFyIGZhc3Rlci5cclxuICpcclxuICogQWxzbyBzZWU6IGh0dHA6Ly9tc2wuY3MudWl1Yy5lZHUvfmxhdmFsbGUvcGFwZXJzL0xhdlllckthdEFudDE0LnBkZlxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gcHJlZGljdGlvblRpbWVTIHRpbWUgZnJvbSBoZWFkIG1vdmVtZW50IHRvIHRoZSBhcHBlYXJhbmNlIG9mXHJcbiAqIHRoZSBjb3JyZXNwb25kaW5nIGltYWdlLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHByZWRpY3Rpb25UaW1lUykge1xyXG4gICAgICAgIHRoaXMucHJlZGljdGlvblRpbWVTID0gcHJlZGljdGlvblRpbWVTO1xyXG5cclxuICAgICAgICAvLyBUaGUgcXVhdGVybmlvbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcmV2aW91cyBzdGF0ZS5cclxuICAgICAgICB0aGlzLnByZXZpb3VzUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgLy8gUHJldmlvdXMgdGltZSBhIHByZWRpY3Rpb24gb2NjdXJyZWQuXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1RpbWVzdGFtcFMgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBUaGUgZGVsdGEgcXVhdGVybmlvbiB0aGF0IGFkanVzdHMgdGhlIGN1cnJlbnQgcG9zZS5cclxuICAgICAgICB0aGlzLmRlbHRhUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgLy8gVGhlIG91dHB1dCBxdWF0ZXJuaW9uLlxyXG4gICAgICAgIHRoaXMub3V0USA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJlZGljdGlvbihjdXJyZW50USwgZ3lybywgdGltZXN0YW1wUykge1xyXG4gICAgICAgIGlmICghdGhpcy5wcmV2aW91c1RpbWVzdGFtcFMpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1EuY29weShjdXJyZW50USk7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTID0gdGltZXN0YW1wUztcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRRO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGF4aXMgYW5kIGFuZ2xlIGJhc2VkIG9uIGd5cm9zY29wZSByb3RhdGlvbiByYXRlIGRhdGEuXHJcbiAgICAgICAgdmFyIGF4aXMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGF4aXMuY29weShneXJvKTtcclxuICAgICAgICBheGlzLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICB2YXIgYW5ndWxhclNwZWVkID0gZ3lyby5sZW5ndGgoKTtcclxuXHJcbiAgICAgICAgLy8gSWYgd2UncmUgcm90YXRpbmcgc2xvd2x5LCBkb24ndCBkbyBwcmVkaWN0aW9uLlxyXG4gICAgICAgIGlmIChhbmd1bGFyU3BlZWQgPCBNYXRoVXRpbC5kZWdUb1JhZCAqIDIwKSB7XHJcbiAgICAgICAgICAgIC8vaWYgKERFQlVHKSB7XHJcbiAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdNb3Zpbmcgc2xvd2x5LCBhdCAlcyBkZWcvczogbm8gcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgIC8vICAoTWF0aFV0aWwucmFkVG9EZWcgKiBhbmd1bGFyU3BlZWQpLnRvRml4ZWQoMSkpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgdGhpcy5vdXRRLmNvcHkoY3VycmVudFEpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUS5jb3B5KGN1cnJlbnRRKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0UTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgcHJlZGljdGVkIGFuZ2xlIGJhc2VkIG9uIHRoZSB0aW1lIGRlbHRhIGFuZCBsYXRlbmN5LlxyXG4gICAgICAgIHZhciBkZWx0YVQgPSB0aW1lc3RhbXBTIC0gdGhpcy5wcmV2aW91c1RpbWVzdGFtcFM7XHJcbiAgICAgICAgdmFyIHByZWRpY3RBbmdsZSA9IGFuZ3VsYXJTcGVlZCAqIHRoaXMucHJlZGljdGlvblRpbWVTO1xyXG5cclxuICAgICAgICB0aGlzLmRlbHRhUS5zZXRGcm9tQXhpc0FuZ2xlKGF4aXMsIHByZWRpY3RBbmdsZSk7XHJcbiAgICAgICAgdGhpcy5vdXRRLmNvcHkodGhpcy5wcmV2aW91c1EpO1xyXG4gICAgICAgIHRoaXMub3V0US5tdWx0aXBseSh0aGlzLmRlbHRhUSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJldmlvdXNRLmNvcHkoY3VycmVudFEpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vdXRRO1xyXG4gICAgfVxyXG59OyIsIi8qKlxyXG4gKiBIZWF2aWx5IGxpZnRlZCBmcm9tIFdlYlZSLVBvbHlmaWxsIHByb2plY3QgYnkgQm9yaXMgU211czogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLXBvbHlmaWxsXHJcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcclxuICpcclxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XHJcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHNhbXBsZSwgdGltZXN0YW1wUykge1xyXG4gICAgICAgIHRoaXMuc2V0KHNhbXBsZSwgdGltZXN0YW1wUyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHNhbXBsZSwgdGltZXN0YW1wUykge1xyXG4gICAgICAgIHRoaXMuc2FtcGxlID0gc2FtcGxlO1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShzZW5zb3JTYW1wbGUpIHtcclxuICAgICAgICB0aGlzLnNldChzZW5zb3JTYW1wbGUuc2FtcGxlLCBzZW5zb3JTYW1wbGUudGltZXN0YW1wUyk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IFRJU2Vuc29yVGFnIGZyb20gJy4vZGV2aWNlcy90aXNlbnNvcnRhZy5lczYnO1xyXG5pbXBvcnQgQ29tcGxlbWVudGFyeUZpbHRlciBmcm9tICcuL3NlbnNvcmZ1c2lvbi9jb21wbGVtZW50YXJ5LWZpbHRlci5lczYnO1xyXG5pbXBvcnQgRnVzaW9uUG9zZVNlbnNvciBmcm9tICcuL3NlbnNvcmZ1c2lvbi9mdXNpb24tcG9zZS1zZW5zb3IuZXM2JztcclxuaW1wb3J0IFBvc2VQcmVkaWN0b3IgZnJvbSAnLi9zZW5zb3JmdXNpb24vcG9zZS1wcmVkaWN0b3IuZXM2JztcclxuXHJcbmV4cG9ydHMudGlzZW5zb3J0YWcgPSBUSVNlbnNvclRhZztcclxuZXhwb3J0cy5zZW5zb3JmdXNpb24gPSB7XHJcbiAgICBjb21wbGVtZW50YXJ5ZmlsdGVyOiBDb21wbGVtZW50YXJ5RmlsdGVyLFxyXG4gICAgZnVzaW9ucG9zZXNlbnNvcjogRnVzaW9uUG9zZVNlbnNvcixcclxuICAgIHBvc2VwcmVkaWN0b3I6IFBvc2VQcmVkaWN0b3JcclxufTsiXX0=
