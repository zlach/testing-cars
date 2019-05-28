const sinon = require('sinon');
const chai = require('chai');
const math = require('../static/script/math-functions.js');

const assert = require('chai').assert;
var expect = chai.expect;

describe('Math Tests', () => {
  describe('Mul Tests', () => {
    it('', () => {

      expect(math.mul(2, 2)).to.eql(4);
    })
  })

})