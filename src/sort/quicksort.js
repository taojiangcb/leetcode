
/**
 * 快速排序
 * @param {Array<number>} nums    // 数组
 * @param {Function} fun          // 比对大小 默认 小的放左边区间 大的放右边区间
 */
const quickSort = function (nums, fun = (a, b) => (a < b)) {
  
  const len = nums.length;
  if (len <= 1) return nums;
  //取中间值
  const pivot = nums[len >> 1];
  //左右区间
  const l = [], r = [];   

  for (let i = 0; i < len; i++) {
    if (nums[i] === pivot) continue;
    fun(nums[i], pivot)       //比对大小
      ? l.push(nums[i])       //左边区间
      : r.push(nums[i]);      //右边区间
  }
  // 递归拆分细化
  return quickSort(l, fun).concat([pivot], quickSort(r, fun));
}