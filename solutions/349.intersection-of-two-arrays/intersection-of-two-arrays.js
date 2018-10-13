/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var map = nums1.reduce((map, num) => {
    	if (!map[num]) {
    		map[num] = true;
    	}
    	return map;
    }, {});

    return nums2.reduce((acc, num) => {
    	if (map[num]) {
    		acc.push(num);
    		map[num] = false;
    	}
    	return acc;
    }, []);
};