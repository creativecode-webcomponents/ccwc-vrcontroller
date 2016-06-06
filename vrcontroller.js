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
                    _this2.update(msg);
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
                console.log('Moving slowly, at %s deg/s: no prediction', (_util2.default.radToDeg * angularSpeed).toFixed(1));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGV2aWNlcy9kZXZpY2UuZXM2Iiwic3JjL2RldmljZXMvdGlzZW5zb3J0YWcuZXM2Iiwic3JjL21hdGgvcXVhdGVybmlvbi5lczYiLCJzcmMvbWF0aC91dGlsLmVzNiIsInNyYy9tYXRoL3ZlY3RvcjMuZXM2Iiwic3JjL3NlbnNvcmZ1c2lvbi9jb21wbGVtZW50YXJ5LWZpbHRlci5lczYiLCJzcmMvc2Vuc29yZnVzaW9uL2NvbmZpZy5lczYiLCJzcmMvc2Vuc29yZnVzaW9uL2Z1c2lvbi1wb3NlLXNlbnNvci5lczYiLCJzcmMvc2Vuc29yZnVzaW9uL3Bvc2UtcHJlZGljdG9yLmVzNiIsInNyYy9zZW5zb3JmdXNpb24vc2Vuc29yLXNhbXBsZS5lczYiLCJzcmMvdnJjb250cm9sbGVyLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7eUJBR0k7c0JBQWM7OEJBSVY7Ozs7O2FBQUEsQUFBSyxnQkFBZ0IsdUJBQXJCLEFBTUE7Ozs7OzthQUFBLEFBQUssYUFBTCxBQUFrQixBQU9sQjs7Ozs7OzthQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDMUI7Ozs7Ozs7Ozs7Z0MsQUFNTyxJQUFJLEFBQ1I7aUJBQUEsQUFBSyxnQkFBTCxBQUFxQixLQUFyQixBQUEwQixBQUMxQjtnQkFBSSxLQUFKLEFBQVMsWUFBWSxBQUFFO0FBQVM7QUFDbkM7Ozs7Ozs7Ozs7bUMsQUFNVSxJQUFJLEFBQ1g7aUJBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFJLEtBQUEsQUFBSyxnQkFBekIsQUFBeUMsUUFBekMsQUFBaUQsS0FBSyxBQUNsRDtvQkFBSSxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsT0FBekIsQUFBZ0MsSUFBSSxBQUNoQzt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLE9BQXJCLEFBQTRC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QUFJLGFBQVQsQUFBc0IsUUFBUSxhQUE5QixBQUEyQyxBQUM5Qzs7Ozs7Ozs7Ozs7O0FDL0JMOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTsrQ0FBZSxBQUVuQjt5Q0FGbUIsQUFHbkI7bUNBSEosQUFBdUI7QUFBQSxBQUNuQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgU2Vuc29yRnVzaW9uIGZyb20gJy4uL3NlbnNvcmZ1c2lvbi9mdXNpb24tcG9zZS1zZW5zb3IuZXM2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogc2Vuc29yIGZ1c2lvblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc2Vuc29yZnVzaW9uID0gbmV3IFNlbnNvckZ1c2lvbigpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiBhbHJlYWR5IGNvbm5lY3RlZFxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb25uZWN0IHRvIHNlbnNvcnRhZ1xuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFja1xuICAgICAqL1xuICAgIGNvbm5lY3QoY2IpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMucHVzaChjYik7XG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHsgcmV0dXJuOyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGlzY29ubmVjdFxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3QoY2IpIHtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLl9ldmVudExpc3RlbmVycy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50TGlzdGVuZXJzW2NdID09PSBjYikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzLnNwbGljZShjLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHVwZGF0ZSBsaXN0ZW5lcnMgd2l0aCBkYXRhXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGUoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5zZW5zb3JzICYmIGRhdGEuc2Vuc29ycy5hY2NlbGVyb21ldGVyICYmIGRhdGEuc2Vuc29ycy5neXJvc2NvcGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbnNvcmZ1c2lvbi51cGRhdGVTZW5zb3JEYXRhKGRhdGEpO1xuICAgICAgICAgICAgZGF0YS5zZW5zb3JzLm9yaWVudGF0aW9uID0gdGhpcy5fc2Vuc29yZnVzaW9uLmdldE9yaWVudGF0aW9uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMuX2V2ZW50TGlzdGVuZXJzLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbY10oJ21vdGlvbnVwZGF0ZScsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBEZXZpY2UgZnJvbSAnLi9kZXZpY2UuZXM2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBEZXZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogc29ja2V0IGNvbm5lY3Rpb25cbiAgICAgICAgICogQHR5cGUge251bGx9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNvY2tldCA9IG51bGw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIGFscmVhZHkgY29ubmVjdGVkXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJhc2UgVVVJRFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmFzZVVVSUQgPSBbJ2YwMDAnLCAnLTA0NTEtNDAwMC1iMDAwLTAwMDAwMDAwMDAwMCddO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZXJ2aWNlIFVVSURTXG4gICAgICAgICAqIEB0eXBlIHt7fX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3V1aWQgPSB7fTtcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMDAnICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQudGVtcGVyYXR1cmVEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTAyJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLnRlbXBlcmF0dXJlUGVyaW9kID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMycgKyB0aGlzLl9iYXNlVVVJRFsxXTtcblxuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXIgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTEwJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXJEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyQ29uZmlndXJhdGlvbiA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMTInICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQuYWNjZWxlcm9tZXRlclBlcmlvZCA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMTMnICsgdGhpcy5fYmFzZVVVSURbMV07XG5cbiAgICAgICAgdGhpcy5fdXVpZC5odW1pZGl0eSA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMjAnICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQuaHVtaWRpdHlEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEyMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC5odW1pZGl0eUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTIyJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLmh1bWlkaXR5UGVyaW9kID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEyMycgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb25uZWN0IHRvIHNlbnNvcnRhZ1xuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFja1xuICAgICAqL1xuICAgIGNvbm5lY3QoY2IpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMucHVzaChjYik7XG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIW5hdmlnYXRvci5ibHVldG9vdGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBibHVldG9vdGggc3VwcG9ydCBpbiB5b3VyIGJyb3dzZXIsIHRyeWluZyB3ZWJzb2NrZXRzIGZyb20gYSBsb2NhbCBub2RlIHNlcnZlcicpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo4MDgwJyk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7IGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgRXJyb3IgJyArIGVycm9yKTsgfTtcblxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKG1zZyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmJsdWV0b290aC5yZXF1ZXN0RGV2aWNlKFxuICAgICAgICAgICAgICAgIHsgICBmaWx0ZXJzOiBbIHtuYW1lOiAnU2Vuc29yVGFnJ30sIHsgc2VydmljZXM6IFsgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSwgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyLCB0aGlzLl91dWlkLmh1bWlkaXR5IF0gfV0sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsU2VydmljZXM6IFsgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSwgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyLCB0aGlzLl91dWlkLmh1bWlkaXR5IF0gfSlcbiAgICAgICAgICAgICAgICAudGhlbihkZXZpY2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR290IGRldmljZTonLCBkZXZpY2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWQ6JywgZGV2aWNlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbm5lY3RlZCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRldmljZS5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZCA9IGRldmljZS5nYXR0LmNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZSA9IGRldmljZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3RlZDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIFNlcnZpY2XigKYnLCBzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBzZXJ2ZXIuZ2V0UHJpbWFyeVNlcnZpY2UoJ2YwMDBhYTEwLTA0NTEtNDAwMC1iMDAwLTAwMDAwMDAwMDAwMCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMub25EZXZpY2VFcnJvcihlcnJvcikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogb24gZGV2aWNlIHJlcXVlc3RlZCBzdWNjZXNzXG4gICAgICogQHBhcmFtIGRldmljZVxuICAgICAqL1xuICAgIG9uRGV2aWNlUmVxdWVzdGVkU3VjY2VzcyhkZXZpY2UpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBkZXZpY2UuZ2F0dC5jb25uZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogb24gZGV2aWNlIHJlcXVlc3RlZCBlcnJvclxuICAgICAqIEBwYXJhbSBkZXZpY2VcbiAgICAgKi9cbiAgICBvbkRldmljZUVycm9yKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn0iLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBUaGlzIHBpZWNlIGluIHBhcnRpY3VsYXIgd2FzIGFsc28gcHVsbGVkIGJ5IEJvcmlzIGZyb20gVGhyZWVKUyBtYXRoXG4gKlxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgVmVjdG9yMyBmcm9tICcuL3ZlY3RvcjMuZXM2JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCB4LCB5LCB6LCB3ICkge1xuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XG4gICAgICAgIHRoaXMueSA9IHkgfHwgMDtcbiAgICAgICAgdGhpcy56ID0geiB8fCAwO1xuICAgICAgICB0aGlzLncgPSAoIHcgIT09IHVuZGVmaW5lZCApID8gdyA6IDE7XG4gICAgfVxuXG4gICAgc2V0KCB4LCB5LCB6LCB3ICkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnogPSB6O1xuICAgICAgICB0aGlzLncgPSB3O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkoIHF1YXRlcm5pb24gKSB7XG4gICAgICAgIHRoaXMueCA9IHF1YXRlcm5pb24ueDtcbiAgICAgICAgdGhpcy55ID0gcXVhdGVybmlvbi55O1xuICAgICAgICB0aGlzLnogPSBxdWF0ZXJuaW9uLno7XG4gICAgICAgIHRoaXMudyA9IHF1YXRlcm5pb24udztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRGcm9tRXVsZXJYWVooIHgsIHksIHogKSB7XG4gICAgICAgIHZhciBjMSA9IE1hdGguY29zKCB4IC8gMiApO1xuICAgICAgICB2YXIgYzIgPSBNYXRoLmNvcyggeSAvIDIgKTtcbiAgICAgICAgdmFyIGMzID0gTWF0aC5jb3MoIHogLyAyICk7XG4gICAgICAgIHZhciBzMSA9IE1hdGguc2luKCB4IC8gMiApO1xuICAgICAgICB2YXIgczIgPSBNYXRoLnNpbiggeSAvIDIgKTtcbiAgICAgICAgdmFyIHMzID0gTWF0aC5zaW4oIHogLyAyICk7XG5cbiAgICAgICAgdGhpcy54ID0gczEgKiBjMiAqIGMzICsgYzEgKiBzMiAqIHMzO1xuICAgICAgICB0aGlzLnkgPSBjMSAqIHMyICogYzMgLSBzMSAqIGMyICogczM7XG4gICAgICAgIHRoaXMueiA9IGMxICogYzIgKiBzMyArIHMxICogczIgKiBjMztcbiAgICAgICAgdGhpcy53ID0gYzEgKiBjMiAqIGMzIC0gczEgKiBzMiAqIHMzO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEZyb21FdWxlcllYWiggeCwgeSwgeiApIHtcbiAgICAgICAgdmFyIGMxID0gTWF0aC5jb3MoIHggLyAyICk7XG4gICAgICAgIHZhciBjMiA9IE1hdGguY29zKCB5IC8gMiApO1xuICAgICAgICB2YXIgYzMgPSBNYXRoLmNvcyggeiAvIDIgKTtcbiAgICAgICAgdmFyIHMxID0gTWF0aC5zaW4oIHggLyAyICk7XG4gICAgICAgIHZhciBzMiA9IE1hdGguc2luKCB5IC8gMiApO1xuICAgICAgICB2YXIgczMgPSBNYXRoLnNpbiggeiAvIDIgKTtcblxuICAgICAgICB0aGlzLnggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7XG4gICAgICAgIHRoaXMueSA9IGMxICogczIgKiBjMyAtIHMxICogYzIgKiBzMztcbiAgICAgICAgdGhpcy56ID0gYzEgKiBjMiAqIHMzIC0gczEgKiBzMiAqIGMzO1xuICAgICAgICB0aGlzLncgPSBjMSAqIGMyICogYzMgKyBzMSAqIHMyICogczM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0RnJvbUF4aXNBbmdsZSggYXhpcywgYW5nbGUgKSB7XG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2dlb21ldHJ5L3JvdGF0aW9ucy9jb252ZXJzaW9ucy9hbmdsZVRvUXVhdGVybmlvbi9pbmRleC5odG1cbiAgICAgICAgLy8gYXNzdW1lcyBheGlzIGlzIG5vcm1hbGl6ZWRcblxuICAgICAgICB2YXIgaGFsZkFuZ2xlID0gYW5nbGUgLyAyLCBzID0gTWF0aC5zaW4oIGhhbGZBbmdsZSApO1xuXG4gICAgICAgIHRoaXMueCA9IGF4aXMueCAqIHM7XG4gICAgICAgIHRoaXMueSA9IGF4aXMueSAqIHM7XG4gICAgICAgIHRoaXMueiA9IGF4aXMueiAqIHM7XG4gICAgICAgIHRoaXMudyA9IE1hdGguY29zKCBoYWxmQW5nbGUgKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtdWx0aXBseSggcSApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlRdWF0ZXJuaW9ucyggdGhpcywgcSApO1xuICAgIH1cblxuICAgIG11bHRpcGx5UXVhdGVybmlvbnMoIGEsIGIgKSB7XG4gICAgICAgIC8vIGZyb20gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvYWxnZWJyYS9yZWFsTm9ybWVkQWxnZWJyYS9xdWF0ZXJuaW9ucy9jb2RlL2luZGV4Lmh0bVxuXG4gICAgICAgIHZhciBxYXggPSBhLngsIHFheSA9IGEueSwgcWF6ID0gYS56LCBxYXcgPSBhLnc7XG4gICAgICAgIHZhciBxYnggPSBiLngsIHFieSA9IGIueSwgcWJ6ID0gYi56LCBxYncgPSBiLnc7XG5cbiAgICAgICAgdGhpcy54ID0gcWF4ICogcWJ3ICsgcWF3ICogcWJ4ICsgcWF5ICogcWJ6IC0gcWF6ICogcWJ5O1xuICAgICAgICB0aGlzLnkgPSBxYXkgKiBxYncgKyBxYXcgKiBxYnkgKyBxYXogKiBxYnggLSBxYXggKiBxYno7XG4gICAgICAgIHRoaXMueiA9IHFheiAqIHFidyArIHFhdyAqIHFieiArIHFheCAqIHFieSAtIHFheSAqIHFieDtcbiAgICAgICAgdGhpcy53ID0gcWF3ICogcWJ3IC0gcWF4ICogcWJ4IC0gcWF5ICogcWJ5IC0gcWF6ICogcWJ6O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGludmVyc2UoKSB7XG4gICAgICAgIHRoaXMueCAqPSAtMTtcbiAgICAgICAgdGhpcy55ICo9IC0xO1xuICAgICAgICB0aGlzLnogKj0gLTE7XG5cbiAgICAgICAgdGhpcy5ub3JtYWxpemUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBub3JtYWxpemUoKSB7XG4gICAgICAgIHZhciBsID0gTWF0aC5zcXJ0KCB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKyB0aGlzLncgKiB0aGlzLncgKTtcblxuICAgICAgICBpZiAoIGwgPT09IDAgKSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgIHRoaXMueiA9IDA7XG4gICAgICAgICAgICB0aGlzLncgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbCA9IDEgLyBsO1xuXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggKiBsO1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55ICogbDtcbiAgICAgICAgICAgIHRoaXMueiA9IHRoaXMueiAqIGw7XG4gICAgICAgICAgICB0aGlzLncgPSB0aGlzLncgKiBsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2xlcnAoIHFiLCB0ICkge1xuICAgICAgICBpZiAoIHQgPT09IDAgKSByZXR1cm4gdGhpcztcbiAgICAgICAgaWYgKCB0ID09PSAxICkgcmV0dXJuIHRoaXMuY29weSggcWIgKTtcblxuICAgICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueSwgeiA9IHRoaXMueiwgdyA9IHRoaXMudztcblxuICAgICAgICAvLyBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL3JlYWxOb3JtZWRBbGdlYnJhL3F1YXRlcm5pb25zL3NsZXJwL1xuXG4gICAgICAgIHZhciBjb3NIYWxmVGhldGEgPSB3ICogcWIudyArIHggKiBxYi54ICsgeSAqIHFiLnkgKyB6ICogcWIuejtcblxuICAgICAgICBpZiAoIGNvc0hhbGZUaGV0YSA8IDAgKSB7XG4gICAgICAgICAgICB0aGlzLncgPSAtIHFiLnc7XG4gICAgICAgICAgICB0aGlzLnggPSAtIHFiLng7XG4gICAgICAgICAgICB0aGlzLnkgPSAtIHFiLnk7XG4gICAgICAgICAgICB0aGlzLnogPSAtIHFiLno7XG5cbiAgICAgICAgICAgIGNvc0hhbGZUaGV0YSA9IC0gY29zSGFsZlRoZXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb3B5KCBxYiApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBjb3NIYWxmVGhldGEgPj0gMS4wICkge1xuICAgICAgICAgICAgdGhpcy53ID0gdztcbiAgICAgICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICAgICAgdGhpcy56ID0gejtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFsZlRoZXRhID0gTWF0aC5hY29zKCBjb3NIYWxmVGhldGEgKTtcbiAgICAgICAgdmFyIHNpbkhhbGZUaGV0YSA9IE1hdGguc3FydCggMS4wIC0gY29zSGFsZlRoZXRhICogY29zSGFsZlRoZXRhICk7XG5cbiAgICAgICAgaWYgKCBNYXRoLmFicyggc2luSGFsZlRoZXRhICkgPCAwLjAwMSApIHtcbiAgICAgICAgICAgIHRoaXMudyA9IDAuNSAqICggdyArIHRoaXMudyApO1xuICAgICAgICAgICAgdGhpcy54ID0gMC41ICogKCB4ICsgdGhpcy54ICk7XG4gICAgICAgICAgICB0aGlzLnkgPSAwLjUgKiAoIHkgKyB0aGlzLnkgKTtcbiAgICAgICAgICAgIHRoaXMueiA9IDAuNSAqICggeiArIHRoaXMueiApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByYXRpb0EgPSBNYXRoLnNpbiggKCAxIC0gdCApICogaGFsZlRoZXRhICkgLyBzaW5IYWxmVGhldGEsXG4gICAgICAgICAgICByYXRpb0IgPSBNYXRoLnNpbiggdCAqIGhhbGZUaGV0YSApIC8gc2luSGFsZlRoZXRhO1xuXG4gICAgICAgIHRoaXMudyA9ICggdyAqIHJhdGlvQSArIHRoaXMudyAqIHJhdGlvQiApO1xuICAgICAgICB0aGlzLnggPSAoIHggKiByYXRpb0EgKyB0aGlzLnggKiByYXRpb0IgKTtcbiAgICAgICAgdGhpcy55ID0gKCB5ICogcmF0aW9BICsgdGhpcy55ICogcmF0aW9CICk7XG4gICAgICAgIHRoaXMueiA9ICggeiAqIHJhdGlvQSArIHRoaXMueiAqIHJhdGlvQiApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEZyb21Vbml0VmVjdG9ycyh2RnJvbSwgdlRvKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9sb2xlbmdpbmUubmV0L2Jsb2cvMjAxNC8wMi8yNC9xdWF0ZXJuaW9uLWZyb20tdHdvLXZlY3RvcnMtZmluYWxcbiAgICAgICAgLy8gYXNzdW1lcyBkaXJlY3Rpb24gdmVjdG9ycyB2RnJvbSBhbmQgdlRvIGFyZSBub3JtYWxpemVkXG4gICAgICAgIHZhciB2MSwgcjtcbiAgICAgICAgdmFyIEVQUyA9IDAuMDAwMDAxO1xuXG4gICAgICAgIGlmICh2MSA9PT0gdW5kZWZpbmVkKSB2MSA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgICAgciA9IHZGcm9tLmRvdCh2VG8pICsgMTtcblxuICAgICAgICBpZiAociA8IEVQUykge1xuICAgICAgICAgICAgciA9IDA7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh2RnJvbS54KSA+IE1hdGguYWJzKHZGcm9tLnopKSB7XG4gICAgICAgICAgICAgICAgdjEuc2V0KC12RnJvbS55LCB2RnJvbS54LCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdjEuc2V0KDAsIC12RnJvbS56LCB2RnJvbS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHYxLmNyb3NzVmVjdG9ycyh2RnJvbSwgdlRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHYxLng7XG4gICAgICAgIHRoaXMueSA9IHYxLnk7XG4gICAgICAgIHRoaXMueiA9IHYxLno7XG4gICAgICAgIHRoaXMudyA9IHI7XG5cbiAgICAgICAgdGhpcy5ub3JtYWxpemUoKTtcbiAgICB9XG59IiwiLyoqXG4gKiBIZWF2aWx5IGxpZnRlZCBmcm9tIFdlYlZSLVBvbHlmaWxsIHByb2plY3QgYnkgQm9yaXMgU211czogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLXBvbHlmaWxsXG4gKiBidXQgcmVmYWN0b3JlZCB0byB1c2UgZGlmZmVyZW50IGRhdGEgc291cmNlIHByb3ZpZGVkIG92ZXIgQkxFIGJ5IHRoZSBUSSBTZW5zb3IgVGFnXG4gKlxuICogVGhpcyBwaWVjZSBpbiBwYXJ0aWN1bGFyIHdhcyBhbHNvIHB1bGxlZCBieSBCb3JpcyBmcm9tIFRocmVlSlMgbWF0aFxuICpcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZ1RvUmFkOiBNYXRoLlBJIC8gMTgwLFxuICAgIHJhZFRvRGVnOiAxODAgLyBNYXRoLlBJLFxuICAgIE1JTl9USU1FU1RFUDogMC4wMDEsXG4gICAgTUFYX1RJTUVTVEVQOiAxLFxuXG4gICAgLy8gSGVscGVyIG1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgdGltZSBzdGVwcyBvZiBzZW5zb3IgdGltZXN0YW1wcy5cbiAgICBpc1RpbWVzdGFtcERlbHRhVmFsaWQ6IGZ1bmN0aW9uKHRpbWVzdGFtcERlbHRhUykge1xuICAgICAgICBpZiAoaXNOYU4odGltZXN0YW1wRGVsdGFTKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lc3RhbXBEZWx0YVMgPD0gdGhpcy5NSU5fVElNRVNURVApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXN0YW1wRGVsdGFTID4gdGhpcy5NQVhfVElNRVNURVApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59IiwiLyoqXG4gKiBIZWF2aWx5IGxpZnRlZCBmcm9tIFdlYlZSLVBvbHlmaWxsIHByb2plY3QgYnkgQm9yaXMgU211czogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLXBvbHlmaWxsXG4gKiBidXQgcmVmYWN0b3JlZCB0byB1c2UgZGlmZmVyZW50IGRhdGEgc291cmNlIHByb3ZpZGVkIG92ZXIgQkxFIGJ5IHRoZSBUSSBTZW5zb3IgVGFnXG4gKlxuICogVGhpcyBwaWVjZSBpbiBwYXJ0aWN1bGFyIHdhcyBhbHNvIHB1bGxlZCBieSBCb3JpcyBmcm9tIFRocmVlSlMgbWF0aFxuICpcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgeikge1xuICAgICAgICB0aGlzLnggPSB4IHx8IDA7XG4gICAgICAgIHRoaXMueSA9IHkgfHwgMDtcbiAgICAgICAgdGhpcy56ID0geiB8fCAwO1xuICAgIH1cblxuICAgIHNldCggeCwgeSwgeiApIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy56ID0gejtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb3B5KCB2ICkge1xuICAgICAgICB0aGlzLnggPSB2Lng7XG4gICAgICAgIHRoaXMueSA9IHYueTtcbiAgICAgICAgdGhpcy56ID0gdi56O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCggdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56ICk7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplKCkge1xuICAgICAgICB2YXIgc2NhbGFyID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgICBpZiAoIHNjYWxhciAhPT0gMCApIHtcbiAgICAgICAgICAgIHZhciBpbnZTY2FsYXIgPSAxIC8gc2NhbGFyO1xuXG4gICAgICAgICAgICB0aGlzLm11bHRpcGx5U2NhbGFyKGludlNjYWxhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgIHRoaXMueiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtdWx0aXBseVNjYWxhciggc2NhbGFyICkge1xuICAgICAgICB0aGlzLnggKj0gc2NhbGFyO1xuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xuICAgICAgICB0aGlzLnogKj0gc2NhbGFyO1xuICAgIH1cblxuICAgIGFwcGx5UXVhdGVybmlvbiggcSApIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xuICAgICAgICB2YXIgeiA9IHRoaXMuejtcblxuICAgICAgICB2YXIgcXggPSBxLng7XG4gICAgICAgIHZhciBxeSA9IHEueTtcbiAgICAgICAgdmFyIHF6ID0gcS56O1xuICAgICAgICB2YXIgcXcgPSBxLnc7XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWN0b3JcbiAgICAgICAgdmFyIGl4ID0gIHF3ICogeCArIHF5ICogeiAtIHF6ICogeTtcbiAgICAgICAgdmFyIGl5ID0gIHF3ICogeSArIHF6ICogeCAtIHF4ICogejtcbiAgICAgICAgdmFyIGl6ID0gIHF3ICogeiArIHF4ICogeSAtIHF5ICogeDtcbiAgICAgICAgdmFyIGl3ID0gLSBxeCAqIHggLSBxeSAqIHkgLSBxeiAqIHo7XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHJlc3VsdCAqIGludmVyc2UgcXVhdFxuICAgICAgICB0aGlzLnggPSBpeCAqIHF3ICsgaXcgKiAtIHF4ICsgaXkgKiAtIHF6IC0gaXogKiAtIHF5O1xuICAgICAgICB0aGlzLnkgPSBpeSAqIHF3ICsgaXcgKiAtIHF5ICsgaXogKiAtIHF4IC0gaXggKiAtIHF6O1xuICAgICAgICB0aGlzLnogPSBpeiAqIHF3ICsgaXcgKiAtIHF6ICsgaXggKiAtIHF5IC0gaXkgKiAtIHF4O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRvdCggdiApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueSArIHRoaXMueiAqIHYuejtcbiAgICB9XG5cbiAgICBjcm9zc1ZlY3RvcnMoIGEsIGIgKSB7XG4gICAgICAgIHZhciBheCA9IGEueCwgYXkgPSBhLnksIGF6ID0gYS56O1xuICAgICAgICB2YXIgYnggPSBiLngsIGJ5ID0gYi55LCBieiA9IGIuejtcblxuICAgICAgICB0aGlzLnggPSBheSAqIGJ6IC0gYXogKiBieTtcbiAgICAgICAgdGhpcy55ID0gYXogKiBieCAtIGF4ICogYno7XG4gICAgICAgIHRoaXMueiA9IGF4ICogYnkgLSBheSAqIGJ4O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07IiwiLyoqXG4gKiBIZWF2aWx5IGxpZnRlZCBmcm9tIFdlYlZSLVBvbHlmaWxsIHByb2plY3QgYnkgQm9yaXMgU211czogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLXBvbHlmaWxsXG4gKiBidXQgcmVmYWN0b3JlZCB0byB1c2UgZGlmZmVyZW50IGRhdGEgc291cmNlIHByb3ZpZGVkIG92ZXIgQkxFIGJ5IHRoZSBUSSBTZW5zb3IgVGFnXG4gKlxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cblxuLyoqXG4gKiBUT0RPOiBGaXggdXAgYWxsIFwibmV3IFRIUkVFXCIgaW5zdGFudGlhdGlvbnMgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5cbiAqL1xuaW1wb3J0IFNlbnNvclNhbXBsZSBmcm9tICcuL3NlbnNvci1zYW1wbGUuZXM2JztcbmltcG9ydCBRdWF0ZXJuaW9uIGZyb20gICcuLi9tYXRoL3F1YXRlcm5pb24uZXM2JztcbmltcG9ydCBWZWN0b3IzIGZyb20gICcuLi9tYXRoL3ZlY3RvcjMuZXM2JztcbmltcG9ydCBNYXRoVXRpbCBmcm9tICcuLi9tYXRoL3V0aWwuZXM2JztcblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhIHNpbXBsZSBjb21wbGVtZW50YXJ5IGZpbHRlciwgd2hpY2ggZnVzZXMgZ3lyb3Njb3BlIGFuZFxuICogYWNjZWxlcm9tZXRlciBkYXRhIGZyb20gdGhlICdkZXZpY2Vtb3Rpb24nIGV2ZW50LlxuICpcbiAqIEFjY2VsZXJvbWV0ZXIgZGF0YSBpcyB2ZXJ5IG5vaXN5LCBidXQgc3RhYmxlIG92ZXIgdGhlIGxvbmcgdGVybS5cbiAqIEd5cm9zY29wZSBkYXRhIGlzIHNtb290aCwgYnV0IHRlbmRzIHRvIGRyaWZ0IG92ZXIgdGhlIGxvbmcgdGVybS5cbiAqXG4gKiBUaGlzIGZ1c2lvbiBpcyByZWxhdGl2ZWx5IHNpbXBsZTpcbiAqIDEuIEdldCBvcmllbnRhdGlvbiBlc3RpbWF0ZXMgZnJvbSBhY2NlbGVyb21ldGVyIGJ5IGFwcGx5aW5nIGEgbG93LXBhc3MgZmlsdGVyXG4gKiAgICBvbiB0aGF0IGRhdGEuXG4gKiAyLiBHZXQgb3JpZW50YXRpb24gZXN0aW1hdGVzIGZyb20gZ3lyb3Njb3BlIGJ5IGludGVncmF0aW5nIG92ZXIgdGltZS5cbiAqIDMuIENvbWJpbmUgdGhlIHR3byBlc3RpbWF0ZXMsIHdlaWdoaW5nICgxKSBpbiB0aGUgbG9uZyB0ZXJtLCBidXQgKDIpIGZvciB0aGVcbiAqICAgIHNob3J0IHRlcm0uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGtGaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5rRmlsdGVyID0ga0ZpbHRlcjtcblxuICAgICAgICAvLyBSYXcgc2Vuc29yIG1lYXN1cmVtZW50cy5cbiAgICAgICAgdGhpcy5jdXJyZW50QWNjZWxNZWFzdXJlbWVudCA9IG5ldyBTZW5zb3JTYW1wbGUoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50R3lyb01lYXN1cmVtZW50ID0gbmV3IFNlbnNvclNhbXBsZSgpO1xuICAgICAgICB0aGlzLnByZXZpb3VzR3lyb01lYXN1cmVtZW50ID0gbmV3IFNlbnNvclNhbXBsZSgpO1xuXG4gICAgICAgIC8vIEN1cnJlbnQgZmlsdGVyIG9yaWVudGF0aW9uXG4gICAgICAgIHRoaXMuZmlsdGVyUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNGaWx0ZXJRID0gbmV3IFF1YXRlcm5pb24oKTtcblxuICAgICAgICAvLyBPcmllbnRhdGlvbiBiYXNlZCBvbiB0aGUgYWNjZWxlcm9tZXRlci5cbiAgICAgICAgdGhpcy5hY2NlbFEgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgb3JpZW50YXRpb24gaGFzIGJlZW4gaW5pdGlhbGl6ZWQuXG4gICAgICAgIHRoaXMuaXNPcmllbnRhdGlvbkluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgIC8vIFJ1bm5pbmcgZXN0aW1hdGUgb2YgZ3Jhdml0eSBiYXNlZCBvbiB0aGUgY3VycmVudCBvcmllbnRhdGlvbi5cbiAgICAgICAgdGhpcy5lc3RpbWF0ZWRHcmF2aXR5ID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgLy8gTWVhc3VyZWQgZ3Jhdml0eSBiYXNlZCBvbiBhY2NlbGVyb21ldGVyLlxuICAgICAgICB0aGlzLm1lYXN1cmVkR3Jhdml0eSA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgICAgLy8gRGVidWcgb25seSBxdWF0ZXJuaW9uIG9mIGd5cm8tYmFzZWQgb3JpZW50YXRpb24uXG4gICAgICAgIHRoaXMuZ3lyb0ludGVncmFsUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgfVxuXG5cbiAgICBhZGRBY2NlbE1lYXN1cmVtZW50KHZlY3RvciwgdGltZXN0YW1wUykge1xuICAgICAgICB0aGlzLmN1cnJlbnRBY2NlbE1lYXN1cmVtZW50LnNldCh2ZWN0b3IsIHRpbWVzdGFtcFMpO1xuICAgIH1cblxuICAgIGFkZEd5cm9NZWFzdXJlbWVudCh2ZWN0b3IsIHRpbWVzdGFtcFMpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R3lyb01lYXN1cmVtZW50LnNldCh2ZWN0b3IsIHRpbWVzdGFtcFMpO1xuXG4gICAgICAgIHZhciBkZWx0YVQgPSB0aW1lc3RhbXBTIC0gdGhpcy5wcmV2aW91c0d5cm9NZWFzdXJlbWVudC50aW1lc3RhbXBTO1xuICAgICAgICBpZiAoTWF0aFV0aWwuaXNUaW1lc3RhbXBEZWx0YVZhbGlkKGRlbHRhVCkpIHtcbiAgICAgICAgICAgIHRoaXMucnVuXygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0d5cm9NZWFzdXJlbWVudC5jb3B5KHRoaXMuY3VycmVudEd5cm9NZWFzdXJlbWVudCk7XG4gICAgfVxuXG4gICAgcnVuXygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3JpZW50YXRpb25Jbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5hY2NlbFEgPSB0aGlzLmFjY2VsVG9RdWF0ZXJuaW9uXyh0aGlzLmN1cnJlbnRBY2NlbE1lYXN1cmVtZW50LnNhbXBsZSk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRmlsdGVyUS5jb3B5KHRoaXMuYWNjZWxRKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcmllbnRhdGlvbkluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWx0YVQgPSB0aGlzLmN1cnJlbnRHeXJvTWVhc3VyZW1lbnQudGltZXN0YW1wUyAtXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzR3lyb01lYXN1cmVtZW50LnRpbWVzdGFtcFM7XG5cbiAgICAgICAgLy8gQ29udmVydCBneXJvIHJvdGF0aW9uIHZlY3RvciB0byBhIHF1YXRlcm5pb24gZGVsdGEuXG4gICAgICAgIHZhciBneXJvRGVsdGFRID0gdGhpcy5neXJvVG9RdWF0ZXJuaW9uRGVsdGFfKHRoaXMuY3VycmVudEd5cm9NZWFzdXJlbWVudC5zYW1wbGUsIGRlbHRhVCk7XG4gICAgICAgIHRoaXMuZ3lyb0ludGVncmFsUS5tdWx0aXBseShneXJvRGVsdGFRKTtcblxuICAgICAgICAvLyBmaWx0ZXJfMSA9IEsgKiAoZmlsdGVyXzAgKyBneXJvICogZFQpICsgKDEgLSBLKSAqIGFjY2VsLlxuICAgICAgICB0aGlzLmZpbHRlclEuY29weSh0aGlzLnByZXZpb3VzRmlsdGVyUSk7XG4gICAgICAgIHRoaXMuZmlsdGVyUS5tdWx0aXBseShneXJvRGVsdGFRKTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRlbHRhIGJldHdlZW4gdGhlIGN1cnJlbnQgZXN0aW1hdGVkIGdyYXZpdHkgYW5kIHRoZSByZWFsXG4gICAgICAgIC8vIGdyYXZpdHkgdmVjdG9yIGZyb20gYWNjZWxlcm9tZXRlci5cbiAgICAgICAgdmFyIGludkZpbHRlclEgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgICAgICBpbnZGaWx0ZXJRLmNvcHkodGhpcy5maWx0ZXJRKTtcbiAgICAgICAgaW52RmlsdGVyUS5pbnZlcnNlKCk7XG5cbiAgICAgICAgdGhpcy5lc3RpbWF0ZWRHcmF2aXR5LnNldCgwLCAwLCAtMSk7XG4gICAgICAgIHRoaXMuZXN0aW1hdGVkR3Jhdml0eS5hcHBseVF1YXRlcm5pb24oaW52RmlsdGVyUSk7XG4gICAgICAgIHRoaXMuZXN0aW1hdGVkR3Jhdml0eS5ub3JtYWxpemUoKTtcblxuICAgICAgICB0aGlzLm1lYXN1cmVkR3Jhdml0eS5jb3B5KHRoaXMuY3VycmVudEFjY2VsTWVhc3VyZW1lbnQuc2FtcGxlKTtcbiAgICAgICAgdGhpcy5tZWFzdXJlZEdyYXZpdHkubm9ybWFsaXplKCk7XG5cbiAgICAgICAgLy8gQ29tcGFyZSBlc3RpbWF0ZWQgZ3Jhdml0eSB3aXRoIG1lYXN1cmVkIGdyYXZpdHksIGdldCB0aGUgZGVsdGEgcXVhdGVybmlvblxuICAgICAgICAvLyBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgIHZhciBkZWx0YVEgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgICAgICBkZWx0YVEuc2V0RnJvbVVuaXRWZWN0b3JzKHRoaXMuZXN0aW1hdGVkR3Jhdml0eSwgdGhpcy5tZWFzdXJlZEdyYXZpdHkpO1xuICAgICAgICBkZWx0YVEuaW52ZXJzZSgpO1xuXG4gICAgICAgIC8qaWYgKERFQlVHKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsdGE6ICVkIGRlZywgR19lc3Q6ICglcywgJXMsICVzKSwgR19tZWFzOiAoJXMsICVzLCAlcyknLFxuICAgICAgICAgICAgICAgIE1hdGhVdGlsLnJhZFRvRGVnICogVXRpbC5nZXRRdWF0ZXJuaW9uQW5nbGUoZGVsdGFRKSxcbiAgICAgICAgICAgICAgICAodGhpcy5lc3RpbWF0ZWRHcmF2aXR5LngpLnRvRml4ZWQoMSksXG4gICAgICAgICAgICAgICAgKHRoaXMuZXN0aW1hdGVkR3Jhdml0eS55KS50b0ZpeGVkKDEpLFxuICAgICAgICAgICAgICAgICh0aGlzLmVzdGltYXRlZEdyYXZpdHkueikudG9GaXhlZCgxKSxcbiAgICAgICAgICAgICAgICAodGhpcy5tZWFzdXJlZEdyYXZpdHkueCkudG9GaXhlZCgxKSxcbiAgICAgICAgICAgICAgICAodGhpcy5tZWFzdXJlZEdyYXZpdHkueSkudG9GaXhlZCgxKSxcbiAgICAgICAgICAgICAgICAodGhpcy5tZWFzdXJlZEdyYXZpdHkueikudG9GaXhlZCgxKSk7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgU0xFUlAgdGFyZ2V0OiBjdXJyZW50IG9yaWVudGF0aW9uIHBsdXMgdGhlIG1lYXN1cmVkLWVzdGltYXRlZFxuICAgICAgICAvLyBxdWF0ZXJuaW9uIGRlbHRhLlxuICAgICAgICB2YXIgdGFyZ2V0USA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRhcmdldFEuY29weSh0aGlzLmZpbHRlclEpO1xuICAgICAgICB0YXJnZXRRLm11bHRpcGx5KGRlbHRhUSk7XG5cbiAgICAgICAgLy8gU0xFUlAgZmFjdG9yOiAwIGlzIHB1cmUgZ3lybywgMSBpcyBwdXJlIGFjY2VsLlxuICAgICAgICB0aGlzLmZpbHRlclEuc2xlcnAodGFyZ2V0USwgMSAtIHRoaXMua0ZpbHRlcik7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c0ZpbHRlclEuY29weSh0aGlzLmZpbHRlclEpO1xuICAgIH1cblxuICAgIGdldE9yaWVudGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJRO1xuICAgIH1cblxuICAgIGFjY2VsVG9RdWF0ZXJuaW9uXyhhY2NlbCkge1xuICAgICAgICB2YXIgbm9ybUFjY2VsID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgbm9ybUFjY2VsLmNvcHkoYWNjZWwpO1xuICAgICAgICBub3JtQWNjZWwubm9ybWFsaXplKCk7XG4gICAgICAgIHZhciBxdWF0ID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgcXVhdC5zZXRGcm9tVW5pdFZlY3RvcnMobmV3IFZlY3RvcjMoMCwgMCwgLTEpLCBub3JtQWNjZWwpO1xuICAgICAgICBxdWF0LmludmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIHF1YXQ7XG4gICAgfVxuXG4gICAgZ3lyb1RvUXVhdGVybmlvbkRlbHRhXyhneXJvLCBkdCkge1xuICAgICAgICAvLyBFeHRyYWN0IGF4aXMgYW5kIGFuZ2xlIGZyb20gdGhlIGd5cm9zY29wZSBkYXRhLlxuICAgICAgICB2YXIgcXVhdCA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIHZhciBheGlzID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgYXhpcy5jb3B5KGd5cm8pO1xuICAgICAgICBheGlzLm5vcm1hbGl6ZSgpO1xuICAgICAgICBxdWF0LnNldEZyb21BeGlzQW5nbGUoYXhpcywgZ3lyby5sZW5ndGgoKSAqIGR0KTtcbiAgICAgICAgcmV0dXJuIHF1YXQ7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBLX0ZJTFRFUjogMC45OCwgLy8gRGVmYXVsdDogMC45OC5cblxuICAgIC8vIEhvdyBmYXIgaW50byB0aGUgZnV0dXJlIHRvIHByZWRpY3QgZHVyaW5nIGZhc3QgbW90aW9uIChpbiBzZWNvbmRzKS5cbiAgICBQUkVESUNUSU9OX1RJTUVfUzogMC4wNDAsIC8vIERlZmF1bHQ6IDAuMDQwLlxuXG4gICAgWUFXX09OTFk6IHRydWVcbn0iLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBDb21wbGVtZW50YXJ5RmlsdGVyIGZyb20gJy4vY29tcGxlbWVudGFyeS1maWx0ZXIuZXM2JztcbmltcG9ydCBQb3NlUHJlZGljdG9yIGZyb20gJy4vcG9zZS1wcmVkaWN0b3IuZXM2Jztcbi8vaW1wb3J0IFRvdWNoUGFubmVyIGZyb20gJy4uL3RvdWNoLXBhbm5lci5lczYnO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gJy4uL21hdGgvdXRpbC5lczYnO1xuaW1wb3J0IFZlY3RvcjMgZnJvbSAnLi4vbWF0aC92ZWN0b3IzLmVzNic7XG5pbXBvcnQgUXVhdGVybmlvbiBmcm9tICcuLi9tYXRoL3F1YXRlcm5pb24uZXM2JztcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuZXM2JztcblxuLyoqXG4gKiBUaGUgcG9zZSBzZW5zb3IsIGltcGxlbWVudGVkIHVzaW5nIERldmljZU1vdGlvbiBBUElzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWNjZWxlcm9tZXRlciA9IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgIHRoaXMuZ3lyb3Njb3BlID0gbmV3IFZlY3RvcjMoKTtcblxuICAgICAgICB0aGlzLmZpbHRlciA9IG5ldyBDb21wbGVtZW50YXJ5RmlsdGVyKENvbmZpZy5LX0ZJTFRFUik7XG4gICAgICAgIHRoaXMucG9zZVByZWRpY3RvciA9IG5ldyBQb3NlUHJlZGljdG9yKENvbmZpZy5QUkVESUNUSU9OX1RJTUVfUyk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJUb1dvcmxkUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyVG9Xb3JsZFEuc2V0RnJvbUF4aXNBbmdsZShuZXcgVmVjdG9yMygxLCAwLCAwKSwgLU1hdGguUEkgLyAyKTtcblxuICAgICAgICB0aGlzLmludmVyc2VXb3JsZFRvU2NyZWVuUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRoaXMud29ybGRUb1NjcmVlblEgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUG9zZUFkanVzdFEgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUG9zZUFkanVzdFEuc2V0RnJvbUF4aXNBbmdsZShuZXcgVmVjdG9yMygwLCAwLCAxKSxcbiAgICAgICAgICAgIC13aW5kb3cub3JpZW50YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcblxuICAgICAgICAvLyBLZWVwIHRyYWNrIG9mIGEgcmVzZXQgdHJhbnNmb3JtIGZvciByZXNldFNlbnNvci5cbiAgICAgICAgdGhpcy5yZXNldFEgPSBuZXcgUXVhdGVybmlvbigpO1xuXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25PdXRfID0gbmV3IEZsb2F0MzJBcnJheSg0KTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgLy8gVGhpcyBQb3NlU2Vuc29yIGRvZXNuJ3Qgc3VwcG9ydCBwb3NpdGlvblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRPcmllbnRhdGlvbigpIHtcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIGZpbHRlciBzcGFjZSB0byB0aGUgdGhlIHNhbWUgc3lzdGVtIHVzZWQgYnkgdGhlXG4gICAgICAgIC8vIGRldmljZW9yaWVudGF0aW9uIGV2ZW50LlxuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSB0aGlzLmZpbHRlci5nZXRPcmllbnRhdGlvbigpO1xuXG4gICAgICAgIC8vIFByZWRpY3Qgb3JpZW50YXRpb24uXG4gICAgICAgIHRoaXMucHJlZGljdGVkUSA9IHRoaXMucG9zZVByZWRpY3Rvci5nZXRQcmVkaWN0aW9uKG9yaWVudGF0aW9uLCB0aGlzLmd5cm9zY29wZSwgdGhpcy5wcmV2aW91c1RpbWVzdGFtcFMpO1xuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gVEhSRUUgY29vcmRpbmF0ZSBzeXN0ZW06IC1aIGZvcndhcmQsIFkgdXAsIFggcmlnaHQuXG4gICAgICAgIHZhciBvdXQgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgICAgICBvdXQuY29weSh0aGlzLmZpbHRlclRvV29ybGRRKTtcbiAgICAgICAgb3V0Lm11bHRpcGx5KHRoaXMucmVzZXRRKTtcbiAgICAgICAgb3V0Lm11bHRpcGx5KHRoaXMucHJlZGljdGVkUSk7XG4gICAgICAgIG91dC5tdWx0aXBseSh0aGlzLndvcmxkVG9TY3JlZW5RKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25PdXRfWzBdID0gb3V0Lng7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25PdXRfWzFdID0gb3V0Lnk7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25PdXRfWzJdID0gb3V0Lno7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25PdXRfWzNdID0gb3V0Lnc7XG4gICAgICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uT3V0XztcbiAgICB9XG5cbiAgICByZXNldFBvc2UoKSB7XG4gICAgICAgIC8vIFJlZHVjZSB0byBpbnZlcnRlZCB5YXctb25seS5cbiAgICAgICAgdGhpcy5yZXNldFEuY29weSh0aGlzLmZpbHRlci5nZXRPcmllbnRhdGlvbigpKTtcbiAgICAgICAgdGhpcy5yZXNldFEueCA9IDA7XG4gICAgICAgIHRoaXMucmVzZXRRLnkgPSAwO1xuICAgICAgICB0aGlzLnJlc2V0US56ICo9IC0xO1xuICAgICAgICB0aGlzLnJlc2V0US5ub3JtYWxpemUoKTtcblxuICAgICAgICAvLyBUYWtlIGludG8gYWNjb3VudCBvcmlnaW5hbCBwb3NlLlxuICAgICAgICB0aGlzLnJlc2V0US5tdWx0aXBseSh0aGlzLm9yaWdpbmFsUG9zZUFkanVzdFEpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNlbnNvckRhdGEoZGF0YSkge1xuICAgICAgICB2YXIgYWNjR3Jhdml0eSA9IGRhdGEuc2Vuc29ycy5hY2NlbGVyb21ldGVyOyAvL3RvZG86IGdyYXZpdHkhXG4gICAgICAgIHZhciByb3RSYXRlID0gZGF0YS5zZW5zb3JzLmd5cm9zY29wZTtcbiAgICAgICAgdmFyIHRpbWVzdGFtcFMgPSBkYXRhLnNlbnNvcnMudGltZXN0YW1wIC8gMTAwMDtcblxuICAgICAgICB2YXIgZGVsdGFTID0gdGltZXN0YW1wUyAtIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTO1xuICAgICAgICBpZiAoZGVsdGFTIDw9IE1hdGhVdGlsLk1JTl9USU1FU1RFUCB8fCBkZWx0YVMgPiBNYXRoVXRpbC5NQVhfVElNRVNURVApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCB0aW1lc3RhbXBzIGRldGVjdGVkLiBUaW1lIHN0ZXAgYmV0d2VlbiBzdWNjZXNzaXZlICcgK1xuICAgICAgICAgICAgICAgICdneXJvc2NvcGUgc2Vuc29yIHNhbXBsZXMgaXMgdmVyeSBzbWFsbCBvciBub3QgbW9ub3RvbmljJywgZGVsdGFTKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTID0gdGltZXN0YW1wUztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWNjZWxlcm9tZXRlci5zZXQoLWFjY0dyYXZpdHkueCwgLWFjY0dyYXZpdHkueSwgLWFjY0dyYXZpdHkueik7XG4gICAgICAgIHRoaXMuZ3lyb3Njb3BlLnNldChyb3RSYXRlLmFscGhhLCByb3RSYXRlLmJldGEsIHJvdFJhdGUuZ2FtbWEpO1xuICAgICAgICB0aGlzLmd5cm9zY29wZS5tdWx0aXBseVNjYWxhcihNYXRoLlBJIC8gMTgwKTtcblxuICAgICAgICB0aGlzLmZpbHRlci5hZGRBY2NlbE1lYXN1cmVtZW50KHRoaXMuYWNjZWxlcm9tZXRlciwgdGltZXN0YW1wUyk7XG4gICAgICAgIHRoaXMuZmlsdGVyLmFkZEd5cm9NZWFzdXJlbWVudCh0aGlzLmd5cm9zY29wZSwgdGltZXN0YW1wUyk7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c1RpbWVzdGFtcFMgPSB0aW1lc3RhbXBTO1xuICAgIH1cbn1cbiIsIi8qKlxuICogSGVhdmlseSBsaWZ0ZWQgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBwcm9qZWN0IGJ5IEJvcmlzIFNtdXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1wb2x5ZmlsbFxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xuICpcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUXVhdGVybmlvbiBmcm9tICcuLi9tYXRoL3F1YXRlcm5pb24uZXM2JztcbmltcG9ydCBWZWN0b3IzIGZyb20gJy4uL21hdGgvdmVjdG9yMy5lczYnO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gJy4uL21hdGgvdXRpbC5lczYnO1xuXG4vKipcbiAqIEdpdmVuIGFuIG9yaWVudGF0aW9uIGFuZCB0aGUgZ3lyb3Njb3BlIGRhdGEsIHByZWRpY3RzIHRoZSBmdXR1cmUgb3JpZW50YXRpb25cbiAqIG9mIHRoZSBoZWFkLiBUaGlzIG1ha2VzIHJlbmRlcmluZyBhcHBlYXIgZmFzdGVyLlxuICpcbiAqIEFsc28gc2VlOiBodHRwOi8vbXNsLmNzLnVpdWMuZWR1L35sYXZhbGxlL3BhcGVycy9MYXZZZXJLYXRBbnQxNC5wZGZcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gcHJlZGljdGlvblRpbWVTIHRpbWUgZnJvbSBoZWFkIG1vdmVtZW50IHRvIHRoZSBhcHBlYXJhbmNlIG9mXG4gKiB0aGUgY29ycmVzcG9uZGluZyBpbWFnZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IocHJlZGljdGlvblRpbWVTKSB7XG4gICAgICAgIHRoaXMucHJlZGljdGlvblRpbWVTID0gcHJlZGljdGlvblRpbWVTO1xuXG4gICAgICAgIC8vIFRoZSBxdWF0ZXJuaW9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByZXZpb3VzIHN0YXRlLlxuICAgICAgICB0aGlzLnByZXZpb3VzUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIC8vIFByZXZpb3VzIHRpbWUgYSBwcmVkaWN0aW9uIG9jY3VycmVkLlxuICAgICAgICB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyA9IG51bGw7XG5cbiAgICAgICAgLy8gVGhlIGRlbHRhIHF1YXRlcm5pb24gdGhhdCBhZGp1c3RzIHRoZSBjdXJyZW50IHBvc2UuXG4gICAgICAgIHRoaXMuZGVsdGFRID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgLy8gVGhlIG91dHB1dCBxdWF0ZXJuaW9uLlxuICAgICAgICB0aGlzLm91dFEgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgIH1cblxuICAgIGdldFByZWRpY3Rpb24oY3VycmVudFEsIGd5cm8sIHRpbWVzdGFtcFMpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZpb3VzVGltZXN0YW1wUykge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1EuY29weShjdXJyZW50USk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgYXhpcyBhbmQgYW5nbGUgYmFzZWQgb24gZ3lyb3Njb3BlIHJvdGF0aW9uIHJhdGUgZGF0YS5cbiAgICAgICAgdmFyIGF4aXMgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBheGlzLmNvcHkoZ3lybyk7XG4gICAgICAgIGF4aXMubm9ybWFsaXplKCk7XG5cbiAgICAgICAgdmFyIGFuZ3VsYXJTcGVlZCA9IGd5cm8ubGVuZ3RoKCk7XG5cbiAgICAgICAgLy8gSWYgd2UncmUgcm90YXRpbmcgc2xvd2x5LCBkb24ndCBkbyBwcmVkaWN0aW9uLlxuICAgICAgICBpZiAoYW5ndWxhclNwZWVkIDwgTWF0aFV0aWwuZGVnVG9SYWQgKiAyMCkge1xuICAgICAgICAgICAgLy9pZiAoREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTW92aW5nIHNsb3dseSwgYXQgJXMgZGVnL3M6IG5vIHByZWRpY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAoTWF0aFV0aWwucmFkVG9EZWcgKiBhbmd1bGFyU3BlZWQpLnRvRml4ZWQoMSkpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICB0aGlzLm91dFEuY29weShjdXJyZW50USk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUS5jb3B5KGN1cnJlbnRRKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dFE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgdGhlIHByZWRpY3RlZCBhbmdsZSBiYXNlZCBvbiB0aGUgdGltZSBkZWx0YSBhbmQgbGF0ZW5jeS5cbiAgICAgICAgdmFyIGRlbHRhVCA9IHRpbWVzdGFtcFMgLSB0aGlzLnByZXZpb3VzVGltZXN0YW1wUztcbiAgICAgICAgdmFyIHByZWRpY3RBbmdsZSA9IGFuZ3VsYXJTcGVlZCAqIHRoaXMucHJlZGljdGlvblRpbWVTO1xuXG4gICAgICAgIHRoaXMuZGVsdGFRLnNldEZyb21BeGlzQW5nbGUoYXhpcywgcHJlZGljdEFuZ2xlKTtcbiAgICAgICAgdGhpcy5vdXRRLmNvcHkodGhpcy5wcmV2aW91c1EpO1xuICAgICAgICB0aGlzLm91dFEubXVsdGlwbHkodGhpcy5kZWx0YVEpO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNRLmNvcHkoY3VycmVudFEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm91dFE7XG4gICAgfVxufTsiLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHNhbXBsZSwgdGltZXN0YW1wUykge1xuICAgICAgICB0aGlzLnNldChzYW1wbGUsIHRpbWVzdGFtcFMpO1xuICAgIH1cblxuICAgIHNldChzYW1wbGUsIHRpbWVzdGFtcFMpIHtcbiAgICAgICAgdGhpcy5zYW1wbGUgPSBzYW1wbGU7XG4gICAgICAgIHRoaXMudGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XG4gICAgfVxuXG4gICAgY29weShzZW5zb3JTYW1wbGUpIHtcbiAgICAgICAgdGhpcy5zZXQoc2Vuc29yU2FtcGxlLnNhbXBsZSwgc2Vuc29yU2FtcGxlLnRpbWVzdGFtcFMpO1xuICAgIH07XG59IiwiaW1wb3J0IFRJU2Vuc29yVGFnIGZyb20gJy4vZGV2aWNlcy90aXNlbnNvcnRhZy5lczYnO1xuaW1wb3J0IENvbXBsZW1lbnRhcnlGaWx0ZXIgZnJvbSAnLi9zZW5zb3JmdXNpb24vY29tcGxlbWVudGFyeS1maWx0ZXIuZXM2JztcbmltcG9ydCBGdXNpb25Qb3NlU2Vuc29yIGZyb20gJy4vc2Vuc29yZnVzaW9uL2Z1c2lvbi1wb3NlLXNlbnNvci5lczYnO1xuaW1wb3J0IFBvc2VQcmVkaWN0b3IgZnJvbSAnLi9zZW5zb3JmdXNpb24vcG9zZS1wcmVkaWN0b3IuZXM2JztcblxuZXhwb3J0cy50aXNlbnNvcnRhZyA9IFRJU2Vuc29yVGFnO1xuZXhwb3J0cy5zZW5zb3JmdXNpb24gPSB7XG4gICAgY29tcGxlbWVudGFyeWZpbHRlcjogQ29tcGxlbWVudGFyeUZpbHRlcixcbiAgICBmdXNpb25wb3Nlc2Vuc29yOiBGdXNpb25Qb3NlU2Vuc29yLFxuICAgIHBvc2VwcmVkaWN0b3I6IFBvc2VQcmVkaWN0b3Jcbn07Il19
