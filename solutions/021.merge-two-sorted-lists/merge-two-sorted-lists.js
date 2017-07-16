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
var mergeTwoLists = function(l1, l2) {
	if (l1 === null || l2 === null) return l1 || l2;
	var dummyHead = new ListNode();
	dummyHead.next = l1;
	var cur = dummyHead;

	while (cur.next) {
		if (l2 === null) {
			break;
		}
		if (l2.val < cur.next.val) {
			var temp = cur.next;

			cur.next = l2;
			l2 = l2.next;
			cur.next.next = temp;
		}
		cur = cur.next;
	}
	if (l2) {
		cur.next = l2;
	}

	return dummyHead.next;
};
