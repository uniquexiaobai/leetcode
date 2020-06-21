---
id: longest-common-prefix
title: 14. Longest Common Prefix
---

# Longest Common Prefix

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

**示例 1:**

**输入: **\["flower","flow","flight"] **输出:** "fl"

**示例 2:**

**输入: **\["dog","racecar","car"] **输出:** "" **解释:** 输入不存在公共前缀。

**说明:**

所有输入只包含小写字母 `a-z` 。



```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length === 0) return '';
	if (strs.length === 1) return strs[0];

	var minLen = strs.reduce((len, str) => str.length < len ? str.length : len, Infinity),
		start = strs[0],
		res = [];

	for (var i = 0; i < minLen; i ++) {
		if (strs.every((str) => str[i] === start[i])) {
			res.push(start[i]);
		} else {
			break;
		}
	}

	return res.join('');
};
```