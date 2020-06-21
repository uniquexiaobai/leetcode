---
id: binary-tree-right-side-view
title: 199. Binary Tree Right Side View
---

# Binary Tree Right Side View

给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

**示例:**

**输入:** \[1,2,3,null,5,null,4] **输出:** \[1, 3, 4] **解释: **1 &lt;--- / \\ 2 3 &lt;--- \\ \\ 5 4 &lt;---



```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
	var result = [];
	var queue = [];

	queue.push(root);
	while (queue.length) {
	    var size = queue.length;
		var temp = [];

		for (var i = 0; i < size; i ++) {
			var head = queue.shift();

			temp.push(head.val);
			if (head.left)
				queue.push(head.left);
			if (head.right)
				queue.push(head.right);
		}

		result.push(temp.pop());
		temp.length = 0;
	}

	return result;
};
```