const assert = require('assert');
const calc = require('../lib/calc');

describe('calculator', () => {
    it('add', () => {
        const sum = calc.add(1, 2);
        assert.equal(sum, 3);
    });

    it('divide by zero', () => {
        const result = calc.divide(5, 0);
        assert.equal(result, Infinity);
    });

    it('divide', () => {
        const result = calc.divide(6, 3);
        assert.equal(result, 2);
    });

    it('subtract', () => {
        const result = calc.subtract(6, 3);
        assert.equal(result, 3);
    });

    it('multiply', () => {
        const result = calc.multiply(6, 3);
        assert.equal(result, 18);
    });
});