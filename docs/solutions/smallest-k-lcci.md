---
id: smallest-k-lcci
title: 1000021. Smallest K LCCI
---

# Smallest K LCCI

设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

**示例：**

**输入：** arr = \[1,3,5,7,2,4,6,8], k = 4 **输出：** \[1,2,3,4]

**提示：**

-   `0 <= len(arr) <= 100000`
-   `0 <= k <= min(100000, len(arr))`



```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
function Heap(arr, compare) {
  var list = [null];
  var size = 0;
  var compare = compare || minCompare;

  if (arr) {
    list = list.concat(arr);
    size = arr.length;
    for (var i = size >> 1; i >= 1; i--) {
      siftDown(i);
    }
  }

  function minCompare(a, b) {
    return a < b;
  }

  function swap(x, y) {
    var temp = list[x];
    list[x] = list[y];
    list[y] = temp;
  }

  function siftUp(n) {
    while (n > 1 && compare(list[n], list[n >> 1])) {
      swap(n, n >> 1);
      n >>= 1;
    }
  }

  function siftDown(n) {
    while (n << 1 <= size) {
      var j = n << 1;

      if (j + 1 <= size && compare(list[j + 1], list[j])) {
        j += 1;
      }
      if (compare(list[j], list[n])) {
        swap(n, j);
      }

      n = j;
    }
  }

  this.insert = function (value) {
    list.push(value);
    size += 1;

    siftUp(size - 1);
  };

  this.pop = function () {
    if (size <= 0) return;

    var result = list[1];

    swap(1, size);

    list.length -= 1;
    size -= 1;

    siftDown(1);

    return result;
  };

  this.peek = function() {
    return list[1];
  }

  this.size = function () {
    return size;
  };

  this.toArray = function () {
    return list.slice(1);
  };
}

var smallestK = function (arr, k) {
  if (k === 1) {
    return Math.min.apply(null, arr);
  }

  var maxHeap = new Heap(arr.slice(0, k), (a, b) => a > b);

  for (var i = k, len = arr.length; i < len; i++) {
    if (arr[i] < maxHeap.peek()) {
      maxHeap.pop();
      maxHeap.insert(arr[i]);
    }
  }

  return maxHeap.toArray();
};
```