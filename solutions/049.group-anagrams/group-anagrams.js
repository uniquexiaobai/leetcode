/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	if (!strs.length) return [];
	var res = [];
	var map = {};

	strs.forEach((str) => {
		var sortedStr = str.split('').sort().join('');

		if (!map[sortedStr]) {
			map[sortedStr] = [str];
		} else {
			map[sortedStr].push(str);
		}
	})

	Object.values(map).forEach((value) => {
		res.push(value.sort());
	});
	return res;
};