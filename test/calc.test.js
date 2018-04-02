const assert = require('assert');
const calc = require('../lib/calc'); 

//"suite" feature for tests. `it` will be
// outlined under this label
describe('calculator', () => {
// `it` is mocha's way of "registering" a test
//function  
    it('add', () => {
// exercising the code we want to test
// (in TDD also the code we want to write)
        const sum = calc.add(1,2);
        // make an assertion about what is "pass".
        //parameters:actual,expected
        assert.equal(sum,3);

    });

    it('subtract', () => {
        const subtract = calc.subtract(10,5);
        assert.equal(subtract,5);
    
    });

    it('multiply', () => {
        const mult = calc.multiply(2,2);
        assert.equal(mult,4);
    });

    it('divide', () => {
        const div = calc.divide(10,5);
        assert.equal(div,2);
    });

    //it('divide by 0', () => {
    //  try {
    //    calc.divide(6,0);
    //    assert.fail('did not throw error');
    //    } catch (error) {
    //        assert.equal(error.message, 'Attempt to divide by zero (0)');

    //    }
    //})
})