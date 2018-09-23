/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (var i = 0, k = 0, len = nums.length; i < len; i++) {
    	if (nums[i] !== val) {
    		if (i !== k) {
    			nums[k] = nums[i];
    		}
    		k++;
    	}
    }
    return k;
};