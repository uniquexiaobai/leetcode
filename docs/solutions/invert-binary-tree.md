---
id: invert-binary-tree
title: 226. Invert Binary Tree
---

# Invert Binary Tree

翻转一棵二叉树。

**示例：**

输入：

4 / \\ 2 7 / \\ / \\ 1 3 6 9

输出：

4 / \\ 7 2 / \\ / \\ 9 6 3 1

**备注:**  
这个问题是受到 [Max Howell ](https://twitter.com/mxcl)的 [原问题](https://twitter.com/mxcl/status/608682016205344768) 启发的 ：

> 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。



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
 * @return {TreeNode}
 */
var invertTree = function(root) {
	function _swapChildren(node) {
		var temp = node.left;

		node.left = node.right;
		node.right = temp;
	}

	function _invertTree(node) {
		if (node === null) return;

		_invertTree(node.left);
		_invertTree(node.right);
		_swapChildren(node);
	}

	_invertTree(root);
	return root;
};

```