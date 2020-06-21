---
id: valid-anagram
title: 242. Valid Anagram
---

# Valid Anagram

给定两个字符串 _s_ 和 _t_ ，编写一个函数来判断 _t_ 是否是 _s_ 的字母异位词。

**示例 1:**

**输入:** _s_ = "anagram", _t_ = "nagaram" **输出:** true

**示例 2:**

**输入:** _s_ = "rat", _t_ = "car" **输出: **false

**说明:**  
你可以假设字符串只包含小写字母。

**进阶:**  
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？



```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
	if (s === t) return true;

	var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		a = 97,
		i = 0,
		len = s.length,
		res;

	for (; i < len; i++) {
		arr[s.charCodeAt(i) - a] ++;
		arr[t.charCodeAt(i) - a] --;
	}

	res = arr.every(function(n) {
		return n === 0;
	});

	return res;
};

/*
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
	if (s === t) return true;
	
	var map1 = {},
		map2 = {},
		keys1,
		keys2,
		i = 0,
		len = s.length;

	for (; i < len; i++) {
		map1[s[i]] = (map1[s[i]] || 0) + 1;
		map2[t[i]] = (map2[t[i]] || 0) + 1;
	}

	keys1 = Object.keys(map1);
	keys2 = Object.keys(map2);

	if (keys1.length !== keys2.length) return false;

	for (i = 0, len = keys1.length; i < len; i++) {
		if (map1[keys1[i]] !== map2[keys1[i]]) return false;
	}

	return true;
};
*/
```