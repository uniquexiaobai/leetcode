/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var getWife = function (char) {
    	switch (char) {
    		case ')': return '(';
    		case '}': return '{';
    		case ']': return '[';
    		default: return;
    	}
    }
    
    var stack = [];
    var arr = s.split('');

    for (var i = 0; i < arr.length; i ++) {
    	if (arr[i] === '(' || arr[i] === '{' || arr[i] === '[') {
    		stack.push(arr[i]);
    	} else if (!stack.length || getWife(arr[i]) !== stack.pop()) {
    		return false;
    	}
    }

    return stack.length ? false : true;
};