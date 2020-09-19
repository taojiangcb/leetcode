/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length == 0) return -1;
  let left = 0; right = nums.length - 1;
  while (left <= right) {
    let pivot = left + (right - left >> 1);
    let v = nums[pivot];
    if (v === target) {
      return pivot;
    }
    //在左边
    else if (v > target) {
      right = pivot - 1;
    }
    //在右边
    else {
      left = pivot + 1;
    }
  }
  return -1;
};
// @lc code=end

