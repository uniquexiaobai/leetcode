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
