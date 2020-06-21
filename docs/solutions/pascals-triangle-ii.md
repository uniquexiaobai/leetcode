---
id: pascals-triangle-ii
title: 119. Pascal's Triangle II
---

# Pascal's Triangle II

给定一个非负索引 _k_，其中 _k_ ≤ 33，返回杨辉三角的第 _k _行。

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

**示例:**

**输入:** 3 **输出:** \[1,3,3,1]

**进阶：**

你可以优化你的算法到 _O_(_k_) 空间复杂度吗？



```javascript
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];

    var ret = [1],
    	cache = [];

    function fac(n) {
    	if (n <= 1) return 1;

    	if (!cache[n]) {
    		cache[n] = n * fac(n - 1);
    	}

    	return cache[n];
    }

    for (var i = 1; i < rowIndex; i++) {
    	ret.push(fac(rowIndex) / (fac(rowIndex - i) * fac(i)));
    }
    ret.push(1);

    return ret;
};
```