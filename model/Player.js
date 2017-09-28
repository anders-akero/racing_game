const _ = require("lodash");
const Die = require('./Die');

class Player {
    constructor(data) {
        this.data = this._sanitize(data);
        this._position = 0;
    }

    _sanitize(data) {
        data = data || {};
        const structure = {name: 'Unknown'};
        return _.pick(_.defaults(data, structure), _.keys(structure));
    }

    set name(name) {
        this.data.name = name;
    }

    get name() {
        return this.data.name;
    }

    roll() {
        const die = new Die();
        die.roll();
        return die.getResult();
    }

    set position(newPosition) {
        this._assertInteger(newPosition);
        this._position = newPosition;
    }

    get position() {
        return this._position;
    }

    /**
     * Assert that value is of type integer
     * @param {int} value
     * @private
     */
    _assertInteger(value) {
        if (!(!isNaN(value) && (function (x) {
                return (x | 0) === x;
            })(parseFloat(value)))) {
            throw new Error('Must be integer');
        }
    }
}

module.exports = Player;

