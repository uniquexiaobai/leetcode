---
id: top-k-frequent-elements
title: 347. Top K Frequent Elements
---

# Top K Frequent Elements

给定一个非空的整数数组，返回其中出现频率前 **_k _**高的元素。



**示例 1:**

**输入: **nums = \[1,1,1,2,2,3], k = 2 **输出: **\[1,2]

**示例 2:**

**输入: **nums = \[1], k = 1 **输出: **\[1]



**提示：**

-   你可以假设给定的 _k _总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
-   你的算法的时间复杂度**必须**优于 O(_n_ log _n_) , _n _是数组的大小。
-   题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
-   你可以按任意顺序返回答案。



```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var map = {},
    res = [];

  nums.forEach(num => {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  });

  var keys = Object.keys(map).sort((a, b) => map[b] - map[a]);

  for (var i = 0; i < k; i++) {
    res.push(+keys[i]);
  }

  return res;
};
```