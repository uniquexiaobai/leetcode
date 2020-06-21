---
id: symmetric-tree
title: 101. Symmetric Tree
---

# Symmetric Tree

给定一个二叉树，检查它是否是镜像对称的。



例如，二叉树 `[1,2,2,3,4,4,3]` 是对称的。

1 / \\ 2 2 / \\ / \\ 3 4 4 3



但是下面这个 `[1,2,2,null,3,null,3]` 则不是镜像对称的:

1 / \\ 2 2 \\ \\ 3 3



**进阶：**

你可以运用递归和迭代两种方法解决这个问题吗？



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
var isSymmetric = function(root) {
	function _isSymmetric(lt, rt) {
		if (!lt && !rt) return true;
		if (!lt || !rt || lt.val !== rt.val) return false;
		return _isSymmetric(lt.left, rt.right) && _isSymmetric(lt.right, rt.left);
	}

	if (!root) return true;
	return _isSymmetric(root.left, root.right);
};
```