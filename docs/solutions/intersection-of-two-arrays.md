---
id: intersection-of-two-arrays
title: 349. Intersection of Two Arrays
---

# Intersection of Two Arrays

给定两个数组，编写一个函数来计算它们的交集。



**示例 1：**

**输入：**nums1 = \[1,2,2,1], nums2 = \[2,2] **输出：**\[2]

**示例 2：**

**输入：**nums1 = \[4,9,5], nums2 = \[9,4,9,8,4] **输出：**\[9,4]



**说明：**

-   输出结果中的每个元素一定是唯一的。
-   我们可以不考虑输出结果的顺序。



```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * 利用哈希表，事件复杂度 O(n)，空间复杂度 O(n)
 * 因为结果去重，所以哈希表的值为是否存在，无需记录出现的次数
 */
var intersection = function (nums1, nums2) {
  if (!nums1.length || !nums2.length) return [];

  var map = {}, res = [], i = 0, len;
  for (len = nums1.length; i < len; i++) {
    if (!map[nums1[i]]) {
      map[nums1[i]] = true;
    }
  }

  for (i = 0, len = nums2.length; i < len; i++) {
    if (map[nums2[i]]) {
      res.push(nums2[i]);
      map[nums2[i]] = false;
    }
  }

  return res;
};
```