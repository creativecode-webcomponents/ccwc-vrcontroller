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
export default {
    degToRad: Math.PI / 180,
    radToDeg: 180 / Math.PI,
    MIN_TIMESTEP: 0.001,
    MAX_TIMESTEP: 1,

    // Helper method to validate the time steps of sensor timestamps.
    isTimestampDeltaValid: function(timestampDeltaS) {
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
}