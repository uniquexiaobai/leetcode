---
id: delete-operation-for-two-strings
title: 583. Delete Operation for Two Strings
---

# Delete Operation for Two Strings

给定两个单词 _word1 _和 _word2_，找到使得 _word1 _和 _word2 _相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。



**示例：**

**输入:** "sea", "eat" **输出:** 2 **解释:** 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"



**提示：**

1.  给定单词的长度不超过500。
2.  给定单词中的字符只含有小写字母。



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
      cache[[i, j - 1]] + 1
    );
  }

  return _distance(word1.length - 1, word2.length - 1);
};
```