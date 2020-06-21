---
id: remove-linked-list-elements
title: 203. Remove Linked List Elements
---

# Remove Linked List Elements

删除链表中等于给定值 **_val _**的所有节点。

**示例:**

**输入:** 1->2->6->3->4->5->6, _**val**_ = 6 **输出:** 1->2->3->4->5



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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	var dummyHead = new ListNode();
	var cur = dummyHead;
	
	dummyHead.next = head;
	while (cur.next !== null) {
		if (cur.next.val === val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return dummyHead.next;
};

```