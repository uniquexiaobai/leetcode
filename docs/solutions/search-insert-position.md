---
id: search-insert-position
title: 35. Search Insert Position
---

# Search Insert Position

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

**示例 1:**

**输入:** \[1,3,5,6], 5 **输出:** 2

**示例 2:**

**输入:** \[1,3,5,6], 2 **输出:** 1

**示例 3:**

**输入:** \[1,3,5,6], 7 **输出:** 4

**示例 4:**

**输入:** \[1,3,5,6], 0 **输出:** 0



```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums.length || target <= nums[0]) return 0;
    if (target === nums[nums.length - 1]) return nums.length - 1;
    if (target > nums[nums.length - 1]) return nums.length;
    var l = 0, r = nums.length - 1, mid;

    while (l <= r) {
    	mid = (l + r) >> 1;
    	if (nums[mid] === target) break;
    	if (target < nums[mid]) {
    		r = mid - 1;
    	} else {
    		l = mid + 1;
    	}
    }

    if (target <= nums[mid]) {
    	return mid;
    } else {
    	return mid + 1;
    }
};
```