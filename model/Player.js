const _ = require("lodash");
const Die = require('./Die');
const sprintf = require("sprintf-js").sprintf;

class Player {
    constructor(data) {
        this.data = this._sanitize(data);
        console.log(sprintf(
            '%s joins the game',
            this.data.name
        ));
    }

    _sanitize(data) {
        data = data || {};
        const structure = {name: 'Unknown'};
        return _.pick(_.defaults(data, structure), _.keys(structure));
    }

    set name(name) {
        console.log(sprintf(
            'Player "%s" changed name to "%s"',
            this.data.name,
            name
        ));
        this.data.name = name;
    }

    get name() {
        return this.data.name;
    }

    roll() {
        const die = new Die();
        die.roll();

        console.log(sprintf(
            '%1$s roll the die. Result is: %2$d',
            this.data.name,
            die.getResult()
        ));
        return die.getResult();
    }
}

module.exports = Player;

