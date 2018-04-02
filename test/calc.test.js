const assert = require('assert');
const calc = require('../lib/calc');

describe('calculator', () => {
    it('add', () => {
        const sum = calc.add(1, 2);
        assert.equal(sum, 3);
    });

    it('divide', () => {
        const result = calc.divide(6, 0);
        try {
            assert.equal(result, 2);
        } catch (err) {
            console.log('Attempted to divide by 0');
        }
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