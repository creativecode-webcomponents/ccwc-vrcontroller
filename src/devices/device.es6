import SensorFusion from '../sensorfusion/fusion-pose-sensor.es6';

export default class {
    constructor() {
        /**
         * sensor fusion
         */
        this._sensorfusion = new SensorFusion();

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
    connect(cb) {
        this._eventListeners.push(cb);
        if (this._connected) { return; }
    }

    /**
     * disconnect
     * @param cb
     */
    disconnect(cb) {
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
    update(data) {
        this._sensorfusion.updateSensorData(data);
        data.sensors.orientation = this._sensorfusion.getOrientation();
        for (var c = 0; c < this._eventListeners.length; c++) {
            this._eventListeners[c]('motionupdate', data);
        }
    }
}