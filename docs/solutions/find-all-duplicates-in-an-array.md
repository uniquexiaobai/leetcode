---
id: find-all-duplicates-in-an-array
title: 442. Find All Duplicates in an Array
---

# Find All Duplicates in an Array

给定一个整数数组 a，其中1 ≤ a\[i] ≤ _n_ （_n_为数组长度）, 其中有些元素出现**两次**而其他元素出现**一次**。

找到所有出现**两次**的元素。

你可以不用到任何额外空间并在O(_n_)时间复杂度内解决这个问题吗？

**示例：**

**输入:** \[4,3,2,7,8,2,3,1] **输出:** \[2,3]



```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 一个数组下标对应一个值，剩下的便是多余的
var findDuplicates = function(nums) {
  var res = [], i, len, index;

  for (i = 0, len = nums.length; i < len; i++) {
    index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      res.push(index + 1);
    }
    nums[index] *= -1;
  }

  return res;
};
```