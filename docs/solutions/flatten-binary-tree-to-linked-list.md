---
id: flatten-binary-tree-to-linked-list
title: 114. Flatten Binary Tree to Linked List
---

# Flatten Binary Tree to Linked List

给定一个二叉树，[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95/8010757)将它展开为一个单链表。



例如，给定二叉树

1 / \\ 2 5 / \\ \\ 3 4 6

将其展开为：

1 \\ 2 \\ 3 \\ 4 \\ 5 \\ 6



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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return null;
    
    function insertLast(node, last) {
        var curr = node;
        
        while (curr.right) {
            curr = curr.right;
        }
        curr.right = last;
    }
    
    var curr = root,
    	temp;
    
    while (curr) {
        if (curr.left && curr.right) {
            temp = curr.right;
            
            curr.right = curr.left;
            
            insertLast(curr.right, temp);
        } else {
            curr.right = curr.left || curr.right;
        }
        
        curr.left = null;

        curr = curr.right;
    }
    
    return root;
};
```