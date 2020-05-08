var assert = require('assert');
var 演示 = require("../入口")

describe('次常用字', function() {
  describe('所有()', function() {
    it('1000 字', function() {
      var 字单 = ""
      const 次常用字 = 演示.次常用字()
      for (笔画 in 次常用字) {
        字单 += 次常用字[笔画]
      }
      assert.equal(字单.length, 1000);
    });
  });
});

describe('常用字', function() {
  describe('所有()', function() {
    it('2500 字', function() {
      var 字单 = ""
      const 常用字 = 演示.常用字()
      for (笔画 in 常用字) {
        字单 += 常用字[笔画]
      }
      assert.equal(字单.length, 2500);
    });
  });
});