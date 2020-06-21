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
var findKthLargest = function(nums, k) {
	return nums.sort((a, b) => b - a)[k - 1];
};
*/

/*
var findKthLargest = function(nums, k) {
	var len = nums.length;

	for (var i = 0; i < k; i++) {
		for (var j = 0; j < len - i - 1; j++) {
			if (nums[j] > nums[j + 1]) {
				[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
			}
		}
	}

	return nums[len - k];
};
*/

var findKthLargest = function(nums, k) {
	function partition(arr, l, r) {
		var j = l;

		for (var i = l + 1; i <= r; i++) {
			if (arr[i] > arr[l]) {
				[arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
				j++
			}
		}

		[arr[l], arr[j]] = [arr[j], arr[l]];
		return j;
	}

	var i = 0, j = nums.length - 1;

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