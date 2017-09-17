/* global require, describe, it, __filename */
/* jshint expr: true */
const expect = require('chai').expect;

const Die = require('./../../model/Die');

describe('Die', function () {
    describe('#roll()', function () {
        it('should return a number between 1 and 6', function () {
            const die = new Die(6);
            let result = die.roll();
            expect(result).to.be.a('number');
            expect(result).to.be.oneOf([1, 2, 3, 4, 5, 6]);
        });
        it('should always return 1 when the die have 1 side', function () {
            const die = new Die(1);
            expect(die.roll()).to.equal(1);
            expect(die.roll()).to.equal(1);
            expect(die.roll()).to.equal(1);
        });
    });

    describe('#getResult()', function () {
        it('should return the last result', function () {
            const die = new Die(6);
            let resultFromRoll = die.roll();
            expect(die.getResult()).to.equal(resultFromRoll);
        });
    });
});

