---
id: single-number-iii
title: 260. Single Number III
---

# Single Number III

给定一个整数数组 `nums`，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。

**示例 :**

**输入:** `[1,2,1,3,2,5]` **输出:** `[3,5]`

**注意：**

1.  结果输出的顺序并不重要，对于上面的例子， `[5, 3]` 也是正确答案。
2.  你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？



```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var map = {}, i = 0, len = nums.length, num, res = [];

  for (; i < len; i++) {
    num = nums[i];
    if (!map[nums[i]]) {
      map[nums[i]] = 0;
    }
    map[nums[i]] += 1;
  }

  for (i = 0; i < len; i++) {
    num = nums[i];
    if (map[num] === 1) {
      res.push(num);
    }
  }

  return res;
};
```