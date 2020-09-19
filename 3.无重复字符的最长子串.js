/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function CharsGroup() {
    this.start = 0;
    this.chars = [];
}

var lengthOfLongestSubstring = function(val) {
    if (val === " ") return 1;
    if (!val) return 0;
    var charsGroup = [];
    var curGroup = new CharsGroup();
    for (var i = 0; i < val.length; i++) {
        var char = val[i];
        var childCharIndex = curGroup.chars.indexOf(char);
        if (childCharIndex === -1) {
            curGroup.chars.push(char);
        } else {
            i = childCharIndex + curGroup.start + 1;
            charsGroup.push(curGroup);
            curGroup = new CharsGroup();
            curGroup.start = i;
            curGroup.chars.push(val[i]);
        }
    }

    charsGroup.forEach(childGroup => {
        curGroup = curGroup.chars.length > childGroup.chars.length ? curGroup : childGroup;
    });
    return curGroup.chars.length;
};

// @lc code=end

