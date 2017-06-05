/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	if (nums.length <= 2) return nums.length;
	var l = 2, r = nums.length; // [0, l)

	while (l < r) {
		if (nums[l] === nums[l - 1] && nums[l] === nums[l - 2]) {
			r --;
			for (var i = l; i < r; i ++) {
				nums[i] = nums[i + 1];
			}
		} else {
			l ++;
		}
	}
	return r;
};