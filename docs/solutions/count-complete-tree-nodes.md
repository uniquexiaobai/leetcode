---
id: count-complete-tree-nodes
title: 222. Count Complete Tree Nodes
---

# Count Complete Tree Nodes

给出一个**完全二叉树**，求出该树的节点个数。

**说明：**

[完全二叉树](https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91/7773232?fr=aladdin)的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

**示例:**

**输入:** 1 / \\ 2 3 / \\ / 4 5 6 **输出:** 6



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
var countNodes = function(root) {
	if (!root) return 0;
	
	var ldepth = 0, rdepth = 0, lnode = root, rnode = root;
	while (lnode) { ldepth ++; lnode = lnode.left }
	while (rnode) { rdepth ++; rnode = rnode.right }

	if (ldepth === rdepth) return (1 << ldepth) - 1;
	return 1 + countNodes(root.left) + countNodes(root.right);
};

```