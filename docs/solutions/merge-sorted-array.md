---
id: merge-sorted-array
title: 88. Merge Sorted Array
---

# Merge Sorted Array

给你两个有序整数数组 _nums1 _和 _nums2_，请你将 _nums2 _合并到 _nums1 _中_，_使 _nums1 _成为一个有序数组。



**说明：**

-   初始化 _nums1_ 和 _nums2_ 的元素数量分别为 _m_ 和 _n _。
-   你可以假设 _nums1 _有足够的空间（空间大小大于或等于 _m + n_）来保存 _nums2_ 中的元素。



**示例：**

**输入：** nums1 = \[1,2,3,0,0,0], m = 3 nums2 = \[2,5,6], n = 3 **输出：**\[1,2,2,3,5,6]



**提示：**

-   `-10^9 <= nums1[i], nums2[i] <= 10^9`
-   `nums1.length == m + n`
-   `nums2.length == n`



```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	while (m > 0 && n > 0) {
		nums1[m + n - 1] = nums2[n - 1] > nums1[m - 1] ? nums2[--n] : nums1[--m];
	}
	while (n > 0) {
		nums1[m + n - 1] = nums2[--n];
	}

	return nums1;
};

```