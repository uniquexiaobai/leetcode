---
id: binary-tree-inorder-traversal
title: 94. Binary Tree Inorder Traversal
---

# Binary Tree Inorder Traversal

给定一个二叉树，返回它的_中序 _遍历。

**示例:**

**输入:** \[1,null,2,3] 1 \\ 2 / 3 **输出:** \[1,3,2]

**进阶:** 递归算法很简单，你可以通过迭代算法完成吗？



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
var inorderTraversal = function(root) {
  var ret = [];

  function inorder(head) {
    if (!head) return;
    inorder(head.left, ret);
    ret.push(head.val);
    inorder(head.right, ret);
  }

  inorder(root);

  return ret;
};
```