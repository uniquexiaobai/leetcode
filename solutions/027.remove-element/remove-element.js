/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    function _swap(arr, i, j) {
		var temp = arr[i];

		arr[i] = arr[j];
		arr[j] = temp;
	} 

	var j = nums.length - 1; // nums(j...nums.length - 1] = val
	var i = 0;           // nums[0...i) != val

	while (i <= j) {
	    if (nums[j] === val) {
	        j --;
	    } else if (nums[i] === val) {
			_swap(nums, i, j);
			j --;
		} else {
			i ++;
		}
	}

	return j + 1;
};