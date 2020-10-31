---
id: cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof
title: 100312. 从上到下打印二叉树 II LCOF
---

# 从上到下打印二叉树 II LCOF

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。



例如:  
给定二叉树: `[3,9,20,null,null,15,7]`,

3 / \\ 9 20 / \\ 15 7

返回其层次遍历结果：

\[ \[3], \[9,20], \[15,7] ]



**提示：**

1.  `节点总数 <= 1000`

注意：本题与主站 102 题相同：<https://leetcode-cn.com/problems/binary-tree-level-order-traversal/>



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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  var result = [], queue = [root], curr, i, len, acc;

  while (queue.length) {
    acc = [];
    for (i = 0, len = queue.length; i < len; i++) {
      curr = queue.shift();
      acc.push(curr.val);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    
    result.push(acc);
  }

  return result;
};
```