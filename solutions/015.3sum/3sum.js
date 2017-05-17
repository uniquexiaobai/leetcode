/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	if (nums.length < 3) return [];
	var result = [];
	var last = NaN;
	var map = {};

	nums.sort((a, b) => a - b);
	for (var k = 0; k < nums.length - 2; k ++) {
		if (last === nums[k]) continue;
		last = nums[k];
		var target = -nums[k];
		var i = k + 1, j = nums.length - 1;

		while (i < j) {
			if (nums[i] + nums[j] === target) {
				if (map[nums[i]] === undefined || map[nums[i]] !== nums[j]) {
					result.push([nums[k], nums[i], nums[j]]);
					map[nums[i]] = nums[j];
				}
				i ++;
				j --;
			} else if (nums[i] + nums[j] < target) {
				i ++;
			} else {
				j --;
			}
		}
	}
	return result;
};