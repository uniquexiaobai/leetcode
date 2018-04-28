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
var maxDepth = function(root) {
	function _maxDepth(node) {
		if (node === null) return 0;
		return Math.max(_maxDepth(node.left), _maxDepth(node.right)) + 1;
	}

	return _maxDepth(root);
};