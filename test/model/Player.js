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
    describe('#changeName()', function () {
        describe('return value', function () {
            it('should return true', function () {
                var player = new Player();
                var result = player.changeName('Kjell');
                expect(result).to.be.true;
            });
        });
        describe('changing name', function () {
            it('should change the value', function () {
                var player = new Player();
                var prevName = player.data.name;
                player.changeName('Kjell');
                var newName = player.data.name;
                expect(newName).not.to.equal(prevName);
            });
        });
        describe('validating new name', function () {
            it('should change the value', function () {
                var player = new Player();
                player.changeName('Kjell');
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
    describe('#get()', function () {
        describe('attribute name', function () {
            it('should return the name of the player', function () {
                var player = new Player();
                expect(player.get('name')).to.be.a('string');
            });
        });
        describe('invalid attribute', function () {
            it('should throw exception', function () {
                var player = new Player();
                expect(function () {
                    player.get('foo');
                }).to.throw(ReferenceError);
            });
        });
    });
    describe('#set()', function () {
        describe('attribute name', function () {
            it('should change the name of the player', function () {
                var player = new Player();
                player.set('name', 'Kjell');
                expect(player.data.name).to.be.a('string').that.equal('Kjell');
            });
        });
        describe('invalid attribute', function () {
            it('should throw exception', function () {
                var player = new Player();
                expect(function () {
                    player.set('foo', 'bar');
                }).to.throw(ReferenceError);
            });
        });
    });
});

