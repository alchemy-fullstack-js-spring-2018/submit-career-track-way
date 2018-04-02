const assert = require('assert');
const calc = require('../lib/calc');

describe('calculator', () => {
    it('add', () => {
        const sum = calc.add(1, 2);
        assert.equal(sum, 3);
    });

    it('subtract', () => {
        const difference = calc.subtract(2, 2);
        assert.equal(difference, 0);
    });

    it('multiply', () => {
        const product = calc.multiply(2, 2);
        assert.equal(product, 4);
    });

    it('divide', () => {
        const quotient = calc.divide(4, 2);
        assert.equal(quotient, 1);
    })
});
