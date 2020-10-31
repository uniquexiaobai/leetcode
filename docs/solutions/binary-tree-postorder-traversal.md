---
id: binary-tree-postorder-traversal
title: 145. Binary Tree Postorder Traversal
---

# Binary Tree Postorder Traversal

给定一个二叉树，返回它的 _后序 _遍历。

**示例:**

**输入:** \[1,null,2,3] 1 \\ 2 / 3 **输出:** \[3,2,1]

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
var postorderTraversal = function(root) {
  var ret = [];

  function postorder(head) {
    if (!head) return;
    postorder(head.left);
    postorder(head.right);
    ret.push(head.val);
  }

  postorder(root);

  return ret;
};
```