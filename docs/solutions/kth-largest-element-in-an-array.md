---
id: kth-largest-element-in-an-array
title: 215. Kth Largest Element in an Array
---

# Kth Largest Element in an Array

在未排序的数组中找到第 **k** 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

**示例 1:**

**输入:** `[3,2,1,5,6,4] 和` k = 2 **输出:** 5

**示例 2:**

**输入:** `[3,2,3,1,2,4,5,5,6] 和` k = 4 **输出:** 4

**说明:**

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。



```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
 * 1. 升序排序后返回第 K 个，时间复杂度 O(nlogn)
 * 2. 利用块排，每次舍去一半，时间复杂度 O(n)
 * 3. 利用堆，时间复杂度 O(nlogk)
 */

var findKthLargest = function (nums, k) {
  function partition(arr, l, r) {
    var large = [],
      small = [],
      i = l + 1,
      mid = arr[l];

    for (; i <= r; i++) {
      if (arr[i] < mid) {
        small.push(arr[i]);
      } else {
        large.push(arr[i]);
      }
    }

    arr.splice(l, r - l + 1, ...large, mid, ...small);
    return l + large.length;
  }

  var i = 0,
    j = nums.length - 1,
    p;

  while (i <= j) {
    p = partition(nums, i, j);

    if (p + 1 === k) {
      return nums[p];
    } else if (p + 1 < k) {
      i = p + 1;
    } else {
      j = p - 1;
    }
  }
};
```