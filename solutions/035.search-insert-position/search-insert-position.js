/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums.length || target <= nums[0]) return 0;
    if (target === nums[nums.length - 1]) return nums.length - 1;
    if (target > nums[nums.length - 1]) return nums.length;
    var l = 0, r = nums.length - 1, mid;

    while (l <= r) {
    	mid = (l + r) >> 1;
    	if (nums[mid] === target) break;
    	if (target < nums[mid]) {
    		r = mid - 1;
    	} else {
    		l = mid + 1;
    	}
    }

    if (target <= nums[mid]) {
    	return mid;
    } else {
    	return mid + 1;
    }
};