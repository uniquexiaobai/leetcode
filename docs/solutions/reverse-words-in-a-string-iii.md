---
id: reverse-words-in-a-string-iii
title: 557. Reverse Words in a String III
---

# Reverse Words in a String III

给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。



**示例：**

**输入：**"Let's take LeetCode contest" **输出：**"s'teL ekat edoCteeL tsetnoc"



********提示：********

-   在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。



```javascript
/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  function _reverse(str) {
    var res = '',
      j = str.length - 1;

    while (j >= 0) {
      res += str[j];
      j -= 1;
    }

    return res;
  }

  var arr = s.split(' ');

  return arr.map(_reverse).join(' ');
};

```