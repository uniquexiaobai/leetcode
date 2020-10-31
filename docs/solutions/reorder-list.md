---
id: reorder-list
title: 143. Reorder List
---

# Reorder List

给定一个单链表 _L_：_L_0→_L_1→…→_L__n_-1→_L_n ，  
将其重新排列后变为： _L_0→_L__n_→_L_1→_L__n_-1→_L_2→_L__n_-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

**示例 1:**

给定链表 1->2->3->4, 重新排列为 1->4->2->3.

**示例 2:**

给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.



```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/**
 * 找中点 -> 反转后半段 -> 合并
 */
var reorderList = function(head) {
    var slow = head,
      fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    var prev = null, curr = slow, next;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    var l1 = head, l2 = prev, t1, t2, dummy = new ListNode(), curr = dummy;
    while (l1 && l2) {
      t1 = l1.next;
      t2 = l2.next;
      curr.next = l1;
      curr.next.next = l2;
      curr = curr.next.next;
      l1 = t1;
      l2 = t2;
    }
    curr.next = l2;

    return dummy.next;
};

```