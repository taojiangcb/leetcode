/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if(strs.length < 2) return '';
  console.log(strs);
  let res = '';
  let maxLen = strs.reduce((p, c) => {
    if (c.length > p) p = c.length;
    return p;
  }, 0);
  console.log(maxLen);
  let ans = '';
  for (let i = 0; i < maxLen; i++) {
    let char = strs[0][i];
    for(let j = 1; j < strs.length; j++) {
      const c = strs[j][i];
    }
    // for (let s of strs) {
    //   const c = s[i];
    //   console.log(char,c);
    //   if (c === undefined) {
    //     console.log('===> res',res);
    //     return res.length > 1 ? res : '';
    //   }
    //   if (!char) char = c;
    //   else if (char !== c) {
    //     if (ans.length > res.length) res = ans;
    //     ans = '';
    //   }
    // }
    ans += char;
  }
};
// @lc code=end

