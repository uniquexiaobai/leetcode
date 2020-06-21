---
id: merge-two-sorted-lists
title: 21. Merge Two Sorted Lists
---

# Merge Two Sorted Lists

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。



**示例：**

**输入：**1->2->4, 1->3->4 **输出：**1->1->2->3->4->4



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
/*
var mergeTwoLists = function(l1, l2) {
    var head = new ListNode(null),
        curr = head;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            curr.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    while (l1) {
        curr.next = new ListNode(l1.val);
        l1 = l1.next;
        curr = curr.next;
    }
    
    while (l2) {
        curr.next = new ListNode(l2.val);
        l2 = l2.next;
        curr = curr.next;
    }
    
    return head.next;
};
*/

var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    
    var head = new ListNode(null),
        curr = head;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    curr.next = (l1 || l2);
    
    return head.next;
}
```