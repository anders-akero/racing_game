const _ = require("lodash");
const Die = require('./Die');

class Player {
    /**
     * @param {object} data
     */
    constructor(data = {}) {
        this.data = this._sanitize(data);
        this._position = 0;
    }

    /**
     * @param {object} data
     * @returns {object}
     * @private
     */
    _sanitize(data) {
        const structure = {name: 'Unknown'};
        return _.pick(_.defaults(data, structure), _.keys(structure));
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this.data.name = name;
    }

    /**
     * @returns {string}
     */
    get name() {
        return this.data.name;
    }

    /**
     * @returns {int}
     */
    roll() {
        const die = new Die();
        die.roll();
        return die.result;
    }

    /**
     * @param {int} newPosition
     */
    set position(newPosition) {
        this._assertInteger(newPosition);
        this._position = newPosition;
    }

    /**
     * @returns {int}
     */
    get position() {
        return this._position;
    }

    /**
     * Assert that value is of type integer
     * @param {int} value
     * @private
     */
    _assertInteger(value) {
        if (parseInt(value) !== value) {
            throw new Error('Must be integer');
        }
    }
}

module.exports = Player;

