const assert = require('assert');
const calc = require('../lib/calc');

describe('calculator', () => {
    it('add', () => {
        const sum = calc.add(1, 2);
        assert.equal(sum, 3);
    });

    it('subtract', () => {
        const difference = calc.subtract(5, 3);
        assert.equal(difference, 2);
    });

    it('multiply', () => {
        const product = calc.multiply(3, 2);
        assert.equal(product, 6);
    });

    it('divide', () => {
        const quotient = calc.divide(6, 2);
        assert.equal(quotient, 3);
    });

    it('divide by 0', () => {
        const quotient = calc.divide(6, 0);
        assert.equal(quotient, 'Error: Attempt to divide by zero (0)');
    });
});