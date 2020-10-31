---
id: hua-dong-chuang-kou-de-zui-da-zhi-lcof
title: 100336. 滑动窗口的最大值 LCOF
---

# 滑动窗口的最大值 LCOF

给定一个数组 `nums` 和滑动窗口的大小 `k`，请找出所有滑动窗口里的最大值。

**示例:**

**输入:** _nums_ = `[1,3,-1,-3,5,3,6,7]`, 和 _k_ = 3 **输出: **`[3,3,5,5,6,7] 解释: `滑动窗口的位置 最大值 --------------- ----- \[1 3 -1] -3 5 3 6 7 3 1 \[3 -1 -3] 5 3 6 7 3 1 3 \[-1 -3 5] 3 6 7 5 1 3 -1 \[-3 5 3] 6 7 5 1 3 -1 -3 \[5 3 6] 7 6 1 3 -1 -3 5 \[3 6 7] 7



**提示：**

你可以假设 _k _总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

注意：本题与主站 239 题相同：<https://leetcode-cn.com/problems/sliding-window-maximum/>



```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k <= 1) return nums;

  // 单调队列，第一个值最大，自大到小排列
  function queuePush(queue, num) {
    while (queue.length && num > queue[queue.length - 1]) {
      queue.pop();
    }
    queue.push(num);
  }
  function queuePop(queue, num) {
    if (queue[0] === num) {
      return queue.shift();
    }
    return queue[0];
  }

  var ret = [], i = 0, len = nums.length, queue = [];

  while (i < len) {
    if (i < k - 1) {
      queuePush(queue, nums[i]);
    } else {
      queuePush(queue, nums[i]);
      ret.push(queuePop(queue, nums[i - k + 1]));
    }

    i += 1;
  }

  return ret;
};
```