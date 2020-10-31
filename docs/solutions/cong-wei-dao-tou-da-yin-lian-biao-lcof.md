---
id: cong-wei-dao-tou-da-yin-lian-biao-lcof
title: 100282. 从尾到头打印链表 LCOF
---

# 从尾到头打印链表 LCOF

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。



**示例 1：**

**输入：**head = \[1,3,2] **输出：**\[2,3,1]



**限制：**

`0 <= 链表长度 <= 10000`



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
 * @return {number[]}
 */
var reversePrint = function(head) {
  var stack = [];

  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  stack.reverse();
  
  return stack;
};
```