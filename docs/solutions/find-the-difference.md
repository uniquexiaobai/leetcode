---
id: find-the-difference
title: 389. Find the Difference
---

# Find the Difference

给定两个字符串 _**s**_ 和 _**t**_，它们只包含小写字母。

字符串 **_t_** 由字符串 **_s_** 随机重排，然后在随机位置添加一个字母。

请找出在 _**t**_ 中被添加的字母。



**示例 1：**

**输入：**s = "abcd", t = "abcde" **输出：**"e" **解释：**'e' 是那个被添加的字母。

**示例 2：**

**输入：**s = "", t = "y" **输出：**"y"

**示例 3：**

**输入：**s = "a", t = "aa" **输出：**"a"

**示例 4：**

**输入：**s = "ae", t = "aea" **输出：**"a"



**提示：**

-   `0 <= s.length <= 1000`
-   `t.length == s.length + 1`
-   `s` 和 `t` 只包含小写字母



```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var str = s + t,
        len = str.length,
        res = 0;

    for (var i = 0; i < len; i++) {
        res ^= str.charCodeAt(i);
    }

    return String.fromCharCode(res);
};
```