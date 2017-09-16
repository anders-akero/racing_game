var Board = require('./model/Board');
var Player = require('./model/Player');

var player1 = new Player({name: 'Anders'});
var player2 = new Player({name: 'Mireille'});
player2.name = 'Michelle';

var gameBoard = new Board();
console.log('We created a board that got the default name: '  + gameBoard.name);
var newGameName = 'dicegame';
console.log('Changing the name of the game to: ' + newGameName);
gameBoard.name = newGameName;
console.log('The new name of the gameboard is: ' + gameBoard.name);

player1.roll();
player2.roll();

