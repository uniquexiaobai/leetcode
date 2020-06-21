---
id: validate-binary-search-tree
title: 98. Validate Binary Search Tree
---

# Validate Binary Search Tree

给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

-   节点的左子树只包含**小于**当前节点的数。
-   节点的右子树只包含**大于**当前节点的数。
-   所有左子树和右子树自身必须也是二叉搜索树。

**示例 1:**

**输入:** 2 / \\ 1 3 **输出:** true

**示例 2:**

**输入: **5 / \\ 1 4 / \\ 3 6 **输出:** false **解释:** 输入为: \[5,1,4,null,null,3,6]。 根节点的值为 5 ，但是其右子节点值为 4 。



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

var isValidBST = function(root) {
	function isValid(root, min, max) {
		if (root === null) return true;
		if (root.val <= min) return false;
		if (root.val >= max) return false;

		return isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
	}

	return isValid(root, -Infinity, Infinity);
};

/*
var isValidBST = function(root) {
	function inorder(node, array) {
		if (node) {
			inorder(node.left, array);
			array.push(node.val);
			inorder(node.right, array);
		}
	}

	var array = [],
		i = 0,
		len;

	inorder(root, array);

	for (i = 0, len = array.length; i < len - 1; i++) {
		if (array[i] >= array[i + 1]) return false;
	}

	return true;
};
*/
```