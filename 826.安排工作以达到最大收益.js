/*
 * @lc app=leetcode.cn id=826 lang=javascript
 *
 * [826] 安排工作以达到最大收益
 */

// @lc code=start
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {

  let N = difficulty.length;
  let points = [];
  for (let i = 0; i < N; i++) {
    points.push({ x: difficulty[i], y: profit[i] });
  }

  points.sort((a, b) => a.x - b.x);
  worker.sort();

  let ans = 0; n = worker.length;

  for (let i = 0; i < n; i++) {
    let best = 0;
    for (let j = 0; j < N; j++) {
      if (worker[i] >= points[j].x) {
        best = Math.max(best, points[j].y);
      }
    }
    ans += best;
  }
  return ans;
};
// @lc code=end

