const assert = require('assert');
const calc = require('../lib/calc');


describe('calculator', () => {
    it('add', () => {
        const sum = calc.add(1, 2);
        // parameters for assert: actual, expected
        assert.equal(sum, 3);
    });
    it('subtract', () => {
        const diff = calc.subtract(3, 1);
        assert.equal(diff, 2);
    });
    it('multiply', () => {
        const prod = calc.multiply(3, 2);
        assert.equal(prod, 6);
    });
    it('divide', () => {
        const dividend = calc.divide(4, 2);
        assert.equal(dividend, 2);
    });
});