const sprintf = require("sprintf-js").sprintf;

const Game = require('./model/Game');
const Player = require('./model/Player');

const game = new Game();
console.log(sprintf(
    'Starting a new "%s"',
    game.name
));


var player1 = new Player({name: 'Anders'});
console.log(sprintf(
    'Creating player %s',
    player1.name
));
var player2 = new Player({name: 'Mireille'});
console.log(sprintf(
    'Creating player %s',
    player2.name
));

game.addPlayer(player1);
console.log(sprintf(
    '%s joins the game "%s"',
    player1.name,
    game.name
));
game.addPlayer(player2);
console.log(sprintf(
    '%s joins the game "%s"',
    player2.name,
    game.name
));

var prevName = player2.name;
player2.name = 'Michelle';
console.log(sprintf(
    'Player "%s" changed name to "%s"',
    prevName,
    player2.name
));

game.start();
console.log(sprintf(
    'Starting "%s" with %d player%s',
    game.name,
    game.players.length,
    game.players.length > 1? 's' : ''
));
console.log(sprintf(
    '"%s" will be using the board "%s"',
    game.name,
    game.board.name
));

console.log(sprintf(
    '%1$s roll the die. Result is: %2$d\n' +
    '%3$s roll the die. Result is: %4$d',
    player1.name,
    player1.roll(),
    player2.name,
    player2.roll()
));

