---
id: reverse-linked-list
title: 206. Reverse Linked List
---

# Reverse Linked List

反转一个单链表。

**示例:**

**输入:** 1->2->3->4->5->NULL **输出:** 5->4->3->2->1->NULL

**进阶:**  
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？



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
var reverseList = function(head) {
    if (!head) return head;
    
    var prev = null,
        next;
    
    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    
    return prev;
};
```