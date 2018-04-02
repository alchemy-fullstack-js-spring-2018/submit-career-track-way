const assert = require('assert');
const calc = require('../lib/calc');

describe('calculator', () => {
    it('add', () => {
        const sum = calc.add(1, 2);
        assert.equal(sum, 3);
    });

    it('subtract', () => {
        const difference = calc.subtract(2, 1);
        assert.equal(difference, 1);
    });

    it('multiply', () => {
        const product = calc.multiply(1, 2);
        assert.equal(product, 2);
    });

    it('divide', () => {
        const quotient = calc.divide(2, 1);
        assert.equal(quotient, 2);
    });
});