const assert = require('assert');
const calc = require('../lib/calc');

// "suite" feature for test. `it` will be outlined under this label
describe('calculator', () => {
    // `it` is mocha's way of "registering" a test function
    it('add', () => {
        // exercising the code we want to test
        // (in TDD also the code we want to write)
        const sum = calc.add(1, 2);
        // make an assertion about what is "pass"
        // paramerters: actual, expected
        assert.equal(sum, 3);
    });

    it('subtract', () => {
        const difference = calc.subtract(6, 2);
        assert.equal(difference, 4);
    });

    it('multiply', () => {
        const product = calc.multiply(2, 2);
        assert.equal(product, 4);
    });

    it('divide', () => {
        const quotient = calc.divide(6, 2);
        assert.equal(quotient, 3);
    });

    it('divide by 0', () => {
        try {
            calc.divide(6, 0);          
        } catch (error) {
            assert.equal(error.message, 'Attempt to divide by zero (0)');       
        }

    });
});