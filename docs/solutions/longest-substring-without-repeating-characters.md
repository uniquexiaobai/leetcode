---
id: longest-substring-without-repeating-characters
title: 3. Longest Substring Without Repeating Characters
---

# Longest Substring Without Repeating Characters

给定一个字符串，请你找出其中不含有重复字符的 **最长子串 **的长度。

**示例 1:**

**输入: **"abcabcbb" **输出: **3 **解释:** 因为无重复字符的最长子串是 `"abc"，所以其`长度为 3。

**示例 2:**

**输入: **"bbbbb" **输出: **1 **解释: **因为无重复字符的最长子串是 `"b"`，所以其长度为 1。

**示例 3:**

**输入: **"pwwkew" **输出: **3 **解释: **因为无重复字符的最长子串是 `"wke"`，所以其长度为 3。 请注意，你的答案必须是 **子串 **的长度，`"pwke"` 是一个_子序列，_不是子串。



```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var n = s.length, i = 0, j = 0, map = {}, res = 0;

	while (i < n && j < n) {
		if (map[s[j]] != null) {
			map[s[i]] = null;
			i += 1;
		} else {
			map[s[j]] = j;
			j += 1;
			res = Math.max(res, j - i);
		}
	}

	return res;
};
```