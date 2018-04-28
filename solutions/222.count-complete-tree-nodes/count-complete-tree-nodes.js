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
var countNodes = function(root) {
	if (!root) return 0;
	
	var ldepth = 0, rdepth = 0, lnode = root, rnode = root;
	while (lnode) { ldepth ++; lnode = lnode.left }
	while (rnode) { rdepth ++; rnode = rnode.right }

	if (ldepth === rdepth) return (1 << ldepth) - 1;
	return 1 + countNodes(root.left) + countNodes(root.right);
};
