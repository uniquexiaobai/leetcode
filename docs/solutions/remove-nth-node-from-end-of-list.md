---
id: remove-nth-node-from-end-of-list
title: 19. Remove Nth Node From End of List
---

# Remove Nth Node From End of List

给定一个链表，删除链表的倒数第 _n _个节点，并且返回链表的头结点。

**示例：**

给定一个链表: **1->2->3->4->5**, 和 **_n_ = 2**. 当删除了倒数第二个节点后，链表变为 **1->2->3->5**.

**说明：**

给定的 _n_ 保证是有效的。

**进阶：**

你能尝试使用一趟扫描实现吗？



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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var dummy = new ListNode(), slow = dummy, fast = dummy;

  dummy.next = head;

  while (n >= 0) { // 找到倒数第 n - 1 个节点
    fast = fast.next;
    n -= 1;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
```