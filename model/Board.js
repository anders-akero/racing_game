class Board {
    constructor() {
        this._name = 'Racing game';
    }

    get name() {
        return this._name;
    }

    get positionOfFinishLine() {
        return 50;
    }
}

module.exports = Board;

