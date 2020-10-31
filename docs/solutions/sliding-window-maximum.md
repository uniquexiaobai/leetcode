---
id: sliding-window-maximum
title: 239. Sliding Window Maximum
---

# Sliding Window Maximum

给定一个数组 _nums_，有一个大小为 _k _的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 _k_ 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。



**进阶：**

你能在线性时间复杂度内解决此题吗？



**示例:**

**输入:** _nums_ = `[1,3,-1,-3,5,3,6,7]`, 和 _k_ = 3 **输出: **`[3,3,5,5,6,7] 解释: `滑动窗口的位置 最大值 --------------- ----- \[1 3 -1] -3 5 3 6 7 **3** 1 \[3 -1 -3] 5 3 6 7 **3** 1 3 \[-1 -3 5] 3 6 7 **5** 1 3 -1 \[-3 5 3] 6 7 **5** 1 3 -1 -3 \[5 3 6] 7 **6** 1 3 -1 -3 5 \[3 6 7] **7**



**提示：**

-   `1 <= nums.length <= 10^5`
-   `-10^4 <= nums[i] <= 10^4`
-   `1 <= k <= nums.length`



```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// https://leetcode-cn.com/problems/sliding-window-maximum/solution/dan-diao-dui-lie-by-labuladong/
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