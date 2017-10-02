class Die {
    /**
     * @param {int} sizes
     */
    constructor(sizes = 6) {
        this.sizes = sizes;
    }

    /**
     * @returns {int}
     */
    roll() {
        this._result = (Math.floor(Math.random() * this.sizes) + 1);
        return this._result;
    }

    /**
     * @returns {int}
     */
    get result() {
        return this._result;
    }
}

module.exports = Die;

