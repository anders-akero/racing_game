/* global require, describe, it, __filename */
/* jshint expr: true */
var expect = require('chai').expect;

var Player = require('./../../model/Player');

describe('Player', function () {
    describe('#constructor()', function () {
        it('should sanitize input to be name and only name', function () {
            var player = new Player();
            expect(player.data).to.be.an('object').that.have.property('name');

            var player = new Player({name: 'Kjell'});
            expect(player.data).to.be.an('object').that.have.property('name');

            var player = new Player({winner: true});
            expect(player.data).to.be.an('object').that.have.property('name').but.not.property('winner');

            var player = new Player({name: 'Kjell', winner: true});
            expect(player.data).to.be.an('object').that.have.property('name').but.not.property('winner');
        });
    });
    describe('Changing name', function () {
        describe('changing name', function () {
            it('should change the value', function () {
                var player = new Player();
                var prevName = player.data.name;
                player.name = 'Kjell';
                var newName = player.data.name;
                expect(newName).not.to.equal(prevName);
            });
        });
        describe('validating new name', function () {
            it('should change the value', function () {
                var player = new Player();
                player.name = 'Kjell';
                expect(player.data.name).to.be.a('string').that.equal('Kjell');
            });
        });
    });
    describe('#roll()', function () {
        describe('player rolls the die', function () {
            it('should print to console', function () {
                var player = new Player();
                var result = player.roll();
                expect(result).to.be.a('number');
                expect(result).to.be.oneOf([1, 2, 3, 4, 5, 6]);
            });
        });
    });
});

