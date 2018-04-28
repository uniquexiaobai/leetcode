/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	function _swapChildren(node) {
		var temp = node.left;

		node.left = node.right;
		node.right = temp;
	}

	function _invertTree(node) {
		if (node === null) return;

		_invertTree(node.left);
		_invertTree(node.right);
		_swapChildren(node);
	}

	_invertTree(root);
	return root;
};
