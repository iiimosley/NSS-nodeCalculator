const subtract = require('../js/subtract.js');
const { assert: { isFunction, isNumber } } = require('chai');

describe('subtract', () => {
    it('should be a function', () => {
        isFunction(subtract);
    });
    it('should return a number', () => {
        isNumber(subtract([6, 2]));
    });
});