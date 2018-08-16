/**
 * Bluetooth Web API is supported via flag on Chrome mobile
 * Until Web API is fully supported on desktop OSX and Windows, we can use Node.js
 */

var SensorTag = require('sensortag');
var async = require('async');
var WebSocketServer = require('websocket').server;
var http = require('http');
var connections = [];
var recording = [];
var fs = require('fs');
var record = false;
var autoconnect = false;
var pollinginterval = 30;
var dataHasChanged = false;

process.argv.forEach(function (val, index, array) {
    if (val === 'record') {
        record = true;
    } else if (val === 'autoconnect') {
        autoconnect = true;
    }
});

var controllerData = {
    connected: false,
    device: {},
    sensors: {},
    errors: []
};

function connect() {
    setInterval(function() {
        if (dataHasChanged) {
            sendSensorTagUpdate();
            dataHasChanged = false;
        }
    }, pollinginterval);

    SensorTag.discover(function(sensorTag) {
        console.log('discovered: ' + sensorTag);

        sensorTag.on('disconnect', function() {
            console.log('disconnected');
            if (record) {
                fs.writeFileSync('ble-recording.json', JSON.stringify( recording, null, 2 ));
            }

            controllerData.connected = false;
            dataHasChanged = true;
        });

        async.series([
            function(callback) {
                sensorTag.connectAndSetUp(callback);
            },
            function(callback) {
                sensorTag.readSystemId(function(error, systemId) {
                    controllerData.device.systemid = systemId;
                    handleError(error);
                    callback();
                });
            },
            function(callback) {
                sensorTag.readFirmwareRevision(function(error, firmwareRevision) {
                    handleError(error);
                    controllerData.device.firmware = firmwareRevision;
                    callback();
                });
            },
            function(callback) {
                sensorTag.readManufacturerName(function(error, manufacturerName) {
                    handleError(error);
                    controllerData.device.manufacturer = manufacturerName;
                    callback();
                });
            },
            function(callback) {
                dataHasChanged = true;
                console.log('enable accelerometer');
                sensorTag.enableAccelerometer(callback);
            },
            function(callback) {
                controllerData.connected = true;
                controllerData.sensors.accelerometer = { active: true, enabled: true, x: 0, y: 0, z: 0 };
                dataHasChanged = true;
                setTimeout(callback, 200);
            },
            function(callback) {
                console.log('enable magnetometer');
                sensorTag.enableMagnetometer(callback);
            },
            function(callback) {
                controllerData.sensors.magnetometer = { active: true, enabled: true, alpha: 0, beta: 0, gamma: 0 };
                dataHasChanged = true;
                setTimeout(callback, 200);
            },
            function(callback) {
                sensorTag.enableGyroscope(callback);
            },
            function(callback) {
                console.log('enable gyroscope');
                controllerData.sensors.gyroscope = { active: true, enabled: true, alpha: 0, beta: 0, gamma: 0 };
                dataHasChanged = true;
                setTimeout(callback, 200);
            },
            function(callback) {
                controllerData.sensors.buttons = {};
                controllerData.sensors.buttons = { enabled: true };
                dataHasChanged = true;

                sensorTag.on('simpleKeyChange', function(left, right) {
                    controllerData.sensors.buttons = {};
                    controllerData.sensors.buttons.left = left;
                    controllerData.sensors.buttons.right = right;
                    dataHasChanged = true;
                });
                sensorTag.notifySimpleKey(function(error) {
                    console.log('notify keys');
                    controllerData.sensors.buttons.active = true;
                    handleError(error);
                    dataHasChanged = true;
                });

                sensorTag.on('accelerometerChange', function(x, y, z) {
                    controllerData.sensors.accelerometer.x = parseFloat(x.toFixed(4));
                    controllerData.sensors.accelerometer.y = parseFloat(z.toFixed(4));
                    controllerData.sensors.accelerometer.z = parseFloat(y.toFixed(4)); // swap y and z for holding in hand
                    dataHasChanged = true;
                });

                console.log('setAccelerometerPeriod');
                sensorTag.setAccelerometerPeriod(pollinginterval, function(error) {
                    handleError(error);
                    sensorTag.notifyAccelerometer(function(error) {
                        console.log('notify accelerometer');
                        handleError(error);
                        controllerData.sensors.gyroscope = { active: true, enabled: true, alpha: 0, beta: 0, gamma: 0 };
                        dataHasChanged = true;
                    });
                });

                sensorTag.on('magnetometerChange', function(x, y, z) {
                    controllerData.sensors.magnetometer.x = x.toFixed(1);
                    controllerData.sensors.magnetometer.y = y.toFixed(1);
                    controllerData.sensors.magnetometer.z = z.toFixed(1);
                    dataHasChanged = true;
                });

                sensorTag.setMagnetometerPeriod(pollinginterval, function(error) {
                    sensorTag.notifyMagnetometer(function(error) {
                        console.log('notify magenetometer');
                        handleError(error);
                        controllerData.sensors.magnetometer.active = true;
                        dataHasChanged = true;
                    });
                });

                sensorTag.on('gyroscopeChange', function(x, y, z) {
                    controllerData.sensors.gyroscope.alpha = parseFloat(z.toFixed(1));
                    controllerData.sensors.gyroscope.beta = parseFloat(x.toFixed(1));
                    controllerData.sensors.gyroscope.gamma = parseFloat(y.toFixed(1));
                    dataHasChanged = true;
                });

                sensorTag.setGyroscopePeriod(pollinginterval, function(error) {
                    sensorTag.notifyGyroscope(function(error) {
                        console.log('notify gyroscope');
                        handleError(error);
                        controllerData.sensors.gyroscope.active = true;
                        dataHasChanged = true;
                    });
                });
            }
        ]);
    });
}
function handleError(error) {
    if (!error) { return; }
    controllerData.errors.push(error);
    sendSensorTagUpdate();
}

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

wsServer = new WebSocketServer({httpServer: server});
wsServer.on('request', function(request) {
    var cnct = request.accept();
    connections.push( cnct );
    console.log((new Date()) + ' Connection accepted.');
    sendSensorTagUpdate();
    cnct.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer disconnected.');
    });

    cnct.on('message', function(msg) {
        if (msg.utf8Data === 'connect') {
            if (!controllerData.connected) {
                connect();
            } else {
                sendSensorTagUpdate();
            }
        }
    });
});

function sendSensorTagUpdate() {
    controllerData.sensors.interval = pollinginterval;
    var timestamp = Date.now();
    controllerData.sensors.timestamp = timestamp;

    if (controllerData.sensors.accelerometer && controllerData.sensors.gyroscope && record) {
        recording.push(JSON.parse(JSON.stringify(controllerData.sensors)));
    }
    for (var c in connections) {
        connections[c].sendUTF(JSON.stringify(controllerData));
    }
}

if (autoconnect) {
    connect();
}
