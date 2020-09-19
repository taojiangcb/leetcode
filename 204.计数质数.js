/*
 * @lc app=leetcode.cn id=204 lang=javascript
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;

  let isPrimes = new Array(n);
  isPrimes.fill(true);

  for (let i = 2; i < n; i++) {
    if (isPrimes[i]) {
      for (let j = 2 * i; j < n; j += i) {
        isPrimes[j] = false;
      }
    }
  }

  for (let i = 2; i < n; i++) {
    if (isPrimes[i]) count++;
  }
  return count;
};
// @lc code=end

