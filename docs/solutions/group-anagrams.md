---
id: group-anagrams
title: 49. Group Anagrams
---

# Group Anagrams

给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

**示例:**

**输入:** `["eat", "tea", "tan", "ate", "nat", "bat"]` **输出:** \[ \["ate","eat","tea"], \["nat","tan"], \["bat"] ]

**说明：**

-   所有输入均为小写字母。
-   不考虑答案输出的顺序。



```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	if (!strs.length) return [];
	var res = [];
	var map = {};

	strs.forEach((str) => {
		var sortedStr = str.split('').sort().join('');

		if (!map[sortedStr]) {
			map[sortedStr] = [str];
		} else {
			map[sortedStr].push(str);
		}
	})

	Object.values(map).forEach((value) => {
		res.push(value.sort());
	});
	return res;
};
```