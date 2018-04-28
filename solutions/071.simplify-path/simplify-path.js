/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
	var arr = path.split('/');
	var stack = [];

	for (var i = 0; i < arr.length; i ++) {
		var s = arr[i];

		if (s === '..') {
			stack.pop();
		} else if (s === '...') {
			stack.push(s);
		} else if (/[a-zA-Z]/.test(s)) {
			stack.push(s);
		} 
	}

	return '/' + stack.join('/');
};