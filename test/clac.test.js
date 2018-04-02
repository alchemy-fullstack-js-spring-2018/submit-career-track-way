const assert = require('assert');
const calc = require('../lib/calc');

describe('calculator', () => {
    it('add', () => {
        const sum = calc.add(1, 2);
        assert.equal(sum, 3);
    }),
    it('subtract', () => {
        const diff = calc.subtract(2, 1);
        assert.equal(diff, 1);
    }),
    it('multiply', () => {
        const product = calc.multiply(2, 2);
        assert.equal(product, 4);
    }),
    it('divide', () => {
        try {
            calc.divide(4, 0);  
        } catch (error) {
            assert.equal(error, 'Error: Attempt to divide by zero (0)'); 
        }
    });
});