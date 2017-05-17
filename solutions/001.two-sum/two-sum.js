/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};

  for (var i = 0; i < nums.length; i ++) {
  	var wife = target - nums[i];

  	if (map[wife] === undefined) {
  		map[nums[i]] = i;
  	} else {
  		return [map[wife], i];
  	}
  }
};