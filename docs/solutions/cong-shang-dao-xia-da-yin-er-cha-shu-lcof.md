---
id: cong-shang-dao-xia-da-yin-er-cha-shu-lcof
title: 100311. 从上到下打印二叉树 LCOF
---

# 从上到下打印二叉树 LCOF

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。



例如:  
给定二叉树: `[3,9,20,null,null,15,7]`,

3 / \\ 9 20 / \\ 15 7

返回：

\[3,9,20,15,7]



**提示：**

1.  `节点总数 <= 1000`



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
var levelOrder = function(root) {
  if (!root) return [];

  var result = [], queue = [root], curr;

  while (queue.length) {
    curr = queue.shift();
    result.push(curr.val);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return result;
};
```