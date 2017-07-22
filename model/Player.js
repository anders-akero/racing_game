var Player = function (data) {
    this.data = data;
}

Player.prototype.data = {};

Player.prototype.changeName = function (name) {
    this.data.name = name;
}