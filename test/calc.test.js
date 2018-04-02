const assert = require('assert');
const calc = require('../lib/calc');

describe ('calculator', () => {
    it('add', () => {
        const sum = calc.add(1, 2);
        assert.equal(sum, 3);
    });
});