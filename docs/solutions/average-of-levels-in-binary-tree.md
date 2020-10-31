---
id: average-of-levels-in-binary-tree
title: 637. Average of Levels in Binary Tree
---

# Average of Levels in Binary Tree

给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。



**示例 1：**

**输入：** 3 / \\ 9 20 / \\ 15 7 **输出：**\[3, 14.5, 11] **解释：** 第 0 层的平均值是 3 , 第1层是 14.5 , 第2层是 11 。因此返回 \[3, 14.5, 11] 。



**提示：**

-   节点值的范围在32位有符号整数范围内。



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
var averageOfLevels = function(root) {
    if (!root) return [];
    
    var res = [],
        queue = [root],
        len,
        i,
        tmp,
        curr;
    
    while (queue.length) {
        tmp = [];
        
        for (i = 0, len = queue.length; i < len; i++) {
            curr = queue.shift();
            tmp.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        
        res.push(tmp.reduce((sum, val) => sum + val, 0) / tmp.length);
    }
    
    return res;
};
```