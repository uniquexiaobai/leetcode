---
id: diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof
title: 100291. 调整数组顺序使奇数位于偶数前面 LCOF
---

# 调整数组顺序使奇数位于偶数前面 LCOF

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。



**示例：**

**输入：**nums = \[1,2,3,4] **输出：**\[1,3,2,4] **注：**\[3,1,2,4] 也是正确的答案之一。



**提示：**

1.  `1 <= nums.length <= 50000`
2.  `1 <= nums[i] <= 10000`



```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  var left = -1, right = nums.length, curr = 0;

  function swap(nums, i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  while (curr < right) {
    if (nums[curr] % 2) {
      curr += 1;
      left += 1;
    } else {
      right -= 1;
      swap(nums, curr, right);;
    }
  }

  return nums;
};
```