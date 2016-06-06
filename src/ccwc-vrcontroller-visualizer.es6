import TISensorTag from './devices/tisensortag.es6';
import Simulator from './devices/simulator.es6';
import Laptop from './devices/laptop.es6';

/**
 * Sensor tag visualizer component
 */
export default class extends HTMLElement {
    /**
     * initialize default class properties
     * @private
     */
    setProperties() {
        /**
         * sensor
         * @type {Device}
         */
        this._sensor = null;

        /**
         * sensor type
         * @type {String}
         */
        this._sensorType = 'none';

        /**
         * sample data for simulator
         * @type {String}
         */
        this._sampleData = '';

        /**
         * 3D cursor (cube thingy) to control with sensor input
         * @type {null}
         */
        this.cursor = null;

        /**
         * three renderer
         * @type {null}
         */
        this.renderer = null;

        /**
         * three scene
         * @type {null}
         */
        this.scene = null;

        /**
         * three camera
         * @type {null}
         */
        this.camera = null;
    }

    /**
     * on sensor update
     * @param data
     */
    onSensorUpdate(eventtype, data) {
        if (data.sensors.orientation) {
            this.axes.quaternion.fromArray(data.sensors.orientation);
            this.cursor.quaternion.fromArray(data.sensors.orientation);
        }
    }

    /**
     * connect to sensortag
     */
    connect(sensor) {
        if (sensor) {
            this._sensor = sensor;
        } else {
            switch (this._sensorType) {
                case 'simulator':
                    if (this._sampleData) {
                        var xobj = new XMLHttpRequest();
                        xobj.open('GET', this._sampleData, true);
                        xobj.onreadystatechange = () => {
                            if (xobj.readyState == 4 && xobj.status == '200') {
                                this._sensor = new Simulator(JSON.parse(xobj.responseText).samples);
                                this._sensor.connect( (eventtype, data) => this.onSensorUpdate(eventtype, data));
                            }
                        };
                        xobj.send(null);
                    } else {
                        throw new Error('Simulator requires using sampledata parameter to pass in a URI with samples');
                    }
                    break;

                case 'laptop':
                    this._sensor = new Laptop();
                    this._sensor.connect( (eventtype, data) => this.onSensorUpdate(eventtype, data));
                    break;

                case 'tisensortag':
                    this._sensor = new TISensorTag();
                    this._sensor.connect( (eventtype, data) => this.onSensorUpdate(eventtype, data));
                    break;

                case 'webvr':
                    navigator.getVRDisplays().then( displays => {
                        this.display = displays[0];
                    });
                    break;
            }
        }
    }

    /**
     * parse attributes on element
     * @private
     */
    parseAttributes() {
        if (this.hasAttribute('sensor')) {
            this._sensorType = this.getAttribute('sensor');
        }

        if (this.hasAttribute('sampledata')) {
            this._sampleData = this.getAttribute('sampledata');
        }
    };

    /**
     * element created callback
     * @private
     */
    createdCallback() {
        this.setProperties();
        this.parseAttributes();
    };

    /**
     * element attached callback
     * @private
     */
    attachedCallback() {
        let template = this.owner.querySelector('template');
        let clone = template.content.cloneNode(true);
        this.root = this.createShadowRoot();
        this.root.appendChild(clone);

        this.dom = {};
        this.dom.scene = this.root.querySelector('.threecontainer');
        setTimeout( () => {
            this.init3DScene();
            this.render();
        }, 100);
    }

    /**
     * render
     */
    render() {
        this.renderer.render( this.scene, this.camera );
        window.requestAnimationFrame(e => this.render());
    }

    /**
     * initialize 3D scene
     */
    init3DScene() {
        this.scene = new THREE.Scene();
        var SCREEN_WIDTH = this.offsetWidth, SCREEN_HEIGHT = this.offsetHeight;
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
        this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(0,150,400);
        this.camera.lookAt(this.scene.position);
        this.renderer = new THREE.WebGLRenderer( {antialias:true} );
        this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.dom.scene.appendChild( this.renderer.domElement );

        var light = new THREE.PointLight(0xffffff);
        light.position.set(100,250,100);
        this.scene.add(light);

        // SKYBOX
        var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
        var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
        var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
        this.scene.add(skyBox);

        var geom = new THREE.CubeGeometry( 30, 32, 16 );
        var material = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
        this.cursor = new THREE.Mesh( geom, material );
        this.cursor.position.set(40,40,40);
        this.scene.add(this.cursor);

        this.axes = new THREE.AxisHelper(50);
        this.axes.position.set(this.cursor.position.x, this.cursor.position.y, this.cursor.position.z);
        this.scene.add(this.axes);

        var gridXZ = new THREE.GridHelper(200, 10);
        this.scene.add(gridXZ);
    }

    /**
     * element detached callback
     * @private
     */
    detachedCallback() {};


    /**
     * attributeChangedCallback
     * @private
     * @param {String} attr attribute changed
     * @param {*} oldVal old value
     * @param {*} newVal new value
     */
    attributeChangedCallback(attr, oldVal, newVal) {};
}