---
id: maximum-gap
title: 164. Maximum Gap
---

# Maximum Gap

给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

如果数组元素个数小于 2，则返回 0。

**示例 1:**

**输入:** \[3,6,9,1] **输出:** 3 **解释:** 排序后的数组是 \[1,3,6,9]**_, _**其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。

**示例 2:**

**输入:** \[10] **输出:** 0 **解释:** 数组元素个数小于 2，因此返回 0。

**说明:**

-   你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
-   请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。



```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) return 0;

    var min = Number.MAX_SAFE_INTEGER,
        max = Number.MIN_SAFE_INTEGER,
        i = 0,
        len = nums.length;

    for (; i < len; i++) {
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
    }

    var bucketSize = Math.max(1, Math.floor((max - min) / (len - 1))),
        bucketLenth = Math.floor((max - min) / bucketSize) + 1,
        buckets = [];

    for (i = 0; i < len; i++) {
        var index = Math.floor((nums[i] - min) / bucketSize);

        if (!buckets[index]) {
            buckets[index] = { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER };
        }

        buckets[index].min = Math.min(buckets[index].min, nums[i]);
        buckets[index].max = Math.max(buckets[index].max, nums[i]);
    }

    var lastMax = min,
        maxGap = 0;
    for (i = 0; i < bucketLenth; i++) {
        if (!buckets[i]) continue;

        maxGap = Math.max(maxGap, buckets[i].min - lastMax);
        lastMax = buckets[i].max;
    }

    return maxGap;
};
```