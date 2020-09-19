/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start

/**
 * 
 * @param {string} t 
 * @param {string} s 
 * @return {boolean}
 */
let check = function (t, s) {
  let lenx = s.length / t.length;
  let ans = '';
  for (let i = 0; i < lenx; i++) {
    ans += t;
  }
  return ans === s;
}

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let sl1 = str1.length;
  let sl2 = str2.length;
  let min_str = sl1 < sl2 ? str1 : str2;
  for (let i = min_str.length; i > 0; i--) {
    if (sl1 % i === 0 && sl2 % i === 0) {
      let t = min_str.substr(0, i);
      if (check(t, str1) && check(t, str2)) return t;
    }
  }
  return '';
};
// @lc code=end

