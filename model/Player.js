var _ = require("lodash");
var Die = require('./Die');
var sprintf = require("sprintf-js").sprintf;

var Player = function (data) {
    this.data = this.sanitize(data);
    console.log(sprintf(
        '%s joins the game',
        this.data.name
    ));
}

Player.prototype.data = {};

Player.prototype.sanitize = function (data) {
    data = data || {};
    structure = {name: 'Unknown'};
    return _.pick(_.defaults(data, structure), _.keys(structure));
}

Player.prototype.changeName = function (name) {
    console.log(sprintf(
        'Player "%s" changed name to "%s"',
        this.data.name,
        name
    ));
    this.data.name = name;
}

Player.prototype.get = function (name) {
    return this.data[name];
}

Player.prototype.set = function (name, value) {
    this.data[name] = value;
}

Player.prototype.getName = function () {
    return this.data.name;
};

Player.prototype.roll = function () {
    var die = new Die();
    die.roll();

    console.log(sprintf(
        '%1$s roll the die. Result is: %2$d',
        this.getName(),
        die.getResult()
    ));
}

module.exports = Player;

