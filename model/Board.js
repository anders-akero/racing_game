var Player = require('./Player');

class Board {
    constructor() {
        this.name = 'my racing track';
        this._players = [];
        this._isStarted = false;
    }

    set name(name) {
        this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }

    get name() {
        return this._name;
    }

    get players() {
        return this._players;
    }

    addPlayer(player) {
        if (!(player instanceof Player)) {
            throw new Error('player must be of instance Player');
        }
        this._players.push(player);
    }

    start() {
        console.log(this._isStarted);
        if(this._isStarted) {
            throw new Error('The game is already running');
        }
        this._isStarted = true;
        if(!this._players.length) {
            throw new Error('No players found');
        }
    }
}

module.exports = Board;

