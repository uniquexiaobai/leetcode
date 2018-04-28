/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
	var result = [];
	var queue = [];
	var isReverse = false;

	queue.push(root);
	while (queue.length) {
		var size = queue.length;
		var temp = [];

		for (var i = 0; i < size; i ++) {
			var head = queue.shift();

			isReverse ? temp.unshift(head.val) : temp.push(head.val);
			if (head.left) 
				queue.push(head.left);
			if (head.right)
				queue.push(head.right);
		}

		result.push(temp);
		temp = [];
		isReverse = !isReverse;
	}

	return result;
};