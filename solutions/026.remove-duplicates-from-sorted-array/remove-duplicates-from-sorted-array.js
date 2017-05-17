/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums) return nums.length;

    var r = nums.length; // [r, nums.length - 1]
    var l = 1; // [0, l)
    
    while (l < r) {
      if (nums[l] === nums[l - 1]) {
      	var temp = nums[l];
    
      	r --;
      	for (var i = l; i < r; i ++) {
      		nums[i] = nums[i + 1];
      	}
      	nums[r] = temp;
      } else {
      	l ++;
      }
    }
    
    return r;
};