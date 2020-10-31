---
id: combinations
title: 77. Combinations
---

# Combinations

给定两个整数 _n_ 和 _k_，返回 1 ... _n _中所有可能的 _k_ 个数的组合。

**示例:**

**输入:** n = 4, k = 2 **输出:** \[ \[2,4], \[3,4], \[2,3], \[1,2], \[1,3], \[1,4], ]



```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var res = [];

  function helper(start, acc) {
    if (acc.length === k) {
      res.push(acc);
      return;
    }

    for (var i = start; i <= n; i++) {
      helper(i + 1, acc.concat(i));
    }
  }

  helper(1, []);

  return res;
};
```