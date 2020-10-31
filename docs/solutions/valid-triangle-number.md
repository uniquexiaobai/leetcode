---
id: valid-triangle-number
title: 611. Valid Triangle Number
---

# Valid Triangle Number

给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。

**示例 1:**

**输入:** \[2,2,3,4] **输出:** 3 **解释:** 有效的组合是: 2,3,4 (使用第一个 2) 2,3,4 (使用第二个 2) 2,2,3

**注意:**

1.  数组长度不超过1000。
2.  数组里整数的范围为 \[0, 1000]。



```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 1. 三重循环，事件复杂度 O(n3)
 * 2. 先排序，再固定最长一边，双指针扫描
 */
var triangleNumber = function (nums) {
  if (nums.length < 3) return 0;

  var count = 0,
    i,
    l,
    r,
    len = nums.length;

  nums.sort((a, b) => a - b);

  for (i = len - 1; i >= 2; i--) {
    l = 0;
    r = i - 1;

    while (l < r) {
      if (nums[l] + nums[r] > nums[i]) {
        count += r - l;
        r -= 1;
      } else {
        l += 1;
      }
    }
  }

  return count;
};
```