---
id: balanced-binary-tree
title: 110. Balanced Binary Tree
---

# Balanced Binary Tree

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

> 一个二叉树_每个节点 _的左右两个子树的高度差的绝对值不超过 1 。



**示例 1：**

![](https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg)

**输入：**root = \[3,9,20,null,null,15,7] **输出：**true

**示例 2：**

![](https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg)

**输入：**root = \[1,2,2,3,3,null,null,4,4] **输出：**false

**示例 3：**

**输入：**root = \[] **输出：**true



**提示：**

-   树中的节点数在范围 `[0, 5000]` 内
-   `-104 <= Node.val <= 104`



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
 * @return {boolean}
 */
 
var isBalanced = function(root) {
	if (!root) return true;
    
	if (Math.abs(getMaxDepth(root.left) - getMaxDepth(root.right)) > 1) return false;
	return isBalanced(root.left) && isBalanced(root.right);
};

function getMaxDepth(node, depth = 1) {
    if (!node) return depth;
    return Math.max(getMaxDepth(node.left, depth + 1), getMaxDepth(node.right, depth + 1));
}

/*
var isBalanced = function(root) {
	function getDepth(node) {
		if (!node) return 0;

		var dl = getDepth(node.left);
		if (dl === -1) return -1;

		var dr = getDepth(node.right);
		if (dr === -1) return -1;
		
		if (Math.abs(dl - dr) > 1) return -1;
		return Math.max(dl, dr) + 1;
	}

	if (!root) return true;
	if (getDepth(root) === -1) return false;
	return true;
};
*/
```