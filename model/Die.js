// Constructor
function Die(sizes = 6) {
    // always initialize all instance properties
    this.sizes = sizes;
}

// class methods
Die.prototype.roll = function () {
    this.result = Math.floor(Math.random() * this.sizes) + 1;
};

Die.prototype.getResult = function() {
    return this.result;
}

// export the class
module.exports = Die;

