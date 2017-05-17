/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	var temp = new Set(nums1);
	var result = new Set();

	for (var i = 0; i < nums2.length; i ++) {
		if (temp.has(nums2[i])) {
			result.add(nums2[i]);
		}
	}

	return Array.from(result);
};