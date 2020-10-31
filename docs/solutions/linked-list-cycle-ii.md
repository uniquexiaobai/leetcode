---
id: linked-list-cycle-ii
title: 142. Linked List Cycle II
---

# Linked List Cycle II

给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 `null`。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。**注意，`pos` 仅仅是用于标识环的情况，并不会作为参数传递到函数中。**

**说明：**不允许修改给定的链表。

**进阶：**

-   你是否可以使用 `O(1)` 空间解决此题？



**示例 1：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

**输入：**head = \[3,2,0,-4], pos = 1 **输出：**返回索引为 1 的链表节点 **解释：**链表中有一个环，其尾部连接到第二个节点。

**示例 2：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

**输入：**head = \[1,2], pos = 0 **输出：**返回索引为 0 的链表节点 **解释：**链表中有一个环，其尾部连接到第一个节点。

**示例 3：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

**输入：**head = \[1], pos = -1 **输出：**返回 null **解释：**链表中没有环。



**提示：**

-   链表中节点的数目范围在范围 `[0, 104]` 内
-   `-105 <= Node.val <= 105`
-   `pos` 的值为 `-1` 或者链表中的一个有效索引



```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 至相遇处，满指针走过 x + y 的路程，快指针走过 x + y + z + x 的路程
 * (x + y) * 2 === x + y + z + x 推出：y === z
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null;
    
    var slow = head,
        fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {

          while (fast && slow) {
            fast = head;

            while (slow !== fast) {
              slow = slow.next;
              fast = fast.next;
            }
            return fast;
          }
        }
    }
    
    return null;
};
```