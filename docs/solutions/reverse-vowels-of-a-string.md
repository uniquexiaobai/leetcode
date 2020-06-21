---
id: reverse-vowels-of-a-string
title: 345. Reverse Vowels of a String
---

# Reverse Vowels of a String

编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

**示例 1:**

**输入: **"hello" **输出: **"holle"

**示例 2:**

**输入: **"leetcode" **输出: **"leotcede"

**说明:**  
元音字母不包含字母"y"。



```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (s.length < 2) return s;
    
    var map = {
            'a': true,
            'A': true,
            'e': true,
            'E': true,
            'i': true,
            'I': true,
            'o': true,
            'O': true,
            'u': true,
            'U': true
        },
        arr = s.split(''),
        i = 0,
        j = arr.length - 1,
        temp,
        isVowelI,
        isVowelJ;

	while (i < j) {
        isVowelI = map[arr[i]];
        isVowelJ = map[arr[j]];
        
		if (isVowelI && isVowelJ) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
			i ++;
			j --;
		} else if (isVowelI) {
			j --;
		} else if (isVowelJ) {
			i ++;
		} else {
			i ++;
			j --;
		}
	}
    
	return arr.join('');
};
```