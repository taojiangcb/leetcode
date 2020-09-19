/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  let newNode = new TreeNode(val);
  console.log(root);
  insertNode(root, newNode);
  return root;
};

const insertNode = function (oldNode, newNode) {
  if (oldNode.val > newNode.val) {
    if (oldNode.left == null) {
      oldNode.left = newNode;
    }
    else {
      insertNode(oldNode.left, newNode)
    }
  }
  else {
    if (oldNode.right == null) {
      oldNode.right = newNode;
    }
    else {
      insertNode(oldNode.right, newNode);
    }
  }
}


// @lc code=end

