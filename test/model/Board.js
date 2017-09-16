/* global require, describe, it, __filename */
/* jshint expr: true */
var expect = require('chai').expect;

var Board = require('./../../model/Board');
var Player = require('./../../model/Player');

describe('Board', function () {
    describe('#constructor()', function () {
        it('should give the board a defaultname', function () {
            var board = new Board();
            expect(board.name).to.be.a('string').that.equal('My racing track');
        });
    });

    describe('magic set name', function () {
        it('should return the name with the first character as uppercase', function () {
            var board = new Board();
            board.name = 'new gamename';
            expect(board.name).to.be.a('string').that.equal('New gamename');
        });
    });

    describe('#addPlayer', function () {
        describe('invalid player', function () {
            it('should throw an exception', function () {
                var addingAnInvalidPlayer = function () {
                    var board = new Board();
                    board.addPlayer({});
                };
                expect(addingAnInvalidPlayer).to.throw(Error, 'player must be of instance Player');
            });
        });
        describe('single player', function () {
            it('should add the new player to the game', function () {
                var board = new Board();
                var player1 = new Player();
                board.addPlayer(player1);
                expect(board.players).to.be.an('array').that.include(player1);
                expect(board.players.length).to.equal(1);
            });
        });
        describe('multiple player', function () {
            it('should add the new players to the game', function () {
                var board = new Board();
                var player1 = new Player();
                var player2 = new Player();
                var player3 = new Player();
                board.addPlayer(player1);
                board.addPlayer(player2);
                board.addPlayer(player3);
                expect(board.players).to.be.an('array').that.include(player1).and.include(player2).and.include(player3);
                expect(board.players.length).to.equal(3);
            });
        });
    });

    describe('#start', function () {
        describe('without any players', function () {
            it('should throw an exception', function () {
                var startingWithoutPlayers = function () {
                    var board = new Board();
                    board.start();
                };
                expect(startingWithoutPlayers).to.throw(Error, 'No players found');
            });
        });
        describe('starting the game twice', function () {
            it('should throw an exception', function () {
                var startingWithoutPlayers = function () {
                    var board = new Board();
                    board.addPlayer(new Player);
                    board.start();
                    board.start();
                };
                expect(startingWithoutPlayers).to.throw(Error, 'The game is already running');
            });
        });
        describe('starting the game correctly', function () {
            it('should not throw an exception', function () {
                var startingOnceWithOnePlayer = function () {
                    var board = new Board();
                    board.addPlayer(new Player);
                    board.start();
                };
                expect(startingOnceWithOnePlayer).not.to.throw();
            });
        });
    });
});

