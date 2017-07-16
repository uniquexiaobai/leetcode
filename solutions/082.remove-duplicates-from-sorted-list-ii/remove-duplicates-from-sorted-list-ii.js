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
var deleteDuplicates = function(head) {
	if (head === null || head.next === null) return head;
	var dummyHead = new ListNode();
	dummyHead.next = head;
	var cur = dummyHead;

	while (cur.next !== null && cur.next.next !== null) {
		if (cur.next.val === cur.next.next.val) {
			var val = cur.next.val;

			while (cur.next !== null && cur.next.val === val) {
				cur.next = cur.next.next;
			}
		} else {
			cur = cur.next;
		}
	}

	return dummyHead.next;
};
