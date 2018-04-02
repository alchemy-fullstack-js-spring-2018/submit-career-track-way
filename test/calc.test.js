const assert = require('assert');
const calc = require('../lib/calc');

describe('calculator', () => {

    it('adds numbers', () => {
        const sum = calc.add(1, 2);
        assert.equal(sum, 3);
    });

    it('subtracts numbers', () => {
        const sub = calc.subtract(5, 1);
        assert.equal(sub, 4);

    });

    it('multiplies numbers', () => {
        const product = calc.multiply(5, 2); 
        assert.equal(product, 10);
    });

    it('divides numbers', () => {
        const div = calc.divide(10, 5);
        assert.equal(div, 2);
    });

    it('throws error if attempt to divide by zero', () => {
        try {
            calc.divide(3, 0);
        }
        catch (err) {
            assert(err.message, 'Attempt to divide by zero (0)');
        }
    });

});