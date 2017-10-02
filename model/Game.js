const Board = require('./Board');
const Player = require('./Player');

class Game {
    constructor() {
        this.name = 'my racing track';
        this._winningPlayer = null;
        this._players = [];
        this._isStarted = this._isActive = false;
        this._board = new Board;
        this._currentPlayerId = 0;
    }

    /**
     * @param {string} name
     */
    set name(name) {
        this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }

    /**
     * @returns {string}
     */
    get name() {
        return this._name;
    }

    /**
     * @returns {Board}
     */
    get board() {
        return this._board;
    }

    /**
     * @returns {Array}
     */
    get players() {
        return this._players;
    }

    /**
     * @param {Player} player
     */
    addPlayer(player) {
        this._assertPlayer(player);
        if (this._isStarted) {
            throw new Error('A new player can not be added to an active game');
        }
        this._players.push(player);
    }

    /**
     * Marking the game as started
     */
    start() {
        this._assertHasPlayers();
        if (this._isStarted) {
            throw new Error('The game is already running');
        }
        this._isStarted = this._isActive = true;
    }

    /**
     * @param {Player} player
     */
    roll(player) {
        this._assertStarted();
        this._assertActive();
        this._assertPlayer(player);
        let dieResult = player.roll();
        player.position = player.position + dieResult;
        this.board.playerMoved(player);

        if (player.position >= this.board.positionOfFinishLine) {
            this._winningPlayer = player;
            this._isActive = false;
        }
        // The turn goes to the next player
        this._currentPlayerId += 1;
        if (this._currentPlayerId === this._players.length) {
            this._currentPlayerId = 0;
        }
    }

    /**
     * @returns {Player}
     */
    get currentPlayer() {
        this._assertHasPlayers();
        return this._players[this._currentPlayerId];
    }

    /**
     * @returns {null|Player}
     */
    get winner() {
        return this._winningPlayer;
    }

    /**
     * @returns {boolean}
     */
    get isActive() {
        return this._isActive;
    }

    /**
     * @throws Error
     * @private
     */
    _assertStarted() {
        if (!this._isStarted) {
            throw new Error('The game must be started');
        }
    }

    /**
     * @throws Error
     * @private
     */
    _assertActive() {
        if (!this._isActive) {
            throw new Error('The game is not active');
        }
    }

    /**
     * @throws Error
     * @private
     */
    _assertHasPlayers() {
        if (!this._players.length) {
            throw new Error('No players found');
        }
    }

    /**
     * @param {Player} player
     * @private
     */
    _assertPlayer(player) {
        if (!(player instanceof Player)) {
            throw new Error('Must be of instance Player');
        }
    }
}

module.exports = Game;

