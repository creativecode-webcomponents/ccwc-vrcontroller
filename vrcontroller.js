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

},{}],2:[function(require,module,exports){
'use strict';

var _tisensortag = require('./devices/tisensortag.es6');

var _tisensortag2 = _interopRequireDefault(_tisensortag);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.tisensortag = _tisensortag2.default;

},{"./devices/tisensortag.es6":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGV2aWNlcy90aXNlbnNvcnRhZy5lczYiLCJzcmMvdnJjb250cm9sbGVyLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJDQ0k7c0JBQWM7OEJBS1Y7Ozs7OzthQUFBLEFBQUssU0FBTCxBQUFjLEFBTWQ7Ozs7OzthQUFBLEFBQUssYUFBTCxBQUFrQixBQU9sQjs7Ozs7OzthQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFLdkI7Ozs7O2FBQUEsQUFBSyxZQUFZLENBQUEsQUFBQyxRQUFsQixBQUFpQixBQUFTLEFBTzFCOzs7Ozs7O2FBQUEsQUFBSyxRQUFMLEFBQWEsQUFDYjthQUFBLEFBQUssTUFBTCxBQUFXLGNBQWMsS0FBQSxBQUFLLFVBQUwsQUFBZSxLQUFmLEFBQW9CLFNBQVMsS0FBQSxBQUFLLFVBQTNELEFBQXNELEFBQWUsQUFDckU7YUFBQSxBQUFLLE1BQUwsQUFBVyxrQkFBa0IsS0FBQSxBQUFLLFVBQUwsQUFBZSxLQUFmLEFBQW9CLFNBQVMsS0FBQSxBQUFLLFVBQS9ELEFBQTBELEFBQWUsQUFDekU7YUFBQSxBQUFLLE1BQUwsQUFBVywyQkFBMkIsS0FBQSxBQUFLLFVBQUwsQUFBZSxLQUFmLEFBQW9CLFNBQVMsS0FBQSxBQUFLLFVBQXhFLEFBQW1FLEFBQWUsQUFDbEY7YUFBQSxBQUFLLE1BQUwsQUFBVyxvQkFBb0IsS0FBQSxBQUFLLFVBQUwsQUFBZSxLQUFmLEFBQW9CLFNBQVMsS0FBQSxBQUFLLFVBQWpFLEFBQTRELEFBQWUsQUFFM0U7O2FBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQWdCLEtBQUEsQUFBSyxVQUFMLEFBQWUsS0FBZixBQUFvQixTQUFTLEtBQUEsQUFBSyxVQUE3RCxBQUF3RCxBQUFlLEFBQ3ZFO2FBQUEsQUFBSyxNQUFMLEFBQVcsb0JBQW9CLEtBQUEs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LEFBRWxDO0FBUGMsQUFDVjs7Z0NBTU8sQUFDQyxBQUNSO2lDQUZPLEFBRUUsQUFDVDsyQkFBRyxPQUFPLElBQUksS0FBQSxBQUFLLFdBSFosQUFHSixBQUEyQixBQUM5QjsyQkFBRyxPQUFPLElBQUksS0FBQSxBQUFLLFdBSlosQUFJSixBQUEyQixBQUM5QjsyQkFBRyxPQUFPLElBQUksS0FBQSxBQUFLLFdBM0IvQixBQUFPLEFBT00sQUFlTSxBQUtKLEFBQTJCLEFBSTdDO0FBVHNCLEFBQ1A7QUFoQkMsQUFDTDtBQVJELEFBQ0g7Ozs7Ozs7Ozs4Q0FtQ2MsQUFDbEI7Z0JBQUksT0FBTyxLQUFYLEFBQVcsQUFBSyxBQUNoQjtpQkFBQSxBQUFLLFFBQUwsQUFBYSxVQUFVLEVBQUUsUUFBRixBQUFVLE1BQU0sU0FBdkMsQUFBdUIsQUFBeUIsQUFDaEQ7aUJBQUEsQUFBSyxRQUFMLEFBQWEsUUFBYixBQUFxQixPQUFPLEtBQUEsQUFBSyxXQUFqQyxBQUE0QyxBQUM1QztpQkFBQSxBQUFLLFFBQUwsQUFBYSxRQUFiLEFBQXFCLFFBQVEsS0FBQSxBQUFLLFdBQWxDLEFBQTZDLEFBQzdDO21CQUFBLEFBQU8sQUFDVjs7Ozs7Ozs7OztpRCxBQU13QixRQUFRLEFBQzdCO2lCQUFBLEFBQUssWUFBWSxPQUFBLEFBQU8sS0FBeEIsQUFBaUIsQUFBWSxBQUNoQzs7Ozs7Ozs7OztzQyxBQU1hLEtBQUssQUFDZjtvQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNmOzs7Ozs7Ozs7Ozs7QUNyS0w7Ozs7Ozs7O0FBRUEsUUFBQSxBQUFRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNvY2tldCBjb25uZWN0aW9uXG4gICAgICAgICAqIEB0eXBlIHtudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiBhbHJlYWR5IGNvbm5lY3RlZFxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYmFzZSBVVUlEXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9iYXNlVVVJRCA9IFsnZjAwMCcsICctMDQ1MS00MDAwLWIwMDAtMDAwMDAwMDAwMDAwJ107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNlcnZpY2UgVVVJRFNcbiAgICAgICAgICogQHR5cGUge3t9fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fdXVpZCA9IHt9O1xuICAgICAgICB0aGlzLl91dWlkLnRlbXBlcmF0dXJlID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMCcgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZURhdGEgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTAxJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLnRlbXBlcmF0dXJlQ29uZmlndXJhdGlvbiA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMDInICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQudGVtcGVyYXR1cmVQZXJpb2QgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTAzJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuXG4gICAgICAgIHRoaXMuX3V1aWQuYWNjZWxlcm9tZXRlciA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMTAnICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQuYWNjZWxlcm9tZXRlckRhdGEgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTExJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXJDb25maWd1cmF0aW9uID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMicgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyUGVyaW9kID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMycgKyB0aGlzLl9iYXNlVVVJRFsxXTtcblxuICAgICAgICB0aGlzLl91dWlkLmh1bWlkaXR5ID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEyMCcgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC5odW1pZGl0eURhdGEgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTIxJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLmh1bWlkaXR5Q29uZmlndXJhdGlvbiA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMjInICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQuaHVtaWRpdHlQZXJpb2QgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTIzJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNvbm5lY3QgdG8gc2Vuc29ydGFnXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBzaW1sdWF0ZSBkYXRhXG4gICAgICovXG4gICAgY29ubmVjdChjYiwgc2ltdWxhdGUpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMucHVzaChjYik7XG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNpbXVsYXRlKSB7XG4gICAgICAgICAgICBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNiKCd1cGRhdGUnLCB0aGlzLmdldFNpbXVsYXRlZFNlbnNvcnMoKSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNiKCd1cGRhdGUnLCB0aGlzLmdldFNpbXVsYXRlZEJ1dHRvbnMoKSk7XG4gICAgICAgICAgICB9LCBNYXRoLnJhbmRvbSgpICogMTAwMDAgKyAyMDAwKTtcbiAgICAgICAgfSBlbHNlIGlmICghbmF2aWdhdG9yLmJsdWV0b290aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGJsdWV0b290aCBzdXBwb3J0IGluIHlvdXIgYnJvd3NlciwgdHJ5aW5nIHdlYnNvY2tldHMgZnJvbSBhIGxvY2FsIG5vZGUgc2VydmVyJyk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vbG9jYWxob3N0OjgwODAnKTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHsgY29uc29sZS5sb2coJ1dlYlNvY2tldCBFcnJvciAnICsgZXJyb3IpOyB9O1xuXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBtc2cgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLl9ldmVudExpc3RlbmVycy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tjXSgndXBkYXRlJywgbXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmJsdWV0b290aC5yZXF1ZXN0RGV2aWNlKFxuICAgICAgICAgICAgICAgIHsgICBmaWx0ZXJzOiBbIHtuYW1lOiAnU2Vuc29yVGFnJ30sIHsgc2VydmljZXM6IFsgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSwgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyLCB0aGlzLl91dWlkLmh1bWlkaXR5IF0gfV0sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsU2VydmljZXM6IFsgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSwgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyLCB0aGlzLl91dWlkLmh1bWlkaXR5IF0gfSlcbiAgICAgICAgICAgICAgICAudGhlbihkZXZpY2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR290IGRldmljZTonLCBkZXZpY2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWQ6JywgZGV2aWNlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbm5lY3RlZCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRldmljZS5jb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZCA9IGRldmljZS5nYXR0LmNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZSA9IGRldmljZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3RlZDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHNlcnZlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIFNlcnZpY2XigKYnLCBzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBzZXJ2ZXIuZ2V0UHJpbWFyeVNlcnZpY2UoJ2YwMDBhYTEwLTA0NTEtNDAwMC1iMDAwLTAwMDAwMDAwMDAwMCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMub25EZXZpY2VFcnJvcihlcnJvcikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHNpbXVsYXRlZCBzZW5zb3IgZGF0YSBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRTaW11bGF0ZWRTZW5zb3JzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29ubmVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgZGV2aWNlOiB7XG4gICAgICAgICAgICAgICAgc3lzdGVtaWQ6ICd4eHh4eCcsXG4gICAgICAgICAgICAgICAgZmlybXdhcmU6ICd4eHh4eCcsXG4gICAgICAgICAgICAgICAgbWFudWZhY3R1cmVyOiAneHh4eHgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Vuc29yczoge1xuICAgICAgICAgICAgICAgIGFjY2VsZXJvbWV0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB4OiBTdHJpbmcoMyAtIE1hdGgucmFuZG9tKCkgKiA2KSxcbiAgICAgICAgICAgICAgICAgICAgeTogU3RyaW5nKDMgLSBNYXRoLnJhbmRvbSgpICogNiksXG4gICAgICAgICAgICAgICAgICAgIHo6IFN0cmluZygzIC0gTWF0aC5yYW5kb20oKSAqIDYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYWduZXRvbWV0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB4OiBTdHJpbmcoMyAtIE1hdGgucmFuZG9tKCkgKiA2KSxcbiAgICAgICAgICAgICAgICAgICAgeTogU3RyaW5nKDMgLSBNYXRoLnJhbmRvbSgpICogNiksXG4gICAgICAgICAgICAgICAgICAgIHo6IFN0cmluZygzIC0gTWF0aC5yYW5kb20oKSAqIDYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBneXJvc2NvcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB4OiBTdHJpbmcoMyAtIE1hdGgucmFuZG9tKCkgKiA2KSxcbiAgICAgICAgICAgICAgICAgICAgeTogU3RyaW5nKDMgLSBNYXRoLnJhbmRvbSgpICogNiksXG4gICAgICAgICAgICAgICAgICAgIHo6IFN0cmluZygzIC0gTWF0aC5yYW5kb20oKSAqIDYpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHNpbXVsYXRlZCBidXR0b24gZGF0YSBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRTaW11bGF0ZWRCdXR0b25zKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0U2ltdWxhdGVkU2Vuc29ycygpO1xuICAgICAgICBkYXRhLnNlbnNvcnMuYnV0dG9ucyA9IHsgYWN0aXZlOiB0cnVlLCBlbmFibGVkOiB0cnVlIH07XG4gICAgICAgIGRhdGEuc2Vuc29ycy5idXR0b25zLmxlZnQgPSBNYXRoLnJhbmRvbSgpID4gLjU7XG4gICAgICAgIGRhdGEuc2Vuc29ycy5idXR0b25zLnJpZ2h0ID0gTWF0aC5yYW5kb20oKSA+IC41O1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvbiBkZXZpY2UgcmVxdWVzdGVkIHN1Y2Nlc3NcbiAgICAgKiBAcGFyYW0gZGV2aWNlXG4gICAgICovXG4gICAgb25EZXZpY2VSZXF1ZXN0ZWRTdWNjZXNzKGRldmljZSkge1xuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IGRldmljZS5nYXR0LmNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvbiBkZXZpY2UgcmVxdWVzdGVkIGVycm9yXG4gICAgICogQHBhcmFtIGRldmljZVxuICAgICAqL1xuICAgIG9uRGV2aWNlRXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufSIsImltcG9ydCBUSVNlbnNvclRhZyBmcm9tICcuL2RldmljZXMvdGlzZW5zb3J0YWcuZXM2JztcblxuZXhwb3J0cy50aXNlbnNvcnRhZyA9IFRJU2Vuc29yVGFnOyJdfQ==
