---
id: partition-list
title: 86. Partition List
---

# Partition List

给定一个链表和一个特定值_ x_，对链表进行分隔，使得所有小于 _x_ 的节点都在大于或等于 _x_ 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。



**示例:**

**输入:** head = 1->4->3->2->5->2, _x_ = 3 **输出:** 1->2->2->4->3->5



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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	var lessList = new ListNode();
	var greatList = new ListNode();
	var l = lessList, g = greatList;

	while (head !== null) {
		if (head.val < x) {
			l.next = new ListNode(head.val);
			l = l.next;
		} else {
			g.next = new ListNode(head.val);
			g = g.next;
		}
		head = head.next;
	}
	l.next = greatList.next;

	return lessList.next;
};
```