const 常用字 = require("./2500")
const 次常用字 = require("./1000")

const 常用字集 = 取字集(常用字.字表)
const 次常用字集 = 取字集(次常用字.字表)

function 取字集(字表) {
  var 字集 = new Set()
  for (笔画 in 字表) {
    for (字 of 字表[笔画]) {
      字集.add(字)
    }
  }
  return 字集
}

exports.常用字 = function() {
  return 常用字.字表;
}

exports.次常用字 = function() {
  return 次常用字.字表;
}

exports.为常用字 = function(字) {
   return 常用字集.has(字)
}

exports.为次常用字 = function(字) {
  return 次常用字集.has(字)
}
