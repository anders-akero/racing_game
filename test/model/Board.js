/* global require, describe, it, __filename */
/* jshint expr: true */
const expect = require('chai').expect;

const Board = require('./../../model/Board');

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
});

