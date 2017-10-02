const Player = require('./Player');

class Board {
    constructor() {
        this._name = 'Racing game';
    }

    /**
     * @returns {string}
     */
    get name() {
        return this._name;
    }

    /**
     * @returns {number}
     */
    get positionOfFinishLine() {
        return 50;
    }

    /**
     * @param {Player} player
     */
    playerMoved(player) {
        this._assertPlayer(player);
        switch (player.position) {
            case 10:
                player.position += 25;
                break;
            case 20:
                player.position -= 15;
                break;
            case 30:
                player.position -= 12;
                break;
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

module.exports = Board;

