import Device from './device.es6';

export default class extends Device {
    constructor() {
        super();
    }

    /**
     * connect to sensortag
     * @param cb callback
     */
    connect(cb) {
        super.connect(cb);
        window.addEventListener('devicemotion', event => this.onMotionEvent(event) );
    }

    /**
     * disconnect
     * @param cb
     */
    disconnect(cb) {
        super.disconnect(cb);
        if (this._eventListeners.length === 0) {
            window.removeEventListener('devicemotion', event => this.onMotionEvent(event));
        }
    }

    /**
     * on motion event
     * @param event
     */
    onMotionEvent(event) {
        var data = {
            sensors: {
                interval: event.interval,
                timestamp: event.timeStamp,
                accelerometer: {
                    x: event.accelerationIncludingGravity.x,
                    y: event.accelerationIncludingGravity.y,
                    z: event.accelerationIncludingGravity.z
                },
                gyroscope: {
                    alpha: event.rotationRate.alpha,
                    beta: event.rotationRate.beta,
                    gamma: event.rotationRate.gamma
                }
            }
        };
        this.update(data);
    }
}