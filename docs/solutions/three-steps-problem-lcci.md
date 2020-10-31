---
id: three-steps-problem-lcci
title: 100197. Three Steps Problem LCCI
---

# Three Steps Problem LCCI

三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

**示例1:**

**输入**：n = 3 **输出**：4 **说明**: 有四种走法

**示例2:**

**输入**：n = 5 **输出**：13

**提示:**

1.  n范围在\[1, 1000000]之间



```javascript
/**
 * @param {number} n
 * @return {number}
 */

// dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
var waysToStep = function (n) {
  var a = 1,
    b = 2,
    c = 4,
    i = 4;

  if (n === 1) return a;
  if (n === 2) return b;
  if (n === 3) return c;

  for (; i <= n; i++) {
    [c, b, a] = [(c + b + a) % 1000000007, c, b];
  }

  return c;
};

/*
var waysToStep = function (n) {
  var dp = [0, 1, 2, 4],
    i = 4;

  for (; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007;
  }

  return dp[n];
};
*/
```