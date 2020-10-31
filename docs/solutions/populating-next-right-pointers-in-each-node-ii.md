---
id: populating-next-right-pointers-in-each-node-ii
title: 117. Populating Next Right Pointers in Each Node II
---

# Populating Next Right Pointers in Each Node II

给定一个二叉树

struct Node { int val; Node \*left; Node \*right; Node \*next; }

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 `NULL`。

初始状态下，所有 next 指针都被设置为 `NULL`。



**进阶：**

-   你只能使用常量级额外空间。
-   使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。



**示例：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/15/117_sample.png)

**输入**：root = \[1,2,3,4,5,null,7] **输出：**\[1,#,2,3,#,4,5,7,#] **解释：**给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。



**提示：**

-   树中的节点数小于 `6000`
-   `-100 <= node.val <= 100`






```javascript
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;

    var queue = [root], i, len, curr, node;

    while (queue.length) {
      curr = null;

      for (i = 0, len = queue.length; i < len; i++) {
        node = queue.shift();
        if (!curr) {
          curr = node;
        } else {
          curr.next = node;
          curr = curr.next;
        }

        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    return root;
};
```