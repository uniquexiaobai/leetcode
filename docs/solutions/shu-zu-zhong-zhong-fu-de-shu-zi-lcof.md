---
id: shu-zu-zhong-zhong-fu-de-shu-zi-lcof
title: 100275. 数组中重复的数字 LCOF
---

# 数组中重复的数字 LCOF

找出数组中重复的数字。

  
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

**示例 1：**

**输入：** \[2, 3, 1, 0, 2, 5, 3] **输出：**2 或 3



**限制：**

`2 <= n <= 100000`



```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  var i = 0,
    len = nums.length,
    j;

  for (; i < len; i++) {
    while (i !== nums[i]) {
      j = nums[i];

      if (j === nums[j]) return j;

      nums[i] = nums[j];
      nums[j] = j;
    }
  }
};
```