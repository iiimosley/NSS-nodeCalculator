const add = require('../js/add.js');
const { assert: { isFunction, isNumber, equal } } = require('chai');

describe('add', () => {
    it('should be a function', () => {
        isFunction(add);
    });
    it('should return a number', () => {
        isNumber(add([1,2,3,4]));
    });
});