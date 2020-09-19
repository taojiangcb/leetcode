/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || s.length < 1) return "";
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = formCenter(s, i, i);
    let len2 = formCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len -1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  console.log(start, end);
  return s.substring(start, end + 1);
}

function formCenter(s, l, r) {
  let L = l, R = r;
  while (L >= 0 && R <= s.length - 1 && s[L] == s[R]) {
    L--;
    R++;
  }
  return R - L - 1;

}

// @lc code=end

