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
    game.players.length > 1 ? 's' : ''
));
console.log(sprintf(
    '"%s" will be using the board "%s"',
    game.name,
    game.board.name
));

console.log(sprintf(
    'The game has started, we are now waiting for %s to roll the die',
    player1.name
));

game.roll(player1);
console.log(sprintf(
    '%s moved to position %d',
    player1.name,
    player1.position
));

console.log(sprintf(
    'Waiting for %s to roll the die',
    player2.name
));

game.roll(player2);
console.log(sprintf(
    '%s moved to position %d',
    player2.name,
    player2.position
));

while (player1.position < 50 && player2.position < 50) {
    game.roll(player1);
    console.log(sprintf(
        '%s moved to position %d',
        player1.name,
        player1.position
    ));
    game.roll(player2);
    console.log(sprintf(
        '%s moved to position %d',
        player2.name,
        player2.position
    ));
}

console.log(sprintf(
    '\n' +
    'The game has ended, here is the result:\n' +
    '%1$s is at position %2$d\n' +
    '%3$s is at position %4$d\n' +
    'The winner is %5$s\n',
    player1.name,
    player1.position,
    player2.name,
    player2.position,
    function () {
        if (player1.position === player2.position) {
            return 'Noone, it is a tie';
        }
        return player1.position > player2.position ? player1.name : player2.name;
    }
));

