---
id: bu-ke-pai-zhong-de-shun-zi-lcof
title: 100341. 扑克牌中的顺子  LCOF
---

# 扑克牌中的顺子  LCOF

从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。



**示例 1:**

**输入:** \[1,2,3,4,5] **输出:** True



**示例 2:**

**输入:** \[0,0,1,2,5] **输出:** True



**限制：**

数组长度为 5

数组的数取值为 \[0, 13] .



```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  var visited = {},
    min = Infinity,
    max = -Infinity;

  for (var i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) continue;
    if (visited[nums[i]]) return false;
    visited[nums[i]] = 1;
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }

  return max - min < 5;
};
```