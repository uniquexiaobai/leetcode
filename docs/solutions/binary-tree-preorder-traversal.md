---
id: binary-tree-preorder-traversal
title: 144. Binary Tree Preorder Traversal
---

# Binary Tree Preorder Traversal

给你二叉树的根节点 `root` ，返回它节点值的 **前序**_ _遍历。



**示例 1：**

![](https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg)

**输入：**root = \[1,null,2,3] **输出：**\[1,2,3]

**示例 2：**

**输入：**root = \[] **输出：**\[]

**示例 3：**

**输入：**root = \[1] **输出：**\[1]

**示例 4：**

![](https://assets.leetcode.com/uploads/2020/09/15/inorder_5.jpg)

**输入：**root = \[1,2] **输出：**\[1,2]

**示例 5：**

![](https://assets.leetcode.com/uploads/2020/09/15/inorder_4.jpg)

**输入：**root = \[1,null,2] **输出：**\[1,2]



**提示：**

-   树中节点数目在范围 `[0, 100]` 内
-   `-100 <= Node.val <= 100`



**进阶：**递归算法很简单，你可以通过迭代算法完成吗？



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
var preorderTraversal = function(root) {
  var ret = [];

  function preorder(head) {
    if (!head) return;
    ret.push(head.val);
    preorder(head.left);
    preorder(head.right);
  }

  preorder(root);

  return ret;
};
```