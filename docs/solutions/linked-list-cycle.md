---
id: linked-list-cycle
title: 141. Linked List Cycle
---

# Linked List Cycle

给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 `true` 。 否则，返回 `false` 。



**进阶：**

你能用 _O(1)_（即，常量）内存解决此问题吗？



**示例 1：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

**输入：**head = \[3,2,0,-4], pos = 1 **输出：**true **解释：**链表中有一个环，其尾部连接到第二个节点。

**示例 2：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

**输入：**head = \[1,2], pos = 0 **输出：**true **解释：**链表中有一个环，其尾部连接到第一个节点。

**示例 3：**

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

**输入：**head = \[1], pos = -1 **输出：**false **解释：**链表中没有环。



**提示：**

-   链表中节点的数目范围是 `[0, 104]`
-   `-105 <= Node.val <= 105`
-   `pos` 为 `-1` 或者链表中的一个 **有效索引** 。



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

/*
 * 解法一：变量标记法，对已遍历的链表节点添加唯一标识，缺点是修改了原有链表的值
 * 解法二：快慢指针法，慢指针每次走1步，快指针每次走两步，相遇则有环
 * 解法三：利用 JSON.stringify 不能字符串化含有循环引用的结构
 */
var hasCycle = function(head) {
  var slow = head, fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};

```