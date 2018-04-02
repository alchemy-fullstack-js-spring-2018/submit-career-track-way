const assert = require('assert');
const calc = require('../lib/calc');

//suite feature for test outlined under describe
describe('calculator', () => {
    
    //it is mocha's primary way of "registering" test function
    it('add', () => {
        //exercising the code we want to test (or we want to write)
        const sum = calc.add(1, 2);

        //make assertion about what counts as a "pass"
        //parameters: ACTUAL, EXPECTED
        assert.equal(sum, 3);
    });

    it('subtract', () => {

        const difference = calc.subtract(5, 1);

        assert.equal(difference, 4);

    });

    it('multiply', () => {

        const quotient = calc.multiply (3, 2);

        assert.equal(quotient, 6);

    });

    it('divide', () => {

        const remainder = calc.divide (10, 2);

        assert.equal(remainder, 5);

    });

});