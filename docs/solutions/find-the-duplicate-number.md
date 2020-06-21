---
id: find-the-duplicate-number
title: 287. Find the Duplicate Number
---

# Find the Duplicate Number

给定一个包含 _n_ + 1 个整数的数组 _nums_，其数字都在 1 到 _n _之间（包括 1 和 _n_），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

**示例 1:**

**输入:** `[1,3,4,2,2]` **输出:** 2

**示例 2:**

**输入:** \[3,1,3,4,2] **输出:** 3

**说明：**

1.  **不能**更改原数组（假设数组是只读的）。
2.  只能使用额外的 _O_(1) 的空间。
3.  时间复杂度小于 _O_(_n_2) 。
4.  数组中只有一个重复的数字，但它可能不止重复出现一次。



```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var map = {};

    for (var i = 0, len = nums.length; i < len; i++) {
    	if (map[nums[i]]) {
    		return nums[i];
    	} else {
    		map[nums[i]] = true;
    	}
    }
};
```