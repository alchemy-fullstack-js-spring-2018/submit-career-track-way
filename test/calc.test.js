const assert = require('assert');
const calc = require('../lib/calc');

//suite feature for tests. "it" will be outlined under label

describe('calculator', () => {
    //'it' is mocha's way of registering a test function.
    it('add', () => {
        //excercising the code we want to test.
        //in TDD also the code we want to write.
        const sum = calc.add(1,2);
        //make an assertion about what is "pass" What passes the test.
        // parameters: actual, expected.
        assert.equal(sum, 3);
    });

    it('subtract', () => {
        const subtract = calc.subtract(5, 4);
        assert.equal(subtract, 1);
    });
    it('multiply', () => {
        const multiply = calc.multiply(5, 4);
        assert.equal(multiply, 20);
    });
    it('divide', () => {
        const divide = calc.divide(20, 4);
        assert.equal(divide, 5);
    });
    // it('throwzero', () => {
    //     const throwzero = calc.throwzero(2, 0);
    //     assert.equal(throwzero, 0);
    //     throw 'Attempt to divide by zero (0)';
    // });
    it('divide by zero', () => {
        let passed = false;
        try {
            calc.divide(6, 0);
            passed = true;
            // assert.fail('did not throw error');
        } catch (error) {
            assert.equal(error.message, 'Attempt to divide by zero');
        }
        assert.equal(!passed, false, 'did not throw error');
    });

});