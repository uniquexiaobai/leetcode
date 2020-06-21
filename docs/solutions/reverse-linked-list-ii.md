---
id: reverse-linked-list-ii
title: 92. Reverse Linked List II
---

# Reverse Linked List II

反转从位置 _m_ 到 _n_ 的链表。请使用一趟扫描完成反转。

**说明:**  
1 ≤ _m_ ≤ _n_ ≤ 链表长度。

**示例:**

**输入:** 1->2->3->4->5->NULL, _m_ = 2, _n_ = 4 **输出:** 1->4->3->2->5->NULL



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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
	if (head === null || head.next === null || m >= n) return head;
	var dummyHead = new ListNode();
	var start = dummyHead;

	dummyHead.next = head;
	for (var i = 1; i < m; i ++) {
		start = start.next;
	}
	var prev = start.next;
	var cur = prev.next;
	for (i = m; i < n; i ++) {
		var temp = cur.next;

		cur.next = prev;
		prev = cur;
		cur = temp;
	}
	start.next.next = cur;
	start.next = prev;

	return dummyHead.next;
};

```