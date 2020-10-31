---
id: minimum-ascii-delete-sum-for-two-strings
title: 712. Minimum ASCII Delete Sum for Two Strings
---

# Minimum ASCII Delete Sum for Two Strings

给定两个字符串`s1, s2`，找到使两个字符串相等所需删除字符的ASCII值的最小和。

**示例 1:**

**输入:** s1 = "sea", s2 = "eat" **输出:** 231 **解释:** 在 "sea" 中删除 "s" 并将 "s" 的值(115)加入总和。 在 "eat" 中删除 "t" 并将 116 加入总和。 结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。

**示例 2:**

**输入:** s1 = "delete", s2 = "leet" **输出:** 403 **解释:** 在 "delete" 中删除 "dee" 字符串变成 "let"， 将 100\[d]+101\[e]+101\[e] 加入总和。在 "leet" 中删除 "e" 将 101\[e] 加入总和。 结束时，两个字符串都等于 "let"，结果即为 100+101+101+101 = 403 。 如果改为将两个字符串转换为 "lee" 或 "eet"，我们会得到 433 或 417 的结果，比答案更大。

**注意:**

-   `0 < s1.length, s2.length <= 1000`。
-   所有字符串中的字符ASCII值在`[97, 122]`之间。



```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  if (s1 === s2) return 0;
  if (!s1.length || !s2.length) return _getSum(s1 || s2);

  function _getSum(str, start, end) {
    var sum = 0, len = end || str.length;
    for (; start < len; start++) {
      sum += str.charCodeAt(start);
    }
    return sum;
  }

  var cache = {};

  function _minSum(i, j) {
    if (i < 0 && j < 0) return 0;
    if (i < 0) return _getSum(s2, 0, j + 1);
    if (j < 0) return _getSum(s1, 0, i + 1);

    if (!cache[[i - 1, j - 1]]) {
      cache[[i - 1, j - 1]] = _minSum(i - 1, j - 1);
    }

    if (s1[i] === s2[j]) {
      return cache[[i - 1, j - 1]];
    }

    if (!cache[[i - 1, j]]) {
      cache[[i - 1, j]] = _minSum(i - 1, j);
    }

    if (!cache[[i, j - 1]]) {
      cache[[i, j - 1]] = _minSum(i, j - 1);
    }

    return Math.min(
      cache[[i - 1, j]] + _getSum(s1, i, i + 1),
      cache[[i, j - 1]] + _getSum(s2, j, j + 1)
    );
  }

  return _minSum(s1.length - 1, s2.length - 1);
};
```