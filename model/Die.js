// Constructor
function Die(sizes = 6) {
    // always initialize all instance properties
    this.sizes = sizes;
}

// class methods
Die.prototype.role = function () {
    return Math.floor(Math.random() * this.sizes) + 1;
};

// export the class
module.exports = Die;