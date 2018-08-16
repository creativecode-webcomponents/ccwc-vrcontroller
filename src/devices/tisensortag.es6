import Device from './device.es6';

export default class extends Device {
    constructor() {
        super();
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
     */
    connect(cb) {
        super.connect(cb);
        if (this._connected) { return; }
        this._connected = true;

        if (!navigator.bluetooth) {
            console.log('no bluetooth support in your browser, trying websockets from a local node server');
            this.socket = new WebSocket('ws://localhost:8080');
            this.socket.onerror = function (error) { console.log('WebSocket Error ' + error); };

            this.socket.onmessage = (e) => {
                var data = JSON.parse(e.data);
                if (data.sensors.accelerometer.active && data.sensors.gyroscope.active) {
                    data.sensors = this.normalizeSensors(data.sensors);
                    this.update(data);
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
     * tweak sensor data to align with other sensors better (like from a laptop)
     * @param sensordata
     */
    normalizeSensors(sensordata) {
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