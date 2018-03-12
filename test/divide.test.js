const divide = require('../js/divide.js');
const { assert: { isFunction, isNumber } } = require('chai');

describe('divide', () => {
    it('should be a function', () => {
        isFunction(divide);
    });
    it('should return a number', () => {
        isNumber(divide([6,2]));
    });
});