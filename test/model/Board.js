/* global require, describe, it, __filename */
/* jshint expr: true */
var expect = require('chai').expect;

var Board = require('./../../model/Board');

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
});

