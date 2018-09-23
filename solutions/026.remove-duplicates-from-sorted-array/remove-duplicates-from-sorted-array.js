/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) return nums.length;
    
    for (var i = 0, k = 1, len = nums.length - 1; i < len; i++) {
    	if (nums[i] !== nums[i + 1]) {
    		nums[k] = nums[i + 1];
    		k++;
    	}
    }

    return k;
};