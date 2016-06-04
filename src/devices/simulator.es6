import Device from './device.es6';

export default class extends Device {
    constructor(sampledata) {
        super();
        this.data = sampledata;

        /**
         * index of current sensor snapshot in sim mode
         * @type {number}
         * @private
         */
        this._simIndex = 0;
    }

    /**
     * set data
     * @param sampledata
     */
    set data(sampledata) {
        this._data = sampledata;
        var intervalTTL = 0;
        for (var c = 0; c < this._data.length; c++) {
            intervalTTL += this._data[c].interval;
        }
        this._refreshInterval = intervalTTL / this._data.length;
    }

    /**
     * connect to sensortag
     * @param cb callback
     */
    connect(cb) {
        super.connect(cb);
        this.interval = setInterval( () => {
            this.update(this.getSimulatedSensors());
        }, this._refreshInterval);
    }

    /**
     * disconnect
     * @param cb
     */
    disconnect(cb) {
        super.disconnect(cb);
        clearInterval(this.interval);
    }

    /**
     * get simulated sensor data object
     */
    getSimulatedSensors() {
        var sim = {
            connected: true,
            device: {
                systemid: 'xxxxx',
                firmware: 'xxxxx',
                manufacturer: 'xxxxx'
            }
        };
        var accelerometer = this._data[this._simIndex].accelerometer;
        var gyroscope = this._data[this._simIndex].gyroscope;

        sim.sensors = {
            interval: this._data[this._simIndex].interval,
            timestamp: this._data[this._simIndex].timestamp,
            accelerometer: {
                x: accelerometer.x,
                y: accelerometer.y,
                z: accelerometer.z
            },
            gyroscope: {
                alpha: gyroscope.alpha,
                beta: gyroscope.beta,
                gamma: gyroscope.gamma
            }
        };
        this._simIndex ++;
        if (this._simIndex >= this._data.length) {
            this._simIndex = 0;
        }
        return sim;
    }

    /**
     * get simulated button data object
     */
    getSimulatedButtons() {
        var data = this.getSimulatedSensors();
        data.sensors.buttons = { active: true, enabled: true };
        data.sensors.buttons.left = Math.random() > .5;
        data.sensors.buttons.right = Math.random() > .5;
        return data;
    }
}