/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    function _swap(arr, i, j) {
		var temp = arr[i];

		arr[i] = arr[j];
		arr[j] = temp;
	}

	var k = 0;
	for (var i = 0; i < nums.length; i ++) {
		if (nums[i]) {
			i !== k ? _swap(nums, i, k) : '';
			k ++;
		}
	}
};