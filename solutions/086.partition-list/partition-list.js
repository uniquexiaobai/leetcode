/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	var lessList = new ListNode();
	var greatList = new ListNode();
	var l = lessList, g = greatList;

	while (head !== null) {
		if (head.val < x) {
			l.next = new ListNode(head.val);
			l = l.next;
		} else {
			g.next = new ListNode(head.val);
			g = g.next;
		}
		head = head.next;
	}
	l.next = greatList.next;

	return lessList.next;
};