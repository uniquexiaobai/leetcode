---
id: valid-parentheses
title: 20. Valid Parentheses
---

# Valid Parentheses

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串，判断字符串是否有效。

有效字符串需满足：

1.  左括号必须用相同类型的右括号闭合。
2.  左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

**示例 1:**

**输入:** "()" **输出:** true

**示例 2:**

**输入:** "()\[]{}" **输出:** true

**示例 3:**

**输入:** "(]" **输出:** false

**示例 4:**

**输入:** "(\[)]" **输出:** false

**示例 5:**

**输入:** "{\[]}" **输出:** true



```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [],
    	map = {')': '(', '}': '{', ']': '['},
    	i = 0,
    	len = s.length;

    for (; i < len; i++) {
    	if (!(s[i] in map)) {
    		stack.push(s[i]);
    	} else if (!stack.length || map[s[i]] !== stack.pop()) {
    		return false;
    	}
    }

    return !stack.length
};
```