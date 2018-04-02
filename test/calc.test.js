const assert = require('assert');
const calc = require('../lib/calc');

describe('calculator', () => {
    it('add', () => {
        const sum = calc.add(1, 2);
        assert.equal(sum, 3);
    });

    it('subtract', () => {
        const diff = calc.subtract(5, 3);
        assert.equal(diff, 2); 
    });

    it('mulitiplies', () => {
        const total = calc.multiply(5, 5);
        assert.equal(total, 25); 
    });
    
    it('divides', () => {
        const answer = calc.divide(10, 2);
        assert.equal(answer, 5);
    });

    it('dividing by zero throws error', () => {
       
        try { 
            calc.divide(10, 0);
        }
        catch (error){
            assert.equal(error.message, 'attempted to divide by zero');
        }
    });

    it('dividing by zero, class example', () => {
        try {
            calc.divide(10, 0);
            assert.fail('did not throw error');
        } catch (error){
            assert.equal(error.message, 'attempted to divide by zero');
        }
    });
});