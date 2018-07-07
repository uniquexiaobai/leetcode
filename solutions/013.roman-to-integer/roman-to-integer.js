/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
    	I: 1,
    	V: 5,
    	X: 10,
    	L: 50,
    	C: 100,
    	D: 500,
    	M: 1000,
    	IV: 4,
    	IX: 9,
    	XL: 40,
    	XC: 90,
    	CD: 400,
    	CM: 900
    };
    var total = 0, i = 0, len = s.length;

    while (i < len) {
    	if (i + 1 < len && map[s[i] + s[i + 1]]) {
    		total += map[s[i] + s[i + 1]];
    		i += 2;
    	} else {
    		total += map[s[i]];
    		i++;
    	}
    }

    return total;
};