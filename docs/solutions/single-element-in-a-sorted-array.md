---
id: single-element-in-a-sorted-array
title: 540. Single Element in a Sorted Array
---

# Single Element in a Sorted Array

给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。

**示例 1:**

**输入:** \[1,1,2,3,3,4,4,8,8] **输出:** 2

**示例 2:**

**输入:** \[3,3,7,7,10,11,11] **输出:** 10

**注意:** 您的方案应该在 O(log n)时间复杂度和 O(1)空间复杂度中运行。



```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  if (nums.length <= 1) return nums[0];

  var l = 0,
    r = nums.length - 1,
    isEven,
    mid;

  while (l < r) {
    mid = Math.round((r - l) / 2) + l;
    isEven = mid % 2 === 0;
    if (nums[mid] === nums[mid - 1]) {
      if (isEven) {
        r = mid - 2;
      } else {
        l = mid + 1;
      }
    } else if (nums[mid] === nums[mid + 1]) {
      if (isEven) {
        l = mid + 2;
      } else {
        r = mid - 1;
      }
    } else {
      return nums[mid];
    }
  }

  return nums[l];
};
```