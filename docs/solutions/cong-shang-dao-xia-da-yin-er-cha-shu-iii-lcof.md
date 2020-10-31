---
id: cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof
title: 100314. 从上到下打印二叉树 III LCOF
---

# 从上到下打印二叉树 III LCOF

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。



例如:  
给定二叉树: `[3,9,20,null,null,15,7]`,

3 / \\ 9 20 / \\ 15 7

返回其层次遍历结果：

\[ \[3], \[20,9], \[15,7] ]



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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  var result = [], queue = [root], curr, i, len, acc, flag = false;

  while (queue.length) {
    acc = [];
    for (i = 0, len = queue.length; i < len; i++) {
      curr = queue.shift();
      acc.push(curr.val);

      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    
    if (flag) acc.reverse();
    flag = !flag;
    result.push(acc);
  }

  return result;
};
```