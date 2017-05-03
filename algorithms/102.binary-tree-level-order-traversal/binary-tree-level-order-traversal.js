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
var levelOrder = function(root) {
    if (root === null) return [];
    var queue = [];
	var result = [];

	queue.push({ level: 0, node: root });
	while (queue.length) {
		var head = queue.shift();
		var level = head.level;
		var node = head.node;

		if (!result[level]) result[level] = [];
		result[level].push(node.val);
		if (node.left)
			queue.push({ level: level + 1, node: node.left });
		if (node.right)
			queue.push({ level: level + 1, node: node.right });
	}

	return result;
};