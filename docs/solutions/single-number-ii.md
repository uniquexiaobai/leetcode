---
id: single-number-ii
title: 137. Single Number II
---

# Single Number II

给定一个**非空**整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

**说明：**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

**示例 1:**

**输入:** \[2,2,3,2] **输出:** 3

**示例 2:**

**输入:** \[0,1,0,1,0,1,99] **输出:** 99



```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var map = {}, i = 0, len = nums.length, num;

  for (; i < len; i++) {
    num = nums[i];
    if (!map[num]) {
      map[num] = 0;
    }
    map[num] += 1;
  }

  for (i = 0; i < len; i++) {
    num = nums[i];
    if (map[num] === 1) {
      return num;
    }
  }
};
```