/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.length) return -1;

    var l = 0, r = nums.length - 1;

    while (l <= r) {
    	mid = (l + r) >> 1;
    	if (target === nums[mid]) {
    		return mid;
    	} else if (target < nums[mid]) {
    		r = mid - 1;
    	} else {
    		l = mid + 1;
    	}
    }

    return -1;
};