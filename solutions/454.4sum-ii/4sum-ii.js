/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
	if (A.length === 0) return 0;
	var map = {};
	var res = 0;

	for (var i = 0; i < A.length; i ++) {
		for (var j = 0; j < B.length; j ++) {
			var k = A[i] + B[j];

			map[k] = !map[k] ? 1 : map[k] + 1;
		}
	}
	for (i = 0; i < C.length; i ++) {
		for (j = 0; j < D.length; j ++) {
			var target = - C[i] - D[j];

			if (map[target]) 
				res += map[target];
		}
	}
	return res;
};