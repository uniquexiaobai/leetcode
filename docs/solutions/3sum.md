---
id: 3sum
title: 15. 3Sum
---

# 3Sum

给你一个包含 _n_ 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 _a，b，c ，_使得 _a + b + c = _0 ？请你找出所有满足条件且不重复的三元组。

**注意：**答案中不可以包含重复的三元组。



**示例：**

给定数组 nums = \[-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： \[ \[-1, 0, 1], \[-1, -1, 2] ]



```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	if (nums.length < 3) return [];
	
	var i,
		len = nums.length,
		left,
		right,
		sum,
		res = [];

	nums.sort(function(a, b) { return a - b });

	for (i = 0; i < len - 1; i++) {
		if (i !== 0 && nums[i] === nums[i - 1]) continue;

		left = i + 1;
		right = len - 1;

		while (left < right) {
			sum = nums[i] + nums[left] + nums[right];

			if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) {
                	left ++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                	right --;
                }

                left ++;
                right --;
			} else if (sum < 0) {
				left ++;
			} else {
				right --;
			}
		}
	}

	return res;
};
```