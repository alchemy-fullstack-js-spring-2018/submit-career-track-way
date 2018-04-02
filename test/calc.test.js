const assert = require('assert');
const calc = require('../lib/calc');

//"suite" feature for tests.
// 'it' will be outlined under this label

describe('calculator', () => {
    //'it' is mocha's way of registering a test
    //function
    it('add', () => {
        //exercising the code we want to test 
        // (in TDD also the code we want to write)
        const sum = calc.add(1, 2);
        //make an assertion about what is "pass".
        //parameters: actual, expected
        assert.equal(sum, 3);

    });
    it('subtract', () => {
        const subtract = calc.subtract(1, 2);
        assert.equal(subtract, -1);
    });
    it('multiply', () =>{
        const multiply = calc.multiply(1, 2);
        assert.equal(multiply, 2);
    });
    it ('divide', () => {
        const divide = calc.divide(1, 2);
        assert.equal(divide, .5);
    });
    it('divide by 0', () => {
        let passed = false;
        try {
            calc.divide(5, 0);
            passed = true;
            assert.fail('failed to throw error');
        } catch (error) {
            assert.equal(error.message, 'test fails division by 0');     
        }
        assert.equal(passed, false, 'failed to throw error');
    });
});



