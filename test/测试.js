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

describe('为次常用字', function() {
  describe('', function() {
    it('非', function() {
      assert.equal(演示.为次常用字("一"), false);
    });
    it('是', function() {
      assert.equal(演示.为次常用字("匕"), true);
    });
  });
});

describe('为常用字', function() {
  describe('', function() {
    it('非', function() {
      assert.equal(演示.为常用字("匕"), false);
    });
    it('是', function() {
      assert.equal(演示.为常用字("一"), true);
    });
  });
});

