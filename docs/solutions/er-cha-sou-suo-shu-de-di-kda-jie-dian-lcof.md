---
id: er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof
title: 100333. 二叉搜索树的第k大节点  LCOF
---

# 二叉搜索树的第k大节点  LCOF

给定一棵二叉搜索树，请找出其中第k大的节点。



**示例 1:**

**输入:** root = \[3,1,4,null,2], k = 1 3 / \\ 1 4 \\ 2 **输出:** 4

**示例 2:**

**输入:** root = \[5,3,6,2,4,null,null,1], k = 3 5 / \\ 3 6 / \\ 2 4 / 1 **输出:** 4



**限制：**

1 ≤ k ≤ 二叉搜索树元素个数



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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  var i = 0, res;

  postOrder(root);

  function postOrder(head) {
    if (!head) return;
    postOrder(head.right);
    i += 1;
    if (i === k) {
      res = head.val;
      return;
    }
    postOrder(head.left);
  }

  return res;
};
```