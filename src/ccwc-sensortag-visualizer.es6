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
         * sensor tag BLE
         * @type {$ES6_ANONYMOUS_CLASS$}
         */
        this.sensorTag = null;

        /**
         * use fake (simlated) data
         * @type {boolean}
         * @private
         */
        this._simulate = false;

        /**
         * device info
         * @type {boolean}
         * @private
         */
        this._deviceInfo = {};

        /**
         * list of props with XYZ characteristics
         * @type {string[]}
         */
        this._sensors = [];

    };

    /**
     * on sensor update
     * @param data
     */
    onSensorUpdate(eventtype, data) {
        for (var c = 0; c < this._sensors.length; c++) {
            if (data.sensors[this._sensors[c]]) {
                if (data.sensors[this._sensors[c]].active) {
                    this.dom.panels[this._sensors[c]].panel.classList.add('active');
                }

                if (data.sensors[this._sensors[c]].enabled) {
                    this.dom.panels[this._sensors[c]].panel.classList.add('enabled');
                }

                var multiplier;
                switch(this._sensors[c]) {
                    case 'accelerometer':
                        multiplier = 10;
                        break;
                    case 'magnetometer':
                        multiplier = 1;
                        break;
                    case 'gyroscope':
                        multiplier = .5;
                        break;
                }

                if (this._sensors[c] === 'buttons') {
                    if (data.sensors.buttons.left) {
                        this.dom.panels.buttons.left.classList.add('on');
                    } else {
                        this.dom.panels.buttons.left.classList.remove('on');
                    }

                    if (data.sensors.buttons.right) {
                        this.dom.panels.buttons.right.classList.add('on');
                    } else {
                        this.dom.panels.buttons.right.classList.remove('on');
                    }
                } else {
                    var axis = ['x', 'y', 'z'];
                    if (this._sensors[c] === 'gyroscope') {
                        axis = ['alpha', 'beta', 'gamma'];
                    }
                    for (var d = 0; d < axis.length; d++ ) {
                        var val = parseFloat(data.sensors[this._sensors[c]][axis[d]]);
                        this.dom.panels[this._sensors[c]][axis[d]].bar.style.width = Math.abs(val * multiplier) + 'px';
                        if (val < 0) { this.dom.panels[this._sensors[c]][axis[d]].bar.style.WebkitTransform = 'translateX(' + [axis[d]] * multiplier + 'px)'; }
                        else { this.dom.panels[this._sensors[c]][axis[d]].bar.style.WebkitTransform = 'none'; }
                        this.dom.panels[this._sensors[c]][axis[d]].label.innerText = val.toFixed(4);
                    }
                }
            }
        }
    }


    /**
     * connect to sensortag
     */
    connect(sensor) {
        if (sensor) {
            this._sensor = sensor;
            this._sensor.connect((eventtype, data) => this.onSensorUpdate(eventtype, data));
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

        if (this.hasAttribute('sensors')) {
            this._sensors = this.getAttribute('sensors').split(',');
        } else {
            this._sensors = [ 'buttons', 'accelerometer', 'magnetometer', 'gyroscope' ];
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
        let template = this.owner.querySelector('template#style');
        let clone = template.content.cloneNode(true);
        this.root = this.createShadowRoot();
        this.root.appendChild(clone);

        this.dom = { panels: {} };
        for (var c = 0; c < this._sensors.length; c++) {
            var paneltemplate;
            var panelclone;
            switch (this._sensors[c]) {
                case 'buttons':
                    paneltemplate = this.owner.querySelector('template#buttons');
                    panelclone = paneltemplate.content.cloneNode(true);
                    this.dom.panels[this._sensors[c]] = {};
                    this.dom.panels[this._sensors[c]].left = panelclone.querySelector('.left.button');
                    this.dom.panels[this._sensors[c]].right = panelclone.querySelector('.right.button');
                    break;

                default:
                    paneltemplate = this.owner.querySelector('template#sensor');
                    panelclone = paneltemplate.content.cloneNode(true);
                    var axis = ['x', 'y', 'z'];
                    if (this._sensors[c] === 'gyroscope') {
                        axis = ['alpha', 'beta', 'gamma'];
                    }
                    this.dom.panels[this._sensors[c]] = {};
                    this.dom.panels[this._sensors[c]][axis[0]] = {};
                    this.dom.panels[this._sensors[c]][axis[0]].label = panelclone.querySelector('.x.label .value');
                    this.dom.panels[this._sensors[c]][axis[0]].bar = panelclone.querySelector('.x.bar');
                    this.dom.panels[this._sensors[c]][axis[1]] = {};
                    this.dom.panels[this._sensors[c]][axis[1]].label = panelclone.querySelector('.y.label .value');
                    this.dom.panels[this._sensors[c]][axis[1]].bar = panelclone.querySelector('.y.bar');
                    this.dom.panels[this._sensors[c]][axis[2]]= {};
                    this.dom.panels[this._sensors[c]][axis[2]].label = panelclone.querySelector('.z.label .value');
                    this.dom.panels[this._sensors[c]][axis[2]].bar = panelclone.querySelector('.z.bar');
            }

            panelclone.querySelector('.header').innerText = this._sensors[c];
            this.dom.panels[this._sensors[c]].panel = panelclone.querySelector('.group');
            this.root.appendChild(panelclone);
        }
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