import TISensorTag from './devices/tisensortag.es6';
import ComplementaryFilter from './sensorfusion/complementary-filter.es6';
import FusionPoseSensor from './sensorfusion/fusion-pose-sensor.es6';
import PosePredictor from './sensorfusion/pose-predictor.es6';
import SensorSample from './sensorfusion/sensor-sample.es6';

exports.tisensortag = TISensorTag;
exports.sensorfusion = {
    complementaryfilter: ComplementaryFilter,
    fusionposesensor: FusionPoseSensor,
    posepredictor: PosePredictor
};