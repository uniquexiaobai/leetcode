---
id: binary-tree-zigzag-level-order-traversal
title: 103. Binary Tree Zigzag Level Order Traversal
---

# Binary Tree Zigzag Level Order Traversal

给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：  
给定二叉树 `[3,9,20,null,null,15,7]`,

3 / \\ 9 20 / \\ 15 7

返回锯齿形层次遍历如下：

\[ \[3], \[20,9], \[15,7] ]



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
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    var res = [],
        queue = [root],
        inverse = false,
        tmp,
        i,
        len,
        curr;
    
    while (queue.length) {
        tmp = [];
        
        for (i = 0, len = queue.length; i < len; i++) {
            curr = queue.shift();
            inverse ? tmp.unshift(curr.val) : tmp.push(curr.val);
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        
        inverse = !inverse;
        res.push(tmp);
    }
    
    return res;
};
```