---
id: que-shi-de-shu-zi-lcof
title: 100331. 缺失的数字  LCOF
---

# 缺失的数字  LCOF

一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。



**示例 1:**

**输入:** \[0,1,3] **输出:** 2

**示例 2:**

**输入:** \[0,1,2,3,4,5,6,7,9] **输出:** 8



**限制：**

`1 <= 数组长度 <= 10000`



```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (nums.length === 1) return nums[0] ^ 1;

  for (var i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return i;
};
```