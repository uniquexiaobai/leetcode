---
id: linked-list-cycle
title: 141. Linked List Cycle
---

# Linked List Cycle

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。



**示例 1：**

**输入：**head = \[3,2,0,-4], pos = 1 **输出：**true **解释：**链表中有一个环，其尾部连接到第二个节点。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

**示例 2：**

**输入：**head = \[1,2], pos = 0 **输出：**true **解释：**链表中有一个环，其尾部连接到第一个节点。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

**示例 3：**

**输入：**head = \[1], pos = -1 **输出：**false **解释：**链表中没有环。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)



**进阶：**

你能用 _O(1)_（即，常量）内存解决此问题吗？



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
 * @return {boolean}
 */
var hasCycle = function(head) {
	var fast = head,
		slow = head;

	while (fast && fast.next && fast.next.next) {
		fast = fast.next.next;
		slow = slow.next;

		if (fast === slow) return true;
	}

    return false;
};
```