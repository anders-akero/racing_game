var Player = require('./model/Player');

var player1 = new Player({name: 'Anders'});
var player2 = new Player({name: 'Mireille'});
player2.changeName('Michelle');

player1.roll();
player2.roll();

