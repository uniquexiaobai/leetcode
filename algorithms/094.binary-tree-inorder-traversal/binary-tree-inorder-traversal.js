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
var inorderTraversal = function(root) {
    if (!root) return [];
    
    var result = [];
    var stack = [];
    
    stack.push({ command: 'go', node: root });
    while (stack.length) {
        var top = stack.pop();
        
        if (top.command === 'return') {
            result.push(top.node.val);
        } else {
            if (top.node.right) 
                stack.push({ command: 'go', node: top.node.right });
            stack.push({ command: 'return', node: top.node });
            if (top.node.left) 
                stack.push({ command: 'go', node: top.node.left });
        }
    }
    return result;
};