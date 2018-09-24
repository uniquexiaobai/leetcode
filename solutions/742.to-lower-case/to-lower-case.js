/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
	var code;

    return str.split('').map(c => {
    	code = c.charCodeAt(0);

    	if (code >= 65 && code <= 90) {
    		return String.fromCharCode(code + 32);
    	}
    	return c;
    }).join('');
};