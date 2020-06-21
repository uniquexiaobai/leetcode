---
id: monotonic-array
title: 932. Monotonic Array
---

# Monotonic Array

如果数组是单调递增或单调递减的，那么它是_单调的_。

如果对于所有 `i <= j`，`A[i] <= A[j]`，那么数组 `A` 是单调递增的。 如果对于所有 `i <= j`，`A[i]> = A[j]`，那么数组 `A` 是单调递减的。

当给定的数组 `A` 是单调数组时返回 `true`，否则返回 `false`。





**示例 1：**

**输入：**\[1,2,2,3] **输出：**true

**示例 2：**

**输入：**\[6,5,4,4] **输出：**true

**示例 3：**

**输入：**\[1,3,2] **输出：**false

**示例 4：**

**输入：**\[1,2,4,5] **输出：**true

**示例 5：**

**输入：**\[1,1,1] **输出：**true



**提示：**

1.  `1 <= A.length <= 50000`
2.  `-100000 <= A[i] <= 100000`



```javascript
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
	var len = A.length,
		desc = 0,
		asc = 0,
		i = 0;

    if (len <= 1) return true;

    while (i < len - 1) {
    	if (asc && desc) return false;

    	if (A[i] < A[i + 1]) {
    		asc += 1;
    	} else if (A[i] > A[i + 1]) {
    		desc += 1;
    	}

    	i += 1;
    }

    return asc === 0 || desc === 0;
};

```