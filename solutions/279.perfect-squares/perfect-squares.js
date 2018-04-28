/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
	var queue = [[n, 0]];
	var visited = { n: true };

	while (queue.length) {
		var node = queue.shift();
		var num = node[0];
		var step = node[1];

		for (var i = 1; ; i ++) {
			var a = num - i * i;

			if (a < 0) break;
			if (a === 0) return step + 1;
			if (visited[a]) continue;
			queue.push([a, step + 1]);
			visited[a] = true;
		}
	}
};