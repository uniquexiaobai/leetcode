---
id: intersection-of-two-arrays-ii
title: 350. Intersection of Two Arrays II
---

# Intersection of Two Arrays II

给定两个数组，编写一个函数来计算它们的交集。



**示例 1：**

**输入：**nums1 = \[1,2,2,1], nums2 = \[2,2] **输出：**\[2,2]

**示例 2:**

**输入：**nums1 = \[4,9,5], nums2 = \[9,4,9,8,4] **输出：**\[4,9]



**说明：**

-   输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
-   我们可以不考虑输出结果的顺序。

****进阶**：**

-   如果给定的数组已经排好序呢？你将如何优化你的算法？
-   如果 _nums1 _的大小比 _nums2 _小很多，哪种方法更优？
-   如果 _nums2 _的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？



```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * 利用哈希表，事件复杂度 O(n)，空间复杂度 O(n)
 * 因为允许结果重复，所以哈希表的值为出现过的次数，使用过后次数-1
 */
var intersect = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) return [];

  var map = {},
    i,
    len;
  for (i = 0, len = nums1.length; i < len; i++) {
    if (map[nums1[i]] == null) {
      map[nums1[i]] = 1;
    } else {
      map[nums1[i]] += 1;
    }
  }

  var res = [];
  for (i = 0, len = nums2.length; i < len; i++) {
    if (map[nums2[i]] > 0) {
      res.push(nums2[i]);
      map[nums2[i]] -= 1;
    }
  }

  return res;
};
```