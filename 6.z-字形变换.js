/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length < numRows) return s;
    if(numRows === 1) return s;
    let rows = new Array(numRows); rows.fill("");
    let r = 0; flag = 1;
    for(i = 0; i < s.length; i++) {
      rows[r] += s[i];
      r += flag;
      if(r === numRows - 1 || r === 0) flag *= -1;
    }
    let res = "";
    rows.forEach(Element=>(res += Element));
    return res;

    
};
// @lc code=end

