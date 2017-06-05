/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 
/*
var isBalanced = function(root) {
	if (!root) return true;
	if (Math.abs(getDepth(root.left, 1) - getDepth(root.right, 1)) > 1) return false;
	return isBalanced(root.left) && isBalanced(root.right);
};

function getDepth(node, depth = 0) {
	if (!node) return depth;
	return Math.max(getDepth(node.left, depth + 1), getDepth(node.right, depth + 1));
}
*/

var isBalanced = function(root) {
	function getDepth(node) {
		if (!node) return 0;

		var dl = getDepth(node.left);
		if (dl === -1) return -1;

		var dr = getDepth(node.right);
		if (dr === -1) return -1;
		
		if (Math.abs(dl - dr) > 1) return -1;
		return Math.max(dl, dr) + 1;
	}

	if (!root) return true;
	if (getDepth(root) === -1) return false;
	return true;
};
