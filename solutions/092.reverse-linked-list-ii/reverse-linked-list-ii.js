/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
	if (head === null || head.next === null || m >= n) return head;
	var dummyHead = new ListNode();
	var start = dummyHead;

	dummyHead.next = head;
	for (var i = 1; i < m; i ++) {
		start = start.next;
	}
	var prev = start.next;
	var cur = prev.next;
	for (i = m; i < n; i ++) {
		var temp = cur.next;

		cur.next = prev;
		prev = cur;
		cur = temp;
	}
	start.next.next = cur;
	start.next = prev;

	return dummyHead.next;
};
