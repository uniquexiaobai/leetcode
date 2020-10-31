---
id: minimum-depth-of-binary-tree
title: 111. Minimum Depth of Binary Tree
---

# Minimum Depth of Binary Tree

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

**说明：**叶子节点是指没有子节点的节点。



**示例 1：**

![](https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg)

**输入：**root = \[3,9,20,null,null,15,7] **输出：**2

**示例 2：**

**输入：**root = \[2,null,3,null,4,null,5,null,6] **输出：**5



**提示：**

-   树中节点数的范围在 `[0, 105]` 内
-   `-1000 <= Node.val <= 1000`



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
 * @return {number}
 */
 
var minDepth = function(root) {
	if (!root) return 0;
	if (!root.left && !root.right) return 1;
	if (root.left && root.right) return Math.min(minDepth(root.left), minDepth(root.right)) + 1;

	return minDepth(root.left || root.right) + 1;
};
```