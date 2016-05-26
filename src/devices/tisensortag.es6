export default class {
    constructor() {
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
    connect(cb, simulate) {
        this._eventListeners.push(cb);
        if (this._connected) { return; }
        this.connected = true;
        if (simulate) {
            setInterval( () => {
                cb('update', this.getSimulatedSensors());
            }, 200);

            setInterval( () => {
                cb('update', this.getSimulatedButtons());
            }, Math.random() * 10000 + 2000);
        } else if (!navigator.bluetooth) {
            console.log('no bluetooth support in your browser, trying websockets from a local node server');
            this.socket = new WebSocket('ws://localhost:8080');
            this.socket.onerror = function (error) { console.log('WebSocket Error ' + error); };

            this.socket.onmessage = (e) => {
                var msg = JSON.parse(e.data);
                for (var c = 0; c < this._eventListeners.length; c++) {
                    this._eventListeners[c]('update', msg);
                }
            };

            this.socket.onopen = (e) => {
                this.socket.send('connect');
            }

        } else {
            navigator.bluetooth.requestDevice(
                {   filters: [ {name: 'SensorTag'}, { services: [ this._uuid.temperature, this._uuid.accelerometer, this._uuid.humidity ] }],
                    optionalServices: [ this._uuid.temperature, this._uuid.accelerometer, this._uuid.humidity ] })
                .then(device => {
                    console.log('Got device:', device);
                    console.log('id:', device.id);
                    var connected = Promise.resolve();
                    if (!device.connected) {
                        connected = device.gatt.connect();
                    }
                    this.device = device;
                    return connected;
                })
                .then(server => {
                    console.log('Getting Service…', server);
                    //return server.getPrimaryService('f000aa10-0451-4000-b000-000000000000');
                })
                .catch(error => this.onDeviceError(error));
        }
    }

    /**
     * get simulated sensor data object
     */
    getSimulatedSensors() {
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
        }
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

    /**
     * on device requested success
     * @param device
     */
    onDeviceRequestedSuccess(device) {
        this.connected = device.gatt.connect();
    }

    /**
     * on device requested error
     * @param device
     */
    onDeviceError(err) {
        console.log(err);
    }
}