/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	function isVowel(c) {
		return /^[aAeEiIoOuU]$/.test(c);
	}
	function swap(arr, i, j) {
		if (arr[i] === arr[j]) return;
		var temp = arr[i];

		arr[i] = arr[j];
		arr[j] = temp;
	}

	if (s.length < 2) return s;
	var arr = s.split('');
	var i = 0, j = arr.length - 1;

	while (i < j) {
		if (isVowel(arr[i]) && isVowel(arr[j])) {
			swap(arr, i, j);
			i ++;
			j --;
		} else if (isVowel(arr[i])) {
			j --;
		} else if (isVowel(arr[j])) {
			i ++;
		} else {
			i ++;
			j --;
		}
	}
	return arr.join('');
};