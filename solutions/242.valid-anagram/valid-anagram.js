/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
	if (s === '' && t === '') return true;
	
	return s.split('').sort().toString() === t.split('').sort().toString();
};