/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let subnums = nums1
    .concat(nums2)
    .sort((a, b) => {
      return a - b;
    });

  if (subnums.length === 1) return subnums[0];
  let ci = Math.floor(subnums.length / 2);
  if (ci % 2 === 0) {
    return (subnums[ci - 1] + subnums[ci]) / 2;
  }
  else {
    return subnums[ci];
  }
};
// @lc code=end

