const assert = require('assert');
const calc = require('../lib/calc');

describe ('calculator', () => {
    it('add', () => {
        const sum = calc.add(1, 2);
        assert.equal(sum, 3);
    });

    it('subtract', () => {
        const sub = calc.subtract(2, 1);
        assert.equal(sub, 1);
    });

    it('multiply', () => {
        const mult = calc.multiply(2, 2);
        assert.equal(mult, 4);
    });
    
    it('divide', () => {
        const div = calc.divide(4, 2);
        assert.equal(div, 2);
    });
});