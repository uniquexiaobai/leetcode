---
id: ti-huan-kong-ge-lcof
title: 100280. 替换空格 LCOF
---

# 替换空格 LCOF

请实现一个函数，把字符串 `s` 中的每个空格替换成"%20"。



**示例 1：**

**输入：**s = "We are happy." **输出：**"We%20are%20happy."



**限制：**

`0 <= s 的长度 <= 10000`



```javascript
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  var ret = [];

  for (var i = 0, len = s.length; i < len; i++) {
    ret.push(s[i] === ' ' ? '%20' : s[i]);
  }

  return ret.join('');
};
```