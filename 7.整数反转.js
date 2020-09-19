/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let max_v = 2 ** 31 - 1;
  let min_v = (-2) ** 31;
  let sing = x > 0 ? 1 : -1;
  let str = sing > 0 ? String(x) : String(x).slice(1);
  
  let sv = str.split('')
    .reverse()
    .reduce((p, v) => {
      if (p) { return p += v; }
      else if (Number(v) > 0) { return v; }
    }, '')

  if (sv > max_v) return 0;
  if (sv < min_v) return 0;

  return sv * sing;
};
// @lc code=end

