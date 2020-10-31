---
id: two-sum-iv-input-is-a-bst
title: 653. Two Sum IV - Input is a BST
---

# Two Sum IV - Input is a BST

给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

**案例 1:**

**输入:** 5 / \\ 3 6 / \\ \\ 2 4 7 Target = 9 **输出:** True



**案例 2:**

**输入:** 5 / \\ 3 6 / \\ \\ 2 4 7 Target = 28 **输出:** False




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
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (!root) return false;

  var list = [];
  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    list.push(node.val);
    inOrder(node.right);
  }
  inOrder(root);

  var l = 0, r = list.length - 1;
  while (l < r) {
    if (list[l] + list[r] === k) return true;
    if (list[l] + list[r] > k) {
      r -= 1;
    } else {
      l += 1;
    }
  }

  return false;
};
```