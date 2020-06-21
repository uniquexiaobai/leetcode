---
id: binary-tree-inorder-traversal
title: 94. Binary Tree Inorder Traversal
---

# Binary Tree Inorder Traversal

给定一个二叉树，返回它的_中序 _遍历。

**示例:**

**输入:** \[1,null,2,3] 1 \\ 2 / 3 **输出:** \[1,3,2]

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
var inorderTraversal = function(root) {
    if (!root) return [];
    
    var result = [];
    var stack = [];
    
    stack.push({ command: 'go', node: root });
    while (stack.length) {
        var top = stack.pop();
        
        if (top.command === 'return') {
            result.push(top.node.val);
        } else {
            if (top.node.right) 
                stack.push({ command: 'go', node: top.node.right });
            stack.push({ command: 'return', node: top.node });
            if (top.node.left) 
                stack.push({ command: 'go', node: top.node.left });
        }
    }
    return result;
};
```