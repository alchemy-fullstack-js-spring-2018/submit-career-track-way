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
});