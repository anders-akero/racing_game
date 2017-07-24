var _ = require("lodash");
var Die = require('./Die');
var sprintf = require("sprintf-js").sprintf;

var Player = function (data) {
    this.data = this.sanitize(data);
    console.log(sprintf(
        '%s joins the game',
        this.data.name
    ));
};

Player.prototype.data = {};

Player.prototype.sanitize = function (data) {
    data = data || {};
    structure = {name: 'Unknown'};
    return _.pick(_.defaults(data, structure), _.keys(structure));
};

Player.prototype.changeName = function (name) {
    console.log(sprintf(
        'Player "%s" changed name to "%s"',
        this.data.name,
        name
    ));
    this.data.name = name;
    return true;
};

Player.prototype.get = function (name) {
    if(typeof this.data[name] === 'undefined') {
        throw new ReferenceError('Unknown property: ' + name);
    }
    return this.data[name];
};

Player.prototype.set = function (name, value) {
    if(typeof this.data[name] === 'undefined') {
        throw new ReferenceError('Unknown property: ' + name);
    }
    this.data[name] = value;
};

Player.prototype.roll = function () {
    var die = new Die();
    die.roll();

    console.log(sprintf(
        '%1$s roll the die. Result is: %2$d',
        this.get('name'),
        die.getResult()
    ));
    return die.getResult();
};

module.exports = Player;

