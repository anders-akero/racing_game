const _ = require("lodash");
const Die = require('./Die');

class Player {
    constructor(data) {
        this.data = this._sanitize(data);
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
}

module.exports = Player;

