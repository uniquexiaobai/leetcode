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
var isSymmetric = function(root) {
	function _isSymmetric(lt, rt) {
		if (!lt && !rt) return true;
		if (!lt || !rt || lt.val !== rt.val) return false;
		return _isSymmetric(lt.left, rt.right) && _isSymmetric(lt.right, rt.left);
	}

	if (!root) return true;
	return _isSymmetric(root.left, root.right);
};