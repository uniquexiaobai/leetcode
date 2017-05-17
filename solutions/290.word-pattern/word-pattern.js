/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
	var p = pattern.split('');
	var s = str.split(' ');

	if (p.length !== s.length) return false;
	var set = new Set();
	var map = {};

	for (var i = 0; i < p.length; i ++) {
		if (map[p[i]]) {
			if (map[p[i]] !== s[i]) return false;
		} else if (set.has(s[i])) {
			return false;
		} else {
			map[p[i]] = s[i];
			set.add(s[i]);
		}
	}
	return true;
};