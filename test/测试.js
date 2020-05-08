var assert = require('assert');
var 演示 = require("../入口")

describe('次常用字', function() {
  describe('所有()', function() {
    it('非空', function() {
      assert.ok(演示.次常用字() != null);
    });
    it('2 画', function() {
      assert.equal(演示.次常用字()["2"], "匕刁");
    });
  });
});


describe('常用字', function() {
  describe('所有()', function() {
    it('1 画', function() {
      assert.equal(演示.常用字()["1"], "一乙");
    });
  });
});