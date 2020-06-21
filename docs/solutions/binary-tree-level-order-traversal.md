---
id: binary-tree-level-order-traversal
title: 102. Binary Tree Level Order Traversal
---

# Binary Tree Level Order Traversal

给你一个二叉树，请你返回其按 **层序遍历** 得到的节点值。 （即逐层地，从左到右访问所有节点）。



**示例：**  
二叉树：`[3,9,20,null,null,15,7]`,

3 / \\ 9 20 / \\ 15 7

返回其层次遍历结果：

\[ \[3], \[9,20], \[15,7] ]



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
 * @return {number[][]}
 */

var levelOrder = function(root) {
	if (!root) return [];

	var result = [],
		query = [root],
		acc,
		curr,
		i,
		len;

	while (query.length) {
		acc = [];
		for (i = 0, len = query.length; i < len; i++) {
			curr = query.shift();
			acc.push(curr.val);
			if (curr.left) query.push(curr.left);
			if (curr.right) query.push(curr.right);
		}
		result.push(acc);
	}

	return result;
};

```