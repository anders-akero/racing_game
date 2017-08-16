var _ = require("lodash");
var Die = require('./Die');
var sprintf = require("sprintf-js").sprintf;

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
        var structure = {name: 'Unknown'};
        return _.pick(_.defaults(data, structure), _.keys(structure));
    }

    changeName(name) {
        console.log(sprintf(
            'Player "%s" changed name to "%s"',
            this.data.name,
            name
        ));
        this.data.name = name;
        return true;
    }

    get(name) {
        if (typeof this.data[name] === 'undefined') {
            throw new ReferenceError('Unknown property: ' + name);
        }
        return this.data[name];
    }

    set(name, value) {
        if (typeof this.data[name] === 'undefined') {
            throw new ReferenceError('Unknown property: ' + name);
        }
        this.data[name] = value;
    }

    roll() {
        var die = new Die();
        die.roll();

        console.log(sprintf(
            '%1$s roll the die. Result is: %2$d',
            this.get('name'),
            die.getResult()
        ));
        return die.getResult();
    }
}

module.exports = Player;

