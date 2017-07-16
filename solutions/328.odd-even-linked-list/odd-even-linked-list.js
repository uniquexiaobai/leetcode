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
var oddEvenList = function(head) {
	if (!head || !head.next) return head;
	var odd = head, even = head.next;

	while (even && even.next) {
		var temp = odd.next;

		odd.next = even.next;
		even.next = even.next.next;
		odd.next.next = temp;

		odd = odd.next;
		even = even.next;
	}
	return head;
};