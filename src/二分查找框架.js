
// int binarySearch(int[] nums,target) {
//   int left = 0, right = ...;
//   while(...) {
//     int mid = left + (right - left)  / 2;
//     if(nums[mid] === target) {
//       ...
//     } 
//     else if(nums[mid] < target) {
//       left = ...;
//     }
//     else if(nums[mid] > target) {
//       right = ...;
//     }
//   }
//   return ...;
// }


int binary_search(int[] nums, int target) {
  int left = 0, right = nums.length - 1;
  while(left <= right) {
    int mid = left + (right - left)  / 2;
    if(nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
    else if(nums[mid] === target) {
      return mid;
    }
  }
  return -1;
}