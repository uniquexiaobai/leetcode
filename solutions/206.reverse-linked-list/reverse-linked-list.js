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
var reverseList = function(head) {
    var prev = null,
    	cur = head,
    	next;

    while (cur) {
    	next = cur.next;
    	cur.next = prev;
    	prev = cur;
    	cur = next;
    }

    return prev;
};