---
id: generate-parentheses
title: 22. Generate Parentheses
---

# Generate Parentheses

数字 _n_ 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 **有效的 **括号组合。



**示例：**

**输入：**n = 3 **输出：**\[ "((()))", "(()())", "(())()", "()(())", "()()()" ]



```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var res = [];

  function isValid(str) {
    var stack = [],
      i = 0,
      len = str.length;

    while (i < len) {
      if (str[i] === '(') {
        stack.push(str[i]);
      } else {
        if (stack.pop() !== '(') return false;
      }
      i += 1;
    }

    return stack.length === 0;
  }

  function _generate(i, str) {
    if (i >= n * 2) {
      if (isValid(str)) {
        res.push(str);
      }
      return;
    }

    _generate(i + 1, str + '(');
    _generate(i + 1, str + ')');
  }

  _generate(0, '');

  return res;
};
```