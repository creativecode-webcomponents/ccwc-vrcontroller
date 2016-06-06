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
import ComplementaryFilter from './complementary-filter.es6';
import PosePredictor from './pose-predictor.es6';
//import TouchPanner from '../touch-panner.es6';
import MathUtil from '../math/util.es6';
import Vector3 from '../math/vector3.es6';
import Quaternion from '../math/quaternion.es6';
import Config from './config.es6';

/**
 * The pose sensor, implemented using DeviceMotion APIs.
 */
export default class {
    constructor() {
        this.accelerometer = new Vector3();
        this.gyroscope = new Vector3();

        this.filter = new ComplementaryFilter(Config.K_FILTER);
        this.posePredictor = new PosePredictor(Config.PREDICTION_TIME_S);

        this.filterToWorldQ = new Quaternion();
        this.filterToWorldQ.setFromAxisAngle(new Vector3(1, 0, 0), -Math.PI / 2);

        this.inverseWorldToScreenQ = new Quaternion();
        this.worldToScreenQ = new Quaternion();
        this.originalPoseAdjustQ = new Quaternion();
        this.originalPoseAdjustQ.setFromAxisAngle(new Vector3(0, 0, 1),
            -window.orientation * Math.PI / 180);

        // Keep track of a reset transform for resetSensor.
        this.resetQ = new Quaternion();

        this.orientationOut_ = new Float32Array(4);
    }

    getPosition() {
        // This PoseSensor doesn't support position
        return null;
    }

    getOrientation() {
        // Convert from filter space to the the same system used by the
        // deviceorientation event.
        var orientation = this.filter.getOrientation();

        // Predict orientation.
        this.predictedQ = this.posePredictor.getPrediction(orientation, this.gyroscope, this.previousTimestampS);

        // Convert to THREE coordinate system: -Z forward, Y up, X right.
        var out = new Quaternion();
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

    resetPose() {
        // Reduce to inverted yaw-only.
        this.resetQ.copy(this.filter.getOrientation());
        this.resetQ.x = 0;
        this.resetQ.y = 0;
        this.resetQ.z *= -1;
        this.resetQ.normalize();

        // Take into account original pose.
        this.resetQ.multiply(this.originalPoseAdjustQ);
    }

    updateSensorData(data) {
        var accGravity = data.sensors.accelerometer; //todo: gravity!
        var rotRate = data.sensors.gyroscope;
        var timestampS = data.sensors.timestamp / 1000;

        var deltaS = timestampS - this.previousTimestampS;
        if (deltaS <= MathUtil.MIN_TIMESTEP || deltaS > MathUtil.MAX_TIMESTEP) {
            console.warn('Invalid timestamps detected. Time step between successive ' +
                'gyroscope sensor samples is very small or not monotonic', deltaS);
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
