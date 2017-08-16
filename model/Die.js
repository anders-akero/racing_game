class Die {
    constructor(sizes = 6) {
        // always initialize all instance properties
        this.sizes = sizes;
    }

    // class methods
    roll() {
        this.result = (Math.floor(Math.random() * this.sizes) + 1);
        return this.result;
    }

    getResult() {
        return this.result;
    }
}

// export the class
module.exports = Die;

