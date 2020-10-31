---
id: longest-common-prefix
title: 14. Longest Common Prefix
---

# Longest Common Prefix

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

**示例 1:**

**输入: **\["flower","flow","flight"] **输出:** "fl"

**示例 2:**

**输入: **\["dog","racecar","car"] **输出:** "" **解释:** 输入不存在公共前缀。

**说明:**

所有输入只包含小写字母 `a-z` 。



```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length <= 1) return strs[0] || '';

  function getPrefix(str1, str2) {
    var i = 0, len = Math.min(str1.length, str2.length), prefix = '';
    for (; i < len; i++) {
      if (str1[i] !== str2[i]) break;
      prefix += str1[i];
    }
    return prefix;
  }

  var i = 1, len = strs.length, minPrefix = strs[0];
  for (; i < len; i++) {
    minPrefix = getPrefix(strs[i], minPrefix);
    if (minPrefix === '') break;
  }

  return minPrefix;
};
```