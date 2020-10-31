---
id: edit-distance
title: 72. Edit Distance
---

# Edit Distance

给你两个单词 _word1_ 和 _word2_，请你计算出将 _word1_ 转换成 _word2 _所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

1.  插入一个字符
2.  删除一个字符
3.  替换一个字符



**示例 1：**

**输入：**word1 = "horse", word2 = "ros" **输出：**3 **解释：** horse -> rorse (将 'h' 替换为 'r') rorse -> rose (删除 'r') rose -> ros (删除 'e')

**示例 2：**

**输入：**word1 = "intention", word2 = "execution" **输出：**5 **解释：** intention -> inention (删除 't') inention -> enention (将 'i' 替换为 'e') enention -> exention (将 'n' 替换为 'x') exention -> exection (将 'n' 替换为 'c') exection -> execution (插入 'u')



```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	if (word1 === word2) return 0;
  if (!word1.length || !word2.length) return word1.length || word2.length;

	var cache = {};

	function _distance(i, j) {
		if (i < 0) return j + 1;
		if (j < 0) return i + 1;

    if (!cache[[i - 1, j - 1]]) {
      cache[[i - 1, j - 1]] = _distance(i - 1, j - 1);
    }

		if (word1[i] === word2[j]) {
			return cache[[i - 1, j - 1]];
		}

		if (!cache[[i - 1, j]]) {
      cache[[i - 1, j]] = _distance(i - 1, j);
    }
		if (!cache[[i, j - 1]]) {
      cache[[i, j - 1]] = _distance(i, j - 1);
    }

		return Math.min(
			cache[[i - 1, j]] + 1, 
			cache[[i, j - 1]] + 1,
			cache[[i - 1, j - 1]] + 1
		);
	}

	return _distance(word1.length - 1, word2.length - 1);
};
```