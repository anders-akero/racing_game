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
        this._assertPlayer(player);
        if (this._isStarted) {
            throw new Error('A new player can not be added to an active game');
        }
        this._players.push(player);
    }

    start() {
        this._assertHasPlayers();
        if (this._isStarted) {
            throw new Error('The game is already running');
        }
        this._isStarted = true;
    }

    roll(player) {
        this._assertStarted();
        this._assertPlayer(player);
        let dieResult = player.roll();
        player.position = player.position + dieResult;
    }

    _assertStarted() {
        if (!this._isStarted) {
            throw new Error('The game must be started');
        }
    }
    _assertHasPlayers() {
        if (!this._players.length) {
            throw new Error('No players found');
        }
    }

    /**
     * @param Player player
     * @private
     */
    _assertPlayer(player){
        if (!(player instanceof Player)) {
            throw new Error('Must be of instance Player');
        }
    }
}

module.exports = Game;

