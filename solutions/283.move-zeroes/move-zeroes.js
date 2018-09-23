/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	for (var i = 0, k = 0, len = nums.length; i < len; i ++) {
		if (nums[i]) {
			if (i !== k) {
				nums[k] = nums[i];
				nums[i] = 0;
			} 
			k++;
		}
	}
};