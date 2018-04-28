/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	function swap(nums, i, j) {
		if (i === j) return;
		var temp = nums[i];

		nums[i] = nums[j];
		nums[j] = temp;
	}

	// [0...lt] = 0, [gt...length - 1] = 2
	var lt = -1;
	var gt = nums.length;
	var i = 0;

	while (i < gt) {
		if (nums[i] === 0) {
			lt ++;
			swap(nums, lt, i);
			i ++;
		} else if (nums[i] === 1) {
			i ++
		} else {
			gt --;
			swap(nums, gt, i);
		}
	}
};
