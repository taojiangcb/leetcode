/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let num_str = str && str.trim().match(/^[\+\-]?\d+/gi);
  if (!num_str) return 0;
  // console.log(num_str);
  let num = Number(num_str);
  return Math.min(2 ** 31 - 1, Math.max((-2) ** 31, num));
};
// @lc code=end

