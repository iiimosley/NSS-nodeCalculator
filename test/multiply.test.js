const multiply = require('../js/multiply.js');
const { assert: { isFunction, isNumber } } = require('chai');

describe('multiply', () => {
    it('should be a function', () => {
        isFunction(multiply);
    });
    it('should return a number', () => {
        isNumber(multiply([6, 2]));
    });
});