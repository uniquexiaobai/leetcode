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
var levelOrderBottom = function(root) {
    if (root === null) return [];
	var queue = [];
	var result = [];

	queue.push(root);
	while (queue.length) {
		var size = queue.length;
		var temp = [];

		for (var i = 0; i < size; i ++) {
			var node = queue.shift();

			temp.push(node.val);
			if (node.left) {
				queue.push(node.left)
			}
			if (node.right) {
				queue.push(node.right);
			}
		}

		result.unshift(temp);
		temp = [];
	}

	return result;
};