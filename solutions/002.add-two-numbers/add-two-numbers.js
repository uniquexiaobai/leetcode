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
var addTwoNumbers = function(l1, l2) {
	var flag = 0;
	var list = new ListNode();
	var cur = list;

	while (l1 !== null || l2 !== null) {
		var sum = flag;

		if (l1 === null) {
			sum += l2.val;
			l2 = l2.next;
		} else if (l2 === null) {
			sum += l1.val;
			l1 = l1.next;
		} else {
			sum = sum + l1.val + l2.val;
			l1 = l1.next;
			l2 = l2.next;
		}
		flag = ~~(sum / 10);
		cur.next = new ListNode(sum % 10);
		cur = cur.next;
	}
	if (flag !== 0) {
		cur.next = new ListNode(flag);
	}

	return list.next;
};
