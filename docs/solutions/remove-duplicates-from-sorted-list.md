---
id: remove-duplicates-from-sorted-list
title: 83. Remove Duplicates from Sorted List
---

# Remove Duplicates from Sorted List

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

**示例 1:**

**输入:** 1->1->2 **输出:** 1->2

**示例 2:**

**输入:** 1->1->2->3->3 **输出:** 1->2->3



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
    if (head === null) return head;
	var cur = head;

	while (cur.next !== null) {
		if (cur.next.val === cur.val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return head;
};

```