const assert = require('assert');
const calc = require('../lib/calc');

// "suite" feature for tests. `it` will be
// outlined under this label
describe('calculator', () => {

    // Don't do this unless you have good reason to
    function calcTest(method, firstAddend, secondAddend, expected) {
        it(method, () => {
            // exercising the code we want to test
            // (in TDD also the code we want to write)
            const result = calc[method](firstAddend, secondAddend);
            // make an assertion about what is "pass".
            // parameters: actual, expected
            assert.equal(result, expected);
        });
    }

    calcTest('add', 1, 2, 3);
    calcTest('multiply', 2, 2, 4);

});