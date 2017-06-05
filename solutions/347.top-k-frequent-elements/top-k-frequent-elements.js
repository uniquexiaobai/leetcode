/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 
/* O(nlogn)
var topKFrequent = function(nums, k) {
	var result = [];
	var map = {};

	for (var i = 0; i < nums.length; i ++) {
		map[nums[i]] === undefined ? map[nums[i]] = 1 : map[nums[i]] ++;
	}
	var keys = Object.keys(map).sort((a, b) => map[b] - map[a]);
	
	for (i = 0; i < k; i ++) {
		result.push(+keys[i]);
	}
	return result;
};
*/

// O(nlogk)
var topKFrequent = function(nums, k) {
	var heap = new MinHeap();
	var result = [];
	var map = {};

	for (var i = 0; i < nums.length; i ++) {
		map[nums[i]] === undefined ? map[nums[i]] = 1 : map[nums[i]] ++;
	}

	var keys = Object.keys(map);
	for (i = 0; i < keys.length; i ++) {
		var key = keys[i];

		if (heap.size() === k) {
			if (map[key] > heap.top()[0]) {
				heap.pop();
				heap.insert([map[key], +key]);
			}
		} else {
			heap.insert([map[key], +key]);
		}
	}

	while (!heap.isEmpty()) {
		result.push(heap.pop()[1]);
	}
	return result;
};

// 最小堆
function MinHeap() {
	var data = [];
	var len = 0;

	this.insert = function (arr) {
		data[++ len] = arr;
		shiftUp(len);
	}

	this.pop = function () {
		if (!this.isEmpty()) {
			var result = data[1];

			swap(data, 1, len);
			len --;
			shiftDown(1);

			return result; 
		}
	}

	this.top = function () {
		return data[1];
	}

	this.isEmpty = function () {
		return !len;
	}

	this.size = function () {
		return len;
	}

	function shiftUp(n) {
		while (n > 1 && data[n][0] < data[n >> 1][0]) {
			swap(data, n, n >> 1);
			n >>= 1;
		}
	}

	function shiftDown(n) {
		while (n * 2 <= len) {
			var j = n * 2;

			if (j + 1 <= len && data[j + 1][0] < data[j][0])
				j ++;
			if (data[j][0] < data[n][0])
				swap(data, j, n);
			n = j;
		}
	}

	function swap(data, i, j) {
		var temp = data[i];

		data[i] = data[j];
		data[j] = temp;
	}
}
