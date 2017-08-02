class Board {
    constructor() {
        this.name = 'my racing track';
    }

    set name(name) {
        this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }

    get name () {
        return this._name;
    }
}

module.exports = Board;

