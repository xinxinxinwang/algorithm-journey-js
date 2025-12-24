//前序  https://leetcode.cn/problems/binary-tree-preorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    //保持结果
    let result = []
    //函数内部递归
    const traversal = function (node) {
        if (node == null || node.val == null) {
            return
        }
        result.push(node.val)
        traversal(node.left)
        traversal(node.right)
    }
    traversal(root)
    return result
};
/**
 * 非递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let result = [];
    if (root != null) {
        let stack = [];
        stack.push(root)
        while (stack.length != 0) {
            let node = stack.pop()
            result.push(node.val)
            if (node.right != null) {
                stack.push(node.right)
            }
            if (node.left != null) {
                stack.push(node.left)
            }
        }
    }
    return result;
};
//后序 https://leetcode.cn/problems/binary-tree-postorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let result = [];
    const traversal = function (node) {
        if (node == null) {
            return
        }
        traversal(node.left)
        traversal(node.right)
        result.push(node.val)
    }
    traversal(root)
    return result;
};
/**
 * 非递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let result = [];
    if (root != null) {
        let stack = [];
        stack.push(root);
        while (stack.length != 0) {
            let node = stack.pop();
            result.push(node.val)
            if (node.left != null) {
                stack.push(node.left)
            }
            if (node.right != null) {
                stack.push(node.right)
            }
        }
    }
    return result.reverse()
};

//中序 https://leetcode.cn/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let result = []
    const traversal = function (node) {
        if (node == null) {
            return
        }
        traversal(node.left)
        result.push(node.val)
        traversal(node.right)
    }
    traversal(root)
    return result
};
/**
 * 非递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let result = [];
    if (root != null) {
        let stack = []
        while (stack.length != 0 || root != null) {
            //先处理左边，左边不为空就一直处理，直到左边为空就弹出，弹出即是标记处理的节点
            if (root != null) {
                stack.push(root)
                //指针一直往左跳
                root = root.left
            } else {
                //处理节点
                root = stack.pop()
                result.push(root.val)
                //向右跳
                root = root.right
            }
        }
    }
    return result

};