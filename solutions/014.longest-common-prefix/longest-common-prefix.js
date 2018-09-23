/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    if (strs.length === 1) return strs[0];

    function minPrefix(str1, str2, len) {
        if (!len) return '';
    	var prefix = '';

    	for (var i = 0; i < len; i++) {
    		if (str1[i] === str2[i]) {
    			prefix += str1[i];
    		} else {
    			break;
    		}
    	}
    	return prefix;
    }

    var result = strs[0];
    for (var i = 1; i < strs.length; i++) {
    	result = minPrefix(result, strs[i], Math.min(result.length, strs[i].length));
        if (!result.length) break;
    }
    return result;
};