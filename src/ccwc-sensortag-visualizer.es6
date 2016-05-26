import TISensorTag from './devices/tisensortag.es6';

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
        this.sensors = [ 'buttons', 'accelerometer', 'magnetometer', 'gyroscope' ];

    };

    /**
     * on sensortag update
     * @param data
     */
    onSensorTagUpdate(eventtype, data) {
        for (var c = 0; c < this.sensors.length; c++) {
            if (data.sensors[this.sensors[c]]) {
                if (data.sensors[this.sensors[c]].active) {
                    this.dom.panels[this.sensors[c]].panel.classList.add('active');
                }

                if (data.sensors[this.sensors[c]].enabled) {
                    this.dom.panels[this.sensors[c]].panel.classList.add('enabled');
                }

                var multiplier;
                switch(this.sensors[c]) {
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

                if (this.sensors[c] === 'buttons') {
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
                    for (var d = 0; d < axis.length; d++ ) {
                        var val = parseFloat(data.sensors[this.sensors[c]][axis[d]]);
                        this.dom.panels[this.sensors[c]][axis[d]].bar.style.width = Math.abs(val * multiplier) + 'px';
                        if (val < 0) { this.dom.panels[this.sensors[c]][axis[d]].bar.style.WebkitTransform = 'translateX(' + [axis[d]] * multiplier + 'px)'; }
                        else { this.dom.panels[this.sensors[c]][axis[d]].bar.style.WebkitTransform = 'none'; }
                        this.dom.panels[this.sensors[c]][axis[d]].label.innerText = val.toFixed(4);
                    }
                }
            }
        }
    }

    /**
     * connect to sensortag
     */
    connect(tag) {
        if (!tag) {
            this.sensorTag = new TISensorTag();
        }
        this.sensorTag.connect( (eventtype, data) => this.onSensorTagUpdate(eventtype, data), this._simulate);
    }

    /**
     * parse attributes on element
     * @private
     */
    parseAttributes() {
        if (this.hasAttribute('simulate')) {
            this._simulate = true;
        } else {
            this._simulate = false;
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
        for (var c = 0; c < this.sensors.length; c++) {
            var paneltemplate;
            var panelclone;
            switch (this.sensors[c]) {
                case 'buttons':
                    paneltemplate = this.owner.querySelector('template#buttons');
                    panelclone = paneltemplate.content.cloneNode(true);
                    this.dom.panels[this.sensors[c]] = {};
                    this.dom.panels[this.sensors[c]].left = panelclone.querySelector('.left.button');
                    this.dom.panels[this.sensors[c]].right = panelclone.querySelector('.right.button');
                    break;

                default:
                    paneltemplate = this.owner.querySelector('template#sensor');
                    panelclone = paneltemplate.content.cloneNode(true);
                    this.dom.panels[this.sensors[c]] = {};
                    this.dom.panels[this.sensors[c]].x = {};
                    this.dom.panels[this.sensors[c]].x.label = panelclone.querySelector('.x.label .value');
                    this.dom.panels[this.sensors[c]].x.bar = panelclone.querySelector('.x.bar');
                    this.dom.panels[this.sensors[c]].y = {};
                    this.dom.panels[this.sensors[c]].y.label = panelclone.querySelector('.y.label .value');
                    this.dom.panels[this.sensors[c]].y.bar = panelclone.querySelector('.y.bar');
                    this.dom.panels[this.sensors[c]].z = {};
                    this.dom.panels[this.sensors[c]].z.label = panelclone.querySelector('.z.label .value');
                    this.dom.panels[this.sensors[c]].z.bar = panelclone.querySelector('.z.bar');
            }

            panelclone.querySelector('.header').innerText = this.sensors[c];
            this.dom.panels[this.sensors[c]].panel = panelclone.querySelector('.group');
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