---
id: swap-nodes-in-pairs
title: 24. Swap Nodes in Pairs
---

# Swap Nodes in Pairs

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

**你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。



**示例 1：**

![](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)

**输入：**head = \[1,2,3,4] **输出：**\[2,1,4,3]

**示例 2：**

**输入：**head = \[] **输出：**\[]

**示例 3：**

**输入：**head = \[1] **输出：**\[1]



**提示：**

-   链表中节点的数目在范围 `[0, 100]` 内
-   `0 <= Node.val <= 100`



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