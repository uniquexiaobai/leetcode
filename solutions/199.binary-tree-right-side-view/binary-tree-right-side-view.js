/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
	var result = [];
	var queue = [];

	queue.push(root);
	while (queue.length) {
	    var size = queue.length;
		var temp = [];

		for (var i = 0; i < size; i ++) {
			var head = queue.shift();

			temp.push(head.val);
			if (head.left)
				queue.push(head.left);
			if (head.right)
				queue.push(head.right);
		}

		result.push(temp.pop());
		temp.length = 0;
	}

	return result;
};