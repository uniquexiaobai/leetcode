---
id: swap-nodes-in-pairs
title: 24. Swap Nodes in Pairs
---

# Swap Nodes in Pairs

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

**你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。



**示例:**

给定 `1->2->3->4`, 你应该返回 `2->1->4->3`.



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
var swapPairs = function(head) {
	var dummy = new ListNode(),
		pre = dummy,
		a, b, next;
	
	pre.next = head;

	while (pre.next && pre.next.next) {
		a = pre.next;
		b = a.next;

		next = b.next;
		b.next = a;
		a.next = next;

		pre.next = b;
		pre = a;
	}

	return dummy.next;
};

```