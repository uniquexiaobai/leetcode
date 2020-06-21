---
id: number-of-boomerangs
title: 447. Number of Boomerangs
---

# Number of Boomerangs

给定平面上_ n _对不同的点，“回旋镖” 是由点表示的元组 `(i, j, k)` ，其中 `i` 和 `j` 之间的距离和 `i` 和 `k` 之间的距离相等（**需要考虑元组的顺序**）。

找到所有回旋镖的数量。你可以假设_ n _最大为 **500**，所有点的坐标在闭区间** \[-10000, 10000] **中。

**示例:**

**输入:** \[\[0,0],\[1,0],\[2,0]] **输出:** 2 **解释:** 两个回旋镖为 **\[\[1,0],\[0,0],\[2,0]]** 和 **\[\[1,0],\[2,0],\[0,0]]**



```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
	function dis(p1, p2) {
		return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
	}

	if (points.length < 3) return 0;
	var res = 0;

	for (var i = 0, len = points.length; i < len; i ++) {
		var map = {};

		for (var j = 0; j < len; j ++) {
			if (i === j) continue;
			var distance = dis(points[i], points[j]);

			map[distance] = map[distance] ? map[distance] + 1 : 1;
		}
		Object.values(map).forEach((value) => {
			res += (value - 1) * value;
		});
	}
	return res;
};

```