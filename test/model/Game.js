/* global require, describe, it, __filename */
/* jshint expr: true */
var expect = require('chai').expect;

var Board = require('./../../model/Board');
var Game = require('./../../model/Game');
var Player = require('./../../model/Player');

describe('Game', function () {
    describe('#constructor()', function () {
        it('should create a game with a default name and no players', function () {
            var game = new Game;
            expect(game.name).to.be.a('string').that.equal('My racing track');
            expect(game.players).to.be.an('array').that.is.of.length(0);
        });
    });

    describe('magic set name', function () {
        it('should return the name with the first character as uppercase', function () {
            var game = new Game;
            game.name = 'new gamename';
            expect(game.name).to.be.a('string').that.equal('New gamename');
        });
    });

    describe('#addPlayer', function () {
        describe('invalid player', function () {
            it('should throw an exception', function () {
                var addingAnInvalidPlayer = function () {
                    var game = new Game;
                    game.addPlayer({});
                };
                expect(addingAnInvalidPlayer).to.throw(Error, 'player must be of instance Player');
            });
        });
        describe('single player', function () {
            it('should add the new player to the game', function () {
                var game = new Game;
                var player1 = new Player;
                game.addPlayer(player1);
                expect(game.players).to.be.an('array').that.include(player1);
                expect(game.players.length).to.equal(1);
            });
        });
        describe('multiple player', function () {
            it('should add the new players to the game', function () {
                var game = new Game;
                var player1 = new Player;
                var player2 = new Player;
                var player3 = new Player;
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
                var startingWithoutPlayers = function () {
                    var game = new Game;
                    game.start();
                };
                expect(startingWithoutPlayers).to.throw(Error, 'No players found');
            });
        });
        describe('starting the game twice', function () {
            it('should throw an exception', function () {
                var startingWithoutPlayers = function () {
                    var game = new Game;
                    game.addPlayer(new Player);
                    game.start();
                    game.start();
                };
                expect(startingWithoutPlayers).to.throw(Error, 'The game is already running');
            });
        });
        describe('starting the game correctly', function () {
            it('should not throw an exception', function () {
                var startingOnceWithOnePlayer = function () {
                    var game = new Game;
                    game.addPlayer(new Player);
                    game.start();
                };
                expect(startingOnceWithOnePlayer).not.to.throw();
            });
        });
    });
});

