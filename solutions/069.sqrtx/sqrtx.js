/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
    if (x < 100) {
        switch (true) {
    		case x < 1: return 0;
    		case x < 4: return 1;
    		case x < 9: return 2;
    		case x < 16: return 3;
    		case x < 25: return 4;
    		case x < 36: return 5;
    		case x < 49: return 6;
    		case x < 64: return 7;
    		case x < 81: return 8;
    		default: return 9;
    	}
    }
	
	var l = 0, r = (x >> 1) + 1;
	while (l <= r) {
		var mid = (l + r) >> 1;

		if (x >= mid * mid && x < (mid + 1) * (mid + 1)) {
			return mid;
		}
		else if (x > mid * mid) {
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}
};

/* 牛顿迭代法
var mySqrt = function(x) {
    if (x === 0) return 0;  
	var last = 0, res = 1;
    
	while (last.toFixed(1) !== res.toFixed(1)) {
		last = res;
		res = ((res + x / res) / 2);
	}
	return ~~res;
};
*/
