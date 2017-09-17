/* global require, describe, it, __filename */
/* jshint expr: true */
var expect = require('chai').expect;

var Board = require('./../../model/Board');
var Player = require('./../../model/Player');

describe('Board', function () {
    describe('#constructor()', function () {
        it('should give you a board of the game', function () {
            var board = new Board;
            expect(board.name).to.be.a('string').that.equal('Racing game');
        });
    });

    describe('name', function () {
        describe('can be selected', function () {
            it('should give you the default name of the game', function () {
                var board = new Board;
                expect(board.name).to.be.a('string').that.equal('Racing game');
            });
        });
        describe('can not be altered', function () {
            it('should give you the default name of the game', function () {
                var board = new Board;
                board.name = 'foo';
                expect(board.name).to.be.a('string').that.equal('Racing game');
            });
        });
    });
});

