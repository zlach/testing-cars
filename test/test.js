const sinon = require('sinon');
const chai = require('chai');

const conFunc = require('./control-functions');

var assert = require('assert');
var expect = chai.expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("math test", function() {
    it("2 = 2", function() {

            expect(controlPanel.math(2,2)).to.equal(4);

            expect(2).to.equal(2);
    });
});