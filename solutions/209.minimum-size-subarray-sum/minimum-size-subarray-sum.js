/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
	var len = nums.length;
	var i = 0, j = -1;
	var sum = 0;
	var res = len + 1;

	while (i < len) {
		if (j < len - 1 && sum < s) {
			j ++;
			sum += nums[j];
		} else {
			sum -= nums[i];
			i ++;
		}

		if (sum >= s) {
			res = Math.min(res, j - i + 1);
		}
	}
	return res === len + 1 ? 0 : res;
};