---
id: valid-palindrome
title: 125. Valid Palindrome
---

# Valid Palindrome

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

**说明：**本题中，我们将空字符串定义为有效的回文串。

**示例 1:**

**输入:** "A man, a plan, a canal: Panama" **输出:** true

**示例 2:**

**输入:** "race a car" **输出:** false



```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	if (s === '') return true;
	var str = s.toLowerCase().replace(/[^0-9a-z]/g, '');
	var len = str.length;

	for (var i = 0; i < len >> 1; i ++) {
		if (str[i] !== str[len - i - 1]) return false;
	}
	return true;
};

/*
var isPalindrome = function(s) {
	if (s === '') return true;
	var arr = s.toLowerCase().split('');
	var i = 0, j = s.length - 1;
	
	while (i < j) {
		if (/[^0-9a-z]/.test(arr[i])) {
			i ++;
		} else if (/[^0-9a-z]/.test(arr[j])) {
			j --;
		} else if (arr[i] === arr[j]) {
			i ++;
			j --;
		} else {
			return false;
		}
	}	
	return true;
};
*/

```