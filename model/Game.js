const Board = require('./Board');
const Player = require('./Player');

class Game {
    constructor() {
        this.name = 'my racing track';
        this._players = [];
        this._isStarted = false;
        this._board = new Board;
    }

    set name(name) {
        this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }

    get name() {
        return this._name;
    }

    get board() {
        return this._board;
    }

    get players() {
        return this._players;
    }

    addPlayer(player) {
        if (!(player instanceof Player)) {
            throw new Error('player must be of instance Player');
        }
        if (this._isStarted) {
            throw new Error('A new player can not be added to an active game');
        }
        this._players.push(player);
    }

    start() {
        if (this._isStarted) {
            throw new Error('The game is already running');
        }
        this._isStarted = true;
        if (!this._players.length) {
            throw new Error('No players found');
        }
    }
}

module.exports = Game;

