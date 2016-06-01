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

export default class {
    constructor(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }

    set( x, y, z ) {
        this.x = x;
        this.y = y;
        this.z = z;

        return this;
    }

    copy( v ) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;

        return this;
    }

    length() {
        return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
    }

    normalize() {
        var scalar = this.length();

        if ( scalar !== 0 ) {
            var invScalar = 1 / scalar;

            this.multiplyScalar(invScalar);
        } else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }

        return this;
    }

    multiplyScalar( scalar ) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
    }

    applyQuaternion( q ) {
        var x = this.x;
        var y = this.y;
        var z = this.z;

        var qx = q.x;
        var qy = q.y;
        var qz = q.z;
        var qw = q.w;

        // calculate quat * vector
        var ix =  qw * x + qy * z - qz * y;
        var iy =  qw * y + qz * x - qx * z;
        var iz =  qw * z + qx * y - qy * x;
        var iw = - qx * x - qy * y - qz * z;

        // calculate result * inverse quat
        this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
        this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
        this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

        return this;
    }

    dot( v ) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    crossVectors( a, b ) {
        var ax = a.x, ay = a.y, az = a.z;
        var bx = b.x, by = b.y, bz = b.z;

        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;

        return this;
    }
};