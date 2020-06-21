---
id: remove-duplicates-from-sorted-list-ii
title: 82. Remove Duplicates from Sorted List II
---

# Remove Duplicates from Sorted List II

给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 _没有重复出现 _的数字。

**示例 1:**

**输入:** 1->2->3->3->4->4->5 **输出:** 1->2->5

**示例 2:**

**输入:** 1->1->1->2->3 **输出:** 2->3



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
var deleteDuplicates = function(head) {
	if (head === null || head.next === null) return head;
	var dummyHead = new ListNode();
	dummyHead.next = head;
	var cur = dummyHead;

	while (cur.next !== null && cur.next.next !== null) {
		if (cur.next.val === cur.next.next.val) {
			var val = cur.next.val;

			while (cur.next !== null && cur.next.val === val) {
				cur.next = cur.next.next;
			}
		} else {
			cur = cur.next;
		}
	}

	return dummyHead.next;
};

```