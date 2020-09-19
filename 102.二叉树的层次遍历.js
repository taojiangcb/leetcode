/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function eachLayout(node, ans, layer) {
  if (layer >= ans.length && (node.left || node.right) ) ans.push([]);
  let layers = ans[layer];
  if (node.left) {
    layers.push(node.left.val);
    eachLayout(node.left, ans,layer + 1);
  }
  if (node.right) {
    layers.push(node.right.val);
    eachLayout(node.right, ans,layer + 1);
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (root && (root.val || root.val === 0)) {
    res.push([root.val]);
    eachLayout(root, res, 1);
  }
  return res;
};
// @lc code=end


