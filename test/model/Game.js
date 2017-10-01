/* global require, describe, it, __filename */
/* jshint expr: true */
const expect = require('chai').expect;

const Board = require('./../../model/Board');
const Game = require('./../../model/Game');
const Player = require('./../../model/Player');

describe('Game', function () {
    describe('#constructor()', function () {
        it('should create a game with a default name and no players', function () {
            const game = new Game;
            expect(game.name).to.be.a('string').that.equal('My racing track');
            expect(game.players).to.be.an('array').that.is.of.length(0);
        });
    });

    describe('magic set name', function () {
        it('should return the name with the first character as uppercase', function () {
            const game = new Game;
            game.name = 'new gamename';
            expect(game.name).to.be.a('string').that.equal('New gamename');
        });
    });

    describe('magic get board', function () {
        it('should return the current board that the game is using', function () {
            const game = new Game;
            expect(game.board).to.be.an.instanceof(Board);
        });
    });

    describe('#addPlayer', function () {
        describe('invalid player', function () {
            it('should throw an exception', function () {
                let addingAnInvalidPlayer = function () {
                    const game = new Game;
                    game.addPlayer({});
                };
                expect(addingAnInvalidPlayer).to.throw(Error, 'Must be of instance Player');
            });
        });
        describe('to an active game', function () {
            it('should throw an exception', function () {
                let addingPlayersToAnActiveGame = function () {
                    const game = new Game;
                    game.addPlayer(new Player);
                    game.start();
                    game.addPlayer(new Player);
                };
                expect(addingPlayersToAnActiveGame).to.throw(Error, 'A new player can not be added to an active game');
            });
        });
        describe('single player', function () {
            it('should add the new player to the game', function () {
                const game = new Game;
                const player1 = new Player;
                game.addPlayer(player1);
                expect(game.players).to.be.an('array').that.include(player1);
                expect(game.players.length).to.equal(1);
            });
        });
        describe('multiple player', function () {
            it('should add the new players to the game', function () {
                const game = new Game;
                const player1 = new Player;
                const player2 = new Player;
                const player3 = new Player;
                game.addPlayer(player1);
                game.addPlayer(player2);
                game.addPlayer(player3);
                expect(game.players).to.be.an('array')
                    .that.include(player1)
                    .and.include(player2)
                    .and.include(player3)
                    .and.is.of.length(3);
            });
        });
    });

    describe('#start', function () {
        describe('without any players', function () {
            it('should throw an exception', function () {
                let startingWithoutPlayers = function () {
                    const game = new Game;
                    game.start();
                };
                expect(startingWithoutPlayers).to.throw(Error, 'No players found');
            });
        });
        describe('starting the game twice', function () {
            it('should throw an exception', function () {
                let startingWithoutPlayers = function () {
                    const game = new Game;
                    game.addPlayer(new Player);
                    game.start();
                    game.start();
                };
                expect(startingWithoutPlayers).to.throw(Error, 'The game is already running');
            });
        });
        describe('starting the game correctly', function () {
            it('should not throw an exception', function () {
                let startingOnceWithOnePlayer = function () {
                    const game = new Game;
                    game.addPlayer(new Player);
                    game.start();
                };
                expect(startingOnceWithOnePlayer).not.to.throw();
            });
        });
    });

    describe('magic get currentPlayer', function () {
        it('should return the current player, that is the player who turn it is.', function () {
            const game = new Game;
            const player = new Player;
            game.addPlayer(player);
            game.start();
            expect(game.currentPlayer).to.equal(player);
        });
    });

    describe('magic get isActive', function () {
        describe('when the game has not started', function () {
            it('should return false', function () {
                const game = new Game;
                expect(game.isActive).to.be.false;
            });
        });
        describe('when the game has started', function () {
            it('should return true', function () {
                const game = new Game;
                const player = new Player;
                game.addPlayer(player);
                game.start();
                expect(game.isActive).to.be.true;
            });
        });
    });

    describe('#roll', function () {
        describe('without starting the game', function () {
            it('should throw an exception', function () {
                let rollingWithoutStartingTheGame = function () {
                    const game = new Game;
                    const player = new Player;
                    game.addPlayer(player);
                    game.roll(player);
                };
                expect(rollingWithoutStartingTheGame).to.throw(Error, 'The game must be started');
            });
        });
        describe('with invalid player starting the game', function () {
            it('should throw an exception', function () {
                let rollingWithInvalidPlayer = function () {
                    const game = new Game;
                    const player = new Player;
                    game.addPlayer(player);
                    game.start();
                    game.roll({foo: 'bar'});
                };
                expect(rollingWithInvalidPlayer).to.throw(Error, 'Must be of instance Player');
            });
        });
        describe('with valid player in a started game', function () {
            it('should move the position of the player', function () {
                const game = new Game;
                const player = new Player;
                game.addPlayer(player);
                game.start();
                let beforeRolling = player.position;
                game.roll(player);
                expect(player.position).to.be.greaterThan(beforeRolling);
            });
        });
        describe('with two valid players in a started game', function () {
            it('should move the position of the player', function () {
                const game = new Game;
                const player1 = new Player;
                const player2 = new Player;
                game.addPlayer(player1);
                game.addPlayer(player2);
                game.start();
                let beforeRolling = player1.position;
                game.roll(player1);
                expect(player1.position).to.be.greaterThan(beforeRolling);

                beforeRolling = player2.position;
                game.roll(player2);
                expect(player2.position).to.be.greaterThan(beforeRolling);
            });
        });
        describe('so a player gets past the finish line', function () {
            it('should move the position of the player and stop the game', function () {
                const game = new Game;
                const player = new Player;
                game.addPlayer(player);
                game.start();
                player.position = game.board.positionOfFinishLine - 1;
                let beforeRolling = player.position;
                game.roll(player);
                expect(player.position).to.be.greaterThan(beforeRolling);
                expect(game.winner).to.be.equal(player);
            });
        });
        describe('after a player has already won', function () {
            it('should throw an exception', function () {
                const game = new Game;
                const player = new Player;
                game.addPlayer(player);
                game.start();
                player.position = game.board.positionOfFinishLine - 1;
                game.roll(player);
                expect(game.winner).to.be.equal(player);

                let rollAfterEndedGame = function () {
                    game.roll(player);
                };
                expect(rollAfterEndedGame).to.throw(Error, 'The game is not active');
            });
        });
    });
});

