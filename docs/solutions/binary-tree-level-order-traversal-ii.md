---
id: binary-tree-level-order-traversal-ii
title: 107. Binary Tree Level Order Traversal II
---

# Binary Tree Level Order Traversal II

给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：  
给定二叉树 `[3,9,20,null,null,15,7]`,

3 / \\ 9 20 / \\ 15 7

返回其自底向上的层次遍历为：

\[ \[15,7], \[9,20], \[3] ]



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
var levelOrderBottom = function(root) {
    if (!root) return [];
    
    var res = [],
        queue = [root],
        i,
        len,
        curr,
        tmp;
    
    while (queue.length) {
        tmp = [];
        
        for (i = 0, len = queue.length; i < len; i++) {
            curr = queue.shift();
            tmp.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        
        res.unshift(tmp);
    }
    
    return res;
};
```