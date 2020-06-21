---
id: add-two-numbers-ii
title: 445. Add Two Numbers II
---

# Add Two Numbers II

给你两个 **非空 **链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。



**进阶：**

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。



**示例：**

**输入：**(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4) **输出：**7 -> 8 -> 0 -> 7



```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var stack1 = [], stack2 = [];

	while (l1 !== null) {
		stack1.unshift(l1.val);
		l1 = l1.next;
	}
	while (l2 !== null) {
		stack2.unshift(l2.val);
		l2 = l2.next;
	}

	var res = [];
	var flag = 0;
	for (var i = 0, len = Math.max(stack1.length, stack2.length); i < len; i ++) {
		var sum = flag;

		if (stack1[i] === undefined) {
			sum += stack2[i];
		} else if (stack2[i] === undefined) {
			sum += stack1[i];
		} else {
			sum = sum + stack1[i] + stack2[i];
		}
		flag = ~~(sum / 10);
		res.unshift(sum % 10);
	}
	if (flag !== 0) res.unshift(flag);

	var list = new ListNode();
	var cur = list;
	res.forEach((val) => {
		cur.next = new ListNode(+val);
		cur = cur.next;
	});
	
	return list.next;
};

```