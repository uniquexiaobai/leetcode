/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	return nums.reduce((total, num, index) => total += (index - num), nums.length);
};