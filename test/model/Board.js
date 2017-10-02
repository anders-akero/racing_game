/* global require, describe, it, __filename */
/* jshint expr: true */
const expect = require('chai').expect;

const Board = require('./../../model/Board');
const Player = require('./../../model/Player');

describe('Board', function () {
    describe('#constructor()', function () {
        it('should give you a board of the game', function () {
            const board = new Board;
            expect(board.name).to.be.a('string').that.equal('Racing game');
        });
    });

    describe('name', function () {
        describe('can be selected', function () {
            it('should give you the default name of the game', function () {
                const board = new Board;
                expect(board.name).to.be.a('string').that.equal('Racing game');
            });
        });
        describe('can not be altered', function () {
            it('should give you the default name of the game', function () {
                const board = new Board;
                board.name = 'foo';
                expect(board.name).to.be.a('string').that.equal('Racing game');
            });
        });
    });

    describe('positionOfFinishLine', function () {
        describe('can be selected', function () {
            it('should give you the position of the finish line', function () {
                const board = new Board;
                expect(board.positionOfFinishLine).to.be.a('number').that.equal(50);
            });
        });
        describe('can not be altered', function () {
            it('should give you the position of the finish line', function () {
                const board = new Board;
                board.positionOfFinishLine = 55;
                expect(board.positionOfFinishLine).to.be.a('number').that.equal(50);
            });
        })
    });

    describe('#playerMoved()', function () {
        describe('with an invalid player', function () {
            it('should throw an exception', function () {
                let invalidPlayer = function () {
                    const board = new Board;
                    board.playerMoved({foo: 'bar'});
                };
                expect(invalidPlayer).to.throw(Error, 'Must be of instance Player');
            });
        });
        describe('to an non special position', function () {
            it('should not do anything to the position of the player', function () {
                const player = new Player;
                const board = new Board;
                player.position = 1;
                board.playerMoved(player);
                expect(player.position).to.equal(1);
            });
        });
        describe('to an special position', function () {
            describe('position 10', function () {
                it('should move position of the player', function () {
                    const player = new Player;
                    const board = new Board;
                    player.position = 10;
                    board.playerMoved(player);
                    expect(player.position).to.equal(35);
                });
            });
            describe('position 20', function () {
                it('should move position of the player', function () {
                    const player = new Player;
                    const board = new Board;
                    player.position = 20;
                    board.playerMoved(player);
                    expect(player.position).to.equal(5);
                });
            });
            describe('position 30', function () {
                it('should move position of the player', function () {
                    const player = new Player;
                    const board = new Board;
                    player.position = 30;
                    board.playerMoved(player);
                    expect(player.position).to.equal(18);
                });
            });
        });
    });
});

