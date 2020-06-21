---
id: pascals-triangle
title: 118. Pascal's Triangle
---

# Pascal's Triangle

给定一个非负整数 _numRows，_生成杨辉三角的前 _numRows _行。

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

**示例:**

**输入:** 5 **输出:** \[ \[1], \[1,1], \[1,2,1], \[1,3,3,1], \[1,4,6,4,1] ]



```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	if (numRows === 0) return [];
	if (numRows === 1) return [[1]];

	var last = [1],
		res = [last],
        curr,
        i;

	while (numRows-- > 1) {
		curr = [1];
		for (i = 0, len = last.length - 1; i < len; i++) {
			curr.push(last[i] + last[i + 1]);
		}
		curr.push(1);

		last = curr;
		res.push(last);
	}

	return res;
};
```