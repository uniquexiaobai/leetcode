/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	var dummyHead = new ListNode();
	var cur = dummyHead;
	
	dummyHead.next = head;
	while (cur.next !== null) {
		if (cur.next.val === val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return dummyHead.next;
};
