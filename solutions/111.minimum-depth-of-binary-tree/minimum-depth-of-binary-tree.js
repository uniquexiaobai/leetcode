/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 
/*
var minDepth = function(root) {
	function _minDepth(node) {
		if (node === null) return 0;
		if (node.left === null && node.right === null) return 1; 
		if (node.left === null) return _minDepth(node.right) + 1;
		if (node.right === null) return _minDepth(node.left) + 1;
		return Math.min(_minDepth(node.left), _minDepth(node.right)) + 1;
	}

	return _minDepth(root);
};
*/

var minDepth = function(root) {
	if (root === null) return 0;
	var queue = [root];
	var result = 0;

	while (queue.length) {
		result ++;
		for (var i = 0, len = queue.length; i < len; i ++) {
			var node = queue.shift();

			if (!node.left && !node.right) return result; 
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}
	return result;
};