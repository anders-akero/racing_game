/* global require, describe, it, __filename */
/* jshint expr: true */
const expect = require('chai').expect;

const Player = require('./../../model/Player');

describe('Player', function () {
    describe('#constructor()', function () {
        it('should sanitize input to be name and only name', function () {
            let player = new Player;
            expect(player.data).to.be.an('object').that.have.property('name');

            player = new Player({name: 'Kjell'});
            expect(player.data).to.be.an('object').that.have.property('name');

            player = new Player({winner: true});
            expect(player.data).to.be.an('object').that.have.property('name').but.not.property('winner');

            player = new Player({name: 'Kjell', winner: true});
            expect(player.data).to.be.an('object').that.have.property('name').but.not.property('winner');
        });
    });

    describe('Changing name', function () {
        describe('changing name', function () {
            it('should change the value', function () {
                const player = new Player;
                let prevName = player.name;
                player.name = 'Kjell';
                expect(player.name).not.to.equal(prevName);
            });
        });
        describe('validating new name', function () {
            it('should change the value', function () {
                const player = new Player;
                player.name = 'Kjell';
                expect(player.name).to.be.a('string').that.equal('Kjell');
            });
        });
    });

    describe('Position', function () {
        describe('testing default', function () {
            it('should return start position', function () {
                const player = new Player;
                expect(player.position).to.equal(0);
            });
        });
        describe('changing to integer', function () {
            it('should change the position', function () {
                const player = new Player;
                player.position = 5;
                expect(player.position).to.equal(5);
            });
        });
        describe('changing to float', function () {
            it('should throw an exception', function () {
                let settingAsFloat = function () {
                    const player = new Player;
                    player.position = 5.5;
                };
                expect(settingAsFloat).to.throw(Error, 'Must be integer');
            });
        });
        describe('changing to string', function () {
            it('should throw an exception', function () {
                let settingAsString = function () {
                    const player = new Player;
                    player.position = 'foo';
                };
                expect(settingAsString).to.throw(Error, 'Must be integer');
            });
        });
        describe('changing to object', function () {
            it('should throw an exception', function () {
                let settingAsObject = function () {
                    const player = new Player;
                    player.position = {foo: 'bar'};
                };
                expect(settingAsObject).to.throw(Error, 'Must be integer');
            });
        });
    });

    describe('#roll()', function () {
        describe('player rolls the die', function () {
            it('should print to console', function () {
                const player = new Player
                let result = player.roll();
                expect(result).to.be.a('number');
                expect(result).to.be.oneOf([1, 2, 3, 4, 5, 6]);
            });
        });
    });
});

