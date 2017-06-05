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
