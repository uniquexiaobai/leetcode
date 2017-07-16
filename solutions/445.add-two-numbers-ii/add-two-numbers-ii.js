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
	var stack1 = [], stack2 = [];

	while (l1 !== null) {
		stack1.unshift(l1.val);
		l1 = l1.next;
	}
	while (l2 !== null) {
		stack2.unshift(l2.val);
		l2 = l2.next;
	}

	var res = [];
	var flag = 0;
	for (var i = 0, len = Math.max(stack1.length, stack2.length); i < len; i ++) {
		var sum = flag;

		if (stack1[i] === undefined) {
			sum += stack2[i];
		} else if (stack2[i] === undefined) {
			sum += stack1[i];
		} else {
			sum = sum + stack1[i] + stack2[i];
		}
		flag = ~~(sum / 10);
		res.unshift(sum % 10);
	}
	if (flag !== 0) res.unshift(flag);

	var list = new ListNode();
	var cur = list;
	res.forEach((val) => {
		cur.next = new ListNode(+val);
		cur = cur.next;
	});
	
	return list.next;
};
