---
id: maximum-depth-of-n-ary-tree
title: 774. Maximum Depth of N-ary Tree
---

# Maximum Depth of N-ary Tree

给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

例如，给定一个 `3叉树` :



![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/narytreeexample.png)



我们应返回其最大深度，3。

**说明:**

1.  树的深度不会超过 `1000`。
2.  树的节点总不会超过 `5000`。



```javascript
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */

var maxDepth = function(root) {
	if (!root) return 0;
	if (!root.children || !root.children.length) return 1;

	return Math.max(...root.children.map(maxDepth)) + 1;
};

```