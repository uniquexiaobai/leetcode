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
var postorderTraversal = function(root) {
    if (!root) return [];
    
    var result = [];
    var stack = [];
    
    stack.push({ go: root });
    while (stack.length) {
        var top = stack.pop();
        
        if (top['get']) {
            result.push(top.get.val);
        } else {
            stack.push({ get: top.go });
            if (top.go.right) 
                stack.push({ go: top.go.right });
            if (top.go.left)
                stack.push({ go: top.go.left });
        }
    }
    return result;
};